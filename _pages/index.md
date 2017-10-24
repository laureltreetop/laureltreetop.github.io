---
layout: splash
permalink: /
title: "K's GitHub Site"
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---
"GitHub"と付けているということは、他にもあちこちにサイトがあったり。

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include feature_row id="intro" type="center" %}

{% include feature_row %}
