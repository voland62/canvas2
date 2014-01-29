// Compiled by ClojureScript 0.0-2138
goog.provide('wonderful_lib.core_test');
goog.require('cljs.core');
goog.require('wonderful_lib.core');
goog.require('wonderful_lib.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
wonderful_lib.core_test.foo_test = (function foo_test(){return cemerick.cljs.test.test_function.call(null,wonderful_lib.core_test.foo_test);
});
wonderful_lib.core_test.foo_test = cljs.core.vary_meta.call(null,wonderful_lib.core_test.foo_test,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"foo-test","foo-test",-1310892302,null),new cljs.core.Keyword(null,"test","test",1017460740),(function foo_test_test(){var _STAR_testing_contexts_STAR_5967 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"I don't do a lot\n");
var _STAR_testing_contexts_STAR_5968 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"Edge cases\n");
var _STAR_testing_contexts_STAR_5969 = cemerick.cljs.test._STAR_testing_contexts_STAR_;try{cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_,"(foo str)");
try{var values__4805__auto___5972 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,wonderful_lib.core.foo.call(null,"")),"ClojureScript!");var result__4806__auto___5973 = cljs.core.apply.call(null,cljs.core._EQ_,values__4805__auto___5972);if(cljs.core.truth_(result__4806__auto___5973))
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__4805__auto___5972),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__4805__auto___5972)),new cljs.core.Symbol(null,"not","not",-1640422260,null)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
}
}catch (e5970){if((e5970 instanceof Error))
{var t__4842__auto___5974 = e5970;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),t__4842__auto___5974,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),""))], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e5970;
} else
{}
}
}try{var values__4805__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,wonderful_lib.core.foo.call(null,null)),"Hello, ClojureScript!");var result__4806__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__4805__auto__);if(cljs.core.truth_(result__4806__auto__))
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__4805__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__4805__auto__)),new cljs.core.Symbol(null,"not","not",-1640422260,null)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
}
return result__4806__auto__;
}catch (e5971){if((e5971 instanceof Error))
{var t__4842__auto__ = e5971;return cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),t__4842__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Hello, ClojureScript!",cljs.core.list(new cljs.core.Symbol(null,"foo","foo",-1640429953,null),null))], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e5971;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_5969;
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_5968;
}}finally {cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_5967;
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"wonderful-lib.core-test","wonderful-lib.core-test",601109733,null),wonderful_lib.core_test.foo_test);
