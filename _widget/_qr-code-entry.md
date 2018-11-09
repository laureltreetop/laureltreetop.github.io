---
layout: compress
title: 電話帳登録用QRコード作成
description: 読み取ると携帯・スマホのアドレス帳に登録できるQRコードを作成できます。
permalink: /widget/_qr-code-entry.html
sidebar:
  nav: "sidebar"
---
  <head>
    {% include head.html %}
    {% include head/custom.html %}
  </head>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="/assets/js/jquery.autoKana.js"></script>
<script src="https://yubinbango.github.io/yubinbango/yubinbango.js" charset="UTF-8"></script>
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>

<script>
  FontAwesomeConfig = { searchPseudoElements: true };
</script>
<script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>



  <body class="layout--splash">

{% include_cached browser-upgrade.html %}
{% include_cached masthead.html %}

<div class="initial-content">

<div id="main" role="main">
  <article class="splash" itemscope itemtype="http://schema.org/CreativeWork">
    {% if page.title %}<meta itemprop="headline" content="{{ page.title | markdownify | strip_html | strip_newlines | escape_once }}">{% endif %}
    {% if page.excerpt %}<meta itemprop="description" content="{{ page.excerpt | markdownify | strip_html | strip_newlines | escape_once }}">{% endif %}
    {% if page.date %}<meta itemprop="datePublished" content="{{ page.date | date: "%B %d, %Y" }}">{% endif %}
    {% if page.last_modified_at %}<meta itemprop="dateModified" content="{{ page.last_modified_at | date: "%B %d, %Y" }}">{% endif %}

    <section class="page__content" itemprop="text">


<h2>{{ page.title }}</h2>
<div class="notice">{{ page.description }}</div>
    
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
<div id="g-recaptcha"></div>
<div>
	<input id="create_qr_entry" type="button" value="QRコード生成" class="recaptcha generate btn btn--primary" disabled>
</div>
<div id="qr_add"></div>
</div>

<strong>Internet Explorerなど、環境によってはSVG形式で保存できないようです。PNG形式でご利用ください。</strong>
<div class="notice--info">
<li>画像を保存する前に、必ず読み取りテストを行ってください</li>
<li>環境により、読み取りはできても登録されない項目もあります（メモなど）</li>
<li>名前は姓名まとめて姓または名に登録されます</li>
<li>郵便番号は自動入力用で、電話帳には登録できません</li>
</div>
<p id="page-top"><a href="#"><i class="fa fa-angle-double-up fa-2x" aria-hidden="true"></i></a></p>

    </section>
  </article>
</div>

</div>

    <div class="page__footer">
      <footer>
        {% include footer/custom.html %}
        {% include_cached footer.html %}
      </footer>
    </div>

<script src="/assets/js/footer-custom.js"></script>
</body>