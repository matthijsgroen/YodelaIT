// LOLCODE

Program
  = "HAI" _ version:Version? statements:Statements "KTHXBYE" { return { type: "program", version, statements } }

Version "version number" = major:$[0-9]+ "." minor:$[0-9]+ { return { major, minor }; }

Statements "code block" = statements:(Statement)* { return statements.reduce((r, e) => r.concat(e), []).filter(Boolean) }

Statement "statement"
  = _end // blank line or comment
  / VariableDeclaration 
  / FunctionCall
  
VariableDeclaration "variable declaration"
  = _ "I" _ "HAS" _  "A" _ varname:Term end:_end {
    return [{ type: "declareVar", varname }, end]
  }
  
FunctionCall "function call"
  = _ functionName:Term expressions:(_ Expression)* end:_end {
    return [{ type: "functionCall", functionName, arguments: expressions.map(c => c[1]) }, end]
  }
  
Expression "expression"
  = Term
  / String
  
String = '"' contents:[^"]* '"' { return { type: "string", contents: contents.join("") } }
Term = name:$[A-Z]+ { return { type: "term", name } }

_ "whitespace" = [ \t]*
_end "newline" = _ comment:Comment? "\n" [\r]* { return comment; }
  
Comment "comment"
  = LineComment
  / BlockComment
  
LineComment = "BTW" _ contents:$[^\n]* { return { type: "comment", contents } }
BlockComment = "OBTW" contents:$(!"TLDR" .)* "TLDR" _ { return { type: "comment", contents } }


