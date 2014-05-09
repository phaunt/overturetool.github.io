---
layout: listing
title: metro
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
~~~
###metro.vdmsl

~~~

module Metro1
exports all
definitions 
state Metro of
operations
  Break: () ==> ()
  Open: () ==> ()
  Close: () ==> ()
end Metro1
module Metro1a
exports all
definitions 
state Metro of
operations
  Break()
  Open()
  Close()
end Metro1a
module Metro2
exports all
definitions 
state Metro of
types
  Time = nat;
operations
  Break: () ==> ()
  Open: () ==> ()
  CloseDepressed: Time ==> ()
  CloseReleased: Time ==> ()
end Metro2
module Metro3
exports all
definitions
types
  Interval:: start: Time
  LifeTime = seq of Interval
  System::
functions
  CloseAssistAfter3Secs: LifeTime * LifeTime -> bool
  BellOnWhenCloseBut: LifeTime * LifeTime -> bool
functions -- Auxiliary functions
  OverlappingIntervals: Interval * Interval -> bool
  SubInterval: Interval * Interval -> bool
end Metro3

~~~