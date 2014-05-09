---
layout: default
title: worldcup
---

~~~

This example illustrates how one can define the rules 
#******************************************************
~~~
###worldcup.vdmpp

{% raw %}
~~~
class GroupPhase
values
secondRoundWinners = [<A>,<B>,<C>,<D>,<E>,<F>,<G>,<H>];

types
public Team = <Brazil> | <Norway> | <Morocco> | <Scotland> |
public GroupName = <A> | <B> | <C> | <D> | <E> | <F> | <G> | <H>;

Score :: team : Team




instance variables
functions
sc_init : set of Team -> set of Score
clear_winner : set of Score -> bool
winner_by_more_wins : set of Score -> bool


operations
public Win : Team * Team ==> ()
Win2 (wt,lt: Team)
GroupWinner (gp:GroupName) t:Team
GroupRunnerUp (gp:GroupName) t:Team
-- let stmt - lots of examples presumably
GroupRunnerUp_expl : GroupName ==> Team
-- def stmt

-- assignment to state designator

-- conditional statements
GroupWinner_if : GroupName ==> Team
RandomElement : set of Team ==> Team
public GroupWinner_cases : GroupName ==> Team
    (winner_by_more_wins(gps(gp))) ->
    others -> RandomElement ( {sc.team | sc in set gps(gp) &
-- for loops
end GroupPhase
instance variables
  gp : GroupPhase := new GroupPhase()
traces
    InitBeforePlay : 

end UseGP
~~~{% endraw %}
