using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class InternationalDisplay
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public double p_price { get; set; }
        public string c_type { get; set; }
        public string bedtype { get; set; }
        public string currency { get; set; }
        public string img { get; set; }
    }

    public class paginate
    {
        public List<InternationalDisplay> internationalDisplays { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int RecordCount { get; set; }
    }

    public class DomesticDisplay
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public double p_price { get; set; }
        public string c_type { get; set; }
        public string bedtype { get; set; }
        public string currency { get; set; }
        public string img { get; set; }
    }

    public class EducationalDisplay
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public double p_price { get; set; }
        public string c_type { get; set; }
        public string bedtype { get; set; }
        public string img { get; set; }
    }
}