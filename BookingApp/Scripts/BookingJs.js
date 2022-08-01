$(document).ready(function () {
    $("#flightandhotelbtn").click(function () {
        $("#flightandhotel").show();
        $("#_flight").hide();
        $("#roundTrip").hide();
        $("#flights").removeClass("toggle-active");
        $("#flights").addClass("li-class");
        $("#flightandhotelbtn").addClass("toggle-active");
        $("#flightandhotelbtn").removeClass("li-class");
        $("#roundTrip").hide();
        $("#multiCities").hide();
        $("#oneway").hide();
    });
    $("#flights").click(function () {
        $("#_flight").show();
        $("#roundTrip").show();
        $("#flightandhotel").hide();
        $("#flights").addClass("toggle-active");
        $("#flights").removeClass("li-class");
        $("#flightandhotelbtn").removeClass("toggle-active");
        $("#flightandhotelbtn").addClass("li-class");
        $("#multiCity").removeClass("toggle-active");
        $("#multiCity").addClass("li-class");
        $("#roundtrip").removeClass("li-class");
        $("#roundtrip").addClass("toggle-active");
        $("#oneWay").addClass("li-class");
        $("#oneWay").removeClass("toggle-active");
    });
    $("#oneWay").click(function () {
        $("#oneway").show();
        $("#multiCities").hide();
        $("#roundTrip").hide();
        $("#roundtrip").addClass("li-class");
        $("#roundtrip").removeClass("toggle-active");
        $("#oneWay").removeClass("li-class");
        $("#oneWay").addClass("toggle-active");
        $("#multiCity").removeClass("toggle-active");
        $("#multiCity").addClass("li-class");
    });
    $("#roundtrip").click(function () {
        $("#oneway").hide();
        $("#multiCities").hide();
        $("#roundTrip").show();
        $("#roundtrip").removeClass("li-class");
        $("#roundtrip").addClass("toggle-active");
        $("#oneWay").addClass("li-class");
        $("#oneWay").removeClass("toggle-active");
        $("#multiCity").removeClass("toggle-active");
        $("#multiCity").addClass("li-class");
    });
    $("#multiCity").click(function () {
        $("#multiCities").show();
        $("#roundTrip").hide();
        $("#oneway").hide();
        $("#multiCity").removeClass("li-class");
        $("#multiCity").addClass("toggle-active");
        $("#oneWay").addClass("li-class");
        $("#oneWay").removeClass("toggle-active");
        $("#roundtrip").addClass("li-class");
        $("#roundtrip").removeClass("toggle-active");
    });

    $("#fhTo").prop("disabled", "disabled");
    $("#fhDpart").prop("disabled", "disabled");
    $("#fhRturn").prop("disabled", "disabled");

    $("#to-input").prop("disabled", "disabled");
    $("#rDate").prop("disabled", "disabled");
    $("#dDate").prop("disabled", "disabled");
    $("#classTypes").prop("disabled", "disabled");

    $("#to_-input").prop("disabled", "disabled");
    $("#classType1_").prop("disabled", "disabled");
    $("#dDate0_").prop("disabled", "disabled");
    $("#from1_-input").prop("disabled", "disabled");
    $("#to1_-input").prop("disabled", "disabled");
    $("#dDate1_").prop("disabled", "disabled");
    $("#from2_-input").prop("disabled", "disabled");
    $("#to2_-input").prop("disabled", "disabled");
    $("#dDate2_").prop("disabled", "disabled");
    $("#from3_-input").prop("disabled", "disabled");
    $("#to3_-input").prop("disabled", "disabled");
    $("#dDate3_").prop("disabled", "disabled");
    $("#from4_-input").prop("disabled", "disabled");
    $("#to4_-input").prop("disabled", "disabled");
    $("#dDate4_").prop("disabled", "disabled");

    $("#to4_-input").change(function () {
        if ($(this).val() != "") {
            $("#dDate4_").prop("disabled", false);
        }
        else {
            $("#dDate4_").prop("disabled", "disabled");
            $("#dDate4_").val("");
        }
    });

    $("#from4_-input").change(function () {
        if ($(this).val() != "") {
            $("#to4_-input").prop("disabled", false);
        }
        else {
            $("#to4_-input").prop("disabled", "disabled");
            $("#to4_-input").val("");
        }
    });

    $("#to3_-input").change(function () {
        if ($(this).val() != "") {
            $("#dDate3_").prop("disabled", false);
        }
        else {
            $("#dDate3_").prop("disabled", "disabled");
            $("#dDate3_").val("");
        }
    });

    $("#from3_-input").change(function () {
        if ($(this).val() != "") {
            $("#to3_-input").prop("disabled", false);
        }
        else {
            $("#to3_-input").prop("disabled", "disabled");
            $("#to3_-input").val("");
        }
    });

    $("#to2_-input").change(function () {
        if ($(this).val() != "") {
            $("#dDate2_").prop("disabled", false);
        }
        else {
            $("#dDate2_").prop("disabled", "disabled");
            $("#dDate2_").val("");
        }
    });

    $("#from2_-input").change(function () {
        if ($(this).val() != "") {
            $("#to2_-input").prop("disabled", false);
        }
        else {
            $("#to2_-input").prop("disabled", "disabled");
            $("#to2_-input").val("");
        }
    });

    $("#to1_-input").change(function () {
        if ($(this).val() != "") {
            $("#dDate1_").prop("disabled", false);
        }
        else {
            $("#dDate1_").prop("disabled", "disabled");
            $("#dDate1_").val("");
        }
    });

    $("#from1_-input").change(function () {
        if ($(this).val() != "") {
            $("#to1_-input").prop("disabled", false);
        }
        else {
            $("#to1_-input").prop("disabled", "disabled");
            $("#to1_-input").val("");
        }
    });

    $("#from_-input").change(function () {
        if ($(this).val() != "") {
            $("#to_-input").prop("disabled", false);
            $("#classType1_").prop("disabled", false);
        }
        else {
            $("#to_-input").prop("disabled", "disabled");
            $("#dDate0_").prop("disabled", "disabled");
            $("#classType1_").prop("disabled", "disabled");
            $("#from1_-input").prop("disabled", "disabled");
            $("#to1_-input").prop("disabled", "disabled");
            $("#dDate1_").prop("disabled", "disabled");
            $("#from2_-input").prop("disabled", "disabled");
            $("#to2_-input").prop("disabled", "disabled");
            $("#dDate2_").prop("disabled", "disabled");
            $("#from3_-input").prop("disabled", "disabled");
            $("#to3_-input").prop("disabled", "disabled");
            $("#dDate3_").prop("disabled", "disabled");
            $("#from4_-input").prop("disabled", "disabled");
            $("#to4_-input").prop("disabled", "disabled");
            $("#dDate4_").prop("disabled", "disabled");
            $("#to_-input").val("");
            $("#dDate0_").val("");
            $("#classType1_").val("0");
            $("#from1_-input").val("");
            $("#to1_-input").val("");
            $("#dDate1_").val("");
            $("#from2_-input").val("");
            $("#to2_-input").val("");
            $("#dDate2_").val("");
            $("#from3_-input").val("");
            $("#to3_-input").val("");
            $("#dDate3_").val("");
            $("#from4_-input").val("");
            $("#to4_-input").val("");
            $("#dDate4_").val("");
        }
    });

    $("#to_-input").change(function () {
        if ($(this).val() != "") {
            $("#dDate0_").prop("disabled", false);
        }
        else {
            $("#dDate0_").prop("disabled", "disabled");
            $("#dDate0_").val("");
        }
    });


    $("#from-input").change(function () {
        if ($(this).val() != "") {
            $("#to-input").prop("disabled", false);
            $("#classTypes").prop("disabled", false);
        }
        else {
            $("#to-input").prop("disabled", "disabled");
            $("#classTypes").prop("disabled", "disabled");
            $("#rDate").prop("disabled", "disabled");
            $("#dDate").prop("disabled", "disabled");
            $("#rDate").val("");
            $("#dDate").val("");
            $("#classTypes").val("0");
            $("#to-input").val("");
        }
    });
    $("#to-input").change(function () {
        if ($(this).val() != "") {
            $("#dDate").prop("disabled", false);
        }
        else {
            $("#dDate").prop("disabled", "disabled");
            $("#dDate").val("");
        }
    });
    $("#fhFrom").change(function () {
        if ($(this).val() != "") {
            $("#fhTo").prop("disabled", false);
        }
        else {
            $("#fhTo").prop("disabled", "disabled");
            $("#fhDpart").prop("disabled", "disabled");
            $("#fhRturn").prop("disabled", "disabled");
            $("#fhRturn").val("");
            $("#fhDpart").val("");
            $("#fhTo").val("");
        }
    });
    $("#fhTo").change(function () {
        if ($(this).val() != "") {
            $("#fhDpart").prop("disabled", false);
        }
        else {
            $("#fhDpart").prop("disabled", "disabled");
            $("#fhDpart").val("");
        }
    });

    var dateToday = new Date();
    $("#datetimepicker0").on("dp.change", function (e) {
        $('#datetimepicker1').data("DateTimePicker").minDate(e.date);
        if ($("#dDate").val() != "") {
            $("#rDate").prop("disabled", false);
        }
        else {
            $("#rDate").prop("disabled", "disabled");
            $("#rDate").val("");
        }
    });
    $("#datetimepicker1").on("dp.change", function (e) {
        $('#datetimepicker0').data("DateTimePicker").maxDate(e.date);
    });

    $("#flightdatetimepicker1").on("dp.change", function (e) {
        $('#flightdatetimepicker0').data("DateTimePicker").maxDate(e.date);
    });

    $("#datetimepicker0_, #flightdatetimepicker0, #datetimepicker0, #_datetimepicker").datetimepicker({
        minDate: dateToday
    });
    $("#datetimepicker1_, #flightdatetimepicker1, #datetimepicker2_, #datetimepicker3_, #datetimepicker4_, #datetimepicker1").datetimepicker({
        useCurrent: false
    });

    $("#flightdatetimepicker0").on("dp.change", function (e) {
        $("#flightdatetimepicker1").data("DateTimePicker").minDate(e.date);
        if ($("#fhDpart").val() != "") {
            $("#fhRturn").prop("disabled", false);
        }
        else {
            $("#fhRturn").prop("disabled", "disabled");
            $("#fhRturn").val("");
        }
    });

    $("#datetimepicker0_").on("dp.change", function (e) {
        $("#datetimepicker1_").data("DateTimePicker").minDate(e.date);
        if ($("#dDate0_").val() != "") {
            $("#from1_-input").prop("disabled", false);
        }
        else {
            $("#from1_-input").prop("disabled", "disabled");
            $("#from1_-input").val("");
        }
    });
    $("#datetimepicker1_").on("dp.change", function (e) {
        $("#datetimepicker0_").data("DateTimePicker").maxDate(e.date);
        $("#datetimepicker2_").data("DateTimePicker").minDate(e.date);
        if ($("#dDate1_").val() != "") {
            $("#from2_-input").prop("disabled", false);
        }
        else {
            $("#from2_-input").prop("disabled", "disabled");
            $("#from2_-input").val("");
        }
    });
    $("#datetimepicker2_").on("dp.change", function (e) {
        $("#datetimepicker1_").data("DateTimePicker").maxDate(e.date);
        $("#datetimepicker3_").data("DateTimePicker").minDate(e.date);
        if ($("#dDate2_").val() != "") {
            $("#from3_-input").prop("disabled", false);
        }
        else {
            $("#from3_-input").prop("disabled", "disabled");
            $("#from3_-input").val("");
        }
    });
    $("#datetimepicker3_").on("dp.change", function (e) {
        $("#datetimepicker2_").data("DateTimePicker").maxDate(e.date);
        $("#datetimepicker4_").data("DateTimePicker").minDate(e.date);
        if ($("#dDate3_").val() != "") {
            $("#from4_-input").prop("disabled", false);
        }
        else {
            $("#from4_-input").prop("disabled", "disabled");
            $("#from4_-input").val("");
        }
    });
    $("#datetimepicker4_").on("dp.change", function (e) {
        $("#datetimepicker3_").data("DateTimePicker").maxDate(e.date);
    });

    $("#Adult").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg01").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#Child").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg02").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#Infant").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg03").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });

    var _count = 0, count_ = 0, _count_ = 0;
    var total = 0;

    $("#Adult, #Child, #Infant").keyup(function () {
        _count = parseInt($("#Adult").val());
        count_ = parseInt($("#Child").val());
        _count_ = parseInt($("#Infant").val());
        if (!isNaN(_count) && isNaN(count_) && isNaN(_count_)) {
            total = parseInt(_count);
        }
        else if (isNaN(_count) && !isNaN(count_) && isNaN(_count_)) {
            total = parseInt(count_);
        }
        else if (isNaN(_count) && isNaN(count_) && !isNaN(_count_)) {
            total = parseInt(_count_);
        }
        else if (!isNaN(_count) && !isNaN(count_) && isNaN(_count_)) {
            total = parseInt(_count) + parseInt(count_);
        }
        else if (!isNaN(_count) && !isNaN(count_) && !isNaN(_count_)) {
            total = parseInt(_count) + parseInt(count_) + parseInt(_count_);
        }
        else if (isNaN(_count) && !isNaN(count_) && !isNaN(_count_)) {
            total = parseInt(count_) + parseInt(_count_);
        }
        else if (!isNaN(_count) && isNaN(count_) && !isNaN(_count_)) {
            total = parseInt(_count) + parseInt(_count_);
        }
        else {
            total = 0;
        }
        if (isNaN(total)) {
            total = 0;
        }
        $("#pssngerCount").val(total + " Passenger(s)");
    }).keyup();
    
    $("#_Adult").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg_").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#_Child").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg1_").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#_Infant").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg2_").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });

    var _counts = 0, counts_ = 0, _counts_ = 0;
    var _total = 0;

    $("#_Adult, #_Child, #_Infant").keyup(function () {
        _counts = parseInt($("#_Adult").val());
        counts_ = parseInt($("#_Child").val());
        _counts_ = parseInt($("#_Infant").val());
        if (!isNaN(_counts) && isNaN(counts_) && isNaN(_counts_)) {
            _total = parseInt(_counts);
        }
        else if (isNaN(_counts) && !isNaN(counts_) && isNaN(_counts_)) {
            _total = parseInt(counts_);
        }
        else if (isNaN(_counts) && isNaN(counts_) && !isNaN(_counts_)) {
            _total = parseInt(_counts_);
        }
        else if (!isNaN(_counts) && !isNaN(counts_) && isNaN(_counts_)) {
            _total = parseInt(_counts) + parseInt(counts_);
        }
        else if (!isNaN(_counts) && !isNaN(counts_) && !isNaN(_counts_)) {
            _total = parseInt(_counts) + parseInt(counts_) + parseInt(_counts_);
        }
        else if (isNaN(_counts) && !isNaN(counts_) && !isNaN(_counts_)) {
            _total = parseInt(counts_) + parseInt(_counts_);
        }
        else if (!isNaN(_counts) && isNaN(counts_) && !isNaN(_counts_)) {
            _total = parseInt(_counts) + parseInt(_counts_);
        }
        else {
            _total = 0;
        }
        if (isNaN(_total)) {
            _total = 0;
        }
        $("#_pssngerCount").val(_total + " Passenger(s)");
    }).keyup();
  
    var _roomCounts = 1;
    var lastId = 0;
    var split_id = "";
    var nextIndex = 0;
    var __Acounts_2 = 0, Ccounts_2__ = 0, __Icounts_2_ = 0;
    var __Acounts_3 = 0, Ccounts_3__ = 0, __Icounts_3_ = 0;
    var __Acounts_4 = 0, Ccounts_4__ = 0, __Icounts_4_ = 0;
    var __Acounts_5 = 0, Ccounts_5__ = 0, __Icounts_5_ = 0;
    var dynaTotal2 = 0, dynaTotal3 = 0, dynaTotal4 = 0, dynaTotal5 = 0;
    var finalTotal = 0;
    var subtractor = 0;
    $("#btn-Addrooms").click(function () {
        if ($("#flghtsHotel").children().length < 5) {
            _roomCounts = $("#flghtsHotel").children().length + 1;
            lastId = $(".element:last").attr("id");
            split_id = lastId.split("_");
            nextIndex = Number(split_id[1]) + 1;
            $(".remove").css("display", "none");
            $("#flghtsHotel").append("<div class='row element' id='div_" + nextIndex + "'>\
                            <div class='row'>\
                                <div class='col-6 col-xs-6 col-sm-6 col-lg-6 col-md-6 col-xl-6 text-left' style='padding:15px 0px 15px 15px'>\
                                    <span style='margin-bottom:15px;margin-left:15px;font-size:18px;color:white'><b>Room " + _roomCounts + "</b></span >\
                               </div>\
                               <div class='col-6 col-xs-6 col-sm-6 col-lg-6 col-md-6 col-xl-6 text-right' style='padding:15px 15px 15px 0px'>\
                               <span style='margin-bottom:15px;margin-right:15px;cursor:pointer;color:rgb(45, 115, 76)' id='remove_" + nextIndex + "' class='remove'><b>Remove Room</b></span>\
                           </div>\
                            </div>\
                            <form>\
                            <div class='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>\
                                <div class='form-group'>\
                                    <label for='_Adults' class='control-label'>Adult(12y+)</label>\
                                    <div class='input-group'>\
                                        <input type='text' placeholder='Adult count(s)' id='_Adults-"+ nextIndex + "' class='form-control Aclass' />\
                                        <span class='input-group-addon'>\
                                            <span class='fas fa-male'></span>\
                                        </span>\
                                    </div>\
                                    <span class='text-danger' id='Errmsg-"+ nextIndex + "'></span>\
                                </div>\
                            </div>\
                            <div class='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>\
                                <label for='_Childs' class='control-label'>Child(2y-11y)</label>\
                                <div class='input-group'>\
                                    <input type='text' class='form-control Cclass' id='_Childs-"+ nextIndex + "' placeholder='Child count(s)' />\
                                    <span class='input-group-addon'>\
                                        <span class='fas fa-child'></span>\
                                    </span>\
                                </div>\
                                <span class='text-danger' id='Errmsg1-"+ nextIndex + "'></span>\
                            </div>\
                            <div class='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>\
                                <label for='_Infants' class='control-label'>Infants(16d-23m)</label>\
                                <div class='input-group'>\
                                    <input type='text' placeholder='Infant count(s)' class='form-control Iclass' id='_Infants-"+ nextIndex + "' />\
                                    <span class='input-group-addon'>\
                                        <span class='fa fa-baby'></span>\
                                    </span>\
                                </div>\
                                <span class='text-danger' id='Errmsg2-"+ nextIndex + "'></span>\
                            </div>\
                        </form>\
                     </div>");
        }
        else {
            $("#ErrorCounts").html("You have reach the maximum room counts!").show().fadeOut("slow");
            return false;
        }

        $("#_Adults-2, #_Childs-2, #_Infants-2, #_Adults-3, #_Childs-3, #_Infants-3, #_Adults-4, #_Childs-4, #_Infants-4, #_Adults-5, #_Childs-5, #_Infants-5").keyup(function () {
            paSsengers();
        }).keyup();

        $("#_Adults-2").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg-2").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Childs-2").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg1-2").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Infants-2").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg2-2").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Adults-3").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg-3").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Childs-3").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg1-3").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Infants-3").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg2-3").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Adults-4").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg-4").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Childs-4").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg1-4").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Infants-4").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg2-4").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Adults-5").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg-5").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Childs-5").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg1-5").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_Infants-5").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg2-5").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
    });

    $("#flghtsHotel").on("click", ".remove", function () {
        var id = this.id;
        var split_id = id.split("_");
        var deleteIndex = split_id[1];
        var adultId = $(".Aclass:last").val();
        var childId = $(".Cclass:last").val();
        var infantId = $(".Iclass:last").val();
        $("#div_" + deleteIndex).remove();
        $(".remove:last").css("display", "block");
        subtractor = parseInt(adultId) + parseInt(childId) + parseInt(infantId);
        if (isNaN(subtractor)) {
            subtractor = 0;
        }
        _finalTotal = finalTotal - subtractor;
        finalTotal = _finalTotal;
        if (isNaN(finalTotal)) {
            finalTotal = 0;
        }
        _roomCounts--;
        $("#_pssngerCounts").val(_roomCounts + " Room(s)," + (__total + finalTotal) + " Passenger(s)");
    });

    $("#_Adults").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    })
    $("#_Childs").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg1").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    })
    $("#_Infants").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg2").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    })

    var __counts = 0, counts__ = 0, __counts_ = 0;
    var __total = 0;

    function paSsengers() {
        __counts = parseInt($("#_Adults").val());
        counts__ = parseInt($("#_Childs").val());
        __counts_ = parseInt($("#_Infants").val());
        if (!isNaN(__counts) && isNaN(counts__) && isNaN(__counts_)) {
            __total = parseInt(__counts);
        }
        else if (isNaN(__counts) && !isNaN(counts__) && isNaN(__counts_)) {
            __total = parseInt(counts__);
        }
        else if (isNaN(__counts) && isNaN(counts__) && !isNaN(__counts_)) {
            __total = parseInt(__counts_);
        }
        else if (!isNaN(__counts) && !isNaN(counts__) && isNaN(__counts_)) {
            __total = parseInt(__counts) + parseInt(counts__);
        }
        else if (!isNaN(__counts) && !isNaN(counts__) && !isNaN(__counts_)) {
            __total = parseInt(__counts) + parseInt(counts__) + parseInt(__counts_);
        }
        else if (isNaN(__counts) && !isNaN(counts__) && !isNaN(__counts_)) {
            __total = parseInt(counts__) + parseInt(__counts_);
        }
        else if (!isNaN(__counts) && isNaN(counts__) && !isNaN(__counts_)) {
            __total = parseInt(__counts) + parseInt(__counts_);
        }
        else {
            __total = 0;
        }
        if (isNaN(__total)) {
            __total = 0;
        }

        __Acounts_2 = parseInt($("#_Adults-2").val());
        Ccounts_2__ = parseInt($("#_Childs-2").val());
        __Icounts_2_ = parseInt($("#_Infants-2").val());
        if (!isNaN(__Acounts_2) && isNaN(Ccounts_2__) && isNaN(__Icounts_2_)) {
            dynaTotal2 = parseInt(__Acounts_2);
        }
        else if (isNaN(__Acounts_2) && !isNaN(Ccounts_2__) && isNaN(__Icounts_2_)) {
            dynaTotal2 = parseInt(Ccounts_2__);
        }
        else if (isNaN(__Acounts_2) && isNaN(Ccounts_2__) && !isNaN(__Icounts_2_)) {
            dynaTotal2 = parseInt(__Icounts_2_);
        }
        else if (!isNaN(__Acounts_2) && !isNaN(Ccounts_2__) && isNaN(__Icounts_2_)) {
            dynaTotal2 = parseInt(__Acounts_2) + parseInt(Ccounts_2__);
        }
        else if (!isNaN(__Acounts_2) && !isNaN(Ccounts_2__) && !isNaN(__Icounts_2_)) {
            dynaTotal2 = parseInt(__Acounts_2) + parseInt(Ccounts_2__) + parseInt(__Icounts_2_);
        }
        else if (isNaN(__Acounts_2) && !isNaN(Ccounts_2__) && !isNaN(__Icounts_2_)) {
            dynaTotal2 = parseInt(Ccounts_2__) + parseInt(__Icounts_2_);
        }
        else if (!isNaN(__Acounts_2) && isNaN(Ccounts_2__) && !isNaN(__Icounts_2_)) {
            dynaTotal2 = parseInt(__Acounts_2) + parseInt(__Icounts_2_);
        }
        else {
            dynaTotal2 = 0;
        }
        if (isNaN(dynaTotal2)) {
            dynaTotal2 = 0;
        }

        __Acounts_3 = parseInt($("#_Adults-3").val());
        Ccounts_3__ = parseInt($("#_Childs-3").val());
        __Icounts_3_ = parseInt($("#_Infants-3").val());
        if (!isNaN(__Acounts_3) && isNaN(Ccounts_3__) && isNaN(__Icounts_3_)) {
            dynaTotal3 = parseInt(__Acounts_3);
        }
        else if (isNaN(__Acounts_3) && !isNaN(Ccounts_3__) && isNaN(__Icounts_3_)) {
            dynaTotal3 = parseInt(Ccounts_3__);
        }
        else if (isNaN(__Acounts_3) && isNaN(Ccounts_3__) && !isNaN(__Icounts_3_)) {
            dynaTotal3 = parseInt(__Icounts_3_);
        }
        else if (!isNaN(__Acounts_3) && !isNaN(Ccounts_3__) && isNaN(__Icounts_3_)) {
            dynaTotal3 = parseInt(__Acounts_3) + parseInt(Ccounts_3__);
        }
        else if (!isNaN(__Acounts_3) && !isNaN(Ccounts_3__) && !isNaN(__Icounts_3_)) {
            dynaTotal3 = parseInt(__Acounts_3) + parseInt(Ccounts_3__) + parseInt(__Icounts_3_);
        }
        else if (isNaN(__Acounts_3) && !isNaN(Ccounts_3__) && !isNaN(__Icounts_3_)) {
            dynaTotal3 = parseInt(Ccounts_3__) + parseInt(__Icounts_3_);
        }
        else if (!isNaN(__Acounts_3) && isNaN(Ccounts_3__) && !isNaN(__Icounts_3_)) {
            dynaTotal3 = parseInt(__Acounts_3) + parseInt(__Icounts_3_);
        }
        else {
            dynaTotal3 = 0;
        }
        if (isNaN(dynaTotal3)) {
            dynaTotal3 = 0;
        }

        __Acounts_4 = parseInt($("#_Adults-4").val());
        Ccounts_4__ = parseInt($("#_Childs-4").val());
        __Icounts_4_ = parseInt($("#_Infants-4").val());
        if (!isNaN(__Acounts_4) && isNaN(Ccounts_4__) && isNaN(__Icounts_4_)) {
            dynaTotal4 = parseInt(__Acounts_4);
        }
        else if (isNaN(__Acounts_4) && !isNaN(Ccounts_4__) && isNaN(__Icounts_4_)) {
            dynaTotal4 = parseInt(Ccounts_4__);
        }
        else if (isNaN(__Acounts_4) && isNaN(Ccounts_4__) && !isNaN(__Icounts_4_)) {
            dynaTotal4 = parseInt(__Icounts_4_);
        }
        else if (!isNaN(__Acounts_4) && !isNaN(Ccounts_4__) && isNaN(__Icounts_4_)) {
            dynaTotal4 = parseInt(__Acounts_4) + parseInt(Ccounts_4__);
        }
        else if (!isNaN(__Acounts_4) && !isNaN(Ccounts_4__) && !isNaN(__Icounts_4_)) {
            dynaTotal4 = parseInt(__Acounts_4) + parseInt(Ccounts_4__) + parseInt(__Icounts_4_);
        }
        else if (isNaN(__Acounts_4) && !isNaN(Ccounts_4__) && !isNaN(__Icounts_4_)) {
            dynaTotal4 = parseInt(Ccounts_4__) + parseInt(__Icounts_4_);
        }
        else if (!isNaN(__Acounts_4) && isNaN(Ccounts_4__) && !isNaN(__Icounts_4_)) {
            dynaTotal4 = parseInt(__Acounts_4) + parseInt(__Icounts_4_);
        }
        else {
            dynaTotal4 = 0;
        }
        if (isNaN(dynaTotal4)) {
            dynaTotal4 = 0;
        }

        __Acounts_5 = parseInt($("#_Adults-5").val());
        Ccounts_5__ = parseInt($("#_Childs-5").val());
        __Icounts_5_ = parseInt($("#_Infants-5").val());
        if (!isNaN(__Acounts_5) && isNaN(Ccounts_5__) && isNaN(__Icounts_5_)) {
            dynaTotal5 = parseInt(__Acounts_5);
        }
        else if (isNaN(__Acounts_5) && !isNaN(Ccounts_5__) && isNaN(__Icounts_5_)) {
            dynaTotal5 = parseInt(Ccounts_5__);
        }
        else if (isNaN(__Acounts_5) && isNaN(Ccounts_5__) && !isNaN(__Icounts_5_)) {
            dynaTotal5 = parseInt(__Icounts_5_);
        }
        else if (!isNaN(__Acounts_5) && !isNaN(Ccounts_5__) && isNaN(__Icounts_5_)) {
            dynaTotal5 = parseInt(__Acounts_5) + parseInt(Ccounts_5__);
        }
        else if (!isNaN(__Acounts_5) && !isNaN(Ccounts_5__) && !isNaN(__Icounts_5_)) {
            dynaTotal5 = parseInt(__Acounts_5) + parseInt(Ccounts_5__) + parseInt(__Icounts_5_);
        }
        else if (isNaN(__Acounts_5) && !isNaN(Ccounts_5__) && !isNaN(__Icounts_5_)) {
            dynaTotal5 = parseInt(Ccounts_5__) + parseInt(__Icounts_5_);
        }
        else if (!isNaN(__Acounts_5) && isNaN(Ccounts_5__) && !isNaN(__Icounts_5_)) {
            dynaTotal5 = parseInt(__Acounts_5) + parseInt(__Icounts_5_);
        }
        else {
            dynaTotal5 = 0;
        }
        if (isNaN(dynaTotal5)) {
            dynaTotal5 = 0;
        }

        finalTotal = dynaTotal2 + dynaTotal3 + dynaTotal4 + dynaTotal5;
        $("#_pssngerCounts").val(_roomCounts + " Room(s)," + (__total + finalTotal) + " Passenger(s)");
    }

    $("#_Adults, #_Childs, #_Infants").keyup(function () {
        paSsengers();
    }).keyup();

    $("#Adults").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#_Errmsg").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#Children").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#_Errmsg1").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#Infants").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#_Errmsg2").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });

    var _counts = 0, counts_ = 0, _counts_ = 0;
    var totals = 0;

    $("#Adults, #Children, #Infants").keyup(function () {
        _counts = parseInt($("#Adults").val());
        counts_ = parseInt($("#Children").val());
        _counts_ = parseInt($("#Infants").val());
        if (!isNaN(_counts) && isNaN(counts_) && isNaN(_counts_)) {
            totals = parseInt(_counts);
        }
        else if (isNaN(_counts) && !isNaN(counts_) && isNaN(_counts_)) {
            totals = parseInt(counts_);
        }
        else if (isNaN(_counts) && isNaN(counts_) && !isNaN(_counts_)) {
            totals = parseInt(_counts_);
        }
        else if (!isNaN(_counts) && !isNaN(counts_) && isNaN(_counts_)) {
            totals = parseInt(_counts) + parseInt(counts_);
        }
        else if (!isNaN(_counts) && !isNaN(counts_) && !isNaN(_counts_)) {
            totals = parseInt(_counts) + parseInt(counts_) + parseInt(_counts_);
        }
        else if (isNaN(_counts) && !isNaN(counts_) && !isNaN(_counts_)) {
            totals = parseInt(counts_) + parseInt(_counts_);
        }
        else if (!isNaN(_counts) && isNaN(counts_) && !isNaN(_counts_)) {
            totals = parseInt(_counts) + parseInt(_counts_);
        }
        else {
            totals = 0;
        }
        if (isNaN(totals)) {
            totals = 0;
        }
        $("#pssngerCounts").val(totals + " Passenger(s)");
    }).keyup();

    $("#_to-input").prop("disabled", "disabled");
    $("#_dDate").prop("disabled", "disabled");
    $("#_classType").prop("disabled", "disabled");

    $("#_form-input").change(function () {
        if ($(this).val() != "") {
            $("#_to-input").prop("disabled", false);
            $("#_classType").prop("disabled", false);
        }
        else {
            $("#_to-input").prop("disabled", "disabled");
            $("#_classType").prop("disabled", "disabled");
            $("#_dDate").prop("disabled", "disabled");
            $("#_classType").val("0");
            $("#_to-input").val("");
            $("#_dDate").val("");
        }
    });
    $("#_to-input").change(function () {
        if ($(this).val() != "") {
            $("#_dDate").prop("disabled", false);
        }
        else {
            $("#_dDate").prop("disabled", "disabled");
            $("#_dDate").val("");
        }
    });
 
    $(function () {
        $("#_form-input, #_to-input, #fhTo, #fhFrom, #from-input, #to-input, #from_-input, #to_-input, #from1_-input, #to1_-input, #from2_-input, #to2_-input, #from3_-input, #to3_-input, #from4_-input, #to4_-input").autocomplete({
            source: function (request, response) {
                var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
                $.ajax({
                    url: "/Home/AutoComplete",
                    data: "{'str':'" + request.term + "'}",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        response($.grep(data, function (item) {
                            return matcher.test(item);
                        }))
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
            },
        }).focus(function () {
            $(this).autocomplete("search");
        });
    });
});

