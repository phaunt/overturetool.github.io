---
layout: listing
title: DFDexample
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
~~~
###dfdexample.vdmsl

~~~

functions
TransHDFD : HDFD * MSs * (<EXPL>|<IMPL>) -> set of Module
MakeDFDModule : HDFD * MSs * (<EXPL>|<IMPL>) -> Module
MakeInterface: DFDId * DSs * DFDTopo * DFDSig * DFDMap -> 
MakeTypeModImp : DSs * set of FlowId -> Import
MakeDFDModImps: set of DFDId * DFDSig -> set of Import
MakeOpExp : DFDId * Signature -> Export
MakeOpSig : DFDId * Signature -> OpSig
MakeOpType : Signature -> OpType
MakeType : seq of FlowId -> [Type]
MakeOpState : Signature -> seq of Id
MakeDefinitions: DFDId * DSs * DFDTopo * DFDSig * MSs * 
MakeState : DFDId * DSs * set of FlowId -> [StateDef]
MakeFieldList : set of StId -> seq of Field
Card: set of StId -> nat
MakeField : StId -> Field
MakeMSDescs : DFDSig * MSs -> set of Definition
MakeOp: MSId *  (seq of FlowId * seq of FlowId * State) 
MakeInpPar : seq of FlowId -> seq of ParType
MakeOutPair : seq of FlowId -> [IdType]
MakeExt : State -> seq of ExtVarInf
MakeExtVar : (StId * Mode) -> ExtVarInf
MakeDFDOp: DFDId * DFDTopo * DFDSig * (<EXPL>|<IMPL>) -> 
MakeDFDImplOp : DFDId * DFDTopo * DFDSig -> ImplOp
MakeImplOpBody : DFDId * DFDTopo * DFDSig -> ImplOpBody
types
functions
MakePreExpr: DFDId * DFDTopo * DFDSig * IntM * IntM -> 
MakePrePred : DFDTopo * DFDSig * IntM * IntM -> Expr
MakePreForEO: seq1 of ProcId * DFDSig * IntM * IntM ->
MakePostExpr: DFDId * DFDTopo * DFDSig * IntM * IntM -> 
MakeInExpr: seq of FlowId * State * set of FlowId * 
MakePostPred : DFDTopo * DFDSig * IntM * IntM -> Expr
MakePostForEO: seq1 of ProcId * DFDSig * IntM * IntM -> 
MakeExistsBind: set of FlowId * State * IntM * IntM * 
ExecutionOrders: DFDTopo -> set of seq1 of ProcId
MakeQuotedApply: (DFDId|MSId) * Signature * IntM * IntM * 
MakeDFDExplOp : DFDId * DFDTopo * DFDSig -> ExplOp
MakeStmtForEO: seq1 of ProcId * DFDId * DFDSig -> Stmt
MakeCallAndPat : (DFDId|MSId) * Signature -> Call * [Pattern]
FindKind : Signature -> <OPRES>|<OPCALL>
MakePattern : seq of Id -> [Pattern]
MakeResult : seq1 of Id -> Expr
DBinOp : BinaryOp * set of Expr -> Expr
CollectExtDFs : DFDTopo -> set of FlowId
NeedsQuant: DFDTopo * DFDSig * set of FlowId * 
QuantNec: seq of FlowId * State * set of FlowId * 
MakeTypeBindList : set of FlowId -> seq of TypeBind
CardFId: set of FlowId -> nat
MakePatternIds: (Id | DSId) * nat * nat * 
MakePatternSeq: Id * nat * nat -> seq of PatternId
  TowardsMax: Id * nat * nat -> nat
EquivClass: set of (ProcId * ProcId) * set of (MSId|DFDId) ->
MakeNonDetStmt : set of Stmt -> Stmt
CollectStIds: set of Signature -> set of (StId * Mode)
NoOfWr: set of Signature * StId -> nat 
Reduce: nat -> nat
ModIdConf : DFDId -> Id
StateIdConf : DFDId -> Id
DSIdConf : DSId -> Id
OpIdConf : MSId | DFDId | Id -> Id
StateVarIntConf: (Id | DSId) * nat * nat * (<PRE>|<POST>) 
VarConf : StId -> Id
TypeConf : DSId|FlowId -> Id
FlowIdVarConf : Id -> Id
FlowIdTypeConf : Id -> Id
StateTypeConf : Id | DSId -> Id
StateVarConf : Id | DSId -> Id
StateOldVarConf : Id | DSId -> Id
TypeModConf : () -> Id
ResultIdConf : () -> Id
PossibleSeqs: set of ProcId -> set of seq of ProcId
CardPSet: set of ProcId -> nat
InsertPId: ProcId * seq of ProcId -> set of seq of ProcId
ToLower: Id | DSId | DFDId | EPId | MSId -> Id
LowerChar: char -> char

