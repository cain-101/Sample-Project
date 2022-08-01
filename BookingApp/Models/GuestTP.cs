using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class GuestTP
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public double p_price { get; set; }
        public string c_type { get; set; }
        public string bedtype { get; set; }
        public string currency { get; set; }
        public List<GuestTD> guestTDs { get; set; }
        public List<GuestINC> guestINCs { get; set; }
        public List<GuestCON> guestCONs { get; set; }
        public List<GuestEXC> guestEXCs { get; set; }
        public List<GuestFLI> guestFLIs { get; set; }
        public List<GuestITI> guestITIs { get; set; }
        public List<GuestIMG> guestIMGs { get; set; }
        public List<GuestVI> guestVIs { get; set; }
        public HeaderIMG headerIMG { get; set; }
        public List<Photel> photels { get; set; }
    }

    public class GuestTD
    {
        public int tdates_id { get; set; }
        [DisplayFormat(DataFormatString = "{0:R}")]
        [DataType(DataType.Date)]
        public DateTime dfrom { get; set; }
        [DisplayFormat(DataFormatString = "{0:R}")]
        [DataType(DataType.Date)]
        public DateTime dto { get; set; }
        DateTimeFormatInfo mdi = new DateTimeFormatInfo(); 
        public string dates {
            get {
               
                if(dto == new DateTime(2000, 01, 01))
                {
                    return mdi.GetMonthName(dfrom.Month).Substring(0, 3).ToString() + ", " + dfrom.Year;
                }
                return mdi.GetMonthName(dfrom.Month).Substring(0, 3).ToString() + ", " + dfrom.Day 
                +" - " + mdi.GetMonthName(dto.Month).Substring(0, 3).ToString() + ", " + dto.Day + ", " + dto.Year;
            }
        }
    }

    public class GuestINC
    {
        public int in_id { get; set; }
        public string name { get; set; }
    }

    public class GuestCON
    {
        public int con_id { get; set; }
        public string name { get; set; }
    }

    public class GuestEXC
    {
        public int ex_id { get; set; }
        public string name { get; set; }
    }

    public class GuestFLI
    {
        public int fl_id { get; set; }
        public string name { get; set; }
    }

    public class GuestITI
    {
        public int it_id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int bmeal { get; set; }
        public int lmeal { get; set; }
        public int dmeal { get; set; }
    }

    public class GuestIMG
    {
        public int img_id { get; set; }
        public string slides { get; set; }
    }

    public class GuestVI
    {
        public int visa_id { get; set; }
        public string name { get; set; }
    }

    public class HeaderIMG
    {
        public int img_id { get; set; }
        public string slides { get; set;}
    }

    public class Photel
    {
        public int ph_id { get; set; }
        public string ph_loc { get; set; }
        public string ph_phtel { get; set; }
    }
}