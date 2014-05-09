---
layout: listing
title: ADT
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
~~~
###adt.vdmsl

~~~

types 
values
types
types
Nodes_SingleLink ::
Nodes_DoubleLink ::
Nodes_BinaryTree ::
     data: Nodes_Data
Nodes_Node = Nodes_SingleLink | Nodes_DoubleLink | Nodes_BinaryTree;
functions
Nodes_MkSingleLink: Nodes_Data * Nodes_NodePtr -> Nodes_Node
Nodes_MkDoubleLink: Nodes_Data * Nodes_NodePtr * Nodes_NodePtr -> Nodes_Node
Nodes_MkBinaryTree: Nodes_Data * Nodes_NodePtr * Nodes_NodePtr * Nodes_NodePtr 


Nodes_GetData: Nodes_Node -> Nodes_Data
Nodes_SetData: Nodes_Node * Nodes_Data -> Nodes_Node
               mk_Nodes_DoubleLink(data, next, prev)
Nodes_GetNext: Nodes_Node -> Nodes_NodePtr
Nodes_SetNext: Nodes_Node * Nodes_NodePtr -> Nodes_Node
Nodes_GetPrev: Nodes_Node -> Nodes_NodePtr
Nodes_SetPrev: Nodes_Node * Nodes_NodePtr -> Nodes_Node
Nodes_GetRight: Nodes_Node -> Nodes_NodePtr
Nodes_SetRight: Nodes_Node * Nodes_NodePtr -> Nodes_Node
     let mk_Nodes_BinaryTree(data, -, left, parent) = node in
Nodes_GetLeft: Nodes_Node -> Nodes_NodePtr
Nodes_SetLeft: Nodes_Node * Nodes_NodePtr -> Nodes_Node
Nodes_GetParent: Nodes_Node -> Nodes_NodePtr
Nodes_SetParent: Nodes_Node * Nodes_NodePtr -> Nodes_Node
types Heaps_Data = [Nodes_Node];
types
Heaps_Location :: 

Heaps_Heap ::

functions
Heaps_InitSequence: nat1 -> seq of Heaps_Location

Heaps_Init: () -> Heaps_Heap
Heaps_AmountUsed: Heaps_Heap -> nat

Heaps_Available: Heaps_Heap -> bool

Heaps_ModifyLoc: Heaps_Heap * ADDRESS * Heaps_Location -> Heaps_Heap

Heaps_Modify: Heaps_Heap * ADDRESS * Heaps_Data -> Heaps_Heap
     Heaps_ModifyLoc(heap, address, mk_Heaps_Location(data, true))

Heaps_Retrieve: Heaps_Heap * ADDRESS -> [Heaps_Data]

Heaps_UnallocatedAddresses: Heaps_Heap -> set of ADDRESS

Heaps_UnallocatedAddress: Heaps_Heap -> ADDRESS

operations
NEW: Heaps_Data ==> ADDRESS

DISPOSE: ADDRESS ==> ()

SET_DATA: ADDRESS * Data ==> ()
SET_NEXT: ADDRESS * ADDRESS ==> ()
SET_NEXT(ptr, next) == 
SET_LEFT: ADDRESS * ADDRESS ==> ()
SET_RIGHT: ADDRESS * ADDRESS ==> ()
SET_PREV: ADDRESS * ADDRESS ==> ()
SET_PARENT: ADDRESS * ADDRESS ==> ()
DATA: ADDRESS ==> Data
NEXT: ADDRESS ==> ADDRESS
LEFT: ADDRESS ==> ADDRESS
RIGHT: ADDRESS ==> ADDRESS
PARENT: ADDRESS ==> ADDRESS

types SList_Data = Data;

types SList_List = Nodes_NodePtr;
functions
SList_IsEmpty: SList_List -> bool
SList_Seq: Heaps_Heap * SList_List -> seq of SList_Data

SList_Lengthf: Heaps_Heap * SList_List -> nat

SList_PtrToNode: Heaps_Heap * SList_List * nat1 -> Nodes_NodePtr
SList_PtrToNode(heap, list, position) ==

SList_Init: () -> SList_List

operations
SList_InsertAtBeginning: SList_List * SList_Data ==> SList_List

SList_InsertAfter: SList_List * Nodes_NodePtr * SList_Data ==> SList_List

SList_Insert: SList_List * SList_Data * nat1 ==> SList_List

SList_Append: SList_List * SList_Data ==> SList_List

