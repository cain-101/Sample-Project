using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.GuestModel
{
    public class GuestTP
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public double  p_price { get; set; }
        public string c_type { get; set; }
        public string bedtype { get; set; }
        public List<GuestTD> guestTDs { get; set; } 
        public List<GuestINC> guestINCs { get; set; }
    }

    public class GuestTD
    {
        public int tdates_id { get; set; }
        public DateTime dfrom { get; set; }
        public DateTime dto { get; set; }
    }

    public class GuestINC
    {
        public int in_id { get; set; }
        public string name { get; set; }
    }
}
