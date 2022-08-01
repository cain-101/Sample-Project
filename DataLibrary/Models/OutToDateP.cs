using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class OutToDateP
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public string img { get; set; }
    }

    public class Dates
    {
        public int p_id { get; set; }
        public int tdates_id { get; set; }
        public DateTime dfrom { get; set; }
        public DateTime dto { get; set; }
    }

    public class DatesP
    {
        public int p_id { get; set; }
        public int tdates_id { get; set; }
        public DateTime dfrom { get; set; }
        public DateTime dto { get; set; }
    }

    public class UDates
    {
        public int tdates_id { get; set; }
        public DateTime dfrom { get; set; }
        public DateTime dto { get; set; }
    }

    public class UTPrice
    {
        public int p_id { get; set; }
        public string p_price { get; set; }
    }

    public class UTStatus
    {
        public int p_id { get; set; }
        public int status { get; set; }
    }

    public class UTINC
    {
        public int in_id { get; set; }
        public string name { get; set; }
    }

    public class UIti
    {
        public int it_id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int bmeal { get; set; }
        public int lmeal { get; set; }
        public int dmeal { get; set; }
    }

    public class UTTac
    {
        public int con_id { get; set; }
        public string name { get; set; }
    }

    public class UTExc
    {
        public int ex_id { get; set; }
        public string name { get; set; }
    }

    public class UTFli
    {
        public int fl_id { get; set; }
        public string name { get; set; }
    }

    public class UTVis
    {
        public int visa_id { get; set; }
        public string name { get; set; }
    }

    public class UTPh
    {
        public int ph_id { get; set; }
        public string ph_loc { get; set; }
        public string ph_phtel { get; set; }
    }

    public class DELImg
    {
        public int img_id { get; set; }
        public string slides { get; set; }
    }

}
