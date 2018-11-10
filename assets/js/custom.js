$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 400;
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});

$("h1.page__title").text(
    $.trim(
        $("h1.page__title").text()
    )
).lettering();

$.fn.autoKana('#name', '#kana');

$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});
/*
    $('input[name="accordion-toc"]').change(function () {
        if ($(this).prop('checked')) {
            $('[name="accordion-toclist"]').prop('checked', false);
        }
    });
    $('input[name="accordion-toclist"]').change(function () {
        if ($(this).prop('checked')) {
            $('[name="accordion-toc"]').prop('checked', false);
        }
    });
*/

$(function () {
    $('#create_qr_entry').click(function () {
        var response = grecaptcha.getResponse();
        if (!!response) {
            var data = new Array();
            data['name'] = $("#name").val();
            data['kana'] = $("#kana").val();
            data['tel'] = $("#tel").val();
            data['mail'] = $("#mail").val();
            data['add'] = $("#pref").val() + $("#city").val() + $("#street").val() + $("#extend-add").val();
            data['note'] = $("#note").val();
            data['qrsize'] = $("#qrsize").val();

            if (data['name'] == "") {
                $("#qr_add").html('<span>名前は必ず入力してください。</span>');
            } else if (data['tel'] + data['mail'] + data['add'] + data['note'] == "") {
                $("#qr_add").html('<span>項目は必ず1つ以上入力してください。</span>');
            } else {
                $("#qr_add").html('<img src="' + make_url(make_address_qr(data)) + '">');
            }
        } else {
            $('#qr_add').html('<span>認証をやり直してください。</span>');
            $('.recaptcha').prop('disabled', true);
            grecaptcha.reset();
        }
    });
});

function make_address_qr(data) {
    var result = "";
    result += "MECARD:N:" + data['name'] + ";";
    result += "SOUND:" + data['kana'] + ";";
    result += "TEL:" + data['tel'] + ";";
    result += "ADR:" + data['add'] + ";";
    result += "EMAIL:" + data['mail'] + ";";
    result += "NOTE:" + data['note'] + ";;\r\n";
    result += "MEMORY:" + data['note'] + "\r\n";
    result += "NAME1:" + data['name'] + "\r\n";
    result += "NAME2:" + data['kana'] + "\r\n";
    result += "TEL1:" + data['tel'] + "\r\n";
    result += "ADD:" + data['add'] + "\r\n";
    result += "MAIL1:" + data['mail'] + "\r\n";
    return result;
}

function make_url(data_string) {
    var data_encoded = encodeURI(data_string);
    var url = "https://api.qrserver.com/v1/create-qr-code/?size=" + $("#qrsize").val() + "x" + $("#qrsize").val() + "&qzone=3&format=" + $("#qrformat").val() + "&data=";
    url += data_encoded;
    return url;
}

$(function () {
    $('#create_qr_text').click(function () {
        var response = grecaptcha.getResponse();
        if (!!response) {
            var data = new Array();
            if (!!$('#note').val()) {
                data['note'] = $('#note').val();
                data['qrsize'] = $('#qrsize').val();
                data['qrformat'] = $('#qrformat').val();

                $('#qr_text').html('<img src="' + make_url(data['note']) + '"&format=' + data['qrformat'] + '>');
            } else {
                $('#qr_text').html('<span>テキストを入力してください。</span>');
            }
        } else {
            $('#qr_text').html('<span>認証をやり直してください。</span>');
            $('.recaptcha').prop('disabled', true);
            grecaptcha.reset();
        }
    });
});

var onloadCallback = function () {
    grecaptcha.render('g-recaptcha', {
        'callback': function (response) {
            $('.recaptcha').prop('disabled', false);
        },
        'expired-callback': function (response) {
            $('.recaptcha').prop('disabled', true);
        },
        'sitekey': '6LeZoncUAAAAAM1VQsbprrg6tTuj3-1Zsv2pX4ls'
    });
};
