using BookingApp.Areas.AdminPanel.LoginModel;
using BookingApp.Areas.AdminPanel.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace BookingApp.Areas.AdminPanel.Controllers
{
    //[AllowAnonymous]
    public class LoginController : Controller
    {
        // GET: AdminPanel/Login
        public ActionResult Index()
        {
            return PartialView();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(AccountModel users)
        {
            ModelState.Clear();
            if (ModelState.IsValid)
            {
                try
                {
                    //string UserIdentity;
                    LoginLogic AL = new LoginLogic();
                    if (string.IsNullOrEmpty(users.UserName) || string.IsNullOrEmpty(users.Password) || AL.LoginAuth(users.UserName,
                        users.Password) == null)
                    {
                        ViewBag.Error = "Invalid account!";
                        return PartialView();
                    }
                    else
                    {
                        Sessions.Username = users.UserName;
                        FormsAuthentication.SetAuthCookie(users.UserName, true);
                        //FormsAuthentication.RedirectFromLoginPage()
                        return RedirectToAction("Index","ControlPanel");
                    }
                }
                catch (Exception Ex)
                {
                    ViewBag.Error = "Error: "+Ex.Message;
                    return PartialView();
                }

            }
            else
            {
                ViewBag.Error = "Invalid account!";
                return PartialView();
            }


        }

        public ActionResult Logout()
        {
            Sessions.Username = string.Empty;
            FormsAuthentication.SignOut();
            return RedirectToAction("Index");
        }
    }
}