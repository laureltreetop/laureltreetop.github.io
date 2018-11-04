---
title: "reCAPTCHA"
description: "フォーム送信時に「自分はbotじゃないですよ」の確認を。"
permalink: /createpages/recaptcha/
classes: wide
---
{{ page.description }}
{: .notice}

どうやら自分が登録したのは、最新のv3がリリースされたタイミングだったらしい。  
[グーグル、「reCAPTCHA」に新バージョン--操作不要で人間であると証明可能に](https://japan.cnet.com/article/35127820/)  
[「私はロボットではありません」選ぶ必要なし　新「reCAPTCHA」Googleが公開、ユーザーは何もしなくてOK](http://www.itmedia.co.jp/news/articles/1810/30/news109.html)

## チェックマークで確認

v2ではチェックマークを入れさせたり、場合によっては画像をぽちぽちしたりなどでbotではないことを確認する。  
ユーザ側からも判りやすい。でも確認は手間。
{: .notice}

1. [reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html)にサイトを登録  
   `reCAPTCHA v2` → `Checkbox`を選択  
   `Domains`にはテスト用環境としてローカルIPなどを追加すると吉
[![reCAPTCHA new site](/assets/images/recaptcha_admin-new-site-v2.png)](/assets/images/recaptcha_admin-new-site-v2.png)

1. 設置に必要な情報が表示される
[![reCAPTCHA site setting v2](/assets/images/recaptcha_admin-site-setting-v2.png)](/assets/images/recaptcha_admin-site-setting-v2.png)

1. `<head>`内に設置
```html
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer>
```

1. `<form>`内にチェック後に有効にしたいボタンやら入力欄やらに`disabled`を追加  
   ついでにreCAPTCHAチェックボックスも追加  
   例に挙げたのは[テキスト用QRコード作成](/widget/qr-code-text.html)での設定[^submitbutton]
<script src="https://gist.github.com/laureltreetop/d81231e9fabbb56e260f546c7069ec5b.js"></script>  

1. reCAPTCHA承認後や期限切れ時にボタンやら入力欄やらの`disabled`を制御するスクリプトを追加
<script src="https://gist.github.com/laureltreetop/7f777a21ce36b90bdbeb846f8d7ccbba.js"></script>

1. form処理部分に追加
<script src="https://gist.github.com/laureltreetop/58e8147ccd9d7e6c32b3e215b5d335e7.js"></script>

[^submitbutton]: submitではなくbuttonなのは都合上なので、気にしたら負け。

  
## ユーザ側の手間無しで確認

v3は画像ポチポチをしなくてもいいなど、意識せずに承認されてる。  
v2 Invisibleみたいな感じ?  
使い方はそのうちに…
{: .notice}

[![reCAPTCHA new site](/assets/images/recaptcha_admin-new-site.png)](/assets/images/recaptcha_admin-new-site.png)
[![reCAPTCHA site setting](/assets/images/recaptcha_admin-site-setting.png)](/assets/images/recaptcha_admin-site-setting.png)

{% comment %}
+ [https://syncer.jp/how-to-introduction-recaptcha](https://syncer.jp/how-to-introduction-recaptcha)
+ [https://developer.a-blogcms.jp/hands-on/camp2017spring/entry-2703.html](https://developer.a-blogcms.jp/hands-on/camp2017spring/entry-2703.html)
+ [Invisible reCAPTCHA 入れてみた](http://www.techscore.com/blog/2018/09/08/invisible-recaptcha-%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%BF%E3%81%9F/)
{% endcomment %}