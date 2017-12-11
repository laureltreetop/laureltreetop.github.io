---
title: "Customize Minimal Mistakes"
permalink: /githubpages/minimal-mistakes/
toc: true
toc_icon: "gears"
---
Minimal Mistakesをいろいろカスタマイズ。
{: .notice}

## シェアボタンを追加

[Font Awesome](http://fontawesome.io/)で[Pocket](https://getpocket.com)と[Pinterest](https://www.pinterest.jp/)と[はてなブックマーク](http://b.hatena.ne.jp/)のシェアボタンを追加。  
色は[BrandColors](https://brandcolors.net/)や[SNSやWebサービスなどのロゴの色（ブランドカラー）を調べてみた](http://weboook.blog22.fc2.com/blog-entry-399.html)を参照。  
はてなブログっぽいロゴは[Font Awesome などアイコンフォントにないはてなブックマークを自力で追加する簡単な方法](http://hayashikejinan.com/webwork/css/913/)より。  

PintestとPocketとはてブを追加。数が増えすぎたので文字を改行してある。  
_includes/social-share.html
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=_includes_social-share.html"></script>
_sass/minimal-mistakes/_buttons.css
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=_sass_minimal-mistakes_buttons.css"></script>
Pocketとはてブを追加。  
_sass/minimal-mistakes/_variables.scss
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=_sass_minimal-mistakes_variables.scss"></script>
Pocketとはてブを追加[^utilities]、はてブっぽいロゴ指定など。  
assets/css/main.scss
<script src="https://gist.github.com/laureltreetop/61c616b2741c041736241f89786351d0.js?file=assets_css_main.scss"></script>

[^utilities]: 前は_sass/minimal-mistakes/_utilities.cssを修正した分を、assets/css/main.scssに移動。

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
## TOCを固定
TOCというのはTable Of Contentsの略で、記事の右側にある見出し一覧。  
たとえばこのページだと、front matter（って言うのかぁ）にこういう記述をしてある。
<script src="https://gist.github.com/laureltreetop/bc20d4d1a9882bb7f85d0a14bc2cb22b.js"></script>

左側のサイドバーはスクロールしても固定されているので、TOCも同じようにstickyを追加。  
_layouts/single.html
<script src="https://gist.github.com/laureltreetop/0da5fd93ec335e5a5c41ca02c86dc31a.js"></script>