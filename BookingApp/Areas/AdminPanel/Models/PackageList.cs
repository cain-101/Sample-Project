using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class PackageList
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public string p_price { get; set; }
        public int c_id { get; set; }
        public string c_type { get; set; }
        public int bed_id { get; set; }
        public string bedtype { get; set; }
        public string currency { get; set; }
        public int status { get; set; }
        public string str_status
        {
            get
            {
                if(status == 1)
                {
                    return "Available";
                }
                else
                {
                    return "Not Available";
                }
            }
        }
    }
}