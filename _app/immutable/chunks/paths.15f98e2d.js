import{n as c,s as p}from"./scheduler.e108d1fd.js";const e=[];function d(n,l=c){let i;const o=new Set;function b(t){if(p(n,t)&&(n=t,i)){const r=!e.length;for(const s of o)s[1](),e.push(s,n);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){b(t(n))}function _(t,r=c){const s=[t,r];return o.add(s),o.size===1&&(i=l(b,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:b,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1lbkb0z)==null?void 0:u.base)??"/meprpa";var a;const k=((a=globalThis.__sveltekit_1lbkb0z)==null?void 0:a.assets)??h;export{k as a,h as b,d as w};
