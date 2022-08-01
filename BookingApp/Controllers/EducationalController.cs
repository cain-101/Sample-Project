using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BookingApp.Controllers
{
    public class EducationalController : Controller
    {
        // GET: Educational
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult EducationalBooking()
        {
            return View();
        }

        public ActionResult EducationalDestination()
        {
            return View();
        }
    }
}