---
layout: listing
title: CountryColouring
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
~~~
###CountryColouring.vdmsl

~~~

types
  Country = seq of char;
  Relation = set of (Country * Country);
  Colour = set of Country;
  Colouring = set of Colour;
functions
  isRelation: Relation -> bool
  areNb: Country * Country * Relation -> bool
  CountriesRel: Relation -> set of Country
  sameColour: Country * Country * Colouring -> bool
  CountriesCol: Colouring -> set of Country
  isColouring: Colouring -> bool
  isColouringOf: Colouring * set of Country -> bool
  nbDistinctColours: Colouring * Relation -> bool
  colMap(r: Relation) cols : Colouring 
  canBeExtBy: Colour * Country * Relation -> bool 
  extndCol: Colouring * Country * Relation -> Colouring
  CardColouring: Colouring * Country * Relation -> nat
  colCntrs: set of Country * Relation -> Colouring
  CardCountry: set of Country * Relation -> nat
  colMapExpl: Relation -> Colouring

~~~