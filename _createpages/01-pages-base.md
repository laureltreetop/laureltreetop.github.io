---
title: "Create Pages"
permalink: /create-pages/base/
---
今はタグ打ちなんてしなくてもできるねーと思っていたら、まさかの[Tumblrのテーマカスタマイズ](/tumblr/custom-theme/)でのタグ打ち。
この機会にいろいろメモっておく。
{: .notice}

## まずはfavicon

「[半透過マルチアイコンfavicon.icoを作ろう!](https://ao-system.net/alphaicon/)」「[様々なファビコンを一括生成。favicon generator](https://ao-system.net/favicongenerator/)」というのがあったので、この機会に画像も作成。  
他にも「[Favicon Generator](http://realfavicongenerator.net/)」もありますな。

## メタタグを設定

サイト管理に重要なメタタグを設定してみる。必要なの、けっこうあるので忘れがち。  
### 基本形
…結構あった(=_=;)そりゃ、覚えきれるわけがない。  
<script src="https://gist.github.com/laureltreetop/f030be7a688c151ce0d377001bb6e071.js"></script>

「シェアされたときのサムネイル」は[OGP画像シミュレータ](http://ogimage.tsmallfield.com/)で確認しつつ作成。  
その他の情報も[facebook for deveropers シェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認。
{: .notice}

### 最低必要源  
Facebookアプリ要らないなぁ。面倒だし。  
自分のTwitterとかFacebookとリンクさせるわけでなければ[^minimal-opg]、これくらいでいいのかな。    
<script src="https://gist.github.com/laureltreetop/46e35bc34a0511019c8be263acc1e627.js"></script>  

[^minimal-opg]: リンクさせるわけじゃないのにOGPってのは矛盾しているけど。  

## CSS小技系  

### 上下左右ど真ん中
<script src="https://gist.github.com/laureltreetop/7ad147e484ee34ae98e33846f5c7ef1f.js"></script>

### サムネイル画像などをトリミング

かなり簡単にできる。調べるのが難しかったくらい(=_=;)  
[1行追加でOK！CSSだけで画像をトリミングできる「object-fit」プロパティー](https://www.webcreatorbox.com/tech/object-fit)  
[![image clipping](/assets/images/pages-image-clippings.png)](/assets/images/pages-image-clippings.png)
<script src="https://gist.github.com/laureltreetop/fb356054c993e94f974e02ff5bd9922c.js"></script>