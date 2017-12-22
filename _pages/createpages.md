---
layout: splash
title: "ページ作成"
permalink: /createpages/index.html
share: false
comments: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.createpages %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description }}
{% endfor %}
