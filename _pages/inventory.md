---
layout: splash
title: "モノいろいろ"
permalink: /inventory/
sitemap: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.inventory %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description }}
{% endfor %}