ToUpper: Id | DSId | DFDId | EPId | MSId -> Id
UpperChar: char -> char
types
SA = HDFD * DD * MSs
HDFD = DFDId * DSs * DFDTopo * DFDMap * DFDSig;
DSs = set of DSId;
DSId :: seq of char;
DFDTopo = map FlowId to ([ProcId] * [ProcId])
FlowId = seq of char;
ProcId = DFDId|MSId|EPId;
DFDMap = map DFDId to HDFD;
DFDSig = map (DFDId|MSId) to Signature;
Signature = Input * Output * State
Input = seq of FlowId;
Output = seq of FlowId;
State = seq of (StId * Mode);
StId = DSId|FlowId;
Mode = <READ>|<READWRITE>;
DD = map Id to Type;
MSs = map MSId to MS;
MS = OpDef;
DFDId :: seq of char;
EPId :: seq of char;
MSId :: seq of char
functions
FlowTypeDefined : HDFD * DD -> bool 
TopLevelSigOK: HDFD -> bool 
DFDSigConsistent: DFDId * DFDTopo * DSs * DFDMap * DFDSig 
DSConnected : DSs * DFDSig -> bool 
SigsAllRight : DFDTopo * DFDSig -> bool 
IdsInSigsAvail : DSs * DFDTopo * set of Signature -> bool 
LowerLevelUsed : DFDTopo * DFDMap -> bool 
SigsForAllUsedIds: DFDId * set of ([ProcId] * [ProcId]) * 
FlowConnectOK : ([ProcId] * [ProcId]) -> bool 
NotRecursive : set of ((DFDId|MSId) * (DFDId|MSId)) -> 
TransClosure: (DFDId|MSId) * set of ((DFDId|MSId) * 
types
Document = set of Module;
Module = ModuleId * Interface * Definitions;
ModuleId = seq of char;
Interface = Imports * Export;
Imports = set of Import;
Import = ModuleId * ModuleSig;
Export = ModuleSig;
ModuleSig = set of Sig;
Sig = TypeSig|OpSig;
TypeSig :: TypeId;
TypeId = seq of char;
OpSig :: id: Id 
Definitions = set of Definition;
Definition = StateDef|OpDef; --|... 
StateDef :: id:Id
Field :: sel:[Id]
OpDef = ExplOp|ImplOp;
ExplOp :: id:Id
ImplOp :: id:Id
ImplOpBody :: dpre:[Expr]
ParType :: pat:Pattern
IdType :: id:Id
ExtVarInf :: mode:ReadWriteMode
ReadWriteMode = <READ>|<READWRITE>;
OpType :: dom':[Type]
Type = ProductType |MapType|SetType|SeqType | TypeId | 
ProductType :: product: seq1 of Type;
MapType :: d: Type
SetType :: Type;
SeqType :: Type;
BasicType = <TOKEN> | <CHAR> | <BOOL>;
EnumType :: seq of char;
OptionalType :: Type;
UnionType :: set of Type;
Stmt = DclStmt|DefStmt|NonDetStmt|Call|Sequence|Return|
DclStmt :: dcls: set of AssDef
AssDef :: var:Id
DefStmt :: lhs:Pattern
NonDetStmt :: stmts: set of Stmt;
Call :: oprt:Id
Sequence :: stmts: seq1 of Stmt;
Return :: val:[Expr];
Expr = LetExpr|IfExpr|QuantExpr|BinaryExpr|
LetExpr :: lhs:Pattern
IfExpr :: test : Expr
QuantExpr = ExistsExpr; --| ... 
ExistsExpr :: bind: MultTypeBind
BinaryExpr :: left:Expr
BinaryOp = <AND> | <OR> | <EQUAL> | <MEMB>; --| ... 

TupleConstructor :: fields: seq1 of Expr;
Apply :: name:Expr
BoolLit:: bool;
MultTypeBind :: mtb: seq1 of TypeBind;
TypeBind :: pats:seq of Pattern
Pattern = PatternId|TuplePattern; --| ... 
PatternId :: name:[Id];
TuplePattern :: fields: seq1 of Pattern;
Id = seq of char

~~~