(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,55698,t=>{"use strict";function e(){let t="cart-items",e=null,i=t=>({id:t.id,name:t.name,description:t.description,image_url:t.image_url,price_in_cents:t.price_in_cents});return{getCountItems:()=>{if(!(e=localStorage.getItem(t)))return 0;{let t=JSON.parse(e),i=0;return null!=t&&(i=t.length),i}},getTotalPrice:()=>{e=localStorage.getItem(t);let i=0;return e&&JSON.parse(e).map(t=>{i+=t.total_price}),i},getItems:()=>(e=localStorage.getItem(t))?JSON.parse(e):[{id:"",name:"",image_url:"",description:"",price_in_cents:100,quantity:1,total_price:100}],addItemToLocalStorage:s=>{if(e=localStorage.getItem(t)){let r=JSON.parse(e),n=-1;r.map((t,e)=>{t.id===s.id&&(n=e)}),n>-1?(r[n].quantity+=1,r[n].total_price+=r[n].price_in_cents):r.push({...i(s),quantity:1,total_price:s.price_in_cents}),localStorage.setItem(t,JSON.stringify(r)),e=localStorage.getItem(t)}else{let r=[{...i(s),quantity:1,total_price:s.price_in_cents}];localStorage.setItem(t,JSON.stringify(r)),e=localStorage.getItem(t)}},deleteItem:i=>{if(e=localStorage.getItem(t)){let s=JSON.parse(e),r=-1;s.map((t,e)=>{t.id===i&&(r=e)}),s.splice(r,1),localStorage.setItem(t,JSON.stringify(s))}},updateTheQuantity:(i,s)=>{if(e=localStorage.getItem(t)){let r=JSON.parse(e);r.map(t=>{t.id===s&&(t.quantity=i,t.total_price=t.price_in_cents*i)}),localStorage.setItem(t,JSON.stringify(r))}},completeThePurchase:()=>{localStorage.removeItem(t)}}}t.s(["useLocalStorage",()=>e])},34869,22546,t=>{"use strict";t.i(71228);var e={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},i=new class{#t=e;#e=!1;setTimeoutProvider(t){this.#t=t}setTimeout(t,e){return this.#t.setTimeout(t,e)}clearTimeout(t){this.#t.clearTimeout(t)}setInterval(t,e){return this.#t.setInterval(t,e)}clearInterval(t){this.#t.clearInterval(t)}};function s(t){setTimeout(t,0)}t.s(["systemSetTimeoutZero",()=>s,"timeoutManager",()=>i],22546);var r="undefined"==typeof window||"Deno"in globalThis;function n(){}function a(t,e){return"function"==typeof t?t(e):t}function o(t){return"number"==typeof t&&t>=0&&t!==1/0}function u(t,e){return Math.max(t+(e||0)-Date.now(),0)}function l(t,e){return"function"==typeof t?t(e):t}function h(t,e){return"function"==typeof t?t(e):t}function c(t,e){let{type:i="all",exact:s,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(a){if(s){if(e.queryHash!==p(a,e.options))return!1}else if(!y(e.queryKey,a))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function d(t,e){let{exact:i,status:s,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(i){if(f(e.options.mutationKey)!==f(n))return!1}else if(!y(e.options.mutationKey,n))return!1}return(!s||e.state.status===s)&&(!r||!!r(e))}function p(t,e){return(e?.queryKeyHashFn||f)(t)}function f(t){return JSON.stringify(t,(t,e)=>b(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function y(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&Object.keys(e).every(i=>y(t[i],e[i]))}var m=Object.prototype.hasOwnProperty;function g(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function b(t){if(!w(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!w(i)&&!!i.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(t)===Object.prototype}function w(t){return"[object Object]"===Object.prototype.toString.call(t)}function x(t){return new Promise(e=>{i.setTimeout(e,t)})}function S(t,e,i){return"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let s=v(e)&&v(i);if(!s&&!(b(e)&&b(i)))return i;let r=(s?e:Object.keys(e)).length,n=s?i:Object.keys(i),a=n.length,o=s?Array(a):{},u=0;for(let l=0;l<a;l++){let a=s?l:n[l],h=e[a],c=i[a];if(h===c){o[a]=h,(s?l<r:m.call(e,a))&&u++;continue}if(null===h||null===c||"object"!=typeof h||"object"!=typeof c){o[a]=c;continue}let d=t(h,c);o[a]=d,d===h&&u++}return r===a&&u===r?e:o}(t,e):e}function C(t,e,i=0){let s=[...t,e];return i&&s.length>i?s.slice(1):s}function O(t,e,i=0){let s=[e,...t];return i&&s.length>i?s.slice(0,-1):s}var T=Symbol();function q(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==T?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}function P(t,e){return"function"==typeof t?t(...e):!!t}t.s(["addToEnd",()=>C,"addToStart",()=>O,"ensureQueryFn",()=>q,"functionalUpdate",()=>a,"hashKey",()=>f,"hashQueryKeyByOptions",()=>p,"isServer",()=>r,"isValidTimeout",()=>o,"matchMutation",()=>d,"matchQuery",()=>c,"noop",()=>n,"partialMatchKey",()=>y,"replaceData",()=>S,"resolveEnabled",()=>h,"resolveStaleTime",()=>l,"shallowEqualObjects",()=>g,"shouldThrowError",()=>P,"skipToken",()=>T,"sleep",()=>x,"timeUntilStale",()=>u],34869)},42139,t=>{"use strict";let e,i,s,r,n,a;var o=t.i(22546).systemSetTimeoutZero,u=(e=[],i=0,s=t=>{t()},r=t=>{t()},n=o,{batch:t=>{let a;i++;try{a=t()}finally{let t;--i||(t=e,e=[],t.length&&n(()=>{r(()=>{t.forEach(t=>{s(t)})})}))}return a},batchCalls:t=>(...e)=>{a(()=>{t(...e)})},schedule:a=t=>{i?e.push(t):n(()=>{s(t)})},setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{r=t},setScheduler:t=>{n=t}});t.s(["notifyManager",()=>u])},92800,t=>{"use strict";var e=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};t.s(["Subscribable",()=>e])},7699,t=>{"use strict";var e=t.i(92800),i=t.i(34869),s=new class extends e.Subscribable{#i;#s;#r;constructor(){super(),this.#r=t=>{if(!i.isServer&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#s||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#s?.(),this.#s=void 0)}setEventListener(t){this.#r=t,this.#s?.(),this.#s=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#i!==t&&(this.#i=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#i?this.#i:globalThis.document?.visibilityState!=="hidden"}};t.s(["focusManager",()=>s])},60843,43712,12875,83939,94739,77354,t=>{"use strict";t.i(71228);var e=t.i(34869),i=t.i(42139),s=t.i(7699),r=t.i(92800),n=new class extends r.Subscribable{#n=!0;#s;#r;constructor(){super(),this.#r=t=>{if(!e.isServer&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#s||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#s?.(),this.#s=void 0)}setEventListener(t){this.#r=t,this.#s?.(),this.#s=t(this.setOnline.bind(this))}setOnline(t){this.#n!==t&&(this.#n=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#n}};function a(){let t,e,i=new Promise((i,s)=>{t=i,e=s});function s(t){Object.assign(i,t),delete i.resolve,delete i.reject}return i.status="pending",i.catch(()=>{}),i.resolve=e=>{s({status:"fulfilled",value:e}),t(e)},i.reject=t=>{s({status:"rejected",reason:t}),e(t)},i}function o(t){return Math.min(1e3*2**t,3e4)}function u(t){return(t??"online")!=="online"||n.isOnline()}t.s(["onlineManager",()=>n],43712),t.s(["pendingThenable",()=>a],12875);var l=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function h(t){let i,r=!1,h=0,c=a(),d=()=>s.focusManager.isFocused()&&("always"===t.networkMode||n.isOnline())&&t.canRun(),p=()=>u(t.networkMode)&&t.canRun(),f=t=>{"pending"===c.status&&(i?.(),c.resolve(t))},y=t=>{"pending"===c.status&&(i?.(),c.reject(t))},m=()=>new Promise(e=>{i=t=>{("pending"!==c.status||d())&&e(t)},t.onPause?.()}).then(()=>{i=void 0,"pending"===c.status&&t.onContinue?.()}),g=()=>{let i;if("pending"!==c.status)return;let s=0===h?t.initialPromise:void 0;try{i=s??t.fn()}catch(t){i=Promise.reject(t)}Promise.resolve(i).then(f).catch(i=>{if("pending"!==c.status)return;let s=t.retry??3*!e.isServer,n=t.retryDelay??o,a="function"==typeof n?n(h,i):n,u=!0===s||"number"==typeof s&&h<s||"function"==typeof s&&s(h,i);r||!u?y(i):(h++,t.onFail?.(h,i),(0,e.sleep)(a).then(()=>d()?void 0:m()).then(()=>{r?y(i):g()}))})};return{promise:c,status:()=>c.status,cancel:e=>{if("pending"===c.status){let i=new l(e);y(i),t.onCancel?.(i)}},continue:()=>(i?.(),c),cancelRetry:()=>{r=!0},continueRetry:()=>{r=!1},canStart:p,start:()=>(p()?g():m().then(g),c)}}t.s(["CancelledError",()=>l,"canFetch",()=>u,"createRetryer",()=>h],83939);var c=t.i(22546),d=class{#a;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,e.isValidTimeout)(this.gcTime)&&(this.#a=c.timeoutManager.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(e.isServer?1/0:3e5))}clearGcTimeout(){this.#a&&(c.timeoutManager.clearTimeout(this.#a),this.#a=void 0)}};t.s(["Removable",()=>d],94739);var p=class extends d{#o;#u;#l;#h;#c;#d;#p;constructor(t){super(),this.#p=!1,this.#d=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#h=t.client,this.#l=this.#h.getQueryCache(),this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#o=y(this.options),this.state=t.state??this.#o,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#c?.promise}setOptions(t){if(this.options={...this.#d,...t},this.updateGcTime(this.options.gcTime),this.state&&void 0===this.state.data){let t=y(this.options);void 0!==t.data&&(this.setData(t.data,{updatedAt:t.dataUpdatedAt,manual:!0}),this.#o=t)}}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#l.remove(this)}setData(t,i){let s=(0,e.replaceData)(this.state.data,t,this.options);return this.#f({data:s,type:"success",dataUpdatedAt:i?.updatedAt,manual:i?.manual}),s}setState(t,e){this.#f({type:"setState",state:t,setStateOptions:e})}cancel(t){let i=this.#c?.promise;return this.#c?.cancel(t),i?i.then(e.noop).catch(e.noop):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#o)}isActive(){return this.observers.some(t=>!1!==(0,e.resolveEnabled)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===e.skipToken||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0&&this.observers.some(t=>"static"===(0,e.resolveStaleTime)(t.options.staleTime,this))}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data||this.state.isInvalidated}isStaleByTime(t=0){return void 0===this.state.data||"static"!==t&&(!!this.state.isInvalidated||!(0,e.timeUntilStale)(this.state.dataUpdatedAt,t))}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#c?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#c?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#l.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#c&&(this.#p?this.#c.cancel({revert:!0}):this.#c.cancelRetry()),this.scheduleGc()),this.#l.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#f({type:"invalidate"})}async fetch(t,i){let s;if("idle"!==this.state.fetchStatus&&this.#c?.status()!=="rejected"){if(void 0!==this.state.data&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.#c)return this.#c.continueRetry(),this.#c.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let r=new AbortController,n=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#p=!0,r.signal)})},a=()=>{let t,s=(0,e.ensureQueryFn)(this.options,i),r=(n(t={client:this.#h,queryKey:this.queryKey,meta:this.meta}),t);return(this.#p=!1,this.options.persister)?this.options.persister(s,r,this):s(r)},o=(n(s={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:this.#h,state:this.state,fetchFn:a}),s);this.options.behavior?.onFetch(o,this),this.#u=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#f({type:"fetch",meta:o.fetchOptions?.meta}),this.#c=h({initialPromise:i?.initialPromise,fn:o.fetchFn,onCancel:t=>{t instanceof l&&t.revert&&this.setState({...this.#u,fetchStatus:"idle"}),r.abort()},onFail:(t,e)=>{this.#f({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#f({type:"pause"})},onContinue:()=>{this.#f({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0});try{let t=await this.#c.start();if(void 0===t)throw Error(`${this.queryHash} data is undefined`);return this.setData(t),this.#l.config.onSuccess?.(t,this),this.#l.config.onSettled?.(t,this.state.error,this),t}catch(t){if(t instanceof l){if(t.silent)return this.#c.promise;else if(t.revert){if(void 0===this.state.data)throw t;return this.state.data}}throw this.#f({type:"error",error:t}),this.#l.config.onError?.(t,this),this.#l.config.onSettled?.(this.state.data,t,this),t}finally{this.scheduleGc()}}#f(t){let e=e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...f(e.data,this.options),fetchMeta:t.meta??null};case"success":let i={...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#u=t.manual?i:void 0,i;case"error":let s=t.error;return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}};this.state=e(this.state),i.notifyManager.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#l.notify({query:this,type:"updated",action:t})})}};function f(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:u(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}function y(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}t.s(["Query",()=>p,"fetchState",()=>f],60843);var m=t.i(63410),g=t.i(63634),v=m.createContext(void 0),b=t=>{let e=m.useContext(v);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},w=({client:t,children:e})=>(m.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,g.jsx)(v.Provider,{value:t,children:e}));t.s(["QueryClientProvider",()=>w,"useQueryClient",()=>b],77354)},11520,17099,3345,t=>{"use strict";var e,i,s=t.i(63634),r=((e={})[e.NONE=0]="NONE",e[e.NEWS=1]="NEWS",e[e.HIGHEST_TO_LOWEST_PRICE=2]="HIGHEST_TO_LOWEST_PRICE",e[e.LOWEST_TO_HIGHEST_PRICE=3]="LOWEST_TO_HIGHEST_PRICE",e[e.BEST_SELLERS=4]="BEST_SELLERS",e);t.s(["FilterOrganizes",()=>r],17099);var n=((i={}).ALL="all",i.TSHIRTS="t-shirts",i.MUGS="mugs",i);t.s(["FilterTypes",()=>n],3345);var a=t.i(63410);let o=(0,a.createContext)({search:"",organize:r.NONE,page:0,type:n.ALL,numberOfPages:5,setSearch:t=>{},setOrganize:t=>{},setPage:t=>{},setType:t=>{},setNumberOfPages:t=>{}});function u({children:t}){let[e,i]=(0,a.useState)(""),[u,l]=(0,a.useState)(r.NONE),[h,c]=(0,a.useState)(0),[d,p]=(0,a.useState)(n.ALL),[f,y]=(0,a.useState)(5);return(0,s.jsx)(o.Provider,{value:{search:e,organize:u,page:h,type:d,numberOfPages:f,setSearch:i,setOrganize:l,setPage:c,setType:p,setNumberOfPages:y},children:t})}t.s(["FilterContext",0,o,"FilterContextProvider",()=>u],11520)},80441,t=>{"use strict";var e=t.i(11520),i=t.i(63410);function s(){return(0,i.useContext)(e.FilterContext)}t.s(["useFilter",()=>s])},24359,t=>{t.v({className:"saira_stencil_one_b2c13d2e-module__r8wd4G__className"})},16675,t=>{"use strict";var e=t.i(63634),i=t.i(45552),s=t.i(24359);let r={className:s.default.className,style:{fontFamily:"'Saira Stencil One', 'Saira Stencil One Fallback'",fontWeight:400,fontStyle:"normal"}};function n(){return(0,e.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("circle",{cx:"11.059",cy:"11.0586",r:"7.06194",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M20.0034 20.0033L16.0518 16.0517",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}null!=s.default.variable&&(r.variable=s.default.variable);var a=t.i(63410);function o(){return(0,e.jsxs)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",fill:"#737380",stroke:"#737380",children:[(0,e.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,e.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,e.jsx)("path",{fill:"#737380",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})})]})}var u=t.i(85440);let l=i.default.div.withConfig({displayName:"search-input__InputContainer",componentId:"sc-dae93d72-0"})`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);

        @media (max-width: 655px) {
            top: ${t=>t.visabled?"50%":""};
            right: ${t=>t.visabled?"40px":"4px"};
            transform: translateY(${t=>t.visabled?"-50%":""});

            background-color: ${t=>t.visabled?"#751e1e32":"transparent"};
            border-radius: 4px;
        }
    }

    input:focus, input:hover, &:has(svg:nth-of-type(1):hover) {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--text-dark);
        border-radius: 8px;
    }

    @media (max-width: 655px) {
        width: ${t=>t.visabled?"110%":"32px"};
        height: ${t=>t.visabled?"140%":"32px"};
        
        position: ${t=>t.visabled?"absolute":"relative"};
        left: ${t=>t.visabled?"50%":""};
        
        z-index: ${t=>t.visabled?"10":"0"};
        
        transform: translateX(${t=>t.visabled?"-50%":""});
        
        border-radius: 4px;

        background-color: ${t=>t.visabled?"white":"var(--bg-primary)"};
        
        display: flex;
        align-items: center;
        justify-content: center;

    }
`,h=i.default.input.withConfig({displayName:"search-input__SearchInput",componentId:"sc-dae93d72-1"})`
    width: 352px;
    border-radius: 8px;
    padding: 10px 55px 10px 16px;
    border: none;

    background-color: var(--bg-primary);

    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
    vertical-align: middle;
    color: var(--text-dark);

    @media (max-width: 655px) {
        visibility: ${t=>t.visabled?"visible":"hidden"};
    }

    @media (min-width: 441px) and (max-width: 665px) {
        padding: 10px 16px;
    }
`;function c(t){let i=(0,u.useRouter)(),[s,r]=(0,a.useState)(!1),c=()=>{r(t=>!t)},[d,p]=(0,a.useState)({width:0,height:0});return(0,a.useEffect)(()=>{function t(){p({width:window.innerWidth,height:window.innerHeight})}return s&&d.width>655&&c(),window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),(0,e.jsxs)(l,{visabled:s,onClick:()=>{s||c()},children:[(0,e.jsx)(h,{onChange:e=>{t.hangleChange(e.target.value)},...t,onKeyDown:()=>{i.push("/")},visabled:s}),d.width<=655&&!s&&(0,e.jsx)(n,{}),d.width<=655&&s&&(0,e.jsx)("div",{onClick:c,children:(0,e.jsx)(o,{})}),d.width>655&&(0,e.jsx)(n,{})]})}var d=t.i(55698);function p(){return(0,e.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}let f=i.default.div.withConfig({displayName:"cart-control__ContainerCart",componentId:"sc-26141861-0"})`
    position: relative;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;

    cursor: pointer;

    &:hover {
        background-color: var(--bg-primary);
    }
`,y=i.default.span.withConfig({displayName:"cart-control__CartCount",componentId:"sc-26141861-1"})`
    width: 17px;
    height: 17px;
    border-radius: 100%;

    background-color: var(--delete-color);
    color: white;

    position: absolute;
    right: -7px;
    top: 50%;

    font-family: inherit;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    line-height: 17px;

`;function m(){let{getCountItems:t}=(0,d.useLocalStorage)(),i=t(),s=(0,u.useRouter)();return(0,e.jsxs)(f,{onClick:()=>{s.push("/carrinho")},children:[(0,e.jsx)(p,{}),i>0&&(0,e.jsx)(y,{children:i})]})}var g=t.i(80441);let v=i.styled.header.withConfig({displayName:"header__TagHeader",componentId:"sc-62ba7754-0"})`
    position: fixed;
    width: 100vw;

    z-index: 10;

    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
    padding: 16px 8px;

    @media (max-width: 500px) {
        height: 56px;
    }
`,b=i.styled.div.withConfig({displayName:"header__ContainerHeader",componentId:"sc-62ba7754-1"})`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 1120px;

    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
      
        @media (max-width: 500px) {
            gap: 8px;
            margin-right: 4px;
        }
    }
    
    @media (max-width: 1120px) {
        width: 95vw;
    }

    
