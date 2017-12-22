---
layout: splash
title: "Collections"
permalink: /collections.html
share: false
comments: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% capture written_label %}'None'{% endcapture %}
{% for collection in site.collections %}

  {% unless collection.output == false or collection.label == "posts" %}
  <div class="collect-box">
    {% capture label %}{{ collection.label }}{% endcapture %}
    {% if label != written_label %}
      <h2 id="{{ label | slugify }}" class="archive__subtitle"><i class="fas fa-folder-open"></i>&nbsp;{{ collection.title }}</h2>
      {% capture written_label %}{{ label }}{% endcapture %}
    {% endif %}
  <ul class="collect-list">
  {% assign collections = collection.docs %}
  {% for post in collections limit: 4 %}
    {% unless collection.output == false or collection.label == "posts" %}
	  <li class="file"><a href="{{ site.baseurl }}/{{ post.url }}">{{ post.title }}</a></li>
    {% endunless %}
  {% endfor %}

  {% assign size = collection.docs | size %}
  {% if size > 4 %}
    <li class="folder-close"><a href="{{ site.baseurl }}/{{ label }}/index.html">{{ size | minus: 4 }} more...</a></li>
  {% endif %}
  </ul>
  </div>
  {% endunless %}


{% endfor %}
