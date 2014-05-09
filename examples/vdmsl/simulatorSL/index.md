---
layout: listing
title: simulator
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
~~~
###simulator1.vdmsl

~~~


module TROM
   exports all
definitions
types
PortType       :: label       : String
inv mk_PortType(label, cardinality, portlist) ==
   (cardinality = card elems portlist);
Event          :: label    : String
inv mk_Event(label, type, porttype) ==
   (((type = <INTERNAL>) and (porttype.label = "NULLPORT")) or
State          :: label     : String
inv mk_State(label, type, isinitial, substates) ==
   (let exists_entry_state : set of State +> bool
Attribute      :: label : String
LSLTrait       :: traitlabel   : String
AttrFunction   :: stat       : State
TransitionSpec :: label         : String
TimeConstraint :: label            : String
inv mk_TimeConstraint(label,transition,cevent,tbounds,dstates,rwindows) ==
   (((cevent.type = <INTERNAL>) or (cevent.type = <OUTPUT>)) and
EventType      = <INPUT> | <INTERNAL> | <OUTPUT>;
StateType      = <SIMPLE> | <COMPLEX>;
ReactionWindow :: lowertimebound : nat
inv mk_ReactionWindow(lowertimebound, uppertimebound) ==
   (lowertimebound <= uppertimebound);
Port           :: label : String;
PortLink       :: tromporttuple1 : TromPortTuple
inv mk_PortLink(tromporttuple1, tromporttuple2) ==
   (tromporttuple1.tromlabel <> tromporttuple2.tromlabel);
TromPortTuple  :: tromlabel : String
SimulationEvent :: eventlabel   : String
EventHistory    :: triggeredtransition : bool
ReactionHistory :: timeconstraint : TimeConstraint
Reaction = <FIRED> | <DISABLED> | <ENABLED>;
LSLTraitDefinition :: label    : String
String         = seq1 of char;
Trom :: label            : String
inv mk_Trom(label,tromclass,porttypes,events,states,attributes,
   (forall pt1, pt2 in set porttypes &
   (forall e1, e2 in set events &
   (forall s1, s2 in set states &
   (forall a1, a2 in set attributes &
   (forall tr1, tr2 in set lsltraits &
   (forall af1, af2 in set attrfunctions &
   (forall ts1, ts2 in set transitionspecs &
   (forall tc1, tc2 in set timeconstraints &
   (forall e in set events &
   (exists1 s in set states &
   (exists1 s in set states &
   (forall a in set attributes &
   (forall tr in set lsltraits &
   (forall af in set attrfunctions &
   (forall ts in set transitionspecs &
   (forall tc in set timeconstraints &
Subsystem :: label     : String
inv mk_Subsystem(label, includes, troms, portlinks) ==
   (forall s1, s2 in set includes &
   (let included_subsystem : String * set of Subsystem +> bool
   (not included_subsystem(label, includes))) and
   (forall trom1, trom2 in set troms &
   (let included_trom : String * set of Subsystem +> bool
   (forall trom in set troms &
   (let linked_trom : TromPortTuple * set of Trom +> bool
        linked_subsystem : TromPortTuple * set of Subsystem +> bool
            (forall s2 in set {su | su : Subsystem & 
      (forall pl in set portlinks &


state System of
SUBSYSTEM : Subsystem
SIMULATIONEVENTLIST : seq of SimulationEvent
LSLLIBRARY : set of LSLTraitDefinition
CLOCK : nat
inv mk_System(subsystem, simulationeventlist, lsllibrary, clock) ==
   (let contains_trom : Subsystem +> bool
      contains_trom(subsystem)) and
   (let contains_portlink : Subsystem +> bool
      contains_portlink(subsystem)) and
   (forall i, j in set inds simulationeventlist &
   (forall se1, se2 in set elems simulationeventlist &
   (let accepted_by_trom : SimulationEvent * Subsystem +> bool
    let accepted_by_subsystem : SimulationEvent * Subsystem +> bool
      (forall se in set elems simulationeventlist &
   (let exists_lsltrait : Subsystem +> bool
            (forall s in set subsys.includes & 
       (exists_lsltrait(subsystem)))
init mk_System(subsys, simeventlist, lsllib, clock) ==
   simeventlist <> [] and clock = 0
end


functions
   get_trom_object(tromlabel : String, subsystem : Subsystem) trom: [Trom]
   post
      ((trom in set subsystem.troms and trom.label = tromlabel) or
       (exists1 s in set subsystem.includes &
           (trom = get_trom_object(tromlabel, s))) or
       (trom = nil));

   get_transition_spec(trom : Trom, se : SimulationEvent) ts : [TransitionSpec]
   pre
      (trom.label = se.tromlabel)
   post
      (((ts in set trom.transitionspecs) and
        ((trom.currentstate.label = ts.sourcestate.label) or
         (substate_of(trom.currentstate, ts.sourcestate))) and
        (ts.triggerevent.label = se.eventlabel) and
        (ts.portcondition = true) and
        (ts.enabcondition = true)) or
       (ts = nil));

   substate_of : State * State +> bool
      (substate in set complexstate.substates or
       (exists1 s in set complexstate.substates &
          (s.type = <COMPLEX> and substate_of(substate, s))))
   pre
      (complexstate.type = <COMPLEX>);

   get_entry_state(complexstate : State) entry : State
   pre
      (complexstate.type = <COMPLEX>)
   post
      (exists1 s in set complexstate.substates &
         ((s.isinitial = true) and
          ((s.type = <SIMPLE> and entry = s) or
           (s.type = <COMPLEX> and entry = get_entry_state(s)))));

   get_initial_state(trom : Trom) initial : State
   pre
      (trom.states <> { })
   post
      (exists1 s in set trom.states &
         ((s.isinitial = true) and
          ((s.type = <SIMPLE> and initial = s) or
           (s.type = <COMPLEX> and initial = get_entry_state(s)))));

   get_linked_tromport_tuple(tupleA : TromPortTuple, subsystem : Subsystem) 
   post
      ((exists1 pl in set subsystem.portlinks &
          ((pl.tromporttuple1 = tupleA and pl.tromporttuple2 = tupleB) or
           (pl.tromporttuple2 = tupleA and pl.tromporttuple1 = tupleB))) or
       (exists1 s in set subsystem.includes &
          (tupleB = get_linked_tromport_tuple(tupleA, s))) or
       (tupleB = nil));

   exists_in_subsystem : Trom * Subsystem +> bool
      (trom in set subsys.troms or
       (exists1 subsystem in set subsys.includes &
          (exists_in_subsystem(trom, subsystem))))
   pre
      ((subsys.troms <> { }) or (subsys.includes <> { }));

   get_unconstrained_internal_event(trom : Trom) event : [Event]
   post
      ((exists ts in set trom.transitionspecs &
         ((ts.sourcestate = trom.currentstate) and
          (ts.triggerevent.type = <INTERNAL>) and
          (not constrained_event(trom, ts.triggerevent)) and
          (event = ts.triggerevent))) or
       (event = nil));

   constrained_event : Trom * Event +> bool
      (exists tc in set trom.timeconstraints &
         (tc.constrainedevent = event))
   pre
      (event in set trom.events);

   get_simevent_index(se : SimulationEvent, 
   pre
      (se in set elems se_list)
   post
      (se_list(index) = se);

   get_random_time_within_rw(rw : ReactionWindow) time : nat
   post
      ((time >= rw.lowertimebound) and (time <= rw.uppertimebound));

   get_lru_port(portlist : seq of Port) port : Port
   pre
      (portlist <> [])
   post
      (port in set elems portlist)

operations
   simulator : () ==> ()
      initialize_simulation_clock();
      schedule_unconstrained_internal_events_from_initial_state();
      while (i <= len SIMULATIONEVENTLIST) do
         while ((i <= len SIMULATIONEVENTLIST) and
            i := i + 1
   pre
      ((SIMULATIONEVENTLIST <> []) and
       (forall se in set elems SIMULATIONEVENTLIST &
          ((se.occurtime >= CLOCK) and
           (se.eventhistory = nil))) and
       (forall trom in set {trom | trom : Trom & 
             ((trom.currentstate = get_initial_state(trom)) and
              (forall tc in set trom.timeconstraints &
                 (tc.reactionwindows = { })))))
   post
      ((SIMULATIONEVENTLIST <> []) and
       (SIMULATIONEVENTLIST(len SIMULATIONEVENTLIST).occurtime = CLOCK) and
       (forall se in set elems SIMULATIONEVENTLIST &
          ((se.occurtime <= CLOCK) and
           (se.eventhistory <> nil))) and
       (forall trom in set {trom | trom : Trom 
             (forall tc in set trom.timeconstraints &
                (tc.reactionwindows = { }))));

   handle_event : SimulationEvent ==> ()
          ts : [TransitionSpec];
      trom := get_trom_object(se.tromlabel, SUBSYSTEM);
      if trom = nil then return else skip;
      ts := get_transition_spec(trom, se);
      if ts = nil then
         if ts.postcondition = false then
            update_trom_current_state(trom, se, ts);
            handle_transition(trom, se, ts);
            schedule_unconstrained_internal_event(trom, se)
   pre
      (se.occurtime = CLOCK)
   post
      (CLOCK = CLOCK~);

   handle_transition : Trom * SimulationEvent * TransitionSpec ==> ()
                  fire_reaction(trom, se, tc, rw)
         if trom.currentstate in set tc.disablingstates then
               disable_reaction(trom, se, tc, rw)
         if ts.label = tc.transition.label then
            enable_reaction(trom, se, tc, ts)
   pre
      (se.occurtime = CLOCK)
   post
      (CLOCK = CLOCK~);

   update_trom_current_state(trom : Trom, se : SimulationEvent, 
   pre
      (ts.postcondition = true)
   post
      (((ts.destinstate.type = <SIMPLE>) and
       ((ts.destinstate.type = <COMPLEX>) and

   update_history_assignment_vector(trom : Trom, se : SimulationEvent, 
   pre
      (ts <> nil)
   post
      (se.eventhistory.assignmentvector = trom.assignmentvector);

   update_history_notransition(trom : Trom, se : SimulationEvent, 
   pre
      ((ts = nil) or (ts.postcondition = false))
   post
      ((se.eventhistory.triggeredtransition = false) and
       (se.eventhistory.tromcurrentstate = nil) and
       (se.eventhistory.assignmentvector = nil) and
       (se.eventhistory.reactionshistory = { }));

   update_history_transition(trom : Trom, se : SimulationEvent, 
   pre
      (ts.postcondition = true)
   post
      ((se.eventhistory.triggeredtransition = true) and
       (se.eventhistory.tromcurrentstate = trom.currentstate) and
       (se.eventhistory.assignmentvector = trom.assignmentvector) and
       (se.eventhistory.reactionshistory = { }));

   update_history_fire_reaction(trom : Trom, se : SimulationEvent, 
   pre
      ((tc.constrainedevent.label = se.eventlabel) and
       (rw in set tc.reactionwindows) and
       (se.occurtime >= rw.lowertimebound) and
       (se.occurtime <= rw.uppertimebound))
   post
      (exists rh in set se.eventhistory.reactionshistory &
         ((rh.timeconstraint = tc) and
          (rh.reactionwindow = rw) and
          (rh.reaction = <FIRED>)));

   update_history_disable_reaction(trom : Trom, se : SimulationEvent, 
   pre
      ((trom.currentstate in set tc.disablingstates) and
       (rw in set tc.reactionwindows))
   post
      (exists rh in set se.eventhistory.reactionshistory &
         ((rh.timeconstraint = tc) and
          (rh.reactionwindow = rw) and
          (rh.reaction = <DISABLED>)));

   update_history_enable_reaction(trom : Trom, se : SimulationEvent, 
   ext rd CLOCK : nat
   pre
      (ts.label = tc.transition.label)
   post
      (let rw : ReactionWindow be st
         rw = mk_ReactionWindow(tc.timebounds.lowertimebound + CLOCK,
         (exists rh in set se.eventhistory.reactionshistory &
            ((rh.timeconstraint = tc) and
             (rh.reactionwindow = rw) and
             (rh.reaction = <ENABLED>))));

   fire_reaction(trom : Trom, se : SimulationEvent, 
   pre
      ((tc.constrainedevent.label = se.eventlabel) and
       (rw in set tc.reactionwindows) and
       (se.occurtime >= rw.lowertimebound) and
       (se.occurtime <= rw.uppertimebound))
   post
      (rw not in set tc.reactionwindows);

   disable_reaction(trom : Trom, se : SimulationEvent, 
   ext rd SUBSYSTEM : Subsystem
       wr SIMULATIONEVENTLIST : seq of SimulationEvent
   pre
      ((trom.currentstate in set tc.disablingstates) and
       (rw in set tc.reactionwindows))
   post
      ((rw not in set tc.reactionwindows) and
       (let se2 : SimulationEvent be st
          se2 = get_enabled_simevent(trom, tc) in
          (((tc.constrainedevent.type = <INTERNAL>) and
            (SIMULATIONEVENTLIST =
           ((tc.constrainedevent.type = <OUTPUT>) and
            (let tromporttuple : [TromPortTuple] be st
               tromporttuple = get_linked_tromport_tuple
            (let se3 : SimulationEvent be st
               se3 = get_enabled_simevent_synch(tromporttuple, tc) in
               SIMULATIONEVENTLIST =

   enable_reaction(trom : Trom, se : SimulationEvent, 
   ext rd CLOCK : nat
       rd SUBSYSTEM : Subsystem
       wr SIMULATIONEVENTLIST : seq of SimulationEvent
   pre
      (ts.label = tc.transition.label)
   post
      (let rw : ReactionWindow be st
         rw = mk_ReactionWindow(tc.timebounds.lowertimebound + CLOCK,
      (let port : Port be st
         port = get_lru_port(tc.constrainedevent.porttype.portlist) in
      (let occurtime : nat be st
         occurtime = get_random_time_within_rw(rw) in
      (let se2 : SimulationEvent be st
         se2 = mk_SimulationEvent
         ((rw in set tc.reactionwindows) and
          (se2 in set elems SIMULATIONEVENTLIST) and
          (((tc.constrainedevent.type = <OUTPUT>) and
            (let tromporttuple : [TromPortTuple] be st
               tromporttuple = get_linked_tromport_tuple
            (((tromporttuple <> nil) and
              (let se3 : SimulationEvent be st
               se3 = mk_SimulationEvent
               (se3 in set elems SIMULATIONEVENTLIST))) or
             (tromporttuple = nil)))) or
           (tc.constrainedevent.type = <INTERNAL>)))))));

   get_enabled_simevent(trom : Trom, tc : TimeConstraint) 
   ext rd CLOCK : nat
       rd SIMULATIONEVENTLIST : seq of SimulationEvent
   pre
      (tc in set trom.timeconstraints)
   post
      ((se in set elems SIMULATIONEVENTLIST) and
       (se.eventlabel = tc.constrainedevent.label) and
       (se.tromlabel = trom.label) and
       (se.occurtime >= CLOCK) and
       (se.eventhistory = nil));

   get_enabled_simevent_synch(tromporttuple : TromPortTuple, 
   ext rd CLOCK : nat
       rd SIMULATIONEVENTLIST : seq of SimulationEvent
   post
      ((se in set elems SIMULATIONEVENTLIST) and
       (se.eventlabel = tc.constrainedevent.label) and
       (se.tromlabel = tromporttuple.tromlabel) and
       (se.occurtime >= CLOCK) and
       (se.eventhistory = nil));

   schedule_unconstrained_internal_events_from_initial_state()
   ext rd CLOCK : nat
       rd SUBSYSTEM : Subsystem
       wr SIMULATIONEVENTLIST : seq of SimulationEvent
   pre
      CLOCK = 0
   post
      ((CLOCK = 0) and
       (forall trom in set {trom | trom : Trom 
         (let event : [Event] = get_unconstrained_internal_event(trom) in
            (((event <> nil) and
              (let se : SimulationEvent be st
                 se = mk_SimulationEvent
                 ((se in set elems SIMULATIONEVENTLIST) and
                  (let i : nat1 be st
                     SIMULATIONEVENTLIST(i) = se in
                   (forall se2 in set elems SIMULATIONEVENTLIST~ &
                      (let j : nat1 be st
                         SIMULATIONEVENTLIST(j) = se2 in
                       i < j)))))) or
             (event = nil)))));

   schedule_unconstrained_internal_event(trom : Trom, se : SimulationEvent)
   ext rd CLOCK : nat
       wr SIMULATIONEVENTLIST : seq of SimulationEvent
   pre
      ((se in set elems SIMULATIONEVENTLIST) and (se.tromlabel = trom.label))
   post
      (let event : [Event] = get_unconstrained_internal_event(trom) in
         (((event <> nil) and
           (let j : nat1 be st
              j = get_simevent_index(se, SIMULATIONEVENTLIST) in
           (let se2 : SimulationEvent be st
              se2 = mk_SimulationEvent
              (SIMULATIONEVENTLIST =
                 [SIMULATIONEVENTLIST~(i) 
          (event = nil)));

   initialize_simulation_clock()
   ext wr CLOCK : nat
   post
      CLOCK = 0;

   update_simulation_clock()
   ext wr CLOCK : nat
   post
      CLOCK = CLOCK~ + 1

end TROM


~~~