// Compiled by ClojureScript 0.0-2138
goog.provide('wonderful_lib.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
wonderful_lib.core.foo = (function foo(greeting){if(cljs.core.truth_(greeting))
{return [cljs.core.str(greeting),cljs.core.str("ClojureScript!")].join('');
} else
{return [cljs.core.str("Hello, ClojureScript!")].join('');
}
});
wonderful_lib.core.canvas = document.getElementById("myCanvas");
wonderful_lib.core.context = wonderful_lib.core.canvas.getContext("2d");
wonderful_lib.core.drawCircle = (function drawCircle(col){wonderful_lib.core.context.fillStyle = col;
wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.arc(100,100,15,0,(2 * Math.PI));
return wonderful_lib.core.context.fill();
});
wonderful_lib.core.drawCircle.call(null,"#00ff00");
wonderful_lib.core.looping_QMARK_ = false;
wonderful_lib.core.main_loop = (function main_loop(){return cljs.core.println.call(null,"aha");
});
wonderful_lib.core.tick = (function tick(t){wonderful_lib.core.main_loop.call(null);
if(cljs.core.truth_(wonderful_lib.core.looping_QMARK_))
{return requestAnimationFrame(tick);
} else
{return null;
}
});
wonderful_lib.core.start_loop = (function start_loop(){wonderful_lib.core.looping_QMARK_ = true;
return wonderful_lib.core.tick.call(null,null);
});
wonderful_lib.core.stop_loop = (function stop_loop(){return wonderful_lib.core.looping_QMARK_ = false;
});
wonderful_lib.core.create_vertices = (function create_vertices(n,w,h){return cljs.core.repeatedly.call(null,n,(function (){return cljs.core.identity.call(null,[cljs.core.rand.call(null,w),cljs.core.rand.call(null,h)]);
}));
});
wonderful_lib.core.vertices = wonderful_lib.core.create_vertices.call(null,100,400,300);
wonderful_lib.core.triangles = Delaunay.triangulate.call(null,cljs.core.to_array.call(null,wonderful_lib.core.vertices));
wonderful_lib.core.ttt = cljs.core.map.call(null,(function (p1__22042_SHARP_){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,wonderful_lib.core.vertices),p1__22042_SHARP_);
}),cljs.core.partition.call(null,3,wonderful_lib.core.triangles));
wonderful_lib.core.draw_tris = (function draw_tris(){var seq__22055 = cljs.core.seq.call(null,wonderful_lib.core.ttt);var chunk__22056 = null;var count__22057 = 0;var i__22058 = 0;while(true){
if((i__22058 < count__22057))
{var vec__22059 = cljs.core._nth.call(null,chunk__22056,i__22058);var vec__22060 = cljs.core.nth.call(null,vec__22059,0,null);var p1_x = cljs.core.nth.call(null,vec__22060,0,null);var p1_y = cljs.core.nth.call(null,vec__22060,1,null);var vec__22061 = cljs.core.nth.call(null,vec__22059,1,null);var p2_x = cljs.core.nth.call(null,vec__22061,0,null);var p2_y = cljs.core.nth.call(null,vec__22061,1,null);var vec__22062 = cljs.core.nth.call(null,vec__22059,2,null);var p3_x = cljs.core.nth.call(null,vec__22062,0,null);var p3_y = cljs.core.nth.call(null,vec__22062,1,null);var triangle = vec__22059;wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(p1_x,p1_y);
wonderful_lib.core.context.lineTo(p2_x,p2_y);
wonderful_lib.core.context.lineTo(p3_x,p3_y);
wonderful_lib.core.context.closePath();
wonderful_lib.core.context.stroke();
{
var G__22067 = seq__22055;
var G__22068 = chunk__22056;
var G__22069 = count__22057;
var G__22070 = (i__22058 + 1);
seq__22055 = G__22067;
chunk__22056 = G__22068;
count__22057 = G__22069;
i__22058 = G__22070;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22055);if(temp__4092__auto__)
{var seq__22055__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22055__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__22055__$1);{
var G__22071 = cljs.core.chunk_rest.call(null,seq__22055__$1);
var G__22072 = c__4150__auto__;
var G__22073 = cljs.core.count.call(null,c__4150__auto__);
var G__22074 = 0;
seq__22055 = G__22071;
chunk__22056 = G__22072;
count__22057 = G__22073;
i__22058 = G__22074;
continue;
}
} else
{var vec__22063 = cljs.core.first.call(null,seq__22055__$1);var vec__22064 = cljs.core.nth.call(null,vec__22063,0,null);var p1_x = cljs.core.nth.call(null,vec__22064,0,null);var p1_y = cljs.core.nth.call(null,vec__22064,1,null);var vec__22065 = cljs.core.nth.call(null,vec__22063,1,null);var p2_x = cljs.core.nth.call(null,vec__22065,0,null);var p2_y = cljs.core.nth.call(null,vec__22065,1,null);var vec__22066 = cljs.core.nth.call(null,vec__22063,2,null);var p3_x = cljs.core.nth.call(null,vec__22066,0,null);var p3_y = cljs.core.nth.call(null,vec__22066,1,null);var triangle = vec__22063;wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(p1_x,p1_y);
wonderful_lib.core.context.lineTo(p2_x,p2_y);
wonderful_lib.core.context.lineTo(p3_x,p3_y);
wonderful_lib.core.context.closePath();
wonderful_lib.core.context.stroke();
{
var G__22075 = cljs.core.next.call(null,seq__22055__$1);
var G__22076 = null;
var G__22077 = 0;
var G__22078 = 0;
seq__22055 = G__22075;
chunk__22056 = G__22076;
count__22057 = G__22077;
i__22058 = G__22078;
continue;
}
}
} else
{return null;
}
}
break;
}
});
wonderful_lib.core.draw_tris.call(null);
wonderful_lib.core.context.clearRect(0,0,wonderful_lib.core.canvas.width,wonderful_lib.core.canvas.height);
wonderful_lib.core.order = (function order(n){var ln_3 = Math.log.call(null,3);return Math.ceil.call(null,(Math.log.call(null,n) / ln_3));
});
wonderful_lib.core.positive_numbers = (function() {
var positive_numbers = null;
var positive_numbers__0 = (function (){return positive_numbers.call(null,1);
});
var positive_numbers__1 = (function (n){return cljs.core.cons.call(null,n,(new cljs.core.LazySeq(null,(function (){return positive_numbers.call(null,(n + 1));
}),null,null)));
});
positive_numbers = function(n){
switch(arguments.length){
case 0:
return positive_numbers__0.call(this);
case 1:
return positive_numbers__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
positive_numbers.cljs$core$IFn$_invoke$arity$0 = positive_numbers__0;
positive_numbers.cljs$core$IFn$_invoke$arity$1 = positive_numbers__1;
return positive_numbers;
})()
;
wonderful_lib.core.greeting = (function() {
var greeting = null;
var greeting__0 = (function (){return greeting.call(null,"Hello","world");
});
var greeting__1 = (function (name){return greeting.call(null,"Hello",name);
});
var greeting__2 = (function (salutation,name){return [cljs.core.str(salutation),cljs.core.str(", "),cljs.core.str(name),cljs.core.str("!")].join('');
});
greeting = function(salutation,name){
switch(arguments.length){
case 0:
return greeting__0.call(this);
case 1:
return greeting__1.call(this,salutation);
case 2:
return greeting__2.call(this,salutation,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
greeting.cljs$core$IFn$_invoke$arity$0 = greeting__0;
greeting.cljs$core$IFn$_invoke$arity$1 = greeting__1;
greeting.cljs$core$IFn$_invoke$arity$2 = greeting__2;
return greeting;
})()
;
wonderful_lib.core.kantor_lines = (function kantor_lines(base,max_depth){if((max_depth > 0))
{var third = (base / 3);return cljs.core.apply.call(null,cljs.core.conj,kantor_lines.call(null,third,(max_depth - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [third,(2 * third)], null),kantor_lines.call(null,third,(max_depth - 1)));
} else
{return null;
}
});
wonderful_lib.core.kantor_lines_2 = (function kantor_lines_2(p__22079,max_depth){var vec__22081 = p__22079;var base_start = cljs.core.nth.call(null,vec__22081,0,null);var base_end = cljs.core.nth.call(null,vec__22081,1,null);var base = vec__22081;if((max_depth > 0))
{var third = ((base_end - base_start) / 3);var s_1 = (base_start + third);var s_2 = (s_1 + third);return cljs.core.apply.call(null,cljs.core.conj,kantor_lines_2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_start,s_1], null),(max_depth - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_1,s_2], null),kantor_lines_2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_2,base_end], null),(max_depth - 1)));
} else
{return null;
}
});
wonderful_lib.core.kantor_lines_2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,3], null),4);
wonderful_lib.core.draw_kantor_lines = (function draw_kantor_lines(segments){var seq__22088 = cljs.core.seq.call(null,segments);var chunk__22089 = null;var count__22090 = 0;var i__22091 = 0;while(true){
if((i__22091 < count__22090))
{var vec__22092 = cljs.core._nth.call(null,chunk__22089,i__22091);var segment_start = cljs.core.nth.call(null,vec__22092,0,null);var segment_end = cljs.core.nth.call(null,vec__22092,1,null);wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(segment_start,100);
wonderful_lib.core.context.lineTo(segment_end,100);
wonderful_lib.core.context.stroke();
{
var G__22094 = seq__22088;
var G__22095 = chunk__22089;
var G__22096 = count__22090;
var G__22097 = (i__22091 + 1);
seq__22088 = G__22094;
chunk__22089 = G__22095;
count__22090 = G__22096;
i__22091 = G__22097;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22088);if(temp__4092__auto__)
{var seq__22088__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22088__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__22088__$1);{
var G__22098 = cljs.core.chunk_rest.call(null,seq__22088__$1);
var G__22099 = c__4150__auto__;
var G__22100 = cljs.core.count.call(null,c__4150__auto__);
var G__22101 = 0;
seq__22088 = G__22098;
chunk__22089 = G__22099;
count__22090 = G__22100;
i__22091 = G__22101;
continue;
}
} else
{var vec__22093 = cljs.core.first.call(null,seq__22088__$1);var segment_start = cljs.core.nth.call(null,vec__22093,0,null);var segment_end = cljs.core.nth.call(null,vec__22093,1,null);wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(segment_start,100);
wonderful_lib.core.context.lineTo(segment_end,100);
wonderful_lib.core.context.stroke();
{
var G__22102 = cljs.core.next.call(null,seq__22088__$1);
var G__22103 = null;
var G__22104 = 0;
var G__22105 = 0;
seq__22088 = G__22102;
chunk__22089 = G__22103;
count__22090 = G__22104;
i__22091 = G__22105;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* Keycodes that interest us. Taken from
* http://docs.closure-library.googlecode.com/git/closure_goog_events_keynames.js.source.html#line33
*/
wonderful_lib.core.keycodes = new cljs.core.PersistentArrayMap(null, 6, [37,new cljs.core.Keyword(null,"left","left",1017222009),38,new cljs.core.Keyword(null,"up","up",1013907981),39,new cljs.core.Keyword(null,"right","right",1122416014),40,new cljs.core.Keyword(null,"down","down",1016993812),32,new cljs.core.Keyword(null,"space","space",1123542136),13,new cljs.core.Keyword(null,"enter","enter",1110571594)], null);
wonderful_lib.core.callback = (function callback(e){var key_code = e.keyCode;cljs.core.println.call(null,key_code);
return console.log(key_code);
});
wonderful_lib.core.keyboard_chan = (function keyboard_chan(){var ch = cljs.core.async.chan.call(null);return document.body.addEventListener("keydown",wonderful_lib.core.callback);
});
wonderful_lib.core.event__GT_key = (function event__GT_key(e){return wonderful_lib.core.keycodes.call(null,e.keyCode,new cljs.core.Keyword(null,"key-not-found","key-not-found",1380119948));
});
