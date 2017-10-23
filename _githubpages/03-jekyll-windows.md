---
last_modified_at: 2017-10-23
title: "Jekyll on Windows"
permalink: /githubpages/jekyll-windows/
---
{% include toc icon="gears" title="Jekyll on Windows" %}
オレオレですが、ほんとに苦労したので。   

[Run Jekyll on Windows](http://jekyll-windows.juthilo.com/)が詳しい。  
実はこのメモページは要らないのでは? でも記録用として残しておく。

## Ruby & DevKitを導入
[Ruby Installer](https://rubyinstaller.org/)からRubyとDevKitをダウンロード。  
## Ruby
途中でコマンドターミナルが出てきて、いろいろインストールしていく。  
いいのかな、これで正解?  
## Ruby DevKit
解凍するとき、インストール先のフォルダ名も指定しないと、たとえばダウンロードフォルダ中にそのまま散らばっちゃう…  
要・フォルダ指定。

## Jekyllをインストール
`gem install jekyll`でインストール。　　
これまた大量にインストールされていきますなぁ…（←他人事）

## Bundler
`gem install bundler`  
その後`bundle update`が必要?

## Gemflleに追加とか
```ruby
gem 'wdm', '~> 0.1.1' if Gem.win_platform?
```
## ローカルで確認しちゃう?
コマンド`bundle exec jekyll serve`で立ち上げられる。    


試行錯誤中。
