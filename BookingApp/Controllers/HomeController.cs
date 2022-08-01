using BookingApp.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using static DataLibrary.Queries.Query;
using PagedList;

namespace BookingApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var caption = GetCaptions();
            List<Captions> captions = new List<Captions>();
            foreach (var item in caption)
            {
                captions.Add(new Captions
                {
                    fh_cap = item.fh_cap,
                    fb_cap = item.fb_cap,
                    sh_cap = item.sh_cap,
                    sb_cap = item.sb_cap,
                    index_title = item.index_title
                });
            }

            ViewBag.Captions = captions;

            var iss = GetIndexSlides();
            List<IndexSlides> indexSlides = new List<IndexSlides>();
            foreach (var slide in iss)
            {
                indexSlides.Add(new IndexSlides
                {
                    is_id = slide.is_id,
                    is_img = slide.is_img
                });
            }
            ViewBag.IndesSS = indexSlides;
            ViewBag.Domestic = indexSlides.Take(1);
            ViewBag.International = indexSlides.Skip(1).Take(1);
            ViewBag.Education = indexSlides.Skip(2).Take(1);

            var fetchIndexContent = GetIdANDImg().Take(12);
            int counts = Convert.ToInt32(Math.Ceiling((double)GetIdANDImg().Count() /12)); 
            List<IndexModel> indexContent = new List<IndexModel>();
            foreach (var row in fetchIndexContent)
            {
                indexContent.Add(new IndexModel
                {
                    p_id = row.p_id,
                    c_id = row.c_id,
                    img = row.img
                });
            }
            ViewBag.IndexItems = indexContent;
            ViewBag.IndexCounts = counts;
            return View();
        }

        public ActionResult GetIndexPage(int NumberofData)
        {
            if (NumberofData == 0)
            {
                var fetchIndexContent = GetIdANDImg().Take(12);
                int counts = Convert.ToInt32(Math.Ceiling((double)GetIdANDImg().Count() / 12));
                List<IndexModel> indexContent = new List<IndexModel>();
                foreach (var row in fetchIndexContent)
                {
                    indexContent.Add(new IndexModel
                    {
                        p_id = row.p_id,
                        c_id = row.c_id,
                        img = row.img
                    });
                }
                var response = new { data = indexContent, c = counts };
                return Json(response, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var packages = GetIdANDImg().Where(x => x.c_id == NumberofData).Take(12).ToList();
                int counts = Convert.ToInt32(Math.Ceiling((double)GetIdANDImg().Where(x => x.c_id == NumberofData).Count() / 12));
                List<IndexModel> indexContent = new List<IndexModel>();
                foreach (var row in packages)
                {

                    indexContent.Add(new IndexModel
                    {
                        p_id = row.p_id,
                        c_id = row.c_id,
                        img = row.img
                    });

                }
                var response = new { data = indexContent, c = counts };
                return Json(response, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ViewMoreIndex(int rowsCount, int view)
        {
            var packages = GetIdANDImg().OrderByDescending(x => x.p_id).Skip(rowsCount * (view - 1)).Take(rowsCount).ToList();
            List<IndexModel> indexContent = new List<IndexModel>();
            foreach (var row in packages)
            {
                indexContent.Add(new IndexModel
                {
                    p_id = row.p_id,
                    c_id = row.c_id,
                    img = row.img
                });
            }
            return Json(indexContent, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ViewMoreIndexViaC(int rowsCount, int view, int filter)
        {
            if (filter == 0)
            {
                var packages = GetIdANDImg().OrderByDescending(x => x.p_id).Skip(rowsCount * (view - 1)).Take(rowsCount).ToList();
                List<IndexModel> indexContent = new List<IndexModel>();
                foreach (var row in packages)
                {
                    indexContent.Add(new IndexModel
                    {
                        p_id = row.p_id,
                        c_id = row.c_id,
                        img = row.img
                    });
                }
                return Json(indexContent, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var packages = GetIdANDImg().Where(x => x.c_id == filter).OrderByDescending(x => x.p_id).Skip(rowsCount * (view - 1)).Take(rowsCount).ToList();
                List<IndexModel> indexContent = new List<IndexModel>();
                foreach (var row in packages)
                {
                    indexContent.Add(new IndexModel
                    {
                        p_id = row.p_id,
                        c_id = row.c_id,
                        img = row.img
                    });
                }
                return Json(indexContent, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Booking01()
        {
            return View();
        }

        public ActionResult Booking02()
        {
            return View();
        }

        public ActionResult Booking03()
        {
            return View();
        }

        public ActionResult Booking()
        {
            return View();
        }

        public ActionResult Booking1()
        {
            return View();
        }

        public ActionResult Booking2()
        {
            return View();
        }

        public JsonResult AutoComplete(string str)
        {
          
            string[] places = new string[] {
                "Tokyo",
                "Delhi",
                "Shanghai",
                "Sao Paulo",
                "Mexico City",
                "Cairo",
                "Dhaka",
                "Mumbai",
                "Beijing",
                "Osaka",
                "Karachi",
                "Chongqing",
                "Buenos Aires",
                "Istanbul",
                "Kolkata",
                "Lagos",
                "Manila",
                "Tianjin",
                "Rio De Janeiro",
                "Guangzhou",
                "Moscow",
                "Lahore",
                "Shenzhen",
                "Bangalore",
                "Paris",
                "Bogota",
                "Chennai",
                "Jakarta",
                "Lima",
                "Bangkok",
                "Seoul",
                "Hyderabad",
                "London",
                "Tehran",
                "Chengdu",
                "New York",
                "Wuhan",
                "Ahmedabad",
                "Kuala Lumpur",
                "Riyadh",
                "Surat",
                "Santiago",
                "Madrid",
                "Pune",
                "Dar Es Salaam",
                "Toronto",
                "Johannesburg",
                "Barcelona",
                "St Petersburg",
                "Yangon",
                "Alexandria",
                "Guadalajara",
                "Ankara",
                "Melbourne",
                "Sydney",
                "Brasilia",
                "Nairobi",
                "Cape Town",
                "Rome",
                "Montreal",
                "Tel Aviv",
                "Los Angeles",
                "Medellin",
                "Jaipur",
                "Casablanca",
                "Lucknow",
                "Berlin",
                "Busan",
                "Athens",
                "Milan",
                "Kanpur",
                "Abuja",
                "Lisbon",
                "Surabaya",
                "Dubai",
                "Cali",
                "Manchester",
                "Chicago",
                "Vancouver",
                "Accra",
                "Pretoria",
                "Beirut",
                "Brisbane",
                "Houston",
                "Bhopal",
                "Havana",
                "Tijuana",
                "Hiroshima",
                "Brussels",
                "Perth",
                "Phnom Penh",
                "Mecca",
                "Vienna",
                "Aleppo",
                "Panama City",
                "Bucharest",
                "Hamburg",
                "Warsaw",
                "Budapest",
                "Phoenix",
                "Lyon",
                "Glasgow",
                "Sharjah",
                "Stockholm",
                "Marseille",
                "Auckland",
                "Philadelphia",
                "San Antonio",
                "Munich",
                "Calgary",
                "San Diego",
                "Abu Dhabi",
                "Edmonton",
                "Belgrade",
                "Zurich",
                "Dallas",
                "Ottawa",
                "Kathmandu",
                "Copenhagen",
                "Adelaide",
                "Porto",
                "Prague",
                "Helsinki",
                "Sofia",
                "Ho Chi Minh City",
                "Dublin",
                "Tripoli",
                "Amsterdam",
                "Cologne",
                "Islamabad",
                "San Jose",
                "Oslo",
                "Toulouse",
                "Rotterdam",
                "Austin",
                "Bordeaux",
                "Nice",
                "Jacksonville",
                "Southampton",
                "Jerusalem",
                "Fort Worth",
                "San Francisco",
                "Liverpool",
                "Columbus",
                "Charlotte",
                "Indianapolis",
                "Birmingham",
                "Valencia",
                "Thessaloniki",
                "Winnipeg",
                "Nottingham",
                "Frankfurt",
                "Seattle",
                "Hamilton",
                "Denver",
                "Sheffield",
                "Washington",
                "Florence",
                "El Paso",
                "Gaza",
                "Gold Coast",
                "Zagreb",
                "Nashville",
                "Bristol",
                "Nantes",
                "Bali",
                "Portland",
                "Las Vegas",
                "Detroit",
                "Oklahoma City",
                "Memphis",
                "Venice",
                "Riga",
                "Stuttgart",
                "Dusseldorf",
                "Belfast",
                "Louisville",
                "Brighton",
                "Baltimore",
                "Kingston",
                "Milwaukee",
                "Albuquerque",
                "Kitchener",
                "Leicester",
                "Tucson",
                "Fresno",
                "Edinburgh",
                "Sacramento",
                "Mesa",
                "Atlanta",
                "Kansas City",
                "Colorado Springs",
                "Miami",
                "Raleigh",
                "Cardiff",
                "Long Beach",
                "Montpellier",
                "Virginia Beach",
                "Canberra",
                "Omaha",
                "Newcastle",
                "Bratislava",
                "Oakland",
                "Minneapolis",
                "Coventry",
                "Wellington",
                "Halifax",
                "Arlington",
                "Tampa",
                "Tulsa",
                "Christchurch",
                "New Orleans",
                "Wichita",
                "Bakersfield",
                "Stoke On Trent",
                "Victoria",
                "Cleveland",
                "Port Moresby",
                "Aurora",
                "Anaheim",
                "Honolulu",
                "Sarajevo",
                "Reading",
                "Riverside",
                "Santa Ana",
                "Windsor",
                "Lexington",
                "Corpus Christi",
                "Hull",
                "Henderson",
                "Stockton",
                "St. Paul",
                "Swansea",
                "Pittsburgh",
                "St. Louis"
            };
            return Json(places);
        }

        [HttpPost]
        public async Task<string> Inquire(BookingModel inquire)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    string _pssnger = inquire.Pssngers;
                    string[] passengers = _pssnger.Split(',');
                    if (passengers[1] == "" || passengers[1] == null || passengers[1] == "NaN")
                    {
                        passengers[1] = "0";
                    }
                    if (passengers[2] == "" || passengers[2] == null || passengers[2] == "NaN")
                    {
                        passengers[2] = "0";
                    }
                    if (passengers[3] == "" || passengers[3] == null || passengers[3] == "NaN")
                    {
                        passengers[3] = "0";
                    }
                    var body = "<p>Inquirer: {0}</p> \n <p>Email: {1}</p> \n <p>Contact No.: {2}</p> \n" +
                        "<h3>Tour: {9}</h3> \n" +
                        "<h3>Starting Point: {3}</h3> <p>To</p> <h3>Destination: {4}</h3> \n" +
                        "<h5>Desired departure date: {5}</h5> \n" +
                        "<h5>Desired return date: {6}</h5> \n" +
                        "<ul>"+
                        "<li>Passenger count(s): {11}" +
                        "<Ul>"+
                        "<li>Adult count(s): {7}</li>"+
                        "<li>Child count(s): {12}</li>"+
                        "<li>Infant count(s): {13}</li>"+
                        "</ul>"+
                        "</li>"+
                        "</ul>" +
                        "<h5>Cabin Class: {8}</h5> \n" +
                        "<p>Other concerns: {10}</p>";
                    var message = new MailMessage();
                    message.To.Add("mhylestravel@gmail.com");
                    message.From = new MailAddress(inquire.email);
                    message.Subject = "Inquiries";
                    message.Body = string.Format(body, "<b>" + inquire.FullName + "</b>", message.From, inquire.contact, inquire.From, inquire.To,
                        inquire.DpartDate, inquire.RturnDate, passengers[1], inquire.classType, inquire.bookingFiltering, inquire.concern, passengers[0],
                        passengers[2], passengers[3]);
                    message.IsBodyHtml = true;
                    using (var smtp = new SmtpClient())
                    {
                        await smtp.SendMailAsync(message);
                        ModelState.Clear();
                        return "Inquiry sent! Thank you for your inquiries, We will reach you soon via email or other contact information you have been entered.";
                    }
                }
                catch(Exception ex)
                {
                    return "Error: " + ex.Message;
                }
            }
            else
            {
                ModelState.Clear();
                return "Error: Please check all the required fields!";
            }
        }

        [HttpPost]
        public async Task<string> FlightAndHotelInquire(_Booking1 flightHotel)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    string pssengerAndRoom = flightHotel.Pssngers1;
                    string[] roomPassenger = pssengerAndRoom.Split(',');
                    if(roomPassenger[1] == "" || roomPassenger[1] == null || roomPassenger[1] == "NaN")
                    {
                        roomPassenger[1] = "0";
                    }
                    if (roomPassenger[2] == "" || roomPassenger[2] == null || roomPassenger[2] == "NaN")
                    {
                        roomPassenger[2] = "0";
                    }
                    if (roomPassenger[3] == "" || roomPassenger[3] == null || roomPassenger[3] == "NaN")
                    {
                        roomPassenger[3] = "0";
                    }
                    if(roomPassenger[4] == "" || roomPassenger[4] == null || roomPassenger[4] == "NaN")
                    {
                        roomPassenger[4] = "0";
                    }
                    var body = "<p>Inquirer: {0}</p> \n" +
                        "<p>Contact No: {2}</p> \n" +
                        "<p>Email: {1}</p> \n" +
                        "<h3>Tour: {12}</h3> \n" +
                        "<h4>Starting Point: {3}</h> <p> To </p> <h3>Destination: {4}</h3> \n" +
                        "<h5>Desired departure date: {5}</h5> \n" +
                        "<h5>Desired return date: {6}</h5> \n" +
                        "<ul>" +
                            "<li>"+
                                "Passenger count(s): {11}" +
                                    "<ul>"+
                                        "<li>Adult count(s): {8}</li>"+
                                        "<li>Child counts(s): {9}</li>"+
                                        "<li>Infant count(s): {10}</li>"+
                                    "</ul>"+
                            "</li>"+
                            "<li>Room count(s): {7}</li>"+
                        "</ul>"+
                        "<p>Other concerns: {13}</p>";
                    var message = new MailMessage();
                    message.To.Add("mhylestravel@gmail.com");
                    message.From = new MailAddress(flightHotel.email);
                    message.Subject = "Inquiries";
                    message.Body = string.Format(body, flightHotel.FullName, message.From, flightHotel.contact, flightHotel.From1, flightHotel.To1,
                        flightHotel.DpartDate1, flightHotel.RturnDate1, roomPassenger[0], roomPassenger[1], roomPassenger[2], roomPassenger[3],
                        roomPassenger[4], flightHotel.bookingFiltering1, flightHotel.concern);
                    message.IsBodyHtml = true;
                    using (var smtp = new SmtpClient())
                    {
                        await smtp.SendMailAsync(message);
                        ModelState.Clear();
                        return "Inquiry sent! Thank you for your inquiries, We will reach you soon via email or other contact information you have been entered.";
                    }
                }
                catch(Exception ex)
                {
                    return "Error: " + ex.Message;
                }
            }
            else
            {
                ModelState.Clear();
                return "Error: Please check all the required fields!";
            }
        }

        public async Task<string> OnwayInquire(BookingModel1 oneWay)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    string pssgr = oneWay._Pssngers;
                    string[] pSgr = pssgr.Split(',');
                    if (pSgr[1] == "" || pSgr[1] == null || pSgr[1] == "NaN")
                    {
                        pSgr[1] = "0";
                    }
                    if (pSgr[2] == "" || pSgr[2] == null || pSgr[2] == "NaN")
                    {
                        pSgr[2] = "0";
                    }
                    if (pSgr[3] == "" || pSgr[3] == null || pSgr[3] == "NaN")
                    {
                        pSgr[3] = "0";
                    }
                    var body = "<p>Inquirer: {0}</p> \n" +
                        "<p>Contact No: {1}</p> \n" +
                        "<p>Email: {2}</p> \n" +
                        "<h3>Tour: {3}</h3> \n" +
                        "<h4>Starting Point: {4}</h> <p> To </p> <h3>Destination: {5}</h3> \n" +
                        "<h5>Desired departure date: {6}</h5> \n" +
                        "<ul>" +
                            "<li>" +
                                "Passenger count(s): {7}" +
                                    "<ul>" +
                                        "<li>Adult count(s): {8}</li>" +
                                        "<li>Child counts(s): {9}</li>" +
                                        "<li>Infant count(s): {10}</li>" +
                                    "</ul>" +
                            "</li>" +
                        "</ul>" +
                        "<h5>Cabin Class: {11}</h5>"+
                        "<p>Other concerns: {12}</p>";
                    var message = new MailMessage();
                    message.To.Add("mhylestravel@gmail.com");
                    message.From = new MailAddress(oneWay.email);
                    message.Subject = "Inquiring";
                    message.Body = string.Format(body, oneWay.FullName, oneWay.contact, message.From, oneWay._bookingFiltering, oneWay._From,
                        oneWay._To, oneWay._DpartDate, pSgr[0], pSgr[1], pSgr[2], pSgr[3], oneWay._classType, oneWay.concern);
                    message.IsBodyHtml = true;
                    using (var smtp = new SmtpClient())
                    {
                        await smtp.SendMailAsync(message);
                        ModelState.Clear();
                        return "Inquiry sent! Thank you for your inquiries, We will reach you soon via email or other contact information you have been entered.";
                    }
                }
                catch (Exception ex)
                {
                    return "Error: " + ex.Message;
                }
            }
            else
            {
                ModelState.Clear();
                return "Error: Please check all the required fields!";
            }
        }

        public async Task<string> PackageBooking(Package package)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    string fullName = package.lname + ", " + package.fname + ", " + package.mname;
                    string pssngr = package.passengers;
                    string[] pssn = pssngr.Split(',');
                    if (pssn[1] == "" || pssn[1] == null || pssn[1] == "NaN")
                    {
                        pssn[1] = "0";
                    }
                    if (pssn[2] == "" || pssn[2] == null || pssn[2] == "NaN")
                    {
                        pssn[2] = "0";
                    }
                    if (pssn[3] == "" || pssn[3] == null || pssn[3] == "NaN")
                    {
                        pssn[3] = "0";
                    }
                    var body = "<p>Inquirer: {0}</p> \n" +
                        "<p>Mobile number: {1}</p> \n" +
                        "<p>Landline: {2}</p> \n" +
                        "<p>Email: {3}</p> \n" +
                        "<h3>Package name: {4}</h3> \n" +
                        "<h4>Inquiry desired travel date: {5}</h4> \n" +
                        "<h4>Address: {6}</h4> \n" +
                        "<ul>" +
                            "<li>" +
                                "Passenger count(s): {7}" +
                                "<ul>" +
                                    "<li>Adult count(s): {8}</li>" +
                                    "<li>Child count(s): {9}</li>" +
                                    "<li>Infant count(s): {10}</li>" +
                                "</ul>" +
                            "</li>" +
                        "</ul>" +
                        "<p>Other concerns: {11}</p>";
                    var message = new MailMessage();
                    message.To.Add("mhylestravel@gmail.com");
                    message.From = new MailAddress(package.emailAdd);
                    message.Subject = "Inquiring";
                    message.Body = string.Format(body, fullName, package.contactNo, package.landlineNo, message.From, package.packageName, package.travelDate,
                        package.fullAddress, pssn[0], pssn[1], pssn[2], pssn[3], package.concern);
                    message.IsBodyHtml = true;
                    using (var smtp = new SmtpClient())
                    {
                        await smtp.SendMailAsync(message);
                        ModelState.Clear();
                        return "Inquiry sent! Thank you for your inquiries, We will reach you soon via email or other contact information you have been entered.";
                    }
                }
                catch (Exception ex)
                {
                    return "Error: " + ex.Message;
                }
            }
            else
            {
                ModelState.Clear();
                return "Error: Please check all the required fields!";
            }
        }

        public ActionResult Passengers()
        {
            return View();
        }

        public ActionResult _Passengers()
        {
            return View();
        }

        public ActionResult Passengers1()
        {
            return View();
        }

        public ActionResult FlightsAndHotels()
        {
            return View();
        }

        public ActionResult RoomCounts()
        {
            return View();
        }

        public ActionResult Schedule()
        {
            return PartialView();
        }

        public ActionResult GetPage(int NumberofData)
        {
            var _otds = GetOTDatesP();
            List<DatesD> dates = new List<DatesD>();
            foreach (var row in _otds)
            {
                dates.Add(new DatesD
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var packages = GetInternationalDisplay().Take(NumberofData).ToList();
            int counts = Convert.ToInt32(Math.Ceiling((double)GetInternationalDisplay().Count() / NumberofData));
            List<InternationalDisplay> package = new List<InternationalDisplay>();
            foreach (var item in packages)
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

            var myList = packages.GroupJoin(dates,
                                          p => p.p_id,
                                          d => d.p_id,
                                          (p, date) => new NewPView
                                          {
                                              p_id = p.p_id,
                                              p_name = p.p_name,
                                              p_price = p.p_price,
                                              c_type = p.c_type,
                                              bedtype = p.bedtype,
                                              currency = p.currency,
                                              img = p.img,
                                              _Dates = date.ToList()
                                          });

            var result = new { data = myList, c = counts };
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Paging(int DDVal, int page)
        {
            var _otds = GetOTDatesP();
            List<DatesD> dates = new List<DatesD>();
            foreach (var row in _otds)
            {
                dates.Add(new DatesD
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var packages = GetInternationalDisplay().OrderBy(x => x.p_id).Skip(DDVal * (page - 1)).Take(DDVal).ToList();
            List<InternationalDisplay> package = new List<InternationalDisplay>();
            foreach (var item in packages)
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

            var myList = packages.GroupJoin(dates,
                                       p => p.p_id,
                                       d => d.p_id,
                                       (p, date) => new NewPView
                                       {
                                           p_id = p.p_id,
                                           p_name = p.p_name,
                                           p_price = p.p_price,
                                           c_type = p.c_type,
                                           bedtype = p.bedtype,
                                           currency = p.currency,
                                           img = p.img,
                                           _Dates = date.ToList()
                                       });

            return Json(myList, JsonRequestBehavior.AllowGet);
        }

        public ActionResult SearchPData()
        {
            var _otds = GetOTDatesP();
            List<DatesD> dates = new List<DatesD>();
            foreach (var row in _otds)
            {
                dates.Add(new DatesD
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var packages = GetInternationalDisplay();
            List<InternationalDisplay> package = new List<InternationalDisplay>();
            foreach (var item in packages)
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

            var myList = packages.GroupJoin(dates,
                                      p => p.p_id,
                                      d => d.p_id,
                                      (p, date) => new NewPView
                                      {
                                          p_id = p.p_id,
                                          p_name = p.p_name,
                                          p_price = p.p_price,
                                          c_type = p.c_type,
                                          bedtype = p.bedtype,
                                          currency = p.currency,
                                          img = p.img,
                                          _Dates = date.ToList()
                                      });

            return Json(myList, JsonRequestBehavior.AllowGet);
        }

        public ActionResult International()
        {
            var iss = GetIndexSlides();
            List<IndexSlides> indexSlides = new List<IndexSlides>();
            foreach (var slide in iss)
            {
                indexSlides.Add(new IndexSlides
                {
                    is_id = slide.is_id,
                    is_img = slide.is_img
                });
            }
            ViewBag.IndesSS = indexSlides.Skip(1).Take(1);

            var _otds = GetOTDatesP();
            List<DatesD> dates = new List<DatesD>();
            foreach (var row in _otds)
            {
                dates.Add(new DatesD
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var packages = GetInternationalDisplay().Take(12);
            int counts = Convert.ToInt32(Math.Ceiling((double)GetInternationalDisplay().Count() / 12));
            List<InternationalDisplay> package = new List<InternationalDisplay>();
            foreach (var item in packages)
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

            var myList = packages.GroupJoin(dates,
                                            p => p.p_id,
                                            d => d.p_id,
                                            (p, date) => new NewPView
                                            {
                                                p_id = p.p_id,
                                                p_name = p.p_name,
                                                p_price = p.p_price,
                                                c_type = p.c_type,
                                                bedtype = p.bedtype,
                                                currency = p.currency,
                                                img = p.img,
                                                _Dates = date.ToList()
                                            });
            ViewBag.Counts = counts;
            ViewBag.IDp = myList;
            return View();
        }

        public ActionResult Domestic()
        {
            var iss = GetIndexSlides();
            List<IndexSlides> indexSlides = new List<IndexSlides>();
            foreach (var slide in iss)
            {
                indexSlides.Add(new IndexSlides
                {
                    is_id = slide.is_id,
                    is_img = slide.is_img
                });
            }
            ViewBag.IndesSS = indexSlides.Take(1);

            var _otds = GetOTDatesP();
            List<DatesD> dates = new List<DatesD>();
            foreach (var row in _otds)
            {
                dates.Add(new DatesD
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var packages = GetDomesticDisplay().Take(12);
            int counts = Convert.ToInt32(Math.Ceiling((double)GetDomesticDisplay().Count() / 12));
            List<DomesticDisplay> domestics = new List<DomesticDisplay>();
            foreach(var item in packages)
            {
                domestics.Add(new DomesticDisplay
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

            var myListD = packages.GroupJoin(dates,
                                          p => p.p_id,
                                          d => d.p_id,
                                          (p, date) => new NewPView
                                          {
                                              p_id = p.p_id,
                                              p_name = p.p_name,
                                              p_price = p.p_price,
                                              c_type = p.c_type,
                                              bedtype = p.bedtype,
                                              currency = p.currency,
                                              img = p.img,
                                              _Dates = date.ToList()
                                          });

            ViewBag.DCounts = counts;
            ViewBag.DDp = myListD;
            return View();
        }

        public ActionResult GetPageD(int NumberofData)
        {
            var _otds = GetOTDatesP();
            List<DatesD> dates = new List<DatesD>();
            foreach (var row in _otds)
            {
                dates.Add(new DatesD
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var packages = GetDomesticDisplay().Take(NumberofData).ToList();
            int counts = Convert.ToInt32(Math.Ceiling((double)GetDomesticDisplay().Count() / NumberofData));
            List<DomesticDisplay> domestics = new List<DomesticDisplay>();
            foreach (var item in packages)
            {
                domestics.Add(new DomesticDisplay
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

            var myList = packages.GroupJoin(dates,
                                           p => p.p_id,
                                           d => d.p_id,
                                           (p, date) => new NewPView
                                           {
                                               p_id = p.p_id,
                                               p_name = p.p_name,
                                               p_price = p.p_price,
                                               c_type = p.c_type,
                                               bedtype = p.bedtype,
                                               currency = p.currency,
                                               img = p.img,
                                               _Dates = date.ToList()
                                           });

            var result = new { data = myList, c = counts };
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult DPaging(int DDVal, int page)
        {
            var _otds = GetOTDatesP();
            List<DatesD> dates = new List<DatesD>();
            foreach (var row in _otds)
            {
                dates.Add(new DatesD
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var packages = GetDomesticDisplay().OrderBy(x => x.p_id).Skip(DDVal * (page - 1)).Take(DDVal).ToList();
            List<DomesticDisplay> domestics = new List<DomesticDisplay>();
            foreach (var item in packages)
            {
                domestics.Add(new DomesticDisplay
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

            var myListD = packages.GroupJoin(dates,
                                      p => p.p_id,
                                      d => d.p_id,
                                      (p, date) => new NewPView
                                      {
                                          p_id = p.p_id,
                                          p_name = p.p_name,
                                          p_price = p.p_price,
                                          c_type = p.c_type,
                                          bedtype = p.bedtype,
                                          currency = p.currency,
                                          img = p.img,
                                          _Dates = date.ToList()
                                      });

            return Json(myListD, JsonRequestBehavior.AllowGet);
        }

        public ActionResult SearchDData()
        {
            var _otds = GetOTDatesP();
            List<DatesD> dates = new List<DatesD>();
            foreach (var row in _otds)
            {
                dates.Add(new DatesD
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var packages = GetDomesticDisplay();
            List<DomesticDisplay> domestics = new List<DomesticDisplay>();
            foreach (var item in packages)
            {
                domestics.Add(new DomesticDisplay
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

            var myListD = packages.GroupJoin(dates,
                                    p => p.p_id,
                                    d => d.p_id,
                                    (p, date) => new NewPView
                                    {
                                        p_id = p.p_id,
                                        p_name = p.p_name,
                                        p_price = p.p_price,
                                        c_type = p.c_type,
                                        bedtype = p.bedtype,
                                        currency = p.currency,
                                        img = p.img,
                                        _Dates = date.ToList()
                                    });

            return Json(myListD, JsonRequestBehavior.AllowGet);
        }

        public PartialViewResult _International()
        {
            return PartialView();
        }

        public ActionResult EduTour()
        {
            var packages = GetEducationalDisplay().Take(12);
            int counts = Convert.ToInt32(Math.Ceiling((double)GetEducationalDisplay().Count() / 12));
            List<EducationalDisplay> educational = new List<EducationalDisplay>();
            foreach (var item in packages)
            {
                educational.Add(new EducationalDisplay
                {
                    p_id = item.p_id,
                    p_name = item.p_name,
                    p_price = item.p_price,
                    c_type = item.c_type,
                    bedtype = item.bedtype,
                    img = item.img
                });
            }
            ViewBag.ECounts = counts;
            ViewBag.EDp = educational;
            return View();
        }

        public ActionResult GetPageE(int NumberofData)
        {
            var packages = GetEducationalDisplay().Take(NumberofData).ToList();
            int counts = Convert.ToInt32(Math.Ceiling((double)GetEducationalDisplay().Count() / NumberofData));
            List<EducationalDisplay> educational = new List<EducationalDisplay>();
            foreach (var item in packages)
            {
                educational.Add(new EducationalDisplay
                {
                    p_id = item.p_id,
                    p_name = item.p_name,
                    p_price = item.p_price,
                    c_type = item.c_type,
                    bedtype = item.bedtype,
                    img = item.img
                });
            }
            var result = new { data = packages, c = counts };
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult EPaging(int DDVal, int page)
        {
            var packages = GetEducationalDisplay().OrderBy(x => x.p_id).Skip(DDVal * (page - 1)).Take(DDVal).ToList();
            List<EducationalDisplay> educational = new List<EducationalDisplay>();
            foreach (var item in packages)
            {
                educational.Add(new EducationalDisplay
                {
                    p_id = item.p_id,
                    p_name = item.p_name,
                    p_price = item.p_price,
                    c_type = item.c_type,
                    bedtype = item.bedtype,
                    img = item.img
                });
            }
            return Json(educational, JsonRequestBehavior.AllowGet);
        }

        public ActionResult SearchEData()
        {
            var packages = GetEducationalDisplay();
            List<EducationalDisplay> educational = new List<EducationalDisplay>();
            foreach (var item in packages)
            {
                educational.Add(new EducationalDisplay
                {
                    p_id = item.p_id,
                    p_name = item.p_name,
                    p_price = item.p_price,
                    c_type = item.c_type,
                    bedtype = item.bedtype,
                    img = item.img
                });
            }
            return Json(educational, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Passenger01()
        {
            return View();
        }

        public ActionResult Passenger02()
        {
            return View();
        }

        public ActionResult Passenger03()
        {
            return View();
        }

        public ActionResult Passenger04()
        {
            return View();
        }

        public ActionResult Details()
        {
            return View();
        }

        public ActionResult Reservation()
        {
            return View();
        }

        [HttpPost]
        public async Task<string> BookedTP(string fname, string lname, string mname, string contactNo,
            string landlineNo, string emailAdd, string fullAdress, string IdprtDate, string guestAdult, string guestChild,
            string guestInfant, string concern, string packagename)
        {
            try
            {
                string fullName = lname + ", " + fname + ", " + mname;
                int total = Convert.ToInt32(guestAdult == "" ? "0" : guestAdult) + Convert.ToInt32(guestChild == "" ? "0" : guestChild) + Convert.ToInt32(guestInfant == "" ? "0" : guestInfant);
                var body = "<p>Inquirer: {0}</p> \n" +
                    "<p>Mobile number: {1}</p> \n" +
                    "<p>Landline: {2}</p> \n" +
                    "<p>Email: {3}</p> \n" +
                    "<h3>Package name: {4}</h3> \n" +
                    "<h4>Inquiry desired departure date: {5}</h4> \n" +
                    "<h4>Address: {6}</h4> \n" +
                    "<ul>" +
                        "<li>" +
                            "Passenger count(s): {7}" +
                            "<ul>" +
                                "<li>Adult count(s): {8}</li>" +
                                "<li>Child count(s): {9}</li>" +
                                "<li>Infant count(s): {10}</li>" +
                            "</ul>" +
                        "</li>" +
                    "</ul>" +
                    "<p>Other concerns: {11}</p>";
                var message = new MailMessage();
                message.To.Add("mhylestravel@gmail.com");
                message.From = new MailAddress(emailAdd);
                message.Subject = "Inquiring";
                message.Body = string.Format(body, fullName, contactNo, landlineNo, message.From, packagename, IdprtDate,
                    fullAdress, total, guestAdult, guestChild, guestInfant, concern);
                message.IsBodyHtml = true;
                using (var smtp = new SmtpClient())
                {
                    await smtp.SendMailAsync(message);
                    return "Inquiry sent! Thank you for your inquiries, We will reach you soon via email or other contact information you have been entered.";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }
    }
}