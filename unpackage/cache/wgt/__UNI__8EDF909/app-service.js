(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,s,i){"use strict";function e(t){var s=Object.prototype.toString.call(t);return s.substring(8,s.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function n(t,s){switch(e(s)){case"Function":return"function() { [native code] }";default:return s}}function c(t){for(var s=arguments.length,i=new Array(s>1?s-1:0),e=1;e<s;e++)i[e-1]=arguments[e];console[t].apply(console,i)}function r(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];var c=s.shift();if(a())return s.push(s.pop().replace("at ","uni-app:///")),console[c].apply(console,s);var r=s.map((function(t){var s=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===s||"[object array]"===s)try{t="---BEGIN:JSON---"+JSON.stringify(t,n)+"---END:JSON---"}catch(a){t=s}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=e(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),o="";if(r.length>1){var _=r.pop();o=r.join("---COMMA---"),0===_.indexOf(" at ")?o+=_:o+="---COMMA---"+_}else o=r[0];console[c](o)}i.r(s),i.d(s,"log",(function(){return c})),i.d(s,"default",(function(){return r}))},"1f62":function(t,s,i){"use strict";var e;i.d(s,"b",(function(){return a})),i.d(s,"c",(function(){return n})),i.d(s,"a",(function(){return e}));var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:t._$s(0,"sc","clock"),class:t._$s(0,"c",[t.bglight?"light":"dark"]),attrs:{_i:0},on:{click:t.screenClick}},[i("view",{staticClass:t._$s(1,"sc","container"),attrs:{_i:1}},[i("view",{staticClass:t._$s(2,"sc","hour-part"),attrs:{_i:2}},[i("view",{ref:"hourplay2",staticClass:t._$s(3,"sc","flip hourplay2"),attrs:{_i:3}},[i("view",{class:t._$s(4,"c",[t.h2.active?"before":"active"]),attrs:{_i:4}},[i("view",[i("view",{staticClass:t._$s(6,"sc","up"),attrs:{_i:6}},[i("view",{staticClass:t._$s(7,"sc","shadow"),attrs:{_i:7}}),i("view",{staticClass:t._$s(8,"sc","inn"),attrs:{_i:8}},[t._v(t._$s(8,"t0-0",t._s(t.h2.active?t.h2.n&&t.h2.n.before:t.h2.n&&t.h2.n.active)))])]),i("view",{staticClass:t._$s(9,"sc","down"),attrs:{_i:9}},[i("view",{staticClass:t._$s(10,"sc","shadow"),attrs:{_i:10}}),i("view",{staticClass:t._$s(11,"sc","inn"),attrs:{_i:11}},[t._v(t._$s(11,"t0-0",t._s(t.h2.active?t.h2.n&&t.h2.n.before:t.h2.n&&t.h2.n.active)))])])])]),i("view",{class:t._$s(12,"c",[t.h2.active?"active":"before"]),attrs:{_i:12}},[i("view",[i("view",{staticClass:t._$s(14,"sc","up"),attrs:{_i:14}},[i("view",{staticClass:t._$s(15,"sc","shadow"),attrs:{_i:15}}),i("view",{staticClass:t._$s(16,"sc","inn"),attrs:{_i:16}},[t._v(t._$s(16,"t0-0",t._s(t.h2.active?t.h2.n&&t.h2.n.active:t.h2.n&&t.h2.n.before)))])]),i("view",{staticClass:t._$s(17,"sc","down"),attrs:{_i:17}},[i("view",{staticClass:t._$s(18,"sc","shadow"),attrs:{_i:18}}),i("view",{staticClass:t._$s(19,"sc","inn"),attrs:{_i:19}},[t._v(t._$s(19,"t0-0",t._s(t.h2.active?t.h2.n&&t.h2.n.active:t.h2.n&&t.h2.n.before)))])])])])]),i("view",{staticClass:t._$s(20,"sc","flip hourplay"),attrs:{_i:20}},[i("view",{class:t._$s(21,"c",[t.h.active?"before":"active"]),attrs:{_i:21}},[i("view",[i("view",{staticClass:t._$s(23,"sc","up"),attrs:{_i:23}},[i("view",{staticClass:t._$s(24,"sc","shadow"),attrs:{_i:24}}),i("view",{staticClass:t._$s(25,"sc","inn"),attrs:{_i:25}},[t._v(t._$s(25,"t0-0",t._s(t.h.active?t.h.n&&t.h.n.before:t.h.n&&t.h.n.active)))])]),i("view",{staticClass:t._$s(26,"sc","down"),attrs:{_i:26}},[i("view",{staticClass:t._$s(27,"sc","shadow"),attrs:{_i:27}}),i("view",{staticClass:t._$s(28,"sc","inn"),attrs:{_i:28}},[t._v(t._$s(28,"t0-0",t._s(t.h.active?t.h.n&&t.h.n.before:t.h.n&&t.h.n.active)))])])])]),i("view",{class:t._$s(29,"c",[t.h.active?"active":"before"]),attrs:{_i:29}},[i("view",[i("view",{staticClass:t._$s(31,"sc","up"),attrs:{_i:31}},[i("view",{staticClass:t._$s(32,"sc","shadow"),attrs:{_i:32}}),i("view",{staticClass:t._$s(33,"sc","inn"),attrs:{_i:33}},[t._v(t._$s(33,"t0-0",t._s(t.h.active?t.h.n&&t.h.n.active:t.h.n&&t.h.n.before)))])]),i("view",{staticClass:t._$s(34,"sc","down"),attrs:{_i:34}},[i("view",{staticClass:t._$s(35,"sc","shadow"),attrs:{_i:35}}),i("view",{staticClass:t._$s(36,"sc","inn"),attrs:{_i:36}},[t._v(t._$s(36,"t0-0",t._s(t.h.active?t.h.n&&t.h.n.active:t.h.n&&t.h.n.before)))])])])])])]),i("view",{staticClass:t._$s(37,"sc","blinker"),attrs:{_i:37}}),i("view",{staticClass:t._$s(38,"sc","minute-part"),attrs:{_i:38}},[i("view",{staticClass:t._$s(39,"sc","flip minuteplay2"),attrs:{_i:39}},[i("view",{class:t._$s(40,"c",[t.m2.active?"before":"active"]),attrs:{_i:40}},[i("view",[i("view",{staticClass:t._$s(42,"sc","up"),attrs:{_i:42}},[i("view",{staticClass:t._$s(43,"sc","shadow"),attrs:{_i:43}}),i("view",{staticClass:t._$s(44,"sc","inn"),attrs:{_i:44}},[t._v(t._$s(44,"t0-0",t._s(t.m2.active?t.m2.n&&t.m2.n.before:t.m2.n&&t.m2.n.active)))])]),i("view",{staticClass:t._$s(45,"sc","down"),attrs:{_i:45}},[i("view",{staticClass:t._$s(46,"sc","shadow"),attrs:{_i:46}}),i("view",{staticClass:t._$s(47,"sc","inn"),attrs:{_i:47}},[t._v(t._$s(47,"t0-0",t._s(t.m2.active?t.m2.n&&t.m2.n.before:t.m2.n&&t.m2.n.active)))])])])]),i("view",{class:t._$s(48,"c",[t.m2.active?"active":"before"]),attrs:{_i:48}},[i("view",[i("view",{staticClass:t._$s(50,"sc","up"),attrs:{_i:50}},[i("view",{staticClass:t._$s(51,"sc","shadow"),attrs:{_i:51}}),i("view",{staticClass:t._$s(52,"sc","inn"),attrs:{_i:52}},[t._v(t._$s(52,"t0-0",t._s(t.m2.active?t.m2.n&&t.m2.n.active:t.m2.n&&t.m2.n.before)))])]),i("view",{staticClass:t._$s(53,"sc","down"),attrs:{_i:53}},[i("view",{staticClass:t._$s(54,"sc","shadow"),attrs:{_i:54}}),i("view",{staticClass:t._$s(55,"sc","inn"),attrs:{_i:55}},[t._v(t._$s(55,"t0-0",t._s(t.m2.active?t.m2.n&&t.m2.n.active:t.m2.n&&t.m2.n.before)))])])])])]),i("view",{staticClass:t._$s(56,"sc","flip minuteplay"),attrs:{_i:56}},[i("view",{class:t._$s(57,"c",[t.m.active?"before":"active"]),attrs:{_i:57}},[i("view",[i("view",{staticClass:t._$s(59,"sc","up"),attrs:{_i:59}},[i("view",{staticClass:t._$s(60,"sc","shadow"),attrs:{_i:60}}),i("view",{staticClass:t._$s(61,"sc","inn"),attrs:{_i:61}},[t._v(t._$s(61,"t0-0",t._s(t.m.active?t.m.n&&t.m.n.before:t.m.n&&t.m.n.active)))])]),i("view",{staticClass:t._$s(62,"sc","down"),attrs:{_i:62}},[i("view",{staticClass:t._$s(63,"sc","shadow"),attrs:{_i:63}}),i("view",{staticClass:t._$s(64,"sc","inn"),attrs:{_i:64}},[t._v(t._$s(64,"t0-0",t._s(t.m.active?t.m.n&&t.m.n.before:t.m.n&&t.m.n.active)))])])])]),i("view",{class:t._$s(65,"c",[t.m.active?"active":"before"]),attrs:{_i:65}},[i("view",[i("view",{staticClass:t._$s(67,"sc","up"),attrs:{_i:67}},[i("view",{staticClass:t._$s(68,"sc","shadow"),attrs:{_i:68}}),i("view",{staticClass:t._$s(69,"sc","inn"),attrs:{_i:69}},[t._v(t._$s(69,"t0-0",t._s(t.m.active?t.m.n&&t.m.n.active:t.m.n&&t.m.n.before)))])]),i("view",{staticClass:t._$s(70,"sc","down"),attrs:{_i:70}},[i("view",{staticClass:t._$s(71,"sc","shadow"),attrs:{_i:71}}),i("view",{staticClass:t._$s(72,"sc","inn"),attrs:{_i:72}},[t._v(t._$s(72,"t0-0",t._s(t.m.active?t.m.n&&t.m.n.active:t.m.n&&t.m.n.before)))])])])])])]),i("view",{staticClass:t._$s(73,"sc","blinker"),attrs:{_i:73}}),i("view",{staticClass:t._$s(74,"sc","second-part"),attrs:{_i:74}},[i("view",{staticClass:t._$s(75,"sc","flip secondplay2"),attrs:{_i:75}},[i("view",{class:t._$s(76,"c",[t.s2.active?"before":"active"]),attrs:{_i:76}},[i("view",[i("view",{staticClass:t._$s(78,"sc","up"),attrs:{_i:78}},[i("view",{staticClass:t._$s(79,"sc","shadow"),attrs:{_i:79}}),i("view",{staticClass:t._$s(80,"sc","inn"),attrs:{_i:80}},[t._v(t._$s(80,"t0-0",t._s(t.s2.active?t.s2.n&&t.s2.n.before:t.s2.n&&t.s2.n.active)))])]),i("view",{staticClass:t._$s(81,"sc","down"),attrs:{_i:81}},[i("view",{staticClass:t._$s(82,"sc","shadow"),attrs:{_i:82}}),i("view",{staticClass:t._$s(83,"sc","inn"),attrs:{_i:83}},[t._v(t._$s(83,"t0-0",t._s(t.s2.active?t.s2.n&&t.s2.n.before:t.s2.n&&t.s2.n.active)))])])])]),i("view",{class:t._$s(84,"c",[t.s2.active?"active":"before"]),attrs:{_i:84}},[i("view",[i("view",{staticClass:t._$s(86,"sc","up"),attrs:{_i:86}},[i("view",{staticClass:t._$s(87,"sc","shadow"),attrs:{_i:87}}),i("view",{staticClass:t._$s(88,"sc","inn"),attrs:{_i:88}},[t._v(t._$s(88,"t0-0",t._s(t.s2.active?t.s2.n&&t.s2.n.active:t.s2.n&&t.s2.n.before)))])]),i("view",{staticClass:t._$s(89,"sc","down"),attrs:{_i:89}},[i("view",{staticClass:t._$s(90,"sc","shadow"),attrs:{_i:90}}),i("view",{staticClass:t._$s(91,"sc","inn"),attrs:{_i:91}},[t._v(t._$s(91,"t0-0",t._s(t.s2.active?t.s2.n&&t.s2.n.active:t.s2.n&&t.s2.n.before)))])])])])]),i("view",{staticClass:t._$s(92,"sc","flip secondplay"),attrs:{_i:92}},[i("view",{class:t._$s(93,"c",[t.s.active?"before":"active"]),attrs:{_i:93}},[i("view",[i("view",{staticClass:t._$s(95,"sc","up"),attrs:{_i:95}},[i("view",{staticClass:t._$s(96,"sc","shadow"),attrs:{_i:96}}),i("view",{staticClass:t._$s(97,"sc","inn"),attrs:{_i:97}},[t._v(t._$s(97,"t0-0",t._s(t.s.active?t.s.n&&t.s.n.before:t.s.n&&t.s.n.active)))])]),i("view",{staticClass:t._$s(98,"sc","down"),attrs:{_i:98}},[i("view",{staticClass:t._$s(99,"sc","shadow"),attrs:{_i:99}}),i("view",{staticClass:t._$s(100,"sc","inn"),attrs:{_i:100}},[t._v(t._$s(100,"t0-0",t._s(t.s.active?t.s.n&&t.s.n.before:t.s.n&&t.s.n.active)))])])])]),i("view",{class:t._$s(101,"c",[t.s.active?"active":"before"]),attrs:{_i:101}},[i("view",[i("view",{staticClass:t._$s(103,"sc","up"),attrs:{_i:103}},[i("view",{staticClass:t._$s(104,"sc","shadow"),attrs:{_i:104}}),i("view",{staticClass:t._$s(105,"sc","inn"),attrs:{_i:105}},[t._v(t._$s(105,"t0-0",t._s(t.s.active?t.s.n&&t.s.n.active:t.s.n&&t.s.n.before)))])]),i("view",{staticClass:t._$s(106,"sc","down"),attrs:{_i:106}},[i("view",{staticClass:t._$s(107,"sc","shadow"),attrs:{_i:107}}),i("view",{staticClass:t._$s(108,"sc","inn"),attrs:{_i:108}},[t._v(t._$s(108,"t0-0",t._s(t.s.active?t.s.n&&t.s.n.active:t.s.n&&t.s.n.before)))])])])])])])]),i("view",{staticClass:t._$s(109,"sc","bgset"),attrs:{animation:t._$s(109,"a-animation",t.animationData),_i:109},on:{click:t.changeBg}},[i("view",{class:t._$s(110,"c",["icon",t.bglight?"sun":"moon"]),attrs:{_i:110}})])])},n=[]},"43ff":function(t,s,i){"use strict";i.r(s);var e=i("1f62"),a=i("ab35");for(var n in a)"default"!==n&&function(t){i.d(s,t,(function(){return a[t]}))}(n);var c,r=i("f0c5"),o=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);s["default"]=o.exports},"46ec":function(t,s,i){"use strict";function e(t,s){var i;return function(){var e=arguments,a=this;clearTimeout(i),i=setTimeout((function(){t.apply(a,e)}),s)}}Object.defineProperty(s,"__esModule",{value:!0}),s.debounce=e},"4ca5":function(t,s,i){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var s=this.constructor;return this.then((function(i){return s.resolve(t()).then((function(){return i}))}),(function(i){return s.resolve(t()).then((function(){throw i}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(i("43ff").default)}))},"5c7b":function(t,s,i){"use strict";i.r(s);var e=i("9034");for(var a in e)"default"!==a&&function(t){i.d(s,t,(function(){return e[t]}))}(a);var n,c,r,o,_=i("f0c5"),v=Object(_["a"])(e["default"],n,c,!1,null,null,null,!1,r,o);s["default"]=v.exports},"8bbf":function(t,s){t.exports=Vue},9034:function(t,s,i){"use strict";i.r(s);var e=i("aa1c"),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,(function(){return e[t]}))}(n);s["default"]=a.a},aa1c:function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={onLaunch:function(){t("warn","\u5f53\u524d\u7ec4\u4ef6\u4ec5\u652f\u6301 uni_modules \u76ee\u5f55\u7ed3\u6784 \uff0c\u8bf7\u5347\u7ea7 HBuilderX \u5230 3.1.0 \u7248\u672c\u4ee5\u4e0a\uff01"," at App.vue:4"),t("log","App Launch"," at App.vue:5")},onShow:function(){t("log","App Show"," at App.vue:8")},onHide:function(){t("log","App Hide"," at App.vue:11")}};s.default=i}).call(this,i("0de9")["default"])},ab35:function(t,s,i){"use strict";i.r(s);var e=i("bced"),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,(function(){return e[t]}))}(n);s["default"]=a.a},bced:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=i("46ec"),a={data:function(){return{h2:{active:!0,n:{active:"0",before:"0"}},h:{active:!0,n:{active:"0",before:"0"}},m2:{active:!0,n:{active:"0",before:"0"}},m:{active:!0,n:{active:"0",before:"0"}},s2:{active:!0,n:{active:"0",before:"0"}},s:{active:!0,n:{before:"0",active:"0"}},bglight:!1,showBgChangeBtn:!0,animationData:{}}},onLoad:function(){uni.setKeepScreenOn({keepScreenOn:!0}),this.animate=uni.createAnimation({transformOrigin:"50% 50%",duration:500,timingFunction:"linear"})},onShow:function(){this.clockRun()},onUnload:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},methods:{screenClick:(0,e.debounce)((function(){this.showBgChangeBtn=!this.showBgChangeBtn,this.showBgChangeBtn?(this.animate.width("80rpx").height("80rpx").opacity(1).step(),this.animationData=this.animate.export()):(this.animate.width("0rpx").height("0rpx").opacity(0).step(),this.animationData=this.animate.export())}),500),changeBg:(0,e.debounce)((function(){this.bglight=!this.bglight}),500),setHour:function(){var t=this._getTime().h.split("");this.h.n.active!==t[1]&&(this.h.n.before=this.h.n.active,this.h.active=!this.h.active,this.h.n.active=t[1]),this.h2.n.active!==t[0]&&(this.h2.n.before=this.h2.n.active,this.h2.active=!this.h2.active,this.h2.n.active=t[0])},setMinute:function(){var t=this._getTime().m.split("");this.m.n.active!==t[1]&&(this.m.n.before=this.m.n.active,this.m.active=!this.m.active,this.m.n.active=t[1]),this.m2.n.active!==t[0]&&(this.m2.n.before=this.m2.n.active,this.m2.active=!this.m2.active,this.m2.n.active=t[0])},setSecond:function(){var t=this._getTime().s.split("");this.s.n.active!==t[1]&&(this.s.n.before=this.s.n.active,this.s.active=!this.s.active,this.s.n.active=t[1]),this.s2.n.active!==t[0]&&(this.s2.n.before=this.s2.n.active,this.s2.active=!this.s2.active,this.s2.n.active=t[0])},clockRun:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.timer=setInterval((function(){t.setHour(),t.setMinute(),t.setSecond()}),1e3)},_getTime:function(){var t=new Date,s=t.getHours(),i=t.getMinutes(),e=t.getSeconds();return{h:s.toString().padStart(2,"0"),m:i.toString().padStart(2,"0"),s:e.toString().padStart(2,"0")}}}};s.default=a},dd07:function(t,s,i){"use strict";i("4ca5");var e=n(i("8bbf")),a=n(i("5c7b"));function n(t){return t&&t.__esModule?t:{default:t}}function c(t,s){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),i.push.apply(i,e)}return i}function r(t){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?c(Object(i),!0).forEach((function(s){o(t,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))}))}return t}function o(t,s,i){return s in t?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i,t}e.default.config.productionTip=!1,a.default.mpType="app";var _=new e.default(r({},a.default));_.$mount()},f0c5:function(t,s,i){"use strict";function e(t,s,i,e,a,n,c,r,o,_){var v,l="function"===typeof t?t.options:t;if(o){l.components||(l.components={});var u=Object.prototype.hasOwnProperty;for(var h in o)u.call(o,h)&&!u.call(l.components,h)&&(l.components[h]=o[h])}if(_&&((_.beforeCreate||(_.beforeCreate=[])).unshift((function(){this[_.__module]=this})),(l.mixins||(l.mixins=[])).push(_)),s&&(l.render=s,l.staticRenderFns=i,l._compiled=!0),e&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),c?(v=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},l._ssrRegister=v):a&&(v=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),v)if(l.functional){l._injectStyles=v;var f=l.render;l.render=function(t,s){return v.call(s),f(t,s)}}else{var w=l.beforeCreate;l.beforeCreate=w?[].concat(w,v):[v]}return{exports:t,options:l}}i.d(s,"a",(function(){return e}))}},[["dd07","app-config"]]]);