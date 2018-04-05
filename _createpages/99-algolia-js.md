---
title: "Algolia with Javascrpt"
description: 全文検索できるよ。日本語もOKだったり。
permalink: /createpages/algolia/
classes: wide
---
{{ page.description }}
{: .notice}

## Algolia登録

1. [Algolia](https://www.algolia.com/)のアカウント作成
1. `New Appligacion`からAPPSを作成
  + アプリ名はあとからでも変えられるが、混乱しそうだったらアプリ名を入れるのも可
  + 地域を選んで`CONTINUE WITH JAPAN AS MAIN DATA CENTER`へ
  + Dashbordが出てくるが、Community(free) planを使うには[Brand Assets](https://www.algolia.com/press#resources)が必須
1. algoliaのダッシュボードに戻ってindex（というか判りやすい名前でOK）を作成。先に入っているgetstarted_actorsは消してもいいというか、消さないと混乱するかも?

続きは、[Jekyll](/githubpages/algolia-github/)や[Blogger](/blogsystem/blogger/)などへ。  
の予定だったのだが。

## サイトからindexを作成

古すぎて（しかも構造がめちゃくちゃ）無理だろうと諦めていたサイトがあるのだが、[algolia-webcrawler](https://www.npmjs.com/package/algolia-webcrawler)なるものを発見。  
sitemap.xmlなどを潜って行くタイプなので、ページネーションやら何やらを気にしなくても可能。

1. （無ければ）[Xml Sitemap Generator](https://xmlsitemapgenerator.org/)などでsitemap.xmlを作成し、FTPで放り込んでおく
1. npmでインストール[^npm]
```sh
$ npm i algolia-webcrawler -g
```

1. configファイルを作る[^config]（[config.json](https://github.com/DeuxHuitHuit/algolia-webcrawler/blob/master/config.json)のサンプルもある）
1. 実行
```sh
algolia-webcrawler --config <jsonな設定ファイル>
```

[^npm]: そのうち、Node.jsとかその周辺も書いたほうがいいのかなぁ。
[^config]: 自分のは特殊すぎる例なので晒せないです。ヒントとしては、h1などのタグを追加したり、textの方にもタグを追加したりなど、項目は増やせます。

で、あっけなく登録完了。  
自分みたいに破綻しまくりなサイト[^table]じゃない限り、これで大丈夫かと。

[^table]: 昔はtableやblockquoteタグでレイアウトしているのもありましたし…

あ、過去にiso-2022-jpで作ってて、しかも[Cloudflare](https://www.cloudflare.com)を噛ませていると、文字化け地獄になります。  

CloudflareのPage Rulesで`Email Obfuscation: Off`にしたり、見知らぬ言語でpluginsを作ろうとしたりあがいてみましたが、最終的には全部UTF-8な文字コードに変換[^nkf]し、中途半端に書いてあったcharsetも置換[^sed]し、.htaccessに`AddDefaultCharset UTF-8`を追加しました。

[^nkf]: コマンドが面倒or苦手なら、Windows的に[KanjiTranslator](http://www.kashim.com/kanjitranslator/index.html)などを使ったり。
[^sed]: 同じく、[TextSS](http://textss.sakura.ne.jp/)を使ったり。って、そもそも古くから携わっている人で「黒い画面」が苦手な人って少ない気がする。