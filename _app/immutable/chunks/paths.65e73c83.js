import{n as c,s as p}from"./scheduler.e108d1fd.js";const e=[];function d(n,l=c){let i;const o=new Set;function r(t){if(p(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=l(r,u)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const g=((f=globalThis.__sveltekit_1gy2unv)==null?void 0:f.base)??"/meprpa";var a;const m=((a=globalThis.__sveltekit_1gy2unv)==null?void 0:a.assets)??g;export{m as a,g as b,d as w};
