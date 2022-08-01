using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class FetchPackage
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public string p_price { get; set; }
        public string p_category { get; set; }
        public string p_bedroom { get; set; }
        public List<InclusionList[]> inclusionLists { get; set; }
        public List<ConditionList[]> conditionLists { get; set; }
        public List<Exclusiions[]> exclusiions { get; set; }
        public List<Flights[]> flights { get; set; }
        public List<Itineray[]> itinerays { get; set; }
        public List<TDates[]> dates { get; set; }
        public List<sliders[]> sliders { get; set; }
        public List<Visareq[]> visareqs { get; set; }
    }

    public class InclusionList
    {
        public int in_id { get; set; }
        public string in_name { get; set; }
    }

    public class ConditionList
    {
        public int co_id { get; set; }
        public string co_name { get; set; }
    }

    public class Exclusiions
    {
        public int ex_id { get; set; }
        public string ex_name { get; set; }
    }

    public class Flights
    {
        public int fl_id { get; set; }
        public string fl_name { get; set; }
    }

    public class Itineray
    {
        public int it_id { get; set; }
        public string it_name { get; set; }
        public int bmeal { get; set; }
        public int lmeal { get; set; }
        public int dmeal { get; set; }
    }

    public class TDates
    {
        public int td_id { get; set; }
        public string td_fdate { get; set; }
        public string td_tdate { get; set; }
    }

    public class sliders
    {
        public int img_id { get; set; }
        public string img_slides { get; set; }
    }

    public class Visareq
    {
        public int vi_id { get; set; }
        public string vi_name { get; set; }
    }
}