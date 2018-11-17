---
layout: splash
title: "GitHub Pages"
permalink: /githubpages/
sitemap: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% for item in site.githubpages %}
  [{{ item.title }}]({{ item.url }})
  : {{ item.description | markdownify | strip_html }}
{% endfor %}