---
layout: single
author_profile: false
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
{{ page.description }}
{: .notice}
<div id="qr-code-text" class="form-mimic">
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
<div>
	<input id="create_qr_text" type="button" value="QRコード生成" class="generate btn btn--primary">
</div>
<div id="qr_text">
</div>
</div>

**Internet ExplorerではSVG形式で保存できないようです。PNG形式でご利用ください。**
+ 電話番号の前にTEL:をつけると、そのまま発信できます
+ URLやメールアドレスはそのままで表示、送信できます
+ 画像を保存する前に、必ず読み取りテストを行ってください
{: .notice--info}