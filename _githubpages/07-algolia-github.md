---
title: "Algolia and GitHub"
description: 全文検索できるよ。日本語もOKだったり。
permalink: /githubpages/algolia-github/
---
後述のように[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)だと設置は楽。設定が大変なのは変わり無し。
{: .notice}

## Algolia

1. [Algolia](https://www.algolia.com/)のアカウント作成
1. `New Appligacion`からAPPSを作成
  + アプリ名はあとからでも変えられるが、混乱しそうだったらアプリ名を入れるのも可
  + 地域を選んで`CONTINUE WITH JAPAN AS MAIN DATA CENTER`へ
  + Dashbordが出てくるが、Community(free) planを使うには[Brand Assets](https://www.algolia.com/press#resources)が必須
1. algoliaのダッシュボードに戻ってindex（というか判りやすい名前でOK）を作成。先に入っているgetstarted_actorsは消してもいいというか、消さないと混乱するかも?

## Jekyll

1. _config.ymlに設定追加
```yaml
algolia:
  application_id         : "APPS ID" # YOUR_APPLICATION_ID
  index_name             : "indexの名前" # YOUR_INDEX_NAME
  search_only_api_key    : "Search-Only API Keyからコピってくる" # YOUR_SEARCH_ONLY_API_KEY
```
1. Gemfileに追加だったり修正だったり
```ruby
gem 'github-pages', group: :jekyll_plugins
group :jekyll_plugins do
	gem 'jekyll-algolia', '~> 1.0'
end
```
1. でもって`bundle update`を叩く
1. 先にnetlify.tomlを作成
```toml
# netlify.toml
# This file should be at the root of your project
[build]
  command = "jekyll build && jekyll algolia"
  publish = "_site"
```

## Netlify

「GitHubの内容をGitHub PagesではなくNetlifyで公開する」というものらしい。  
ってことはGitHub Pagesってジャンルじゃないよね…  
{: .notice}

1. [Netlify](https://www.netlify.com/)のアカウントを作成

1. `Sites`→`New site from Git`でサイト設定

  1. `Continuous Deployment`でGitHubを選ぶ
  1. repository一覧が出るので選ぶ
  1. `Deploy settings for`なんちゃら、を設定して`Deploy site`

    + `Build command`に`jekyll build`
    + `Publish directory`に`_site`

1. GitHubと連携させる
  + このタイミングでGitHubリポジトリのDeploy keysにNetlifyが追加されてる
  + `Setting`→`Webhooks`→`Payload URL`にも追加されてる
```
https://api.netlify.com/hooks/github
```

1. `Build & deploy`→`Continuous Deployment`→`Build environment variables`に`ALGOLIA_API_KEY
`を設定。値はAlgoliaの`APPS`→作成したアプリ→`API Keys`→`Admin API Key`

1. `Dmain management`→`Domains`→`Custom domains`→`Add custom domain`へ
   1. カスタムドメインを入力
   1. `Check DNS configuration`と怒られているので<i class="fas fa-ellipsis-h"></i>からGo to DNS settingへ
   1. 既にNETLIFYと紐付いている

1. `Build & deploy`→`Deploy notifications`で、`Add notification`
   1. `GitHub commit status`
   1. `Event to listen for`で`Deploy started`を選ぶ
   1. `Generate access token in GitHub`でトークンを取得し、Save
   
たぶん、このあたりまで作業したらalgoliaのダッシュボードでコンテンツが取り込まれてるのが確認できるかと。
{: .notice}

### ついでにHTTPSの設定も

せっかく(?)なのでHTTPS設定をするもよし。

#### パターンその1

Netlify側で設定…したいのだが、Force HTTPSがうまくいかない。Betaだからかな?  
DNS設定はこんな感じで。

| name | Type  | Target            |
|------|-------|-------------------|
| @    | A     | 104.198.14.52     |
| www  | CNAME | ユーザID.github.io |

#### パターンその2

NetlifyでDNS設定も可能。まだ試してないけど。

#### パターンその3

別サイトで設定中。
   1. [SSLなう!](https://sslnow.ml/)にてLet's Encryptに登録
   1. 生成時に使ったRSAと発行された証明書を準備しておく
   1. `Dmain management`→`HTTPS`でcustom certificateを選択
   1. 生成したやつをペタペタと貼る

## ローカルテスト

1. ローカルでコマンドを叩く
```sh
$ ALGOLIA_API_KEY='Admin API Key' bundle exec jekyll algolia
```
1. こういうのが出た
```
Processing site...                                                              
Extracting records...                                                           
Updating records in index index...                                              
Records to delete: 390                                                          
Records to add:    390                                                          
✔ Indexing complete
```
1. Minimal Mistakesだと4.10.0からalgoliaにも対応
1. 普通に`jekyll s`コマンドを叩く
1. 動いた(*´∇｀*)

## GitHubへ
1. GitHubにpush
1. 動いてる(*´∇｀*)

## 自分で検索フォームを作ってみる

（たぶん）簡単そうな[InstantSearch.js](https://community.algolia.com/instantsearch.js/)でフォームを作るなら、
[Getting started](https://community.algolia.com/instantsearch.js/v2/getting-started.html)とか、古いっぽいけど[v1 documentation](https://community.algolia.com/instantsearch.js/v1/documentation/)も役に立つ。

以下、随時更新するようなしないような。

### Jekyll側の設定

…は先述通り

### スクリプトとかCSSとか

`<head>`内に放り込む。

```html
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@1/dist/instantsearch.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.5.2/dist/instantsearch.min.css">
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@2.5.2"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.5.2/dist/instantsearch-theme-algolia.min.css">
```

### フォーム

無料で使うんだからロゴぐらい置いてね?（意訳）ということなので、[Brand Assets](https://www.algolia.com/press#resources)から画像を捕獲して貼り付けておく。

```html
    <input type="text" id="search-box" /><img src="/images/search-by-algolia.svg" width="200">
    <div id="refinement-list"></div>
    <div id="hits-container"></div>
    <div id="pagination-container"></div>

    <script src="/js/algolia.js"></script>
```

### スクリプト

<script src="https://gist.github.com/laureltreetop/0394196acb33b428836f7915addad9e7.js"></script>