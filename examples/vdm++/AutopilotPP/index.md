---
layout: default
title: Autopilot
---

~~~

#******************************************************
~~~
###autopilot.vdmpp

{% raw %}
~~~
---------------------------------------------------------------------------
class Autopilot
types 
events = <press_att_cws> 
off_eng = <off> | <engaged>;
mode_status = <armed_mode> | <off_mode> | <engaged_mode>; 

disp_status = <pre_selected> | <current>;

altitude_vals = <away> 

---------------------------------------------------------------------------

states :: att_cws  : off_eng




functions 
tran_att_cws : states -> states
tran_cas_eng : states -> states
tran_fpa_sel : states -> states
tran_alt_eng : states -> states
tran_input_alt : states -> states
tran_input_fpa : states -> states 
tran_input_cas : states -> states 
tran_alt_gets_near : states -> states
tran_alt_reached  : states -> states
tran_fpa_reached : states -> states 
---------------------------------------------------------------------------
nextstate : states * events -> states 
values 
---------------------------------------------------------------------------
st0 : states = 
functions 
isInitial : states -> bool
end Autopilot
~~~{% endraw %}
