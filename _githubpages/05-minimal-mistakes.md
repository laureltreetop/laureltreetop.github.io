---
title: "Customize Minimal Mistakes"
description: Minimal Mistakesをいろいろカスタマイズ。
permalink: /githubpages/minimal-mistakes/
classes: wide
header:
  teaser: /assets/images/minimal-mistakes_edit-toc.png
  og_image: /assets/images/minimal-mistakes_edit-toc.png
---
{{ page.description }}
{: .notice}

## シェアボタンを追加

[Font Awesome](http://fontawesome.io/)で[Pocket](https://getpocket.com)と[Pinterest](https://www.pinterest.jp/)と[はてなブックマーク](http://b.hatena.ne.jp/)のシェアボタンを追加。  
色は[BrandColors](https://brandcolors.net/)や[SNSやWebサービスなどのロゴの色（ブランドカラー）を調べてみた](http://weboook.blog22.fc2.com/blog-entry-399.html)を参照。  
はてなブログっぽいロゴは[Font Awesome などアイコンフォントにないはてなブックマークを自力で追加する簡単な方法](http://hayashikejinan.com/webwork/css/913/)より。  

PintestとPocketとはてブを追加。  
_includes/social-share.html
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=_includes_social-share.html"></script>
_sass/minimal-mistakes/_buttons.css
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=_sass_minimal-mistakes_buttons.css"></script>
_sass/minimal-mistakes/_variables.scss
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=_sass_minimal-mistakes_variables.scss"></script>
_sass/minimal-mistakes/_variables.scss
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=_sass_minimal-mistakes_utilities.scss"></script>
はてブっぽいロゴ指定と、ボタン6個の幅を設定など。  
assets/css/main.scss
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=assets_css_main.scss"></script>

## フォローボタンを追加
[Pinterest](https://www.pinterest.jp/)のフォローボタンを追加してみる。  
色やらアイコンやらは組み込み済みなので、_config.ymlにアカウント設定して以下を追記。  
_includes/footer.html
<script src="https://gist.github.com/laureltreetop/475361f9a90dd2f6c7ba7f5d65cf0f94.js"></script>

## 過去記事まとめに月ごとの見出し
トップでやってるやつ。  
_layouts/home.html
<script src="https://gist.github.com/laureltreetop/24f0acf4480f4eef8f6c027001b41dd0.js"></script>

タイトル一覧もいじってあるんでした。  
リスト表示用の`class="triangle"`も込み。  
_includes/archive-title.html
<script src="https://gist.github.com/laureltreetop/90b30fb52d4041290791485bfc093ab0.js"></script>

## TOC

TOCというのはTable Of Contentsの略で、記事の左側（テーマのデフォは右側）にある見出し一覧。  
{% comment %}たとえばこのページだと、front matter（って言うのかぁ）にこういう記述をしてある。
<script src="https://gist.github.com/laureltreetop/bc20d4d1a9882bb7f85d0a14bc2cb22b.js"></script>
{% endcomment %}

### TOCを右側に固定
左側のサイドバーはスクロールしても固定されているので、TOCも同じようにstickyを追加。  
_layouts/single.html
<script src="https://gist.github.com/laureltreetop/0da5fd93ec335e5a5c41ca02c86dc31a.js"></script>

追記 : 4.12.0からは設定で右側固定にできるようになった。  
[Layout: Post with Sticky Table Of Contents](https://mmistakes.github.io/minimal-mistakes/layout-table-of-contents-sticky/)

### TOCを左サイドバーへ
[Wide Single Layout Page](https://mmistakes.github.io/minimal-mistakes/markup-text-readability-wide-page/)なるレイアウトが出てきたので、便利だけど場所を食ってしまうTOCを左側のサイドバーへ押しやってみる。  
{: .notice}

[![TOC left side](/assets/images/minimal-mistakes_edit-toc.png)](/assets/images/minimal-mistakes_edit-toc.png)

/includes/sidebar.html  
`{% raw %}{% if page.sidebar.nav %}{% endraw %}`の上あたりに追加する。  
ページナビなど他のリストとも揃えたいので、`<h3 class="nav__title" style="padding-left: 0;">`にしてみたり。
<script src="https://gist.github.com/laureltreetop/ceb3edbf1c04ad98a7dec09ee6ad123f.js"></script>

/layouts/single.htmlからTOCをコメントアウト
<script src="https://gist.github.com/laureltreetop/b067472931d585d8a55f78cad5eeebac.js"></script>

あとはmain.scssで体裁を整えたり、記事のfront matterに`classes: wide`を追加したりなど。  
/assets/css/main.scss
<script src="https://gist.github.com/laureltreetop/344e18e0c7f5aced6caac3f49bf803a6.js"></script>

ついでなので「日本語の見出しだとスムーススクロールになってくれない問題」に着手。  
カスタムスクリプトとして追加。
<script src="https://gist.github.com/laureltreetop/bdd7f282f5dee6939fe4a84e547486fd.js"></script>

## QRコード

フッタにQRコードを追加。実際に使っているのはフッタを低くするなど手を入れまくり。  

_includes/footer.html
<script src="https://gist.github.com/laureltreetop/22a4b49c8c2a759cbdbd4d0f255e0f81.js?file=minimal-mistakes_add-qrcode_includes_footer.html"></script>
assets/css/main.scss
<script src="https://gist.github.com/laureltreetop/22a4b49c8c2a759cbdbd4d0f255e0f81.js?file=minimal-mistakes_add-qrcode_main.scss"></script>

## 記事毎にog:imageを設定

デフォの画像は_config.ymlで設定済み。  
[Post: Teaser Image with OpenGraph Override](https://mmistakes.github.io/minimal-mistakes/layout/uncategorized/post-teaser-image-og-override/)ということなので、各記事に追加。  

各記事の頭に追加。↓はこの記事の場合。
```yml
header:
  teaser: /assets/images/minimal-mistakes_edit-toc.png
  og_image: /assets/images/minimal-mistakes_edit-toc.png
```

[Facebookシェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認できるかと。

## 検索エンジンをGoogleに

1. [Googleカスタム検索](https://cse.google.com/cse/all)（要Googleログイン）にサイトを登録
1. 検索エンジンの編集→デザイン→レイアウトで「結果のみ」を設定
1. 設定→基本→詳細設定をクリック
1. 除外するサイトにアーカイブなどのURLを設定  
（pageの設定が **paginate_path: /page/:num/** の場合）
```
https://domain/month-archive/
https://domain/page/
https://domain/categories/
https://domain/tags/
```
1. 保存してコードを取得
1. Minimal Mistakesの場合はコードがあればOKなので、必要なのはこれ
```js
    var cx = 'nnnnnnnnnnnn:xxxxxxxx';
```

_config.ymlに設定すると、Google検索が可能に。
```yml
search                   : true # true, false (default)
search_full_content      : true # true, false (default)
search_provider          : "google" # lunr (default), algolia, google

google:
  search_engine_id       : "nnnnnnnnnnnn:xxxxxxxx" # YOUR_SEARCH_ENGINE_ID
  instant_search         : true # false (default), true
```

## インデックスでpostsの本文を省略

### posts

_includes/archive-single.html  
**truncate: 160** の数字を変える  
```
    {% if post.excerpt %}<p class="archive__item-excerpt" itemprop="description">{{ post.excerpt | markdownify | strip_html | truncate: 60 }}</p>{% endif %}
```