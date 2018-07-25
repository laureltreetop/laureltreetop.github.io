---
layout: splash
title: "サイトとかblogとか"
permalink: /sitesystem/index.html
share: false
comments: false
sitemap: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.sitesystem %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description }}
{% endfor %}