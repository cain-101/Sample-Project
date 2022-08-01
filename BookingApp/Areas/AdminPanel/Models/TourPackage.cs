using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BookingApp.Areas.AdminPanel.Models
{
    public class TourPackage
    {
        [Display(Name = "Package name")]
        [Required(ErrorMessage = "Please enter package name!")]
        public string p_name { get; set; }

        [Display(Name = "Package price")]
        [Required(ErrorMessage = "Please enter package price")]
        public string p_price { get; set; }

        [Required(ErrorMessage = "hi")]
        public string fromtDate { get; set; }

        [Display(Name = "Travel Date(s)")]
        [Required(ErrorMessage = "Please select a travel date(s)!")]
        public List<TravelDates> p_traveldate { get; set; }

        [Display(Name = "Bedroom type")]
        [Required(ErrorMessage = "Please select a Bedroom type")]
        public int p_bedroom { get; set; }
        public SelectList bedRoomType { get; set; }

        [Display(Name = "Category")]
        [Required(ErrorMessage = "Please select a Category")]
        public int p_category { get; set; }
        public SelectList _category { get; set; }

        [Display(Name = "Flight details")]
        [Required(ErrorMessage = "Please enter flight details")]
        public List<FlightDetails> p_flghtdetails { get; set; }

        [Display(Name = "Inclusions")]
        [Required(ErrorMessage = "Please enter exclusion(s)")]
        public List<Inclusion> p_inclusion { get; set; }

        public List<Itinerary> ItineraryName { get; set; }

        [Display(Name = "Terms and Conditions")]
        [Required(ErrorMessage = "Please enter terms and conditions!")]
        public List<TermsAndConditions> p_termCondition { get; set; }

        [Display(Name = "Exclusion")]
        [Required(ErrorMessage = "Please enter exclusion!")]
        public List<Exclussion> p_exclusion { get; set; }
    }

    public class FlightDetails
    {
        public string flightdetails { get; set; }
    }

    public class Inclusion
    {
        public string inclusion { get; set; }
    }

    public class TermsAndConditions
    {
        public string termsandCon { get; set; }
    }

    public class Sliders
    {
        public string imgpath { get; set; }
    }

    public class Exclussion
    {
        public string exclusion { get; set; }
    }

    public class TravelDates
    {
        public DateTime from { get; set; }
        public DateTime to { get; set; }
    }

    public class Itinerary
    {
        public string ItineraryName { get; set; }
        public string ItineraryDescription { get; set; }
    }

    public class PnameDD
    {
        public int p_id { get; set; }
        [Required(ErrorMessage ="Please select a package name!")]
        public string p_name { get; set; }
    }

    public class AddImage
    {
        [Display(Name = "Select Package")]
        [Required(ErrorMessage = "Please select a package!")]
        public int p_name { get; set; }
        public SelectList _package { get; set; }
    }
}