`,w=i.styled.a.withConfig({displayName:"header__Logo",componentId:"sc-62ba7754-2"})`
    color: var(--logo-color);
    font-size: 40px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;

    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 28px;
        margin-left: 4px;
    }
`;function x(){let{search:t,setSearch:i}=(0,g.useFilter)(),s=(0,u.useRouter)();return(0,e.jsx)(v,{children:(0,e.jsxs)(b,{children:[(0,e.jsx)(w,{className:r.className,onClick:()=>{s.refresh(),s.push("/")},children:"capputeeno"}),(0,e.jsxs)("div",{children:[(0,e.jsx)(c,{value:t,hangleChange:i,placeholder:" Procurando por algo específico? "}),(0,e.jsx)(m,{})]})]})})}t.s(["Header",()=>x],16675)},93140,t=>{"use strict";var e=t.i(63634),i=t.i(45552);let s=i.default.main.withConfig({displayName:"Main__TagMain",componentId:"sc-4e935c5e-0"})`
    background-color: var(--shapes-light);

    padding-top: 25px;

    margin-top: 80px;

    display: flex;
    justify-content: center;
    align-items: start;

    width: 100vw;
    min-height: 100vh;

    @media (max-width: 500px) {
            margin-top: 56px;
    }
`,r=i.default.div.withConfig({displayName:"Main__ContainerMain",componentId:"sc-4e935c5e-1"})`
    width: 1120px;

    @media (max-width: 1120px) {
        width: 95vw;
    }
