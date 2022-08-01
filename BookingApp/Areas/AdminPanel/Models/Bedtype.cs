using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class Bedtype
    {
        public int bedid { get; set; }

        [Required(ErrorMessage = "Please enter Bedroom type")]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid format!")]
        public string bedtype { get; set; }
    }
}