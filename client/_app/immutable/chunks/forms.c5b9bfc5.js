import{d as D,t as O,S as B,i as I,c as ct,a as ut,m as dt,e as ft,h as q}from"./index.1fa04a18.js";import{D as X,s as M,U as C,V as S,H as Q,W as x,b as E,u as tt,f as p,X as H,i as P,n as A,Y as T,v as Y,l as ht,h as _,j as et,I as mt,Z as nt,e as R,c as V,_ as st,$ as at,a0 as it,q as ot,a1 as lt,m as $,a2 as _t,a3 as W,F as gt}from"./scheduler.953cfe2b.js";import{j as z,w as pt,k as wt}from"./singletons.c7a65059.js";import{p as vt}from"./stores.920431b6.js";import{p as bt}from"./parse.bee59afc.js";function zt(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Gt(n,t){D(n,1,1,()=>{t.delete(n.key)})}function jt(n,t,a,o,s,e,i,l,u,d,c,g){let m=n.length,r=e.length,w=m;const L={};for(;w--;)L[n[w].key]=w;const y=[],k=new Map,f=new Map,G=[];for(w=r;w--;){const h=g(s,e,w),v=a(h);let b=i.get(v);b?o&&G.push(()=>b.p(h,t)):(b=d(v,h),b.c()),k.set(v,y[w]=b),v in L&&f.set(v,Math.abs(w-L[v]))}const j=new Set,F=new Set;function U(h){O(h,1),h.m(l,c),i.set(h.key,h),c=h.first,r--}for(;m&&r;){const h=y[r-1],v=n[m-1],b=h.key,N=v.key;h===v?(c=h.first,m--,r--):k.has(N)?!i.has(b)||j.has(b)?U(h):F.has(N)?m--:f.get(b)>f.get(N)?(F.add(b),U(h)):(j.add(N),m--):(u(v,i),m--)}for(;m--;){const h=n[m];k.has(h.key)||u(h,i)}for(;r;)U(y[r-1]);return X(G),y}function rt(n,t){const a={},o={},s={$$scope:1};let e=n.length;for(;e--;){const i=n[e],l=t[e];if(l){for(const u in i)u in l||(o[u]=1);for(const u in l)s[u]||(a[u]=l[u],s[u]=1);n[e]=l}else for(const u in i)s[u]=1}for(const i in o)i in a||(a[i]=void 0);return a}const Ft=z("goto"),qt=z("invalidate"),yt=z("invalidate_all"),Yt="",Wt=`[
    {
    "title": "HydraGPT is the new GPT",
    "linkTitle": "Visit Our Website",
    "linkHref": "https://hydragpt.io"
  }
]`,Zt="HydraGPT",Jt="chatui",Kt="",Xt="",Qt="0.6.0",te={default:"Oops, something went wrong.",authOnly:"You have to be logged in.",rateLimited:"You are sending too many messages. Try again later."},ee=pt(null);function Et(n){let t,a,o='<path fill="currentColor" d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586L17.414 16z"/>',s=[{viewBox:"0 0 32 32"},{width:"1.2em"},{height:"1.2em"},n[0]],e={};for(let i=0;i<s.length;i+=1)e=C(e,s[i]);return{c(){t=S("svg"),a=new Q(!0),this.h()},l(i){t=x(i,"svg",{viewBox:!0,width:!0,height:!0});var l=E(t);a=tt(l,!0),l.forEach(p),this.h()},h(){a.a=null,H(t,e)},m(i,l){P(i,t,l),a.m(o,t)},p(i,[l]){H(t,e=rt(s,[{viewBox:"0 0 32 32"},{width:"1.2em"},{height:"1.2em"},l&1&&i[0]]))},i:A,o:A,d(i){i&&p(t)}}}function Lt(n,t,a){return n.$$set=o=>{a(0,t=C(C({},t),T(o)))},t=T(t),[t]}class ne extends B{constructor(t){super(),I(this,t,Lt,Et,M,{})}}function kt(n){let t,a;return{c(){t=S("svg"),a=S("path"),this.h()},l(o){t=x(o,"svg",{height:!0,width:!0,viewBox:!0,xmlns:!0,class:!0});var s=E(t);a=x(s,"path",{d:!0,class:!0}),E(a).forEach(p),s.forEach(p),this.h()},h(){_(a,"d","M4.06151 14.1464C4.06151 11.8818 4.9611 9.71004 6.56237 8.10877C8.16364 6.5075 10.3354 5.60791 12.6 5.60791H16.5231C18.6254 5.60791 20.6416 6.44307 22.1282 7.92965C23.6148 9.41624 24.45 11.4325 24.45 13.5348C24.45 15.6372 23.6148 17.6534 22.1282 19.14C20.6416 20.6266 18.6254 21.4618 16.5231 21.4618H7.08459L4.63844 23.8387C4.59547 23.8942 4.53557 23.9343 4.4678 23.9527C4.40004 23.9712 4.32811 23.9671 4.2629 23.941C4.1977 23.9149 4.14276 23.8683 4.10643 23.8082C4.07009 23.7481 4.05432 23.6778 4.06151 23.6079V14.1464Z"),_(a,"class","fill-primary-500"),_(t,"height","30"),_(t,"width","30"),_(t,"viewBox","0 0 30 30"),_(t,"xmlns","http://www.w3.org/2000/svg"),_(t,"class",n[0])},m(o,s){P(o,t,s),et(t,a)},p(o,s){s&1&&_(t,"class",o[0])},d(o){o&&p(t)}}}function Ct(n){let t;function a(e,i){return kt}let s=a()(n);return{c(){s.c(),t=Y()},l(e){s.l(e),t=Y()},m(e,i){s.m(e,i),P(e,t,i)},p(e,[i]){s.p(e,i)},i:A,o:A,d(e){e&&p(t),s.d(e)}}}function At(n,t,a){let o;ht(n,vt,e=>a(1,o=e));let{classNames:s=""}=t;return n.$$set=e=>{"classNames"in e&&a(0,s=e.classNames)},[s,o]}class se extends B{constructor(t){super(),I(this,t,At,Ct,M,{classNames:0})}}function Pt(n){let t,a,o='<path fill="currentColor" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"/>',s=[{viewBox:"0 0 32 32"},{width:"1.2em"},{height:"1.2em"},n[0]],e={};for(let i=0;i<s.length;i+=1)e=C(e,s[i]);return{c(){t=S("svg"),a=new Q(!0),this.h()},l(i){t=x(i,"svg",{viewBox:!0,width:!0,height:!0});var l=E(t);a=tt(l,!0),l.forEach(p),this.h()},h(){a.a=null,H(t,e)},m(i,l){P(i,t,l),a.m(o,t)},p(i,[l]){H(t,e=rt(s,[{viewBox:"0 0 32 32"},{width:"1.2em"},{height:"1.2em"},l&1&&i[0]]))},i:A,o:A,d(i){i&&p(t)}}}function Bt(n,t,a){return n.$$set=o=>{a(0,t=C(C({},t),T(o)))},t=T(t),[t]}class ae extends B{constructor(t){super(),I(this,t,Bt,Pt,M,{})}}function Z(n){const t=n-1;return t*t*t+1}function J(n,{delay:t=0,duration:a=400,easing:o=mt}={}){const s=+getComputedStyle(n).opacity;return{delay:t,duration:a,easing:o,css:e=>`opacity: ${e*s}`}}function It(n){let t,a;const o=n[2].default,s=nt(o,n,n[1],null);return{c(){t=R("div"),s&&s.c(),this.h()},l(e){t=V(e,"DIV",{class:!0});var i=E(t);s&&s.l(i),i.forEach(p),this.h()},h(){_(t,"class","contents"),t.hidden=!0},m(e,i){P(e,t,i),s&&s.m(t,null),n[3](t),a=!0},p(e,[i]){s&&s.p&&(!a||i&2)&&st(s,o,e,e[1],a?it(o,e[1],i,null):at(e[1]),null)},i(e){a||(O(s,e),a=!0)},o(e){D(s,e),a=!1},d(e){e&&p(t),s&&s.d(e),n[3](null)}}}function Mt(n,t,a){let{$$slots:o={},$$scope:s}=t,e;ot(()=>{e.ownerDocument.body.appendChild(e)}),lt(()=>{e!=null&&e.parentNode&&e.parentNode.removeChild(e)});function i(l){$[l?"unshift":"push"](()=>{e=l,a(0,e)})}return n.$$set=l=>{"$$scope"in l&&a(1,s=l.$$scope)},[e,s,o,i]}class Nt extends B{constructor(t){super(),I(this,t,Mt,It,M,{})}}function St(n){let t,a,o,s,e,i,l;const u=n[5].default,d=nt(u,n,n[8],null);return{c(){t=R("div"),a=R("div"),d&&d.c(),this.h()},l(c){t=V(c,"DIV",{role:!0,tabindex:!0,class:!0});var g=E(t);a=V(g,"DIV",{role:!0,tabindex:!0,class:!0});var m=E(a);d&&d.l(m),m.forEach(p),g.forEach(p),this.h()},h(){_(a,"role","dialog"),_(a,"tabindex","-1"),_(a,"class",o="max-h-[90dvh] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl outline-none sm:-mt-10 "+n[0]),_(t,"role","presentation"),_(t,"tabindex","-1"),_(t,"class","fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-8 backdrop-blur-sm dark:bg-black/50")},m(c,g){P(c,t,g),et(t,a),d&&d.m(a,null),n[6](a),n[7](t),e=!0,i||(l=[W(a,"keydown",n[3]),W(t,"click",n[4])],i=!0)},p(c,g){d&&d.p&&(!e||g&256)&&st(d,u,c,c[8],e?it(u,c[8],g,null):at(c[8]),null),(!e||g&1&&o!==(o="max-h-[90dvh] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl outline-none sm:-mt-10 "+c[0]))&&_(a,"class",o)},i(c){e||(O(d,c),gt(()=>{e&&(s||(s=q(t,J,{easing:Z,duration:300},!0)),s.run(1))}),e=!0)},o(c){D(d,c),s||(s=q(t,J,{easing:Z,duration:300},!1)),s.run(0),e=!1},d(c){c&&p(t),d&&d.d(c),n[6](null),n[7](null),c&&s&&s.end(),i=!1,X(l)}}}function xt(n){let t,a;return t=new Nt({props:{$$slots:{default:[St]},$$scope:{ctx:n}}}),{c(){ct(t.$$.fragment)},l(o){ut(t.$$.fragment,o)},m(o,s){dt(t,o,s),a=!0},p(o,[s]){const e={};s&263&&(e.$$scope={dirty:s,ctx:o}),t.$set(e)},i(o){a||(O(t.$$.fragment,o),a=!0)},o(o){D(t.$$.fragment,o),a=!1},d(o){ft(t,o)}}}function Ht(n,t,a){let{$$slots:o={},$$scope:s}=t,{width:e="max-w-sm"}=t,i,l;const u=_t();function d(r){r.key==="Escape"&&(r.preventDefault(),u("close"))}function c(r){r.target===i&&u("close")}ot(()=>{var r;(r=document.getElementById("app"))==null||r.setAttribute("inert","true"),l.focus()}),lt(()=>{var r;document.querySelectorAll('[role="dialog"]:not(#app *)').length===1&&((r=document.getElementById("app"))==null||r.removeAttribute("inert"))});function g(r){$[r?"unshift":"push"](()=>{l=r,a(2,l)})}function m(r){$[r?"unshift":"push"](()=>{i=r,a(1,i)})}return n.$$set=r=>{"width"in r&&a(0,e=r.width),"$$scope"in r&&a(8,s=r.$$scope)},[e,i,l,d,c,o,g,m,s]}class ie extends B{constructor(t){super(),I(this,t,Ht,xt,M,{width:0})}}function Tt(n){return wt.apply_action(n)}function Dt(n){const t=JSON.parse(n);return t.data&&(t.data=bt(t.data)),t}function K(n){return HTMLElement.prototype.cloneNode.call(n)}function oe(n,t=()=>{}){const a=async({action:s,result:e,reset:i=!0,invalidateAll:l=!0})=>{e.type==="success"&&(i&&HTMLFormElement.prototype.reset.call(n),l&&await yt()),(location.origin+location.pathname===s.origin+s.pathname||e.type==="redirect"||e.type==="error")&&Tt(e)};async function o(s){var w,L,y,k;if(((w=s.submitter)!=null&&w.hasAttribute("formmethod")?s.submitter.formMethod:K(n).method)!=="post")return;s.preventDefault();const i=new URL((L=s.submitter)!=null&&L.hasAttribute("formaction")?s.submitter.formAction:K(n).action),l=new FormData(n),u=(y=s.submitter)==null?void 0:y.getAttribute("name");u&&l.append(u,((k=s.submitter)==null?void 0:k.getAttribute("value"))??"");const d=new AbortController;let c=!1;const m=await t({action:i,cancel:()=>c=!0,controller:d,get data(){return l},formData:l,get form(){return n},formElement:n,submitter:s.submitter})??a;if(c)return;let r;try{const f=await fetch(i,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:l,signal:d.signal});r=Dt(await f.text()),r.type==="error"&&(r.status=f.status)}catch(f){if((f==null?void 0:f.name)==="AbortError")return;r={type:"error",error:f}}m({action:i,get data(){return l},formData:l,get form(){return n},formElement:n,update:f=>a({action:i,result:r,reset:f==null?void 0:f.reset,invalidateAll:f==null?void 0:f.invalidateAll}),result:r})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",o),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",o)}}}export{ne as C,te as E,se as L,ie as M,Zt as P,rt as a,ae as b,zt as c,Yt as d,ee as e,J as f,Ft as g,oe as h,qt as i,Xt as j,Jt as k,Qt as l,Wt as m,Kt as n,Gt as o,jt as u};
