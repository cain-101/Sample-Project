using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class Utps
    {
        public int p_id { get; set; }
        public string p_name { get; set; }
        public float p_price { get; set; }
        public int c_id { get; set; }
        public int b_id { get; set; }
        public int status { get; set; }
    }
}
