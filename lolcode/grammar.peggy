// LOLCODE

Program
  = "HAI" _ version:Version? statements:Statements "KTHXBYE" { return { type: "program", version, statements } }

Version "version number" = major:$[0-9]+ "." minor:$[0-9]+ { return { major, minor }; }

Statements = statements:(Statement)* { return statements.reduce((r, e) => r.concat(e), []).filter(Boolean) }

Statement
  = _end // blank line or comment
  / VariableDeclaration
  / IfStatement
  / VariableAssignment
  / FunctionCall
  
VariableDeclaration "variable declaration"
  = _ "I" _ "HAS" _  "A" _ varname:Term end:_end {
    return [{ type: "declareVar", varname }, end]
  }

VariableAssignment "variable assignment"
  = _ varname:Term _ "R" _ expression:Expression end:_end {
    return [{ type: "assignVar", varname, value: expression }, end]
  }
  
FunctionCall "function call"
  = _ functionName:Term !{
    return ["OIC", "TLDR", "KTNXBYE", "NO", "MEBBE"].some(term => functionName.name === term)
  } expressions:(_ Expression)* end:_end {
    return [{ type: "functionCall", functionName, arguments: expressions.map(c => c[1]) }, end]
  }
  
Expression "expression"
  = Term
  / Value
  / BooleanExpression
  
Value "value"
  = Integer
  / String
  / Boolean
  
BooleanExpression "if statement"
  = "BOTH" _ "SAEM" _ a:Expression (_ "AN")? _ b:Expression { 
    return { type: "compare", op: "equal", a, b } 
  }
  / Boolean

IfStatement
  = _ condition:BooleanExpression _ "," _ "O" _ "RLY?" 
    end1:_end 
    _ "YA" _ "RLY" _end win:Statements
    _ options:("MEBBE" _ BooleanExpression _end _ Statements)*
    _ fail:("NO" _ "WAI" _end Statements)?
    _ "OIC" end2:_end {
    return { type: "if", condition, win, options: options.map(o => ({ condition: o[2], code: o[5] })), fail: fail ? fail[4] : null }
  }


String = '"' value:$[^"]* '"' { return { type: "YARN", value } }
Integer = value:$([1-9][0-9]*) { return { type: "NUMBR", value: parseInt(value, 10) } }
Boolean 
  = "WIN" { return { type: "TROOF", value: true } }
  / "FAIL" { return { type: "TROOF", value: false } }
  
Term = name:$[A-Z]i+ { return { type: "REF", name } }

_ "whitespace" = [ \t]*
_end "newline" 
  = _ comment:Comment? "\n" [\r]? { return comment; }
  / _ "," {}
  
Comment "comment"
  = LineComment
  / BlockComment
  
LineComment = "BTW" _ contents:$[^\n]* { return { type: "comment", contents } }
BlockComment = "OBTW" contents:$(!"TLDR" .)* "TLDR" { return { type: "comment", contents } }
