---
last_modified_at: 2017/08/03 15:59 +0900
title: "Open Graph protocol"
permalink: /tumblr/ogp/
---
{% include toc icon="tumblr-square" title="Open Graph protocol" %}
これをやっておくだけで、FacebookやTwitterにシェアしてもらったときにいい感じに。

### Metaタグ・まとめて設定編
少し見づらくなりますが、こんな感じで。

~~~html
<meta property="og:site_name" content="{Title}"/>
<meta property="og:type" content="{block:IndexPage}website{/block:IndexPage}{block:PermalinkPage}article{/block:PermalinkPage}">
<meta property="og:url" content="{block:IndexPage}{BlogURL}{block:SearchPage}search/{SearchQuery}{/block:SearchPage}{block:TagPage}tagged/{Tag}{/block:TagPage}{block:DayPage}day/{Year}/{MonthNumberWithZero}/{DayOfMonthWithZero}/{/block:DayPage}{/block:IndexPage}{block:PermalinkPage}{Permalink}{/block:PermalinkPage}"/>
<meta property="og:title" content="{Title}{block:PostSummary} - {PostSummary}{/block:PostSummary}{block:SearchPage} - {lang:SearchResultCount results for SearchQuery}{/block:SearchPage}{block:TagPage} - {lang:Posts tagged Tag}{/block:TagPage}{block:DayPage} - {Year}.{MonthNumberWithZero}.{DayOfMonthWithZero}{/block:DayPage}"/>
{block:IndexPage}<meta property="og:description" content="{MetaDescription}{block:PostSummary} - {PostSummary}{/block:PostSummary}">{/block:IndexPage}
~~~

### Metaタグ・個別設定編
`og:image`がいちばんややこしい。

~~~html
  {block:PermalinkPage}
 
    {block:Posts}
      {block:Text}
            <meta property="og:description" content="{PlaintextBody}"/>
            <meta property="og:image" content="{HeaderImage}"/>
      {/block:Text}

      {block:Photo}
        <meta property="og:image" content="{PhotoURL-500}"/>
        {block:Caption}<meta property="og:description" content="{PlaintextCaption}"/>{/block:Caption}
        <meta property="og:title" content="{Title} {block:Date}- {Year}/{MonthNumberWithZero}/{DayOfMonthWithZero} {/block:Date}"/>
      {/block:Photo}

      {block:Photoset}
        {block:Photos}<meta property="og:image" content="{PhotoURL-500}"/>{/block:Photos}
        {block:Caption}<meta property="og:description" content="{PlaintextCaption}"/>{/block:Caption}
        <meta property="og:title" content="{Title} {block:Date}- {Year}/{MonthNumberWithZero}/{DayOfMonthWithZero} {/block:Date}"/>
      {/block:Photoset}

      {block:Quote}
        <meta property="og:title" content="{PlaintextQuote}"/>
        <meta property="og:description" content="{PlaintextSource}"/>
        <meta property="og:image" content="{HeaderImage}"/>
      {/block:Quote}

      {block:Link}
        <meta property="og:title" content="Link Posted to {Title} - {PlaintextName}"/>
        <meta property="og:description" content="{PlaintextDescription}"/>
        <meta property="og:image" content="{HeaderImage}"/>
      {/block:Link}

      {block:Chat}
        <meta property="og:title" content="{PlaintextTitle}"/>
        <meta property="og:description" content="{block:Lines}{block:Label}{Label}: {/block:Label}{Line} &bull; {/block:Lines}"/>
        <meta property="og:image" content="{HeaderImage}"/>
      {/block:Chat}

      {block:Audio}
        <meta property="og:title" content="{block:Artist}{Artist} - {/block:Artist}{block:TrackName}{TrackName}{/block:TrackName}"/>
        <meta property="og:description" content="{PlaintextCaption}"/>
        {block:AlbumArt}<meta property="og:image" content="{AlbumArtURL}"/>{/block:AlbumArt}
      {/block:Audio}

      {block:Video}
        {block:VideoThumbnail}<meta property="og:image" content="{VideoThumbnailURL}"/>{/block:VideoThumbnail}
        <meta property="og:title" content="{PlaintextCaption}"/>
        {block:Caption}
            <meta property="og:description" content="{PlaintextCaption}"/>
            <meta property="og:title" content="Posted to {Title} {block:Date}- {Year}/{MonthNumberWithZero}/{DayOfMonthWithZero} {/block:Date}"/>
        {/block:Caption}
      {/block:Video}
      

      {block:Answer}
        <meta property="og:title" content="{PlaintextQuestion}"/>
        <meta property="og:description" content="{PlaintextAnswer}"/>
        <meta property="og:image" content="{HeaderImage}"/>
      {/block:Answer}

    {/block:Posts}

  {/block:PermalinkPage}

  {block:IndexPage}
    <meta property="og:description" content="{MetaDescription}"/>
    <meta property="og:image" content="{HeaderImage}"/>
  {/block:IndexPage}

~~~

### 確認
[facebook for deveropers シェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認。  
エラーが出なくなるまで修正。

### あ。
Facebookしか使ってないから、Twitterは後で書いてみる。
