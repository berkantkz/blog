---
permalink: /
layout: index
type: 0
---

{% for content in site.icerik %}
<div class="item mb-5">
    <div class="row g-3 g-xl-0">
        <div class="col-2 col-xl-3">
            <!-- <img class="img-fluid post-thumb " src="assets/images/blog/blog-post-thumb-1.jpg" alt="image"> -->
            <i class="fa fa-{{content.icon}} fa-3x"></i>
        </div>
        <div class="col">
            <h3 class="title mb-1"><a class="text-link" href="{{content.url}}">{{content.name}}</a></h3>
            <div class="meta mb-1">
                <span class="date">
                    {% for c in site.categories %}
                        {% assign a = content.name | downcase %}
                        {% assign b = c %}
                    {%endfor%}
                    {% if b[1][0].categories contains a %}
                        İçerik sayısı: {{b.size}}
                    {% else %}
                        Bu bölümde hiç içerik yok.
                    {% endif %}
                </span>
                <!-- <span class="time"></span> -->
                <!-- <span class="comment">
                    <a class="text-link" href="{{post.url}}/#yorumlar">8 comments</a>
                </span> -->{% if content.tags %}<span class="tags">{% for tag in content.tags %}{{tag}}, {% endfor %}</span>{% endif %}
            </div>
            <div class="intro">{{content.content | strip_html | truncate: 128}}</div>
            <!-- <a class="text-link" href="{{content.url}}">Read more &rarr;</a> -->
        </div>
    </div>
</div>
{% endfor %}