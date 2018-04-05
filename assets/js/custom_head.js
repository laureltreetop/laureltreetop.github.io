$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

$("h1.page__title").text(
	$.trim(
		$("h1.page__title").text()
	)
).lettering();

$(function() {
	var topBtn = $('#page-top');
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
	topBtn.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

$(document).ready(
	function() {
		$.fn.autoKana('#name', '#kana', {});
});

$(document).ready(function(){
	$('textarea').autosize({
		append: "\n"
	});
})

$(function() {
	$("#create_qr_entry").click(make_qr);
});

function make_qr() {
	var data = new Array();
	data['name'] = $("#name").val();
	data['kana'] = $("#kana").val();
	data['tel'] = $("#tel").val();
	data['mail'] = $("#mail").val();
	data['add'] = $("#pref").val() + $("#city").val() + $("#street").val() + $("#extend-add").val();
	data['note'] = $("#note").val();
	data['qrsize'] = $("#qrsize").val();
	data['qrformat'] = $("#qrformat").val();

	$("#qr_add").html('<img src="' + make_url(make_address_qr(data)) + '">');
}

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
	//var url = "http://chart.apis.google.com/chart?cht=qr&chs="+ $("#qrsize").val()+ "x"+ $("#qrsize").val()+ "&chld=M|5&choe=Shift_JIS&chl=";
	var url = "https://api.qrserver.com/v1/create-qr-code/?size=" + $("#qrsize").val() + "x"+ $("#qrsize").val() + "&qzone=3&format=" + $("#qrformat").val() + "&data=";
	url += data_encoded;
	return url;
}

$(function() {
	$("#create_qr_text").click(make_qr_text);
});
function make_qr_text() {
	var data = new Array();
	data['note'] = $("#note").val();
	data['qrsize'] = $("#qrsize").val();
	data['qrformat'] = $("#qrformat").val();

	$("#qr_text").html('<img src="' + make_url(data['note']) + '"&format=' + data['qrformat'] + '>');
}
