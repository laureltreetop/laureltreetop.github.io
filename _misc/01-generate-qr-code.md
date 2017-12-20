---
title: "QRコード作成について"
description: 実は簡単に作れるのですよ。だけど「電話帳に登録」はちょっとめんどくさい。ので作ってみたときのメモ。
permalink: /misc/generate-qr-code/
---
{{ page.description }}
{: .notice}

## QRコード作成の取っかかり

[電話帳登録用QRコード作成](/tool/qr-code-entry.html)というのを作ってみました。  

### 簡単にQRコード作成
もともとQRコードをさくっと作れるのは知っていたんですよね。
+ [QRコードをGoogle Chart APIで作成して表示する方法](https://allabout.co.jp/gm/gc/24013/)
+ [Google API でQRコードの作成が簡単にできる！色の指定もできて高まりを感じる！！](http://syobochim.hatenablog.com/entry/2013/11/28/020523)

### アドレス帳に登録可能な仕組み

それで調べ物をしていたら、こういう記事がちらほら。
+ [QRコードの生成（携帯電話帳登録用）](http://tomari.org/main/java/qr1.html)
+ [桐でQRコードを作成するには](http://www.kiri-store.com/jirei/qrcode.html)
+ [電話帳へ登録するためのQRコード作成方法（国内3キャリア、iPhone、Android対応）](http://sbkro.hatenablog.jp/entry/2012/07/01/165743)
+ [Google Chart APIを使用して携帯電話のアドレス帳登録用QRコードを生成する](http://symfoware.blog68.fc2.com/blog-entry-766.html)

登録用のコードって、これが基礎になっているようで。
+ [NTT docomo 電話帳登録機能](https://www.nttdocomo.co.jp/service/developer/make/content/barcode/function/application/addressbook/index.html)
+ [au アドレス帳一括入力機能](https://www.au.com/ezfactory/tec/two_dimensions/address.html)

### 文字コード

調べている間に、文字コード問題も出てきたり。
+ [Google Chart API で QRコードを作成](https://qwerty.work/blog/2008/10/google-chart-api-qr.php)
+ [Google Chart API の QRCode 生成機能で日本語を通す方法](http://www.antimon2.atnifty.com/lab/2010/05/google-chart-qrcode.html)

### 公式サイトとか資料的なものとか
で、これを印刷物に使ったりする場合、どうすればいいのかな、と。
+ [QRコードドットコム](http://www.qrcode.com/)
+ [QRコードとは](https://www.keyence.co.jp/ss/products/autoid/codereader/basic2d_qr.jsp)
+ [QRのススメ](https://qr.quel.jp/)

…とまぁ、作成できるサイトも数知れずなのですが、ちょっと自分で作りたくなったので。  
以上。

## 困った。

[QR code APIでQRコードを生成してみた!](http://wp.tech-style.info/archives/932)によると、Google ChartでQRコードを作成するのって非推奨なのですねぇ。  
[QR Code Generator](http://goqr.me/api/)での作成に直しました。

## おまけ。

作成フォームを作るにあたり、欲が出て搭載しちゃった機能もあります。
+ [ajaxzip3](https://github.com/ajaxzip3/ajaxzip3.github.io)
: [超簡単！たった2行だけで郵便番号から住所自動表示する方法：ajaxzip3](http://www.webdesign-fan.com/ajaxzip3)が判りやすい。
+ [YubinBango](https://github.com/yubinbango/yubinbango)
: 本当はこちらのほうがいいみたいですが、これだとうまく動かないパターンが出てきたので、ajaxzip3を使ってます。
