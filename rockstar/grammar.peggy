// Rockstar
start = Scope

Scope 
  = statements:Statement|.., "\n"| "\n" { return statements }
  
Statement
  = Assignment
  / Increment
  / Decrement
  / Output
  / IfStatement
  / Loop
  / FunctionCall
  / LoopControl
  
Assignment
  = variable:Variable Is _ value:(Value / PoeticNumberLiteral) { return { type: "assignment", variable, value } }
  / PoeticStringLiteral
  
Increment
  = "Build"i _ variable:Variable _ amount:"up"i|1.., (_ / "," [ ]*)| { return { type: "increment", variable, amount: amount.length } }

Decrement
  = "Knock"i _ variable:Variable _ amount:"down"i|1.., (_ / "," [ ]*)| { return { type: "decrement", variable, amount: amount.length } }

Output
  = ("Say"i / "Whisper"i / "Shout"i / "Scream"i) _ output:(Variable / Value) { return { type: "output", output } }

IfStatement
  = "If"i _ expression:Expression "\n" scope:Scope { return { type: "if", condition: expression, block: scope } }

Loop
  = ("Until"i / "While"i) _ expression:Expression "\n" scope:Scope { return { type: "loop", condition: expression, block: scope } }

LoopControl
 = ("Take it to the top"i / "continue"i) { return { type: "loopControl", control: "continue" } }
 / ("Break it down"i  / "break"i) { return { type: "loopControl", control: "break" } }

Expression
  = LogicalOperator
  / CompareValue
  
CompareValue
  = Comparison
  / ExpressionValue
  
ExpressionValue
  = FunctionCall
  / Value
  / Variable
  
LogicalOperator
  = a:CompareValue _ "and"i _ b:CompareValue { return { type: "logic", op: "and", a, b } }
  / "not"i _ a:Expression  { return { type: "logic", op: "not", a } }

FunctionCall
  = name:Variable _ "taking" _ parameters:(ExpressionValue|1.., (("," _) / (_ "&" _))|) { return { type: "functionCall", name, parameters } }

Comparison
  = a:(ExpressionValue) _ ("ain't" / "is not") _ b:(ExpressionValue) { return { type: "compare", op: "not-equal", a, b } }
  / a:(ExpressionValue) Is _ b:(ExpressionValue) { return { type: "compare", op: "equal", a, b } }

Variable
  = ProperVariable
  / SimpleVariable
  / CommonVariable
  
SimpleVariable 
  = name:$(!ReservedWord $[a-z]i+) { return { type: "SimpleVariable", name } }

ProperVariable 
  = name:$(!ReservedWord $([A-Z][a-z]i+))|1.., _| { return { type: "ProperVariable", name } }

CommonVariable
  = prefix:CommonVarPrefix _ name:$(!ReservedWord $[a-z]i+) { return { type: "CommonVariable", name: text() } }

Value
 = Number
 / PoeticConstant
 / String
 
PoeticConstant
  = EmptyString
  / Null
  / BooleanTrue
  / BooleanFalse
  
PoeticStringLiteral
  = variable:Variable _ ("says" / "say" / "said") _ value:$[^\n]+ { return { type: "assignment", variable, value: { type: "string", value } } }

PoeticNumberLiteral
  = value:(($[a-z]i+)|1.., _|) { return { type: "number", value: parseInt(value.reduce((result, word) => result + word.length % 10, ""), 10) } }

BooleanTrue
  = ("right" / "yes" / "ok" / "true") { return { type: "boolean", value: true } }

BooleanFalse
  = ("wrong" / "no" / "lies" / "false") { return { type: "boolean", value: false } }
 
Null
  = ("null" / "nothing" / "nobody" / "nowhere" / "gone") { return { type: "null", value: null } }

EmptyString
  = ("empty" / "silent" / "silence") { return { type: "string", value: "" } }

Number
  = value:$([1-9][0-9]* ("." [0-9]+)?) { return { type: "number", value: parseFloat(value) } }

String
  = '"' value:$([^"]+) '"' { return { type: "string", value } }

ReservedWord
  = "is"
  / "if"i
  / "and"i
  / "taking"i
  / CommonVarPrefix

CommonVarPrefix
  = "a"i 
  / "an"i
  / "the"i
  / "my"i
  / "your"i
  / "our"i

Is = ("'s"i / _ "is"i / _ "are"i / _ "was"i / _ "were"i)

_ = [ ]+