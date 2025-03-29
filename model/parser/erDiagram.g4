grammar erDiagram;

PK : 'PK' | 'pk';
FK : 'FK' | 'fk';
ID : [a-zA-Z_][a-zA-Z_\-0-9]* ;
WS : [ \t\n\r\f]+ -> skip ;

start
    : 'erDiagram' line* EOF
    ;

line: relation
    | direction
    | entity
    ;

relation
    : ent rel ent ':' rel_label
    ;

ent : ID
    ;
    
rel : card_left '--' card_right
    ;

rel_label
    : ID
    ;

card_left
    : ('|o' | '||' | '}o' | '}|')
    ;

card_right
    : ('o|' | '||' | 'o{' | '|{')
    ;

direction
    : 'DIRECTION' ('TB' | 'BT' | 'LR' | 'RL')
    | 'direction' ('tb' | 'bt' | 'lt' | 'rl')
    ;

entity
    : ent '{' attr* '}'
    | ent
    ;

attr: type name key?
    ;

type: ID
    ;

name: ID
    ;
    
key : PK
    | FK
    ;