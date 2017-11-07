---
last_modified_at: 2017-11-06
title: "Jekyll on Windows"
permalink: /githubpages/jekyll-windows/
toc: true
toc_label: "Jekyll on Windows"
toc_icon: "windows"
---
オレオレですが、ほんとに苦労したので。  
しかもこの記事をまとめるために、いったんuninstallしました… 
{: .notice}

[Run Jekyll on Windows](http://jekyll-windows.juthilo.com/)が詳しい。  
実はこのメモページは要らないのでは? でも記録用として残しておく。  

## Jekyll参照リンク
- [Jekyll](http://jekyllrb.com/)   
- [Jekyll（日本語訳）](http://jekyllrb-ja.github.io/)   
- [Import your old & busted site or blog for use with Jekyll](http://import.jekyllrb.com/)
- [Run Jekyll on Window](http://jekyll-windows.juthilo.com/)


## Ruby & DevKitを導入
[Ruby Installer](https://rubyinstaller.org/)からRubyとDevKitをダウンロード。  
### Ruby
途中でコマンドターミナルが出てきて、いろいろインストールしていく。  
いいのかな、これで正解?  
### Ruby DevKit
解凍するとき、インストール先のフォルダ名も指定しないと、たとえばダウンロードフォルダ中にそのまま散らばっちゃう…  
要・フォルダ指定。

## Jekyllをインストール
`gem install jekyll`でインストール。　
```sh
$ gem install jekyll
```

これまた大量にインストールされていきますなぁ…（←他人事）

## Bundler
`gem install bundler`  
その後`bundle update`が必要?

試行錯誤中。
