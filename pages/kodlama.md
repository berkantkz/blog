---
layout: index
category: [kodlama]
permalink: kodlama
category_name: kodlama
type: 0
---

{% for content in site.icerik %}
{%for i in content.icerik %}
<div class="item mb-5">
    <div class="row g-3 g-xl-0">
        <div class="col-2 col-xl-3">
            <i class="fab fa-{{i.icon}} fa-3x"></i>
        </div>
        <div class="col">
                <h3 class="title mb-1">
                    <span style="font-size: 12px; background: gray; color: white; padding: 4px; margin-right: 6px; border-radius: 5px; -webkit-user-select: none; user-select: none">
                        {% assign a = i.name | downcase %}
                        {% for c in site.categories %}
                            {% if c contains a %}
                                {{c[1].size}} içerik:
                            {% endif %}
                        {%endfor%}
                    </span>
                    <a class="text-link" href="/kodlama/{{i.url}}">{{i.name}}</a>
                </h3>
            <div class="meta mb-1">
                <!-- <span class="time"></span> -->
                <!-- <span class="comment">
                    <a class="text-link" href="{{post.url}}/#yorumlar">8 comments</a>
                </span> -->
                <!-- <span class="tags">{% for tag in content.tags %}{{tag}}, {% endfor %}</span> -->
            </div>
            <div class="intro">{{i.content | strip_html}}</div>
            <!-- <a class="text-link" href="{{content.url}}">Read more &rarr;</a> -->
        </div>
    </div>
</div>
{%endfor%}
{% endfor %}