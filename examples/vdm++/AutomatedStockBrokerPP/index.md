---
layout: default
title: AutomatedStockBroker
---

~~~
The system is an automated stock broker, where you can specify a list
More information about the model and the purpose of it can be found in
#******************************************************
~~~
###AutomatedStockBroker.vdmpp

{% raw %}
~~~
class AutomatedStockBroker is subclass of GLOBAL
instance variables
  --says that foreach ActionEvent in the log if there exist a next action with the same 
  inv MaxOneOfEachActionTypePerTime(actionLog);    

operations
public AutomatedStockBroker: nat ==> AutomatedStockBroker
public AddStock: StockRecord * nat1 ==> ()
public GetActionLog:() ==> seq of ActionEvent
public GetStocksWithActiveActionTrigger: StockState ==> seq of StockRecord
FindValidBuy: seq of StockRecord * nat ==> [StockRecord]
FindValidSell: seq of StockRecord * nat ==> StockRecord
  PerformBuy: StockRecord * nat ==> ()
    let i in set inds stocks be st stocks(i).Name = potAction.Name
  PerformSell: StockRecord * nat ==> ()
    let i in set inds stocks be st stocks(i).Name = potAction.Name
  ObserveAllStocks: nat ==> ()
  public Step: nat ==> ()
   ObserveAllStocks(time);
   let potBuys = GetStocksWithActiveActionTrigger(<PotentialBuy>) , 
     if(validBuy <> nil)
   IO`print("\n");
functions
IsGTAll: int * set of int -> bool
CanAfford: StockRecord * nat -> bool
MaxOneOfEachActionTypePerTime: seq of ActionEvent -> bool
end AutomatedStockBroker
~~~{% endraw %}

###GLOBAL.vdmpp

{% raw %}
~~~
class GLOBAL
public EventType = <UpperLimit> | <LowerLimit> | <Peak> | <Valley> | 
public StockState = <PotentialBuy> | <Bought>;
public Event :: Type : EventType
public Region :: UpperValue : StockValue
public StockValue = nat;
public ActionType = <Buy> | <Sell> ;
public ActionTrigger :: Trigger : seq of EventType
public StockRecord :: Name : StockIdentifier 
inv mk_StockRecord(p1,p2,p3,p4,p5) == p2(<PotentialBuy>).Action = <Buy> 
public ActionEvent :: Type : ActionType
values
end GLOBAL
~~~{% endraw %}

###Stock.vdmpp

{% raw %}
~~~
class Stock is subclass of GLOBAL
  public RateOfChange = <positive> | <negative> | <constant>;  
 instance variables
  public Stock: StockIdentifier * StockValue ==> Stock
  public UpdateStock:() ==> ()
   currentRateOfChange :=
   cases currentRateOfChange:
  public GetName: () ==> StockIdentifier 
  public GetCurrentValue : () ==> StockValue 
  public GetValueHistory : () ==> seq of StockValue 
 functions
  InitialRateOfChange : (StockValue) -> RateOfChange
  NextRateOfChange : RateOfChange * StockValue -> RateOfChange
  MakelistFromSet : set of RateOfChange -> seq of RateOfChange
end Stock
~~~{% endraw %}

###StockMarket.vdmpp

{% raw %}
~~~
class StockMarket is subclass of GLOBAL
 instance variables
 operations
  public AddStock:(Stock )==> ()
  public RemoveStock:(Stock )==> ()
  public GetStock:(StockIdentifier)==> Stock 
  public GetStockNames: () ==> set of StockIdentifier 
end StockMarket
~~~{% endraw %}

###StockWatcher.vdmpp

{% raw %}
~~~
class StockWatcher is subclass of GLOBAL
 instance variables
  inv  eventHistory(len eventHistory).Type = <EntersNoActionRegion> 
 operations
  public StockWatcher: StockRecord ==> StockWatcher
  UpdateEvents : nat ==> ()
       if hd stockHistory = u and stockHistory(2)  <> u
       IO`print(eventHistory)
  UpdateAction : nat ==> ()
  public ObserveStock : nat ==> ()
   UpdateAction(time);
  public updateStockRecord : StockRecord ==> ()
  public GetStockValue : nat ==> StockValue
  public GetTriggeredAction : () ==> [ActionType]
 functions
  NoActiveTriggerInNoActionRegion: StockValue * Region * [ActionType]  -> bool
  IsInRegion: StockValue * Region -> bool
  IsPeak: seq of StockValue -> bool
  IsValley: seq of StockValue -> bool
  FindLowestIndexFromTime: nat * seq of Event  -> nat1
  public IsActionTriggeredAtTime: nat * ActionTrigger * seq of Event  -> bool
end StockWatcher
~~~{% endraw %}

###timer.vdmpp

{% raw %}
~~~
class Timer 
instance variables
  currentTime : nat := 1;
values 
  stepLength : nat = 1;
operations
public 
public
end Timer
~~~{% endraw %}

###World.vdmpp

{% raw %}
~~~
class World is subclass of GLOBAL
values
instance variables  
 public static timerRef : Timer := new Timer();
 public static stockMarket : StockMarket := new StockMarket();
operations
public isFinished : () ==> bool
 public Run : () ==> ()
  (dcl r1 : StockRecord := mk_StockRecord(mk_token("test"),
   r3 : StockRecord := mk_StockRecord(mk_token("test2"),
   asb.AddStock(r1,1);
   while not isFinished()
    stockMarket.UpdateStocks();
    asb.Step(timerRef.GetTime());
end World
~~~{% endraw %}
