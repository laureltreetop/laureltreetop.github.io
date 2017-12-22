---
layout: splash
title: "Gadget"
permalink: /gadget/index.html
share: false
comments: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.gadget %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description }}
{% endfor %}
