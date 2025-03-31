# ERZ

## Syntax BNF

```bnf
<start> ::= 'erDiagram' <line>* EOF

<line> ::= <relation> 
        | <direction> 
        | <entity>

<relation> ::= <ent> <rel> <ent> ':' <rel_label>

<ent> ::= <ID>

<rel> ::= <card_left> '--' <card_right>

<rel_label> ::= <ID>

<card_left> ::= '|o' | '||' | '}o' | '}|'

<card_right> ::= 'o|' | '||' | 'o{' | '|{'

<direction> ::= 'DIRECTION' ('TB' | 'BT' | 'LR' | 'RL')
            | 'direction' ('tb' | 'bt' | 'lt' | 'rl')

<entity> ::= <ent> '{' <attr>* '}'
          | <ent>

<attr> ::= <type> <name> <key>?

<type> ::= <ID>

<name> ::= <ID>

<key> ::= <PK> 
       | <FK>

<PK> ::= 'PK' 
      | 'pk'

<FK> ::= 'FK' 
      | 'fk'

<ID> ::= <start_char> (<start_char> | <letter_or_digit> | '-' | '_')*

<start_char> ::= <letter> 
             | '_'

<letter> ::= 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' 
         | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' 
         | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
         | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' 
         | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' 
         | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

<letter_or_digit> ::= <letter> 
                  | <digit>

<digit> ::= '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
```

## Install Fuzz Type-Checker

Install dependencies(for Arch Linux, modify pacman for other distributions):
```
sudo pacman -S texlive-core base-devel
```

Clone the Fuzz Repo:
```
git clone https://github.com/Spivoxity/fuzz.git
cd fuzz
```

Configure the installation:
```
./configure
```

Build the type-checker:
```
make
```

Install the type-cheker:
```
sudo make install
```

Save the LaTeX format in a file (z.tex) and Check:
```
fuzz z.tex
```

If no errors occur, everything is all right!
