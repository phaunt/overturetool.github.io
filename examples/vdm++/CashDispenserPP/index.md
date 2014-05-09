---
layout: default
title: CashDispenserConc
---

~~~
This model is concurrent and it is described in VDM++. This enables 
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
  public GetBalance : () ==> nat
  public Withdrawal : Card`CardId * nat * Clock`Date ==> bool
  public MakeStatement : Card`CardId * Clock`Date ==> Letter
  public GetCardIds: () ==> set of Card`CardId
  AddCard : Card`CardId * Cardholder ==> ()
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

###Channel.vdmpp

{% raw %}
~~~

class Channel
instance variables
values
types
  public Request :: command : Command
  public Command = <TriesExceeded> | <ResetTries> | <IncTries> | 
  public ReqData = CardId | AccountId | Amount;
  public Response :: command : Command
operations
  public SendRequest : Request ==> ()
  public ReceiveRequest : () ==> Request
  public SendResponse : Response ==> ()
  public ReceiveResponse : () ==> [Response]
  public Wait: () ==> ()
  CheckTime: () ==> ()
functions
  AllReceived : nat * nat * nat * nat -> bool
sync
  per ReceiveRequest => req <> nil;
  per Wait => curTime > timeout or resp <> nil;
thread
end Channel

~~~{% endraw %}

###Clock.vdmpp

{% raw %}
~~~

class Clock
types
instance variables
operations
  public GetDate : () ==> Date
end Clock

~~~{% endraw %}

###concur.vdmpp

{% raw %}
~~~
class Main
instance variables
  ltills : map TillId to LocalTill := {|->};
types
  public TillId = nat;
values
  nat2char : map nat to char =
functions
  tStr : nat -> seq of char
  nat2chars : nat -> seq of char
  nat2string : nat -> seq of char
operations
  public GetTill: TillId ==> Till
  public Main: () ==> Main
    SetupTill : nat * Till ==> Till
    public RepairTill : nat  ==> ()
    public EnterCardAtTill : nat * nat * nat ==> ()
    public WithdrawalAtTill : nat * nat ==> ()
    public GetBalanceAtTill : nat ==> ()
    public Fail : nat ==> ()
    public ReturnCard : nat ==> ()
    Wait: () ==> ()
    public Run : () ==> seq of char
sync
  mutex(SetupTill);

end Main
class MessageBuffer
instance variables
  data : seq of char := [];
operations
  public put : seq of char ==> ()
  public get : () ==> seq of char
sync
end MessageBuffer
class User
instance variables
  tillNum : nat;
operations
  public User : nat * nat * nat * Main ==> User 
  Test1 : () ==> ()


thread
end User
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
  GetLastStatement : () ==> Letter
end Letterbox

~~~{% endraw %}

###LocalResource.vdmpp

{% raw %}
~~~

class LocalResource
instance variables
operations
  public LocalResource : Channel ==> LocalResource
  public GetBalance : Account`AccountId ==> [nat]| <Fail>
  Wait : Channel`Command ==> Channel`RespData | <Fail>
  public Withdrawal : Account`AccountId * Card`CardId * nat ==> bool | <Fail>
  public PostStatement : Account`AccountId * Card`CardId ==> bool | <Fail>
  public IsLegalCard : Account`AccountId * Card`CardId ==> bool | <Fail>
  public NumberOfTriesExceeded : Card`CardId ==> bool | <Fail>
  public ResetNumberOfTries : Card`CardId ==> [<Fail>]
  public IncrNumberOfTries : Card`CardId ==> [<Fail>]
end LocalResource

~~~{% endraw %}

###LocalTill.vdmpp

{% raw %}
~~~

class LocalTill
instance variables
thread
operations
  ProcessRequest : Channel`Request ==> ()
  public LocalTill : Channel * CentralResource ==> LocalTill
  public Fail : () ==> ()
  public Repair : Channel ==> ()
end LocalTill

~~~{% endraw %}

###Till.vdmpp

{% raw %}
~~~

class Till
instance variables
  inv curCard = nil => not cardOk;
operations
  public Set: LocalResource ==> Till
  public InsertCard : Card ==> ()
  public Validate : Card`PinCode ==> <PinOk> | <PinNotOk> | <Retained> 
  public ReturnCard : () ==> ()
  public GetBalance : () ==> [nat]|<Fail>
  public MakeWithdrawal : nat ==> bool | <Fail>
  public RequestStatement : () ==> bool | <Fail>
  public IsLegalCard : () ==> bool | <Fail>
  public CardValidated: () ==> bool
  public CardInside: () ==> bool
functions
  Encode: Card`PinCode +> Card`Code
end Till

~~~{% endraw %}

###Timer.vdmpp

{% raw %}
~~~

class Timer
instance variables
operations
  public Stop : () ==> () 
  public GetTime : () ==> nat
  IncTime: () ==> ()
thread
end Timer

~~~{% endraw %}
