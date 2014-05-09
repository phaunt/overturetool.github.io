---
layout: listing
title: MAA
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
~~~
###maa.vdmsl

~~~


values


   A = 2 * 2 **24 + 4 * 2 **16 + 8 * 2 **8 + 1;


   Maximum_No_of_blocks_for_MAC = 1024 div 4;


types
   Bit = nat
   Message_in_bits = seq of Bit
   Message_in_blocks_plus_empty_Message = seq of Number
   Message_in_blocks = Message_in_blocks_plus_empty_Message


   Double_Number = seq of Number
   Key = Double_Number;


   Key_Constant :: X0 : Number


functions
   Get_Application_defined_bits(M: Message_in_bits, No_bits: nat) 
   Form_Message_into_blocks: Message_in_bits -> Message_in_blocks
   Form_Number: Message_in_bits -> Number


   CYC: Number -> Number
   AND: Number * Number -> Number
   OR: Number * Number -> Number
   max: int * int -> int
   XOR: Number * Number -> Number
   ADD: Number * Number -> Number
   CAR: Number * Number -> Number


   MUL1: Number * Number -> Number



   MUL2: Number * Number -> Number


   MUL2A: Number * Number -> Number


   BYT: Double_Number -> Double_Number
   Byte: Number * nat -> Number
   Condition_Sequence: Message_in_blocks * Number -> Message_in_blocks
   Condition_value: Number * Number -> Number
   Changes: Number * Number -> Number
   Convert_Bytes_to_Number: Message_in_blocks -> Number
   PAT: Double_Number -> Number
   Record_Changes: Message_in_blocks * Number -> Number


   Prelude: Key -> Key_Constant


   Main_loop: Message_in_blocks_plus_empty_Message * Key_Constant -> Number



   Z: Message_in_blocks * Key -> Number


   MAC: Message_in_bits * Key -> Number
   Z_of_SEG: Message_in_blocks * Key * nat -> Number


   Get_tail_in_bits: Message_in_bits * nat -> Message_in_bits
   Get_head_in_bits: Message_in_bits * nat -> Message_in_bits
   Get_tail_in_blocks: Message_in_blocks * nat -> Message_in_blocks
   Get_head_in_blocks: Message_in_blocks * nat -> Message_in_blocks


~~~