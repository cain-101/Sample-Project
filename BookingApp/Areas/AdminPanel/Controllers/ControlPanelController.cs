using System;
using System.Collections.Generic;
using System.Data;
//using System.Data.SqlClient;
using MySql.Data.MySqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using BookingApp.Areas.AdminPanel.Models;
using Dapper;
using DataLibrary.Security;
using Newtonsoft.Json;
using static DataLibrary.Queries.Query;

namespace BookingApp.Areas.AdminPanel.Controllers
{
    [SecurityAuthenticate(Roles = "SuperAdmin")]
    public class ControlPanelController : Controller
    {
        public ActionResult Index()
        {
            var _otds = GetOTDates();
            List<Dates> dates = new List<Dates>();
            foreach (var row in _otds)
            {
                dates.Add(new Dates
                {
                    p_id = row.p_id,
                    tdates_id = row.tdates_id,
                    dfrom = row.dfrom,
                    dto = row.dto
                });
            }

            var otDs = GetOTDids();
            List<OutToDateP> oTDP = new List<OutToDateP>();
            foreach (var row in otDs)
            {
                oTDP.Add(new OutToDateP
                {
                    p_id = row.p_id,
                    p_name = row.p_name,
                    p_img = row.img
                });
            }

            var listGroup = oTDP.GroupJoin(dates,
                            otdp => otdp.p_id,
                            d => d.p_id,
                            (otdp, _dates) => new OTDPView
                            {
                                p_id = otdp.p_id,
                                p_name = otdp.p_name,
                                p_img = otdp.p_img,
                                _Dates = _dates.ToList()
                            });
            ViewBag.OTDList = listGroup;
            return View();
        }

        public ActionResult Slides()
        {
            return View();
        }

