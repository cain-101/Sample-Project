using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BookingApp.Controllers
{
    public class DomesticController : Controller
    {
        // GET: Luzon
        public ActionResult LuzonDestination()
        {
            return View();
        }

        public ActionResult DomesticBooking()
        {
            return View();
        }

        public ActionResult DomesticBooking1()
        {
            return View();
        }
    }
}