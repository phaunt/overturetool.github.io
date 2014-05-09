---
layout: default
title: Smoking
---

~~~

#******************************************************
~~~
###Agent.vdmpp

{% raw %}
~~~
class Agent
values
instance variables
operations
public Agent: Table ==> Agent
public GetTime: () ==> nat
public AddTobacco : () ==> bool
  return false;
public AddPaper : () ==> bool
  return false;
public AddMatch : () ==> bool
  return false;
end Agent
~~~{% endraw %}

###gui_Graphics.vdmpp

{% raw %}
~~~
class gui_Graphics
    public init : () ==> ()
	public tobaccoAdded : () ==> ()
	public paperAdded : () ==> ()
	public matchAdded : () ==> ()
	public tableCleared : () ==> ()
	public nowSmoking : nat ==> ()
	functions
end gui_Graphics

~~~{% endraw %}

###Smoker.vdmpp

{% raw %}
~~~
class Smoker
instance variables
operations
public Smoker: seq of char * Table`Element * Table ==> Smoker
Roll: () ==> ()
Smoke: () ==> ()
thread
sync
end Smoker
~~~{% endraw %}

###Table.vdmpp

{% raw %}
~~~
class Table
types
public Element = <Tobacco> | <Paper> | <Match>;
instance variables
operations
public AddElement:  Element ==> bool
private ExtraElement: () ==> set of Element
public TakeElements: set of Element ==> set of Element
  let e in set es
    ExtraElement();)
MissingPM : () ==> ()
MissingTM : () ==> ()
MissingTP : () ==> ()
sync
--per AddElements => elements = {};
end Table
~~~{% endraw %}

###World.vdmpp

{% raw %}
~~~
class World
instance variables
table: Table := new Table();
operations
public World: nat ==> World
);
public Yield: () ==> ()
Finished: () ==> nat
public Run: () ==> ()
thread
sync
per Finished => finished;
~~~{% endraw %}
