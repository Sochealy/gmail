// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34553_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34553_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34554 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34555 = null;
var count__34556 = (0);
var i__34557 = (0);
while(true){
if((i__34557 < count__34556)){
var n = cljs.core._nth.call(null,chunk__34555,i__34557);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34558 = seq__34554;
var G__34559 = chunk__34555;
var G__34560 = count__34556;
var G__34561 = (i__34557 + (1));
seq__34554 = G__34558;
chunk__34555 = G__34559;
count__34556 = G__34560;
i__34557 = G__34561;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34554);
if(temp__5457__auto__){
var seq__34554__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34554__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__34554__$1);
var G__34562 = cljs.core.chunk_rest.call(null,seq__34554__$1);
var G__34563 = c__4351__auto__;
var G__34564 = cljs.core.count.call(null,c__4351__auto__);
var G__34565 = (0);
seq__34554 = G__34562;
chunk__34555 = G__34563;
count__34556 = G__34564;
i__34557 = G__34565;
continue;
} else {
var n = cljs.core.first.call(null,seq__34554__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34566 = cljs.core.next.call(null,seq__34554__$1);
var G__34567 = null;
var G__34568 = (0);
var G__34569 = (0);
seq__34554 = G__34566;
chunk__34555 = G__34567;
count__34556 = G__34568;
i__34557 = G__34569;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34570){
var vec__34571 = p__34570;
var _ = cljs.core.nth.call(null,vec__34571,(0),null);
var v = cljs.core.nth.call(null,vec__34571,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__34574){
var vec__34575 = p__34574;
var k = cljs.core.nth.call(null,vec__34575,(0),null);
var v = cljs.core.nth.call(null,vec__34575,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34587_34595 = cljs.core.seq.call(null,deps);
var chunk__34588_34596 = null;
var count__34589_34597 = (0);
var i__34590_34598 = (0);
while(true){
if((i__34590_34598 < count__34589_34597)){
var dep_34599 = cljs.core._nth.call(null,chunk__34588_34596,i__34590_34598);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_34599;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34599));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34599,(depth + (1)),state);
} else {
}


var G__34600 = seq__34587_34595;
var G__34601 = chunk__34588_34596;
var G__34602 = count__34589_34597;
var G__34603 = (i__34590_34598 + (1));
seq__34587_34595 = G__34600;
chunk__34588_34596 = G__34601;
count__34589_34597 = G__34602;
i__34590_34598 = G__34603;
continue;
} else {
var temp__5457__auto___34604 = cljs.core.seq.call(null,seq__34587_34595);
if(temp__5457__auto___34604){
var seq__34587_34605__$1 = temp__5457__auto___34604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34587_34605__$1)){
var c__4351__auto___34606 = cljs.core.chunk_first.call(null,seq__34587_34605__$1);
var G__34607 = cljs.core.chunk_rest.call(null,seq__34587_34605__$1);
var G__34608 = c__4351__auto___34606;
var G__34609 = cljs.core.count.call(null,c__4351__auto___34606);
var G__34610 = (0);
seq__34587_34595 = G__34607;
chunk__34588_34596 = G__34608;
count__34589_34597 = G__34609;
i__34590_34598 = G__34610;
continue;
} else {
var dep_34611 = cljs.core.first.call(null,seq__34587_34605__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_34611;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34611));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34611,(depth + (1)),state);
} else {
}


var G__34612 = cljs.core.next.call(null,seq__34587_34605__$1);
var G__34613 = null;
var G__34614 = (0);
var G__34615 = (0);
seq__34587_34595 = G__34612;
chunk__34588_34596 = G__34613;
count__34589_34597 = G__34614;
i__34590_34598 = G__34615;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34591){
var vec__34592 = p__34591;
var seq__34593 = cljs.core.seq.call(null,vec__34592);
var first__34594 = cljs.core.first.call(null,seq__34593);
var seq__34593__$1 = cljs.core.next.call(null,seq__34593);
var x = first__34594;
var xs = seq__34593__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34592,seq__34593,first__34594,seq__34593__$1,x,xs,get_deps__$1){
return (function (p1__34578_SHARP_){
return clojure.set.difference.call(null,p1__34578_SHARP_,x);
});})(vec__34592,seq__34593,first__34594,seq__34593__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34616 = cljs.core.seq.call(null,provides);
var chunk__34617 = null;
var count__34618 = (0);
var i__34619 = (0);
while(true){
if((i__34619 < count__34618)){
var prov = cljs.core._nth.call(null,chunk__34617,i__34619);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34620_34628 = cljs.core.seq.call(null,requires);
var chunk__34621_34629 = null;
var count__34622_34630 = (0);
var i__34623_34631 = (0);
while(true){
if((i__34623_34631 < count__34622_34630)){
var req_34632 = cljs.core._nth.call(null,chunk__34621_34629,i__34623_34631);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34632,prov);


var G__34633 = seq__34620_34628;
var G__34634 = chunk__34621_34629;
var G__34635 = count__34622_34630;
var G__34636 = (i__34623_34631 + (1));
seq__34620_34628 = G__34633;
chunk__34621_34629 = G__34634;
count__34622_34630 = G__34635;
i__34623_34631 = G__34636;
continue;
} else {
var temp__5457__auto___34637 = cljs.core.seq.call(null,seq__34620_34628);
if(temp__5457__auto___34637){
var seq__34620_34638__$1 = temp__5457__auto___34637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34620_34638__$1)){
var c__4351__auto___34639 = cljs.core.chunk_first.call(null,seq__34620_34638__$1);
var G__34640 = cljs.core.chunk_rest.call(null,seq__34620_34638__$1);
var G__34641 = c__4351__auto___34639;
var G__34642 = cljs.core.count.call(null,c__4351__auto___34639);
var G__34643 = (0);
seq__34620_34628 = G__34640;
chunk__34621_34629 = G__34641;
count__34622_34630 = G__34642;
i__34623_34631 = G__34643;
continue;
} else {
var req_34644 = cljs.core.first.call(null,seq__34620_34638__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34644,prov);


var G__34645 = cljs.core.next.call(null,seq__34620_34638__$1);
var G__34646 = null;
var G__34647 = (0);
var G__34648 = (0);
seq__34620_34628 = G__34645;
chunk__34621_34629 = G__34646;
count__34622_34630 = G__34647;
i__34623_34631 = G__34648;
continue;
}
} else {
}
}
break;
}


