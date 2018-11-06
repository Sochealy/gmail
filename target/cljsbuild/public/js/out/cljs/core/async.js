// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31424 = arguments.length;
switch (G__31424) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31425 = (function (f,blockable,meta31426){
this.f = f;
this.blockable = blockable;
this.meta31426 = meta31426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31427,meta31426__$1){
var self__ = this;
var _31427__$1 = this;
return (new cljs.core.async.t_cljs$core$async31425(self__.f,self__.blockable,meta31426__$1));
});

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31427){
var self__ = this;
var _31427__$1 = this;
return self__.meta31426;
});

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31426","meta31426",2094766588,null)], null);
});

cljs.core.async.t_cljs$core$async31425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31425";

cljs.core.async.t_cljs$core$async31425.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31425");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31425.
 */
cljs.core.async.__GT_t_cljs$core$async31425 = (function cljs$core$async$__GT_t_cljs$core$async31425(f__$1,blockable__$1,meta31426){
return (new cljs.core.async.t_cljs$core$async31425(f__$1,blockable__$1,meta31426));
});

}

return (new cljs.core.async.t_cljs$core$async31425(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31431 = arguments.length;
switch (G__31431) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31434 = arguments.length;
switch (G__31434) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31437 = arguments.length;
switch (G__31437) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31439 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31439);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31439,ret){
return (function (){
return fn1.call(null,val_31439);
});})(val_31439,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31441 = arguments.length;
switch (G__31441) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___31443 = n;
var x_31444 = (0);
while(true){
if((x_31444 < n__4408__auto___31443)){
(a[x_31444] = (0));

var G__31445 = (x_31444 + (1));
x_31444 = G__31445;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31446 = (i + (1));
i = G__31446;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31447 = (function (flag,meta31448){
this.flag = flag;
this.meta31448 = meta31448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31449,meta31448__$1){
var self__ = this;
var _31449__$1 = this;
return (new cljs.core.async.t_cljs$core$async31447(self__.flag,meta31448__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31449){
var self__ = this;
var _31449__$1 = this;
return self__.meta31448;
});})(flag))
;

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31447.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31448","meta31448",-589127262,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31447";

cljs.core.async.t_cljs$core$async31447.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31447");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31447.
 */
cljs.core.async.__GT_t_cljs$core$async31447 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31447(flag__$1,meta31448){
return (new cljs.core.async.t_cljs$core$async31447(flag__$1,meta31448));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31447(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31450 = (function (flag,cb,meta31451){
this.flag = flag;
this.cb = cb;
this.meta31451 = meta31451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31452,meta31451__$1){
var self__ = this;
var _31452__$1 = this;
return (new cljs.core.async.t_cljs$core$async31450(self__.flag,self__.cb,meta31451__$1));
});

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31452){
var self__ = this;
var _31452__$1 = this;
return self__.meta31451;
});

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31451","meta31451",73060290,null)], null);
});

cljs.core.async.t_cljs$core$async31450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31450";

cljs.core.async.t_cljs$core$async31450.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31450");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31450.
 */
cljs.core.async.__GT_t_cljs$core$async31450 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31450(flag__$1,cb__$1,meta31451){
return (new cljs.core.async.t_cljs$core$async31450(flag__$1,cb__$1,meta31451));
});

}

