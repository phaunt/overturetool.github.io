---
layout: listing
title: soccer
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
~~~
###soccer.vdmsl

~~~

module SOCCER_IMPL
exports all
definitions
values gk_subs_max : nat1 = 1;
types  player = nat1
state  R_Book of
inv mk_R_Book(ofp,ps,gk, ngk, nfp) == 
init r == r = 
functions
leq_eleven_players : set of player +> bool
within_allowed_limits : nat * nat +> bool
operations
RED_CARD (p : player)
CHANGE_GOALKEEPER (p : player)
SUBSTITUTION (pl : player, subs: player)
SUBSTITUTION_GK (pl : player, subs: player)
module SOCCER_EXPL
exports all
definitions
values gk_subs_max : nat1 = 1;
types  player = nat1
state  R_Book of
init r == r = mk_R_Book({1,2,3,4,5,6,7,8,9,10,11}, {12,13,14,15,16}, 1, 0, 0)
functions
leq_eleven_players : set of player +> bool
within_allowed_limits : nat * nat +> bool
operations
RED_CARD :  player ==> ()
CHANGE_GOALKEEPER : player ==> ()
SUBSTITUTION : player * player ==> ()
SUBSTITUTION_GK : player * player ==> ()
end SOCCER_EXPL

~~~