import{n as u,s as p}from"./scheduler.e108d1fd.js";const e=[];function d(n,l=u){let i;const o=new Set;function r(t){if(p(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){r(t(n))}function _(t,c=u){const s=[t,c];return o.add(s),o.size===1&&(i=l(r,b)||u),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:b,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_z7culu)==null?void 0:f.base)??"/meprpa";var a;const z=((a=globalThis.__sveltekit_z7culu)==null?void 0:a.assets)??h;export{z as a,h as b,d as w};