        public ActionResult GetIss()
        {
            var iss = GetIndexSlides();
            List<IndexSlide> iSs = new List<IndexSlide>();
            foreach (var item in iss)
            {
                iSs.Add(new IndexSlide
                {
                    is_id = item.is_id,
                    is_img = item.is_img
                });
            }

            return Json(iSs, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetCaption()
        {
            var caption = GetCaptions();
            List<Captions> captions = new List<Captions>();
            foreach(var item in caption)
            {
                captions.Add(new Captions
                {
                    cap_id = item.cap_id,
                    fh_cap = item.fh_cap,
                    fb_cap = item.fb_cap,
                    sh_cap = item.sh_cap,
                    sb_cap = item.sb_cap,
                    index_title = item.index_title
                });
            }
            return Json(captions, JsonRequestBehavior.AllowGet);
        }

        public ActionResult EditCaption(int id)
        {
            var caption = GetCaptions().Where(x => x.cap_id == id);
            List<Captions> captions = new List<Captions>();
            foreach (var item in caption)
            {
                captions.Add(new Captions
                {
                    cap_id = item.cap_id,
                    fh_cap = item.fh_cap,
                    fb_cap = item.fb_cap,
                    sh_cap = item.sh_cap,
                    sb_cap = item.sb_cap,
                    index_title = item.index_title
                });
            }
            return Json(captions, JsonRequestBehavior.AllowGet);
        }

        public ActionResult UpdateIndexT(string uindexT)
        {
            try
            {
                int uIndexT = UIndexT(uindexT);
                return Json("Index title successfuly updated, " +uIndexT + " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: "+ ex.Message);
            }
        }

        public ActionResult UpdateFCs(string uFC)
        {
            try
            {
                int uFc = UpdateFC(uFC);
                return Json("Index slide first caption successfuly updated, "+ uFc+" row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult UpdateSCs(string USC)
        {
            try
            {
                int uSC = UpdateSC(USC);
                return Json("Index second caption successfuly updated, "+uSC+" row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult RetrieveIss(int id)
        {
            var iss = GetIndexSlides().Where(x => x.is_id == id);
            List<IndexSlide> iSs = new List<IndexSlide>();
            foreach (var item in iss)
            {
                iSs.Add(new IndexSlide
                {
                    is_id = item.is_id,
                    is_img = item.is_img
                });
            }

            return Json(iSs, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult UpdateIss(int id, HttpPostedFileBase file)
        {
            try
            {
                var fileName = Path.GetFileName(file.FileName);
                var path = Path.Combine(Server.MapPath("~/DynamicFiles/"), fileName);
                int uImage = UIssSlides(id, file.FileName);
                file.SaveAs(path);
                return Json("Index slide successfuly updated, " + uImage + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult DeleteIss(int id)
        {
            try
            {
                var selImg = GetIndexSlides().Where(x => x.is_id == id);
                List<IndexSlide> iSs = new List<IndexSlide>();
                foreach (var item in selImg)
                {
                    iSs.Add(new IndexSlide
                    {
                        is_id = item.is_id,
                        is_img = item.is_img
                    });
                }
                if (iSs[0].is_img != null)
                {
                    string fullpath = Request.MapPath("~/DynamicFiles/" + iSs[0].is_img);
                    if (System.IO.File.Exists(fullpath))
                    {
                        System.IO.File.Delete(fullpath);
                    }

                }
                int Delimg = DeleteISS(id);
                return Json("Index slide successfuly deleted, " + Delimg + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult UploadSlide()   
        {
            string path = Server.MapPath("~/DynamicFiles/");
            HttpFileCollectionBase files = Request.Files;
            for (int i = 0; i < files.Count; i++)
            {
                HttpPostedFileBase file = files[i];
                file.SaveAs(path + file.FileName);
                int insertSlide = AddIndexSlide(file.FileName);
            }
            return Json(files.Count + " Files Uploaded");
        }

        public ActionResult GetPList()
        {
            var pList = Packagelist();
            List<PackageList> packagelists = new List<PackageList>();
            foreach (var row in pList)
            {
                packagelists.Add(new PackageList
                {
                    p_id = row.p_id,
                    p_name = row.p_name,
                    p_price = row.p_price,
                    c_id = row.c_id,
                    c_type = row.c_type,
                    bed_id = row.bed_id,
                    bedtype = row.bedtype,
                    currency = row.currency, 
                    status = row.status
                });
            }
            return Json(new {data = packagelists }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult RetrieveTPs(int id)
        {
            var pList = Packagelist();
            List<PackageList> packagelists = new List<PackageList>();
            foreach (var row in pList)
            {
                packagelists.Add(new PackageList
                {
                    p_id = row.p_id,
                    p_name = row.p_name,
                    p_price = row.p_price,
                    c_id = row.c_id,
                    c_type = row.c_type,
                    bed_id = row.bed_id,
                    bedtype = row.bedtype,
                    status = row.status
                });
            }
            var response = packagelists.Where(x => x.p_id.Equals(id)).ToList();
            return Json(response, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ViewOTDP(int? id)
        {
            ViewBag.PId = id;
            return View();
        }

        public ActionResult DeleteTDs(int id)
        {
            try
            {
                int delTdates = DeleteTDates(id);
                return Json("Departure dates successfuly deleted, "+ delTdates +" row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult DeleteInc(int id)
        {
            try
            {
                int delInc = DeleteINC(id);
                return Json("Package inclusion successfuly deleted, " + delInc + " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult DeleteIti(int id)
        {
            try
            {
                int delIti = Deleteiti(id);
                return Json("Package itinerary successfuly deleted, "+delIti + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult DeleteTac(int id)
        {
            try
            {
                int delTac = DeleteTAc(id);
                return Json("Package terms and conditions successfuly deleted, " + delTac + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult DeleteExc(int id)
        {
            try
            {
                int delExc = DeleteEXc(id);
                return Json("Package exclusion successfuly deleted, " + delExc + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult DeleteFli(int id)
        {
            try
            {
                int delFli = DeleteFLi(id);
                return Json("Package flight details successfuly deleted, " + delFli + " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult DeletePh(int id)
        {
            try
            {
                int delPh = DeletePho(id);
                return Json("Package probable hotel successfuly deleted, " + delPh + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult DeleteVis(int id)
        {
            try
            {
                int delVis = DeleteVi(id);
                return Json("Package visa requirements successfuly deleted, "+delVis + " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult RetrieveINC(int id)
        {
            try
            {
                var fetchinc = FetchInc(id);
                List<UTINC> uTINCs = new List<UTINC>();
                foreach (var row in fetchinc)
                {
                    uTINCs.Add(new UTINC
                    {
                        in_id = row.in_id,
                        name = row.name
                    });
                }
                return Json(uTINCs, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }
        
        public ActionResult RetrievePh(int id)
        {
            try
            {
                var fetchph = Fetchph(id);
                List<UTPh> uTPhs = new List<UTPh>();
                foreach (var row in fetchph)
                {
                    uTPhs.Add(new UTPh
                    {
                        ph_id = row.ph_id,
                        ph_loc = row.ph_loc,
                        ph_phtel = row.ph_phtel
                    });
                }
                return Json(uTPhs, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: "+ ex.Message);
            }
        }

        public ActionResult RetrieveFLI(int id)
        {
            try
            {
                var fetchfli = FetchFli(id);
                List<UTFli> uTFlis = new List<UTFli>();
                foreach (var row in fetchfli)
                {
                    uTFlis.Add(new UTFli
                    {
                        fl_id = row.fl_id,
                        name = row.name
                    });
                }
                return Json(uTFlis, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult RetrieveTAC(int id)
        {
            try
            {
                var fetchTac = FetchTac(id);
                List<UTTac> uTTacs = new List<UTTac>();
                foreach (var row in fetchTac)
                {
                    uTTacs.Add(new UTTac
                    {
                        con_id = row.con_id,
                        name = row.name
                    });
                }
                return Json(uTTacs, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return Json("Error: " +ex.Message);
            }
        }

        public ActionResult RetrieveITI(int id)
        {
            try
            {
                var fetchIti = FetchIti(id);
                List<UIti> uItis = new List<UIti>();
                foreach (var row in fetchIti)
                {
                    uItis.Add(new UIti
                    {
                        it_id = row.it_id,
                        name = row.name,
                        description = row.description,
                        bmeal = row.bmeal,
                        lmeal = row.lmeal,
                        dmeal = row.dmeal
                    });
                }
                return Json(uItis, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: "+ ex.Message);
            }
        }

        public ActionResult RetrieveVIS(int id)
        {
            try
            {
                var fetchVis = FetchVis(id);
                List<UTVis> uTVis = new List<UTVis>();
                foreach (var row in fetchVis)
                {
                    uTVis.Add(new UTVis
                    {
                        visa_id= row.visa_id,
                        name = row.name
                    });
                }
                return Json(uTVis, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return Json("Error: "+ ex.Message);
            }
        }

        public ActionResult UpdateUTPph(string ph)
        {
            try
            {
                int uPh = UpdatePh(ph);
                return Json("Package probable hotel successfuly updated, "+uPh+" row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult UpdateUTPfli(string fli)
        {
            try
            {
                int uFli = UpdateFli(fli);
                return Json("Package flight details successfuly updated, "+uFli+ " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult UpdateUTPvis(string vis)
        {
            try
            {
                int uVis = UpdateVis(vis);
                return Json("Package visa requirements successfuly updated, "+ uVis+ " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult UpdateUTPiti(string iti)
        {
            try
            {
                int uIti = UpdateITI(iti);
                return Json("Package itineray successfuly updated, " + uIti + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult UpdateUTPtac(string tac)
        {
            try
            {
                int uTac = UpdateTac(tac);
                return Json("Package terms and conditions successfuly updated, " + uTac + " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        public ActionResult UpdateUTPinc(string inc)
        {
            try
            {
                int uInc = UpdateInc(inc);
                return Json("Package inclusion successfuly updated, "+uInc+ " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult RetrieveTdates(int id)
        {
            try
            {
                var fetchTdates = FetchTDatesViaId(id);
                List<EditDates> d = new List<EditDates>();
                foreach (var row in fetchTdates)
                {
                    d.Add(new EditDates
                    {
                        p_id = row.p_id,
                        tdates_id = row.tdates_id,
                        dfrom = row.dfrom,
                        dto = row.dto
                    });
                }
              
                return Json(d, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: "+ ex.Message);
            }
        }

        public ActionResult UpdateTdates(string dates)
        {
            try
            {
                int uDates = _UpdateTdates(dates);
                return Json("Depature dates successfuly updated, " + uDates + " row(s) affected!");
            }
            catch (Exception e)
            {
                return Json("Error: " + e.Message);
            }
        }

        public ActionResult UpdateUTPs(string upTP)
        {
            try
            {
                int uTps = UpdateTPs(upTP);
                return Json("Package successfuly updated, "+uTps+ " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }

        //public ActionResult UpdateUTPStatus(string status)
        //{
        //    try
        //    {
        //        var uStatus = _UpdateUTPStatus(status);
        //        return Json("Package status successfuly updated, " + uStatus + " row(s) affected!");
        //    }
        //    catch (Exception ex)
        //    {
        //        return Json("Error: " + ex.Message);
        //    }
        //}

        public ActionResult RetrieveImg(int id)
        {
            try
            {
                var selImg = Selectimg(id);
                List<DELImg> delimg = new List<DELImg>();
                foreach (var row in selImg)
                {
                    delimg.Add(new DELImg
                    {
                        img_id = row.img_id,
                        slides = row.slides
                    });
                }
                return Json(delimg, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: "+ ex.Message);
            }
        }

        [HttpPost]
        public ActionResult UpdateImg(int id, HttpPostedFileBase file)
        {
            try
            {
                var fileName = Path.GetFileName(file.FileName);
                var path = Path.Combine(Server.MapPath("~/DynamicFiles/"), fileName);
                int uImage = uSlides(id, file.FileName);
                file.SaveAs(path);
                return Json("Package slide successfuly updated, " + uImage + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult DeleteImg(int id)
        {
            try
            {
                var selImg = Selectimg(id);
                List<DELImg> delimg = new List<DELImg>();
                foreach (var row in selImg)
                {
                    delimg.Add(new DELImg
                    {
                        img_id = row.img_id,
                        slides = row.slides
                    });
                }
                if(delimg[0].slides != null)
                {
                    string fullpath = Request.MapPath("~/DynamicFiles/" + delimg[0].slides);
                    if (System.IO.File.Exists(fullpath))
                    {
                        System.IO.File.Delete(fullpath);
                    }

                }
                int Delimg = DeleteIMg(id);
                return Json("Package image successfuly deleted, "+ Delimg + " row(s) affected!");
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult UpdateUTPprice(string price)
        {
            try
            {
                int uPrice = UpdateUTPPrice(price);
                return Json("Package price successfuly updated, " + uPrice + " row(s) affected!");
            }
            catch(Exception e)
            {
                return Json("Error: " + e.Message);
            }
        }

        public ActionResult RetrieveEXC(int id)
        {
            try
            {
                var fetchExc = FetchExc(id);
                List<UTExc> uTExcs = new List<UTExc>();
                foreach (var row in fetchExc)
                {
                    uTExcs.Add(new UTExc
                    {
                        ex_id = row.ex_id,
                        name = row.name
                    });
                }
                return Json(uTExcs, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult UpdateUTPexc(string exc)
        {
            try
            {
                int uExc = UpdateExc(exc);
                return Json("Package exclusion successfuly updated, " + uExc + " row(s) affected!");
            }
            catch(Exception ex)
            {
                return Json("Error: "+ex.Message);
            }
        }

        public ActionResult RetrievePrice(int id)
        {
            try
            {
                var fetchUTPrice = FetchfetchUTPriceViaId(id);
                List<UTPrice> p = new List<UTPrice>();
                foreach (var row in fetchUTPrice)
                {
                    p.Add(new UTPrice
                    {
                        p_id = row.p_id,
                        p_price = row.p_price,
                    });
                }

                return Json(p, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return Json("Error: " +ex.Message);
            }
        }

        public ActionResult JsonDataOTDP(int id)
        {
            try
            {
                using (IDbConnection con = new MySqlConnection(DataLibrary.Connection.Connect.GetConnectionString()))
                {
                    var result = con.QueryMultiple(@"select gtp.status, gtp.p_id, gtp.p_name, gtp.p_price,
                          gca.c_type, gbr.bedtype, gtp.currency from t_package as gtp, category as gca,
                          bedrooms as gbr where gtp.c_id = gca.c_id and gtp.bedroom = gbr.bed_id
                          and gtp.p_id = @id;
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
                          where img.p_id = @id;
                          select vi.visa_id, vi.name from visareq as vi
                          where vi.p_id = @id;
                          select ph.ph_id, ph.ph_loc, ph.ph_phtel from photel as ph 
                          where ph.p_id = @id;",
                           new { @id = id });
                    var aTp = result.ReadSingle<AdminTP>();
                    aTp.adminTDs = result.Read<AdminTD>().ToList();
                    aTp.adminINCs = result.Read<AdminINC>().ToList();
                    aTp.adminCONs = result.Read<AdminCON>().ToList();
                    aTp.adminEXCs = result.Read<AdminEXC>().ToList();
                    aTp.adminFLIs = result.Read<AdminFLI>().ToList();
                    aTp.adminITIs = result.Read<AdminITI>().ToList();
                    aTp.adminIMGs = result.Read<AdminIMG>().ToList();
                    aTp.adminVIs = result.Read<AdminVI>().ToList();
                    aTp.photels = result.Read<Photel>().ToList();
                    return Json(aTp, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception)
            {
                return null;
            }
        }

        public ActionResult CatDD()
        {
            var CatData = CategoryData();
            List<Categories> catdata = new List<Categories>();
            foreach (var row in CatData)
            {
                catdata.Add(new Categories
                {
                    c_id = row.c_id,
                    c_name = row.c_type
                });
            }
            return Json((catdata).ToList(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult BedDD()
        {
            var bedtype = bedtypeData();
            List<Bedtype> bedtypes = new List<Bedtype>();
            foreach (var row in bedtype)
            {
                bedtypes.Add(new Bedtype
                {
                    bedid = row.bed_id,
                    bedtype = row.bedtype
                });
            }
            return Json((bedtypes).ToList(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult ViewPackage()
        {
            var fetchPackage = FetchPackage();
            List<TourPackagePartial> packages = new List<TourPackagePartial>();
            foreach (var row in fetchPackage)
            {
                packages.Add(new TourPackagePartial
                {
                    p_id = row.p_id,
                    p_name = row.p_name,
                    p_price = row.p_price,
                    bedtype = row.bedtype,
                    c_type = row.c_type
                });
            }

            return Json(new { data = packages }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult PackageDD()
        {
            var dDPackage = dDPackages();
            List<PnameDD> pnameDD = new List<PnameDD>();
            foreach (var row in dDPackage)
            {
                pnameDD.Add(new PnameDD
                {
                    p_id = row.p_id,
                    p_name = row.p_name
                });

            }
            return Json((pnameDD).ToList(), JsonRequestBehavior.AllowGet);
        }

        //public ActionResult DDNTP()
        //{
        //    var ddNtp = dDNTP();
        //    List<NTPackageDD> nTPackageDDs = new List<NTPackageDD>();
        //    foreach (var row in ddNtp)
        //    {
        //        nTPackageDDs.Add(new NTPackageDD
        //        {
        //            nt_id = row.nt_id,
        //            name = row.name
        //        });
        //    }
        //    return Json((nTPackageDDs).ToList(), JsonRequestBehavior.AllowGet);
        //}

        public ActionResult AddNTPackage()
        {
            return View();
        }

        //[HttpPost]
        //public ActionResult AddNTPackage(string ntPAdd)
        //{
        //    try
        //    {
        //        int nTpAdd = NTpAdd(ntPAdd);
        //        return Json("Package name successfuly addded, "+ nTpAdd + " row(s) added!");
        //    }
        //    catch (Exception ex)
        //    {
        //        return Json("Error: " + ex.Message);
        //    }
        //}

        public ActionResult AddPackage()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddPackage(string p_name, string p_price, string currency, int p_bedroom, int p_category, List<string> p_traveldate, List<string> p_flghtdetails, List<string> p_inclusion,
           List<string> ItineraryName, List<string> p_termCondition, List<string> p_exclusion, List<string> visa, List<string> photels)
        {
            try
            {
                int packageData = AddPackageDatails(p_name, p_price, currency, p_category, p_bedroom, p_traveldate, p_flghtdetails, p_inclusion, ItineraryName, p_termCondition, p_exclusion, visa, photels);
                return Json("Package details Saved!");
            }
            catch (Exception e)
            {
                return Json("Errror: " + e.Message);
            }
        }

        public ActionResult AddBedRooms()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddBedRooms(Bedtype data)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    int bedroomData = AddBedroom(data.bedtype);
                    return Content("Bedroom Type Successfuly saved!");
                }
                catch(Exception e)
                {
                    return Content("Error: "+ e.Message);
                }
            }
            else
            {
                return Content("Failed to saved Bedroom Type!");
            }
        }

        public ActionResult AddCategory()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddCategory(Categories data)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    int insertData = AddCategories(data.c_name);
                    return Content("Category successfuly saved!");
                }
                catch(Exception e)
                {
                    return Content("Error: " + e.Message);
                }
            }
            else
            {
                return Content("Failed to save category!");
            }
        }


        public ActionResult AddImage()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddImage(int _packagename)
        {
            string path = Server.MapPath("~/DynamicFiles/");
            HttpFileCollectionBase files = Request.Files;
            for(int i =0; i < files.Count; i++)
            {
                HttpPostedFileBase file = files[i];
                file.SaveAs(path + file.FileName);
                int insertSlide = AddSlide(_packagename, file.FileName);
            }
            return Json(files.Count + " Files Uploaded");
        }

        public ActionResult ChatBot()
        {
            return PartialView();
        }

        [HttpPost]
        public ActionResult SaveCaptions(string captions)
        {
            try
            {
                int saveCaption = SaveCaption(captions);
                return Json("Captions successfuly saved! " + saveCaption +" row(s) affected.");
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message);
            }
        }
    }
}