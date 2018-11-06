// Compiled by ClojureScript 1.10.339 {}
goog.provide('gmail.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
goog.require('gmail.mail');
gmail.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/mail",new cljs.core.Keyword(null,"mail","mail",795732905)], null)], null));
gmail.core.path_for = (function gmail$core$path_for(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35134 = arguments.length;
var i__4532__auto___35135 = (0);
while(true){
if((i__4532__auto___35135 < len__4531__auto___35134)){
args__4534__auto__.push((arguments[i__4532__auto___35135]));

var G__35136 = (i__4532__auto___35135 + (1));
i__4532__auto___35135 = G__35136;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return gmail.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

gmail.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__35130){
var vec__35131 = p__35130;
var params = cljs.core.nth.call(null,vec__35131,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,gmail.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,gmail.core.router,route));
}
});

gmail.core.path_for.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gmail.core.path_for.cljs$lang$applyTo = (function (seq35128){
var G__35129 = cljs.core.first.call(null,seq35128);
var seq35128__$1 = cljs.core.next.call(null,seq35128);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35129,seq35128__$1);
});

gmail.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543));
gmail.core.home_page = (function gmail$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gmail.mail.mail], null);
});
});
gmail.core.items_page = (function gmail$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The items of gmail"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),gmail.core.path_for.call(null,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.call(null,(1),(60)))], null)], null);
});
});
gmail.core.page_for = (function gmail$core$page_for(route){
var G__35137 = route;
var G__35137__$1 = (((G__35137 instanceof cljs.core.Keyword))?G__35137.fqn:null);
switch (G__35137__$1) {
case "index":
return new cljs.core.Var(function(){return gmail.core.home_page;},new cljs.core.Symbol("gmail.core","home-page","gmail.core/home-page",30171736,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"gmail.core","gmail.core",1709695276,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/koompi/project/gmail/src/cljs/gmail/core.cljs",16,1,27,27,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(gmail.core.home_page)?gmail.core.home_page.cljs$lang$test:null)]));

break;
case "mail":
return new cljs.core.Var(function(){return gmail.mail.mail;},new cljs.core.Symbol("gmail.mail","mail","gmail.mail/mail",-1535035127,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"gmail.mail","gmail.mail",-327416241,null),new cljs.core.Symbol(null,"mail","mail",-1858702864,null),"/home/koompi/project/gmail/src/cljs/gmail/mail.cljs",11,1,3,3,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(gmail.mail.mail)?gmail.mail.mail.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35137__$1)].join('')));

}
});
gmail.core.current_page = (function gmail$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
});
});
gmail.core.mount_root = (function gmail$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gmail.core.current_page], null),document.getElementById("app"));
});
gmail.core.init_BANG_ = (function gmail$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,gmail.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),gmail.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,gmail.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return gmail.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1541495449814
