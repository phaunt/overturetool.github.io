---
layout: default
title: KLV
---

~~~
This example describes a VDM++ specification of a KLV system. The
The focus of the model is on the logic of the KLV systems when a train
#******************************************************
~~~
###Beacon.vdmpp

{% raw %}
~~~

class Beacon
end Beacon

~~~{% endraw %}

###CabDisplay.vdmpp

{% raw %}
~~~

class CabDisplay
instance variables
  alarm : bool := false;
  emergencybreak : bool := false;
  groundfault : bool := false;
operations
  public
  public
  public
  public
  public
  public
  public
end CabDisplay

~~~{% endraw %}

###CheckSpeedEvent.vdmpp

{% raw %}
~~~

class CheckSpeedEvent is subclass of Event
instance variables
  speed : real;
operations 
  public
  public
end CheckSpeedEvent

~~~{% endraw %}

###EmergencyBreak.vdmpp

{% raw %}
~~~

class EmergencyBreak
instance variables
  emergencybreak : bool := false;
operations
  public
  public
  public
end EmergencyBreak

~~~{% endraw %}

###Event.vdmpp

{% raw %}
~~~

class Event
operations
  public
end Event

~~~{% endraw %}

###FLTV.vdmpp

{% raw %}
~~~

class FLTV is subclass of Beacon
end FLTV

~~~{% endraw %}

###HeadMeetBeaconEvent.vdmpp

{% raw %}
~~~

class HeadMeetBeaconEvent is subclass of Event
instance variables
  beacon : Beacon;
operations
  public
  public
end HeadMeetBeaconEvent

~~~{% endraw %}

###KLV.vdmpp

{% raw %}
~~~

class KLV
instance variables
instance variables
  announcements : seq of TIV_D := [];
  speedrestrictions : seq of TIV_E := [];
instance variables
  firstspeedrestriction : bool := true;
values
operations
public
public
public
public
public
public
public
public
public
public
public
public
public
public
public
public
end KLV

~~~{% endraw %}

###KLVStateEvent.vdmpp

{% raw %}
~~~

class KLVStateEvent is subclass of Event
operations 
  public
end KLVStateEvent

~~~{% endraw %}

###MaxSpeedEvent.vdmpp

{% raw %}
~~~

class MaxSpeedEvent is subclass of Event
operations 
  public
end MaxSpeedEvent

~~~{% endraw %}

###NoBeaconMetEvent.vdmpp

{% raw %}
~~~

class NoBeaconMetEvent is subclass of Event
operations 
  public
end NoBeaconMetEvent

~~~{% endraw %}

###OnBoardComp.vdmpp

{% raw %}
~~~

class OnBoardComp
types
  public 
values 
  AlarmSpeedAdd = 5;
functions
  public
end OnBoardComp

~~~{% endraw %}

###TailMeetBeaconEvent.vdmpp

{% raw %}
~~~

class TailMeetBeaconEvent is subclass of Event
instance variables
  beacon : Beacon;
operations
  public
  public
end TailMeetBeaconEvent

~~~{% endraw %}

###Test.vdmpp

{% raw %}
~~~

class Test
types
  public
  public
  public
  public
  public
  public
  public
  public
instance variables
  klv : KLV := new KLV();
operations
  public
  public
end Test

~~~{% endraw %}

###TIV_A.vdmpp

{% raw %}
~~~

class TIV_A is subclass of Beacon
end TIV_A

~~~{% endraw %}

###TIV_D.vdmpp

{% raw %}
~~~

class TIV_D is subclass of Beacon
instance variables
operations
  public
  public
end TIV_D

~~~{% endraw %}

###TIV_E.vdmpp

{% raw %}
~~~

class TIV_E is subclass of Beacon
instance variables
  speed : [real] := nil;
operations
  public
  public
end TIV_E

~~~{% endraw %}

###useKLV.vdmpp

{% raw %}
~~~
class UseKLV
values
  ev60 : HeadMeetBeaconEvent = new HeadMeetBeaconEvent(new TIV_D(60));
instance variables
  test : Test := new Test();
traces
Seq1 : let ev1 in set ev_s

end UseKLV
~~~{% endraw %}
