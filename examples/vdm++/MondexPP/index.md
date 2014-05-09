---
layout: default
title: Mondex
---

~~~

#******************************************************
~~~
###abpursefunctional.vdmpp

{% raw %}
~~~
class AbPurseFunctional
types
 public AbPurse :: balance : nat
 public  PurseId = token;
 public AbWorld ::
functions
public GetBalance: AbPurse -> nat
public GetLost: AbPurse -> nat
public IncreaseBalance: AbPurse * nat -> AbPurse
public IncreaseLost: AbPurse * nat -> AbPurse
public ReduceBalance: AbPurse * nat -> AbPurse
public GetTotal : AbPurse -> nat
newAbWorld : map PurseId to AbPurse * set of PurseId -> AbWorld
public TransferOk: AbWorld * PurseId * PurseId * nat -> AbWorld
public TransferLost: AbWorld * PurseId * PurseId * nat -> AbWorld
operations
public RunTest : () ==> AbWorld
end AbPurseFunctional
~~~{% endraw %}
