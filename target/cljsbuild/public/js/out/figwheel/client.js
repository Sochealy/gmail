// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36305){if((e36305 instanceof Error)){
var e = e36305;
return "Error: Unable to stringify";
} else {
throw e36305;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36308 = arguments.length;
switch (G__36308) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36306_SHARP_){
if(typeof p1__36306_SHARP_ === 'string'){
return p1__36306_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36306_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36311 = arguments.length;
var i__4532__auto___36312 = (0);
while(true){
if((i__4532__auto___36312 < len__4531__auto___36311)){
args__4534__auto__.push((arguments[i__4532__auto___36312]));

var G__36313 = (i__4532__auto___36312 + (1));
i__4532__auto___36312 = G__36313;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36310){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36310));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36315 = arguments.length;
var i__4532__auto___36316 = (0);
while(true){
if((i__4532__auto___36316 < len__4531__auto___36315)){
args__4534__auto__.push((arguments[i__4532__auto___36316]));

var G__36317 = (i__4532__auto___36316 + (1));
i__4532__auto___36316 = G__36317;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36314){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36314));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36318){
var map__36319 = p__36318;
var map__36319__$1 = ((((!((map__36319 == null)))?(((((map__36319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36319):map__36319);
var message = cljs.core.get.call(null,map__36319__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36319__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31364__auto___36398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___36398,ch){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___36398,ch){
return (function (state_36370){
var state_val_36371 = (state_36370[(1)]);
if((state_val_36371 === (7))){
var inst_36366 = (state_36370[(2)]);
var state_36370__$1 = state_36370;
var statearr_36372_36399 = state_36370__$1;
(statearr_36372_36399[(2)] = inst_36366);

(statearr_36372_36399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (1))){
var state_36370__$1 = state_36370;
var statearr_36373_36400 = state_36370__$1;
(statearr_36373_36400[(2)] = null);

(statearr_36373_36400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (4))){
var inst_36323 = (state_36370[(7)]);
var inst_36323__$1 = (state_36370[(2)]);
var state_36370__$1 = (function (){var statearr_36374 = state_36370;
(statearr_36374[(7)] = inst_36323__$1);

return statearr_36374;
})();
if(cljs.core.truth_(inst_36323__$1)){
var statearr_36375_36401 = state_36370__$1;
(statearr_36375_36401[(1)] = (5));

} else {
var statearr_36376_36402 = state_36370__$1;
(statearr_36376_36402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (15))){
var inst_36330 = (state_36370[(8)]);
var inst_36345 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36330);
var inst_36346 = cljs.core.first.call(null,inst_36345);
var inst_36347 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36346);
var inst_36348 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36347)].join('');
var inst_36349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36348);
var state_36370__$1 = state_36370;
var statearr_36377_36403 = state_36370__$1;
(statearr_36377_36403[(2)] = inst_36349);

(statearr_36377_36403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (13))){
var inst_36354 = (state_36370[(2)]);
var state_36370__$1 = state_36370;
var statearr_36378_36404 = state_36370__$1;
(statearr_36378_36404[(2)] = inst_36354);

(statearr_36378_36404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (6))){
var state_36370__$1 = state_36370;
var statearr_36379_36405 = state_36370__$1;
(statearr_36379_36405[(2)] = null);

(statearr_36379_36405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (17))){
var inst_36352 = (state_36370[(2)]);
var state_36370__$1 = state_36370;
var statearr_36380_36406 = state_36370__$1;
(statearr_36380_36406[(2)] = inst_36352);

(statearr_36380_36406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (3))){
var inst_36368 = (state_36370[(2)]);
var state_36370__$1 = state_36370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36370__$1,inst_36368);
} else {
if((state_val_36371 === (12))){
var inst_36329 = (state_36370[(9)]);
var inst_36343 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36329,opts);
var state_36370__$1 = state_36370;
if(cljs.core.truth_(inst_36343)){
var statearr_36381_36407 = state_36370__$1;
(statearr_36381_36407[(1)] = (15));

} else {
var statearr_36382_36408 = state_36370__$1;
(statearr_36382_36408[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (2))){
var state_36370__$1 = state_36370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36370__$1,(4),ch);
} else {
if((state_val_36371 === (11))){
var inst_36330 = (state_36370[(8)]);
var inst_36335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36336 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36330);
var inst_36337 = cljs.core.async.timeout.call(null,(1000));
var inst_36338 = [inst_36336,inst_36337];
var inst_36339 = (new cljs.core.PersistentVector(null,2,(5),inst_36335,inst_36338,null));
var state_36370__$1 = state_36370;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36370__$1,(14),inst_36339);
} else {
if((state_val_36371 === (9))){
var inst_36330 = (state_36370[(8)]);
var inst_36356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36357 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36330);
var inst_36358 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36357);
var inst_36359 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36358)].join('');
var inst_36360 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36359);
var state_36370__$1 = (function (){var statearr_36383 = state_36370;
(statearr_36383[(10)] = inst_36356);

return statearr_36383;
})();
var statearr_36384_36409 = state_36370__$1;
(statearr_36384_36409[(2)] = inst_36360);

(statearr_36384_36409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (5))){
var inst_36323 = (state_36370[(7)]);
var inst_36325 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36326 = (new cljs.core.PersistentArrayMap(null,2,inst_36325,null));
var inst_36327 = (new cljs.core.PersistentHashSet(null,inst_36326,null));
var inst_36328 = figwheel.client.focus_msgs.call(null,inst_36327,inst_36323);
var inst_36329 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36328);
var inst_36330 = cljs.core.first.call(null,inst_36328);
var inst_36331 = figwheel.client.autoload_QMARK_.call(null);
var state_36370__$1 = (function (){var statearr_36385 = state_36370;
(statearr_36385[(9)] = inst_36329);

(statearr_36385[(8)] = inst_36330);

return statearr_36385;
})();
if(cljs.core.truth_(inst_36331)){
var statearr_36386_36410 = state_36370__$1;
(statearr_36386_36410[(1)] = (8));

} else {
var statearr_36387_36411 = state_36370__$1;
(statearr_36387_36411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (14))){
var inst_36341 = (state_36370[(2)]);
var state_36370__$1 = state_36370;
var statearr_36388_36412 = state_36370__$1;
(statearr_36388_36412[(2)] = inst_36341);

(statearr_36388_36412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (16))){
var state_36370__$1 = state_36370;
var statearr_36389_36413 = state_36370__$1;
(statearr_36389_36413[(2)] = null);

(statearr_36389_36413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (10))){
var inst_36362 = (state_36370[(2)]);
var state_36370__$1 = (function (){var statearr_36390 = state_36370;
(statearr_36390[(11)] = inst_36362);

return statearr_36390;
})();
var statearr_36391_36414 = state_36370__$1;
(statearr_36391_36414[(2)] = null);

(statearr_36391_36414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (8))){
var inst_36329 = (state_36370[(9)]);
var inst_36333 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36329,opts);
var state_36370__$1 = state_36370;
if(cljs.core.truth_(inst_36333)){
var statearr_36392_36415 = state_36370__$1;
(statearr_36392_36415[(1)] = (11));

} else {
var statearr_36393_36416 = state_36370__$1;
(statearr_36393_36416[(1)] = (12));

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
});})(c__31364__auto___36398,ch))
;
return ((function (switch__31273__auto__,c__31364__auto___36398,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31274__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31274__auto____0 = (function (){
var statearr_36394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36394[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31274__auto__);

(statearr_36394[(1)] = (1));

return statearr_36394;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31274__auto____1 = (function (state_36370){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_36370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e36395){if((e36395 instanceof Object)){
var ex__31277__auto__ = e36395;
var statearr_36396_36417 = state_36370;
(statearr_36396_36417[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36418 = state_36370;
state_36370 = G__36418;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31274__auto__ = function(state_36370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31274__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31274__auto____1.call(this,state_36370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31274__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31274__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___36398,ch))
})();
var state__31366__auto__ = (function (){var statearr_36397 = f__31365__auto__.call(null);
(statearr_36397[(6)] = c__31364__auto___36398);

return statearr_36397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___36398,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36419_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36419_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36423 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36423){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_36421 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36422 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36421,_STAR_print_fn_STAR_36422,sb,base_path_36423){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_36421,_STAR_print_fn_STAR_36422,sb,base_path_36423))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36422;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36421;
}}catch (e36420){if((e36420 instanceof Error)){
var e = e36420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36423], null));
} else {
var e = e36420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36423))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36424){
var map__36425 = p__36424;
var map__36425__$1 = ((((!((map__36425 == null)))?(((((map__36425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36425):map__36425);
var opts = map__36425__$1;
var build_id = cljs.core.get.call(null,map__36425__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36425,map__36425__$1,opts,build_id){
return (function (p__36427){
var vec__36428 = p__36427;
var seq__36429 = cljs.core.seq.call(null,vec__36428);
var first__36430 = cljs.core.first.call(null,seq__36429);
var seq__36429__$1 = cljs.core.next.call(null,seq__36429);
var map__36431 = first__36430;
var map__36431__$1 = ((((!((map__36431 == null)))?(((((map__36431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36431):map__36431);
var msg = map__36431__$1;
var msg_name = cljs.core.get.call(null,map__36431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36429__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36428,seq__36429,first__36430,seq__36429__$1,map__36431,map__36431__$1,msg,msg_name,_,map__36425,map__36425__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36428,seq__36429,first__36430,seq__36429__$1,map__36431,map__36431__$1,msg,msg_name,_,map__36425,map__36425__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36425,map__36425__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36433){
var vec__36434 = p__36433;
var seq__36435 = cljs.core.seq.call(null,vec__36434);
var first__36436 = cljs.core.first.call(null,seq__36435);
var seq__36435__$1 = cljs.core.next.call(null,seq__36435);
var map__36437 = first__36436;
var map__36437__$1 = ((((!((map__36437 == null)))?(((((map__36437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36437):map__36437);
var msg = map__36437__$1;
var msg_name = cljs.core.get.call(null,map__36437__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36435__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36439){
var map__36440 = p__36439;
var map__36440__$1 = ((((!((map__36440 == null)))?(((((map__36440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36440):map__36440);
var on_compile_warning = cljs.core.get.call(null,map__36440__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36440__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36440,map__36440__$1,on_compile_warning,on_compile_fail){
return (function (p__36442){
var vec__36443 = p__36442;
var seq__36444 = cljs.core.seq.call(null,vec__36443);
var first__36445 = cljs.core.first.call(null,seq__36444);
var seq__36444__$1 = cljs.core.next.call(null,seq__36444);
var map__36446 = first__36445;
var map__36446__$1 = ((((!((map__36446 == null)))?(((((map__36446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36446):map__36446);
var msg = map__36446__$1;
var msg_name = cljs.core.get.call(null,map__36446__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36444__$1;
var pred__36448 = cljs.core._EQ_;
var expr__36449 = msg_name;
if(cljs.core.truth_(pred__36448.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36449))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36448.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36449))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36440,map__36440__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__,msg_hist,msg_names,msg){
return (function (state_36538){
var state_val_36539 = (state_36538[(1)]);
if((state_val_36539 === (7))){
var inst_36458 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36458)){
var statearr_36540_36587 = state_36538__$1;
(statearr_36540_36587[(1)] = (8));

} else {
var statearr_36541_36588 = state_36538__$1;
(statearr_36541_36588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (20))){
var inst_36532 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36542_36589 = state_36538__$1;
(statearr_36542_36589[(2)] = inst_36532);

(statearr_36542_36589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (27))){
var inst_36528 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36543_36590 = state_36538__$1;
(statearr_36543_36590[(2)] = inst_36528);

(statearr_36543_36590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (1))){
var inst_36451 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36451)){
var statearr_36544_36591 = state_36538__$1;
(statearr_36544_36591[(1)] = (2));

} else {
var statearr_36545_36592 = state_36538__$1;
(statearr_36545_36592[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (24))){
var inst_36530 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36546_36593 = state_36538__$1;
(statearr_36546_36593[(2)] = inst_36530);

(statearr_36546_36593[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (4))){
var inst_36536 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36538__$1,inst_36536);
} else {
if((state_val_36539 === (15))){
var inst_36534 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36547_36594 = state_36538__$1;
(statearr_36547_36594[(2)] = inst_36534);

(statearr_36547_36594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (21))){
var inst_36487 = (state_36538[(2)]);
var inst_36488 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36489 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36488);
var state_36538__$1 = (function (){var statearr_36548 = state_36538;
(statearr_36548[(7)] = inst_36487);

return statearr_36548;
})();
var statearr_36549_36595 = state_36538__$1;
(statearr_36549_36595[(2)] = inst_36489);

(statearr_36549_36595[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (31))){
var inst_36517 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36517)){
var statearr_36550_36596 = state_36538__$1;
(statearr_36550_36596[(1)] = (34));

} else {
var statearr_36551_36597 = state_36538__$1;
(statearr_36551_36597[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (32))){
var inst_36526 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36552_36598 = state_36538__$1;
(statearr_36552_36598[(2)] = inst_36526);

(statearr_36552_36598[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (33))){
var inst_36513 = (state_36538[(2)]);
var inst_36514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36515 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36514);
var state_36538__$1 = (function (){var statearr_36553 = state_36538;
(statearr_36553[(8)] = inst_36513);

return statearr_36553;
})();
var statearr_36554_36599 = state_36538__$1;
(statearr_36554_36599[(2)] = inst_36515);

(statearr_36554_36599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (13))){
var inst_36472 = figwheel.client.heads_up.clear.call(null);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(16),inst_36472);
} else {
if((state_val_36539 === (22))){
var inst_36493 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36494 = figwheel.client.heads_up.append_warning_message.call(null,inst_36493);
var state_36538__$1 = state_36538;
var statearr_36555_36600 = state_36538__$1;
(statearr_36555_36600[(2)] = inst_36494);

(statearr_36555_36600[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (36))){
var inst_36524 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36556_36601 = state_36538__$1;
(statearr_36556_36601[(2)] = inst_36524);

(statearr_36556_36601[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (29))){
var inst_36504 = (state_36538[(2)]);
var inst_36505 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36506 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36505);
var state_36538__$1 = (function (){var statearr_36557 = state_36538;
(statearr_36557[(9)] = inst_36504);

return statearr_36557;
})();
var statearr_36558_36602 = state_36538__$1;
(statearr_36558_36602[(2)] = inst_36506);

(statearr_36558_36602[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (6))){
var inst_36453 = (state_36538[(10)]);
var state_36538__$1 = state_36538;
var statearr_36559_36603 = state_36538__$1;
(statearr_36559_36603[(2)] = inst_36453);

(statearr_36559_36603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (28))){
var inst_36500 = (state_36538[(2)]);
var inst_36501 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36502 = figwheel.client.heads_up.display_warning.call(null,inst_36501);
var state_36538__$1 = (function (){var statearr_36560 = state_36538;
(statearr_36560[(11)] = inst_36500);

return statearr_36560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(29),inst_36502);
} else {
if((state_val_36539 === (25))){
var inst_36498 = figwheel.client.heads_up.clear.call(null);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(28),inst_36498);
} else {
if((state_val_36539 === (34))){
var inst_36519 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(37),inst_36519);
} else {
if((state_val_36539 === (17))){
var inst_36478 = (state_36538[(2)]);
var inst_36479 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36480 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36479);
var state_36538__$1 = (function (){var statearr_36561 = state_36538;
(statearr_36561[(12)] = inst_36478);

return statearr_36561;
})();
var statearr_36562_36604 = state_36538__$1;
(statearr_36562_36604[(2)] = inst_36480);

(statearr_36562_36604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (3))){
var inst_36470 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36470)){
var statearr_36563_36605 = state_36538__$1;
(statearr_36563_36605[(1)] = (13));

} else {
var statearr_36564_36606 = state_36538__$1;
(statearr_36564_36606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (12))){
var inst_36466 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36565_36607 = state_36538__$1;
(statearr_36565_36607[(2)] = inst_36466);

(statearr_36565_36607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (2))){
var inst_36453 = (state_36538[(10)]);
var inst_36453__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36538__$1 = (function (){var statearr_36566 = state_36538;
(statearr_36566[(10)] = inst_36453__$1);

return statearr_36566;
})();
if(cljs.core.truth_(inst_36453__$1)){
var statearr_36567_36608 = state_36538__$1;
(statearr_36567_36608[(1)] = (5));

} else {
var statearr_36568_36609 = state_36538__$1;
(statearr_36568_36609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (23))){
var inst_36496 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36496)){
var statearr_36569_36610 = state_36538__$1;
(statearr_36569_36610[(1)] = (25));

} else {
var statearr_36570_36611 = state_36538__$1;
(statearr_36570_36611[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (35))){
var state_36538__$1 = state_36538;
var statearr_36571_36612 = state_36538__$1;
(statearr_36571_36612[(2)] = null);

(statearr_36571_36612[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (19))){
var inst_36491 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36491)){
var statearr_36572_36613 = state_36538__$1;
(statearr_36572_36613[(1)] = (22));

} else {
var statearr_36573_36614 = state_36538__$1;
(statearr_36573_36614[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (11))){
var inst_36462 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36574_36615 = state_36538__$1;
(statearr_36574_36615[(2)] = inst_36462);

(statearr_36574_36615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (9))){
var inst_36464 = figwheel.client.heads_up.clear.call(null);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(12),inst_36464);
} else {
if((state_val_36539 === (5))){
var inst_36455 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36538__$1 = state_36538;
var statearr_36575_36616 = state_36538__$1;
(statearr_36575_36616[(2)] = inst_36455);

(statearr_36575_36616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (14))){
var inst_36482 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36482)){
var statearr_36576_36617 = state_36538__$1;
(statearr_36576_36617[(1)] = (18));

} else {
var statearr_36577_36618 = state_36538__$1;
(statearr_36577_36618[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (26))){
var inst_36508 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36508)){
var statearr_36578_36619 = state_36538__$1;
(statearr_36578_36619[(1)] = (30));

} else {
var statearr_36579_36620 = state_36538__$1;
(statearr_36579_36620[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (16))){
var inst_36474 = (state_36538[(2)]);
var inst_36475 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36476 = figwheel.client.heads_up.display_exception.call(null,inst_36475);
var state_36538__$1 = (function (){var statearr_36580 = state_36538;
(statearr_36580[(13)] = inst_36474);

return statearr_36580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(17),inst_36476);
} else {
if((state_val_36539 === (30))){
var inst_36510 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36511 = figwheel.client.heads_up.display_warning.call(null,inst_36510);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(33),inst_36511);
} else {
if((state_val_36539 === (10))){
var inst_36468 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36581_36621 = state_36538__$1;
(statearr_36581_36621[(2)] = inst_36468);

(statearr_36581_36621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (18))){
var inst_36484 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36485 = figwheel.client.heads_up.display_exception.call(null,inst_36484);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(21),inst_36485);
} else {
if((state_val_36539 === (37))){
var inst_36521 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36582_36622 = state_36538__$1;
(statearr_36582_36622[(2)] = inst_36521);

(statearr_36582_36622[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (8))){
var inst_36460 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(11),inst_36460);
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
});})(c__31364__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31273__auto__,c__31364__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto____0 = (function (){
var statearr_36583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36583[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto__);

(statearr_36583[(1)] = (1));

return statearr_36583;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto____1 = (function (state_36538){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_36538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e36584){if((e36584 instanceof Object)){
var ex__31277__auto__ = e36584;
var statearr_36585_36623 = state_36538;
(statearr_36585_36623[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36624 = state_36538;
state_36538 = G__36624;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto__ = function(state_36538){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto____1.call(this,state_36538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__,msg_hist,msg_names,msg))
})();
var state__31366__auto__ = (function (){var statearr_36586 = f__31365__auto__.call(null);
(statearr_36586[(6)] = c__31364__auto__);

return statearr_36586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__,msg_hist,msg_names,msg))
);

return c__31364__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31364__auto___36653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto___36653,ch){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto___36653,ch){
return (function (state_36639){
var state_val_36640 = (state_36639[(1)]);
if((state_val_36640 === (1))){
var state_36639__$1 = state_36639;
var statearr_36641_36654 = state_36639__$1;
(statearr_36641_36654[(2)] = null);

(statearr_36641_36654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (2))){
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36639__$1,(4),ch);
} else {
if((state_val_36640 === (3))){
var inst_36637 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36639__$1,inst_36637);
} else {
if((state_val_36640 === (4))){
var inst_36627 = (state_36639[(7)]);
var inst_36627__$1 = (state_36639[(2)]);
var state_36639__$1 = (function (){var statearr_36642 = state_36639;
(statearr_36642[(7)] = inst_36627__$1);

return statearr_36642;
})();
if(cljs.core.truth_(inst_36627__$1)){
var statearr_36643_36655 = state_36639__$1;
(statearr_36643_36655[(1)] = (5));

} else {
var statearr_36644_36656 = state_36639__$1;
(statearr_36644_36656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (5))){
var inst_36627 = (state_36639[(7)]);
var inst_36629 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36627);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36639__$1,(8),inst_36629);
} else {
if((state_val_36640 === (6))){
var state_36639__$1 = state_36639;
var statearr_36645_36657 = state_36639__$1;
(statearr_36645_36657[(2)] = null);

(statearr_36645_36657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (7))){
var inst_36635 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36646_36658 = state_36639__$1;
(statearr_36646_36658[(2)] = inst_36635);

(statearr_36646_36658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (8))){
var inst_36631 = (state_36639[(2)]);
var state_36639__$1 = (function (){var statearr_36647 = state_36639;
(statearr_36647[(8)] = inst_36631);

return statearr_36647;
})();
var statearr_36648_36659 = state_36639__$1;
(statearr_36648_36659[(2)] = null);

(statearr_36648_36659[(1)] = (2));


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
});})(c__31364__auto___36653,ch))
;
return ((function (switch__31273__auto__,c__31364__auto___36653,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31274__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31274__auto____0 = (function (){
var statearr_36649 = [null,null,null,null,null,null,null,null,null];
(statearr_36649[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31274__auto__);

(statearr_36649[(1)] = (1));

return statearr_36649;
});
var figwheel$client$heads_up_plugin_$_state_machine__31274__auto____1 = (function (state_36639){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_36639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e36650){if((e36650 instanceof Object)){
var ex__31277__auto__ = e36650;
var statearr_36651_36660 = state_36639;
(statearr_36651_36660[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36661 = state_36639;
state_36639 = G__36661;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31274__auto__ = function(state_36639){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31274__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31274__auto____1.call(this,state_36639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31274__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31274__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto___36653,ch))
})();
var state__31366__auto__ = (function (){var statearr_36652 = f__31365__auto__.call(null);
(statearr_36652[(6)] = c__31364__auto___36653);

return statearr_36652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto___36653,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__){
return (function (state_36667){
var state_val_36668 = (state_36667[(1)]);
if((state_val_36668 === (1))){
var inst_36662 = cljs.core.async.timeout.call(null,(3000));
var state_36667__$1 = state_36667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36667__$1,(2),inst_36662);
} else {
if((state_val_36668 === (2))){
var inst_36664 = (state_36667[(2)]);
var inst_36665 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36667__$1 = (function (){var statearr_36669 = state_36667;
(statearr_36669[(7)] = inst_36664);

return statearr_36669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36667__$1,inst_36665);
} else {
return null;
}
}
});})(c__31364__auto__))
;
return ((function (switch__31273__auto__,c__31364__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31274__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31274__auto____0 = (function (){
var statearr_36670 = [null,null,null,null,null,null,null,null];
(statearr_36670[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31274__auto__);

(statearr_36670[(1)] = (1));

return statearr_36670;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31274__auto____1 = (function (state_36667){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_36667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e36671){if((e36671 instanceof Object)){
var ex__31277__auto__ = e36671;
var statearr_36672_36674 = state_36667;
(statearr_36672_36674[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36675 = state_36667;
state_36667 = G__36675;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31274__auto__ = function(state_36667){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31274__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31274__auto____1.call(this,state_36667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31274__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31274__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__))
})();
var state__31366__auto__ = (function (){var statearr_36673 = f__31365__auto__.call(null);
(statearr_36673[(6)] = c__31364__auto__);

return statearr_36673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__))
);

return c__31364__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31364__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__31365__auto__ = (function (){var switch__31273__auto__ = ((function (c__31364__auto__,figwheel_version,temp__5457__auto__){
return (function (state_36682){
var state_val_36683 = (state_36682[(1)]);
if((state_val_36683 === (1))){
var inst_36676 = cljs.core.async.timeout.call(null,(2000));
var state_36682__$1 = state_36682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36682__$1,(2),inst_36676);
} else {
if((state_val_36683 === (2))){
var inst_36678 = (state_36682[(2)]);
var inst_36679 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36680 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36679);
var state_36682__$1 = (function (){var statearr_36684 = state_36682;
(statearr_36684[(7)] = inst_36678);

return statearr_36684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36682__$1,inst_36680);
} else {
return null;
}
}
});})(c__31364__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__31273__auto__,c__31364__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto____0 = (function (){
var statearr_36685 = [null,null,null,null,null,null,null,null];
(statearr_36685[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto__);

(statearr_36685[(1)] = (1));

return statearr_36685;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto____1 = (function (state_36682){
while(true){
var ret_value__31275__auto__ = (function (){try{while(true){
var result__31276__auto__ = switch__31273__auto__.call(null,state_36682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31276__auto__;
}
break;
}
}catch (e36686){if((e36686 instanceof Object)){
var ex__31277__auto__ = e36686;
var statearr_36687_36689 = state_36682;
(statearr_36687_36689[(5)] = ex__31277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36690 = state_36682;
state_36682 = G__36690;
continue;
} else {
return ret_value__31275__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto__ = function(state_36682){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto____1.call(this,state_36682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31274__auto__;
})()
;})(switch__31273__auto__,c__31364__auto__,figwheel_version,temp__5457__auto__))
})();
var state__31366__auto__ = (function (){var statearr_36688 = f__31365__auto__.call(null);
(statearr_36688[(6)] = c__31364__auto__);

return statearr_36688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31366__auto__);
});})(c__31364__auto__,figwheel_version,temp__5457__auto__))
);

return c__31364__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36691){
var map__36692 = p__36691;
var map__36692__$1 = ((((!((map__36692 == null)))?(((((map__36692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36692):map__36692);
var file = cljs.core.get.call(null,map__36692__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36692__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36692__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36694 = "";
var G__36694__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36694),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36694);
var G__36694__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36694__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36694__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36694__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36694__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36695){
var map__36696 = p__36695;
var map__36696__$1 = ((((!((map__36696 == null)))?(((((map__36696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36696):map__36696);
var ed = map__36696__$1;
var formatted_exception = cljs.core.get.call(null,map__36696__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36696__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36696__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36698_36702 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36699_36703 = null;
var count__36700_36704 = (0);
var i__36701_36705 = (0);
while(true){
if((i__36701_36705 < count__36700_36704)){
var msg_36706 = cljs.core._nth.call(null,chunk__36699_36703,i__36701_36705);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36706);


var G__36707 = seq__36698_36702;
var G__36708 = chunk__36699_36703;
var G__36709 = count__36700_36704;
var G__36710 = (i__36701_36705 + (1));
seq__36698_36702 = G__36707;
chunk__36699_36703 = G__36708;
count__36700_36704 = G__36709;
i__36701_36705 = G__36710;
continue;
} else {
var temp__5457__auto___36711 = cljs.core.seq.call(null,seq__36698_36702);
if(temp__5457__auto___36711){
var seq__36698_36712__$1 = temp__5457__auto___36711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36698_36712__$1)){
var c__4351__auto___36713 = cljs.core.chunk_first.call(null,seq__36698_36712__$1);
var G__36714 = cljs.core.chunk_rest.call(null,seq__36698_36712__$1);
var G__36715 = c__4351__auto___36713;
var G__36716 = cljs.core.count.call(null,c__4351__auto___36713);
var G__36717 = (0);
seq__36698_36702 = G__36714;
chunk__36699_36703 = G__36715;
count__36700_36704 = G__36716;
i__36701_36705 = G__36717;
continue;
} else {
var msg_36718 = cljs.core.first.call(null,seq__36698_36712__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36718);


var G__36719 = cljs.core.next.call(null,seq__36698_36712__$1);
var G__36720 = null;
var G__36721 = (0);
var G__36722 = (0);
seq__36698_36702 = G__36719;
chunk__36699_36703 = G__36720;
count__36700_36704 = G__36721;
i__36701_36705 = G__36722;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36723){
var map__36724 = p__36723;
var map__36724__$1 = ((((!((map__36724 == null)))?(((((map__36724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36724):map__36724);
var w = map__36724__$1;
var message = cljs.core.get.call(null,map__36724__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36726 = cljs.core.seq.call(null,plugins);
var chunk__36727 = null;
var count__36728 = (0);
var i__36729 = (0);
while(true){
if((i__36729 < count__36728)){
var vec__36730 = cljs.core._nth.call(null,chunk__36727,i__36729);
var k = cljs.core.nth.call(null,vec__36730,(0),null);
var plugin = cljs.core.nth.call(null,vec__36730,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36736 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36726,chunk__36727,count__36728,i__36729,pl_36736,vec__36730,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36736.call(null,msg_hist);
});})(seq__36726,chunk__36727,count__36728,i__36729,pl_36736,vec__36730,k,plugin))
);
} else {
}


var G__36737 = seq__36726;
var G__36738 = chunk__36727;
var G__36739 = count__36728;
var G__36740 = (i__36729 + (1));
seq__36726 = G__36737;
chunk__36727 = G__36738;
count__36728 = G__36739;
i__36729 = G__36740;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36726);
if(temp__5457__auto__){
var seq__36726__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36726__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36726__$1);
var G__36741 = cljs.core.chunk_rest.call(null,seq__36726__$1);
var G__36742 = c__4351__auto__;
var G__36743 = cljs.core.count.call(null,c__4351__auto__);
var G__36744 = (0);
seq__36726 = G__36741;
chunk__36727 = G__36742;
count__36728 = G__36743;
i__36729 = G__36744;
continue;
} else {
var vec__36733 = cljs.core.first.call(null,seq__36726__$1);
var k = cljs.core.nth.call(null,vec__36733,(0),null);
var plugin = cljs.core.nth.call(null,vec__36733,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36745 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36726,chunk__36727,count__36728,i__36729,pl_36745,vec__36733,k,plugin,seq__36726__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36745.call(null,msg_hist);
});})(seq__36726,chunk__36727,count__36728,i__36729,pl_36745,vec__36733,k,plugin,seq__36726__$1,temp__5457__auto__))
);
} else {
}


var G__36746 = cljs.core.next.call(null,seq__36726__$1);
var G__36747 = null;
var G__36748 = (0);
var G__36749 = (0);
seq__36726 = G__36746;
chunk__36727 = G__36747;
count__36728 = G__36748;
i__36729 = G__36749;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36751 = arguments.length;
switch (G__36751) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36752_36757 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36753_36758 = null;
var count__36754_36759 = (0);
var i__36755_36760 = (0);
while(true){
if((i__36755_36760 < count__36754_36759)){
var msg_36761 = cljs.core._nth.call(null,chunk__36753_36758,i__36755_36760);
figwheel.client.socket.handle_incoming_message.call(null,msg_36761);


var G__36762 = seq__36752_36757;
var G__36763 = chunk__36753_36758;
var G__36764 = count__36754_36759;
var G__36765 = (i__36755_36760 + (1));
seq__36752_36757 = G__36762;
chunk__36753_36758 = G__36763;
count__36754_36759 = G__36764;
i__36755_36760 = G__36765;
continue;
} else {
var temp__5457__auto___36766 = cljs.core.seq.call(null,seq__36752_36757);
if(temp__5457__auto___36766){
var seq__36752_36767__$1 = temp__5457__auto___36766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36752_36767__$1)){
var c__4351__auto___36768 = cljs.core.chunk_first.call(null,seq__36752_36767__$1);
var G__36769 = cljs.core.chunk_rest.call(null,seq__36752_36767__$1);
var G__36770 = c__4351__auto___36768;
var G__36771 = cljs.core.count.call(null,c__4351__auto___36768);
var G__36772 = (0);
seq__36752_36757 = G__36769;
chunk__36753_36758 = G__36770;
count__36754_36759 = G__36771;
i__36755_36760 = G__36772;
continue;
} else {
var msg_36773 = cljs.core.first.call(null,seq__36752_36767__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36773);


var G__36774 = cljs.core.next.call(null,seq__36752_36767__$1);
var G__36775 = null;
var G__36776 = (0);
var G__36777 = (0);
seq__36752_36757 = G__36774;
chunk__36753_36758 = G__36775;
count__36754_36759 = G__36776;
i__36755_36760 = G__36777;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36782 = arguments.length;
var i__4532__auto___36783 = (0);
while(true){
if((i__4532__auto___36783 < len__4531__auto___36782)){
args__4534__auto__.push((arguments[i__4532__auto___36783]));

var G__36784 = (i__4532__auto___36783 + (1));
i__4532__auto___36783 = G__36784;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36779){
var map__36780 = p__36779;
var map__36780__$1 = ((((!((map__36780 == null)))?(((((map__36780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36780):map__36780);
var opts = map__36780__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36778){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36778));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36785){if((e36785 instanceof Error)){
var e = e36785;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36785;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36786){
var map__36787 = p__36786;
var map__36787__$1 = ((((!((map__36787 == null)))?(((((map__36787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36787):map__36787);
var msg_name = cljs.core.get.call(null,map__36787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1541057587808