SList_Update: SList_List * SList_Data * nat1 ==> SList_List
     and Heaps_AmountUsed(heap~) = Heaps_AmountUsed(heap);

SList_DeleteAtBeginning: SList_List ==> SList_List

SList_DeleteAfter: SList_List * Nodes_NodePtr ==> SList_List

SList_Delete: SList_List * nat1 ==> SList_List
     and Heaps_AmountUsed(heap~) = Heaps_AmountUsed(heap) + 1;

SList_Traverse:  SList_List * (SList_Data -> SList_Data) ==> SList_List

SList_Length: SList_List ==> nat
SList_Empty: SList_List ==> bool
SList_Element: SList_List * nat1 ==> SList_Data

types

types
functions
DList_LastNode: Heaps_Heap * DList_List -> Nodes_NodePtr

DList_Forward: Heaps_Heap * DList_List -> seq of DList_Data

DList_Backward: Heaps_Heap * DList_List -> seq of DList_Data

DList_IsList: Heaps_Heap * DList_List -> bool

DList_Init: () -> DList_List
operations
DList_InsertAtBeginning: DList_List * DList_Data ==> DList_List
DList_InsertAfter: DList_List * Nodes_NodePtr * DList_Data ==> DList_List
     SET_NEXT(ptr, new);
DList_Insert: DList_List * DList_Data * nat1 ==> DList_List
DList_DeleteAtBeginning: DList_List ==> DList_List
DList_DeleteAfter: DList_List * Nodes_NodePtr ==> DList_List
DList_Delete: DList_List * nat1 ==> DList_List
DList_Delete(list, position) ==
DList_Append: DList_List * DList_Data ==> DList_List
DList_Empty: DList_List ==> bool
DList_Element: DList_List * nat1 ==> DList_Data
DList_Length: DList_List ==> nat
DList_Traverse: DList_List * (DList_Data -> DList_Data) ==> DList_List
DList_Update: DList_List * DList_Data * nat1 ==> DList_List
types Queues_Data = Data;

types Queues_Queue = SList_List;
functions
Queues_Init: () -> Queues_Queue
operations
Queues_Enqueue: Queues_Queue * Queues_Data ==> Queues_Queue
Queues_Dequeue: Queues_Queue ==> Queues_Queue * Queues_Data
Queues_Head: Queues_Queue ==> Queues_Data


types Stacks_Data = Data;

types Stacks_Stack = SList_List;
functions
operations
Stacks_Push: Stacks_Stack * Stacks_Data ==> Stacks_Stack
Stacks_Top: Stacks_Stack ==> Stacks_Data
Stacks_Pop: Stacks_Stack ==> Stacks_Stack * Stacks_Data


types

types 

types

STrees_Tree = set of STrees_Node

STrees_Info ::

functions
STrees_GetTree: STrees_Info -> STrees_Tree
STrees_GetTree(mk_STrees_Info(tree, -)) == tree;

STrees_MkNode: STrees_Data * nat1 -> STrees_Node
STrees_MkTree: set of STrees_Node -> STrees_Tree
STrees_MkInfo: STrees_Tree * STrees_Node -> STrees_Info

STrees_Init: () -> STrees_Info

STrees_IsRoot: set of STrees_Node * STrees_Node -> bool

STrees_IsParent: STrees_Tree * STrees_Node -> bool
STrees_IsChild: set of STrees_Node * STrees_Node -> bool
STrees_IsUnique: set of STrees_Node * STrees_Node -> bool

STrees_IsParentOf: set of STrees_Node * STrees_Node * STrees_Node -> bool
STrees_IsRightChildOf: set of STrees_Node * STrees_Node * STrees_Node -> bool
STrees_IsLeftChildOf: set of STrees_Node * STrees_Node * STrees_Node -> bool

STrees_Insert: STrees_Info * STrees_Data * STrees_Direction -> STrees_Info
          mk_(-, <ToRight>)   -> STrees_InsertRight(tree, current, data)

STrees_InsertRoot: STrees_Data -> STrees_Info
STrees_InsertLeft: STrees_Tree * STrees_Node * STrees_Data -> STrees_Info
STrees_InsertRight: STrees_Tree * STrees_Node * STrees_Data -> STrees_Info
STrees_Traverse: STrees_Info * (STrees_Data -> STrees_Data) -> STrees_Info

STrees_MoveInDir: STrees_Info * STrees_Direction -> STrees_Info


STrees_MoveToNode: STrees_Info * nat1 -> STrees_Info

STrees_MoveToParent: STrees_Info -> STrees_Info

