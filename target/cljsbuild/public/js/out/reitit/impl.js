// Compiled by ClojureScript 1.10.339 {}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
/**
 * Applies a function to every value of a map.
 * 
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.map_kv = (function reitit$impl$map_kv(f,coll){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,f.call(null,v));
}),cljs.core.empty.call(null,coll),coll);
});
reitit.impl.wild_QMARK_ = (function reitit$impl$wild_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,":",null], null), null),cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
});
reitit.impl.catch_all_QMARK_ = (function reitit$impl$catch_all_QMARK_(s){
return cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
});
reitit.impl.wild_param = (function reitit$impl$wild_param(s){
var ss = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
if(cljs.core._EQ_.call(null,":",cljs.core.first.call(null,ss))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,ss,(1)));
} else {
return null;
}
});
reitit.impl.catch_all_param = (function reitit$impl$catch_all_param(s){
var ss = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
if(cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,ss))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,ss,(1)));
} else {
return null;
}
});
reitit.impl.wild_or_catch_all_param_QMARK_ = (function reitit$impl$wild_or_catch_all_param_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var or__3949__auto__ = reitit.impl.wild_param.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.impl.catch_all_param.call(null,x);
}
})());
});
reitit.impl.segments = (function reitit$impl$segments(path){
return path.split(/\//,(666));
});
reitit.impl.contains_wilds_QMARK_ = (function reitit$impl$contains_wilds_QMARK_(path){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.wild_or_catch_all_param_QMARK_,reitit.impl.segments.call(null,path)));
});
reitit.impl.parse_path_token = (function reitit$impl$parse_path_token(out,string){
var pred__27140 = cljs.core.re_matches;
var expr__27141 = string;
var temp__5455__auto__ = pred__27140.call(null,/^:(.+)$/,expr__27141);
if(cljs.core.truth_(temp__5455__auto__)){
var p__4286__auto__ = temp__5455__auto__;
return ((function (p__4286__auto__,temp__5455__auto__,pred__27140,expr__27141){
return (function (p__27143){
var vec__27144 = p__27143;
var _ = cljs.core.nth.call(null,vec__27144,(0),null);
var token = cljs.core.nth.call(null,vec__27144,(1),null);
var key = cljs.core.keyword.call(null,token);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),key], null),"([^/]+)");
});})(p__4286__auto__,temp__5455__auto__,pred__27140,expr__27141))
.call(null,p__4286__auto__);
} else {
var temp__5455__auto____$1 = pred__27140.call(null,/^\*(.*)$/,expr__27141);
if(cljs.core.truth_(temp__5455__auto____$1)){
var p__4286__auto__ = temp__5455__auto____$1;
return ((function (p__4286__auto__,temp__5455__auto____$1,temp__5455__auto__,pred__27140,expr__27141){
return (function (p__27147){
var vec__27148 = p__27147;
var _ = cljs.core.nth.call(null,vec__27148,(0),null);
var token = cljs.core.nth.call(null,vec__27148,(1),null);
var key = cljs.core.keyword.call(null,token);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),key], null),"(.*)");
});})(p__4286__auto__,temp__5455__auto____$1,temp__5455__auto__,pred__27140,expr__27141))
.call(null,p__4286__auto__);
} else {
return cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,string);
}
}
});
reitit.impl.parse_path = (function reitit$impl$parse_path(var_args){
var G__27152 = arguments.length;
switch (G__27152) {
case 1:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return reitit.impl.parse_path.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),cljs.core.PersistentArrayMap.EMPTY], null),pattern);
});

reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2 = (function (accumulated_info,pattern){
var temp__5455__auto__ = cljs.core.re_matches.call(null,/\/(.*)/,pattern);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
var vec__27153 = m;
var _ = cljs.core.nth.call(null,vec__27153,(0),null);
var path = cljs.core.nth.call(null,vec__27153,(1),null);
return cljs.core.reduce.call(null,reitit.impl.parse_path_token,accumulated_info,clojure.string.split.call(null,path,/\//));
} else {
throw cljs.core.ex_info.call(null,"Routes must start from the root, so they must begin with a '/'",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern], null));
}
});

reitit.impl.parse_path.cljs$lang$maxFixedArity = 2;

reitit.impl.re_quote = (function reitit$impl$re_quote(x){
return clojure.string.replace_all.call(null,x,/([.?*+^$[\\]\\\\(){}|-])/,"\\$1");
});
reitit.impl.path_regex = (function reitit$impl$path_regex(p__27158){
var map__27159 = p__27158;
var map__27159__$1 = ((((!((map__27159 == null)))?(((((map__27159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27159):map__27159);
var route = map__27159__$1;
var path_parts = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"path-parts","path-parts",945822894));
var path_constraints = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928));
var vec__27161 = path_parts;
var seq__27162 = cljs.core.seq.call(null,vec__27161);
var first__27163 = cljs.core.first.call(null,seq__27162);
var seq__27162__$1 = cljs.core.next.call(null,seq__27162);
var pp = first__27163;
var pps = seq__27162__$1;
var path_parts__$1 = ((((cljs.core.seq.call(null,pps)) && (typeof pp === 'string') && (cljs.core.empty_QMARK_.call(null,pp))))?pps:path_parts);
return cljs.core.re_pattern.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,cljs.core.repeat.call(null,"/"),cljs.core.map.call(null,((function (vec__27161,seq__27162,first__27163,seq__27162__$1,pp,pps,path_parts__$1,map__27159,map__27159__$1,route,path_parts,path_constraints){
return (function (p1__27157_SHARP_){
var or__3949__auto__ = cljs.core.get.call(null,path_constraints,p1__27157_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.impl.re_quote.call(null,p1__27157_SHARP_);
}
});})(vec__27161,seq__27162,first__27163,seq__27162__$1,pp,pps,path_parts__$1,map__27159,map__27159__$1,route,path_parts,path_constraints))
,path_parts__$1))));
});
reitit.impl.path_matcher = (function reitit$impl$path_matcher(route){
var map__27164 = route;
var map__27164__$1 = ((((!((map__27164 == null)))?(((((map__27164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27164):map__27164);
var path_re = cljs.core.get.call(null,map__27164__$1,new cljs.core.Keyword(null,"path-re","path-re",-1615269971));
var path_params = cljs.core.get.call(null,map__27164__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
return ((function (map__27164,map__27164__$1,path_re,path_params){
return (function (path){
var temp__5457__auto__ = cljs.core.re_matches.call(null,path_re,path);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.zipmap.call(null,path_params,cljs.core.rest.call(null,m));
} else {
return null;
}
});
;})(map__27164,map__27164__$1,path_re,path_params))
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
reitit.impl.Route = (function (path,matcher,path_parts,path_params,data,result,__meta,__extmap,__hash){
this.path = path;
this.matcher = matcher;
this.path_parts = path_parts;
this.path_params = path_params;
this.data = data;
this.result = result;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k27167,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__27171 = k27167;
var G__27171__$1 = (((G__27171 instanceof cljs.core.Keyword))?G__27171.fqn:null);
switch (G__27171__$1) {
case "path":
return self__.path;

break;
case "matcher":
return self__.matcher;

break;
case "path-parts":
return self__.path_parts;

break;
case "path-params":
return self__.path_params;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27167,else__4206__auto__);

}
});

reitit.impl.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#reitit.impl.Route{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matcher","matcher",-452768995),self__.matcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27166){
var self__ = this;
var G__27166__$1 = this;
return (new cljs.core.RecordIter((0),G__27166__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"matcher","matcher",-452768995),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.impl.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.impl.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27168,other27169){
var self__ = this;
var this27168__$1 = this;
return ((!((other27169 == null))) && ((this27168__$1.constructor === other27169.constructor)) && (cljs.core._EQ_.call(null,this27168__$1.path,other27169.path)) && (cljs.core._EQ_.call(null,this27168__$1.matcher,other27169.matcher)) && (cljs.core._EQ_.call(null,this27168__$1.path_parts,other27169.path_parts)) && (cljs.core._EQ_.call(null,this27168__$1.path_params,other27169.path_params)) && (cljs.core._EQ_.call(null,this27168__$1.data,other27169.data)) && (cljs.core._EQ_.call(null,this27168__$1.result,other27169.result)) && (cljs.core._EQ_.call(null,this27168__$1.__extmap,other27169.__extmap)));
});

reitit.impl.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"matcher","matcher",-452768995),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__27166){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__27172 = cljs.core.keyword_identical_QMARK_;
var expr__27173 = k__4211__auto__;
if(cljs.core.truth_(pred__27172.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__27173))){
return (new reitit.impl.Route(G__27166,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27172.call(null,new cljs.core.Keyword(null,"matcher","matcher",-452768995),expr__27173))){
return (new reitit.impl.Route(self__.path,G__27166,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27172.call(null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),expr__27173))){
return (new reitit.impl.Route(self__.path,self__.matcher,G__27166,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27172.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__27173))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,G__27166,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27172.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__27173))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,G__27166,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27172.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__27173))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,G__27166,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__27166),null));
}
}
}
}
}
}
});

reitit.impl.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matcher","matcher",-452768995),self__.matcher,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__27166){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,G__27166,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.impl.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"path-parts","path-parts",-1708612875,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null);
});

reitit.impl.Route.cljs$lang$type = true;

reitit.impl.Route.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.impl/Route",null,(1),null));
});

reitit.impl.Route.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"reitit.impl/Route");
});

/**
 * Positional factory function for reitit.impl/Route.
 */
