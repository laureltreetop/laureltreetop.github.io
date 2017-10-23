---
last_modified_at: 2017-10-23
title: "Blogger to Jekyll"
permalink: /githubpages/blogger-to-jekyll/
---
{% include toc icon="gears" title="Blogger to Jekyll" %}
今までブログは、ブログなんて呼んでない頃からのHTML直書き→しばらく休止→Bloggerで時々書いたり書かなかったり→Tumblr、という流れ。  
Bloggerの記事をJykillに取り込むのは簡単にできるらしいと知り、無謀にも挑戦。  


## 変換
Rubyなんて扱ったことないから、これがコマンドなのかスクリプトなのか判らないという状態で数ヶ月止まったままだったが…  

最初にに`gem install jekyll-import`を。てっきりスクリプトの名前かと思ってた…  
コマンドラインから以下を実行。
```ruby
$ ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::Blogger.run({
      "source"                => "blog-07-31-2017.xml",
    })'
```
思ったよりも静かに完了するが、_posts/にダーッとファイルが生成されてる。

## 手直し
拡張子が.htmlになっているので、.mdなファイルにリネーム。  
```sh
$ ren *.html *.mb
```
自分用メモ
>git shだと、renは動かないよ…

レイアウトが`layout: post`になっているので、表示が他の記事と違う。  
解決法 : `_layouts/post.html`の中身入れ替え。  
もっとスマートな方法もあるかもしれないが、とりあえず逃げる…