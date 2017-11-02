---
last_modified_at: 2017-11-02
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
<script src="https://gist.github.com/laureltreetop/c122ffafea2a7e5c48d826a633e581f3.js"></script>  
_sass/minimal-mistakes/_buttons.css
<script src="https://gist.github.com/laureltreetop/3d31245c521449bac3218c963184c6fd.js"></script>  
_sass/minimal-mistakes/_utilities.css
<script src="https://gist.github.com/laureltreetop/bc64b1280cc817d099850fcc315e5c48.js"></script>  
_sass/minimal-mistakes/_variables.scss
<script src="https://gist.github.com/laureltreetop/182cf5e2ddc4421de0f89144ea0e9b16.js"></script>  
### 過去記事まとめに月ごとの見出し
トップでやってるやつ。  
_layouts/home.html
<script src="https://gist.github.com/laureltreetop/24f0acf4480f4eef8f6c027001b41dd0.js"></script>