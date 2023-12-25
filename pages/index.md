---
permalink: /
layout: index
type: 0
---

{% for icerik in site.icerik %}
<div class="item mb-5">
    <div class="row g-3 g-xl-0">
        <div class="col-2 col-xl-3">
            <!-- <img class="img-fluid post-thumb " src="assets/images/blog/blog-post-thumb-1.jpg" alt="image"> -->
            <i class="fa fa-{{icerik.icon}} fa-3x"></i>
        </div>
        <div class="col">
            <h3 class="title mb-1"><a class="text-link" href="{{icerik.url}}">{{icerik.name}}</a></h3>
            <div class="meta mb-1">
                <!-- <span class="date">
                {% assign index = forloop.index | minus: 1 %}
                {% if site.icerik[index].alticerik[0].name == null %}
                    Bu bölümde hiç alt kategori yok.
                {% else %}
                    {{site.icerik[index].alticerik.size}} alt kategori mevcut.
                {% endif %}
                </span> -->
                <!-- <span class="time"></span> -->
                <!-- <span class="comment">
                    <a class="text-link" href="{{post.url}}/#yorumlar">8 comments</a>
                </span> -->{% if icerik.tags %}<span class="tags">{% for tag in icerik.tags %}{{tag}}, {% endfor %}</span>{% endif %}
            </div>
            <div class="intro">{{icerik.desc | strip_html | truncate: 128}}</div>
            <!-- <a class="text-link" href="{{icerik.url}}">Read more &rarr;</a> -->
        </div>
    </div>
</div>
{% endfor %}