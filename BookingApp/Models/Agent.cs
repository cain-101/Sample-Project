using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Agent
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool IsOnline { get; set; }
    }
}