import{S as le,i as se,s as ce,a as I,v as te,I as de,h as o,c as D,w as ne,b as R,x as oe,f as ie,t as ae,y as re,k as r,q as u,l,m as s,r as p,K as N,L as e,M as fe}from"../../../../chunks/singletons-834fc638.js";import{I as he,S as _e}from"../../../../chunks/IonPage-8ee9f8db.js";function ue(h){let i,n,c,t,d,_,E,A,P,S,O,m,g,b,L,C,B,f,U,q,H,T,x,M,v,Y,z,K,j,W;return E=new _e({props:{name:"Page"}}),{c(){i=r("ion-header"),n=r("ion-toolbar"),c=r("ion-buttons"),t=r("ion-menu-button"),d=I(),_=r("ion-buttons"),te(E.$$.fragment),A=I(),P=r("ion-title"),S=u("Page"),O=I(),m=r("ion-content"),g=r("ion-card"),b=r("ion-card-header"),L=r("h1"),C=u("API specs for IonPage"),B=I(),f=r("ion-card-content"),U=u(`This intends to show the working of the IonPage component. This components the lifecycle\r
				hooks and proper animation for a page shown in your app. The following lifecycle hooks are\r
				provided for:\r
				`),q=r("br"),H=I(),T=r("pre"),x=u(`  ionViewWillEnter\r
  ionViewDidEnter\r
  ionViewWillLeave\r
  ionViewDidLeave\r
`),M=u(`\r
				You can bind the hook using simple function binding.\r
				`),v=r("pre"),Y=u("  "),z=u(h[4]),K=u(`\r
`),j=u(`\r
\r
				Easy does it!`),this.h()},l(a){i=l(a,"ION-HEADER",{translucent:!0});var V=s(i);n=l(V,"ION-TOOLBAR",{});var $=s(n);c=l($,"ION-BUTTONS",{slot:!0});var F=s(c);t=l(F,"ION-MENU-BUTTON",{}),s(t).forEach(o),F.forEach(o),d=D($),_=l($,"ION-BUTTONS",{slot:!0});var G=s(_);ne(E.$$.fragment,G),G.forEach(o),A=D($),P=l($,"ION-TITLE",{});var J=s(P);S=p(J,"Page"),J.forEach(o),$.forEach(o),V.forEach(o),O=D(a),m=l(a,"ION-CONTENT",{fullscreen:!0,class:!0});var Q=s(m);g=l(Q,"ION-CARD",{});var y=s(g);b=l(y,"ION-CARD-HEADER",{});var X=s(b);L=l(X,"H1",{});var Z=s(L);C=p(Z,"API specs for IonPage"),Z.forEach(o),X.forEach(o),B=D(y),f=l(y,"ION-CARD-CONTENT",{});var w=s(f);U=p(w,`This intends to show the working of the IonPage component. This components the lifecycle\r
				hooks and proper animation for a page shown in your app. The following lifecycle hooks are\r
				provided for:\r
				`),q=l(w,"BR",{}),H=D(w),T=l(w,"PRE",{});var ee=s(T);x=p(ee,`  ionViewWillEnter\r
  ionViewDidEnter\r
  ionViewWillLeave\r
  ionViewDidLeave\r
`),ee.forEach(o),M=p(w,`\r
				You can bind the hook using simple function binding.\r
				`),v=l(w,"PRE",{});var k=s(v);Y=p(k,"  "),z=p(k,h[4]),K=p(k,`\r
`),k.forEach(o),j=p(w,`\r
\r
				Easy does it!`),w.forEach(o),y.forEach(o),Q.forEach(o),this.h()},h(){N(c,"slot","start"),N(_,"slot","end"),N(i,"translucent","true"),N(m,"fullscreen",""),N(m,"class","ion-padding")},m(a,V){R(a,i,V),e(i,n),e(n,c),e(c,t),e(n,d),e(n,_),oe(E,_,null),e(n,A),e(n,P),e(P,S),R(a,O,V),R(a,m,V),e(m,g),e(g,b),e(b,L),e(L,C),e(g,B),e(g,f),e(f,U),e(f,q),e(f,H),e(f,T),e(T,x),e(f,M),e(f,v),e(v,Y),e(v,z),e(v,K),e(f,j),W=!0},p:fe,i(a){W||(ie(E.$$.fragment,a),W=!0)},o(a){ae(E.$$.fragment,a),W=!1},d(a){a&&o(i),re(E),a&&o(O),a&&o(m)}}}function pe(h){let i,n,c;return n=new he({props:{ionViewWillEnter:h[0],ionViewDidEnter:h[1],ionViewWillLeave:h[2],ionViewDidLeave:h[3],$$slots:{default:[ue]},$$scope:{ctx:h}}}),{c(){i=I(),te(n.$$.fragment),this.h()},l(t){de('[data-svelte="svelte-17lp6ze"]',document.head).forEach(o),i=D(t),ne(n.$$.fragment,t),this.h()},h(){document.title="Ionic Companion - Page"},m(t,d){R(t,i,d),oe(n,t,d),c=!0},p(t,[d]){const _={};d&32&&(_.$$scope={dirty:d,ctx:t}),n.$set(_)},i(t){c||(ie(n.$$.fragment,t),c=!0)},o(t){ae(n.$$.fragment,t),c=!1},d(t){t&&o(i),re(n,t)}}}function me(h){return[()=>{console.log("Page:ionViewWillEnter")},()=>{console.log("Page:ionViewDidEnter")},()=>{console.log("Page:ionViewWillLeave")},()=>{console.log("Page:ionViewDidLeave")},`...
  const ionViewWillEnter=
        ionViewDidEnter=
        ionViewWillLeave=
        ionViewDidLeave=console.log('We got an event!') 
  
  <IonPage {ionViewWillEnter} {ionViewDidEnter} {ionViewWillLeave} {ionViewDidLeave}>
  
  `]}class ge extends le{constructor(i){super(),se(this,i,me,pe,ce,{})}}export{ge as default};
