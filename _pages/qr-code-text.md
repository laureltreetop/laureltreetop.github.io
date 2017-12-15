---
layout: single
author_profile: false
title: テキスト用QRコード作成
permalink: /qr-code-text.html
sidebar:
  nav: "sidebar"
---
+ 電話番号の前にTEL:をつけると、そのまま発信できます
+ URLやメールアドレスはそのままで表示、送信できます
<div id="qr-code-text" class="form-mimic">
<div>
	<label for="note">テキスト:</label>
	<textarea type="textarea" id="note" value="" placeholder="メモ、URLなど"></textarea>
</div>
<div>
	<label for="qrsize">QRコードサイズ（上限547px）:</label>
	<input type="text" id="qrsize" value="200">px
</div>
<div>
	<input id="create_qr_text" type="button" value="QRコード生成" class="generate btn btn--primary">
</div>
<div id="qr_text">
</div>
</div>