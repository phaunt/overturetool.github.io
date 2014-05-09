---
layout: default
title: CashDispenser
---

~~~
This model is described in the sequential subset of VDM++. 
#******************************************************
~~~
###Account.vdmpp

{% raw %}
~~~

class Account
instance variables
  inv TransactionsInvariant(transactions);
values
types
operations
public Create : map Card`CardId to Cardholder * nat ==> Account
  public GetBalance : () ==> nat
  public Withdrawal : Card`CardId * nat * Clock`Date ==> bool
  public MakeStatement : Card`CardId * Clock`Date ==> Letter
  public GetCardIds: () ==> set of Card`CardId
  public AddCard : Card`CardId * Cardholder ==> ()
  public RemoveCard : Card`CardId ==> ()
functions
  DateTotal : Clock`Date * seq of Transaction +> nat
  Sum: seq of real +> real
end Account

~~~{% endraw %}

###Card.vdmpp

{% raw %}
~~~

class Card
types
instance variables
operations
  public GetCode : () ==> Code
  public GetAccountId : () ==> Account`AccountId
  public GetCardId : () ==> CardId
end Card

~~~{% endraw %}

###CardHolder.vdmpp

{% raw %}
~~~

class Cardholder
types
instance variables
operations
  public GetName : () ==> Name 
  public GetAddress : () ==> Address 
end Cardholder

~~~{% endraw %}

###CentralResource.vdmpp

{% raw %}
~~~

class CentralResource
instance variables
  letterbox     : Letterbox;
  inv forall acc1,acc2 in set rng accounts &
values
operations
  public GetBalance : Account`AccountId ==> [nat]
  public Withdrawal : Account`AccountId * Card`CardId * nat ==> bool
  public PostStatement : Account`AccountId * Card`CardId ==> bool
  public IsLegalCard : Account`AccountId * Card`CardId ==> bool
  public NumberOfTriesExceeded : Card`CardId ==> bool
  public ResetNumberOfTries : Card`CardId ==> ()
  public IncrNumberOfTries : Card`CardId ==> ()
  public AddAccount : Account`AccountId * Account ==> ()
  public AddIllegalCard : Card`CardId ==> ()
end CentralResource

~~~{% endraw %}

###Clock.vdmpp

{% raw %}
~~~

class Clock
types
instance variables
  date : Date := "";
operations
  public GetDate : () ==> Date
end Clock

~~~{% endraw %}

###Letter.vdmpp

{% raw %}
~~~

class Letter
instance variables
operations
end Letter

~~~{% endraw %}

###Letterbox.vdmpp

{% raw %}
~~~

class Letterbox
instance variables
operations
  public GetLastStatement : () ==> Letter
end Letterbox

~~~{% endraw %}

###SimpleTest.vdmpp

{% raw %}
~~~
class SimpleTest
values
  c1 : Card = new Card(123456,1,1);
instance variables
  clock : Clock := new Clock();
types
  public TillId = nat;
operations 
public Run : () ==> bool 
end SimpleTest
~~~{% endraw %}

###Till.vdmpp

{% raw %}
~~~

class Till
instance variables
  inv curCard = nil => not cardOk;
operations
  public InsertCard : Card ==> ()
  public Validate : Card`PinCode ==> <PinOk> | <PinNotOk> | <Retained>
  public ReturnCard : () ==> ()
  public GetBalance : () ==> [nat]
  public MakeWithdrawal : nat ==> bool
  public RequestStatement : () ==> bool
  public IsLegalCard : () ==> bool
  public CardValidated: () ==> bool
  public CardInside: () ==> bool
functions
  Encode: Card`PinCode +> Card`Code
end Till

~~~{% endraw %}
