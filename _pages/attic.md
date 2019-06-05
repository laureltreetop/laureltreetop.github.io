---
layout: splash
title: "Attic"
permalink: /attic/
search: false
sitemap: false
metatags: noindex, nofollow
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.attic %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description | markdownify | strip_html }}
{% endfor %}