---
title: "Newiy Start Bluetooth USBアダブタ BL-V40"
description: "ちゃんとaptX音質で使うにはハードルが高かったという。Windows 7 & Newiy Startでも使えたよ報告的な。"
permalink: /inventory/bl-v40/
classes: wide
---
{{ page.description }}
{: .notice}

## どういうもの?

[Newiy Start Bluetooth USBアダブタ BL-V40](https://amzn.to/2KvwPlm)(Amazon)
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=k-s-web-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07FMMV36Y&linkId=100131cb47a0013ab0f1bf550e03987d"></iframe>

+ 安い
+ aptX対応
+ ツマミ部分がすぐ外れる（セロハンテープで応急処置したまま）

## 状況

+ 付属ドライバをインストールしても使えない
+ 使えたとしても`Bluetooth Hands-free Audio`な認識になっていて、音が割れ割れ  
（`Bluetooth Audio Renderer`だと大丈夫だった記憶が）
+ 仕方なくWindows標準のドライバで使っていたけど、aptX対応ではないので物足りない
+ いちいち再生デバイスから接続・切断しないといけないのが面倒

システムを入れ替える前は使えたので、何か問題があるのだろうと。  
グラフィックボードのドライバがどうのこうの、という記事も見かけたのでその絡み?

## 参考リンク

+ [Bluetoothアダプタのドライバーインストールが失敗して機器が使えない](https://s.webry.info/sp/vogel.at.webry.info/201712/article_5.html)
+ [『正常に接続するまで難易度高すぎ！！　SONY SRS-X1接続までの道』　silvy555さん　のレビュー・評価](http://review.kakaku.com/review/K0000616182/ReviewCD=804137/)
+ [iBUFFALO Bluetooth4.0+EDR/LE対応 USBアダブター ブラック BSBT4D09BK](https://www.amazon.co.jp/gp/aw/cr/rR1YU7S9V93BL8J)

## 作業

regeditでの作業があるので、立ち上げ方を知らない人はやらないほうがいいかと。
{: .notice--danger}

1. `CSR Harmony Wireless Software Stack`をアンインストール
1. USBアダプタを抜く
1. デバイスマネージャからも`Generic Bluetooth Radio`ともうひとつ（とにかくBluetoothなやつを2つ）削除
1. `regedit`でいくつか削除（参考リンクから丸コピ、いくつかは無かった）  
`HKEY_LOCAL_MACHINE`→`SYSTEM`→`CurrentControlSet`→`services`配下
   + csravrcp
   + HFGService
   + csr_bthav
   + CsrBtPort
   + csrduncmdm
   + csrhfgcc
   + csrhidmini
   + csrpan
   + csrserial
   + csrusb
   + csrusbfilter
1. PC再起動
1. 付属CDからドライバインストール
1. `デバイスとプリンター`からPC本体のアイコンを右クリック
1. `デバイスのインストール設定`→`実行方法を選択`→`コンピュータ上で見つからない場合にWindows Updateから`&hellip;なやつを選択
1. USBアダプタを挿して認識するのを確認
1. さっき`regedit`で削除したところと同じ配下にあるやつの名前を変更
   + BthAvrcp → BthAvrcp_
   + csr_a2dp → csr_a2dp_
1. PC再起動
1. で、ペアリングができるように
