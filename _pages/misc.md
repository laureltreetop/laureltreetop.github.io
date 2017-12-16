---
layout: single
title: "misc."
permalink: /misc/index.html
share: false
comments: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
sidebar:
    nav: "sidebar"
---

{% for item in site.misc %}
  + [{{ item.title }}]({{ item.url }})
  {: .triangle}
{% endfor %}