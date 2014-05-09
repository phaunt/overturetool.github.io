---
layout: listing
title: SAFER
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
~~~
###aah.vdmsl

~~~



module AAH
imports from AUX all,
exports all
definitions
state AAH of 
types
  EngageState = <AAH_off> | <AAH_started> | <AAH_on> | <pressed_once> |
values
  click_timeout: nat = 10 -- was 100, changed for test purposes
operations
  Transition: HCM`ControlButton * AUX`SixDofCommand * nat ==> ()
  ActiveAxes: () ==> set of AUX`RotAxis
  IgnoreHcm: () ==> set of AUX`RotAxis
  Toggle: () ==> EngageState
functions
  AllAxesOff: set of AUX`RotAxis +> bool
  ButtonTransition: EngageState * HCM`ControlButton * set of AUX`RotAxis * 
end AAH


~~~
###auxilary.vdmsl

~~~

module AUX 
exports all
definitions
values
  arbitrary_value = mk_token(1001);
  axis_command_set : set of AxisCommand = {<Neg>,<Zero>,<Pos>};
  tran_axis_set : set of TranAxis = {<X>,<Y>,<Z>};
  rot_axis_set : set of RotAxis = {<Roll>,<Pitch>,<Yaw>};
  null_tran_command : TranCommand = {a |-> <Zero> | a in set tran_axis_set};
  null_rot_command : RotCommand = {a |-> <Zero> | a in set rot_axis_set};
  null_six_dof : SixDofCommand 
types
  AxisCommand = <Neg> | <Zero> | <Pos>;
  TranAxis = <X> | <Y> | <Z>;
  RotAxis = <Roll> | <Pitch> | <Yaw>;
  TranCommand = map TranAxis to AxisCommand
  RotCommand = map RotAxis to AxisCommand
  SixDofCommand ::
end AUX


~~~
###geom.vdmsl

~~~
                                                                                                                                                                     
~~~
###gui.vdmsl

~~~

dlmodule GUI
  exports
  uselib
end GUI

~~~
###hcm.vdmsl

~~~


module HCM
imports from AUX all
exports all
definitions
types
  SwitchPositions ::
  ControlModeSwitch = <Rot> | <Tran>;
  ControlButton = <Up> | <Down>;
  HandGripPosition:: vert  : AUX`AxisCommand
-- add inv to exclude impossible combinations???
functions
  GripCommand: HandGripPosition * ControlModeSwitch +> AUX`SixDofCommand
end HCM


~~~
###safer.vdmsl

~~~



module SAFER
imports from AUX all,

exports all
definitions
state SAFER of
operations
  ControlCycle: HCM`SwitchPositions * HCM`HandGripPosition * AUX`RotCommand ==> 
functions
  ThrusterConsistency: set of TS`ThrusterName +> bool

end SAFER


~~~
###test.vdmsl

~~~


module TEST
imports from SAFER all,


   from GUI 
    operations
  exports all
definitions
values 
  switches_tran_up = mk_HCM`SwitchPositions(<Tran>,<Up>);
  switch_positions : set of HCM`SwitchPositions = 
  zero_grip : HCM`HandGripPosition = mk_HCM`HandGripPosition(<Zero>,<Zero>,
  all_grip_positions : set of HCM`HandGripPosition =
  all_rot_commands : set of AUX`RotCommand =
  grip_positions : set of HCM`HandGripPosition 
  possibilities -- total of 972 cases
functions
  BigTest: () -> 
   HugeTest: () -> 
  ConvertAxisCmd: seq of char -> AUX`AxisCommand
  ConvertTIds: TS`ThrusterSet +> seq of seq of char
  ConvertTId: TS`ThrusterName +> seq of char
operations
  StartTest: () ==> ()
  RunTest: () ==> bool

  Loop : () ==> ()
  Move: () ==> ()
  NoMove: () ==> ()

end TEST


~~~
###ts.vdmsl

~~~



module TS
imports from AUX all,
exports all
definitions
types 
  ThrusterName = <B1> | <B2> | <B3> | <B4> | <F1> | <F2> | <F3> | <F4> |
  ThrusterSet = set of ThrusterName
functions
  RotCmdsPresent: AUX`RotCommand +> bool 
  PrioritizedTranCmd: AUX`TranCommand +> AUX`TranCommand
  CombinedRotCmds: AUX`RotCommand * AUX`RotCommand * set of AUX`RotAxis +> 
  IntegratedCommands: AUX`SixDofCommand * AUX`RotCommand * 
  BFThrusters: AUX`AxisCommand * AUX`AxisCommand * AUX`AxisCommand +> 
  LRUDThrusters: AUX`AxisCommand * AUX`AxisCommand * AUX`AxisCommand +> 
  SelectedThrusters: AUX`SixDofCommand * AUX`RotCommand * set of AUX`RotAxis * 
end TS



~~~
###workspace.vdmsl

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
~~~