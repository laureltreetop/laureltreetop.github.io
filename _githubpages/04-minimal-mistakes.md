---
last_modified_at: 2017-10-31
title: "Minimal Mistakes"
permalink: /githubpages/minimal-mistakes/
toc: true
toc_label: "Minimal Mistakes"
toc_icon: "gears"
---
いろいろカスタマイズしたり、Minimal Mistakesならではの使い方とか。

## 記事を書くときのテクニック的な?
### 画像をポップアップ
こういうやつ。
[![Header Image](/assets/images/github-header.png)](/assets/images/github-header.png)
[Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)というプラグインがすでに入っているので、うまく指定すれば可能。  
記事にはこういう感じで。   
```markdown
[![Header Image](/assets/images/github-header.png)](/assets/images/github-header.png)
```
プラグインがaタグにしか適用されないそうな。

## カスタマイズ
### シェアボタンを追加
[Pocket](https://getpocket.com)のシェアボタンを追加してみる。  
色は[BrandColors](https://brandcolors.net/)を参照。  

_includes/social-share.html
<code data-gist-id="c122ffafea2a7e5c48d826a633e581f3" data-gist-hide-footer="true"></code>  
_sass/minimal-mistakes/_buttons.css
<code data-gist-id="3d31245c521449bac3218c963184c6fd" data-gist-hide-footer="true"></code>
_sass/minimal-mistakes/_utilities.css
<code data-gist-id="bc64b1280cc817d099850fcc315e5c48" data-gist-hide-footer="true"></code>
_sass/minimal-mistakes/_variables.scss
<code data-gist-id="182cf5e2ddc4421de0f89144ea0e9b16" data-gist-hide-footer="true"></code>
### 過去記事まとめに月ごとの見出し
トップでやってるやつ。  
_layouts/home.html
<code data-gist-id="24f0acf4480f4eef8f6c027001b41dd0" data-gist-hide-footer="true"></code>