!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-sidebar-menu"]=e():t["vue-sidebar-menu"]=e()}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=14)}([function(t,e,i){"use strict";(function(t){i.d(e,"b",function(){return s}),i.d(e,"a",function(){return a});var s={data:function(){return{active:!1,childActive:!1,itemShow:!1,isSSR:t.server}},mounted:function(){var t=this;this.active=!(!this.item||!this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child),this.item&&this.item.child&&(this.showChild?this.itemShow=!0:(this.itemShow=this.isLinkActive(this.item)||this.isChildActive(this.item.child),this.showOneChild&&!this.showChild&&(this.active||this.childActive)&&this.firstItem&&this.emitActiveShow(this._uid))),this.$router||this.isSSR||"undefined"!=typeof window&&window.addEventListener("hashchange",function(){t.active=!(!t.item||!t.item.href)&&t.isLinkActive(t.item),t.childActive=!(!t.item||!t.item.child)&&t.isChildActive(t.item.child)})},methods:{toggleDropdown:function(){this.itemShow=!this.itemShow},isLinkActive:function(t){return this.matchRoute(t.href)||this.isAliasActive(t)},isChildActive:function(t){var e=!0,i=!1,s=void 0;try{for(var a,n=t[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var l=a.value;if(this.isLinkActive(l))return!0;if(l.child&&this.isChildActive(l.child))return!0}}catch(t){i=!0,s=t}finally{try{!e&&n.return&&n.return()}finally{if(i)throw s}}return!1},isAliasActive:function(t){if(t.alias){if(Array.isArray(t.alias)){var e=!0,i=!1,s=void 0;try{for(var a,n=t.alias[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var l=a.value;if(this.matchRoute(l))return!0}}catch(t){i=!0,s=t}finally{try{!e&&n.return&&n.return()}finally{if(i)throw s}}return!1}return this.matchRoute(t.alias)}return!1},matchRoute:function(t){return this.$route?this.$route.fullPath.endsWith(t):"undefined"!=typeof window?window.location.href.endsWith(t):null},clickEvent:function(t,e){if(this.emitItemClick(t,this.item),!this.item.href&&!this.item.child||this.item.disabled||e&&!this.item.href)t.preventDefault();else{if(this.isCollapsed&&this.firstItem){var i=this.item.child;this.$parent.$emit("touchClickItem",i)}if(!e&&this.item.child){if(this.isCollapsed&&this.firstItem)return void t.preventDefault();this.isRouterLink?this.firstItem&&this.showOneChild&&!this.showChild?this.active&&this.activeShow.uid===this._uid?(this.itemShow=!1,this.emitActiveShow(null)):(this.itemShow=!0,this.emitActiveShow(this._uid)):this.active?this.toggleDropdown():this.itemShow=!0:this.item.href||(t.preventDefault(),this.firstItem&&this.showOneChild&&!this.showChild?this.activeShow.uid===this._uid?(this.itemShow=!1,this.emitActiveShow(null)):(this.itemShow=!0,this.emitActiveShow(this._uid)):this.toggleDropdown())}else e||this.isCollapsed||this.item.child||this.firstItem&&this.showOneChild&&!this.showChild&&this.emitActiveShow(null)}}},computed:{isRouterLink:function(){return this.$router&&this.item&&void 0!==this.item.href},show:function(){return!(!this.item||!this.item.child)&&(this.firstItem&&this.showOneChild&&!this.showChild?!!this.activeShow.uid&&this._uid===this.activeShow.uid:this.itemShow)}},watch:{$route:function(){this.active=!(!this.item||!this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child)}},inject:["showChild","showOneChild","emitActiveShow","activeShow","emitItemClick","rtl"]},a={methods:{expandEnter:function(t){t.style.height=t.scrollHeight+"px"},expandAfterEnter:function(t){t.style.height="auto"},expandBeforeLeave:function(t){this.isCollapsed?t.style.display="none":t.style.height=t.scrollHeight+"px"}}}}).call(this,i(2))},function(t,e,i){"use strict";function s(t,e,i,s,a,n,l,r){var o,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),l?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=o):a&&(o=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),o)if(c.functional){c._injectStyles=o;var m=c.render;c.render=function(t,e){return o.call(e),m(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:t,options:c}}i.d(e,"a",function(){return s})},function(t,e){var i,s,a=t.exports={};function n(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function r(t){if(i===setTimeout)return setTimeout(t,0);if((i===n||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:n}catch(t){i=n}try{s="function"==typeof clearTimeout?clearTimeout:l}catch(t){s=l}}();var o,c=[],m=!1,d=-1;function h(){m&&o&&(m=!1,o.length?c=o.concat(c):d=-1,c.length&&u())}function u(){if(!m){var t=r(h);m=!0;for(var e=c.length;e;){for(o=c,c=[];++d<e;)o&&o[d].run();d=-1,e=c.length}o=null,m=!1,function(t){if(s===clearTimeout)return clearTimeout(t);if((s===l||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function f(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];c.push(new v(t,e)),1!==c.length||m||r(u)},v.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,i){"use strict";var s=i(6).a,a=i(1),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}]},[t.isRouterLink?[t.isSSR?[i("nuxt-link",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},"nuxt-link",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])]:[i("router-link",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},"router-link",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])]]:[i("a",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:t.clickEvent}},"a",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])],t._v(" "),t.item.child?[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("item",{key:e,attrs:{item:t}})}),1)]):t._e()])]:t._e()],2)},[],!1,null,null,null);n.options.__file="SubItem.vue";e.a=n.exports},function(t,e,i){"use strict";(function(t){var s=i(11),a=i(3),n=i(12),l=i(0);e.a={name:"SidebarMenu",components:{Item:s.a,SubItem:a.a,MobileItem:n.a},mixins:[l.a],props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"350px"},widthCollapsed:{type:String,default:"50px"},showChild:{type:Boolean,default:!1},theme:{type:String,default:""},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1}},data:function(){return{isCollapsed:this.collapsed,mobileItem:null,mobileItemPos:0,mobileItemHeight:0,closeTimeout:null,activeShow:null,isSSR:t.server}},computed:{sidebarWidth:function(){return this.isCollapsed?this.widthCollapsed:this.width}},watch:{collapsed:function(t){this.isCollapsed=t}},mounted:function(){var t=this;this.$on("mouseEnterItem",function(e){t.mobileItem=null,t.$nextTick(function(){t.mobileItem=e.item,t.mobileItemPos=e.pos,t.mobileItemHeight=e.height})}),this.$on("touchClickItem",function(e){if(e)clearTimeout(t.closeTimeout);else{t.closeTimeout&&clearTimeout(t.closeTimeout);var i=0;Promise(function(e,i){e(setTimeout(function(e){t.mouseLeave()},600))}).then(function(t){return i=t}),t.clearTimeout=i}})},methods:{mouseLeave:function(){this.mobileItem=null},toggleCollapse:function(){this.isCollapsed=!this.isCollapsed,this.$emit("collapse",this.isCollapsed)},onActiveShow:function(t){this.activeShow=t},onItemClick:function(t,e){this.$emit("itemClick",t,e)}},provide:function(){var t=this,e={};return Object.defineProperty(e,"uid",{enumerable:!0,get:function(){return t.activeShow}}),{showChild:this.showChild,showOneChild:this.showOneChild,emitActiveShow:this.onActiveShow,activeShow:e,emitItemClick:this.onItemClick,rtl:this.rtl}}}}).call(this,i(2))},function(t,e,i){"use strict";(function(t){var s=i(3),a=i(0);e.a={data:function(){return{isSSR:t.server}},components:{SubItem:s.a},mixins:[a.b,a.a],props:{item:{type:Object,required:!0},firstItem:{type:Boolean,default:!1},isCollapsed:{type:Boolean}},methods:{mouseEnter:function(t){this.isCollapsed&&this.firstItem&&this.$parent.$emit("mouseEnterItem",{item:this.item,pos:t.currentTarget.getBoundingClientRect().top-this.$parent.$el.getBoundingClientRect().top,height:this.$el.offsetHeight})}}}}).call(this,i(2))},function(t,e,i){"use strict";(function(t){var s=i(10),a=i(0);e.a={data:function(){return{isSSR:t.server}},components:{SubSubItem:s.default},mixins:[a.b,a.a],props:{item:{type:Object,required:!0}},beforeMount:function(){this.$options.components.SubSubItem=i(10).default}}}).call(this,i(2))},function(t,e,i){"use strict";(function(t){var s=i(3),a=i(0);e.a={data:function(){return{isSSR:t.server}},components:{SubItem:s.a},mixins:[a.b,a.a],props:{item:{type:Object,required:!0},firstItem:{type:Boolean,default:!1},isCollapsed:{type:Boolean}},methods:{mouseEnter:function(t){this.isCollapsed&&this.firstItem&&this.$parent.$emit("mouseEnterItem",{item:this.item,pos:t.currentTarget.getBoundingClientRect().top-this.$parent.$el.getBoundingClientRect().top,height:this.$el.offsetHeight})}}}}).call(this,i(2))},function(t,e,i){"use strict";(function(t){var s=i(0);e.a={data:function(){return{isSSR:t.server}},mixins:[s.b],props:{item:{type:Object,default:null}},watch:{item:function(){this.active=!(!this.item||!this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child)}}}}).call(this,i(2))},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var s=i(7).a,a=i(1),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"first-item":t.firstItem},{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}],on:{mouseenter:function(e){t.mouseEnter(e)}}},[t.isRouterLink?[t.isSSR?[i("nuxt-link",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},"nuxt-link",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)]:[i("router-link",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},"router-link",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)]]:[i("a",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:t.clickEvent}},"a",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)],t._v(" "),t.item.child?[t.isCollapsed?t._e():[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})}),1)]):t._e()])]]:t._e()],2)},[],!1,null,null,null);n.options.__file="SubSubItem.vue";e.default=n.exports},function(t,e,i){"use strict";var s=i(5).a,a=i(1),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"first-item":t.firstItem},{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}],on:{mouseenter:function(e){t.mouseEnter(e)}}},[t.isRouterLink?[t.isSSR?[i("nuxt-link",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},"nuxt-link",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)]:[i("router-link",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},"router-link",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)]]:[i("a",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:t.clickEvent}},"a",t.item.attributes,!1),[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",t._b({staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"span",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)],t._v(" "),t.item.child?[t.isCollapsed?t._e():[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})}),1)]):t._e()])]]:t._e()],2)},[],!1,null,null,null);n.options.__file="Item.vue";e.a=n.exports},function(t,e,i){"use strict";var s=i(8).a,a=i(1),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("div",{staticClass:"vsm-item mobile-item",class:[{"open-item":t.item.child},{"active-item":t.active},{"parent-active-item":t.childActive}]},[t.isRouterLink?[t.isSSR?[i("nuxt-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){t.clickEvent(e,!0)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v("\n        "+t._s(t.item.title)+"\n        "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()])]:[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){t.clickEvent(e,!0)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v("\n        "+t._s(t.item.title)+"\n        "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()])]]:[i("a",{staticClass:"vsm-link",attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:function(e){t.clickEvent(e,!0)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v("\n      "+t._s(t.item.title)+"\n      "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()])]],2):t._e()},[],!1,null,null,null);n.options.__file="MobileItem.vue";e.a=n.exports},function(t,e,i){"use strict";var s=i(9);i.n(s).a},function(t,e,i){"use strict";i.r(e);var s=i(4).a,a=(i(13),i(1)),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-sidebar-menu",class:[t.isCollapsed?"vsm-collapsed":"vsm-default",t.theme,t.rtl?"rtl":""],style:{width:t.sidebarWidth},on:{mouseleave:t.mouseLeave}},[i("div",{staticClass:"vsm-list"},[t._l(t.menu,function(e,s){return[e.header?[!e.visibleOnCollapse&&t.isCollapsed||!e.component?e.visibleOnCollapse||!t.isCollapsed?[i("div",t._b({key:s,staticClass:"vsm-header",class:e.class},"div",e.attributes,!1),[t._v("\n            "+t._s(e.title)+"\n          ")])]:t._e():[i(e.component,{key:s,tag:"component"})]]:i("item",{key:s,attrs:{item:e,"first-item":!0,"is-collapsed":t.isCollapsed}})]})],2),t._v(" "),t.isCollapsed?i("div",{style:[{position:"absolute"},{top:t.mobileItemPos+"px"},t.rtl?{right:"0px"}:{left:"0px"},{"z-index":30},{width:t.width}]},[i("mobile-item",{attrs:{item:t.mobileItem}}),t._v(" "),i("transition",{attrs:{name:"slide-animation"}},[t.mobileItem?i("div",{staticClass:"vsm-mobile-bg",style:[{position:"absolute"},{left:"0px"},{right:"0px"},{top:"0px"},{height:t.mobileItemHeight+"px"}]}):t._e()]),t._v(" "),i("div",{staticClass:"vsm-dropdown",style:[{position:"absolute"},{top:t.mobileItemHeight+"px"},{left:t.rtl?"0px":t.sidebarWidth},{right:t.rtl?t.sidebarWidth:"0px"},{"max-height":"calc(100vh - "+(t.mobileItemPos+t.mobileItemHeight)+"px)"},{"overflow-y":"auto"}]},[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.mobileItem&&t.mobileItem.child?i("div",{staticClass:"vsm-list"},t._l(t.mobileItem.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})}),1):t._e()])],1)],1):t._e(),t._v(" "),i("button",{staticClass:"collapse-btn",on:{click:t.toggleCollapse}})])},[],!1,null,null,null);n.options.__file="SidebarMenu.vue";var l=n.exports;i.d(e,"SidebarMenu",function(){return l});e.default={install:function(t){t.component("sidebar-menu",l)}}}])});
//# sourceMappingURL=vue-sidebar-menu.js.map