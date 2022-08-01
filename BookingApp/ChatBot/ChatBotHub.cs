using BookingApp.Models;
using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;

namespace BookingApp.ChatBot
{
    public class ChatBotHub:Hub
    {
        List<Agent> agents
        {
            get
            {
                if (HttpContext.Current.Cache["mTravel_agents"] != null)
                    return (List<Agent>)HttpContext.Current.Cache["mTravel_agents"];
                else
                {
                    List<Agent> agent = new List<Agent>();
                    HttpContext.Current.Cache.Add(
                        "mTravel_agents",
                        agent,
                        null,
                        DateTime.Now.AddHours(1),
                        TimeSpan.Zero,
                        System.Web.Caching.CacheItemPriority.Default,
                        null);
                    return agent;
                }
            }
        }

        public static ConcurrentDictionary<string, string> ChatSessions;

        public void AgentConnect(string name)
        {
            if (ChatSessions == null)
                ChatSessions = new ConcurrentDictionary<string, string>();

            var agent = new Agent()
            {
                Id = Context.ConnectionId,
                Name = name,
                IsOnline = true
            };
            agents.Add(agent);
            Clients.Caller.loginResult(true, agent.Id, agent.Name);
            Clients.All.onlineStatus(agents.Count(x => x.IsOnline) > 0);
        }

        public void ChangeStatus(bool online)
        {
            var agent = agents.SingleOrDefault(x => x.Id == Context.ConnectionId);
            if(agent != null)
            {
                agent.IsOnline = online;
                Clients.All.onlineStatus(agents.Count(x => x.IsOnline) > 0);
            }
        }

        public void EngageVisitor(string connectionId)
        {
            var agent = agents.SingleOrDefault(x => x.Id == Context.ConnectionId);
            if(agent != null)
            {
                ChatSessions.TryAdd(connectionId, agent.Id);
                Clients.Caller.newChat(connectionId);
                Clients.Client(connectionId).setChat(connectionId, agent.Name, false);
                Clients.Caller.addMessage(connectionId, "System", "You invited this visitor to chat..");
                Clients.Client(connectionId).addMessage(agent.Name, "Hey there. I'm " + agent.Name + " let me know if you have any questions.");
            }
        }

        public void LogVisitor(string page, string referrer, string existingChatId)
        {
            Clients.Caller.onlineStatus(agents.Count(x => x.IsOnline) > 0);
            if(!string.IsNullOrEmpty(existingChatId) && ChatSessions.ContainsKey(existingChatId))
            {
                var agentId = ChatSessions[existingChatId];
                Clients.Client(agentId).visitorSwitchPage(existingChatId, Context.ConnectionId, page);
                var agent = agents.SingleOrDefault(x => x.Id == agentId);
                if(agent != null)
                    Clients.Caller.setChat(Context.ConnectionId, agent.Name, true);
                string buffer = "";
                ChatSessions.TryRemove(existingChatId, out buffer);

                ChatSessions.TryAdd(existingChatId, agentId);
            }

            foreach(var a in agents)
            {
                var chatWith = (from e in ChatSessions
                                join b in agents on e.Value equals b.Id
                                where e.Key == Context.ConnectionId
                                select b.Name).SingleOrDefault();

                Clients.Client(a.Id).newVisit(page, referrer, chatWith, Context.ConnectionId);
            }
        }

        public void RequestChat(string message)
        {
            var workload = from a in agents
                           where a.IsOnline
                           select new
                           {
                               Id = a.Id,
                               Name = a.Name,
                               Count = ChatSessions.Count(x => x.Value == a.Id)
                           };
            if(workload == null)
            {
                Clients.Caller.addMessage("", "No agent are currently available!");
                return;
            }

            var lessBuzy = workload.OrderBy(x => x.Count).FirstOrDefault();

            if(lessBuzy == null)
            {
                Clients.Caller.addMessage("", "No agent are currently available!");
                return;
            }

            ChatSessions.TryAdd(Context.ConnectionId, lessBuzy.Id);
            Clients.Client(lessBuzy.Id).newChat(Context.ConnectionId);
            Clients.Caller.setChat(Context.ConnectionId, lessBuzy.Name, false);
            Clients.Client(lessBuzy.Id).addMessage(Context.ConnectionId, "Visitor", message);
            Clients.Caller.addMessage("Me", message);
        }

