// Rockstar
{ let lastVarParsed = null }

start = Scope

Scope 
  = statements:Statement|.., "\n"| ("\n" / EOF) { return statements }
  
Statement
  = Assignment
  / Increment
  / Decrement
  / Output
  / IfStatement
  / Loop
  / FunctionCall
  / LoopControl
  / FunctionDef
  / ReturnValue
  / Comment
  
Assignment
  = variable:Variable Is _ value:(Value / PoeticNumberLiteral) { lastVarParsed = variable; return { type: "variableDeclaration", variable, value } }
  / "Put"i _ value:ExpressionValue _ ("into"i / "in"i) _ variable:Variable { lastVarParsed = variable; return { type: "variableAssignment", variable, value } }
  / "Let"i _ variable:Variable _ "be"i _ value:ExpressionValue { lastVarParsed = variable; return { type: "variableAssignment", variable, value } }
  / PoeticStringLiteral
  
Increment
  = "Build"i _ variable:Variable _ amount:"up"i|1.., (_ / "," [ ]*)| { return { type: "incrementVariable", variable, amount: amount.length } }

Decrement
  = "Knock"i _ variable:Variable _ amount:"down"i|1.., (_ / "," [ ]*)| { return { type: "decrementVariable", variable, amount: amount.length } }

Output
  = OutputTerm _ output:ExpressionValue { return { type: "output", output } }

IfStatement
  = "If"i _ expression:Expression "\n" scope:Scope { return { type: "if", condition: expression, block: scope } }

Loop
  = "Until"i _ expression:Expression "\n" scope:Scope { return { type: "loop", kind: "until", condition: expression, block: scope } }
  / "While"i _ expression:Expression "\n" scope:Scope { return { type: "loop", kind: "while", condition: expression, block: scope } }

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
  / AdditiveMathExpression
  
Primary
  = Value
  / Variable
  
AdditiveMathExpression
  = a:MultiplicativeMathExpression _ ("minus"i / "without"i) _ b:AdditiveMathExpression { return { type: "calculation", op: "subtraction", a, b } }
  / a:MultiplicativeMathExpression _ ("plus"i / "with"i) _ b:AdditiveMathExpression { return { type: "calculation", op: "addition", a, b } }
  / MultiplicativeMathExpression

MultiplicativeMathExpression
  = a:Primary _ ("times"i / "of"i) _ b:MultiplicativeMathExpression { return { type: "calculation", op: "times", a, b } }
  / a:Primary _ ("over"i / "between"i) _ b:MultiplicativeMathExpression { return { type: "calculation", op: "division", a, b } }
  / Primary

LogicalOperator
  = a:CompareValue _ "and"i _ b:CompareValue { return { type: "booleanLogic", op: "and", a, b } }
  / a:CompareValue _ "or"i _ b:CompareValue { return { type: "booleanLogic", op: "or", a, b } }
  / a:CompareValue _ "nor"i _ b:CompareValue { return { type: "booleanLogic", op: "nor", a, b } }
  / "not"i _ a:Expression  { return { type: "booleanLogic", op: "not", a } }

FunctionCall
  = name:Variable _ "taking" _ parameters:(ExpressionValue|1.., ParamSeparator|) { return { type: "functionCall", name, parameters } }

FunctionDef
  = name:Variable _ "takes" _ parameters:(Variable|1.., ParamSeparator|) "\n" scope:Scope { return { type: "functionDeclaration", name, parameters, scope } }

ReturnValue
  = "Give"i _ "back"i _ value:Expression { return { type: "return", value } } 

Comparison
  = a:ExpressionValue _ ("ain't" / "is" _ "not") _ b:ExpressionValue { return { type: "comparison", op: "not-equal", a, b } }
  / a:ExpressionValue _ "is" _ ("higher" / "greater" / "bigger" / "stronger") _ "than" _ b:ExpressionValue { return { type: "comparison", op: "greater", a, b } }
  / a:ExpressionValue _ "is" _ ("lower" / "less" / "smaller" / "weaker") _ "than" _ b:ExpressionValue { return { type: "comparison", op: "lesser", a, b } }
  / a:ExpressionValue _ "is" _ "as" _ ("high" / "great" / "big" / "strong") _ "as" _ b:ExpressionValue { return { type: "comparison", op: "greater-equal", a, b } }
  / a:ExpressionValue _ "is" _ "as" _ ("low" / "less" / "small" / "weak") _ "as" _ b:ExpressionValue { return { type: "comparison", op: "lesser-equal", a, b } }
  / a:ExpressionValue Is _ b:ExpressionValue { return { type: "comparison", op: "equal", a, b } }

Variable
  = VariableReference
  / ProperVariable
  / SimpleVariable
  / CommonVariable

VariableReference
  = ("it" / "he" / "she" / "him" / "her" / "they" / "them" / "ze" / "hir" / "zie" / "zir" / "xe" / "xem" / "ve" / "ver") {
    return lastVarParsed;
  }

SimpleVariable 
  = name:$(!ReservedWord a:Word { return a; }) { return { type: "SimpleVariable", name };  }

ProperVariable 
  = name:(!ReservedWord a:[A-Z] b:Word { return [a,b].join("") })|1.., _| { return { type: "ProperVariable", name: name.join("") }; }

CommonVariable
  = prefix:CommonVarPrefix _ name:(!ReservedWord Word) { return { type: "CommonVariable", name: [prefix, name[1]].join(" ") }; }

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
  = variable:Variable _ ("says" / "say" / "said") _ value:$[^\n]+ { lastVarParsed = variable; return { type: "variableDeclaration", variable, value: { type: "string", value } } }

PoeticNumberLiteral
  = value:(Word|1.., _|) { 
    return { 
      type: "number", 
      value: parseFloat(value.reduce(
        (r, e) => r + (e.endsWith(".") ? ("" + (e.length - 1 % 10) + ".") : e.length % 10), 
        ""
      ))
    } 
  }
  
Word = v:((c:[a-z-.]i { return c }) / ([^ \n] { return "" }))+ { return v.join("") }

BooleanTrue
  = ("right" / "yes" / "ok" / "true") { return { type: "boolean", value: true } }

BooleanFalse
  = ("wrong" / "no" / "lies" / "false") { return { type: "boolean", value: false } }
 
Null
  = NullTerm { return { type: "null", value: null } }

EmptyString
  = ("empty" / "silent" / "silence") { return { type: "string", value: "" } }

Number
  = value:$([1-9][0-9]* ("." [0-9]+)?) { return { type: "number", value: parseFloat(value) } }

String
  = '"' value:$([^"]+) '"' { return { type: "string", value } }

Comment
  = "(" content:$([^)]+) ")" { return { type: "comment", content } }

NullTerm
 = "null"i
 / "nothing"i
 / "nobody"i
 / "nowhere"i
 / "gone"i

OutputTerm
  = "Say"i 
  / "Whisper"i 
  / "Shout"i 
  / "Scream"i

ReservedWord
  = "is"
  / "if"i
  / "and"i
  / "taking"i
  / "put"i
  / "("
  / OutputTerm
  / NullTerm
  / CommonVarPrefix

CommonVarPrefix
  = "a"i 
  / "an"i
  / "the"i
  / "my"i
  / "your"i
  / "our"i

Is = ("'s"i / _ "is"i / _ "are"i / _ "was"i / _ "were"i)

ParamSeparator = ("," _) / (_ "&" _) / ([ ]* "'n" _) / (_ "and" _) / _

_ = [ ]+

EOF = !.