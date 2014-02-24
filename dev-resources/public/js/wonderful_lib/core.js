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
wonderful_lib.core.ttt = cljs.core.map.call(null,(function (p1__22039_SHARP_){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,wonderful_lib.core.vertices),p1__22039_SHARP_);
}),cljs.core.partition.call(null,3,wonderful_lib.core.triangles));
wonderful_lib.core.draw_tris = (function draw_tris(){var seq__22052 = cljs.core.seq.call(null,wonderful_lib.core.ttt);var chunk__22053 = null;var count__22054 = 0;var i__22055 = 0;while(true){
if((i__22055 < count__22054))
{var vec__22056 = cljs.core._nth.call(null,chunk__22053,i__22055);var vec__22057 = cljs.core.nth.call(null,vec__22056,0,null);var p1_x = cljs.core.nth.call(null,vec__22057,0,null);var p1_y = cljs.core.nth.call(null,vec__22057,1,null);var vec__22058 = cljs.core.nth.call(null,vec__22056,1,null);var p2_x = cljs.core.nth.call(null,vec__22058,0,null);var p2_y = cljs.core.nth.call(null,vec__22058,1,null);var vec__22059 = cljs.core.nth.call(null,vec__22056,2,null);var p3_x = cljs.core.nth.call(null,vec__22059,0,null);var p3_y = cljs.core.nth.call(null,vec__22059,1,null);var triangle = vec__22056;wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(p1_x,p1_y);
wonderful_lib.core.context.lineTo(p2_x,p2_y);
wonderful_lib.core.context.lineTo(p3_x,p3_y);
wonderful_lib.core.context.closePath();
wonderful_lib.core.context.stroke();
{
var G__22064 = seq__22052;
var G__22065 = chunk__22053;
var G__22066 = count__22054;
var G__22067 = (i__22055 + 1);
seq__22052 = G__22064;
chunk__22053 = G__22065;
count__22054 = G__22066;
i__22055 = G__22067;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22052);if(temp__4092__auto__)
{var seq__22052__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22052__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__22052__$1);{
var G__22068 = cljs.core.chunk_rest.call(null,seq__22052__$1);
var G__22069 = c__4150__auto__;
var G__22070 = cljs.core.count.call(null,c__4150__auto__);
var G__22071 = 0;
seq__22052 = G__22068;
chunk__22053 = G__22069;
count__22054 = G__22070;
i__22055 = G__22071;
continue;
}
} else
{var vec__22060 = cljs.core.first.call(null,seq__22052__$1);var vec__22061 = cljs.core.nth.call(null,vec__22060,0,null);var p1_x = cljs.core.nth.call(null,vec__22061,0,null);var p1_y = cljs.core.nth.call(null,vec__22061,1,null);var vec__22062 = cljs.core.nth.call(null,vec__22060,1,null);var p2_x = cljs.core.nth.call(null,vec__22062,0,null);var p2_y = cljs.core.nth.call(null,vec__22062,1,null);var vec__22063 = cljs.core.nth.call(null,vec__22060,2,null);var p3_x = cljs.core.nth.call(null,vec__22063,0,null);var p3_y = cljs.core.nth.call(null,vec__22063,1,null);var triangle = vec__22060;wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(p1_x,p1_y);
wonderful_lib.core.context.lineTo(p2_x,p2_y);
wonderful_lib.core.context.lineTo(p3_x,p3_y);
wonderful_lib.core.context.closePath();
wonderful_lib.core.context.stroke();
{
var G__22072 = cljs.core.next.call(null,seq__22052__$1);
var G__22073 = null;
var G__22074 = 0;
var G__22075 = 0;
seq__22052 = G__22072;
chunk__22053 = G__22073;
count__22054 = G__22074;
i__22055 = G__22075;
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
wonderful_lib.core.kantor_lines_2 = (function kantor_lines_2(p__22076,max_depth){var vec__22078 = p__22076;var base_start = cljs.core.nth.call(null,vec__22078,0,null);var base_end = cljs.core.nth.call(null,vec__22078,1,null);var base = vec__22078;if((max_depth > 0))
{var third = ((base_end - base_start) / 3);var s_1 = (base_start + third);var s_2 = (s_1 + third);return cljs.core.apply.call(null,cljs.core.conj,kantor_lines_2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_start,s_1], null),(max_depth - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_1,s_2], null),kantor_lines_2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_2,base_end], null),(max_depth - 1)));
} else
{return null;
}
});
wonderful_lib.core.kantor_lines_2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,3], null),4);
wonderful_lib.core.draw_kantor_lines = (function draw_kantor_lines(segments){var seq__22085 = cljs.core.seq.call(null,segments);var chunk__22086 = null;var count__22087 = 0;var i__22088 = 0;while(true){
if((i__22088 < count__22087))
{var vec__22089 = cljs.core._nth.call(null,chunk__22086,i__22088);var segment_start = cljs.core.nth.call(null,vec__22089,0,null);var segment_end = cljs.core.nth.call(null,vec__22089,1,null);wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(segment_start,100);
wonderful_lib.core.context.lineTo(segment_end,100);
wonderful_lib.core.context.stroke();
{
var G__22091 = seq__22085;
var G__22092 = chunk__22086;
var G__22093 = count__22087;
var G__22094 = (i__22088 + 1);
seq__22085 = G__22091;
chunk__22086 = G__22092;
count__22087 = G__22093;
i__22088 = G__22094;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22085);if(temp__4092__auto__)
{var seq__22085__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22085__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__22085__$1);{
var G__22095 = cljs.core.chunk_rest.call(null,seq__22085__$1);
var G__22096 = c__4150__auto__;
var G__22097 = cljs.core.count.call(null,c__4150__auto__);
var G__22098 = 0;
seq__22085 = G__22095;
chunk__22086 = G__22096;
count__22087 = G__22097;
i__22088 = G__22098;
continue;
}
} else
{var vec__22090 = cljs.core.first.call(null,seq__22085__$1);var segment_start = cljs.core.nth.call(null,vec__22090,0,null);var segment_end = cljs.core.nth.call(null,vec__22090,1,null);wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(segment_start,100);
wonderful_lib.core.context.lineTo(segment_end,100);
wonderful_lib.core.context.stroke();
{
var G__22099 = cljs.core.next.call(null,seq__22085__$1);
var G__22100 = null;
var G__22101 = 0;
var G__22102 = 0;
seq__22085 = G__22099;
chunk__22086 = G__22100;
count__22087 = G__22101;
i__22088 = G__22102;
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
wonderful_lib.core.canvas.addEventListener("keydown",(function (e){return cljs.core.println.call(null,"ttt",e);
}));
wonderful_lib.core.canvas.addEventListener("click",(function (e){return cljs.core.println.call(null,"this is click event listener",e);
}),false);
