import{r as me,s as K,n as L,e as de}from"../chunks/scheduler.e108d1fd.js";import{d as J,S as Y,i as x,g as b,s as S,h as g,j as C,B as V,c as j,f as $,k as c,a as H,x as h,z as G,C as ce,m as Q,n as W,o as ue,r as Z,u as ee,v as te,t as le,w as se}from"../chunks/index.47f5ee31.js";import{w as ve,b as he}from"../chunks/paths.eb738b2f.js";function ae(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function pe(a,e){a.d(1),e.delete(a.key)}function _e(a,e,t,n,i,l,u,d,v,r,s,w){let f=a.length,y=l.length,k=f;const F={};for(;k--;)F[a[k].key]=k;const o=[],m=new Map,_=new Map,M=[];for(k=y;k--;){const p=w(i,l,k),E=t(p);let I=u.get(E);I?n&&M.push(()=>I.p(p,e)):(I=r(E,p),I.c()),m.set(E,o[k]=I),E in F&&_.set(E,Math.abs(k-F[E]))}const R=new Set,A=new Set;function T(p){J(p,1),p.m(d,s),u.set(p.key,p),s=p.first,y--}for(;f&&y;){const p=o[y-1],E=a[f-1],I=p.key,D=E.key;p===E?(s=p.first,f--,y--):m.has(D)?!u.has(I)||R.has(I)?T(p):A.has(D)?f--:_.get(I)>_.get(D)?(A.add(I),T(p)):(R.add(D),f--):(v(E,u),f--)}for(;f--;){const p=a[f];m.has(p.key)||v(p,u)}for(;y;)T(o[y-1]);return me(M),o}function z(a,e){const t=a.get(e);if(typeof t=="string")return t;throw Error(`Expected string for \`${e}\` in form data.`)}function ne(a){return`yuhchen.github.io/meprpa::${a}`}function fe(a=localStorage){return{getItem:e=>a.getItem(ne(e)),setItem:(e,t)=>{a.setItem(ne(e),t)}}}const U=(()=>{const a=JSON.parse(fe().getItem("recipeBooks")??"[]"),{subscribe:e,set:t,update:n}=ve(a);return{subscribe:e,push:i=>n(l=>{const{id:u}=i;if(l.some(d=>d.id===u))throw new Error(`Recipe book with id \`${u}\` already exists.`);return[...l,i]}),remove:i=>n(l=>{const u=l.findIndex(d=>d.id===i);return u>-1&&l.splice(u,1),l}),reset:()=>t([])}})();U.subscribe(a=>fe().setItem("recipeBooks",JSON.stringify(a)));function re(a){let e,t;return{c(){e=b("p"),t=Q(a[0]),this.h()},l(n){e=g(n,"P",{class:!0});var i=C(e);t=W(i,a[0]),i.forEach($),this.h()},h(){c(e,"class","error svelte-1wmrbjm")},m(n,i){H(n,e,i),h(e,t)},p(n,i){i&1&&ue(t,n[0])},d(n){n&&$(e)}}}function be(a){let e,t,n="Add a recipe book",i,l,u=`<label class="svelte-1wmrbjm">Spreadsheet ID:
      <input name="id" required="" class="svelte-1wmrbjm"/></label> <label class="svelte-1wmrbjm">Name:
      <input name="name" class="svelte-1wmrbjm"/></label> <button class="svelte-1wmrbjm">Add recipe book</button>`,d,v,r,s=a[0]&&re(a);return{c(){e=b("div"),t=b("h2"),t.textContent=n,i=S(),l=b("form"),l.innerHTML=u,d=S(),s&&s.c(),this.h()},l(w){e=g(w,"DIV",{class:!0});var f=C(e);t=g(f,"H2",{"data-svelte-h":!0}),V(t)!=="svelte-1qehulj"&&(t.textContent=n),i=j(f),l=g(f,"FORM",{"aria-label":!0,class:!0,"data-svelte-h":!0}),V(l)!=="svelte-cqbll8"&&(l.innerHTML=u),d=j(f),s&&s.l(f),f.forEach($),this.h()},h(){c(l,"aria-label","Form to add a recipe book"),c(l,"class","svelte-1wmrbjm"),c(e,"class","svelte-1wmrbjm")},m(w,f){H(w,e,f),h(e,t),h(e,i),h(e,l),h(e,d),s&&s.m(e,null),v||(r=G(l,"submit",ce(a[1])),v=!0)},p(w,[f]){w[0]?s?s.p(w,f):(s=re(w),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:L,o:L,d(w){w&&$(e),s&&s.d(),v=!1,r()}}}function ge(a,e,t){let n;function i(l){t(0,n=void 0);const u=new FormData(l.target),d=z(u,"id"),v={id:d,name:z(u,"name")||d};try{U.push(v)}catch(r){r instanceof Error&&t(0,n=r.message)}}return[n,i]}class we extends Y{constructor(e){super(),x(this,e,ge,be,K,{})}}function oe(a,e,t){const n=a.slice();return n[2]=e[t],n}function ie(a,e){let t,n,i,l=e[2].name+"",u,d,v,r,s,w,f,y,k,F,o,m,_,M,R,A,T,p,E,I,D;return{key:a,first:null,c(){t=b("li"),n=b("div"),i=b("span"),u=Q(l),d=S(),v=b("form"),r=b("input"),w=S(),f=b("button"),F=S(),o=b("form"),m=b("input"),M=S(),R=b("button"),p=S(),this.h()},l(N){t=g(N,"LI",{"aria-label":!0,class:!0});var B=C(t);n=g(B,"DIV",{class:!0});var O=C(n);i=g(O,"SPAN",{class:!0});var X=C(i);u=W(X,l),X.forEach($),d=j(O),v=g(O,"FORM",{action:!0,"aria-label":!0,class:!0});var P=C(v);r=g(P,"INPUT",{type:!0,name:!0,class:!0}),w=j(P),f=g(P,"BUTTON",{class:!0,"aria-label":!0}),C(f).forEach($),P.forEach($),F=j(O),o=g(O,"FORM",{"aria-label":!0,class:!0});var q=C(o);m=g(q,"INPUT",{type:!0,name:!0,class:!0}),M=j(q),R=g(q,"BUTTON",{class:!0,"aria-label":!0}),C(R).forEach($),q.forEach($),O.forEach($),p=j(B),B.forEach($),this.h()},h(){c(i,"class","svelte-1l08vru"),c(r,"type","hidden"),c(r,"name","id"),r.value=s=e[2].id,c(r,"class","svelte-1l08vru"),c(f,"class","edit svelte-1l08vru"),c(f,"aria-label",y="Edit "+e[2].name),c(v,"action",he+"/recipebook"),c(v,"aria-label",k="Form to edit "+e[2].name),c(v,"class","svelte-1l08vru"),c(m,"type","hidden"),c(m,"name","id"),m.value=_=e[2].id,c(m,"class","svelte-1l08vru"),c(R,"class","remove svelte-1l08vru"),c(R,"aria-label",A="Remove "+e[2].name),c(o,"aria-label",T="Form to remove "+e[2].name),c(o,"class","svelte-1l08vru"),c(n,"class","svelte-1l08vru"),c(t,"aria-label",E=e[2].name),c(t,"class","svelte-1l08vru"),this.first=t},m(N,B){H(N,t,B),h(t,n),h(n,i),h(i,u),h(n,d),h(n,v),h(v,r),h(v,w),h(v,f),h(n,F),h(n,o),h(o,m),h(o,M),h(o,R),h(t,p),I||(D=G(o,"submit",ce(e[1])),I=!0)},p(N,B){e=N,B&1&&l!==(l=e[2].name+"")&&ue(u,l),B&1&&s!==(s=e[2].id)&&(r.value=s),B&1&&y!==(y="Edit "+e[2].name)&&c(f,"aria-label",y),B&1&&k!==(k="Form to edit "+e[2].name)&&c(v,"aria-label",k),B&1&&_!==(_=e[2].id)&&(m.value=_),B&1&&A!==(A="Remove "+e[2].name)&&c(R,"aria-label",A),B&1&&T!==(T="Form to remove "+e[2].name)&&c(o,"aria-label",T),B&1&&E!==(E=e[2].name)&&c(t,"aria-label",E)},d(N){N&&$(t),I=!1,D()}}}function ke(a){let e,t,n="Your recipe books",i,l,u,d,v,r,s=[],w=new Map,f,y,k=ae(a[0]);const F=o=>o[2].id;for(let o=0;o<k.length;o+=1){let m=oe(a,k,o),_=F(m);w.set(_,s[o]=ie(_,m))}return{c(){e=b("div"),t=b("h2"),t.textContent=n,i=S(),l=b("button"),u=Q("Remove All Recipe Books"),v=S(),r=b("ul");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=g(o,"DIV",{class:!0});var m=C(e);t=g(m,"H2",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1i50hpx"&&(t.textContent=n),i=j(m),l=g(m,"BUTTON",{class:!0});var _=C(l);u=W(_,"Remove All Recipe Books"),_.forEach($),v=j(m),r=g(m,"UL",{"aria-label":!0,class:!0});var M=C(r);for(let R=0;R<s.length;R+=1)s[R].l(M);M.forEach($),m.forEach($),this.h()},h(){c(t,"class","svelte-1l08vru"),l.disabled=d=a[0].length===0,c(l,"class","svelte-1l08vru"),c(r,"aria-label","List of recipe books"),c(r,"class","svelte-1l08vru"),c(e,"class","svelte-1l08vru")},m(o,m){H(o,e,m),h(e,t),h(e,i),h(e,l),h(l,u),h(e,v),h(e,r);for(let _=0;_<s.length;_+=1)s[_]&&s[_].m(r,null);f||(y=G(l,"click",U.reset),f=!0)},p(o,[m]){m&1&&d!==(d=o[0].length===0)&&(l.disabled=d),m&3&&(k=ae(o[0]),s=_e(s,m,F,1,o,k,w,r,pe,ie,null,oe))},i:L,o:L,d(o){o&&$(e);for(let m=0;m<s.length;m+=1)s[m].d();f=!1,y()}}}function $e(a,e,t){let n;de(a,U,l=>t(0,n=l));function i(l){const u=new FormData(l.target),d=z(u,"id");U.remove(d)}return[n,i]}class ye extends Y{constructor(e){super(),x(this,e,$e,ke,K,{})}}function Ee(a){let e,t,n="Manage Recipe Books",i,l,u,d,v;return l=new we({}),d=new ye({}),{c(){e=b("div"),t=b("h1"),t.textContent=n,i=S(),Z(l.$$.fragment),u=S(),Z(d.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var s=C(e);t=g(s,"H1",{"data-svelte-h":!0}),V(t)!=="svelte-1h09ywt"&&(t.textContent=n),i=j(s),ee(l.$$.fragment,s),u=j(s),ee(d.$$.fragment,s),s.forEach($),this.h()},h(){c(e,"class","svelte-1pgwcil")},m(r,s){H(r,e,s),h(e,t),h(e,i),te(l,e,null),h(e,u),te(d,e,null),v=!0},p:L,i(r){v||(J(l.$$.fragment,r),J(d.$$.fragment,r),v=!0)},o(r){le(l.$$.fragment,r),le(d.$$.fragment,r),v=!1},d(r){r&&$(e),se(l),se(d)}}}class Ce extends Y{constructor(e){super(),x(this,e,null,Ee,K,{})}}export{Ce as component};
