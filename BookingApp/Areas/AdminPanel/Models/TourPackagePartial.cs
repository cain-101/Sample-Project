using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class TourPackagePartial
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public string p_price { get; set; }
        public string bedtype { get; set; }
        public string c_type { get; set; }
    }
}