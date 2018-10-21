---
title: "Jekyll on Windows"
description: "ほんとに苦労したので。しかもこの記事をまとめるために、いったんuninstallしました…"
permalink: /githubpages/jekyll-windows/
classes: wide
# categories:
#   - GitHub Pages
# tags:
#   - Jekyll
#   - Windows
#   - Ruby
---
{{ page.description }}
{: .notice}

[Run Jekyll on Windows](http://jekyll-windows.juthilo.com/)が詳しい。  
実はこのメモページは要らないのでは? でも記録用として残しておく。  

## Jekyll参照リンク
- [Jekyll](http://jekyllrb.com/)   
- [Jekyll（日本語訳）](http://jekyllrb-ja.github.io/)   
- [Import your old & busted site or blog for use with Jekyll](http://import.jekyllrb.com/)
- [Run Jekyll on Window](http://jekyll-windows.juthilo.com/)


## Ruby & DevKitを導入
[Ruby Installer](https://rubyinstaller.org/)から`Ruby+Devkit xx.xx.x`をダウンロード。  

## Jekyllをインストール
```sh
$ gem install jekyll
```

これまた大量にインストールされていきますなぁ…（←他人事）

## Bundler
```sh
$ gem install bundler
```

## Jekyll起動

Gemfileを弄ったあとは
```sh
$ bundle update
```
でもってやっと起動。
```sh
$ jekyll s
```

### errorなど対処

```sh
$ jekyll s
WARN: Unresolved specs during Gem::Specification.reset:
      rouge (< 3, >= 1.7)
WARN: Clearing out unresolved specs.
Please report a bug if this causes problems.
```
というのがでてきたら、
```sh
$ gem uninstall rouge
```
で不要なversionのをuninstallして、
```sh
$ gem update && gem cleanup
```
とすれば片付けてくれる、のかな?

時々↓とかしてあげないと、
```sh
$ rm Gemfile.lock
$ bundle clean --force
$ bundle install
```
+ `jekyll s`ができなくなってたり  
（`bundle exec jekyll s`は素直に実行してくれる）
+ 修正してもregenateしてくれなかったり（じわじわと痛い）
+ Ctrl + Cで停止しようとしたら終了確認してきたり  
（しかも都合により日本語で…あとyでもnでも終わっちゃってるよ?）

などなど、変な動作になっちゃってました。

試行錯誤中。思いついたらorぶち当たったら書こうっと。