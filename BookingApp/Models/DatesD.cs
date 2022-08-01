using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class DatesD
    {
        public int p_id { get; set; }
        public int tdates_id { get; set; }
        public DateTime dfrom { get; set; }
        public DateTime dto { get; set; }
        DateTimeFormatInfo mdi = new DateTimeFormatInfo();
        public string otDates
        {
            get
            {
                if (dto == new DateTime(2000, 01, 01))
                {
                    return mdi.GetMonthName(dfrom.Month).Substring(0, 3).ToString() + ", " + dfrom.Day + ", " + dfrom.Year;
                }
                return mdi.GetMonthName(dfrom.Month).Substring(0, 3).ToString() + ", " + dfrom.Day
                + " - " + mdi.GetMonthName(dto.Month).Substring(0, 3).ToString() + ", " + dto.Day + ", " + dto.Year;
            }
        }
    }

    public class NewPView
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public double p_price { get; set; }
        public string c_type { get; set; }
        public string bedtype { get; set; }
        public string currency { get; set; }
        public string img { get; set; }
        public List<DatesD> _Dates { get; set; }
    }
}