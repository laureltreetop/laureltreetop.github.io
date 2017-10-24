---
layout: single
permalink: /blog/index.html
title: "Blog"
author_profile: true
---
{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

<strong>{{ page.title }}</strong>

