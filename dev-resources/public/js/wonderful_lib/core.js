// Compiled by ClojureScript 0.0-2138
goog.provide('wonderful_lib.core');
goog.require('cljs.core');
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
wonderful_lib.core.ttt = cljs.core.map.call(null,(function (p1__11093_SHARP_){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,wonderful_lib.core.vertices),p1__11093_SHARP_);
}),cljs.core.partition.call(null,3,wonderful_lib.core.triangles));
wonderful_lib.core.draw_tris = (function draw_tris(){var seq__11106 = cljs.core.seq.call(null,wonderful_lib.core.ttt);var chunk__11107 = null;var count__11108 = 0;var i__11109 = 0;while(true){
if((i__11109 < count__11108))
{var vec__11110 = cljs.core._nth.call(null,chunk__11107,i__11109);var vec__11111 = cljs.core.nth.call(null,vec__11110,0,null);var p1_x = cljs.core.nth.call(null,vec__11111,0,null);var p1_y = cljs.core.nth.call(null,vec__11111,1,null);var vec__11112 = cljs.core.nth.call(null,vec__11110,1,null);var p2_x = cljs.core.nth.call(null,vec__11112,0,null);var p2_y = cljs.core.nth.call(null,vec__11112,1,null);var vec__11113 = cljs.core.nth.call(null,vec__11110,2,null);var p3_x = cljs.core.nth.call(null,vec__11113,0,null);var p3_y = cljs.core.nth.call(null,vec__11113,1,null);var triangle = vec__11110;wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(p1_x,p1_y);
wonderful_lib.core.context.lineTo(p2_x,p2_y);
wonderful_lib.core.context.lineTo(p3_x,p3_y);
wonderful_lib.core.context.closePath();
wonderful_lib.core.context.stroke();
{
var G__11118 = seq__11106;
var G__11119 = chunk__11107;
var G__11120 = count__11108;
var G__11121 = (i__11109 + 1);
seq__11106 = G__11118;
chunk__11107 = G__11119;
count__11108 = G__11120;
i__11109 = G__11121;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11106);if(temp__4092__auto__)
{var seq__11106__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11106__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__11106__$1);{
var G__11122 = cljs.core.chunk_rest.call(null,seq__11106__$1);
var G__11123 = c__4150__auto__;
var G__11124 = cljs.core.count.call(null,c__4150__auto__);
var G__11125 = 0;
seq__11106 = G__11122;
chunk__11107 = G__11123;
count__11108 = G__11124;
i__11109 = G__11125;
continue;
}
} else
{var vec__11114 = cljs.core.first.call(null,seq__11106__$1);var vec__11115 = cljs.core.nth.call(null,vec__11114,0,null);var p1_x = cljs.core.nth.call(null,vec__11115,0,null);var p1_y = cljs.core.nth.call(null,vec__11115,1,null);var vec__11116 = cljs.core.nth.call(null,vec__11114,1,null);var p2_x = cljs.core.nth.call(null,vec__11116,0,null);var p2_y = cljs.core.nth.call(null,vec__11116,1,null);var vec__11117 = cljs.core.nth.call(null,vec__11114,2,null);var p3_x = cljs.core.nth.call(null,vec__11117,0,null);var p3_y = cljs.core.nth.call(null,vec__11117,1,null);var triangle = vec__11114;wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(p1_x,p1_y);
wonderful_lib.core.context.lineTo(p2_x,p2_y);
wonderful_lib.core.context.lineTo(p3_x,p3_y);
wonderful_lib.core.context.closePath();
wonderful_lib.core.context.stroke();
{
var G__11126 = cljs.core.next.call(null,seq__11106__$1);
var G__11127 = null;
var G__11128 = 0;
var G__11129 = 0;
seq__11106 = G__11126;
chunk__11107 = G__11127;
count__11108 = G__11128;
i__11109 = G__11129;
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
wonderful_lib.core.kantor_lines_2 = (function kantor_lines_2(p__11130,max_depth){var vec__11132 = p__11130;var base_start = cljs.core.nth.call(null,vec__11132,0,null);var base_end = cljs.core.nth.call(null,vec__11132,1,null);var base = vec__11132;if((max_depth > 0))
{var third = ((base_end - base_start) / 3);var s_1 = (base_start + third);var s_2 = s_1.call(null,cljs.core._PLUS_,third);return cljs.core.apply.call(null,cljs.core.conj,kantor_lines_2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_start,s_1], null),(max_depth - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_1,s_2], null),kantor_lines_2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_2,base_end], null),(max_depth - 1)));
} else
{return null;
}
});
