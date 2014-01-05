// Compiled by ClojureScript 0.0-2138
goog.provide('wonderful_lib.ttt');
goog.require('cljs.core');
goog.require('wonderful_lib.types');
goog.require('wonderful_lib.types');
cljs.core.println.call(null,"namespace is starting loading...");
wonderful_lib.ttt.foo = (function foo(greeting){if(cljs.core.truth_(greeting))
{return [cljs.core.str(greeting),cljs.core.str("ClojureScript!")].join('');
} else
{return [cljs.core.str("Hello, ClojureScript!")].join('');
}
});
wonderful_lib.ttt.canvas = document.getElementById("myCanvas");
wonderful_lib.ttt.context = wonderful_lib.ttt.canvas.getContext("2d");
wonderful_lib.ttt.drawCircle = (function drawCircle(col){wonderful_lib.ttt.context.fillStyle = col;
wonderful_lib.ttt.context.beginPath();
wonderful_lib.ttt.context.arc(100,100,15,0,(2 * Math.PI));
return wonderful_lib.ttt.context.fill();
});
wonderful_lib.ttt.drawCircle.call(null,"#00ff00");
wonderful_lib.ttt.looping_QMARK_ = false;
wonderful_lib.ttt.main_loop = (function main_loop(){return cljs.core.println.call(null,"aha");
});
wonderful_lib.ttt.tick = (function tick(t){wonderful_lib.ttt.main_loop.call(null);
if(cljs.core.truth_(wonderful_lib.ttt.looping_QMARK_))
{return requestAnimationFrame(tick);
} else
{return null;
}
});
wonderful_lib.ttt.start_loop = (function start_loop(){wonderful_lib.ttt.looping_QMARK_ = true;
return wonderful_lib.ttt.tick.call(null,null);
});
wonderful_lib.ttt.stop_loop = (function stop_loop(){return wonderful_lib.ttt.looping_QMARK_ = false;
});
cljs.core.println.call(null,"namespace has been loaded");
