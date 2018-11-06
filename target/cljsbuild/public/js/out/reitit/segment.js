// Compiled by ClojureScript 1.10.339 {}
goog.provide('reitit.segment');
goog.require('cljs.core');
goog.require('reitit.impl');
goog.require('clojure.string');

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
reitit.segment.Match = (function (data,path_params,__meta,__extmap,__hash){
this.data = data;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k33628,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__33632 = k33628;
var G__33632__$1 = (((G__33632 instanceof cljs.core.Keyword))?G__33632.fqn:null);
switch (G__33632__$1) {
case "data":
return self__.data;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33628,else__4206__auto__);

}
});

reitit.segment.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#reitit.segment.Match{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null))], null),self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33627){
var self__ = this;
var G__33627__$1 = this;
return (new cljs.core.RecordIter((0),G__33627__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.segment.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.segment.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.segment.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-129766334 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.segment.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33629,other33630){
var self__ = this;
var this33629__$1 = this;
return ((!((other33630 == null))) && ((this33629__$1.constructor === other33630.constructor)) && (cljs.core._EQ_.call(null,this33629__$1.data,other33630.data)) && (cljs.core._EQ_.call(null,this33629__$1.path_params,other33630.path_params)) && (cljs.core._EQ_.call(null,this33629__$1.__extmap,other33630.__extmap)));
});

reitit.segment.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

reitit.segment.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__33627){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__33633 = cljs.core.keyword_identical_QMARK_;
var expr__33634 = k__4211__auto__;
if(cljs.core.truth_(pred__33633.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__33634))){
return (new reitit.segment.Match(G__33627,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33633.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__33634))){
return (new reitit.segment.Match(self__.data,G__33627,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__33627),null));
}
}
});

reitit.segment.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__33627){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,G__33627,self__.__extmap,self__.__hash));
});

reitit.segment.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.segment.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null)], null);
});

reitit.segment.Match.cljs$lang$type = true;

reitit.segment.Match.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.segment/Match",null,(1),null));
});

reitit.segment.Match.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"reitit.segment/Match");
});

/**
 * Positional factory function for reitit.segment/Match.
 */
reitit.segment.__GT_Match = (function reitit$segment$__GT_Match(data,path_params){
return (new reitit.segment.Match(data,path_params,null,null,null));
});

/**
 * Factory function for reitit.segment/Match, taking a map of keywords to field values.
 */
reitit.segment.map__GT_Match = (function reitit$segment$map__GT_Match(G__33631){
var extmap__4236__auto__ = (function (){var G__33636 = cljs.core.dissoc.call(null,G__33631,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597));
if(cljs.core.record_QMARK_.call(null,G__33631)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33636);
} else {
return G__33636;
}
})();
return (new reitit.segment.Match(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__33631),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__33631),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


/**
 * @interface
 */
reitit.segment.Segment = function(){};

reitit.segment._insert = (function reitit$segment$_insert(this$,ps,data){
if(((!((this$ == null))) && (!((this$.reitit$segment$Segment$_insert$arity$3 == null))))){
return this$.reitit$segment$Segment$_insert$arity$3(this$,ps,data);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.segment._insert[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,ps,data);
} else {
var m__4244__auto____$1 = (reitit.segment._insert["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,ps,data);
} else {
throw cljs.core.missing_protocol.call(null,"Segment.-insert",this$);
}
}
}
});

reitit.segment._lookup = (function reitit$segment$_lookup(this$,ps,path_params){
if(((!((this$ == null))) && (!((this$.reitit$segment$Segment$_lookup$arity$3 == null))))){
return this$.reitit$segment$Segment$_lookup$arity$3(this$,ps,path_params);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.segment._lookup[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,ps,path_params);
} else {
var m__4244__auto____$1 = (reitit.segment._lookup["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,ps,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Segment.-lookup",this$);
}
}
}
});

goog.object.set(reitit.segment.Segment,"null",true);