var G__34649 = seq__34616;
var G__34650 = chunk__34617;
var G__34651 = count__34618;
var G__34652 = (i__34619 + (1));
seq__34616 = G__34649;
chunk__34617 = G__34650;
count__34618 = G__34651;
i__34619 = G__34652;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34616);
if(temp__5457__auto__){
var seq__34616__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34616__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__34616__$1);
var G__34653 = cljs.core.chunk_rest.call(null,seq__34616__$1);
var G__34654 = c__4351__auto__;
var G__34655 = cljs.core.count.call(null,c__4351__auto__);
var G__34656 = (0);
seq__34616 = G__34653;
chunk__34617 = G__34654;
count__34618 = G__34655;
i__34619 = G__34656;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34616__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34624_34657 = cljs.core.seq.call(null,requires);
var chunk__34625_34658 = null;
var count__34626_34659 = (0);
var i__34627_34660 = (0);
while(true){
if((i__34627_34660 < count__34626_34659)){
var req_34661 = cljs.core._nth.call(null,chunk__34625_34658,i__34627_34660);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34661,prov);


var G__34662 = seq__34624_34657;
var G__34663 = chunk__34625_34658;
var G__34664 = count__34626_34659;
var G__34665 = (i__34627_34660 + (1));
seq__34624_34657 = G__34662;
chunk__34625_34658 = G__34663;
count__34626_34659 = G__34664;
i__34627_34660 = G__34665;
continue;
} else {
var temp__5457__auto___34666__$1 = cljs.core.seq.call(null,seq__34624_34657);
if(temp__5457__auto___34666__$1){
var seq__34624_34667__$1 = temp__5457__auto___34666__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34624_34667__$1)){
var c__4351__auto___34668 = cljs.core.chunk_first.call(null,seq__34624_34667__$1);
var G__34669 = cljs.core.chunk_rest.call(null,seq__34624_34667__$1);
var G__34670 = c__4351__auto___34668;
var G__34671 = cljs.core.count.call(null,c__4351__auto___34668);
var G__34672 = (0);
seq__34624_34657 = G__34669;
chunk__34625_34658 = G__34670;
count__34626_34659 = G__34671;
i__34627_34660 = G__34672;
continue;
} else {
var req_34673 = cljs.core.first.call(null,seq__34624_34667__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34673,prov);


var G__34674 = cljs.core.next.call(null,seq__34624_34667__$1);
var G__34675 = null;
var G__34676 = (0);
var G__34677 = (0);
seq__34624_34657 = G__34674;
chunk__34625_34658 = G__34675;
count__34626_34659 = G__34676;
i__34627_34660 = G__34677;
continue;
}
} else {
}
}
break;
}


