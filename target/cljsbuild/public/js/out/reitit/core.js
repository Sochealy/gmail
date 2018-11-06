// Compiled by ClojureScript 1.10.339 {}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('meta_merge.core');
goog.require('clojure.string');
goog.require('reitit.segment');
goog.require('reitit.impl');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if(((!((this$ == null))) && (!((this$.reitit$core$Expand$expand$arity$2 == null))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.expand[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,opts);
} else {
var m__4244__auto____$1 = (reitit.core.expand["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
});

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.core.Expand,"function",true);

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));
reitit.core.walk = (function reitit$core$walk(raw_routes,p__33665){
var map__33666 = p__33665;
var map__33666__$1 = ((((!((map__33666 == null)))?(((((map__33666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33666):map__33666);
var opts = map__33666__$1;
var path = cljs.core.get.call(null,map__33666__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__33666__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.call(null,map__33666__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.call(null,map__33666__$1,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand);
var walk_many = ((function (map__33666,map__33666__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_many(p,m,r){
return cljs.core.reduce.call(null,((function (map__33666,map__33666__$1,opts,path,data,routes,expand){
return (function (p1__33663_SHARP_,p2__33664_SHARP_){
return cljs.core.into.call(null,p1__33663_SHARP_,walk_one.call(null,p,m,p2__33664_SHARP_));
});})(map__33666,map__33666__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__33666,map__33666__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__33666,map__33666__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,routes__$1))){
return walk_many.call(null,pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first.call(null,routes__$1) === 'string'){
var vec__33677 = routes__$1;
var seq__33678 = cljs.core.seq.call(null,vec__33677);
var first__33679 = cljs.core.first.call(null,seq__33678);
var seq__33678__$1 = cljs.core.next.call(null,seq__33678);
var path__$1 = first__33679;
var vec__33680 = seq__33678__$1;
var maybe_arg = cljs.core.nth.call(null,vec__33680,(0),null);
var args = vec__33680;
var vec__33683 = ((((cljs.core.vector_QMARK_.call(null,maybe_arg)) || (((cljs.core.sequential_QMARK_.call(null,maybe_arg)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest.call(null,args)], null));
var data__$1 = cljs.core.nth.call(null,vec__33683,(0),null);
var childs = cljs.core.nth.call(null,vec__33683,(1),null);
var macc__$1 = cljs.core.into.call(null,macc,expand.call(null,data__$1,opts));
var child_routes = walk_many.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.call(null,cljs.core.identity,childs));
if(cljs.core.seq.call(null,childs)){
return cljs.core.seq.call(null,child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__33666,map__33666__$1,opts,path,data,routes,expand))
;
return walk_one.call(null,path,cljs.core.mapv.call(null,cljs.core.identity,data),raw_routes);
});
reitit.core.map_data = (function reitit$core$map_data(f,routes){
return cljs.core.mapv.call(null,(function (p1__33686_SHARP_){
return cljs.core.update.call(null,p1__33686_SHARP_,(1),f);
}),routes);
});
reitit.core.merge_data = (function reitit$core$merge_data(x){
return cljs.core.reduce.call(null,(function (acc,p__33687){
var vec__33688 = p__33687;
var k = cljs.core.nth.call(null,vec__33688,(0),null);
var v = cljs.core.nth.call(null,vec__33688,(1),null);
return meta_merge.core.meta_merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.core.resolve_routes = (function reitit$core$resolve_routes(raw_routes,p__33692){
var map__33693 = p__33692;
var map__33693__$1 = ((((!((map__33693 == null)))?(((((map__33693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33693):map__33693);
var opts = map__33693__$1;
var coerce = cljs.core.get.call(null,map__33693__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__33695 = reitit.core.map_data.call(null,reitit.core.merge_data,reitit.core.walk.call(null,raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,((function (G__33695,map__33693,map__33693__$1,opts,coerce){
return (function (p1__33691_SHARP_){
return coerce.call(null,p1__33691_SHARP_,opts);
});})(G__33695,map__33693,map__33693__$1,opts,coerce))
),G__33695);
} else {
return G__33695;
}
});
reitit.core.path_conflicting_routes = (function reitit$core$path_conflicting_routes(routes){
var G__33697 = (function (){var G__33701 = routes;
var vec__33702 = G__33701;
var seq__33703 = cljs.core.seq.call(null,vec__33702);
var first__33704 = cljs.core.first.call(null,seq__33703);
var seq__33703__$1 = cljs.core.next.call(null,seq__33703);
var r = first__33704;
var rest = seq__33703__$1;
var acc = cljs.core.PersistentArrayMap.EMPTY;
var G__33701__$1 = G__33701;
var acc__$1 = acc;
while(true){
var vec__33705 = G__33701__$1;
var seq__33706 = cljs.core.seq.call(null,vec__33705);
var first__33707 = cljs.core.first.call(null,seq__33706);
var seq__33706__$1 = cljs.core.next.call(null,seq__33706);
var r__$1 = first__33707;
var rest__$1 = seq__33706__$1;
var acc__$2 = acc__$1;
if(cljs.core.seq.call(null,rest__$1)){
var conflicting = cljs.core.set.call(null,cljs.core.keep.call(null,((function (G__33701__$1,acc__$1,vec__33705,seq__33706,first__33707,seq__33706__$1,r__$1,rest__$1,acc__$2,G__33701,vec__33702,seq__33703,first__33704,seq__33703__$1,r,rest,acc){
return (function (p1__33696_SHARP_){
if(cljs.core.truth_(reitit.impl.conflicting_routes_QMARK_.call(null,r__$1,p1__33696_SHARP_))){
return p1__33696_SHARP_;
} else {
return null;
}
});})(G__33701__$1,acc__$1,vec__33705,seq__33706,first__33707,seq__33706__$1,r__$1,rest__$1,acc__$2,G__33701,vec__33702,seq__33703,first__33704,seq__33703__$1,r,rest,acc))
,rest__$1));
var G__33708 = rest__$1;
var G__33709 = cljs.core.update.call(null,acc__$2,r__$1,cljs.core.fnil.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.concat),cljs.core.PersistentHashSet.EMPTY),conflicting);
G__33701__$1 = G__33708;
acc__$1 = G__33709;
continue;
} else {
return acc__$2;
}
break;
}
})();
var G__33697__$1 = (((G__33697 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second),G__33697));
var G__33697__$2 = (((G__33697__$1 == null))?null:cljs.core.seq.call(null,G__33697__$1));
if((G__33697__$2 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33697__$2);
}
});
reitit.core.path_conflicts_str = (function reitit$core$path_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.call(null,(function (p__33710){
var vec__33711 = p__33710;
var vec__33714 = cljs.core.nth.call(null,vec__33711,(0),null);
var path = cljs.core.nth.call(null,vec__33714,(0),null);
var vals = cljs.core.nth.call(null,vec__33711,(1),null);
return ["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.name_conflicting_routes = (function reitit$core$name_conflicting_routes(routes){
var G__33717 = routes;
var G__33717__$1 = (((G__33717 == null))?null:cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__33717));
var G__33717__$2 = (((G__33717__$1 == null))?null:cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first),G__33717__$1));
var G__33717__$3 = (((G__33717__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.second),G__33717__$2));
var G__33717__$4 = (((G__33717__$3 == null))?null:cljs.core.seq.call(null,G__33717__$3));
var G__33717__$5 = (((G__33717__$4 == null))?null:cljs.core.map.call(null,((function (G__33717,G__33717__$1,G__33717__$2,G__33717__$3,G__33717__$4){
return (function (p__33718){
var vec__33719 = p__33718;
var k = cljs.core.nth.call(null,vec__33719,(0),null);
var v = cljs.core.nth.call(null,vec__33719,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set.call(null,v)], null);
});})(G__33717,G__33717__$1,G__33717__$2,G__33717__$3,G__33717__$4))
,G__33717__$4));
if((G__33717__$5 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33717__$5);
}
});
reitit.core.name_conflicts_str = (function reitit$core$name_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.call(null,(function (p__33722){
var vec__33723 = p__33722;
var name = cljs.core.nth.call(null,vec__33723,(0),null);
var vals = cljs.core.nth.call(null,vec__33723,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.throw_on_conflicts_BANG_ = (function reitit$core$throw_on_conflicts_BANG_(f,conflicts){
throw cljs.core.ex_info.call(null,f.call(null,conflicts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts], null));
});
reitit.core.name_lookup = (function reitit$core$name_lookup(p__33726,_){
var vec__33727 = p__33726;
var ___$1 = cljs.core.nth.call(null,vec__33727,(0),null);
var map__33730 = cljs.core.nth.call(null,vec__33727,(1),null);
var map__33730__$1 = ((((!((map__33730 == null)))?(((((map__33730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33730):map__33730);
var name = cljs.core.get.call(null,map__33730__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
});
reitit.core.find_names = (function reitit$core$find_names(routes,_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__33732_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33732_SHARP_));
})),routes);
});
reitit.core.compile_route = (function reitit$core$compile_route(p__33733,p__33734){
var vec__33735 = p__33733;
var p = cljs.core.nth.call(null,vec__33735,(0),null);
var m = cljs.core.nth.call(null,vec__33735,(1),null);
var route = vec__33735;
var map__33738 = p__33734;
var map__33738__$1 = ((((!((map__33738 == null)))?(((((map__33738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738):map__33738);
var opts = map__33738__$1;
var compile = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?compile.call(null,route,opts):null)], null);
});
reitit.core.compile_routes = (function reitit$core$compile_routes(routes,opts){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__33740_SHARP_){
return reitit.core.compile_route.call(null,p1__33740_SHARP_,opts);
}),routes));
});
reitit.core.uncompile_routes = (function reitit$core$uncompile_routes(routes){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.take,(2))),routes);
});
reitit.core.route_info = (function reitit$core$route_info(route){
return cljs.core.select_keys.call(null,reitit.impl.create.call(null,route),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)], null));
});

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$router_name$arity$1 == null))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.router_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (reitit.core.router_name["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$routes$arity$1 == null))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.routes[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (reitit.core.routes["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$compiled_routes$arity$1 == null))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (reitit.core.compiled_routes["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$options$arity$1 == null))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.options[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (reitit.core.options["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$route_names$arity$1 == null))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.route_names[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (reitit.core.route_names["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$match_by_path$arity$2 == null))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,path);
} else {
var m__4244__auto____$1 = (reitit.core.match_by_path["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__33742 = arguments.length;
switch (G__33742) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$match_by_name$arity$2 == null))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,name);
} else {
var m__4244__auto____$1 = (reitit.core.match_by_name["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$match_by_name$arity$3 == null))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,name,path_params);
} else {
var m__4244__auto____$1 = (reitit.core.match_by_name["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,name,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$lang$maxFixedArity = 3;


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k33746,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__33750 = k33746;
var G__33750__$1 = (((G__33750 instanceof cljs.core.Keyword))?G__33750.fqn:null);
switch (G__33750__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33746,else__4206__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#reitit.core.Match{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33745){
var self__ = this;
var G__33745__$1 = this;
return (new cljs.core.RecordIter((0),G__33745__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33747,other33748){
var self__ = this;
var this33747__$1 = this;
return ((!((other33748 == null))) && ((this33747__$1.constructor === other33748.constructor)) && (cljs.core._EQ_.call(null,this33747__$1.template,other33748.template)) && (cljs.core._EQ_.call(null,this33747__$1.data,other33748.data)) && (cljs.core._EQ_.call(null,this33747__$1.result,other33748.result)) && (cljs.core._EQ_.call(null,this33747__$1.path_params,other33748.path_params)) && (cljs.core._EQ_.call(null,this33747__$1.path,other33748.path)) && (cljs.core._EQ_.call(null,this33747__$1.__extmap,other33748.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__33745){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__33751 = cljs.core.keyword_identical_QMARK_;
var expr__33752 = k__4211__auto__;
if(cljs.core.truth_(pred__33751.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__33752))){
return (new reitit.core.Match(G__33745,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33751.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__33752))){
return (new reitit.core.Match(self__.template,G__33745,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33751.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__33752))){
return (new reitit.core.Match(self__.template,self__.data,G__33745,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33751.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__33752))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__33745,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33751.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__33752))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__33745,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__33745),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__33745){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__33745,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"reitit.core/Match");
});

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__33749){
var extmap__4236__auto__ = (function (){var G__33754 = cljs.core.dissoc.call(null,G__33749,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__33749)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33754);
} else {
return G__33754;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__33749),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__33749),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__33749),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__33749),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__33749),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k33757,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__33761 = k33757;
var G__33761__$1 = (((G__33761 instanceof cljs.core.Keyword))?G__33761.fqn:null);
switch (G__33761__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33757,else__4206__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33756){
var self__ = this;
var G__33756__$1 = this;
return (new cljs.core.RecordIter((0),G__33756__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33758,other33759){
var self__ = this;
var this33758__$1 = this;
return ((!((other33759 == null))) && ((this33758__$1.constructor === other33759.constructor)) && (cljs.core._EQ_.call(null,this33758__$1.template,other33759.template)) && (cljs.core._EQ_.call(null,this33758__$1.data,other33759.data)) && (cljs.core._EQ_.call(null,this33758__$1.result,other33759.result)) && (cljs.core._EQ_.call(null,this33758__$1.path_params,other33759.path_params)) && (cljs.core._EQ_.call(null,this33758__$1.required,other33759.required)) && (cljs.core._EQ_.call(null,this33758__$1.__extmap,other33759.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__33756){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__33762 = cljs.core.keyword_identical_QMARK_;
var expr__33763 = k__4211__auto__;
if(cljs.core.truth_(pred__33762.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__33763))){
return (new reitit.core.PartialMatch(G__33756,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33762.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__33763))){
return (new reitit.core.PartialMatch(self__.template,G__33756,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33762.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__33763))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__33756,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33762.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__33763))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__33756,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33762.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__33763))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__33756,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__33756),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__33756){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__33756,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"reitit.core/PartialMatch");
});

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__33760){
var extmap__4236__auto__ = (function (){var G__33765 = cljs.core.dissoc.call(null,G__33760,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.record_QMARK_.call(null,G__33760)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33765);
} else {
return G__33765;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__33760),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__33760),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__33760),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__33760),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__33760),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__33768 = arguments.length;
switch (G__33768) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.call(null,this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5455__auto__ = reitit.core.match_by_name.call(null,this$,name,path_params);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
if(cljs.core.not.call(null,reitit.core.partial_match_QMARK_.call(null,match))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__33771 = arguments.length;
switch (G__33771) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.call(null,match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__33772 = match;
var G__33772__$1 = (((G__33772 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__33772));
if((G__33772__$1 == null)){
return null;
} else {
var G__33773 = G__33772__$1;
if(cljs.core.truth_(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33773),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string.call(null,query_params))].join('');
} else {
return G__33773;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),reitit.core.name_lookup,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__33775,_){
var vec__33776 = p__33775;
var ___$1 = cljs.core.nth.call(null,vec__33776,(0),null);
var map__33779 = cljs.core.nth.call(null,vec__33776,(1),null);
var map__33779__$1 = ((((!((map__33779 == null)))?(((((map__33779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33779):map__33779);
var handler = cljs.core.get.call(null,map__33779__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),cljs.core.partial.call(null,reitit.core.throw_on_conflicts_BANG_,reitit.core.path_conflicts_str)], null);
/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__33783 = arguments.length;
switch (G__33783) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33784 = cljs.core.reduce.call(null,((function (names){
return (function (p__33787,p__33788){
var vec__33789 = p__33787;
var pl = cljs.core.nth.call(null,vec__33789,(0),null);
var nl = cljs.core.nth.call(null,vec__33789,(1),null);
var vec__33792 = p__33788;
var p = cljs.core.nth.call(null,vec__33792,(0),null);
var map__33795 = cljs.core.nth.call(null,vec__33792,(1),null);
var map__33795__$1 = ((((!((map__33795 == null)))?(((((map__33795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33795):map__33795);
var data = map__33795__$1;
var name = cljs.core.get.call(null,map__33795__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33792,(2),null);
var map__33797 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__33797__$1 = ((((!((map__33797 == null)))?(((((map__33797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33797):map__33797);
var route = map__33797__$1;
var path_params = cljs.core.get.call(null,map__33797__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__33797,map__33797__$1,route,path_params,vec__33789,pl,nl,vec__33792,p,map__33795,map__33795__$1,data,name,result,names){
return (function (p1__33781_SHARP_){
var temp__5455__auto__ = reitit.impl.path_for.call(null,route,p1__33781_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,p1__33781_SHARP_,path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__33781_SHARP_,path_params);
}
});})(map__33797,map__33797__$1,route,path_params,vec__33789,pl,nl,vec__33792,p,map__33795,map__33795__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pl,route),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33784,(0),null);
var nl = cljs.core.nth.call(null,vec__33784,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33799 = (function (compiled_routes,opts,names,vec__33784,pl,nl,lookup,routes,meta33800){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33784 = vec__33784;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta33800 = meta33800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_33801,meta33800__$1){
var self__ = this;
var _33801__$1 = this;
return (new reitit.core.t_reitit$core33799(self__.compiled_routes,self__.opts,self__.names,self__.vec__33784,self__.pl,self__.nl,self__.lookup,self__.routes,meta33800__$1));
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_33801){
var self__ = this;
var _33801__$1 = this;
return self__.meta33800;
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,names,vec__33784,pl,nl,lookup,routes){
return (function (___$2,route){
var temp__5455__auto__ = new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(route).call(null,path);
if(cljs.core.truth_(temp__5455__auto__)){
var path_params = temp__5455__auto__;
return cljs.core.reduced.call(null,reitit.core.__GT_Match.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(route),reitit.impl.url_decode_coll.call(null,path_params),path));
} else {
return null;
}
});})(___$1,names,vec__33784,pl,nl,lookup,routes))
,null,self__.pl);
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.getBasis = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33784","vec__33784",1934248267,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33800","meta33800",178372390,null)], null);
});})(names,vec__33784,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33799.cljs$lang$type = true;

reitit.core.t_reitit$core33799.cljs$lang$ctorStr = "reitit.core/t_reitit$core33799";

reitit.core.t_reitit$core33799.cljs$lang$ctorPrWriter = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"reitit.core/t_reitit$core33799");
});})(names,vec__33784,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33799.
 */
reitit.core.__GT_t_reitit$core33799 = ((function (names,vec__33784,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33799(compiled_routes__$1,opts__$1,names__$1,vec__33784__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33800){
return (new reitit.core.t_reitit$core33799(compiled_routes__$1,opts__$1,names__$1,vec__33784__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33800));
});})(names,vec__33784,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33799(compiled_routes,opts,names,vec__33784,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__33805 = arguments.length;
switch (G__33805) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5457__auto___33823 = cljs.core.seq.call(null,cljs.core.filter.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5457__auto___33823){
var wilds_33824 = temp__5457__auto___33823;
throw cljs.core.ex_info.call(null,["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_33824)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_33824,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33806 = cljs.core.reduce.call(null,((function (names){
return (function (p__33809,p__33810){
var vec__33811 = p__33809;
var pl = cljs.core.nth.call(null,vec__33811,(0),null);
var nl = cljs.core.nth.call(null,vec__33811,(1),null);
var vec__33814 = p__33810;
var p = cljs.core.nth.call(null,vec__33814,(0),null);
var map__33817 = cljs.core.nth.call(null,vec__33814,(1),null);
var map__33817__$1 = ((((!((map__33817 == null)))?(((((map__33817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33817):map__33817);
var data = map__33817__$1;
var name = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33814,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,((function (vec__33811,pl,nl,vec__33814,p,map__33817,map__33817__$1,data,name,result,names){
return (function (p1__33803_SHARP_){
return reitit.core.__GT_Match.call(null,p,data,result,p1__33803_SHARP_,p);
});})(vec__33811,pl,nl,vec__33814,p,map__33817,map__33817__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33806,(0),null);
var nl = cljs.core.nth.call(null,vec__33806,(1),null);
var data = reitit.impl.fast_map.call(null,pl);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33819 = (function (compiled_routes,opts,names,vec__33806,pl,nl,data,lookup,routes,meta33820){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33806 = vec__33806;
this.pl = pl;
this.nl = nl;
this.data = data;
this.lookup = lookup;
this.routes = routes;
this.meta33820 = meta33820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_33821,meta33820__$1){
var self__ = this;
var _33821__$1 = this;
return (new reitit.core.t_reitit$core33819(self__.compiled_routes,self__.opts,self__.names,self__.vec__33806,self__.pl,self__.nl,self__.data,self__.lookup,self__.routes,meta33820__$1));
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_33821){
var self__ = this;
var _33821__$1 = this;
return self__.meta33820;
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get.call(null,self__.data,path);
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.getBasis = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33806","vec__33806",-52183657,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33820","meta33820",1917963837,null)], null);
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33819.cljs$lang$type = true;

reitit.core.t_reitit$core33819.cljs$lang$ctorStr = "reitit.core/t_reitit$core33819";

reitit.core.t_reitit$core33819.cljs$lang$ctorPrWriter = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"reitit.core/t_reitit$core33819");
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33819.
 */
reitit.core.__GT_t_reitit$core33819 = ((function (names,vec__33806,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33819(compiled_routes__$1,opts__$1,names__$1,vec__33806__$1,pl__$1,nl__$1,data__$1,lookup__$1,routes__$1,meta33820){
return (new reitit.core.t_reitit$core33819(compiled_routes__$1,opts__$1,names__$1,vec__33806__$1,pl__$1,nl__$1,data__$1,lookup__$1,routes__$1,meta33820));
});})(names,vec__33806,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33819(compiled_routes,opts,names,vec__33806,pl,nl,data,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree style segment router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.segment_router = (function reitit$core$segment_router(var_args){
var G__33827 = arguments.length;
switch (G__33827) {
case 1:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.segment_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33828 = cljs.core.reduce.call(null,((function (names){
return (function (p__33831,p__33832){
var vec__33833 = p__33831;
var pl = cljs.core.nth.call(null,vec__33833,(0),null);
var nl = cljs.core.nth.call(null,vec__33833,(1),null);
var vec__33836 = p__33832;
var p = cljs.core.nth.call(null,vec__33836,(0),null);
var map__33839 = cljs.core.nth.call(null,vec__33836,(1),null);
var map__33839__$1 = ((((!((map__33839 == null)))?(((((map__33839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33839):map__33839);
var data = map__33839__$1;
var name = cljs.core.get.call(null,map__33839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33836,(2),null);
var map__33841 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__33841__$1 = ((((!((map__33841 == null)))?(((((map__33841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33841):map__33841);
var route = map__33841__$1;
var path_params = cljs.core.get.call(null,map__33841__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__33841,map__33841__$1,route,path_params,vec__33833,pl,nl,vec__33836,p,map__33839,map__33839__$1,data,name,result,names){
return (function (p1__33825_SHARP_){
var temp__5455__auto__ = reitit.impl.path_for.call(null,route,p1__33825_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,p1__33825_SHARP_,path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__33825_SHARP_,path_params);
}
});})(map__33841,map__33841__$1,route,path_params,vec__33833,pl,nl,vec__33836,p,map__33839,map__33839__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.segment.insert.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,null,null)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33828,(0),null);
var nl = cljs.core.nth.call(null,vec__33828,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33843 = (function (compiled_routes,opts,names,vec__33828,pl,nl,lookup,routes,meta33844){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33828 = vec__33828;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta33844 = meta33844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_33845,meta33844__$1){
var self__ = this;
var _33845__$1 = this;
return (new reitit.core.t_reitit$core33843(self__.compiled_routes,self__.opts,self__.names,self__.vec__33828,self__.pl,self__.nl,self__.lookup,self__.routes,meta33844__$1));
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_33845){
var self__ = this;
var _33845__$1 = this;
return self__.meta33844;
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"segment-router","segment-router",223699433);
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.segment.lookup.call(null,self__.pl,path);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.url_decode_coll.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match))),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.getBasis = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33828","vec__33828",135542630,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33844","meta33844",-1085597006,null)], null);
});})(names,vec__33828,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33843.cljs$lang$type = true;

reitit.core.t_reitit$core33843.cljs$lang$ctorStr = "reitit.core/t_reitit$core33843";

reitit.core.t_reitit$core33843.cljs$lang$ctorPrWriter = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"reitit.core/t_reitit$core33843");
});})(names,vec__33828,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33843.
 */
reitit.core.__GT_t_reitit$core33843 = ((function (names,vec__33828,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33843(compiled_routes__$1,opts__$1,names__$1,vec__33828__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33844){
return (new reitit.core.t_reitit$core33843(compiled_routes__$1,opts__$1,names__$1,vec__33828__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33844));
});})(names,vec__33828,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33843(compiled_routes,opts,names,vec__33828,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.segment_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__33848 = arguments.length;
switch (G__33848) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not_EQ_.call(null,cljs.core.count.call(null,compiled_routes),(1));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
}
})())){
throw cljs.core.ex_info.call(null,[":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__33849 = reitit.core.find_names.call(null,compiled_routes,opts);
var n = cljs.core.nth.call(null,vec__33849,(0),null);
var names = vec__33849;
var vec__33852 = compiled_routes;
var vec__33855 = cljs.core.nth.call(null,vec__33852,(0),null);
var p = cljs.core.nth.call(null,vec__33855,(0),null);
var data = cljs.core.nth.call(null,vec__33855,(1),null);
var result = cljs.core.nth.call(null,vec__33855,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match.call(null,p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33858 = (function (vec__33855,p,names,match,data,compiled_routes,routes,n,result,vec__33849,vec__33852,opts,meta33859){
this.vec__33855 = vec__33855;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.n = n;
this.result = result;
this.vec__33849 = vec__33849;
this.vec__33852 = vec__33852;
this.opts = opts;
this.meta33859 = meta33859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_33860,meta33859__$1){
var self__ = this;
var _33860__$1 = this;
return (new reitit.core.t_reitit$core33858(self__.vec__33855,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.n,self__.result,self__.vec__33849,self__.vec__33852,self__.opts,meta33859__$1));
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_33860){
var self__ = this;
var _33860__$1 = this;
return self__.meta33859;
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$options$arity$1 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return reitit.impl.fast_assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.getBasis = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__33855","vec__33855",2019435076,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"vec__33849","vec__33849",1126262011,null),new cljs.core.Symbol(null,"vec__33852","vec__33852",1466861692,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta33859","meta33859",-2065364339,null)], null);
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33858.cljs$lang$type = true;

reitit.core.t_reitit$core33858.cljs$lang$ctorStr = "reitit.core/t_reitit$core33858";

reitit.core.t_reitit$core33858.cljs$lang$ctorPrWriter = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"reitit.core/t_reitit$core33858");
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33858.
 */
reitit.core.__GT_t_reitit$core33858 = ((function (vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core33858(vec__33855__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,result__$1,vec__33849__$1,vec__33852__$1,opts__$1,meta33859){
return (new reitit.core.t_reitit$core33858(vec__33855__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,result__$1,vec__33849__$1,vec__33852__$1,opts__$1,meta33859));
});})(vec__33849,n,names,vec__33852,vec__33855,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core33858(vec__33855,p__$1,names,match,data,compiled_routes,routes,n,result,vec__33849,vec__33852,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__33863 = arguments.length;
switch (G__33863) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__33864 = cljs.core.group_by.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var map__33864__$1 = ((((!((map__33864 == null)))?(((((map__33864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33864):map__33864);
var wild = cljs.core.get.call(null,map__33864__$1,true);
var lookup = cljs.core.get.call(null,map__33864__$1,false);
var __GT_static_router = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.segment_router.call(null,wild,opts);
var static_router = __GT_static_router.call(null,lookup,opts);
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33866 = (function (map__33864,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta33867){
this.map__33864 = map__33864;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta33867 = meta33867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_33868,meta33867__$1){
var self__ = this;
var _33868__$1 = this;
return (new reitit.core.t_reitit$core33866(self__.map__33864,self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta33867__$1));
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_33868){
var self__ = this;
var _33868__$1 = this;
return self__.meta33867;
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$routes$arity$1 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$options$arity$1 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_path.call(null,self__.static_router,path);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.wildcard_router,path);
}
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name);
}
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name,path_params);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name,path_params);
}
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.getBasis = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__33864","map__33864",1410457408,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta33867","meta33867",1558612483,null)], null);
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33866.cljs$lang$type = true;

reitit.core.t_reitit$core33866.cljs$lang$ctorStr = "reitit.core/t_reitit$core33866";

reitit.core.t_reitit$core33866.cljs$lang$ctorPrWriter = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"reitit.core/t_reitit$core33866");
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33866.
 */
reitit.core.__GT_t_reitit$core33866 = ((function (map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core33866(map__33864__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta33867){
return (new reitit.core.t_reitit$core33866(map__33864__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta33867));
});})(map__33864,map__33864__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core33866(map__33864__$1,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description |
 *   | -------------|-------------|
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes (default `reitit.core/throw-on-conflicts!`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__33871 = arguments.length;
switch (G__33871) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.call(null,raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__33872 = cljs.core.merge.call(null,reitit.core.default_router_options,opts);
var map__33872__$1 = ((((!((map__33872 == null)))?(((((map__33872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33872):map__33872);
var opts__$1 = map__33872__$1;
var router = cljs.core.get.call(null,map__33872__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var routes = reitit.core.resolve_routes.call(null,raw_routes,opts__$1);
var path_conflicting = reitit.core.path_conflicting_routes.call(null,routes);
var name_conflicting = reitit.core.name_conflicting_routes.call(null,routes);
var compiled_routes = reitit.core.compile_routes.call(null,routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,compiled_routes))) && (!(wilds_QMARK_))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.linear_router:((!(wilds_QMARK_))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.segment_router:reitit.core.mixed_router
)))));
var temp__5457__auto___33875 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5457__auto___33875)){
var validate_33876 = temp__5457__auto___33875;
validate_33876.call(null,compiled_routes,opts__$1);
} else {
}

var temp__5457__auto___33877 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5457__auto___33877)){
var conflicts_33878 = temp__5457__auto___33877;
if(cljs.core.truth_(path_conflicting)){
conflicts_33878.call(null,path_conflicting);
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.core.throw_on_conflicts_BANG_.call(null,reitit.core.name_conflicts_str,name_conflicting);
} else {
}

return router__$1.call(null,compiled_routes,opts__$1);
});

reitit.core.router.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1541057581561
