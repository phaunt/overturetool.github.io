---
layout: default
title: Alarm
---

~~~
This is the alarm example from the VDM++ book, John Fitzgerald, Peter
#******************************************************
~~~
###alarm.vdmpp

{% raw %}
~~~

class Alarm
types
public String = seq of char;
instance variables 
descr    : String;
operations
public Alarm: Expert`Qualification * String ==> Alarm
public GetReqQuali: () ==> Expert`Qualification
end Alarm

~~~{% endraw %}

###expert.vdmpp

{% raw %}
~~~

class Expert
instance variables
quali : set of Qualification;
types 
public Qualification = <Mech> | <Chem> | <Bio> | <Elec>;
operations
public Expert: set of Qualification ==> Expert
public GetQuali: () ==> set of Qualification
end Expert

~~~{% endraw %}

###plant.vdmpp

{% raw %}
~~~

class Plant
instance variables
alarms   : set of Alarm;
operations
PlantInv: set of Alarm * map Period to set of Expert ==> 
types
public Period = token;
operations
public ExpertToPage: Alarm * Period ==> Expert
public NumberOfExperts: Period ==> nat
public ExpertIsOnDuty: Expert ==> set of Period
public Plant: set of Alarm * 
end Plant

~~~{% endraw %}

###test1.vdmpp

{% raw %}
~~~

class Test1
instance variables
a1   : Alarm  := new Alarm(<Mech>,"Mechanical fault");
values
p1: Plant`Period = mk_token("Monday day");
operations
public Run: () ==> set of Plant`Period * Expert
end Test1

~~~{% endraw %}
