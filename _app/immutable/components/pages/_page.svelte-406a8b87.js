import{S as k,i as S,s as $,M as b,k as l,l as d,m as f,h as r,n as i,b as u,N as y,A as h,q as _,r as v,E as p,a as D,v as E,O as x,c as w,w as I,x as U,f as V,t as T,y as q}from"../../chunks/index-6227fe1d.js";function H(o){let e,n;return{c(){e=l("div"),n=_("Error loading")},l(t){e=d(t,"DIV",{});var a=f(e);n=v(a,"Error loading"),a.forEach(r)},m(t,a){u(t,e,a),p(e,n)},p:h,d(t){t&&r(e)}}}function A(o){let e,n,t=o[0]+"",a;return{c(){e=l("div"),n=_("Here goes the conversion rate of Sol (a crypto currency) to USD: "),a=_(t),this.h()},l(c){e=d(c,"DIV",{class:!0,id:!0});var s=f(e);n=v(s,"Here goes the conversion rate of Sol (a crypto currency) to USD: "),a=v(s,t),s.forEach(r),this.h()},h(){i(e,"class","heading4"),i(e,"id","sol-usd")},m(c,s){u(c,e,s),p(e,n),p(e,a)},p:h,d(c){c&&r(e)}}}function C(o){let e,n;return{c(){e=l("div"),n=_("Waiting..."),this.h()},l(t){e=d(t,"DIV",{class:!0,id:!0});var a=f(e);n=v(a,"Waiting..."),a.forEach(r),this.h()},h(){i(e,"class","heading4"),i(e,"id","sol-usd")},m(t,a){u(t,e,a),p(e,n)},p:h,d(t){t&&r(e)}}}function M(o){let e,n={ctx:o,current:null,token:null,hasCatch:!0,pending:C,then:A,catch:H,value:0,error:1};return b(o[0],n),{c(){e=l("div"),n.block.c(),this.h()},l(t){e=d(t,"DIV",{id:!0,class:!0});var a=f(e);n.block.l(a),a.forEach(r),this.h()},h(){i(e,"id","api-call"),i(e,"class","main-section")},m(t,a){u(t,e,a),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(t,[a]){o=t,y(n,o,a)},i:h,o:h,d(t){t&&r(e),n.block.d(),n.token=null,n=null}}}async function W(){return(await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")).json()).solana.usd}function j(o){return[W()]}class N extends k{constructor(e){super(),S(this,e,j,M,$,{})}}function O(o){let e,n,t,a,c;return a=new N({}),{c(){e=l("meta"),n=D(),t=l("div"),E(a.$$.fragment),this.h()},l(s){const m=x('[data-svelte="svelte-espk2l"]',document.head);e=d(m,"META",{name:!0,content:!0}),m.forEach(r),n=w(s),t=d(s,"DIV",{class:!0});var g=f(t);I(a.$$.fragment,g),g.forEach(r),this.h()},h(){document.title="Home",i(e,"name","description"),i(e,"content","Shahin"),i(t,"class","text-column")},m(s,m){p(document.head,e),u(s,n,m),u(s,t,m),U(a,t,null),c=!0},p:h,i(s){c||(V(a.$$.fragment,s),c=!0)},o(s){T(a.$$.fragment,s),c=!1},d(s){r(e),s&&r(n),s&&r(t),q(a)}}}class z extends k{constructor(e){super(),S(this,e,null,O,$,{})}}export{z as default};