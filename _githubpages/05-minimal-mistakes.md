---
last_modified_at: 2017-11-07
title: "Customize Minimal Mistakes"
permalink: /githubpages/minimal-mistakes/
toc: true
toc_label: "Customize Minimal Mistakes"
toc_icon: "gears"
---
Minimal Mistakesをいろいろカスタマイズ。
{: .notice}

## シェアボタンを追加
[Pocket](https://getpocket.com)と[Pinterest](https://www.pinterest.jp/)のシェアボタンを追加してみる。  
色は[BrandColors](https://brandcolors.net/)を参照。  
_includes/social-share.html
<script src="https://gist.github.com/laureltreetop/c122ffafea2a7e5c48d826a633e581f3.js"></script>
_sass/minimal-mistakes/_buttons.css
<script src="https://gist.github.com/laureltreetop/3d31245c521449bac3218c963184c6fd.js"></script>
Pocketだけ追加。  
_sass/minimal-mistakes/_utilities.css
<script src="https://gist.github.com/laureltreetop/bc64b1280cc817d099850fcc315e5c48.js"></script>
Pocketだけ追加。  
_sass/minimal-mistakes/_variables.scss
<script src="https://gist.github.com/laureltreetop/182cf5e2ddc4421de0f89144ea0e9b16.js"></script>

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