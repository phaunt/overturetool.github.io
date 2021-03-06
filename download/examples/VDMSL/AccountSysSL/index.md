---
layout: default
title: AccountSysSL
---

## AccountSysSL
Author: Quentin Charatan and Aaron Kans


This example comes from the book "Formal Software Development: From VDM to Java" written by Quentin Charatan and Aaron Kans. This example illustrate how to model bank accounts and transactions made on these as a series of deposits and withdrawals.


| Properties | Values          |
| :------------ | :---------- |
|Language Version:| classic|


### AccountSys.vdmsl

{% raw %}
~~~
types

AccNum = token;

Date = token;

Details = token;

TransactionType = <Withdrawal> | <Deposit>;

Transaction ::
  date             : Date
  amount           : real
  transaction_type : TransactionType
inv mk_Transaction(-,a,-) == a > 0;
   
 Account ::
   number  : AccNum
   details : Details
   balance : real
   limit   : real
   transactions : seq of Transaction
inv mk_Account(-,-,b,l,t) == l >= 0 and b >= l and balanceOf(t) = b

state AccountSys of
  accounts : map AccNum to Account
inv mk_AccountSys(a) == forall num in set dom a & num = a(num).number
init ac == ac = mk_AccountSys({|->})
end

functions

balanceOf: seq of Transaction -> real
balanceOf(transln) ==
  let dep = [transln(i).amount | i in set inds transln 
                               & transln(i).transaction_type = <Deposit>],
      withd = [transln(i).amount | i in set inds transln 
                                 & transln(i).transaction_type = <Withdrawal>]
  in
    sum(dep) - sum(withd);
       
 sum: seq of real -> real
 sum(seqln) ==
   if seqln = []
   then 0
   else hd seqln + sum(tl seqln)
 measure Len;
 
 Len: seq of real -> nat
 Len(l) == len l;
 
 operations
 
 addAccount(numberIn: AccNum, detailsIn: Details, limitIn: real)
 ext wr accounts: map AccNum to Account
 pre numberIn not in set dom accounts and limitIn >= 0
 post accounts = accounts~ munion {numberIn |-> mk_Account(numberIn, detailsIn, 0, limitIn,[])};
 
 removeAccount(numberIn: AccNum)
 ext wr accounts: map AccNum to Account
 pre numberIn in set dom accounts
 post accounts = {numberIn} <-: accounts~;
 
 deposit(numberIn: AccNum, dateIn: Date, amountIn: real)
 ext wr accounts: map AccNum to Account
 pre numberIn in set dom accounts and amountIn >= 0
 post let bal = accounts~(numberIn).balance,
          trans = accounts~(numberIn).transactions
      in
        let newTrans = mk_Transaction(dateIn, amountIn, <Deposit>)
        in
          accounts = accounts~ ++ {numberIn |-> mu(accounts~(numberIn),
                                                   balance |-> bal + amountIn,
                                                   transactions |-> trans ^ [newTrans])};

withdraw(numberIn: AccNum, dateIn: Date, amountIn: real)
ext wr accounts: map AccNum to Account
pre numberIn in set dom accounts and amountIn >= 0 and
    accounts(numberIn).balance -amountIn >= accounts(numberIn).limit
post let bal = accounts~(numberIn).balance,
         trans = accounts~(numberIn).transactions
     in
       let newTrans = mk_Transaction(dateIn, amountIn, <Withdrawal>)
       in
         accounts = accounts~ ++ {numberIn |-> mu(accounts~(numberIn),
                                                  balance |-> bal - amountIn,
                                                  transactions |-> trans ^ [newTrans])};

changeDetails(numberIn: AccNum, detailsIn: Details)
ext wr accounts: map AccNum to Account
pre numberIn in set dom accounts
post accounts = accounts~ ++ {numberIn |-> mu(accounts~(numberIn),details |-> detailsIn)};

changeLimits(numberIn: AccNum, limitIn: real)
ext wr accounts: map AccNum to Account
pre numberIn in set dom accounts and limitIn >= 0 and 
    accounts(numberIn).balance >= limitIn
post accounts = accounts~ ++ {numberIn |-> mu(accounts~(numberIn),limit |-> limitIn)};

getDetails(numberIn: AccNum) detailsOut: Details
ext rd accounts: map AccNum to Account
pre numberIn in set dom accounts
post detailsOut = accounts(numberIn).details;

getBalance(numberIn: AccNum) balanceOut: real
ext rd accounts: map AccNum to Account
pre numberIn in set dom accounts
post balanceOut = accounts(numberIn).balance;

getLimit(numberIn: AccNum) limitOut: real
ext rd accounts: map AccNum to Account
pre numberIn in set dom accounts
post limitOut = accounts(numberIn).limit;

getAllTransactions(numberIn: AccNum) transactionsOut: seq of Transaction
ext rd accounts: map AccNum to Account
pre numberIn in set dom accounts
post transactionsOut = accounts(numberIn).transactions;

contains(numberIn: AccNum) query: bool
ext rd accounts: map AccNum to Account
post query <=> numberIn in set dom accounts;

isEmpty() query: bool
ext rd accounts: map AccNum to Account
post query <=> accounts = {|->};
 
getTotal() totalOut: nat
ext rd accounts: map AccNum to Account
post totalOut = card dom accounts
 
~~~
{% endraw %}

