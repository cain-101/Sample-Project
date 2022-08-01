using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class OutToDateP
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public string p_img { get; set; }
    }

    public class Dates
    {
        public int p_id { get; set; }
        public int tdates_id { get; set; }
        public DateTime dfrom { get; set; }
        public DateTime dto { get; set; }
        DateTimeFormatInfo mdi = new DateTimeFormatInfo();
        public string otDates {
            get {
                if (dto == new DateTime(2000, 01, 01))
                {
                    return mdi.GetMonthName(dfrom.Month).Substring(0, 3).ToString() + ", " + dfrom.Day + ", " + dfrom.Year;
                }
                return mdi.GetMonthName(dfrom.Month).Substring(0, 3).ToString() + ", " + dfrom.Day
                + " - " + mdi.GetMonthName(dto.Month).Substring(0, 3).ToString() + ", " + dto.Day + ", " + dto.Year;
            }
        }
        
    }

    public class OTDPView
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public string p_img { get; set; }
        public List<Dates> _Dates { get; set; }
    }

    public class EditDates
    {
        public int p_id { get; set; }
        public int tdates_id { get; set; }
        [DataType(DataType.Date)]
        public DateTime dfrom { get; set; }
        DateTimeFormatInfo mdi = new DateTimeFormatInfo();
        public string formatDfrom {
            get
            {
                return dfrom.Month + "/"+dfrom.Day + "/" + dfrom.Year;
            }
        }
        [DataType(DataType.Date)]
        public DateTime dto { get; set; }
        public string formatDto
        {
            get
            {
                return dto.Month + "/" + dto.Day + "/" + dto.Year;
            }
        }
    }

    public class UTPrice
    {
        public int p_id { get; set; }
        public string p_price { get; set; }
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