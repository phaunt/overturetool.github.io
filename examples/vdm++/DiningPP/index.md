---
layout: default
title: Dining
---

~~~
This example is made by Marcel Verhoef and it demonstrates the standard
#******************************************************
~~~
###philosopher.vdmpp

{% raw %}
~~~

class Philosopher
instance variables
operations
  Think: () ==> ()
  Eat: () ==> ()
thread
end Philosopher

~~~{% endraw %}

###table.vdmpp

{% raw %}
~~~

class Table
instance variables
operations
  public takeFork: () ==> ()
  public releaseFork: () ==> ()
  public IamDone: () ==> ()
  wait: () ==> ()
  public LetsEat: () ==> ()
sync
end Table

~~~{% endraw %}