STrees_MoveToAnscestor: STrees_Info * nat1 -> STrees_Info 


STrees_Root: STrees_Tree -> STrees_Node
STrees_Parent: STrees_Tree * STrees_Node -> STrees_Node
STrees_LeftChild: STrees_Tree * STrees_Node -> STrees_Node
STrees_RightChild: STrees_Tree * STrees_Node -> STrees_Node
STrees_GetNode: STrees_Tree * nat1 -> STrees_Node

STrees_GetData: STrees_Info * nat1 -> STrees_Data

STrees_StoreCurrentData: STrees_Info * STrees_Data -> STrees_Info
STrees_StoreCurrentData(mk_STrees_Info(tree, current), data) ==

STrees_GetCurrentData: STrees_Info -> STrees_Data

STrees_Size: STrees_Info -> nat

STrees_GetCurrentNode: STrees_Info -> STrees_Node
STrees_SetCurrentNode: STrees_Info * STrees_Node -> STrees_Info

STrees_HasLeftChild: STrees_Tree * STrees_Node -> bool
STrees_HasRightChild: STrees_Tree * STrees_Node -> bool
     exists1 child in set tree

STrees_InOrderPredecessor: STrees_Tree * STrees_Node -> STrees_Node

STrees_Delete: STrees_Info -> STrees_Info
     else 

STrees_Subtree: STrees_Tree * STrees_Node -> STrees_Tree

STrees_MoveSubtree:  STrees_Tree * STrees_Node * nat1 -> STrees_Tree

