(function(e){function t(t){for(var a,o,u=t[0],r=t[1],p=t[2],l=0,c=[];l<u.length;l++)o=u[l],i[o]&&c.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(c.length)c.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(a=!1)}a&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},i={index:0},s=[];function o(e){return u.p+"static/js/"+({"pages-index-data":"pages-index-data","pages-index-end_history":"pages-index-end_history","pages-index-income_list":"pages-index-income_list","pages-index-index":"pages-index-index","pages-index-invest":"pages-index-invest","pages-index-last_invest":"pages-index-last_invest","pages-index-rule":"pages-index-rule"}[e]||e)+"."+{"pages-index-data":"b033a808","pages-index-end_history":"bac58cc1","pages-index-income_list":"6dc02efa","pages-index-index":"323f7739","pages-index-invest":"c069a9c6","pages-index-last_invest":"96a82004","pages-index-rule":"d4c7c209"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=i[e]=[t,a]});t.push(n[2]=a);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,u.nc&&r.setAttribute("nonce",u.nc),r.src=o(e),s=function(t){r.onerror=r.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");o.type=a,o.request=s,n[1](o)}i[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:r})},12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],p=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=p;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("5257")},"1ca0":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""])},"43ab":function(e,t,n){"use strict";(function(e){var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("f028")),s={onLaunch:function(){i.default.web3Init(),i.default.initContract()},onShow:function(){e.log("App Show")},onHide:function(){e.log("App Hide")}};t.default=s}).call(this,n("5a52")["default"])},"4adf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_upgradedAddress",type:"address"}],name:"deprecate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"deprecated",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_evilUser",type:"address"}],name:"addBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"upgradedAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balances",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maximumFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_maker",type:"address"}],name:"getBlackListStatus",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowed",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"who",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newBasisPoints",type:"uint256"},{name:"newMaxFee",type:"uint256"}],name:"setParams",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"issue",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"redeem",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"basisPointsRate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"isBlackListed",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"MAX_UINT",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Issue",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Redeem",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"newAddress",type:"address"}],name:"Deprecate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"feeBasisPoints",type:"uint256"},{indexed:!1,name:"maxFee",type:"uint256"}],name:"Params",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_blackListedUser",type:"address"},{indexed:!1,name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"}],i=a;t.default=i},5257:function(e,t,n){"use strict";var a=n("288e"),i=a(n("cebc"));n("cadf"),n("551c"),n("097d"),n("5dbb"),n("06b9"),n("921b");var s=a(n("e143")),o=a(n("8924")),u=a(n("8338"));s.default.config.productionTip=!1,s.default.prototype.$store=u.default,o.default.mpType="app";var r=new s.default((0,i.default)({},o.default));r.$mount()},"5dbb":function(e,t,n){"use strict";(function(e){var t=n("288e"),a=t(n("5176")),i=t(n("e143"));e["____EA84F6F____"]=!0,delete e["____EA84F6F____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"DataStorage",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},i.default.component("pages-index-index",function(e){var t={component:n.e("pages-index-index").then(function(){return e(n("94f1"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),i.default.component("pages-index-data",function(e){var t={component:n.e("pages-index-data").then(function(){return e(n("d87e"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),i.default.component("pages-index-income_list",function(e){var t={component:n.e("pages-index-income_list").then(function(){return e(n("df24"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),i.default.component("pages-index-end_history",function(e){var t={component:n.e("pages-index-end_history").then(function(){return e(n("a9c6"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),i.default.component("pages-index-rule",function(e){var t={component:n.e("pages-index-rule").then(function(){return e(n("0755"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),i.default.component("pages-index-invest",function(e){var t={component:n.e("pages-index-invest").then(function(){return e(n("7533"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),i.default.component("pages-index-last_invest",function(e){var t={component:n.e("pages-index-last_invest").then(function(){return e(n("ecb0"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/index/data",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-index-data",{slot:"page"})])}},meta:{name:"pages-index-data",isNVue:!1,pagePath:"pages/index/data",windowTop:0}},{path:"/pages/index/income_list",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-index-income_list",{slot:"page"})])}},meta:{name:"pages-index-income_list",isNVue:!1,pagePath:"pages/index/income_list",windowTop:0}},{path:"/pages/index/end_history",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-index-end_history",{slot:"page"})])}},meta:{name:"pages-index-end_history",isNVue:!1,pagePath:"pages/index/end_history",windowTop:0}},{path:"/pages/index/rule",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-index-rule",{slot:"page"})])}},meta:{name:"pages-index-rule",isNVue:!1,pagePath:"pages/index/rule",windowTop:0}},{path:"/pages/index/invest",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-index-invest",{slot:"page"})])}},meta:{name:"pages-index-invest",isNVue:!1,pagePath:"pages/index/invest",windowTop:0}},{path:"/pages/index/last_invest",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{titleNView:!1})},[e("pages-index-last_invest",{slot:"page"})])}},meta:{name:"pages-index-last_invest",isNVue:!1,pagePath:"pages/index/last_invest",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,n("c8ba"))},"7db6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{inputs:[{internalType:"address",name:"_parent",type:"address"},{internalType:"uint256",name:"_balance",type:"uint256"}],name:"bindParentAndBuyTicket",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"developer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getAddressInfo",outputs:[{internalType:"uint256",name:"_teamCount",type:"uint256"},{internalType:"uint256",name:"_sonCount",type:"uint256"},{internalType:"uint256",name:"_investBalance",type:"uint256"},{internalType:"uint256",name:"_lev",type:"uint256"},{internalType:"uint256",name:"_incomeBalance",type:"uint256"},{internalType:"uint256",name:"_withdrawBalance",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getAllowBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getAreaPerformance",outputs:[{internalType:"uint256",name:"_maxPerformance",type:"uint256"},{internalType:"uint256",name:"_minPerformance",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getEstimateReward",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getIncomeList",outputs:[{internalType:"uint256[50]",name:"",type:"uint256[50]"},{internalType:"uint256[50]",name:"",type:"uint256[50]"},{internalType:"uint256[50]",name:"",type:"uint256[50]"},{internalType:"address[50]",name:"",type:"address[50]"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getIncomePool",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"bool",name:"_flag",type:"bool"}],name:"getInvestList",outputs:[{internalType:"address[21]",name:"",type:"address[21]"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getLastInvestAddress",outputs:[{internalType:"address[50]",name:"",type:"address[50]"},{internalType:"uint256[50]",name:"",type:"uint256[50]"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getLastOpenLuckCodeList",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getLastPool",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getLastTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getLuckCodePool",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getLuckNum",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getMyReward",outputs:[{internalType:"uint256[9]",name:"",type:"uint256[9]"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getNow",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getParent",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"bool",name:"",type:"bool"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getPlayerLuckCode",outputs:[{internalType:"uint256[100]",name:"",type:"uint256[100]"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"uint256",name:"_num",type:"uint256"}],name:"getSystemLevNum",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"usdtAddress",type:"address"},{internalType:"address",name:"dbAddress",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"address",name:"toolAddress",type:"address"}],name:"init",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_balance",type:"uint256"}],name:"invest",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"openLastReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"openReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_num",type:"uint256"}],name:"playLuckCode",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_devAddress",type:"address"}],name:"setDevAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],i=a;t.default=i},8338:function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("6b54");var i=a(n("e143")),s=a(n("2f62"));i.default.use(s.default);var o=new s.default.Store({state:{tokenName:"-",tokenPrice:"0",tokenBalance:"0.00",usdtAllowBalance:"0.00",ownAddress:"",usdtBalance:"0.0000",isBindParent:!1,sonNum:0,teamNum:0,lev:0,incomeBalance:0,withdrawBalance:0,investBalance:0,parentAddress:"0x00",lastTime:"0",lastPool:0,areaInvest:{big:"-",small:"-"},sellBalance:"-",burnBalance:"-",rewardInfo:[0,0,0,0,0,0,0,0,0],rewardList:[],estimateReward:[0,0],myLuckCode:"-",luckCodeLayer:"-",luckCodePool:[0,0,0],lastLuckPool:[[],[],[]],dayInvest:[],historyInvest:[],lastPoolInvest:[],alertType:"info",alertMsg:"",alertTime:0,unConfirmHash:"",blockNumber:0,levNum:["-","-","-","-","-"],incomePool:["-","-","-","-"]},mutations:{alertMsg:function(e,t){e.alertType=t.type,e.alertMsg=t.msg,e.alertTime=t.time},setAlertTime:function(e,t){e.alertTime>0&&(e.alertTime-=t),e.alertTime<0&&(e.alertTime=0)},setUnConfirmHash:function(e,t){e.unConfirmHash=t},setBlockNumber:function(e,t){e.blockNumber=t},setTokenName:function(e,t){e.tokenName=t},setTokenPrice:function(e,t){e.tokenPrice=t},setUsdtAllowBalance:function(e,t){e.usdtAllowBalance=t},setTokenBalance:function(e,t){e.tokenBalance=t},setOwnAddress:function(e,t){e.ownAddress=t},setUsdtBalance:function(e,t){e.usdtBalance=t},setParentState:function(e,t){e.isBindParent=t},setParentAddress:function(e,t){e.parentAddress=t},setSonNum:function(e,t){e.sonNum=t},setTeamNum:function(e,t){e.teamNum=t},setLastTime:function(e,t){e.lastTime=t},setLastTimeAuto:function(e,t){e.lastTime-=t},setLastPool:function(e,t){e.lastPool=t},setUserLev:function(e,t){e.lev=t},setInvestBalance:function(e,t){e.investBalance=t},setIncomeBalance:function(e,t){e.incomeBalance=t},setWithdrawBalance:function(e,t){e.withdrawBalance=t},setAreaInvest:function(e,t){e.areaInvest.big=t.big,e.areaInvest.small=t.small},setSellBalance:function(e,t){e.sellBalance=t},setBurnBalance:function(e,t){e.burnBalance=t},setRewardInfo:function(e,t){e.rewardInfo=t},setRewardList:function(e,t){e.rewardList=t},setEstimateReward:function(e,t){e.estimateReward=t},setLuckCodeLayer:function(e,t){e.luckCodeLayer=t},setLuckCode:function(e,t){e.myLuckCode=t.toString()},setLuckCodePool0:function(e,t){e.luckCodePool[0]=t},setLuckCodePool1:function(e,t){e.luckCodePool[1]=t},setLuckCodePool2:function(e,t){e.luckCodePool[2]=t},setLastLuckPool:function(e,t){for(var n=[[],[],[]],a=0;a<t.length;a++){var i=t[a].toNumber();a<18?n[2].push(i):a<24?n[1].push(i):n[0].push(i)}0==n[2].length&&n[2].push("-"),0==n[1].length&&n[1].push("-"),0==n[0].length&&n[0].push("-"),e.lastLuckPool=n},setInvestDayList:function(e,t){e.dayInvest=t},setInvestHistoryList:function(e,t){e.historyInvest=t},setLastPoolInvest:function(e,t){e.lastPoolInvest=t},setSystemLevNum:function(e,t){e.levNum[t.lev]=t.num},setIncomePool:function(e,t){e.incomePool=t}},actions:{}}),u=o;t.default=u},8924:function(e,t,n){"use strict";n.r(t);var a=n("f5e5"),i=n("a73b");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n("b1dc");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},a73b:function(e,t,n){"use strict";n.r(t);var a=n("43ab"),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);t["default"]=i.a},b1dc:function(e,t,n){"use strict";var a=n("cdd9"),i=n.n(a);i.a},cdd9:function(e,t,n){var a=n("1ca0");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("57bacc1d",a,!0,{sourceMap:!1,shadowMode:!1})},e0d6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{inputs:[{internalType:"uint256",name:"initialSupply",type:"uint256"},{internalType:"string",name:"tokenName",type:"string"},{internalType:"string",name:"tokenSymbol",type:"string"}],stateMutability:"nonpayable",constant:!1,type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_owner",type:"address"},{indexed:!0,internalType:"address",name:"_spender",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"},{internalType:"bytes",name:"_extraData",type:"bytes"}],name:"approveAndCall",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"uint256",name:"_value",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[],name:"burnBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"burnFrom",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"}],name:"getToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"getTokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_dbAddress",type:"address"},{internalType:"address",name:"_coreAddress",type:"address"}],name:"init",outputs:[],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"sellBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"},{internalType:"uint256",name:"_balance",type:"uint256"}],name:"sendTokenToAddress",outputs:[],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"sendTokenToGame",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[{internalType:"address",name:"_own",type:"address"},{internalType:"uint256",name:"_balance",type:"uint256"}],name:"sendTokenToV4",outputs:[],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",constant:!0,type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",constant:!1,type:"function"},{inputs:[{internalType:"address payable",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",constant:!1,type:"function"}],i=a;t.default=i},e21c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={pages:{"pages/index/index":{titleNView:!1},"pages/index/data":{titleNView:!1},"pages/index/income_list":{titleNView:!1},"pages/index/end_history":{titleNView:!1},"pages/index/rule":{titleNView:!1},"pages/index/invest":{titleNView:!1},"pages/index/last_invest":{titleNView:!1}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"DataStorage",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};t.default=a},f028:function(e,t,n){"use strict";(function(e){var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i,s,o,u,r=a(n("3b8d")),p=a(n("4adf")),l=a(n("7db6")),d=a(n("e0d6")),c=a(n("8338")),y="0xdac17f958d2ee523a2206206994597c13d831ec7",m="0x3329451c89e8d4572a88da2f1dc2e6a84347d480",f="0xf194Eb7f3799de5A9019DDBc1ADF5DE1CB4D933F",g=!0,b={web3Init:function(){window.addEventListener("load",(0,r.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=11;break}return window.web3=new Web3(ethereum),t.prev=2,t.next=5,ethereum.enable();case 5:t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](2);case 9:t.next=12;break;case 11:window.web3?window.web3=new Web3(web3.currentProvider):e.log("Non-Ethereum browser detected. You should consider trying MetaMask!");case 12:case"end":return t.stop()}},t,this,[[2,7]])})))},encodeBigNum:function(e){return web3.fromWei(e).toNumber()},showHash:function(e){uni.hideLoading(),e&&c.default.commit("alertMsg",{type:"success",time:3,msg:e})},getNowBlockNumber:function(){var e=this;web3.eth.getBlockNumber(function(t,n){if(0==c.default.state.blockNumber)c.default.commit("setBlockNumber",n);else{if(!(c.default.state.blockNumber<n))return;c.default.commit("setBlockNumber",n),e.getData(),e.getOwnData()}})},getData:function(){this.getTokenName(),this.getTokenPrice(),this.getLastTime(),this.getLastPool(),this.getTokenSellNum(),this.getTokenBurnNum(),this.getLuckCodePool(),this.getLastInvestList(),this.getLuckNum(),this.getInvestList(),this.getIncomePool(),this.getSystemLevNum()},initContract:function(){i=web3.eth.contract(p.default).at(y),s=web3.eth.contract(l.default).at(m),o=web3.eth.contract(d.default).at(f),this.getOwnAddress()},getOwnData:function(){var e=u;this.getEmpowerBalance(e),this.getUsdtBalance(e),this.getTokenBalance(e),this.getParentAddress(e),this.getPlayerInfo(e),this.getAreaPerformance(e),this.getEstimate(e),this.getMyReward(e),this.getIncomeList(e),this.getPlayerLuckCode(e),this.getLastNumLuckCode(e)},getOwnAddress:function(){var e=this;web3.eth.getAccounts(function(t,n){if(!t){c.default.commit("setOwnAddress",web3.eth.coinbase);var a=web3.eth.coinbase;u=a,e.getOwnData()}})},setEmpower:function(e){var t=this;i.approve(m,e,function(e,n){t.showHash(n)})},getEmpowerBalance:function(e){s.getAllowBalance(e,function(e,t){e||c.default.commit("setUsdtAllowBalance",(t/1e6).toFixed(2))})},getUsdtBalance:function(e){i.balanceOf(e,function(e,t){e||c.default.commit("setUsdtBalance",(t.toNumber()/1e6).toFixed(2))})},getTokenName:function(){o.symbol(function(e,t){e||c.default.commit("setTokenName",t)})},getTokenPrice:function(){o.price(function(e,t){e||c.default.commit("setTokenPrice",t.toNumber())})},buyTokenAndBindParent:function(e,t){var n=this;s.bindParentAndBuyTicket(e,t,function(e,t){n.showHash(t)})},getTokenBalance:function(e){o.balanceOf(e,function(e,t){c.default.commit("setTokenBalance",web3.fromWei(t).toNumber().toFixed(4))})},play:function(e){var t=this;s.invest(e,function(e,n){e||t.showHash(n)})},getParentAddress:function(e){s.getParent(e,function(e,t){e||1==t[2]&&(c.default.commit("setParentState",!0),c.default.commit("setParentAddress",t[0]))})},getPlayerInfo:function(e){s.getAddressInfo(e,function(e,t){e||(c.default.commit("setTeamNum",t[0]),c.default.commit("setSonNum",t[1]),c.default.commit("setInvestBalance",t[2]/1e6),c.default.commit("setUserLev",t[3]),c.default.commit("setIncomeBalance",t[4]/1e6),c.default.commit("setWithdrawBalance",t[5]/1e6))})},getAreaPerformance:function(e){s.getAreaPerformance(e,function(e,t){e||c.default.commit("setAreaInvest",{big:t[0]/1e6,small:t[1]/1e6})})},getLastTime:function(){s.getLastTime(function(e,t){e||(c.default.commit("setLastTime",t.toNumber()),1==g&&(g=!1,setInterval(function(){c.default.commit("setLastTimeAuto",1)},1e3)))})},getLastPool:function(){s.getLastPool(function(e,t){e||c.default.commit("setLastPool",t/1e6)})},getEstimate:function(e){s.getEstimateReward(e,function(e,t){e||c.default.commit("setEstimateReward",[t[0]/1e6,t[1]/1e6])})},getTokenSellNum:function(){o.sellBalance(function(e,t){e||c.default.commit("setSellBalance",web3.fromWei(t).toNumber())})},getTokenBurnNum:function(){o.burnBalance(function(e,t){e||c.default.commit("setBurnBalance",web3.fromWei(t).toNumber())})},getMyReward:function(e){s.getMyReward(e,function(e,t){if(!e){for(var n=0;n<t.length;n++)t[n]=t[n]/1e6;c.default.commit("setRewardInfo",t)}})},getIncomeList:function(e){var t=this;s.getIncomeList(e,function(e,n){if(!e){for(var a=[],i=0;i<50;i++)if(!(n[0][i].toNumber()<=0)){var s={time:t.timestampToTime(n[1][i].toNumber()),type:n[0][i].toNumber(),balance:n[2][i].toNumber()/1e6,fromAddress:n[3][i].substr(0,6)+"***"+n[3][i].substr(36,42)};a.push(s)}c.default.commit("setRewardList",a)}})},timestampToTime:function(e){var t=new Date(1e3*e),n=t.getFullYear()+"-",a=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",i=t.getDate()+" ",s=t.getHours()+":",o=t.getMinutes();t.getSeconds();return n+a+i+s+o},getLuckCodePool:function(){s.getLuckCodePool(function(e,t){e||(c.default.commit("setLuckCodePool0",t[1]/1e6),c.default.commit("setLuckCodePool1",t[2]/1e6),c.default.commit("setLuckCodePool2",t[3]/1e6))})},getLuckNum:function(){s.getLuckNum(function(e,t){e||c.default.commit("setLuckCodeLayer",t)})},getLastInvestList:function(){var e=this;s.getLastInvestAddress(function(t,n){if(!t){for(var a=n[0],i=n[1],s=[],o=0;o<a.length;o++){if("0x0000000000000000000000000000000000000000"==a[o])break;s.push({address:a[o],time:e.timestampToTime(i[o].toNumber())})}c.default.commit("setLastPoolInvest",s)}})},createLuckCode:function(e){var t=this;s.playLuckCode(e,function(e,n){e||t.showHash(n)})},getPlayerLuckCode:function(e){s.getPlayerLuckCode(e,function(e,t){if(!e){for(var n=[],a=0;a<t.length;a++)0!=t[a].toNumber()&&n.push(t[a].toNumber());c.default.commit("setLuckCode",n)}})},getLastNumLuckCode:function(){s.getLastOpenLuckCodeList(function(e,t){e||c.default.commit("setLastLuckPool",t)})},getInvestList:function(){s.getInvestList(!0,function(e,t){e||c.default.commit("setInvestDayList",t)}),s.getInvestList(!1,function(e,t){e||c.default.commit("setInvestHistoryList",t)})},getIncomePool:function(){s.getIncomePool(function(e,t){if(!e){for(var n=[],a=0;a<4;a++)n.push(t[a].toNumber());c.default.commit("setIncomePool",n)}})},getSystemLevNum:function(){s.getSystemLevNum(1,function(e,t){e||c.default.commit("setSystemLevNum",{lev:1,num:t.toNumber()})}),s.getSystemLevNum(2,function(e,t){e||c.default.commit("setSystemLevNum",{lev:2,num:t.toNumber()})}),s.getSystemLevNum(3,function(e,t){e||c.default.commit("setSystemLevNum",{lev:3,num:t.toNumber()})}),s.getSystemLevNum(4,function(e,t){e||c.default.commit("setSystemLevNum",{lev:4,num:t.toNumber()})})},withdraw:function(){var e=this;s.withdraw(function(t,n){e.showHash(n)})}},v=b;t.default=v}).call(this,n("5a52")["default"])},f5e5:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},fe38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={appid:"__UNI__EA84F6F"};t.default=a}});