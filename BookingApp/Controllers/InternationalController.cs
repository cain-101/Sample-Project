using BookingApp.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
//using System.Data.SqlClient;
using MySql.Data.MySqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static DataLibrary.Queries.Query;

namespace BookingApp.Controllers
{
    public class InternationalController : Controller
    { 
        // GET: International
        public ActionResult InternationalDestination()
        {
            return View();
        }

        public ActionResult InternationalDestination1()
        {
            return View();
        }

        public ActionResult InternationalDestination2()
        {
            return View();
        }

        public ActionResult InternationalDestination3()
        {
            return View();
        }

        public ActionResult InternationalDestination4()
        {
            return View();
        }

        public ActionResult InternationalDestination5()
        {
            return View();
        }

        public ActionResult InternationalBooking()
        {
            return View();
        }

        public ActionResult InternationalBooking1()
        {
            return View();
        }

        public ActionResult Sorak()
        {
            return View();
        }

        public ActionResult Brazil()
        {
            return View();
        }

        public ActionResult Xmastokyo()
        {
            return View();
        }

        public ActionResult Bhutan()
        {
            return View();
        }

        public ActionResult Hanoi()
        {
            return View();
        }

        public ActionResult Slovenia()
        {
            return View();
        }

        public ActionResult GoldenTriangle()
        {
            return View();
        }

        public ActionResult Cairo()
        {
            return View();
        }

        [HttpGet]
        public ActionResult TourPackageD(int id)
        {
            var pd = GetPDisplay().OrderByDescending(x => x.p_id).Take(30);
            List<InternationalDisplay> package = new List<InternationalDisplay>();
            foreach (var item in pd)
            {
                package.Add(new InternationalDisplay
                {
                    p_id = item.p_id,
                    p_name = item.p_name,
                    p_price = item.p_price,
                    c_type = item.c_type,
                    bedtype = item.bedtype,
                    currency = item.currency,
                    img = item.img
                });
            }
            ViewBag.PD = package;

            using (IDbConnection con = new MySqlConnection(DataLibrary.Connection.Connect.GetConnectionString()))
            {
                   var result = con.QueryMultiple(@"select gtp.p_id, gtp.p_name, gtp.p_price,
                          gca.c_type, gbr.bedtype, gtp.currency from t_package as gtp, category as gca,
                          bedrooms as gbr where gtp.c_id = gca.c_id and gtp.bedroom = gbr.bed_id
                          and gtp.p_id = @id and gtp.status = 1;
                          select gtd.tdates_id, gtd.dfrom, gtd.dto from traveldates as gtd
                          where gtd.p_id = @id;
                          select ginc.in_id, ginc.name from inclusion as ginc 
                          where ginc.p_id = @id;
                          select con.con_id, con.name from tcondition as con
                          where con.p_id = @id;
                          select exc.ex_id, exc.name from exclusion as exc 
                          where exc.p_id = @id;
                          select fli.fl_id, fli.name from flightdetails as fli
                          where fli.p_id = @id;
                          select iti.it_id, iti.name, iti.description, iti.bmeal, iti.lmeal, iti.dmeal from itinerary as iti
                          where iti.p_id = @id;
                          select img.img_id, img.slides from imagetable as img
                          where img.p_id = @id order by img.img_id limit 1,5;
                          select vi.visa_id, vi.name from visareq as vi
                          where vi.p_id = @id;
                          select img.img_id, img.slides from imagetable as img
                          where img.p_id = @id  
						  order by img.img_id ASC limit 0,1;
                          select ph.ph_id, ph.ph_loc, ph.ph_phtel from photel as ph 
                          where ph.p_id = @id;",
                          new { @id = id});
                var gTp = result.ReadSingle<GuestTP>();
                gTp.guestTDs = result.Read<GuestTD>().ToList();
                gTp.guestINCs = result.Read<GuestINC>().ToList();
                gTp.guestCONs = result.Read<GuestCON>().ToList();
                gTp.guestEXCs = result.Read<GuestEXC>().ToList();
                gTp.guestFLIs = result.Read<GuestFLI>().ToList();
                gTp.guestITIs = result.Read<GuestITI>().ToList();
                gTp.guestIMGs = result.Read<GuestIMG>().ToList();
                gTp.guestVIs = result.Read<GuestVI>().ToList();
                gTp.headerIMG = result.ReadSingleOrDefault<HeaderIMG>();
                gTp.photels = result.Read<Photel>().ToList();
                return View(gTp);
            }
        }

         public ActionResult BookingTP()
         {
            return View();
         }
    }
}