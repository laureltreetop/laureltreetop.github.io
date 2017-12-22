---
layout: single
author_profile: false
title: 電話帳登録用QRコード作成
description: 読み取ると携帯・スマホのアドレス帳に登録できるQRコードを作成できます。
permalink: /gadget/qr-code-entry.html
sidebar:
  nav: "sidebar"
# categories:
#   - Gadget
# tags:
#   - QRcode
---
{{ page.description }}
{: .notice}
<div id="qr-code-entry" class="form-mimic">
<div>
	<label for="NAME1">名前:</label>
	<input type="text" id="name" value="" placeholder="">
</div>
<div>
	<label for="NAME2">名前ふりがな:</label>
	<input type="text" id="kana" value="" placeholder="">
</div>
<div>
	<label for="TEL1">電話番号:</label>
	<input type="text" id="tel" value="" placeholder="">
</div>
<form class="h-adr">
  <span class="p-country-name" style="display:none;">Japan</span>
	住所:
  <!--〒<input type="text" class="p-postal-code" maxlength="8"><br-->
  〒<input type="text" id="zipcode" name="zipcode" class="p-postal-code" maxlength="8" onKeyUp="AjaxZip3.zip2addr(this,'','pref','city','street');">（自動入力用）<br>
  <input type="text" id="pref" name="pref" class="p-region" placeholder="（都道府県）" />
  <input type="text" id="city" name="city" class="p-locality" placeholder="（市区町村）" /><br>
  <input type="text" id="street" name="street" class="p-street-address" placeholder="（番地）" /><br>
  <input type="text" id="extend-add" class="p-extended-address" placeholder="（建物名など）" />
  <input type="reset" value="住所クリア" class="btn">
</form>
<div>
	<label for="MAIL1">E-mail:</label>
	<input type="text" id="mail" value="" placeholder="">
</div>
<div>
	<label for="note">その他:</label>
	<textarea type="textarea" id="note" value="" placeholder="メモ、URLなど"></textarea>
</div>
<div>
	<label for="qrsize">QRコードサイズ:</label>
	<input type="text" id="qrsize" value="200">
</div>
<div>
	<label for="qrformat">画像形式:</label>
	<select id="qrformat" name="qrformat">
	<option value="png">PNG形式（Webに最適）</option>
	<option value="svg">SVG形式（印刷物に最適）</option>
	</select>
</div>
<div>
	<input id="create_qr_entry" type="button" value="QRコード生成" class="generate btn btn--primary">
</div>
<div id="qr_add">
</div>
</div>

+ 画像を保存する前に、必ず読み取りテストを行ってください
+ 環境により、読み取りはできても登録されない項目もあります（メモなど）
+ 名前は姓名まとめて姓または名に登録されます
+ 郵便番号は自動入力用で、電話帳には登録できません
{: .notice--info}