var G__34678 = cljs.core.next.call(null,seq__34616__$1);
var G__34679 = null;
var G__34680 = (0);
var G__34681 = (0);
seq__34616 = G__34678;
chunk__34617 = G__34679;
count__34618 = G__34680;
i__34619 = G__34681;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34682_34686 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34683_34687 = null;
var count__34684_34688 = (0);
var i__34685_34689 = (0);
while(true){
if((i__34685_34689 < count__34684_34688)){
var ns_34690 = cljs.core._nth.call(null,chunk__34683_34687,i__34685_34689);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34690);


var G__34691 = seq__34682_34686;
var G__34692 = chunk__34683_34687;
var G__34693 = count__34684_34688;
var G__34694 = (i__34685_34689 + (1));
seq__34682_34686 = G__34691;
chunk__34683_34687 = G__34692;
count__34684_34688 = G__34693;
i__34685_34689 = G__34694;
continue;
} else {
var temp__5457__auto___34695 = cljs.core.seq.call(null,seq__34682_34686);
if(temp__5457__auto___34695){
var seq__34682_34696__$1 = temp__5457__auto___34695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34682_34696__$1)){
var c__4351__auto___34697 = cljs.core.chunk_first.call(null,seq__34682_34696__$1);
var G__34698 = cljs.core.chunk_rest.call(null,seq__34682_34696__$1);
var G__34699 = c__4351__auto___34697;
var G__34700 = cljs.core.count.call(null,c__4351__auto___34697);
var G__34701 = (0);
seq__34682_34686 = G__34698;
chunk__34683_34687 = G__34699;
count__34684_34688 = G__34700;
i__34685_34689 = G__34701;
continue;
} else {
var ns_34702 = cljs.core.first.call(null,seq__34682_34696__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34702);


var G__34703 = cljs.core.next.call(null,seq__34682_34696__$1);
var G__34704 = null;
var G__34705 = (0);
var G__34706 = (0);
seq__34682_34686 = G__34703;
chunk__34683_34687 = G__34704;
count__34684_34688 = G__34705;
i__34685_34689 = G__34706;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34707__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34708__i = 0, G__34708__a = new Array(arguments.length -  0);
while (G__34708__i < G__34708__a.length) {G__34708__a[G__34708__i] = arguments[G__34708__i + 0]; ++G__34708__i;}
  args = new cljs.core.IndexedSeq(G__34708__a,0,null);
} 
return G__34707__delegate.call(this,args);};
G__34707.cljs$lang$maxFixedArity = 0;
G__34707.cljs$lang$applyTo = (function (arglist__34709){
var args = cljs.core.seq(arglist__34709);
return G__34707__delegate(args);
});
G__34707.cljs$core$IFn$_invoke$arity$variadic = G__34707__delegate;
return G__34707;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34710_SHARP_,p2__34711_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34710_SHARP_)].join('')),p2__34711_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34712_SHARP_,p2__34713_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34712_SHARP_)].join(''),p2__34713_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34714 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34714.addCallback(((function (G__34714){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34714))
);

G__34714.addErrback(((function (G__34714){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34714))
);

return G__34714;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34715){if((e34715 instanceof Error)){
var e = e34715;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34715;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34716){if((e34716 instanceof Error)){
var e = e34716;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34716;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34717 = cljs.core._EQ_;
var expr__34718 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34717.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34718))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34717.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34718))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34717.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34718))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34717,expr__34718){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34717,expr__34718))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34720,callback){
var map__34721 = p__34720;
var map__34721__$1 = ((((!((map__34721 == null)))?(((((map__34721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34721):map__34721);
var file_msg = map__34721__$1;
var request_url = cljs.core.get.call(null,map__34721__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34721,map__34721__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34721,map__34721__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__){
return (function (state_34759){
var state_val_34760 = (state_34759[(1)]);
if((state_val_34760 === (7))){
var inst_34755 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
var statearr_34761_34787 = state_34759__$1;
(statearr_34761_34787[(2)] = inst_34755);

(statearr_34761_34787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (1))){
var state_34759__$1 = state_34759;
var statearr_34762_34788 = state_34759__$1;
(statearr_34762_34788[(2)] = null);

(statearr_34762_34788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (4))){
var inst_34725 = (state_34759[(7)]);
var inst_34725__$1 = (state_34759[(2)]);
var state_34759__$1 = (function (){var statearr_34763 = state_34759;
(statearr_34763[(7)] = inst_34725__$1);

return statearr_34763;
})();
if(cljs.core.truth_(inst_34725__$1)){
var statearr_34764_34789 = state_34759__$1;
(statearr_34764_34789[(1)] = (5));

} else {
var statearr_34765_34790 = state_34759__$1;
(statearr_34765_34790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (15))){
var inst_34740 = (state_34759[(8)]);
var inst_34738 = (state_34759[(9)]);
var inst_34742 = inst_34740.call(null,inst_34738);
var state_34759__$1 = state_34759;
var statearr_34766_34791 = state_34759__$1;
(statearr_34766_34791[(2)] = inst_34742);

(statearr_34766_34791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (13))){
var inst_34749 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
var statearr_34767_34792 = state_34759__$1;
(statearr_34767_34792[(2)] = inst_34749);

(statearr_34767_34792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (6))){
var state_34759__$1 = state_34759;
var statearr_34768_34793 = state_34759__$1;
(statearr_34768_34793[(2)] = null);

(statearr_34768_34793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (17))){
var inst_34746 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
var statearr_34769_34794 = state_34759__$1;
(statearr_34769_34794[(2)] = inst_34746);

(statearr_34769_34794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (3))){
var inst_34757 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34759__$1,inst_34757);
} else {
if((state_val_34760 === (12))){
var state_34759__$1 = state_34759;
var statearr_34770_34795 = state_34759__$1;
(statearr_34770_34795[(2)] = null);

(statearr_34770_34795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (2))){
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34759__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34760 === (11))){
var inst_34730 = (state_34759[(10)]);
var inst_34736 = figwheel.client.file_reloading.blocking_load.call(null,inst_34730);
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34759__$1,(14),inst_34736);
} else {
if((state_val_34760 === (9))){
var inst_34730 = (state_34759[(10)]);
var state_34759__$1 = state_34759;
if(cljs.core.truth_(inst_34730)){
var statearr_34771_34796 = state_34759__$1;
(statearr_34771_34796[(1)] = (11));

} else {
var statearr_34772_34797 = state_34759__$1;
(statearr_34772_34797[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (5))){
var inst_34725 = (state_34759[(7)]);
var inst_34731 = (state_34759[(11)]);
var inst_34730 = cljs.core.nth.call(null,inst_34725,(0),null);
var inst_34731__$1 = cljs.core.nth.call(null,inst_34725,(1),null);
var state_34759__$1 = (function (){var statearr_34773 = state_34759;
(statearr_34773[(10)] = inst_34730);

(statearr_34773[(11)] = inst_34731__$1);

return statearr_34773;
})();
if(cljs.core.truth_(inst_34731__$1)){
var statearr_34774_34798 = state_34759__$1;
(statearr_34774_34798[(1)] = (8));

} else {
var statearr_34775_34799 = state_34759__$1;
(statearr_34775_34799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (14))){
var inst_34730 = (state_34759[(10)]);
var inst_34740 = (state_34759[(8)]);
var inst_34738 = (state_34759[(2)]);
var inst_34739 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34740__$1 = cljs.core.get.call(null,inst_34739,inst_34730);
var state_34759__$1 = (function (){var statearr_34776 = state_34759;
(statearr_34776[(8)] = inst_34740__$1);

(statearr_34776[(9)] = inst_34738);

return statearr_34776;
})();
if(cljs.core.truth_(inst_34740__$1)){
var statearr_34777_34800 = state_34759__$1;
(statearr_34777_34800[(1)] = (15));

} else {
var statearr_34778_34801 = state_34759__$1;
(statearr_34778_34801[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (16))){
var inst_34738 = (state_34759[(9)]);
var inst_34744 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34738);
var state_34759__$1 = state_34759;
var statearr_34779_34802 = state_34759__$1;
(statearr_34779_34802[(2)] = inst_34744);

(statearr_34779_34802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (10))){
var inst_34751 = (state_34759[(2)]);
var state_34759__$1 = (function (){var statearr_34780 = state_34759;
(statearr_34780[(12)] = inst_34751);

return statearr_34780;
})();
var statearr_34781_34803 = state_34759__$1;
(statearr_34781_34803[(2)] = null);

(statearr_34781_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (8))){
var inst_34731 = (state_34759[(11)]);
var inst_34733 = eval(inst_34731);
var state_34759__$1 = state_34759;
var statearr_34782_34804 = state_34759__$1;
(statearr_34782_34804[(2)] = inst_34733);

(statearr_34782_34804[(1)] = (10));


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
});})(c__31364__auto__))
;
return ((function (switch__31273__auto__,c__31364__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31274__auto__ = null;
var figwheel$client$file_reloading$state_machine__31274__auto____0 = (function (){
var statearr_34783 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34783[(0)] = figwheel$client$file_reloading$state_machine__31274__auto__);

(statearr_34783[(1)] = (1));

return statearr_34783;
});
var figwheel$client$file_reloading$state_machine__31274__auto____1 = (function (state_34759){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_34759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__31277__auto__ = e34784;
var statearr_34785_34805 = state_34759;
(statearr_34785_34805[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34806 = state_34759;
state_34759 = G__34806;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31274__auto__ = function(state_34759){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31274__auto____1.call(this,state_34759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31274__auto____0;
figwheel$client$file_reloading$state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31274__auto____1;
return figwheel$client$file_reloading$state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__))
})();
var state__31366__auto__ = (function (){var statearr_34786 = f__31365__auto__.call(null);
(statearr_34786[(6)] = c__31364__auto__);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__))
);

return c__31364__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34808 = arguments.length;
switch (G__34808) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34810,callback){
var map__34811 = p__34810;
var map__34811__$1 = ((((!((map__34811 == null)))?(((((map__34811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34811):map__34811);
var file_msg = map__34811__$1;
var namespace = cljs.core.get.call(null,map__34811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34811,map__34811__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34811,map__34811__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34813){
var map__34814 = p__34813;
var map__34814__$1 = ((((!((map__34814 == null)))?(((((map__34814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34814):map__34814);
var file_msg = map__34814__$1;
var namespace = cljs.core.get.call(null,map__34814__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34816){
var map__34817 = p__34816;
var map__34817__$1 = ((((!((map__34817 == null)))?(((((map__34817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34817):map__34817);
var file_msg = map__34817__$1;
var namespace = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34819,callback){
var map__34820 = p__34819;
var map__34820__$1 = ((((!((map__34820 == null)))?(((((map__34820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34820):map__34820);
var file_msg = map__34820__$1;
var request_url = cljs.core.get.call(null,map__34820__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34820__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31364__auto___34870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___34870,out){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___34870,out){
return (function (state_34855){
var state_val_34856 = (state_34855[(1)]);
if((state_val_34856 === (1))){
var inst_34829 = cljs.core.seq.call(null,files);
var inst_34830 = cljs.core.first.call(null,inst_34829);
var inst_34831 = cljs.core.next.call(null,inst_34829);
var inst_34832 = files;
var state_34855__$1 = (function (){var statearr_34857 = state_34855;
(statearr_34857[(7)] = inst_34831);

(statearr_34857[(8)] = inst_34830);

(statearr_34857[(9)] = inst_34832);

return statearr_34857;
})();
var statearr_34858_34871 = state_34855__$1;
(statearr_34858_34871[(2)] = null);

(statearr_34858_34871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (2))){
var inst_34838 = (state_34855[(10)]);
var inst_34832 = (state_34855[(9)]);
var inst_34837 = cljs.core.seq.call(null,inst_34832);
var inst_34838__$1 = cljs.core.first.call(null,inst_34837);
var inst_34839 = cljs.core.next.call(null,inst_34837);
var inst_34840 = (inst_34838__$1 == null);
var inst_34841 = cljs.core.not.call(null,inst_34840);
var state_34855__$1 = (function (){var statearr_34859 = state_34855;
(statearr_34859[(10)] = inst_34838__$1);

(statearr_34859[(11)] = inst_34839);

return statearr_34859;
})();
if(inst_34841){
var statearr_34860_34872 = state_34855__$1;
(statearr_34860_34872[(1)] = (4));

} else {
var statearr_34861_34873 = state_34855__$1;
(statearr_34861_34873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (3))){
var inst_34853 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34855__$1,inst_34853);
} else {
if((state_val_34856 === (4))){
var inst_34838 = (state_34855[(10)]);
var inst_34843 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34838);
var state_34855__$1 = state_34855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34855__$1,(7),inst_34843);
} else {
if((state_val_34856 === (5))){
var inst_34849 = cljs.core.async.close_BANG_.call(null,out);
var state_34855__$1 = state_34855;
var statearr_34862_34874 = state_34855__$1;
(statearr_34862_34874[(2)] = inst_34849);

(statearr_34862_34874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (6))){
var inst_34851 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
var statearr_34863_34875 = state_34855__$1;
(statearr_34863_34875[(2)] = inst_34851);

(statearr_34863_34875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (7))){
var inst_34839 = (state_34855[(11)]);
var inst_34845 = (state_34855[(2)]);
var inst_34846 = cljs.core.async.put_BANG_.call(null,out,inst_34845);
var inst_34832 = inst_34839;
var state_34855__$1 = (function (){var statearr_34864 = state_34855;
(statearr_34864[(12)] = inst_34846);

(statearr_34864[(9)] = inst_34832);

return statearr_34864;
})();
var statearr_34865_34876 = state_34855__$1;
(statearr_34865_34876[(2)] = null);

(statearr_34865_34876[(1)] = (2));


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
});})(c__31364__auto___34870,out))
;
return ((function (switch__31273__auto__,c__31364__auto___34870,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto____0 = (function (){
var statearr_34866 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34866[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto__);

(statearr_34866[(1)] = (1));

return statearr_34866;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto____1 = (function (state_34855){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_34855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e34867){if((e34867 instanceof Object)){
var ex__31277__auto__ = e34867;
var statearr_34868_34877 = state_34855;
(statearr_34868_34877[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34878 = state_34855;
state_34855 = G__34878;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto__ = function(state_34855){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto____1.call(this,state_34855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___34870,out))
})();
var state__31366__auto__ = (function (){var statearr_34869 = f__31365__auto__.call(null);
(statearr_34869[(6)] = c__31364__auto___34870);

return statearr_34869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___34870,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34879,opts){
var map__34880 = p__34879;
var map__34880__$1 = ((((!((map__34880 == null)))?(((((map__34880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34880):map__34880);
var eval_body = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34882){var e = e34882;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34883_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34883_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34884){
var vec__34885 = p__34884;
var k = cljs.core.nth.call(null,vec__34885,(0),null);
var v = cljs.core.nth.call(null,vec__34885,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34888){
var vec__34889 = p__34888;
var k = cljs.core.nth.call(null,vec__34889,(0),null);
var v = cljs.core.nth.call(null,vec__34889,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34895,p__34896){
var map__34897 = p__34895;
var map__34897__$1 = ((((!((map__34897 == null)))?(((((map__34897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34897):map__34897);
var opts = map__34897__$1;
var before_jsload = cljs.core.get.call(null,map__34897__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34897__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34897__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34898 = p__34896;
var map__34898__$1 = ((((!((map__34898 == null)))?(((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34898):map__34898);
var msg = map__34898__$1;
var files = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35052){
var state_val_35053 = (state_35052[(1)]);
if((state_val_35053 === (7))){
var inst_34914 = (state_35052[(7)]);
var inst_34913 = (state_35052[(8)]);
var inst_34915 = (state_35052[(9)]);
var inst_34912 = (state_35052[(10)]);
var inst_34920 = cljs.core._nth.call(null,inst_34913,inst_34915);
var inst_34921 = figwheel.client.file_reloading.eval_body.call(null,inst_34920,opts);
var inst_34922 = (inst_34915 + (1));
var tmp35054 = inst_34914;
var tmp35055 = inst_34913;
var tmp35056 = inst_34912;
var inst_34912__$1 = tmp35056;
var inst_34913__$1 = tmp35055;
var inst_34914__$1 = tmp35054;
var inst_34915__$1 = inst_34922;
var state_35052__$1 = (function (){var statearr_35057 = state_35052;
(statearr_35057[(7)] = inst_34914__$1);

(statearr_35057[(8)] = inst_34913__$1);

(statearr_35057[(11)] = inst_34921);

(statearr_35057[(9)] = inst_34915__$1);

(statearr_35057[(10)] = inst_34912__$1);

return statearr_35057;
})();
var statearr_35058_35141 = state_35052__$1;
(statearr_35058_35141[(2)] = null);

(statearr_35058_35141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (20))){
var inst_34955 = (state_35052[(12)]);
var inst_34963 = figwheel.client.file_reloading.sort_files.call(null,inst_34955);
var state_35052__$1 = state_35052;
var statearr_35059_35142 = state_35052__$1;
(statearr_35059_35142[(2)] = inst_34963);

(statearr_35059_35142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (27))){
var state_35052__$1 = state_35052;
var statearr_35060_35143 = state_35052__$1;
(statearr_35060_35143[(2)] = null);

(statearr_35060_35143[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (1))){
var inst_34904 = (state_35052[(13)]);
var inst_34901 = before_jsload.call(null,files);
var inst_34902 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34903 = (function (){return ((function (inst_34904,inst_34901,inst_34902,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34892_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34892_SHARP_);
});
;})(inst_34904,inst_34901,inst_34902,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34904__$1 = cljs.core.filter.call(null,inst_34903,files);
var inst_34905 = cljs.core.not_empty.call(null,inst_34904__$1);
var state_35052__$1 = (function (){var statearr_35061 = state_35052;
(statearr_35061[(14)] = inst_34901);

(statearr_35061[(15)] = inst_34902);

(statearr_35061[(13)] = inst_34904__$1);

return statearr_35061;
})();
if(cljs.core.truth_(inst_34905)){
var statearr_35062_35144 = state_35052__$1;
(statearr_35062_35144[(1)] = (2));

} else {
var statearr_35063_35145 = state_35052__$1;
(statearr_35063_35145[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (24))){
var state_35052__$1 = state_35052;
var statearr_35064_35146 = state_35052__$1;
(statearr_35064_35146[(2)] = null);

(statearr_35064_35146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (39))){
var inst_35005 = (state_35052[(16)]);
var state_35052__$1 = state_35052;
var statearr_35065_35147 = state_35052__$1;
(statearr_35065_35147[(2)] = inst_35005);

(statearr_35065_35147[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (46))){
var inst_35047 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35066_35148 = state_35052__$1;
(statearr_35066_35148[(2)] = inst_35047);

(statearr_35066_35148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (4))){
var inst_34949 = (state_35052[(2)]);
var inst_34950 = cljs.core.List.EMPTY;
var inst_34951 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34950);
var inst_34952 = (function (){return ((function (inst_34949,inst_34950,inst_34951,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34893_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34893_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34893_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34893_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_34949,inst_34950,inst_34951,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34953 = cljs.core.filter.call(null,inst_34952,files);
var inst_34954 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34955 = cljs.core.concat.call(null,inst_34953,inst_34954);
var state_35052__$1 = (function (){var statearr_35067 = state_35052;
(statearr_35067[(17)] = inst_34951);

(statearr_35067[(12)] = inst_34955);

(statearr_35067[(18)] = inst_34949);

return statearr_35067;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35068_35149 = state_35052__$1;
(statearr_35068_35149[(1)] = (16));

} else {
var statearr_35069_35150 = state_35052__$1;
(statearr_35069_35150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (15))){
var inst_34939 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35070_35151 = state_35052__$1;
(statearr_35070_35151[(2)] = inst_34939);

(statearr_35070_35151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (21))){
var inst_34965 = (state_35052[(19)]);
var inst_34965__$1 = (state_35052[(2)]);
var inst_34966 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34965__$1);
var state_35052__$1 = (function (){var statearr_35071 = state_35052;
(statearr_35071[(19)] = inst_34965__$1);

return statearr_35071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35052__$1,(22),inst_34966);
} else {
if((state_val_35053 === (31))){
var inst_35050 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35052__$1,inst_35050);
} else {
if((state_val_35053 === (32))){
var inst_35005 = (state_35052[(16)]);
var inst_35010 = inst_35005.cljs$lang$protocol_mask$partition0$;
var inst_35011 = (inst_35010 & (64));
var inst_35012 = inst_35005.cljs$core$ISeq$;
var inst_35013 = (cljs.core.PROTOCOL_SENTINEL === inst_35012);
var inst_35014 = ((inst_35011) || (inst_35013));
var state_35052__$1 = state_35052;
if(cljs.core.truth_(inst_35014)){
var statearr_35072_35152 = state_35052__$1;
(statearr_35072_35152[(1)] = (35));

} else {
var statearr_35073_35153 = state_35052__$1;
(statearr_35073_35153[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (40))){
var inst_35027 = (state_35052[(20)]);
var inst_35026 = (state_35052[(2)]);
var inst_35027__$1 = cljs.core.get.call(null,inst_35026,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35028 = cljs.core.get.call(null,inst_35026,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35029 = cljs.core.not_empty.call(null,inst_35027__$1);
var state_35052__$1 = (function (){var statearr_35074 = state_35052;
(statearr_35074[(20)] = inst_35027__$1);

(statearr_35074[(21)] = inst_35028);

return statearr_35074;
})();
if(cljs.core.truth_(inst_35029)){
var statearr_35075_35154 = state_35052__$1;
(statearr_35075_35154[(1)] = (41));

} else {
var statearr_35076_35155 = state_35052__$1;
(statearr_35076_35155[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (33))){
var state_35052__$1 = state_35052;
var statearr_35077_35156 = state_35052__$1;
(statearr_35077_35156[(2)] = false);

(statearr_35077_35156[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (13))){
var inst_34925 = (state_35052[(22)]);
var inst_34929 = cljs.core.chunk_first.call(null,inst_34925);
var inst_34930 = cljs.core.chunk_rest.call(null,inst_34925);
var inst_34931 = cljs.core.count.call(null,inst_34929);
var inst_34912 = inst_34930;
var inst_34913 = inst_34929;
var inst_34914 = inst_34931;
var inst_34915 = (0);
var state_35052__$1 = (function (){var statearr_35078 = state_35052;
(statearr_35078[(7)] = inst_34914);

(statearr_35078[(8)] = inst_34913);

(statearr_35078[(9)] = inst_34915);

(statearr_35078[(10)] = inst_34912);

return statearr_35078;
})();
var statearr_35079_35157 = state_35052__$1;
(statearr_35079_35157[(2)] = null);

(statearr_35079_35157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (22))){
var inst_34969 = (state_35052[(23)]);
var inst_34965 = (state_35052[(19)]);
var inst_34968 = (state_35052[(24)]);
var inst_34973 = (state_35052[(25)]);
var inst_34968__$1 = (state_35052[(2)]);
var inst_34969__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34968__$1);
var inst_34970 = (function (){var all_files = inst_34965;
var res_SINGLEQUOTE_ = inst_34968__$1;
var res = inst_34969__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34969,inst_34965,inst_34968,inst_34973,inst_34968__$1,inst_34969__$1,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34894_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34894_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34969,inst_34965,inst_34968,inst_34973,inst_34968__$1,inst_34969__$1,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34971 = cljs.core.filter.call(null,inst_34970,inst_34968__$1);
var inst_34972 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34973__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34972);
var inst_34974 = cljs.core.not_empty.call(null,inst_34973__$1);
var state_35052__$1 = (function (){var statearr_35080 = state_35052;
(statearr_35080[(26)] = inst_34971);

(statearr_35080[(23)] = inst_34969__$1);

(statearr_35080[(24)] = inst_34968__$1);

(statearr_35080[(25)] = inst_34973__$1);

return statearr_35080;
})();
if(cljs.core.truth_(inst_34974)){
var statearr_35081_35158 = state_35052__$1;
(statearr_35081_35158[(1)] = (23));

} else {
var statearr_35082_35159 = state_35052__$1;
(statearr_35082_35159[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (36))){
var state_35052__$1 = state_35052;
var statearr_35083_35160 = state_35052__$1;
(statearr_35083_35160[(2)] = false);

(statearr_35083_35160[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (41))){
var inst_35027 = (state_35052[(20)]);
var inst_35031 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35032 = cljs.core.map.call(null,inst_35031,inst_35027);
var inst_35033 = cljs.core.pr_str.call(null,inst_35032);
var inst_35034 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35033)].join('');
var inst_35035 = figwheel.client.utils.log.call(null,inst_35034);
var state_35052__$1 = state_35052;
var statearr_35084_35161 = state_35052__$1;
(statearr_35084_35161[(2)] = inst_35035);

(statearr_35084_35161[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (43))){
var inst_35028 = (state_35052[(21)]);
var inst_35038 = (state_35052[(2)]);
var inst_35039 = cljs.core.not_empty.call(null,inst_35028);
var state_35052__$1 = (function (){var statearr_35085 = state_35052;
(statearr_35085[(27)] = inst_35038);

return statearr_35085;
})();
if(cljs.core.truth_(inst_35039)){
var statearr_35086_35162 = state_35052__$1;
(statearr_35086_35162[(1)] = (44));

} else {
var statearr_35087_35163 = state_35052__$1;
(statearr_35087_35163[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (29))){
var inst_34971 = (state_35052[(26)]);
var inst_34969 = (state_35052[(23)]);
var inst_35005 = (state_35052[(16)]);
var inst_34965 = (state_35052[(19)]);
var inst_34968 = (state_35052[(24)]);
var inst_34973 = (state_35052[(25)]);
var inst_35001 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35004 = (function (){var all_files = inst_34965;
var res_SINGLEQUOTE_ = inst_34968;
var res = inst_34969;
var files_not_loaded = inst_34971;
var dependencies_that_loaded = inst_34973;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34969,inst_35005,inst_34965,inst_34968,inst_34973,inst_35001,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35003){
var map__35088 = p__35003;
var map__35088__$1 = ((((!((map__35088 == null)))?(((((map__35088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35088):map__35088);
var namespace = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34969,inst_35005,inst_34965,inst_34968,inst_34973,inst_35001,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35005__$1 = cljs.core.group_by.call(null,inst_35004,inst_34971);
var inst_35007 = (inst_35005__$1 == null);
var inst_35008 = cljs.core.not.call(null,inst_35007);
var state_35052__$1 = (function (){var statearr_35090 = state_35052;
(statearr_35090[(16)] = inst_35005__$1);

(statearr_35090[(28)] = inst_35001);

return statearr_35090;
})();
if(inst_35008){
var statearr_35091_35164 = state_35052__$1;
(statearr_35091_35164[(1)] = (32));

} else {
var statearr_35092_35165 = state_35052__$1;
(statearr_35092_35165[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (44))){
var inst_35028 = (state_35052[(21)]);
var inst_35041 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35028);
var inst_35042 = cljs.core.pr_str.call(null,inst_35041);
var inst_35043 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35042)].join('');
var inst_35044 = figwheel.client.utils.log.call(null,inst_35043);
var state_35052__$1 = state_35052;
var statearr_35093_35166 = state_35052__$1;
(statearr_35093_35166[(2)] = inst_35044);

(statearr_35093_35166[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (6))){
var inst_34946 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35094_35167 = state_35052__$1;
(statearr_35094_35167[(2)] = inst_34946);

(statearr_35094_35167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (28))){
var inst_34971 = (state_35052[(26)]);
var inst_34998 = (state_35052[(2)]);
var inst_34999 = cljs.core.not_empty.call(null,inst_34971);
var state_35052__$1 = (function (){var statearr_35095 = state_35052;
(statearr_35095[(29)] = inst_34998);

return statearr_35095;
})();
if(cljs.core.truth_(inst_34999)){
var statearr_35096_35168 = state_35052__$1;
(statearr_35096_35168[(1)] = (29));

} else {
var statearr_35097_35169 = state_35052__$1;
(statearr_35097_35169[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (25))){
var inst_34969 = (state_35052[(23)]);
var inst_34985 = (state_35052[(2)]);
var inst_34986 = cljs.core.not_empty.call(null,inst_34969);
var state_35052__$1 = (function (){var statearr_35098 = state_35052;
(statearr_35098[(30)] = inst_34985);

return statearr_35098;
})();
if(cljs.core.truth_(inst_34986)){
var statearr_35099_35170 = state_35052__$1;
(statearr_35099_35170[(1)] = (26));

} else {
var statearr_35100_35171 = state_35052__$1;
(statearr_35100_35171[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (34))){
var inst_35021 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
if(cljs.core.truth_(inst_35021)){
var statearr_35101_35172 = state_35052__$1;
(statearr_35101_35172[(1)] = (38));

} else {
var statearr_35102_35173 = state_35052__$1;
(statearr_35102_35173[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (17))){
var state_35052__$1 = state_35052;
var statearr_35103_35174 = state_35052__$1;
(statearr_35103_35174[(2)] = recompile_dependents);

(statearr_35103_35174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (3))){
var state_35052__$1 = state_35052;
var statearr_35104_35175 = state_35052__$1;
(statearr_35104_35175[(2)] = null);

(statearr_35104_35175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (12))){
var inst_34942 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35105_35176 = state_35052__$1;
(statearr_35105_35176[(2)] = inst_34942);

(statearr_35105_35176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (2))){
var inst_34904 = (state_35052[(13)]);
var inst_34911 = cljs.core.seq.call(null,inst_34904);
var inst_34912 = inst_34911;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_35052__$1 = (function (){var statearr_35106 = state_35052;
(statearr_35106[(7)] = inst_34914);

(statearr_35106[(8)] = inst_34913);

(statearr_35106[(9)] = inst_34915);

(statearr_35106[(10)] = inst_34912);

return statearr_35106;
})();
var statearr_35107_35177 = state_35052__$1;
(statearr_35107_35177[(2)] = null);

(statearr_35107_35177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (23))){
var inst_34971 = (state_35052[(26)]);
var inst_34969 = (state_35052[(23)]);
var inst_34965 = (state_35052[(19)]);
var inst_34968 = (state_35052[(24)]);
var inst_34973 = (state_35052[(25)]);
var inst_34976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34978 = (function (){var all_files = inst_34965;
var res_SINGLEQUOTE_ = inst_34968;
var res = inst_34969;
var files_not_loaded = inst_34971;
var dependencies_that_loaded = inst_34973;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34969,inst_34965,inst_34968,inst_34973,inst_34976,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34977){
var map__35108 = p__34977;
var map__35108__$1 = ((((!((map__35108 == null)))?(((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var request_url = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34969,inst_34965,inst_34968,inst_34973,inst_34976,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34979 = cljs.core.reverse.call(null,inst_34973);
var inst_34980 = cljs.core.map.call(null,inst_34978,inst_34979);
var inst_34981 = cljs.core.pr_str.call(null,inst_34980);
var inst_34982 = figwheel.client.utils.log.call(null,inst_34981);
var state_35052__$1 = (function (){var statearr_35110 = state_35052;
(statearr_35110[(31)] = inst_34976);

return statearr_35110;
})();
var statearr_35111_35178 = state_35052__$1;
(statearr_35111_35178[(2)] = inst_34982);

(statearr_35111_35178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (35))){
var state_35052__$1 = state_35052;
var statearr_35112_35179 = state_35052__$1;
(statearr_35112_35179[(2)] = true);

(statearr_35112_35179[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (19))){
var inst_34955 = (state_35052[(12)]);
var inst_34961 = figwheel.client.file_reloading.expand_files.call(null,inst_34955);
var state_35052__$1 = state_35052;
var statearr_35113_35180 = state_35052__$1;
(statearr_35113_35180[(2)] = inst_34961);

(statearr_35113_35180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (11))){
var state_35052__$1 = state_35052;
var statearr_35114_35181 = state_35052__$1;
(statearr_35114_35181[(2)] = null);

(statearr_35114_35181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (9))){
var inst_34944 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35115_35182 = state_35052__$1;
(statearr_35115_35182[(2)] = inst_34944);

(statearr_35115_35182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (5))){
var inst_34914 = (state_35052[(7)]);
var inst_34915 = (state_35052[(9)]);
var inst_34917 = (inst_34915 < inst_34914);
var inst_34918 = inst_34917;
var state_35052__$1 = state_35052;
if(cljs.core.truth_(inst_34918)){
var statearr_35116_35183 = state_35052__$1;
(statearr_35116_35183[(1)] = (7));

} else {
var statearr_35117_35184 = state_35052__$1;
(statearr_35117_35184[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (14))){
var inst_34925 = (state_35052[(22)]);
var inst_34934 = cljs.core.first.call(null,inst_34925);
var inst_34935 = figwheel.client.file_reloading.eval_body.call(null,inst_34934,opts);
var inst_34936 = cljs.core.next.call(null,inst_34925);
var inst_34912 = inst_34936;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_35052__$1 = (function (){var statearr_35118 = state_35052;
(statearr_35118[(7)] = inst_34914);

(statearr_35118[(8)] = inst_34913);

(statearr_35118[(32)] = inst_34935);

(statearr_35118[(9)] = inst_34915);

(statearr_35118[(10)] = inst_34912);

return statearr_35118;
})();
var statearr_35119_35185 = state_35052__$1;
(statearr_35119_35185[(2)] = null);

(statearr_35119_35185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (45))){
var state_35052__$1 = state_35052;
var statearr_35120_35186 = state_35052__$1;
(statearr_35120_35186[(2)] = null);

(statearr_35120_35186[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (26))){
var inst_34971 = (state_35052[(26)]);
var inst_34969 = (state_35052[(23)]);
var inst_34965 = (state_35052[(19)]);
var inst_34968 = (state_35052[(24)]);
var inst_34973 = (state_35052[(25)]);
var inst_34988 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34990 = (function (){var all_files = inst_34965;
var res_SINGLEQUOTE_ = inst_34968;
var res = inst_34969;
var files_not_loaded = inst_34971;
var dependencies_that_loaded = inst_34973;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34969,inst_34965,inst_34968,inst_34973,inst_34988,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34989){
var map__35121 = p__34989;
var map__35121__$1 = ((((!((map__35121 == null)))?(((((map__35121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35121):map__35121);
var namespace = cljs.core.get.call(null,map__35121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35121__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34969,inst_34965,inst_34968,inst_34973,inst_34988,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34991 = cljs.core.map.call(null,inst_34990,inst_34969);
var inst_34992 = cljs.core.pr_str.call(null,inst_34991);
var inst_34993 = figwheel.client.utils.log.call(null,inst_34992);
var inst_34994 = (function (){var all_files = inst_34965;
var res_SINGLEQUOTE_ = inst_34968;
var res = inst_34969;
var files_not_loaded = inst_34971;
var dependencies_that_loaded = inst_34973;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34969,inst_34965,inst_34968,inst_34973,inst_34988,inst_34990,inst_34991,inst_34992,inst_34993,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34969,inst_34965,inst_34968,inst_34973,inst_34988,inst_34990,inst_34991,inst_34992,inst_34993,state_val_35053,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34995 = setTimeout(inst_34994,(10));
var state_35052__$1 = (function (){var statearr_35123 = state_35052;
(statearr_35123[(33)] = inst_34988);

(statearr_35123[(34)] = inst_34993);

return statearr_35123;
})();
var statearr_35124_35187 = state_35052__$1;
(statearr_35124_35187[(2)] = inst_34995);

(statearr_35124_35187[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (16))){
var state_35052__$1 = state_35052;
var statearr_35125_35188 = state_35052__$1;
(statearr_35125_35188[(2)] = reload_dependents);

(statearr_35125_35188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (38))){
var inst_35005 = (state_35052[(16)]);
var inst_35023 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35005);
var state_35052__$1 = state_35052;
var statearr_35126_35189 = state_35052__$1;
(statearr_35126_35189[(2)] = inst_35023);

(statearr_35126_35189[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (30))){
var state_35052__$1 = state_35052;
var statearr_35127_35190 = state_35052__$1;
(statearr_35127_35190[(2)] = null);

(statearr_35127_35190[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (10))){
var inst_34925 = (state_35052[(22)]);
var inst_34927 = cljs.core.chunked_seq_QMARK_.call(null,inst_34925);
var state_35052__$1 = state_35052;
if(inst_34927){
var statearr_35128_35191 = state_35052__$1;
(statearr_35128_35191[(1)] = (13));

} else {
var statearr_35129_35192 = state_35052__$1;
(statearr_35129_35192[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (18))){
var inst_34959 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
if(cljs.core.truth_(inst_34959)){
var statearr_35130_35193 = state_35052__$1;
(statearr_35130_35193[(1)] = (19));

} else {
var statearr_35131_35194 = state_35052__$1;
(statearr_35131_35194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (42))){
var state_35052__$1 = state_35052;
var statearr_35132_35195 = state_35052__$1;
(statearr_35132_35195[(2)] = null);

(statearr_35132_35195[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (37))){
var inst_35018 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35133_35196 = state_35052__$1;
(statearr_35133_35196[(2)] = inst_35018);

(statearr_35133_35196[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (8))){
var inst_34925 = (state_35052[(22)]);
var inst_34912 = (state_35052[(10)]);
var inst_34925__$1 = cljs.core.seq.call(null,inst_34912);
var state_35052__$1 = (function (){var statearr_35134 = state_35052;
(statearr_35134[(22)] = inst_34925__$1);

return statearr_35134;
})();
if(inst_34925__$1){
var statearr_35135_35197 = state_35052__$1;
(statearr_35135_35197[(1)] = (10));

} else {
var statearr_35136_35198 = state_35052__$1;
(statearr_35136_35198[(1)] = (11));

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
}
});})(c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31273__auto__,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto____0 = (function (){
var statearr_35137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35137[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto__);

(statearr_35137[(1)] = (1));

return statearr_35137;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto____1 = (function (state_35052){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_35052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e35138){if((e35138 instanceof Object)){
var ex__31277__auto__ = e35138;
var statearr_35139_35199 = state_35052;
(statearr_35139_35199[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35200 = state_35052;
state_35052 = G__35200;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto__ = function(state_35052){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto____1.call(this,state_35052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31366__auto__ = (function (){var statearr_35140 = f__31365__auto__.call(null);
(statearr_35140[(6)] = c__31364__auto__);

return statearr_35140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__,map__34897,map__34897__$1,opts,before_jsload,on_jsload,reload_dependents,map__34898,map__34898__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31364__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35203,link){
var map__35204 = p__35203;
var map__35204__$1 = ((((!((map__35204 == null)))?(((((map__35204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35204):map__35204);
var file = cljs.core.get.call(null,map__35204__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__35204,map__35204__$1,file){
return (function (p1__35201_SHARP_,p2__35202_SHARP_){
if(cljs.core._EQ_.call(null,p1__35201_SHARP_,p2__35202_SHARP_)){
return p1__35201_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__35204,map__35204__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35207){
var map__35208 = p__35207;
var map__35208__$1 = ((((!((map__35208 == null)))?(((((map__35208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35208):map__35208);
var match_length = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35206_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35206_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35210_SHARP_,p2__35211_SHARP_){
return cljs.core.assoc.call(null,p1__35210_SHARP_,cljs.core.get.call(null,p2__35211_SHARP_,key),p2__35211_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35212 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35212);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35212);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35213,p__35214){
var map__35215 = p__35213;
var map__35215__$1 = ((((!((map__35215 == null)))?(((((map__35215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35215):map__35215);
var on_cssload = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35216 = p__35214;
var map__35216__$1 = ((((!((map__35216 == null)))?(((((map__35216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35216):map__35216);
var files_msg = map__35216__$1;
var files = cljs.core.get.call(null,map__35216__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1541057584635
