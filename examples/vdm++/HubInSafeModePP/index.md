---
layout: default
title: HubInSafeMode
---

~~~
The purpose of the hub in safe mode is to allow a service technician
More information about the model and the purpose of it can be found in
#******************************************************
~~~
###Brake.vdmpp

{% raw %}
~~~
class Brake
 operations
 public GetLow : () ==> MainShaftController`RPMType
 public GetHigh : () ==> MainShaftController`RPMType
 public IsEqual : Brake ==> bool
 public ApplyBrake : MainShaftController`RPMType ==> 
 public InterSect : Brake ==> bool
 public InRange : (MainShaftController`RPMType) ==> bool
end Brake
~~~{% endraw %}

###Enviroment.vdmpp

{% raw %}
~~~
class Enviroment
 types
 functions
 operations
end Enviroment
~~~{% endraw %}

###Hub.vdmpp

{% raw %}
~~~
class Hub
 operations
 public Open : () ==> ()
 public Close : () ==> ()
 public IsOpen : () ==> bool
 public IsAlarmActive : () ==> bool
 public PressEStop : () ==> ()
 public ReleaseEStop : () ==> ()
 public IsEStopPressed : () ==> bool
 public Run : () ==> ()
end Hub
~~~{% endraw %}

###HubController.vdmpp

{% raw %}
~~~
class HubController
 operations
 public GetHub : () ==> Hub
 public GetMainShaftController : () ==> MainShaftController
 public SetMode : Mode ==> ()
 public GetMode : () ==> Mode
 public Run : () ==> ()
         if eStop 
  mHub.Run();
end HubController
~~~{% endraw %}

###MainShaftController.vdmpp

{% raw %}
~~~
class MainShaftController
 types
 instance variables
 functions
 operations
 public CloseLock : () ==> ()
 public OpenLock : () ==> ()
 public IsLocked : () ==> bool
 AddBrake : Brake ==> ()
 RemoveBrake : Brake ==> ()
 public ApplyBrake : () ==> ()
 public ReleaseBrake : () ==> ()
 public IsBrakeApplied : () ==> bool
 -- return current rotational speed of main shaft in RPM.
 public Run : () ==> ()
end MainShaftController
~~~{% endraw %}

###Mode.vdmpp

{% raw %}
~~~
class Mode
 operations
 public Run : () ==> ()
 public EnterHubInSafeMode : () ==> ()
 public LeaveHubInSafeMode : () ==> ()
 protected ChangeMode : Mode ==> ()
 protected OnEntry : () ==> ()
 protected OnRun : () ==> ()
 protected OnExit : () ==> ()
 functions
 public static HubInSafeModeInv : Mode * MainShaftController`RPMType * bool * bool -> bool
end Mode
 operations
   if not mainShaftController.IsLocked() and 
end ModeEnterHubInSafeMode
class ModeHubInSafeMode is subclass of Mode
 operations
 protected OnRun : () ==> ()
 protected OnExit : () ==> ()
end ModeHubInSafeMode
class ModeLeaveHubInSafeMode is subclass of Mode
end ModeLeaveHubInSafeMode
class ModeOperational is subclass of Mode
 operations
 protected OnRun : () ==> ()
end ModeOperational
~~~{% endraw %}

###OperatingPanel.vdmpp

{% raw %}
~~~
class OperatingPanel
 instance variables
 operations
 EnterHubInSafeMode : () ==> ()

 LeaveHubInSafeMode : () ==> ()
 Print : nat1 * seq of char ==> ()
 public RunCmdInterface : () ==> ()
    if cmd = <E> then
 public RunDisplayInterface : () ==> ()
~~~{% endraw %}

###Speaker.vdmpp

{% raw %}
~~~
class Speaker
 operations
 --Stop alarm. If alarm already stopped this has no effect.
 --return true if alarm is currently active, false otherwise.
 public Run : () ==> ()
end Speaker
~~~{% endraw %}

###WindMeasurementController.vdmpp

{% raw %}
~~~
class WindMeasurementController
 values
 instance variables
 operations
 public static CreateInstance : seq of WindSpeedType ==> ()
 public static GetInstance : () ==> WindMeasurementController
 public GetWindSpeed : () ==> WindSpeedType
 public IsFinished : () ==> bool
 public Run : () ==> ()
end WindMeasurementController
~~~{% endraw %}

###WindTurbine.vdmpp

{% raw %}
~~~
class WindTurbine
 operations
 public Run : () ==> ()
   mMainShaftController.Run();
   mOperatingPanel.RunDisplayInterface();
   WindMeasurementController`GetInstance().Run();
end WindTurbine
~~~{% endraw %}
