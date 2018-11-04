---
title: テキスト用QRコード作成
description: 雑多なテキストをやり取りするためのQRコードを作成できます。
permalink: /widget/qr-code-text.html
sidebar:
  nav: "sidebar"
# categories:
#   - Widget
# tags:
#   - QRcode
---
## {{ page.title }}

{{ page.description }}
{: .notice}
<form id="qr-code-text" class="form-mimic">
<div>
	<label for="note">テキスト:</label>
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
<div id="g-recaptcha"></div>
<div>
    <input id="create_qr_text" type="button" value="QRコード生成" class="recaptcha generate btn btn--primary" disabled>
    <!--input id="reset_qr_text" type="reset" value="クリア" class="generate btn btn--inverse"-->
</div>
<div id="qr_text">
</div>
</form>

**Internet Explorerなど、環境によってはSVG形式で保存できないようです。PNG形式でご利用ください。**
+ 電話番号の前に**TEL:**をつけると、読み込みデータから発信できます
+ URLやメールアドレスはそのままで表示、送信できます
+ 画像を保存する前に、必ず読み取りテストを行ってください
{: .notice--info}