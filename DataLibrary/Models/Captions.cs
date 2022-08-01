using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class Captions
    {
        public int cap_id { get; set; }
        public string fh_cap { get; set; }
        public string fb_cap { get; set; }
        public string sh_cap { get; set; }
        public string sb_cap { get; set; }
        public string index_title { get; set; }
    }

    public class CapIndexTitle
    {
        public int cap_id { get; set; }
        public string index_title { get; set; }
    }

    public class CapFC
    {
        public int cap_id { get; set; }
        public string fh_cap { get; set; }
        public string fb_cap { get; set; }
    }

    public class CapSC
    {
        public int cap_id { get; set; }
        public string sh_cap { get; set; }
        public string sb_cap { get; set; }
    }
}
