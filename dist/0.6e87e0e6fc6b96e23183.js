webpackJsonp([0],{43:function(t,e,n){t.exports=n(57)},56:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",[t._v(t._s(t.item.title))]):t._e()},u=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={asyncData:function(t){var e=t.store,n=t.route;return e.dispatch("fetchItem",n.params.id)},computed:{item:function(){return this.$store.state.items[this.$route.params.id]}}}},58:function(t,e,n){t.exports=n(59)},59:function(t,e){},63:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(56),u=n(43),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var a=n(58),c=(n.n(a),n(11)),s=Object(c.a)(i.a,r.a,r.b,!1,null,null,null);e.default=s.exports}});