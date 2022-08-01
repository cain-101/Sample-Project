using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace BookingApp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // for admin used only
            //For Admin Panel used

            bundles.Add(new ScriptBundle("~/bundles/adminjquery").Include(
                        "~/Scripts/admin/jquery.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminpopper").Include(
                        "~/Scripts/admin/popper.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminmaterial").Include(
                        "~/Scripts/admin/material-design.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminscrollbar").Include(
                        "~/Scripts/admin/scrollbar.jquery.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminmoment").Include(
                        "~/Scripts/admin/moment.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminsweetalert").Include(
                        "~/Scripts/admin/sweetalert.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminvalidate").Include(
                        "~/Scripts/admin/jquery.validate.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminwizard").Include(
                        "~/Scripts/admin/bootstrap-wizard.js"));

            bundles.Add(new ScriptBundle("~/bundlles/adminselectpicker").Include(
                        "~/Scripts/admin/bootstrap-selectpicker.js"));

            bundles.Add(new ScriptBundle("~/bundles/admindatetimepicker").Include(
                        "~/Scripts/admin/bootstrap-datetimepicker.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/admindataTable").Include(
                        "~/Scripts/admin/jquery.dataTables.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/admintagsinput").Include(
                        "~/Scripts/admin/bootstrap-tagsinput.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminjasnyBootstrap").Include(
                        "~/Scripts/admin/jasny-bootstrap.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/admincalendar").Include(
                        "~/Scripts/admin/fullcalendar.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminjvectormap").Include(
                        "~/Scripts/admin/jquery-jvectormap.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminnouislider").Include(
                        "~/Scripts/admin/nouislider.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/admincore").Include(
                        "~/Scripts/admin/core.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminarrive").Include(
                        "~/Scripts/admin/arrive.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminbutton").Include(
                        "~/Scripts/admin/buttons.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminchart").Include(
                        "~/Scripts/admin/chartlist.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminnotify").Include(
                        "~/Scripts/admin/bootstrap-notify.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminmaterialdashboard").Include(
                        "~/Scripts/admin/material-dashboard.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminjavascript").Include(
                        "~/Scripts/admin/javaScript.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminsharre").Include(
                        "~/Scripts/admin/jquery.sharrre.js"));

            bundles.Add(new ScriptBundle("~/bundles/admincustomSharre").Include(
                        "~/Scripts/admin/custom-sharrre.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminpagedemo").Include(
                        "~/Scripts/admin/page-demo.js"));

            bundles.Add(new ScriptBundle("~/bundles/adminscripts").Include(
                    "~/Scripts/admin/AdminScripts.js"));

            // General used

            bundles.Add(new ScriptBundle("~/bundles/dateTime").Include(
                    "~/Scripts/Datetime.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-3").Include(
                    "~/Scripts/jquery3.js"));

            bundles.Add(new ScriptBundle("~/bundles/datatableui").Include(
                    "~/Scripts/admin/dataTables.jqueryui.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-1").Include(
                    "~/Scripts/jquery-1.10.2.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bsjqbundle").Include(
                    "~/Scripts/validate/jqBootstrapValidation.js")); 

            bundles.Add(new ScriptBundle("~/bundles/jquery-ui-2").Include(
                    "~/Scripts/jqueryui.js"));

            bundles.Add(new ScriptBundle("~/bundles/moment-2").Include(
                    "~/Scripts/moment2.js"));

            bundles.Add(new ScriptBundle("~/bundles/tempusdominus-4").Include(
                    "~/Scripts/datetimepicker-tempusdominus.js"));

            bundles.Add(new ScriptBundle("~/bundles/swiper").Include(
                    "~/Scripts/swiper.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap-4").Include(
                    "~/Scripts/bootstrap4.js"));

            bundles.Add(new ScriptBundle("~/bundles/homeScript").Include(
                    "~/Scripts/HomeScripts.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                    "~/Scripts/validate/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/passenger").Include(
                    "~/Scripts/passenger.js"));

            bundles.Add(new ScriptBundle("~/bundles/chat").Include(
                    "~/Scripts/Chat.js"));

            bundles.Add(new ScriptBundle("~/bundles/signalr").Include(
                    "~/Scripts/jquery.signalR-2.1.1.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/timeage").Include(
                    "~/Scripts/jquery.timeago.js"));

            bundles.Add(new ScriptBundle("~/bundles/agentchat").Include(
                    "~/Scripts/agentChat.js"));

            // Datatable plugins //

            bundles.Add(new ScriptBundle("~/bundles/datatable").Include(
                  "~/Scripts/admin/datatables.min.js"));

            bundles.Add(new StyleBundle("~/styles/datatable").Include(
                  "~/Content/admin/datatables.min.css"));

            bundles.Add(new StyleBundle("~/styles/datatableUImin").Include(
                    "~/Content/admin/dataTables.jqueryui.min.css"));

            bundles.Add(new StyleBundle("~/styles/smoothness").Include(
                 "~/Content/admin/smoothness.css"));

            bundles.Add(new StyleBundle("~/styles/datatableUI").Include(
                    "~/Content/admin/dataTables.jqueryui.css"));

            bundles.Add(new StyleBundle("~/styles/datatableb4").Include(
                    "~/Content/admin/dataTables.bootstrap4.min.css"));

            bundles.Add(new StyleBundle("~/bundles/datatablebjs4").Include(
                    "~/Scripts/admin/dataTables.bootstrap4.min.js"));

            // end of Datatable plugins //

            // header scripts //

            bundles.Add(new ScriptBundle("~/styles/fontawesome-kit").Include(
                    "~/Scripts/kit-fontawesome.js"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                    "~/Scripts/modernizr-2.6.2.js"));

            // For admin used only
            bundles.Add(new StyleBundle("~/Content/admindashboard").Include(
                   "~/Content/admin/dashboard.css"));

            bundles.Add(new StyleBundle("~/Content/adminSites").Include(
                    "~/Content/admin/Site.css"));

            // style bundles //

            bundles.Add(new StyleBundle("~/styles/pageList").Include(
                    "~/Content/PagedList.css"));

            bundles.Add(new StyleBundle("~/styles/bootstrap-4").Include(
                    "~/Content/bootstrap4.css"));

            bundles.Add(new StyleBundle("~/styles/swiper").Include(
                    "~/Content/swiper.min.css"));

            bundles.Add(new StyleBundle("~/styles/site").Include(
                    "~/Content/Site.css"));

            // footer styles //

            bundles.Add(new StyleBundle("~/styles/tempusdominus-4").Include(
                    "~/Content/bootstrap4-tempusdominus.css"));

            bundles.Add(new StyleBundle("~/style/jquery-ui").Include(
                    "~/Content/jquery-ui2.css"));


            //  Login script //

            bundles.Add(new ScriptBundle("~/login/script").Include(
                    "~/Scripts/LoginScript.js"));

            // custom paging //
            bundles.Add(new ScriptBundle("~/custom/paging").Include(
                    "~/Scripts/ASPSnippets_Pager.min.js"));
        }
    }
}