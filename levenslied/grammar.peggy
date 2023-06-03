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
  / "Stop"i _ value:ExpressionValue _ "in"i _ variable:Variable { lastVarParsed = variable; return { type: "variableAssignment", variable, value } }
  / "Let"i _ variable:Variable _ "be"i _ value:ExpressionValue { lastVarParsed = variable; return { type: "variableAssignment", variable, value } }
  / PoeticStringLiteral
  
Increment
  = "Bouw"i _ variable:Variable _ amount:"op"i|1.., (_ / "," [ ]*)| { return { type: "incrementVariable", variable, amount: amount.length } }

Decrement
  = "Haal"i _ variable:Variable _ amount:"neer"i|1.., (_ / "," [ ]*)| { return { type: "decrementVariable", variable, amount: amount.length } }

Output
  = OutputTerm _ output:ExpressionValue { return { type: "output", output } }

IfStatement
  = "Als"i _ expression:Expression "\n" scope:Scope { return { type: "if", condition: expression, block: scope } }

Loop
  = "Totdat"i _ expression:Expression "\n" scope:Scope { return { type: "loop", kind: "until", condition: expression, block: scope } }
  / "Zolang"i _ expression:Expression "\n" scope:Scope { return { type: "loop", kind: "while", condition: expression, block: scope } }

LoopControl
 = ("Herbeleef"i / "continue"i) { return { type: "loopControl", control: "continue" } }
 / ("Doorbreek de cirkel"i  / "break"i) { return { type: "loopControl", control: "break" } }

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
  = a:MultiplicativeMathExpression _ "zonder"i _ b:AdditiveMathExpression { return { type: "calculation", op: "subtraction", a, b } }
  / a:MultiplicativeMathExpression _ "met"i _ b:AdditiveMathExpression { return { type: "calculation", op: "addition", a, b } }
  / MultiplicativeMathExpression

MultiplicativeMathExpression
  = a:Primary _ ("times"i / "of"i) _ b:MultiplicativeMathExpression { return { type: "calculation", op: "times", a, b } }
  / a:Primary _ ("over"i / "between"i) _ b:MultiplicativeMathExpression { return { type: "calculation", op: "division", a, b } }
  / Primary

LogicalOperator
  = a:CompareValue _ "en"i _ b:CompareValue { return { type: "booleanLogic", op: "and", a, b } }
  / a:CompareValue _ "of"i _ b:CompareValue { return { type: "booleanLogic", op: "or", a, b } }
  / a:CompareValue _ "noch"i _ b:CompareValue { return { type: "booleanLogic", op: "nor", a, b } }
  / "niet"i _ a:Expression  { return { type: "booleanLogic", op: "not", a } }

FunctionCall
  = name:Variable _ "ontvangt" _ parameters:(ExpressionValue|1.., ParamSeparator|) { return { type: "functionCall", name, parameters } }

FunctionDef
  = name:Variable _ "neemt" _ parameters:(Variable|1.., ParamSeparator|) "\n" scope:Scope { return { type: "functionDeclaration", name, parameters, scope } }

ReturnValue
  = "Geef"i _ value:Expression _ "terug"i { return { type: "return", value } } 

Comparison
  = a:ExpressionValue _ "niet" _ b:ExpressionValue _ ("is"i / "zijn"i) { return { type: "comparison", op: "not-equal", a, b } }
  / a:ExpressionValue _ ("hoger" / "groter" / "sterker" / "beter") _ "is" _ "dan" _ b:ExpressionValue { return { type: "comparison", op: "greater", a, b } }
  / a:ExpressionValue _ ("lager" / "kleiner" / "zwakker" / "slechter") _ "is" _ "dan" _ b:ExpressionValue { return { type: "comparison", op: "lesser", a, b } }
  / a:ExpressionValue _ "zo" _ ("hoog" / "groot" / "sterk" / "goed") _ "is" _ "als" _ b:ExpressionValue { return { type: "comparison", op: "greater-equal", a, b } }
  / a:ExpressionValue _ "zo" _ ("laag" / "klein" / "zwak" / "slecht") _ "is" _ "als" _ b:ExpressionValue { return { type: "comparison", op: "lesser-equal", a, b } }
  / a:ExpressionValue Is _ b:ExpressionValue { return { type: "comparison", op: "equal", a, b } }

Variable
  = VariableReference
  / ProperVariable
  / SimpleVariable
  / CommonVariable

VariableReference
  = ("het" / "hij" / "zij" / "hem" / "haar" / "hun") {
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
  = variable:Variable _ ("zegt" / "zeggen" / "zeiden") _ value:$[^\n]+ { lastVarParsed = variable; return { type: "variableDeclaration", variable, value: { type: "string", value } } }

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
  = ("juist" / "ja" / "oke" / "true") { return { type: "boolean", value: true } }

BooleanFalse
  = ("fout" / "nee" / "leugens" / "false") { return { type: "boolean", value: false } }
 
Null
  = NullTerm { return { type: "null", value: null } }

EmptyString
  = ("leeg" / "stil" / "stilte") { return { type: "string", value: "" } }

Number
  = value:$([1-9][0-9]* ("." [0-9]+)?) { return { type: "number", value: parseFloat(value) } }

String
  = '"' value:$([^"]+) '"' { return { type: "string", value } }

Comment
  = "(" content:$([^)]+) ")" { return { type: "comment", content } }

NullTerm
 = "null"i
 / "niets"i
 / "niemand"i
 / "nergens"i
 / "weg"i

OutputTerm
  = "Zeg"i 
  / "Fluister"i 
  / "Roep"i 
  / "Schreeuw"i

ReservedWord
  = "bestaat"
  / "als"i
  / "en"i
  / "is"i
  / "ontvangt"i
  / "stop"i
  / "("
  / OutputTerm
  / NullTerm
  / CommonVarPrefix

CommonVarPrefix
  = "de"i 
  / "een"i
  / "mijn"i
  / "je"i
  / "jouw"i
  / "onze"i

Is = (_ "is"i / _ "bestaat"i _ "uit"i / _ "zijn"i / _ "waren"i)

ParamSeparator = ("," _) / (_ "&" _) / ([ ]* "'n" _) / (_ "en" _) / _

_ = [ ]+

EOF = !.