using Dapper;
using DataLibrary.GuestModel;
using DataLibrary.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
//using System.Data.SqlClient;
using MySql.Data.MySqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Connection
{
    public class Connect
    {
        public static string GetConnectionString(string connection = "mycon")
        {
            return ConfigurationManager.ConnectionStrings[connection].ConnectionString;
        }

        public static int SaveData<D>(string sql, D data)
        {
            using (IDbConnection con = new MySqlConnection(GetConnectionString()))
            {
                return con.Execute(sql, data);
            }
        }

        public static List<D> LoadData<D>(string sql)
        {
            using (IDbConnection con = new MySqlConnection(GetConnectionString()))
            {
                return con.Query<D>(sql).ToList();
            }
        }

        public static int DeleteTdata(string sql)
        {
            using (IDbConnection con = new MySqlConnection(GetConnectionString()))
            {
                return con.Execute(sql);
            }
        }

        public static int UpdateData<D>(string sql, D data)
        {
            using (IDbConnection con = new MySqlConnection(GetConnectionString()))
            {
                return con.Execute(sql, data);
            }
        }

        /* ///////////////////////  */

        //public static int SaveBedType<B>(string sql, B data)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Execute(sql, data);
        //    }
        //}

        //public static int SaveNTP<NT>(string sql, NT ntp)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Execute(sql, ntp);
        //    }
        //}

        //public static int SaveSlide<S>(string sql, S data)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Execute(sql, data);
        //    }
        //}

        //public static int SaveIndexSlide<IS>(string sql, IS data)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Execute(sql, data);
        //    }
        //}

        //public static int SaveCaptions<CAP>(string sql, CAP c)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Execute(sql, c);
        //    }
        //}
        
        //public static List<CAP> LoadCaption<CAP>(string sql)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Query<CAP>(sql).ToList();
        //    }
        //}

        //public static int SaveCategory<C>(string sql, C data)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Execute(sql, data);
        //    }
        //}

        //public static List<B> LoadData<B>(string sql)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Query<B>(sql).ToList();
        //    }
        //}

        //public static List<DDP> LoadDDPackage<DDP>(string sql)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Query<DDP>(sql).ToList();
        //    }
        //}

        //public static List<ISS> LoadISS<ISS>(string sql)
        //{
        //    using (IDbConnection con = new MySqlConnection(GetConnectionString()))
        //    {
        //        return con.Query<ISS>(sql).ToList();
        //    }
        //}

        //public static List<NTDD> LoaddDNTP<NTDD>(string sql)
        //{
        //    using (IDbConnection con = new SqlConnection(GetConnectionString()))
        //    {
        //        return con.Query<NTDD>(sql).ToList();
        //    }
        //}

       // public static List<EXC> LoadTExc<EXC>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<EXC>(sql).ToList();
       //     }
       // }

       // public static List<TP> LoadPackageData<TP>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<TP>(sql).ToList();
       //     }
       // }

       // public static List<PL> LoadPList<PL>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<PL>(sql).ToList();
       //     }
       // }

       // public static List<UTP> LoadUTPrice<UTP>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<UTP>(sql).ToList();
       //     }
       // }

       // public static List<INC> LoadINC<INC>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<INC>(sql).ToList();
       //     }
       // }

       // public static List<OTD> LoadOTDids<OTD>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<OTD>(sql).ToList();
       //     }
       // }

       // public static List<OTDs> LoadOTDates<OTDs>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString())) 
       //     {
       //         return con.Query<OTDs>(sql).ToList();
       //     }
       // }

       // public static List<OTDPs> LoadOTDatesP<OTDPs>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<OTDPs>(sql).ToList();
       //     }
       // }

       // public static List<ITI> LoadUIti<ITI>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<ITI>(sql).ToList();
       //     }
       // }

       // public static int UpdateTDates<dp>(string sql, dp d)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, d);
       //     }
       // }

       // public static int UpdateFCs<FC>(string sql, FC f)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, f);
       //     }
       // }

       // public static int UpdateSCs<SC>(string sql, SC s)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, s);
       //     }
       // }

       // public static int UpdateUTPS<tp>(string sql, tp t)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, t);
       //     }
       // }

       // public static int UpdateEXC<ex>(string sql, ex e)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, e);
       //     }
       // }

       // public static int UpdateCapT<UI>(string sql, UI i)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, i);
       //     }
       // }

       // public static int UpdatedITIs<it>(string sql, it i)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, i);
       //     }
       // }

       // public static int UIss<Iss>(string sql, Iss iss)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, iss);
       //     }
       // }

       // public static int UpdatePrice<pp>(string sql, pp p)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, p);
       //     }
       // }

       // public static int UpdateINcs<i>(string sql, i ii)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, ii);
       //     }
       // }

       // public static int UpdateFLI<f>(string sql, f fl)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, fl);
       //     }
       // }

       // public static int UpdateIMg<m>(string sql, m img)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, img);
       //     }
       // }

       // public static int UpdateVisa<v>(string sql, v vi)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, vi);
       //     }
       // }

       // public static int UpdateTAC<t>(string sql, t ta)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, ta);
       //     }
       // }

       // public static int UpdatePH<ph>(string sql, ph p)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, p);
       //     }
       // }

       // public static List<TDs> LoadTDates<TDs>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<TDs>(sql).ToList();
       //     }
       // }

       // public static List<DELImg> GetImg<DELImg>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<DELImg>(sql).ToList();
       //     }
       // }

       // public static List<IC> LoadIndexContent<IC>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<IC>(sql).ToList();
       //     }
       // }

       // public static List<ID> LoadID<ID>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<ID>(sql).ToList();
       //     }
       // }

       // public static List<PD> LoadPD<PD>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<PD>(sql).ToList();
       //     }
       // }

       // public static List<DD> LoadDD<DD>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<DD>(sql).ToList();
       //     }
       // }

       // public static List<ED> LoadED<ED>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<ED>(sql).ToList();
       //     }
       // }

       // public static List<TAC> LoadTac<TAC>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<TAC>(sql).ToList();
       //     }
       // }

       // public static List<FLI> LoadFli<FLI>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<FLI>(sql).ToList();
       //     }
       // }

       // public static List<VI> LoadVIS<VI>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<VI>(sql).ToList();
       //     }
       // }

       // public static List<ph> LoadPh<ph>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<ph>(sql).ToList();
       //     }
       // }

       // public static int DeleteTdate(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DElImg(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DelIss(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DeleteEXC(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DeletePH(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DeleteVisa(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DeleteFLI(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DeleteITI(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DeleteInc(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static int DeleteTAC(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql);
       //     }
       // }

       // public static List<C> LoadCategory<C>(string sql)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Query<C>(sql).ToList();
       //     }
       // }

       // public static int SavePackage(string sql, DynamicParameters p)
       //{
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //          return con.Execute(sql, p);
       //     }
       //}

       // public static int SaveTDates(string d, DynamicParameters td)
       //{
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(d, td);
       //     }
       //} 

       // public static int SaveItinerary(string it,  DynamicParameters iti)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(it, iti);
       //     }
       // }

       // public static int SaveFlightDetails(string sql, DynamicParameters f)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, f);
       //     }
       // }

       // public static int SaveConditions(string sql, DynamicParameters tc)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, tc);
       //     }
       // }

       // public static int SaveHotel(string pht, DynamicParameters ph)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(pht, ph);
       //     }
       // }


       // public static int SaveExclusion(string sql, DynamicParameters e)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, e);
       //     }
       // }

       // public static int SaveVisareq(string sql, DynamicParameters v)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, v);
       //     }
       // }

       // public static int SaveInclusion(string sql, DynamicParameters _in)
       // {
       //     using (IDbConnection con = new MySqlConnection(GetConnectionString()))
       //     {
       //         return con.Execute(sql, _in);
       //     }
       // }
    }
}
