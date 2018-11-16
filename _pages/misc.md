---
layout: splash
title: "misc."
permalink: /misc/index.html
sitemap: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.misc %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description }}
{% endfor %}