using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Education
    {
        [Display(Name = "First Name")]
        public string fname { get; set; }
        [Display(Name = "Last Name")]
        public string lname { get; set; }
        [Display(Name = "Middle Name")]
        public string mname { get; set; }
        [Display(Name = "Your Position")]
        public string position { get; set; }
        [Display(Name = "Name Of School or Organization")]
        public string school_organization { get; set; }
        [Display(Name = "Email")]
        public string email { get; set; }
        [Display(Name = "Phone Number")]
        public string phone { get; set; }
        [Display(Name =  "Number of Students")]
        public string numberOfstudents { get; set; }
        [Display(Name  = "Number of Teachers/Professors")]
        public string numberOfteachers { get; set; }
        [Display(Name = "Departure Date")]
        public string departDate { get; set; }
    }

    public class International
    {
        [Display(Name = "Firstname")]
        public string fname { get; set; }
        [Display(Name = "Lastname")]
        public string lname { get; set; }
        [Display(Name = "Middlename")]
        public string mname { get; set; }
        [Display(Name = "Mobile Number")]
        public string contactNo { get; set; }
        [Display(Name = "Landline Number")]
        public string landlineNo { get; set; }
        [Display(Name = "Email")]
        public string emailAdd { get; set; }
        [Display(Name = "Guest count(s) except you")]
        public string GuestCount { get; set; }
        [Display(Name = "Departure Date")]
        public string travelDate { get; set; }
        public List<Guest> guests { get; set; }
        [Display(Name = "Full Address")]
        [Required(ErrorMessage = "Please enter your Full Address")]
        [DataType(DataType.MultilineText)]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid Text Format")]
        public string fullAddress { get; set; }
    }

    public class Package
    {
        [Display(Name = "Firstname")]
        [Required(ErrorMessage = "Please enter your firstname")]
        public string fname { get; set; }

        [Display(Name = "Lastname")]
        [Required(ErrorMessage = "Please enter your lastname")]
        public string lname { get; set; }

        [Display(Name = "Middlename")]
        [Required(ErrorMessage = "Please enter your middlename")]
        public string mname { get; set; }

        [Display(Name = "Mobile Number")]
        [Required(ErrorMessage = "Please enter your mobile number")]
        public string contactNo { get; set; }

        [Display(Name = "Landline Number")]
        public string landlineNo { get; set; }

        [Required(ErrorMessage = "Please enter your Email")]
        [RegularExpression(@"^[\w!#$%&'*+\-/=?\^_`{|}~]+(\.[\w!#$%&'*+\-/=?\^_`{|}~]+)*"
       + "@"
       + @"((([\-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$", ErrorMessage = "Invalid Email")]
        [Display(Name = "Email")]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string emailAdd { get; set; }

        [Display(Name = "Passenger count(s)")]
        public string passengers { get; set; }

        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        [Required(ErrorMessage = "Please select Departure date")]
        public DateTime travelDate { get; set; }

        [Display(Name = "Full Address")]
        [Required(ErrorMessage = "Please enter your Full Address")]
        [DataType(DataType.MultilineText)]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid Text Format")]
        public string fullAddress { get; set; }

        [DataType(DataType.MultilineText)]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid Text Format")]
        [Display(Name = "Other concerns")]
        public string concern { get; set; }

        public string packageName { get; set; }
    }

    public class Guest
    {
        public string passportName { get; set; }
        public string birthDate { get; set; }
    }

    public class Domestic
    {
        [Display(Name = "Full Name")]
        public string fullName { get; set; }
        [Display(Name = "Full Address")]
        [Required(ErrorMessage = "Please enter your Full Address")]
        [DataType(DataType.MultilineText)]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid Text Format")]
        public string fullAddress { get; set; }
        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        public DateTime ReserveDateFrom { get; set; }
        [Required(ErrorMessage = "Please enter your Email")]
        [RegularExpression(@"^[\w!#$%&'*+\-/=?\^_`{|}~]+(\.[\w!#$%&'*+\-/=?\^_`{|}~]+)*"
       + "@"
       + @"((([\-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$", ErrorMessage = "Invalid Email")]
        [Display(Name = "Email")]
        public string email { get; set; }
        [Display(Name = "Contact Number")]
        public string contact { get; set; }
        [Display(Name = "Adult")]
        public string adult { get; set; }
        [Display(Name = "Child")]
        public string child { get; set; }
    }
    public class BookingModel
    {
        [Required(ErrorMessage = "Please enter your fullname")]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Please enter a valid name")]
        [Display(Name = "Fullname")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Please enter your email address")]
        [RegularExpression(@"^[\w!#$%&'*+\-/=?\^_`{|}~]+(\.[\w!#$%&'*+\-/=?\^_`{|}~]+)*"
        + "@"
        + @"((([\-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$", ErrorMessage = "Invalid Email")]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        [Display(Name = "Email")]
        public string email { get; set; }

        [Required(ErrorMessage = "Please enter your phone number")]
        [Display(Name = "Contact Number")]
        public string contact { get; set; }

        [Display(Name = "From")]
        [Required(ErrorMessage = "Please enter origin")]
        public string From { get; set; }

        [Display(Name = "To")]
        [Required(ErrorMessage = "Please enter a destination")]
        public string To { get; set; }

        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        [Required(ErrorMessage = "Please select a desired departure dates")]
        public DateTime DpartDate { get; set; }

        [Display(Name = "Return Date")]
        [DataType(DataType.DateTime)]
        [Required(ErrorMessage = "Please select a desired return dates")]
        public DateTime RturnDate { get; set; }

        [Display(Name = "Passenger(s)")]
        [Required(ErrorMessage = "Please enter a passenger count(s)")]
        public string Pssngers { get; set; }
  
        [Display(Name = "Cabin Class")]
        public string classType { get; set; }
        public string bookingFiltering { get; set; }

        //[Required(ErrorMessage = "Please enter your other concern")]
        [DataType(DataType.MultilineText)]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid Text Format")]
        [Display(Name = "Other concerns")]
        public string concern { get; set; }
    }

    public class BookingModel1
    {
        [Required(ErrorMessage = "Please enter your fullname")]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Please enter a valid name")]
        [Display(Name = "Fullname")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Please enter your email address")]
        [RegularExpression(@"^[\w!#$%&'*+\-/=?\^_`{|}~]+(\.[\w!#$%&'*+\-/=?\^_`{|}~]+)*"
        + "@"
        + @"((([\-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$", ErrorMessage = "Invalid Email")]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        [Display(Name = "Email")]
        public string email { get; set; }

        [Required(ErrorMessage = "Please enter your phone number")]
        [Display(Name = "Contact Number")]
        public string contact { get; set; }

        [Display(Name = "From")]
        [Required(ErrorMessage = "Please enter origin")]
        public string _From { get; set; }

        [Display(Name = "To")]
        [Required(ErrorMessage = "Please enter your destination")]
        public string _To { get; set; }

        [Display(Name = "Departure Date")]
        [Required(ErrorMessage = "Please select your desired departure date")]
        [DataType(DataType.DateTime)]
        public DateTime _DpartDate { get; set; }

        [Display(Name = "Passenger(s)")]
        [Required(ErrorMessage = "Please enter a passenger count(s)")]
        public string _Pssngers { get; set; }

        [Display(Name = "Cabin Class")]
        [Required(ErrorMessage = "Please select your desired class")]
        public string _classType { get; set; }

        public string _bookingFiltering { get; set; }

        [DataType(DataType.MultilineText)]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid Text Format")]
        [Display(Name = "Other concerns")]
        public string concern { get; set; }
    }

    public class _BookingModel
    {
        [Required(ErrorMessage = "Please enter your fullname")]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Please enter a valid name")]
        [Display(Name = "Fullname")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Please enter your email address")]
        [RegularExpression(@"^[\w!#$%&'*+\-/=?\^_`{|}~]+(\.[\w!#$%&'*+\-/=?\^_`{|}~]+)*"
        + "@"
        + @"((([\-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$", ErrorMessage = "Invalid Email")]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        [Display(Name = "Email")]
        public string email { get; set; }

        [Required(ErrorMessage = "Please enter your phone number")]
        [Display(Name = "Contact Number")]
        public string contact { get; set; }

        [Display(Name = "From")]
        [Required(ErrorMessage = "Please enter origin")]
        public string From_ { get; set; }

        [Display(Name = "From")]
        public string From1_ { get; set; }
        [Display(Name = "From")]
        public string From2_ { get; set; }
        [Display(Name = "From")]
        public string From3_ { get; set; }
        [Display(Name = "From")]
        public string From4_ { get; set; }

        [Display(Name = "To")]
        [Required(ErrorMessage = "Pleaase enter a destination")]
        public string To_ { get; set; }

        [Display(Name = "To")]
        public string To1_ { get; set; }
        [Display(Name = "To")]
        public string To2_ { get; set; }
        [Display(Name = "To")]
        public string To3_ { get; set; }
        [Display(Name = "To")]
        public string To4_ { get; set; }

        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        [Required(ErrorMessage = "Please select departure date")]
        public DateTime DpartDate_ { get; set; }

        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        public DateTime DpartDate1_ { get; set; }
        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        public DateTime DpartDate2_ { get; set; }
        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        public DateTime DpartDate3_ { get; set; }
        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        public DateTime DpartDate4_ { get; set; }

        [Display(Name = "Passenger(s)")]
        public string Pssngers_ { get; set; }
        [Display(Name = "Cabin Class")]
        public string classType_ { get; set; }
        public string bookingFiltering_ { get; set; }

        [DataType(DataType.MultilineText)]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid Text Format")]
        [Display(Name = "Other concerns")]
        public string concern { get; set; }
    }

    public class _Booking1
    {
        [Required(ErrorMessage = "Please enter your fullname")]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Please enter a valid name")]
        [Display(Name = "Fullname")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Please enter your email address")]
        [RegularExpression(@"^[\w!#$%&'*+\-/=?\^_`{|}~]+(\.[\w!#$%&'*+\-/=?\^_`{|}~]+)*"
        + "@"
        + @"((([\-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$", ErrorMessage = "Invalid Email")]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        [Display(Name = "Email")]
        public string email { get; set; }

        [Required(ErrorMessage = "Please enter your phone number")]
        [Display(Name = "Contact Number")]
        public string contact { get; set; }

        [Required(ErrorMessage = "Please enter origin")]
        [Display(Name = "From")]
        public string From1 { get; set; }

        [Display(Name = "To")]
        [Required(ErrorMessage = "Please enter a destination")]
        public string To1 { get; set; }

        [Required(ErrorMessage = "Please select your desired departure date")]
        [Display(Name = "Departure Date")]
        [DataType(DataType.DateTime)]
        public DateTime DpartDate1 { get; set; }

        [Required(ErrorMessage = "Please select your desired return date")]
        [Display(Name = "Return Date")]
        [DataType(DataType.DateTime)]
        public DateTime RturnDate1 { get; set; }

        [Display(Name = "Room(s) + Passenger(s)")]
        [Required(ErrorMessage = "please enter a passenger counts")]
        public string Pssngers1 { get; set; }

        //[Required(ErrorMessage = "Please enter your other concern")]
        [DataType(DataType.MultilineText)]
        [RegularExpression(@"^([a-zA-Z0-9 \.\&\'\-]+)$", ErrorMessage = "Invalid Text Format")]
        [Display(Name = "Other concerns")]
        public string concern { get; set; }

        public string bookingFiltering1 { get; set; }
    }

    public class Passengers
    {
        [Display(Name = "Adult(12y+)")]
        public string Adults { get; set; }
        [Display(Name = "Child(2y-11y)")]
        public string Child { get; set; }
        [Display(Name = "Infant(16d-23m)")]
        public string Infant { get; set; }
    }

    public class Rooms
    {
        public int RoomCount { get; set; }
        //public string RoomType
    }
}