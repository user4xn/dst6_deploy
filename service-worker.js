if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const u=e=>n(e,l),c={module:{uri:l},exports:o,require:u};s[l]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(i(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"panel_surya"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/349.f0a3084e.css",revision:null},{url:"/css/app.e40134df.css",revision:null},{url:"/css/chunk-vendors.681c9ea3.css",revision:null},{url:"/img/logo_sar.054a45f5.png",revision:null},{url:"/index.html",revision:"e8b2b6330e27632af7ab0314b735118d"},{url:"/js/131.4efc42ba.js",revision:null},{url:"/js/349.606341da.js",revision:null},{url:"/js/app.eb393220.js",revision:null},{url:"/js/chunk-vendors.c8a2c735.js",revision:null},{url:"/manifest.json",revision:"fa2212fb64ea86d96dd15cc74536cf68"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
