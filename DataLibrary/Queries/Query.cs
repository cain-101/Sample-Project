using Dapper;
using DataLibrary.GuestModel;
using DataLibrary.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Queries
{
    public static class Query
    {
        public static int AddBedroom(string bedtype)
        {
            Bedtype BedType = new Bedtype
            {
                bedtype = bedtype
            };

            string sql = @"insert into bedrooms (bedtype) values (@bedtype);";
            return Connection.Connect.SaveData<Bedtype>(sql, BedType);
        }

        public static int AddCategories(string data)
        {
            Category category = new Category
            {
                c_type = data
            };

            string sql = @"insert into category (c_type) values (@c_type);";
            return Connection.Connect.SaveData<Category>(sql, category);
        }

        //public static int NTpAdd(string ntP)
        //{
        //    var nt = ntP.Split('|');
        //    NTPackageAdd nTPackageAdd = new NTPackageAdd
        //    {
        //        name = nt[0],
        //        cat_id = Convert.ToInt32(nt[1])
        //    };
        //    string sql = @"Insert into dbo.nt_package (name,cat_id) values (@name,@cat_id);";
        //    return Connection.Connect.SaveNTP<NTPackageAdd>(sql, nTPackageAdd);
        //}

        public static int DeleteTDates(int id)
        {
            string sql = @"delete from traveldates where tdates_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int Deleteiti(int id)
        {
            string sql = @"delete from itinerary where it_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int DeleteTAc(int id)
        {
            string sql = @"delete from tcondition where con_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int DeleteFLi(int id)
        {
            string sql = @"delete from flightdetails where fl_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int DeletePho(int id)
        {
            string sql = @"delete from photel where ph_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int DeleteEXc(int id)
        {
            string sql = @"delete from exclusion where ex_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int DeleteINC(int id)
        {
            string sql = @"delete from inclusion where in_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int DeleteIMg(int id)
        {
            string sql = @"delete from imagetable where img_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int DeleteISS(int id)
        {
            string sql = @"delete from indexslide where is_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static int DeleteVi(int id)
        {
            string sql = @"delete from visareq where visa_id = "+id+"";
            return Connection.Connect.DeleteTdata(sql);
        }

        public static List<OutToDateP> GetOTDids()
        {
            string sql = @"select distinct pt.p_id, pt.p_name, (select img.slides from imagetable as img 
                            where img.p_id = pt.p_id order by img.img_id limit 1,1) as img
                            from t_package as pt
                            right join traveldates as td on pt.p_id = td.p_id
                            where pt.status = 1 and CAST(CURDATE() as date) > td.dfrom 
                            or CAST(CURDATE() as date) > td.dto or cast(CURDATE() as date) between td.dfrom and td.dto order by pt.p_id;";
            return Connection.Connect.LoadData<OutToDateP>(sql);
        }

        public static List<Dates> GetOTDates()
        {
            string sql = @"select p_id, dfrom, dto, tdates_id
                            from traveldates where CAST(CURDATE() as date) > dfrom 
                            or CAST(CURDATE() as date) > dto or cast(CURDATE() as date) between dfrom and dto;";
            return Connection.Connect.LoadData<Dates>(sql);
        }

        public static List<DatesP> GetOTDatesP()
        {
            string sql = @"select p_id, dfrom, dto, tdates_id from traveldates;";
            return Connection.Connect.LoadData<DatesP>(sql);
        }

        public static List<Captions> GetCaptions()
        {
            string sql = @"select * from captions;";
            return Connection.Connect.LoadData<Captions>(sql);
        }

        public static int AddSlide(int _packagename, string data)
        {
            Slides slides = new Slides
            {
                slides = data,
                p_id = _packagename
            };

            string sql = @"insert into imagetable (slides, p_id) values (@slides, @p_id);";
            return Connection.Connect.SaveData<Slides>(sql, slides);
        }

        public static int UIndexT(string i)
        {
            var ii = i.Split('|');
            CapIndexTitle capIndexTitle = new CapIndexTitle
            {
                cap_id = Convert.ToInt32(ii[0]),
                index_title = ii[1]
            };
            var iii = new DynamicParameters();
            iii.Add("@Title", capIndexTitle.index_title);
            iii.Add("@Id", capIndexTitle.cap_id);
            string sql = @"update captions set index_title = @Title where cap_id = @Id;";
            return Connection.Connect.UpdateData(sql, iii);
        }

        public static int UpdateFC(string fc)
        {
            var fcs = fc.Split('|');
            CapFC capFC = new CapFC
            {
                cap_id = Convert.ToInt32(fcs[0]),
                fh_cap = fcs[1],
                fb_cap = fcs[2]
            };
            var f = new DynamicParameters();
            f.Add("@Id", capFC.cap_id);
            f.Add("@H", capFC.fh_cap);
            f.Add("@B", capFC.fb_cap);
            string sql = @"update captions set fh_cap = @H, fb_cap = @B where cap_id = @Id;";
            return Connection.Connect.UpdateData(sql, f);
        }

        public static int UpdateSC(string sc)
        {
            var s = sc.Split('|');
            CapSC capSC = new CapSC
            {
                cap_id = Convert.ToInt32(s[0]),
                sh_cap = s[1],
                sb_cap = s[2]
            };
            var ffc = new DynamicParameters();
            ffc.Add("@Id", capSC.cap_id);
            ffc.Add("@H", capSC.sh_cap);
            ffc.Add("@B", capSC.sb_cap);
            string sql = @"update captions set sh_cap = @H, sb_cap = @B where cap_id = @Id;";
            return Connection.Connect.UpdateData(sql, ffc);
        }

        public static int SaveCaption(string captions)
        {
            var c = captions.Split('|');
            Captions caption = new Captions
            {
                fh_cap = c[0],
                fb_cap = c[1],
                sh_cap = c[2],
                sb_cap = c[3],
                index_title = c[4]
            };
            string sql = @"insert into captions (fh_cap, fb_cap, sh_cap, sb_cap, index_title) values
                           (@fh_cap, @fb_cap, @sh_cap, @sb_cap, @index_title);";
            return Connection.Connect.SaveData<Captions>(sql, caption);
        }

        public static int AddIndexSlide(string data)
        {
            IndexSlides indexSlides = new IndexSlides
            {
                is_img = data
            };
            string sql = @"Insert into indexslide (is_img) values (@is_img);";
            return Connection.Connect.SaveData<IndexSlides>(sql, indexSlides);
        }

        public static List<Bedtype> bedtypeData()
        {
            string sql = @"select * from bedrooms;";
            return Connection.Connect.LoadData<Bedtype>(sql);
        }

        public static List<IndexModel> GetIdANDImg()
        {
            string sql = @"select pt.p_id, pt.c_id, (select img.slides from imagetable as img where img.p_id = pt.p_id order by img.img_id limit 1,1)
                           as img from t_package as pt where pt.status = 1 order by pt.p_id desc;";
            return Connection.Connect.LoadData<IndexModel>(sql);
        }

        public static List<InternationalDisplay> GetInternationalDisplay()
        {
            string sql = @"select gtp.p_id, gtp.p_name, gtp.p_price,
                          gca.c_type, gbr.bedtype, gtp.currency, (select img.slides from imagetable as img where img.p_id = gtp.p_id order by img.img_id limit 1,1) as img 
                          from t_package as gtp, category as gca,
                          bedrooms as gbr where gtp.c_id = gca.c_id and gtp.bedroom = gbr.bed_id
                          and gtp.status = 1 and gtp.c_id = 1;";
            return Connection.Connect.LoadData<InternationalDisplay>(sql);
        }

        public static List<IndexSlides> GetIndexSlides()
        {
            string sql = @"Select * from indexslide";
            return Connection.Connect.LoadData<IndexSlides>(sql);
        }

        public static List<InternationalDisplay> GetPDisplay()
        {
            string sql = @"select gtp.p_id, gtp.p_name, gtp.p_price,
                          gca.c_type, gbr.bedtype, gtp.currency, (select img.slides from imagetable as img where img.p_id = gtp.p_id order by img.img_id limit 1,1) as img 
                          from t_package as gtp, category as gca,
                          bedrooms as gbr where gtp.c_id = gca.c_id and gtp.bedroom = gbr.bed_id
                          and gtp.status = 1;";
            return Connection.Connect.LoadData<InternationalDisplay>(sql);
        }

        public static List<DomesticDisplay> GetDomesticDisplay()
        {
            string sql = @"select gtp.p_id, gtp.p_name, gtp.p_price,
                          gca.c_type, gbr.bedtype, gtp.currency, (select img.slides from imagetable as img where img.p_id = gtp.p_id order by img.img_id limit 1,1) as img 
                          from t_package as gtp, category as gca,
                          bedrooms as gbr where gtp.c_id = gca.c_id and gtp.bedroom = gbr.bed_id
                          and gtp.status = 1 and gtp.c_id = 2;";
            return Connection.Connect.LoadData<DomesticDisplay>(sql);
        }

        public static List<EducationalDisplay> GetEducationalDisplay()
        {
            string sql = @"select gtp.p_id, gtp.p_name, gtp.p_price,
                          gca.c_type, gbr.bedtype, (select img.slides from imagetable as img where img.p_id = gtp.p_id order by img.img_id limit 1,1) as img 
                          from t_package as gtp, category as gca,
                          bedrooms as gbr where gtp.c_id = gca.c_id and gtp.bedroom = gbr.bed_id
                          and gtp.status = 1 and gtp.c_id = 3;";
            return Connection.Connect.LoadData<EducationalDisplay>(sql);
        }

        public static List<Category> CategoryData()
        {
            string sql = @"select * from category;";
            return Connection.Connect.LoadData<Category>(sql);
        }

        public static List<Dates> FetchTDatesViaId(int id)
        {
            string sql = @"select * from traveldates where tdates_id = "+id+"";
            return Connection.Connect.LoadData<Dates>(sql);
        }

        public static List<UTPh> Fetchph(int id)
        {
            string sql = @"select * from photel where ph_id = "+id+"";
            return Connection.Connect.LoadData<UTPh>(sql);
        }

        public static List<UTFli> FetchFli(int id)
        {
            string sql = @"select * from flightdetails where fl_id = "+id+"";
            return Connection.Connect.LoadData<UTFli>(sql);
        }

        public static List<UTExc> FetchExc(int id)
        {
            string sql = @"select * from exclusion where ex_id = "+id+"";
            return Connection.Connect.LoadData<UTExc>(sql);
        }

        public static List<UIti> FetchIti(int id)
        {
            string sql = @"select * from itinerary where it_id = "+id+"";
            return Connection.Connect.LoadData<UIti>(sql);
        }

        public static List<UTINC> FetchInc(int id)
        {
            string sql = @"select in_id, name from inclusion where in_id = "+id+"";
            return Connection.Connect.LoadData<UTINC>(sql);
        }

        public static List<UTVis> FetchVis(int id)
        {
            string sql = @"select * from visareq where visa_id = "+id+"";
            return Connection.Connect.LoadData<UTVis>(sql);
        }

        public static List<UTTac> FetchTac(int id)
        {
            string sql = @"select * from tcondition where con_id = "+id+"";
            return Connection.Connect.LoadData<UTTac>(sql);
        }

        public static List<UTPrice> FetchfetchUTPriceViaId(int id)
        {
            string sql = @"select * from t_package where p_id = "+id+"";
            return Connection.Connect.LoadData<UTPrice>(sql);
        }

        public static List<DELImg> Selectimg(int id)
        {
            string sql = @"select img_id, slides from imageTable where img_id = " + id+"";
            return Connection.Connect.LoadData<DELImg>(sql);
        }

        public static List<TourPackagePartial> FetchPackage()
        {
            string sql = @"select tp.p_id, tp.p_name, tp.p_price, br.bedtype, ca.c_type  from t_package as tp,
                         bedrooms as br, category as ca 
                         where tp.bedroom = br.bed_id and tp.c_id = ca.c_id;";
            return Connection.Connect.LoadData<TourPackagePartial>(sql);
        }

        public static List<DDPackage> dDPackages()
        {
            string sql = @"select * from t_package";
            return Connection.Connect.LoadData<DDPackage>(sql);
        }

        //public static List<NTPackageDD> dDNTP()
        //{
        //    string sql = @"select * from dbo.nt_package";
        //    return Connection.Connect.LoaddDNTP<NTPackageDD>(sql);
        //}
        
        public static List<PackageList> Packagelist()
        {
            string sql = @"select tp.p_id, tp.p_name, tp.p_price, tp.status,
                        c.c_id, c.c_type,
                        b.bed_id, b.bedtype, currency
                        from t_package as tp
                        left join category as c on tp.c_id = c.c_id
                        left join bedrooms as b on tp.bedroom = b.bed_id
                        order by tp.p_id DESC;";
            return Connection.Connect.LoadData<PackageList>(sql);
        }

        public static int _UpdateTdates(string d)
        {
            var td = d.Split('|');
            UDates dates = new UDates
            {
                tdates_id = Convert.ToInt32(td[0]),
                dfrom = Convert.ToDateTime(td[1]),
                dto = Convert.ToDateTime(td[2])

            };
            var dp = new DynamicParameters();
            dp.Add("@Id", dates.tdates_id);
            dp.Add("@From", dates.dfrom);
            dp.Add("@To", dates.dto);
            string sql = @"Update traveldates set dfrom = @From, dto = @To where tdates_id = @Id;";
            return Connection.Connect.UpdateData(sql, dp);
        }

        public static int UpdateTPs(string tp)
        {
            var t = tp.Split('|');
            Utps utps = new Utps
            {
                p_id = Convert.ToInt32(t[0]),
                p_name = t[1],
                p_price = Convert.ToInt32(t[2]),
                c_id = Convert.ToInt32(t[3]),
                b_id = Convert.ToInt32(t[4]),
                status = Convert.ToInt32(t[5])
            };
            var tps = new DynamicParameters();
            tps.Add("@Id", utps.p_id);
            tps.Add("@Name", utps.p_name);
            tps.Add("@Price", utps.p_price);
            tps.Add("@Cid", utps.c_id);
            tps.Add("@Bid", utps.b_id);
            tps.Add("@Status", utps.status);
            string sql = @"Update t_package set p_name = @Name, p_price = @Price, c_id = @Cid, bedroom = @Bid, status = @Status where p_id = @Id;";
            return Connection.Connect.UpdateData(sql, tps);
        }

        public static int uSlides(int id, string img)
        {
            DELImg slide = new DELImg
            {
                img_id = id,
                slides = img
            };
            var im = new DynamicParameters();
            im.Add("@Id", slide.img_id);
            im.Add("@Img", slide.slides);
            string sql = @"Update imagetable set slides = @Img where img_id = @Id;";
            return Connection.Connect.UpdateData(sql, im);
        }

        public static int UIssSlides(int id, string img)
        {
            IndexSlides indexSlides = new IndexSlides
            {
                is_id = id,
                is_img = img
            };
            var iss = new DynamicParameters();
            iss.Add("@Id", indexSlides.is_id);
            iss.Add("@Img", indexSlides.is_img);
            string sql = @"Update indexslide set is_img = @Img where is_id = @Id;";
            return Connection.Connect.UpdateData(sql, iss);
        }

        public static int UpdateVis(string v)
        {
            var vi = v.Split('|');
            UTVis uTVis = new UTVis
            {
                visa_id = Convert.ToInt32(vi[0]),
                name = vi[1]
            };
            var vis = new DynamicParameters();
            vis.Add("@Id", uTVis.visa_id);
            vis.Add("@Name", uTVis.name);
            string sql = @"Update visareq set name = @Name where visa_id = @Id;";
            return Connection.Connect.UpdateData(sql, vis);
        }

        public static int UpdatePh(string ph)
        {
            var p = ph.Split('|');
            UTPh _ph = new UTPh
            {
                ph_id = Convert.ToInt32(p[0]),
                ph_loc = p[1],
                ph_phtel = p[2]
            };
            var _p = new DynamicParameters();
            _p.Add("@Id", _ph.ph_id);
            _p.Add("@Loc", _ph.ph_loc);
            _p.Add("@Des", _ph.ph_phtel);
            string sql = @"Update photel set ph_loc = @Loc, ph_phtel = @Des where ph_id = @Id;";
            return Connection.Connect.UpdateData(sql, _p);
        }

        public static int UpdateFli(string f)
        {
            var fl = f.Split('|');
            UTFli uTFli = new UTFli
            {
                fl_id = Convert.ToInt32(fl[0]),
                name = fl[1]
            };
            var fli = new DynamicParameters();
            fli.Add("@Id", uTFli.fl_id);
            fli.Add("@Name", uTFli.name);
            string sql = @"Update flightdetails set name = @Name where fl_id = @Id;";
            return Connection.Connect.UpdateData(sql, fli);
        }

        public static int UpdateExc(string e)
        {
            var ex = e.Split('|');
            UTExc uTExc = new UTExc
            {
                ex_id = Convert.ToInt32(ex[0]),
                name = ex[1]

            };
            var exc = new DynamicParameters();
            exc.Add("@Id", uTExc.ex_id);
            exc.Add("@Name", uTExc.name);
            string sql = @"Update exclusion set name = @Name where ex_id = @Id;";
            return Connection.Connect.UpdateData(sql,exc);
        }
        public static int UpdateTac(string t)
        {
            var tac = t.Split('|');
            UTTac uTTac = new UTTac
            {
                con_id = Convert.ToInt32(tac[0]),
                name = tac[1]
            };
            var ta = new DynamicParameters();
            ta.Add("@Id", uTTac.con_id);
            ta.Add("@Name", uTTac.name);
            string sql = @"Update tcondition set name = @Name where con_id = @Id;";
            return Connection.Connect.UpdateData(sql, ta);
        }

        public static int UpdateITI(string iti)
        {
            var i = iti.Split('|');
            UIti itis = new UIti
            {
                it_id = Convert.ToInt32(i[0]),
                name = i[1],
                description = i[2],
                bmeal = Convert.ToInt32(i[3] != "1" ? "0" : i[3]),
                lmeal = Convert.ToInt32(i[4] != "1" ? "0" : i[4]),
                dmeal = Convert.ToInt32(i[5] != "1" ? "0" : i[5])
            };
            var its = new DynamicParameters();
            its.Add("@Id", itis.it_id);
            its.Add("@Name", itis.name);
            its.Add("@Des", itis.description);
            its.Add("@Bmeal", itis.bmeal);
            its.Add("@Lmeal", itis.lmeal);
            its.Add("@Dmeal", itis.dmeal);
            string sql = @"Update itinerary set name = @Name, description = @Des, bmeal = @Bmeal, lmeal = @Lmeal, dmeal = @Dmeal where it_id = @Id;";
            return Connection.Connect.UpdateData(sql, its);
        }

        public static int UpdateInc(string i)
        {
            var ii = i.Split('|');
            UTINC uTINC = new UTINC
            {
                in_id = Convert.ToInt32(ii[0]),
                name = ii[1]
            };
            var iii = new DynamicParameters();
            iii.Add("@Id", uTINC.in_id);
            iii.Add("@Name", uTINC.name);
            string sql = @"Update inclusion set name = @Name where in_id = @Id;";
            return Connection.Connect.UpdateData(sql, iii);
        }

        public static int UpdateUTPPrice(string _p)
        {
            var p = _p.Split('|');
            UTPrice uTPrice = new UTPrice
            {
                p_id = Convert.ToInt32(p[0]),
                p_price = p[1]
            };
            var pp = new DynamicParameters();
            pp.Add("@Id", uTPrice.p_id);
            pp.Add("@Price", uTPrice.p_price);
            string sql = @"Update t_package set p_price = @Price where p_id = @Id";
            return Connection.Connect.UpdateData(sql, pp);
        }

        //public static int _UpdateUTPStatus(string s)
        //{
        //    var ss = s.Split('|');
        //    UTStatus uTStatus = new UTStatus
        //    {
        //        p_id = Convert.ToInt32(ss[0]),
        //        status = Convert.ToInt32(ss[1]) 
        //    };
        //    var st = new DynamicParameters();
        //    st.Add("@Id", uTStatus.p_id);
        //    st.Add("@Status", uTStatus.status);
        //    string sql = @"Update dbo.";
        //}

        public static int AddPackageDatails(string name, string price, string currency, int category, int bedroom, List<string> dates, List<string> flightdetails, List<string> inclusion,
            List<string> itinerary, List<string> conditions, List<string> exclusion, List<string> visa, List<string> photels)
        {
            TourPackageIns package = new TourPackageIns
            {
                p_name = name,
                p_price = price,
                p_category = category,
                p_bedroom = bedroom,
                currency = currency
            };
            var p = new DynamicParameters();
            p.Add("@Id", 0, System.Data.DbType.Int32, System.Data.ParameterDirection.Output);
            p.Add("@Name", package.p_name);
            p.Add("@Price", package.p_price);
            p.Add("@Category", package.p_category);
            p.Add("@Bedroom", package.p_bedroom);
            p.Add("@Currency", package.currency);
            p.Add("@Status", 1);
            string sql = @"insert into t_package (p_name, p_price, c_id, bedroom, currency, status)
                        values (@Name, @Price, @Category, @Bedroom, @Currency, @Status);";
            int PId = Connection.Connect.SaveData(sql, p);

            int visaDetails = 0;
            if (visa.Count > 0 && visa[0] != "")
            {
                var v = new DynamicParameters();
                foreach (var _visa in visa)
                {
                    if(_visa == "" || _visa == null)
                    {
                        continue;
                    }
                    VisaInsert visaInsert = new VisaInsert
                    {
                        name = _visa
                    };
                    v.Add("@Name", visaInsert.name);
                    string q = @"insert into visareq (name, p_id)
                                  values (@Name, (select max(p_id) from t_package));";
                    visaDetails = Connection.Connect.SaveData(q, v);
                }
                visa.Clear();
            }

            int exclusionDetails = 0;
            if (exclusion.Count > 0 && exclusion[0] != "")
            {
                var ex = new DynamicParameters();
                foreach (var _exclusion in exclusion)
                {
                    if (_exclusion == "" || _exclusion == null)
                    {
                        continue;
                    }
                    ExclusionInsert exclusionInsert = new ExclusionInsert
                    {
                        name = _exclusion
                    };
                    ex.Add("@Name", exclusionInsert.name);
                    string e = @"insert into exclusion (name, p_id)
                                values (@Name, (select max(p_id) from t_package));";
                    exclusionDetails = Connection.Connect.SaveData(e, ex);
                }
                exclusion.Clear();
            }

            int conDetails = 0;
            if (conditions.Count > 0 && conditions[0] != "")
            {
                var con = new DynamicParameters();
                foreach (var _condition in conditions)
                {
                    if(_condition == "" || _condition == null)
                    {
                        continue;
                    }
                    ConditionInsert conditionInsert = new ConditionInsert
                    {
                        name = _condition
                    };
                    con.Add("@Name", conditionInsert.name);
                    string c = @"insert into tcondition (name, p_id)
                                values (@Name, (select max(p_id) from t_package));";
                    conDetails = Connection.Connect.SaveData(c, con);
                }
                conditions.Clear();
            }

            int InclusioDetails = 0;
            if (inclusion.Count > 0 && inclusion[0] != "")
            {
                var inc = new DynamicParameters();
                foreach (var _inclusion in inclusion)
                {
                    if (_inclusion == null || _inclusion == "")
                    {
                        continue;
                    }
                    InclusionInsert inclusionImsert = new InclusionInsert
                    {
                        name = _inclusion
                    };
                    inc.Add("@Name", inclusionImsert.name);
                    string i = @"insert into inclusion (name, p_id)
                                values(@Name, (select max(p_id) from t_package));";
                    InclusioDetails = Connection.Connect.SaveData(i, inc);
                }
                inclusion.Clear();
            }

            int fDetails = 0;
            if (flightdetails.Count > 0 && flightdetails[0] != "")
            {
                var fd = new DynamicParameters();
                foreach (var fdeatils in flightdetails)
                {
                    if(fdeatils == null || fdeatils == "")
                    {
                       continue;
                    }
                    FlightDetailsInsert flightDetails = new FlightDetailsInsert
                    {
                        name = fdeatils
                    };
                    fd.Add("@Name", flightDetails.name);
                    string f = @"insert into flightdetails (name, p_id)
                                values(@Name, (select max(p_id) from t_package));";
                    fDetails = Connection.Connect.SaveData(f,fd);
                }
                flightdetails.Clear();
            }

            int TDates = 0;
            if (dates.Count > 0 && dates[0] != "|")
            {
                var td = new DynamicParameters();
                foreach (var Tdates in dates)
                {
                    var splitDate = Tdates.Split('|');
                    TravelDatesInsert travelDates = new TravelDatesInsert
                    {
                        dfrom = Convert.ToDateTime(splitDate[0]),
                        dto = Convert.ToDateTime(splitDate[1] == "" ? new DateTime(2000, 01, 01).ToString() : splitDate[1])
                    };
                    td.Add("@Dfrom", travelDates.dfrom);
                    td.Add("@Dto", travelDates.dto);
                    string d = @"insert into traveldates (dfrom, dto, p_id)
                                values (@Dfrom, @Dto, (select max(p_id) from t_package));";
                    TDates = Connection.Connect.SaveData(d, td);
                }
                dates.Clear();
            }

            int _hotel = 0;
            if (photels.Count > 0 && photels[0] != "")
            {
                var ph = new DynamicParameters();
                foreach (var hotel in photels)
                {
                    var htel = hotel.Split('|');
                    if (htel[0] == "" || htel[0] == null || htel[1] == "" || htel[1] == null)
                    {
                        continue;
                    }
                    PhotelInsert photelInsert = new PhotelInsert
                    {
                        ph_loc = htel[0],
                        ph_phtel = htel[1]
                    };
                    ph.Add("@PHLOC", photelInsert.ph_loc);
                    ph.Add("@PHTEL", photelInsert.ph_phtel);
                    string pht = @"insert into photel (ph_loc, ph_phtel, p_id)
                                   values (@PHLOC, @PHTEL, (select max(p_id) from t_package));";
                    _hotel = Connection.Connect.SaveData(pht, ph);
                }
                photels.Clear();
            }

            int Idata = 0;
            if (itinerary.Count > 0 && itinerary[0] != "|")
            {
                var iti = new DynamicParameters();
                foreach (var itineray in itinerary)
                {
                    var _itinerary = itineray.Split('|');
                    if (_itinerary[0] == "" || _itinerary[0] == null || _itinerary[1] == null || _itinerary[1] == "")
                    {
                        continue;
                    }
                    ItinerayInsert itinerayInsert = new ItinerayInsert
                    {
                        name = _itinerary[0],
                        description = _itinerary[1],
                        bmeal = _itinerary[2] != "1" ? "0" : _itinerary[2],
                        lmeal = _itinerary[3] != "1" ? "0" : _itinerary[3],
                        dmeal = _itinerary[4] != "1" ? "0" : _itinerary[4]
                    };
                    iti.Add("@Name", itinerayInsert.name);
                    iti.Add("@Des", itinerayInsert.description);
                    iti.Add("@Bmeal", itinerayInsert.bmeal);
                    iti.Add("@Lmeal", itinerayInsert.lmeal);
                    iti.Add("@Dmeal", itinerayInsert.dmeal);
                    string it = @"insert into itinerary (name, description, bmeal, lmeal, dmeal, p_id)
                                 values (@Name, @Des, @Bmeal, @Lmeal, @Dmeal, (select max(p_id) from t_package));";
                    Idata = Connection.Connect.SaveData(it, iti);
                }
                itinerary.Clear();
            }
           
            return  PId + visaDetails + exclusionDetails + conDetails + InclusioDetails + fDetails + TDates + Idata + _hotel;
        }
    }
}
