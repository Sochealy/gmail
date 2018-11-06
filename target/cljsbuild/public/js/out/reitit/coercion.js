// Compiled by ClojureScript 1.10.339 {}
goog.provide('reitit.coercion');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('reitit.impl');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._get_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (reitit.coercion._get_name["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-name",this$);
}
}
}
});

/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._get_options[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (reitit.coercion._get_options["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-options",this$);
}
}
}
});

/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,spesification,data){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,spesification,data);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,spesification,data);
} else {
var m__4244__auto____$1 = (reitit.coercion._get_apidocs["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,spesification,data);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-apidocs",this$);
}
}
}
});

/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,model,name);
} else {
var m__4244__auto____$1 = (reitit.coercion._compile_model["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,model,name);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-compile-model",this$);
}
}
}
});

/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._open_model[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,model);
} else {
var m__4244__auto____$1 = (reitit.coercion._open_model["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-open-model",this$);
}
}
}
});

/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,error);
} else {
var m__4244__auto____$1 = (reitit.coercion._encode_error["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,error);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-encode-error",this$);
}
}
}
});

/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,type,model);
} else {
var m__4244__auto____$1 = (reitit.coercion._request_coercer["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,type,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-request-coercer",this$);
}
}
}
});

/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,model);
} else {
var m__4244__auto____$1 = (reitit.coercion._response_coercer["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-response-coercer",this$);
}
}
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
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k33882,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__33886 = k33882;
switch (G__33886) {
default:
return cljs.core.get.call(null,self__.__extmap,k33882,else__4206__auto__);

}
});

reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33881){
var self__ = this;
var G__33881__$1 = this;
return (new cljs.core.RecordIter((0),G__33881__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
});

reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33883,other33884){
var self__ = this;
var this33883__$1 = this;
return ((!((other33884 == null))) && ((this33883__$1.constructor === other33884.constructor)) && (cljs.core._EQ_.call(null,this33883__$1.__extmap,other33884.__extmap)));
});

reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__33881){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__33887 = cljs.core.keyword_identical_QMARK_;
var expr__33888 = k__4211__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__33881),null));
});

reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__33881){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__33881,self__.__extmap,self__.__hash));
});

reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reitit.coercion.CoercionError.cljs$lang$type = true;

reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
});

reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"reitit.coercion/CoercionError");
});

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__33885){
var extmap__4236__auto__ = (function (){var G__33890 = cljs.core.dissoc.call(null,G__33885);
if(cljs.core.record_QMARK_.call(null,G__33885)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33890);
} else {
return G__33890;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
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
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k33893,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__33897 = k33893;
var G__33897__$1 = (((G__33897 instanceof cljs.core.Keyword))?G__33897.fqn:null);
switch (G__33897__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33893,else__4206__auto__);

}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33892){
var self__ = this;
var G__33892__$1 = this;
return (new cljs.core.RecordIter((0),G__33892__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33894,other33895){
var self__ = this;
var this33894__$1 = this;
return ((!((other33895 == null))) && ((this33894__$1.constructor === other33895.constructor)) && (cljs.core._EQ_.call(null,this33894__$1.in,other33895.in)) && (cljs.core._EQ_.call(null,this33894__$1.style,other33895.style)) && (cljs.core._EQ_.call(null,this33894__$1.keywordize_QMARK_,other33895.keywordize_QMARK_)) && (cljs.core._EQ_.call(null,this33894__$1.open_QMARK_,other33895.open_QMARK_)) && (cljs.core._EQ_.call(null,this33894__$1.__extmap,other33895.__extmap)));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__33892){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__33898 = cljs.core.keyword_identical_QMARK_;
var expr__33899 = k__4211__auto__;
if(cljs.core.truth_(pred__33898.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__33899))){
return (new reitit.coercion.ParameterCoercion(G__33892,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33898.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__33899))){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__33892,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33898.call(null,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__33899))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__33892,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33898.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__33899))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__33892,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__33892),null));
}
}
}
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__33892){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__33892,self__.__extmap,self__.__hash));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"keywordize?","keywordize?",1406224615,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
});

reitit.coercion.ParameterCoercion.cljs$lang$type = true;

reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
});

reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"reitit.coercion/ParameterCoercion");
});

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__33896){
var extmap__4236__auto__ = (function (){var G__33901 = cljs.core.dissoc.call(null,G__33896,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.record_QMARK_.call(null,G__33896)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33901);
} else {
return G__33901;
}
})();
return (new reitit.coercion.ParameterCoercion(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__33896),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__33896),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912).cljs$core$IFn$_invoke$arity$1(G__33896),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__33896),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"body","body",-2049205669),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"body-params","body-params",-369749490),new cljs.core.Keyword(null,"body","body",-2049205669),false,false),new cljs.core.Keyword(null,"form","form",-1624062471),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"header","header",119441134),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"path","path",-188191168),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"string","string",-1989541586),true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request){
throw cljs.core.ex_info.call(null,["Request coercion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,result))].join(''),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","request-coercion","reitit.coercion/request-coercion",47377205),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),in$], null),new cljs.core.Keyword(null,"request","request",1772954723),request], null)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response){
throw cljs.core.ex_info.call(null,["Response coercion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,result))].join(''),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","response-coercion","reitit.coercion/response-coercion",-1532049609),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"response","response",-1068424192),response], null)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","request","muuntaja/request",-1616403792).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__33903){
var map__33904 = p__33903;
var map__33904__$1 = ((((!((map__33904 == null)))?(((((map__33904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33904):map__33904);
var extract_request_format = cljs.core.get.call(null,map__33904__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.call(null,map__33904__$1,new cljs.core.Keyword("reitit.coercion","parameter-coercion","reitit.coercion/parameter-coercion",-1825124100),reitit.coercion.default_parameter_coercion);
if(cljs.core.truth_(coercion)){
var temp__5455__auto__ = parameter_coercion.call(null,type);
if(cljs.core.truth_(temp__5455__auto__)){
var map__33906 = temp__5455__auto__;
var map__33906__$1 = ((((!((map__33906 == null)))?(((((map__33906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33906):map__33906);
var keywordize_QMARK_ = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912));
var open_QMARK_ = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in$ = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var style = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var transform = cljs.core.comp.call(null,(cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var model__$1 = (cljs.core.truth_(open_QMARK_)?reitit.coercion._open_model.call(null,coercion,model):model);
var coercer = reitit.coercion._request_coercer.call(null,coercion,style,model__$1);
return ((function (transform,model__$1,coercer,map__33906,map__33906__$1,keywordize_QMARK_,open_QMARK_,in$,style,temp__5455__auto__,map__33904,map__33904__$1,extract_request_format,parameter_coercion){
return (function (request){
var value = transform.call(null,request);
var format = extract_request_format.call(null,request);
var result = coercer.call(null,value,format);
if(cljs.core.truth_(reitit.coercion.error_QMARK_.call(null,result))){
return reitit.coercion.request_coercion_failed_BANG_.call(null,result,coercion,value,in$,request);
} else {
return result;
}
});
;})(transform,model__$1,coercer,map__33906,map__33906__$1,keywordize_QMARK_,open_QMARK_,in$,style,temp__5455__auto__,map__33904,map__33904__$1,extract_request_format,parameter_coercion))
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","response","muuntaja/response",-1772248613).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,body,p__33908){
var map__33909 = p__33908;
var map__33909__$1 = ((((!((map__33909 == null)))?(((((map__33909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33909):map__33909);
var extract_response_format = cljs.core.get.call(null,map__33909__$1,new cljs.core.Keyword(null,"extract-response-format","extract-response-format",-303544140),reitit.coercion.extract_response_format_default);
if(cljs.core.truth_(coercion)){
var coercer = reitit.coercion._response_coercer.call(null,coercion,body);
return ((function (coercer,map__33909,map__33909__$1,extract_response_format){
return (function (request,response){
var format = extract_response_format.call(null,request,response);
var value = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var result = coercer.call(null,value,format);
if(cljs.core.truth_(reitit.coercion.error_QMARK_.call(null,result))){
return reitit.coercion.response_coercion_failed_BANG_.call(null,result,coercion,value,request,response);
} else {
return result;
}
});
;})(coercer,map__33909,map__33909__$1,extract_response_format))
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error.call(null,new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv.call(null,(function (acc,k,coercer){
return reitit.impl.fast_assoc.call(null,acc,k,coercer.call(null,request));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5455__auto__ = (function (){var or__3949__auto__ = coercers.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return coercers.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var coercer = temp__5455__auto__;
return reitit.impl.fast_assoc.call(null,response,new cljs.core.Keyword(null,"body","body",-2049205669),coercer.call(null,request,response));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(coercion,parameters,opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.second,(function (){var iter__4324__auto__ = (function reitit$coercion$request_coercers_$_iter__33911(s__33912){
return (new cljs.core.LazySeq(null,(function (){
var s__33912__$1 = s__33912;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33912__$1);
if(temp__5457__auto__){
var s__33912__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33912__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__33912__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__33914 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__33913 = (0);
while(true){
if((i__33913 < size__4323__auto__)){
var vec__33915 = cljs.core._nth.call(null,c__4322__auto__,i__33913);
var k = cljs.core.nth.call(null,vec__33915,(0),null);
var v = cljs.core.nth.call(null,vec__33915,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__33914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer.call(null,coercion,k,v,opts)], null));

var G__33921 = (i__33913 + (1));
i__33913 = G__33921;
continue;
} else {
var G__33922 = (i__33913 + (1));
i__33913 = G__33922;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33914),reitit$coercion$request_coercers_$_iter__33911.call(null,cljs.core.chunk_rest.call(null,s__33912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33914),null);
}
} else {
var vec__33918 = cljs.core.first.call(null,s__33912__$2);
var k = cljs.core.nth.call(null,vec__33918,(0),null);
var v = cljs.core.nth.call(null,vec__33918,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer.call(null,coercion,k,v,opts)], null),reitit$coercion$request_coercers_$_iter__33911.call(null,cljs.core.rest.call(null,s__33912__$2)));
} else {
var G__33923 = cljs.core.rest.call(null,s__33912__$2);
s__33912__$1 = G__33923;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,parameters);
})()));
});
reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function reitit$coercion$response_coercers_$_iter__33924(s__33925){
return (new cljs.core.LazySeq(null,(function (){
var s__33925__$1 = s__33925;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33925__$1);
if(temp__5457__auto__){
var s__33925__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33925__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__33925__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__33927 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__33926 = (0);
while(true){
if((i__33926 < size__4323__auto__)){
var vec__33928 = cljs.core._nth.call(null,c__4322__auto__,i__33926);
var status = cljs.core.nth.call(null,vec__33928,(0),null);
var map__33931 = cljs.core.nth.call(null,vec__33928,(1),null);
var map__33931__$1 = ((((!((map__33931 == null)))?(((((map__33931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33931):map__33931);
var body = cljs.core.get.call(null,map__33931__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(body)){
cljs.core.chunk_append.call(null,b__33927,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer.call(null,coercion,body,opts)], null));

var G__33938 = (i__33926 + (1));
i__33926 = G__33938;
continue;
} else {
var G__33939 = (i__33926 + (1));
i__33926 = G__33939;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33927),reitit$coercion$response_coercers_$_iter__33924.call(null,cljs.core.chunk_rest.call(null,s__33925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33927),null);
}
} else {
var vec__33933 = cljs.core.first.call(null,s__33925__$2);
var status = cljs.core.nth.call(null,vec__33933,(0),null);
var map__33936 = cljs.core.nth.call(null,vec__33933,(1),null);
var map__33936__$1 = ((((!((map__33936 == null)))?(((((map__33936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33936):map__33936);
var body = cljs.core.get.call(null,map__33936__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(body)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer.call(null,coercion,body,opts)], null),reitit$coercion$response_coercers_$_iter__33924.call(null,cljs.core.rest.call(null,s__33925__$2)));
} else {
var G__33940 = cljs.core.rest.call(null,s__33925__$2);
s__33925__$1 = G__33940;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,responses);
})());
});
reitit.coercion.coercers_not_compiled_BANG_ = (function reitit$coercion$coercers_not_compiled_BANG_(match){
throw cljs.core.ex_info.call(null,["Match didn't have a compiled coercion attached.\n","Maybe you should have defined a router option:\n","{:compile reitit.coercion/compile-request-coercers}\n"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"match","match",1220059550),match], null));
});
reitit.coercion.get_apidocs = (function reitit$coercion$get_apidocs(this$,spesification,data){
var swagger_parameter = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"formData","formData",-1155796695),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"multipart","multipart",1158197946),new cljs.core.Keyword(null,"formData","formData",-1155796695)], null);
var G__33941 = spesification;
var G__33941__$1 = (((G__33941 instanceof cljs.core.Keyword))?G__33941.fqn:null);
switch (G__33941__$1) {
case "swagger":
return reitit.coercion._get_apidocs.call(null,this$,spesification,cljs.core.update.call(null,data,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),((function (G__33941,G__33941__$1,swagger_parameter){
return (function (parameters){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,((function (G__33941,G__33941__$1,swagger_parameter){
return (function (p__33942){
var vec__33943 = p__33942;
var k = cljs.core.nth.call(null,vec__33943,(0),null);
var v = cljs.core.nth.call(null,vec__33943,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swagger_parameter.call(null,k),v], null);
});})(G__33941,G__33941__$1,swagger_parameter))
,parameters)));
});})(G__33941,G__33941__$1,swagger_parameter))
));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33941__$1)].join('')));

}
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to create compiled coercers into Match under
 *   `:result. A pre-requisite to use [[coerce!]].
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__33947,opts){
var vec__33948 = p__33947;
var _ = cljs.core.nth.call(null,vec__33948,(0),null);
var map__33951 = cljs.core.nth.call(null,vec__33948,(1),null);
var map__33951__$1 = ((((!((map__33951 == null)))?(((((map__33951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33951):map__33951);
var parameters = cljs.core.get.call(null,map__33951__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var coercion = cljs.core.get.call(null,map__33951__$1,new cljs.core.Keyword(null,"coercion","coercion",904067157));
if(cljs.core.truth_((function (){var and__3938__auto__ = parameters;
if(cljs.core.truth_(and__3938__auto__)){
return coercion;
} else {
return and__3938__auto__;
}
})())){
return reitit.coercion.request_coercers.call(null,coercion,parameters,opts);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled
 *   coercers under `:result` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced
 *   If coercion or parameters are not defined, return `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5455__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(temp__5455__auto__)){
var coercers = temp__5455__auto__;
return reitit.coercion.coerce_request.call(null,coercers,match);
} else {
return null;
}
});

//# sourceMappingURL=coercion.js.map?rel=1541057581755
