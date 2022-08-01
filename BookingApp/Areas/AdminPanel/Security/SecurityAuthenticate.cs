using BookingApp.Areas.AdminPanel.LoginModel;
using BookingApp.Areas.AdminPanel.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Routing;

namespace DataLibrary.Security
{
    public class SecurityAuthenticate : AuthorizeAttribute
    {
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (string.IsNullOrEmpty(Sessions.Username))
            {
                filterContext.Result = new RedirectToRouteResult(new
                   RouteValueDictionary(new { controller = "Login", action = "Index" }));
            }
            else
            {
                LoginLogic AL = new LoginLogic();

                CustomSecurity CS = new CustomSecurity(AL.GetUser(Sessions.Username));
                if (!CS.IsInRole(Roles))
                {
                    filterContext.Result = new RedirectToRouteResult(new
                        RouteValueDictionary(new { controller = "AccessDenied", action = "Index" }));
                }
            }
        }
    }
}
