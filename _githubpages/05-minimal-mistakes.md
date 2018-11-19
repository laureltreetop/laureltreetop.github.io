---
title: "Customize Minimal Mistakes"
description: "Minimal Mistakesをいろいろカスタマイズ。ガリガリとやってますねぇ…"
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

## AuthorにBloggerを追加

_includes/author-profile-custom-links.html
```html
  <li>
    <a href="https://blog.treetop.to/" itemprop="name">
      <i class="fab fa-fw fa-blogger" aria-hidden="true"></i> Blogger
    </a>
  </li>
```

## 過去記事まとめに月ごとの見出し

### トップでやってるやつ

最初はcaptureを、その次はforloopとかを駆使していたけど、`group_by_exp`を使えばコードがコンパクトに。  
件数をカウントする部分もどうにかなるのかな?
{: .notice--info}

ページネーションと一緒に。  
_layouts/home.html
<script src="https://gist.github.com/laureltreetop/24f0acf4480f4eef8f6c027001b41dd0.js"></script>

固有の部分を削り落としたら他のテーマでも使えるかと。  
そのあたりは[Theme Customize](/githubpages/theme-custom/)に置いておく。

### 一覧でがーっと

メニューの「愚痴」なページ。  
年月でのカウントは[Github Pages の Jekyll でアーカイブ機能を実装する](https://stmy.github.io/2016/08/02/Post-Archive-In-Jekyll-Safe-Mode.html)が役に立ってる。  
各年月リストごとの最後にCategoriesやTagsみたいに"Back to Top&uarr;"[^arrowup]を付けてそれっぽく見えるように。  
<script src="https://gist.github.com/laureltreetop/83edaa7abe4797e9ca51397573d60684.js"></script>

[^arrowup]: 上矢印が`&uarr;`で書けるのは初めて知った。

下記を参照にしまくり。
+ [Jekyll & Liquid Cheatsheet](https://gist.github.com/magicznyleszek/9803727)
+ [The forloop object](https://help.shopify.com/en/themes/liquid/objects/for-loops)
+ [Control flow tags](https://help.shopify.com/en/themes/liquid/tags/control-flow-tags)
+ [Jekyll Cheat Sheet](https://learn.cloudcannon.com/jekyll-cheat-sheet/)
+ [Jekyll/Liquid Templating: How to group blog posts by year?](https://stackoverflow.com/questions/19086284/jekyll-liquid-templating-how-to-group-blog-posts-by-year/20777475)

## TOCを左サイドバーへ

追記 : ver.4.12.0からは設定で右側固定にできるようになったので、古くなった記事をさっくり削除しました。  
[Layout: Post with Sticky Table Of Contents](https://mmistakes.github.io/minimal-mistakes/layout-table-of-contents-sticky/)
{: .notice--info}

TOCというのはTable Of Contentsの略で、記事の左側（テーマのデフォは右側）にある見出し一覧。  
[Wide Single Layout Page](https://mmistakes.github.io/minimal-mistakes/markup-text-readability-wide-page/)なるレイアウトが出てきたので、便利だけど場所を食ってしまうTOCを左側のサイドバーへ押しやってみる。  
[![TOC left side](/assets/images/minimal-mistakes_edit-toc.png)](/assets/images/minimal-mistakes_edit-toc.png)

/includes/sidebar.html  
`{% raw %}{% if page.sidebar.nav %}{% endraw %}`に追加。  
<script src="https://gist.github.com/laureltreetop/ceb3edbf1c04ad98a7dec09ee6ad123f.js"></script>

/includes/tocをほぼ書き換える度胸はないので、**/includes/toc_list**というファイルを作成。
<script src="https://gist.github.com/laureltreetop/3c3213d3fc5a858b420aea8e2210164f.js"></script>

/layouts/single.htmlからTOCをコメントアウト。
<script src="https://gist.github.com/laureltreetop/b067472931d585d8a55f78cad5eeebac.js"></script>

あとはmain.scssで体裁を整えたり、記事のfront matterに`classes: wide`を追加したりなど。  
詳しくは後述。

### スムーススクロール

ついでなので「日本語の見出しだとスムーススクロールになってくれない問題」に着手。  
カスタムスクリプトとして追加。  
<script src="https://gist.github.com/laureltreetop/bdd7f282f5dee6939fe4a84e547486fd.js"></script>

### モバイル用のボタンを設置

このままだとモバイルで見たときにTOC丸出しになってしまっている。  
トグルボタンを追加。

[![TOC mobile](/assets/images/minimal-mistakes-toggle-toc.png)](/assets/images/minimal-mistakes-toggle-toc.png)

/assets/css/main.scssに追加していく。  
まずモバイルでのトグルボタンを並べるように。
<script src="https://gist.github.com/laureltreetop/4e3fb72dabfee1757488fa952a744c74.js?file=minimal-mistakes-toc-align-toggle.scss"></script>

メインは**/_sass/minimal-mistakes/_navigation.scss**をコピってTOC用に書き換えてある。
<script src="https://gist.github.com/laureltreetop/4e3fb72dabfee1757488fa952a744c74.js?file=minimal-mistakes-toc-from-navigation.scss"></script>

でもってリストを整える。
<script src="https://gist.github.com/laureltreetop/4e3fb72dabfee1757488fa952a744c74.js?file=minimal-mistakes-toc-prepare.scss"></script>

あと、片方のメニューが開いているときにもう一方を閉じるように、カスタマイズ用スクリプトファイルに追記。
<script src="https://gist.github.com/laureltreetop/91e41666f723e917edfff0ad78f39323.js"></script>

{% comment %}
### ボタンを縦に並べる
[![TOC mobile](/assets/images/minimal-mistakes_toc-mobile.png)](/assets/images/minimal-mistakes_toc-mobile.png)
[![TOC mobile](/assets/images/minimal-mistakes_toc-mobile_open.png)](/assets/images/minimal-mistakes_toc-mobile_open.png)

<script src="https://gist.github.com/laureltreetop/344e18e0c7f5aced6caac3f49bf803a6.js"></script>

### 横並びで幅いっぱいに

元からあるナビの方も巻き込んで修正してある。  
sidebar.htmlにclassを足してあるのはこのため。
[![TOC mobile](/assets/images/minimal-mistakes_toc-mobile-1fr.png)](/assets/images/minimal-mistakes_toc-mobile-1fr.png)

/assets/css/main.scss
<script src="https://gist.github.com/laureltreetop/0f077c2fe9559657f8f9b84cfaa80918.js"></script>

{% endcomment %}

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

## あちこちの一覧を広々と

### カテゴリ・タグ一覧

_layouts/archive.htmlに`classes: wide`を追加するだけ。
```md
---
layout: default
classes: wide
---
```

### 検索結果一覧

デフォ。
[![search before](/assets/images/minimal-mistakes-search-before.png)](/assets/images/minimal-mistakes-search-before.png)

assets/css/main.scssに追加。
```scss
.search-content {
    .archive__item {
        width: 100% !important;
    }
}
```
これで広々と。
[![search after](/assets/images/minimal-mistakes-search-after.png)](/assets/images/minimal-mistakes-search-after.png)

## 検索エンジンをGoogleに

完全にAlgoriaに頼りまくってるので、この設定はしていないんだけどね。
{: .notice--info}

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

_includes/archive-single.html  
**truncate: 160** の数字を変える  
```md
{% raw %}{% if post.excerpt %}<p class="archive__item-excerpt" itemprop="description">{{ post.excerpt | markdownify | strip_html | truncate: 60 }}</p>{% endif %}{% endraw %}
```