$(document).ready(function () {
    var rooms = 1;
    var lastId = 0;
    var splitId = "";
    var nextIndex = 0;
    var Count = 0, Count0 = 0, Count1 = 0, TotalCount = 0,
        _Count = 0, _Count0 = 0, _Count1 = 0, _TotalCount = 0,
        Count01 = 0, Count02 = 0, Count03 = 0, TotalCount01 = 0,
        _Count01 = 0, _Count02 = 0, _Count03 = 0, _TotalCount01 = 0,
        Count001 = 0, Count002 = 0, Count003 = 0, TotalCount001 = 0, TotalFinal = 0;
    $.fn.datetimepicker.Constructor.Default = $.extend({}, $.fn.datetimepicker.Constructor.Default, {
        icons: {
            time: 'fas fa-clock',
            date: 'far fa-calendar',
            up: 'far fa-arrow-up',
            down: 'far fa-arrow-down',
            previous: 'fas fa-angle-left',
            next: 'fas fa-angle-right',
            today: 'far fa-calendar-check-o',
            clear: 'far fa-trash',
            close: 'far fa-times'
        }
    });
    $("#FlightsHotels").on("click", "._remove", function () {
        var id = this.id;
        var id_splitter = id.split("_");
        var deleteIndex = id_splitter[1];
        var adultId = parseInt($(".Aclass:last").val());
        var childId = parseInt($(".Cclass:last").val());
        var infantId = parseInt($(".Iclass:last").val());
        var subtractor = 0;
        var _finalTotal = 0;
        $("#divCon_" + deleteIndex).remove();
        $("._remove:last").css("display", "block");
        if (!isNaN(adultId) && isNaN(childId) && isNaN(infantId)) {
            subtractor = parseInt(adultId);
        }
        else if (isNaN(adultId) && !isNaN(childId) && isNaN(infantId)) {
            subtractor = parseInt(childId);
        }
        else if (isNaN(adultId) && isNaN(childId) && !isNaN(infantId)) {
            subtractor = parseInt(infantId);
        }
        else if (!isNaN(adultId) && !isNaN(childId) && isNaN(infantId)) {
            subtractor = parseInt(adultId) + parseInt(childId);
        }
        else if (!isNaN(adultId) && !isNaN(childId) && !isNaN(infantId)) {
            subtractor = parseInt(adultId) + parseInt(childId) + parseInt(infantId);
        }
        else if (isNaN(adultId) && !isNaN(childId) && !isNaN(infantId)) {
            subtractor = parseInt(childId) + parseInt(infantId);
        }
        else if (!isNaN(adultId) && isNaN(childId) && !isNaN(infantId)) {
            subtractor = parseInt(adultId) + parseInt(infantId);
        }
        else {
            subtractor = 0;
        }
        if (isNaN(subtractor)) {
            subtractor = 0;
        }
        _finalTotal = TotalFinal - subtractor;
        TotalFinal = _finalTotal;
        if (isNaN(TotalFinal)) {
            TotalFinal = 0;
        }
        rooms--;
        $("#_psSngerCounts").val(rooms + " Room(s), " + (TotalCount + TotalFinal) + " Passenger(s)");
      
    });
    function passEngers() {
        Count = parseInt($("#_-Adults-").val());
        Count0 = parseInt($("#_-Childs-").val());
        Count1 = parseInt($("#_-Infants-").val());
        if (!isNaN(Count) && isNaN(Count0) && isNaN(Count1)) {
            TotalCount = parseInt(Count);
        }
        else if (isNaN(Count) && !isNaN(Count0) && isNaN(Count1)) {
            TotalCount = parseInt(Count0);
        }
        else if (isNaN(Count) && isNaN(Count0) && !isNaN(Count1)) {
            TotalCount = parseInt(Count1);
        }
        else if (!isNaN(Count) && !isNaN(Count0) && isNaN(Count1)) {
            TotalCount = parseInt(Count) + parseInt(Count0);
        }
        else if (!isNaN(Count) && !isNaN(Count0) && !isNaN(Count1)) {
            TotalCount = parseInt(Count) + parseInt(Count0) + parseInt(Count1);
        }
        else if (isNaN(Count) && !isNaN(Count0) && !isNaN(Count1)) {
            TotalCount = parseInt(Count0) + parseInt(Count1);
        }
        else if (!isNaN(Count) && isNaN(Count0) && !isNaN(Count1)) {
            TotalCount = parseInt(Count) + parseInt(Count1);
        }
        else {
            TotalCount = 0;
        }
        if (isNaN(TotalCount)) {
            TotalCount = 0;
        }

        _Count = parseInt($("#_-Adults-2").val());
        _Count0 = parseInt($("#_-Childs-2").val());
        _Count1 = parseInt($("#_-Infants-2").val());
        if (!isNaN(_Count) && isNaN(_Count0) && isNaN(_Count1)) {
            _TotalCount = parseInt(_Count);
        }
        else if (isNaN(_Count) && !isNaN(_Count0) && isNaN(_Count1)) {
            _TotalCount = parseInt(_Count0);
        }
        else if (isNaN(_Count) && isNaN(_Count0) && !isNaN(_Count1)) {
            _TotalCount = parseInt(_Count1);
        }
        else if (!isNaN(_Count) && !isNaN(_Count0) && isNaN(_Count1)) {
            _TotalCount = parseInt(_Count) + parseInt(_Count0);
        }
        else if (!isNaN(_Count) && !isNaN(_Count0) && !isNaN(_Count1)) {
            _TotalCount = parseInt(_Count) + parseInt(_Count0) + parseInt(_Count1);
        }
        else if (isNaN(_Count) && !isNaN(_Count0) && !isNaN(_Count1)) {
            _TotalCount = parseInt(_Count0) + parseInt(_Count1);
        }
        else if (!isNaN(_Count) && isNaN(_Count0) && !isNaN(_Count1)) {
            _TotalCount = parseInt(_Count) + parseInt(_Count1);
        }
        else {
            _TotalCount = 0;
        }
        if (isNaN(_TotalCount)) {
            _TotalCount = 0;
        }

        Count01 = parseInt($("#_-Adults-3").val());
        Count02 = parseInt($("#_-Childs-3").val());
        Count03 = parseInt($("#_-Infants-3").val());
        if (!isNaN(Count01) && isNaN(Count02) && isNaN(Count03)) {
            TotalCount01 = parseInt(Count01);
        }
        else if (isNaN(Count01) && !isNaN(Count02) && isNaN(Count03)) {
            TotalCount01 = parseInt(Count02);
        }
        else if (isNaN(Count01) && isNaN(Count02) && !isNaN(Count03)) {
            TotalCount01 = parseInt(Count03);
        }
        else if (!isNaN(Count01) && !isNaN(Count02) && isNaN(Count03)) {
            TotalCount01 = parseInt(Count01) + parseInt(Count02);
        }
        else if (!isNaN(Count01) && !isNaN(Count02) && !isNaN(Count03)) {
            TotalCount01 = parseInt(Count01) + parseInt(Count02) + parseInt(Count03);
        }
        else if (isNaN(Count01) && !isNaN(Count02) && !isNaN(Count03)) {
            TotalCount01 = parseInt(Count02) + parseInt(Count03);
        }
        else if (!isNaN(Count01) && isNaN(Count02) && !isNaN(Count03)) {
            TotalCount01 = parseInt(Count01) + parseInt(Count03);
        }
        else {
            TotalCount01 = 0;
        }
        if (isNaN(TotalCount01)) {
            TotalCount01 = 0;
        }

        _Count01 = parseInt($("#_-Adults-4").val());
        _Count02 = parseInt($("#_-Childs-4").val());
        _Count03 = parseInt($("#_-Infants-4").val());
        if (!isNaN(_Count01) && isNaN(_Count02) && isNaN(_Count03)) {
            _TotalCount01 = parseInt(_Count01);
        }
        else if (isNaN(_Count01) && !isNaN(_Count02) && isNaN(_Count03)) {
            _TotalCount01 = parseInt(_Count02);
        }
        else if (isNaN(_Count01) && isNaN(_Count02) && !isNaN(_Count03)) {
            _TotalCount01 = parseInt(_Count03);
        }
        else if (!isNaN(_Count01) && !isNaN(_Count02) && isNaN(_Count03)) {
            _TotalCount01 = parseInt(_Count01) + parseInt(_Count02);
        }
        else if (!isNaN(_Count01) && !isNaN(_Count02) && !isNaN(_Count03)) {
            _TotalCount01 = parseInt(_Count01) + parseInt(_Count02) + parseInt(_Count03);
        }
        else if (isNaN(_Count01) && !isNaN(_Count02) && !isNaN(_Count03)) {
            _TotalCount01 = parseInt(_Count02) + parseInt(_Count03);
        }
        else if (!isNaN(_Count01) && isNaN(_Count02) && !isNaN(_Count03)) {
            _TotalCount01 = parseInt(_Count01) + parseInt(_Count03);
        }
        else {
            _TotalCount01 = 0;
        }
        if (isNaN(_TotalCount01)) {
            _TotalCount01 = 0;
        }

        Count001 = parseInt($("#_-Adults-5").val());
        Count002 = parseInt($("#_-Childs-5").val());
        Count003 = parseInt($("#_-Infants-5").val());
        if (!isNaN(Count001) && isNaN(Count002) && isNaN(Count003)) {
            TotalCount001 = parseInt(Count001);
        }
        else if (isNaN(Count001) && !isNaN(Count002) && isNaN(Count003)) {
            TotalCount001 = parseInt(Count002);
        }
        else if (isNaN(Count001) && isNaN(Count002) && !isNaN(Count003)) {
            TotalCount001 = parseInt(Count003);
        }
        else if (!isNaN(Count001) && !isNaN(Count002) && isNaN(Count003)) {
            TotalCount001 = parseInt(Count001) + parseInt(Count002);
        }
        else if (!isNaN(Count001) && !isNaN(Count002) && !isNaN(Count003)) {
            TotalCount001 = parseInt(Count001) + parseInt(Count002) + parseInt(Count003);
        }
        else if (isNaN(Count001) && !isNaN(Count002) && !isNaN(Count003)) {
            TotalCount001 = parseInt(Count002) + parseInt(Count003);
        }
        else if (!isNaN(Count001) && isNaN(Count002) && !isNaN(Count003)) {
            TotalCount001 = parseInt(Count001) + parseInt(Count003);
        }
        else {
            TotalCount001 = 0;
        }
        if (isNaN(TotalCount001)) {
            TotalCount001 = 0;
        }
        TotalFinal = _TotalCount + TotalCount01 + _TotalCount01 + TotalCount001;
        $("#_psSngerCounts").val(rooms + " Room(s), " + (TotalCount + TotalFinal) + " Passenger(s)");
        if (isNaN(Count001)) {
            Count001 = 0;
        }
        if (isNaN(_Count01)) {
            _Count01 = 0;
        }
        if (isNaN(Count01)) {
            Count01 = 0;
        }
        if (isNaN(_Count)) {
            _Count = 0;
        }
        if (isNaN(Count)) {
            Count = 0;
        }

        if (isNaN(Count0)) {
            Count0 = 0;
        }
        if (isNaN(_Count0)) {
            _Count0 = 0;
        }
        if (isNaN(Count02)) {
            Count02 = 0;
        }
        if (isNaN(_Count02)) {
            _Count02 = 0;
        }
        if (isNaN(Count002)) {
            Count002 = 0;
        }

        if (isNaN(Count1)) {
            Count1 = 0;
        }
        if (isNaN(_Count1)) {
            _Count1 = 0;
        }
        if (isNaN(Count03)) {
            Count03 = 0;
        }
        if (isNaN(_Count03)) {
            _Count03 = 0;
        }
        if (isNaN(Count003)) {
            Count003 = 0;
        }
        

        var fAdult = Count001 + _Count01 + Count01 + _Count + Count;
        if (isNaN(fAdult)) {
            fAdult = 0;
        }
        var fChild = Count0 + _Count0 + Count02 + _Count02 + Count002;
        if (isNaN(fChild)) {
            fChild = 0;
        }
        var fInfant = Count1 + _Count1 + Count03 + _Count03 + Count003;

        $("#PasSngerCounts").val(rooms + "," + fAdult + "," + fChild + "," + fInfant + "," + (TotalCount + TotalFinal));
    }

    $("#_-Adults-, #_-Childs-, #_-Infants-").keyup(function () {
        passEngers();
    }).keyup();

    $("#Btn-Addrooms").click(function () {
        if ($("#FlightsHotels").children().length < 5) {
            rooms = $("#FlightsHotels").children().length + 1;
            lastId = $(".elements:last").attr("id");
            splitId = lastId.split("_");
            nextIndex = Number(splitId[1]) + 1;
            $("._remove").css("display", "none");
            $("#FlightsHotels").append("<div class='row elements' id='divCon_" + nextIndex + "'>\
                                <div class='col-12'>\
                                        <h4 class='font-red my-font-17'><b>Room " + rooms + "</b></h4 >\
                                   <span id='remove_" + nextIndex + "' class='_remove my-font-14'><b>Remove Room</b></span>\
                               </div>\
                            <form class='col-12'>\
                                <div class='row'>\
                                    <div class='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>\
                                        <div class='form-group'>\
                                            <label for='_Adults' class='control-label my-font-14 font-red'>Adult(12y+)</label>\
                                            <div class='input-group'>\
                                                <input type='text' placeholder='Adult count(s)' id='_-Adults-"+ nextIndex + "' class='form-control Aclass my-font-14 font-red' />\
                                                <div class='input-group-append'>\
                                                    <div class='input-group-text my-icon my-font-14'><i class='fas fa-male'></i></div>\
                                                </div>\
                                            </div>\
                                            <span class='text-danger my-font-14 font-red' id='Errmsg-"+ nextIndex + "'></span>\
                                        </div>\
                                    </div>\
                                    <div class='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>\
                                        <label for='_Childs' class='control-label my-font-14 font-red'>Child(2y-11y)</label>\
                                        <div class='input-group'>\
                                            <input type='text' class='form-control Cclass my-font-14 font-red' id='_-Childs-"+ nextIndex + "' placeholder='Child count(s)' />\
                                             <div class='input-group-append'>\
                                                <div class='input-group-text my-icon my-font-14'><i class='fas fa-child'></i></div>\
                                            </div>\
                                        </div>\
                                        <span class='text-danger my-font-14 font-red' id='Errmsg1-"+ nextIndex + "'></span>\
                                    </div>\
                                    <div class='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>\
                                        <label for='_Infants' class='control-label my-font-14 font-red'>Infants(16d-23m)</label>\
                                        <div class='input-group'>\
                                            <input type='text' placeholder='Infant count(s)' class='form-control Iclass my-font-14 font-red' id='_-Infants-"+ nextIndex + "' />\
                                            <div class='input-group-append'>\
                                                <div class='input-group-text my-icon my-font-14'><i class='fa fa-baby'></i></div>\
                                            </div>\
                                        </div>\
                                        <span class='text-danger' id='Errmsg2-"+ nextIndex + "'></span>\
                                    </div>\
                                </div>\
                            </form>\
                     </div>");
        }
        else {
            $("#_ErrorCounts").html("You have reach the maximum room counts!").show().fadeOut("slow");
            return false;
        }

        $("#_-Adults-2, #_-Childs-2, #_-Infants-2, #_-Adults-3, #_-Childs-3, #_-Infants-3, #_-Adults-4, #_-Childs-4, #_-Infants-4, #_-Adults-5, #_-Childs-5, #_-Infants-5").keyup(function () {
            passEngers();
        }).keyup();

        $("#_-Adults-2").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg-2").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Childs-2").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg1-2").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Infants-2").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg2-2").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_-Adults-3").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg-3").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Childs-3").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg1-3").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Infants-3").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg2-3").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });

        $("#_-Adults-4").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg-4").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Childs-4").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg1-4").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Infants-4").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg2-4").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Adults-5").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg-5").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Childs-5").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg1-5").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
        $("#_-Infants-5").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                $("#Errmsg2-5").html("Digits Only!").show().fadeOut("slow");
                return false;
            }
        });
    });

    $("#guestAdult, #guestChild, #guestInfant").keyup(function () {
        GuestCount();
        if ($("#guestAdult").val != "" || $("#guestChild").val() != "" || $("#guestInfant").val() != "") {
            $(".countsError").hide();
            $("#guest-counter").css("border-color", "#ced4da");
        }
    });
    $("#guestAdult").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#guestAdultError").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#guestChild").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#guestChildError").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#guestInfant").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#guestInfantError").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    var packageName = "";
    var _packageName = "";
    var guestAdult = 0;
    var guestChild = 0;
    var guestInfant = 0;
    var totalRes = 0;
    function GuestCount() {
        guestAdult = parseInt($("#guestAdult").val());
        guestChild = parseInt($("#guestChild").val());
        guestInfant = parseInt($("#guestInfant").val());
        if (isNaN(guestAdult)) {
            guestAdult = 0;
        }
        if (isNaN(guestChild)) {
            guestChild = 0;
        }
        if (isNaN(guestInfant)) {
            guestInfant = 0;
        }
        totalRes = guestAdult + guestChild + guestInfant;
        $("#guestCount").val(totalRes + "," + guestAdult + "," + guestChild + "," + guestInfant);
    }

    var location = window.location.href;
    location = location.substring(0, (location.indexOf("#") == -1) ? location.length : location.indexOf("#"));
    location = location.substring(0, (location.indexOf("?") == -1) ? location.length : location.indexOf("?"));
    location = location.substr(location.lastIndexOf("/") + 1);
    if (location == "InternationalDestination1") {
        packageName = "Christmas in Kansai";
        $("#packagename").val(packageName);
    }
    else if (location == "InternationalDestination2") {
        packageName = "Enchanting Taiwan";
        $("#packagename").val(packageName);
    }
    else if (location == "InternationalDestination3") {
        packageName = "Autumn in Tokyo";
        $("#packagename").val(packageName);
    }
    else if (location == "InternationalDestination4") {
        packageName = "Wondrous Korea";
        $("#packagename").val(packageName);
    }
    else if (location == "InternationalDestination4") {
        packageName = "Holyland";
        $("#packagename").val(packageName);
    }
    else if (location == "Sorak") {
        packageName = "MT. SORAK, YONGIN AND SEOUL";
        $("#packagename").val(packageName);
    }
    else if (location == "Brazil") {
        packageName = "Tropical Brazil";
        $("#packagename").val(packageName);
    }
    else if (location == "Bhutan") {
        packageName = "Bhutan";
        $("#packagename").val(packageName);
    }
    else if (location == "Xmastokyo") {
        packageName = "Christmas in Tokyo";
        $("#packagename").val(packageName);
    }
    else if (location == "Hanoi") {
        packageName = "Hanoi";
        $("#packagename").val(packageName);
    }
    else if (location == "Slovenia") {
        packageName = "Slovenia";
        $("#packagename").val(packageName);
    }
    else if (location == "GoldenTriangle") {
        packageName = "Golden Triangle";
        $("#packagename").val(packageName);
    }
    else if (location == "Cairo") {
        packageName = "Russian Expedition";
        $("#packagename").val(packageName);
    }
    else {
        packageName = "";
        $("#packagename").val(packageName);
    }
    $(".navbar li").each(function () {
        var href = $(this).find("a").attr("href");
        href = href.substr(href.lastIndexOf("/") + 1);
        if (location == href) {
            $(this).addClass("user-Active");
            $(".user-Active a").click(function (e) {
                e.preventDefault();
            });
        }
    });
    //$(".img-links").each(function () {
    //    var href = $(this).find("a").attr("href");
    //    href = href.substr(href.lastIndexOf("/") + 1);
       
    //    //alert(href);
    //});

    $(document).on("click", "#btnLuzon", function () {
        $('html, body').animate({ scrollTop: $('#luzon').offset().top }, 'slow');
    })
    $(document).on("click", "#btnVisayas", function () {
        $('html, body').animate({ scrollTop: $('#visayas').offset().top }, 'slow');
    });
    $(document).on("click", "#btnMindanao", function () {
        $('html, body').animate({ scrollTop: $('#mindanao').offset().top }, 'slow');
    });


    $(document).on("click", "#btnholylandOne", function () {
        $("#btnholylandOne").addClass("active-links");
        $("#btnholylandTwo").removeClass("active-links");
        $("#btnholylandThree").removeClass("active-links");
        $("#btnholylandFour").removeClass("active-links");
        $("#btnholylandFive").removeClass("active-links");
        $("#btnholylandSix").removeClass("active-links");
        $("#btnholylandSeven").removeClass("active-links");
        $("#btnholylandEight").removeClass("active-links");
        $("#btnholylandNine").removeClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").show();
        $("#holylandDivTwo").hide();
        $("#holylandDivThree").hide();
        $("#holylandDivFour").hide();
        $("#holylandDivFive").hide();
        $("#holylandDivSix").hide();
        $("#holylandDivSeven").hide();
        $("#holylandDivEight").hide();
        $("#holylandDivNine").hide();
        $("html, body").animate({ scrollTop: $("#holylandDivOne").offset().top }, "slow");
        _packageName = "Jan. 18 - 29, 2020";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });
    $(document).on("click", "#btnholylandTwo", function () {
        $("#btnholylandOne").removeClass("active-links");
        $("#btnholylandTwo").addClass("active-links");
        $("#btnholylandThree").removeClass("active-links");
        $("#btnholylandFour").removeClass("active-links");
        $("#btnholylandFive").removeClass("active-links");
        $("#btnholylandSix").removeClass("active-links");
        $("#btnholylandSeven").removeClass("active-links");
        $("#btnholylandEight").removeClass("active-links");
        $("#btnholylandNine").removeClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").hide();
        $("#holylandDivTwo").show();
        $("#holylandDivThree").hide();
        $("#holylandDivFour").hide();
        $("#holylandDivFive").hide();
        $("#holylandDivSix").hide();
        $("#holylandDivSeven").hide();
        $("#holylandDivEight").hide();
        $("#holylandDivNine").hide();
        $("html, body").animate({ scrollTop: $("#holylandDivTwo").offset().top }, "slow");
        _packageName = "Feb. 08 - 20 / Feb. 14 - 26 / Mar. 04 - 16, 2020";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });
    $(document).on("click", "#btnholylandThree", function () {
        $("#btnholylandOne").removeClass("active-links");
        $("#btnholylandTwo").removeClass("active-links");
        $("#btnholylandThree").addClass("active-links");
        $("#btnholylandFour").removeClass("active-links");
        $("#btnholylandFive").removeClass("active-links");
        $("#btnholylandSix").removeClass("active-links");
        $("#btnholylandSeven").removeClass("active-links");
        $("#btnholylandEight").removeClass("active-links");
        $("#btnholylandNine").removeClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").hide();
        $("#holylandDivTwo").hide();
        $("#holylandDivThree").show();
        $("#holylandDivFour").hide();
        $("#holylandDivFive").hide();
        $("#holylandDivSix").hide();
        $("#holylandDivSeven").hide();
        $("#holylandDivEight").hide();
        $("#holylandDivNine").hide();
        $("html, body").animate({ scrollTop: $("#holylandDivThree").offset().top }, "slow");
        _packageName = "Mar. 08 - 20 / MAr. 15 - 27, 2020";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });
    $(document).on("click", "#btnholylandFour", function () {
        $("#btnholylandOne").removeClass("active-links");
        $("#btnholylandTwo").removeClass("active-links");
        $("#btnholylandThree").removeClass("active-links");
        $("#btnholylandFour").addClass("active-links");
        $("#btnholylandFive").removeClass("active-links");
        $("#btnholylandSix").removeClass("active-links");
        $("#btnholylandSeven").removeClass("active-links");
        $("#btnholylandEight").removeClass("active-links");
        $("#btnholylandNine").removeClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").hide();
        $("#holylandDivTwo").hide();
        $("#holylandDivThree").hide();
        $("#holylandDivFour").show();
        $("#holylandDivFive").hide();
        $("#holylandDivSix").hide();
        $("#holylandDivSeven").hide();
        $("#holylandDivEight").hide();
        $("#holylandDivNine").hide();
        $("html, body").animate({ scrollTop: $("#holylandDivFour").offset().top }, "slow");
        _packageName = "Mar. 29 - 10 / Apr. 05 - 17 / Apr. 12 - 24 / Apr. 19 - May 01, 2020";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });

    $(document).on("click", "#btnholylandFive", function () {
        $("#btnholylandOne").removeClass("active-links");
        $("#btnholylandTwo").removeClass("active-links");
        $("#btnholylandThree").removeClass("active-links");
        $("#btnholylandFour").removeClass("active-links");
        $("#btnholylandFive").addClass("active-links");
        $("#btnholylandSix").removeClass("active-links");
        $("#btnholylandSeven").removeClass("active-links");
        $("#btnholylandEight").removeClass("active-links");
        $("#btnholylandNine").removeClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").hide();
        $("#holylandDivTwo").hide();
        $("#holylandDivThree").hide();
        $("#holylandDivFour").hide();
        $("#holylandDivFive").show();
        $("#holylandDivSix").hide();
        $("#holylandDivSeven").hide();
        $("#holylandDivEight").hide();
        $("#holylandDivNine").hide();
        $("html, body").animate({ scrollTop: $("#holylandDivFive").offset().top }, "slow");
        _packageName = "May 03 - 25 / May 10 - 22 / May 17 - 29, 2020";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });
    $(document).on("click", "#btnholylandSix", function () {
        $("#btnholylandOne").removeClass("active-links");
        $("#btnholylandTwo").removeClass("active-links");
        $("#btnholylandThree").removeClass("active-links");
        $("#btnholylandFour").removeClass("active-links");
        $("#btnholylandFive").removeClass("active-links");
        $("#btnholylandSix").addClass("active-links");
        $("#btnholylandSeven").removeClass("active-links");
        $("#btnholylandEight").removeClass("active-links");
        $("#btnholylandNine").removeClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").hide();
        $("#holylandDivTwo").hide();
        $("#holylandDivThree").hide();
        $("#holylandDivFour").hide();
        $("#holylandDivFive").hide();
        $("#holylandDivSix").show();
        $("#holylandDivSeven").hide();
        $("#holylandDivEight").hide();
        $("#holylandDivNine").hide();
        $("html, body").animate({ scrollTop: $("#holylandDivSix").offset().top }, "slow");
        _packageName = "Nov 16 - 28, 2020";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });
    $(document).on("click", "#btnholylandSeven", function () {
        $("#btnholylandOne").removeClass("active-links");
        $("#btnholylandTwo").removeClass("active-links");
        $("#btnholylandThree").removeClass("active-links");
        $("#btnholylandFour").removeClass("active-links");
        $("#btnholylandFive").removeClass("active-links");
        $("#btnholylandSix").removeClass("active-links");
        $("#btnholylandSeven").addClass("active-links");
        $("#btnholylandEight").removeClass("active-links");
        $("#btnholylandNine").removeClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").hide();
        $("#holylandDivTwo").hide();
        $("#holylandDivThree").hide();
        $("#holylandDivFour").hide();
        $("#holylandDivFive").hide();
        $("#holylandDivSix").hide();
        $("#holylandDivSeven").show();
        $("#holylandDivEight").hide();
        $("#holylandDivNine").hide();
        $("html, body").animate({ scrollTop: $("#holylandDivSeven").offset().top }, "slow");
        _packageName = "Nov 18 - 30, 2020";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });
    $(document).on("click", "#btnholylandEight", function () {
        $("#btnholylandOne").removeClass("active-links");
        $("#btnholylandTwo").removeClass("active-links");
        $("#btnholylandThree").removeClass("active-links");
        $("#btnholylandFour").removeClass("active-links");
        $("#btnholylandFive").removeClass("active-links");
        $("#btnholylandSix").removeClass("active-links");
        $("#btnholylandSeven").removeClass("active-links");
        $("#btnholylandEight").addClass("active-links");
        $("#btnholylandNine").removeClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").hide();
        $("#holylandDivTwo").hide();
        $("#holylandDivThree").hide();
        $("#holylandDivFour").hide();
        $("#holylandDivFive").hide();
        $("#holylandDivSix").hide();
        $("#holylandDivSeven").hide();
        $("#holylandDivEight").show();
        $("#holylandDivNine").hide();
        $("html, body").animate({ scrollTop: $("#holylandDivEight").offset().top }, "slow");
        _packageName = "Dec. 20 - Jan. 02, 2019";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });
    $(document).on("click", "#btnholylandNine", function () {
        $("#btnholylandOne").removeClass("active-links");
        $("#btnholylandTwo").removeClass("active-links");
        $("#btnholylandThree").removeClass("active-links");
        $("#btnholylandFour").removeClass("active-links");
        $("#btnholylandFive").removeClass("active-links");
        $("#btnholylandSix").removeClass("active-links");
        $("#btnholylandSeven").removeClass("active-links");
        $("#btnholylandEight").removeClass("active-links");
        $("#btnholylandNine").addClass("active-links");
        $("#formBody").show();
        $("#holylandDivOne").hide();
        $("#holylandDivTwo").hide();
        $("#holylandDivThree").hide();
        $("#holylandDivFour").hide();
        $("#holylandDivFive").hide();
        $("#holylandDivSix").hide();
        $("#holylandDivSeven").hide();
        $("#holylandDivEight").hide();
        $("#holylandDivNine").show();
        $("html, body").animate({ scrollTop: $("#holylandDivNine").offset().top }, "slow");
        _packageName = "Dec. 21 - Jan. 03, 2019";
        $("#packagename").val("Holyland Tour" + " Tour departure date(s): " + _packageName);
    });

    $(document).on("click", "#homeInquireBtn", function () {
        $("html, body").animate({ scrollTop: $("#indexSection2").offset().top }, "slow");
    });
    $(document).on("click", "#homeExploreBtn", function () {
        $("html, body").animate({ scrollTop: $("#ExploreDiv").offset().top }, "slow");
    });

    $("#itinerary-cairo1").hide();
    $("#terms-cairo1").hide();
    $("#exclusion-cairo1").hide();
    $("#visa-cairo1").hide();
    $("#cairo-inclusion1").click(function () {
        $("#inclusion-cairo1").show();
        $("#itinerary-cairo1").hide();
        $("#terms-cairo1").hide();
        $("#exclusion-cairo1").hide();
        $("#visa-cairo1").hide();
        $("#cairo-inclusion1").addClass("active");
        $("#cairo-itinerary1").removeClass("active");
        $("#cairo-terms1").removeClass("active");
        $("#cairo-exclusion1").removeClass("active");
        $("#cairo-visa1").removeClass("active");
    });
    $("#cairo-itinerary1").click(function () {
        $("#inclusion-cairo1").hide();
        $("#itinerary-cairo1").show();
        $("#terms-cairo1").hide();
        $("#exclusion-cairo1").hide();
        $("#visa-cairo1").hide();
        $("#cairo-inclusion1").removeClass("active");
        $("#cairo-itinerary1").addClass("active");
        $("#cairo-terms1").removeClass("active");
        $("#cairo-exclusion1").removeClass("active");
        $("#cairo-visa1").removeClass("active");
    });
    $("#cairo-terms1").click(function () {
        $("#inclusion-cairo1").hide();
        $("#itinerary-cairo1").hide();
        $("#terms-cairo1").show();
        $("#exclusion-cairo1").hide();
        $("#visa-cairo1").hide();
        $("#cairo-inclusion1").removeClass("active");
        $("#cairo-itinerary1").removeClass("active");
        $("#cairo-terms1").addClass("active");
        $("#cairo-exclusion1").removeClass("active");
        $("#cairo-visa1").removeClass("active");
    });
    $("#cairo-exclusion1").click(function () {
        $("#inclusion-cairo1").hide();
        $("#itinerary-cairo1").hide();
        $("#terms-cairo1").hide();
        $("#exclusion-cairo1").show();
        $("#visa-cairo1").hide();
        $("#cairo-inclusion1").removeClass("active");
        $("#cairo-itinerary1").removeClass("active");
        $("#cairo-terms1").removeClass("active");
        $("#cairo-exclusion1").addClass("active");
        $("#cairo-visa1").removeClass("active");
    });
    $("#cairo-visa1").click(function () {
        $("#inclusion-cairo1").hide();
        $("#itinerary-cairo1").hide();
        $("#terms-cairo1").hide();
        $("#exclusion-cairo1").hide();
        $("#visa-cairo1").show();
        $("#cairo-inclusion1").removeClass("active");
        $("#cairo-itinerary1").removeClass("active");
        $("#cairo-terms1").removeClass("active");
        $("#cairo-exclusion1").removeClass("active");
        $("#cairo-visa1").addClass("active");
    });

    $("#itinerary-cairo2").hide();
    $("#terms-cairo2").hide();
    $("#exclusion-cairo2").hide();
    $("#visa-cairo2").hide();
    $("#cairo-inclusion2").click(function () {
        $("#inclusion-cairo2").show();
        $("#itinerary-cairo2").hide();
        $("#terms-cairo2").hide();
        $("#exclusion-cairo2").hide();
        $("#visa-cairo2").hide();
        $("#cairo-inclusion2").addClass("active");
        $("#cairo-itinerary2").removeClass("active");
        $("#cairo-terms2").removeClass("active");
        $("#cairo-exclusion2").removeClass("active");
        $("#cairo-visa2").removeClass("active");
    });
    $("#cairo-itinerary2").click(function () {
        $("#inclusion-cairo2").hide();
        $("#itinerary-cairo2").show();
        $("#terms-cairo2").hide();
        $("#exclusion-cairo2").hide();
        $("#visa-cairo2").hide();
        $("#cairo-inclusion2").removeClass("active");
        $("#cairo-itinerary2").addClass("active");
        $("#cairo-terms2").removeClass("active");
        $("#cairo-exclusion2").removeClass("active");
        $("#cairo-visa2").removeClass("active");
    });
    $("#cairo-terms2").click(function () {
        $("#inclusion-cairo2").hide();
        $("#itinerary-cairo2").hide();
        $("#terms-cairo2").show();
        $("#exclusion-cairo2").hide();
        $("#visa-cairo2").hide();
        $("#cairo-inclusion2").removeClass("active");
        $("#cairo-itinerary2").removeClass("active");
        $("#cairo-terms2").addClass("active");
        $("#cairo-exclusion2").removeClass("active");
        $("#cairo-visa2").removeClass("active");
    });
    $("#cairo-exclusion2").click(function () {
        $("#inclusion-cairo2").hide();
        $("#itinerary-cairo2").hide();
        $("#terms-cairo2").hide();
        $("#exclusion-cairo2").show();
        $("#visa-cairo2").hide();
        $("#cairo-inclusion2").removeClass("active");
        $("#cairo-itinerary2").removeClass("active");
        $("#cairo-terms2").removeClass("active");
        $("#cairo-exclusion2").addClass("active");
        $("#cairo-visa2").removeClass("active");
    });
    $("#cairo-visa2").click(function () {
        $("#inclusion-cairo2").hide();
        $("#itinerary-cairo2").hide();
        $("#terms-cairo2").hide();
        $("#exclusion-cairo2").hide();
        $("#visa-cairo2").show();
        $("#cairo-inclusion2").removeClass("active");
        $("#cairo-itinerary2").removeClass("active");
        $("#cairo-terms2").removeClass("active");
        $("#cairo-exclusion2").removeClass("active");
        $("#cairo-visa2").addClass("active");
    });

    $("#itinerary-cairo3").hide();
    $("#terms-cairo3").hide();
    $("#exclusion-cairo3").hide();
    $("#visa-cairo3").hide();
    $("#cairo-inclusion3").click(function () {
        $("#inclusion-cairo3").show();
        $("#itinerary-cairo3").hide();
        $("#terms-cairo3").hide();
        $("#exclusion-cairo3").hide();
        $("#visa-cairo3").hide();
        $("#cairo-inclusion3").addClass("active");
        $("#cairo-itinerary3").removeClass("active");
        $("#cairo-terms3").removeClass("active");
        $("#cairo-exclusion3").removeClass("active");
        $("#cairo-visa3").removeClass("active");
    });
    $("#cairo-itinerary3").click(function () {
        $("#inclusion-cairo3").hide();
        $("#itinerary-cairo3").show();
        $("#terms-cairo3").hide();
        $("#exclusion-cairo3").hide();
        $("#visa-cairo3").hide();
        $("#cairo-inclusion3").removeClass("active");
        $("#cairo-itinerary3").addClass("active");
        $("#cairo-terms3").removeClass("active");
        $("#cairo-exclusion3").removeClass("active");
        $("#cairo-visa3").removeClass("active");
    });
    $("#cairo-terms3").click(function () {
        $("#inclusion-cairo3").hide();
        $("#itinerary-cairo3").hide();
        $("#terms-cairo3").show();
        $("#exclusion-cairo3").hide();
        $("#visa-cairo3").hide();
        $("#cairo-inclusion3").removeClass("active");
        $("#cairo-itinerary3").removeClass("active");
        $("#cairo-terms3").addClass("active");
        $("#cairo-exclusion3").removeClass("active");
        $("#cairo-visa3").removeClass("active");
    });
    $("#cairo-exclusion3").click(function () {
        $("#inclusion-cairo3").hide();
        $("#itinerary-cairo3").hide();
        $("#terms-cairo3").hide();
        $("#exclusion-cairo3").show();
        $("#visa-cairo3").hide();
        $("#cairo-inclusion3").removeClass("active");
        $("#cairo-itinerary3").removeClass("active");
        $("#cairo-terms3").removeClass("active");
        $("#cairo-exclusion3").addClass("active");
        $("#cairo-visa3").removeClass("active");
    });
    $("#cairo-visa3").click(function () {
        $("#inclusion-cairo3").hide();
        $("#itinerary-cairo3").hide();
        $("#terms-cairo3").hide();
        $("#exclusion-cairo3").hide();
        $("#visa-cairo3").show();
        $("#cairo-inclusion3").removeClass("active");
        $("#cairo-itinerary3").removeClass("active");
        $("#cairo-terms3").removeClass("active");
        $("#cairo-exclusion3").removeClass("active");
        $("#cairo-visa3").addClass("active");
    });

    $("#itinerary-cairo4").hide();
    $("#terms-cairo4").hide();
    $("#exclusion-cairo4").hide();
    $("#visa-cairo4").hide();
    $("#cairo-inclusion4").click(function () {
        $("#inclusion-cairo4").show();
        $("#itinerary-cairo4").hide();
        $("#terms-cairo4").hide();
        $("#exclusion-cairo4").hide();
        $("#visa-cairo4").hide();
        $("#cairo-inclusion4").addClass("active");
        $("#cairo-itinerary4").removeClass("active");
        $("#cairo-terms4").removeClass("active");
        $("#cairo-exclusion4").removeClass("active");
        $("#cairo-visa4").removeClass("active");
    });
    $("#cairo-itinerary4").click(function () {
        $("#inclusion-cairo4").hide();
        $("#itinerary-cairo4").show();
        $("#terms-cairo4").hide();
        $("#exclusion-cairo4").hide();
        $("#visa-cairo4").hide();
        $("#cairo-inclusion4").removeClass("active");
        $("#cairo-itinerary4").addClass("active");
        $("#cairo-terms4").removeClass("active");
        $("#cairo-exclusion4").removeClass("active");
        $("#cairo-visa4").removeClass("active");
    });
    $("#cairo-terms4").click(function () {
        $("#inclusion-cairo4").hide();
        $("#itinerary-cairo4").hide();
        $("#terms-cairo4").show();
        $("#exclusion-cairo4").hide();
        $("#visa-cairo4").hide();
        $("#cairo-inclusion4").removeClass("active");
        $("#cairo-itinerary4").removeClass("active");
        $("#cairo-terms4").addClass("active");
        $("#cairo-exclusion4").removeClass("active");
        $("#cairo-visa4").removeClass("active");
    });
    $("#cairo-exclusion4").click(function () {
        $("#inclusion-cairo4").hide();
        $("#itinerary-cairo4").hide();
        $("#terms-cairo4").hide();
        $("#exclusion-cairo4").show();
        $("#visa-cairo4").hide();
        $("#cairo-inclusion4").removeClass("active");
        $("#cairo-itinerary4").removeClass("active");
        $("#cairo-terms4").removeClass("active");
        $("#cairo-exclusion4").addClass("active");
        $("#cairo-visa4").removeClass("active");
    });
    $("#cairo-visa4").click(function () {
        $("#inclusion-cairo4").hide();
        $("#itinerary-cairo4").hide();
        $("#terms-cairo4").hide();
        $("#exclusion-cairo4").hide();
        $("#visa-cairo4").show();
        $("#cairo-inclusion4").removeClass("active");
        $("#cairo-itinerary4").removeClass("active");
        $("#cairo-terms4").removeClass("active");
        $("#cairo-exclusion4").removeClass("active");
        $("#cairo-visa4").addClass("active");
    });

    $("#itinerary-cairo5").hide();
    $("#terms-cairo5").hide();
    $("#exclusion-cairo5").hide();
    $("#visa-cairo5").hide();
    $("#cairo-inclusion5").click(function () {
        $("#inclusion-cairo5").show();
        $("#itinerary-cairo5").hide();
        $("#terms-cairo5").hide();
        $("#exclusion-cairo5").hide();
        $("#visa-cairo5").hide();
        $("#cairo-inclusion5").addClass("active");
        $("#cairo-itinerary5").removeClass("active");
        $("#cairo-terms5").removeClass("active");
        $("#cairo-exclusion5").removeClass("active");
        $("#cairo-visa5").removeClass("active");
    });
    $("#cairo-itinerary5").click(function () {
        $("#inclusion-cairo5").hide();
        $("#itinerary-cairo5").show();
        $("#terms-cairo5").hide();
        $("#exclusion-cairo5").hide();
        $("#visa-cairo5").hide();
        $("#cairo-inclusion5").removeClass("active");
        $("#cairo-itinerary5").addClass("active");
        $("#cairo-terms5").removeClass("active");
        $("#cairo-exclusion5").removeClass("active");
        $("#cairo-visa5").removeClass("active");
    });
    $("#cairo-terms5").click(function () {
        $("#inclusion-cairo5").hide();
        $("#itinerary-cairo5").hide();
        $("#terms-cairo5").show();
        $("#exclusion-cairo5").hide();
        $("#visa-cairo5").hide();
        $("#cairo-inclusion5").removeClass("active");
        $("#cairo-itinerary5").removeClass("active");
        $("#cairo-terms5").addClass("active");
        $("#cairo-exclusion5").removeClass("active");
        $("#cairo-visa5").removeClass("active");
    });
    $("#cairo-exclusion5").click(function () {
        $("#inclusion-cairo5").hide();
        $("#itinerary-cairo5").hide();
        $("#terms-cairo5").hide();
        $("#exclusion-cairo5").show();
        $("#visa-cairo5").hide();
        $("#cairo-inclusion5").removeClass("active");
        $("#cairo-itinerary5").removeClass("active");
        $("#cairo-terms5").removeClass("active");
        $("#cairo-exclusion5").addClass("active");
        $("#cairo-visa5").removeClass("active");
    });
    $("#cairo-visa5").click(function () {
        $("#inclusion-cairo5").hide();
        $("#itinerary-cairo5").hide();
        $("#terms-cairo5").hide();
        $("#exclusion-cairo5").hide();
        $("#visa-cairo5").show();
        $("#cairo-inclusion5").removeClass("active");
        $("#cairo-itinerary5").removeClass("active");
        $("#cairo-terms5").removeClass("active");
        $("#cairo-exclusion5").removeClass("active");
        $("#cairo-visa5").addClass("active");
    });

    $("#itinerary-cairo6").hide();
    $("#terms-cairo6").hide();
    $("#exclusion-cairo6").hide();
    $("#visa-cairo6").hide();
    $("#cairo-inclusion6").click(function () {
        $("#inclusion-cairo6").show();
        $("#itinerary-cairo6").hide();
        $("#terms-cairo6").hide();
        $("#exclusion-cairo6").hide();
        $("#visa-cairo6").hide();
        $("#cairo-inclusion6").addClass("active");
        $("#cairo-itinerary6").removeClass("active");
        $("#cairo-terms6").removeClass("active");
        $("#cairo-exclusion6").removeClass("active");
        $("#cairo-visa6").removeClass("active");
    });
    $("#cairo-itinerary6").click(function () {
        $("#inclusion-cairo6").hide();
        $("#itinerary-cairo6").show();
        $("#terms-cairo6").hide();
        $("#exclusion-cairo6").hide();
        $("#visa-cairo6").hide();
        $("#cairo-inclusion6").removeClass("active");
        $("#cairo-itinerary6").addClass("active");
        $("#cairo-terms6").removeClass("active");
        $("#cairo-exclusion6").removeClass("active");
        $("#cairo-visa6").removeClass("active");
    });
    $("#cairo-terms6").click(function () {
        $("#inclusion-cairo6").hide();
        $("#itinerary-cairo6").hide();
        $("#terms-cairo6").show();
        $("#exclusion-cairo6").hide();
        $("#visa-cairo6").hide();
        $("#cairo-inclusion6").removeClass("active");
        $("#cairo-itinerary6").removeClass("active");
        $("#cairo-terms6").addClass("active");
        $("#cairo-exclusion6").removeClass("active");
        $("#cairo-visa6").removeClass("active");
    });
    $("#cairo-exclusion6").click(function () {
        $("#inclusion-cairo6").hide();
        $("#itinerary-cairo6").hide();
        $("#terms-cairo6").hide();
        $("#exclusion-cairo6").show();
        $("#visa-cairo6").hide();
        $("#cairo-inclusion6").removeClass("active");
        $("#cairo-itinerary6").removeClass("active");
        $("#cairo-terms6").removeClass("active");
        $("#cairo-exclusion6").addClass("active");
        $("#cairo-visa6").removeClass("active");
    });
    $("#cairo-visa6").click(function () {
        $("#inclusion-cairo6").hide();
        $("#itinerary-cairo6").hide();
        $("#terms-cairo6").hide();
        $("#exclusion-cairo6").hide();
        $("#visa-cairo6").show();
        $("#cairo-inclusion6").removeClass("active");
        $("#cairo-itinerary6").removeClass("active");
        $("#cairo-terms6").removeClass("active");
        $("#cairo-exclusion6").removeClass("active");
        $("#cairo-visa6").addClass("active");
    });

    $("#itinerary-cairo7").hide();
    $("#terms-cairo7").hide();
    $("#exclusion-cairo7").hide();
    $("#visa-cairo7").hide();
    $("#cairo-inclusion7").click(function () {
        $("#inclusion-cairo7").show();
        $("#itinerary-cairo7").hide();
        $("#terms-cairo7").hide();
        $("#exclusion-cairo7").hide();
        $("#visa-cairo7").hide();
        $("#cairo-inclusion7").addClass("active");
        $("#cairo-itinerary7").removeClass("active");
        $("#cairo-terms7").removeClass("active");
        $("#cairo-exclusion7").removeClass("active");
        $("#cairo-visa7").removeClass("active");
    });
    $("#cairo-itinerary7").click(function () {
        $("#inclusion-cairo7").hide();
        $("#itinerary-cairo7").show();
        $("#terms-cairo7").hide();
        $("#exclusion-cairo7").hide();
        $("#visa-cairo7").hide();
        $("#cairo-inclusion7").removeClass("active");
        $("#cairo-itinerary7").addClass("active");
        $("#cairo-terms7").removeClass("active");
        $("#cairo-exclusion7").removeClass("active");
        $("#cairo-visa7").removeClass("active");
    });
    $("#cairo-terms7").click(function () {
        $("#inclusion-cairo7").hide();
        $("#itinerary-cairo7").hide();
        $("#terms-cairo7").show();
        $("#exclusion-cairo7").hide();
        $("#visa-cairo7").hide();
        $("#cairo-inclusion7").removeClass("active");
        $("#cairo-itinerary7").removeClass("active");
        $("#cairo-terms7").addClass("active");
        $("#cairo-exclusion7").removeClass("active");
        $("#cairo-visa7").removeClass("active");
    });
    $("#cairo-exclusion7").click(function () {
        $("#inclusion-cairo7").hide();
        $("#itinerary-cairo7").hide();
        $("#terms-cairo7").hide();
        $("#exclusion-cairo7").show();
        $("#visa-cairo7").hide();
        $("#cairo-inclusion7").removeClass("active");
        $("#cairo-itinerary7").removeClass("active");
        $("#cairo-terms7").removeClass("active");
        $("#cairo-exclusion7").addClass("active");
        $("#cairo-visa7").removeClass("active");
    });
    $("#cairo-visa7").click(function () {
        $("#inclusion-cairo7").hide();
        $("#itinerary-cairo7").hide();
        $("#terms-cairo7").hide();
        $("#exclusion-cairo7").hide();
        $("#visa-cairo7").show();
        $("#cairo-inclusion7").removeClass("active");
        $("#cairo-itinerary7").removeClass("active");
        $("#cairo-terms7").removeClass("active");
        $("#cairo-exclusion7").removeClass("active");
        $("#cairo-visa7").addClass("active");
    });

    $("#itinerary-cairo8").hide();
    $("#terms-cairo8").hide();
    $("#exclusion-cairo8").hide();
    $("#visa-cairo8").hide();
    $("#cairo-inclusion8").click(function () {
        $("#inclusion-cairo8").show();
        $("#itinerary-cairo8").hide();
        $("#terms-cairo8").hide();
        $("#exclusion-cairo8").hide();
        $("#visa-cairo8").hide();
        $("#cairo-inclusion8").addClass("active");
        $("#cairo-itinerary8").removeClass("active");
        $("#cairo-terms8").removeClass("active");
        $("#cairo-exclusion8").removeClass("active");
        $("#cairo-visa8").removeClass("active");
    });
    $("#cairo-itinerary8").click(function () {
        $("#inclusion-cairo8").hide();
        $("#itinerary-cairo8").show();
        $("#terms-cairo8").hide();
        $("#exclusion-cairo8").hide();
        $("#visa-cairo8").hide();
        $("#cairo-inclusion8").removeClass("active");
        $("#cairo-itinerary8").addClass("active");
        $("#cairo-terms8").removeClass("active");
        $("#cairo-exclusion8").removeClass("active");
        $("#cairo-visa8").removeClass("active");
    });
    $("#cairo-terms8").click(function () {
        $("#inclusion-cairo8").hide();
        $("#itinerary-cairo8").hide();
        $("#terms-cairo8").show();
        $("#exclusion-cairo8").hide();
        $("#visa-cairo8").hide();
        $("#cairo-inclusion8").removeClass("active");
        $("#cairo-itinerary8").removeClass("active");
        $("#cairo-terms8").addClass("active");
        $("#cairo-exclusion8").removeClass("active");
        $("#cairo-visa8").removeClass("active");
    });
    $("#cairo-exclusion8").click(function () {
        $("#inclusion-cairo8").hide();
        $("#itinerary-cairo8").hide();
        $("#terms-cairo8").hide();
        $("#exclusion-cairo8").show();
        $("#visa-cairo8").hide();
        $("#cairo-inclusion8").removeClass("active");
        $("#cairo-itinerary8").removeClass("active");
        $("#cairo-terms8").removeClass("active");
        $("#cairo-exclusion8").addClass("active");
        $("#cairo-visa8").removeClass("active");
    });
    $("#cairo-visa8").click(function () {
        $("#inclusion-cairo8").hide();
        $("#itinerary-cairo8").hide();
        $("#terms-cairo8").hide();
        $("#exclusion-cairo8").hide();
        $("#visa-cairo8").show();
        $("#cairo-inclusion8").removeClass("active");
        $("#cairo-itinerary8").removeClass("active");
        $("#cairo-terms8").removeClass("active");
        $("#cairo-exclusion8").removeClass("active");
        $("#cairo-visa8").addClass("active");
    });
    $("#itinerary-cairo9").hide();
    $("#terms-cairo9").hide();
    $("#exclusion-cairo9").hide();
    $("#visa-cairo9").hide();
    $("#cairo-inclusion9").click(function () {
        $("#inclusion-cairo9").show();
        $("#itinerary-cairo9").hide();
        $("#terms-cairo9").hide();
        $("#exclusion-cairo9").hide();
        $("#visa-cairo9").hide();
        $("#cairo-inclusion9").addClass("active");
        $("#cairo-itinerary9").removeClass("active");
        $("#cairo-terms9").removeClass("active");
        $("#cairo-exclusion9").removeClass("active");
        $("#cairo-visa9").removeClass("active");
    });
    $("#cairo-itinerary9").click(function () {
        $("#inclusion-cairo9").hide();
        $("#itinerary-cairo9").show();
        $("#terms-cairo9").hide();
        $("#exclusion-cairo9").hide();
        $("#visa-cairo9").hide();
        $("#cairo-inclusion9").removeClass("active");
        $("#cairo-itinerary9").addClass("active");
        $("#cairo-terms9").removeClass("active");
        $("#cairo-exclusion9").removeClass("active");
        $("#cairo-visa9").removeClass("active");
    });
    $("#cairo-terms9").click(function () {
        $("#inclusion-cairo9").hide();
        $("#itinerary-cairo9").hide();
        $("#terms-cairo9").show();
        $("#exclusion-cairo9").hide();
        $("#visa-cairo9").hide();
        $("#cairo-inclusion9").removeClass("active");
        $("#cairo-itinerary9").removeClass("active");
        $("#cairo-terms9").addClass("active");
        $("#cairo-exclusion9").removeClass("active");
        $("#cairo-visa9").removeClass("active");
    });
    $("#cairo-exclusion9").click(function () {
        $("#inclusion-cairo9").hide();
        $("#itinerary-cairo9").hide();
        $("#terms-cairo9").hide();
        $("#exclusion-cairo9").show();
        $("#visa-cairo9").hide();
        $("#cairo-inclusion9").removeClass("active");
        $("#cairo-itinerary9").removeClass("active");
        $("#cairo-terms9").removeClass("active");
        $("#cairo-exclusion9").addClass("active");
        $("#cairo-visa9").removeClass("active");
    });
    $("#cairo-visa9").click(function () {
        $("#inclusion-cairo9").hide();
        $("#itinerary-cairo9").hide();
        $("#terms-cairo9").hide();
        $("#exclusion-cairo9").hide();
        $("#visa-cairo9").show();
        $("#cairo-inclusion9").removeClass("active");
        $("#cairo-itinerary9").removeClass("active");
        $("#cairo-terms9").removeClass("active");
        $("#cairo-exclusion9").removeClass("active");
        $("#cairo-visa9").addClass("active");
    });

    $("#btnFormcairo1").click(function () {
        $("#formCairo1").show();
        $("#contactCairo1").hide();
        $("#btnFormcairo1").addClass("active");
        $("#btnContactcairo1").removeClass("active");
    });
    $("#btnContactcairo1").click(function () {
        $("#formCairo1").hide();
        $("#contactCairo1").show();
        $("#btnFormcairo1").removeClass("active");
        $("#btnContactcairo1").addClass("active");
    });
    $("#btnFormcairo2").click(function () {
        $("#formCairo2").show();
        $("#contactCairo2").hide();
        $("#btnFormcairo2").addClass("active");
        $("#btnContactcairo2").removeClass("active");
    });
    $("#btnContactcairo2").click(function () {
        $("#formCairo2").hide();
        $("#contactCairo2").show();
        $("#btnFormcairo2").removeClass("active");
        $("#btnContactcairo2").addClass("active");
    });
    $("#btnFormcairo3").click(function () {
        $("#formCairo3").show();
        $("#contactCairo3").hide();
        $("#btnFormcairo3").addClass("active");
        $("#btnContactcairo3").removeClass("active");
    });
    $("#btnContactcairo3").click(function () {
        $("#formCairo3").hide();
        $("#contactCairo3").show();
        $("#btnFormcairo3").removeClass("active");
        $("#btnContactcairo3").addClass("active");
    });
    $("#btnFormcairo4").click(function () {
        $("#formCairo4").show();
        $("#contactCairo4").hide();
        $("#btnFormcairo4").addClass("active");
        $("#btnContactcairo4").removeClass("active");
    });
    $("#btnContactcairo4").click(function () {
        $("#formCairo4").hide();
        $("#contactCairo4").show();
        $("#btnFormcairo4").removeClass("active");
        $("#btnContactcairo4").addClass("active");
    });
    $("#btnFormcairo5").click(function () {
        $("#formCairo5").show();
        $("#contactCairo5").hide();
        $("#btnFormcairo5").addClass("active");
        $("#btnContactcairo5").removeClass("active");
    });
    $("#btnContactcairo5").click(function () {
        $("#formCairo5").hide();
        $("#contactCairo5").show();
        $("#btnFormcairo5").removeClass("active");
        $("#btnContactcairo5").addClass("active");
    });
    $("#btnFormcairo6").click(function () {
        $("#formCairo6").show();
        $("#contactCairo6").hide();
        $("#btnFormcairo6").addClass("active");
        $("#btnContactcairo6").removeClass("active");
    });
    $("#btnContactcairo6").click(function () {
        $("#formCairo6").hide();
        $("#contactCairo6").show();
        $("#btnFormcairo6").removeClass("active");
        $("#btnContactcairo6").addClass("active");
    });
    $("#btnFormcairo7").click(function () {
        $("#formCairo7").show();
        $("#contactCairo7").hide();
        $("#btnFormcairo7").addClass("active");
        $("#btnContactcairo7").removeClass("active");
    });
    $("#btnContactcairo7").click(function () {
        $("#formCairo7").hide();
        $("#contactCairo7").show();
        $("#btnFormcairo7").removeClass("active");
        $("#btnContactcairo7").addClass("active");
    });
    $("#btnFormcairo8").click(function () {
        $("#formCairo8").show();
        $("#contactCairo8").hide();
        $("#btnFormcairo8").addClass("active");
        $("#btnContactcairo8").removeClass("active");
    });
    $("#btnContactcairo8").click(function () {
        $("#formCairo8").hide();
        $("#contactCairo8").show();
        $("#btnFormcairo8").removeClass("active");
        $("#btnContactcairo8").addClass("active");
    });
    $("#btnFormcairo9").click(function () {
        $("#formCairo9").show();
        $("#contactCairo9").hide();
        $("#btnFormcairo9").addClass("active");
        $("#btnContactcairo9").removeClass("active");
    });
    $("#btnContactcairo9").click(function () {
        $("#formCairo9").hide();
        $("#contactCairo9").show();
        $("#btnFormcairo9").removeClass("active");
        $("#btnContactcairo9").addClass("active");
    });


    $("#link-inclusion").click(function () {
        $("#link-inclusion").addClass("active");
        $("#link-itinerary").removeClass("active");
        $("#link-optional").removeClass("active");
        $("#inclusion_div").show();
        $("#itinerary_div").hide();
        $("#optional_div").hide();
    });
    $("#link-itinerary").click(function () {
        $("#link-itinerary").addClass("active");
        $("#link-inclusion").removeClass("active");
        $("#link-optional").removeClass("active");
        $("#inclusion_div").hide();
        $("#itinerary_div").show();
        $("#optional_div").hide();
    });
    $("#link-optional").click(function () {
        $("#link-optional").addClass("active");
        $("#link-inclusion").removeClass("active");
        $("#link-itinerary").removeClass("active");
        $("#inclusion_div").hide();
        $("#itinerary_div").hide();
        $("#optional_div").show();
    });


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
        $("#link-inclusion0").addClass("active");
        $("#link-itinerary0").removeClass("active");
        $("#link-terms0").removeClass("active");
        $("#link-details0").removeClass("active");
        $("#link-exclusion0").removeClass("active");
        $("#link-visareq0").removeClass("active");
        $("#link-hotels0").removeClass("active");
        $("#visareq_div0").hide();
        $("#inclusion_div0").show();
        $("#itinerary_div0").hide();
        $("#optional_div0").hide();
        $("#exclusion_div0").hide();
        $("#flightDetails_div0").hide();
        $("#hotels_div0").hide();
    });
    $("#link-itinerary0").click(function () {
        $("#link-itinerary0").addClass("active");
        $("#link-inclusion0").removeClass("active");
        $("#link-terms0").removeClass("active");
        $("#link-details0").removeClass("active");
        $("#link-exclusion0").removeClass("active");
        $("#link-visareq0").removeClass("active");
        $("#link-hotels0").removeClass("active");
        $("#visareq_div0").hide();
        $("#inclusion_div0").hide();
        $("#itinerary_div0").show();
        $("#optional_div0").hide();
        $("#exclusion_div0").hide();
        $("#flightDetails_div0").hide();
        $("#hotels_div0").hide();
    });
    $("#link-terms0").click(function () {
        $("#link-terms0").addClass("active");
        $("#link-inclusion0").removeClass("active");
        $("#link-itinerary0").removeClass("active");
        $("#link-details0").removeClass("active");
        $("#link-exclusion0").removeClass("active");
        $("#link-visareq0").removeClass("active");
        $("#link-hotels0").removeClass("active");
        $("#visareq_div0").hide();
        $("#inclusion_div0").hide();
        $("#itinerary_div0").hide();
        $("#optional_div0").show();
        $("#exclusion_div0").hide();
        $("#flightDetails_div0").hide();
        $("#hotels_div0").hide();
    });
    $("#link-exclusion0").click(function () {
        $("#link-exclusion0").addClass("active");
        $("#link-inclusion0").removeClass("active");
        $("#link-terms0").removeClass("active");
        $("#link-details0").removeClass("active");
        $("#link-visareq0").removeClass("active");
        $("#link-hotels0").removeClass("active");
        $("#visareq_div0").hide();
        $("#inclusion_div0").hide();
        $("#itinerary_div0").hide();
        $("#optional_div0").hide();
        $("#exclusion_div0").show();
        $("#flightDetails_div0").hide();
        $("#hotels_div0").hide();
    });
    $("#link-details0").click(function () {
        $("#link-details0").addClass("active");
        $("#link-inclusion0").removeClass("active");
        $("#link-terms0").removeClass("active");
        $("#link-itinerary0").removeClass("active");
        $("#link-exclusion0").removeClass("active");
        $("#link-visareq0").removeClass("active");
        $("#link-hotels0").removeClass("active");
        $("#visareq_div0").hide();
        $("#inclusion_div0").hide();
        $("#itinerary_div0").hide();
        $("#optional_div0").hide();
        $("#exclusion_div0").hide();
        $("#flightDetails_div0").show();
        $("#hotels_div0").hide();
    });
    $("#link-visareq0").click(function () {
        $("#link-visareq0").addClass("active");
        $("#link-details0").removeClass("active");
        $("#link-inclusion0").removeClass("active");
        $("#link-terms0").removeClass("active");
        $("#link-itinerary0").removeClass("active");
        $("#link-exclusion0").removeClass("active");
        $("#link-hotels0").removeClass("active");
        $("#inclusion_div0").hide();
        $("#itinerary_div0").hide();
        $("#optional_div0").hide();
        $("#exclusion_div0").hide();
        $("#flightDetails_div0").hide();
        $("#visareq_div0").show();
        $("#hotels_div0").hide();
    });

    // ---------------------- //
    $("#link-inclusion5").click(function () {
        $("#link-inclusion5").addClass("active");
        $("#link-itinerary5").removeClass("active");
        $("#link-terms5").removeClass("active");
        $("#link-details5").removeClass("active");
        $("#link-exclusion5").removeClass("active");
        $("#inclusion_div5").show();
        $("#itinerary_div5").hide();
        $("#optional_div5").hide();
        $("#exclusion_div5").hide();
        $("#flightDetails_div5").hide();
    });
    $("#link-itinerary5").click(function () {
        $("#link-itinerary5").addClass("active");
        $("#link-inclusion5").removeClass("active");
        $("#link-terms5").removeClass("active");
        $("#link-details5").removeClass("active");
        $("#link-exclusion5").removeClass("active");
        $("#inclusion_div5").hide();
        $("#itinerary_div5").show();
        $("#optional_div5").hide();
        $("#exclusion_div5").hide();
        $("#flightDetails_div5").hide();
    });
    $("#link-terms5").click(function () {
        $("#link-terms5").addClass("active");
        $("#link-inclusion5").removeClass("active");
        $("#link-itinerary5").removeClass("active");
        $("#link-details5").removeClass("active");
        $("#link-exclusion5").removeClass("active");
        $("#inclusion_div5").hide();
        $("#itinerary_div5").hide();
        $("#optional_div5").show();
        $("#exclusion_div5").hide();
        $("#flightDetails_div5").hide();
    });
    $("#link-exclusion5").click(function () {
        $("#link-exclusion5").addClass("active");
        $("#link-inclusion5").removeClass("active");
        $("#link-terms5").removeClass("active");
        $("#link-details5").removeClass("active");
        $("#inclusion_div5").hide();
        $("#itinerary_div5").hide();
        $("#optional_div5").hide();
        $("#exclusion_div5").show();
        $("#flightDetails_div5").hide();
    });
    $("#link-details5").click(function () {
        $("#link-details5").addClass("active");
        $("#link-inclusion5").removeClass("active");
        $("#link-terms5").removeClass("active");
        $("#link-itinerary5").removeClass("active");
        $("#link-exclusion5").removeClass("active");
        $("#inclusion_div5").hide();
        $("#itinerary_div5").hide();
        $("#optional_div5").hide();
        $("#exclusion_div5").hide();
        $("#flightDetails_div5").show();
    });
    // ---------------------- //

    // --------------------- //
    $("#link-inclusion6").click(function () {
        $("#link-inclusion6").addClass("active");
        $("#link-itinerary6").removeClass("active");
        $("#link-terms6").removeClass("active");
        $("#link-details6").removeClass("active");
        $("#link-exclusion6").removeClass("active");
        $("#inclusion_div6").show();
        $("#itinerary_div6").hide();
        $("#optional_div6").hide();
        $("#exclusion_div6").hide();
        $("#flightDetails_div6").hide();
    });
    $("#link-itinerary6").click(function () {
        $("#link-itinerary6").addClass("active");
        $("#link-inclusion6").removeClass("active");
        $("#link-terms6").removeClass("active");
        $("#link-details6").removeClass("active");
        $("#link-exclusion6").removeClass("active");
        $("#inclusion_div6").hide();
        $("#itinerary_div6").show();
        $("#optional_div6").hide();
        $("#exclusion_div6").hide();
        $("#flightDetails_div6").hide();
    });
    $("#link-terms6").click(function () {
        $("#link-terms6").addClass("active");
        $("#link-inclusion6").removeClass("active");
        $("#link-itinerary6").removeClass("active");
        $("#link-details6").removeClass("active");
        $("#link-exclusion6").removeClass("active");
        $("#inclusion_div6").hide();
        $("#itinerary_div6").hide();
        $("#optional_div6").show();
        $("#exclusion_div6").hide();
        $("#flightDetails_div6").hide();
    });
    $("#link-exclusion6").click(function () {
        $("#link-exclusion6").addClass("active");
        $("#link-inclusion6").removeClass("active");
        $("#link-terms6").removeClass("active");
        $("#link-details6").removeClass("active");
        $("#inclusion_div6").hide();
        $("#itinerary_div6").hide();
        $("#optional_div6").hide();
        $("#exclusion_div6").show();
        $("#flightDetails_div6").hide();
    });
    $("#link-details6").click(function () {
        $("#link-details6").addClass("active");
        $("#link-inclusion6").removeClass("active");
        $("#link-terms6").removeClass("active");
        $("#link-itinerary6").removeClass("active");
        $("#link-exclusion6").removeClass("active");
        $("#inclusion_div6").hide();
        $("#itinerary_div6").hide();
        $("#optional_div6").hide();
        $("#exclusion_div6").hide();
        $("#flightDetails_div6").show();
    });
    // --------------------- //
    // --------------------- //
    $("#link-inclusion7").click(function () {
        $("#link-inclusion7").addClass("active");
        $("#link-itinerary7").removeClass("active");
        $("#link-terms7").removeClass("active");
        $("#link-details7").removeClass("active");
        $("#link-exclusion7").removeClass("active");
        $("#inclusion_div7").show();
        $("#itinerary_div7").hide();
        $("#optional_div7").hide();
        $("#exclusion_div7").hide();
        $("#flightDetails_div7").hide();
    });
    $("#link-itinerary7").click(function () {
        $("#link-itinerary7").addClass("active");
        $("#link-inclusion7").removeClass("active");
        $("#link-terms7").removeClass("active");
        $("#link-details7").removeClass("active");
        $("#link-exclusion7").removeClass("active");
        $("#inclusion_div7").hide();
        $("#itinerary_div7").show();
        $("#optional_div7").hide();
        $("#exclusion_div7").hide();
        $("#flightDetails_div7").hide();
    });
    $("#link-terms7").click(function () {
        $("#link-terms7").addClass("active");
        $("#link-inclusion7").removeClass("active");
        $("#link-itinerary7").removeClass("active");
        $("#link-details7").removeClass("active");
        $("#link-exclusion7").removeClass("active");
        $("#inclusion_div7").hide();
        $("#itinerary_div7").hide();
        $("#optional_div7").show();
        $("#exclusion_div7").hide();
        $("#flightDetails_div7").hide();
    });
    $("#link-exclusion7").click(function () {
        $("#link-exclusion7").addClass("active");
        $("#link-inclusion7").removeClass("active");
        $("#link-terms7").removeClass("active");
        $("#link-details7").removeClass("active");
        $("#inclusion_div7").hide();
        $("#itinerary_div7").hide();
        $("#optional_div7").hide();
        $("#exclusion_div7").show();
        $("#flightDetails_div7").hide();
    });
    $("#link-details7").click(function () {
        $("#link-details7").addClass("active");
        $("#link-inclusion7").removeClass("active");
        $("#link-terms7").removeClass("active");
        $("#link-itinerary7").removeClass("active");
        $("#link-exclusion7").removeClass("active");
        $("#inclusion_div7").hide();
        $("#itinerary_div7").hide();
        $("#optional_div7").hide();
        $("#exclusion_div7").hide();
        $("#flightDetails_div7").show();
    });
    // --------------------- //
    $("#KnsaiCUbtn").click(function () {
        $("#KnsaiCUbtn").addClass("active");
        $("#KnsaiBNbtn").removeClass("active");
        $("#KnsaiCUdiv").show();
        $("#KnsaiBNdiv").hide();
    });
    $("#KnsaiBNbtn").click(function () {
        $("#KnsaiBNbtn").addClass("active");
        $("#KnsaiCUbtn").removeClass("active");
        $("#KnsaiBNdiv").show();
        $("#KnsaiCUdiv").hide();
    });
    // --------------------- //

    $("#link-inclusion1").click(function () {
        $("#link-inclusion1").addClass("active");
        $("#link-itinerary1").removeClass("active");
        $("#link-optional1").removeClass("active");
        $("#inclusion_div1").show();
        $("#itinerary_div1").hide();
        $("#optional_div1").hide();
    });
    $("#link-itinerary1").click(function () {
        $("#link-itinerary1").addClass("active");
        $("#link-inclusion1").removeClass("active");
        $("#link-optional1").removeClass("active");
        $("#inclusion_div1").hide();
        $("#itinerary_div1").show();
        $("#optional_div1").hide();
    });
    $("#link-optional1").click(function () {
        $("#link-optional1").addClass("active");
        $("#link-inclusion1").removeClass("active");
        $("#link-itinerary1").removeClass("active");
        $("#inclusion_div1").hide();
        $("#itinerary_div1").hide();
        $("#optional_div1").show();
    });

    $("#link-inclusion2").click(function () {
        $("#link-inclusion2").addClass("active");
        $("#link-itinerary2").removeClass("active");
        $("#link-optional2").removeClass("active");
        $("#inclusion_div2").show();
        $("#itinerary_div2").hide();
        $("#optional_div2").hide();
    });
    $("#link-itinerary2").click(function () {
        $("#link-itinerary2").addClass("active");
        $("#link-inclusion2").removeClass("active");
        $("#link-optional2").removeClass("active");
        $("#inclusion_div2").hide();
        $("#itinerary_div2").show();
        $("#optional_div2").hide();
    });
    $("#link-optional2").click(function () {
        $("#link-optional2").addClass("active");
        $("#link-inclusion2").removeClass("active");
        $("#link-itinerary2").removeClass("active");
        $("#inclusion_div2").hide();
        $("#itinerary_div2").hide();
        $("#optional_div2").show();
    });

    $("#link-inclusion3").click(function () {
        $("#link-inclusion3").addClass("active");
        $("#link-itinerary3").removeClass("active");
        $("#link-optional3").removeClass("active");
        $("#inclusion_div3").show();
        $("#itinerary_div3").hide();
        $("#optional_div3").hide();
    });
    $("#link-itinerary3").click(function () {
        $("#link-itinerary3").addClass("active");
        $("#link-inclusion3").removeClass("active");
        $("#link-optional3").removeClass("active");
        $("#inclusion_div3").hide();
        $("#itinerary_div3").show();
        $("#optional_div3").hide();
    });
    $("#link-optional3").click(function () {
        $("#link-optional3").addClass("active");
        $("#link-inclusion3").removeClass("active");
        $("#link-itinerary3").removeClass("active");
        $("#inclusion_div3").hide();
        $("#itinerary_div3").hide();
        $("#optional_div3").show();
    });

    $("#link-inclusion4").click(function () {
        $("#link-inclusion4").addClass("active");
        $("#link-itinerary4").removeClass("active");
        $("#link-optional4").removeClass("active");
        $("#inclusion_div4").show();
        $("#itinerary_div4").hide();
        $("#optional_div4").hide();
    });
    $("#link-itinerary4").click(function () {
        $("#link-itinerary4").addClass("active");
        $("#link-inclusion4").removeClass("active");
        $("#link-optional4").removeClass("active");
        $("#inclusion_div4").hide();
        $("#itinerary_div4").show();
        $("#optional_div4").hide();
    });
    $("#link-optional4").click(function () {
        $("#link-optional4").addClass("active");
        $("#link-inclusion4").removeClass("active");
        $("#link-itinerary4").removeClass("active");
        $("#inclusion_div4").hide();
        $("#itinerary_div4").hide();
        $("#optional_div4").show();
    });

    $("#user-links").click(function () {
        $("#user-links").addClass("active");
        $("#user-links0").removeClass("active");
        $("#user-links1").removeClass("active");
        $("#RoundTrip").show();
        $("#OneWay").hide();
        $("#MultiCity").hide();
    });
    $("#user-links0").click(function () {
        $("#user-links0").addClass("active");
        $("#user-links").removeClass("active");
        $("#user-links1").removeClass("active");
        $("#OneWay").show();
        $("#RoundTrip").hide();
        $("#MultiCity").hide();
    });
    $("#user-links1").click(function () {
        $("#user-links1").addClass("active");
        $("#user-links").removeClass("active");
        $("#user-links0").removeClass("active");
        $("#MultiCity").show();
        $("#OneWay").hide();
        $("#RoundTrip").hide();
    });

    $("#_flights_").click(function () {
        $("#_flightAndHotels_").removeClass("active");
        $("#_flights_").addClass("active");
        $("#Flights").show();
        $("#FlightsAndHotels").hide();
    });
    $("#_flightAndHotels_").click(function () {
        $("#_flightAndHotels_").addClass("active");
        $("#_flights_").removeClass("active");
        $("#Flights").hide();
        $("#FlightsAndHotels").show();
    });

    $("#pssngerCounts").css("cursor", "not-allowed");
    $("#_pssngerCounts").css("cursor", "not-allowed");
    $("#PssngerCounts").css("cursor", "not-allowed");
    $("#_psSngerCounts").css("cursor", "not-allowed");

    $("#dDate").prop("readonly", "readonly");
    $("#dDate").css("cursor", "not-allowed");

    $("#rDate").prop("readonly", "readonly");
    $("#rDate").prop("disabled", "disabled");
    $("#rDate").css("cursor", "not-allowed");

    $("#_-dDate").prop("readonly", "readonly");
    $("#_-dDate").css("cursor", "not-allowed");

    $("#_-rDate").prop("readonly", "readonly");
    $("#_-rDate").prop("disabled", "disabled");
    $("#_-rDate").css("cursor", "not-allowed");

    $("#_dDate").prop("readonly", "readonly")
    $("#_dDate").css("cursor", "not-allowed");

    $("#dDate_").prop("readonly", "readonly");
    $("#dDate_").css("cursor", "not-allowed");

    $("#dDate1_").prop("readonly", "readonly");
    $("#dDate1_").prop("disabled", "disabled");
    $("#dDate1_").css("cursor", "not-allowed");

    $("#dDate2_").prop("readonly", "readonly");
    $("#dDate2_").prop("disabled", "disabled");
    $("#dDate2_").css("cursor", "not-allowed");

    $("#dDate3_").prop("readonly", "readonly");
    $("#dDate3_").prop("disabled", "disabled");
    $("#dDate3_").css("cursor", "not-allowed");

    $("#dDate4_").prop("readonly", "readonly");
    $("#dDate4_").prop("disabled", "disabled");
    $("#dDate4_").css("cursor", "not-allowed");

    
    $("#Bdate0").prop("readonly", "readonly");
    $("#Bdate0").css("cursor", "not-allowed");

    $("#Bdate01").prop("readonly", "readonly");
    $("#Bdate01").css("cursor", "not-allowed");

    $("#ExpryDate").prop("readonly", "readonly");
    $("#ExpryDate").css("cursor", "not-allowed");

    $("#ExpryDate0").prop("readonly", "readonly");
    $("#ExpryDate0").css("cursor", "not-allowed");

    $("#IdprtDate").prop("readonly", "readonly");
    $("#IdprtDate").css("cursor", "not-allowed");

    $("#IdprtDate0").prop("readonly", "readonly");
    $("#IdprtDate0").css("cursor", "not-allowed");

    $("#EduDAte").prop("readonly", "readonly");
    $("#EduDAte").css("cursor", "not-allowed");

    $("#RreserveDate").prop("readonly", "readonly");
    $("#RreserveDate").css("cursor", "not-allowed");

    $("#RreserveDate0").prop("readonly", "readonly");
    $("#RreserveDate0").css("cursor", "not-allowed");

    $("#ToId1_").prop("disabled", "disabled");
    $("#ToId1_").css("cursor", "not-allowed");
    $("#FromId2_").prop("disabled", "disabled");
    $("#FromId2_").css("cursor", "not-allowed");
    $("#ToId2_").prop("disabled", "disabled");
    $("#ToId2_").css("cursor", "not-allowed");
    $("#FromId3_").prop("disabled", "disabled");
    $("#FromId3_").css("cursor", "not-allowed");
    $("#ToId3_").prop("disabled", "disabled");
    $("#ToId3_").css("cursor", "not-allowed");
    $("#FromId4").prop("disabled", "disabled");
    $("#FromId4").css("cursor", "not-allowed");
    $("#ToId4_").prop("disabled", "disabled");
    $("#ToId4_").css("cursor", "not-allowed");

    $("#FromId1_, #ToId1_, #FromId2_, #ToId2_, #FromId3_, #ToId3_, #FromId4").keyup(function () {
        if ($("#FromId1_").val() != "" || $("#FromId1_").val() != 0 || $("#FromId1_").val() != null) {
            $("#ToId1_").prop("disabled", false);
            $("#ToId1_").css("cursor", "default");
        }
        else {
            $("#ToId1_").prop("disabled", "disabled");
            $("#ToId1_").css("cursor", "not-allowed");
            $("#ToId1_").val("");
        }
        if ($("#ToId1_").val() != "" || $("#ToId1_").val() != 0 || $("#ToId1_").val() != null) {
            $("#FromId2_").prop("disabled", false);
            $("#FromId2_").css("cursor", "default");
        }
        else {
            $("#FromId2_").prop("disabled", "disabled");
            $("#FromId2_").css("cursor", "not-allowed");
            $("#FromId2_").val("");
        }
        if ($("#FromId2_").val() != "" || $("#FromId2_").val() != 0 || $("#FromId2_").val() != null) {
            $("#ToId2_").prop("disabled", false);
            $("#ToId2_").css("cursor", "default");
        }
        else {
            $("#ToId2_").prop("disabled", "disabled");
            $("#ToId2_").css("cursor", "not-allowed");
            $("#ToId2_").val("");
        }
        if ($("#ToId2_").val() != "" || $("#ToId2_").val() != 0 || $("#ToId2_").val() != null) {
            $("#FromId3_").prop("disabled", false);
            $("#FromId3_").css("cursor", "default");
        }
        else {
            $("#FromId3_").prop("disabled", "disabled");
            $("#FromId3_").css("cursor", "not-allowed");
            $("#FromId3_").val("");
        }
        if ($("#FromId3_").val() != "" || $("#FromId3_").val() != 0 || $("#FromId3_").val() != null) {
            $("#ToId3_").prop("disabled", false);
            $("#ToId3_").css("cursor", "default");
        }
        else {
            $("#ToId3_").prop("disabled", "disabled");
            $("#ToId3_").css("cursor", "not-allowed");
            $("#ToId3_").val("");
        }
        if ($("#ToId3_").val() != "" || $("#ToId3_").val() != 0 || $("#ToId3_").val() != null) {
            $("#FromId4").prop("disabled", false);
            $("#FromId4").css("cursor", "default");
        }
        else {
            $("#FromId4").prop("disabled", "disabled");
            $("#FromId4").css("cursor", "not-allowed");
            $("#FromId4").val("");
        }
        if ($("#FromId4").val() != "" || $("#FromId4").val() != 0 || $("#FromId4").val() != null) {
            $("#ToId4_").prop("disabled", false);
            $("#ToId4_").css("cursor", "default");
        }
        else {
            $("#ToId4_").prop("disabled", "disabled");
            $("#ToId4_").css("cursor", "not-allowed");
            $("#ToId4_").val("");
        }
    });
    var _count, _count0, _count1, _total = 0;

    $("#_Adult, #_Child, #_Infant").keyup(function () {
        _count = parseInt($("#_Adult").val());
        _count0 = parseInt($("#_Child").val());
        _count1 = parseInt($("#_Infant").val());
        if (!isNaN(_count) && isNaN(_count0) && isNaN(_count1)) {
            _total = parseInt(_count);
        }
        else if (isNaN(_count) && !isNaN(_count0) && isNaN(_count1)) {
            _total = parseInt(_count0);
        }
        else if (isNaN(_count) && isNaN(_count0) && !isNaN(_count1)) {
            _total = parseInt(_count1);
        }
        else if (!isNaN(_count) && !isNaN(_count0) && isNaN(_count1)) {
            _total = parseInt(_count) + parseInt(_count0);
        }
        else if (!isNaN(_count) && !isNaN(_count0) && !isNaN(_count1)) {
            _total = parseInt(_count) + parseInt(_count0) + parseInt(_count1);
        }
        else if (isNaN(_count) && !isNaN(_count0) && !isNaN(_count1)) {
            _total = parseInt(_count0) + parseInt(_count1);
        }
        else if (!isNaN(_count) && isNaN(_count0) && !isNaN(_count1)) {
            _total = parseInt(_count) + parseInt(_count1);
        }
        else {
            _total = 0;
        }
        if (isNaN(_total)) {
            _total = 0;
        }
        $("#_pssngerCounts").val(_total + " Passenger(s)");
        $("#_pSsngeRCounts").val(_total + "," + _count + "," + _count0 + "," + _count1);
    }).keyup();

    var count_, count0_, count1_, total_ = 0;

    $("#Adult, #Child, #Infant").keyup(function () {
        count_ = parseInt($("#Adult").val());
        count0_ = parseInt($("#Child").val());
        count1_ = parseInt($("#Infant").val());
        if (!isNaN(count_) && isNaN(count0_) && isNaN(count1_)) {
            total_ = parseInt(count_);
        }
        else if (isNaN(count_) && !isNaN(count0_) && isNaN(count1_)) {
            total_ = parseInt(count0_);
        }
        else if (isNaN(count_) && isNaN(count0_) && !isNaN(count1_)) {
            total_ = parseInt(count1_);
        }
        else if (!isNaN(count_) && !isNaN(count0_) && isNaN(count1_)) {
            total_ = parseInt(count_) + parseInt(count0_);
        }
        else if (!isNaN(count_) && !isNaN(count0_) && !isNaN(count1_)) {
            total_ = parseInt(count_) + parseInt(count0_) + parseInt(count1_);
        }
        else if (isNaN(count_) && !isNaN(count0_) && !isNaN(count1_)) {
            total_ = parseInt(count0_) + parseInt(count1_);
        }
        else if (!isNaN(count_) && isNaN(count0_) && !isNaN(count1_)) {
            total_ = parseInt(count_) + parseInt(count1_);
        }
        else {
            total_ = 0;
        }
        if (isNaN(total_)) {
            total_ = 0;
        }
        $("#PssngerCounts").val(total_ + " Passenger(s)");
        $("#Pssnger_Counts").val(total_ + "," + count_ + "," + count0_ + "," + count1_);
    }).keyup();

    var count, count0, count1, total = 0;

    $("#-Adult, #-Child, #-Infant").keyup(function () {
        count = parseInt($("#-Adult").val());
        count0 = parseInt($("#-Child").val());
        count1 = parseInt($("#-Infant").val());
        if (!isNaN(count) && isNaN(count0) && isNaN(count1)) {
            total = parseInt(count);
        }
        else if (isNaN(count) && !isNaN(count0) && isNaN(count1)) {
            total = parseInt(count0);
        }
        else if (isNaN(count) && isNaN(count0) && !isNaN(count1)) {
            total = parseInt(count1);
        }
        else if (!isNaN(count) && !isNaN(count0) && isNaN(count1)) {
            total = parseInt(count) + parseInt(count0);
        }
        else if (!isNaN(count) && !isNaN(count0) && !isNaN(count1)) {
            total = parseInt(count) + parseInt(count0) + parseInt(count1);
        }
        else if (isNaN(count) && !isNaN(count0) && !isNaN(count1)) {
            total = parseInt(count0) + parseInt(count1);
        }
        else if (!isNaN(count) && isNaN(count0) && !isNaN(count1)) {
            total = parseInt(count) + parseInt(count1);
        }
        else {
            total = 0;
        }
        if (isNaN(total)) {
            total = 0;
        }
        $("#pssngerCounts").val(total + " Passenger(s)");
        $("#passenger_counts").val(total + "," + count + "," + count0 + "," + count1);
    }).keyup();

    $("#guestCount").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#guestError").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#guestCount0").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#guestError0").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#-Adult").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#-Errmsg01").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#-Child").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#-Errmsg02").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#-Infant").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#-Errmsg03").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#_Adult").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#_Errmsg01").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#_Child").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#_Errmsg02").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#_Infant").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#_Errmsg03").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#adult").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $(".adult-error").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#child").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $(".child-error").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#adult0").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $(".adult-error0").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#child0").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $(".child-error0").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#teacherCount").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#teacherErr").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#studentsCount").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#studentErr").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#_-Adults-").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#_-Childs-").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg1").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#_-Infants-").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg2").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#Adult").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg_").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#Child").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg1_").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    $("#Infant").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#Errmsg2_").html("Digits Only!").show().fadeOut("slow");
            return false;
        }
    });
    
    $("#myCarousel").carousel();
    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#myCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function () {
        $("#myCarousel").carousel("next");
    });

    $("#btnInquireRoundTrip").click(function (e) {
        e.preventDefault(e);
        $("#btnInquireRoundTrip").hide();
        $("#btnInquireRoundTripLoad").show();
        var RtripForm = $("#roundtripForm");
        if (!RtripForm.valid() || total == 0 || isNaN(total) || $("#classTypes").val() == 0) {
            if (total == 0 || isNaN(total)) {
                $("#pssngerCountsError").html("Please enter a passenger counts");
            }
            if ($("#classTypes").val() == 0) {
                $("#classTypesError").html("Please select your desired class.");
            }
            $("#btnInquireRoundTrip").show();
            $("#btnInquireRoundTripLoad").hide();
            return false;
        }
        var url = RtripForm.attr("action");
        var formData = RtripForm.serialize();
        var from = "top";
        var align = "right";
        $.post(url, formData, function (data) {
            $.notify({
                icon: "add_alert",
                message: data

                    }, {
                    type: 'danger',
                    timer: 4000,
                    placement: {
                        from: from,
                        align: align
                    }
            });
            $("#btnInquireRoundTrip").show();
            $("#btnInquireRoundTripLoad").hide();
            RtripForm.trigger("reset");
        });
    });

    $("#btnInquireFligthHotel").click(function (e) {
        e.preventDefault(e);
        $("#btnInquireFligthHotel").hide();
        $("#btnInquireFligthHotelLoad").show();
        var FlghtHotelForm = $("#FlghtHotelForm");
        if (!FlghtHotelForm.valid() || TotalCount == 0 || isNaN(TotalCount)) {
            if (TotalCount == 0 || isNaN(TotalCount)) {
                $("#fhPCountsError").html("Please enter a passenger counts.")
            }
            $("#btnInquireFligthHotel").show();
            $("#btnInquireFligthHotelLoad").hide();
            return false;
        }
        var url = FlghtHotelForm.attr("action");
        var FormData = FlghtHotelForm.serialize();
        var from = "top";
        var align = "right";
        $.post(url, FormData, function (data) {
            $.notify({
                icon: "add_alert",
                message: data

            }, {
                    type: 'danger',
                    timer: 4000,
                    placement: {
                        from: from,
                        align: align
                    }
                });
            $("#btnInquireFligthHotel").show();
            $("#btnInquireFligthHotelLoad").hide();
            FlghtHotelForm.trigger("reset");
        });
    });

    $("#btnOneWay").click(function (e) {
        e.preventDefault(e);
        $("#btnOneWay").hide();
        $("#btnOneWayLoad").show();
        var oneWayForm = $("#oneWayForm");
        if (!oneWayForm.valid() || _total == 0 || isNaN(_total) || $("#_classTypes").val() == 0) {
            if (_total == 0 || isNaN(_total)) {
                $("#_pSsngeRCountsError").html("Please enter a passenger counts.");
            }
            if ($("#_classTypes").val() == 0) {
                $("#_classTypesError").html("Please you desired class");
            }
            $("#btnOneWay").show();
            $("#btnOneWayLoad").hide();
            return false;
        }
        var url = oneWayForm.attr("action");
        var formData = oneWayForm.serialize();
        var from = "top";
        var align = "right";
        $.post(url, formData, function (data) {
            $.notify({
                icon: "add_alert",
                message: data

            }, {
                    type: 'danger',
                    timer: 4000,
                    placement: {
                        from: from,
                        align: align
                    }
                });
            $("#btnOneWay").show();
            $("#btnOneWayLoad").hide();
            oneWayForm.trigger("reset");
        });
    });

    $("#btnMultiCityInquire").click(function (e) {
        e.preventDefault(e);
        $("#btnMultiCityInquire").hide();
        $("#btnMultiCityLoad").show();
        var multiCityForm = $("#multiCityForm");
        if (!multiCityForm.valid() || total_ == 0 || isNaN(total_) || $("#classTypes_").val() == 0
            || ($.trim($("#FromId1_").val()) != "" && $("#ToId1_").val() == "")
            || ($.trim($("#FromId2_").val()) != "" && $("#ToId2_").val() == "")
            || ($.trim($("#FromId3_").val()) != "" && $("#ToId3_").val() == "")
            || ($.trim($("#FromId4_").val()) != "" && $("#ToId4_").val() == "")) {

            if ($.trim($("#FromId1_").val()) != "" && $("#ToId1_").val() == "") {
                $("#ToId1_Error").html("Please enter a destination");
            } 
            if ($.trim($("#FromId2_").val()) != "" && $("#ToId2_").val() == "") {
                $("#ToId2_Error").html("Please enter a destination");
            }
            if ($.trim($("#FromId3_").val()) != "" && $("#ToId3_").val() == "") {
                $("#ToId3_Error").html("Please enter a destination");
            }
            if ($.trim($("#FromId4_").val()) != "" && $("#ToId4_").val() == "") {
                $("#ToId4_Error").html("Please enter a destination");
            }
            if (total_ == 0 || isNaN(total_)) {
                $("#PssngerCountsError").html("Please passenger counts");
            }
            if ($("#classTypes_").val() == 0) {
                $("#classTypes_Error").html("Please select a cabin class.");
            }
            $("#btnMultiCityInquire").show();
            $("#btnMultiCityLoad").hide();
            return false;
        }
        var url = multiCityForm.attr("action");
        var formData = multiCityForm.serialize();
        var from = "top";
        var align = "right";
        $.post(url, formData, function (data) {
            $.notify({
                icon: "add_alert",
                message: data

            }, {
                    type: 'danger',
                    timer: 4000,
                    placement: {
                        from: from,
                        align: align
                    }
                });
            $("#btnMultiCityInquire").show();
            $("#btnMultiCityLoad").hide();
            multiCityForm.trigger("reset");
        });
    });
    
    $("#emailAdd").keyup(function () {
            var emailAdd = $("#emailAdd").val();
            var email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (emailAdd != "" && !email.test(emailAdd)) {
                $(".emailError").show();
                $(".emailError").html("Invalid email");
                $("#emailAdd").css("border-color", "#f23345");
                return false;
            }
            else if (email.test(emailAdd)) {
                $(".emailError").hide();
                $("#emailAdd").css("border-color", "#4cff00");
            }
            else {
                $(".emailError").hide();
                $("#emailAdd").css("border-color", "#ced4da");
                return false
            }
      
    }).keyup();

    $("#contactNo").keyup(function () {
        var phone = $("#contactNo").val();
        var phoneNumber = /[0-9-()+]{3,20}/; 
        if (phone != "" && !phoneNumber.test(phone)) {
            $(".phoneError").show();
            $(".phoneError").html("Invalid phone number");
            $("#contactNo").css("border-color", "#f23345");
            return false;
        }
        else if (phoneNumber.test(phone)) {
            $(".phoneError").hide();
            $("#contactNo").css("border-color", "#4cff00");
        }
        else {
            $(".phoneError").hide();
            $("#contactNo").css("border-color", "#ced4da");
            return false;
        }
    }).keyup();

    $("#landlineNo").keyup(function () {
        var tel = $("#landlineNo").val();
        var phoneNumber = /[0-9-()+]{3,20}/;
        if (tel != "" && !phoneNumber.test(tel)) {
            $(".telError").show();
            $(".telError").html("Invalid telephone number");
            $("#landlineNo").css("border-color", "#f23345");
            return false;
        }
        else if (phoneNumber.test(tel)) {
            $(".telError").hide();
            $("#landlineNo").css("border-color", "#4cff00");
        }
        else {
            $(".telError").hide();
            $("#landlineNo").css("border-color", "#ced4da");
        }
    }).keyup();

    $("#fname").keyup(function () {
        var fname = $("#fname").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\']+)$/; 
        if (fname != "" && !htmlTagRegex.test(fname)) {
            $(".fnameError").show();
            $(".fnameError").html("Invalid first name");
            $("#fname").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(fname)) {
            $(".fnameError").hide();
            $("#fname").css("border-color", "#4cff00");
        }
        else {
            $(".fnameError").hide();
            $("#fname").css("border-color", "#ced4da");
            return false;
        }
    }).keyup();

    $("#lname").keyup(function () {
        var lname = $("#lname").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\']+)$/;
        if (lname != "" && !htmlTagRegex.test(lname)) {
            $(".lnameError").show();
            $(".lnameError").html("Invalid last name");
            $("#lname").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(lname)) {
            $(".lnameError").hide();
            $("#lname").css("border-color", "#4cff00");
        }
        else {
            $(".lnameError").hide();
            $("#lname").css("border-color", "#ced4da");
            return false;
        }
    }).keyup();

    $("#mname").keyup(function () {
        var mname = $("#mname").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\']+)$/;
        if (mname != "" && !htmlTagRegex.test(mname)) {
            $(".mnameError").show();
            $(".mnameError").html("Invalid middle name");
            $("#mname").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(lname)) {
            $(".mnameError").hide();
            $("#mname").css("border-color", "#4cff00");
        }
        else {
            $(".mnameError").hide();
            $("#mname").css("border-color", "#ced4da");
        }
    }).keyup();

    $("#fullAdress").keyup(function () {
        var fullAdress = $("#fullAdress").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-]+)$/;
        if (fullAdress != "" && !htmlTagRegex.test(fullAdress)) {
            $(".fullAdressError").show();
            $(".fullAdressError").html("Invalid text format");
            $("#fullAdress").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(fullAdress)) {
            $(".fullAdressError").hide();
            $("#fullAdress").css("border-color", "#4cff00");
        }
        else {
            $(".fullAdressError").hide();
            $("#fullAdress").css("border-color", "#ced4da");
            return false;
        }
    }).keyup();

    $("#concern").keyup(function () {
        var concern = $("#concern").val();
        var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-]+)$/;
        if (concern != "" && !htmlTagRegex.test(concern)) {
            $(".concernError").show();
            $(".concernError").html("Invalid text format");
            $("#concern").css("border-color", "#f23345");
            return false;
        }
        else if (htmlTagRegex.test(concern)) {
            $(".concernError").hide();
            $("#concern").css("border-color", "#4cff00");
        }
        else {
            $(".concernError").hide();
            $("#concern").css("border-color", "#ced4da");
        }
    }).keyup();

    function backToDefault() {
        $("#concern").css("border-color", "#ced4da");
        $("#fullAdress").css("border-color", "#ced4da");
        $("#mname").css("border-color", "#ced4da");
        $("#lname").css("border-color", "#ced4da");
        $("#fname").css("border-color", "#ced4da");
        $("#landlineNo").css("border-color", "#ced4da");
        $("#contactNo").css("border-color", "#ced4da");
        $("#emailAdd").css("border-color", "#ced4da");
    }


    function myValidation() {
        var error1 = 0, error2 = 0, error3 = 0,
            error4 = 0, error5 = 0, error6 = 0, error7 = 0; 
        if ($("#fullAdress").val() == "") {
            $(".fullAdressError").show();
            $(".fullAdressError").html("Full address is requried!");
            $("#fullAdress").css("border-color", "#f23345");
            error1 = 1;
        }
        else {
            var fullAdress = $("#fullAdress").val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\'\-]+)$/;
            if (fullAdress != "" && !htmlTagRegex.test(fullAdress)) {
                $(".fullAdressError").show();
                $(".fullAdressError").html("Invalid text format");
                $("#fullAdress").css("border-color", "#f23345");
                error1 = 1;
            }
            else if (htmlTagRegex.test(fullAdress)) {
                $(".fullAdressError").hide();
                $("#fullAdress").css("border-color", "#4cff00");
            }
        }
        if ($("#lname").val() == "") {
            $(".lnameError").show();
            $(".lnameError").html("Last name is required!");
            $("#lname").css("border-color", "#f23345");
            error2 = 1;
        }
        else {
            var lname = $("#lname").val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\']+)$/;
            if (lname != "" && !htmlTagRegex.test(lname)) {
                $(".lnameError").show();
                $(".lnameError").html("Invalid last name");
                $("#lname").css("border-color", "#f23345");
                error2 = 1;
            }
            else if (htmlTagRegex.test(lname)) {
                $(".lnameError").hide();
                $("#lname").css("border-color", "#4cff00");
            }
        }
        if ($("#fname").val() == "") {
            $(".fnameError").show();
            $(".fnameError").html("First name is required!");
            $("#fname").css("border-color", "#f23345");
            error3 = 1;
        }
        else {
            var fname = $("#fname").val();
            var htmlTagRegex = /^([a-zA-Z0-9 \.\&\']+)$/;
            if (fname != "" && !htmlTagRegex.test(fname)) {
                $(".fnameError").show();
                $(".fnameError").html("Invalid first name");
                $("#fname").css("border-color", "#f23345");
                error3 = 1;
            }
            else if (htmlTagRegex.test(fname)) {
                $(".fnameError").hide();
                $("#fname").css("border-color", "#4cff00");
            }
        }
        if ($("#contactNo").val() == "") {
            $(".phoneError").show();
            $(".phoneError").html("Phone number is required!");
            $("#contactNo").css("border-color", "#f23345");
            error4 = 1; 
        }
        else {
            var phone = $("#contactNo").val();
            var phoneNumber = /[0-9-()+]{3,20}/;
            if (phone != "" && !phoneNumber.test(phone)) {
                $(".phoneError").show();
                $(".phoneError").html("Invalid phone number");
                $("#contactNo").css("border-color", "#f23345");
                error4 = 1;
            }
            else if (phoneNumber.test(phone)) {
                $(".phoneError").hide();
                $("#contactNo").css("border-color", "#4cff00");
            }
        }
        if ($("#emailAdd").val() == "") {
            $(".emailError").show();
            $(".emailError").html("Email is required!");
            $("#emailAdd").css("border-color", "#f23345");
            error5 = 1;
        }
        else {
            var emailAdd = $("#emailAdd").val();
            var email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (emailAdd != "" && !email.test(emailAdd)) {
                $(".emailError").show();
                $(".emailError").html("Invalid email");
                $("#emailAdd").css("border-color", "#f23345");
                error5 = 1;
            }
            else if (email.test(emailAdd)) {
                $(".emailError").hide();
                $("#emailAdd").css("border-color", "#4cff00");
            }
        }
        if ($("#guestAdult").val() == "" && $("#guestChild").val() == "" && $("#guestInfant").val() == "") {
            $(".countsError").show();
            $(".countsError").html("Enter counts either of the 3 fields above!");
            $("#guest-counter").css("border-color", "#f23345");
            error6 = 1;
        }
        if ($("#IdprtDate").val() == "") {
            $(".IdprtDateError").show();
            $(".IdprtDateError").html("Departure date is required!");
            $("#IdprtDate").css("border-color", "#f23345");
            $("#calendarAppend").css("border-color", "#f23345");
            error7 = 1;
        }
        if (error1 == 1 || error2 == 1 || error3 == 1 ||
            error4 == 1 || error5 == 1 || error6 == 1 || error7 == 1) {
            return false;
        }
        else { return true;}
    }

    $("#btnBookingTP").click(function (e) {
        e.preventDefault(e);
        var _form = $("#bookTP");
        $("#btnBookingTP").hide();
        $("#btnPackageInquire").show();
        if (myValidation() == false) {
            $("#btnBookingTP").show();
            $("#btnPackageInquire").hide();  
            return false;
        }
          
        var from = "top";
        var align = "right";
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var mname = $("#mname").val();
        var contactNo = $("#contactNo").val();
        var landlineNo = $("#landlineNo").val();
        var emailAdd = $("#emailAdd").val();
        var fullAdress = $("#fullAdress").val();
        var IdprtDate = $("#IdprtDate").val();
        var guestAdult = $("#guestAdult").val();
        var guestChild = $("#guestChild").val();
        var guestInfant = $("#guestInfant").val();
        var concern = $("#concern").val();
        var packagename = $("#titleName").text();
        var formData = JSON.stringify({ "fname": fname, "lname": lname, "mname": mname, "contactNo": contactNo, "landlineNo": landlineNo, "emailAdd": emailAdd, "fullAdress": fullAdress, "IdprtDate": IdprtDate, "guestAdult": guestAdult, "guestChild": guestChild, "guestInfant": guestInfant, "concern": concern, "packagename": packagename });
        $.ajax({
            type: "POST",
            url: "/Home/BookedTP",
            data: formData,
            dataType: "text",
            traditional: true,
            contentType: "application/json",
            success: function (result, status, error) {
                $.notify({
                    icon: "add_alert",
                    message: status+": "+result

                }, {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: from,
                            align: align
                        }
                    });
                backToDefault();
                _form.trigger("reset");
                $("#btnBookingTP").show();
                $("#btnPackageInquire").hide();  
                
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
                $("#btnBookingTP").show();
                $("#btnPackageInquire").hide();  
            }
        });
    });

    $("#btnPackage").click(function (e) {
        e.preventDefault(e);
        $("#btnPackage").hide();
        $("#btnPackageInquire").show();
        var pckgeFrom = $("#packageFromBooking");
        if (!pckgeFrom.valid() || totalRes == 0 || isNaN(totalRes)) {
            if (totalRes == 0 || isNaN(totalRes)) {
                $("#pssCounts").html("Please passenger counts!");
            }
            else{
                $("#pssCounts").html("");
            }
            $("#btnPackage").show();
            $("#btnPackageInquire").hide();
            return false;
        }
        var url = pckgeFrom.attr("action");
        var formData = pckgeFrom.serialize();
        var from = "top";
        var align = "right";
        $.post(url, formData, function (data) {
            $.notify({
                icon: "add_alert",
                message: data

            }, {
                    type: 'danger',
                    timer: 4000,
                    placement: {
                        from: from,
                        align: align
                    }
                });
            $("#btnPackage").show();
            $("#btnPackageInquire").hide();
            pckgeFrom.trigger("reset");
        });
    });

    $(document).on("click", "#page-top", function () {
        $('html, body').animate({ scrollTop: $('#UniVersalH').offset().top }, 'slow');
    });

    //var _header = $("#headmaster").offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#showBTN").removeClass("bottom-btn");
            $("#showBTN").addClass("bottom-btn-toggle");
        }
        else {
            $("#showBTN").removeClass("bottom-btn-toggle");
            $("#showBTN").addClass("bottom-btn");
        }
    });

    //$(document).delegate('#paging', 'click', function (e) {
    //    e.preventDefault(e);
    //    var searchStr = $("seacrhStr").val();
    //    var sortOrderVal = "";
    //    var currentFilterVal = "";
    //    var pageVal = $(this).attr('value');
    //    $.ajax({
    //        url: "/Home/_International",
    //        type: "GET",
    //        datatype: "html",
    //        async: true,
    //        cache: false,
    //        data: {
    //            sortOrder: sortOrderVal,
    //            searchString : searchStr,
    //            currentFilter : currentFilterVal,
    //            page : pageVal,
    //        },
    //        success: function (result) {
    //            $("#pageCallback").empty().html(result);
    //        }
    //    });
       
    //});
});

