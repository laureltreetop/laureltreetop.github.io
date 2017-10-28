---
last_modified_at: 2017-10-28
title: "Jekyll Theme"
permalink: /githubpages/minimal-mistakes/
---
{% include toc icon="gears" title="Jekyll" %} いろいろカスタマイズしたり、Minimal Mistakesならではの使い方とか。

## 記事を書くときのテクニック的な?
### 画像をポップアップ
こういうやつ。
[![Header Image](/assets/images/github-header.png)](/assets/images/github-header.png)
[Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)というプラグインがすでに入っているので、うまく指定すれば可能。
```markdown
[![Header Image](/assets/images/github-header.png)](/assets/images/github-header.png)
```
プラグインがaタグにしか適用されないそうな。

## カスタマイズ
### シェアボタンを追加
 
_includes/social-share.html  
…の修正した部分を引用したいのだが、変数が含まれているために、ちょっといやぁんな表示になってしまう。  
`{...}`の部分は二重に囲ってありますので、他のボタンを参考に。
```html
<a href="http://getpocket.com/edit?url={ page.url | absolute_url }" class="btn btn--get-pocket" title="{ site.data.ui-text[site.locale].share_on_label | default: 'Share on' } Pocket"><i class="fa fa-fw fa-get-pocket" aria-hidden="true"></i><span> Pocket</span></a>
```
_sass/minimal-mistakes/_variables.scss
```css
$pocket-color                 : #ef4056 !default;
```
_sass/minimal-mistakes/_buttons.css
```css
.btn {
...
  /* button colors */
  $buttoncolors:
  (primary, $primary-color),
...
  (pocket, $pocket-color);
  }
```
assets/css/main.scss
```css
.social-icons {
  .fa-get-pocket {
    color: $pocket-color;
  }
}
```