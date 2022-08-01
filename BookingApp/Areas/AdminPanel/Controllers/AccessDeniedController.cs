using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BookingApp.Areas.AdminPanel.Controllers
{
    public class AccessDeniedController : Controller
    {
        // GET: AdminPanel/AccessDenied
        public ActionResult Index()
        {
            return PartialView();
        }
    }
}