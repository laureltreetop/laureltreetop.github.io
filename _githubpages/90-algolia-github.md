---
title: "Algolia and GitHub"
description: "全文検索できるよ。日本語もOKだったり。"
permalink: /githubpages/algolia-github/
classes: wide
---
後述のように[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)だと設置は楽。設定が大変なのは変わり無し。
{: .notice}

## Algolia

…の設定は、[ページ作成のAlgolia](/createpages/algolia/)を参照。

## Netlify

「GitHubの内容をGitHub PagesではなくNetlifyで公開する」というものらしい。  
ってことはGitHub Pagesってジャンルじゃないよね…  
GitHub Pagesにて既にサイトを公開している場合は、カスタムドメインを削除しておくべし。
{: .notice--info}

1. [Netlify](https://www.netlify.com/)のアカウントを作成
1. `Sites`→`New site from Git`でサイト設定
    1. `Continuous Deployment`でGitHubを選ぶ
    [![Netlify](/assets/images/netlify_add-sites-git.png)](/assets/images/netlify_add-sites-git.png)
    [![Netlify](/assets/images/netlify_add-sites_choose.png)](/assets/images/netlify_add-sites_choose.png)
    1. repository一覧が出るので選ぶ
    [![Netlify](/assets/images/netlify_add-sites_git-repository.png)](/assets/images/netlify_add-sites_git-repository.png)
    1. Build opitionsなどを設定だけど、あとでコマンドなどの設定も追加するんだよね…とりあえずで
      + `Build command`に`jekyll build && jekyll algolia`
      + `Publish directory`に`_site`
    [![Netlify](/assets/images/netlify_add-sites_build-options.png)](/assets/images/netlify_add-sites_build-options.png)
      + Show advanced
    [![Netlify](/assets/images/netlify_create-new-site-advanced.png)](/assets/images/netlify_create-new-site-advanced.png)
      + `ALGOLIA_API_KEY`の値としてAlgoliaの`APPS`→作成したアプリ→`API Keys`→`Admin API Key`を設定
    [![Netlify](/assets/images/netlify_create-new-site-advanced-value.png)](/assets/images/netlify_create-new-site-advanced-value.png)
    
    このタイミングでGitHubリポジトリのSettingsのDeploy keysやwebhooksにNetlifyが追加されてる
	{: .notice--info}
1. お好みで`Default subdomain`を分かりやすい名前に変えたり
1. `Domain management`→`Domains`→`Custom domains`→`Add custom domain`へ
[![Netlify](/assets/images/netlify_domains.png)](/assets/images/netlify_domains.png)
   + DNSをNetlifyにする場合
     1. カスタムドメインを入力
     1. <i class="fas fa-exclamation-triangle" style="color: orange"></i>`Check DNS configuration`と怒 られるが、しばらくすると`Use Netlify DNS`に行けるように
     1. ボタンをポチポチと押していき、最後に出てくるネームサーバ（複数パターンあり）を設定する
     1. NetlifyのDNS設定で自動でこういうレコードができてる

     | name | Type    | Target          |
     |------|---------|-----------------|
     | @    | NETLIFY | www.netlify.com |
     | www  | NETLIFY | www.netlify.com |

   + DNSは今までどおりにする場合（全然まとまってないけど）
     + GitHub Pagesにカスタムドメインでの設定でDNSはこうなっているかと
     
     | name | Type  | Target                    |
     |------|-------|---------------------------|
     | @    | A     | 185.199.108.153           |
     | @    | A     | 185.199.109.153           |
     | @    | A     | 185.199.110.153           |
     | @    | A     | 185.199.111.153           |
     | www  | CNAME | ユーザID.github.io         |
     | www  | CAA   | 0 issue "letsencrypt.org" |
     
     + でもあとどうだったかな…?
     + これは前に設定したときのDNS設定
     
     | name | Type  | Target                    |
     |------|-------|---------------------------|     
     | @    | A     | 104.198.14.52             |
     | www  | CNAME | [サイト名].netlify.com     |

1. `Domain management`→`HTTPS`→`Verify DNS configuration`でLet's Encryptな証明書を作成できる[^lets-encrypt]
[![Netlify](/assets/images/netlify_domains_add-custom-domain_https-wait-propagation.png)](/assets/images/netlify_domains_add-custom-domain_https-wait-propagation.png)
1. 設定方法を忘れてしまった…[Troubleshooting](https://www.netlify.com/docs/ssl/#troubleshooting)を見て設定した記憶が
[![Netlify](/assets/images/netlify_domains_https-dns-verification-ok.png)](/assets/images/netlify_domains_https-dns-verification-ok.png)
1. _redirectsファイルを作成
```
# Redirect default Netlify subdomain to primary domain
https://<site-name>.netlify.com/* https://<custom-subdomain>/:splat 301!
```
[![Netlify](/assets/images/netlify_redirect-subdomain.png)](/assets/images/netlify_redirect-subdomain.png)
1. netlify.tomlを作成
```toml
# netlify.toml
# This file should be at the root of your project
[build]
  command = "jekyll build && jekyll algolia"
  publish = "_site"
```
1. `Deploys`→`Trigger deploy`で叩いてみる
1. うまくいったら、あとはgit pushのたびに良きに計らってくれる

[^lets-encrypt]: DNS設定の流れですぐに設定しようとしたら、最低1時間くらいは待ちやがれ、と怒られた(´・ω・`)

## Jekyll

1. _config.ymlに設定追加
```yml
algolia:
  application_id         : "APPS ID" # YOUR_APPLICATION_ID
  index_name             : "indexの名前" # YOUR_INDEX_NAME
  search_only_api_key    : "Search-Only API Keyからコピってくる" # YOUR_SEARCH_ONLY_API_KEY
```
1. Gemfileに追加だったり修正だったり
```ruby
gem 'github-pages', group: :jekyll_plugins
group :jekyll_plugins do
	gem 'jekyll-algolia'
end
```
1. でもって`bundle update`を叩く

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
Records to delete: 0                                                          
Records to add:    390                                                          
✔ Indexing complete
```
Algoliaのダッシュボードで、Indicesにデータが流れ込んだのが確認できるかと。

+ Minimal Mistakesだと4.10.0からalgoliaにも対応しているので、
  1. 普通に`jekyll s`コマンドを叩く
  1. 動いた(*´∇｀*)
  1. GitHubにpush
  1. 動いてる(*´∇｀*)

+ それ以外の対応してないテーマには、自力で検索フォームやらを作ることに。次項参照

## 自分で検索フォームを作ってみる

[InstantSearch.js](https://community.algolia.com/instantsearch.js/)でフォームを作る
+ [Getting started](https://community.algolia.com/instantsearch.js/v2/getting-started.html)
+ [Widgets](https://community.algolia.com/instantsearch.js/v2/widgets.html)

今回は[Base](https://learn.cloudcannon.com/templates/base/)なるテーマで作ってみる。やることは他のテーマでも一緒かと。  

### Jekyll側の設定

…は先述通り

### 読み込むもの系

/_layouts/default.htmlの`<head>`内に放り込む。

```html
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@1/dist/instantsearch.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.5.2/dist/instantsearch.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@2.5.2"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.5.2/dist/instantsearch-theme-algolia.min.css"/>
<script src="/js/algolia.js"></script>
```
今までの検索フォームはコメントアウトしておく。

### スクリプト

/js/algolia.jsを作成
<script src="https://gist.github.com/laureltreetop/0394196acb33b428836f7915addad9e7.js"></script>

### フォーム

フォーム用に/algolia.mdを新規作成
{% highlight md %}{% raw %}---
title: "サイト内検索"
description: "algoliaのサイト内検索テスト中。"
permalink: /algolia.html
---
<section class="instantsearch">
{% include instantsearch.html %}
</section>
{% endraw %}{% endhighlight %}

/_includes/instantsearch.htmlを作る

```html
<input type="text" id="algolia-search"/><img src="/images/search-by-algolia.svg" width="100">
<div id="hits"></div>
<div id="pagination-container"></div>

<script src="/js/algolia.js"></script>
```

/_data/navigation.ymlに検索メニューを追加
```yml
- name: Search
  link: /algolia.html
 ```
これで/algolia.htmlから検索できるようになった。あとは見た目などを弄ったり。  
できればヘッダーナビあたりに検索ボックスを置いて、どこからでも検索できるようにしたいかな。