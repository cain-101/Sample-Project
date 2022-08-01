
$(function () {
    $('.datetimepicker').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-remove'
        },
        format: "L"
    });
});

$(document).ready(function () {
    var lastId = 0;
    var splitId = "";
    var nextIndex = 0;
    $("#btnAddTdate").click(function (e) {
        e.preventDefault(e);
        lastId = $(".elements:last").attr("id");
        splitId = lastId.split("_");
        nextIndex = Number(splitId[1]) + 1;
        $(".remove").css("display", "none");
        $("#travelDates").append("<diV class='row elements p-2 dynamicTdates' name='divArray' id='travelDAtesDiv_" + nextIndex + "'>\
              <div class='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-2 pb-2'>\
                <div class='form-group'>\
                    <label class='control-label my-font-13 label-color' for='fromtDate_"+ nextIndex + "'>From</label>\
                    <input type='text' class='form-control datetimepicker' name='fromtDate' id='fromtDate_"+ nextIndex + "' placeholder='Select date' />\
                </div>\
                <span class='text-danger my-font-13'></span>\
             </div>\
             <div class='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-2 pb-2'>\
                    <div class='form-group'>\
                        <label class='control-label my-font-13 label-color' for='toDate_"+ nextIndex + "'>To</label>\
                        <input type='text' class='form-control datetimepicker' name='toDate' id='toDate_"+ nextIndex + "' placeholder='Select date' />\
                    </div>\
                <span class='text-danger my-font-13'></span>\
             </div>\
             <div class='col-12'>\
                <span class='my-font-13 remove my-red-link' id='remove_"+ nextIndex + "'><i class='fa fa-times'></i> Remove</span>\
             </div>\
        </div>");

        $("#fromtDate_" + nextIndex).datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            },
            format: "L"
        }).triggerHandler("click");

        $("#toDate_" + nextIndex).datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            },
            format: "L"
        }).triggerHandler("click");

    });
    $("#travelDates").on("click", ".remove", function () {
        var id = this.id;
        var id_splitter = id.split("_");
        var deleteIndex = id_splitter[1];
        $("#travelDAtesDiv_" + deleteIndex).remove();
        $(".remove:last").css("display", "block");
    });

    function removeDynamicFields() {
        $(".dynamicTDetails").remove();
        $(".dynamicTdates").remove();
        $(".dynamicTInclusion").remove();
        $(".dynamicTItinerary").remove();
        $(".dynamicTVisareq").remove();
        $(".dynamicTCondition").remove();
        $(".dynamicTHotel").remove();
        $(".dynamicTExclusion").remove();
    }

    var _lastId = 0;
    var _splitId = "";
    var _nextIndex = 0;
    $("#btnAdddetails").click(function (e) {
        e.preventDefault(e);
        _lastId = $("._elements:last").attr("id");
        _splitId = _lastId.split("_");
        _nextIndex = Number(_splitId[1]) + 1;
        $("._remove").css("display", "none");
        $("#travelDetails").append("<div class='row p-2 _elements dynamicTDetails' id='travelDetailsDiv_" + _nextIndex + "'>\
            <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>\
                <div class='form-group'>\
                    <input type='text' placeholder='Flight details' name='flightDetails' id='flightDetails_" + _nextIndex + "' class='form-control my-placeholder'>\
                </div>\
            <span class='text-danger my-font-13' id='flDError"+ _nextIndex+"'></span>\
            </div>\
              <div class='col-12'>\
                <span class='my-font-13 _remove my-red-link' id='remove-"+ _nextIndex + "'><i class='fa fa-times'></i> Remove</span>\
             </div>\
         </div>");

        $("#flightDetails_" + _nextIndex).keyup(function () {
            var flD = $("#flightDetails_" + _nextIndex).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
            if (flD != "" && !htmlTagRegex.test(flD)) {
                $("#flDError" + _nextIndex).show();
                $("#flDError" + _nextIndex).html("Invalid format!");
                $("#flightDetails_" + _nextIndex).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(flD)) {
                $("#flDError" + _nextIndex).hide();
                $("#flightDetails_" + _nextIndex).css("border-color", "#4cff00");
            }
            else {
                $("#flDError" + _nextIndex).hide();
                $("#flightDetails_" + _nextIndex).css("border-color", "#ced4da");
            }

        }).keyup();
    });
    $("#travelDetails").on("click", "._remove", function () {
        clearTDetails(this.id)
    });
    function clearTDetails(_id) {
        var id = _id;
        var idSplitter = id.split("-");
        var deleteIndex = idSplitter[1];
        $("#travelDetailsDiv_" + deleteIndex).remove();
        $("._remove:last").css("display", "block");
    }

    var flDetails = [];
    var flInclusion = [];
    var flIntinerary = [];
    var flTermsCon = [];
    var flExclusion = [];
    var travelDateArray = [];
    var visa = [];
    var photels = [];
    function fLDetails() {
        $("input[name=flightDetails]").each(function () {
            flDetails.push($(this).val());
        });

        $("input[name=visarequirements]").each(function () {
            visa.push($(this).val());
        });

        $("input[name=inclusion]").each(function () {
            flInclusion.push($(this).val());
        });

        $("input[name=termCondition]").each(function () {
            flTermsCon.push($(this).val());
        });

        $("input[name=exclusion]").each(function () {
            flExclusion.push($(this).val());
        });

        $("[name='divArray']").map(function () {
            travelDateArray.push(
                $(this).find("input[name='fromtDate']").val() + "|" +
                    $(this).find("input[name='toDate']").val()
            );
        });

        $("[name='Itinerary']").map(function () {
            flIntinerary.push(
                $(this).find("input[name='ItineraryTitle']").val() + "|"+
                $(this).find("textarea[name='ItineraryDes']").val() +"|"+
                $(this).find("input[name='bmeals']:checked").val() +"|"+
                $(this).find("input[name='lmeals']:checked").val() +"|"+
                $(this).find("input[name='dmeals']:checked").val() 
            );
        });

        $("[name='photels']").map(function () {
            photels.push(
                $(this).find("input[name='hotellocation']").val() + "|" +
                $(this).find("input[name='probablehotel']").val()
            );
        });
    }

    function fLDetailsClear() {
       flDetails = [];
       flInclusion = [];
       flIntinerary = [];
       flTermsCon = [];
       flExclusion = [];
       travelDateArray = [];
       visa = [];
       photels = [];
    }

    var lastId0 = 0;
    var splitId0 = "";
    var nextIndex0 = 0;
    $("#btnInclusion").click(function (e) {
        e.preventDefault(e);
        lastId0 = $(".elements0:last").attr("id");
        splitId0 = lastId0.split("_");
        nextIndex0 = Number(splitId0[1]) + 1;
        $(".remove0").css("display", "none");
        $("#travelInclusion").append("<div class='row p-2 elements0 dynamicTInclusion' id='travelInclusionDiv_" + nextIndex0 + "'>\
            <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>\
                <div class='form-group'>\
                    <input type='text' placeholder='Inclusion' name='inclusion' id='inclusion_" + nextIndex0 + "' class='form-control my-placeholder'>\
                </div>\
              <span class='text-danger my-font-13' id='incError"+ nextIndex0 +"'></span>\
            </div>\
               <div class='col-12'>\
                <span class='my-font-13 remove0 my-red-link' id='remove0_"+ nextIndex0 + "'><i class='fa fa-times'></i> Remove</span>\
             </div>\
         </div>");

        $("#inclusion_" + nextIndex0).keyup(function () {
            var inC = $("#inclusion_" + nextIndex0).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
            if (inC != "" && !htmlTagRegex.test(inC)) {
                $("#incError" + nextIndex0).show();
                $("#incError" + nextIndex0).html("Invalid format!");
                $("#inclusion_" + nextIndex0).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(inC)) {
                $("#incError" + nextIndex0).hide();
                $("#inclusion_" + nextIndex0).css("border-color", "#4cff00");
            }
            else {
                $("#incError" + nextIndex0).hide();
                $("#inclusion_" + nextIndex0).css("border-color", "#ced4da");
            }

        }).keyup();

    });
    $("#travelInclusion").on("click", ".remove0", function () {
        var id = this.id;
        var IdSplitter = id.split("_");
        var deleteIndex = IdSplitter[1];
        $("#travelInclusionDiv_" + deleteIndex).remove();
        $(".remove0:last").css("display", "block");
    });


    var _lastId0 = 0;
    var _splitId0 = "";
    var _nextIndex0 = 0;
    $("#btnAddItinerary").click(function (e) {
        e.preventDefault(e);
        _lastId0 = $(".i_elements:last").attr("id");
        _splitId0 = _lastId0.split("_");
        _nextIndex0 = Number(_splitId0[1]) + 1;
        $("._remove0").css("display", "none");
        $("#p_Itinerary").append("<div class='row p-2 i_elements dynamicTItinerary'  name='Itinerary' id='Itinerary_" + _nextIndex0 + "'>\
            <div class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pt-2 pb-2'>\
                <div class='form-group'>\
                    <input type='text' class='form-control my-placeholder' name='ItineraryTitle' id='ItineraryTitle_"+ _nextIndex0 + "' placeholder='Itinerary title' />\
                </div>\
            <span class='text-danger my-font-13' id='itiTiError"+ _nextIndex0+"'></span>\
            </div>\
            <div class='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 pt-2 pb-2'>\
                <div class='form-group'>\
                    <textarea class='form-control my-placeholder' name='ItineraryDes' id='ItineraryDes_"+ _nextIndex0 + "' placeholder='tinerary description' rows='5'></textarea>\
                </div>\
            <span class='text-danger my-font-13' id='itiDesError"+ _nextIndex0+"'></span>\
            </div>\
             <div class='col-12 pt-2 pb-2'>\
                <fieldset class='scheduler-border'>\
                    <legend class='scheduler-border text-dark'>Free Meals:</legend>\
                        <label class='containers'>\
                            Breakfast\
                            <input name='bmeals' value='1' id='bmeals_"+ _nextIndex0+"' type='checkbox'>\
                                <span class='checkmark'></span>\
                        </label>\
                        <label class='containers'>\
                            Lunch\
                            <input name='lmeals' value='1' id='lmeals_"+ _nextIndex0 +"' type='checkbox'>\
                                <span class='checkmark'></span>\
                       </label>\
                       <label class='containers'>\
                            Dinner\
                           <input name='dmeals' value='1' id='dmeals_"+ _nextIndex0 +"' type='checkbox'>\
                                <span class='checkmark'></span>\
                      </label>\
                 </fieldset>\
             </div>\
              <div class='col-12'>\
                <span class='my-font-13 _remove0 my-red-link' id='remove1_"+ _nextIndex0 + "'><i class='fa fa-times'></i> Remove</span>\
             </div>\
        </div>");

        $("#ItineraryTitle_" + _nextIndex0).keyup(function () {
            var itiTitle = $("#ItineraryTitle_" + _nextIndex0).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
            if (itiTitle != "" && !htmlTagRegex.test(itiTitle)) {
                $("#itiTiError" + _nextIndex0).show();
                $("#itiTiError" + _nextIndex0).html("Invalid format!");
                $("#ItineraryTitle_" + _nextIndex0).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(itiTitle)) {
                $("#itiTiError" + _nextIndex0).hide();
                $("#ItineraryTitle_" + _nextIndex0).css("border-color", "#4cff00");
            }
            else {
                $("#itiTiError" + _nextIndex0).hide();
                $("#ItineraryTitle_" + _nextIndex0).css("border-color", "#ced4da");
            }
        }).keyup();

        $("#ItineraryDes_" + _nextIndex0).keyup(function () {
            var itiDes = $("#ItineraryDes_" + _nextIndex0).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\\\:\|\"\(\)\%]+)$/;
            if (itiDes != "" && !htmlTagRegex.test(itiDes)) {
                $("#itiDesError" + _nextIndex0).show();
                $("#itiDesError" + _nextIndex0).html("Invalid format!");
                $("#ItineraryDes_" + _nextIndex0).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(itiDes)) {
                $("#itiDesError" + _nextIndex0).hide();
                $("#ItineraryDes_" + _nextIndex0).css("border-color", "#4cff00");
            }
            else {
                $("#itiDesError" + _nextIndex0).hide();
                $("#ItineraryDes_" + _nextIndex0).css("border-color", "#ced4da");
            }
        }).keyup();
    });
    $("#p_Itinerary").on("click", "._remove0", function () {
        var id = this.id;
        var Idsplitter = id.split("_");
        var deleteIndex = Idsplitter[1];
        $("#Itinerary_" + deleteIndex).remove();
        $("._remove0:last").css("display", "block");
    });

    var visaId = 0;
    var visaSplit = "";
    var visaNextIndex = 0;
    $("#btnVisa").click(function (e) {
        e.preventDefault(e);
        visaId = $(".visaElement:last").attr("id");
        visaSplit = visaId.split("_");
        visaNextIndex = Number(visaSplit[1]) + 1;
        $(".visaRemove").css("display", "none");
        $("#visaDiv").append("<div class='row p-2 visaElement dynamicTVisareq' id='visacontent_" + visaNextIndex+"'>\
            <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>\
                <div class='form-group'>\
                    <input type='text' placeholder='Visa requirements' name='visarequirements' id='visa_"+ visaNextIndex+"' class='form-control my-placeholder'>\
               </div>\
            <span class='text-danger my-font-13' id='visaErr"+ visaNextIndex+"'></span>\
            </div>\
             <div class='col-12'>\
                <span class='my-font-13 visaRemove my-red-link' id='visaRemove_"+ visaNextIndex + "'><i class='fa fa-times'></i> Remove</span>\
             </div>\
         </div>");

        $("#visa_" + visaNextIndex).keyup(function () {
            var visa = $("#visa_" + visaNextIndex).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
            if (visa != "" && !htmlTagRegex.test(visa)) {
                $("#visaErr" + visaNextIndex).show();
                $("#visaErr" + visaNextIndex).html("Invalid format!");
                $("#visa_" + visaNextIndex).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(visa)) {
                $("#visaErr" + visaNextIndex).hide();
                $("#visa_" + visaNextIndex).css("border-color", "#4cff00");
            }
            else {
                $("#visaErr" + visaNextIndex).hide();
                $("#visa_" + visaNextIndex).css("border-color", "#ced4da");
            }

        }).keyup();
    });
    $("#visaDiv").on("click", ".visaRemove", function () {
        var id = this.id;
        var splitter = id.split("_");
        var deleteIndex = splitter[1];
        $("#visacontent_" + deleteIndex).remove();
        $(".visaRemove:last").css("display", "block");
    });

    var termLastId = 0;
    var termSplitId = "";
    var nextTermIndex = 0;
    $("#btntermCondition").click(function (e) {
        e.preventDefault(e);
        termLastId = $(".elem0:last").attr("id");
        termSplitId = termLastId.split("_");
        nextTermIndex = Number(termSplitId[1]) + 1;
        $(".rmove").css("display", "none");
        $("#traveltermCondition").append("<div class='row p-2 elem0 dynamicTCondition' id='traveltermCondition_" + nextTermIndex + "'>\
            <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>\
                <div class='form-group'>\
                    <input type='text' placeholder='Terms and Conditions' name='termCondition' id='termCondition_" + nextTermIndex + "' class='form-control my-placeholder'>\
                </div>\
            <span class='text-danger my-font-13' id='tConError"+ nextTermIndex+"'></span>\
            </div>\
              <div class='col-12'>\
                <span class='my-font-13 rmove my-red-link' id='rmove_"+ nextTermIndex + "'><i class='fa fa-times'></i> Remove</span>\
             </div>\
         </div>");

        $("#termCondition_" + nextTermIndex).keyup(function () {
            var tCon = $("#termCondition_" + nextTermIndex).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
            if (tCon != "" && !htmlTagRegex.test(tCon)) {
                $("#tConError" + nextTermIndex).show();
                $("#tConError" + nextTermIndex).html("Invalid format!");
                $("#termCondition_" + nextTermIndex).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(tCon)) {
                $("#tConError" + nextTermIndex).hide();
                $("#termCondition_" + nextTermIndex).css("border-color", "#4cff00");
            }
            else {
                $("tConError" + nextTermIndex).hide();
                $("#termCondition_" + nextTermIndex).css("border-color", "#ced4da");
            }
        }).keyup();
    });
    $("#traveltermCondition").on("click", ".rmove", function () {
        var id = this.id;
        var Idsplitter = id.split("_");
        var deleteIndex = Idsplitter[1];
        $("#traveltermCondition_" + deleteIndex).remove();
        $(".rmove:last").css("display", "block");
    });

    var ppLastId = 0;
    var ppSplitId = "";
    var nextPPIndex = 0;
    $("#btnPPhotels").click(function (e) {
        e.preventDefault(e);
        ppLastId = $(".pp_elements:last").attr("id");
        ppSplitId = ppLastId.split("_");
        nextPPIndex = Number(ppSplitId[1]) + 1;
        $(".ppremove").css("display", "none");
        $("#p_Photels").append("<div class='row p-2 pp_elements dynamicTHotel' name='photels' id='photels_" + nextPPIndex+"'>\
                <div class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pt-2 pb-2'>\
                    <div class='form-group'>\
                        <input type='text' class='form-control my-placeholder' id='photelLoc_"+ nextPPIndex+"' name='hotellocation' placeholder='Location' />\
                    </div>\
                    <span class='text-danger my-font-13' id='photelLocErr"+ nextPPIndex+"'></span>\
                </div>\
                <div class='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 pt-2 pb-2'>\
                    <div class='form-group'>\
                        <input class='form-control my-placeholder' name='probablehotel' id='pphotels_"+ nextPPIndex+"' placeholder='Probable hotel' />\
                    </div>\
                    <span class='text-danger my-font-13' id='pphotelsErr"+ nextPPIndex+"'></span>\
                </div>\
                <div class='col-12'>\
                    <span class='my-font-13 ppremove my-red-link' id='ppremove-"+ nextPPIndex + "'><i class='fa fa-times'></i> Remove</span>\
                </div>\
            </div>");

        $("#photelLoc_" + nextPPIndex).keyup(function () {
            var photelLoc = $("#photelLoc_" + nextPPIndex).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
            if (photelLoc != "" && !htmlTagRegex.test(photelLoc)) {
                $("#photelLocErr" + nextPPIndex).show();
                $("#photelLocErr" + nextPPIndex).html("Invalid format!");
                $("#photelLoc_" + nextPPIndex).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(photelLoc)) {
                $("#photelLocErr" + nextPPIndex).hide();
                $("#photelLoc_" + nextPPIndex).css("border-color", "#4cff00");
            }
            else {
                $("#photelLocErr" + nextPPIndex).hide();
                $("#photelLoc_" + nextPPIndex).css("border-color", "#ced4da");
            }
        }).keyup();

        $("#pphotels_" + nextPPIndex).keyup(function () {
            var pphotels = $("#pphotels_" + nextPPIndex).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
            if (pphotels != "" && !htmlTagRegex.test(pphotels)) {
                $("#pphotelsErr" + nextPPIndex).show();
                $("#pphotelsErr" + nextPPIndex).html("Invalid format!");
                $("#pphotels_" + nextPPIndex).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(pphotels)) {
                $("#pphotelsErr" + nextPPIndex).hide();
                $("#pphotels_" + nextPPIndex).css("border-color", "#4cff00");
            }
            else {
                $("#pphotelsErr" + nextPPIndex).hide();
                $("#pphotels_" + nextPPIndex).css("border-color", "#ced4da");
            }
        }).keyup();
    });
    $("#p_Photels").on("click", ".ppremove", function () {
        var id = this.id;
        var Idsplitter = id.split("-");
        var deleteIndex = Idsplitter[1];
        $("#photels_" + deleteIndex).remove();
        $(".ppremove:last").css("display", "block");
    });

    var exLastId = 0;
    var exSplitId = "";
    var nextExIndex = 0;
    $("#btnExclusion").click(function (e) {
        e.preventDefault(e);
        exLastId = $("._elem0:last").attr("id");
        exSplitId = exLastId.split("_");
        nextExIndex = Number(exSplitId[1]) + 1;
        $("._rmove").css("display", "none");
        $("#travelExclusion").append("<div class='row p-2 _elem0 dynamicTExclusion' id='travelExclusion_" + nextExIndex + "'>\
            <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>\
                <div class='form-group'>\
                    <input type='text' placeholder='Exclusion' name='exclusion' id='exclusion_" + nextExIndex + "' class='form-control my-placeholder'>\
                </div>\
            <span class='text-danger my-font-13' id='exCError"+ nextExIndex+"'></span>\
            </div>\
            <div class='col-12'>\
                <span class='my-font-13 _rmove my-red-link' id='rmove-"+ nextExIndex + "'><i class='fa fa-times'></i> Remove</span>\
             </div>\
        </div>");

        $("#exclusion_" + nextExIndex).keyup(function () {
            var eXc = $("#exclusion_" + nextExIndex).val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
            if (eXc != "" && !htmlTagRegex.test(eXc)) {
                $("#exCError"+nextExIndex).show();
                $("#exCError" + nextExIndex).html("Invalid format!");
                $("#exclusion_" + nextExIndex).css("border-color", "#f23345");
                return false;
            }
            else if (htmlTagRegex.test(eXc)) {
                $("#exCError" + nextExIndex).hide();
                $("#exclusion_" + nextExIndex).css("border-color", "#4cff00");
            }
            else {
                $("#exCError" + nextExIndex).hide();
                $("#exclusion_" + nextExIndex).css("border-color", "#ced4da");
            }

        }).keyup();
    });
    $("#travelExclusion").on("click", "._rmove", function () {
        var id = this.id;
        var IdSplitter = id.split("-");
        var deleteIndex = IdSplitter[1];
        $("#travelExclusion_" + deleteIndex).remove();
        $("._rmove:last").css("display", "block");
    });
    var mySlider = [];
    $("#files").change(function () {
        $("#multiimg").empty();
        $("#slidePreview").show();
        for (var i = 0, len = this.files.length; i < len; i++) {
            (function (x, self) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#multiimg").append("<div class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pip text-center mb-2 fileinput'>\
                        <p>" + self.files[x].name + "</p>\
                        <img class='img-fluid thumbnail' src='" + e.target.result + "' title='" + self.files[x].name + "'/>\
                        <br/><span class='remove text-danger'><i class='fa fa-times'></i> Remove image</span>\
                        </div>");


                    $(".remove").click(function () {
                        $(this).parent(".pip").remove();
                        if ($("#multiimg").children().length < 1) {
                            $("#slidePreview").hide();
                        }
                    });
                    mySlider.push(self.files[x].name);
                }
                reader.readAsDataURL(self.files[x]);
            })(i, this);
        }
    });
    $("#primaryimgHeader").val($("#singleImg").val());
    $("#primaryimgSlide").val($("#files").val());
    $("#packagePrice").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#ErrorPrice").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });

    //function selectInputValidation() {
    //    var error1 = 0, error2 = 0;
    //    var packageForm = $("#packageForm");
    //    if ($("#_bedroom").val() == 0) {
    //        $(".bedError").show();
    //        $(".bedError").html("Please select bedroom type!");
    //        error1 = 1;
    //    }

    //    if ($("#_category").val() == "0") {
    //        $(".catError").show();
    //        $(".catError").html("Please select category!");
    //        error2 = 1;
    //    }

    //    if (error1 == 1 || error2 == 1) {
    //        if (!packageForm.valid()) {
    //            return false;
    //        }
    //        return false;
    //    }
    //    else {
    //        return true;
    //    }

    //}

    $("#btnPackageSave").click("validate", function (e) {
        e.preventDefault(e);
        $("#btnPackageSave").hide();
        $("#btnPackageLoading").show();
        fLDetails();
        if (customValidations() == false) {
            $("#btnPackageSave").show();
            $("#btnPackageLoading").hide();
            return false;
        }
        //var _url = packageForm.attr("action");
        var p_name = $("#packageName").val();
        var p_price = $("#packagePrice").val();
        var p_bedroom = $("#_bedroom").val();
        var p_category = $("#_category").val();
        var currency = $("input[name='currency']:checked").val();
        var from = "top";
        var align = "right";
        var data1 = JSON.stringify({ "p_name": p_name, "p_price": p_price, "currency": currency, "p_bedroom": p_bedroom, "p_category": p_category, "p_flghtdetails": flDetails, "p_inclusion": flInclusion, "ItineraryName": flIntinerary, "p_termCondition": flTermsCon, "p_exclusion": flExclusion, "p_traveldate": travelDateArray, "visa": visa, "photels": photels });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/AddPackage",
            data: data1,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $("#packageForm :input").resetValue(); 
                $("input[name='probablehotel']").val("");
                fLDetailsClear();
                removeDynamicFields();
                $.ajax({
                    type: "GET",
                    url: "/ControlPanel/PackageDD",
                    data: "{}",
                    success: function (data) {
                        var opt = "<option class='catOpt' value='0'>Select Package Name</option>";
                        for (var i = 0; i < data.length; i++) {
                            opt += "<option class='catOpt' value='" + data[i].p_id + "'>" + data[i].p_name + "</option>";
                        }
                        $("#_packagename").html(opt);
                    }
                });
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
        $("#btnPackageSave").show();
        $("#btnPackageLoading").hide();
    });

    $("#btnSaveBRtype").click(function (e) {
        e.preventDefault(e);
        $("#btnSaveBRtype").hide();
        $("#btnSaveBRtypeLoading").show();
        var formData = $("#BRFormData");
        if (!formData.valid()) {
            $("#btnSaveBRtype").show();
            $("#btnSaveBRtypeLoading").hide();
            return false;
        }
        var url = formData.attr("action");
        var mydata = formData.serialize();
        var from = "top";
        var align = "right";
        $.post(url, mydata, function (data) {
            $.notify({
                icon: "add_alert",
                message: data

            }, {
                    type: 'success',
                    timer: 4000,
                    placement: {
                        from: from,
                        align: align
                    }
                });
            $.ajax({
                type: "GET",
                url: "/ControlPanel/BedDD",
                data: "{}",
                success: function (data) {
                    var opt = "<option class='catOpt' value='0'>Select Bedroom Type</option>";
                    for (var i = 0; i < data.length; i++) {
                        opt += "<option class='catOpt' value='" + data[i].bedid + "'>" + data[i].bedtype + "</option>";
                    }
                    $("#_bedroom").html(opt);
                }
            });
            $("#btnSaveBRtype").show();
            $("#btnSaveBRtypeLoading").hide();
            formData.trigger("reset");
        });
    });

    $("#btnSavecategory").click(function (e) {
        e.preventDefault(e);
        $("#btnSavecategory").hide();
        $("#btnSaveCatLoading").show();
        var formData = $("#CatFormData");
        if (!formData.valid()) {
            $("#btnSavecategory").show();
            $("#btnSaveCatLoading").hide();
            return false;
        }
        var url = formData.attr("action");
        var _data = formData.serialize();
        var from = "top";
        var align = "right";
        $.post(url, _data, function (data) {
            $.notify({
                icon: "add_alert",
                message: data

            }, {
                    type: 'success',
                    timer: 4000,
                    placement: {
                        from: from,
                        align: align
                    }
                });
            $.ajax({
                type: "GET",
                url: "/ControlPanel/CatDD",
                data: "{}",
                success: function (data) {
                    var opt = "<option class='catOpt' value='0'>Select Category</option>";
                    for (var i = 0; i < data.length; i++) {
                        opt += "<option class='catOpt' value='" + data[i].c_id + "'>" + data[i].c_name + "</option>";
                    }
                    $("#_category").html(opt);
                }
            });
            $("#btnSavecategory").show();
            $("#btnSaveCatLoading").hide();
            formData.trigger("reset");
        });
    });

    $("#btnPackageImage").click(function (e) {
        e.preventDefault(e);
        var files = $("#files").get(0).files;
        var txt = $("#_packagename").val();
        if (txt == 0 || txt == "" || txt == null || txt == "0") {
            $(".imgError").show();
            $(".imgError").html("Please select a package name!");
            return false
        }
        else {
            if (files.length == 0) {
                $(".imgerror").show();
                $(".imgerror").html("Please select an image!");
                return false;
            }
        }
        var fileData = new FormData();
        for (var i = 0; i < files.length; i++) {
            fileData.append("files", files[i]);
        }
        fileData.append("_packagename", txt);
        var from = "top";
        var align = "right";
        $.ajax({
            type: "POST",
            url: "/ControlPanel/AddImage",
            data: fileData,
            dataType: "text",
            traditional: true,
            contentType: false,
            processData: false,
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    });


    $("#btnIndexSlide").click(function (e) {
        e.preventDefault(e);
        var files = $("#files").get(0).files;
        if (files.length == 0) {
            $(".imgerror").show();
            $(".imgerror").html("Please select an image!");
            return false;
        }
        var fileData = new FormData();
        for (var i = 0; i < files.length; i++) {
            fileData.append("files", files[i]);
        }
        var from = "top";
        var align = "right";
        $.ajax({
            type: "POST",
            url: "/ControlPanel/UploadSlide",
            data: fileData,
            dataType: "text",
            traditional: true,
            contentType: false,
            processData: false,
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchIss);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    });


    //$(document).ajaxStart(function () {
    //    // progress bar
    //    // other prop
    //});
    //$(document).ajaxStop(function () {
    //    // other prop
    //});
   
    $.ajax({
        type: "GET",
        url: "/ControlPanel/CatDD",
        data: "{}",
        success: function (data) {
            var opt = "<option class='catOpt' value='0'>Select Category</option>";
            for (var i = 0; i < data.length; i++) {
                opt += "<option class='catOpt' value='" + data[i].c_id + "'>" + data[i].c_name + "</option>";
            }
            $("#_category").html(opt);
        }
    });

    $.ajax({
        type: "GET",
        url: "/ControlPanel/BedDD",
        data: "{}",
        success: function (data) {
            var opt = "<option class='catOpt' value='0'>Select Bedroom Type</option>";
            for (var i = 0; i < data.length; i++) {
                opt += "<option class='catOpt' value='" + data[i].bedid + "'>" + data[i].bedtype + "</option>";
            }
            $("#_bedroom").html(opt);
        }
    });

    $.ajax({
        type: "GET",
        url: "/ControlPanel/PackageDD",
        data: "{}",
        success: function (data) {
            var opt = "<option class='catOpt' value='0'>Select Package Name</option>";
            for (var i = 0; i < data.length; i++) {
                opt += "<option class='catOpt' value='" + data[i].p_id + "'>" + data[i].p_name + "</option>";
            }
            $("#_packagename").html(opt);
        }
    });

    //function ntPDdFunction() {
    //    $.ajax({
    //        type: "GET",
    //        url: "/ControlPanel/DDNTP",
    //        data: "{}",
    //        success: function (data) {
    //            var opt = "<option value='0'>Select Package name</option>";
    //            for (var i = 0; i < data.length; i++) {
    //                opt += "<option value='"+data[i].nt_id+"'>"+data[i].name+"</option>";
    //            }
    //            $("#_ntPName").html(opt);
    //        }
    //    });
    //}

    //$(document).ready(ntPDdFunction);  

    /* Custom validation */

    $("#packageName").keyup(function () {
        var pName = $("#packageName").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\']+)$/;
        if (pName != "" && !htmlTagRegex.test(pName)) {
            $(".pNameError").show();
            $(".pNameError").html("Invalid format!");
            $("#packageName").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(pName)) {
            $(".pNameError").hide();
            $("#packageName").css("border-color", "#4cff00");
        }
        else {
            $(".pNameError").hide();
            $("#packageName").css("border-color", "#ced4da");
        }
    }).keyup();

    $("#flightDetails_1").keyup(function () {
        var flD = $(this).val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if (flD != "" && !htmlTagRegex.test(flD)) {
            $(".flDError").show();
            $(".flDError").html("Invalid format!");
            $("#flightDetails_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(flD)) {
            $(".flDError").hide();
            $("#flightDetails_1").css("border-color", "#4cff00");
        }
        else {
            $(".flDError").hide();
            $("#flightDetails_1").css("border-color", "#ced4da");
        }

    }).keyup();

    $("#ItineraryTitle_1").keyup(function () {
        var itiTitle = $("#ItineraryTitle_1").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if (itiTitle != "" && !htmlTagRegex.test(itiTitle)) {
            $(".itiTiError").show();
            $(".itiTiError").html("Invalid format!");
            $("#ItineraryTitle_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(itiTitle)) {
            $(".itiTiError").hide();
            $("#ItineraryTitle_1").css("border-color", "#4cff00");
        }
        else {
            $(".itiTiError").hide();
            $("#ItineraryTitle_1").css("border-color", "#ced4da");
        }

    }).keyup();

    $("#ItineraryDes_1").keyup(function () {
        var itiDes = $("#ItineraryDes_1").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\\\:\|\"\(\)\%]+)$/;
        if (itiDes != "" && !htmlTagRegex.test(itiDes)) {
            $(".itiDesError").show();
            $(".itiDesError").html("Invalid format!");
            $("#ItineraryDes_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(itiDes)) {
            $(".itiDesError").hide();
            $("#ItineraryDes_1").css("border-color", "#4cff00");
        }
        else {
            $(".itiDesError").hide();
            $("#ItineraryDes_1").css("border-color", "#ced4da");
        }
    }).keyup();

    $("#inclusion_1").keyup(function () {
        var inC = $("#inclusion_1").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if (inC != "" && !htmlTagRegex.test(inC)) {
            $(".incErr").show();
            $(".incErr").html("Invalid format!");
            $("#inclusion_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(inC)) {
            $(".incErr").hide();
            $("#inclusion_1").css("border-color", "#4cff00");
        }
        else {
            $(".incErr").hide();
            $("#inclusion_1").css("border-color", "#ced4da");
        }

    }).keyup();

    $("#termCondition_1").keyup(function () {
        var tCon = $("#termCondition_1").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if (tCon != "" && !htmlTagRegex.test(tCon)) {
            $(".tConError").show();
            $(".tConError").html("Invalid format!");
            $("#termCondition_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(tCon)) {
            $(".tConError").hide();
            $("#termCondition_1").css("border-color", "#4cff00");
        }
        else {
            $(".tConError").hide();
            $("#termCondition_1").css("border-color", "#ced4da");
        }
    }).keyup();

    $("#exclusion_1").keyup(function () {
        var eXc = $("#exclusion_1").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if (eXc != "" && !htmlTagRegex.test(eXc)) {
            $(".exCError" ).show();
            $(".exCError").html("Invalid format!");
            $("#exclusion_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(eXc)) {
            $(".exCError").hide();
            $("#exclusion_1").css("border-color", "#4cff00");
        }
        else {
            $(".exCError").hide();
            $("#exclusion_1").css("border-color", "#ced4da");
        }

    }).keyup();

    $("#visa_1").keyup(function () {
        var visa = $("#visa_1").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if (visa != "" && !htmlTagRegex.test(visa)) {
            $(".visaErr").show();
            $(".visaErr").html("Invalid format!");
            $("#visa_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(visa)) {
            $(".visaErr").hide();
            $("#visa_1").css("border-color", "#4cff00");
        }
        else {
            $(".visaErr").hide();
            $("#visa_1").css("border-color", "#ced4da");
        }

    }).keyup();

    $("#photelLoc_1").keyup(function () {
        var photelLoc = $("#photelLoc_1").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if (photelLoc != "" && !htmlTagRegex.test(photelLoc)) {
            $(".photelLocErr").show();
            $(".photelLocErr").html("Invalid format!");
            $("#photelLoc_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(photelLoc)) {
            $(".photelLocErr").hide();
            $("#photelLoc_1").css("border-color", "#4cff00");
        }
        else {
            $(".photelLocErr").hide();
            $("#photelLoc_1").css("border-color", "#ced4da");
        }    
    }).keyup();

    $("#pphotels_1").keyup(function () {
        var pphotels = $("#pphotels_1").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if (pphotels != "" && !htmlTagRegex.test(pphotels)) {
            $(".pphotelsErr").show();
            $(".pphotelsErr").html("Invalid format!");
            $("#pphotels_1").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(pphotels)) {
            $(".pphotelsErr").hide();
            $("#pphotels_1").css("border-color", "#4cff00");
        }
        else {
            $(".pphotelsErr").hide();
            $("#pphotels_1").css("border-color", "#ced4da");
        }
    }).keyup();

    $("#_category").change(function () {
        if ($("#_category").val() != "" || $("#_category").val != "0" || $("#_category").val != 0) {
            $(".catError").hide();
            $("#_category").css("border-color", "#ced4da");
        }
    });

    $("input[name='currency']").click(function () {
        $("#currencyError").hide();
    });

    $("#_bedroom").change(function () {
        if ($("#_bedroom").val() != "" || $("#_bedroom").val != "0" || $("#_bedroom").val != 0) {
            $(".bedError").hide();
            $("#_bedroom").css("border-color", "#ced4da");
        }
    });

    function customValidations() {
        var Error = 0; 
        var currency = $("input[name='currency']:checked").val();
        if (currency != "peso" && currency != "dollar") {
            $("#currencyError").show();
            $("#currencyError").html("Please select a currency!");
            Error = 1;
        }
        else {
            $("#currencyError").hide();
        }
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-\,\/\:\(\)\%]+)$/;
        if ($("#packagePrice").val() == "") {
            $("#ErrorPrice").show();
            $("#ErrorPrice").html("Package price is required!");
            $("#packagePrice").css("border-color", "#f23345");
            Error = 1;
        }
        else {
            var numRegex = /^[0-9]*$/;
            if (numRegex.test($("#packagePrice").val())) {
                $("#ErrorPrice").hide();
                $("#packagePrice").css("border-color", "#4cff00");
            }
        }

        if ($("#packageName").val() == "") {
            $(".pNameError").show();
            $(".pNameError").html("Package name is required!");
            $("#packageName").css("border-color", "#f23345");
            Error = 1;
        }
        else {
            var Pname = $("#packageName").val();
            var htmlTagRegexx = /^([a-zA-Z0-9 \.\&\']+)$/;
            if (Pname != "" && !htmlTagRegexx.test(Pname)) {
                $(".pNameError").show();
                $(".pNameError").html("Invalid format!");
                $("#packageName").css("border-color", "#f23345");
                Error = 1;
            }
            else if (htmlTagRegexx.test($("#packageName").val())) {
                $(".pNameError").hide();
                $("#packageName").css("border-color", "#4cff00");
            }
        }

        if ($("#_category").val() == 0 || $("#_category").val() == "" || $("#_category").val() == "0") {
            $(".catError").show();
            $(".catError").html("Please select category!");
            $("#_category").css("border-color", "#f23345");
            Error = 1;
        }
        if ($("#_bedroom").val() == 0 || $("#_bedroom").val() == "" || $("#_bedroom").val() == "0") {
            $(".bedError").show();
            $(".bedError").html("Please select bedroom class");
            $("#_bedroom").css("border-color", "#f23345");
            Error = 1;
        }
        var flD = $("#flightDetails_1").val();
        if (flD != "" && !htmlTagRegex.test(flD)) {
            $(".flDError").show();
            $(".flDError").html("Invalid format!");
            $("#flightDetails_1").css("border-color", "#f23345");
            Error = 1;
        }
        else if (htmlTagRegex.test(flD)) {
            $(".flDError").hide();
            $("#flightDetails_1").css("border-color", "#4cff00");
        }
        else {
            $(".flDError").hide();
            $("#flightDetails_1").css("border-color", "#ced4da");
        }
        if (Error == 1) {
            return false;
        }
        else {
            return true;
        }
    }


    function fetchIss() {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/GetIss",
            data: {},
            success: function (data) {
                var content = "";
                for (var i = 0; i < data.length; i++) {
                    content += "<div class='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>\
                                 <img class='hover-animate-img m-1' src='/DynamicFiles/"+ data[i].is_img + "' />\
                <p class='text-center'><span class='btn btn-success btn-link mt-1 mb-1 mr-0 ml-0 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editIss("+ data[i].is_id + ")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 mt-1 mb-1 ml-0 mr-0' rel='tooltip' data-placement='bottom' title='Remove' onclick='deleteIss(" + data[i].is_id + ")'> <i class='material-icons'>close</i></span></p>\
                             </div>";
                }
                $("#issImgDisplay").html(content);
            }
        });
    }
    $(document).ready(fetchIss);

    deleteIss = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteIss",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchIss);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    editIss = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveIss",
            data: { id: id },
            success: function (data) {
                console.log(data);
                var imgidOutput = "<input type='hidden' value='" + data[0].is_id + "' name='imgID' id='imgID' />";
                var imgOutput = "<img id='prev' src='/DynamicFiles/" + data[0].is_img + "' width='200' height='150' />";

                $("#imgId").html(imgidOutput);
                $("#imgPreview").html(imgOutput);
                $("#ImgIss").modal("show");

                function readURL(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {
                            $('#prev').attr('src', e.target.result);
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }

                $("#ufiles").change(function () {
                    readURL(this);
                });
            }
        });
    }

    $("#updateISS").click(function (e) {
        e.preventDefault(e);
        var files = $("#ufiles").get(0).files;
        var txt = $("#imgID").val();
        var from = "top";
        var align = "right";
        var fileData = new FormData();
        fileData.append("file", files[0]);
        fileData.append("id", txt);
        $.ajax({
            type: "POST",
            url: "/ControlPanel/UpdateIss",
            data: fileData,
            dataType: "text",
            traditional: true,
            contentType: false,
            processData: false,
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchIss);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    });

    /* Currency funciton */
    function curRency(n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

  

    /* fetching data */
    if (typeof $("#viewBagID").val() != "undefined") {
        var action = "inc";
        $(document).ready(fetchingData(action));  
    }
    function fetchingData(ac) {
        var id = $("#viewBagID").val();
        var con = ac;
        $.ajax({
            type: "GET",
            url: "/ControlPanel/JsonDataOTDP",
            data: { id: id },
            success: function (data) {
                var pPrice = "";
                var pName = "<i style='font-size:24px;border-radius:3px' class='bg-info p-3 fas fa-plane-departure text-white'></i> " + data.p_name;
                if (data.currency == 'peso') {
                     pPrice = curRency(data.p_price, "<span style='font-size:20px;color:rgb(15, 219, 70)'> ₱</span>") + "/pax <span onclick='editPrice(" + data.p_id + ")' class='btn btn-success btn-link mt-0 mb-0 mr-0 ml-5 p-0' rel='tooltip' data-placement='bottom' title='Edit'> <i class='material-icons'>edit</i></span>";
                }
                else {
                    pPrice = curRency(data.p_price, "<span style='font-size:20px;color:rgb(15, 219, 70)'> $</span>") + "/pax <span onclick='editPrice(" + data.p_id + ")' class='btn btn-success btn-link mt-0 mb-0 mr-0 ml-5 p-0' rel='tooltip' data-placement='bottom' title='Edit'> <i class='material-icons'>edit</i></span>";
                } 
                var pStatus = "<span>";
                if (data.status == 1) {
                    pStatus += "Available";
                }
                else {
                    pStatus += "Not Available";
                }
                pStatus += "</span>";
                var tdates = "";
                var links = "";
                var incContent = "";
                var itiContent = "";
                var tacContent = "";
                var excContent = "";
                var fliContent = "";
                var visContent = "";
                var hotContent = "";
                var imgContent = "";
                if (data.adminINCs.length > 0) {
                    $("#inclusion_div0").css("display", "block");
                    links += "<li class='nav-item'>";
                    if (con == "inc") {
                        links += "<a class='user_links nav-link my-font-15 active' id='link-inclusion0'>Inclusion</a>";
                    }
                    else {
                        links += "<a class='user_links nav-link my-font-15' id='link-inclusion0'>Inclusion</a>";
                    }
                    links += "</li>";
                }
                if (data.adminITIs.length > 0) {
                    links += "<li class='nav-item'>";
                    if (con == "iti") {
                        links += "<a class='nav-link user_links my-font-15 active' id='link-itinerary0'>Itinerary</a>";
                        $("#inclusion_div0").hide();
                    }
                    else {
                        links += "<a class='nav-link user_links my-font-15' id='link-itinerary0'>Itinerary</a>";
                    }
                    links += "</li>";
                }
                if (data.adminCONs.length > 0) {
                    links += "<li class='nav-item'>";
                    if (con == "tac") {
                        links += "<a class='nav-link user_links my-font-15 active' id='link-terms0'>Terms and Conditions</a>";
                        $("#inclusion_div0").hide();
                    }
                    else {
                        links += " <a class='nav-link user_links my-font-15' id='link-terms0'>Terms and Conditions</a>";
                    }
                    links += "</li>";
                }
                if (data.adminEXCs.length > 0) {
                    links += "<li class='nav-item'>";
                    if (con == "exc") {
                        links += "<a class='nav-link user_links my-font-15 active' id='link-exclusion0'>Exclusion</a>";
                        $("#inclusion_div0").hide();
                    }
                    else {
                        links += "<a class='nav-link user_links my-font-15' id='link-exclusion0'>Exclusion</a>";
                    }
                    links += "</li>";
                }
                if (data.adminVIs.length > 0) {
                    links += "<li class='nav-item'>";
                    if (con == "vi") {
                        links += " <a class='nav-link user_links my-font-15 active' id='link-visareq0'>Visa Requirements</a>";
                        $("#inclusion_div0").hide();
                    }
                    else {
                        links += " <a class='nav-link user_links my-font-15' id='link-visareq0'>Visa Requirements</a>";
                    }
                    links += "</li>";
                }
                if (data.adminFLIs.length > 0) {
                    links += "<li class='nav-item'>";
                    if (con == "fli") {
                        links += "<a class='nav-link user_links my-font-15 active' id='link-details0'>Flight Details</a>";
                        $("#inclusion_div0").hide();
                    }
                    else {
                        links += "<a class='nav-link user_links my-font-15' id='link-details0'>Flight Details</a>";
                    }
                    links += "</li>";
                }
                if (data.photels.length > 0) {
                    links += "<li class='nav-item'>";
                    if (con == "pho") {
                        links += "<a class='nav-link user_links my-font-15 active' id='link-hotels0'>Hotels</a>";
                        $("#inclusion_div0").hide();
                    }
                    else {
                        links += " <a class='nav-link user_links my-font-15' id='link-hotels0'>Hotels</a>";
                    }
                    links += " </li>";
                }
                for (var i = 0; i < data.adminINCs.length; i++) {
                    incContent += "<p id='incSpan"+ data.adminINCs[i].in_id+"' class='ml-3'>\
                                     "+ data.adminINCs[i].name + "<span class='btn btn-success btn-link mt-0 mb-0 mr-0 ml-5 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editINC(" + data.adminINCs[i].in_id +")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 m-0' rel='tooltip' data-placement='bottom' title='Remove' onclick='delelteInc(" + data.adminINCs[i].in_id+")'> <i class='material-icons'>close</i></span>\
                                   </p>";
                }
                for (var i = 0; i < data.adminITIs.length; i++) {
                    itiContent += "<div class='p-0' id='itiSpan" + data.adminITIs[i].it_id+"'>\
                                    <div class='card-header card mt-0 mb-0'>\
                                        <a class='card-link my-font-14 font-orange user_links' data-toggle='collapse' href='#collapse" + data.adminITIs[i].it_id + "'>\
                                           "+ data.adminITIs[i].name + "\
                                        </a>\
                                    </div>\
                                    <div id='collapse" + data.adminITIs[i].it_id + "' class='collapse mt-0 mb-0' data-parent='#accordion'>\
                                        <div class='card-body text-color-8 my-font-13'>\
                                             "+ data.adminITIs[i].description + "";
                    if (data.adminITIs[i].bmeal != 0 || data.adminITIs[i].lmeal != 0 || data.adminITIs[i].dmeal != 0) {
                        itiContent += "<fieldset class='scheduler-border'>\
                                                        <legend class='scheduler-border text-dark'><i class='fas fa-utensils' style='font-size:20px;color:darkorange'></i> Free Meals:</legend>\
                                                            <ul>";
                        if (data.adminITIs[i].bmeal == 1) {
                            itiContent += "<li>Breakfast</li>";

                        }
                        if (data.adminITIs[i].lmeal == 1) {
                            itiContent += "<li>Lunch</li>";
                        }
                        if (data.adminITIs[i].dmeal == 1) {
                            itiContent += "<li>Dinner</li>";
                        }
                        itiContent += "</ul>\
                                                        </fieldset>";
                    }
                    itiContent += "</div>\
                                <span class='btn btn-success pull-right btn-link mt-0 mb-2 mr-4 ml-1 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editITI("+ data.adminITIs[i].it_id + ")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 mt-0 mb-0 ml-0 mr-1 pull-right' rel='tooltip' data-placement='bottom' title='Remove' onclick='deleteIti(" + data.adminITIs[i].it_id+")'> <i class='material-icons'>close</i></span>\
                            </div>\
                        </div>";
                }
                for (var i = 0; i < data.adminTDs.length; i++) {
                    tdates += "<li>" + data.adminTDs[i].dates + "<span class='btn btn-success pull-right btn-link p-0 m-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editDates(" + data.adminTDs[i].tdates_id + ")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 m-0 pull-right' onclick='deleteDates(" + data.adminTDs[i].tdates_id + ")' rel='tooltip' data-placement='bottom' title='Remove'> <i class='material-icons'>close</i></span></li>";
                }
                for (var i = 0; i < data.adminCONs.length; i++) {
                    tacContent += "<p id='tacSpan" + data.adminCONs[i].con_id +"' class='ml-3'>\
                                     "+ data.adminCONs[i].name + " <span class='btn btn-success btn-link mt-0 mb-0 mr-0 ml-5 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editTac(" + data.adminCONs[i].con_id + ")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 m-0' rel='tooltip' data-placement='bottom' title='Remove' onclick='deleteTac(" + data.adminCONs[i].con_id+")'> <i class='material-icons'>close</i></span>\
                                </p>";
                }
                for (var i = 0; i < data.adminEXCs.length; i++) {
                    excContent += "<p id='excSpan" + data.adminEXCs[i].ex_id +"' class='ml-3'>\
                                     "+ data.adminEXCs[i].name + " <span class='btn btn-success btn-link mt-0 mb-0 mr-0 ml-5 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editEXC(" + data.adminEXCs[i].ex_id + ")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 m-0' rel='tooltip' data-placement='bottom' title='Remove' onclick='deleteEXC(" + data.adminEXCs[i].ex_id+")'> <i class='material-icons'>close</i></span>\
                                </p>";
                }
                for (var i = 0; i < data.adminFLIs.length; i++) {
                    fliContent += "<p id='fliSpan" + data.adminFLIs[i].fl_id +"' class='ml-3'>\
                                     "+ data.adminFLIs[i].name + " <span class='btn btn-success btn-link mt-0 mb-0 mr-0 ml-5 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editFLI(" + data.adminFLIs[i].fl_id + ")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 m-0' rel='tooltip' data-placement='bottom' title='Remove' onclick='deleteFLI(" + data.adminFLIs[i].fl_id +")'> <i class='material-icons'>close</i></span>\
                                </p>";
                }
                for (var i = 0; i < data.adminVIs.length; i++) {
                    visContent += "<p id='viSpan" + data.adminVIs[i].visa_id +"' class='ml-3'>\
                                     "+ data.adminVIs[i].name + " <span class='btn btn-success btn-link mt-0 mb-0 mr-0 ml-5 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editVI(" + data.adminVIs[i].visa_id + ")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 m-0' rel='tooltip' data-placement='bottom' title='Remove' onclick='deleteVi(" + data.adminVIs[i].visa_id+")'> <i class='material-icons'>close</i></span>\
                                </p>";
                }
                for (var i = 0; i < data.photels.length; i++) {
                    hotContent += "<div id='phSpan" + data.photels[i].ph_id +"'>\
                                        <div class='card-header card mt-0 mb-0'>\
                                            <a class='card-link my-font-14 font-orange user_links' data-toggle='collapse' href='#collapse" + data.photels[i].ph_id + "'>\
                                               "+ data.photels[i].ph_loc + "\
                                            </a>\
                                        </div>\
                                        <div id='collapse" + data.photels[i].ph_id + "' class='collapse mt-0 mb-0 ml-2' data-parent='#hotContent'>\
                                            <div class='card-body text-color-8 my-font-13'>\
                                                 "+ data.photels[i].ph_phtel + "\
                                            </div>\
                      <p class='pb-2'>\
                                <span class='btn btn-success btn-link m-0 p-0 pull-right' rel='tooltip' data-placement='bottom' title='Edit' onclick='editPh(" + data.photels[i].ph_id + ")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 mt-0 mb-0 mr-3 ml-0 pull-right' rel='tooltip' data-placement='bottom' title='Remove' onclick='deletePh(" + data.photels[i].ph_id + ")'> <i class='material-icons'>close</i></span>\
                               </p>\
                                       </div>\
                             </div>";
                }
                for (var i = 0; i < data.adminIMGs.length; i++) {
                    imgContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>\
                                 <img class='hover-animate-img-2 hover-animate-img' src='/DynamicFiles/"+ data.adminIMGs[i].slides + "' />\
                <p class='text-center'><span class='btn btn-success btn-link mt-1 mb-1 mr-0 ml-0 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editImg("+ data.adminIMGs[i].img_id+")'> <i class='material-icons'>edit</i></span> <span class='btn btn-danger btn-link p-0 mt-1 mb-1 ml-0 mr-0' rel='tooltip' data-placement='bottom' title='Remove' onclick='deleteImg("+ data.adminIMGs[i].img_id +")'> <i class='material-icons'>close</i></span></p>\
                             </div>";
                }

                $("#liStatus").html(pStatus);
                $("#packageName").html(pName);
                $("#liPrice").html(pPrice);
                $("#_tDates").html(tdates);
                $("#ulLinks").html(links);
                $("#incContent").html(incContent);
                $("#accordion").html(itiContent);
                $("#tacContent").html(tacContent);
                $("#excContent").html(excContent);
                $("#fliContent").html(fliContent);
                $("#visContent").html(visContent);
                $("#hotContent").html(hotContent);
                $("#imgContent").html(imgContent);


                /* properties from guest */

                $("#link-hotels0").click(function () {
                    $("#link-hotels0").addClass("active");
                    $("#link-inclusion0").removeClass("active");
                    $("#link-itinerary0").removeClass("active");
                    $("#link-terms0").removeClass("active");
                    $("#link-details0").removeClass("active");
                    $("#link-exclusion0").removeClass("active");
                    $("#link-visareq0").removeClass("active");
                    $("#visareq_div0").hide();
                    $("#inclusion_div0").hide();
                    $("#itinerary_div0").hide();
                    $("#optional_div0").hide();
                    $("#exclusion_div0").hide();
                    $("#flightDetails_div0").hide();
                    $("#hotels_div0").show();
                });
                $("#link-inclusion0").click(function () {
                    $("#link-hotels0").removeClass("active");
                    $("#link-inclusion0").addClass("active");
                    $("#link-itinerary0").removeClass("active");
                    $("#link-terms0").removeClass("active");
                    $("#link-details0").removeClass("active");
                    $("#link-exclusion0").removeClass("active");
                    $("#link-visareq0").removeClass("active");
                    $("#visareq_div0").hide();
                    $("#inclusion_div0").show();
                    $("#itinerary_div0").hide();
                    $("#optional_div0").hide();
                    $("#exclusion_div0").hide();
                    $("#flightDetails_div0").hide();
                    $("#hotels_div0").hide();
                });
                $("#link-itinerary0").click(function () {
                    $("#link-hotels0").removeClass("active");
                    $("#link-itinerary0").addClass("active");
                    $("#link-inclusion0").removeClass("active");
                    $("#link-terms0").removeClass("active");
                    $("#link-details0").removeClass("active");
                    $("#link-exclusion0").removeClass("active");
                    $("#link-visareq0").removeClass("active");
                    $("#visareq_div0").hide();
                    $("#inclusion_div0").hide();
                    $("#itinerary_div0").show();
                    $("#optional_div0").hide();
                    $("#exclusion_div0").hide();
                    $("#flightDetails_div0").hide();
                    $("#hotels_div0").hide();
                });
                $("#link-terms0").click(function () {
                    $("#link-hotels0").removeClass("active");
                    $("#link-terms0").addClass("active");
                    $("#link-inclusion0").removeClass("active");
                    $("#link-itinerary0").removeClass("active");
                    $("#link-details0").removeClass("active");
                    $("#link-exclusion0").removeClass("active");
                    $("#link-visareq0").removeClass("active");
                    $("#visareq_div0").hide();
                    $("#inclusion_div0").hide();
                    $("#itinerary_div0").hide();
                    $("#optional_div0").show();
                    $("#exclusion_div0").hide();
                    $("#flightDetails_div0").hide();
                    $("#hotels_div0").hide();
                });
                $("#link-exclusion0").click(function () {
                    $("#link-hotels0").removeClass("active");
                    $("#link-exclusion0").addClass("active");
                    $("#link-inclusion0").removeClass("active");
                    $("#link-terms0").removeClass("active");
                    $("#link-details0").removeClass("active");
                    $("#link-visareq0").removeClass("active");
                    $("#visareq_div0").hide();
                    $("#inclusion_div0").hide();
                    $("#itinerary_div0").hide();
                    $("#optional_div0").hide();
                    $("#exclusion_div0").show();
                    $("#flightDetails_div0").hide();
                    $("#hotels_div0").hide();
                });
                $("#link-details0").click(function () {
                    $("#link-hotels0").removeClass("active");
                    $("#link-details0").addClass("active");
                    $("#link-inclusion0").removeClass("active");
                    $("#link-terms0").removeClass("active");
                    $("#link-itinerary0").removeClass("active");
                    $("#link-exclusion0").removeClass("active");
                    $("#link-visareq0").removeClass("active");
                    $("#visareq_div0").hide();
                    $("#inclusion_div0").hide();
                    $("#itinerary_div0").hide();
                    $("#optional_div0").hide();
                    $("#exclusion_div0").hide();
                    $("#flightDetails_div0").show();
                    $("#hotels_div0").hide();
                });
                $("#link-visareq0").click(function () {
                    $("#link-hotels0").removeClass("active");
                    $("#link-visareq0").addClass("active");
                    $("#link-details0").removeClass("active");
                    $("#link-inclusion0").removeClass("active");
                    $("#link-terms0").removeClass("active");
                    $("#link-itinerary0").removeClass("active");
                    $("#link-exclusion0").removeClass("active");
                    $("#inclusion_div0").hide();
                    $("#itinerary_div0").hide();
                    $("#optional_div0").hide();
                    $("#exclusion_div0").hide();
                    $("#flightDetails_div0").hide();
                    $("#visareq_div0").show();
                    $("#hotels_div0").hide();
                });
            },
            error: function (xhr, status, error) {
                message: status + ": " + error
            }

        });
    }

    var UpdateTDdates = "";
    function _updateTdates() {
        $("[name='updateTdatesDiv']").map(function () {
            UpdateTDdates =
                $(this).find("input[name='uTdatesID']").val() + "|" +
                $(this).find("input[name='fromtDates']").val() + "|" +
                $(this).find("input[name='toDates']").val();
        });
    }

    $("#updateTdates").click(function (e) {
        _updateTdates();
        e.preventDefault(e);
        var from = "top";
        var align = "right";
        var mydata = JSON.stringify({ "dates": UpdateTDdates });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/UpdateTdates",
            data: mydata,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchingData);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    });

    var _UTPpriceDiv = "";
    function UpdateUTPprice() {
        $("[name='UTPpriceDiv']").map(function () {
            _UTPpriceDiv =
                $(this).find("input[name='UTPpriceid']").val() + "|" +
                $(this).find("input[name='UTPprice']").val();
        });
    }

    var saveCaption = "";
    function SaveCaptions() {
        $("[name='captionsEntity']").map(function () {
            saveCaption =
                $(this).find("input[name='fhCap']").val() + "|" +
                $(this).find("textarea[name='fbCap']").val() + "|" +
                $(this).find("input[name='shCap']").val() + "|" +
                $(this).find("textarea[name='sbCap']").val() + "|" +
                $(this).find("input[name='IndexT']").val();
        });
    }

    $("#btnSaveCaptions").click(function (e) {
        SaveCaptions();
        e.preventDefault(e);
        var from = "top";
        var align = "right";
        var mydata = JSON.stringify({ "captions": saveCaption });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/SaveCaptions",
            data: mydata,
            dataType: "text",
            traditional: true,
            contentType: "application/json",
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchCaptions);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    });

    function fetchCaptions() {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/GetCaption",
            data: {},
            success: function (data) {
                var contentTitle = "";
                var contentFC = "";
                var contentSC = "";
                contentTitle = "<strong>" + data[0].index_title + "</strong><span class='btn btn-success btn-link mt-1 mb-1 mr-0 ml-0 p-0' rel='tooltip' data-placement='bottom' title='Edit' onclick='editCaptitle(" + data[0].cap_id + ")'> <i class='material-icons'>edit</i></span>";
                contentFC = "<strong>" + data[0].fh_cap + "</strong> " + data[0].fb_cap + " <span class='btn btn-success btn-link mt-1 mb-1 mr-0 ml-0 p-0' rel = 'tooltip' data - placement='bottom' title = 'Edit' onclick = 'editFSCap(" + data[0].cap_id + ")'> <i class='material-icons'>edit</i></span>";
                contentSC = "<strong>" + data[0].sh_cap + "</strong> " + data[0].sb_cap + " <span class='btn btn-success btn-link mt-1 mb-1 mr-0 ml-0 p-0' rel = 'tooltip' data - placement='bottom' title = 'Edit' onclick = 'editSCCap(" + data[0].cap_id + ")'> <i class='material-icons'>edit</i></span>";
                $("#ContentTitle").html(contentTitle);
                $("#fcContent").html(contentFC);
                $("#scContent").html(contentSC);
            }
        });
    }
    $(document).ready(fetchCaptions);

    var scUCap = "";
    function sCUCap() {
        $("[name='SCUCap']").map(function () {
            scUCap = $(this).find("input[name='editFCId']").val() + "|" +
                $(this).find("input[name='editFCh']").val() + "|" +
                $(this).find("textarea[name='editFCb']").val();
        });
    }

    editSCCap = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/EditCaption",
            data: { id: id },
            success: function (data) {
                var contentSC = "<div name='SCUCap'>";
                contentSC += "<div class='form-group'>";
                contentSC += "<input type='hidden' name='editFCId' value=" + data[0].cap_id + " />";
                contentSC += "<input type='text' name='editFCh' class='form-control' value='" + data[0].sh_cap + "' />";
                contentSC += "</div>";
                contentSC += "<div class='form-group'>";
                contentSC += "<textarea class='form-control' rows='4' name='editFCb'>" + data[0].sb_cap + "</textarea>";
                contentSC += "</div>";
                contentSC += "</div>";
                contentSC += "<div class='form-group'>";
                contentSC += "<button class='btn btn-sm btn-success' id='updateSC'>Update</button>";
                contentSC += "<button class='btn btn-sm btn-warning' id='cancelSC'>Cancel</button>";
                contentSC += "</div>";

                $("#scContent").html(contentSC);
                $("#cancelSC").click(function (e) {
                    e.preventDefault(e);
                    $(document).ready(fetchCaptions);
                });
                $("#updateSC").click(function (e) {
                    e.preventDefault(e);
                    sCUCap();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "USC": scUCap });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateSCs",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            $(document).ready(fetchCaptions);
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
            }
        });
    }

    var uFC = "";
    function UFC() {
        $("[name='FCUCap']").map(function () {
            uFC = $(this).find("input[name='editFCId']").val() + "|" +
                $(this).find("input[name='editFCh']").val() + "|" +
                $(this).find("textarea[name='editFCb']").val();
        });
    }

    editFSCap = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/EditCaption",
            data: { id: id },
            success: function (data) {
                var contentFC = "<div name='FCUCap'>";
                contentFC += "<div class='form-group'>";
                contentFC += "<input type='hidden' name='editFCId' value=" + data[0].cap_id + " />";
                contentFC += "<input type='text' name='editFCh' class='form-control' value='" + data[0].fh_cap + "' />";
                contentFC += "</div>";
                contentFC += "<div class='form-group'>";
                contentFC += "<textarea class='form-control' rows='4' name='editFCb'>" + data[0].fb_cap+"</textarea>";
                contentFC += "</div>";
                contentFC += "</div>";
                contentFC += "<div class='form-group'>";
                contentFC += "<button class='btn btn-sm btn-success' id='updateFC'>Update</button>";
                contentFC += "<button class='btn btn-sm btn-warning' id='cancelFC'>Cancel</button>";
                contentFC += "</div>";

                $("#fcContent").html(contentFC);
                $("#cancelFC").click(function (e) {
                    e.preventDefault(e);
                    $(document).ready(fetchCaptions);
                });
                $("#updateFC").click(function (e) {
                    e.preventDefault(e);
                    UFC();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "uFC": uFC });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateFCs",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            $(document).ready(fetchCaptions);
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
            }
        });
    }

    var uindexName = "";
    function UIndexName() {
        $("[name='indexUName']").map(function () {
            uindexName =
                $(this).find("input[name='editIndexTId']").val() +"|"+
                $(this).find("input[name='editIndexT']").val();
        });
    }

    editCaptitle = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/EditCaption",
            data: { id: id },
            success: function (data) {
                var contentTitle = "<div class='form-group' name='indexUName'>";
                contentTitle += "<input type='hidden' name='editIndexTId' value=" + data[0].cap_id+" />";
                contentTitle += "<input type='text' name='editIndexT' class='form-control' value='" + data[0].index_title+"' />";
                contentTitle += "</div>";
                contentTitle += "<div class='form-group'>";
                contentTitle += "<button class='btn btn-sm btn-success' id='UpdateIndexT'>Update</button>";
                contentTitle += "<button class='btn btn-sm btn-warning' id='CancelIndexT'>Cancel</button>";
                contentTitle += "</div>";

                $("#ContentTitle").html(contentTitle);
                $("#CancelIndexT").click(function (e) {
                    e.preventDefault(e);
                    $(document).ready(fetchCaptions);
                });

                $("#UpdateIndexT").click(function (e) {
                    e.preventDefault(e);
                    UIndexName();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "uindexT": uindexName });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateIndexT",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            $(document).ready(fetchCaptions);
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
            }
        });
    }

    //var selectedStatus = "";
    //function UpdateStatus() {
    //    $("[name='selectedstatus']").map(function () {
    //        selectedStatus =
    //            $(this).find("input[name='pID']").val() + "|"+
    //            $(this).find("select[name='selectStatus']").val();
    //    });
    //}

    //editStatus = function (s,i) {
    //    var select = "<form method='post'>\
    //        <div class='form-group'>\
    //        <div class='input-group' name='selectedstatus'>\
    //           <input type='hidden' value='"+ i +"' name='pID'>\
    //        <select name='selectStatus' class='custom-select'>";
      
    //    select += "<option value='1'";
    //    if (s == 1) {
    //        select += "selected";
    //    }
    //    select += ">Available</option >";
       

    //        select += "<option value='2'"; 
    //    if (s == 2) {
    //        select += "selected";
    //    }
    //    select += ">Not available</option>";
       
    //    select += "<option value='0'"; 
    //    if (s == 0 || s == null) {
    //        select += "selected";
    //    }
    //    select += ">Select status</option>";
   
    //    select += "</select>\
    //                      </div>\
    //                    <div class='col-12 m-0 p-0'>\
    //                    <button id='StatusUpdate' class='btn btn-success btn-sm pull-right'>Update</button>\
    //                    </div>\
    //                  </div>\
    //              </form>";
      
    //    $("#liStatus").html(select);

    //    $("#StatusUpdate").click(function (e) {
    //        e.preventDefault(e);
    //        UpdateStatus();
    //        var from = "top";
    //        var align = "right";
    //        var mydata = JSON.stringify({ "status": selectedStatus });
    //        $.ajax({
    //            type: "POST",
    //            url: "/ControlPanel/"
    //        });
    //    });
    //}


    deleteImg = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id});
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteImg",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchingData);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    var _uItidiv = "";
    function UItidiv() {
        $("[name='uItidiv']").map(function () {
            _uItidiv =
                $(this).find("input[name='uitiId']").val() + "|" +
                $(this).find("input[name='uItineraryTitle']").val() + "|" +
                $(this).find("textarea[name='uItineraryDes']").val() + "|" +
                $(this).find("input[name='ubmeals']:checked").val() + "|" +
                $(this).find("input[name='ulmeals']:checked").val() + "|" +
                $(this).find("input[name='udmeals']:checked").val(); 
        });
    }

    deleteVi = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteVis",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                var action = "vi";
                $(document).ready(fetchingData(action));
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    deleteEXC = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteExc",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                var action = "exc";
                $(document).ready(fetchingData(action));
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    delelteInc = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteInc",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchingData);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    deleteIti = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteIti",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                var action = "iti";
                $(document).ready(fetchingData(action));
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    deleteFLI = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteFli",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                var action = "fli";
                $(document).ready(fetchingData(action));
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    deletePh = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeletePh",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                var action = "pho";
                $(document).ready(fetchingData(action));
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    $("#updateImg").click(function (e) {
        e.preventDefault(e);
        var files = $("#ufiles").get(0).files;
        var txt = $("#imgID").val();
        var from = "top";
        var align = "right";
        var fileData = new FormData();
        fileData.append("file", files[0]);
        fileData.append("id", txt);
        $.ajax({
            type: "POST",
            url: "/ControlPanel/UpdateImg",
            data: fileData,
            dataType: "text",
            traditional: true,
            contentType: false,
            processData: false,
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchingData);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    });

    editImg = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveImg",
            data: { id: id },
            success: function (data) {
                var imgidOutput = "<input type='hidden' value='" + data[0].img_id +"' name='imgID' id='imgID' />";
                var imgOutput = "<img id='prev' src='/DynamicFiles/"+data[0].slides+"' width='200' height='150' />";

                $("#imgId").html(imgidOutput);
                $("#imgPreview").html(imgOutput);
                $("#ImgModal").modal("show");

                function readURL(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {
                            $('#prev').attr('src', e.target.result);
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }

                $("#ufiles").change(function () {
                    readURL(this);
                });
            }
        });
    }

    var _uPhdiv = "";
    function UPhdiv() {
        $("[name='uPhdiv']").map(function () {
            _uPhdiv =
                $(this).find("input[name='uphId']").val() + "|" +
                $(this).find("input[name='uphLoc']").val() + "|" +
                $(this).find("textarea[name='uPhDes']").val();
        });
    }

    editPh = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrievePh",
            data: { id: id },
            success: function (data) {
                var phOutput = "<div class='row' name='uPhdiv'>\
                                    <div class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pt-2 pb-2'>\
                                                                    <div class='form-group'>\
                                                                        <input type='hidden' name='uphId' value='"+ data[0].ph_id + "' />\
                                                                        <input type='text' class='form-control my-placeholder' name='uphLoc' value='"+ data[0].ph_loc + "' placeholder='Itinerary title' />\
                                                                    </div>\
                                                                </div>\
                                    <div class='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 pt-2 pb-2'>\
                                                                    <div class='form-group'>\
                                                                        <textarea class='form-control my-placeholder' name='uPhDes' placeholder='Itinerary description' rows='5'>"+ data[0].ph_phtel + "</textarea>\
                                                                    </div>\
                                                                </div>\
                                <div class='col-12'>\
                                        <button class='btn btn-warning btn-sm' type='button' id='cancelPh'>Cancel</button>\
                                        <button class='btn btn-success btn-sm' type='button' id='updatePh'>Update</button>\
                                </div>\
                                </div>";

                $("#phSpan" + id).html(phOutput);
                $("#cancelPh").click(function (e) {
                    e.preventDefault(e);
                    var action = "pho";
                    $(document).ready(fetchingData(action));
                });

                $("#updatePh").click(function (e) {
                    UPhdiv();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "ph": _uPhdiv });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateUTPph",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            var action = "pho";
                            $(document).ready(fetchingData(action));
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
            }
        });
    }

    var _UTPVis = "";
    function UTPVis() {
        $("[name='UTPVisDiv']").map(function () {
            _UTPVis =
                $(this).find("input[name='UTPVisID']").val() + "|" +
                $(this).find("input[name='UTPVisName']").val();
        });
    }

    editVI = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveVIS",
            data: { id: id },
            success: function (data) {
                var visOutput = "<div class='row' name='UTPVisDiv'>\
                                      <div class='col-12'>\
                                         <div class='form-group'>\
                                            <div class='input-group'>\
                                                <input type='hidden' name='UTPVisID' value='"+ data[0].visa_id + "' />\
                                                <input type='text' class='form-control' name='UTPVisName' value='"+ data[0].name +"' />\
                                            </div>\
                                        </div>\
                                      </div>\
                                     <div class='col-12 mb-0 pb-0'>\
                                        <button type='button' id='cancelVIS' class='btn btn-warning btn-sm pull-right'>Cancel</button>\
                                        <button type='button' id='updateVIS' class='btn btn-success btn-sm pull-right mb-0' >Update</button>\
                                    </div>\
                                    </div>";
                $("#viSpan" + id).html(visOutput);
                $("#cancelVIS").click(function (e) {
                    e.preventDefault(e);
                    var action = "vi";
                    $(document).ready(fetchingData(action));
                });
                $("#updateVIS").click(function (e) {
                    UTPVis();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "vis": _UTPVis });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateUTPvis",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            var action = "vi";
                            $(document).ready(fetchingData(action));
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
            }
        });
    }

    var _UTPFli = "";
    function UTPFli() {
        $("[name='UTPFliDiv']").map(function () {
            _UTPFli =
                $(this).find("input[name='UTPFliID']").val() + "|" +
                $(this).find("input[name='UTPFliName']").val();
        });
    }

    editFLI = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveFLI",
            data: { id: id },
            success: function (data) {
                var fliOutput = "<div class='row' name='UTPFliDiv'>\
                                      <div class='col-12'>\
                                         <div class='form-group'>\
                                            <div class='input-group'>\
                                                <input type='hidden' name='UTPFliID' value='"+ data[0].fl_id + "' />\
                                                <input type='text' class='form-control' name='UTPFliName' value='"+ data[0].name +"' />\
                                            </div>\
                                        </div>\
                                      </div>\
                                     <div class='col-12 mb-0 pb-0'>\
                                        <button type='button' id='cancelFLI' class='btn btn-warning btn-sm pull-right'>Cancel</button>\
                                        <button type='button' id='updateFLI' class='btn btn-success btn-sm pull-right mb-0' >Update</button>\
                                    </div>\
                                    </div>";
                $("#fliSpan" + id).html(fliOutput);
                $("#cancelFLI").click(function (e) {
                    e.preventDefault(e);
                    var action = "fli";
                    $(document).ready(fetchingData(action));
                });
                $("#updateFLI").click(function (e) {
                    UTPFli();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "fli": _UTPFli });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateUTPfli",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            var action = "fli";
                            $(document).ready(fetchingData(action));
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
            }
        });
    }

    var _UTPExc = "";
    function UTPExc() {
        $("[name='UTPExcDiv']").map(function () {
            _UTPExc =
                $(this).find("input[name='UTPExcID']").val() + "|" +
                $(this).find("input[name='UTPExcName']").val();
        });
    }

    editEXC = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveEXC",
            data: { id: id },
            success: function (data) {
                var excOutput = "<div class='row' name='UTPExcDiv'>\
                                      <div class='col-12'>\
                                         <div class='form-group'>\
                                            <div class='input-group'>\
                                                <input type='hidden' name='UTPExcID' value='"+ data[0].ex_id + "' />\
                                                <input type='text' class='form-control' name='UTPExcName' value='"+ data[0].name +"' />\
                                            </div>\
                                        </div>\
                                      </div>\
                                     <div class='col-12 mb-0 pb-0'>\
                                        <button type='button' id='cancelEXC' class='btn btn-warning btn-sm pull-right'>Cancel</button>\
                                        <button type='button' id='updateEXC' class='btn btn-success btn-sm pull-right mb-0' >Update</button>\
                                    </div>\
                                    </div>";

                $("#excSpan" + id).html(excOutput);
                $("#cancelEXC").click(function (e) {
                    e.preventDefault(e);
                    var action = "exc";
                    $(document).ready(fetchingData(action));
                });
                $("#updateEXC").click(function (e) {
                    e.preventDefault(e);
                    UTPExc();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "exc": _UTPExc });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateUTPexc",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            var action = "exc";
                            $(document).ready(fetchingData(action));
                        },
                         error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
            }
        });
    }

    var _UTPTac = "";
    function UTPTac() {
        $("[name='UTPTacDiv']").map(function () {
            _UTPTac =
                $(this).find("input[name='UTPTacID']").val() + "|" +
                $(this).find("input[name='UTPTacName']").val();
        });
    }

    editTac = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveTAC",
            data: { id: id },
            success: function (data) {
                var tacOutput = "<div class='row' name='UTPTacDiv'>\
                                      <div class='col-12'>\
                                         <div class='form-group'>\
                                            <div class='input-group'>\
                                                <input type='hidden' name='UTPTacID' value='"+ data[0].con_id + "' />\
                                                <input type='text' class='form-control' name='UTPTacName' value='"+ data[0].name +"' />\
                                            </div>\
                                        </div>\
                                      </div>\
                                     <div class='col-12 mb-0 pb-0'>\
                                        <button type='button' id='cancelTAC' class='btn btn-warning btn-sm pull-right'>Cancel</button>\
                                        <button type='button' id='updateTAC' class='btn btn-success btn-sm pull-right mb-0' >Update</button>\
                                    </div>\
                                    </div>";

                $("#tacSpan" + id).html(tacOutput);
                $("#updateTAC").click(function (e) {
                    UTPTac();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "tac": _UTPTac });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateUTPtac",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            var action = "tac";
                            $(document).ready(fetchingData(action));
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
                $("#cancelTAC").click(function (e) {
                    e.preventDefault(e);
                    var action = "tac";
                    $(document).ready(fetchingData(action));
                });
            }
        });
    }

    deleteTac = function (id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteTac",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                var action = "tac";
                $(document).ready(fetchingData(action));
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    editITI = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveITI",
            data: { id: id },
            success: function (data) {
                var itiOutput = "<div class='row' name='uItidiv'>\
                                    <div class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pt-2 pb-2'>\
                                                                    <div class='form-group'>\
                                                                        <input type='hidden' name='uitiId' value='"+data[0].it_id+"' />\
                                                                        <input type='text' class='form-control my-placeholder' name='uItineraryTitle' value='"+ data[0].name + "' placeholder='Itinerary title' />\
                                                                    </div>\
                                                                </div>\
                                    <div class='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 pt-2 pb-2'>\
                                                                    <div class='form-group'>\
                                                                        <textarea class='form-control my-placeholder' name='uItineraryDes' placeholder='Itinerary description' rows='5'>"+ data[0].description + "</textarea>\
                                                                    </div>\
                                                                </div>\
                                    <div class='col-12 pt-2 pb-2'>\
                                                                    <fieldset class='scheduler-border'>\
                                                                        <legend class='scheduler-border text-dark'>Free Meals:</legend>\
                                                                        <label class='containers'>\
                                                Breakfast";
                if (data[0].bmeal == 1) {
                    itiOutput += "<input name='ubmeals' checked type='checkbox' value='1' />";
                }
                else {
                    itiOutput += " <input name='ubmeals' type='checkbox' value='1' />";
                }
             

                itiOutput += " <span class='checkmark'></span>\
                                                                        </label>\
                                                                        <label class='containers'>\
                                                Lunch";
                if (data[0].lmeal == 1) {
                    itiOutput += " <input name='ulmeals' type='checkbox' checked value='1' />";
                }
                else {
                    itiOutput += " <input name='ulmeals' type='checkbox' value='1' />";
                }
               
                itiOutput += "<span class='checkmark'></span>\
                                                                        </label>\
                                                                        <label class='containers'>\
                                                Dinner";
                if (data[0].dmeal == 1) {
                    itiOutput += "<input name='udmeals' checked type='checkbox' value='1' /> ";
                }
                else {
                    itiOutput += " <input name='udmeals' type='checkbox' value='1' />";
                }
                                                                           
                itiOutput +=  "<span class='checkmark'></span>\
                                                                        </label>\
                                                                    </fieldset>\
                                                                </div>\
                                    <div class='col-12'>\
                                                                   <button class='btn btn-success btn-sm pull-right' type='button' id='updateITI'>Update</button><button type='button' id='cancelIti' class='btn btn-warning btn-sm pull-right'>Cancel</button>\
                                                                </div>\
                                                            </div > ";
                $("#itiSpan" + id).html(itiOutput);
                $("#updateITI").click(function (e) {
                    e.preventDefault(e);
                    UItidiv();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "iti": _uItidiv });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateUTPiti",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            var action = "iti";
                            $(document).ready(fetchingData(action));
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
                $("#cancelIti").click(function (e) {
                    e.preventDefault(e);
                    var action = "iti";
                    $(document).ready(fetchingData(action));
                });
            }
        });
    }

    var _UTPInc = "";
    function uTPUpdateInc() {
        $("[name='UTPIncDiv']").map(function () {
            _UTPInc =
                $(this).find("input[name='UTPIncID']").val() + "|" +
                $(this).find("input[name='UTPIncName']").val();
        });
    }

    editINC = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveINC",
            data: { id: id },
            success: function (data) {
                var incOUTPUT = "<form>\
                                    <div class='row' name='UTPIncDiv'>\
                                      <div class='col-12'>\
                                         <div class='form-group'>\
                                            <div class='input-group'>\
                                                <input type='hidden' name='UTPIncID' value='"+ data[0].in_id + "' />\
                                                <input type='text' class='form-control' name='UTPIncName' value='"+ data[0].name +"' />\
                                            </div>\
                                        </div>\
                                      </div>\
                                     <div class='col-12 mb-0 pb-0'>\
                                        <button type='button' id='cancelINC' class='btn btn-warning btn-sm pull-right'>Cancel</button>\
                                        <button type='button' id='updateINC' class='btn btn-success btn-sm pull-right mb-0' >Update</button>\
                                    </div>\
                                    </div>\
                                </form>";

                $("#incSpan" + id).html(incOUTPUT);
                $("#updateINC").click(function (e) {
                    e.preventDefault(e);
                    uTPUpdateInc();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "inc": _UTPInc });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateUTPinc",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: "application/json",
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            var action = "inc";
                            $(document).ready(fetchingData(action));
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });

                $("#cancelINC").click(function (e) {
                    e.preventDefault(e);
                    var action = "inc";
                    $(document).ready(fetchingData(action));
                });
            }
        });
    }

    editPrice = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrievePrice",
            data: { id: id },
            success: function (data) {
                var output = "<form method='post'>\
                     <div class='row' name='UTPpriceDiv'>\
                        <div class='form-group'>\
                            <div class='input-group'>\
                                <input type='hidden' value='"+data[0].p_id+"' name='UTPpriceid' />\
                                <input type='text' name='UTPprice' value='"+data[0].p_price+"' class='form-control' />\
                            </div>\
                       </div>\
                        <div class='col-12 mb-0 pb-0'>\
                            <button type='button' id='cancelPriceU' class='btn btn-warning btn-sm pull-right'>Cancel</button>\
                            <button type='button' id='updatePricebtn' class='btn btn-success btn-sm pull-right mb-0' >Update</button>\
                        </div>\
                </div>\
                    </form>";
                $("#liPrice").html(output);
                $("#updatePricebtn").click(function (e) {
                    e.preventDefault(e);
                    UpdateUTPprice();
                    var from = "top";
                    var align = "right";
                    var mydata = JSON.stringify({ "price": _UTPpriceDiv });
                    $.ajax({
                        type: "POST",
                        url: "/ControlPanel/UpdateUTPprice",
                        data: mydata,
                        dataType: "text",
                        traditional: true,
                        contentType: 'application/json',
                        success: function (result, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: result

                            }, {
                                    type: 'success',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                            $(document).ready(fetchingData);
                        },
                        error: function (xhr, status, error) {
                            $.notify({
                                icon: "add_alert",
                                message: status

                            }, {
                                    type: 'danger',
                                    timer: 4000,
                                    placement: {
                                        from: from,
                                        align: align
                                    }
                                });
                        }
                    });
                });
                $("#cancelPriceU").click(function (e) {
                    e.preventDefault(e);
                    $(document).ready(fetchingData);
                });
            }
        });
    }

    editDates = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveTdates",
            data: {id :id},
            success: function (data) {
                $("#UTdatesID").html("<input type='hidden' name='uTdatesID' value='" + data[0].tdates_id+"' />");
                $("#fromD").html("<div class='form-group'>\
                    <label class='control-label my-font-13 label-color' for='fromtDates'>From</label>\
                    <input type='text' value='"+ data[0].formatDfrom+"' class='form-control datetimepicker' name='fromtDates' id='fromtDates' placeholder='Select date' />\
                </div>");
                $("#toD").html("<div class='form-group'>\
                        <label class='control-label my-font-13 label-color' for='toDates'>To</label>\
                        <input type='text' value='"+ data[0].formatDto+"' class='form-control datetimepicker' name='toDates' id='toDates' placeholder='Select date' />\
                    </div>");
                $("#TdatesModal").modal("show");
                $("#fromtDates").datetimepicker({
                    icons: {
                        time: "fa fa-clock-o",
                        date: "fa fa-calendar",
                        up: "fa fa-chevron-up",
                        down: "fa fa-chevron-down",
                        previous: 'fa fa-chevron-left',
                        next: 'fa fa-chevron-right',
                        today: 'fa fa-screenshot',
                        clear: 'fa fa-trash',
                        close: 'fa fa-remove',
                    },
                    format: "L"
                }).triggerHandler("click");

                $("#toDates").datetimepicker({
                    icons: {
                        time: "fa fa-clock-o",
                        date: "fa fa-calendar",
                        up: "fa fa-chevron-up",
                        down: "fa fa-chevron-down",
                        previous: 'fa fa-chevron-left',
                        next: 'fa fa-chevron-right',
                        today: 'fa fa-screenshot',
                        clear: 'fa fa-trash',
                        close: 'fa fa-remove',
                    },
                    format: "L"
                }).triggerHandler("click");
            }
        });
    }

    deleteDates = function(id) {
        var from = "top";
        var align = "right";
        var _id = JSON.stringify({ "id": id });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/DeleteTDs",
            data: _id,
            dataType: "text",
            traditional: true,
            contentType: 'application/json',
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $(document).ready(fetchingData);
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status + ": " + error

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    }

    $("#PListTable").DataTable({
        "ajax": {
            "url": "/ControlPanel/GetPList",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "p_name" },
            {
                "data": "p_price",
                "render": function (data, type, row) {
                    if (row.currency == 'peso') {
                        return $.fn.dataTable.render.number(',', '.', 2, '₱ ').display(data);
                    }
                    else {
                        return $.fn.dataTable.render.number(',', '.', 2, '$ ').display(data);
                    }
                }
               
            },
            { "data": "c_type" },
            { "data": "bedtype" },
            { "data": "str_status" },
            {
                "data": "p_id", "render": function (data) {
                    return "<p class='text-center p-0 m-0'><span onclick='editTPClick(" + data + ")' class='btn btn-warning btn-sm'><i class='far fa-edit'></i>Edit</span> <span onclick='viewFullList(" + data + ")' class='btn btn-default btn-sm'><i class='fas fa-eye'></i>View</span></p>";
                },
                "orderable": false
            }
        ]
    });


    viewFullList = function (id) {
        var url = '/AdminPanel/ControlPanel/ViewOTDP/'+ id;
        window.location.href = url;  
    }

    editTPClick = function (id) {
        $.ajax({
            type: "GET",
            url: "/ControlPanel/RetrieveTPs",
            data: { id: id },
            success: function (data) {
                var cat_output = "";
                var bed_output = "";
                var pSselect = "";
                var id_output = "<input type='hidden' class='form-control' value='" + data[0].p_id + "' name='tpEditId' />";
                var name_output = "<input type='text' class='form-control' value='" + data[0].p_name + "' name ='tpEditName' />";
                var price_output = "<input type='text' class='form-control' value='"+data[0].p_price+"' name='tpEditPrice' />";

                $.ajax({
                    type: "GET",
                    url: "/ControlPanel/CatDD",
                    data: "{}",
                    success: function (_data) {
                        cat_output = "<option class='catOpt' value='0'>Select Category</option>";
                        for (var i = 0; i < _data.length; i++) {
                            cat_output += "<option class='catOpt' value='" + _data[i].c_id + "'";
                            if (data[0].c_id == _data[i].c_id) {
                                cat_output += "selected";
                            }
                            cat_output += ">" + _data[i].c_name + "</option>";
                                    
                        }
                        $("#cType").html(cat_output);
                    }
                });

                $.ajax({
                    type: "GET",
                    url: "/ControlPanel/BedDD",
                    data: "{}",
                    success: function (cdata) {
                        bed_output = "<option class='catOpt' value='0'>Select Bedroom Type</option>";
                        for (var i = 0; i < cdata.length; i++) {
                            bed_output += "<option class='catOpt' value='" + cdata[i].bedid + "'";
                            if (data[0].bed_id == cdata[i].bedid) {
                                bed_output += "selected";
                            }
                            bed_output += ">" + cdata[i].bedtype + "</option>";
                        }
                        $("#bType").html(bed_output);
                    }
                });
                pSselect += "<option value='0'>Select status</option>";
                pSselect += "<option value='1'";
                if (data[0].status == 1) {
                    pSselect += "selected";
                }
                pSselect += ">Available</option >";


                pSselect += "<option value='2'"; 
                if (data[0].status == 2) {
                    pSselect += "selected";
                }
                pSselect += ">Not available</option>\
                                </select>";

                $("#pStatus").html(pSselect);
                $("#pId").html(id_output);
                $("#pName").html(name_output);
                $("#pPrice").html(price_output);
                $("#EditTP").modal("show");
            }
        });
    }

    var updateTP = "";
    function UpdateTPDiv() {
        $("[name='updateTPDiv']").map(function () {
            updateTP =
                $(this).find("input[name='tpEditId']").val() + "|" +
                $(this).find("input[name='tpEditName']").val() + "|" +
                $(this).find("input[name='tpEditPrice']").val() + "|" +
                $(this).find("select[name='cType']").val() + "|" +
                $(this).find("select[name='bType']").val() + "|" +
                $(this).find("select[name='pStatus']").val();
        });
    }

    $("#updateTP").click(function (e) {
        e.preventDefault(e);
        UpdateTPDiv();
        var from = "top";
        var align = "right";
        var mydata = JSON.stringify({ "upTP": updateTP });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/UpdateUTPs",
            data: mydata,
            dataType: "text",
            traditional: true,
            contentType: "application/json",
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                $("#PListTable").DataTable().ajax.reload();
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    });

    var nTPackage = "";
    function _nTPackage() {
        $("[name='nTPackageAddDiv']").map(function () {
            nTPackage =
                $(this).find("input[name='ntPackageN']").val() + "|" +
                $(this).find("select[name='NTCategory']").val();
        });
    }

    $("#BTnNTPackage").click(function (e) {
        e.preventDefault(e);
        if (NTPDDValidations() == false)
            return false;
        _nTPackage();
        var from = "top";
        var align = "right";
        var mydata = JSON.stringify({ "ntPAdd": nTPackage });
        $.ajax({
            type: "POST",
            url: "/ControlPanel/AddNTPackage",
            data: mydata,
            dataType: "text",
            traditional: true,
            contentType: "application/json",
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                });
                $(document).ready(ntPDdFunction);  
            },
            error: function (xhr, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status

                }, {
                        type: 'danger',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
            }
        });
    });


    function NTPDDValidations() {
        var Error = 0;
        if ($(".ntPackageN").val() == "") {
            $(".pNameError").show();
            $(".pNameError").html("Package name is required!");
            $(".ntPackageN").css("border-color", "#f23345");
            Error = 1;
        }
        else {
            var Pname = $(".ntPackageN").val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\']+)$/;
            if (Pname != "" && !htmlTagRegex.test(Pname)) {
                $(".pNameError").show();
                $(".pNameError").html("Invalid format!");
                $(".ntPackageN").css("border-color", "#f23345");
                Error = 1;
            }
            else if (htmlTagRegex.test($(".ntPackageN").val())) {
                $(".pNameError").hide();
                $(".ntPackageN").css("border-color", "#4cff00");
            }
        }

        if ($(".NTCategory").val() == 0 || $(".NTCategory").val() == "" || $(".NTCategory").val() == "0") {
            $(".nt_pcError").show();
            $(".nt_pcError").html("Please select category!");
            $(".NTCategory").css("border-color", "#f23345");
            Error = 1;
        }
        if (Error == 1) {
            return false;
        }
        else {
            return true;
        }
    }
     
});





