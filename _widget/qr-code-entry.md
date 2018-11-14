---
title: 電話帳登録用QRコード作成
description: 読み取ると携帯・スマホのアドレス帳に登録できるQRコードを作成できます。
permalink: /widget/qr-code-entry.html
---
## {{ page.title }}

{{ page.description }}
{: .notice}

<form id="qr-code-entry" class="form-mimic">
<div class="fullname">
<div id="section-name">
    <label for="NAME1">名前:</label>
	<input type="text" id="name" value="" placeholder="" />
</div>
<div id="section-kana">
	<label for="NAME2">名前ふりがな:</label>
	<input type="text" id="kana" value="" placeholder="" />
</div>
</div>
<div id="section-tel">
	<label for="TEL1">電話番号:</label>
	<input type="text" id="tel" value="" placeholder="" />
</div>
<div class="h-adr">
<div id="section-zip">
    <span class="p-country-name" style="display:none;">Japan</span>
	住所:
  〒<input type="text" id="zipcode" class="p-postal-code" maxlength="8" />（自動入力用）<br>
</div>
<div id="section-adr1">
  <input type="text" id="pref" class="p-region" placeholder="（都道府県）" />
</div>
<div id="section-adr2">
    <input type="text" id="city" class="p-locality" placeholder="（市区町村）" />
</div>
<div id="section-adr3">
  <input type="text" id="street" class="p-street-address" placeholder="（番地）" />
</div>
<div id="section-adr4">
  <input type="text" id="extend-add" class="p-extended-address" placeholder="（建物名など）" />
</div>
</div>
<div id="section-mail">
	<label for="MAIL1">E-mail:</label>
	<input type="text" id="mail" value="" placeholder="" />
</div>
<div id="section-memo">
	<label for="note">その他:</label>
	<textarea type="textarea" id="note" value="" placeholder="メモ、URLなど"></textarea>
</div>
<div id="section-qrsize">
	<label for="qrsize">QRコードサイズ:</label>
	<input type="text" id="qrsize" value="200" />
</div>
<div id="section-qrformat">
	<label for="qrformat">画像形式:</label>
	<select id="qrformat" name="qrformat">
	<option value="png">PNG形式（Webに最適）</option>
	<option value="svg">SVG形式（印刷物に最適）</option>
	</select>
</div>
<div id="g-recaptcha"></div>
<div id="section-button">
	<input id="create_qr_entry" type="button" value="QRコード生成" class="recaptcha generate btn btn--primary" disabled />
    <input id="reset_qr_entry" type="reset" value="クリア" class="btn" />
</div>
<div id="qr_add"></div>
</form>

**Internet Explorerなど、環境によってはSVG形式で保存できないようです。PNG形式でご利用ください。**
+ 画像を保存する前に、必ず読み取りテストを行ってください
+ 環境により、読み取りはできても登録されない項目もあります（メモなど）
+ 名前は姓名まとめて姓または名に登録されます
+ 郵便番号は自動入力用で、電話帳には登録できません
{: .notice--info}