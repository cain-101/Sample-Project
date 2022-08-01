using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class Categories
    {
        public int c_id { get; set; }
        [Required(ErrorMessage = "Please enter category name")]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid format!")]
        [Display(Name = "Category")]
        public string c_name { get; set; }
    }
}