        public void Send(string data)
        {
            Clients.Caller.addMessage("Me", data);
            if (ChatSessions.ContainsKey(Context.ConnectionId))
            {
                var opId = ChatSessions[Context.ConnectionId];
                Clients.Client(opId).addMessage(Context.ConnectionId, "Visitor", data);
            }
            else
            {
                var workload = from a in agents
                               where a.IsOnline
                               select new
                               {
                                   Id = a.Id,
                                   Name = a.Name,
                                   Count = ChatSessions.Count(x => x.Value == a.Id)
                               };
                if(workload == null)
                {
                    Clients.Caller.addMessage("", "No agent are currently available.");
                    return;
                }

                var lessBuzy = workload.OrderBy(x => x.Count).FirstOrDefault();

                if(lessBuzy == null)
                {
                    Clients.Caller.addMessage("", "No agent are currently available.");
                    return;
                }
                ChatSessions.TryAdd(Context.ConnectionId, lessBuzy.Id);
                Clients.Client(lessBuzy.Id).newChat(Context.ConnectionId);
                Clients.Caller.setChat(Context.ConnectionId, lessBuzy.Name, false);
                Clients.Client(lessBuzy.Id).addMessage(Context.ConnectionId, "System", "This visitor appear to have lost their chat session.");
                Clients.Client(lessBuzy.Id).addMessage(Context.ConnectionId, "Visitor", data);
            }
        }


        public void OpSend(string id, string data)
        {
            var agent = agents.SingleOrDefault(x => x.Id == Context.ConnectionId);
            if (agent == null)
            {
                Clients.Caller.addMessage(id, "system", "We were unable to send your message, please reload the page.");
                return;
            }

            if (id == "internal")
            {
                foreach (var a in agents.Where(x => x.IsOnline))
                    Clients.Client(a.Id).addMessage(id, agent.Name, data);

            }
            else if (ChatSessions.ContainsKey(id))
            {
                Clients.Caller.addMessage(id, "You", data);
                Clients.Client(id).addMessage(agent.Name, data);
            }
        }

        public void CloseChat(string id)
        {
            if (ChatSessions.ContainsKey(id))
            {
                Clients.Client(id).addMessage("", "The agent close the chat session.");

                string buffer = "";
                ChatSessions.TryRemove(id, out buffer);
            }
        }

        public void LeaveChat(string id)
        {
            // was it an agent
            var agent = agents.SingleOrDefault(x => x.Id == id);
            if (agent != null)
            {
                agents.Remove(agent);

                var sessions = ChatSessions.Where(x => x.Value == agent.Id);
                if (sessions != null)
                {
                    foreach (var session in sessions)
                        Clients.Client(session.Key).addMessage("", "The agent was disconnected from chat.");
                }

                Clients.All.updateStatus(agents.Count(x => x.IsOnline) > 0);
            }

            // was it a visitor
            if (ChatSessions.ContainsKey(id))
            {
                var agentId = ChatSessions[id];
                Clients.Client(agentId).addMessage(id, "system", "The visitor close the connection.");
            }
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            return Clients.All.leave(Context.ConnectionId);
        }

        public void SendEmail(string from, string message)
        {
            var msg = new MailMessage();
            var c = "Mhyles Travel";
            var b = "<p>You received a message from {0}</p>\n" +
                        "<p>Message: {1}</p>";
            msg.To.Add("mhylestravel@gmail.com");
            msg.From = new MailAddress(from);
            msg.Subject = "Inquiring";
            msg.Body = string.Format(b, c, message);
            msg.IsBodyHtml = true;
            using (var client = new SmtpClient())
            {
                client.Send(msg);
            }
        }
    }
}