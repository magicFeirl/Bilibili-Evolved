!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/remember-speed"]=t():e["video/player/remember-speed"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{component:()=>W});const i=coreApis.meta,o=coreApis.utils.urls,n=coreApis.settings,r=coreApis.utils.log,s=coreApis.pluginApis.hook,a=e=>"function"==typeof e?{next:e}:e,l=e=>function e(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=!1;const s=[],l=[];let d=!1;const c=()=>{for(;s.length;)s.pop()();l.length=0,d=!0},p=e=>{d||(l.forEach((t=>{t.error?.(e),(0,n.getGeneralSettings)().devMode&&console.error(e)})),c())},u=e=>{d||l.forEach((t=>{try{t.next(e)}catch(e){p(e)}}))},h=()=>{l.forEach((e=>{e.complete?.()})),c()},b=()=>{if(r)return;const e=t?.({next:u,error:p,complete:h});e&&s.push(e),r=!0},m=e=>null==e?null:(l.push(e),()=>{lodash.pull(l,e)}),f=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return 0===i.length?{subscribe:e=>{const t=m(a(e));return(o?.connect??b)(),t},pipe:f,next:u,error:p,complete:h,...o}:e(i[0],{subscribe:m},o||{connect:b,next:u}).pipe(...i.slice(1))};if(i){const e=t?.({subscribe:e=>i.subscribe({error:p,complete:h,...a(e)}),next:u,error:p,complete:h});e&&s.push(e)}return f()}(e),d=(e,t)=>l((i=>{let{next:o}=i;return e.addEventListener(t,o),()=>e.removeEventListener(t,o)})),c=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return l((t=>{let{next:o}=t;e(...i,o)}))},p=e=>new Promise(((t,i)=>{const o=e.subscribe({next:e=>{t(e),o()},error:()=>{i(),o()},complete:()=>{i(),o()}})})),u=coreApis.componentApis.video.playerAgent,h=coreApis.lifeCycle,b=coreApis.observer,m=coreApis.utils,f=coreApis.utils.sort,v=e=>function(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];Promise.resolve().then((()=>e(...i)))},g=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return l((e=>{let{next:i,error:o,complete:n}=e;return(e=>{const t=new Set;return e((e=>{lodash.castArray(e).forEach((e=>{t.add(e)}))})),()=>{t.forEach((e=>{e()}))}})((e=>{const r=[];let s=0;e(t.map(((e,a)=>{return e.pipe((l=v,e=>{let{subscribe:t,next:i,complete:o,error:n}=e;t(lodash.mapValues({next:i,complete:o,error:n},(e=>l(e))))})).subscribe({next:e=>{r[a]=e,r.reduce((e=>e+1),0)===t.length&&i(r.slice())},complete:()=>{s++,s===t.length&&n()},error:o});var l}))),e((()=>{r.length=0,s=0}))}))}))},y=e=>t=>{let{subscribe:i,next:o,error:n}=t;i(lodash.debounce((e=>{try{o(e)}catch(e){n(e)}}),e))},x=e=>t=>{let{subscribe:i,next:o}=t;i((t=>{e(t)&&o(t)}))},S=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return e=>{let{next:i,subscribe:o}=e,n=!1;o((e=>{n||t.forEach((e=>i(e))),i(e),n=!0}))}},w=coreApis.pluginApis.data,E=e=>e.split(",").map((e=>e.trim().replace(/^\./,""))).join(","),R=(e,t)=>{const i=t=>{(0,w.registerAndGetData)(e,t)[0]=t},o=(0,w.getData)(e);if(o.length)return[o[0],i];if(t){const e=t();return i(e),[e,i]}return[void 0,i]},A=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&1===e?"倍速":Math.trunc(e)===e?`${e}.0x`:`${e}x`},V=e=>{if("倍速"===e)return 1;const t=/([0-9]*[.]?[0-9]+)x/.exec(e);if(t)return parseFloat(t[1]);throw new Error(`unknown speed text: ${e}`)};function C(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const $=u.playerAgent.provideCustomQuery({video:{speedMenuList:".bilibili-player-video-btn-speed-menu, .bpx-player-ctrl-playbackrate-menu",speedMenuItem:".bilibili-player-video-btn-speed-menu-list, .bpx-player-ctrl-playbackrate-menu-item",speedNameBtn:".bilibili-player-video-btn-speed-name, .bpx-player-ctrl-playbackrate-result",speedContainer:".bilibili-player-video-btn-speed, .bpx-player-ctrl-playbackrate",active:".bilibili-player-active, .bpx-state-active",show:".bilibili-player-speed-show, .bpx-state-show"},bangumi:{speedMenuList:".squirtle-speed-select-list, .bpx-player-ctrl-playbackrate-menu",speedMenuItem:".squirtle-select-item, .bpx-player-ctrl-playbackrate-menu-item",speedNameBtn:".squirtle-speed-select-result, .bpx-player-ctrl-playbackrate-result",speedContainer:".squirtle-speed-wrap, .bpx-player-ctrl-playbackrate",active:".active, .bpx-state-active",show:".bilibili-player-speed-show, .bpx-state-show"}});let O=function(e){return e[e.MIN=0]="MIN",e[e.CURRENT=1]="CURRENT",e[e.MAX=2]="MAX",e}({});const k=(e,t,i)=>{const o=new MutationObserver(i);return o.observe(e,t),o},N=e=>{let[t,i]=e;if(!t)throw new Error("speed container element not found!");if(!i)throw new Error("video element not found!");const o=t.querySelector($.custom.speedNameBtn.selector),n=t.querySelector($.custom.speedMenuList.selector);let r,s,a;const d=l(),c=l().pipe((e=>{let t,{subscribe:i,next:o}=e,n=!0;i((e=>{(n||t!==e)&&(n=!1,t=e,o(e))}))}));c.pipe(S(void 0),(e=>{let{subscribe:t,next:i}=e;const o=[];return t((e=>{2===o.length&&o.shift(),o.push(e),2===o.length&&i(o.slice())})),()=>{o.length=0}})).subscribe((e=>{let[t,i]=e;s=t,r=i}));const p=e=>{if(e)switch(e.nodeType){case Node.TEXT_NODE:c.next(V(e.data));break;case Node.ELEMENT_NODE:c.next(V(e.innerHTML));break;default:console.warn("The target parameter of updateActiveVideoSpeed must be a Node, and the node type must be one of TEXT_NODE and ELEMENT_NODE")}},u=()=>{a=lodash([...n.children]).map((e=>lodash.attempt((()=>V(e.textContent))))).reject((e=>lodash.isError(e))).sort((0,f.ascendingSort)()).value()};p(o),u();const h=k(n,{childList:!0,attributes:!0},(e=>{const{attributes:t=[],childList:i=[]}=lodash.groupBy(e,"type");i.length&&u(),d.next({attributes:t,childList:i})})),b=k(o,{childList:!0,subtree:!0},(e=>{e.forEach((e=>{const[t]=e.addedNodes;p(t)}))}));return{containerElement:t,videoElement:i,nameBtnElement:o,menuListElement:n,query:e=>(0,m.des)(`./*[(${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"or";return e.split(",").map(E).flat().map((e=>`contains(@class, "${e}")`)).join(` ${t} `)}($.custom.speedMenuItem.selector)}) and normalize-space()="${A(e)}"]`,n),dispose:()=>{h.disconnect(),b.disconnect()},activeVideoSpeed$:c,menuListElementMutations$:d,getActiveVideoSpeed:()=>r,getOldActiveVideoSpeed:()=>s,getAvailableSpeedValues:()=>a}},j=e=>{const{videoElement:t,menuListElement:i}=e,o=d(i,"click").pipe((n=e=>{const{innerText:t,innerHTML:i}=e.target,o=t.trim()||i.trim();return lodash.attempt((()=>V(o)))},e=>{let{subscribe:t,next:i}=e;t((e=>{i(n(e))}))}),x((e=>!lodash.isError(e))));var n;const r=l((e=>{let{next:i}=e,o=t;do{o=Object.getPrototypeOf(o)}while(null===o||!Object.prototype.hasOwnProperty.call(o,"playbackRate"));const n=Object.getOwnPropertyDescriptor(o,"playbackRate");return Object.defineProperty(o,"playbackRate",{set(e){n.set.call(this,e),i(e)}}),()=>{Object.defineProperty(o,"playbackRate",n)}})),s=o.pipe((e=>{let t,{subscribe:i,next:o}=e,n=!0;i((e=>{(n||t!==e)&&(n=!1,t=e,o(e))}))})),a=r.pipe((e=>{let t,{subscribe:i,next:o}=e,n=!0;i((e=>{(n||t!==e)&&(n=!1,t=e,o(e))}))})),c=l((e=>{let{next:t}=e;const i=g(s,a);return i.subscribe((e=>{let[i,o]=e;i===o&&t(o)})),()=>i.complete()})).pipe((e=>{let t,{subscribe:i,next:o}=e,n=!0;i((e=>{(n||t!==e)&&(n=!1,t=e,o(e))}))}));let p;a.pipe(y(200),S(void 0),(e=>{let{subscribe:t,next:i}=e;const o=[];return t((e=>{2===o.length&&o.shift(),o.push(e),2===o.length&&i(o.slice())})),()=>{o.length=0}})).subscribe((e=>{let[t]=e;p=t}));const u={menuListElementClickSpeed$:o,menuListElementClickSpeedChange$:s,playbackRate$:r,playbackRateChange$:a,videoSpeedChange$:c};return{...e,...u,dispose:()=>{lodash.values(u).forEach((e=>{e.complete()})),e.dispose()},getOldPlaybackRate:()=>p}},[T]=R("speed.NoSuchSpeedMenuItemElementError",(()=>class extends Error{constructor(e){const t=lodash.attempt((()=>A(e))),i=lodash.isError(t)?String(e):String(t);super(`There is no such speed menu item as ${i}`),this.speed=e,C(this,"formattedSpeed",void 0),this.formattedSpeed=i}})),L=e=>{const{query:t,videoElement:i,videoSpeedChange$:o,getOldActiveVideoSpeed:n,getAvailableSpeedValues:r,getActiveVideoSpeed:s}=e,a=async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;const r=t(e);if(null==r)throw new T(e);r.click();const s=t=>{if((t??i.playbackRate)!==e)throw new Error(`failed to set ${A(e)} video speed.`)},a=[p(o.pipe(y(Math.max(0,n||0))))];n>0&&a.push(new Promise(((e,t)=>setTimeout((()=>setTimeout(t,n)))))),await Promise.all(a).then(s).catch(s)},l=async()=>{await a(1)},d=async(e,t)=>{if(lodash.isNil(e)&&(e=!1),"boolean"==typeof e)e||1===i.playbackRate?await a(n()):await l();else{const i=r();switch(t){case O.MIN:await a(i[e]);break;case O.MAX:await a(i[i.length-1+e]);break;case O.CURRENT:default:{const t=i.indexOf(s());if(-1===t)throw new Error("Unexpected Error: The available speed values do not include the active speed value, this should be a bug, please report the issue on github!");await a(i[t+e])}}}},c=async e=>{try{await d(e,O.CURRENT)}catch(e){if(console.warn(e),!(e instanceof T))throw e}};return Object.assign(e,{set:a,force:async e=>{i.playbackRate=e},reset:l,toggle:d,step:c,increase:async()=>{await c(1)},decrease:async()=>{await c(-1)}})},M=()=>R("speed.speedContext"),P=()=>R("speed.buildArguments$",(()=>{return l().pipe((e=e=>e.settings.enabled,t=>{let{subscribe:i,next:o}=t;const n=new Set;return i((t=>{const i=n.size;e(t)?n.add(t):n.delete(t),n.size!==i&&o([...n])})),()=>{n.clear()}}));var e})),I=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash.identity;const[t,i]=M();if(t)return t;let o,n;const[r]=R("lifeCycleComponentLoaded$",(()=>d(unsafeWindow,h.LifeCycleEventTypes.ComponentsLoaded))),[s]=P(),[a]=R("speed.videoChange$",(()=>c(b.videoChange).pipe(x((e=>{let{aid:t,cid:i}=e;return t||i}))))),[u]=R("speed.speedContext$",(()=>l((t=>{let{next:i}=t;return g(a,function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return l((e=>{let{next:i,complete:o}=e;const n=[...t],r=()=>{const e=n.shift();e||o(),e.subscribe({next:i,complete:()=>{r()}})};r()}))}(function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return l((e=>{let{next:i,complete:o}=e;t.forEach((e=>{i(e)})),o()}))}([]),s),r).subscribe((t=>{let[r,s]=t;const[l]=M();l?.dispose(),n?.("context update");const d=new Promise(((e,t)=>{o=e,n=t}));Promise.all([Promise.all([$.custom.speedContainer(),$.query.video.element()]).then(o),d]).then((e=>{let[,t]=e;return t})).then(N).then(j).then(L).then((e=>Object.assign(e,{videoIdObject:r,speedContext$:u,videoChange$:a}))).then(e(s)).then(i).catch((e=>console.error(e)))}))}))));return u.subscribe(i),p(u)};function q(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class G{constructor(e,t){this.entryContext=e,this.enabled$=t,q(this,"speedContext",void 0),q(this,"settings",void 0),q(this,"coreApis",void 0),q(this,"metadata",void 0),q(this,"options",void 0),q(this,"getVideoIdObject",void 0),q(this,"getAvailableSpeedValues",void 0),q(this,"getOldActiveVideoSpeed",void 0),q(this,"forceVideoSpeed",void 0),q(this,"getVideoSpeed",void 0),q(this,"setVideoSpeed",void 0),q(this,"resetVideoSpeed",void 0),q(this,"toggleVideoSpeed",void 0),q(this,"increaseVideoSpeed",void 0),q(this,"decreaseVideoSpeed",void 0),lodash.assign(this,e,{options:e.settings.options}),this.migrate?.(),lodash.assign(this,lodash.mapValues(G.contextMap,(e=>async function(){const t=await I(),i=lodash.get(t,e);return lodash.isFunction(i)?await i(...arguments):i})))}}q(G,"create",void 0),q(G,"contextMap",{getVideoIdObject:"videoIdObject",getAvailableSpeedValues:"getAvailableSpeedValues",getOldActiveVideoSpeed:"getOldActiveVideoSpeed",getVideoSpeed:"videoElement.playbackRate",setVideoSpeed:"set",forceVideoSpeed:"force",resetVideoSpeed:"reset",toggleVideoSpeed:"toggle",increaseVideoSpeed:"increase",decreaseVideoSpeed:"decrease"}),I((e=>t=>{const i=lodash.omit(t,"dispose"),o=e.map((e=>e.getSpeedContextMixin(i)));if(o.length>1){const e=lodash.intersection(...o.map(Object.keys));if(e.length)throw new Error(`In the registered speed component, there is an implementation of getSpeedContextMixin that causes the speed context to be mixed in ambiguous.\nThe repeated key names are ${e.join(", ")}`)}lodash.assign(i,...o);const r=[];return e.forEach((e=>{const t=lodash(e.settings.options).mapValues(((t,i)=>c(n.addComponentListener,`${e.metadata.name}.${i}`).pipe((e=>{let t,{subscribe:i,next:o}=e,n=!0;i((e=>{(n||t!==e)&&(n=!1,t=e,o(e))}))})))).mapKeys(((e,t)=>`${t}$`)).value();r.push(...lodash.values(t)),e.options=new Proxy(e.settings.options,{get:(e,i,o)=>lodash.isSymbol(i)?Reflect.get(e,i,o):!Reflect.has(e,i)&&i.endsWith("$")?t[i]:Reflect.get(e,i,o)}),e.speedContext=i,e.onSpeedContext(i),e.settings.enabled&&lodash(t).entries().forEach((t=>{let[i,o]=t;o.next(e.settings.options[i.slice(0,-1)])}))})),{...i,dispose:()=>{r.forEach((e=>e.complete())),t.dispose()}}})),G.create=function(e){const t=l().pipe((e=>{let t,{subscribe:i,next:o}=e,n=!0;i((e=>{(n||t!==e)&&(n=!1,t=e,o(e))}))}));return{...e,entry:i=>{const o=lodash.attempt((()=>new this(i,t)));if(o instanceof Error)return(0,r.logError)(o),null;const[n]=P();return t.subscribe((()=>{n.next(o)})),t.next(!0),(0,s.getHook)(`speed.component.${e.name}`).after(o),o},reload:()=>t.next(!0),unload:()=>t.next(!1)}};const D=coreApis.toast;function U(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class B extends G{getSpeedContextMixin(e){var t=this;let{videoIdObject:i,set:o,reset:n,toggle:r,getActiveVideoSpeed:s,getOldActiveVideoSpeed:a}=e;const l=async()=>{const e=this.getRestoredVideoSpeed(i);await o(e??1)};return{reset:l,toggle:async function(){for(var e=arguments.length,i=new Array(e),d=0;d<e;d++)i[d]=arguments[d];const[c,...p]=i;if(null!=c&&"boolean"!=typeof c)return void r(c,...p);const{fixGlobalSpeed:u,individualRemember:h,globalSpeed:b}=t.options,m=u&&!h;c||s()===(m?b:1)?await o(a()):await(m?l():n())}}}migrate(){const{options:e}=this.settings;let t=!1;e.speed&&(e.globalSpeed=+e.speed||1,delete e.speed,t=!0),e.individualRememberList&&(e.individualRememberRecord=lodash.cloneDeep(e.individualRememberList),delete e.individualRememberList,t=!0),t&&(e.fixGlobalSpeed=!1,e.showRestoreTip=!0,delete e.remember,D.Toast.show("「扩展倍速」和倍速快捷键插件成为独立的组件或插件啦！详情请阅读组件描述.（此弹出提醒仅显示一次）","【记忆倍速】迁移提醒",8e3))}onSpeedContext(e){let{videoSpeedChange$:t,videoIdObject:i}=e;this.options.individualRemember$.subscribe((e=>{e&&(this.options.fixGlobalSpeed=!0)})),this.options.fixGlobalSpeed$.subscribe((e=>{e||(this.options.individualRemember=!1)}));const o=this.getRestoredVideoSpeed(i);o&&requestIdleCallback((async()=>{try{if(await this.setVideoSpeed(o,1e3),this.options.showRestoreTip){let e=`已还原到 ${A(o)} 倍速`;this.options.individualRemember&&null!=this.matchRememberSpeed()&&(e=`【独立倍速视频】${e}`),D.Toast.info(e,this.metadata.displayName,3e3)}}catch(e){const t=`${this.metadata.displayName} - 倍速还原操作失败`,i=e instanceof T?`没有 ${e.formattedSpeed} 这样的倍速项`:String(e);D.Toast.error(i,t,5e3),console.error(e)}})),t.subscribe((e=>{this.settings.enabled&&(this.options.individualRemember?e!==+this.options.globalSpeed&&this.rememberSpeed(e):this.options.fixGlobalSpeed||this.rememberSpeed(e,null))}))}getRestoredVideoSpeed(e){return this.options.individualRemember&&this.matchRememberSpeed(e.aid)||this.readGlobalVideoSpeed()}readGlobalVideoSpeed(){return parseFloat(String(this.options.globalSpeed))}matchRememberSpeed(e){for(const[t,i]of Object.entries(this.options.individualRememberRecord))if(i.some((t=>t.toString()===B.getAid(e).toString())))return parseFloat(t);return null}rememberSpeed(e,t){if(lodash.isNull(t))return void(this.options.globalSpeed=e);lodash.isUndefined(t)&&(t=B.getAid(t));const i=lodash.castArray(t);this.forgetSpeed(i),this.options.individualRememberRecord={...this.options.individualRememberRecord,[e]:lodash.unionWith(this.options.individualRememberRecord[e],i,B.aidComparator)}}forgetSpeed(e){lodash.isNil(e)&&(e=B.getAid(e));const t=lodash.castArray(e);this.options.individualRememberRecord=lodash(this.options.individualRememberRecord).mapValues((e=>lodash(e).pullAllWith(t,B.aidComparator).uniqWith(B.aidComparator).value())).pickBy((e=>e.length)).value()}}U(B,"getAid",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:unsafeWindow.aid;if(!e)throw new Error("aid is unknown");return e})),U(B,"aidComparator",((e,t)=>e.toString()===t.toString()));const W=B.create({name:"rememberVideoSpeed",displayName:"记忆倍速",author:{name:"JLoeve",link:"https://github.com/LonelySteve"},description:{"zh-CN":`\n\n> 提高视频播放器的倍速记忆体验，可实现跨页共享倍速，也可以按视频分别记忆倍速.\n\n#### 🔧 **选项**\n\n- \`全局记忆倍速值\`：默认情况下，这是跨页共享的倍速值，如果启用「各视频分别记忆」，则作为从未独立记忆倍速视频的初始倍速值.\n- \`固定全局倍速值\`：默认情况下，全局倍速值将随着用户改变视频倍速而改变，打开此选项后，全局记忆倍速值不再受倍速调整的影响.\n- \`各视频分别记忆\`：打开此选项后，将按不同视频分别记忆倍速，对于从未被记忆过倍速的视频，将采用全局记忆倍速值，选项「固定全局倍速值」在此情况下强制生效.\n- \`弹出还原倍速提示\`：打开此选项后，每次成功还原倍速后都会弹出提示.\n\n#### 🌈 **温馨提示**\n\n「扩展倍速」和倍速相关的快捷键插件已分离为单独的组件或插件.\n\n请根据自身需要：\n\n- 前往「组件」页面安装[「扩展倍速」](${i.meta.compilationInfo.altCdn.root}registry/dist/components/video/player/extend-speed.js)组件\n- 前往「插件」页面安装[「快捷键扩展 - 视频倍速」](${i.meta.compilationInfo.altCdn.root}registry/dist/plugins/video/player/speed.js)插件.\n\n*如果想要清除当前视频的记忆状态，需要安装「快捷键扩展 - 视频倍速」插件.*\n`},tags:[componentsTags.video],urlInclude:o.playerUrls,options:{globalSpeed:{displayName:"全局记忆倍速值",defaultValue:1,validator:e=>lodash.clamp(parseFloat(e),.0625,16)||1},fixGlobalSpeed:{displayName:"固定全局倍速值",defaultValue:!1},individualRemember:{displayName:"各视频分别记忆",defaultValue:!1},individualRememberRecord:{displayName:"独立记忆倍速记录",defaultValue:{},hidden:!0},showRestoreTip:{displayName:"弹出还原倍速提示",defaultValue:!0}},commitHash:"95fd680f297ad8a3383ea9b124b39f5bc01c9f7e",coreVersion:"2.10.1"});return t=t.component})()));