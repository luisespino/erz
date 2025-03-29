// Generated from erDiagram.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import erDiagramListener from './erDiagramListener.js';
const serializedATN = [4,1,26,91,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,1,0,1,0,5,0,31,8,0,10,0,12,0,34,9,0,1,0,1,0,1,1,1,1,1,1,3,1,41,8,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,
7,1,8,1,8,1,8,1,8,3,8,65,8,8,1,9,1,9,1,9,5,9,70,8,9,10,9,12,9,73,9,9,1,9,
1,9,1,9,3,9,78,8,9,1,10,1,10,1,10,3,10,83,8,10,1,11,1,11,1,12,1,12,1,13,
1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,5,1,0,4,7,2,0,5,
5,8,10,1,0,12,15,1,0,17,20,1,0,23,24,83,0,28,1,0,0,0,2,40,1,0,0,0,4,42,1,
0,0,0,6,48,1,0,0,0,8,50,1,0,0,0,10,54,1,0,0,0,12,56,1,0,0,0,14,58,1,0,0,
0,16,64,1,0,0,0,18,77,1,0,0,0,20,79,1,0,0,0,22,84,1,0,0,0,24,86,1,0,0,0,
26,88,1,0,0,0,28,32,5,1,0,0,29,31,3,2,1,0,30,29,1,0,0,0,31,34,1,0,0,0,32,
30,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,32,1,0,0,0,35,36,5,0,0,1,36,1,
1,0,0,0,37,41,3,4,2,0,38,41,3,16,8,0,39,41,3,18,9,0,40,37,1,0,0,0,40,38,
1,0,0,0,40,39,1,0,0,0,41,3,1,0,0,0,42,43,3,6,3,0,43,44,3,8,4,0,44,45,3,6,
3,0,45,46,5,2,0,0,46,47,3,10,5,0,47,5,1,0,0,0,48,49,5,25,0,0,49,7,1,0,0,
0,50,51,3,12,6,0,51,52,5,3,0,0,52,53,3,14,7,0,53,9,1,0,0,0,54,55,5,25,0,
0,55,11,1,0,0,0,56,57,7,0,0,0,57,13,1,0,0,0,58,59,7,1,0,0,59,15,1,0,0,0,
60,61,5,11,0,0,61,65,7,2,0,0,62,63,5,16,0,0,63,65,7,3,0,0,64,60,1,0,0,0,
64,62,1,0,0,0,65,17,1,0,0,0,66,67,3,6,3,0,67,71,5,21,0,0,68,70,3,20,10,0,
69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,
71,1,0,0,0,74,75,5,22,0,0,75,78,1,0,0,0,76,78,3,6,3,0,77,66,1,0,0,0,77,76,
1,0,0,0,78,19,1,0,0,0,79,80,3,22,11,0,80,82,3,24,12,0,81,83,3,26,13,0,82,
81,1,0,0,0,82,83,1,0,0,0,83,21,1,0,0,0,84,85,5,25,0,0,85,23,1,0,0,0,86,87,
5,25,0,0,87,25,1,0,0,0,88,89,7,4,0,0,89,27,1,0,0,0,6,32,40,64,71,77,82];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class erDiagramParser extends antlr4.Parser {

    static grammarFileName = "erDiagram.g4";
    static literalNames = [ null, "'erDiagram'", "':'", "'--'", "'|o'", 
                            "'||'", "'}o'", "'}|'", "'o|'", "'o{'", "'|{'", 
                            "'DIRECTION'", "'TB'", "'BT'", "'LR'", "'RL'", 
                            "'direction'", "'tb'", "'bt'", "'lt'", "'rl'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "PK", 
                             "FK", "ID", "WS" ];
    static ruleNames = [ "start", "line", "relation", "ent", "rel", "rel_label", 
                         "card_left", "card_right", "direction", "entity", 
                         "attr", "type", "name", "key" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = erDiagramParser.ruleNames;
        this.literalNames = erDiagramParser.literalNames;
        this.symbolicNames = erDiagramParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, erDiagramParser.RULE_start);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(erDiagramParser.T__0);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33622016) !== 0)) {
	            this.state = 29;
	            this.line();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this.match(erDiagramParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, erDiagramParser.RULE_line);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.relation();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.direction();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.entity();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relation() {
	    let localctx = new RelationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, erDiagramParser.RULE_relation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.ent();
	        this.state = 43;
	        this.rel();
	        this.state = 44;
	        this.ent();
	        this.state = 45;
	        this.match(erDiagramParser.T__1);
	        this.state = 46;
	        this.rel_label();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ent() {
	    let localctx = new EntContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, erDiagramParser.RULE_ent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(erDiagramParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rel() {
	    let localctx = new RelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, erDiagramParser.RULE_rel);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.card_left();
	        this.state = 51;
	        this.match(erDiagramParser.T__2);
	        this.state = 52;
	        this.card_right();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rel_label() {
	    let localctx = new Rel_labelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, erDiagramParser.RULE_rel_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(erDiagramParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	card_left() {
	    let localctx = new Card_leftContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, erDiagramParser.RULE_card_left);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 240) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	card_right() {
	    let localctx = new Card_rightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, erDiagramParser.RULE_card_right);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1824) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	direction() {
	    let localctx = new DirectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, erDiagramParser.RULE_direction);
	    var _la = 0;
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(erDiagramParser.T__10);
	            this.state = 61;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.match(erDiagramParser.T__15);
	            this.state = 63;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entity() {
	    let localctx = new EntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, erDiagramParser.RULE_entity);
	    var _la = 0;
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.ent();
	            this.state = 67;
	            this.match(erDiagramParser.T__20);
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===25) {
	                this.state = 68;
	                this.attr();
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 74;
	            this.match(erDiagramParser.T__21);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.ent();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attr() {
	    let localctx = new AttrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, erDiagramParser.RULE_attr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.type();
	        this.state = 80;
	        this.name();
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 81;
	            this.key();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, erDiagramParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(erDiagramParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, erDiagramParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(erDiagramParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, erDiagramParser.RULE_key);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

erDiagramParser.EOF = antlr4.Token.EOF;
erDiagramParser.T__0 = 1;
erDiagramParser.T__1 = 2;
erDiagramParser.T__2 = 3;
erDiagramParser.T__3 = 4;
erDiagramParser.T__4 = 5;
erDiagramParser.T__5 = 6;
erDiagramParser.T__6 = 7;
erDiagramParser.T__7 = 8;
erDiagramParser.T__8 = 9;
erDiagramParser.T__9 = 10;
erDiagramParser.T__10 = 11;
erDiagramParser.T__11 = 12;
erDiagramParser.T__12 = 13;
erDiagramParser.T__13 = 14;
erDiagramParser.T__14 = 15;
erDiagramParser.T__15 = 16;
erDiagramParser.T__16 = 17;
erDiagramParser.T__17 = 18;
erDiagramParser.T__18 = 19;
erDiagramParser.T__19 = 20;
erDiagramParser.T__20 = 21;
erDiagramParser.T__21 = 22;
erDiagramParser.PK = 23;
erDiagramParser.FK = 24;
erDiagramParser.ID = 25;
erDiagramParser.WS = 26;

erDiagramParser.RULE_start = 0;
erDiagramParser.RULE_line = 1;
erDiagramParser.RULE_relation = 2;
erDiagramParser.RULE_ent = 3;
erDiagramParser.RULE_rel = 4;
erDiagramParser.RULE_rel_label = 5;
erDiagramParser.RULE_card_left = 6;
erDiagramParser.RULE_card_right = 7;
erDiagramParser.RULE_direction = 8;
erDiagramParser.RULE_entity = 9;
erDiagramParser.RULE_attr = 10;
erDiagramParser.RULE_type = 11;
erDiagramParser.RULE_name = 12;
erDiagramParser.RULE_key = 13;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_start;
    }

	EOF() {
	    return this.getToken(erDiagramParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitStart(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_line;
    }

	relation() {
	    return this.getTypedRuleContext(RelationContext,0);
	};

	direction() {
	    return this.getTypedRuleContext(DirectionContext,0);
	};

	entity() {
	    return this.getTypedRuleContext(EntityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitLine(this);
		}
	}


}



class RelationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_relation;
    }

	ent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntContext);
	    } else {
	        return this.getTypedRuleContext(EntContext,i);
	    }
	};

	rel() {
	    return this.getTypedRuleContext(RelContext,0);
	};

	rel_label() {
	    return this.getTypedRuleContext(Rel_labelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterRelation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitRelation(this);
		}
	}


}



class EntContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_ent;
    }

	ID() {
	    return this.getToken(erDiagramParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterEnt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitEnt(this);
		}
	}


}



class RelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_rel;
    }

	card_left() {
	    return this.getTypedRuleContext(Card_leftContext,0);
	};

	card_right() {
	    return this.getTypedRuleContext(Card_rightContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterRel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitRel(this);
		}
	}


}



class Rel_labelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_rel_label;
    }

	ID() {
	    return this.getToken(erDiagramParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterRel_label(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitRel_label(this);
		}
	}


}



class Card_leftContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_card_left;
    }


	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterCard_left(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitCard_left(this);
		}
	}


}



class Card_rightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_card_right;
    }


	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterCard_right(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitCard_right(this);
		}
	}


}



class DirectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_direction;
    }


	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterDirection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitDirection(this);
		}
	}


}



class EntityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_entity;
    }

	ent() {
	    return this.getTypedRuleContext(EntContext,0);
	};

	attr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttrContext);
	    } else {
	        return this.getTypedRuleContext(AttrContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterEntity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitEntity(this);
		}
	}


}



class AttrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_attr;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterAttr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitAttr(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_type;
    }

	ID() {
	    return this.getToken(erDiagramParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitType(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_name;
    }

	ID() {
	    return this.getToken(erDiagramParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitName(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = erDiagramParser.RULE_key;
    }

	PK() {
	    return this.getToken(erDiagramParser.PK, 0);
	};

	FK() {
	    return this.getToken(erDiagramParser.FK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof erDiagramListener ) {
	        listener.exitKey(this);
		}
	}


}




erDiagramParser.StartContext = StartContext; 
erDiagramParser.LineContext = LineContext; 
erDiagramParser.RelationContext = RelationContext; 
erDiagramParser.EntContext = EntContext; 
erDiagramParser.RelContext = RelContext; 
erDiagramParser.Rel_labelContext = Rel_labelContext; 
erDiagramParser.Card_leftContext = Card_leftContext; 
erDiagramParser.Card_rightContext = Card_rightContext; 
erDiagramParser.DirectionContext = DirectionContext; 
erDiagramParser.EntityContext = EntityContext; 
erDiagramParser.AttrContext = AttrContext; 
erDiagramParser.TypeContext = TypeContext; 
erDiagramParser.NameContext = NameContext; 
erDiagramParser.KeyContext = KeyContext; 
