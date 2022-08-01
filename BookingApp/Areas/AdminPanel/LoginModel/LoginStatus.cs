using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookingApp.Areas.AdminPanel.LoginModel
{
    public class LoginStatus
    {
        public bool Status { get; set; }
        public string Error { get; set; }
        public string TargetURL { get; set; }
    }
}
