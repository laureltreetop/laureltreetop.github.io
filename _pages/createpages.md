---
layout: splash
title: "ページ作成"
permalink: /createpages/
sitemap: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.createpages %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description | markdownify | strip_html }}
{% endfor %}