(function ($) {
    $.fn.resetValue = function () {
        return this.each(function () {
            var $this = $(this);
            var node = this.nodeName.toLowerCase();
            var type = $this.attr("type");

            if (node == "input" && (type == "text" || type == "password")) {
                this.value = this.defaultValue;
            }
            else if (node == "input" && (type == "radio" || type == "checkbox")) {
                this.checked = this.defaultChecked;
            }
            else if (node == "input" && (type == "button" || type == "submit" || type == "reset" ) ) {
            // we really don't care 
        }
            else if (node == "select") {
            this.selectedIndex = $this.find("option").filter(function () {
                return this.defaultSelected = true;
            }).index();
        }
        else if (node == "textarea") {
            this.value = this.defaultValue;
        }
        // not good... unknown element, guess around
        else if (this.hasOwnProperty("defaultValue")) {
            this.value = this.defaultValue;
        }
        else {
            // panic! must be some html5 crazyness
        }
        });
    }

    $.fn.clear = function () {
        $(this).find('input')
            .filter(':text,:password,:file').val('')
            .end()
            .filter(':checkbox,:radio')
            .removeAttr('checked')
            .end()
            .end()
            .find('textarea').val('')
            .end()
            .find('select').prop('selectedIndex', -1)
            .find('option:selected').removeAttr('selected')
            ;
        return this;
    }
} ) (jQuery);
