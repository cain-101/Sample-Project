using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Security
{
    public class Sessions
    {
        static string SessionUser = "username";

        public static string Username
        {
            get
            {
                if (HttpContext.Current == null)
                    return string.Empty;
                var sessionVar = HttpContext.Current.Session[SessionUser];
                if (sessionVar != null)
                    return sessionVar as string;
                return null;
            }
            set
            {
                HttpContext.Current.Session[SessionUser] = value;
            }
        }
    }
}