---
layout: splash
title: "サイトとか"
permalink: /sitesystem/index.html
sitemap: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.sitesystem %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description }}
{% endfor %}