$(function () {
    var today = new Date();
    var travelPeriod = new Date("2019-9-15");
    var _travelPeriod = new Date("2019-9-20");
    var i_travelPeriod = new Date("2019-12-23");
    var _i_travelPeriod = new Date("2019-12-27");

    $("#EdutravelPeriod").html(travelPeriod.toLocaleString("default", { month: "short" }) + " " + travelPeriod.getDate() + " " + travelPeriod.getFullYear()
        + " - " + _travelPeriod.toLocaleString("default", { month: "short" }) + " " + _travelPeriod.getDate() + " " + _travelPeriod.getFullYear());
    $("#i-travelPeriod").html(i_travelPeriod.toLocaleString("default", { month: "short" }) + " " + i_travelPeriod.getDate() + " " + i_travelPeriod.getFullYear()
        + " - " + _i_travelPeriod.toLocaleString("default", { month: "short" }) + " " + _i_travelPeriod.getDate() + " " + _i_travelPeriod.getFullYear());
    $("#bookingPeriod").html(travelPeriod.toLocaleString("default", { month: "short" }) + " " + travelPeriod.getDate() + " " + travelPeriod.getFullYear()
        + " - " + _travelPeriod.toLocaleString("default", { month: "short" }) + " " + _travelPeriod.getDate() + " " + _travelPeriod.getFullYear());
    $("#bookingPeriod0").html(travelPeriod.toLocaleString("default", { month: "short" }) + " " + travelPeriod.getDate() + " " + travelPeriod.getFullYear()
        + " - " + _travelPeriod.toLocaleString("default", { month: "short" }) + " " + _travelPeriod.getDate() + " " + _travelPeriod.getFullYear());
    $("#travelPeriod").html(travelPeriod.toLocaleString("default", { month:"short" } ) + " " + travelPeriod.getDate() + " " + travelPeriod.getFullYear()
        + " - " + _travelPeriod.toLocaleString("default", { month: "short" }) + " " + _travelPeriod.getDate() + " " + _travelPeriod.getFullYear());

    var classicSpain = new Date("2019-9-20");
    var classicSpain0 = new Date("2019-10-25");
    var classicSpain1 = new Date("2019-11-29");
    var classicSpain2 = new Date("2019-12-20");

    $("#classicalSpain").html(classicSpain.toLocaleString("default", { month: "short" }) + " " + classicSpain.getDate() + ", " + classicSpain0.toLocaleString("default", { month: "short" }) + " " + classicSpain0.getDate()
        + ", " + classicSpain1.toLocaleString("default", { month: "short" }) + " " + classicSpain1.getDate() + " & " + classicSpain2.toLocaleString("default", { month: "short" }) + " " + classicSpain2.getDate() + ", " +
        classicSpain2.getFullYear());

    var kansai = new Date("2019-12-23");
    var kansai0 = new Date("2019-12-27");

    $("#kansaiDate").html(kansai.toLocaleString("default", { month: "short" }) + " " + kansai.getDate() + " - " + kansai0.getDate() + ", " + kansai.getFullYear());

    var imperialDepDates = new Date("2019-9-19");
    var imperialDepDates0 = new Date("2019-10-24");
    var imperialDepDates1 = new Date("2019-11-28");
    var imperialDepDates2 = new Date("2019-12-19");

    $("#imperialCapital").html(imperialDepDates.toLocaleString("default", { month: "short" }) + " " + imperialDepDates.getDate() + ", " + imperialDepDates0.toLocaleString("default", { month: "short" }) + " "
        + imperialDepDates0.getDate() + ", " + imperialDepDates1.toLocaleString("default", { month: "short" }) + " " + imperialDepDates1.getDate() + " & " 
        + imperialDepDates2.toLocaleString("default", { month: "short" }) + " " + imperialDepDates2.getDate() + " " + imperialDepDates2.getFullYear());

    var touchOfEurope = new Date("2019-9-12");
    var touchOfEurope0 = new Date("2019-10-25");
    var touchOfEurope1 = new Date("2019-11-23");
    var touchOfEurope2 = new Date("2019-12-14");

    $("#TouchOfEurope").html(touchOfEurope.toLocaleString("default", { month: "short" }) + " " + touchOfEurope.getDate() + ", " + touchOfEurope0.toLocaleString("default", { month: "short" }) + " " + touchOfEurope0.getDate() +
        ", " + touchOfEurope1.toLocaleString("default", { month: "short" }) + " " + touchOfEurope1.getDate() + ", " + touchOfEurope2.toLocaleString("default", { month: "short" }) + " " + touchOfEurope2.getDate() + ", " +
        touchOfEurope2.getFullYear());

    var Wonkor = new Date("2019-9-26");
    var Wonkor0 = new Date("2019-9-30");

    var Wonkor1 = new Date("2019-10-31");
    var Wonkor2 = new Date("2019-11-04");

    var Wonkor3 = new Date("2019-12-23");
    var Wonkor4 = new Date("2019-12-27");

    $("#WonKorea").html(Wonkor.toLocaleString("default", { month: "short" }) + " " + Wonkor.getDate() + " - " + Wonkor0.toLocaleString("default", { month: "short" }) + " " + Wonkor.getDate() + ", " + Wonkor.getFullYear() + " " +
        Wonkor1.toLocaleString("ddefault", { month: "short" }) + " " + Wonkor1.getDate() + " - " + Wonkor2.toLocaleString("default", { month: "short" }) + " " + Wonkor2.getDate() + ", " + Wonkor2.getFullYear() + " " +
        Wonkor3.toLocaleString("default", { month: "short" }) + " " + Wonkor3.getDate() + " - " + Wonkor4.toLocaleString("default", { month: "short" }) + " " + Wonkor4.getDate() + ", " + Wonkor4.getFullYear());

    var hokkaido = new Date("2019-12-04");
    var hokkaido0 = new Date("2019-12-09");

    $("#HokKaido").html(hokkaido.toLocaleString("default", { month: "short" }) + " " + hokkaido.getDate() + " - " + hokkaido0.getDate() + ", " + hokkaido0.getFullYear());

    var southKorea = new Date("2019-11-04");
    var southKorea0 = new Date("2019-11-09");

    $("#SouthKorea").html(southKorea.toLocaleString("default", { month: "short" }) + " " + southKorea.getDate() + " - " + southKorea0.getDate() + ", " + southKorea0.getFullYear());

    var fukuoka = new Date("2019-10-20");
    var fukuoka0 = new Date("2019-10-25");

    $("#FukkUoka").html(fukuoka.toLocaleString("default", { month: "short" }) + " " + fukuoka.getDate() + " - " + fukuoka0.getDate() + ", " + fukuoka0.getFullYear());

    var thailand = new Date("2019-10-6");
    var thailand0 = new Date("2019-10-11");

    $("#Thailand").html(thailand.toLocaleString("default", { month: "short" }) + " " + thailand.getDate() + " - " + thailand0.getDate() + ", " + thailand0.getFullYear());

    $("#RreserveDateFrom").datetimepicker({
        ignoreReadonly: true,
        minDate: travelPeriod
    });
    $("#i-dprtureDate").datetimepicker({
        ignoreReadonly: true,
        minDate: today
    });
    $("#i-dprtureDate").on("change.datetimepicker", function (e) {
        if ($("#IdprtDate").val() != "") {
            $(".IdprtDateError").hide();
            $("#IdprtDate").css("border-color", "#ced4da");
            $("#calendarAppend").css("border-color", "#ced4da");
        }
    });
    $("#EdudprtDate").datetimepicker({
        ignoreReadonly: true,
        minDate: travelPeriod
    });
    $("#EdudprtDate").datetimepicker("maxDate", _travelPeriod);
    $("#RreserveDateFrom").datetimepicker("maxDate", _travelPeriod);
    $('#hDatetimepicker, #_hDatetimepicker, #hDatetimepicker_, #_hDatetimepicker-').datetimepicker({
        ignoreReadonly: true,
        minDate: today
    });
    $("#FTDDreserveDateFrom, #i-dprtureDate0, #RreserveDateFrom0").datetimepicker({
        ignoreReadonly: true,
        minDate: _travelPeriod.setMonth(_travelPeriod.getMonth() + 1)
    });
    $("#hDatetimepicker1, #hDatetimepicker1_, #hDatetimepicker2_, #hDatetimepicker3_, #hDatetimepicker4_, #_hDatetimepicker1-").datetimepicker({
        ignoreReadonly: true,
        useCurrent: false
    });
    $("#PssportExpry, #bdate0, #PssportExpry0, #bdate01").datetimepicker({
        ignoreReadonly: true,
        format: "L"
    });
    $("#hDatetimepicker4_").on("change.datetimepicker", function (e) {
        $("#hDatetimepicker3_").datetimepicker("maxDate", e.date);
    });
    $("#hDatetimepicker3_").on("change.datetimepicker", function (e) {
        $("#hDatetimepicker4_").datetimepicker("minDate", e.date);
        $("#hDatetimepicker2_").datetimepicker("maxDate", e.date);
        if ($("#dDate3_").val() != "") {
            $("#dDate4_").prop("disabled", false);
            $("#dDate4_icon").removeClass("btn-disabled");
            $("#dDate4_icon").addClass("my-btn");
        }
        else {
            $("#dDate4_").prop("disabled", "disabled");
            $("#dDate4_").val("");
            $("#dDate4_icon").addClass("btn-disabled");
            $("#dDate4_icon").removeClass("my-btn");
        }
    });
    $("#hDatetimepicker2_").on("change.datetimepicker", function (e) {
        $("#hDatetimepicker1_").datetimepicker("maxDate", e.date);
        $("#hDatetimepicker3_").datetimepicker("minDate", e.date);
        if ($("#dDate2_").val() != "") {
            $("#dDate3_").prop("disabled", false);
            $("#dDate3_icon").removeClass("btn-disabled");
            $("#dDate3_icon").addClass("my-btn");
        }
        else {
            $("#dDate3_").prop("disabled", "disabled");
            $("#dDate3_").val("");
            $("#dDate3_icon").addClass("btn-disabled");
            $("#dDate3_icon").removeClass("my-btn");
        }
    });
    $("#_hDatetimepicker-").on("change.datetimepicker", function (e) {
        $("#_hDatetimepicker1-").datetimepicker("minDate", e.date);
        if ($("#_-dDate").val() != "") {
            $("#_-rDate").prop("disabled", false);
            $("#FHRdate").removeClass("btn-disabled");
            $("#FHRdate").addClass("my-btn");
        }
        else {
            $("#_-rDate").prop("disabled", "disabled");
            $("#_-rDate").val("");
            $("#FHRdate").removeClass("my-btn");
            $("#FHRdate").addClass("btn-disabled");
        }
    });
    $("#_hDatetimepicker1-").on("change.datetimepicker", function (e) {
        $("#_hDatetimepicker-").datetimepicker("maxDate", e.date);
    });
    $("#hDatetimepicker_").on("change.datetimepicker", function (e) {
        $("#hDatetimepicker1_").datetimepicker("minDate", e.date);
        if ($("#dDate_").val() != "") {
            $("#dDate1_").prop("disabled", false);
            $("#dDate1_icon").removeClass("btn-disabled");
            $("#dDate1_icon").addClass("my-btn");
        }
        else {
            $("#dDate1_").prop("disabled", "disabled");
            $("#dDate1_").val("");
            $("#dDate1_icon").addClass("btn-disabled");
            $("#dDate1_icon").removeClass("my-btn");
        }
    });
    $("#hDatetimepicker1_").on("change.datetimepicker", function (e) {
        $("#hDatetimepicker_").datetimepicker("maxDate", e.date);
        $("#hDatetimepicker2_").datetimepicker("minDate", e.date);
        if ($("#dDate1_").val() != "") {
            $("#dDate2_").prop("disabled", false);
            $("#dDate2_icon").removeClass("btn-disabled");
            $("#dDate2_icon").addClass("my-btn");
        }
        else {
            $("#dDate2_").prop("disabled", "disabled");
            $("#dDate2_").val("");
            $("#dDate2_icon").addClass("btn-disabled");
            $("#dDate2_icon").removeClass("my-btn");
        }
    });
    $('#hDatetimepicker').on("change.datetimepicker", function (e) {
        $("#hDatetimepicker1").datetimepicker("minDate", e.date);
        if ($("#dDate").val() != "") {
            $("#rDate").prop("disabled", false);
            $("#RTRdate").removeClass("btn-disabled");
            $("#RTRdate").addClass("my-btn");
        }
        else {
            $("#rDate").prop("disabled", "disabled");
            $("#rDate").val("");
            $("#RTRdate").removeClass("my-btn");
            $("#RTRdate").addClass("btn-disabled");
        }
    });
    $("#hDatetimepicker1").on("change.datetimepicker", function (e) {
        $("#hDatetimepicker").datetimepicker("maxDate", e.date);
    });
    $("#FromId, #ToId, #_FromId, #_ToId, #FromId_, #ToId_, #FromId1_, #ToId1_, #FromId2_, #ToId2_, #FromId3_, #ToId3_, #FromId4, #ToId4_, #_FromId-, #_ToId-").autocomplete({
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

    /* ///////////// Index view more scripts /////////////////////// */
    function viewMore(v) {
        var num = 1;
        var counts = Number($("#IndexCount").val());
        var view = v + 1;
        var content = "";
        content = "<p class='p-2'>";
        for (var i = num; i <= counts; i++) {
            if (v + 1 == i) {
                content += "<button class='btn btn-outline-primary' onclick='FetchMore(" + view + ")'>View more</button>"
            }
        }
        content += "</p>";
        $("#vMoreDiv").html(content);
    }
    $(document).ready(viewMore(1));

    FetchMore = function (v) {
        var data = 12;
        $.ajax({
            type: "GET",
            url: "/Home/ViewMoreIndex",
            data: { rowsCount: data, view: v },
            success: function (result) {
                if (result != null) {
                    var dataContent = "";
                    for (var i = 0; i < result.length; i++) {
                        dataContent += "<div class='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center'>\
                            <div class='img-links'>\
                                 <a onclick='urlFunction("+ result[i].p_id +")' > <img src='/DynamicFiles/"+ result[i].img +"' class='hover-animate-img img-fluid hover-animate-img-2 card card-class' /></a>\
                                </div>\
                            </div>";
                    }
                    $(document).ready(viewMore(v));
                    $("#IndexDisplay").append(dataContent);
                }
            }
        });
    }

    /* //////////// end of index view more scripts ////////////////// */

    /* ///////////////////////// Index dropdown sorting /////////////////////// */
    var FilteredCounts = 0;
    IDisplay = function () {
        var data = $("#Idrpdwn").val();
        $.ajax({
            type: "GET",
            url: "/Home/GetIndexPage",
            data: { NumberofData: data },
            success: function (result) {
                if (result != null) {
                    $("#IndexDisplay").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.data.length; i++) {
                        dataContent += "<div class='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center'>\
                            <div class='img-links'>\
                                 <a onclick='urlFunction("+ result.data[i].p_id +")' > <img src='/DynamicFiles/"+result.data[i].img+"' class='hover-animate-img img-fluid hover-animate-img-2 card card-class' /></a>\
                               </div>\
                            </div>";
                    }
                    var btnContent = "";
                    var v = 1;
                    var view = v + 1;
                    FilteredCounts = result.c;
                    if (result.c != 1) {
                        btnContent = "<p class='p-2'>";
                        for (var x = 1; x <= result.c; x++) {
                            if (v + 1 == x) {
                                btnContent += "<button class='btn btn-outline-primary' onclick='FetchMoreViaC(" + view + ")'>View more</button>";
                            }
                        }
                        btnContent += "</p>";
                        $("#vMoreDiv").html(btnContent);
                    }
                    else {
                        $("#vMoreDiv").empty();
                    }
                    $("#IndexDisplay").html(dataContent);
                }
            }
        });
    }

    FetchMoreViaC = function (v) {
        var data = $("#Idrpdwn").val();
        var rows = 12;
        $.ajax({
            type: "GET",
            url: "/Home/ViewMoreIndexViaC",
            data: { rowsCount: rows, view: v, filter: data },
            success: function (result) {
                if (result != null) {
                    var dataContent = "";
                    for (var i = 0; i < result.length; i++) {
                        dataContent += "<div class='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center'>\
                            <div class='img-links'>\
                                <a onclick='urlFunction("+result[i].p_id+")' > <img src='/DynamicFiles/"+ result[i].img + "' class='hover-animate-img img-fluid hover-animate-img-2 card card-class' /></a>\
                                </div>\
                            </div>";
                    }
                    $(document).ready(viewMoreViaC(v));
                    $("#IndexDisplay").append(dataContent);
                }
            }
        });
    }

    function viewMoreViaC(v) {
        var num = 1;
        var counts = Number(FilteredCounts);
        var view = v + 1;
        var content = "";
        if (counts > 1) {
            content = "<p class='p-2'>";
            for (var i = num; i <= counts; i++) {
                if (v + 1 == i) {
                    content += "<button class='btn btn-outline-primary' onclick='FetchMoreViaC(" + view + ")'>View more</button>"
                }
            }
            content += "</p>";
            $("#vMoreDiv").html(content);
        }
    }
    $(document).ready(viewMoreViaC(1));

    /* ////////////////////// end of Index dropdown sorting /////////////////////////////////////// */


    /* /////////////////// Currency custom function /////////////////////////// */

    function curRency(n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

    /* ////////////////// End of custom currency function //////////////////////*/

     /* ///////////////////////////   custom pagination and sorting /////////////////////// */

  

    urlFunction = function (id) {
        location.href = "/International/TourPackageD/" + id;
    }

    Display = function() {
        var data = $("#drpdwn").val();
        $.ajax({
            type: "GET",
            url: "/Home/GetPage", 
            data: { NumberofData: data },
            success: function (result) {
                if (result != null) {
                    $("#pageCallback").empty();
                    $(".pages").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.data.length; i++) {
                        dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result.data[i].p_id + ")'>\
                                        <img src='/DynamicFiles/"+ result.data[i].img + "' class='hover-animate-img hover-animate-img-2 card card-class' />\
                                    </a>\
                            </div>\
                            <div class='card my-card-body'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                  "+ result.data[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>";
                            if (result.data[i].currency == 'peso') {
                                dataContent += "Price: " + curRency(result.data[i].p_price, " ₱");
                            }
                            else {
                                dataContent += "Price: "+ curRency(result.data[i].p_price, " $");
                            }
                      
                        dataContent += "</p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result.data[i].bedtype + "\
                                </p>\
                                <fieldset class='scheduler-border'>\
                            <legend class='scheduler-border text-dark'> <i style='font-size:16px;color:#ff6a00' class='fas fa-calendar-alt'></i> Travel Dates</legend>\
                                <ul class='pt-0 pb-0'>";
                                    for (var d = 0; d < result.data[i]._Dates.length; d++)
                                                {
                                        dataContent += "<li class='my-font-13'>" + result.data[i]._Dates[d].otDates + "</li>";
                                    }
                        dataContent  += "</ul>\
                                 </fieldset>\
                            </div>\
                            </div>\
                            </div>\
                    </div>";
                    }
                    var btnContent = "";
                    var btnPage = "";
                    var q = 0;
                    var p = 2;
                    $("#counts").val(result.c);
                    if (result.c != 1) {
                        for (var x = 1; x <= result.c; x++) {
                          if(x < 6) {
                               btnPage += "<button type='button' id='" + x + "' onclick='SortData(" + x + ")'";
                              if (x == 1) {
                                  btnPage += "class='btn btn-outline-primary' disabled";
                              }
                              else {
                                  btnPage += "class='btn btn-primary m-1'";
                              }
                              btnPage += ">" + x + "</button>";
                          }
                            q = x;
                        }
                        btnContent += "<p class='p-2'>" + btnPage + "<button class='btn btn-primary m-1' onclick='SortData("+p+")'>Next</button></p>";
                        btnContent += "<p><button class='btn btn-outline-primary' disabled>Page <span id='counter'>1</span> of " + q +"</button></p>";
                        $(".pages").html(btnContent);
                    }
                    $("#pageCallback").html(dataContent);
                }
            }
        });
    }

    SortData = function (n) {
        $("#counter").html(n);
        var data = $("#drpdwn").val();
        $.ajax({
            type: "GET",
            url: "/Home/Paging",
            data: { DDVal: data, page: n },
            success: function (result) {
                if (result != null) {
                    $("#pageCallback").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.length; i++) {
                        dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result[i].p_id + ")'>\
                                    <img src='/DynamicFiles/"+ result[i].img + "' class='hover-animate-img hover-animate-img-2 card card-class' />\
                                </a>\
                              </div>\
                            <div class='my-card-body card'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                    "+ result[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>";
                                if (result[i].currency == 'peso') {
                                    dataContent += "Price: " + curRency(result[i].p_price, " ₱");
                                }
                                else {
                                    dataContent += "Price: " + curRency(result[i].p_price, " $");
                                }
                        dataContent +=  "</p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result[i].bedtype + "\
                                </p>\
                          <fieldset class='scheduler-border'>\
                            <legend class='scheduler-border text-dark'> <i style='font-size:16px;color:#ff6a00' class='fas fa-calendar-alt'></i> Travel Dates</legend>\
                                <ul class='pt-0 pb-0'>";
                        for (var d = 0; d < result[i]._Dates.length; d++) {
                            dataContent += "<li class='my-font-13'>" + result[i]._Dates[d].otDates + "</li>";
                        }
                        dataContent += "</ul>\
                                 </fieldset>\
                            </div>\
                            </div>\
                            </div>\
                    </div>";
                    }
                    $(document).ready(pageBTn(n));
                    $("#pageCallback").html(dataContent);
                }
            }
        });
    }

    $("#Search").keyup(function (e) {
        clearTimeout($.data(this, "timer"));
        if (e.keyCode == 13)
            MatchData(true);
        else
            $(this).data("timer", setTimeout(MatchData, 50));
    });

    function MatchData(d) {
        var e = $("#Search").val();
        $.ajax({
            type: "GET",
            url: "/Home/SearchPData",
            success: function (result) {
                if (result.length) {
                    $("#pageCallback").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.length; i++) {
                        if ((result[i].p_name.toLowerCase()).indexOf(e) != -1 || (result[i].p_price).toString().indexOf(e) != -1 || (result[i].bedtype.toLowerCase()).indexOf(e) != -1) {
                            dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result[i].p_id + ")'>\
                                    <img src='/DynamicFiles/"+ result[i].img + "' class='hover-animate-img m-0 img-fluid hover-animate-img-2 card card-class' />\
                                </a>\
                              </div>\
                            <div class='my-card-body card'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                   "+ result[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>";
                            if (result[i].currency == 'peso') {
                                dataContent += "Price: " + curRency(result[i].p_price, " ₱");
                            }
                            else {
                                dataContent += "Price: " + curRency(result[i].p_price, " $");
                            } 
                            dataContent += "</p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result[i].bedtype + "\
                                </p>\
                              <fieldset class='scheduler-border'>\
                            <legend class='scheduler-border text-dark'> <i style='font-size:16px;color:#ff6a00' class='fas fa-calendar-alt'></i> Travel Dates</legend>\
                                <ul class='pt-0 pb-0'>";
                            for (var d = 0; d < result[i]._Dates.length; d++) {
                                dataContent += "<li class='my-font-13'>" + result[i]._Dates[d].otDates + "</li>";
                            }
                            dataContent += "</ul>\
                                 </fieldset>\
                            </div>\
                            </div>\
                        </div>\
                    </div>";
                        }
                    }
                    $(".pages").empty();
                    $("#pageCallback").html(dataContent);
                }
                if (e == "" || e == null) {
                    $(document).ready(Display);
                }
          }
        });
    }

    function pageBTn(page) {
        var num = 1;
        var pn = 6;
        var counts = Number($("#counts").val());
        if (page == 5) {
            num = num + 1;
            pn = 6 + num - 1;
        }
        if (page > 5) {
            num = page - 5 + 1;
            pn = 6 + num;
        }
        var prev = page - 1;
        var next = page + 1;
        var content = "";
        content = "<p class='p-2'>";
        if (page > 1) {
            content += "<button class='btn btn-primary m-1' onclick='SortData(" + prev +")'>Prev</button>";
        }     
        for (var i = num; i <= counts; i++) {
            if (i < pn) {
                content += "<button id='" + i + "' onclick='SortData(" + i + ")'";
                if (page == i) {
                    content += "class='btn btn-outline-primary' disabled";
                }
                else {
                    content += "class='btn btn-primary m-1'";
                }
                content += ">" + i + "</button>";
            }
        }
        if (page < counts) {
            content += "<button class='btn btn-primary m-1' onclick='SortData(" + next+")'>Next</button>";
        }
        content += "</p>\
            <p>\
                    <button class='btn btn-outline-primary' disabled>Page <span>"+page+"</span> of "+counts+"</button>\
            </p>";
        $(".pages").html(content);
    }
    $(document).ready(pageBTn(1));

    /* //////////////////////// End of custom pagination and sorting /////////////////////////////// */


    /* /////////////////////// domestic custom pagination and sorting ////////////////////////////// */

    DDisplay = function () {
        var data = $("#Ddrpdwn").val();
        $.ajax({
            type: "GET",
            url: "/Home/GetPageD",
            data: { NumberofData: data },
            success: function (result) {
                if (result != null) {
                    $("#pageDCallback").empty();
                    $(".dpages").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.data.length; i++) {
                        dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result.data[i].p_id + ")'>\
                                        <img src='/DynamicFiles/"+ result.data[i].img + "' class='hover-animate-img hover-animate-img-2 card card-class' />\
                                    </a>\
                            </div>\
                            <div class='card my-card-body'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                  "+ result.data[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>";
                                if (result.data[i].currency == 'peso') {
                                    dataContent += "Price: " + curRency(result.data[i].p_price, " ₱");
                                }
                                else {
                                    dataContent += "Price: " + curRency(result.data[i].p_price, " $");
                                }
                        dataContent += "</p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result.data[i].bedtype + "\
                                </p>\
                         <fieldset class='scheduler-border'>\
                            <legend class='scheduler-border text-dark'> <i style='font-size:16px;color:#ff6a00' class='fas fa-calendar-alt'></i> Travel Dates</legend>\
                                <ul class='pt-0 pb-0'>";
                        for (var d = 0; d < result.data[i]._Dates.length; d++) {
                            dataContent += "<li class='my-font-13'>" + result.data[i]._Dates[d].otDates + "</li>";
                        }
                        dataContent += "</ul>\
                                 </fieldset>\
                            </div>\
                            </div>\
                            </div>\
                    </div>";
                    }
                    var btnContent = "";
                    var btnPage = "";
                    var q = 0;
                    var p = 2;
                    $("#dcounts").val(result.c);
                    if (result.c != 1) {
                        for (var x = 1; x <= result.c; x++) {
                            if (x < 6) {
                                btnPage += "<button type='button' id='" + x + "' onclick='DSortData(" + x + ")'";
                                if (x == 1) {
                                    btnPage += "class='btn btn-outline-primary' disabled";
                                }
                                else {
                                    btnPage += "class='btn btn-primary m-1'";
                                }
                                btnPage += ">" + x + "</button>";
                            }
                            q = x;
                        }
                        btnContent += "<p class='p-2'>" + btnPage + "<button class='btn btn-primary m-1' onclick='DSortData("+p+")'>Next</button></p>";
                        btnContent += "<p><button class='btn btn-outline-primary' disabled>Page <span id='counter'>1</span> of " + q + "</button></p>";
                        $(".dpages").html(btnContent);
                    }
                    $("#pageDCallback").html(dataContent);
                }
            }
        });
    }

    DSortData = function (n) {
        $("#dcounts").html(n);
        var data = $("#Ddrpdwn").val();
        $.ajax({
            type: "GET",
            url: "/Home/DPaging",
            data: { DDVal: data, page: n },
            success: function (result) {
                if (result != null) {
                    $("#pageDCallback").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.length; i++) {
                        dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result[i].p_id + ")'>\
                                    <img src='/DynamicFiles/"+ result[i].img + "' class='hover-animate-img hover-animate-img-2 card card-class' />\
                                </a>\
                              </div>\
                            <div class='my-card-body card'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                    "+ result[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>";
                               if (result[i].currency == 'peso') {
                                    dataContent += "Price: " + curRency(result[i].p_price, " ₱");
                                }
                                            else {
                                dataContent += "Price: " + curRency(result[i].p_price, " $");
                            }
                            dataContent += "</p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result[i].bedtype + "\
                                </p>\
                                 </p>\
                         <fieldset class='scheduler-border'>\
                            <legend class='scheduler-border text-dark'> <i style='font-size:16px;color:#ff6a00' class='fas fa-calendar-alt'></i> Travel Dates</legend>\
                                <ul class='pt-0 pb-0'>";
                        for (var d = 0; d < result.data[i]._Dates.length; d++) {
                            dataContent += "<li class='my-font-13'>" + result.data[i]._Dates[d].otDates + "</li>";
                        }
                        dataContent += "</ul>\
                                 </fieldset>\
                            </div>\
                            </div>\
                            </div>\
                    </div>";
                    }
                    $(document).ready(pageBTnD(n));
                    $("#pageDCallback").html(dataContent);
                }
            }
        });
    }

    $("#DSearch").keyup(function (e) {
        clearTimeout($.data(this, "timer"));
        if (e.keyCode == 13)
            MatchDataD(true);
        else
            $(this).data("timer", setTimeout(MatchDataD, 50));
    });

    function MatchDataD(d) {
        var e = $("#DSearch").val();
        $.ajax({
            type: "GET",
            url: "/Home/SearchDData",
            success: function (result) {
                if (result.length) {
                    $("#pageDCallback").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.length; i++) {
                        if ((result[i].p_name.toLowerCase()).indexOf(e) != -1 || (result[i].p_price).toString().indexOf(e) != -1 || (result[i].bedtype.toLowerCase()).indexOf(e) != -1) {
                            dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result[i].p_id + ")'>\
                                    <img src='/DynamicFiles/"+ result[i].img + "' class='hover-animate-img m-0 img-fluid hover-animate-img-2 card card-class' />\
                                </a>\
                              </div>\
                            <div class='my-card-body card'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                   "+ result[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>";
                            if (result[i].currency == 'peso') {
                                dataContent += "Price: " + curRency(result[i].p_price, " ₱");
                            }
                            else {
                                dataContent += "Price: " + curRency(result[i].p_price, " $");
                            }
                            dataContent += "</p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result[i].bedtype + "\
                                </p>\
                         <fieldset class='scheduler-border'>\
                            <legend class='scheduler-border text-dark'> <i style='font-size:16px;color:#ff6a00' class='fas fa-calendar-alt'></i> Travel Dates</legend>\
                                <ul class='pt-0 pb-0'>";
                            for (var d = 0; d < result[i]._Dates.length; d++) {
                                dataContent += "<li class='my-font-13'>" + result[i]._Dates[d].otDates + "</li>";
                            }
                            dataContent += "</ul>\
                                 </fieldset>\
                            </div>\
                            </div>\
                        </div>\
                    </div>";
                        }
                    }
                    $(".dpages").empty();
                    $("#pageDCallback").html(dataContent);
                }
                if (e == "" || e == null) {
                    $(document).ready(DDisplay);
                }
            }
        });
    }

    function pageBTnD(page) {
        var num = 1;
        var pn = 6;
        var counts = Number($("#dcounts").val());
        if (page == 5) {
            num = num + 1;
            pn = 6 + num - 1;
        }
        if (page > 5) {
            num = page - 5 + 1;
            pn = 6 + num;
        }
        var prev = page - 1;
        var next = page + 1;
        var content = "";
        content = "<p class='p-2'>";
        if (page > 1) {
            content += "<button class='btn btn-primary m-1' onclick='DSortData(" + prev + ")'>Prev</button>";
        }
        for (var i = num; i <= counts; i++) {
            if (i < pn) {
                content += "<button id='" + i + "' onclick='DSortData(" + i + ")'";
                if (page == i) {
                    content += "class='btn btn-outline-primary' disabled";
                }
                else {
                    content += "class='btn btn-primary m-1'";
                }
                content += ">" + i + "</button>";
            }
        }
        if (page < counts) {
            content += "<button class='btn btn-primary m-1' onclick='DSortData(" + next + ")'>Next</button>";
        }
        content += "</p>\
            <p>\
                    <button class='btn btn-outline-primary' disabled>Page <span>"+ page + "</span> of " + counts + "</button>\
            </p>";
        $(".dpages").html(content);
    }
    $(document).ready(pageBTnD(1));

    /* ///////////////////////// end of domestic custom pagination ////////////////////////////// */

    /* /////////////////////// educational custom pagination and sorting ////////////////////////////// */

    EDisplay = function () {
        var data = $("#Edrpdwn").val();
        $.ajax({
            type: "GET",
            url: "/Home/GetPageE",
            data: { NumberofData: data },
            success: function (result) {
                if (result != null) {
                    $("#pageECallback").empty();
                    $(".epages").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.data.length; i++) {
                        dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result.data[i].p_id + ")'>\
                                        <img src='/DynamicFiles/"+ result.data[i].img + "' class='hover-animate-img hover-animate-img-2 card card-class' />\
                                    </a>\
                            </div>\
                            <div class='card my-card-body'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                  "+ result.data[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Price: "+ curRency(result.data[i].p_price, " $") + "\
                                </p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result.data[i].bedtype + "\
                                </p>\
                            </div>\
                            </div>\
                            </div>\
                    </div>";
                    }
                    var btnContent = "";
                    var btnPage = "";
                    var q = 0;
                    var p = 2;
                    $("#ecounts").val(result.c);
                    if (result.c != 1) {
                        for (var x = 1; x <= result.c; x++) {
                            if (x < 6) {
                                btnPage += "<button type='button' id='" + x + "' onclick='ESortData(" + x + ")'";
                                if (x == 1) {
                                    btnPage += "class='btn btn-outline-primary' disabled";
                                }
                                else {
                                    btnPage += "class='btn btn-primary m-1'";
                                }
                                btnPage += ">" + x + "</button>";
                            }
                            q = x;
                        }
                        btnContent += "<p class='p-2'>" + btnPage + "<button class='btn btn-primary m-1' onclick='ESortData("+p+")'>Next</button></p>";
                        btnContent += "<p><button class='btn btn-outline-primary' disabled>Page <span id='counter'>1</span> of " + q + "</button></p>";
                        $(".epages").html(btnContent);
                    }
                    $("#pageECallback").html(dataContent);
                }
            }
        });
    }

    ESortData = function (n) {
        $("#ecounts").html(n);
        var data = $("#Edrpdwn").val();
        $.ajax({
            type: "GET",
            url: "/Home/EPaging",
            data: { DDVal: data, page: n },
            success: function (result) {
                if (result != null) {
                    $("#pageECallback").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.length; i++) {
                        dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result[i].p_id + ")'>\
                                    <img src='/DynamicFiles/"+ result[i].img + "' class='hover-animate-img hover-animate-img-2 card card-class' />\
                                </a>\
                              </div>\
                            <div class='my-card-body card'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                    "+ result[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Price: "+ curRency(result[i].p_price, " $") + "\
                                </p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result[i].bedtype + "\
                                </p>\
                            </div>\
                            </div>\
                            </div>\
                    </div>";
                    }
                    $(document).ready(pageBTnE(n));
                    $("#pageECallback").html(dataContent);
                }
            }
        });
    }

    $("#ESearch").keyup(function (e) {
        clearTimeout($.data(this, "timer"));
        if (e.keyCode == 13)
            MatchDataE(true);
        else
            $(this).data("timer", setTimeout(MatchDataE, 50));
    });

    function MatchDataE(d) {
        var e = $("#ESearch").val();
        $.ajax({
            type: "GET",
            url: "/Home/SearchEData",
            success: function (result) {
                if (result.length) {
                    $("#pageECallback").empty();
                    var dataContent = "";
                    for (var i = 0; i < result.length; i++) {
                        if ((result[i].p_name.toLowerCase()).indexOf(e) != -1 || (result[i].p_price).toString().indexOf(e) != -1 || (result[i].bedtype.toLowerCase()).indexOf(e) != -1) {
                            dataContent += "<div class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>\
                            <div class='card my-card'>\
                            <div class='my-header-card'>\
                             <a onclick='urlFunction("+ result[i].p_id + ")'>\
                                    <img src='/DynamicFiles/"+ result[i].img + "' class='hover-animate-img m-0 img-fluid hover-animate-img-2 card card-class' />\
                                </a>\
                              </div>\
                            <div class='my-card-body card'>\
                            <div class='my-card-caption'>\
                               <h3 class='my-font-18'>\
                                   "+ result[i].p_name + "\
                                </h3>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Price: "+ curRency(result[i].p_price, " $") + "\
                                </p>\
                                <p class='p-0 m-0 my-font-16'>\
                                    Bedroom: "+ result[i].bedtype + "\
                                </p>\
                            </div>\
                            </div>\
                        </div>\
                    </div>";
                        }
                    }
                    $(".epages").empty();
                    $("#pageECallback").html(dataContent);
                }
                if (e == "" || e == null) {
                    $(document).ready(EDisplay);
                }
            }
        });
    }

    function pageBTnE(page) {
        var num = 1;
        var pn = 6;
        var counts = Number($("#ecounts").val());
        if (page == 5) {
            num = num + 1;
            pn = 6 + num - 1;
        }
        if (page > 5) {
            num = page - 5 + 1;
            pn = 6 + num;
        }
        var prev = page - 1;
        var next = page + 1;
        var content = "";
        content = "<p class='p-2'>";
        if (page > 1) {
            content += "<button class='btn btn-primary m-1' onclick='ESortData(" + prev + ")'>Prev</button>";
        }
        for (var i = num; i <= counts; i++) {
            if (i < pn) {
                content += "<button id='" + i + "' onclick='ESortData(" + i + ")'";
                if (page == i) {
                    content += "class='btn btn-outline-primary' disabled";
                }
                else {
                    content += "class='btn btn-primary m-1'";
                }
                content += ">" + i + "</button>";
            }
        }
        if (page < counts) {
            content += "<button class='btn btn-primary m-1' onclick='ESortData(" + next + ")'>Next</button>";
        }
        content += "</p>\
            <p>\
                    <button class='btn btn-outline-primary' disabled>Page <span>"+ page + "</span> of " + counts + "</button>\
            </p>";
        $(".epages").html(content);
    }
    $(document).ready(pageBTnE(1));

    /* ///////////////////////// end of educational custom pagination ////////////////////////////// */
});
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 5000,
    },
});
var swiper = new Swiper('.swiper-container-1', {
    effect: 'cube',
    grabCursor: true,
    loop: true,
    speed: 5000,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    autoplay: {
        delay: 4000,
    },
});

