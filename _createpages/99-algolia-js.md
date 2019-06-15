---
title: "Algolia"
description: "全文検索できるよ。あいまい検索やヒットした単語の強調などできて、日本語もOKだったり。"
permalink: /createpages/algolia/
classes: wide
---
{{ page.description }}
{: .notice}

## Algolia登録

1. [Algolia](https://www.algolia.com/)のアカウント作成
1. `New Appligacion`からAppsを作成
  + アプリ名はあとからでも変えられる
  + Community(free) planで問題ないかと（ロゴ表示必須）
   + 地域を選んで`CONTINUE WITH JAPAN AS MAIN DATA CENTER`へ
  + Dashbordが出てくるが、Community(free) planを使うには[Brand Assets](https://www.algolia.com/press#resources)が必須
1. Apps→API keysに必要な情報が
  + Application ID
  + Search-Only API Key
  + Admin API Key

続きは、[Jekyll](/githubpages/algolia-github/)や[Blogger](/sitesystem/blogger/)などへ。  
の予定だったのだが。

## サイトからindexを作成

古すぎて（しかも構造がめちゃくちゃ）無理だろうと諦めていたサイトがあるのだが、[algolia-webcrawler](https://www.npmjs.com/package/algolia-webcrawler)なるものを発見。  
sitemap.xmlなどを潜って行くタイプなので、ページネーションやら何やらを気にしなくても可能。  
ただ、なにぶんWindowsにGit Bashを突っ込んでいる環境なので、この説明は完全に誰得。
{: .notice}

1. （無ければ）[Xml Sitemap Generator](https://xmlsitemapgenerator.org/)などでsitemap.xmlを作成し、FTPで放り込んでおく
1. npmでインストール
```sh
$ npm i algolia-webcrawler -g
```

1. [config.json](https://github.com/DeuxHuitHuit/algolia-webcrawler/blob/master/config.json)のサンプルなどを参照にconfigファイルを作る
<script src="https://gist.github.com/laureltreetop/9d0e2202717e7c5a8d0d746c44275c34.js"></script>
  + APPSを作成したときのキーなどが必要
  + 本文は面倒なのでbodyで取り込み
  + その他いろいろ取り込んだり[^date]
  + "blacklist"にセットできるのはURL（キーワードではない）

1. 実行
```sh
$ algolia-webcrawler --config <jsonな設定ファイル>
```

で、ずらずら～っと登録完了。  
~~自分みたいに破綻しまくりなサイト[^table]じゃない限り、これで大丈夫かと。~~

[^date]:日記の日付が時期によってバラバラだったのでうまい具合に拾ってみた
    + bタグで囲っていた期（1990年代）
    + h4タグで囲っていた期（1990年代）
    + div.dateで囲っていた期（2000年以降）

[^table]: 昔はtableやblockquoteタグでレイアウトしているのもありましたし…

実は本文を[サンプル](https://github.com/DeuxHuitHuit/algolia-webcrawler/blob/master/config.json)のようにタグを指定したり、またはbodyでざっくり取得していたのですが、そうすると本文データが分割されてしまってたんですよね。  
pluginでjsなスクリプトを作って実行すると解決できた。  
スクリプトのpath指定が面倒[^bothersome]なら、`AppData\Roaming\npm\node_modules\algolia-webcrawler`にスクリプトを。

config_plugin.js
<script src="https://gist.github.com/laureltreetop/7f9b0d9be4f3a781214b2bd477b441e2.js"></script>

[^bothersome]: それは自分だ。

余談ですが、過去にiso-2022-jpで作ってて、しかも[Cloudflare](https://www.cloudflare.com)を噛ませていると、文字化け地獄になります。  
CloudflareのPage Rulesで`Email Obfuscation: Off`にしたり、~~見知らぬ言語[^past]で~~pluginsを作ろうとしたりあがいてみましたが、最終的には全部UTF-8な文字コードに変換[^nkf]し、中途半端に書いてあったcharsetも置換[^sed]し、.htaccessに`AddDefaultCharset UTF-8`を追加しました。

[^past]: 当時。しかもちゃんと調べてみたらJavascriptでコードを書いてnodeで処理すればいいと判明。
[^nkf]: コマンドが面倒or苦手なら、Windows的に[KanjiTranslator](http://www.kashim.com/kanjitranslator/index.html)などを使ったり。
[^sed]: 同じく、[TextSS](http://textss.sakura.ne.jp/)を使ったり。って、そもそも古くから携わっている人で「黒い画面」が苦手な人って少ない気がする。

## 検索

instantsearchのバージョンが2から3に上がったので、いろいろ変わったようです。
{: .notice}

### ページネーションあり

まずはページをこんな感じで。
<script src="https://gist.github.com/laureltreetop/07092dcbd8c9dda2e024452f3ce9033f.js"></script>
イチから見た目を整えるのなら、こっちの.cssを呼び出す。
```css
@import url('https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css');
```
スクリプトの最新情報は[Installation
](https://www.algolia.com/doc/guides/building-search-ui/installation/js/)を、cssは[Customize an Existing Widget
](https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/)を確認。

スクリプト。
ぐりぐりカスタマイズするなら、`cssClasses`でclassを追加できる。
<script src="https://gist.github.com/laureltreetop/de97f3a802129e26c1cef9ef1a5d68b5.js"></script>

### 無限スクロール

ついでに無限スクロールバージョンも。  
ページは「ページネーションあり」のやつを一部書き換え[^infinite]。
```html
<div id="searchbox"></div>
<div id="powered-by"></div>
<div id="infinite-hits"></div>
```

スクリプトはこうなる。
<script src="https://gist.github.com/laureltreetop/b7e3c10b8db53a6b0eed47df9f0fef43.js"></script>

[^infinite]: 単に区別するためなので、把握できるのならidはお任せで。

## データバックアップ

コマンドプロンプトが使えて、その他いろいろ導入済みという前提の誰得記録。
{: .notice}

### 前準備

```sh
$ npm install --save algoliasearch
$ npm install --save json
```

### Rubyの場合

```ruby
require 'json'
require 'algoliasearch'

Algolia.init(application_id: 'アプリケーションID',
             api_key:        'API Key')

index = Algolia::Index.new('インデックス名')

hits = []

index.browse do |hit|
  hits.push(hit)
end

File.write('index_filename.json', hits.to_json)
```

### Node.jsの場合

```js
const algoliasearch = require('algoliasearch');

const client = algoliasearch('アプリケーションID', 'API Key');
const index = client.initIndex('インデックス名');

const fs = require('fs');
const browser = index.browseAll();
let hits = [];

browser.on('result', content => {
  hits = hits.concat(content.hits);
});

browser.on('end', () => {
  console.log('Finished!');
  console.log('We got %d hits', hits.length);
  fs.writeFile('index_filename.json', JSON.stringify(hits, null, 2), 'utf-8', err => {
    if (err) throw err;
    console.log('Your index has been exported!');
  });
});

browser.on('error', err => {
  throw err;
});
```