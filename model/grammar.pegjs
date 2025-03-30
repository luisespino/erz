{
	let entities = {};
   	let relationships = {};

}

start
  = "erDiagram" __ line* !. {
  	return {entities, relationships};
  }

line
  = _ relation _
  / _ direction __
  / _ entity _
  / __

relation
  = el:ent _ r:rel _ er:ent _ ":" _ l:rel_label {
  	relationships[el+"__"+er] = {
    	entity_left:el, 
        card_left:r.left, 
        entity_right:er,
        card_right:r.right,
        label:l
 	}
  }

ent
  = ID

rel
  = l:card_left _ "--" _ r:card_right {
  	return {left: l, right: r};
  }

rel_label
  = ID

card_left
  = "|o" { return 0; }
  / "||" { return 1; }
  / "}o" { return 2; }
  / "}|" { return 3; }

card_right
  = "o|" { return 0; }
  / "||" { return 1; }
  / "o{" { return 2; }
  / "|{" { return 3; }

direction
  = _ "DIRECTION"i _ ("TB"i / "BT"i / "LR"i / "RL"i)

entity
  = e:ent _ "{" a:attr* "}" {
  	entities[e] = {name:e, attr:a};
  }
  / ent

attr
  = _ t:type _ n:name _ k:key? _ c:comment? _ {
  	k = k ? k.toUpperCase() : null;
  	return {type:t, name:n, key:k, comment:c};
  }

type
  = ID

name
  = ID

key
  = "PK"i
  / "FK"i

comment
  /* 
  	May include any valid constraint such as:
  	"AUTO_INCREMENT, NULL, NOT NULL"
  */
  = '"' _ head:CONSTRAINT tail:(_ ',' _ CONSTRAINT)* _ '"' { 
      return [head.toUpperCase(), ...tail.map(element => element[3].toUpperCase())];
  }
  
CONSTRAINT
  = [a-zA-Z_][a-zA-Z0-9_ \-]* { return text(); }

ID
  = [a-zA-Z_][a-zA-Z0-9_\-]* { return text(); }

_ 
  = [ \t\n\r\f]*
 
__
  = [ \t\n\r\f]+
