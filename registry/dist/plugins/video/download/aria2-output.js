!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/aria2-output"]=t():e["video/download/aria2-output"]=t()}(globalThis,(()=>(()=>{var e={866:(e,t,n)=>{var o=n(955)((function(e){return e[1]}));o.push([e.id,".rpc-config.download-video-config-section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  align-items: stretch;\n}\n.rpc-config.download-video-config-section > * {\n  display: flex;\n  align-items: center;\n}\n.rpc-config.download-video-config-section > *:not(:last-child) {\n  margin-bottom: 12px;\n}\n.rpc-config.download-video-config-section .profile-item-name {\n  margin-right: 8px;\n}\n.rpc-config.download-video-config-section .profile-other .profile-item-name {\n  align-self: flex-start;\n}\n.rpc-config.download-video-config-section .profile-select .be-textbox,\n.rpc-config.download-video-config-section .profile-select .be-dropdown {\n  margin-right: 8px;\n}\n.rpc-config.download-video-config-section .profile-select .be-button {\n  padding: 4px;\n}\n.rpc-config.download-video-config-section .profile-method {\n  align-self: flex-start;\n}\n.rpc-config.download-video-config-section .online-assets-download {\n  flex-direction: column;\n  align-items: start;\n}",""]),e.exports=o},955:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(o)for(var s=0;s<this.length;s++){
// eslint-disable-next-line prefer-destructuring
var r=this[s][0];null!=r&&(i[r]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},991:(e,t,n)=>{"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var p=a(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(r[p].references++,r[p].updater(f)):r.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var s=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function u(e,t,n){var o=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,v=0;function h(e,t){var n,o,i;if(t.singleton){var s=v++;n=m||(m=l(t)),o=f.bind(null,n,s,!1),i=f.bind(null,n,s,!0)}else n=l(t),o=u.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);r[i].references--}for(var s=c(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=s}}}},205:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"rpc-config download-video-config-section"},[t("div",{staticClass:"online-assets-download"},[t("div",{staticClass:"download-video-config-item"},[t("div",{staticClass:"download-video-config-title"},[e._v("使用 aria2 下载附属资源:")]),e._v(" "),t("SwitchBox",{on:{change:e.saveAssetsSettings},model:{value:e.isPluginDownloadAssets,callback:function(t){e.isPluginDownloadAssets=t},expression:"isPluginDownloadAssets"}})],1),e._v(" "),t("div",{staticClass:"download-video-config-description"},[e._v("\n      存在于服务器的附属资源 (例如封面) 可以一并发送到 aria2 下载.\n    ")])]),e._v(" "),e.isRenaming?t("div",{staticClass:"profile-select"},[t("div",{staticClass:"profile-item-name"},[e._v("重命名 RPC 预设:")]),e._v(" "),t("TextBox",{ref:"renameInput",model:{value:e.profileRename,callback:function(t){e.profileRename=t},expression:"profileRename"}}),e._v(" "),t("VButton",{key:"check",attrs:{type:"transparent",title:"完成"},on:{click:function(t){return e.endRename()}}},[t("VIcon",{attrs:{icon:"mdi-check",size:16}})],1)],1):t("div",{staticClass:"profile-select"},[t("div",{staticClass:"profile-item-name"},[e._v("RPC 预设:")]),e._v(" "),t("VDropdown",{attrs:{items:e.rpcProfiles},scopedSlots:e._u([{key:"item",fn:function({item:t}){return[e._v("\n        "+e._s(t.name)+"\n      ")]}}]),model:{value:e.selectedRpcProfile,callback:function(t){e.selectedRpcProfile=t},expression:"selectedRpcProfile"}}),e._v(" "),t("VButton",{key:"edit",attrs:{type:"transparent",title:"重命名"},on:{click:function(t){return e.startRename()}}},[t("VIcon",{attrs:{icon:"mdi-pencil-outline",size:16}})],1),e._v(" "),t("VButton",{key:"new",attrs:{type:"transparent",title:"新建预设"},on:{click:function(t){return e.newProfile()}}},[t("VIcon",{attrs:{icon:"mdi-plus",size:16}})],1),e._v(" "),t("VButton",{key:"delete",attrs:{disabled:e.rpcProfiles.length<2,type:"transparent",title:"删除当前预设"},on:{click:function(t){return e.deleteProfile()}}},[t("VIcon",{attrs:{icon:"mdi-trash-can-outline",size:16}})],1)],1),e._v(" "),e.selectedRpcProfile?[t("div",{staticClass:"profile-secret-key"},[t("div",{staticClass:"profile-item-name"},[e._v("密钥:")]),e._v(" "),t("TextBox",{attrs:{"change-on-blur":""},model:{value:e.selectedRpcProfile.secretKey,callback:function(t){e.$set(e.selectedRpcProfile,"secretKey",t)},expression:"selectedRpcProfile.secretKey"}})],1),e._v(" "),t("div",{staticClass:"profile-dir"},[t("div",{staticClass:"profile-item-name"},[e._v("路径:")]),e._v(" "),t("TextBox",{attrs:{"change-on-blur":""},model:{value:e.selectedRpcProfile.dir,callback:function(t){e.$set(e.selectedRpcProfile,"dir",t)},expression:"selectedRpcProfile.dir"}})],1),e._v(" "),t("div",{staticClass:"profile-host"},[t("div",{staticClass:"profile-item-name"},[e._v("主机:")]),e._v(" "),t("TextBox",{attrs:{"change-on-blur":""},model:{value:e.selectedRpcProfile.host,callback:function(t){e.$set(e.selectedRpcProfile,"host",t)},expression:"selectedRpcProfile.host"}})],1),e._v(" "),t("div",{staticClass:"profile-port"},[t("div",{staticClass:"profile-item-name"},[e._v("端口:")]),e._v(" "),t("TextBox",{attrs:{"change-on-blur":""},model:{value:e.selectedRpcProfile.port,callback:function(t){e.$set(e.selectedRpcProfile,"port",t)},expression:"selectedRpcProfile.port"}})],1),e._v(" "),t("div",{staticClass:"profile-method"},[t("div",{staticClass:"profile-item-name"},[e._v("方法:")]),e._v(" "),t("VDropdown",{attrs:{items:["get","post"],"key-mapper":e=>e},scopedSlots:e._u([{key:"item",fn:function({item:t}){return[e._v("\n          "+e._s(t)+"\n        ")]}}],null,!1,883355439),model:{value:e.selectedRpcProfile.method,callback:function(t){e.$set(e.selectedRpcProfile,"method",t)},expression:"selectedRpcProfile.method"}})],1),e._v(" "),t("div",{staticClass:"profile-other"},[t("div",{staticClass:"profile-item-name"},[e._v("其他配置:")]),e._v(" "),t("TextArea",{attrs:{placeholder:"some-key=value","change-on-blur":""},model:{value:e.selectedRpcProfile.other,callback:function(t){e.$set(e.selectedRpcProfile,"other",t)},expression:"selectedRpcProfile.other"}})],1)]:e._e()],2)};o._withStripped=!0;const i=coreApis.settings;var s=n(5);const r=coreApis.ui,a={name:"未命名",secretKey:"",dir:"",host:"127.0.0.1",port:"6800",method:"get",other:""},{options:c}=(0,i.getComponentSettings)("downloadVideo"),l={...{rpcProfiles:[a],selectedRpcProfileName:a.name,isPluginDownloadAssets:!1},...c},d=l.rpcProfiles.find((e=>e.name===l.selectedRpcProfileName))??(l.rpcProfiles.length<1?(l.rpcProfiles.push(a),a):l.rpcProfiles[0]);console.log(l,d);const p=Vue.extend({components:{TextBox:r.TextBox,VButton:r.VButton,VIcon:r.VIcon,VDropdown:r.VDropdown,TextArea:r.TextArea,SwitchBox:r.SwitchBox},data:()=>({isRenaming:!1,profileRename:"",rpcProfiles:l.rpcProfiles,selectedRpcProfile:d,isPluginDownloadAssets:l.isPluginDownloadAssets}),methods:{saveProfileSettings(){l.selectedRpcProfileName=this.selectedRpcProfile.name,l.rpcProfiles=this.rpcProfiles,c.selectedRpcProfileName=l.selectedRpcProfileName,c.rpcProfiles=l.rpcProfiles},saveAssetsSettings(){l.isPluginDownloadAssets=this.isPluginDownloadAssets,c.isPluginDownloadAssets=l.isPluginDownloadAssets},async startRename(){this.profileRename=this.selectedRpcProfile.name,this.isRenaming=!0,await this.$nextTick(),this.$refs.renameInput?.focus()},endRename(){const e=this.profileRename;e?l.rpcProfiles.some((t=>t.name!==this.selectedRpcProfile.name&&t.name===e))?s.Toast.error("名称不得与其他预设重复","重命名 RPC 预设",2e3):(this.selectedRpcProfile.name=this.profileRename,this.isRenaming=!1,this.saveProfileSettings()):s.Toast.error("名称不得为空","重命名 RPC 预设",2e3)},newProfile(){const e={...this.selectedRpcProfile},t={num:1,toString(){return`未命名${this.num}`}};for(;l.rpcProfiles.some((e=>e.name===t.toString()));)t.num++;e.name=t.toString(),l.rpcProfiles.push(e),this.selectedRpcProfile=e},deleteProfile(){if(l.rpcProfiles.length<2)return;const e=l.rpcProfiles.findIndex((e=>e.name===this.selectedRpcProfile.name));-1!==e&&confirm(`确认删除 RPC 预设 "${this.selectedRpcProfile.name}" 吗?`)&&(l.rpcProfiles.splice(e,1),this.selectedRpcProfile=l.rpcProfiles[0])}}});var f=n(991),u=n.n(f),m=n(866),v=n.n(m),h={insert:"head",singleton:!1};u()(v(),h);v().locals;var g=function(e,t,n,o,i,s,r,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:l}}(p,o,[],!1,null,null,null);const P=g.exports},5:e=>{"use strict";e.exports=coreApis.toast}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};return(()=>{"use strict";n.d(o,{plugin:()=>v});const e=coreApis.download,t=coreApis.utils.constants,i=coreApis.utils.title,s={name:"aria2",displayName:"aria2 Input",description:"使用 aria2 命令行输入文件开始下载. (aria2c -i xxx.txt)",runAction:async n=>{const{infos:o}=n,s=document.URL.replace(window.location.search,""),r=`\n# Generated by Bilibili Evolved Video Export\n# https://github.com/the1812/Bilibili-Evolved/\n${o.map((e=>e.titledFragments.map((e=>({url:e.url,params:{referer:s,userAgent:t.UserAgent,out:e.title}}))).flat().map((e=>{const t=Object.entries(e.params).map((e=>{let[t,n]=e;return`  ${lodash.kebabCase(t)}=${n}`})).join("\n");return`${e.url}\n${t}`})))).flat().join("\n")}`.trim();await e.DownloadPackage.single(`${(0,i.getFriendlyTitle)()}.txt`,r)}},r=coreApis.ajax;var a=n(5);const c=coreApis.utils.log,l=e=>{const t=e.host.match(/^http[s]?:\/\//)?e.host:`http://${e.host}`;return{option:e,host:t,methodName:"aria2.addUri"}},d=async(e,t)=>{try{let n=await t();return"string"==typeof n&&(n=JSON.parse(n)),void 0!==n.error?1===n.error.code?{param:e,success:!1,message:"请求遭到拒绝, 请检查您的密钥相关设置."}:{param:e,success:!1,message:`请求发生错误, code = ${n.error.code}, message = ${n.error.message}`}:{param:e,success:!0,message:n.result}}catch(t){return{param:e,success:!1,message:`无法连接到RPC主机, error = ${t.toString()}`}}},p=async(e,t)=>{const{option:n,host:o,methodName:i}=l(e);return d(t,(async()=>{const e=window.btoa(unescape(encodeURIComponent(JSON.stringify(t.params)))),s=`${o}:${n.port}/jsonrpc?method=${i}&id=${t.id}&params=${e}`;return console.log(`RPC request: ${s}`),s.startsWith("http:")?(0,r.monkey)({method:"GET",url:s,responseType:"json"}):(0,r.getJson)(s)}))},f=async(e,t)=>{const{option:n,host:o,methodName:i}=l(e);return d(t,(async()=>{const e=`${o}:${n.port}/jsonrpc`,s={method:i,id:t.id,params:t.params};return e.startsWith("http:")?(0,r.monkey)({method:"POST",url:e,responseType:"json",data:JSON.stringify(s)}):(0,r.postJson)(e,s)}))},u=e=>{if(!e)return{};const t=e.split("\n").map((e=>{const[t,...n]=e.trim().split("=");return[t.trim(),n.join("=").trim()]})).filter((e=>Boolean(e[1])));return Object.fromEntries(t)},m={name:"aria2Rpc",displayName:"aria2 RPC",description:"使用 aria2 RPC 功能发送下载请求.",runAction:async(e,n)=>{const{infos:o,extraOnlineAssets:i}=e,{selectedRpcProfile:s,isPluginDownloadAssets:r}=n,{secretKey:l,dir:d,other:m}=s,v=document.URL.replace(window.location.search,""),h=(e,n)=>{const o=[];l&&o.push(`token:${l}`),o.push([e]),o.push({referer:v,"user-agent":t.UserAgent,out:n,dir:d||void 0,...u(m)});return{params:o,id:encodeURIComponent(n)}},g=o.map((e=>e.titledFragments.map((e=>{const{url:t,title:n}=e;return h(t,n)})))).flat(),P=e=>r&&void 0!==e.getUrls,y=(await Promise.all(i.filter((e=>P(e.asset))).map((async e=>{const{asset:t,instance:n}=e;return(await t.getUrls(o,n)).map((e=>{let{name:t,url:n}=e;return h(n,t)}))})))).flat();e.extraOnlineAssets=i.filter((e=>!P(e.asset)));const R=[...g,...y],x=await(async(e,t)=>{const n=[];for(const o of t){let t;t="get"===e.method?await p(e,o):await f(e,o),n.push(t)}return n})(s,R);if(console.table(x),1===x.length){const e=x[0];e.success?a.Toast.success(`成功发送了请求, GID = ${e.message}`,"aria2 RPC",5e3):(0,c.logError)(e.message)}else{const e=x.filter((e=>e.success)).length,t=x.length-e;a.Toast.info(`发送了 ${x.length} 个请求, 成功 ${e} 个, 失败 ${t} 个.`,"aria2 RPC",5e3)}},component:()=>Promise.resolve().then(n.bind(n,205)).then((e=>e.default))},v={name:"downloadVideo.outputs.aria2",displayName:"下载视频 - aria2 输出支持",description:"为下载视频增加 aria2 文件导出和 RPC 输出支持.",setup:e=>{let{addData:t}=e;t("downloadVideo.outputs",(e=>{e.push(s),e.push(m)}))},commitHash:"3fdabaa64cae0d42e4564ea0bbffea67b939f888",coreVersion:"2.10.1"}})(),o=o.plugin})()));