// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36017){
var map__36018 = p__36017;
var map__36018__$1 = ((((!((map__36018 == null)))?(((((map__36018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36018):map__36018);
var m = map__36018__$1;
var n = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36020_36042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36021_36043 = null;
var count__36022_36044 = (0);
var i__36023_36045 = (0);
while(true){
if((i__36023_36045 < count__36022_36044)){
var f_36046 = cljs.core._nth.call(null,chunk__36021_36043,i__36023_36045);
cljs.core.println.call(null,"  ",f_36046);


var G__36047 = seq__36020_36042;
var G__36048 = chunk__36021_36043;
var G__36049 = count__36022_36044;
var G__36050 = (i__36023_36045 + (1));
seq__36020_36042 = G__36047;
chunk__36021_36043 = G__36048;
count__36022_36044 = G__36049;
i__36023_36045 = G__36050;
continue;
} else {
var temp__5457__auto___36051 = cljs.core.seq.call(null,seq__36020_36042);
if(temp__5457__auto___36051){
var seq__36020_36052__$1 = temp__5457__auto___36051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36020_36052__$1)){
var c__4351__auto___36053 = cljs.core.chunk_first.call(null,seq__36020_36052__$1);
var G__36054 = cljs.core.chunk_rest.call(null,seq__36020_36052__$1);
var G__36055 = c__4351__auto___36053;
var G__36056 = cljs.core.count.call(null,c__4351__auto___36053);
var G__36057 = (0);
seq__36020_36042 = G__36054;
chunk__36021_36043 = G__36055;
count__36022_36044 = G__36056;
i__36023_36045 = G__36057;
continue;
} else {
var f_36058 = cljs.core.first.call(null,seq__36020_36052__$1);
cljs.core.println.call(null,"  ",f_36058);


var G__36059 = cljs.core.next.call(null,seq__36020_36052__$1);
var G__36060 = null;
var G__36061 = (0);
var G__36062 = (0);
seq__36020_36042 = G__36059;
chunk__36021_36043 = G__36060;
count__36022_36044 = G__36061;
i__36023_36045 = G__36062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36063);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36063)))?cljs.core.second.call(null,arglists_36063):arglists_36063));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36024_36064 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36025_36065 = null;
var count__36026_36066 = (0);
var i__36027_36067 = (0);
while(true){
if((i__36027_36067 < count__36026_36066)){
var vec__36028_36068 = cljs.core._nth.call(null,chunk__36025_36065,i__36027_36067);
var name_36069 = cljs.core.nth.call(null,vec__36028_36068,(0),null);
var map__36031_36070 = cljs.core.nth.call(null,vec__36028_36068,(1),null);
var map__36031_36071__$1 = ((((!((map__36031_36070 == null)))?(((((map__36031_36070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36031_36070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36031_36070):map__36031_36070);
var doc_36072 = cljs.core.get.call(null,map__36031_36071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36073 = cljs.core.get.call(null,map__36031_36071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36069);

cljs.core.println.call(null," ",arglists_36073);

if(cljs.core.truth_(doc_36072)){
cljs.core.println.call(null," ",doc_36072);
} else {
}


var G__36074 = seq__36024_36064;
var G__36075 = chunk__36025_36065;
var G__36076 = count__36026_36066;
var G__36077 = (i__36027_36067 + (1));
seq__36024_36064 = G__36074;
chunk__36025_36065 = G__36075;
count__36026_36066 = G__36076;
i__36027_36067 = G__36077;
continue;
} else {
var temp__5457__auto___36078 = cljs.core.seq.call(null,seq__36024_36064);
if(temp__5457__auto___36078){
var seq__36024_36079__$1 = temp__5457__auto___36078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36024_36079__$1)){
var c__4351__auto___36080 = cljs.core.chunk_first.call(null,seq__36024_36079__$1);
var G__36081 = cljs.core.chunk_rest.call(null,seq__36024_36079__$1);
var G__36082 = c__4351__auto___36080;
var G__36083 = cljs.core.count.call(null,c__4351__auto___36080);
var G__36084 = (0);
seq__36024_36064 = G__36081;
chunk__36025_36065 = G__36082;
count__36026_36066 = G__36083;
i__36027_36067 = G__36084;
continue;
} else {
var vec__36033_36085 = cljs.core.first.call(null,seq__36024_36079__$1);
var name_36086 = cljs.core.nth.call(null,vec__36033_36085,(0),null);
var map__36036_36087 = cljs.core.nth.call(null,vec__36033_36085,(1),null);
var map__36036_36088__$1 = ((((!((map__36036_36087 == null)))?(((((map__36036_36087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36036_36087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36036_36087):map__36036_36087);
var doc_36089 = cljs.core.get.call(null,map__36036_36088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36090 = cljs.core.get.call(null,map__36036_36088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36086);

cljs.core.println.call(null," ",arglists_36090);

if(cljs.core.truth_(doc_36089)){
cljs.core.println.call(null," ",doc_36089);
} else {
}


var G__36091 = cljs.core.next.call(null,seq__36024_36079__$1);
var G__36092 = null;
var G__36093 = (0);
var G__36094 = (0);
seq__36024_36064 = G__36091;
chunk__36025_36065 = G__36092;
count__36026_36066 = G__36093;
i__36027_36067 = G__36094;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__36038 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36039 = null;
var count__36040 = (0);
var i__36041 = (0);
while(true){
if((i__36041 < count__36040)){
var role = cljs.core._nth.call(null,chunk__36039,i__36041);
var temp__5457__auto___36095__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36095__$1)){
var spec_36096 = temp__5457__auto___36095__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36096));
} else {
}


var G__36097 = seq__36038;
var G__36098 = chunk__36039;
var G__36099 = count__36040;
var G__36100 = (i__36041 + (1));
seq__36038 = G__36097;
chunk__36039 = G__36098;
count__36040 = G__36099;
i__36041 = G__36100;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__36038);
if(temp__5457__auto____$1){
var seq__36038__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36038__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36038__$1);
var G__36101 = cljs.core.chunk_rest.call(null,seq__36038__$1);
var G__36102 = c__4351__auto__;
var G__36103 = cljs.core.count.call(null,c__4351__auto__);
var G__36104 = (0);
seq__36038 = G__36101;
chunk__36039 = G__36102;
count__36040 = G__36103;
i__36041 = G__36104;
continue;
} else {
var role = cljs.core.first.call(null,seq__36038__$1);
var temp__5457__auto___36105__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36105__$2)){
var spec_36106 = temp__5457__auto___36105__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36106));
} else {
}


var G__36107 = cljs.core.next.call(null,seq__36038__$1);
var G__36108 = null;
var G__36109 = (0);
var G__36110 = (0);
seq__36038 = G__36107;
chunk__36039 = G__36108;
count__36040 = G__36109;
i__36041 = G__36110;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1541057586851