`;function n({children:t}){return(0,e.jsx)(s,{children:(0,e.jsx)(r,{children:t})})}t.s(["Main",()=>n])},86719,t=>{"use strict";var e=t.i(63634),i=t.i(34869),s=t.i(60843),r=t.i(42139),n=t.i(92800),a=class extends n.Subscribable{constructor(t={}){super(),this.config=t,this.#y=new Map}#y;build(t,e,r){let n=e.queryKey,a=e.queryHash??(0,i.hashQueryKeyByOptions)(n,e),o=this.get(a);return o||(o=new s.Query({client:t,queryKey:n,queryHash:a,options:t.defaultQueryOptions(e),state:r,defaultOptions:t.getQueryDefaults(n)}),this.add(o)),o}add(t){this.#y.has(t.queryHash)||(this.#y.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#y.get(t.queryHash);e&&(t.destroy(),e===t&&this.#y.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){r.notifyManager.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#y.get(t)}getAll(){return[...this.#y.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i.matchQuery)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,i.matchQuery)(t,e)):e}notify(t){r.notifyManager.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){r.notifyManager.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){r.notifyManager.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},o=t.i(94739),u=t.i(83939),l=class extends o.Removable{#h;#m;#g;#c;constructor(t){super(),this.#h=t.client,this.mutationId=t.mutationId,this.#g=t.mutationCache,this.#m=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#m.includes(t)||(this.#m.push(t),this.clearGcTimeout(),this.#g.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#m=this.#m.filter(e=>e!==t),this.scheduleGc(),this.#g.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#m.length||("pending"===this.state.status?this.scheduleGc():this.#g.remove(this))}continue(){return this.#c?.continue()??this.execute(this.state.variables)}async execute(t){let e=()=>{this.#f({type:"continue"})},i={client:this.#h,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#c=(0,u.createRetryer)({fn:()=>this.options.mutationFn?this.options.mutationFn(t,i):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#f({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#f({type:"pause"})},onContinue:e,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#g.canRun(this)});let s="pending"===this.state.status,r=!this.#c.canStart();try{if(s)e();else{this.#f({type:"pending",variables:t,isPaused:r}),await this.#g.config.onMutate?.(t,this,i);let e=await this.options.onMutate?.(t,i);e!==this.state.context&&this.#f({type:"pending",context:e,variables:t,isPaused:r})}let n=await this.#c.start();return await this.#g.config.onSuccess?.(n,t,this.state.context,this,i),await this.options.onSuccess?.(n,t,this.state.context,i),await this.#g.config.onSettled?.(n,null,this.state.variables,this.state.context,this,i),await this.options.onSettled?.(n,null,t,this.state.context,i),this.#f({type:"success",data:n}),n}catch(e){try{throw await this.#g.config.onError?.(e,t,this.state.context,this,i),await this.options.onError?.(e,t,this.state.context,i),await this.#g.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this,i),await this.options.onSettled?.(void 0,e,t,this.state.context,i),e}finally{this.#f({type:"error",error:e})}}finally{this.#g.runNext(this)}}#f(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),r.notifyManager.batch(()=>{this.#m.forEach(e=>{e.onMutationUpdate(t)}),this.#g.notify({mutation:this,type:"updated",action:t})})}},h=n,c=class extends h.Subscribable{constructor(t={}){super(),this.config=t,this.#v=new Set,this.#b=new Map,this.#w=0}#v;#b;#w;build(t,e,i){let s=new l({client:t,mutationCache:this,mutationId:++this.#w,options:t.defaultMutationOptions(e),state:i});return this.add(s),s}add(t){this.#v.add(t);let e=d(t);if("string"==typeof e){let i=this.#b.get(e);i?i.push(t):this.#b.set(e,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#v.delete(t)){let e=d(t);if("string"==typeof e){let i=this.#b.get(e);if(i)if(i.length>1){let e=i.indexOf(t);-1!==e&&i.splice(e,1)}else i[0]===t&&this.#b.delete(e)}}this.notify({type:"removed",mutation:t})}canRun(t){let e=d(t);if("string"!=typeof e)return!0;{let i=this.#b.get(e),s=i?.find(t=>"pending"===t.state.status);return!s||s===t}}runNext(t){let e=d(t);if("string"!=typeof e)return Promise.resolve();{let i=this.#b.get(e)?.find(e=>e!==t&&e.state.isPaused);return i?.continue()??Promise.resolve()}}clear(){r.notifyManager.batch(()=>{this.#v.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#v.clear(),this.#b.clear()})}getAll(){return Array.from(this.#v)}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i.matchMutation)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,i.matchMutation)(t,e))}notify(t){r.notifyManager.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return r.notifyManager.batch(()=>Promise.all(t.map(t=>t.continue().catch(i.noop))))}};function d(t){return t.options.scope?.id}var p=t.i(7699),f=t.i(43712);function y(t){return{onFetch:(e,s)=>{let r=e.options,n=e.fetchOptions?.meta?.fetchMore?.direction,a=e.state.data?.pages||[],o=e.state.data?.pageParams||[],u={pages:[],pageParams:[]},l=0,h=async()=>{let s=!1,h=(0,i.ensureQueryFn)(e.options,e.fetchOptions),c=async(t,r,n)=>{let a;if(s)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let o=(Object.defineProperty(a={client:e.client,queryKey:e.queryKey,pageParam:r,direction:n?"backward":"forward",meta:e.options.meta},"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)}),a),u=await h(o),{maxPages:l}=e.options,c=n?i.addToStart:i.addToEnd;return{pages:c(t.pages,u,l),pageParams:c(t.pageParams,r,l)}};if(n&&a.length){let t="backward"===n,e={pages:a,pageParams:o},i=(t?function(t,{pages:e,pageParams:i}){return e.length>0?t.getPreviousPageParam?.(e[0],e,i[0],i):void 0}:m)(r,e);u=await c(e,i,t)}else{let e=t??a.length;do{let t=0===l?o[0]??r.initialPageParam:m(r,u);if(l>0&&null==t)break;u=await c(u,t),l++}while(l<e)}return u};e.options.persister?e.fetchFn=()=>e.options.persister?.(h,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=h}}}function m(t,{pages:e,pageParams:i}){let s=e.length-1;return e.length>0?t.getNextPageParam(e[s],e,i[s],i):void 0}var g=class{#x;#g;#d;#S;#C;#O;#T;#q;constructor(t={}){this.#x=t.queryCache||new a,this.#g=t.mutationCache||new c,this.#d=t.defaultOptions||{},this.#S=new Map,this.#C=new Map,this.#O=0}mount(){this.#O++,1===this.#O&&(this.#T=p.focusManager.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#x.onFocus())}),this.#q=f.onlineManager.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#x.onOnline())}))}unmount(){this.#O--,0===this.#O&&(this.#T?.(),this.#T=void 0,this.#q?.(),this.#q=void 0)}isFetching(t){return this.#x.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#g.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#x.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.defaultQueryOptions(t),s=this.#x.build(this,e),r=s.state.data;return void 0===r?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime((0,i.resolveStaleTime)(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(t){return this.#x.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let r=this.defaultQueryOptions({queryKey:t}),n=this.#x.get(r.queryHash),a=n?.state.data,o=(0,i.functionalUpdate)(e,a);if(void 0!==o)return this.#x.build(this,r).setData(o,{...s,manual:!0})}setQueriesData(t,e,i){return r.notifyManager.batch(()=>this.#x.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#x.get(e.queryHash)?.state}removeQueries(t){let e=this.#x;r.notifyManager.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let i=this.#x;return r.notifyManager.batch(()=>(i.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){let s={revert:!0,...e};return Promise.all(r.notifyManager.batch(()=>this.#x.findAll(t).map(t=>t.cancel(s)))).then(i.noop).catch(i.noop)}invalidateQueries(t,e={}){return r.notifyManager.batch(()=>(this.#x.findAll(t).forEach(t=>{t.invalidate()}),t?.refetchType==="none")?Promise.resolve():this.refetchQueries({...t,type:t?.refetchType??t?.type??"active"},e))}refetchQueries(t,e={}){let s={...e,cancelRefetch:e.cancelRefetch??!0};return Promise.all(r.notifyManager.batch(()=>this.#x.findAll(t).filter(t=>!t.isDisabled()&&!t.isStatic()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(i.noop)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(i.noop)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#x.build(this,e);return s.isStaleByTime((0,i.resolveStaleTime)(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(i.noop).catch(i.noop)}fetchInfiniteQuery(t){return t.behavior=y(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(i.noop).catch(i.noop)}ensureInfiniteQueryData(t){return t.behavior=y(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return f.onlineManager.isOnline()?this.#g.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#x}getMutationCache(){return this.#g}getDefaultOptions(){return this.#d}setDefaultOptions(t){this.#d=t}setQueryDefaults(t,e){this.#S.set((0,i.hashKey)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#S.values()],s={};return e.forEach(e=>{(0,i.partialMatchKey)(t,e.queryKey)&&Object.assign(s,e.defaultOptions)}),s}setMutationDefaults(t,e){this.#C.set((0,i.hashKey)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#C.values()],s={};return e.forEach(e=>{(0,i.partialMatchKey)(t,e.mutationKey)&&Object.assign(s,e.defaultOptions)}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#d.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,i.hashQueryKeyByOptions)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===i.skipToken&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#d.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#x.clear(),this.#g.clear()}},v=t.i(77354);function b({children:t}){let i=new g;return(0,e.jsx)(v.QueryClientProvider,{client:i,children:t})}t.s(["ClientWrapper",()=>b],86719)}]);