goog.object.set(reitit.segment._insert,"null",(function (_,___$1,___$2){
return null;
}));

goog.object.set(reitit.segment._lookup,"null",(function (_,___$1,___$2){
return null;
}));
reitit.segment._catch_all = (function reitit$segment$_catch_all(children,catch_all,path_params,p,ps){
if(cljs.core.truth_(catch_all)){
return reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,children,catch_all),null,cljs.core.assoc.call(null,path_params,catch_all,clojure.string.join.call(null,"/",cljs.core.cons.call(null,p,ps))));
} else {
return null;
}
});
reitit.segment.segment = (function reitit$segment$segment(var_args){
var G__33641 = arguments.length;
switch (G__33641) {
case 0:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.segment.segment.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.segment.segment.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null);
});

reitit.segment.segment.cljs$core$IFn$_invoke$arity$4 = (function (children,wilds,catch_all,match){
var children_SINGLEQUOTE_ = reitit.impl.fast_map.call(null,children);
if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment33642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment33642 = (function (children,wilds,catch_all,match,children_SINGLEQUOTE_,meta33643){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.match = match;
this.children_SINGLEQUOTE_ = children_SINGLEQUOTE_;
this.meta33643 = meta33643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.segment.t_reitit$segment33642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (children_SINGLEQUOTE_){
return (function (_33644,meta33643__$1){
var self__ = this;
var _33644__$1 = this;
return (new reitit.segment.t_reitit$segment33642(self__.children,self__.wilds,self__.catch_all,self__.match,self__.children_SINGLEQUOTE_,meta33643__$1));
});})(children_SINGLEQUOTE_))
;

reitit.segment.t_reitit$segment33642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (children_SINGLEQUOTE_){
return (function (_33644){
var self__ = this;
var _33644__$1 = this;
return self__.meta33643;
});})(children_SINGLEQUOTE_))
;

reitit.segment.t_reitit$segment33642.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL;

reitit.segment.t_reitit$segment33642.prototype.reitit$segment$Segment$_insert$arity$3 = ((function (children_SINGLEQUOTE_){
return (function (_,p__33645,d){
var self__ = this;
var vec__33646 = p__33645;
var seq__33647 = cljs.core.seq.call(null,vec__33646);
var first__33648 = cljs.core.first.call(null,seq__33647);
var seq__33647__$1 = cljs.core.next.call(null,seq__33647);
var p = first__33648;
var ps = seq__33647__$1;
var ___$1 = this;
if(cljs.core.not.call(null,p)){
return reitit.segment.segment.call(null,self__.children,self__.wilds,self__.catch_all,d);
} else {
var vec__33649 = cljs.core.juxt.call(null,reitit.impl.wild_param,reitit.impl.catch_all_param).call(null,p);
var w = cljs.core.nth.call(null,vec__33649,(0),null);
var c = cljs.core.nth.call(null,vec__33649,(1),null);
var wilds__$1 = (cljs.core.truth_(w)?cljs.core.conj.call(null,self__.wilds,w):self__.wilds);
var catch_all__$1 = (function (){var or__3949__auto__ = c;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return self__.catch_all;
}
})();
var children__$1 = cljs.core.update.call(null,self__.children,(function (){var or__3949__auto__ = w;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = c;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return p;
}
}
})(),((function (vec__33649,w,c,wilds__$1,catch_all__$1,___$1,vec__33646,seq__33647,first__33648,seq__33647__$1,p,ps,children_SINGLEQUOTE_){
return (function (p1__33638_SHARP_){
return reitit.segment._insert.call(null,(function (){var or__3949__auto__ = p1__33638_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.segment.segment.call(null);
}
})(),ps,d);
});})(vec__33649,w,c,wilds__$1,catch_all__$1,___$1,vec__33646,seq__33647,first__33648,seq__33647__$1,p,ps,children_SINGLEQUOTE_))
);
return reitit.segment.segment.call(null,children__$1,wilds__$1,catch_all__$1,self__.match);
}
});})(children_SINGLEQUOTE_))
;

