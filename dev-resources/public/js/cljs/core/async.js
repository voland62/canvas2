// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15313 = (function (f,fn_handler,meta15314){
this.f = f;
this.fn_handler = fn_handler;
this.meta15314 = meta15314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15313.cljs$lang$type = true;
cljs.core.async.t15313.cljs$lang$ctorStr = "cljs.core.async/t15313";
cljs.core.async.t15313.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t15313");
});
cljs.core.async.t15313.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15315){var self__ = this;
var _15315__$1 = this;return self__.meta15314;
});
cljs.core.async.t15313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15315,meta15314__$1){var self__ = this;
var _15315__$1 = this;return (new cljs.core.async.t15313(self__.f,self__.fn_handler,meta15314__$1));
});
cljs.core.async.__GT_t15313 = (function __GT_t15313(f__$1,fn_handler__$1,meta15314){return (new cljs.core.async.t15313(f__$1,fn_handler__$1,meta15314));
});
}
return (new cljs.core.async.t15313(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15317 = buff;if(G__15317)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__15317.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15317.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15317);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15317);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15318 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15318);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15318);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___15319 = n;var x_15320 = 0;while(true){
if((x_15320 < n__4250__auto___15319))
{(a[x_15320] = 0);
{
var G__15321 = (x_15320 + 1);
x_15320 = G__15321;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15322 = (i + 1);
i = G__15322;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15326 = (function (flag,alt_flag,meta15327){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15327 = meta15327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15326.cljs$lang$type = true;
cljs.core.async.t15326.cljs$lang$ctorStr = "cljs.core.async/t15326";
cljs.core.async.t15326.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t15326");
});
cljs.core.async.t15326.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15328){var self__ = this;
var _15328__$1 = this;return self__.meta15327;
});
cljs.core.async.t15326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15328,meta15327__$1){var self__ = this;
var _15328__$1 = this;return (new cljs.core.async.t15326(self__.flag,self__.alt_flag,meta15327__$1));
});
cljs.core.async.__GT_t15326 = (function __GT_t15326(flag__$1,alt_flag__$1,meta15327){return (new cljs.core.async.t15326(flag__$1,alt_flag__$1,meta15327));
});
}
return (new cljs.core.async.t15326(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15332 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15332 = (function (cb,flag,alt_handler,meta15333){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15333 = meta15333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15332.cljs$lang$type = true;
cljs.core.async.t15332.cljs$lang$ctorStr = "cljs.core.async/t15332";
cljs.core.async.t15332.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t15332");
});
cljs.core.async.t15332.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15334){var self__ = this;
var _15334__$1 = this;return self__.meta15333;
});
cljs.core.async.t15332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15334,meta15333__$1){var self__ = this;
var _15334__$1 = this;return (new cljs.core.async.t15332(self__.cb,self__.flag,self__.alt_handler,meta15333__$1));
});
cljs.core.async.__GT_t15332 = (function __GT_t15332(cb__$1,flag__$1,alt_handler__$1,meta15333){return (new cljs.core.async.t15332(cb__$1,flag__$1,alt_handler__$1,meta15333));
});
}
return (new cljs.core.async.t15332(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15335_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15335_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15336 = (i + 1);
i = G__15336;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15337){var map__15339 = p__15337;var map__15339__$1 = ((cljs.core.seq_QMARK_.call(null,map__15339))?cljs.core.apply.call(null,cljs.core.hash_map,map__15339):map__15339);var opts = map__15339__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15337 = null;if (arguments.length > 1) {
  p__15337 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15337);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15340){
var ports = cljs.core.first(arglist__15340);
var p__15337 = cljs.core.rest(arglist__15340);
return alts_BANG___delegate(ports,p__15337);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15348 = (function (ch,f,map_LT_,meta15349){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15349 = meta15349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15348.cljs$lang$type = true;
cljs.core.async.t15348.cljs$lang$ctorStr = "cljs.core.async/t15348";
cljs.core.async.t15348.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t15348");
});
cljs.core.async.t15348.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15348.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15351 = (function (fn1,_,meta15349,ch,f,map_LT_,meta15352){
this.fn1 = fn1;
this._ = _;
this.meta15349 = meta15349;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15352 = meta15352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15351.cljs$lang$type = true;
cljs.core.async.t15351.cljs$lang$ctorStr = "cljs.core.async/t15351";
cljs.core.async.t15351.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t15351");
});
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15341_SHARP_){return f1.call(null,(((p1__15341_SHARP_ == null))?null:self__.f.call(null,p1__15341_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15353){var self__ = this;
var _15353__$1 = this;return self__.meta15352;
});
cljs.core.async.t15351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15353,meta15352__$1){var self__ = this;
var _15353__$1 = this;return (new cljs.core.async.t15351(self__.fn1,self__._,self__.meta15349,self__.ch,self__.f,self__.map_LT_,meta15352__$1));
});
cljs.core.async.__GT_t15351 = (function __GT_t15351(fn1__$1,___$2,meta15349__$1,ch__$2,f__$2,map_LT___$2,meta15352){return (new cljs.core.async.t15351(fn1__$1,___$2,meta15349__$1,ch__$2,f__$2,map_LT___$2,meta15352));
});
}
return (new cljs.core.async.t15351(fn1,___$1,self__.meta15349,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15348.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15350){var self__ = this;
var _15350__$1 = this;return self__.meta15349;
});
cljs.core.async.t15348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15350,meta15349__$1){var self__ = this;
var _15350__$1 = this;return (new cljs.core.async.t15348(self__.ch,self__.f,self__.map_LT_,meta15349__$1));
});
cljs.core.async.__GT_t15348 = (function __GT_t15348(ch__$1,f__$1,map_LT___$1,meta15349){return (new cljs.core.async.t15348(ch__$1,f__$1,map_LT___$1,meta15349));
});
}
return (new cljs.core.async.t15348(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15357 = (function (ch,f,map_GT_,meta15358){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15358 = meta15358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15357.cljs$lang$type = true;
cljs.core.async.t15357.cljs$lang$ctorStr = "cljs.core.async/t15357";
cljs.core.async.t15357.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t15357");
});
cljs.core.async.t15357.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15357.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15357.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15359){var self__ = this;
var _15359__$1 = this;return self__.meta15358;
});
cljs.core.async.t15357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15359,meta15358__$1){var self__ = this;
var _15359__$1 = this;return (new cljs.core.async.t15357(self__.ch,self__.f,self__.map_GT_,meta15358__$1));
});
cljs.core.async.__GT_t15357 = (function __GT_t15357(ch__$1,f__$1,map_GT___$1,meta15358){return (new cljs.core.async.t15357(ch__$1,f__$1,map_GT___$1,meta15358));
});
}
return (new cljs.core.async.t15357(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15363 = (function (ch,p,filter_GT_,meta15364){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15364 = meta15364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15363.cljs$lang$type = true;
cljs.core.async.t15363.cljs$lang$ctorStr = "cljs.core.async/t15363";
cljs.core.async.t15363.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t15363");
});
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15365){var self__ = this;
var _15365__$1 = this;return self__.meta15364;
});
cljs.core.async.t15363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15365,meta15364__$1){var self__ = this;
var _15365__$1 = this;return (new cljs.core.async.t15363(self__.ch,self__.p,self__.filter_GT_,meta15364__$1));
});
cljs.core.async.__GT_t15363 = (function __GT_t15363(ch__$1,p__$1,filter_GT___$1,meta15364){return (new cljs.core.async.t15363(ch__$1,p__$1,filter_GT___$1,meta15364));
});
}
return (new cljs.core.async.t15363(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___15448 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_15427){var state_val_15428 = (state_15427[1]);if((state_val_15428 === 1))
{var state_15427__$1 = state_15427;var statearr_15429_15449 = state_15427__$1;(statearr_15429_15449[2] = null);
(statearr_15429_15449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15428 === 2))
{var state_15427__$1 = state_15427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15427__$1,4,ch);
} else
{if((state_val_15428 === 3))
{var inst_15425 = (state_15427[2]);var state_15427__$1 = state_15427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15427__$1,inst_15425);
} else
{if((state_val_15428 === 4))
{var inst_15409 = (state_15427[7]);var inst_15409__$1 = (state_15427[2]);var inst_15410 = (inst_15409__$1 == null);var state_15427__$1 = (function (){var statearr_15430 = state_15427;(statearr_15430[7] = inst_15409__$1);
return statearr_15430;
})();if(cljs.core.truth_(inst_15410))
{var statearr_15431_15450 = state_15427__$1;(statearr_15431_15450[1] = 5);
} else
{var statearr_15432_15451 = state_15427__$1;(statearr_15432_15451[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15428 === 5))
{var inst_15412 = cljs.core.async.close_BANG_.call(null,out);var state_15427__$1 = state_15427;var statearr_15433_15452 = state_15427__$1;(statearr_15433_15452[2] = inst_15412);
(statearr_15433_15452[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15428 === 6))
{var inst_15409 = (state_15427[7]);var inst_15414 = p.call(null,inst_15409);var state_15427__$1 = state_15427;if(cljs.core.truth_(inst_15414))
{var statearr_15434_15453 = state_15427__$1;(statearr_15434_15453[1] = 8);
} else
{var statearr_15435_15454 = state_15427__$1;(statearr_15435_15454[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15428 === 7))
{var inst_15423 = (state_15427[2]);var state_15427__$1 = state_15427;var statearr_15436_15455 = state_15427__$1;(statearr_15436_15455[2] = inst_15423);
(statearr_15436_15455[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15428 === 8))
{var inst_15409 = (state_15427[7]);var state_15427__$1 = state_15427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15427__$1,11,out,inst_15409);
} else
{if((state_val_15428 === 9))
{var state_15427__$1 = state_15427;var statearr_15437_15456 = state_15427__$1;(statearr_15437_15456[2] = null);
(statearr_15437_15456[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15428 === 10))
{var inst_15420 = (state_15427[2]);var state_15427__$1 = (function (){var statearr_15438 = state_15427;(statearr_15438[8] = inst_15420);
return statearr_15438;
})();var statearr_15439_15457 = state_15427__$1;(statearr_15439_15457[2] = null);
(statearr_15439_15457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15428 === 11))
{var inst_15417 = (state_15427[2]);var state_15427__$1 = state_15427;var statearr_15440_15458 = state_15427__$1;(statearr_15440_15458[2] = inst_15417);
(statearr_15440_15458[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_15444 = [null,null,null,null,null,null,null,null,null];(statearr_15444[0] = state_machine__5509__auto__);
(statearr_15444[1] = 1);
return statearr_15444;
});
var state_machine__5509__auto____1 = (function (state_15427){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_15427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e15445){if((e15445 instanceof Object))
{var ex__5512__auto__ = e15445;var statearr_15446_15459 = state_15427;(statearr_15446_15459[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15460 = state_15427;
state_15427 = G__15460;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_15427){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_15427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_15447 = f__5524__auto__.call(null);(statearr_15447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___15448);
return statearr_15447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_15612){var state_val_15613 = (state_15612[1]);if((state_val_15613 === 1))
{var state_15612__$1 = state_15612;var statearr_15614_15651 = state_15612__$1;(statearr_15614_15651[2] = null);
(statearr_15614_15651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 2))
{var state_15612__$1 = state_15612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15612__$1,4,in$);
} else
{if((state_val_15613 === 3))
{var inst_15610 = (state_15612[2]);var state_15612__$1 = state_15612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15612__$1,inst_15610);
} else
{if((state_val_15613 === 4))
{var inst_15558 = (state_15612[7]);var inst_15558__$1 = (state_15612[2]);var inst_15559 = (inst_15558__$1 == null);var state_15612__$1 = (function (){var statearr_15615 = state_15612;(statearr_15615[7] = inst_15558__$1);
return statearr_15615;
})();if(cljs.core.truth_(inst_15559))
{var statearr_15616_15652 = state_15612__$1;(statearr_15616_15652[1] = 5);
} else
{var statearr_15617_15653 = state_15612__$1;(statearr_15617_15653[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 5))
{var inst_15561 = cljs.core.async.close_BANG_.call(null,out);var state_15612__$1 = state_15612;var statearr_15618_15654 = state_15612__$1;(statearr_15618_15654[2] = inst_15561);
(statearr_15618_15654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 6))
{var inst_15558 = (state_15612[7]);var inst_15563 = f.call(null,inst_15558);var inst_15568 = cljs.core.seq.call(null,inst_15563);var inst_15569 = inst_15568;var inst_15570 = null;var inst_15571 = 0;var inst_15572 = 0;var state_15612__$1 = (function (){var statearr_15619 = state_15612;(statearr_15619[8] = inst_15570);
(statearr_15619[9] = inst_15572);
(statearr_15619[10] = inst_15571);
(statearr_15619[11] = inst_15569);
return statearr_15619;
})();var statearr_15620_15655 = state_15612__$1;(statearr_15620_15655[2] = null);
(statearr_15620_15655[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 7))
{var inst_15608 = (state_15612[2]);var state_15612__$1 = state_15612;var statearr_15621_15656 = state_15612__$1;(statearr_15621_15656[2] = inst_15608);
(statearr_15621_15656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 8))
{var inst_15572 = (state_15612[9]);var inst_15571 = (state_15612[10]);var inst_15574 = (inst_15572 < inst_15571);var inst_15575 = inst_15574;var state_15612__$1 = state_15612;if(cljs.core.truth_(inst_15575))
{var statearr_15622_15657 = state_15612__$1;(statearr_15622_15657[1] = 10);
} else
{var statearr_15623_15658 = state_15612__$1;(statearr_15623_15658[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 9))
{var inst_15605 = (state_15612[2]);var state_15612__$1 = (function (){var statearr_15624 = state_15612;(statearr_15624[12] = inst_15605);
return statearr_15624;
})();var statearr_15625_15659 = state_15612__$1;(statearr_15625_15659[2] = null);
(statearr_15625_15659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 10))
{var inst_15570 = (state_15612[8]);var inst_15572 = (state_15612[9]);var inst_15577 = cljs.core._nth.call(null,inst_15570,inst_15572);var state_15612__$1 = state_15612;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15612__$1,13,out,inst_15577);
} else
{if((state_val_15613 === 11))
{var inst_15583 = (state_15612[13]);var inst_15569 = (state_15612[11]);var inst_15583__$1 = cljs.core.seq.call(null,inst_15569);var state_15612__$1 = (function (){var statearr_15629 = state_15612;(statearr_15629[13] = inst_15583__$1);
return statearr_15629;
})();if(inst_15583__$1)
{var statearr_15630_15660 = state_15612__$1;(statearr_15630_15660[1] = 14);
} else
{var statearr_15631_15661 = state_15612__$1;(statearr_15631_15661[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 12))
{var inst_15603 = (state_15612[2]);var state_15612__$1 = state_15612;var statearr_15632_15662 = state_15612__$1;(statearr_15632_15662[2] = inst_15603);
(statearr_15632_15662[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 13))
{var inst_15570 = (state_15612[8]);var inst_15572 = (state_15612[9]);var inst_15571 = (state_15612[10]);var inst_15569 = (state_15612[11]);var inst_15579 = (state_15612[2]);var inst_15580 = (inst_15572 + 1);var tmp15626 = inst_15570;var tmp15627 = inst_15571;var tmp15628 = inst_15569;var inst_15569__$1 = tmp15628;var inst_15570__$1 = tmp15626;var inst_15571__$1 = tmp15627;var inst_15572__$1 = inst_15580;var state_15612__$1 = (function (){var statearr_15633 = state_15612;(statearr_15633[8] = inst_15570__$1);
(statearr_15633[9] = inst_15572__$1);
(statearr_15633[10] = inst_15571__$1);
(statearr_15633[14] = inst_15579);
(statearr_15633[11] = inst_15569__$1);
return statearr_15633;
})();var statearr_15634_15663 = state_15612__$1;(statearr_15634_15663[2] = null);
(statearr_15634_15663[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 14))
{var inst_15583 = (state_15612[13]);var inst_15585 = cljs.core.chunked_seq_QMARK_.call(null,inst_15583);var state_15612__$1 = state_15612;if(inst_15585)
{var statearr_15635_15664 = state_15612__$1;(statearr_15635_15664[1] = 17);
} else
{var statearr_15636_15665 = state_15612__$1;(statearr_15636_15665[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 15))
{var state_15612__$1 = state_15612;var statearr_15637_15666 = state_15612__$1;(statearr_15637_15666[2] = null);
(statearr_15637_15666[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 16))
{var inst_15601 = (state_15612[2]);var state_15612__$1 = state_15612;var statearr_15638_15667 = state_15612__$1;(statearr_15638_15667[2] = inst_15601);
(statearr_15638_15667[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 17))
{var inst_15583 = (state_15612[13]);var inst_15587 = cljs.core.chunk_first.call(null,inst_15583);var inst_15588 = cljs.core.chunk_rest.call(null,inst_15583);var inst_15589 = cljs.core.count.call(null,inst_15587);var inst_15569 = inst_15588;var inst_15570 = inst_15587;var inst_15571 = inst_15589;var inst_15572 = 0;var state_15612__$1 = (function (){var statearr_15639 = state_15612;(statearr_15639[8] = inst_15570);
(statearr_15639[9] = inst_15572);
(statearr_15639[10] = inst_15571);
(statearr_15639[11] = inst_15569);
return statearr_15639;
})();var statearr_15640_15668 = state_15612__$1;(statearr_15640_15668[2] = null);
(statearr_15640_15668[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 18))
{var inst_15583 = (state_15612[13]);var inst_15592 = cljs.core.first.call(null,inst_15583);var state_15612__$1 = state_15612;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15612__$1,20,out,inst_15592);
} else
{if((state_val_15613 === 19))
{var inst_15598 = (state_15612[2]);var state_15612__$1 = state_15612;var statearr_15641_15669 = state_15612__$1;(statearr_15641_15669[2] = inst_15598);
(statearr_15641_15669[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15613 === 20))
{var inst_15583 = (state_15612[13]);var inst_15594 = (state_15612[2]);var inst_15595 = cljs.core.next.call(null,inst_15583);var inst_15569 = inst_15595;var inst_15570 = null;var inst_15571 = 0;var inst_15572 = 0;var state_15612__$1 = (function (){var statearr_15642 = state_15612;(statearr_15642[8] = inst_15570);
(statearr_15642[9] = inst_15572);
(statearr_15642[10] = inst_15571);
(statearr_15642[11] = inst_15569);
(statearr_15642[15] = inst_15594);
return statearr_15642;
})();var statearr_15643_15670 = state_15612__$1;(statearr_15643_15670[2] = null);
(statearr_15643_15670[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_15647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15647[0] = state_machine__5509__auto__);
(statearr_15647[1] = 1);
return statearr_15647;
});
var state_machine__5509__auto____1 = (function (state_15612){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_15612);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e15648){if((e15648 instanceof Object))
{var ex__5512__auto__ = e15648;var statearr_15649_15671 = state_15612;(statearr_15649_15671[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15612);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15672 = state_15612;
state_15612 = G__15672;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_15612){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_15612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_15650 = f__5524__auto__.call(null);(statearr_15650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_15650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5523__auto___15753 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_15732){var state_val_15733 = (state_15732[1]);if((state_val_15733 === 1))
{var state_15732__$1 = state_15732;var statearr_15734_15754 = state_15732__$1;(statearr_15734_15754[2] = null);
(statearr_15734_15754[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15733 === 2))
{var state_15732__$1 = state_15732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15732__$1,4,from);
} else
{if((state_val_15733 === 3))
{var inst_15730 = (state_15732[2]);var state_15732__$1 = state_15732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15732__$1,inst_15730);
} else
{if((state_val_15733 === 4))
{var inst_15715 = (state_15732[7]);var inst_15715__$1 = (state_15732[2]);var inst_15716 = (inst_15715__$1 == null);var state_15732__$1 = (function (){var statearr_15735 = state_15732;(statearr_15735[7] = inst_15715__$1);
return statearr_15735;
})();if(cljs.core.truth_(inst_15716))
{var statearr_15736_15755 = state_15732__$1;(statearr_15736_15755[1] = 5);
} else
{var statearr_15737_15756 = state_15732__$1;(statearr_15737_15756[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15733 === 5))
{var state_15732__$1 = state_15732;if(cljs.core.truth_(close_QMARK_))
{var statearr_15738_15757 = state_15732__$1;(statearr_15738_15757[1] = 8);
} else
{var statearr_15739_15758 = state_15732__$1;(statearr_15739_15758[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15733 === 6))
{var inst_15715 = (state_15732[7]);var state_15732__$1 = state_15732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15732__$1,11,to,inst_15715);
} else
{if((state_val_15733 === 7))
{var inst_15728 = (state_15732[2]);var state_15732__$1 = state_15732;var statearr_15740_15759 = state_15732__$1;(statearr_15740_15759[2] = inst_15728);
(statearr_15740_15759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15733 === 8))
{var inst_15719 = cljs.core.async.close_BANG_.call(null,to);var state_15732__$1 = state_15732;var statearr_15741_15760 = state_15732__$1;(statearr_15741_15760[2] = inst_15719);
(statearr_15741_15760[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15733 === 9))
{var state_15732__$1 = state_15732;var statearr_15742_15761 = state_15732__$1;(statearr_15742_15761[2] = null);
(statearr_15742_15761[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15733 === 10))
{var inst_15722 = (state_15732[2]);var state_15732__$1 = state_15732;var statearr_15743_15762 = state_15732__$1;(statearr_15743_15762[2] = inst_15722);
(statearr_15743_15762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15733 === 11))
{var inst_15725 = (state_15732[2]);var state_15732__$1 = (function (){var statearr_15744 = state_15732;(statearr_15744[8] = inst_15725);
return statearr_15744;
})();var statearr_15745_15763 = state_15732__$1;(statearr_15745_15763[2] = null);
(statearr_15745_15763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_15749 = [null,null,null,null,null,null,null,null,null];(statearr_15749[0] = state_machine__5509__auto__);
(statearr_15749[1] = 1);
return statearr_15749;
});
var state_machine__5509__auto____1 = (function (state_15732){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_15732);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e15750){if((e15750 instanceof Object))
{var ex__5512__auto__ = e15750;var statearr_15751_15764 = state_15732;(statearr_15751_15764[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15732);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15750;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15765 = state_15732;
state_15732 = G__15765;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_15732){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_15732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_15752 = f__5524__auto__.call(null);(statearr_15752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___15753);
return statearr_15752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5523__auto___15852 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_15830){var state_val_15831 = (state_15830[1]);if((state_val_15831 === 1))
{var state_15830__$1 = state_15830;var statearr_15832_15853 = state_15830__$1;(statearr_15832_15853[2] = null);
(statearr_15832_15853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15831 === 2))
{var state_15830__$1 = state_15830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15830__$1,4,ch);
} else
{if((state_val_15831 === 3))
{var inst_15828 = (state_15830[2]);var state_15830__$1 = state_15830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15830__$1,inst_15828);
} else
{if((state_val_15831 === 4))
{var inst_15811 = (state_15830[7]);var inst_15811__$1 = (state_15830[2]);var inst_15812 = (inst_15811__$1 == null);var state_15830__$1 = (function (){var statearr_15833 = state_15830;(statearr_15833[7] = inst_15811__$1);
return statearr_15833;
})();if(cljs.core.truth_(inst_15812))
{var statearr_15834_15854 = state_15830__$1;(statearr_15834_15854[1] = 5);
} else
{var statearr_15835_15855 = state_15830__$1;(statearr_15835_15855[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15831 === 5))
{var inst_15814 = cljs.core.async.close_BANG_.call(null,tc);var inst_15815 = cljs.core.async.close_BANG_.call(null,fc);var state_15830__$1 = (function (){var statearr_15836 = state_15830;(statearr_15836[8] = inst_15814);
return statearr_15836;
})();var statearr_15837_15856 = state_15830__$1;(statearr_15837_15856[2] = inst_15815);
(statearr_15837_15856[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15831 === 6))
{var inst_15811 = (state_15830[7]);var inst_15817 = p.call(null,inst_15811);var state_15830__$1 = state_15830;if(cljs.core.truth_(inst_15817))
{var statearr_15838_15857 = state_15830__$1;(statearr_15838_15857[1] = 9);
} else
{var statearr_15839_15858 = state_15830__$1;(statearr_15839_15858[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15831 === 7))
{var inst_15826 = (state_15830[2]);var state_15830__$1 = state_15830;var statearr_15840_15859 = state_15830__$1;(statearr_15840_15859[2] = inst_15826);
(statearr_15840_15859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15831 === 8))
{var inst_15823 = (state_15830[2]);var state_15830__$1 = (function (){var statearr_15841 = state_15830;(statearr_15841[9] = inst_15823);
return statearr_15841;
})();var statearr_15842_15860 = state_15830__$1;(statearr_15842_15860[2] = null);
(statearr_15842_15860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15831 === 9))
{var state_15830__$1 = state_15830;var statearr_15843_15861 = state_15830__$1;(statearr_15843_15861[2] = tc);
(statearr_15843_15861[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15831 === 10))
{var state_15830__$1 = state_15830;var statearr_15844_15862 = state_15830__$1;(statearr_15844_15862[2] = fc);
(statearr_15844_15862[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15831 === 11))
{var inst_15811 = (state_15830[7]);var inst_15821 = (state_15830[2]);var state_15830__$1 = state_15830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15830__$1,8,inst_15821,inst_15811);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_15848 = [null,null,null,null,null,null,null,null,null,null];(statearr_15848[0] = state_machine__5509__auto__);
(statearr_15848[1] = 1);
return statearr_15848;
});
var state_machine__5509__auto____1 = (function (state_15830){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_15830);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e15849){if((e15849 instanceof Object))
{var ex__5512__auto__ = e15849;var statearr_15850_15863 = state_15830;(statearr_15850_15863[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15864 = state_15830;
state_15830 = G__15864;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_15830){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_15830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_15851 = f__5524__auto__.call(null);(statearr_15851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___15852);
return statearr_15851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_15911){var state_val_15912 = (state_15911[1]);if((state_val_15912 === 7))
{var inst_15907 = (state_15911[2]);var state_15911__$1 = state_15911;var statearr_15913_15929 = state_15911__$1;(statearr_15913_15929[2] = inst_15907);
(statearr_15913_15929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 6))
{var inst_15897 = (state_15911[7]);var inst_15900 = (state_15911[8]);var inst_15904 = f.call(null,inst_15897,inst_15900);var inst_15897__$1 = inst_15904;var state_15911__$1 = (function (){var statearr_15914 = state_15911;(statearr_15914[7] = inst_15897__$1);
return statearr_15914;
})();var statearr_15915_15930 = state_15911__$1;(statearr_15915_15930[2] = null);
(statearr_15915_15930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 5))
{var inst_15897 = (state_15911[7]);var state_15911__$1 = state_15911;var statearr_15916_15931 = state_15911__$1;(statearr_15916_15931[2] = inst_15897);
(statearr_15916_15931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 4))
{var inst_15900 = (state_15911[8]);var inst_15900__$1 = (state_15911[2]);var inst_15901 = (inst_15900__$1 == null);var state_15911__$1 = (function (){var statearr_15917 = state_15911;(statearr_15917[8] = inst_15900__$1);
return statearr_15917;
})();if(cljs.core.truth_(inst_15901))
{var statearr_15918_15932 = state_15911__$1;(statearr_15918_15932[1] = 5);
} else
{var statearr_15919_15933 = state_15911__$1;(statearr_15919_15933[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 3))
{var inst_15909 = (state_15911[2]);var state_15911__$1 = state_15911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15911__$1,inst_15909);
} else
{if((state_val_15912 === 2))
{var state_15911__$1 = state_15911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15911__$1,4,ch);
} else
{if((state_val_15912 === 1))
{var inst_15897 = init;var state_15911__$1 = (function (){var statearr_15920 = state_15911;(statearr_15920[7] = inst_15897);
return statearr_15920;
})();var statearr_15921_15934 = state_15911__$1;(statearr_15921_15934[2] = null);
(statearr_15921_15934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_15925 = [null,null,null,null,null,null,null,null,null];(statearr_15925[0] = state_machine__5509__auto__);
(statearr_15925[1] = 1);
return statearr_15925;
});
var state_machine__5509__auto____1 = (function (state_15911){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_15911);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e15926){if((e15926 instanceof Object))
{var ex__5512__auto__ = e15926;var statearr_15927_15935 = state_15911;(statearr_15927_15935[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15936 = state_15911;
state_15911 = G__15936;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_15911){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_15911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_15928 = f__5524__auto__.call(null);(statearr_15928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_15928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_15998){var state_val_15999 = (state_15998[1]);if((state_val_15999 === 1))
{var inst_15978 = cljs.core.seq.call(null,coll);var inst_15979 = inst_15978;var state_15998__$1 = (function (){var statearr_16000 = state_15998;(statearr_16000[7] = inst_15979);
return statearr_16000;
})();var statearr_16001_16019 = state_15998__$1;(statearr_16001_16019[2] = null);
(statearr_16001_16019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 2))
{var inst_15979 = (state_15998[7]);var state_15998__$1 = state_15998;if(cljs.core.truth_(inst_15979))
{var statearr_16002_16020 = state_15998__$1;(statearr_16002_16020[1] = 4);
} else
{var statearr_16003_16021 = state_15998__$1;(statearr_16003_16021[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 3))
{var inst_15996 = (state_15998[2]);var state_15998__$1 = state_15998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15998__$1,inst_15996);
} else
{if((state_val_15999 === 4))
{var inst_15979 = (state_15998[7]);var inst_15982 = cljs.core.first.call(null,inst_15979);var state_15998__$1 = state_15998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15998__$1,7,ch,inst_15982);
} else
{if((state_val_15999 === 5))
{var state_15998__$1 = state_15998;if(cljs.core.truth_(close_QMARK_))
{var statearr_16004_16022 = state_15998__$1;(statearr_16004_16022[1] = 8);
} else
{var statearr_16005_16023 = state_15998__$1;(statearr_16005_16023[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 6))
{var inst_15994 = (state_15998[2]);var state_15998__$1 = state_15998;var statearr_16006_16024 = state_15998__$1;(statearr_16006_16024[2] = inst_15994);
(statearr_16006_16024[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 7))
{var inst_15979 = (state_15998[7]);var inst_15984 = (state_15998[2]);var inst_15985 = cljs.core.next.call(null,inst_15979);var inst_15979__$1 = inst_15985;var state_15998__$1 = (function (){var statearr_16007 = state_15998;(statearr_16007[7] = inst_15979__$1);
(statearr_16007[8] = inst_15984);
return statearr_16007;
})();var statearr_16008_16025 = state_15998__$1;(statearr_16008_16025[2] = null);
(statearr_16008_16025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 8))
{var inst_15989 = cljs.core.async.close_BANG_.call(null,ch);var state_15998__$1 = state_15998;var statearr_16009_16026 = state_15998__$1;(statearr_16009_16026[2] = inst_15989);
(statearr_16009_16026[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 9))
{var state_15998__$1 = state_15998;var statearr_16010_16027 = state_15998__$1;(statearr_16010_16027[2] = null);
(statearr_16010_16027[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 10))
{var inst_15992 = (state_15998[2]);var state_15998__$1 = state_15998;var statearr_16011_16028 = state_15998__$1;(statearr_16011_16028[2] = inst_15992);
(statearr_16011_16028[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_16015 = [null,null,null,null,null,null,null,null,null];(statearr_16015[0] = state_machine__5509__auto__);
(statearr_16015[1] = 1);
return statearr_16015;
});
var state_machine__5509__auto____1 = (function (state_15998){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_15998);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e16016){if((e16016 instanceof Object))
{var ex__5512__auto__ = e16016;var statearr_16017_16029 = state_15998;(statearr_16017_16029[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16030 = state_15998;
state_15998 = G__16030;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_15998){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_15998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_16018 = f__5524__auto__.call(null);(statearr_16018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_16018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16032 = {};return obj16032;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16034 = {};return obj16034;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16258 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16258 = (function (cs,ch,mult,meta16259){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16259 = meta16259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16258.cljs$lang$type = true;
cljs.core.async.t16258.cljs$lang$ctorStr = "cljs.core.async/t16258";
cljs.core.async.t16258.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t16258");
});})(cs))
;
cljs.core.async.t16258.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16258.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16258.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16258.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16258.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16260){var self__ = this;
var _16260__$1 = this;return self__.meta16259;
});})(cs))
;
cljs.core.async.t16258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16260,meta16259__$1){var self__ = this;
var _16260__$1 = this;return (new cljs.core.async.t16258(self__.cs,self__.ch,self__.mult,meta16259__$1));
});})(cs))
;
cljs.core.async.__GT_t16258 = ((function (cs){
return (function __GT_t16258(cs__$1,ch__$1,mult__$1,meta16259){return (new cljs.core.async.t16258(cs__$1,ch__$1,mult__$1,meta16259));
});})(cs))
;
}
return (new cljs.core.async.t16258(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5523__auto___16481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_16395){var state_val_16396 = (state_16395[1]);if((state_val_16396 === 32))
{var inst_16263 = (state_16395[7]);var inst_16339 = (state_16395[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16395,31,Object,null,30);var inst_16346 = cljs.core.async.put_BANG_.call(null,inst_16339,inst_16263,done);var state_16395__$1 = state_16395;var statearr_16397_16482 = state_16395__$1;(statearr_16397_16482[2] = inst_16346);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16395__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 1))
{var state_16395__$1 = state_16395;var statearr_16398_16483 = state_16395__$1;(statearr_16398_16483[2] = null);
(statearr_16398_16483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 33))
{var inst_16352 = (state_16395[9]);var inst_16354 = cljs.core.chunked_seq_QMARK_.call(null,inst_16352);var state_16395__$1 = state_16395;if(inst_16354)
{var statearr_16399_16484 = state_16395__$1;(statearr_16399_16484[1] = 36);
} else
{var statearr_16400_16485 = state_16395__$1;(statearr_16400_16485[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 2))
{var state_16395__$1 = state_16395;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16395__$1,4,ch);
} else
{if((state_val_16396 === 34))
{var state_16395__$1 = state_16395;var statearr_16401_16486 = state_16395__$1;(statearr_16401_16486[2] = null);
(statearr_16401_16486[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 3))
{var inst_16393 = (state_16395[2]);var state_16395__$1 = state_16395;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16395__$1,inst_16393);
} else
{if((state_val_16396 === 35))
{var inst_16377 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16402_16487 = state_16395__$1;(statearr_16402_16487[2] = inst_16377);
(statearr_16402_16487[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 4))
{var inst_16263 = (state_16395[7]);var inst_16263__$1 = (state_16395[2]);var inst_16264 = (inst_16263__$1 == null);var state_16395__$1 = (function (){var statearr_16403 = state_16395;(statearr_16403[7] = inst_16263__$1);
return statearr_16403;
})();if(cljs.core.truth_(inst_16264))
{var statearr_16404_16488 = state_16395__$1;(statearr_16404_16488[1] = 5);
} else
{var statearr_16405_16489 = state_16395__$1;(statearr_16405_16489[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 36))
{var inst_16352 = (state_16395[9]);var inst_16356 = cljs.core.chunk_first.call(null,inst_16352);var inst_16357 = cljs.core.chunk_rest.call(null,inst_16352);var inst_16358 = cljs.core.count.call(null,inst_16356);var inst_16331 = inst_16357;var inst_16332 = inst_16356;var inst_16333 = inst_16358;var inst_16334 = 0;var state_16395__$1 = (function (){var statearr_16406 = state_16395;(statearr_16406[10] = inst_16334);
(statearr_16406[11] = inst_16332);
(statearr_16406[12] = inst_16333);
(statearr_16406[13] = inst_16331);
return statearr_16406;
})();var statearr_16407_16490 = state_16395__$1;(statearr_16407_16490[2] = null);
(statearr_16407_16490[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 5))
{var inst_16270 = cljs.core.deref.call(null,cs);var inst_16271 = cljs.core.seq.call(null,inst_16270);var inst_16272 = inst_16271;var inst_16273 = null;var inst_16274 = 0;var inst_16275 = 0;var state_16395__$1 = (function (){var statearr_16408 = state_16395;(statearr_16408[14] = inst_16274);
(statearr_16408[15] = inst_16273);
(statearr_16408[16] = inst_16275);
(statearr_16408[17] = inst_16272);
return statearr_16408;
})();var statearr_16409_16491 = state_16395__$1;(statearr_16409_16491[2] = null);
(statearr_16409_16491[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 37))
{var inst_16352 = (state_16395[9]);var inst_16361 = cljs.core.first.call(null,inst_16352);var state_16395__$1 = (function (){var statearr_16410 = state_16395;(statearr_16410[18] = inst_16361);
return statearr_16410;
})();var statearr_16411_16492 = state_16395__$1;(statearr_16411_16492[2] = null);
(statearr_16411_16492[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 6))
{var inst_16323 = (state_16395[19]);var inst_16322 = cljs.core.deref.call(null,cs);var inst_16323__$1 = cljs.core.keys.call(null,inst_16322);var inst_16324 = cljs.core.count.call(null,inst_16323__$1);var inst_16325 = cljs.core.reset_BANG_.call(null,dctr,inst_16324);var inst_16330 = cljs.core.seq.call(null,inst_16323__$1);var inst_16331 = inst_16330;var inst_16332 = null;var inst_16333 = 0;var inst_16334 = 0;var state_16395__$1 = (function (){var statearr_16412 = state_16395;(statearr_16412[19] = inst_16323__$1);
(statearr_16412[10] = inst_16334);
(statearr_16412[11] = inst_16332);
(statearr_16412[12] = inst_16333);
(statearr_16412[13] = inst_16331);
(statearr_16412[20] = inst_16325);
return statearr_16412;
})();var statearr_16413_16493 = state_16395__$1;(statearr_16413_16493[2] = null);
(statearr_16413_16493[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 38))
{var inst_16374 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16414_16494 = state_16395__$1;(statearr_16414_16494[2] = inst_16374);
(statearr_16414_16494[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 7))
{var inst_16391 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16415_16495 = state_16395__$1;(statearr_16415_16495[2] = inst_16391);
(statearr_16415_16495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 39))
{var inst_16352 = (state_16395[9]);var inst_16370 = (state_16395[2]);var inst_16371 = cljs.core.next.call(null,inst_16352);var inst_16331 = inst_16371;var inst_16332 = null;var inst_16333 = 0;var inst_16334 = 0;var state_16395__$1 = (function (){var statearr_16416 = state_16395;(statearr_16416[21] = inst_16370);
(statearr_16416[10] = inst_16334);
(statearr_16416[11] = inst_16332);
(statearr_16416[12] = inst_16333);
(statearr_16416[13] = inst_16331);
return statearr_16416;
})();var statearr_16417_16496 = state_16395__$1;(statearr_16417_16496[2] = null);
(statearr_16417_16496[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 8))
{var inst_16274 = (state_16395[14]);var inst_16275 = (state_16395[16]);var inst_16277 = (inst_16275 < inst_16274);var inst_16278 = inst_16277;var state_16395__$1 = state_16395;if(cljs.core.truth_(inst_16278))
{var statearr_16418_16497 = state_16395__$1;(statearr_16418_16497[1] = 10);
} else
{var statearr_16419_16498 = state_16395__$1;(statearr_16419_16498[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 40))
{var inst_16361 = (state_16395[18]);var inst_16362 = (state_16395[2]);var inst_16363 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16364 = cljs.core.async.untap_STAR_.call(null,m,inst_16361);var state_16395__$1 = (function (){var statearr_16420 = state_16395;(statearr_16420[22] = inst_16362);
(statearr_16420[23] = inst_16363);
return statearr_16420;
})();var statearr_16421_16499 = state_16395__$1;(statearr_16421_16499[2] = inst_16364);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16395__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 9))
{var inst_16320 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16422_16500 = state_16395__$1;(statearr_16422_16500[2] = inst_16320);
(statearr_16422_16500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 41))
{var inst_16263 = (state_16395[7]);var inst_16361 = (state_16395[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16395,40,Object,null,39);var inst_16368 = cljs.core.async.put_BANG_.call(null,inst_16361,inst_16263,done);var state_16395__$1 = state_16395;var statearr_16423_16501 = state_16395__$1;(statearr_16423_16501[2] = inst_16368);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16395__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 10))
{var inst_16273 = (state_16395[15]);var inst_16275 = (state_16395[16]);var inst_16281 = cljs.core._nth.call(null,inst_16273,inst_16275);var inst_16282 = cljs.core.nth.call(null,inst_16281,0,null);var inst_16283 = cljs.core.nth.call(null,inst_16281,1,null);var state_16395__$1 = (function (){var statearr_16424 = state_16395;(statearr_16424[24] = inst_16282);
return statearr_16424;
})();if(cljs.core.truth_(inst_16283))
{var statearr_16425_16502 = state_16395__$1;(statearr_16425_16502[1] = 13);
} else
{var statearr_16426_16503 = state_16395__$1;(statearr_16426_16503[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 42))
{var state_16395__$1 = state_16395;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16395__$1,45,dchan);
} else
{if((state_val_16396 === 11))
{var inst_16292 = (state_16395[25]);var inst_16272 = (state_16395[17]);var inst_16292__$1 = cljs.core.seq.call(null,inst_16272);var state_16395__$1 = (function (){var statearr_16427 = state_16395;(statearr_16427[25] = inst_16292__$1);
return statearr_16427;
})();if(inst_16292__$1)
{var statearr_16428_16504 = state_16395__$1;(statearr_16428_16504[1] = 16);
} else
{var statearr_16429_16505 = state_16395__$1;(statearr_16429_16505[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 43))
{var state_16395__$1 = state_16395;var statearr_16430_16506 = state_16395__$1;(statearr_16430_16506[2] = null);
(statearr_16430_16506[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 12))
{var inst_16318 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16431_16507 = state_16395__$1;(statearr_16431_16507[2] = inst_16318);
(statearr_16431_16507[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 44))
{var inst_16388 = (state_16395[2]);var state_16395__$1 = (function (){var statearr_16432 = state_16395;(statearr_16432[26] = inst_16388);
return statearr_16432;
})();var statearr_16433_16508 = state_16395__$1;(statearr_16433_16508[2] = null);
(statearr_16433_16508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 13))
{var inst_16282 = (state_16395[24]);var inst_16285 = cljs.core.async.close_BANG_.call(null,inst_16282);var state_16395__$1 = state_16395;var statearr_16434_16509 = state_16395__$1;(statearr_16434_16509[2] = inst_16285);
(statearr_16434_16509[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 45))
{var inst_16385 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16438_16510 = state_16395__$1;(statearr_16438_16510[2] = inst_16385);
(statearr_16438_16510[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 14))
{var state_16395__$1 = state_16395;var statearr_16439_16511 = state_16395__$1;(statearr_16439_16511[2] = null);
(statearr_16439_16511[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 15))
{var inst_16274 = (state_16395[14]);var inst_16273 = (state_16395[15]);var inst_16275 = (state_16395[16]);var inst_16272 = (state_16395[17]);var inst_16288 = (state_16395[2]);var inst_16289 = (inst_16275 + 1);var tmp16435 = inst_16274;var tmp16436 = inst_16273;var tmp16437 = inst_16272;var inst_16272__$1 = tmp16437;var inst_16273__$1 = tmp16436;var inst_16274__$1 = tmp16435;var inst_16275__$1 = inst_16289;var state_16395__$1 = (function (){var statearr_16440 = state_16395;(statearr_16440[14] = inst_16274__$1);
(statearr_16440[15] = inst_16273__$1);
(statearr_16440[16] = inst_16275__$1);
(statearr_16440[27] = inst_16288);
(statearr_16440[17] = inst_16272__$1);
return statearr_16440;
})();var statearr_16441_16512 = state_16395__$1;(statearr_16441_16512[2] = null);
(statearr_16441_16512[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 16))
{var inst_16292 = (state_16395[25]);var inst_16294 = cljs.core.chunked_seq_QMARK_.call(null,inst_16292);var state_16395__$1 = state_16395;if(inst_16294)
{var statearr_16442_16513 = state_16395__$1;(statearr_16442_16513[1] = 19);
} else
{var statearr_16443_16514 = state_16395__$1;(statearr_16443_16514[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 17))
{var state_16395__$1 = state_16395;var statearr_16444_16515 = state_16395__$1;(statearr_16444_16515[2] = null);
(statearr_16444_16515[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 18))
{var inst_16316 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16445_16516 = state_16395__$1;(statearr_16445_16516[2] = inst_16316);
(statearr_16445_16516[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 19))
{var inst_16292 = (state_16395[25]);var inst_16296 = cljs.core.chunk_first.call(null,inst_16292);var inst_16297 = cljs.core.chunk_rest.call(null,inst_16292);var inst_16298 = cljs.core.count.call(null,inst_16296);var inst_16272 = inst_16297;var inst_16273 = inst_16296;var inst_16274 = inst_16298;var inst_16275 = 0;var state_16395__$1 = (function (){var statearr_16446 = state_16395;(statearr_16446[14] = inst_16274);
(statearr_16446[15] = inst_16273);
(statearr_16446[16] = inst_16275);
(statearr_16446[17] = inst_16272);
return statearr_16446;
})();var statearr_16447_16517 = state_16395__$1;(statearr_16447_16517[2] = null);
(statearr_16447_16517[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 20))
{var inst_16292 = (state_16395[25]);var inst_16302 = cljs.core.first.call(null,inst_16292);var inst_16303 = cljs.core.nth.call(null,inst_16302,0,null);var inst_16304 = cljs.core.nth.call(null,inst_16302,1,null);var state_16395__$1 = (function (){var statearr_16448 = state_16395;(statearr_16448[28] = inst_16303);
return statearr_16448;
})();if(cljs.core.truth_(inst_16304))
{var statearr_16449_16518 = state_16395__$1;(statearr_16449_16518[1] = 22);
} else
{var statearr_16450_16519 = state_16395__$1;(statearr_16450_16519[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 21))
{var inst_16313 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16451_16520 = state_16395__$1;(statearr_16451_16520[2] = inst_16313);
(statearr_16451_16520[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 22))
{var inst_16303 = (state_16395[28]);var inst_16306 = cljs.core.async.close_BANG_.call(null,inst_16303);var state_16395__$1 = state_16395;var statearr_16452_16521 = state_16395__$1;(statearr_16452_16521[2] = inst_16306);
(statearr_16452_16521[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 23))
{var state_16395__$1 = state_16395;var statearr_16453_16522 = state_16395__$1;(statearr_16453_16522[2] = null);
(statearr_16453_16522[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 24))
{var inst_16292 = (state_16395[25]);var inst_16309 = (state_16395[2]);var inst_16310 = cljs.core.next.call(null,inst_16292);var inst_16272 = inst_16310;var inst_16273 = null;var inst_16274 = 0;var inst_16275 = 0;var state_16395__$1 = (function (){var statearr_16454 = state_16395;(statearr_16454[29] = inst_16309);
(statearr_16454[14] = inst_16274);
(statearr_16454[15] = inst_16273);
(statearr_16454[16] = inst_16275);
(statearr_16454[17] = inst_16272);
return statearr_16454;
})();var statearr_16455_16523 = state_16395__$1;(statearr_16455_16523[2] = null);
(statearr_16455_16523[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 25))
{var inst_16334 = (state_16395[10]);var inst_16333 = (state_16395[12]);var inst_16336 = (inst_16334 < inst_16333);var inst_16337 = inst_16336;var state_16395__$1 = state_16395;if(cljs.core.truth_(inst_16337))
{var statearr_16456_16524 = state_16395__$1;(statearr_16456_16524[1] = 27);
} else
{var statearr_16457_16525 = state_16395__$1;(statearr_16457_16525[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 26))
{var inst_16323 = (state_16395[19]);var inst_16381 = (state_16395[2]);var inst_16382 = cljs.core.seq.call(null,inst_16323);var state_16395__$1 = (function (){var statearr_16458 = state_16395;(statearr_16458[30] = inst_16381);
return statearr_16458;
})();if(inst_16382)
{var statearr_16459_16526 = state_16395__$1;(statearr_16459_16526[1] = 42);
} else
{var statearr_16460_16527 = state_16395__$1;(statearr_16460_16527[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 27))
{var inst_16334 = (state_16395[10]);var inst_16332 = (state_16395[11]);var inst_16339 = cljs.core._nth.call(null,inst_16332,inst_16334);var state_16395__$1 = (function (){var statearr_16461 = state_16395;(statearr_16461[8] = inst_16339);
return statearr_16461;
})();var statearr_16462_16528 = state_16395__$1;(statearr_16462_16528[2] = null);
(statearr_16462_16528[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 28))
{var inst_16352 = (state_16395[9]);var inst_16331 = (state_16395[13]);var inst_16352__$1 = cljs.core.seq.call(null,inst_16331);var state_16395__$1 = (function (){var statearr_16466 = state_16395;(statearr_16466[9] = inst_16352__$1);
return statearr_16466;
})();if(inst_16352__$1)
{var statearr_16467_16529 = state_16395__$1;(statearr_16467_16529[1] = 33);
} else
{var statearr_16468_16530 = state_16395__$1;(statearr_16468_16530[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 29))
{var inst_16379 = (state_16395[2]);var state_16395__$1 = state_16395;var statearr_16469_16531 = state_16395__$1;(statearr_16469_16531[2] = inst_16379);
(statearr_16469_16531[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 30))
{var inst_16334 = (state_16395[10]);var inst_16332 = (state_16395[11]);var inst_16333 = (state_16395[12]);var inst_16331 = (state_16395[13]);var inst_16348 = (state_16395[2]);var inst_16349 = (inst_16334 + 1);var tmp16463 = inst_16332;var tmp16464 = inst_16333;var tmp16465 = inst_16331;var inst_16331__$1 = tmp16465;var inst_16332__$1 = tmp16463;var inst_16333__$1 = tmp16464;var inst_16334__$1 = inst_16349;var state_16395__$1 = (function (){var statearr_16470 = state_16395;(statearr_16470[31] = inst_16348);
(statearr_16470[10] = inst_16334__$1);
(statearr_16470[11] = inst_16332__$1);
(statearr_16470[12] = inst_16333__$1);
(statearr_16470[13] = inst_16331__$1);
return statearr_16470;
})();var statearr_16471_16532 = state_16395__$1;(statearr_16471_16532[2] = null);
(statearr_16471_16532[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16396 === 31))
{var inst_16339 = (state_16395[8]);var inst_16340 = (state_16395[2]);var inst_16341 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16342 = cljs.core.async.untap_STAR_.call(null,m,inst_16339);var state_16395__$1 = (function (){var statearr_16472 = state_16395;(statearr_16472[32] = inst_16340);
(statearr_16472[33] = inst_16341);
return statearr_16472;
})();var statearr_16473_16533 = state_16395__$1;(statearr_16473_16533[2] = inst_16342);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16395__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_16477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16477[0] = state_machine__5509__auto__);
(statearr_16477[1] = 1);
return statearr_16477;
});
var state_machine__5509__auto____1 = (function (state_16395){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_16395);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e16478){if((e16478 instanceof Object))
{var ex__5512__auto__ = e16478;var statearr_16479_16534 = state_16395;(statearr_16479_16534[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16395);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16535 = state_16395;
state_16395 = G__16535;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_16395){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_16395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_16480 = f__5524__auto__.call(null);(statearr_16480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___16481);
return statearr_16480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16537 = {};return obj16537;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16647 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16647 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16648){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta16648 = meta16648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16647.cljs$lang$type = true;
cljs.core.async.t16647.cljs$lang$ctorStr = "cljs.core.async/t16647";
cljs.core.async.t16647.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t16647");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16647.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16647.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16647.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16647.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16647.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16647.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16647.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16649){var self__ = this;
var _16649__$1 = this;return self__.meta16648;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16649,meta16648__$1){var self__ = this;
var _16649__$1 = this;return (new cljs.core.async.t16647(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16648__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16647 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16647(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16648){return (new cljs.core.async.t16647(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16648));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16647(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5523__auto___16756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_16714){var state_val_16715 = (state_16714[1]);if((state_val_16715 === 1))
{var inst_16653 = (state_16714[7]);var inst_16653__$1 = calc_state.call(null);var inst_16654 = cljs.core.seq_QMARK_.call(null,inst_16653__$1);var state_16714__$1 = (function (){var statearr_16716 = state_16714;(statearr_16716[7] = inst_16653__$1);
return statearr_16716;
})();if(inst_16654)
{var statearr_16717_16757 = state_16714__$1;(statearr_16717_16757[1] = 2);
} else
{var statearr_16718_16758 = state_16714__$1;(statearr_16718_16758[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 2))
{var inst_16653 = (state_16714[7]);var inst_16656 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16653);var state_16714__$1 = state_16714;var statearr_16719_16759 = state_16714__$1;(statearr_16719_16759[2] = inst_16656);
(statearr_16719_16759[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 3))
{var inst_16653 = (state_16714[7]);var state_16714__$1 = state_16714;var statearr_16720_16760 = state_16714__$1;(statearr_16720_16760[2] = inst_16653);
(statearr_16720_16760[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 4))
{var inst_16653 = (state_16714[7]);var inst_16659 = (state_16714[2]);var inst_16660 = cljs.core.get.call(null,inst_16659,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16661 = cljs.core.get.call(null,inst_16659,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16662 = cljs.core.get.call(null,inst_16659,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16663 = inst_16653;var state_16714__$1 = (function (){var statearr_16721 = state_16714;(statearr_16721[8] = inst_16662);
(statearr_16721[9] = inst_16663);
(statearr_16721[10] = inst_16661);
(statearr_16721[11] = inst_16660);
return statearr_16721;
})();var statearr_16722_16761 = state_16714__$1;(statearr_16722_16761[2] = null);
(statearr_16722_16761[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 5))
{var inst_16663 = (state_16714[9]);var inst_16666 = cljs.core.seq_QMARK_.call(null,inst_16663);var state_16714__$1 = state_16714;if(inst_16666)
{var statearr_16723_16762 = state_16714__$1;(statearr_16723_16762[1] = 7);
} else
{var statearr_16724_16763 = state_16714__$1;(statearr_16724_16763[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 6))
{var inst_16712 = (state_16714[2]);var state_16714__$1 = state_16714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16714__$1,inst_16712);
} else
{if((state_val_16715 === 7))
{var inst_16663 = (state_16714[9]);var inst_16668 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16663);var state_16714__$1 = state_16714;var statearr_16725_16764 = state_16714__$1;(statearr_16725_16764[2] = inst_16668);
(statearr_16725_16764[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 8))
{var inst_16663 = (state_16714[9]);var state_16714__$1 = state_16714;var statearr_16726_16765 = state_16714__$1;(statearr_16726_16765[2] = inst_16663);
(statearr_16726_16765[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 9))
{var inst_16671 = (state_16714[12]);var inst_16671__$1 = (state_16714[2]);var inst_16672 = cljs.core.get.call(null,inst_16671__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16673 = cljs.core.get.call(null,inst_16671__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16674 = cljs.core.get.call(null,inst_16671__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16714__$1 = (function (){var statearr_16727 = state_16714;(statearr_16727[13] = inst_16673);
(statearr_16727[14] = inst_16674);
(statearr_16727[12] = inst_16671__$1);
return statearr_16727;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16714__$1,10,inst_16672);
} else
{if((state_val_16715 === 10))
{var inst_16679 = (state_16714[15]);var inst_16678 = (state_16714[16]);var inst_16677 = (state_16714[2]);var inst_16678__$1 = cljs.core.nth.call(null,inst_16677,0,null);var inst_16679__$1 = cljs.core.nth.call(null,inst_16677,1,null);var inst_16680 = (inst_16678__$1 == null);var inst_16681 = cljs.core._EQ_.call(null,inst_16679__$1,change);var inst_16682 = (inst_16680) || (inst_16681);var state_16714__$1 = (function (){var statearr_16728 = state_16714;(statearr_16728[15] = inst_16679__$1);
(statearr_16728[16] = inst_16678__$1);
return statearr_16728;
})();if(cljs.core.truth_(inst_16682))
{var statearr_16729_16766 = state_16714__$1;(statearr_16729_16766[1] = 11);
} else
{var statearr_16730_16767 = state_16714__$1;(statearr_16730_16767[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 11))
{var inst_16678 = (state_16714[16]);var inst_16684 = (inst_16678 == null);var state_16714__$1 = state_16714;if(cljs.core.truth_(inst_16684))
{var statearr_16731_16768 = state_16714__$1;(statearr_16731_16768[1] = 14);
} else
{var statearr_16732_16769 = state_16714__$1;(statearr_16732_16769[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 12))
{var inst_16679 = (state_16714[15]);var inst_16674 = (state_16714[14]);var inst_16693 = (state_16714[17]);var inst_16693__$1 = inst_16674.call(null,inst_16679);var state_16714__$1 = (function (){var statearr_16733 = state_16714;(statearr_16733[17] = inst_16693__$1);
return statearr_16733;
})();if(cljs.core.truth_(inst_16693__$1))
{var statearr_16734_16770 = state_16714__$1;(statearr_16734_16770[1] = 17);
} else
{var statearr_16735_16771 = state_16714__$1;(statearr_16735_16771[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 13))
{var inst_16710 = (state_16714[2]);var state_16714__$1 = state_16714;var statearr_16736_16772 = state_16714__$1;(statearr_16736_16772[2] = inst_16710);
(statearr_16736_16772[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 14))
{var inst_16679 = (state_16714[15]);var inst_16686 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16679);var state_16714__$1 = state_16714;var statearr_16737_16773 = state_16714__$1;(statearr_16737_16773[2] = inst_16686);
(statearr_16737_16773[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 15))
{var state_16714__$1 = state_16714;var statearr_16738_16774 = state_16714__$1;(statearr_16738_16774[2] = null);
(statearr_16738_16774[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 16))
{var inst_16689 = (state_16714[2]);var inst_16690 = calc_state.call(null);var inst_16663 = inst_16690;var state_16714__$1 = (function (){var statearr_16739 = state_16714;(statearr_16739[9] = inst_16663);
(statearr_16739[18] = inst_16689);
return statearr_16739;
})();var statearr_16740_16775 = state_16714__$1;(statearr_16740_16775[2] = null);
(statearr_16740_16775[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 17))
{var inst_16693 = (state_16714[17]);var state_16714__$1 = state_16714;var statearr_16741_16776 = state_16714__$1;(statearr_16741_16776[2] = inst_16693);
(statearr_16741_16776[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 18))
{var inst_16679 = (state_16714[15]);var inst_16673 = (state_16714[13]);var inst_16674 = (state_16714[14]);var inst_16696 = cljs.core.empty_QMARK_.call(null,inst_16674);var inst_16697 = inst_16673.call(null,inst_16679);var inst_16698 = cljs.core.not.call(null,inst_16697);var inst_16699 = (inst_16696) && (inst_16698);var state_16714__$1 = state_16714;var statearr_16742_16777 = state_16714__$1;(statearr_16742_16777[2] = inst_16699);
(statearr_16742_16777[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 19))
{var inst_16701 = (state_16714[2]);var state_16714__$1 = state_16714;if(cljs.core.truth_(inst_16701))
{var statearr_16743_16778 = state_16714__$1;(statearr_16743_16778[1] = 20);
} else
{var statearr_16744_16779 = state_16714__$1;(statearr_16744_16779[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 20))
{var inst_16678 = (state_16714[16]);var state_16714__$1 = state_16714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16714__$1,23,out,inst_16678);
} else
{if((state_val_16715 === 21))
{var state_16714__$1 = state_16714;var statearr_16745_16780 = state_16714__$1;(statearr_16745_16780[2] = null);
(statearr_16745_16780[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 22))
{var inst_16671 = (state_16714[12]);var inst_16707 = (state_16714[2]);var inst_16663 = inst_16671;var state_16714__$1 = (function (){var statearr_16746 = state_16714;(statearr_16746[9] = inst_16663);
(statearr_16746[19] = inst_16707);
return statearr_16746;
})();var statearr_16747_16781 = state_16714__$1;(statearr_16747_16781[2] = null);
(statearr_16747_16781[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16715 === 23))
{var inst_16704 = (state_16714[2]);var state_16714__$1 = state_16714;var statearr_16748_16782 = state_16714__$1;(statearr_16748_16782[2] = inst_16704);
(statearr_16748_16782[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_16752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16752[0] = state_machine__5509__auto__);
(statearr_16752[1] = 1);
return statearr_16752;
});
var state_machine__5509__auto____1 = (function (state_16714){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_16714);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e16753){if((e16753 instanceof Object))
{var ex__5512__auto__ = e16753;var statearr_16754_16783 = state_16714;(statearr_16754_16783[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16784 = state_16714;
state_16714 = G__16784;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_16714){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_16714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_16755 = f__5524__auto__.call(null);(statearr_16755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___16756);
return statearr_16755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16786 = {};return obj16786;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__16787_SHARP_){if(cljs.core.truth_(p1__16787_SHARP_.call(null,topic)))
{return p1__16787_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16787_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16912 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16913){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16913 = meta16913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16912.cljs$lang$type = true;
cljs.core.async.t16912.cljs$lang$ctorStr = "cljs.core.async/t16912";
cljs.core.async.t16912.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t16912");
});})(mults,ensure_mult))
;
cljs.core.async.t16912.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16912.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16912.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16912.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16912.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16912.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16914){var self__ = this;
var _16914__$1 = this;return self__.meta16913;
});})(mults,ensure_mult))
;
cljs.core.async.t16912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16914,meta16913__$1){var self__ = this;
var _16914__$1 = this;return (new cljs.core.async.t16912(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16913__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16912 = ((function (mults,ensure_mult){
return (function __GT_t16912(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16913){return (new cljs.core.async.t16912(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16913));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16912(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5523__auto___17036 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_16988){var state_val_16989 = (state_16988[1]);if((state_val_16989 === 1))
{var state_16988__$1 = state_16988;var statearr_16990_17037 = state_16988__$1;(statearr_16990_17037[2] = null);
(statearr_16990_17037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 2))
{var state_16988__$1 = state_16988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16988__$1,4,ch);
} else
{if((state_val_16989 === 3))
{var inst_16986 = (state_16988[2]);var state_16988__$1 = state_16988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16988__$1,inst_16986);
} else
{if((state_val_16989 === 4))
{var inst_16917 = (state_16988[7]);var inst_16917__$1 = (state_16988[2]);var inst_16918 = (inst_16917__$1 == null);var state_16988__$1 = (function (){var statearr_16991 = state_16988;(statearr_16991[7] = inst_16917__$1);
return statearr_16991;
})();if(cljs.core.truth_(inst_16918))
{var statearr_16992_17038 = state_16988__$1;(statearr_16992_17038[1] = 5);
} else
{var statearr_16993_17039 = state_16988__$1;(statearr_16993_17039[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 5))
{var inst_16924 = cljs.core.deref.call(null,mults);var inst_16925 = cljs.core.vals.call(null,inst_16924);var inst_16926 = cljs.core.seq.call(null,inst_16925);var inst_16927 = inst_16926;var inst_16928 = null;var inst_16929 = 0;var inst_16930 = 0;var state_16988__$1 = (function (){var statearr_16994 = state_16988;(statearr_16994[8] = inst_16928);
(statearr_16994[9] = inst_16927);
(statearr_16994[10] = inst_16929);
(statearr_16994[11] = inst_16930);
return statearr_16994;
})();var statearr_16995_17040 = state_16988__$1;(statearr_16995_17040[2] = null);
(statearr_16995_17040[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 6))
{var inst_16917 = (state_16988[7]);var inst_16967 = (state_16988[12]);var inst_16965 = (state_16988[13]);var inst_16965__$1 = topic_fn.call(null,inst_16917);var inst_16966 = cljs.core.deref.call(null,mults);var inst_16967__$1 = cljs.core.get.call(null,inst_16966,inst_16965__$1);var state_16988__$1 = (function (){var statearr_16996 = state_16988;(statearr_16996[12] = inst_16967__$1);
(statearr_16996[13] = inst_16965__$1);
return statearr_16996;
})();if(cljs.core.truth_(inst_16967__$1))
{var statearr_16997_17041 = state_16988__$1;(statearr_16997_17041[1] = 19);
} else
{var statearr_16998_17042 = state_16988__$1;(statearr_16998_17042[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 7))
{var inst_16984 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_16999_17043 = state_16988__$1;(statearr_16999_17043[2] = inst_16984);
(statearr_16999_17043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 8))
{var inst_16929 = (state_16988[10]);var inst_16930 = (state_16988[11]);var inst_16932 = (inst_16930 < inst_16929);var inst_16933 = inst_16932;var state_16988__$1 = state_16988;if(cljs.core.truth_(inst_16933))
{var statearr_17003_17044 = state_16988__$1;(statearr_17003_17044[1] = 10);
} else
{var statearr_17004_17045 = state_16988__$1;(statearr_17004_17045[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 9))
{var inst_16963 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_17005_17046 = state_16988__$1;(statearr_17005_17046[2] = inst_16963);
(statearr_17005_17046[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 10))
{var inst_16928 = (state_16988[8]);var inst_16927 = (state_16988[9]);var inst_16929 = (state_16988[10]);var inst_16930 = (state_16988[11]);var inst_16935 = cljs.core._nth.call(null,inst_16928,inst_16930);var inst_16936 = cljs.core.async.muxch_STAR_.call(null,inst_16935);var inst_16937 = cljs.core.async.close_BANG_.call(null,inst_16936);var inst_16938 = (inst_16930 + 1);var tmp17000 = inst_16928;var tmp17001 = inst_16927;var tmp17002 = inst_16929;var inst_16927__$1 = tmp17001;var inst_16928__$1 = tmp17000;var inst_16929__$1 = tmp17002;var inst_16930__$1 = inst_16938;var state_16988__$1 = (function (){var statearr_17006 = state_16988;(statearr_17006[8] = inst_16928__$1);
(statearr_17006[9] = inst_16927__$1);
(statearr_17006[10] = inst_16929__$1);
(statearr_17006[14] = inst_16937);
(statearr_17006[11] = inst_16930__$1);
return statearr_17006;
})();var statearr_17007_17047 = state_16988__$1;(statearr_17007_17047[2] = null);
(statearr_17007_17047[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 11))
{var inst_16927 = (state_16988[9]);var inst_16941 = (state_16988[15]);var inst_16941__$1 = cljs.core.seq.call(null,inst_16927);var state_16988__$1 = (function (){var statearr_17008 = state_16988;(statearr_17008[15] = inst_16941__$1);
return statearr_17008;
})();if(inst_16941__$1)
{var statearr_17009_17048 = state_16988__$1;(statearr_17009_17048[1] = 13);
} else
{var statearr_17010_17049 = state_16988__$1;(statearr_17010_17049[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 12))
{var inst_16961 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_17011_17050 = state_16988__$1;(statearr_17011_17050[2] = inst_16961);
(statearr_17011_17050[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 13))
{var inst_16941 = (state_16988[15]);var inst_16943 = cljs.core.chunked_seq_QMARK_.call(null,inst_16941);var state_16988__$1 = state_16988;if(inst_16943)
{var statearr_17012_17051 = state_16988__$1;(statearr_17012_17051[1] = 16);
} else
{var statearr_17013_17052 = state_16988__$1;(statearr_17013_17052[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 14))
{var state_16988__$1 = state_16988;var statearr_17014_17053 = state_16988__$1;(statearr_17014_17053[2] = null);
(statearr_17014_17053[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 15))
{var inst_16959 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_17015_17054 = state_16988__$1;(statearr_17015_17054[2] = inst_16959);
(statearr_17015_17054[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 16))
{var inst_16941 = (state_16988[15]);var inst_16945 = cljs.core.chunk_first.call(null,inst_16941);var inst_16946 = cljs.core.chunk_rest.call(null,inst_16941);var inst_16947 = cljs.core.count.call(null,inst_16945);var inst_16927 = inst_16946;var inst_16928 = inst_16945;var inst_16929 = inst_16947;var inst_16930 = 0;var state_16988__$1 = (function (){var statearr_17016 = state_16988;(statearr_17016[8] = inst_16928);
(statearr_17016[9] = inst_16927);
(statearr_17016[10] = inst_16929);
(statearr_17016[11] = inst_16930);
return statearr_17016;
})();var statearr_17017_17055 = state_16988__$1;(statearr_17017_17055[2] = null);
(statearr_17017_17055[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 17))
{var inst_16941 = (state_16988[15]);var inst_16950 = cljs.core.first.call(null,inst_16941);var inst_16951 = cljs.core.async.muxch_STAR_.call(null,inst_16950);var inst_16952 = cljs.core.async.close_BANG_.call(null,inst_16951);var inst_16953 = cljs.core.next.call(null,inst_16941);var inst_16927 = inst_16953;var inst_16928 = null;var inst_16929 = 0;var inst_16930 = 0;var state_16988__$1 = (function (){var statearr_17018 = state_16988;(statearr_17018[16] = inst_16952);
(statearr_17018[8] = inst_16928);
(statearr_17018[9] = inst_16927);
(statearr_17018[10] = inst_16929);
(statearr_17018[11] = inst_16930);
return statearr_17018;
})();var statearr_17019_17056 = state_16988__$1;(statearr_17019_17056[2] = null);
(statearr_17019_17056[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 18))
{var inst_16956 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_17020_17057 = state_16988__$1;(statearr_17020_17057[2] = inst_16956);
(statearr_17020_17057[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 19))
{var state_16988__$1 = state_16988;var statearr_17021_17058 = state_16988__$1;(statearr_17021_17058[2] = null);
(statearr_17021_17058[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 20))
{var state_16988__$1 = state_16988;var statearr_17022_17059 = state_16988__$1;(statearr_17022_17059[2] = null);
(statearr_17022_17059[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 21))
{var inst_16981 = (state_16988[2]);var state_16988__$1 = (function (){var statearr_17023 = state_16988;(statearr_17023[17] = inst_16981);
return statearr_17023;
})();var statearr_17024_17060 = state_16988__$1;(statearr_17024_17060[2] = null);
(statearr_17024_17060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 22))
{var inst_16978 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_17025_17061 = state_16988__$1;(statearr_17025_17061[2] = inst_16978);
(statearr_17025_17061[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 23))
{var inst_16965 = (state_16988[13]);var inst_16969 = (state_16988[2]);var inst_16970 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16965);var state_16988__$1 = (function (){var statearr_17026 = state_16988;(statearr_17026[18] = inst_16969);
return statearr_17026;
})();var statearr_17027_17062 = state_16988__$1;(statearr_17027_17062[2] = inst_16970);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16988__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 24))
{var inst_16917 = (state_16988[7]);var inst_16967 = (state_16988[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16988,23,Object,null,22);var inst_16974 = cljs.core.async.muxch_STAR_.call(null,inst_16967);var state_16988__$1 = state_16988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16988__$1,25,inst_16974,inst_16917);
} else
{if((state_val_16989 === 25))
{var inst_16976 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_17028_17063 = state_16988__$1;(statearr_17028_17063[2] = inst_16976);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16988__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_17032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17032[0] = state_machine__5509__auto__);
(statearr_17032[1] = 1);
return statearr_17032;
});
var state_machine__5509__auto____1 = (function (state_16988){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_16988);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17033){if((e17033 instanceof Object))
{var ex__5512__auto__ = e17033;var statearr_17034_17064 = state_16988;(statearr_17034_17064[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16988);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17065 = state_16988;
state_16988 = G__17065;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_16988){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_16988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17035 = f__5524__auto__.call(null);(statearr_17035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___17036);
return statearr_17035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5523__auto___17202 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_17172){var state_val_17173 = (state_17172[1]);if((state_val_17173 === 1))
{var state_17172__$1 = state_17172;var statearr_17174_17203 = state_17172__$1;(statearr_17174_17203[2] = null);
(statearr_17174_17203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 2))
{var inst_17135 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17136 = 0;var state_17172__$1 = (function (){var statearr_17175 = state_17172;(statearr_17175[7] = inst_17135);
(statearr_17175[8] = inst_17136);
return statearr_17175;
})();var statearr_17176_17204 = state_17172__$1;(statearr_17176_17204[2] = null);
(statearr_17176_17204[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 3))
{var inst_17170 = (state_17172[2]);var state_17172__$1 = state_17172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17172__$1,inst_17170);
} else
{if((state_val_17173 === 4))
{var inst_17136 = (state_17172[8]);var inst_17138 = (inst_17136 < cnt);var state_17172__$1 = state_17172;if(cljs.core.truth_(inst_17138))
{var statearr_17177_17205 = state_17172__$1;(statearr_17177_17205[1] = 6);
} else
{var statearr_17178_17206 = state_17172__$1;(statearr_17178_17206[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 5))
{var inst_17156 = (state_17172[2]);var state_17172__$1 = (function (){var statearr_17179 = state_17172;(statearr_17179[9] = inst_17156);
return statearr_17179;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17172__$1,12,dchan);
} else
{if((state_val_17173 === 6))
{var state_17172__$1 = state_17172;var statearr_17180_17207 = state_17172__$1;(statearr_17180_17207[2] = null);
(statearr_17180_17207[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 7))
{var state_17172__$1 = state_17172;var statearr_17181_17208 = state_17172__$1;(statearr_17181_17208[2] = null);
(statearr_17181_17208[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 8))
{var inst_17154 = (state_17172[2]);var state_17172__$1 = state_17172;var statearr_17182_17209 = state_17172__$1;(statearr_17182_17209[2] = inst_17154);
(statearr_17182_17209[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 9))
{var inst_17136 = (state_17172[8]);var inst_17149 = (state_17172[2]);var inst_17150 = (inst_17136 + 1);var inst_17136__$1 = inst_17150;var state_17172__$1 = (function (){var statearr_17183 = state_17172;(statearr_17183[8] = inst_17136__$1);
(statearr_17183[10] = inst_17149);
return statearr_17183;
})();var statearr_17184_17210 = state_17172__$1;(statearr_17184_17210[2] = null);
(statearr_17184_17210[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 10))
{var inst_17140 = (state_17172[2]);var inst_17141 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17172__$1 = (function (){var statearr_17185 = state_17172;(statearr_17185[11] = inst_17140);
return statearr_17185;
})();var statearr_17186_17211 = state_17172__$1;(statearr_17186_17211[2] = inst_17141);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17172__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 11))
{var inst_17136 = (state_17172[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17172,10,Object,null,9);var inst_17145 = chs__$1.call(null,inst_17136);var inst_17146 = done.call(null,inst_17136);var inst_17147 = cljs.core.async.take_BANG_.call(null,inst_17145,inst_17146);var state_17172__$1 = state_17172;var statearr_17187_17212 = state_17172__$1;(statearr_17187_17212[2] = inst_17147);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17172__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 12))
{var inst_17158 = (state_17172[12]);var inst_17158__$1 = (state_17172[2]);var inst_17159 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17158__$1);var state_17172__$1 = (function (){var statearr_17188 = state_17172;(statearr_17188[12] = inst_17158__$1);
return statearr_17188;
})();if(cljs.core.truth_(inst_17159))
{var statearr_17189_17213 = state_17172__$1;(statearr_17189_17213[1] = 13);
} else
{var statearr_17190_17214 = state_17172__$1;(statearr_17190_17214[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 13))
{var inst_17161 = cljs.core.async.close_BANG_.call(null,out);var state_17172__$1 = state_17172;var statearr_17191_17215 = state_17172__$1;(statearr_17191_17215[2] = inst_17161);
(statearr_17191_17215[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 14))
{var inst_17158 = (state_17172[12]);var inst_17163 = cljs.core.apply.call(null,f,inst_17158);var state_17172__$1 = state_17172;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17172__$1,16,out,inst_17163);
} else
{if((state_val_17173 === 15))
{var inst_17168 = (state_17172[2]);var state_17172__$1 = state_17172;var statearr_17192_17216 = state_17172__$1;(statearr_17192_17216[2] = inst_17168);
(statearr_17192_17216[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17173 === 16))
{var inst_17165 = (state_17172[2]);var state_17172__$1 = (function (){var statearr_17193 = state_17172;(statearr_17193[13] = inst_17165);
return statearr_17193;
})();var statearr_17194_17217 = state_17172__$1;(statearr_17194_17217[2] = null);
(statearr_17194_17217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_17198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17198[0] = state_machine__5509__auto__);
(statearr_17198[1] = 1);
return statearr_17198;
});
var state_machine__5509__auto____1 = (function (state_17172){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_17172);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17199){if((e17199 instanceof Object))
{var ex__5512__auto__ = e17199;var statearr_17200_17218 = state_17172;(statearr_17200_17218[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17172);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17219 = state_17172;
state_17172 = G__17219;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_17172){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_17172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17201 = f__5524__auto__.call(null);(statearr_17201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___17202);
return statearr_17201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___17327 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_17303){var state_val_17304 = (state_17303[1]);if((state_val_17304 === 1))
{var inst_17274 = cljs.core.vec.call(null,chs);var inst_17275 = inst_17274;var state_17303__$1 = (function (){var statearr_17305 = state_17303;(statearr_17305[7] = inst_17275);
return statearr_17305;
})();var statearr_17306_17328 = state_17303__$1;(statearr_17306_17328[2] = null);
(statearr_17306_17328[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17304 === 2))
{var inst_17275 = (state_17303[7]);var inst_17277 = cljs.core.count.call(null,inst_17275);var inst_17278 = (inst_17277 > 0);var state_17303__$1 = state_17303;if(cljs.core.truth_(inst_17278))
{var statearr_17307_17329 = state_17303__$1;(statearr_17307_17329[1] = 4);
} else
{var statearr_17308_17330 = state_17303__$1;(statearr_17308_17330[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17304 === 3))
{var inst_17301 = (state_17303[2]);var state_17303__$1 = state_17303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17303__$1,inst_17301);
} else
{if((state_val_17304 === 4))
{var inst_17275 = (state_17303[7]);var state_17303__$1 = state_17303;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17303__$1,7,inst_17275);
} else
{if((state_val_17304 === 5))
{var inst_17297 = cljs.core.async.close_BANG_.call(null,out);var state_17303__$1 = state_17303;var statearr_17309_17331 = state_17303__$1;(statearr_17309_17331[2] = inst_17297);
(statearr_17309_17331[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17304 === 6))
{var inst_17299 = (state_17303[2]);var state_17303__$1 = state_17303;var statearr_17310_17332 = state_17303__$1;(statearr_17310_17332[2] = inst_17299);
(statearr_17310_17332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17304 === 7))
{var inst_17282 = (state_17303[8]);var inst_17283 = (state_17303[9]);var inst_17282__$1 = (state_17303[2]);var inst_17283__$1 = cljs.core.nth.call(null,inst_17282__$1,0,null);var inst_17284 = cljs.core.nth.call(null,inst_17282__$1,1,null);var inst_17285 = (inst_17283__$1 == null);var state_17303__$1 = (function (){var statearr_17311 = state_17303;(statearr_17311[8] = inst_17282__$1);
(statearr_17311[9] = inst_17283__$1);
(statearr_17311[10] = inst_17284);
return statearr_17311;
})();if(cljs.core.truth_(inst_17285))
{var statearr_17312_17333 = state_17303__$1;(statearr_17312_17333[1] = 8);
} else
{var statearr_17313_17334 = state_17303__$1;(statearr_17313_17334[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17304 === 8))
{var inst_17275 = (state_17303[7]);var inst_17282 = (state_17303[8]);var inst_17283 = (state_17303[9]);var inst_17284 = (state_17303[10]);var inst_17287 = (function (){var c = inst_17284;var v = inst_17283;var vec__17280 = inst_17282;var cs = inst_17275;return ((function (c,v,vec__17280,cs,inst_17275,inst_17282,inst_17283,inst_17284,state_val_17304){
return (function (p1__17220_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17220_SHARP_);
});
;})(c,v,vec__17280,cs,inst_17275,inst_17282,inst_17283,inst_17284,state_val_17304))
})();var inst_17288 = cljs.core.filterv.call(null,inst_17287,inst_17275);var inst_17275__$1 = inst_17288;var state_17303__$1 = (function (){var statearr_17314 = state_17303;(statearr_17314[7] = inst_17275__$1);
return statearr_17314;
})();var statearr_17315_17335 = state_17303__$1;(statearr_17315_17335[2] = null);
(statearr_17315_17335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17304 === 9))
{var inst_17283 = (state_17303[9]);var state_17303__$1 = state_17303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17303__$1,11,out,inst_17283);
} else
{if((state_val_17304 === 10))
{var inst_17295 = (state_17303[2]);var state_17303__$1 = state_17303;var statearr_17317_17336 = state_17303__$1;(statearr_17317_17336[2] = inst_17295);
(statearr_17317_17336[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17304 === 11))
{var inst_17275 = (state_17303[7]);var inst_17292 = (state_17303[2]);var tmp17316 = inst_17275;var inst_17275__$1 = tmp17316;var state_17303__$1 = (function (){var statearr_17318 = state_17303;(statearr_17318[7] = inst_17275__$1);
(statearr_17318[11] = inst_17292);
return statearr_17318;
})();var statearr_17319_17337 = state_17303__$1;(statearr_17319_17337[2] = null);
(statearr_17319_17337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_17323 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17323[0] = state_machine__5509__auto__);
(statearr_17323[1] = 1);
return statearr_17323;
});
var state_machine__5509__auto____1 = (function (state_17303){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_17303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17324){if((e17324 instanceof Object))
{var ex__5512__auto__ = e17324;var statearr_17325_17338 = state_17303;(statearr_17325_17338[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17339 = state_17303;
state_17303 = G__17339;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_17303){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_17303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17326 = f__5524__auto__.call(null);(statearr_17326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___17327);
return statearr_17326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___17432 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_17409){var state_val_17410 = (state_17409[1]);if((state_val_17410 === 1))
{var inst_17386 = 0;var state_17409__$1 = (function (){var statearr_17411 = state_17409;(statearr_17411[7] = inst_17386);
return statearr_17411;
})();var statearr_17412_17433 = state_17409__$1;(statearr_17412_17433[2] = null);
(statearr_17412_17433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 2))
{var inst_17386 = (state_17409[7]);var inst_17388 = (inst_17386 < n);var state_17409__$1 = state_17409;if(cljs.core.truth_(inst_17388))
{var statearr_17413_17434 = state_17409__$1;(statearr_17413_17434[1] = 4);
} else
{var statearr_17414_17435 = state_17409__$1;(statearr_17414_17435[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 3))
{var inst_17406 = (state_17409[2]);var inst_17407 = cljs.core.async.close_BANG_.call(null,out);var state_17409__$1 = (function (){var statearr_17415 = state_17409;(statearr_17415[8] = inst_17406);
return statearr_17415;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17409__$1,inst_17407);
} else
{if((state_val_17410 === 4))
{var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17409__$1,7,ch);
} else
{if((state_val_17410 === 5))
{var state_17409__$1 = state_17409;var statearr_17416_17436 = state_17409__$1;(statearr_17416_17436[2] = null);
(statearr_17416_17436[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 6))
{var inst_17404 = (state_17409[2]);var state_17409__$1 = state_17409;var statearr_17417_17437 = state_17409__$1;(statearr_17417_17437[2] = inst_17404);
(statearr_17417_17437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 7))
{var inst_17391 = (state_17409[9]);var inst_17391__$1 = (state_17409[2]);var inst_17392 = (inst_17391__$1 == null);var inst_17393 = cljs.core.not.call(null,inst_17392);var state_17409__$1 = (function (){var statearr_17418 = state_17409;(statearr_17418[9] = inst_17391__$1);
return statearr_17418;
})();if(inst_17393)
{var statearr_17419_17438 = state_17409__$1;(statearr_17419_17438[1] = 8);
} else
{var statearr_17420_17439 = state_17409__$1;(statearr_17420_17439[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 8))
{var inst_17391 = (state_17409[9]);var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17409__$1,11,out,inst_17391);
} else
{if((state_val_17410 === 9))
{var state_17409__$1 = state_17409;var statearr_17421_17440 = state_17409__$1;(statearr_17421_17440[2] = null);
(statearr_17421_17440[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 10))
{var inst_17401 = (state_17409[2]);var state_17409__$1 = state_17409;var statearr_17422_17441 = state_17409__$1;(statearr_17422_17441[2] = inst_17401);
(statearr_17422_17441[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17410 === 11))
{var inst_17386 = (state_17409[7]);var inst_17396 = (state_17409[2]);var inst_17397 = (inst_17386 + 1);var inst_17386__$1 = inst_17397;var state_17409__$1 = (function (){var statearr_17423 = state_17409;(statearr_17423[10] = inst_17396);
(statearr_17423[7] = inst_17386__$1);
return statearr_17423;
})();var statearr_17424_17442 = state_17409__$1;(statearr_17424_17442[2] = null);
(statearr_17424_17442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_17428 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17428[0] = state_machine__5509__auto__);
(statearr_17428[1] = 1);
return statearr_17428;
});
var state_machine__5509__auto____1 = (function (state_17409){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_17409);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17429){if((e17429 instanceof Object))
{var ex__5512__auto__ = e17429;var statearr_17430_17443 = state_17409;(statearr_17430_17443[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17444 = state_17409;
state_17409 = G__17444;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_17409){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_17409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17431 = f__5524__auto__.call(null);(statearr_17431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___17432);
return statearr_17431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___17541 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_17516){var state_val_17517 = (state_17516[1]);if((state_val_17517 === 1))
{var inst_17493 = null;var state_17516__$1 = (function (){var statearr_17518 = state_17516;(statearr_17518[7] = inst_17493);
return statearr_17518;
})();var statearr_17519_17542 = state_17516__$1;(statearr_17519_17542[2] = null);
(statearr_17519_17542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17517 === 2))
{var state_17516__$1 = state_17516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17516__$1,4,ch);
} else
{if((state_val_17517 === 3))
{var inst_17513 = (state_17516[2]);var inst_17514 = cljs.core.async.close_BANG_.call(null,out);var state_17516__$1 = (function (){var statearr_17520 = state_17516;(statearr_17520[8] = inst_17513);
return statearr_17520;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17516__$1,inst_17514);
} else
{if((state_val_17517 === 4))
{var inst_17496 = (state_17516[9]);var inst_17496__$1 = (state_17516[2]);var inst_17497 = (inst_17496__$1 == null);var inst_17498 = cljs.core.not.call(null,inst_17497);var state_17516__$1 = (function (){var statearr_17521 = state_17516;(statearr_17521[9] = inst_17496__$1);
return statearr_17521;
})();if(inst_17498)
{var statearr_17522_17543 = state_17516__$1;(statearr_17522_17543[1] = 5);
} else
{var statearr_17523_17544 = state_17516__$1;(statearr_17523_17544[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17517 === 5))
{var inst_17493 = (state_17516[7]);var inst_17496 = (state_17516[9]);var inst_17500 = cljs.core._EQ_.call(null,inst_17496,inst_17493);var state_17516__$1 = state_17516;if(inst_17500)
{var statearr_17524_17545 = state_17516__$1;(statearr_17524_17545[1] = 8);
} else
{var statearr_17525_17546 = state_17516__$1;(statearr_17525_17546[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17517 === 6))
{var state_17516__$1 = state_17516;var statearr_17527_17547 = state_17516__$1;(statearr_17527_17547[2] = null);
(statearr_17527_17547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17517 === 7))
{var inst_17511 = (state_17516[2]);var state_17516__$1 = state_17516;var statearr_17528_17548 = state_17516__$1;(statearr_17528_17548[2] = inst_17511);
(statearr_17528_17548[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17517 === 8))
{var inst_17493 = (state_17516[7]);var tmp17526 = inst_17493;var inst_17493__$1 = tmp17526;var state_17516__$1 = (function (){var statearr_17529 = state_17516;(statearr_17529[7] = inst_17493__$1);
return statearr_17529;
})();var statearr_17530_17549 = state_17516__$1;(statearr_17530_17549[2] = null);
(statearr_17530_17549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17517 === 9))
{var inst_17496 = (state_17516[9]);var state_17516__$1 = state_17516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17516__$1,11,out,inst_17496);
} else
{if((state_val_17517 === 10))
{var inst_17508 = (state_17516[2]);var state_17516__$1 = state_17516;var statearr_17531_17550 = state_17516__$1;(statearr_17531_17550[2] = inst_17508);
(statearr_17531_17550[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17517 === 11))
{var inst_17496 = (state_17516[9]);var inst_17505 = (state_17516[2]);var inst_17493 = inst_17496;var state_17516__$1 = (function (){var statearr_17532 = state_17516;(statearr_17532[7] = inst_17493);
(statearr_17532[10] = inst_17505);
return statearr_17532;
})();var statearr_17533_17551 = state_17516__$1;(statearr_17533_17551[2] = null);
(statearr_17533_17551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_17537 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17537[0] = state_machine__5509__auto__);
(statearr_17537[1] = 1);
return statearr_17537;
});
var state_machine__5509__auto____1 = (function (state_17516){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_17516);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17538){if((e17538 instanceof Object))
{var ex__5512__auto__ = e17538;var statearr_17539_17552 = state_17516;(statearr_17539_17552[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17538;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17553 = state_17516;
state_17516 = G__17553;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_17516){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_17516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17540 = f__5524__auto__.call(null);(statearr_17540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___17541);
return statearr_17540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___17688 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_17658){var state_val_17659 = (state_17658[1]);if((state_val_17659 === 1))
{var inst_17621 = (new Array(n));var inst_17622 = inst_17621;var inst_17623 = 0;var state_17658__$1 = (function (){var statearr_17660 = state_17658;(statearr_17660[7] = inst_17623);
(statearr_17660[8] = inst_17622);
return statearr_17660;
})();var statearr_17661_17689 = state_17658__$1;(statearr_17661_17689[2] = null);
(statearr_17661_17689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 2))
{var state_17658__$1 = state_17658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17658__$1,4,ch);
} else
{if((state_val_17659 === 3))
{var inst_17656 = (state_17658[2]);var state_17658__$1 = state_17658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17658__$1,inst_17656);
} else
{if((state_val_17659 === 4))
{var inst_17626 = (state_17658[9]);var inst_17626__$1 = (state_17658[2]);var inst_17627 = (inst_17626__$1 == null);var inst_17628 = cljs.core.not.call(null,inst_17627);var state_17658__$1 = (function (){var statearr_17662 = state_17658;(statearr_17662[9] = inst_17626__$1);
return statearr_17662;
})();if(inst_17628)
{var statearr_17663_17690 = state_17658__$1;(statearr_17663_17690[1] = 5);
} else
{var statearr_17664_17691 = state_17658__$1;(statearr_17664_17691[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 5))
{var inst_17631 = (state_17658[10]);var inst_17626 = (state_17658[9]);var inst_17623 = (state_17658[7]);var inst_17622 = (state_17658[8]);var inst_17630 = (inst_17622[inst_17623] = inst_17626);var inst_17631__$1 = (inst_17623 + 1);var inst_17632 = (inst_17631__$1 < n);var state_17658__$1 = (function (){var statearr_17665 = state_17658;(statearr_17665[11] = inst_17630);
(statearr_17665[10] = inst_17631__$1);
return statearr_17665;
})();if(cljs.core.truth_(inst_17632))
{var statearr_17666_17692 = state_17658__$1;(statearr_17666_17692[1] = 8);
} else
{var statearr_17667_17693 = state_17658__$1;(statearr_17667_17693[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 6))
{var inst_17623 = (state_17658[7]);var inst_17644 = (inst_17623 > 0);var state_17658__$1 = state_17658;if(cljs.core.truth_(inst_17644))
{var statearr_17669_17694 = state_17658__$1;(statearr_17669_17694[1] = 12);
} else
{var statearr_17670_17695 = state_17658__$1;(statearr_17670_17695[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 7))
{var inst_17654 = (state_17658[2]);var state_17658__$1 = state_17658;var statearr_17671_17696 = state_17658__$1;(statearr_17671_17696[2] = inst_17654);
(statearr_17671_17696[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 8))
{var inst_17631 = (state_17658[10]);var inst_17622 = (state_17658[8]);var tmp17668 = inst_17622;var inst_17622__$1 = tmp17668;var inst_17623 = inst_17631;var state_17658__$1 = (function (){var statearr_17672 = state_17658;(statearr_17672[7] = inst_17623);
(statearr_17672[8] = inst_17622__$1);
return statearr_17672;
})();var statearr_17673_17697 = state_17658__$1;(statearr_17673_17697[2] = null);
(statearr_17673_17697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 9))
{var inst_17622 = (state_17658[8]);var inst_17636 = cljs.core.vec.call(null,inst_17622);var state_17658__$1 = state_17658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17658__$1,11,out,inst_17636);
} else
{if((state_val_17659 === 10))
{var inst_17642 = (state_17658[2]);var state_17658__$1 = state_17658;var statearr_17674_17698 = state_17658__$1;(statearr_17674_17698[2] = inst_17642);
(statearr_17674_17698[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 11))
{var inst_17638 = (state_17658[2]);var inst_17639 = (new Array(n));var inst_17622 = inst_17639;var inst_17623 = 0;var state_17658__$1 = (function (){var statearr_17675 = state_17658;(statearr_17675[12] = inst_17638);
(statearr_17675[7] = inst_17623);
(statearr_17675[8] = inst_17622);
return statearr_17675;
})();var statearr_17676_17699 = state_17658__$1;(statearr_17676_17699[2] = null);
(statearr_17676_17699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 12))
{var inst_17622 = (state_17658[8]);var inst_17646 = cljs.core.vec.call(null,inst_17622);var state_17658__$1 = state_17658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17658__$1,15,out,inst_17646);
} else
{if((state_val_17659 === 13))
{var state_17658__$1 = state_17658;var statearr_17677_17700 = state_17658__$1;(statearr_17677_17700[2] = null);
(statearr_17677_17700[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 14))
{var inst_17651 = (state_17658[2]);var inst_17652 = cljs.core.async.close_BANG_.call(null,out);var state_17658__$1 = (function (){var statearr_17678 = state_17658;(statearr_17678[13] = inst_17651);
return statearr_17678;
})();var statearr_17679_17701 = state_17658__$1;(statearr_17679_17701[2] = inst_17652);
(statearr_17679_17701[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17659 === 15))
{var inst_17648 = (state_17658[2]);var state_17658__$1 = state_17658;var statearr_17680_17702 = state_17658__$1;(statearr_17680_17702[2] = inst_17648);
(statearr_17680_17702[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_17684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17684[0] = state_machine__5509__auto__);
(statearr_17684[1] = 1);
return statearr_17684;
});
var state_machine__5509__auto____1 = (function (state_17658){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_17658);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17685){if((e17685 instanceof Object))
{var ex__5512__auto__ = e17685;var statearr_17686_17703 = state_17658;(statearr_17686_17703[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17658);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17704 = state_17658;
state_17658 = G__17704;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_17658){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_17658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17687 = f__5524__auto__.call(null);(statearr_17687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___17688);
return statearr_17687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___17847 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_17817){var state_val_17818 = (state_17817[1]);if((state_val_17818 === 1))
{var inst_17776 = [];var inst_17777 = inst_17776;var inst_17778 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17817__$1 = (function (){var statearr_17819 = state_17817;(statearr_17819[7] = inst_17778);
(statearr_17819[8] = inst_17777);
return statearr_17819;
})();var statearr_17820_17848 = state_17817__$1;(statearr_17820_17848[2] = null);
(statearr_17820_17848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 2))
{var state_17817__$1 = state_17817;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17817__$1,4,ch);
} else
{if((state_val_17818 === 3))
{var inst_17815 = (state_17817[2]);var state_17817__$1 = state_17817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17817__$1,inst_17815);
} else
{if((state_val_17818 === 4))
{var inst_17781 = (state_17817[9]);var inst_17781__$1 = (state_17817[2]);var inst_17782 = (inst_17781__$1 == null);var inst_17783 = cljs.core.not.call(null,inst_17782);var state_17817__$1 = (function (){var statearr_17821 = state_17817;(statearr_17821[9] = inst_17781__$1);
return statearr_17821;
})();if(inst_17783)
{var statearr_17822_17849 = state_17817__$1;(statearr_17822_17849[1] = 5);
} else
{var statearr_17823_17850 = state_17817__$1;(statearr_17823_17850[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 5))
{var inst_17785 = (state_17817[10]);var inst_17781 = (state_17817[9]);var inst_17778 = (state_17817[7]);var inst_17785__$1 = f.call(null,inst_17781);var inst_17786 = cljs.core._EQ_.call(null,inst_17785__$1,inst_17778);var inst_17787 = cljs.core.keyword_identical_QMARK_.call(null,inst_17778,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17788 = (inst_17786) || (inst_17787);var state_17817__$1 = (function (){var statearr_17824 = state_17817;(statearr_17824[10] = inst_17785__$1);
return statearr_17824;
})();if(cljs.core.truth_(inst_17788))
{var statearr_17825_17851 = state_17817__$1;(statearr_17825_17851[1] = 8);
} else
{var statearr_17826_17852 = state_17817__$1;(statearr_17826_17852[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 6))
{var inst_17777 = (state_17817[8]);var inst_17802 = inst_17777.length;var inst_17803 = (inst_17802 > 0);var state_17817__$1 = state_17817;if(cljs.core.truth_(inst_17803))
{var statearr_17828_17853 = state_17817__$1;(statearr_17828_17853[1] = 12);
} else
{var statearr_17829_17854 = state_17817__$1;(statearr_17829_17854[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 7))
{var inst_17813 = (state_17817[2]);var state_17817__$1 = state_17817;var statearr_17830_17855 = state_17817__$1;(statearr_17830_17855[2] = inst_17813);
(statearr_17830_17855[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 8))
{var inst_17785 = (state_17817[10]);var inst_17781 = (state_17817[9]);var inst_17777 = (state_17817[8]);var inst_17790 = inst_17777.push(inst_17781);var tmp17827 = inst_17777;var inst_17777__$1 = tmp17827;var inst_17778 = inst_17785;var state_17817__$1 = (function (){var statearr_17831 = state_17817;(statearr_17831[11] = inst_17790);
(statearr_17831[7] = inst_17778);
(statearr_17831[8] = inst_17777__$1);
return statearr_17831;
})();var statearr_17832_17856 = state_17817__$1;(statearr_17832_17856[2] = null);
(statearr_17832_17856[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 9))
{var inst_17777 = (state_17817[8]);var inst_17793 = cljs.core.vec.call(null,inst_17777);var state_17817__$1 = state_17817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17817__$1,11,out,inst_17793);
} else
{if((state_val_17818 === 10))
{var inst_17800 = (state_17817[2]);var state_17817__$1 = state_17817;var statearr_17833_17857 = state_17817__$1;(statearr_17833_17857[2] = inst_17800);
(statearr_17833_17857[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 11))
{var inst_17785 = (state_17817[10]);var inst_17781 = (state_17817[9]);var inst_17795 = (state_17817[2]);var inst_17796 = [];var inst_17797 = inst_17796.push(inst_17781);var inst_17777 = inst_17796;var inst_17778 = inst_17785;var state_17817__$1 = (function (){var statearr_17834 = state_17817;(statearr_17834[12] = inst_17797);
(statearr_17834[13] = inst_17795);
(statearr_17834[7] = inst_17778);
(statearr_17834[8] = inst_17777);
return statearr_17834;
})();var statearr_17835_17858 = state_17817__$1;(statearr_17835_17858[2] = null);
(statearr_17835_17858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 12))
{var inst_17777 = (state_17817[8]);var inst_17805 = cljs.core.vec.call(null,inst_17777);var state_17817__$1 = state_17817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17817__$1,15,out,inst_17805);
} else
{if((state_val_17818 === 13))
{var state_17817__$1 = state_17817;var statearr_17836_17859 = state_17817__$1;(statearr_17836_17859[2] = null);
(statearr_17836_17859[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 14))
{var inst_17810 = (state_17817[2]);var inst_17811 = cljs.core.async.close_BANG_.call(null,out);var state_17817__$1 = (function (){var statearr_17837 = state_17817;(statearr_17837[14] = inst_17810);
return statearr_17837;
})();var statearr_17838_17860 = state_17817__$1;(statearr_17838_17860[2] = inst_17811);
(statearr_17838_17860[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17818 === 15))
{var inst_17807 = (state_17817[2]);var state_17817__$1 = state_17817;var statearr_17839_17861 = state_17817__$1;(statearr_17839_17861[2] = inst_17807);
(statearr_17839_17861[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_17843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17843[0] = state_machine__5509__auto__);
(statearr_17843[1] = 1);
return statearr_17843;
});
var state_machine__5509__auto____1 = (function (state_17817){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_17817);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17844){if((e17844 instanceof Object))
{var ex__5512__auto__ = e17844;var statearr_17845_17862 = state_17817;(statearr_17845_17862[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17817);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17863 = state_17817;
state_17817 = G__17863;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_17817){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_17817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17846 = f__5524__auto__.call(null);(statearr_17846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___17847);
return statearr_17846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
