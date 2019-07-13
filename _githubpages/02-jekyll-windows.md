---
title: "Jekyll on Windows"
description: "ほんとに苦労したので。しかもこの記事をまとめるために、いったんuninstallしました…"
permalink: /githubpages/jekyll-windows/
classes: wide
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

### Invalid Windows-31J character

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
Ruby2.5.xインストール時に指定しておけば`-Eutf-8`が設定されてたり。

前は`jekyll s`で動かしている時にファイルを修正したら自動的に再作成されてた。  
いつの間にかできなくなってる。  
`jekyll s --watch`もダメ。  
対処法として見つかったのが、Rubyのバージョンアップ。  
2.4.xから2.5.xに上げたら`jekyll s`だけで再作成されるように。  
→ファイルによって効いたり効いてなかったり? 違いと対処方法は?

### Unresolved specs during

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
### Invalid theme folder

動作に関係ないけど、なんか気になる…

```sh
$ jekyll s
Configuration file: E:/treetop/GitHub/(repository name)/_config.yml
            Source: E:/treetop/GitHub/(repository name).github.io
       Destination: E:/treetop/GitHub/(repository name).github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
Invalid theme folder: _data
       Jekyll Feed: Generating feed for posts
                    done in 23.828 seconds.
 Auto-regeneration: enabled for '(local GitHub folder)/(repository name).github.io'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

Gemfileから1行コメントアウトしておまじないを。
```sh
$ bundle update
$ bundle clean --force
```

これで警告なしで起動するように。
```
# If you have any other plugins, put them here!
group :jekyll_plugins do
    gem 'jekyll-last-modified-at'
	gem 'jekyll-algolia'
	gem 'jekyll-redirect-from'
    # gem 'jekyll-data'
    gem 'jekyll-include-cache'
end
```