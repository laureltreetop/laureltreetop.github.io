---
title: "Blogger to Jekyll"
description: Bloggerの記事をJykillに取り込むのは簡単にできるらしいと知り、無謀にも挑戦。
permalink: /githubpages/blogger-to-jekyll/
classes: wide
# categories:
#   - GitHub Pages
# tags:
#   - Jekyll
#   - Blogger
#   - Ruby
---
今までブログは、ブログなんて呼んでない頃からのHTML直書き→しばらく休止→Bloggerで時々書いたり書かなかったり→Tumblr、という流れ。  
Bloggerの記事をJykillに取り込むのは簡単にできるらしいと知り、無謀にも挑戦。
{: .notice}

## 取り込み
Bloggerの`ブログ設定`→`その他`→`コンテンツをバックアップ`で取り込める。

## 変換
元ネタは[Import your old & busted site or blog for use with Jekyll.](http://import.jekyllrb.com/docs/blogger/)より[^import]。

[^import]: Rubyなんて扱ったことないから、これがコマンドなのかスクリプトなのか判らないという状態で数ヶ月止まったままだったが…  

最初に`gem install jekyll-import`を[^notcommand]。

[^notcommand]: てっきりスクリプトの名前がjekyll-importなのかと思ってた…  

コマンドラインから以下を実行。"blog-MM-DD-YYYY.xml"はBloggerからエクスポートしたファイル名を。
```shell
$ ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::Blogger.run({
      "source"                => "blog-MM-DD-YYYY.xml",
    })'
```
思ったよりも静かに完了するが、_posts/にダーッとファイルが生成されてる。

## 手直し
拡張子が.htmlになっているので、.mdなファイルにリネーム。  
```sh
$ ren *.html *.md
```
自分用メモ
>git shだと、renは動かないよ…[^rename]

[^rename]: bashだとどう書くんだっけ?

レイアウトが`layout: post`になっているので、表示が他の記事と違う。  
解決法 : `_layouts/post.html`の中身入れ替え。  
もっとスマートな方法もあるかもしれないが、とりあえず逃げる…
