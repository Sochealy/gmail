// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__36818__delegate = function (x__36802__auto__){
if(cljs.core.truth_(gmail.core.mount_root)){
return cljs.core.apply.call(null,gmail.core.mount_root,x__36802__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("gmail.core/mount-root"),"' is missing"].join(''));
}
};
var G__36818 = function (var_args){
var x__36802__auto__ = null;
if (arguments.length > 0) {
var G__36819__i = 0, G__36819__a = new Array(arguments.length -  0);
while (G__36819__i < G__36819__a.length) {G__36819__a[G__36819__i] = arguments[G__36819__i + 0]; ++G__36819__i;}
  x__36802__auto__ = new cljs.core.IndexedSeq(G__36819__a,0,null);
} 
return G__36818__delegate.call(this,x__36802__auto__);};
G__36818.cljs$lang$maxFixedArity = 0;
G__36818.cljs$lang$applyTo = (function (arglist__36820){
var x__36802__auto__ = cljs.core.seq(arglist__36820);
return G__36818__delegate(x__36802__auto__);
});
G__36818.cljs$core$IFn$_invoke$arity$variadic = G__36818__delegate;
return G__36818;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1541057587891
