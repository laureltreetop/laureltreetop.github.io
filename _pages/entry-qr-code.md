---
layout: splash
author_profile: false
title: 電話帳登録用QRコード作成
permalink: /entry-qr-code.html
comments: true
share: true
---
<div id="entry-qr-code">
<div>
	<label for="NAME1">氏名:</label>
	<input type="text" id="name" value="" placeholder="氏名">
</div>
<div>
	<label for="NAME2">氏名ふりがな:</label>
	<input type="text" id="kana" value="" placeholder="ふりがな">
</div>
<div>
	<label for="TEL1">電話番号:</label>
	<input type="text" id="tel" value="" placeholder="電話番号">
</div>
<form>
<label for="postcode">郵便番号：</label>
〒<input type="text" id="zip" name="zip" size="10" maxlength="8" onKeyUp="AjaxZip3.zip2addr(this,'','pref','cityaddr');" placeholder="3桁+4桁">
<label for="prefecture">都道府県：</label>
	<select id="pref" name="pref">
		<option value="" selected>（未選択）</option>
		<option value="北海道">北海道</option>
		<option value="青森県">青森県</option>
		<option value="秋田県">秋田県</option>
		<option value="岩手県">岩手県</option>
		<option value="山形県">山形県</option>
		<option value="宮城県">宮城県</option>
		<option value="福島県">福島県</option>
		<option value="茨城県">茨城県</option>
		<option value="栃木県">栃木県</option>
		<option value="群馬県">群馬県</option>
		<option value="埼玉県">埼玉県</option>
		<option value="神奈川県">神奈川県</option>
		<option value="千葉県">千葉県</option>
		<option value="東京都">東京都</option>
		<option value="山梨県">山梨県</option>
		<option value="長野県">長野県</option>
		<option value="新潟県">新潟県</option>
		<option value="富山県">富山県</option>
		<option value="石川県">石川県</option>
		<option value="福井県">福井県</option>
		<option value="岐阜県">岐阜県</option>
		<option value="静岡県">静岡県</option>
		<option value="愛知県">愛知県</option>
		<option value="三重県">三重県</option>
		<option value="滋賀県">滋賀県</option>
		<option value="京都府">京都府</option>
		<option value="大阪府">大阪府</option>
		<option value="兵庫県">兵庫県</option>
		<option value="奈良県">奈良県</option>
		<option value="和歌山県">和歌山県</option>
		<option value="鳥取県">鳥取県</option>
		<option value="島根県">島根県</option>
		<option value="岡山県">岡山県</option>
		<option value="広島県">広島県</option>
		<option value="山口県">山口県</option>
		<option value="徳島県">徳島県</option>
		<option value="香川県">香川県</option>
		<option value="愛媛県">愛媛県</option>
		<option value="高知県">高知県</option>
		<option value="福岡県">福岡県</option>
		<option value="佐賀県">佐賀県</option>
		<option value="長崎県">長崎県</option>
		<option value="熊本県">熊本県</option>
		<option value="大分県">大分県</option>
		<option value="宮崎県">宮崎県</option>
		<option value="鹿児島県">鹿児島県</option>
		<option value="沖縄県">沖縄県</option>
	</select><label for="prefecture">市区町村：</label>
<input type="text" id="cityaddr" name="cityaddr" size="60" placeholder="自動入力">
<label for="lastaddress">番地など：</label>
<input type="text" id="lastaddr" name="lastaddr" placeholder="番地・建物名など追加">
<input type="reset" value="住所クリア">
</form>

<div>
	<label for="MAIL1">E-mail:</label>
	<input type="text" id="mail" value="" placeholder="E-mailアドレス">
</div>
<div>
	<label for="note">その他:</label>
	<input type="textarea" id="note" value="" placeholder="メモ、URLなど">
</div>
<div>
	<label for="size">QRコードサイズ:  
	（150px以上推奨、上限547px）</label>
	<input type="text" id="size" value="200">px
</div>
<div>
	<input id="create_qr" type="button" value="QRコード生成" class="generate">
</div>
<div id="qr_add">
</div>
</div>