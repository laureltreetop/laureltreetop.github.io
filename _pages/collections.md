---
layout: splash
title: "一覧"
permalink: /collections.html
sitemap: false
header:
  overlay_image: /assets/images/github-header.png
  overlay_filter: rgba(255, 255, 255, 0.5)
---

{% capture written_label %}'None'{% endcapture %}
{% for collection in site.collections %}

  {% unless collection.output == false or collection.label == "posts" or collection.label == "attic" %}
  <div class="collections">
    {% capture label %}{{ collection.label }}{% endcapture %}
    {% if label != written_label %}
      <h2 id="{{ label | slugify }}" class="archive__subtitle"><a href="{{ site.baseurl }}/{{ label }}/index.html"><i class="fas fa-folder-open"></i>&nbsp;{{ collection.title }}</a></h2>
      {% capture written_label %}{{ label }}{% endcapture %}
    {% endif %}
  <ul class="fa-ul">
  {% assign collections = collection.docs %}
  {% for post in collections limit: 5 %}
    {% unless collection.output == false or collection.label == "posts" %}
	  <li><span class="fa-li"><i class="fas fa-file-alt"></i></span><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endunless %}
  {% endfor %}

  {% assign size = collection.docs | size %}
  {% if size > 5 %}
    <li><span class="fa-li"><i class="fas fa-folder-open"></i></span><a href="{{ site.baseurl }}/{{ label }}/index.html">{{ size | minus: 5 }} more...</a></li>
  {% endif %}
  </ul>
  </div>
  {% endunless %}

{% endfor %}