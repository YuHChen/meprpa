import{r as oe,s as L,n as D,e as ie}from"../chunks/scheduler.e108d1fd.js";import{d as H,S as V,i as q,g,s as C,h as w,j as B,B as F,c as j,f as $,k as p,a as O,x as m,z as J,C as ne,m as z,n as K,o as ae,r as Y,u as G,v as Q,t as W,w as X}from"../chunks/index.47f5ee31.js";import{w as ce,b as ue}from"../chunks/paths.6d5374b8.js";function Z(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function fe(l,e){l.d(1),e.delete(l.key)}function de(l,e,t,a,r,s,i,c,h,o,n,k){let u=l.length,R=s.length,_=u;const E={};for(;_--;)E[l[_].key]=_;const f=[],v=new Map,b=new Map,M=[];for(_=R;_--;){const d=k(r,s,_),y=t(d);let I=i.get(y);I?a&&M.push(()=>I.p(d,e)):(I=o(y,d),I.c()),v.set(y,f[_]=I),y in E&&b.set(y,Math.abs(_-E[y]))}const x=new Set,A=new Set;function S(d){H(d,1),d.m(c,n),i.set(d.key,d),n=d.first,R--}for(;u&&R;){const d=f[R-1],y=l[u-1],I=d.key,T=y.key;d===y?(n=d.first,u--,R--):v.has(T)?!i.has(I)||x.has(I)?S(d):A.has(T)?u--:b.get(I)>b.get(T)?(A.add(I),S(d)):(x.add(T),u--):(h(y,i),u--)}for(;u--;){const d=l[u];v.has(d.key)||h(d,i)}for(;R;)S(f[R-1]);return oe(M),f}function P(l,e){const t=l.get(e);if(typeof t=="string")return t;throw Error(`Expected string for \`${e}\` in form data.`)}function ee(l){return`yuhchen.github.io/meprpa::${l}`}const re={getItem:l=>localStorage.getItem(ee(l)),setItem:(l,e)=>{localStorage.setItem(ee(l),e)}},N=(()=>{const l=JSON.parse(re.getItem("recipeBooks")??"[]"),{subscribe:e,set:t,update:a}=ce(l);return{subscribe:e,push:r=>a(s=>{const{id:i}=r;if(s.some(c=>c.id===i))throw new Error(`Recipe book with id \`${i}\` already exists.`);return[...s,r]}),remove:r=>a(s=>{const i=s.findIndex(c=>c.id===r);return i>-1&&s.splice(i,1),s}),reset:()=>t([])}})();N.subscribe(l=>re.setItem("recipeBooks",JSON.stringify(l)));function te(l){let e,t;return{c(){e=g("p"),t=z(l[0]),this.h()},l(a){e=w(a,"P",{class:!0});var r=B(e);t=K(r,l[0]),r.forEach($),this.h()},h(){p(e,"class","error svelte-1wmrbjm")},m(a,r){O(a,e,r),m(e,t)},p(a,r){r&1&&ae(t,a[0])},d(a){a&&$(e)}}}function me(l){let e,t,a="Add a recipe book",r,s,i=`<label class="svelte-1wmrbjm">Spreadsheet ID:
      <input name="id" required="" class="svelte-1wmrbjm"/></label> <label class="svelte-1wmrbjm">Name:
      <input name="name" class="svelte-1wmrbjm"/></label> <button class="svelte-1wmrbjm">Add recipe book</button>`,c,h,o,n=l[0]&&te(l);return{c(){e=g("div"),t=g("h2"),t.textContent=a,r=C(),s=g("form"),s.innerHTML=i,c=C(),n&&n.c(),this.h()},l(k){e=w(k,"DIV",{class:!0});var u=B(e);t=w(u,"H2",{"data-svelte-h":!0}),F(t)!=="svelte-1qehulj"&&(t.textContent=a),r=j(u),s=w(u,"FORM",{class:!0,"data-svelte-h":!0}),F(s)!=="svelte-iebvgh"&&(s.innerHTML=i),c=j(u),n&&n.l(u),u.forEach($),this.h()},h(){p(s,"class","svelte-1wmrbjm"),p(e,"class","svelte-1wmrbjm")},m(k,u){O(k,e,u),m(e,t),m(e,r),m(e,s),m(e,c),n&&n.m(e,null),h||(o=J(s,"submit",ne(l[1])),h=!0)},p(k,[u]){k[0]?n?n.p(k,u):(n=te(k),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:D,o:D,d(k){k&&$(e),n&&n.d(),h=!1,o()}}}function he(l,e,t){let a;function r(s){t(0,a=void 0);const i=new FormData(s.target),c=P(i,"id"),h={id:c,name:P(i,"name")||c};try{N.push(h)}catch(o){o instanceof Error&&t(0,a=o.message)}}return[a,r]}class ve extends V{constructor(e){super(),q(this,e,he,me,L,{})}}function se(l,e,t){const a=l.slice();return a[2]=e[t],a}function le(l,e){let t,a,r,s=e[2].name+"",i,c,h,o,n,k,u,R,_,E,f,v,b,M,x,A;return{key:l,first:null,c(){t=g("li"),a=g("div"),r=g("span"),i=z(s),c=C(),h=g("form"),o=g("input"),k=C(),u=g("button"),R=C(),_=g("form"),E=g("input"),v=C(),b=g("button"),M=C(),this.h()},l(S){t=w(S,"LI",{class:!0});var d=B(t);a=w(d,"DIV",{class:!0});var y=B(a);r=w(y,"SPAN",{class:!0});var I=B(r);i=K(I,s),I.forEach($),c=j(y),h=w(y,"FORM",{action:!0,class:!0});var T=B(h);o=w(T,"INPUT",{type:!0,name:!0,class:!0}),k=j(T),u=w(T,"BUTTON",{class:!0,"aria-label":!0}),B(u).forEach($),T.forEach($),R=j(y),_=w(y,"FORM",{class:!0});var U=B(_);E=w(U,"INPUT",{type:!0,name:!0,class:!0}),v=j(U),b=w(U,"BUTTON",{class:!0,"aria-label":!0}),B(b).forEach($),U.forEach($),y.forEach($),M=j(d),d.forEach($),this.h()},h(){p(r,"class","svelte-1l08vru"),p(o,"type","hidden"),p(o,"name","id"),o.value=n=e[2].id,p(o,"class","svelte-1l08vru"),p(u,"class","edit svelte-1l08vru"),p(u,"aria-label","Edit recipe book"),p(h,"action",ue+"/recipebook"),p(h,"class","svelte-1l08vru"),p(E,"type","hidden"),p(E,"name","id"),E.value=f=e[2].id,p(E,"class","svelte-1l08vru"),p(b,"class","remove svelte-1l08vru"),p(b,"aria-label","Remove recipe book"),p(_,"class","svelte-1l08vru"),p(a,"class","svelte-1l08vru"),p(t,"class","svelte-1l08vru"),this.first=t},m(S,d){O(S,t,d),m(t,a),m(a,r),m(r,i),m(a,c),m(a,h),m(h,o),m(h,k),m(h,u),m(a,R),m(a,_),m(_,E),m(_,v),m(_,b),m(t,M),x||(A=J(_,"submit",ne(e[1])),x=!0)},p(S,d){e=S,d&1&&s!==(s=e[2].name+"")&&ae(i,s),d&1&&n!==(n=e[2].id)&&(o.value=n),d&1&&f!==(f=e[2].id)&&(E.value=f)},d(S){S&&$(t),x=!1,A()}}}function pe(l){let e,t,a="Your recipe books",r,s,i,c,h,o,n=[],k=new Map,u,R,_=Z(l[0]);const E=f=>f[2].id;for(let f=0;f<_.length;f+=1){let v=se(l,_,f),b=E(v);k.set(b,n[f]=le(b,v))}return{c(){e=g("div"),t=g("h2"),t.textContent=a,r=C(),s=g("button"),i=z("Remove All Recipe Books"),h=C(),o=g("ul");for(let f=0;f<n.length;f+=1)n[f].c();this.h()},l(f){e=w(f,"DIV",{class:!0});var v=B(e);t=w(v,"H2",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-1i50hpx"&&(t.textContent=a),r=j(v),s=w(v,"BUTTON",{class:!0});var b=B(s);i=K(b,"Remove All Recipe Books"),b.forEach($),h=j(v),o=w(v,"UL",{class:!0});var M=B(o);for(let x=0;x<n.length;x+=1)n[x].l(M);M.forEach($),v.forEach($),this.h()},h(){p(t,"class","svelte-1l08vru"),s.disabled=c=l[0].length===0,p(s,"class","svelte-1l08vru"),p(o,"class","svelte-1l08vru"),p(e,"class","svelte-1l08vru")},m(f,v){O(f,e,v),m(e,t),m(e,r),m(e,s),m(s,i),m(e,h),m(e,o);for(let b=0;b<n.length;b+=1)n[b]&&n[b].m(o,null);u||(R=J(s,"click",N.reset),u=!0)},p(f,[v]){v&1&&c!==(c=f[0].length===0)&&(s.disabled=c),v&3&&(_=Z(f[0]),n=de(n,v,E,1,f,_,k,o,fe,le,null,se))},i:D,o:D,d(f){f&&$(e);for(let v=0;v<n.length;v+=1)n[v].d();u=!1,R()}}}function _e(l,e,t){let a;ie(l,N,s=>t(0,a=s));function r(s){const i=new FormData(s.target),c=P(i,"id");N.remove(c)}return[a,r]}class be extends V{constructor(e){super(),q(this,e,_e,pe,L,{})}}function ge(l){let e,t,a="Manage Recipe Books",r,s,i,c,h;return s=new ve({}),c=new be({}),{c(){e=g("div"),t=g("h1"),t.textContent=a,r=C(),Y(s.$$.fragment),i=C(),Y(c.$$.fragment),this.h()},l(o){e=w(o,"DIV",{class:!0});var n=B(e);t=w(n,"H1",{"data-svelte-h":!0}),F(t)!=="svelte-1h09ywt"&&(t.textContent=a),r=j(n),G(s.$$.fragment,n),i=j(n),G(c.$$.fragment,n),n.forEach($),this.h()},h(){p(e,"class","svelte-1pgwcil")},m(o,n){O(o,e,n),m(e,t),m(e,r),Q(s,e,null),m(e,i),Q(c,e,null),h=!0},p:D,i(o){h||(H(s.$$.fragment,o),H(c.$$.fragment,o),h=!0)},o(o){W(s.$$.fragment,o),W(c.$$.fragment,o),h=!1},d(o){o&&$(e),X(s),X(c)}}}class ye extends V{constructor(e){super(),q(this,e,null,ge,L,{})}}export{ye as component};
