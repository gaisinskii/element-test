(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],f=0,p=[];f<i.length;f++)o=i[f],a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/element-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0638":function(e,t,n){"use strict";var r=n("e199"),a=n.n(r);a.a},2856:function(e,t,n){},"2c8e":function(e,t,n){"use strict";var r=n("b731"),a=n.n(r);a.a},"2f13":function(e,t,n){"use strict";var r=n("aad6"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},"5c18":function(e,t,n){"use strict";var r=n("d12f"),a=n.n(r);a.a},"5d15":function(e,t,n){},7443:function(e,t,n){"use strict";var r=n("5d15"),a=n.n(r);a.a},"7ec4":function(e,t,n){},aad6:function(e,t,n){},b731:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],o=(n("5c0b"),n("2877")),i={},c=Object(o["a"])(i,a,u,!1,null,null,null);c.options.__file="App.vue";var s=c.exports,l=n("5c96"),f=n.n(l);n("0fae"),n("de82");r["default"].use(f.a);var p=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-layout",{attrs:{name:"auth"}},[n("the-header"),n("router-view")],1)},d=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"base-layout",class:"base-layout_"+e.name},[e._t("default")],2)},g=[],h={components:{},props:{name:{type:String,required:!0}}},b=h,m=(n("2c8e"),Object(o["a"])(b,_,g,!1,null,null,null));m.options.__file="BaseLayout.vue";var y=m.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("header",[r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("cf05"),alt:"",height:"60",width:"60"}})]),r("div",{staticClass:"lang"},[e._v("\n      En\n    ")])])])}],w={},x=w,P=(n("7443"),Object(o["a"])(x,O,j,!1,null,null,null));P.options.__file="TheHeader.vue";var S=P.exports,E={components:{BaseLayout:y,TheHeader:S}},$=E,C=(n("e379"),Object(o["a"])($,v,d,!1,null,null,null));C.options.__file="AuthLayout.vue";var T=C.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-page",{attrs:{name:"sign-in"}},[e._v("\nsign in page\n")])},M=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page",class:"page_"+e.name},[e._t("default")],2)},L=[],q={props:{name:{type:String,required:!0}}},A=q,H=(n("0638"),Object(o["a"])(A,k,L,!1,null,null,null));H.options.__file="BasePage.vue";var J=H.exports,I={components:{BasePage:J}},U=I,z=(n("5c18"),Object(o["a"])(U,B,M,!1,null,null,null));z.options.__file="PageSignIn.vue";var D=z.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("sign up")])},G=[],K={},N=K,Q=(n("2f13"),Object(o["a"])(N,F,G,!1,null,null,null));Q.options.__file="PageSignUp.vue";var R=Q.exports;r["default"].use(p["a"]);var V=new p["a"]({routes:[{path:"/",component:T,children:[{path:"sign-in",name:"sign-in",component:D},{path:"sign-up",name:"sign-up",component:R}]}]}),W=n("2f62");r["default"].use(W["a"]);var X=new W["a"].Store({state:{},mutations:{},actions:{}});r["default"].config.productionTip=!1,new r["default"]({router:V,store:X,render:function(e){return e(s)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d12f:function(e,t,n){},de82:function(e,t,n){},e199:function(e,t,n){},e379:function(e,t,n){"use strict";var r=n("7ec4"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0c77870f.js.map