// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26749__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26750__i = 0, G__26750__a = new Array(arguments.length -  0);
while (G__26750__i < G__26750__a.length) {G__26750__a[G__26750__i] = arguments[G__26750__i + 0]; ++G__26750__i;}
  args = new cljs.core.IndexedSeq(G__26750__a,0,null);
} 
return G__26749__delegate.call(this,args);};
G__26749.cljs$lang$maxFixedArity = 0;
G__26749.cljs$lang$applyTo = (function (arglist__26751){
var args = cljs.core.seq(arglist__26751);
return G__26749__delegate(args);
});
G__26749.cljs$core$IFn$_invoke$arity$variadic = G__26749__delegate;
return G__26749;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26752__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26753__i = 0, G__26753__a = new Array(arguments.length -  0);
while (G__26753__i < G__26753__a.length) {G__26753__a[G__26753__i] = arguments[G__26753__i + 0]; ++G__26753__i;}
  args = new cljs.core.IndexedSeq(G__26753__a,0,null);
} 
return G__26752__delegate.call(this,args);};
G__26752.cljs$lang$maxFixedArity = 0;
G__26752.cljs$lang$applyTo = (function (arglist__26754){
var args = cljs.core.seq(arglist__26754);
return G__26752__delegate(args);
});
G__26752.cljs$core$IFn$_invoke$arity$variadic = G__26752__delegate;
return G__26752;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1541057566553
