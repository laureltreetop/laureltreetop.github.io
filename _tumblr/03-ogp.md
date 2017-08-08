---
last_modified_at: 2017/08/03 15:59 +0900
title: "Open Graph protocol"
permalink: /tumblr/ogp/
---
{% include toc icon="tumblr-square" title="Open Graph protocol" %}
これをやっておくだけで、FacebookやTwitterにシェアしてもらったときにいい感じに。

### Metaタグ・文字部分編
少し見づらくなりますが、こんな感じで。

~~~html
<meta property="og:site_name" content="{Title}"/>
<meta property="og:type" content="{block:IndexPage}website{/block:IndexPage}{block:PermalinkPage}article{/block:PermalinkPage}">
<meta property="og:url" content="{block:IndexPage}{BlogURL}{block:SearchPage}search/{SearchQuery}{/block:SearchPage}{block:TagPage}tagged/{Tag}{/block:TagPage}{block:DayPage}day/{Year}/{MonthNumberWithZero}/{DayOfMonthWithZero}/{/block:DayPage}{/block:IndexPage}{block:PermalinkPage}{Permalink}{/block:PermalinkPage}"/>
<meta property="og:title" content="{Title}{block:PostSummary} - {PostSummary}{/block:PostSummary}{block:SearchPage} - {lang:SearchResultCount results for SearchQuery}{/block:SearchPage}{block:TagPage} - {lang:Posts tagged Tag}{/block:TagPage}{block:DayPage} - {Year}.{MonthNumberWithZero}.{DayOfMonthWithZero}{/block:DayPage}"/>
{block:IndexPage}<meta property="og:description" content="{MetaDescription}{block:PostSummary} - {PostSummary}{/block:PostSummary}">{/block:IndexPage}
~~~

### Metaタグ・画像編
`og:image`がいちばんややこしい。

### 確認
[facebook for deveropers シェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認。  
エラーが出なくなるまで修正。

### あ。
Facebookしか使ってないから、Twitterは後で書いてみる。
