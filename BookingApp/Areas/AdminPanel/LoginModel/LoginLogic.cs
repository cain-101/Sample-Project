using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookingApp.Areas.AdminPanel.LoginModel
{
    public class LoginLogic
    {
        private List<AccountModel> accounts = new List<AccountModel>();

        public LoginLogic()
        {
            accounts.Add(new AccountModel
            {
                UserName = "Admin",
                Password = "swakerz0011",
                name = "Travel Agent",
                Roles = new string[] { "SuperAdmin", "Admin", "Guest" }
            });
            accounts.Add(new AccountModel
            {
                UserName = "user1",
                Password = "12345",
                name = "Admin",
                Roles = new string[] { "Admin", "Guest" }
            });
            accounts.Add(new AccountModel
            {
                UserName = "user2",
                Password = "12345",
                name = "Guest",
                Roles = new string[] { "Guest" }
            });
        }

        public AccountModel GetUser(string username)
        {
            return accounts.Where(a => a.UserName.Equals(username)).FirstOrDefault();
        }

        public AccountModel LoginAuth(string username, string password)
        {
            return accounts.Where(a => a.UserName.Equals(username) && a.Password.Equals(password)).FirstOrDefault();
        }
    }
}
