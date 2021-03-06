// Compiled by ClojureScript 0.0-2138
goog.provide('wonderful_lib.core_test');
goog.require('cljs.core');
goog.require('wonderful_lib.core');
goog.require('wonderful_lib.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
wonderful_lib.core_test.foo_test = (function foo_test(){return cemerick.cljs.test.test_function.call(null,wonderful_lib.core_test.foo_test);
});
wonderful_lib.core_test.foo_test = cljs.core.vary_meta.call(null,wonderful_lib.core_test.foo_test,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"foo-test","foo-test",-1310892302,null),new cljs.core.Keyword(null,"test","test",1017460740),(function foo_test_test(){var _STAR_testing_contexts_STAR_14259 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"I don't do a lot\n");
var _STAR_testing_contexts_STAR_14260 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"Edge cases\n");
var _STAR_testing_contexts_STAR_14261 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"(foo str)");
try{var values__8403__auto___14264 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,wonderful_lib.core.foo.call(null,"")),"ClojureScript!");var result__8404__auto___14265 = cljs.core.apply.call(null,cljs.core._EQ_,values__8403__auto___14264);if(cljs.core.truth_(result__8404__auto___14265))
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__8403__auto___14264),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__8403__auto___14264)),new cljs.core.Symbol(null,"not","not",-1640422260,null)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
}
}catch (e14262){if((e14262 instanceof Error))
{var t__8440__auto___14266 = e14262;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),t__8440__auto___14266,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14262;
} else
{}
}
}try{var values__8403__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,wonderful_lib.core.foo.call(null,null)),"Hello, ClojureScript!");var result__8404__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8403__auto__);if(cljs.core.truth_(result__8404__auto__))
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__8403__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__8403__auto__)),new cljs.core.Symbol(null,"not","not",-1640422260,null)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
}
return result__8404__auto__;
}catch (e14263){if((e14263 instanceof Error))
{var t__8440__auto__ = e14263;return cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),t__8440__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14263;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_14261;
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_14260;
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_14259;
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"wonderful-lib.core-test","wonderful-lib.core-test",601109733,null),wonderful_lib.core_test.foo_test);
