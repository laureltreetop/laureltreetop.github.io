---
title: "Jekyll Theme"
description: "Minimal Mistakesの手動やGemでのインストールや、あと他にもいくつか。"
permalink: /githubpages/jekyll-theme/
classes: wide
---
{{ page.description }}
{: .notice}

## Jekyll用テーマ
あちこちにいろいろ。   
+ [Jekyll Themes & Templates](https://jekyllthemes.io/)
+ [Jelyll Themes](http://jekyllthemes.org/)
+ [Jekyll Templates](https://learn.cloudcannon.com/jekyll-templates/)
+ [Dr. Jekyll’s Themes](http://drjekyllthemes.github.io/)

当方は[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)を使うことに。   

## Minimal Mistakesを導入 手動編
### インストール
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)からインストール。

```sh
$ git clone git@github.com:/minimal-mistakes.git
```

[Quick Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)を参考に、要らないファイルを削除。  

Gemfile書き換え。
<script src="https://gist.github.com/laureltreetop/f54309da6c8c814512f5cc8fa0561021.js"></script>  
で、コマンド実行。

```shell
$ bundle update
$ bundle exec jekyll serve
```
エラーが出たので、潰していく。

### エラー潰し
エラーメッセージを見ると、gem installしたやつがバージョンに合わないらしい。  
`gem list hoge`で確認して、合わないバージョンのは`gem uninstall -v x.x.x hoge`で削除。

今度は`No GitHub API authentication...`というエラーが出てきた。  
["No GitHub API authentication" error #399](https://github.com/github/pages-gem/issues/399)を参考に、
_config.ymlに追記。ついでにもう一個手直し。  
<script src="https://gist.github.com/laureltreetop/0da5ff11d755d035a5a9120fcc1b2a6c.js"></script>

まだ出る…今度は`invalid byte sequence in Windows-31J...`なエラーが出てきたので、
[ruby]jekyll server で 『invalid byte sequence in Windows-31J～』とエラーになった時の対処方法](http://d.hatena.ne.jp/osyo-manga/20140216/1392552409)を参考にし、環境変数`RUBYOPT`に`-Ku`を設定。


### 設定
[minimal-mistakes/docs](https://github.com/mmistakes/minimal-mistakes/tree/master/docs)

公式サイトを見ながら_config.ymlの構成を見て設定を確認しつつやってみたら、ブログっぽいものが作れるように。  

## Minimal Mistakesを導入 Gem編

GitHub Pagesを作ったときの超シンプルなやつに適用してみる。  
[Jekyll の更新](http://chirimenmonster.github.io/2017/05/20/undate-jekyll.html)を参考にしたというか、ほぼそれしかやってないというか。

Gemfile
```ruby
gem "minimal-mistakes-jekyll"
gem "github-pages", group: :jekyll_plugins
gem 'wdm', '~> 0.1.1' if Gem.win_platform?

group :jekyll_plugins do
  gem "jekyll-data"
end
```

index.html
```yml
---
layout: home
---
```

_config.ymlは[Minimal Mistakesのgit](https://github.com/mmistakes/minimal-mistakes/blob/master/_config.yml)からザクッと持ってきて、あちこち書き換える。  
少なくともこれだけは必須かな。  
```yml
remote_theme: "mmistakes/minimal-mistakes"
repository: ユーザ名/リポジトリ名
```
もし`theme:`という項目があったら、削除するかコメントアウトで。  
日本語UIにしたい場合はこれも。デフォルトでは`"en-US"`のようで。
```yml
locale: "ja-JP"
```

GitHub Pagesを稼働させる手順で`index.md`というファイルができていたけど、これは削除で。  

コマンドを叩く。
```sh
$ bundle install
```

まずは動かしてみる。
```sh
$ bundle exec jekyll s
```

エラーが出たので調べていくと、先述の[Jekyll の更新](http://chirimenmonster.github.io/2017/05/20/undate-jekyll.html)に辿り着いた。  

[Personal access tokens](https://github.com/settings/tokens)でtakenを作成。
ユーザ環境変数JEKYLL_GITHUB_TOKENの値を追加。  
当方はWindows7なので、`Windowsメニュー`[^windowskey]→右上にあるユーザアイコン→`環境変数の設定`に。

[^windowskey]: いわゆるスタートキーとかスタートアイコンとか。

ナビメニューが必要になったら[^nav]、[Minimal Mistakesのgit](https://github.com/mmistakes/minimal-mistakes/blob/master/_config.yml)から`_data/`配下の`navigation.yml`を持ってきて編集を。  
`_config.yml`で日本語UIを使うために`locale: "ja-JP"`を設定している場合は、同じく`_data/`配下の`ui-text.yml`を。これは置くだけで。

[^nav]: 普通は必要だと思うけどね。

動作確認ができたところで`git add`的なことをしようとしたら、かなりのファイルが追加される状況に…
そういえばまだ`.gitignore`ファイルを作ってなかった。  
Winodwsでの作成は[.gitignoreファイルの作り方](https://qiita.com/dachis/items/06952f10a7adfeba7fa4)で。
内容は[Minimal Mistakesのgit](https://github.com/mmistakes/minimal-mistakes/blob/master/.gitignore)からパクる。

あとは`_posts`とか`_pages`とか、あとcollection的なのを追加していけばいいかと。  
Gem化されたテーマというのも、準備はいろいろ面倒くさかったという。

## soloを導入
[solo](https://chibicode.github.io/solo/)もやってみたので、メモ。  
[Fork A Repo](https://help.github.com/articles/fork-a-repo/)を見つつ、まずは[Fork](https://github.com/chibicode/solo/fork) （ってよく判ってない）。  
その後コマンドで引っ張ってくる。  
```shell
$ git clone https://github.com/user-name/solo
```
で、真っさらから作ってみる。
```shell
$ git init
$ jekyll new your_repository
```
"new"ってくらいなので、既にコンテンツがある場合は怒られる。  
`jekyll new -f your_repository`で。  

## Agus Makmunを導入
[Agus Makmun](https://agusmakmun.github.io/)も基本的にはSoloと同じようにいけた。  
ただ、Jekyllさんに小言を言われないように、`_config.yaml`の`gems:`を`plugins:`に書き換える。

## Baseを導入
[Base | CloudCannon Academy](https://learn.cloudcannon.com/templates/base/)の「**導入は**」簡単だった。  
ソースが見やすくて一見カスタマイズしやすそうだけど、癖がすごい。  
カスタマイズは[Customize Base](/githubpages/theme-base/)に書いてある通り。
