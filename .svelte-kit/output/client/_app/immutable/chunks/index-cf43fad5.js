import{a2 as w,a3 as C,a4 as F}from"./singletons-834fc638.js";function g(t){const e=t-1;return e*e*e+1}function P(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}function B(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function I(t){return--t*t*t*t*t+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function S(t,e){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(s[n[o]]=t[n[o]]);return s}function j(t,{delay:e=0,duration:s=400,easing:n=F}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:s,easing:n,css:f=>`opacity: ${f*o}`}}function q(t,{delay:e=0,duration:s=400,easing:n=g,x:o=0,y:f=0,opacity:d=0}={}){const a=getComputedStyle(t),c=+a.opacity,u=a.transform==="none"?"":a.transform,p=c*(1-d);return{delay:e,duration:s,easing:n,css:(r,l)=>`
			transform: ${u} translate(${(1-r)*o}px, ${(1-r)*f}px);
			opacity: ${c-p*l}`}}function T(t,{delay:e=0,duration:s=400,easing:n=g}={}){const o=getComputedStyle(t),f=+o.opacity,d=parseFloat(o.height),a=parseFloat(o.paddingTop),c=parseFloat(o.paddingBottom),u=parseFloat(o.marginTop),p=parseFloat(o.marginBottom),r=parseFloat(o.borderTopWidth),l=parseFloat(o.borderBottomWidth);return{delay:e,duration:s,easing:n,css:i=>`overflow: hidden;opacity: ${Math.min(i*20,1)*f};height: ${i*d}px;padding-top: ${i*a}px;padding-bottom: ${i*c}px;margin-top: ${i*u}px;margin-bottom: ${i*p}px;border-top-width: ${i*r}px;border-bottom-width: ${i*l}px;`}}function R(t,{delay:e=0,duration:s=400,easing:n=g,start:o=0,opacity:f=0}={}){const d=getComputedStyle(t),a=+d.opacity,c=d.transform==="none"?"":d.transform,u=1-o,p=a*(1-f);return{delay:e,duration:s,easing:n,css:(r,l)=>`
			transform: ${c} scale(${1-u*l});
			opacity: ${a-p*l}
		`}}function W(t){var{fallback:e}=t,s=S(t,["fallback"]);const n=new Map,o=new Map;function f(a,c,u){const{delay:p=0,duration:r=y=>Math.sqrt(y)*30,easing:l=g}=w(w({},s),u),i=c.getBoundingClientRect(),h=a.left-i.left,m=a.top-i.top,x=a.width/i.width,_=a.height/i.height,M=Math.sqrt(h*h+m*m),b=getComputedStyle(c),O=b.transform==="none"?"":b.transform,k=+b.opacity;return{delay:p,duration:C(r)?r(M):r,easing:l,css:(y,$)=>`
				opacity: ${y*k};
				transform-origin: top left;
				transform: ${O} translate(${$*h}px,${$*m}px) scale(${y+(1-y)*x}, ${y+(1-y)*_});
			`}}function d(a,c,u){return(p,r)=>(a.set(r.key,{rect:p.getBoundingClientRect()}),()=>{if(c.has(r.key)){const{rect:l}=c.get(r.key);return c.delete(r.key),f(l,p,r)}return a.delete(r.key),e&&e(p,r,u)})}return[d(o,n,!1),d(n,o,!0)]}export{W as a,B as b,g as c,j as d,P as e,q as f,T as g,I as q,R as s};
