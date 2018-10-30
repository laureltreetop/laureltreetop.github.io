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
Configuration file: xxxxx.github.io/_config.yml
            Source: xxxxx.github.io
       Destination: xxxxx.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
  Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/main.scss':
                    Invalid Windows-31J character "\xE2" on line 6
jekyll 3.7.4 | Error:  Invalid Windows-31J character "\xE2" on line 6
```
`Invalid Windows-31J character "\xE2"`的なエラーは、ファイルにUTF-8な文字が入っているからだそうな。  
ユーザ環境変数`RUBYOPT`に`--encoding=UTF-8`を設定する。

前は`jekyll s`で動かしている時にファイルを修正したら自動的に再作成されてた。  
いつの間にかできなくなってる。  
`jekyll s --watch`もダメ。  
対処法として見つかったのが、Rubyのバージョンアップ。  
2.4.xから2.5.xに上げたら`jekyll s`だけで再作成されるように。  
→嘘です、やっぱり再作成できてない。保留。  
[Let Jekyll --watch](http://jekyll-windows.juthilo.com/4-wdm-gem/)にも--watchが効かない事例があった。  
→ファイルによって効いたり効いてなかったり? 違いと対処方法は?

```sh
$ jekyll s
WARN: Unresolved specs during Gem::Specifiation.reset:
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

時々↓とかしてあげないと、変な動作になっちゃってたり。
```sh
$ rm Gemfile.lock
$ bundle clean --force
```

試行錯誤中。思いついたらorぶち当たったら書こうっと。