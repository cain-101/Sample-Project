var myHub = $.connection.chatBotHub;

$(function () {
    LCSKChat.config();
    LCSKChat.init();
});

var LCSKChat = function () {
    var chatKey = 'lcsk-chatId';
    var requestChat = false;
    var chatId = '';
    var chatEditing = false;

    var options = [];

    function setDefaults() {
        options.position = 'fixed';
        options.placement = 'bottom-right';

        options.headerPaddings = '3px 10px 3px 10px';
        options.headerBackgroundColor = 'rgba(4, 50, 143)';
        options.headerTextColor = 'white';
        options.headerBorderColor = 'none';
        options.headerFontSize = '15px';

        options.boxBorderColor = 'none';
        options.boxBackgroundColor = 'black';

        options.width = 250;

        options.offlineTitle = 'Mail us!';
        options.onlineTitle = 'Chat with us!';

        options.waitingForOperator = 'Thanks, give us 1 minute to accept the chat...';
        options.emailSent = 'Your email was sent, thanks we\'ll get back to you asap.';
        options.emailFailed = 'Doh! The email could not be sent at the moment.<br /><br />Sorry about that.';

    }

    function config(args) {
        setDefaults();

        if (args != null) {
            for (key in options) {
                if (args[key]) {
                    options[key] = args[key];
                }
            }
        }
    }

    function getPlacement() {
        if (options.placement == 'bottom-right') {
            return 'bottom:2px;right:5px;';
        }
        return '';
    }

    function init() {
        $('body').append(
            //'<div id="chat-box-header" style="display: block;position:' + options.position + ';' + getPlacement() + 'width:' + options.width + 'px;padding:' + options.headerPaddings + ';color:' + options.headerTextColor + ';font-size:' + options.headerFontSize + ';cursor:pointer;background:' + options.headerBackgroundColor + ';filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'' + options.headerGradientStart + '\', endColorstr=\'' + options.headerGradientEnd + '\');background: -webkit-gradient(linear, left top, left bottom, from(' + options.headerGradientStart + '), to(' + options.headerGradientEnd + '));background: -moz-linear-gradient(top,  ' + options.headerGradientStart + ',  ' + options.headerGradientEnd + ');border:1px solid ' + options.headerBorderColor + ';box-shadow:inset 0 0 7px #0354cb;-webkit-box-shadow:inset 0 0 7px #0354cb;border-radius: 5px;">' + options.offlineTitle + '</div>' +
            //'<div id="chat-box" style="display:none;position:' + options.position + ';' + getPlacement() + 'width:' + options.width + 'px;height:300px;padding: 10px 10px 10px 10px;border: 1px solid ' + options.boxBorderColor + ';background-color:' + options.boxBackgroundColor + ';font-size:small;"></div>'
            '<div id="chat-box-header" class="text-center text-white" style="display: block;position:' + options.position + ';' + getPlacement() + 'width:' + options.width + 'px;padding:' + options.headerPaddings + ';/*color:' + options.headerTextColor + ';*/font-size:' + options.headerFontSize + ';cursor:pointer;/*background:' + options.headerBackgroundColor + ';box-shadow:inset 0 0 7px #0354cb;-webkit-box-shadow:inset 0 0 7px #0354cb;*/border-top-left-radius: 5px;border-top-right-radius: 5px;z-index: 5000;">' + options.offlineTitle + '</div>' +
            '<div id="chat-box" style="display:none;color:white;position:' + options.position + ';' + getPlacement() + 'width:' + options.width + 'px;height:320px;padding: 10px 10px 10px 10px;border: 1px solid ' + options.boxBorderColor + ';/*background-color:' + options.boxBackgroundColor + ';opacity: 0.8;*/font-size:14px !important;z-index:5000; margin-bottom: 0px; margin-right: auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"></div>'
        );

        $.connection.hub.start()
            .done(function () {
                var existingChatId = getExistingChatId(chatKey);
                myHub.server.logVisitor(window.location.href, document.referrer, existingChatId);
                toggleChatBox();
            })
            .fail(function () { chatRefreshState(false);});

        $('body').on({
            click: function () {
                toggleChatBox();
            }
        }, '#chat-box-header');

        $('#chat-box').on({
            keydown: function (e) {
                var msg = $(this).val();
                if (e.keyCode == 13 && msg != '') {
                    e.preventDefault();
                    e.stopPropagation();

                    if (chatId == null || chatId == '') {
                        myHub.server.requestChat(msg);
                        $('#chat-box-msg').html("<p class='text-dark'>"+options.waitingForOperator+"</p>");
                    } else {
                        myHub.server.send(msg);
                    }

                    $('#chat-box-textinput').val('');
                }
            }
        }, '#chat-box-textinput');

        $('#chat-box').on({
            keydown: function () {
                chatEditing = true;
            }
        }, '.chat-editing');

        $('#chat-box').on({
            click: function () {
                myHub.server.sendEmail($('#chat-box-email').val(), $('#chat-box-cmt').val());

                $('#chat-box').html("<p class='text-dark'>"+options.emailSent+"</p>");
                chatEditing = false;
            }
        }, '#chat-box-send');
    }

    function chatRefreshState(state) {
        if (state) {
            $('#chat-box-header').text(options.onlineTitle);
            if (!requestChat) {
                $('#chat-box').html(
                    '<div id="chat-box-msg" style="height:265px;overflow:auto;">' +
                    '<p class="text-dark">Have a question? Let\'s chat!</p><p style="color:#e34627">Add your question on the field below and press ENTER.</p></div>' +
                    '<div id="chat-box-input" style="height:35px;width:100%"><textarea id="chat-box-textinput" style="width:100%;height: 32px;border-radius: 3px;"></textarea></div>'
                );
            }
        } else {
            if (!chatEditing) {
                $('#chat-box-header').text(options.offlineTitle);
                $('#chat-box-input').hide();
                $('#chat-box').html(
                    '<p class="text-dark">Your email</p><input type="text" id="chat-box-email" style="border-radius: 3px;width: 100%;" class="chat-editing guest-chatbox" />' +
                    '<p class="text-dark">Your message</p><textarea id="chat-box-cmt" cols="40" rows="7" class="chat-editing guest-chatbox" style="border-radius: 3px;resize:none"></textarea>' +
                    '<p><input type="button" class="btn btn-primary btn-sm my-btn" id="chat-box-send" value="Send" />'
                );
            }
        }
    }

    function toggleChatBox() {
        var elm = $('#chat-box-header');
        if ($('#chat-box').hasClass('chat-open')) {
            $('#chat-box').removeClass('chat-open');
            elm.css('bottom', '0px');
        } else {
            var y = 301 + elm.height();
            $('#chat-box').addClass('chat-open');
            elm.css('bottom', y);
        }
        $('#chat-box').slideToggle();
    }

    function hasStorage() {
        return typeof(Storage) !== 'undefined';
    }

    function setChatId(chatId) {
        if (hasStorage()) {
            sessionStorage.setItem(chatKey, chatId);
        }
    }

    function getExistingChatId() {
        if (hasStorage()) {
            return sessionStorage.getItem(chatKey);
        }
    }

    myHub.client.setChat = function (id, agentName, existing) {
        chatId = id;
        requestChat = true;

        setChatId(chatId);

        if (existing) {
            if (!$('#chat-box').hasClass('chat-open')) {
                toggleChatBox();
            }

            $('#chat-box-msg').html('<p class="text-dark">Continuing your chat with <strong>' + agentName + '</strong></p>');
        } else {
            $('#chat-box-msg').append('<p class="text-dark">You are now chatting with <strong>' + agentName + '</strong></p>');
        }
    };

    myHub.client.addMessage = function (from, msg) {
        if (chatId != null && chatId != '') {
            if (!requestChat) {
                if (!$('#chat-box').hasClass('chat-open')) {
                    toggleChatBox();
                }
                requestChat = true;
            }

            var msgesBody = "<div class='pl-0 text-dark'>";
            if (from == "Me") {
                msgesBody += "<p class='text-right mb-1 mt-0'><span style='border-radius:50px;background-color:rgba(227, 70, 39, 0.7);padding:5px;color:white'><b>" + from + "</b></span></p>\
                               <p class='p-3 text-right mr-4 mt-0 mb-2' style='color:white;background-color:rgba(227, 70, 39, 0.7);border-radius:10px 0 10px 10px;word-wrap: break-word;'>"+ msg + "</p>";
            }
            else {
                msgesBody += "<p class='text-left pl-0 ml-0 mb-1 mt-2'><span style='border-radius:50px;background-color:rgba(239, 78, 78, 0.7);padding:5px;color:white;'><b>" + from + "</b></span></p>\
                             <p class='p-3 text-left ml-3 mt-2 mb-3' style='color:white;background-color:rgba(239, 78, 78, 0.7);border-radius: 0 10px 10px 10px;word-wrap:break-word;'>"+ msg + "</p>";
            }
            msgesBody += "</div>";
            $('#chat-box-msg').append(msgesBody);
            if (from == '') {
                chatId = '';
                requestChat = false;
            }

            $("#chat-box-msg").scrollTop($("#chat-box-msg")[0].scrollHeight);
        }
    }

    myHub.client.emailResult = function (state) {
        if (!state) {
            $('#chat-box').html("<p class='text-dark'>"+options.emailFailed+"</p>");
        }
    };

    myHub.client.onlineStatus = function (state) {
        chatRefreshState(state);
    };

    return {
        config: config,
        init: init
    }
} ();