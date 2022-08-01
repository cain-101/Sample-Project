using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Areas.AdminPanel.LoginModel
{
    public class AccountModel
    {
        [Display(Name = "Username")]
        [Required(ErrorMessage = "Please enter your username")]
        public string UserName { get; set; }
        [Display(Name = "Password")]
        [Required(ErrorMessage = "Please enter your password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public string name { get; set; }
        public string[] Roles { get; set; }  
    }
}