STrees_MoveNode: STrees_Tree * STrees_Node * nat1 * nat1 -> STrees_Node
     let n = (iota n in set {0, ..., card tree} 

STrees_ExistsData: STrees_Info * STrees_Data -> bool

STrees_ExistsNode: STrees_Info * nat1 -> bool

STrees_ExistsDirection: STrees_Info * STrees_Direction -> bool
types Trees_Data = Data

types
Trees_Tree ::


functions

Trees_Set: Heaps_Heap * Trees_Tree -> STrees_Info
     if treePtr <> NIL then

Trees_SubtreeToSet: Heaps_Heap * Nodes_NodePtr * nat1 -> set of STrees_Node

Trees_HasLeftChild: Heaps_Heap * Nodes_NodePtr -> bool
Trees_HasRightChild: Heaps_Heap * Nodes_NodePtr -> bool
pre ptr <> NIL => pre_Heaps_Retrieve(heap, ptr);
Trees_IsRightChildOf: Heaps_Heap * Nodes_NodePtr * Nodes_NodePtr -> bool
Trees_IsLeftChildOf: Heaps_Heap * Nodes_NodePtr * Nodes_NodePtr -> bool
Trees_IsRoot: Heaps_Heap * Nodes_NodePtr -> bool
Trees_Init: () -> Trees_Tree
operations
Trees_InsertRoot: Trees_Data ==> Trees_Tree
Trees_InsertLeft: Trees_Tree * Trees_Data ==> Trees_Tree
Trees_InsertRight: Trees_Tree * Trees_Data ==> Trees_Tree
Trees_InOrderPredecessor: Nodes_NodePtr ==> Nodes_NodePtr
Trees_Delete: Trees_Tree  ==> Trees_Tree
     if hasLeftChild or hasRightChild then 
          newchild := newcurrent;
     if Trees_IsRoot(heap, current) then 
     DISPOSE(current);

Trees_SearchSubtree: Nodes_NodePtr * Trees_Data ==> bool
     else return false

Trees_ExistsData: Trees_Tree * Trees_Data ==> bool
Trees_ExistsDirection: Trees_Tree * Trees_Direction ==> bool

Trees_GetCurrentData: Trees_Tree ==> Trees_Data
Trees_StoreCurrentData: Trees_Tree * Trees_Data ==> Trees_Tree
Trees_MoveInDir: Trees_Tree * Trees_Direction ==> Trees_Tree

Trees_MoveToParent: Trees_Tree ==> Trees_Tree
Trees_Size: Trees_Tree ==> nat
Trees_SubtreeSize: Nodes_NodePtr ==> nat


Trees_Traverse: Trees_Tree * (Trees_Data -> Trees_Data) ==> Trees_Tree
Trees_TraverseSubtree: Nodes_NodePtr * (Trees_Data -> Trees_Data) ==> ()
          Trees_TraverseSubtree(LEFT(subtree), traversal);
     state SystemState of

types Data = char;

operations
TestSList: () ==> bool
TestSList() ==
     slist := SList_Insert(slist, 'a', 1);
     slist := SList_Insert(slist, 'b', 2);
     slist := SList_Append(slist, 'c');
     slist := SList_Insert(slist, 'f', 4);

TestDList: () ==> bool
     dlist := DList_Insert(dlist, 'a', 1);
     dlist := DList_Insert(dlist, 'b', 2);
     dlist := DList_Insert(dlist, 'b', 2);
     dlist := DList_Append(dlist, 'c');
     dlist := DList_Insert(dlist, 'f', 4);

values
InsertResult = STrees_MkTree(
                    STrees_MkNode('i', 9),
DeleteResult = STrees_MkTree(
TraverseResult = STrees_MkTree(
               STrees_MkNode('a', 1), 
AlphabetSubset = {'a','b','c','d','e','f','g','h','i','j'};

functions

operations
TestSTreesInsert: () ==> bool
     stree := STrees_Insert(stree, 'b', <ToLeft>); 

     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveToParent(stree); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveInDir(stree, <ToRoot>); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveInDir(stree, <ToRoot>); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveToAnscestor(stree, 2); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveInDir(stree, <ToRoot>); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveToAnscestor(stree, 2); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_Insert(stree, 'o', <ToRight>);
     stree := STrees_MoveInDir(stree, <ToRoot>); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveToAnscestor(stree, 2); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveToAnscestor(stree, 3); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveToAnscestor(stree, 2); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveInDir(stree, <ToRoot>); 
     stree := STrees_MoveToParent(stree);
     stree := STrees_MoveToAnscestor(stree, 2); 

     return STrees_GetTree(stree) = InsertResult;
TestSTreesDelete: () ==> bool
     stree := STrees_MoveToNode(stree, 17);
     stree := STrees_MoveToNode(stree, 13);
     stree := STrees_MoveToNode(stree, 7);
     stree := STrees_MoveToNode(stree, 5);
     stree := STrees_MoveToNode(stree, 2);

TestSTrees: () ==> bool
     if STrees_ExistsDirection(stree, <ToRight>) then return false;
     if not TestSTreesInsert() then return false;
     if not TestSTreesDelete() then return false;
     if not STrees_ExistsData(stree, 'c') then return false;

     if not STrees_ExistsNode(stree, 3) then return false;
     stree := STrees_MoveToNode(stree, 3);
     if not STrees_ExistsDirection(stree, <ToRight>) then return false;
     if not STrees_ExistsDirection(stree, <ToRoot>) then return false;
     if 'z' <> STrees_GetData(stree, 13) then return false;
     stree := STrees_SetCurrentNode(stree, STrees_MkNode('z', 13));
     if STrees_MkNode('z', 13) <> STrees_GetCurrentNode(stree) 
     stree := STrees_StoreCurrentData(stree, 'Z');
     if STrees_Size(stree) <> 20 then return false;
     stree := STrees_Traverse(stree, Traversal);
     return STrees_GetTree(stree) = TraverseResult;



operations
TestTreesInsert: () ==> ()
     charTree := Trees_Insert(charTree, 'b', <ToLeft>); 
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_Insert(charTree, 'c', <ToRight>); 
     charTree := Trees_MoveToParent(charTree); 
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_MoveInDir(charTree, <ToRoot>); 
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_MoveInDir(charTree, <ToRoot>);
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_MoveInDir(charTree, <ToRoot>); 
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_MoveToParent(charTree);
     charTree := Trees_Insert(charTree, 'o', <ToRight>);
TestTreesDelete: () ==> ()
     charTree := Trees_Delete(charTree);
     charTree := Trees_MoveInDir(charTree, <ToRoot>);
     charTree := Trees_Delete(charTree);
     charTree := Trees_MoveInDir(charTree, <ToRoot>);
     charTree := Trees_MoveInDir(charTree, <ToRoot>);
     charTree := Trees_MoveInDir(charTree, <ToRoot>);

TestTrees: () ==> bool
     if Trees_ExistsDirection(charTree, <ToRight>) then return false;      
     if not Trees_ExistsData(charTree, 'i') then return false;

     if Trees_ExistsDirection(charTree, <ToLeft>) then return false;
     if not Trees_ExistsDirection(charTree, <ToRight>) then return false;
     if not Trees_ExistsDirection(charTree, <ToRoot>) then return false;
     charTree := Trees_StoreCurrentData(charTree, 'Z');
     if Trees_Size(charTree) <> 8 then return false;
     charTree := Trees_Traverse(charTree, Traversal);


~~~