---
layout: default
title: Overture Core NetMeetings
---

# {{ page.title }}

The Overture core group net meetings.

## Upcoming meetings:

* Net Meeting 91: 20th September 2015, 1300 CET
* Net Meeting 92: 25th October 2015, 1300 CET
* Net Meeting 93: 6th December 2015, 1300 CET

And we have a [meeting template](template.html)

## Open Actions:

The list of open net meeting actions can be found [here](https://github.com/overturetool/overturetool.github.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22action+net-meeting%22).

## Past Meetings

{% for nm in site.netmeetings reversed %}
* [{{ nm.title }}]({{ site.url }}{{ nm.url }}): {{ nm.date }}{% endfor %}
{% comment %} The endfor needs to be on the line with the list item {% endcomment %}


