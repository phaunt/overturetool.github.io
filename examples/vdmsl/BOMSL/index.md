---
layout: listing
title: BOM
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
~~~
###bom.vdmsl

~~~

types
BOM = map Pn to set of Pn
Pn = nat
values
bom = {1 |-> {2,4}, 2 |-> {3,4,5}, 3 |-> {5,6}, 4 |-> {6}, 
cycle = {1 |-> {2,4}, 2 |-> {3,4,5}, 3 |-> {5,6}, 4 |-> {6}, 
functions
Parts: Pn * map Pn to set of Pn -> set of Pn
TransClos: (map Pn to set of Pn) * set of Pn -> set of Pn
IncrAcc: (map Pn to set of Pn) * set of Pn -> nat
Explode: Pn * BOM -> set of Pn
Exps: BOM * set of Pn -> set of Pn
Enter: BOM * Pn * set of Pn -> BOM
Delete: Pn * BOM -> BOM
Add: Pn * Pn * BOM -> BOM
Erase: Pn * Pn * BOM -> BOM

~~~