import{n as c,s as p}from"./scheduler.e108d1fd.js";const e=[];function d(o,l=c){let n;const i=new Set;function r(t){if(p(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=l(r,f)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1tor3z1)==null?void 0:u.base)??"/meprpa";var a;const z=((a=globalThis.__sveltekit_1tor3z1)==null?void 0:a.assets)??h;export{z as a,h as b,d as w};
