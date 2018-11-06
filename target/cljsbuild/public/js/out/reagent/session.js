// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33417 = arguments.length;
var i__4532__auto___33418 = (0);
while(true){
if((i__4532__auto___33418 < len__4531__auto___33417)){
args__4534__auto__.push((arguments[i__4532__auto___33418]));

var G__33419 = (i__4532__auto___33418 + (1));
i__4532__auto___33418 = G__33419;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33413){
var vec__33414 = p__33413;
var default$ = cljs.core.nth.call(null,vec__33414,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq33411){
var G__33412 = cljs.core.first.call(null,seq33411);
var seq33411__$1 = cljs.core.next.call(null,seq33411);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33412,seq33411__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33426 = arguments.length;
var i__4532__auto___33427 = (0);
while(true){
if((i__4532__auto___33427 < len__4531__auto___33426)){
args__4534__auto__.push((arguments[i__4532__auto___33427]));

var G__33428 = (i__4532__auto___33427 + (1));
i__4532__auto___33427 = G__33428;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33422){
var vec__33423 = p__33422;
var default$ = cljs.core.nth.call(null,vec__33423,(0),null);
var or__3949__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq33420){
var G__33421 = cljs.core.first.call(null,seq33420);
var seq33420__$1 = cljs.core.next.call(null,seq33420);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33421,seq33420__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33431 = arguments.length;
var i__4532__auto___33432 = (0);
while(true){
if((i__4532__auto___33432 < len__4531__auto___33431)){
args__4534__auto__.push((arguments[i__4532__auto___33432]));

var G__33433 = (i__4532__auto___33432 + (1));
i__4532__auto___33432 = G__33433;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq33429){
var G__33430 = cljs.core.first.call(null,seq33429);
var seq33429__$1 = cljs.core.next.call(null,seq33429);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33430,seq33429__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33440 = arguments.length;
var i__4532__auto___33441 = (0);
while(true){
if((i__4532__auto___33441 < len__4531__auto___33440)){
args__4534__auto__.push((arguments[i__4532__auto___33441]));

var G__33442 = (i__4532__auto___33441 + (1));
i__4532__auto___33441 = G__33442;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33436){
var vec__33437 = p__33436;
var default$ = cljs.core.nth.call(null,vec__33437,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq33434){
var G__33435 = cljs.core.first.call(null,seq33434);
var seq33434__$1 = cljs.core.next.call(null,seq33434);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33435,seq33434__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33449 = arguments.length;
var i__4532__auto___33450 = (0);
while(true){
if((i__4532__auto___33450 < len__4531__auto___33449)){
args__4534__auto__.push((arguments[i__4532__auto___33450]));

var G__33451 = (i__4532__auto___33450 + (1));
i__4532__auto___33450 = G__33451;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33445){
var vec__33446 = p__33445;
var default$ = cljs.core.nth.call(null,vec__33446,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq33443){
var G__33444 = cljs.core.first.call(null,seq33443);
var seq33443__$1 = cljs.core.next.call(null,seq33443);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33444,seq33443__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33456 = arguments.length;
var i__4532__auto___33457 = (0);
while(true){
if((i__4532__auto___33457 < len__4531__auto___33456)){
args__4534__auto__.push((arguments[i__4532__auto___33457]));

var G__33458 = (i__4532__auto___33457 + (1));
i__4532__auto___33457 = G__33458;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33452_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__33452_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq33453){
var G__33454 = cljs.core.first.call(null,seq33453);
var seq33453__$1 = cljs.core.next.call(null,seq33453);
var G__33455 = cljs.core.first.call(null,seq33453__$1);
var seq33453__$2 = cljs.core.next.call(null,seq33453__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33454,G__33455,seq33453__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33463 = arguments.length;
var i__4532__auto___33464 = (0);
while(true){
if((i__4532__auto___33464 < len__4531__auto___33463)){
args__4534__auto__.push((arguments[i__4532__auto___33464]));

var G__33465 = (i__4532__auto___33464 + (1));
i__4532__auto___33464 = G__33465;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33459_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__33459_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq33460){
var G__33461 = cljs.core.first.call(null,seq33460);
var seq33460__$1 = cljs.core.next.call(null,seq33460);
var G__33462 = cljs.core.first.call(null,seq33460__$1);
var seq33460__$2 = cljs.core.next.call(null,seq33460__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33461,G__33462,seq33460__$2);
});


//# sourceMappingURL=session.js.map?rel=1541057580247
