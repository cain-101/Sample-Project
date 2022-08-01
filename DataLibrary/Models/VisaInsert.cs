using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class VisaInsert
    {
        public string name { get; set; }
    }

    public class ExclusionInsert
    {
        public string name { get; set; }
    }

    public class ConditionInsert
    {
        public string name { get; set; }
    }

    public class InclusionInsert
    {
        public string name { get; set; }
    }

    public class FlightDetailsInsert
    {
        public string name { get; set; }
    }

    public class TravelDatesInsert
    {
        public DateTime dfrom { get; set; }
        public DateTime dto { get; set; }
    }

    public class PhotelInsert
    {
        public string ph_loc { get; set; }
        public string ph_phtel { get; set; } 
    }

    public class ItinerayInsert
    {
        public string name { get; set; }
        public string description { get; set; }
        public string bmeal { get; set; }
        public string lmeal { get; set; }
        public string dmeal { get; set; }
    }
}
