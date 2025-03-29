// Generated from /home/luisespino/Documents/GitHub/erz/backup/parser/erDiagram.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class erDiagramParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, PK=23, FK=24, ID=25, 
		WS=26;
	public static final int
		RULE_start = 0, RULE_line = 1, RULE_relation = 2, RULE_ent = 3, RULE_rel = 4, 
		RULE_rel_label = 5, RULE_card_left = 6, RULE_card_right = 7, RULE_direction = 8, 
		RULE_entity = 9, RULE_attr = 10, RULE_type = 11, RULE_name = 12, RULE_key = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "line", "relation", "ent", "rel", "rel_label", "card_left", 
			"card_right", "direction", "entity", "attr", "type", "name", "key"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'erDiagram'", "':'", "'--'", "'|o'", "'||'", "'}o'", "'}|'", "'o|'", 
			"'o{'", "'|{'", "'DIRECTION'", "'TB'", "'BT'", "'LR'", "'RL'", "'direction'", 
			"'tb'", "'bt'", "'lt'", "'rl'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, "PK", 
			"FK", "ID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "erDiagram.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public erDiagramParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(erDiagramParser.EOF, 0); }
		public List<LineContext> line() {
			return getRuleContexts(LineContext.class);
		}
		public LineContext line(int i) {
			return getRuleContext(LineContext.class,i);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(T__0);
			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 33622016L) != 0)) {
				{
				{
				setState(29);
				line();
				}
				}
				setState(34);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(35);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LineContext extends ParserRuleContext {
		public RelationContext relation() {
			return getRuleContext(RelationContext.class,0);
		}
		public DirectionContext direction() {
			return getRuleContext(DirectionContext.class,0);
		}
		public EntityContext entity() {
			return getRuleContext(EntityContext.class,0);
		}
		public LineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_line; }
	}

	public final LineContext line() throws RecognitionException {
		LineContext _localctx = new LineContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_line);
		try {
			setState(40);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(37);
				relation();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(38);
				direction();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(39);
				entity();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RelationContext extends ParserRuleContext {
		public List<EntContext> ent() {
			return getRuleContexts(EntContext.class);
		}
		public EntContext ent(int i) {
			return getRuleContext(EntContext.class,i);
		}
		public RelContext rel() {
			return getRuleContext(RelContext.class,0);
		}
		public Rel_labelContext rel_label() {
			return getRuleContext(Rel_labelContext.class,0);
		}
		public RelationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relation; }
	}

	public final RelationContext relation() throws RecognitionException {
		RelationContext _localctx = new RelationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_relation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			ent();
			setState(43);
			rel();
			setState(44);
			ent();
			setState(45);
			match(T__1);
			setState(46);
			rel_label();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EntContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(erDiagramParser.ID, 0); }
		public EntContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ent; }
	}

	public final EntContext ent() throws RecognitionException {
		EntContext _localctx = new EntContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_ent);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RelContext extends ParserRuleContext {
		public Card_leftContext card_left() {
			return getRuleContext(Card_leftContext.class,0);
		}
		public Card_rightContext card_right() {
			return getRuleContext(Card_rightContext.class,0);
		}
		public RelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rel; }
	}

	public final RelContext rel() throws RecognitionException {
		RelContext _localctx = new RelContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_rel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			card_left();
			setState(51);
			match(T__2);
			setState(52);
			card_right();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Rel_labelContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(erDiagramParser.ID, 0); }
		public Rel_labelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rel_label; }
	}

	public final Rel_labelContext rel_label() throws RecognitionException {
		Rel_labelContext _localctx = new Rel_labelContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_rel_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Card_leftContext extends ParserRuleContext {
		public Card_leftContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_card_left; }
	}

	public final Card_leftContext card_left() throws RecognitionException {
		Card_leftContext _localctx = new Card_leftContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_card_left);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 240L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Card_rightContext extends ParserRuleContext {
		public Card_rightContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_card_right; }
	}

	public final Card_rightContext card_right() throws RecognitionException {
		Card_rightContext _localctx = new Card_rightContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_card_right);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1824L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DirectionContext extends ParserRuleContext {
		public DirectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_direction; }
	}

	public final DirectionContext direction() throws RecognitionException {
		DirectionContext _localctx = new DirectionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_direction);
		int _la;
		try {
			setState(64);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__10:
				enterOuterAlt(_localctx, 1);
				{
				setState(60);
				match(T__10);
				setState(61);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 61440L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 2);
				{
				setState(62);
				match(T__15);
				setState(63);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1966080L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EntityContext extends ParserRuleContext {
		public EntContext ent() {
			return getRuleContext(EntContext.class,0);
		}
		public List<AttrContext> attr() {
			return getRuleContexts(AttrContext.class);
		}
		public AttrContext attr(int i) {
			return getRuleContext(AttrContext.class,i);
		}
		public EntityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entity; }
	}

	public final EntityContext entity() throws RecognitionException {
		EntityContext _localctx = new EntityContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_entity);
		int _la;
		try {
			setState(77);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(66);
				ent();
				setState(67);
				match(T__20);
				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ID) {
					{
					{
					setState(68);
					attr();
					}
					}
					setState(73);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(74);
				match(T__21);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(76);
				ent();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AttrContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public KeyContext key() {
			return getRuleContext(KeyContext.class,0);
		}
		public AttrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attr; }
	}

	public final AttrContext attr() throws RecognitionException {
		AttrContext _localctx = new AttrContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_attr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			type();
			setState(80);
			name();
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PK || _la==FK) {
				{
				setState(81);
				key();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(erDiagramParser.ID, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NameContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(erDiagramParser.ID, 0); }
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KeyContext extends ParserRuleContext {
		public TerminalNode PK() { return getToken(erDiagramParser.PK, 0); }
		public TerminalNode FK() { return getToken(erDiagramParser.FK, 0); }
		public KeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_key; }
	}

	public final KeyContext key() throws RecognitionException {
		KeyContext _localctx = new KeyContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_key);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			_la = _input.LA(1);
			if ( !(_la==PK || _la==FK) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001a[\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0005\u0000\u001f\b"+
		"\u0000\n\u0000\f\u0000\"\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0003\u0001)\b\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0003\bA\b\b\u0001\t\u0001\t\u0001\t\u0005\tF\b\t\n\t\f\tI\t\t\u0001"+
		"\t\u0001\t\u0001\t\u0003\tN\b\t\u0001\n\u0001\n\u0001\n\u0003\nS\b\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0000\u0000"+
		"\u000e\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u0000\u0005\u0001\u0000\u0004\u0007\u0002\u0000\u0005\u0005\b\n"+
		"\u0001\u0000\f\u000f\u0001\u0000\u0011\u0014\u0001\u0000\u0017\u0018S"+
		"\u0000\u001c\u0001\u0000\u0000\u0000\u0002(\u0001\u0000\u0000\u0000\u0004"+
		"*\u0001\u0000\u0000\u0000\u00060\u0001\u0000\u0000\u0000\b2\u0001\u0000"+
		"\u0000\u0000\n6\u0001\u0000\u0000\u0000\f8\u0001\u0000\u0000\u0000\u000e"+
		":\u0001\u0000\u0000\u0000\u0010@\u0001\u0000\u0000\u0000\u0012M\u0001"+
		"\u0000\u0000\u0000\u0014O\u0001\u0000\u0000\u0000\u0016T\u0001\u0000\u0000"+
		"\u0000\u0018V\u0001\u0000\u0000\u0000\u001aX\u0001\u0000\u0000\u0000\u001c"+
		" \u0005\u0001\u0000\u0000\u001d\u001f\u0003\u0002\u0001\u0000\u001e\u001d"+
		"\u0001\u0000\u0000\u0000\u001f\"\u0001\u0000\u0000\u0000 \u001e\u0001"+
		"\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000!#\u0001\u0000\u0000\u0000"+
		"\" \u0001\u0000\u0000\u0000#$\u0005\u0000\u0000\u0001$\u0001\u0001\u0000"+
		"\u0000\u0000%)\u0003\u0004\u0002\u0000&)\u0003\u0010\b\u0000\')\u0003"+
		"\u0012\t\u0000(%\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000(\'"+
		"\u0001\u0000\u0000\u0000)\u0003\u0001\u0000\u0000\u0000*+\u0003\u0006"+
		"\u0003\u0000+,\u0003\b\u0004\u0000,-\u0003\u0006\u0003\u0000-.\u0005\u0002"+
		"\u0000\u0000./\u0003\n\u0005\u0000/\u0005\u0001\u0000\u0000\u000001\u0005"+
		"\u0019\u0000\u00001\u0007\u0001\u0000\u0000\u000023\u0003\f\u0006\u0000"+
		"34\u0005\u0003\u0000\u000045\u0003\u000e\u0007\u00005\t\u0001\u0000\u0000"+
		"\u000067\u0005\u0019\u0000\u00007\u000b\u0001\u0000\u0000\u000089\u0007"+
		"\u0000\u0000\u00009\r\u0001\u0000\u0000\u0000:;\u0007\u0001\u0000\u0000"+
		";\u000f\u0001\u0000\u0000\u0000<=\u0005\u000b\u0000\u0000=A\u0007\u0002"+
		"\u0000\u0000>?\u0005\u0010\u0000\u0000?A\u0007\u0003\u0000\u0000@<\u0001"+
		"\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000A\u0011\u0001\u0000\u0000"+
		"\u0000BC\u0003\u0006\u0003\u0000CG\u0005\u0015\u0000\u0000DF\u0003\u0014"+
		"\n\u0000ED\u0001\u0000\u0000\u0000FI\u0001\u0000\u0000\u0000GE\u0001\u0000"+
		"\u0000\u0000GH\u0001\u0000\u0000\u0000HJ\u0001\u0000\u0000\u0000IG\u0001"+
		"\u0000\u0000\u0000JK\u0005\u0016\u0000\u0000KN\u0001\u0000\u0000\u0000"+
		"LN\u0003\u0006\u0003\u0000MB\u0001\u0000\u0000\u0000ML\u0001\u0000\u0000"+
		"\u0000N\u0013\u0001\u0000\u0000\u0000OP\u0003\u0016\u000b\u0000PR\u0003"+
		"\u0018\f\u0000QS\u0003\u001a\r\u0000RQ\u0001\u0000\u0000\u0000RS\u0001"+
		"\u0000\u0000\u0000S\u0015\u0001\u0000\u0000\u0000TU\u0005\u0019\u0000"+
		"\u0000U\u0017\u0001\u0000\u0000\u0000VW\u0005\u0019\u0000\u0000W\u0019"+
		"\u0001\u0000\u0000\u0000XY\u0007\u0004\u0000\u0000Y\u001b\u0001\u0000"+
		"\u0000\u0000\u0006 (@GMR";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}