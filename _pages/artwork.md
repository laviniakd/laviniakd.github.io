---
layout: archive
title: "Artwork"
permalink: /artwork/
author_profile: true
---

{% include base_path %}

{% for post in site.artwork reversed %}
  {% include archive-single.html %}
{% endfor %}