return (new cljs.core.async.t_cljs$core$async31450(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31453_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31453_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31454_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31454_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31455 = (i + (1));
i = G__31455;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31461 = arguments.length;
var i__4532__auto___31462 = (0);
while(true){
if((i__4532__auto___31462 < len__4531__auto___31461)){
args__4534__auto__.push((arguments[i__4532__auto___31462]));

var G__31463 = (i__4532__auto___31462 + (1));
i__4532__auto___31462 = G__31463;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31458){
var map__31459 = p__31458;
var map__31459__$1 = ((((!((map__31459 == null)))?(((((map__31459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31459):map__31459);
var opts = map__31459__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31456){
var G__31457 = cljs.core.first.call(null,seq31456);
var seq31456__$1 = cljs.core.next.call(null,seq31456);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31457,seq31456__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31465 = arguments.length;
switch (G__31465) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31364__auto___31511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___31511){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___31511){
return (function (state_31489){
var state_val_31490 = (state_31489[(1)]);
if((state_val_31490 === (7))){
var inst_31485 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31491_31512 = state_31489__$1;
(statearr_31491_31512[(2)] = inst_31485);

(statearr_31491_31512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (1))){
var state_31489__$1 = state_31489;
var statearr_31492_31513 = state_31489__$1;
(statearr_31492_31513[(2)] = null);

(statearr_31492_31513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (4))){
var inst_31468 = (state_31489[(7)]);
var inst_31468__$1 = (state_31489[(2)]);
var inst_31469 = (inst_31468__$1 == null);
var state_31489__$1 = (function (){var statearr_31493 = state_31489;
(statearr_31493[(7)] = inst_31468__$1);

return statearr_31493;
})();
if(cljs.core.truth_(inst_31469)){
var statearr_31494_31514 = state_31489__$1;
(statearr_31494_31514[(1)] = (5));

} else {
var statearr_31495_31515 = state_31489__$1;
(statearr_31495_31515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (13))){
var state_31489__$1 = state_31489;
var statearr_31496_31516 = state_31489__$1;
(statearr_31496_31516[(2)] = null);

(statearr_31496_31516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (6))){
var inst_31468 = (state_31489[(7)]);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31489__$1,(11),to,inst_31468);
} else {
if((state_val_31490 === (3))){
var inst_31487 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31489__$1,inst_31487);
} else {
if((state_val_31490 === (12))){
var state_31489__$1 = state_31489;
var statearr_31497_31517 = state_31489__$1;
(statearr_31497_31517[(2)] = null);

(statearr_31497_31517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (2))){
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31489__$1,(4),from);
} else {
if((state_val_31490 === (11))){
var inst_31478 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
if(cljs.core.truth_(inst_31478)){
var statearr_31498_31518 = state_31489__$1;
(statearr_31498_31518[(1)] = (12));

} else {
var statearr_31499_31519 = state_31489__$1;
(statearr_31499_31519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (9))){
var state_31489__$1 = state_31489;
var statearr_31500_31520 = state_31489__$1;
(statearr_31500_31520[(2)] = null);

(statearr_31500_31520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (5))){
var state_31489__$1 = state_31489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31501_31521 = state_31489__$1;
(statearr_31501_31521[(1)] = (8));

} else {
var statearr_31502_31522 = state_31489__$1;
(statearr_31502_31522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (14))){
var inst_31483 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31503_31523 = state_31489__$1;
(statearr_31503_31523[(2)] = inst_31483);

(statearr_31503_31523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (10))){
var inst_31475 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31504_31524 = state_31489__$1;
(statearr_31504_31524[(2)] = inst_31475);

(statearr_31504_31524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (8))){
var inst_31472 = cljs.core.async.close_BANG_.call(null,to);
var state_31489__$1 = state_31489;
var statearr_31505_31525 = state_31489__$1;
(statearr_31505_31525[(2)] = inst_31472);

(statearr_31505_31525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___31511))
;
return ((function (switch__31273__auto__,c__31364__auto___31511){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_31506 = [null,null,null,null,null,null,null,null];
(statearr_31506[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_31506[(1)] = (1));

return statearr_31506;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_31489){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31507){if((e31507 instanceof Object)){
var ex__31277__auto__ = e31507;
var statearr_31508_31526 = state_31489;
(statearr_31508_31526[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31527 = state_31489;
state_31489 = G__31527;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_31489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_31489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___31511))
})();
var state__31366__auto__ = (function (){var statearr_31509 = f__31365__auto__.call(null);
(statearr_31509[(6)] = c__31364__auto___31511);

return statearr_31509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___31511))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31528){
var vec__31529 = p__31528;
var v = cljs.core.nth.call(null,vec__31529,(0),null);
var p = cljs.core.nth.call(null,vec__31529,(1),null);
var job = vec__31529;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31364__auto___31700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___31700,res,vec__31529,v,p,job,jobs,results){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___31700,res,vec__31529,v,p,job,jobs,results){
return (function (state_31536){
var state_val_31537 = (state_31536[(1)]);
if((state_val_31537 === (1))){
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31536__$1,(2),res,v);
} else {
if((state_val_31537 === (2))){
var inst_31533 = (state_31536[(2)]);
var inst_31534 = cljs.core.async.close_BANG_.call(null,res);
var state_31536__$1 = (function (){var statearr_31538 = state_31536;
(statearr_31538[(7)] = inst_31533);

return statearr_31538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31536__$1,inst_31534);
} else {
return null;
}
}
});})(c__31364__auto___31700,res,vec__31529,v,p,job,jobs,results))
;
return ((function (switch__31273__auto__,c__31364__auto___31700,res,vec__31529,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0 = (function (){
var statearr_31539 = [null,null,null,null,null,null,null,null];
(statearr_31539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__);

(statearr_31539[(1)] = (1));

return statearr_31539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1 = (function (state_31536){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31540){if((e31540 instanceof Object)){
var ex__31277__auto__ = e31540;
var statearr_31541_31701 = state_31536;
(statearr_31541_31701[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31702 = state_31536;
state_31536 = G__31702;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = function(state_31536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1.call(this,state_31536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___31700,res,vec__31529,v,p,job,jobs,results))
})();
var state__31366__auto__ = (function (){var statearr_31542 = f__31365__auto__.call(null);
(statearr_31542[(6)] = c__31364__auto___31700);

return statearr_31542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___31700,res,vec__31529,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31543){
var vec__31544 = p__31543;
var v = cljs.core.nth.call(null,vec__31544,(0),null);
var p = cljs.core.nth.call(null,vec__31544,(1),null);
var job = vec__31544;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___31703 = n;
var __31704 = (0);
while(true){
if((__31704 < n__4408__auto___31703)){
var G__31547_31705 = type;
var G__31547_31706__$1 = (((G__31547_31705 instanceof cljs.core.Keyword))?G__31547_31705.fqn:null);
switch (G__31547_31706__$1) {
case "compute":
var c__31364__auto___31708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31704,c__31364__auto___31708,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (__31704,c__31364__auto___31708,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async){
return (function (state_31560){
var state_val_31561 = (state_31560[(1)]);
if((state_val_31561 === (1))){
var state_31560__$1 = state_31560;
var statearr_31562_31709 = state_31560__$1;
(statearr_31562_31709[(2)] = null);

(statearr_31562_31709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (2))){
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(4),jobs);
} else {
if((state_val_31561 === (3))){
var inst_31558 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31560__$1,inst_31558);
} else {
if((state_val_31561 === (4))){
var inst_31550 = (state_31560[(2)]);
var inst_31551 = process.call(null,inst_31550);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31551)){
var statearr_31563_31710 = state_31560__$1;
(statearr_31563_31710[(1)] = (5));

} else {
var statearr_31564_31711 = state_31560__$1;
(statearr_31564_31711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (5))){
var state_31560__$1 = state_31560;
var statearr_31565_31712 = state_31560__$1;
(statearr_31565_31712[(2)] = null);

(statearr_31565_31712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (6))){
var state_31560__$1 = state_31560;
var statearr_31566_31713 = state_31560__$1;
(statearr_31566_31713[(2)] = null);

(statearr_31566_31713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (7))){
var inst_31556 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31567_31714 = state_31560__$1;
(statearr_31567_31714[(2)] = inst_31556);

(statearr_31567_31714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31704,c__31364__auto___31708,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async))
;
return ((function (__31704,switch__31273__auto__,c__31364__auto___31708,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0 = (function (){
var statearr_31568 = [null,null,null,null,null,null,null];
(statearr_31568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__);

(statearr_31568[(1)] = (1));

return statearr_31568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1 = (function (state_31560){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31569){if((e31569 instanceof Object)){
var ex__31277__auto__ = e31569;
var statearr_31570_31715 = state_31560;
(statearr_31570_31715[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31716 = state_31560;
state_31560 = G__31716;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = function(state_31560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1.call(this,state_31560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__;
})()
;})(__31704,switch__31273__auto__,c__31364__auto___31708,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async))
})();
var state__31366__auto__ = (function (){var statearr_31571 = f__31365__auto__.call(null);
(statearr_31571[(6)] = c__31364__auto___31708);

return statearr_31571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(__31704,c__31364__auto___31708,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async))
);


break;
case "async":
var c__31364__auto___31717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31704,c__31364__auto___31717,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (__31704,c__31364__auto___31717,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async){
return (function (state_31584){
var state_val_31585 = (state_31584[(1)]);
if((state_val_31585 === (1))){
var state_31584__$1 = state_31584;
var statearr_31586_31718 = state_31584__$1;
(statearr_31586_31718[(2)] = null);

(statearr_31586_31718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (2))){
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31584__$1,(4),jobs);
} else {
if((state_val_31585 === (3))){
var inst_31582 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31584__$1,inst_31582);
} else {
if((state_val_31585 === (4))){
var inst_31574 = (state_31584[(2)]);
var inst_31575 = async.call(null,inst_31574);
var state_31584__$1 = state_31584;
if(cljs.core.truth_(inst_31575)){
var statearr_31587_31719 = state_31584__$1;
(statearr_31587_31719[(1)] = (5));

} else {
var statearr_31588_31720 = state_31584__$1;
(statearr_31588_31720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (5))){
var state_31584__$1 = state_31584;
var statearr_31589_31721 = state_31584__$1;
(statearr_31589_31721[(2)] = null);

(statearr_31589_31721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (6))){
var state_31584__$1 = state_31584;
var statearr_31590_31722 = state_31584__$1;
(statearr_31590_31722[(2)] = null);

(statearr_31590_31722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (7))){
var inst_31580 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31591_31723 = state_31584__$1;
(statearr_31591_31723[(2)] = inst_31580);

(statearr_31591_31723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31704,c__31364__auto___31717,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async))
;
return ((function (__31704,switch__31273__auto__,c__31364__auto___31717,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0 = (function (){
var statearr_31592 = [null,null,null,null,null,null,null];
(statearr_31592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__);

(statearr_31592[(1)] = (1));

return statearr_31592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1 = (function (state_31584){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31593){if((e31593 instanceof Object)){
var ex__31277__auto__ = e31593;
var statearr_31594_31724 = state_31584;
(statearr_31594_31724[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31725 = state_31584;
state_31584 = G__31725;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = function(state_31584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1.call(this,state_31584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__;
})()
;})(__31704,switch__31273__auto__,c__31364__auto___31717,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async))
})();
var state__31366__auto__ = (function (){var statearr_31595 = f__31365__auto__.call(null);
(statearr_31595[(6)] = c__31364__auto___31717);

return statearr_31595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(__31704,c__31364__auto___31717,G__31547_31705,G__31547_31706__$1,n__4408__auto___31703,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31547_31706__$1)].join('')));

}

var G__31726 = (__31704 + (1));
__31704 = G__31726;
continue;
} else {
}
break;
}

var c__31364__auto___31727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___31727,jobs,results,process,async){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___31727,jobs,results,process,async){
return (function (state_31617){
var state_val_31618 = (state_31617[(1)]);
if((state_val_31618 === (1))){
var state_31617__$1 = state_31617;
var statearr_31619_31728 = state_31617__$1;
(statearr_31619_31728[(2)] = null);

(statearr_31619_31728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (2))){
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31617__$1,(4),from);
} else {
if((state_val_31618 === (3))){
var inst_31615 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31617__$1,inst_31615);
} else {
if((state_val_31618 === (4))){
var inst_31598 = (state_31617[(7)]);
var inst_31598__$1 = (state_31617[(2)]);
var inst_31599 = (inst_31598__$1 == null);
var state_31617__$1 = (function (){var statearr_31620 = state_31617;
(statearr_31620[(7)] = inst_31598__$1);

return statearr_31620;
})();
if(cljs.core.truth_(inst_31599)){
var statearr_31621_31729 = state_31617__$1;
(statearr_31621_31729[(1)] = (5));

} else {
var statearr_31622_31730 = state_31617__$1;
(statearr_31622_31730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (5))){
var inst_31601 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31617__$1 = state_31617;
var statearr_31623_31731 = state_31617__$1;
(statearr_31623_31731[(2)] = inst_31601);

(statearr_31623_31731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (6))){
var inst_31598 = (state_31617[(7)]);
var inst_31603 = (state_31617[(8)]);
var inst_31603__$1 = cljs.core.async.chan.call(null,(1));
var inst_31604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31605 = [inst_31598,inst_31603__$1];
var inst_31606 = (new cljs.core.PersistentVector(null,2,(5),inst_31604,inst_31605,null));
var state_31617__$1 = (function (){var statearr_31624 = state_31617;
(statearr_31624[(8)] = inst_31603__$1);

return statearr_31624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31617__$1,(8),jobs,inst_31606);
} else {
if((state_val_31618 === (7))){
var inst_31613 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31625_31732 = state_31617__$1;
(statearr_31625_31732[(2)] = inst_31613);

(statearr_31625_31732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (8))){
var inst_31603 = (state_31617[(8)]);
var inst_31608 = (state_31617[(2)]);
var state_31617__$1 = (function (){var statearr_31626 = state_31617;
(statearr_31626[(9)] = inst_31608);

return statearr_31626;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31617__$1,(9),results,inst_31603);
} else {
if((state_val_31618 === (9))){
var inst_31610 = (state_31617[(2)]);
var state_31617__$1 = (function (){var statearr_31627 = state_31617;
(statearr_31627[(10)] = inst_31610);

return statearr_31627;
})();
var statearr_31628_31733 = state_31617__$1;
(statearr_31628_31733[(2)] = null);

(statearr_31628_31733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31364__auto___31727,jobs,results,process,async))
;
return ((function (switch__31273__auto__,c__31364__auto___31727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0 = (function (){
var statearr_31629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__);

(statearr_31629[(1)] = (1));

return statearr_31629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1 = (function (state_31617){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31630){if((e31630 instanceof Object)){
var ex__31277__auto__ = e31630;
var statearr_31631_31734 = state_31617;
(statearr_31631_31734[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31735 = state_31617;
state_31617 = G__31735;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = function(state_31617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1.call(this,state_31617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___31727,jobs,results,process,async))
})();
var state__31366__auto__ = (function (){var statearr_31632 = f__31365__auto__.call(null);
(statearr_31632[(6)] = c__31364__auto___31727);

return statearr_31632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___31727,jobs,results,process,async))
);


var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__,jobs,results,process,async){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__,jobs,results,process,async){
return (function (state_31670){
var state_val_31671 = (state_31670[(1)]);
if((state_val_31671 === (7))){
var inst_31666 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31672_31736 = state_31670__$1;
(statearr_31672_31736[(2)] = inst_31666);

(statearr_31672_31736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (20))){
var state_31670__$1 = state_31670;
var statearr_31673_31737 = state_31670__$1;
(statearr_31673_31737[(2)] = null);

(statearr_31673_31737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (1))){
var state_31670__$1 = state_31670;
var statearr_31674_31738 = state_31670__$1;
(statearr_31674_31738[(2)] = null);

(statearr_31674_31738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (4))){
var inst_31635 = (state_31670[(7)]);
var inst_31635__$1 = (state_31670[(2)]);
var inst_31636 = (inst_31635__$1 == null);
var state_31670__$1 = (function (){var statearr_31675 = state_31670;
(statearr_31675[(7)] = inst_31635__$1);

return statearr_31675;
})();
if(cljs.core.truth_(inst_31636)){
var statearr_31676_31739 = state_31670__$1;
(statearr_31676_31739[(1)] = (5));

} else {
var statearr_31677_31740 = state_31670__$1;
(statearr_31677_31740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (15))){
var inst_31648 = (state_31670[(8)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31670__$1,(18),to,inst_31648);
} else {
if((state_val_31671 === (21))){
var inst_31661 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31678_31741 = state_31670__$1;
(statearr_31678_31741[(2)] = inst_31661);

(statearr_31678_31741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (13))){
var inst_31663 = (state_31670[(2)]);
var state_31670__$1 = (function (){var statearr_31679 = state_31670;
(statearr_31679[(9)] = inst_31663);

return statearr_31679;
})();
var statearr_31680_31742 = state_31670__$1;
(statearr_31680_31742[(2)] = null);

(statearr_31680_31742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (6))){
var inst_31635 = (state_31670[(7)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31670__$1,(11),inst_31635);
} else {
if((state_val_31671 === (17))){
var inst_31656 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
if(cljs.core.truth_(inst_31656)){
var statearr_31681_31743 = state_31670__$1;
(statearr_31681_31743[(1)] = (19));

} else {
var statearr_31682_31744 = state_31670__$1;
(statearr_31682_31744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (3))){
var inst_31668 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31670__$1,inst_31668);
} else {
if((state_val_31671 === (12))){
var inst_31645 = (state_31670[(10)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31670__$1,(14),inst_31645);
} else {
if((state_val_31671 === (2))){
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31670__$1,(4),results);
} else {
if((state_val_31671 === (19))){
var state_31670__$1 = state_31670;
var statearr_31683_31745 = state_31670__$1;
(statearr_31683_31745[(2)] = null);

(statearr_31683_31745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (11))){
var inst_31645 = (state_31670[(2)]);
var state_31670__$1 = (function (){var statearr_31684 = state_31670;
(statearr_31684[(10)] = inst_31645);

return statearr_31684;
})();
var statearr_31685_31746 = state_31670__$1;
(statearr_31685_31746[(2)] = null);

(statearr_31685_31746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (9))){
var state_31670__$1 = state_31670;
var statearr_31686_31747 = state_31670__$1;
(statearr_31686_31747[(2)] = null);

(statearr_31686_31747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (5))){
var state_31670__$1 = state_31670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31687_31748 = state_31670__$1;
(statearr_31687_31748[(1)] = (8));

} else {
var statearr_31688_31749 = state_31670__$1;
(statearr_31688_31749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (14))){
var inst_31650 = (state_31670[(11)]);
var inst_31648 = (state_31670[(8)]);
var inst_31648__$1 = (state_31670[(2)]);
var inst_31649 = (inst_31648__$1 == null);
var inst_31650__$1 = cljs.core.not.call(null,inst_31649);
var state_31670__$1 = (function (){var statearr_31689 = state_31670;
(statearr_31689[(11)] = inst_31650__$1);

(statearr_31689[(8)] = inst_31648__$1);

return statearr_31689;
})();
if(inst_31650__$1){
var statearr_31690_31750 = state_31670__$1;
(statearr_31690_31750[(1)] = (15));

} else {
var statearr_31691_31751 = state_31670__$1;
(statearr_31691_31751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (16))){
var inst_31650 = (state_31670[(11)]);
var state_31670__$1 = state_31670;
var statearr_31692_31752 = state_31670__$1;
(statearr_31692_31752[(2)] = inst_31650);

(statearr_31692_31752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (10))){
var inst_31642 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31693_31753 = state_31670__$1;
(statearr_31693_31753[(2)] = inst_31642);

(statearr_31693_31753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (18))){
var inst_31653 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31694_31754 = state_31670__$1;
(statearr_31694_31754[(2)] = inst_31653);

(statearr_31694_31754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (8))){
var inst_31639 = cljs.core.async.close_BANG_.call(null,to);
var state_31670__$1 = state_31670;
var statearr_31695_31755 = state_31670__$1;
(statearr_31695_31755[(2)] = inst_31639);

(statearr_31695_31755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto__,jobs,results,process,async))
;
return ((function (switch__31273__auto__,c__31364__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0 = (function (){
var statearr_31696 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__);

(statearr_31696[(1)] = (1));

return statearr_31696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1 = (function (state_31670){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31697){if((e31697 instanceof Object)){
var ex__31277__auto__ = e31697;
var statearr_31698_31756 = state_31670;
(statearr_31698_31756[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31757 = state_31670;
state_31670 = G__31757;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__,jobs,results,process,async))
})();
var state__31366__auto__ = (function (){var statearr_31699 = f__31365__auto__.call(null);
(statearr_31699[(6)] = c__31364__auto__);

return statearr_31699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__,jobs,results,process,async))
);

return c__31364__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31759 = arguments.length;
switch (G__31759) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31762 = arguments.length;
switch (G__31762) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31765 = arguments.length;
switch (G__31765) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31364__auto___31814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___31814,tc,fc){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___31814,tc,fc){
return (function (state_31791){
var state_val_31792 = (state_31791[(1)]);
if((state_val_31792 === (7))){
var inst_31787 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31793_31815 = state_31791__$1;
(statearr_31793_31815[(2)] = inst_31787);

(statearr_31793_31815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (1))){
var state_31791__$1 = state_31791;
var statearr_31794_31816 = state_31791__$1;
(statearr_31794_31816[(2)] = null);

(statearr_31794_31816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (4))){
var inst_31768 = (state_31791[(7)]);
var inst_31768__$1 = (state_31791[(2)]);
var inst_31769 = (inst_31768__$1 == null);
var state_31791__$1 = (function (){var statearr_31795 = state_31791;
(statearr_31795[(7)] = inst_31768__$1);

return statearr_31795;
})();
if(cljs.core.truth_(inst_31769)){
var statearr_31796_31817 = state_31791__$1;
(statearr_31796_31817[(1)] = (5));

} else {
var statearr_31797_31818 = state_31791__$1;
(statearr_31797_31818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (13))){
var state_31791__$1 = state_31791;
var statearr_31798_31819 = state_31791__$1;
(statearr_31798_31819[(2)] = null);

(statearr_31798_31819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (6))){
var inst_31768 = (state_31791[(7)]);
var inst_31774 = p.call(null,inst_31768);
var state_31791__$1 = state_31791;
if(cljs.core.truth_(inst_31774)){
var statearr_31799_31820 = state_31791__$1;
(statearr_31799_31820[(1)] = (9));

} else {
var statearr_31800_31821 = state_31791__$1;
(statearr_31800_31821[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (3))){
var inst_31789 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31791__$1,inst_31789);
} else {
if((state_val_31792 === (12))){
var state_31791__$1 = state_31791;
var statearr_31801_31822 = state_31791__$1;
(statearr_31801_31822[(2)] = null);

(statearr_31801_31822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (2))){
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31791__$1,(4),ch);
} else {
if((state_val_31792 === (11))){
var inst_31768 = (state_31791[(7)]);
var inst_31778 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31791__$1,(8),inst_31778,inst_31768);
} else {
if((state_val_31792 === (9))){
var state_31791__$1 = state_31791;
var statearr_31802_31823 = state_31791__$1;
(statearr_31802_31823[(2)] = tc);

(statearr_31802_31823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (5))){
var inst_31771 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31772 = cljs.core.async.close_BANG_.call(null,fc);
var state_31791__$1 = (function (){var statearr_31803 = state_31791;
(statearr_31803[(8)] = inst_31771);

return statearr_31803;
})();
var statearr_31804_31824 = state_31791__$1;
(statearr_31804_31824[(2)] = inst_31772);

(statearr_31804_31824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (14))){
var inst_31785 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31805_31825 = state_31791__$1;
(statearr_31805_31825[(2)] = inst_31785);

(statearr_31805_31825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (10))){
var state_31791__$1 = state_31791;
var statearr_31806_31826 = state_31791__$1;
(statearr_31806_31826[(2)] = fc);

(statearr_31806_31826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (8))){
var inst_31780 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
if(cljs.core.truth_(inst_31780)){
var statearr_31807_31827 = state_31791__$1;
(statearr_31807_31827[(1)] = (12));

} else {
var statearr_31808_31828 = state_31791__$1;
(statearr_31808_31828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___31814,tc,fc))
;
return ((function (switch__31273__auto__,c__31364__auto___31814,tc,fc){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_31809 = [null,null,null,null,null,null,null,null,null];
(statearr_31809[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_31809[(1)] = (1));

return statearr_31809;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_31791){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31810){if((e31810 instanceof Object)){
var ex__31277__auto__ = e31810;
var statearr_31811_31829 = state_31791;
(statearr_31811_31829[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31830 = state_31791;
state_31791 = G__31830;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_31791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_31791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___31814,tc,fc))
})();
var state__31366__auto__ = (function (){var statearr_31812 = f__31365__auto__.call(null);
(statearr_31812[(6)] = c__31364__auto___31814);

return statearr_31812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___31814,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__){
return (function (state_31851){
var state_val_31852 = (state_31851[(1)]);
if((state_val_31852 === (7))){
var inst_31847 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31853_31871 = state_31851__$1;
(statearr_31853_31871[(2)] = inst_31847);

(statearr_31853_31871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (1))){
var inst_31831 = init;
var state_31851__$1 = (function (){var statearr_31854 = state_31851;
(statearr_31854[(7)] = inst_31831);

return statearr_31854;
})();
var statearr_31855_31872 = state_31851__$1;
(statearr_31855_31872[(2)] = null);

(statearr_31855_31872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (4))){
var inst_31834 = (state_31851[(8)]);
var inst_31834__$1 = (state_31851[(2)]);
var inst_31835 = (inst_31834__$1 == null);
var state_31851__$1 = (function (){var statearr_31856 = state_31851;
(statearr_31856[(8)] = inst_31834__$1);

return statearr_31856;
})();
if(cljs.core.truth_(inst_31835)){
var statearr_31857_31873 = state_31851__$1;
(statearr_31857_31873[(1)] = (5));

} else {
var statearr_31858_31874 = state_31851__$1;
(statearr_31858_31874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (6))){
var inst_31834 = (state_31851[(8)]);
var inst_31838 = (state_31851[(9)]);
var inst_31831 = (state_31851[(7)]);
var inst_31838__$1 = f.call(null,inst_31831,inst_31834);
var inst_31839 = cljs.core.reduced_QMARK_.call(null,inst_31838__$1);
var state_31851__$1 = (function (){var statearr_31859 = state_31851;
(statearr_31859[(9)] = inst_31838__$1);

return statearr_31859;
})();
if(inst_31839){
var statearr_31860_31875 = state_31851__$1;
(statearr_31860_31875[(1)] = (8));

} else {
var statearr_31861_31876 = state_31851__$1;
(statearr_31861_31876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (3))){
var inst_31849 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31851__$1,inst_31849);
} else {
if((state_val_31852 === (2))){
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(4),ch);
} else {
if((state_val_31852 === (9))){
var inst_31838 = (state_31851[(9)]);
var inst_31831 = inst_31838;
var state_31851__$1 = (function (){var statearr_31862 = state_31851;
(statearr_31862[(7)] = inst_31831);

return statearr_31862;
})();
var statearr_31863_31877 = state_31851__$1;
(statearr_31863_31877[(2)] = null);

(statearr_31863_31877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (5))){
var inst_31831 = (state_31851[(7)]);
var state_31851__$1 = state_31851;
var statearr_31864_31878 = state_31851__$1;
(statearr_31864_31878[(2)] = inst_31831);

(statearr_31864_31878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (10))){
var inst_31845 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31865_31879 = state_31851__$1;
(statearr_31865_31879[(2)] = inst_31845);

(statearr_31865_31879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (8))){
var inst_31838 = (state_31851[(9)]);
var inst_31841 = cljs.core.deref.call(null,inst_31838);
var state_31851__$1 = state_31851;
var statearr_31866_31880 = state_31851__$1;
(statearr_31866_31880[(2)] = inst_31841);

(statearr_31866_31880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto__))
;
return ((function (switch__31273__auto__,c__31364__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31274__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31274__auto____0 = (function (){
var statearr_31867 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31867[(0)] = cljs$core$async$reduce_$_state_machine__31274__auto__);

(statearr_31867[(1)] = (1));

return statearr_31867;
});
var cljs$core$async$reduce_$_state_machine__31274__auto____1 = (function (state_31851){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31868){if((e31868 instanceof Object)){
var ex__31277__auto__ = e31868;
var statearr_31869_31881 = state_31851;
(statearr_31869_31881[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31882 = state_31851;
state_31851 = G__31882;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31274__auto__ = function(state_31851){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31274__auto____1.call(this,state_31851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31274__auto____0;
cljs$core$async$reduce_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31274__auto____1;
return cljs$core$async$reduce_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__))
})();
var state__31366__auto__ = (function (){var statearr_31870 = f__31365__auto__.call(null);
(statearr_31870[(6)] = c__31364__auto__);

return statearr_31870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__))
);

return c__31364__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__,f__$1){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__,f__$1){
return (function (state_31888){
var state_val_31889 = (state_31888[(1)]);
if((state_val_31889 === (1))){
var inst_31883 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31888__$1,(2),inst_31883);
} else {
if((state_val_31889 === (2))){
var inst_31885 = (state_31888[(2)]);
var inst_31886 = f__$1.call(null,inst_31885);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31888__$1,inst_31886);
} else {
return null;
}
}
});})(c__31364__auto__,f__$1))
;
return ((function (switch__31273__auto__,c__31364__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31274__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31274__auto____0 = (function (){
var statearr_31890 = [null,null,null,null,null,null,null];
(statearr_31890[(0)] = cljs$core$async$transduce_$_state_machine__31274__auto__);

(statearr_31890[(1)] = (1));

return statearr_31890;
});
var cljs$core$async$transduce_$_state_machine__31274__auto____1 = (function (state_31888){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31891){if((e31891 instanceof Object)){
var ex__31277__auto__ = e31891;
var statearr_31892_31894 = state_31888;
(statearr_31892_31894[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31895 = state_31888;
state_31888 = G__31895;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31274__auto__ = function(state_31888){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31274__auto____1.call(this,state_31888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31274__auto____0;
cljs$core$async$transduce_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31274__auto____1;
return cljs$core$async$transduce_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__,f__$1))
})();
var state__31366__auto__ = (function (){var statearr_31893 = f__31365__auto__.call(null);
(statearr_31893[(6)] = c__31364__auto__);

return statearr_31893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__,f__$1))
);

return c__31364__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31897 = arguments.length;
switch (G__31897) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__){
return (function (state_31922){
var state_val_31923 = (state_31922[(1)]);
if((state_val_31923 === (7))){
var inst_31904 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31924_31945 = state_31922__$1;
(statearr_31924_31945[(2)] = inst_31904);

(statearr_31924_31945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (1))){
var inst_31898 = cljs.core.seq.call(null,coll);
var inst_31899 = inst_31898;
var state_31922__$1 = (function (){var statearr_31925 = state_31922;
(statearr_31925[(7)] = inst_31899);

return statearr_31925;
})();
var statearr_31926_31946 = state_31922__$1;
(statearr_31926_31946[(2)] = null);

(statearr_31926_31946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (4))){
var inst_31899 = (state_31922[(7)]);
var inst_31902 = cljs.core.first.call(null,inst_31899);
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31922__$1,(7),ch,inst_31902);
} else {
if((state_val_31923 === (13))){
var inst_31916 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31927_31947 = state_31922__$1;
(statearr_31927_31947[(2)] = inst_31916);

(statearr_31927_31947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (6))){
var inst_31907 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
if(cljs.core.truth_(inst_31907)){
var statearr_31928_31948 = state_31922__$1;
(statearr_31928_31948[(1)] = (8));

} else {
var statearr_31929_31949 = state_31922__$1;
(statearr_31929_31949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (3))){
var inst_31920 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31922__$1,inst_31920);
} else {
if((state_val_31923 === (12))){
var state_31922__$1 = state_31922;
var statearr_31930_31950 = state_31922__$1;
(statearr_31930_31950[(2)] = null);

(statearr_31930_31950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (2))){
var inst_31899 = (state_31922[(7)]);
var state_31922__$1 = state_31922;
if(cljs.core.truth_(inst_31899)){
var statearr_31931_31951 = state_31922__$1;
(statearr_31931_31951[(1)] = (4));

} else {
var statearr_31932_31952 = state_31922__$1;
(statearr_31932_31952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (11))){
var inst_31913 = cljs.core.async.close_BANG_.call(null,ch);
var state_31922__$1 = state_31922;
var statearr_31933_31953 = state_31922__$1;
(statearr_31933_31953[(2)] = inst_31913);

(statearr_31933_31953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (9))){
var state_31922__$1 = state_31922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31934_31954 = state_31922__$1;
(statearr_31934_31954[(1)] = (11));

} else {
var statearr_31935_31955 = state_31922__$1;
(statearr_31935_31955[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (5))){
var inst_31899 = (state_31922[(7)]);
var state_31922__$1 = state_31922;
var statearr_31936_31956 = state_31922__$1;
(statearr_31936_31956[(2)] = inst_31899);

(statearr_31936_31956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (10))){
var inst_31918 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31937_31957 = state_31922__$1;
(statearr_31937_31957[(2)] = inst_31918);

(statearr_31937_31957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (8))){
var inst_31899 = (state_31922[(7)]);
var inst_31909 = cljs.core.next.call(null,inst_31899);
var inst_31899__$1 = inst_31909;
var state_31922__$1 = (function (){var statearr_31938 = state_31922;
(statearr_31938[(7)] = inst_31899__$1);

return statearr_31938;
})();
var statearr_31939_31958 = state_31922__$1;
(statearr_31939_31958[(2)] = null);

(statearr_31939_31958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto__))
;
return ((function (switch__31273__auto__,c__31364__auto__){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_31940 = [null,null,null,null,null,null,null,null];
(statearr_31940[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_31940[(1)] = (1));

return statearr_31940;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_31922){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_31922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e31941){if((e31941 instanceof Object)){
var ex__31277__auto__ = e31941;
var statearr_31942_31959 = state_31922;
(statearr_31942_31959[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31960 = state_31922;
state_31922 = G__31960;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_31922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_31922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__))
})();
var state__31366__auto__ = (function (){var statearr_31943 = f__31365__auto__.call(null);
(statearr_31943[(6)] = c__31364__auto__);

return statearr_31943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__))
);

return c__31364__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31961 = (function (ch,cs,meta31962){
this.ch = ch;
this.cs = cs;
this.meta31962 = meta31962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31963,meta31962__$1){
var self__ = this;
var _31963__$1 = this;
return (new cljs.core.async.t_cljs$core$async31961(self__.ch,self__.cs,meta31962__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31963){
var self__ = this;
var _31963__$1 = this;
return self__.meta31962;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31962","meta31962",328271802,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31961";

cljs.core.async.t_cljs$core$async31961.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31961");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31961.
 */
cljs.core.async.__GT_t_cljs$core$async31961 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31961(ch__$1,cs__$1,meta31962){
return (new cljs.core.async.t_cljs$core$async31961(ch__$1,cs__$1,meta31962));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31961(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31364__auto___32183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___32183,cs,m,dchan,dctr,done){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___32183,cs,m,dchan,dctr,done){
return (function (state_32098){
var state_val_32099 = (state_32098[(1)]);
if((state_val_32099 === (7))){
var inst_32094 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32100_32184 = state_32098__$1;
(statearr_32100_32184[(2)] = inst_32094);

(statearr_32100_32184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (20))){
var inst_31997 = (state_32098[(7)]);
var inst_32009 = cljs.core.first.call(null,inst_31997);
var inst_32010 = cljs.core.nth.call(null,inst_32009,(0),null);
var inst_32011 = cljs.core.nth.call(null,inst_32009,(1),null);
var state_32098__$1 = (function (){var statearr_32101 = state_32098;
(statearr_32101[(8)] = inst_32010);

return statearr_32101;
})();
if(cljs.core.truth_(inst_32011)){
var statearr_32102_32185 = state_32098__$1;
(statearr_32102_32185[(1)] = (22));

} else {
var statearr_32103_32186 = state_32098__$1;
(statearr_32103_32186[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (27))){
var inst_31966 = (state_32098[(9)]);
var inst_32046 = (state_32098[(10)]);
var inst_32039 = (state_32098[(11)]);
var inst_32041 = (state_32098[(12)]);
var inst_32046__$1 = cljs.core._nth.call(null,inst_32039,inst_32041);
var inst_32047 = cljs.core.async.put_BANG_.call(null,inst_32046__$1,inst_31966,done);
var state_32098__$1 = (function (){var statearr_32104 = state_32098;
(statearr_32104[(10)] = inst_32046__$1);

return statearr_32104;
})();
if(cljs.core.truth_(inst_32047)){
var statearr_32105_32187 = state_32098__$1;
(statearr_32105_32187[(1)] = (30));

} else {
var statearr_32106_32188 = state_32098__$1;
(statearr_32106_32188[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (1))){
var state_32098__$1 = state_32098;
var statearr_32107_32189 = state_32098__$1;
(statearr_32107_32189[(2)] = null);

(statearr_32107_32189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (24))){
var inst_31997 = (state_32098[(7)]);
var inst_32016 = (state_32098[(2)]);
var inst_32017 = cljs.core.next.call(null,inst_31997);
var inst_31975 = inst_32017;
var inst_31976 = null;
var inst_31977 = (0);
var inst_31978 = (0);
var state_32098__$1 = (function (){var statearr_32108 = state_32098;
(statearr_32108[(13)] = inst_31975);

(statearr_32108[(14)] = inst_31976);

(statearr_32108[(15)] = inst_31977);

(statearr_32108[(16)] = inst_31978);

(statearr_32108[(17)] = inst_32016);

return statearr_32108;
})();
var statearr_32109_32190 = state_32098__$1;
(statearr_32109_32190[(2)] = null);

(statearr_32109_32190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (39))){
var state_32098__$1 = state_32098;
var statearr_32113_32191 = state_32098__$1;
(statearr_32113_32191[(2)] = null);

(statearr_32113_32191[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (4))){
var inst_31966 = (state_32098[(9)]);
var inst_31966__$1 = (state_32098[(2)]);
var inst_31967 = (inst_31966__$1 == null);
var state_32098__$1 = (function (){var statearr_32114 = state_32098;
(statearr_32114[(9)] = inst_31966__$1);

return statearr_32114;
})();
if(cljs.core.truth_(inst_31967)){
var statearr_32115_32192 = state_32098__$1;
(statearr_32115_32192[(1)] = (5));

} else {
var statearr_32116_32193 = state_32098__$1;
(statearr_32116_32193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (15))){
var inst_31975 = (state_32098[(13)]);
var inst_31976 = (state_32098[(14)]);
var inst_31977 = (state_32098[(15)]);
var inst_31978 = (state_32098[(16)]);
var inst_31993 = (state_32098[(2)]);
var inst_31994 = (inst_31978 + (1));
var tmp32110 = inst_31975;
var tmp32111 = inst_31976;
var tmp32112 = inst_31977;
var inst_31975__$1 = tmp32110;
var inst_31976__$1 = tmp32111;
var inst_31977__$1 = tmp32112;
var inst_31978__$1 = inst_31994;
var state_32098__$1 = (function (){var statearr_32117 = state_32098;
(statearr_32117[(13)] = inst_31975__$1);

(statearr_32117[(14)] = inst_31976__$1);

(statearr_32117[(15)] = inst_31977__$1);

(statearr_32117[(18)] = inst_31993);

(statearr_32117[(16)] = inst_31978__$1);

return statearr_32117;
})();
var statearr_32118_32194 = state_32098__$1;
(statearr_32118_32194[(2)] = null);

(statearr_32118_32194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (21))){
var inst_32020 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32122_32195 = state_32098__$1;
(statearr_32122_32195[(2)] = inst_32020);

(statearr_32122_32195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (31))){
var inst_32046 = (state_32098[(10)]);
var inst_32050 = done.call(null,null);
var inst_32051 = cljs.core.async.untap_STAR_.call(null,m,inst_32046);
var state_32098__$1 = (function (){var statearr_32123 = state_32098;
(statearr_32123[(19)] = inst_32050);

return statearr_32123;
})();
var statearr_32124_32196 = state_32098__$1;
(statearr_32124_32196[(2)] = inst_32051);

(statearr_32124_32196[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (32))){
var inst_32038 = (state_32098[(20)]);
var inst_32039 = (state_32098[(11)]);
var inst_32041 = (state_32098[(12)]);
var inst_32040 = (state_32098[(21)]);
var inst_32053 = (state_32098[(2)]);
var inst_32054 = (inst_32041 + (1));
var tmp32119 = inst_32038;
var tmp32120 = inst_32039;
var tmp32121 = inst_32040;
var inst_32038__$1 = tmp32119;
var inst_32039__$1 = tmp32120;
var inst_32040__$1 = tmp32121;
var inst_32041__$1 = inst_32054;
var state_32098__$1 = (function (){var statearr_32125 = state_32098;
(statearr_32125[(20)] = inst_32038__$1);

(statearr_32125[(11)] = inst_32039__$1);

(statearr_32125[(12)] = inst_32041__$1);

(statearr_32125[(21)] = inst_32040__$1);

(statearr_32125[(22)] = inst_32053);

return statearr_32125;
})();
var statearr_32126_32197 = state_32098__$1;
(statearr_32126_32197[(2)] = null);

(statearr_32126_32197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (40))){
var inst_32066 = (state_32098[(23)]);
var inst_32070 = done.call(null,null);
var inst_32071 = cljs.core.async.untap_STAR_.call(null,m,inst_32066);
var state_32098__$1 = (function (){var statearr_32127 = state_32098;
(statearr_32127[(24)] = inst_32070);

return statearr_32127;
})();
var statearr_32128_32198 = state_32098__$1;
(statearr_32128_32198[(2)] = inst_32071);

(statearr_32128_32198[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (33))){
var inst_32057 = (state_32098[(25)]);
var inst_32059 = cljs.core.chunked_seq_QMARK_.call(null,inst_32057);
var state_32098__$1 = state_32098;
if(inst_32059){
var statearr_32129_32199 = state_32098__$1;
(statearr_32129_32199[(1)] = (36));

} else {
var statearr_32130_32200 = state_32098__$1;
(statearr_32130_32200[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (13))){
var inst_31987 = (state_32098[(26)]);
var inst_31990 = cljs.core.async.close_BANG_.call(null,inst_31987);
var state_32098__$1 = state_32098;
var statearr_32131_32201 = state_32098__$1;
(statearr_32131_32201[(2)] = inst_31990);

(statearr_32131_32201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (22))){
var inst_32010 = (state_32098[(8)]);
var inst_32013 = cljs.core.async.close_BANG_.call(null,inst_32010);
var state_32098__$1 = state_32098;
var statearr_32132_32202 = state_32098__$1;
(statearr_32132_32202[(2)] = inst_32013);

(statearr_32132_32202[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (36))){
var inst_32057 = (state_32098[(25)]);
var inst_32061 = cljs.core.chunk_first.call(null,inst_32057);
var inst_32062 = cljs.core.chunk_rest.call(null,inst_32057);
var inst_32063 = cljs.core.count.call(null,inst_32061);
var inst_32038 = inst_32062;
var inst_32039 = inst_32061;
var inst_32040 = inst_32063;
var inst_32041 = (0);
var state_32098__$1 = (function (){var statearr_32133 = state_32098;
(statearr_32133[(20)] = inst_32038);

(statearr_32133[(11)] = inst_32039);

(statearr_32133[(12)] = inst_32041);

(statearr_32133[(21)] = inst_32040);

return statearr_32133;
})();
var statearr_32134_32203 = state_32098__$1;
(statearr_32134_32203[(2)] = null);

(statearr_32134_32203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (41))){
var inst_32057 = (state_32098[(25)]);
var inst_32073 = (state_32098[(2)]);
var inst_32074 = cljs.core.next.call(null,inst_32057);
var inst_32038 = inst_32074;
var inst_32039 = null;
var inst_32040 = (0);
var inst_32041 = (0);
var state_32098__$1 = (function (){var statearr_32135 = state_32098;
(statearr_32135[(20)] = inst_32038);

(statearr_32135[(11)] = inst_32039);

(statearr_32135[(12)] = inst_32041);

(statearr_32135[(27)] = inst_32073);

(statearr_32135[(21)] = inst_32040);

return statearr_32135;
})();
var statearr_32136_32204 = state_32098__$1;
(statearr_32136_32204[(2)] = null);

(statearr_32136_32204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (43))){
var state_32098__$1 = state_32098;
var statearr_32137_32205 = state_32098__$1;
(statearr_32137_32205[(2)] = null);

(statearr_32137_32205[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (29))){
var inst_32082 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32138_32206 = state_32098__$1;
(statearr_32138_32206[(2)] = inst_32082);

(statearr_32138_32206[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (44))){
var inst_32091 = (state_32098[(2)]);
var state_32098__$1 = (function (){var statearr_32139 = state_32098;
(statearr_32139[(28)] = inst_32091);

return statearr_32139;
})();
var statearr_32140_32207 = state_32098__$1;
(statearr_32140_32207[(2)] = null);

(statearr_32140_32207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (6))){
var inst_32030 = (state_32098[(29)]);
var inst_32029 = cljs.core.deref.call(null,cs);
var inst_32030__$1 = cljs.core.keys.call(null,inst_32029);
var inst_32031 = cljs.core.count.call(null,inst_32030__$1);
var inst_32032 = cljs.core.reset_BANG_.call(null,dctr,inst_32031);
var inst_32037 = cljs.core.seq.call(null,inst_32030__$1);
var inst_32038 = inst_32037;
var inst_32039 = null;
var inst_32040 = (0);
var inst_32041 = (0);
var state_32098__$1 = (function (){var statearr_32141 = state_32098;
(statearr_32141[(30)] = inst_32032);

(statearr_32141[(20)] = inst_32038);

(statearr_32141[(29)] = inst_32030__$1);

(statearr_32141[(11)] = inst_32039);

(statearr_32141[(12)] = inst_32041);

(statearr_32141[(21)] = inst_32040);

return statearr_32141;
})();
var statearr_32142_32208 = state_32098__$1;
(statearr_32142_32208[(2)] = null);

(statearr_32142_32208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (28))){
var inst_32038 = (state_32098[(20)]);
var inst_32057 = (state_32098[(25)]);
var inst_32057__$1 = cljs.core.seq.call(null,inst_32038);
var state_32098__$1 = (function (){var statearr_32143 = state_32098;
(statearr_32143[(25)] = inst_32057__$1);

return statearr_32143;
})();
if(inst_32057__$1){
var statearr_32144_32209 = state_32098__$1;
(statearr_32144_32209[(1)] = (33));

} else {
var statearr_32145_32210 = state_32098__$1;
(statearr_32145_32210[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (25))){
var inst_32041 = (state_32098[(12)]);
var inst_32040 = (state_32098[(21)]);
var inst_32043 = (inst_32041 < inst_32040);
var inst_32044 = inst_32043;
var state_32098__$1 = state_32098;
if(cljs.core.truth_(inst_32044)){
var statearr_32146_32211 = state_32098__$1;
(statearr_32146_32211[(1)] = (27));

} else {
var statearr_32147_32212 = state_32098__$1;
(statearr_32147_32212[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (34))){
var state_32098__$1 = state_32098;
var statearr_32148_32213 = state_32098__$1;
(statearr_32148_32213[(2)] = null);

(statearr_32148_32213[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (17))){
var state_32098__$1 = state_32098;
var statearr_32149_32214 = state_32098__$1;
(statearr_32149_32214[(2)] = null);

(statearr_32149_32214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (3))){
var inst_32096 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32098__$1,inst_32096);
} else {
if((state_val_32099 === (12))){
var inst_32025 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32150_32215 = state_32098__$1;
(statearr_32150_32215[(2)] = inst_32025);

(statearr_32150_32215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (2))){
var state_32098__$1 = state_32098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32098__$1,(4),ch);
} else {
if((state_val_32099 === (23))){
var state_32098__$1 = state_32098;
var statearr_32151_32216 = state_32098__$1;
(statearr_32151_32216[(2)] = null);

(statearr_32151_32216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (35))){
var inst_32080 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32152_32217 = state_32098__$1;
(statearr_32152_32217[(2)] = inst_32080);

(statearr_32152_32217[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (19))){
var inst_31997 = (state_32098[(7)]);
var inst_32001 = cljs.core.chunk_first.call(null,inst_31997);
var inst_32002 = cljs.core.chunk_rest.call(null,inst_31997);
var inst_32003 = cljs.core.count.call(null,inst_32001);
var inst_31975 = inst_32002;
var inst_31976 = inst_32001;
var inst_31977 = inst_32003;
var inst_31978 = (0);
var state_32098__$1 = (function (){var statearr_32153 = state_32098;
(statearr_32153[(13)] = inst_31975);

(statearr_32153[(14)] = inst_31976);

(statearr_32153[(15)] = inst_31977);

(statearr_32153[(16)] = inst_31978);

return statearr_32153;
})();
var statearr_32154_32218 = state_32098__$1;
(statearr_32154_32218[(2)] = null);

(statearr_32154_32218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (11))){
var inst_31975 = (state_32098[(13)]);
var inst_31997 = (state_32098[(7)]);
var inst_31997__$1 = cljs.core.seq.call(null,inst_31975);
var state_32098__$1 = (function (){var statearr_32155 = state_32098;
(statearr_32155[(7)] = inst_31997__$1);

return statearr_32155;
})();
if(inst_31997__$1){
var statearr_32156_32219 = state_32098__$1;
(statearr_32156_32219[(1)] = (16));

} else {
var statearr_32157_32220 = state_32098__$1;
(statearr_32157_32220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (9))){
var inst_32027 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32158_32221 = state_32098__$1;
(statearr_32158_32221[(2)] = inst_32027);

(statearr_32158_32221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (5))){
var inst_31973 = cljs.core.deref.call(null,cs);
var inst_31974 = cljs.core.seq.call(null,inst_31973);
var inst_31975 = inst_31974;
var inst_31976 = null;
var inst_31977 = (0);
var inst_31978 = (0);
var state_32098__$1 = (function (){var statearr_32159 = state_32098;
(statearr_32159[(13)] = inst_31975);

(statearr_32159[(14)] = inst_31976);

(statearr_32159[(15)] = inst_31977);

(statearr_32159[(16)] = inst_31978);

return statearr_32159;
})();
var statearr_32160_32222 = state_32098__$1;
(statearr_32160_32222[(2)] = null);

(statearr_32160_32222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (14))){
var state_32098__$1 = state_32098;
var statearr_32161_32223 = state_32098__$1;
(statearr_32161_32223[(2)] = null);

(statearr_32161_32223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (45))){
var inst_32088 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32162_32224 = state_32098__$1;
(statearr_32162_32224[(2)] = inst_32088);

(statearr_32162_32224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (26))){
var inst_32030 = (state_32098[(29)]);
var inst_32084 = (state_32098[(2)]);
var inst_32085 = cljs.core.seq.call(null,inst_32030);
var state_32098__$1 = (function (){var statearr_32163 = state_32098;
(statearr_32163[(31)] = inst_32084);

return statearr_32163;
})();
if(inst_32085){
var statearr_32164_32225 = state_32098__$1;
(statearr_32164_32225[(1)] = (42));

} else {
var statearr_32165_32226 = state_32098__$1;
(statearr_32165_32226[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (16))){
var inst_31997 = (state_32098[(7)]);
var inst_31999 = cljs.core.chunked_seq_QMARK_.call(null,inst_31997);
var state_32098__$1 = state_32098;
if(inst_31999){
var statearr_32166_32227 = state_32098__$1;
(statearr_32166_32227[(1)] = (19));

} else {
var statearr_32167_32228 = state_32098__$1;
(statearr_32167_32228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (38))){
var inst_32077 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32168_32229 = state_32098__$1;
(statearr_32168_32229[(2)] = inst_32077);

(statearr_32168_32229[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (30))){
var state_32098__$1 = state_32098;
var statearr_32169_32230 = state_32098__$1;
(statearr_32169_32230[(2)] = null);

(statearr_32169_32230[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (10))){
var inst_31976 = (state_32098[(14)]);
var inst_31978 = (state_32098[(16)]);
var inst_31986 = cljs.core._nth.call(null,inst_31976,inst_31978);
var inst_31987 = cljs.core.nth.call(null,inst_31986,(0),null);
var inst_31988 = cljs.core.nth.call(null,inst_31986,(1),null);
var state_32098__$1 = (function (){var statearr_32170 = state_32098;
(statearr_32170[(26)] = inst_31987);

return statearr_32170;
})();
if(cljs.core.truth_(inst_31988)){
var statearr_32171_32231 = state_32098__$1;
(statearr_32171_32231[(1)] = (13));

} else {
var statearr_32172_32232 = state_32098__$1;
(statearr_32172_32232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (18))){
var inst_32023 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32173_32233 = state_32098__$1;
(statearr_32173_32233[(2)] = inst_32023);

(statearr_32173_32233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (42))){
var state_32098__$1 = state_32098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32098__$1,(45),dchan);
} else {
if((state_val_32099 === (37))){
var inst_31966 = (state_32098[(9)]);
var inst_32057 = (state_32098[(25)]);
var inst_32066 = (state_32098[(23)]);
var inst_32066__$1 = cljs.core.first.call(null,inst_32057);
var inst_32067 = cljs.core.async.put_BANG_.call(null,inst_32066__$1,inst_31966,done);
var state_32098__$1 = (function (){var statearr_32174 = state_32098;
(statearr_32174[(23)] = inst_32066__$1);

return statearr_32174;
})();
if(cljs.core.truth_(inst_32067)){
var statearr_32175_32234 = state_32098__$1;
(statearr_32175_32234[(1)] = (39));

} else {
var statearr_32176_32235 = state_32098__$1;
(statearr_32176_32235[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (8))){
var inst_31977 = (state_32098[(15)]);
var inst_31978 = (state_32098[(16)]);
var inst_31980 = (inst_31978 < inst_31977);
var inst_31981 = inst_31980;
var state_32098__$1 = state_32098;
if(cljs.core.truth_(inst_31981)){
var statearr_32177_32236 = state_32098__$1;
(statearr_32177_32236[(1)] = (10));

} else {
var statearr_32178_32237 = state_32098__$1;
(statearr_32178_32237[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___32183,cs,m,dchan,dctr,done))
;
return ((function (switch__31273__auto__,c__31364__auto___32183,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31274__auto__ = null;
var cljs$core$async$mult_$_state_machine__31274__auto____0 = (function (){
var statearr_32179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32179[(0)] = cljs$core$async$mult_$_state_machine__31274__auto__);

(statearr_32179[(1)] = (1));

return statearr_32179;
});
var cljs$core$async$mult_$_state_machine__31274__auto____1 = (function (state_32098){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_32098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e32180){if((e32180 instanceof Object)){
var ex__31277__auto__ = e32180;
var statearr_32181_32238 = state_32098;
(statearr_32181_32238[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32239 = state_32098;
state_32098 = G__32239;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31274__auto__ = function(state_32098){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31274__auto____1.call(this,state_32098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31274__auto____0;
cljs$core$async$mult_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31274__auto____1;
return cljs$core$async$mult_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___32183,cs,m,dchan,dctr,done))
})();
var state__31366__auto__ = (function (){var statearr_32182 = f__31365__auto__.call(null);
(statearr_32182[(6)] = c__31364__auto___32183);

return statearr_32182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___32183,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32241 = arguments.length;
switch (G__32241) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32253 = arguments.length;
var i__4532__auto___32254 = (0);
while(true){
if((i__4532__auto___32254 < len__4531__auto___32253)){
args__4534__auto__.push((arguments[i__4532__auto___32254]));

var G__32255 = (i__4532__auto___32254 + (1));
i__4532__auto___32254 = G__32255;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32247){
var map__32248 = p__32247;
var map__32248__$1 = ((((!((map__32248 == null)))?(((((map__32248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32248):map__32248);
var opts = map__32248__$1;
var statearr_32250_32256 = state;
(statearr_32250_32256[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__32248,map__32248__$1,opts){
return (function (val){
var statearr_32251_32257 = state;
(statearr_32251_32257[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32248,map__32248__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_32252_32258 = state;
(statearr_32252_32258[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32243){
var G__32244 = cljs.core.first.call(null,seq32243);
var seq32243__$1 = cljs.core.next.call(null,seq32243);
var G__32245 = cljs.core.first.call(null,seq32243__$1);
var seq32243__$2 = cljs.core.next.call(null,seq32243__$1);
var G__32246 = cljs.core.first.call(null,seq32243__$2);
var seq32243__$3 = cljs.core.next.call(null,seq32243__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32244,G__32245,G__32246,seq32243__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32259 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32260){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32260 = meta32260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32261,meta32260__$1){
var self__ = this;
var _32261__$1 = this;
return (new cljs.core.async.t_cljs$core$async32259(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32260__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32261){
var self__ = this;
var _32261__$1 = this;
return self__.meta32260;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32260","meta32260",936988589,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32259";

cljs.core.async.t_cljs$core$async32259.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32259");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32259.
 */
cljs.core.async.__GT_t_cljs$core$async32259 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32259(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32260){
return (new cljs.core.async.t_cljs$core$async32259(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32260));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32259(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31364__auto___32423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___32423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___32423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32363){
var state_val_32364 = (state_32363[(1)]);
if((state_val_32364 === (7))){
var inst_32278 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32365_32424 = state_32363__$1;
(statearr_32365_32424[(2)] = inst_32278);

(statearr_32365_32424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (20))){
var inst_32290 = (state_32363[(7)]);
var state_32363__$1 = state_32363;
var statearr_32366_32425 = state_32363__$1;
(statearr_32366_32425[(2)] = inst_32290);

(statearr_32366_32425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (27))){
var state_32363__$1 = state_32363;
var statearr_32367_32426 = state_32363__$1;
(statearr_32367_32426[(2)] = null);

(statearr_32367_32426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (1))){
var inst_32265 = (state_32363[(8)]);
var inst_32265__$1 = calc_state.call(null);
var inst_32267 = (inst_32265__$1 == null);
var inst_32268 = cljs.core.not.call(null,inst_32267);
var state_32363__$1 = (function (){var statearr_32368 = state_32363;
(statearr_32368[(8)] = inst_32265__$1);

return statearr_32368;
})();
if(inst_32268){
var statearr_32369_32427 = state_32363__$1;
(statearr_32369_32427[(1)] = (2));

} else {
var statearr_32370_32428 = state_32363__$1;
(statearr_32370_32428[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (24))){
var inst_32337 = (state_32363[(9)]);
var inst_32314 = (state_32363[(10)]);
var inst_32323 = (state_32363[(11)]);
var inst_32337__$1 = inst_32314.call(null,inst_32323);
var state_32363__$1 = (function (){var statearr_32371 = state_32363;
(statearr_32371[(9)] = inst_32337__$1);

return statearr_32371;
})();
if(cljs.core.truth_(inst_32337__$1)){
var statearr_32372_32429 = state_32363__$1;
(statearr_32372_32429[(1)] = (29));

} else {
var statearr_32373_32430 = state_32363__$1;
(statearr_32373_32430[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (4))){
var inst_32281 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32281)){
var statearr_32374_32431 = state_32363__$1;
(statearr_32374_32431[(1)] = (8));

} else {
var statearr_32375_32432 = state_32363__$1;
(statearr_32375_32432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (15))){
var inst_32308 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32308)){
var statearr_32376_32433 = state_32363__$1;
(statearr_32376_32433[(1)] = (19));

} else {
var statearr_32377_32434 = state_32363__$1;
(statearr_32377_32434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (21))){
var inst_32313 = (state_32363[(12)]);
var inst_32313__$1 = (state_32363[(2)]);
var inst_32314 = cljs.core.get.call(null,inst_32313__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32315 = cljs.core.get.call(null,inst_32313__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32316 = cljs.core.get.call(null,inst_32313__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32363__$1 = (function (){var statearr_32378 = state_32363;
(statearr_32378[(12)] = inst_32313__$1);

(statearr_32378[(13)] = inst_32315);

(statearr_32378[(10)] = inst_32314);

return statearr_32378;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32363__$1,(22),inst_32316);
} else {
if((state_val_32364 === (31))){
var inst_32345 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32345)){
var statearr_32379_32435 = state_32363__$1;
(statearr_32379_32435[(1)] = (32));

} else {
var statearr_32380_32436 = state_32363__$1;
(statearr_32380_32436[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (32))){
var inst_32322 = (state_32363[(14)]);
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32363__$1,(35),out,inst_32322);
} else {
if((state_val_32364 === (33))){
var inst_32313 = (state_32363[(12)]);
var inst_32290 = inst_32313;
var state_32363__$1 = (function (){var statearr_32381 = state_32363;
(statearr_32381[(7)] = inst_32290);

return statearr_32381;
})();
var statearr_32382_32437 = state_32363__$1;
(statearr_32382_32437[(2)] = null);

(statearr_32382_32437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (13))){
var inst_32290 = (state_32363[(7)]);
var inst_32297 = inst_32290.cljs$lang$protocol_mask$partition0$;
var inst_32298 = (inst_32297 & (64));
var inst_32299 = inst_32290.cljs$core$ISeq$;
var inst_32300 = (cljs.core.PROTOCOL_SENTINEL === inst_32299);
var inst_32301 = ((inst_32298) || (inst_32300));
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32301)){
var statearr_32383_32438 = state_32363__$1;
(statearr_32383_32438[(1)] = (16));

} else {
var statearr_32384_32439 = state_32363__$1;
(statearr_32384_32439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (22))){
var inst_32322 = (state_32363[(14)]);
var inst_32323 = (state_32363[(11)]);
var inst_32321 = (state_32363[(2)]);
var inst_32322__$1 = cljs.core.nth.call(null,inst_32321,(0),null);
var inst_32323__$1 = cljs.core.nth.call(null,inst_32321,(1),null);
var inst_32324 = (inst_32322__$1 == null);
var inst_32325 = cljs.core._EQ_.call(null,inst_32323__$1,change);
var inst_32326 = ((inst_32324) || (inst_32325));
var state_32363__$1 = (function (){var statearr_32385 = state_32363;
(statearr_32385[(14)] = inst_32322__$1);

(statearr_32385[(11)] = inst_32323__$1);

return statearr_32385;
})();
if(cljs.core.truth_(inst_32326)){
var statearr_32386_32440 = state_32363__$1;
(statearr_32386_32440[(1)] = (23));

} else {
var statearr_32387_32441 = state_32363__$1;
(statearr_32387_32441[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (36))){
var inst_32313 = (state_32363[(12)]);
var inst_32290 = inst_32313;
var state_32363__$1 = (function (){var statearr_32388 = state_32363;
(statearr_32388[(7)] = inst_32290);

return statearr_32388;
})();
var statearr_32389_32442 = state_32363__$1;
(statearr_32389_32442[(2)] = null);

(statearr_32389_32442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (29))){
var inst_32337 = (state_32363[(9)]);
var state_32363__$1 = state_32363;
var statearr_32390_32443 = state_32363__$1;
(statearr_32390_32443[(2)] = inst_32337);

(statearr_32390_32443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (6))){
var state_32363__$1 = state_32363;
var statearr_32391_32444 = state_32363__$1;
(statearr_32391_32444[(2)] = false);

(statearr_32391_32444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (28))){
var inst_32333 = (state_32363[(2)]);
var inst_32334 = calc_state.call(null);
var inst_32290 = inst_32334;
var state_32363__$1 = (function (){var statearr_32392 = state_32363;
(statearr_32392[(15)] = inst_32333);

(statearr_32392[(7)] = inst_32290);

return statearr_32392;
})();
var statearr_32393_32445 = state_32363__$1;
(statearr_32393_32445[(2)] = null);

(statearr_32393_32445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (25))){
var inst_32359 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32394_32446 = state_32363__$1;
(statearr_32394_32446[(2)] = inst_32359);

(statearr_32394_32446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (34))){
var inst_32357 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32395_32447 = state_32363__$1;
(statearr_32395_32447[(2)] = inst_32357);

(statearr_32395_32447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (17))){
var state_32363__$1 = state_32363;
var statearr_32396_32448 = state_32363__$1;
(statearr_32396_32448[(2)] = false);

(statearr_32396_32448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (3))){
var state_32363__$1 = state_32363;
var statearr_32397_32449 = state_32363__$1;
(statearr_32397_32449[(2)] = false);

(statearr_32397_32449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (12))){
var inst_32361 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32363__$1,inst_32361);
} else {
if((state_val_32364 === (2))){
var inst_32265 = (state_32363[(8)]);
var inst_32270 = inst_32265.cljs$lang$protocol_mask$partition0$;
var inst_32271 = (inst_32270 & (64));
var inst_32272 = inst_32265.cljs$core$ISeq$;
var inst_32273 = (cljs.core.PROTOCOL_SENTINEL === inst_32272);
var inst_32274 = ((inst_32271) || (inst_32273));
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32274)){
var statearr_32398_32450 = state_32363__$1;
(statearr_32398_32450[(1)] = (5));

} else {
var statearr_32399_32451 = state_32363__$1;
(statearr_32399_32451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (23))){
var inst_32322 = (state_32363[(14)]);
var inst_32328 = (inst_32322 == null);
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32328)){
var statearr_32400_32452 = state_32363__$1;
(statearr_32400_32452[(1)] = (26));

} else {
var statearr_32401_32453 = state_32363__$1;
(statearr_32401_32453[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (35))){
var inst_32348 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32348)){
var statearr_32402_32454 = state_32363__$1;
(statearr_32402_32454[(1)] = (36));

} else {
var statearr_32403_32455 = state_32363__$1;
(statearr_32403_32455[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (19))){
var inst_32290 = (state_32363[(7)]);
var inst_32310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32290);
var state_32363__$1 = state_32363;
var statearr_32404_32456 = state_32363__$1;
(statearr_32404_32456[(2)] = inst_32310);

(statearr_32404_32456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (11))){
var inst_32290 = (state_32363[(7)]);
var inst_32294 = (inst_32290 == null);
var inst_32295 = cljs.core.not.call(null,inst_32294);
var state_32363__$1 = state_32363;
if(inst_32295){
var statearr_32405_32457 = state_32363__$1;
(statearr_32405_32457[(1)] = (13));

} else {
var statearr_32406_32458 = state_32363__$1;
(statearr_32406_32458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (9))){
var inst_32265 = (state_32363[(8)]);
var state_32363__$1 = state_32363;
var statearr_32407_32459 = state_32363__$1;
(statearr_32407_32459[(2)] = inst_32265);

(statearr_32407_32459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (5))){
var state_32363__$1 = state_32363;
var statearr_32408_32460 = state_32363__$1;
(statearr_32408_32460[(2)] = true);

(statearr_32408_32460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (14))){
var state_32363__$1 = state_32363;
var statearr_32409_32461 = state_32363__$1;
(statearr_32409_32461[(2)] = false);

(statearr_32409_32461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (26))){
var inst_32323 = (state_32363[(11)]);
var inst_32330 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32323);
var state_32363__$1 = state_32363;
var statearr_32410_32462 = state_32363__$1;
(statearr_32410_32462[(2)] = inst_32330);

(statearr_32410_32462[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (16))){
var state_32363__$1 = state_32363;
var statearr_32411_32463 = state_32363__$1;
(statearr_32411_32463[(2)] = true);

(statearr_32411_32463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (38))){
var inst_32353 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32412_32464 = state_32363__$1;
(statearr_32412_32464[(2)] = inst_32353);

(statearr_32412_32464[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (30))){
var inst_32315 = (state_32363[(13)]);
var inst_32314 = (state_32363[(10)]);
var inst_32323 = (state_32363[(11)]);
var inst_32340 = cljs.core.empty_QMARK_.call(null,inst_32314);
var inst_32341 = inst_32315.call(null,inst_32323);
var inst_32342 = cljs.core.not.call(null,inst_32341);
var inst_32343 = ((inst_32340) && (inst_32342));
var state_32363__$1 = state_32363;
var statearr_32413_32465 = state_32363__$1;
(statearr_32413_32465[(2)] = inst_32343);

(statearr_32413_32465[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (10))){
var inst_32265 = (state_32363[(8)]);
var inst_32286 = (state_32363[(2)]);
var inst_32287 = cljs.core.get.call(null,inst_32286,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32288 = cljs.core.get.call(null,inst_32286,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32289 = cljs.core.get.call(null,inst_32286,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32290 = inst_32265;
var state_32363__$1 = (function (){var statearr_32414 = state_32363;
(statearr_32414[(16)] = inst_32289);

(statearr_32414[(17)] = inst_32287);

(statearr_32414[(7)] = inst_32290);

(statearr_32414[(18)] = inst_32288);

return statearr_32414;
})();
var statearr_32415_32466 = state_32363__$1;
(statearr_32415_32466[(2)] = null);

(statearr_32415_32466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (18))){
var inst_32305 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32416_32467 = state_32363__$1;
(statearr_32416_32467[(2)] = inst_32305);

(statearr_32416_32467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (37))){
var state_32363__$1 = state_32363;
var statearr_32417_32468 = state_32363__$1;
(statearr_32417_32468[(2)] = null);

(statearr_32417_32468[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (8))){
var inst_32265 = (state_32363[(8)]);
var inst_32283 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32265);
var state_32363__$1 = state_32363;
var statearr_32418_32469 = state_32363__$1;
(statearr_32418_32469[(2)] = inst_32283);

(statearr_32418_32469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___32423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31273__auto__,c__31364__auto___32423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31274__auto__ = null;
var cljs$core$async$mix_$_state_machine__31274__auto____0 = (function (){
var statearr_32419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32419[(0)] = cljs$core$async$mix_$_state_machine__31274__auto__);

(statearr_32419[(1)] = (1));

return statearr_32419;
});
var cljs$core$async$mix_$_state_machine__31274__auto____1 = (function (state_32363){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_32363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e32420){if((e32420 instanceof Object)){
var ex__31277__auto__ = e32420;
var statearr_32421_32470 = state_32363;
(statearr_32421_32470[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32471 = state_32363;
state_32363 = G__32471;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31274__auto__ = function(state_32363){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31274__auto____1.call(this,state_32363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31274__auto____0;
cljs$core$async$mix_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31274__auto____1;
return cljs$core$async$mix_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___32423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31366__auto__ = (function (){var statearr_32422 = f__31365__auto__.call(null);
(statearr_32422[(6)] = c__31364__auto___32423);

return statearr_32422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___32423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32473 = arguments.length;
switch (G__32473) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32477 = arguments.length;
switch (G__32477) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__32475_SHARP_){
if(cljs.core.truth_(p1__32475_SHARP_.call(null,topic))){
return p1__32475_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32475_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32478 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32479){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32479 = meta32479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32480,meta32479__$1){
var self__ = this;
var _32480__$1 = this;
return (new cljs.core.async.t_cljs$core$async32478(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32479__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32480){
var self__ = this;
var _32480__$1 = this;
return self__.meta32479;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32478.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32478.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32479","meta32479",-542764182,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32478";

cljs.core.async.t_cljs$core$async32478.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32478");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32478.
 */
cljs.core.async.__GT_t_cljs$core$async32478 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32478(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32479){
return (new cljs.core.async.t_cljs$core$async32478(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32479));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32478(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31364__auto___32598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___32598,mults,ensure_mult,p){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___32598,mults,ensure_mult,p){
return (function (state_32552){
var state_val_32553 = (state_32552[(1)]);
if((state_val_32553 === (7))){
var inst_32548 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32554_32599 = state_32552__$1;
(statearr_32554_32599[(2)] = inst_32548);

(statearr_32554_32599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (20))){
var state_32552__$1 = state_32552;
var statearr_32555_32600 = state_32552__$1;
(statearr_32555_32600[(2)] = null);

(statearr_32555_32600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (1))){
var state_32552__$1 = state_32552;
var statearr_32556_32601 = state_32552__$1;
(statearr_32556_32601[(2)] = null);

(statearr_32556_32601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (24))){
var inst_32531 = (state_32552[(7)]);
var inst_32540 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32531);
var state_32552__$1 = state_32552;
var statearr_32557_32602 = state_32552__$1;
(statearr_32557_32602[(2)] = inst_32540);

(statearr_32557_32602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (4))){
var inst_32483 = (state_32552[(8)]);
var inst_32483__$1 = (state_32552[(2)]);
var inst_32484 = (inst_32483__$1 == null);
var state_32552__$1 = (function (){var statearr_32558 = state_32552;
(statearr_32558[(8)] = inst_32483__$1);

return statearr_32558;
})();
if(cljs.core.truth_(inst_32484)){
var statearr_32559_32603 = state_32552__$1;
(statearr_32559_32603[(1)] = (5));

} else {
var statearr_32560_32604 = state_32552__$1;
(statearr_32560_32604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (15))){
var inst_32525 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32561_32605 = state_32552__$1;
(statearr_32561_32605[(2)] = inst_32525);

(statearr_32561_32605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (21))){
var inst_32545 = (state_32552[(2)]);
var state_32552__$1 = (function (){var statearr_32562 = state_32552;
(statearr_32562[(9)] = inst_32545);

return statearr_32562;
})();
var statearr_32563_32606 = state_32552__$1;
(statearr_32563_32606[(2)] = null);

(statearr_32563_32606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (13))){
var inst_32507 = (state_32552[(10)]);
var inst_32509 = cljs.core.chunked_seq_QMARK_.call(null,inst_32507);
var state_32552__$1 = state_32552;
if(inst_32509){
var statearr_32564_32607 = state_32552__$1;
(statearr_32564_32607[(1)] = (16));

} else {
var statearr_32565_32608 = state_32552__$1;
(statearr_32565_32608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (22))){
var inst_32537 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
if(cljs.core.truth_(inst_32537)){
var statearr_32566_32609 = state_32552__$1;
(statearr_32566_32609[(1)] = (23));

} else {
var statearr_32567_32610 = state_32552__$1;
(statearr_32567_32610[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (6))){
var inst_32483 = (state_32552[(8)]);
var inst_32533 = (state_32552[(11)]);
var inst_32531 = (state_32552[(7)]);
var inst_32531__$1 = topic_fn.call(null,inst_32483);
var inst_32532 = cljs.core.deref.call(null,mults);
var inst_32533__$1 = cljs.core.get.call(null,inst_32532,inst_32531__$1);
var state_32552__$1 = (function (){var statearr_32568 = state_32552;
(statearr_32568[(11)] = inst_32533__$1);

(statearr_32568[(7)] = inst_32531__$1);

return statearr_32568;
})();
if(cljs.core.truth_(inst_32533__$1)){
var statearr_32569_32611 = state_32552__$1;
(statearr_32569_32611[(1)] = (19));

} else {
var statearr_32570_32612 = state_32552__$1;
(statearr_32570_32612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (25))){
var inst_32542 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32571_32613 = state_32552__$1;
(statearr_32571_32613[(2)] = inst_32542);

(statearr_32571_32613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (17))){
var inst_32507 = (state_32552[(10)]);
var inst_32516 = cljs.core.first.call(null,inst_32507);
var inst_32517 = cljs.core.async.muxch_STAR_.call(null,inst_32516);
var inst_32518 = cljs.core.async.close_BANG_.call(null,inst_32517);
var inst_32519 = cljs.core.next.call(null,inst_32507);
var inst_32493 = inst_32519;
var inst_32494 = null;
var inst_32495 = (0);
var inst_32496 = (0);
var state_32552__$1 = (function (){var statearr_32572 = state_32552;
(statearr_32572[(12)] = inst_32518);

(statearr_32572[(13)] = inst_32494);

(statearr_32572[(14)] = inst_32493);

(statearr_32572[(15)] = inst_32496);

(statearr_32572[(16)] = inst_32495);

return statearr_32572;
})();
var statearr_32573_32614 = state_32552__$1;
(statearr_32573_32614[(2)] = null);

(statearr_32573_32614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (3))){
var inst_32550 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32552__$1,inst_32550);
} else {
if((state_val_32553 === (12))){
var inst_32527 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32574_32615 = state_32552__$1;
(statearr_32574_32615[(2)] = inst_32527);

(statearr_32574_32615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (2))){
var state_32552__$1 = state_32552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32552__$1,(4),ch);
} else {
if((state_val_32553 === (23))){
var state_32552__$1 = state_32552;
var statearr_32575_32616 = state_32552__$1;
(statearr_32575_32616[(2)] = null);

(statearr_32575_32616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (19))){
var inst_32483 = (state_32552[(8)]);
var inst_32533 = (state_32552[(11)]);
var inst_32535 = cljs.core.async.muxch_STAR_.call(null,inst_32533);
var state_32552__$1 = state_32552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32552__$1,(22),inst_32535,inst_32483);
} else {
if((state_val_32553 === (11))){
var inst_32493 = (state_32552[(14)]);
var inst_32507 = (state_32552[(10)]);
var inst_32507__$1 = cljs.core.seq.call(null,inst_32493);
var state_32552__$1 = (function (){var statearr_32576 = state_32552;
(statearr_32576[(10)] = inst_32507__$1);

return statearr_32576;
})();
if(inst_32507__$1){
var statearr_32577_32617 = state_32552__$1;
(statearr_32577_32617[(1)] = (13));

} else {
var statearr_32578_32618 = state_32552__$1;
(statearr_32578_32618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (9))){
var inst_32529 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32579_32619 = state_32552__$1;
(statearr_32579_32619[(2)] = inst_32529);

(statearr_32579_32619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (5))){
var inst_32490 = cljs.core.deref.call(null,mults);
var inst_32491 = cljs.core.vals.call(null,inst_32490);
var inst_32492 = cljs.core.seq.call(null,inst_32491);
var inst_32493 = inst_32492;
var inst_32494 = null;
var inst_32495 = (0);
var inst_32496 = (0);
var state_32552__$1 = (function (){var statearr_32580 = state_32552;
(statearr_32580[(13)] = inst_32494);

(statearr_32580[(14)] = inst_32493);

(statearr_32580[(15)] = inst_32496);

(statearr_32580[(16)] = inst_32495);

return statearr_32580;
})();
var statearr_32581_32620 = state_32552__$1;
(statearr_32581_32620[(2)] = null);

(statearr_32581_32620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (14))){
var state_32552__$1 = state_32552;
var statearr_32585_32621 = state_32552__$1;
(statearr_32585_32621[(2)] = null);

(statearr_32585_32621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (16))){
var inst_32507 = (state_32552[(10)]);
var inst_32511 = cljs.core.chunk_first.call(null,inst_32507);
var inst_32512 = cljs.core.chunk_rest.call(null,inst_32507);
var inst_32513 = cljs.core.count.call(null,inst_32511);
var inst_32493 = inst_32512;
var inst_32494 = inst_32511;
var inst_32495 = inst_32513;
var inst_32496 = (0);
var state_32552__$1 = (function (){var statearr_32586 = state_32552;
(statearr_32586[(13)] = inst_32494);

(statearr_32586[(14)] = inst_32493);

(statearr_32586[(15)] = inst_32496);

(statearr_32586[(16)] = inst_32495);

return statearr_32586;
})();
var statearr_32587_32622 = state_32552__$1;
(statearr_32587_32622[(2)] = null);

(statearr_32587_32622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (10))){
var inst_32494 = (state_32552[(13)]);
var inst_32493 = (state_32552[(14)]);
var inst_32496 = (state_32552[(15)]);
var inst_32495 = (state_32552[(16)]);
var inst_32501 = cljs.core._nth.call(null,inst_32494,inst_32496);
var inst_32502 = cljs.core.async.muxch_STAR_.call(null,inst_32501);
var inst_32503 = cljs.core.async.close_BANG_.call(null,inst_32502);
var inst_32504 = (inst_32496 + (1));
var tmp32582 = inst_32494;
var tmp32583 = inst_32493;
var tmp32584 = inst_32495;
var inst_32493__$1 = tmp32583;
var inst_32494__$1 = tmp32582;
var inst_32495__$1 = tmp32584;
var inst_32496__$1 = inst_32504;
var state_32552__$1 = (function (){var statearr_32588 = state_32552;
(statearr_32588[(13)] = inst_32494__$1);

(statearr_32588[(17)] = inst_32503);

(statearr_32588[(14)] = inst_32493__$1);

(statearr_32588[(15)] = inst_32496__$1);

(statearr_32588[(16)] = inst_32495__$1);

return statearr_32588;
})();
var statearr_32589_32623 = state_32552__$1;
(statearr_32589_32623[(2)] = null);

(statearr_32589_32623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (18))){
var inst_32522 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32590_32624 = state_32552__$1;
(statearr_32590_32624[(2)] = inst_32522);

(statearr_32590_32624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (8))){
var inst_32496 = (state_32552[(15)]);
var inst_32495 = (state_32552[(16)]);
var inst_32498 = (inst_32496 < inst_32495);
var inst_32499 = inst_32498;
var state_32552__$1 = state_32552;
if(cljs.core.truth_(inst_32499)){
var statearr_32591_32625 = state_32552__$1;
(statearr_32591_32625[(1)] = (10));

} else {
var statearr_32592_32626 = state_32552__$1;
(statearr_32592_32626[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___32598,mults,ensure_mult,p))
;
return ((function (switch__31273__auto__,c__31364__auto___32598,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_32593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32593[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_32593[(1)] = (1));

return statearr_32593;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_32552){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_32552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e32594){if((e32594 instanceof Object)){
var ex__31277__auto__ = e32594;
var statearr_32595_32627 = state_32552;
(statearr_32595_32627[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32628 = state_32552;
state_32552 = G__32628;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_32552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_32552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___32598,mults,ensure_mult,p))
})();
var state__31366__auto__ = (function (){var statearr_32596 = f__31365__auto__.call(null);
(statearr_32596[(6)] = c__31364__auto___32598);

return statearr_32596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___32598,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32630 = arguments.length;
switch (G__32630) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32633 = arguments.length;
switch (G__32633) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32636 = arguments.length;
switch (G__32636) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31364__auto___32703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___32703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___32703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32675){
var state_val_32676 = (state_32675[(1)]);
if((state_val_32676 === (7))){
var state_32675__$1 = state_32675;
var statearr_32677_32704 = state_32675__$1;
(statearr_32677_32704[(2)] = null);

(statearr_32677_32704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (1))){
var state_32675__$1 = state_32675;
var statearr_32678_32705 = state_32675__$1;
(statearr_32678_32705[(2)] = null);

(statearr_32678_32705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (4))){
var inst_32639 = (state_32675[(7)]);
var inst_32641 = (inst_32639 < cnt);
var state_32675__$1 = state_32675;
if(cljs.core.truth_(inst_32641)){
var statearr_32679_32706 = state_32675__$1;
(statearr_32679_32706[(1)] = (6));

} else {
var statearr_32680_32707 = state_32675__$1;
(statearr_32680_32707[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (15))){
var inst_32671 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
var statearr_32681_32708 = state_32675__$1;
(statearr_32681_32708[(2)] = inst_32671);

(statearr_32681_32708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (13))){
var inst_32664 = cljs.core.async.close_BANG_.call(null,out);
var state_32675__$1 = state_32675;
var statearr_32682_32709 = state_32675__$1;
(statearr_32682_32709[(2)] = inst_32664);

(statearr_32682_32709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (6))){
var state_32675__$1 = state_32675;
var statearr_32683_32710 = state_32675__$1;
(statearr_32683_32710[(2)] = null);

(statearr_32683_32710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (3))){
var inst_32673 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32675__$1,inst_32673);
} else {
if((state_val_32676 === (12))){
var inst_32661 = (state_32675[(8)]);
var inst_32661__$1 = (state_32675[(2)]);
var inst_32662 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32661__$1);
var state_32675__$1 = (function (){var statearr_32684 = state_32675;
(statearr_32684[(8)] = inst_32661__$1);

return statearr_32684;
})();
if(cljs.core.truth_(inst_32662)){
var statearr_32685_32711 = state_32675__$1;
(statearr_32685_32711[(1)] = (13));

} else {
var statearr_32686_32712 = state_32675__$1;
(statearr_32686_32712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (2))){
var inst_32638 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32639 = (0);
var state_32675__$1 = (function (){var statearr_32687 = state_32675;
(statearr_32687[(7)] = inst_32639);

(statearr_32687[(9)] = inst_32638);

return statearr_32687;
})();
var statearr_32688_32713 = state_32675__$1;
(statearr_32688_32713[(2)] = null);

(statearr_32688_32713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (11))){
var inst_32639 = (state_32675[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32675,(10),Object,null,(9));
var inst_32648 = chs__$1.call(null,inst_32639);
var inst_32649 = done.call(null,inst_32639);
var inst_32650 = cljs.core.async.take_BANG_.call(null,inst_32648,inst_32649);
var state_32675__$1 = state_32675;
var statearr_32689_32714 = state_32675__$1;
(statearr_32689_32714[(2)] = inst_32650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32675__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (9))){
var inst_32639 = (state_32675[(7)]);
var inst_32652 = (state_32675[(2)]);
var inst_32653 = (inst_32639 + (1));
var inst_32639__$1 = inst_32653;
var state_32675__$1 = (function (){var statearr_32690 = state_32675;
(statearr_32690[(7)] = inst_32639__$1);

(statearr_32690[(10)] = inst_32652);

return statearr_32690;
})();
var statearr_32691_32715 = state_32675__$1;
(statearr_32691_32715[(2)] = null);

(statearr_32691_32715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (5))){
var inst_32659 = (state_32675[(2)]);
var state_32675__$1 = (function (){var statearr_32692 = state_32675;
(statearr_32692[(11)] = inst_32659);

return statearr_32692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32675__$1,(12),dchan);
} else {
if((state_val_32676 === (14))){
var inst_32661 = (state_32675[(8)]);
var inst_32666 = cljs.core.apply.call(null,f,inst_32661);
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32675__$1,(16),out,inst_32666);
} else {
if((state_val_32676 === (16))){
var inst_32668 = (state_32675[(2)]);
var state_32675__$1 = (function (){var statearr_32693 = state_32675;
(statearr_32693[(12)] = inst_32668);

return statearr_32693;
})();
var statearr_32694_32716 = state_32675__$1;
(statearr_32694_32716[(2)] = null);

(statearr_32694_32716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (10))){
var inst_32643 = (state_32675[(2)]);
var inst_32644 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32675__$1 = (function (){var statearr_32695 = state_32675;
(statearr_32695[(13)] = inst_32643);

return statearr_32695;
})();
var statearr_32696_32717 = state_32675__$1;
(statearr_32696_32717[(2)] = inst_32644);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32675__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (8))){
var inst_32657 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
var statearr_32697_32718 = state_32675__$1;
(statearr_32697_32718[(2)] = inst_32657);

(statearr_32697_32718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___32703,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31273__auto__,c__31364__auto___32703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_32698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32698[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_32698[(1)] = (1));

return statearr_32698;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_32675){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_32675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e32699){if((e32699 instanceof Object)){
var ex__31277__auto__ = e32699;
var statearr_32700_32719 = state_32675;
(statearr_32700_32719[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32720 = state_32675;
state_32675 = G__32720;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_32675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_32675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___32703,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31366__auto__ = (function (){var statearr_32701 = f__31365__auto__.call(null);
(statearr_32701[(6)] = c__31364__auto___32703);

return statearr_32701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___32703,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32723 = arguments.length;
switch (G__32723) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31364__auto___32777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___32777,out){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___32777,out){
return (function (state_32755){
var state_val_32756 = (state_32755[(1)]);
if((state_val_32756 === (7))){
var inst_32735 = (state_32755[(7)]);
var inst_32734 = (state_32755[(8)]);
var inst_32734__$1 = (state_32755[(2)]);
var inst_32735__$1 = cljs.core.nth.call(null,inst_32734__$1,(0),null);
var inst_32736 = cljs.core.nth.call(null,inst_32734__$1,(1),null);
var inst_32737 = (inst_32735__$1 == null);
var state_32755__$1 = (function (){var statearr_32757 = state_32755;
(statearr_32757[(7)] = inst_32735__$1);

(statearr_32757[(8)] = inst_32734__$1);

(statearr_32757[(9)] = inst_32736);

return statearr_32757;
})();
if(cljs.core.truth_(inst_32737)){
var statearr_32758_32778 = state_32755__$1;
(statearr_32758_32778[(1)] = (8));

} else {
var statearr_32759_32779 = state_32755__$1;
(statearr_32759_32779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32756 === (1))){
var inst_32724 = cljs.core.vec.call(null,chs);
var inst_32725 = inst_32724;
var state_32755__$1 = (function (){var statearr_32760 = state_32755;
(statearr_32760[(10)] = inst_32725);

return statearr_32760;
})();
var statearr_32761_32780 = state_32755__$1;
(statearr_32761_32780[(2)] = null);

(statearr_32761_32780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32756 === (4))){
var inst_32725 = (state_32755[(10)]);
var state_32755__$1 = state_32755;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32755__$1,(7),inst_32725);
} else {
if((state_val_32756 === (6))){
var inst_32751 = (state_32755[(2)]);
var state_32755__$1 = state_32755;
var statearr_32762_32781 = state_32755__$1;
(statearr_32762_32781[(2)] = inst_32751);

(statearr_32762_32781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32756 === (3))){
var inst_32753 = (state_32755[(2)]);
var state_32755__$1 = state_32755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32755__$1,inst_32753);
} else {
if((state_val_32756 === (2))){
var inst_32725 = (state_32755[(10)]);
var inst_32727 = cljs.core.count.call(null,inst_32725);
var inst_32728 = (inst_32727 > (0));
var state_32755__$1 = state_32755;
if(cljs.core.truth_(inst_32728)){
var statearr_32764_32782 = state_32755__$1;
(statearr_32764_32782[(1)] = (4));

} else {
var statearr_32765_32783 = state_32755__$1;
(statearr_32765_32783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32756 === (11))){
var inst_32725 = (state_32755[(10)]);
var inst_32744 = (state_32755[(2)]);
var tmp32763 = inst_32725;
var inst_32725__$1 = tmp32763;
var state_32755__$1 = (function (){var statearr_32766 = state_32755;
(statearr_32766[(10)] = inst_32725__$1);

(statearr_32766[(11)] = inst_32744);

return statearr_32766;
})();
var statearr_32767_32784 = state_32755__$1;
(statearr_32767_32784[(2)] = null);

(statearr_32767_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32756 === (9))){
var inst_32735 = (state_32755[(7)]);
var state_32755__$1 = state_32755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32755__$1,(11),out,inst_32735);
} else {
if((state_val_32756 === (5))){
var inst_32749 = cljs.core.async.close_BANG_.call(null,out);
var state_32755__$1 = state_32755;
var statearr_32768_32785 = state_32755__$1;
(statearr_32768_32785[(2)] = inst_32749);

(statearr_32768_32785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32756 === (10))){
var inst_32747 = (state_32755[(2)]);
var state_32755__$1 = state_32755;
var statearr_32769_32786 = state_32755__$1;
(statearr_32769_32786[(2)] = inst_32747);

(statearr_32769_32786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32756 === (8))){
var inst_32725 = (state_32755[(10)]);
var inst_32735 = (state_32755[(7)]);
var inst_32734 = (state_32755[(8)]);
var inst_32736 = (state_32755[(9)]);
var inst_32739 = (function (){var cs = inst_32725;
var vec__32730 = inst_32734;
var v = inst_32735;
var c = inst_32736;
return ((function (cs,vec__32730,v,c,inst_32725,inst_32735,inst_32734,inst_32736,state_val_32756,c__31364__auto___32777,out){
return (function (p1__32721_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32721_SHARP_);
});
;})(cs,vec__32730,v,c,inst_32725,inst_32735,inst_32734,inst_32736,state_val_32756,c__31364__auto___32777,out))
})();
var inst_32740 = cljs.core.filterv.call(null,inst_32739,inst_32725);
var inst_32725__$1 = inst_32740;
var state_32755__$1 = (function (){var statearr_32770 = state_32755;
(statearr_32770[(10)] = inst_32725__$1);

return statearr_32770;
})();
var statearr_32771_32787 = state_32755__$1;
(statearr_32771_32787[(2)] = null);

(statearr_32771_32787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___32777,out))
;
return ((function (switch__31273__auto__,c__31364__auto___32777,out){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_32772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32772[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_32772[(1)] = (1));

return statearr_32772;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_32755){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_32755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e32773){if((e32773 instanceof Object)){
var ex__31277__auto__ = e32773;
var statearr_32774_32788 = state_32755;
(statearr_32774_32788[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32789 = state_32755;
state_32755 = G__32789;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_32755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_32755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___32777,out))
})();
var state__31366__auto__ = (function (){var statearr_32775 = f__31365__auto__.call(null);
(statearr_32775[(6)] = c__31364__auto___32777);

return statearr_32775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___32777,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32791 = arguments.length;
switch (G__32791) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31364__auto___32836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___32836,out){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___32836,out){
return (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (7))){
var inst_32797 = (state_32815[(7)]);
var inst_32797__$1 = (state_32815[(2)]);
var inst_32798 = (inst_32797__$1 == null);
var inst_32799 = cljs.core.not.call(null,inst_32798);
var state_32815__$1 = (function (){var statearr_32817 = state_32815;
(statearr_32817[(7)] = inst_32797__$1);

return statearr_32817;
})();
if(inst_32799){
var statearr_32818_32837 = state_32815__$1;
(statearr_32818_32837[(1)] = (8));

} else {
var statearr_32819_32838 = state_32815__$1;
(statearr_32819_32838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (1))){
var inst_32792 = (0);
var state_32815__$1 = (function (){var statearr_32820 = state_32815;
(statearr_32820[(8)] = inst_32792);

return statearr_32820;
})();
var statearr_32821_32839 = state_32815__$1;
(statearr_32821_32839[(2)] = null);

(statearr_32821_32839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (4))){
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32815__$1,(7),ch);
} else {
if((state_val_32816 === (6))){
var inst_32810 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32822_32840 = state_32815__$1;
(statearr_32822_32840[(2)] = inst_32810);

(statearr_32822_32840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (3))){
var inst_32812 = (state_32815[(2)]);
var inst_32813 = cljs.core.async.close_BANG_.call(null,out);
var state_32815__$1 = (function (){var statearr_32823 = state_32815;
(statearr_32823[(9)] = inst_32812);

return statearr_32823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32815__$1,inst_32813);
} else {
if((state_val_32816 === (2))){
var inst_32792 = (state_32815[(8)]);
var inst_32794 = (inst_32792 < n);
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32794)){
var statearr_32824_32841 = state_32815__$1;
(statearr_32824_32841[(1)] = (4));

} else {
var statearr_32825_32842 = state_32815__$1;
(statearr_32825_32842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (11))){
var inst_32792 = (state_32815[(8)]);
var inst_32802 = (state_32815[(2)]);
var inst_32803 = (inst_32792 + (1));
var inst_32792__$1 = inst_32803;
var state_32815__$1 = (function (){var statearr_32826 = state_32815;
(statearr_32826[(10)] = inst_32802);

(statearr_32826[(8)] = inst_32792__$1);

return statearr_32826;
})();
var statearr_32827_32843 = state_32815__$1;
(statearr_32827_32843[(2)] = null);

(statearr_32827_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (9))){
var state_32815__$1 = state_32815;
var statearr_32828_32844 = state_32815__$1;
(statearr_32828_32844[(2)] = null);

(statearr_32828_32844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (5))){
var state_32815__$1 = state_32815;
var statearr_32829_32845 = state_32815__$1;
(statearr_32829_32845[(2)] = null);

(statearr_32829_32845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (10))){
var inst_32807 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32830_32846 = state_32815__$1;
(statearr_32830_32846[(2)] = inst_32807);

(statearr_32830_32846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (8))){
var inst_32797 = (state_32815[(7)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32815__$1,(11),out,inst_32797);
} else {
return null;
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
});})(c__31364__auto___32836,out))
;
return ((function (switch__31273__auto__,c__31364__auto___32836,out){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_32831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32831[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_32831[(1)] = (1));

return statearr_32831;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_32815){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_32815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e32832){if((e32832 instanceof Object)){
var ex__31277__auto__ = e32832;
var statearr_32833_32847 = state_32815;
(statearr_32833_32847[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32848 = state_32815;
state_32815 = G__32848;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___32836,out))
})();
var state__31366__auto__ = (function (){var statearr_32834 = f__31365__auto__.call(null);
(statearr_32834[(6)] = c__31364__auto___32836);

return statearr_32834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___32836,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32850 = (function (f,ch,meta32851){
this.f = f;
this.ch = ch;
this.meta32851 = meta32851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32852,meta32851__$1){
var self__ = this;
var _32852__$1 = this;
return (new cljs.core.async.t_cljs$core$async32850(self__.f,self__.ch,meta32851__$1));
});

cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32852){
var self__ = this;
var _32852__$1 = this;
return self__.meta32851;
});

cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32853 = (function (f,ch,meta32851,_,fn1,meta32854){
this.f = f;
this.ch = ch;
this.meta32851 = meta32851;
this._ = _;
this.fn1 = fn1;
this.meta32854 = meta32854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32855,meta32854__$1){
var self__ = this;
var _32855__$1 = this;
return (new cljs.core.async.t_cljs$core$async32853(self__.f,self__.ch,self__.meta32851,self__._,self__.fn1,meta32854__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32855){
var self__ = this;
var _32855__$1 = this;
return self__.meta32854;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32849_SHARP_){
return f1.call(null,(((p1__32849_SHARP_ == null))?null:self__.f.call(null,p1__32849_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32853.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32851","meta32851",1354096046,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32850","cljs.core.async/t_cljs$core$async32850",-476219964,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32854","meta32854",-1267057644,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32853";

cljs.core.async.t_cljs$core$async32853.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32853");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32853.
 */
cljs.core.async.__GT_t_cljs$core$async32853 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32853(f__$1,ch__$1,meta32851__$1,___$2,fn1__$1,meta32854){
return (new cljs.core.async.t_cljs$core$async32853(f__$1,ch__$1,meta32851__$1,___$2,fn1__$1,meta32854));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32853(self__.f,self__.ch,self__.meta32851,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32851","meta32851",1354096046,null)], null);
});

cljs.core.async.t_cljs$core$async32850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32850";

cljs.core.async.t_cljs$core$async32850.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32850");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32850.
 */
cljs.core.async.__GT_t_cljs$core$async32850 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32850(f__$1,ch__$1,meta32851){
return (new cljs.core.async.t_cljs$core$async32850(f__$1,ch__$1,meta32851));
});

}

return (new cljs.core.async.t_cljs$core$async32850(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32856 = (function (f,ch,meta32857){
this.f = f;
this.ch = ch;
this.meta32857 = meta32857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32858,meta32857__$1){
var self__ = this;
var _32858__$1 = this;
return (new cljs.core.async.t_cljs$core$async32856(self__.f,self__.ch,meta32857__$1));
});

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32858){
var self__ = this;
var _32858__$1 = this;
return self__.meta32857;
});

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32857","meta32857",-733726070,null)], null);
});

cljs.core.async.t_cljs$core$async32856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32856";

cljs.core.async.t_cljs$core$async32856.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32856");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32856.
 */
cljs.core.async.__GT_t_cljs$core$async32856 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32856(f__$1,ch__$1,meta32857){
return (new cljs.core.async.t_cljs$core$async32856(f__$1,ch__$1,meta32857));
});

}

return (new cljs.core.async.t_cljs$core$async32856(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32859 = (function (p,ch,meta32860){
this.p = p;
this.ch = ch;
this.meta32860 = meta32860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32861,meta32860__$1){
var self__ = this;
var _32861__$1 = this;
return (new cljs.core.async.t_cljs$core$async32859(self__.p,self__.ch,meta32860__$1));
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32861){
var self__ = this;
var _32861__$1 = this;
return self__.meta32860;
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32860","meta32860",-1881999007,null)], null);
});

cljs.core.async.t_cljs$core$async32859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32859";

cljs.core.async.t_cljs$core$async32859.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32859");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32859.
 */
cljs.core.async.__GT_t_cljs$core$async32859 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32859(p__$1,ch__$1,meta32860){
return (new cljs.core.async.t_cljs$core$async32859(p__$1,ch__$1,meta32860));
});

}

return (new cljs.core.async.t_cljs$core$async32859(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32863 = arguments.length;
switch (G__32863) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31364__auto___32903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___32903,out){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___32903,out){
return (function (state_32884){
var state_val_32885 = (state_32884[(1)]);
if((state_val_32885 === (7))){
var inst_32880 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32886_32904 = state_32884__$1;
(statearr_32886_32904[(2)] = inst_32880);

(statearr_32886_32904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (1))){
var state_32884__$1 = state_32884;
var statearr_32887_32905 = state_32884__$1;
(statearr_32887_32905[(2)] = null);

(statearr_32887_32905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (4))){
var inst_32866 = (state_32884[(7)]);
var inst_32866__$1 = (state_32884[(2)]);
var inst_32867 = (inst_32866__$1 == null);
var state_32884__$1 = (function (){var statearr_32888 = state_32884;
(statearr_32888[(7)] = inst_32866__$1);

return statearr_32888;
})();
if(cljs.core.truth_(inst_32867)){
var statearr_32889_32906 = state_32884__$1;
(statearr_32889_32906[(1)] = (5));

} else {
var statearr_32890_32907 = state_32884__$1;
(statearr_32890_32907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (6))){
var inst_32866 = (state_32884[(7)]);
var inst_32871 = p.call(null,inst_32866);
var state_32884__$1 = state_32884;
if(cljs.core.truth_(inst_32871)){
var statearr_32891_32908 = state_32884__$1;
(statearr_32891_32908[(1)] = (8));

} else {
var statearr_32892_32909 = state_32884__$1;
(statearr_32892_32909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (3))){
var inst_32882 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32884__$1,inst_32882);
} else {
if((state_val_32885 === (2))){
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32884__$1,(4),ch);
} else {
if((state_val_32885 === (11))){
var inst_32874 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32893_32910 = state_32884__$1;
(statearr_32893_32910[(2)] = inst_32874);

(statearr_32893_32910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (9))){
var state_32884__$1 = state_32884;
var statearr_32894_32911 = state_32884__$1;
(statearr_32894_32911[(2)] = null);

(statearr_32894_32911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (5))){
var inst_32869 = cljs.core.async.close_BANG_.call(null,out);
var state_32884__$1 = state_32884;
var statearr_32895_32912 = state_32884__$1;
(statearr_32895_32912[(2)] = inst_32869);

(statearr_32895_32912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (10))){
var inst_32877 = (state_32884[(2)]);
var state_32884__$1 = (function (){var statearr_32896 = state_32884;
(statearr_32896[(8)] = inst_32877);

return statearr_32896;
})();
var statearr_32897_32913 = state_32884__$1;
(statearr_32897_32913[(2)] = null);

(statearr_32897_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (8))){
var inst_32866 = (state_32884[(7)]);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32884__$1,(11),out,inst_32866);
} else {
return null;
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
});})(c__31364__auto___32903,out))
;
return ((function (switch__31273__auto__,c__31364__auto___32903,out){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_32898 = [null,null,null,null,null,null,null,null,null];
(statearr_32898[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_32898[(1)] = (1));

return statearr_32898;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_32884){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_32884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e32899){if((e32899 instanceof Object)){
var ex__31277__auto__ = e32899;
var statearr_32900_32914 = state_32884;
(statearr_32900_32914[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32915 = state_32884;
state_32884 = G__32915;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_32884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_32884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___32903,out))
})();
var state__31366__auto__ = (function (){var statearr_32901 = f__31365__auto__.call(null);
(statearr_32901[(6)] = c__31364__auto___32903);

return statearr_32901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___32903,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32917 = arguments.length;
switch (G__32917) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__){
return (function (state_32980){
var state_val_32981 = (state_32980[(1)]);
if((state_val_32981 === (7))){
var inst_32976 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_32982_33020 = state_32980__$1;
(statearr_32982_33020[(2)] = inst_32976);

(statearr_32982_33020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (20))){
var inst_32946 = (state_32980[(7)]);
var inst_32957 = (state_32980[(2)]);
var inst_32958 = cljs.core.next.call(null,inst_32946);
var inst_32932 = inst_32958;
var inst_32933 = null;
var inst_32934 = (0);
var inst_32935 = (0);
var state_32980__$1 = (function (){var statearr_32983 = state_32980;
(statearr_32983[(8)] = inst_32932);

(statearr_32983[(9)] = inst_32957);

(statearr_32983[(10)] = inst_32935);

(statearr_32983[(11)] = inst_32933);

(statearr_32983[(12)] = inst_32934);

return statearr_32983;
})();
var statearr_32984_33021 = state_32980__$1;
(statearr_32984_33021[(2)] = null);

(statearr_32984_33021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (1))){
var state_32980__$1 = state_32980;
var statearr_32985_33022 = state_32980__$1;
(statearr_32985_33022[(2)] = null);

(statearr_32985_33022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (4))){
var inst_32921 = (state_32980[(13)]);
var inst_32921__$1 = (state_32980[(2)]);
var inst_32922 = (inst_32921__$1 == null);
var state_32980__$1 = (function (){var statearr_32986 = state_32980;
(statearr_32986[(13)] = inst_32921__$1);

return statearr_32986;
})();
if(cljs.core.truth_(inst_32922)){
var statearr_32987_33023 = state_32980__$1;
(statearr_32987_33023[(1)] = (5));

} else {
var statearr_32988_33024 = state_32980__$1;
(statearr_32988_33024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (15))){
var state_32980__$1 = state_32980;
var statearr_32992_33025 = state_32980__$1;
(statearr_32992_33025[(2)] = null);

(statearr_32992_33025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (21))){
var state_32980__$1 = state_32980;
var statearr_32993_33026 = state_32980__$1;
(statearr_32993_33026[(2)] = null);

(statearr_32993_33026[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (13))){
var inst_32932 = (state_32980[(8)]);
var inst_32935 = (state_32980[(10)]);
var inst_32933 = (state_32980[(11)]);
var inst_32934 = (state_32980[(12)]);
var inst_32942 = (state_32980[(2)]);
var inst_32943 = (inst_32935 + (1));
var tmp32989 = inst_32932;
var tmp32990 = inst_32933;
var tmp32991 = inst_32934;
var inst_32932__$1 = tmp32989;
var inst_32933__$1 = tmp32990;
var inst_32934__$1 = tmp32991;
var inst_32935__$1 = inst_32943;
var state_32980__$1 = (function (){var statearr_32994 = state_32980;
(statearr_32994[(8)] = inst_32932__$1);

(statearr_32994[(14)] = inst_32942);

(statearr_32994[(10)] = inst_32935__$1);

(statearr_32994[(11)] = inst_32933__$1);

(statearr_32994[(12)] = inst_32934__$1);

return statearr_32994;
})();
var statearr_32995_33027 = state_32980__$1;
(statearr_32995_33027[(2)] = null);

(statearr_32995_33027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (22))){
var state_32980__$1 = state_32980;
var statearr_32996_33028 = state_32980__$1;
(statearr_32996_33028[(2)] = null);

(statearr_32996_33028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (6))){
var inst_32921 = (state_32980[(13)]);
var inst_32930 = f.call(null,inst_32921);
var inst_32931 = cljs.core.seq.call(null,inst_32930);
var inst_32932 = inst_32931;
var inst_32933 = null;
var inst_32934 = (0);
var inst_32935 = (0);
var state_32980__$1 = (function (){var statearr_32997 = state_32980;
(statearr_32997[(8)] = inst_32932);

(statearr_32997[(10)] = inst_32935);

(statearr_32997[(11)] = inst_32933);

(statearr_32997[(12)] = inst_32934);

return statearr_32997;
})();
var statearr_32998_33029 = state_32980__$1;
(statearr_32998_33029[(2)] = null);

(statearr_32998_33029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (17))){
var inst_32946 = (state_32980[(7)]);
var inst_32950 = cljs.core.chunk_first.call(null,inst_32946);
var inst_32951 = cljs.core.chunk_rest.call(null,inst_32946);
var inst_32952 = cljs.core.count.call(null,inst_32950);
var inst_32932 = inst_32951;
var inst_32933 = inst_32950;
var inst_32934 = inst_32952;
var inst_32935 = (0);
var state_32980__$1 = (function (){var statearr_32999 = state_32980;
(statearr_32999[(8)] = inst_32932);

(statearr_32999[(10)] = inst_32935);

(statearr_32999[(11)] = inst_32933);

(statearr_32999[(12)] = inst_32934);

return statearr_32999;
})();
var statearr_33000_33030 = state_32980__$1;
(statearr_33000_33030[(2)] = null);

(statearr_33000_33030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (3))){
var inst_32978 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32980__$1,inst_32978);
} else {
if((state_val_32981 === (12))){
var inst_32966 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_33001_33031 = state_32980__$1;
(statearr_33001_33031[(2)] = inst_32966);

(statearr_33001_33031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (2))){
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32980__$1,(4),in$);
} else {
if((state_val_32981 === (23))){
var inst_32974 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_33002_33032 = state_32980__$1;
(statearr_33002_33032[(2)] = inst_32974);

(statearr_33002_33032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (19))){
var inst_32961 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_33003_33033 = state_32980__$1;
(statearr_33003_33033[(2)] = inst_32961);

(statearr_33003_33033[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (11))){
var inst_32932 = (state_32980[(8)]);
var inst_32946 = (state_32980[(7)]);
var inst_32946__$1 = cljs.core.seq.call(null,inst_32932);
var state_32980__$1 = (function (){var statearr_33004 = state_32980;
(statearr_33004[(7)] = inst_32946__$1);

return statearr_33004;
})();
if(inst_32946__$1){
var statearr_33005_33034 = state_32980__$1;
(statearr_33005_33034[(1)] = (14));

} else {
var statearr_33006_33035 = state_32980__$1;
(statearr_33006_33035[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (9))){
var inst_32968 = (state_32980[(2)]);
var inst_32969 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32980__$1 = (function (){var statearr_33007 = state_32980;
(statearr_33007[(15)] = inst_32968);

return statearr_33007;
})();
if(cljs.core.truth_(inst_32969)){
var statearr_33008_33036 = state_32980__$1;
(statearr_33008_33036[(1)] = (21));

} else {
var statearr_33009_33037 = state_32980__$1;
(statearr_33009_33037[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (5))){
var inst_32924 = cljs.core.async.close_BANG_.call(null,out);
var state_32980__$1 = state_32980;
var statearr_33010_33038 = state_32980__$1;
(statearr_33010_33038[(2)] = inst_32924);

(statearr_33010_33038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (14))){
var inst_32946 = (state_32980[(7)]);
var inst_32948 = cljs.core.chunked_seq_QMARK_.call(null,inst_32946);
var state_32980__$1 = state_32980;
if(inst_32948){
var statearr_33011_33039 = state_32980__$1;
(statearr_33011_33039[(1)] = (17));

} else {
var statearr_33012_33040 = state_32980__$1;
(statearr_33012_33040[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (16))){
var inst_32964 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_33013_33041 = state_32980__$1;
(statearr_33013_33041[(2)] = inst_32964);

(statearr_33013_33041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (10))){
var inst_32935 = (state_32980[(10)]);
var inst_32933 = (state_32980[(11)]);
var inst_32940 = cljs.core._nth.call(null,inst_32933,inst_32935);
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32980__$1,(13),out,inst_32940);
} else {
if((state_val_32981 === (18))){
var inst_32946 = (state_32980[(7)]);
var inst_32955 = cljs.core.first.call(null,inst_32946);
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32980__$1,(20),out,inst_32955);
} else {
if((state_val_32981 === (8))){
var inst_32935 = (state_32980[(10)]);
var inst_32934 = (state_32980[(12)]);
var inst_32937 = (inst_32935 < inst_32934);
var inst_32938 = inst_32937;
var state_32980__$1 = state_32980;
if(cljs.core.truth_(inst_32938)){
var statearr_33014_33042 = state_32980__$1;
(statearr_33014_33042[(1)] = (10));

} else {
var statearr_33015_33043 = state_32980__$1;
(statearr_33015_33043[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto__))
;
return ((function (switch__31273__auto__,c__31364__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31274__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31274__auto____0 = (function (){
var statearr_33016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33016[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31274__auto__);

(statearr_33016[(1)] = (1));

return statearr_33016;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31274__auto____1 = (function (state_32980){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_32980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e33017){if((e33017 instanceof Object)){
var ex__31277__auto__ = e33017;
var statearr_33018_33044 = state_32980;
(statearr_33018_33044[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33045 = state_32980;
state_32980 = G__33045;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31274__auto__ = function(state_32980){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31274__auto____1.call(this,state_32980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31274__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31274__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__))
})();
var state__31366__auto__ = (function (){var statearr_33019 = f__31365__auto__.call(null);
(statearr_33019[(6)] = c__31364__auto__);

return statearr_33019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__))
);

return c__31364__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33047 = arguments.length;
switch (G__33047) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33050 = arguments.length;
switch (G__33050) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33053 = arguments.length;
switch (G__33053) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31364__auto___33100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___33100,out){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___33100,out){
return (function (state_33077){
var state_val_33078 = (state_33077[(1)]);
if((state_val_33078 === (7))){
var inst_33072 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33079_33101 = state_33077__$1;
(statearr_33079_33101[(2)] = inst_33072);

(statearr_33079_33101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (1))){
var inst_33054 = null;
var state_33077__$1 = (function (){var statearr_33080 = state_33077;
(statearr_33080[(7)] = inst_33054);

return statearr_33080;
})();
var statearr_33081_33102 = state_33077__$1;
(statearr_33081_33102[(2)] = null);

(statearr_33081_33102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (4))){
var inst_33057 = (state_33077[(8)]);
var inst_33057__$1 = (state_33077[(2)]);
var inst_33058 = (inst_33057__$1 == null);
var inst_33059 = cljs.core.not.call(null,inst_33058);
var state_33077__$1 = (function (){var statearr_33082 = state_33077;
(statearr_33082[(8)] = inst_33057__$1);

return statearr_33082;
})();
if(inst_33059){
var statearr_33083_33103 = state_33077__$1;
(statearr_33083_33103[(1)] = (5));

} else {
var statearr_33084_33104 = state_33077__$1;
(statearr_33084_33104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (6))){
var state_33077__$1 = state_33077;
var statearr_33085_33105 = state_33077__$1;
(statearr_33085_33105[(2)] = null);

(statearr_33085_33105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (3))){
var inst_33074 = (state_33077[(2)]);
var inst_33075 = cljs.core.async.close_BANG_.call(null,out);
var state_33077__$1 = (function (){var statearr_33086 = state_33077;
(statearr_33086[(9)] = inst_33074);

return statearr_33086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33077__$1,inst_33075);
} else {
if((state_val_33078 === (2))){
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33077__$1,(4),ch);
} else {
if((state_val_33078 === (11))){
var inst_33057 = (state_33077[(8)]);
var inst_33066 = (state_33077[(2)]);
var inst_33054 = inst_33057;
var state_33077__$1 = (function (){var statearr_33087 = state_33077;
(statearr_33087[(7)] = inst_33054);

(statearr_33087[(10)] = inst_33066);

return statearr_33087;
})();
var statearr_33088_33106 = state_33077__$1;
(statearr_33088_33106[(2)] = null);

(statearr_33088_33106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (9))){
var inst_33057 = (state_33077[(8)]);
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33077__$1,(11),out,inst_33057);
} else {
if((state_val_33078 === (5))){
var inst_33054 = (state_33077[(7)]);
var inst_33057 = (state_33077[(8)]);
var inst_33061 = cljs.core._EQ_.call(null,inst_33057,inst_33054);
var state_33077__$1 = state_33077;
if(inst_33061){
var statearr_33090_33107 = state_33077__$1;
(statearr_33090_33107[(1)] = (8));

} else {
var statearr_33091_33108 = state_33077__$1;
(statearr_33091_33108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (10))){
var inst_33069 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33092_33109 = state_33077__$1;
(statearr_33092_33109[(2)] = inst_33069);

(statearr_33092_33109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (8))){
var inst_33054 = (state_33077[(7)]);
var tmp33089 = inst_33054;
var inst_33054__$1 = tmp33089;
var state_33077__$1 = (function (){var statearr_33093 = state_33077;
(statearr_33093[(7)] = inst_33054__$1);

return statearr_33093;
})();
var statearr_33094_33110 = state_33077__$1;
(statearr_33094_33110[(2)] = null);

(statearr_33094_33110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___33100,out))
;
return ((function (switch__31273__auto__,c__31364__auto___33100,out){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_33095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33095[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_33095[(1)] = (1));

return statearr_33095;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_33077){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_33077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e33096){if((e33096 instanceof Object)){
var ex__31277__auto__ = e33096;
var statearr_33097_33111 = state_33077;
(statearr_33097_33111[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33112 = state_33077;
state_33077 = G__33112;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_33077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_33077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___33100,out))
})();
var state__31366__auto__ = (function (){var statearr_33098 = f__31365__auto__.call(null);
(statearr_33098[(6)] = c__31364__auto___33100);

return statearr_33098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___33100,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33114 = arguments.length;
switch (G__33114) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31364__auto___33180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___33180,out){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___33180,out){
return (function (state_33152){
var state_val_33153 = (state_33152[(1)]);
if((state_val_33153 === (7))){
var inst_33148 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33154_33181 = state_33152__$1;
(statearr_33154_33181[(2)] = inst_33148);

(statearr_33154_33181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (1))){
var inst_33115 = (new Array(n));
var inst_33116 = inst_33115;
var inst_33117 = (0);
var state_33152__$1 = (function (){var statearr_33155 = state_33152;
(statearr_33155[(7)] = inst_33117);

(statearr_33155[(8)] = inst_33116);

return statearr_33155;
})();
var statearr_33156_33182 = state_33152__$1;
(statearr_33156_33182[(2)] = null);

(statearr_33156_33182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (4))){
var inst_33120 = (state_33152[(9)]);
var inst_33120__$1 = (state_33152[(2)]);
var inst_33121 = (inst_33120__$1 == null);
var inst_33122 = cljs.core.not.call(null,inst_33121);
var state_33152__$1 = (function (){var statearr_33157 = state_33152;
(statearr_33157[(9)] = inst_33120__$1);

return statearr_33157;
})();
if(inst_33122){
var statearr_33158_33183 = state_33152__$1;
(statearr_33158_33183[(1)] = (5));

} else {
var statearr_33159_33184 = state_33152__$1;
(statearr_33159_33184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (15))){
var inst_33142 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33160_33185 = state_33152__$1;
(statearr_33160_33185[(2)] = inst_33142);

(statearr_33160_33185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (13))){
var state_33152__$1 = state_33152;
var statearr_33161_33186 = state_33152__$1;
(statearr_33161_33186[(2)] = null);

(statearr_33161_33186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (6))){
var inst_33117 = (state_33152[(7)]);
var inst_33138 = (inst_33117 > (0));
var state_33152__$1 = state_33152;
if(cljs.core.truth_(inst_33138)){
var statearr_33162_33187 = state_33152__$1;
(statearr_33162_33187[(1)] = (12));

} else {
var statearr_33163_33188 = state_33152__$1;
(statearr_33163_33188[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (3))){
var inst_33150 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33152__$1,inst_33150);
} else {
if((state_val_33153 === (12))){
var inst_33116 = (state_33152[(8)]);
var inst_33140 = cljs.core.vec.call(null,inst_33116);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33152__$1,(15),out,inst_33140);
} else {
if((state_val_33153 === (2))){
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33152__$1,(4),ch);
} else {
if((state_val_33153 === (11))){
var inst_33132 = (state_33152[(2)]);
var inst_33133 = (new Array(n));
var inst_33116 = inst_33133;
var inst_33117 = (0);
var state_33152__$1 = (function (){var statearr_33164 = state_33152;
(statearr_33164[(7)] = inst_33117);

(statearr_33164[(8)] = inst_33116);

(statearr_33164[(10)] = inst_33132);

return statearr_33164;
})();
var statearr_33165_33189 = state_33152__$1;
(statearr_33165_33189[(2)] = null);

(statearr_33165_33189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (9))){
var inst_33116 = (state_33152[(8)]);
var inst_33130 = cljs.core.vec.call(null,inst_33116);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33152__$1,(11),out,inst_33130);
} else {
if((state_val_33153 === (5))){
var inst_33117 = (state_33152[(7)]);
var inst_33120 = (state_33152[(9)]);
var inst_33125 = (state_33152[(11)]);
var inst_33116 = (state_33152[(8)]);
var inst_33124 = (inst_33116[inst_33117] = inst_33120);
var inst_33125__$1 = (inst_33117 + (1));
var inst_33126 = (inst_33125__$1 < n);
var state_33152__$1 = (function (){var statearr_33166 = state_33152;
(statearr_33166[(12)] = inst_33124);

(statearr_33166[(11)] = inst_33125__$1);

return statearr_33166;
})();
if(cljs.core.truth_(inst_33126)){
var statearr_33167_33190 = state_33152__$1;
(statearr_33167_33190[(1)] = (8));

} else {
var statearr_33168_33191 = state_33152__$1;
(statearr_33168_33191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (14))){
var inst_33145 = (state_33152[(2)]);
var inst_33146 = cljs.core.async.close_BANG_.call(null,out);
var state_33152__$1 = (function (){var statearr_33170 = state_33152;
(statearr_33170[(13)] = inst_33145);

return statearr_33170;
})();
var statearr_33171_33192 = state_33152__$1;
(statearr_33171_33192[(2)] = inst_33146);

(statearr_33171_33192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (10))){
var inst_33136 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33172_33193 = state_33152__$1;
(statearr_33172_33193[(2)] = inst_33136);

(statearr_33172_33193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (8))){
var inst_33125 = (state_33152[(11)]);
var inst_33116 = (state_33152[(8)]);
var tmp33169 = inst_33116;
var inst_33116__$1 = tmp33169;
var inst_33117 = inst_33125;
var state_33152__$1 = (function (){var statearr_33173 = state_33152;
(statearr_33173[(7)] = inst_33117);

(statearr_33173[(8)] = inst_33116__$1);

return statearr_33173;
})();
var statearr_33174_33194 = state_33152__$1;
(statearr_33174_33194[(2)] = null);

(statearr_33174_33194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___33180,out))
;
return ((function (switch__31273__auto__,c__31364__auto___33180,out){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_33175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33175[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_33175[(1)] = (1));

return statearr_33175;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_33152){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_33152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e33176){if((e33176 instanceof Object)){
var ex__31277__auto__ = e33176;
var statearr_33177_33195 = state_33152;
(statearr_33177_33195[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33196 = state_33152;
state_33152 = G__33196;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_33152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_33152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___33180,out))
})();
var state__31366__auto__ = (function (){var statearr_33178 = f__31365__auto__.call(null);
(statearr_33178[(6)] = c__31364__auto___33180);

return statearr_33178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___33180,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33198 = arguments.length;
switch (G__33198) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31364__auto___33268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___33268,out){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___33268,out){
return (function (state_33240){
var state_val_33241 = (state_33240[(1)]);
if((state_val_33241 === (7))){
var inst_33236 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33242_33269 = state_33240__$1;
(statearr_33242_33269[(2)] = inst_33236);

(statearr_33242_33269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (1))){
var inst_33199 = [];
var inst_33200 = inst_33199;
var inst_33201 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33240__$1 = (function (){var statearr_33243 = state_33240;
(statearr_33243[(7)] = inst_33201);

(statearr_33243[(8)] = inst_33200);

return statearr_33243;
})();
var statearr_33244_33270 = state_33240__$1;
(statearr_33244_33270[(2)] = null);

(statearr_33244_33270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (4))){
var inst_33204 = (state_33240[(9)]);
var inst_33204__$1 = (state_33240[(2)]);
var inst_33205 = (inst_33204__$1 == null);
var inst_33206 = cljs.core.not.call(null,inst_33205);
var state_33240__$1 = (function (){var statearr_33245 = state_33240;
(statearr_33245[(9)] = inst_33204__$1);

return statearr_33245;
})();
if(inst_33206){
var statearr_33246_33271 = state_33240__$1;
(statearr_33246_33271[(1)] = (5));

} else {
var statearr_33247_33272 = state_33240__$1;
(statearr_33247_33272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (15))){
var inst_33230 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33248_33273 = state_33240__$1;
(statearr_33248_33273[(2)] = inst_33230);

(statearr_33248_33273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (13))){
var state_33240__$1 = state_33240;
var statearr_33249_33274 = state_33240__$1;
(statearr_33249_33274[(2)] = null);

(statearr_33249_33274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (6))){
var inst_33200 = (state_33240[(8)]);
var inst_33225 = inst_33200.length;
var inst_33226 = (inst_33225 > (0));
var state_33240__$1 = state_33240;
if(cljs.core.truth_(inst_33226)){
var statearr_33250_33275 = state_33240__$1;
(statearr_33250_33275[(1)] = (12));

} else {
var statearr_33251_33276 = state_33240__$1;
(statearr_33251_33276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (3))){
var inst_33238 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33240__$1,inst_33238);
} else {
if((state_val_33241 === (12))){
var inst_33200 = (state_33240[(8)]);
var inst_33228 = cljs.core.vec.call(null,inst_33200);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33240__$1,(15),out,inst_33228);
} else {
if((state_val_33241 === (2))){
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33240__$1,(4),ch);
} else {
if((state_val_33241 === (11))){
var inst_33208 = (state_33240[(10)]);
var inst_33204 = (state_33240[(9)]);
var inst_33218 = (state_33240[(2)]);
var inst_33219 = [];
var inst_33220 = inst_33219.push(inst_33204);
var inst_33200 = inst_33219;
var inst_33201 = inst_33208;
var state_33240__$1 = (function (){var statearr_33252 = state_33240;
(statearr_33252[(7)] = inst_33201);

(statearr_33252[(11)] = inst_33218);

(statearr_33252[(12)] = inst_33220);

(statearr_33252[(8)] = inst_33200);

return statearr_33252;
})();
var statearr_33253_33277 = state_33240__$1;
(statearr_33253_33277[(2)] = null);

(statearr_33253_33277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (9))){
var inst_33200 = (state_33240[(8)]);
var inst_33216 = cljs.core.vec.call(null,inst_33200);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33240__$1,(11),out,inst_33216);
} else {
if((state_val_33241 === (5))){
var inst_33201 = (state_33240[(7)]);
var inst_33208 = (state_33240[(10)]);
var inst_33204 = (state_33240[(9)]);
var inst_33208__$1 = f.call(null,inst_33204);
var inst_33209 = cljs.core._EQ_.call(null,inst_33208__$1,inst_33201);
var inst_33210 = cljs.core.keyword_identical_QMARK_.call(null,inst_33201,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33211 = ((inst_33209) || (inst_33210));
var state_33240__$1 = (function (){var statearr_33254 = state_33240;
(statearr_33254[(10)] = inst_33208__$1);

return statearr_33254;
})();
if(cljs.core.truth_(inst_33211)){
var statearr_33255_33278 = state_33240__$1;
(statearr_33255_33278[(1)] = (8));

} else {
var statearr_33256_33279 = state_33240__$1;
(statearr_33256_33279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (14))){
var inst_33233 = (state_33240[(2)]);
var inst_33234 = cljs.core.async.close_BANG_.call(null,out);
var state_33240__$1 = (function (){var statearr_33258 = state_33240;
(statearr_33258[(13)] = inst_33233);

return statearr_33258;
})();
var statearr_33259_33280 = state_33240__$1;
(statearr_33259_33280[(2)] = inst_33234);

(statearr_33259_33280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (10))){
var inst_33223 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33260_33281 = state_33240__$1;
(statearr_33260_33281[(2)] = inst_33223);

(statearr_33260_33281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (8))){
var inst_33208 = (state_33240[(10)]);
var inst_33204 = (state_33240[(9)]);
var inst_33200 = (state_33240[(8)]);
var inst_33213 = inst_33200.push(inst_33204);
var tmp33257 = inst_33200;
var inst_33200__$1 = tmp33257;
var inst_33201 = inst_33208;
var state_33240__$1 = (function (){var statearr_33261 = state_33240;
(statearr_33261[(7)] = inst_33201);

(statearr_33261[(14)] = inst_33213);

(statearr_33261[(8)] = inst_33200__$1);

return statearr_33261;
})();
var statearr_33262_33282 = state_33240__$1;
(statearr_33262_33282[(2)] = null);

(statearr_33262_33282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31364__auto___33268,out))
;
return ((function (switch__31273__auto__,c__31364__auto___33268,out){
return (function() {
var cljs$core$async$state_machine__31274__auto__ = null;
var cljs$core$async$state_machine__31274__auto____0 = (function (){
var statearr_33263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33263[(0)] = cljs$core$async$state_machine__31274__auto__);

(statearr_33263[(1)] = (1));

return statearr_33263;
});
var cljs$core$async$state_machine__31274__auto____1 = (function (state_33240){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_33240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e33264){if((e33264 instanceof Object)){
var ex__31277__auto__ = e33264;
var statearr_33265_33283 = state_33240;
(statearr_33265_33283[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33284 = state_33240;
state_33240 = G__33284;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
cljs$core$async$state_machine__31274__auto__ = function(state_33240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31274__auto____1.call(this,state_33240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31274__auto____0;
cljs$core$async$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31274__auto____1;
return cljs$core$async$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___33268,out))
})();
var state__31366__auto__ = (function (){var statearr_33266 = f__31365__auto__.call(null);
(statearr_33266[(6)] = c__31364__auto___33268);

return statearr_33266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___33268,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1541057579494
