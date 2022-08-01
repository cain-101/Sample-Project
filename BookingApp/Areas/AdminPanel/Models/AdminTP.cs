using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class AdminTP
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public double p_price { get; set; }
        public string c_type { get; set; }
        public string bedtype { get; set; }
        public string currency { get; set; }
        public int status { get; set; }
        public List<AdminTD> adminTDs { get; set; }
        public List<AdminINC> adminINCs { get; set; }
        public List<AdminCON> adminCONs { get; set; }
        public List<AdminEXC> adminEXCs { get; set; }
        public List<AdminFLI> adminFLIs { get; set; }
        public List<AdminITI> adminITIs { get; set; }
        public List<AdminIMG> adminIMGs { get; set; }
        public List<AdminVI> adminVIs { get; set; }
        public List<Photel> photels { get; set; }
    }

    public class AdminTD
    {
        public int tdates_id { get; set; }
        [DisplayFormat(DataFormatString = "{0:R}")]
        [DataType(DataType.Date)]
        public DateTime dfrom { get; set; }
        [DisplayFormat(DataFormatString = "{0:R}")]
        [DataType(DataType.Date)]
        public DateTime dto { get; set; }
        DateTimeFormatInfo mdi = new DateTimeFormatInfo();
        public string dates
        {
            get
            {

                if (dto == new DateTime(2000, 01, 01))
                {
                    return mdi.GetMonthName(dfrom.Month).Substring(0, 3).ToString() + ", " + dfrom.Year;
                }
                return mdi.GetMonthName(dfrom.Month).Substring(0, 3).ToString() + ", " + dfrom.Day
                + " - " + mdi.GetMonthName(dto.Month).Substring(0, 3).ToString() + ", " + dto.Day + ", " + dto.Year;
            }
        }
    }

    public class AdminINC
    {
        public int in_id { get; set; }
        public string name { get; set; }
    }

    public class AdminCON
    {
        public int con_id { get; set; }
        public string name { get; set; }
    }

    public class AdminEXC
    {
        public int ex_id { get; set; }
        public string name { get; set; }
    }

    public class AdminFLI
    {
        public int fl_id { get; set; }
        public string name { get; set; }
    }

    public class AdminITI
    {
        public int it_id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int bmeal { get; set; }
        public int lmeal { get; set; }
        public int dmeal { get; set; }
    }

    public class AdminIMG
    {
        public int img_id { get; set; }
        public string slides { get; set; }
    }

    public class AdminVI
    {
        public int visa_id { get; set; }
        public string name { get; set; }
    }

    public class Photel
    {
        public int ph_id { get; set; }
        public string ph_loc { get; set; }
        public string ph_phtel { get; set; }
    }
}