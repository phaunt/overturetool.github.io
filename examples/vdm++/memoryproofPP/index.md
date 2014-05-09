---
layout: default
title: memoryproof
---

~~~

#******************************************************
~~~
###memory.vdmpp

{% raw %}
~~~
class Example3
types 
ADDR = <a0> | <a1> | <a2>;

types
State :: mem    : map ADDR to CON
inv mk_State(mem,access,used) == used = dom mem;
functions
Safe : State -> bool
Alloc : ADDR * State -> State
Alloc2 : ADDR * State -> State
Alloc20 : ADDR * State -> State
Alloc21 : ADDR * State -> State

Alloc3 : ADDR * State * map ADDR to CON -> State
functions -- conjecture
AllocSafe : ADDR * State -> bool
AllocSafe0 : ADDR * State -> bool
AllocSafe2 : ADDR * State -> bool
operations
public RunTest : () ==> bool
end Example3
~~~{% endraw %}
