goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if((function (){var and__3822__auto____7623 = this$;
if(and__3822__auto____7623)
{return this$.session$client$mvc$IMVC$view$arity$1;
} else
{return and__3822__auto____7623;
}
})())
{return this$.session$client$mvc$IMVC$view$arity$1(this$);
} else
{var x__2363__auto____7624 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7625 = (session.client.mvc.view[goog.typeOf(x__2363__auto____7624)]);
if(or__3824__auto____7625)
{return or__3824__auto____7625;
} else
{var or__3824__auto____7626 = (session.client.mvc.view["_"]);
if(or__3824__auto____7626)
{return or__3824__auto____7626;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$,viewobject){
if((function (){var and__3822__auto____7631 = this$;
if(and__3822__auto____7631)
{return this$.session$client$mvc$IMVC$control$arity$2;
} else
{return and__3822__auto____7631;
}
})())
{return this$.session$client$mvc$IMVC$control$arity$2(this$,viewobject);
} else
{var x__2363__auto____7632 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7633 = (session.client.mvc.control[goog.typeOf(x__2363__auto____7632)]);
if(or__3824__auto____7633)
{return or__3824__auto____7633;
} else
{var or__3824__auto____7634 = (session.client.mvc.control["_"]);
if(or__3824__auto____7634)
{return or__3824__auto____7634;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$,viewobject);
}
});
session.client.mvc.control2 = (function (){var method_table__2537__auto____7635 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2538__auto____7636 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2539__auto____7637 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2540__auto____7638 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2541__auto____7639 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("control2",(function (p1__7618_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__7618_SHARP_)));
}),"\uFDD0'default",hierarchy__2541__auto____7639,method_table__2537__auto____7635,prefer_table__2538__auto____7636,method_cache__2539__auto____7637,cached_hierarchy__2540__auto____7638));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__2537__auto____7641 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2538__auto____7642 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2539__auto____7643 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2540__auto____7644 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2541__auto____7645 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("view2",(function (p1__7640_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__7640_SHARP_)));
}),"\uFDD0'default",hierarchy__2541__auto____7645,method_table__2537__auto____7641,prefer_table__2538__auto____7642,method_cache__2539__auto____7643,cached_hierarchy__2540__auto____7644));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core._EQ_.call(null,"\uFDD0'this",arg))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3824__auto____7646 = cljs.core.vector_QMARK_.call(null,arg);
if(or__3824__auto____7646)
{return or__3824__auto____7646;
} else
{return cljs.core.keyword_QMARK_.call(null,arg);
}
})())
{return cljs_jquery.core.dom_create.call(null,arg);
} else
{if(true)
{return cljs_jquery.core.jquery.call(null,arg);
} else
{return null;
}
}
}
}));
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'default",(function (arg){
if(cljs.core.instance_QMARK_.call(null,Element,arg))
{return arg;
} else
{if(cljs.core.instance_QMARK_.call(null,jQuery,arg))
{return arg;
} else
{if(true)
{return cljs.core.pr_str.call(null,arg);
} else
{return null;
}
}
}
}));
session.client.mvc.render = (function render(m){
var v__7648 = session.client.mvc.view.call(null,m);
session.client.mvc.control.call(null,m,v__7648);
return v__7648;
});
(session.client.mvc.IMVC["_"] = true);
(session.client.mvc.view["_"] = (function (this$){
return cljs.core.pr_str.call(null,this$);
}));
(session.client.mvc.control["_"] = (function (this$,viewobject){
return viewobject;
}));