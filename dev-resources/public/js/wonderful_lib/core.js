// Compiled by ClojureScript 0.0-2138
goog.provide('wonderful_lib.core');
goog.require('cljs.core');
goog.require('wonderful_lib.types');
goog.require('wonderful_lib.types');
cljs.core.println.call(null,"namespace wonderful-lib.core is starting loading...");
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
wonderful_lib.core.ttt = cljs.core.map.call(null,(function (p1__11084_SHARP_){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,wonderful_lib.core.vertices),p1__11084_SHARP_);
}),cljs.core.partition.call(null,3,wonderful_lib.core.triangles));
wonderful_lib.core.draw_tris = (function draw_tris(){var seq__11097 = cljs.core.seq.call(null,wonderful_lib.core.ttt);var chunk__11098 = null;var count__11099 = 0;var i__11100 = 0;while(true){
if((i__11100 < count__11099))
{var vec__11101 = cljs.core._nth.call(null,chunk__11098,i__11100);var vec__11102 = cljs.core.nth.call(null,vec__11101,0,null);var p1_x = cljs.core.nth.call(null,vec__11102,0,null);var p1_y = cljs.core.nth.call(null,vec__11102,1,null);var vec__11103 = cljs.core.nth.call(null,vec__11101,1,null);var p2_x = cljs.core.nth.call(null,vec__11103,0,null);var p2_y = cljs.core.nth.call(null,vec__11103,1,null);var vec__11104 = cljs.core.nth.call(null,vec__11101,2,null);var p3_x = cljs.core.nth.call(null,vec__11104,0,null);var p3_y = cljs.core.nth.call(null,vec__11104,1,null);var triangle = vec__11101;wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(p1_x,p1_y);
wonderful_lib.core.context.lineTo(p2_x,p2_y);
wonderful_lib.core.context.lineTo(p3_x,p3_y);
wonderful_lib.core.context.closePath();
wonderful_lib.core.context.stroke();
{
var G__11109 = seq__11097;
var G__11110 = chunk__11098;
var G__11111 = count__11099;
var G__11112 = (i__11100 + 1);
seq__11097 = G__11109;
chunk__11098 = G__11110;
count__11099 = G__11111;
i__11100 = G__11112;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11097);if(temp__4092__auto__)
{var seq__11097__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11097__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__11097__$1);{
var G__11113 = cljs.core.chunk_rest.call(null,seq__11097__$1);
var G__11114 = c__4150__auto__;
var G__11115 = cljs.core.count.call(null,c__4150__auto__);
var G__11116 = 0;
seq__11097 = G__11113;
chunk__11098 = G__11114;
count__11099 = G__11115;
i__11100 = G__11116;
continue;
}
} else
{var vec__11105 = cljs.core.first.call(null,seq__11097__$1);var vec__11106 = cljs.core.nth.call(null,vec__11105,0,null);var p1_x = cljs.core.nth.call(null,vec__11106,0,null);var p1_y = cljs.core.nth.call(null,vec__11106,1,null);var vec__11107 = cljs.core.nth.call(null,vec__11105,1,null);var p2_x = cljs.core.nth.call(null,vec__11107,0,null);var p2_y = cljs.core.nth.call(null,vec__11107,1,null);var vec__11108 = cljs.core.nth.call(null,vec__11105,2,null);var p3_x = cljs.core.nth.call(null,vec__11108,0,null);var p3_y = cljs.core.nth.call(null,vec__11108,1,null);var triangle = vec__11105;wonderful_lib.core.context.beginPath();
wonderful_lib.core.context.moveTo(p1_x,p1_y);
wonderful_lib.core.context.lineTo(p2_x,p2_y);
wonderful_lib.core.context.lineTo(p3_x,p3_y);
wonderful_lib.core.context.closePath();
wonderful_lib.core.context.stroke();
{
var G__11117 = cljs.core.next.call(null,seq__11097__$1);
var G__11118 = null;
var G__11119 = 0;
var G__11120 = 0;
seq__11097 = G__11117;
chunk__11098 = G__11118;
count__11099 = G__11119;
i__11100 = G__11120;
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
cljs.core.println.call(null,"namespace wonderful-lib.core has been loaded");