reitit.segment.t_reitit$segment33642.prototype.reitit$segment$Segment$_lookup$arity$3 = ((function (children_SINGLEQUOTE_){
return (function (_,p__33652,path_params){
var self__ = this;
var vec__33653 = p__33652;
var seq__33654 = cljs.core.seq.call(null,vec__33653);
var first__33655 = cljs.core.first.call(null,seq__33654);
var seq__33654__$1 = cljs.core.next.call(null,seq__33654);
var p = first__33655;
var ps = seq__33654__$1;
var ___$1 = this;
if((p == null)){
if(cljs.core.truth_(self__.match)){
return cljs.core.assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params);
} else {
return null;
}
} else {
var or__3949__auto__ = reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,self__.children_SINGLEQUOTE_,p),ps,path_params);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core.some.call(null,((function (or__3949__auto__,___$1,vec__33653,seq__33654,first__33655,seq__33654__$1,p,ps,children_SINGLEQUOTE_){
return (function (p1__33639_SHARP_){
return reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,self__.children_SINGLEQUOTE_,p1__33639_SHARP_),ps,cljs.core.assoc.call(null,path_params,p1__33639_SHARP_,p));
});})(or__3949__auto__,___$1,vec__33653,seq__33654,first__33655,seq__33654__$1,p,ps,children_SINGLEQUOTE_))
,self__.wilds);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return reitit.segment._catch_all.call(null,self__.children_SINGLEQUOTE_,self__.catch_all,path_params,p,ps);
}
}
}
});})(children_SINGLEQUOTE_))
;

reitit.segment.t_reitit$segment33642.getBasis = ((function (children_SINGLEQUOTE_){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"children'","children'",-942868266,null),new cljs.core.Symbol(null,"meta33643","meta33643",1402163517,null)], null);
});})(children_SINGLEQUOTE_))
;

reitit.segment.t_reitit$segment33642.cljs$lang$type = true;

reitit.segment.t_reitit$segment33642.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment33642";

reitit.segment.t_reitit$segment33642.cljs$lang$ctorPrWriter = ((function (children_SINGLEQUOTE_){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"reitit.segment/t_reitit$segment33642");
});})(children_SINGLEQUOTE_))
;

/**
 * Positional factory function for reitit.segment/t_reitit$segment33642.
 */
reitit.segment.__GT_t_reitit$segment33642 = ((function (children_SINGLEQUOTE_){
return (function reitit$segment$__GT_t_reitit$segment33642(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,meta33643){
return (new reitit.segment.t_reitit$segment33642(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,meta33643));
});})(children_SINGLEQUOTE_))
;

}

return (new reitit.segment.t_reitit$segment33642(children,wilds,catch_all,match,children_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.segment","segment","reitit.segment/segment",424393474)], null)));
});

reitit.segment.segment.cljs$lang$maxFixedArity = 4;

reitit.segment.insert = (function reitit$segment$insert(root,path,data){
return reitit.segment._insert.call(null,(function (){var or__3949__auto__ = root;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.segment.segment.call(null);
}
})(),reitit.impl.segments.call(null,path),reitit.segment.map__GT_Match.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null)));
});
reitit.segment.create = (function reitit$segment$create(paths){
return cljs.core.reduce.call(null,(function (segment,p__33657){
var vec__33658 = p__33657;
var p = cljs.core.nth.call(null,vec__33658,(0),null);
var data = cljs.core.nth.call(null,vec__33658,(1),null);
return reitit.segment.insert.call(null,segment,p,data);
}),null,paths);
});
reitit.segment.lookup = (function reitit$segment$lookup(segment,path){
return reitit.segment._lookup.call(null,segment,reitit.impl.segments.call(null,path),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=segment.js.map?rel=1541057580837