reitit.impl.__GT_Route = (function reitit$impl$__GT_Route(path,matcher,path_parts,path_params,data,result){
return (new reitit.impl.Route(path,matcher,path_parts,path_params,data,result,null,null,null));
});

/**
 * Factory function for reitit.impl/Route, taking a map of keywords to field values.
 */
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__27170){
var extmap__4236__auto__ = (function (){var G__27175 = cljs.core.dissoc.call(null,G__27170,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"matcher","matcher",-452768995),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.record_QMARK_.call(null,G__27170)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27175);
} else {
return G__27175;
}
})();
return (new reitit.impl.Route(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__27170),new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(G__27170),new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(G__27170),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__27170),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27170),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__27170),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

reitit.impl.create = (function reitit$impl$create(p__27178){
var vec__27179 = p__27178;
var path = cljs.core.nth.call(null,vec__27179,(0),null);
var data = cljs.core.nth.call(null,vec__27179,(1),null);
var result = cljs.core.nth.call(null,vec__27179,(2),null);
var path__$1 = path;
var $ = reitit.impl.parse_path.call(null,path__$1);
var $__$1 = cljs.core.assoc.call(null,$,new cljs.core.Keyword(null,"path-re","path-re",-1615269971),reitit.impl.path_regex.call(null,$));
var $__$2 = cljs.core.merge.call(null,$__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995),(cljs.core.truth_(reitit.impl.contains_wilds_QMARK_.call(null,path__$1))?reitit.impl.path_matcher.call(null,$__$1):((function ($,$__$1,path__$1,vec__27179,path,data,result){
return (function (p1__27177_SHARP_){
if(cljs.core._EQ_.call(null,path__$1,p1__27177_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
});})($,$__$1,path__$1,vec__27179,path,data,result))
),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
var $__$3 = cljs.core.dissoc.call(null,$__$2,new cljs.core.Keyword(null,"path-re","path-re",-1615269971),new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928));
var $__$4 = cljs.core.update.call(null,$__$3,new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.set);
return reitit.impl.map__GT_Route.call(null,$__$4);
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__27182){
var vec__27183 = p__27182;
var path = cljs.core.nth.call(null,vec__27183,(0),null);
return reitit.impl.contains_wilds_QMARK_.call(null,path);
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(p__27186,p__27187){
var vec__27188 = p__27186;
var p1 = cljs.core.nth.call(null,vec__27188,(0),null);
var vec__27191 = p__27187;
var p2 = cljs.core.nth.call(null,vec__27191,(0),null);
var G__27200 = reitit.impl.segments.call(null,p1);
var vec__27202 = G__27200;
var seq__27203 = cljs.core.seq.call(null,vec__27202);
var first__27204 = cljs.core.first.call(null,seq__27203);
var seq__27203__$1 = cljs.core.next.call(null,seq__27203);
var s1 = first__27204;
var ss1 = seq__27203__$1;
var G__27201 = reitit.impl.segments.call(null,p2);
var vec__27205 = G__27201;
var seq__27206 = cljs.core.seq.call(null,vec__27205);
var first__27207 = cljs.core.first.call(null,seq__27206);
var seq__27206__$1 = cljs.core.next.call(null,seq__27206);
var s2 = first__27207;
var ss2 = seq__27206__$1;
var G__27200__$1 = G__27200;
var G__27201__$1 = G__27201;
while(true){
var vec__27208 = G__27200__$1;
var seq__27209 = cljs.core.seq.call(null,vec__27208);
var first__27210 = cljs.core.first.call(null,seq__27209);
var seq__27209__$1 = cljs.core.next.call(null,seq__27209);
var s1__$1 = first__27210;
var ss1__$1 = seq__27209__$1;
var vec__27211 = G__27201__$1;
var seq__27212 = cljs.core.seq.call(null,vec__27211);
var first__27213 = cljs.core.first.call(null,seq__27212);
var seq__27212__$1 = cljs.core.next.call(null,seq__27212);
var s2__$1 = first__27213;
var ss2__$1 = seq__27212__$1;
if(cljs.core._EQ_.call(null,s1__$1,s2__$1,null)){
return true;
} else {
if((((s1__$1 == null)) || ((s2__$1 == null)))){
return false;
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = reitit.impl.catch_all_QMARK_.call(null,s1__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.impl.catch_all_QMARK_.call(null,s2__$1);
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = reitit.impl.wild_QMARK_.call(null,s1__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.impl.wild_QMARK_.call(null,s2__$1);
}
})())){
var G__27214 = ss1__$1;
var G__27215 = ss2__$1;
G__27200__$1 = G__27214;
G__27201__$1 = G__27215;
continue;
} else {
if(cljs.core.not_EQ_.call(null,s1__$1,s2__$1)){
return false;
} else {
var G__27216 = ss1__$1;
var G__27217 = ss2__$1;
G__27200__$1 = G__27216;
G__27201__$1 = G__27217;
continue;

}
}
}
}
}
break;
}
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
var temp__5455__auto__ = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.truth_(temp__5455__auto__)){
var required = temp__5455__auto__;
if(cljs.core.every_QMARK_.call(null,((function (required,temp__5455__auto__){
return (function (p1__27218_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__27218_SHARP_);
});})(required,temp__5455__auto__))
,required)){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"/",cljs.core.map.call(null,((function (required,temp__5455__auto__){
return (function (p1__27219_SHARP_){
return cljs.core.get.call(null,(function (){var or__3949__auto__ = path_params;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p1__27219_SHARP_,p1__27219_SHARP_);
});})(required,temp__5455__auto__))
,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route))))].join('');
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_.call(null,(function (p1__27220_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__27220_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set.call(null,cljs.core.keys.call(null,path_params));
var missing = clojure.set.difference.call(null,required,defined);
throw cljs.core.ex_info.call(null,["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.call(null,a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return m.call(null,k);
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace.call(null,s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.map_kv.call(null,reitit.impl.url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if(((!((_ == null))) && (!((_.reitit$impl$IntoString$into_string$arity$1 == null))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (reitit.impl.into_string[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (reitit.impl.into_string["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

goog.object.set(reitit.impl.into_string,"string",(function (this$){
return this$;
}));

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace.call(null,this$__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,this$__$1))].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

goog.object.set(reitit.impl.into_string,"boolean",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(reitit.impl.IntoString,"number",true);

goog.object.set(reitit.impl.into_string,"number",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(reitit.impl.IntoString,"object",true);

goog.object.set(reitit.impl.into_string,"object",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(reitit.impl.IntoString,"null",true);

goog.object.set(reitit.impl.into_string,"null",(function (_){
return null;
}));
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.map_kv.call(null,(function (p1__27222_SHARP_){
return reitit.impl.url_encode.call(null,reitit.impl.into_string.call(null,p1__27222_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27223){
var vec__27224 = p__27223;
var k = cljs.core.nth.call(null,vec__27224,(0),null);
var v = cljs.core.nth.call(null,vec__27224,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,v)))].join('');
}),params));
});
var ret__4565__auto___27233 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27234 = arguments.length;
var i__4532__auto___27235 = (0);
while(true){
if((i__4532__auto___27235 < len__4531__auto___27234)){
args__4534__auto__.push((arguments[i__4532__auto___27235]));

var G__27236 = (i__4532__auto___27235 + (1));
i__4532__auto___27235 = G__27236;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((5) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4535__auto__);
});

reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),ctor))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","inherits","goog/inherits",1191617838,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,base_type,null,(1),null))))),null,(1),null)),cljs.core.map.call(null,(function (method){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("reitit.impl","-prototype","reitit.impl/-prototype",-650268084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,method))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.rest.call(null,method)))),null,(1),null)))));
}),methods$))));
});

reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq27227){
var G__27228 = cljs.core.first.call(null,seq27227);
var seq27227__$1 = cljs.core.next.call(null,seq27227);
var G__27229 = cljs.core.first.call(null,seq27227__$1);
var seq27227__$2 = cljs.core.next.call(null,seq27227__$1);
var G__27230 = cljs.core.first.call(null,seq27227__$2);
var seq27227__$3 = cljs.core.next.call(null,seq27227__$2);
var G__27231 = cljs.core.first.call(null,seq27227__$3);
var seq27227__$4 = cljs.core.next.call(null,seq27227__$3);
var G__27232 = cljs.core.first.call(null,seq27227__$4);
var seq27227__$5 = cljs.core.next.call(null,seq27227__$4);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27228,G__27229,G__27230,G__27231,G__27232,seq27227__$5);
});

return null;
})()
;
reitit.impl.goog_extend.cljs$lang$macro = true;


//# sourceMappingURL=impl.js.map?rel=1541057569005
