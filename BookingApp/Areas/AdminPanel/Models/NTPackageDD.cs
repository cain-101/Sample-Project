using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class NTPackageDD
    {
        public int nt_id { get; set; }
        public string name { get; set; }
    }

    public class NTPackageAdd
    {
        public string name { get; set; }
        public int cat_id { get; set; }
    }
}