---
title: "CSS小技系"
description: "CSS小技系を集めてみました。"
permalink: /create-pages/css/
classes: wide
header:
  teaser: /assets/images/pages-image-clippings.png
  og_image: /assets/images/pages-image-clippings.png
---
{{ page.description }}
{: .notice}

## 上下左右ど真ん中
<script src="https://gist.github.com/laureltreetop/7ad147e484ee34ae98e33846f5c7ef1f.js"></script>

## サムネイル画像などをトリミング

かなり簡単にできる。調べるのが難しかったくらい(=_=;)  
[1行追加でOK！CSSだけで画像をトリミングできる「object-fit」プロパティー](https://www.webcreatorbox.com/tech/object-fit)  
[![image clipping](/assets/images/pages-image-clippings.png)](/assets/images/pages-image-clippings.png)  
<script src="https://gist.github.com/laureltreetop/fb356054c993e94f974e02ff5bd9922c.js"></script>

## 影とか浮かんだりとか

~~Gist埋め込み[^gist]に使ってます。~~  
[Webデザインにシャドウを取り入れる時のポイントいろいろ](https://www.webcreatorbox.com/tech/shadow)
<script src="https://gist.github.com/laureltreetop/747f2e2c0885dec15df0c7604bf0cf7e.js"></script>

[^gist]: 撤去しましたが、一応記録として。あと[GitHub Pages - Theme Customize](/githubpages/theme-custom/)でSCSSを紹介してますが、ここではCSSにコンパイルしてあります。SCSSに関しては[SCSS](/create-pages/sass/)の記事参照。

## 紙が重なっている感じに

元ネタどこ行ったんだろ…  
こんな感じに数枚の紙を重ねた感じになります。  
一番上の紙の内側に薄く影を入れてありますので、不要な場合は最後の`inset 0 0 15px rgba(0,0,0,0.05)`を削除してください。  
影の濃さは`0.05`で微調整を。
{: .pile-up}

```css
.pile-up {
    box-shadow:1px 1px 1px 1px rgba(0,0,0,0.1),10px 10px 0 -5px #ffffff,10px 10px 4px -5px rgba(0,0,0,0.3),13px 13px 0 -5px #ffffff,13px 13px 8px -5px rgba(0,0,0,0.5),16px 16px 0 -5px #ffffff,16px 16px 12px -5px rgba(0,0,0,0.7),19px 19px 0 -5px #ffffff,19px 19px 16px -5px rgba(0,0,0,0.9), inset 0 0 15px rgba(0,0,0,0.05);
    padding:30px;
}
```
