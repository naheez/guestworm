(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function g(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function h(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:g(a)};for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var n;a:{var p={a:!0},r={};try{r.__proto__=p;n=r.a;break a}catch(a){}n=!1}l=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=l;function u(a,b){function c(d){a.removeEventListener("pagesregistered",c);b(d)}a.addEventListener("pagesregistered",c)};var v=RegExp("^data-gwd-media-override-"),w={o:"all",s:"landscape",u:"portrait"},x=["ninja","runtime","responsive","responsiveCommonConstants","OrientationType"],y=this||self;x[0]in y||"undefined"==typeof y.execScript||y.execScript("var "+x[0]);for(var z;x.length&&(z=x.shift());)x.length||void 0===w?y[z]&&y[z]!==Object.prototype[z]?y=y[z]:y=y[z]={}:y[z]=w;var A=RegExp("^((?:0|(?:[1-9]\\d*))(\\.\\d+)?)x((?:0|(?:[1-9]\\d*))(\\.\\d+)?)(?::((?:0|(?:[1-9]\\d*))(\\.\\d+)?)x((?:0|(?:[1-9]\\d*))(\\.\\d+)?)(?::(?:l|p))?)?$");
function B(a){var b="";if(A.test(a)){var c=a.split(":");if(1===c.length)a=c[0].split("x"),a="(width: "+a[0]+("0"===a[0]?"":"px")+") and (height: "+(a[1]+("0"===a[1]?"":"px")+")");else{a=c[2];b=c[0].split("x");c=c[1].split("x");var d="";void 0!==a&&(d+="(orientation: "+("l"===a?"landscape":"portrait")+") and ");a=d+="(min-width: "+b[0]+("0"===b[0]?"":"px")+") and (max-width: "+(c[0]+("0"===c[0]?"":"px")+") and (min-height: ")+(b[1]+("0"===b[1]?"":"px")+") and (max-height: ")+(c[1]+("0"===c[1]?"":"px")+
")")}b=a}return b}function C(a,b){return a.includes(":")!==b.includes(":")?a.includes(":")?-1:1:a===b?0:a<b?-1:1}
function D(a){a=a.getAttribute("data-gwd-media-override");if(null===a)return!0;try{var b=JSON.parse(a),c=Object.keys(b);a={};for(var d=0;d<c.length;a={h:a.h},d++){var e=c[d];a.h=b[e];if(!(A.test(e)&&a.h instanceof Object))return!1;for(var f=Object.keys(a.h).map(function(q){return function(J){return q.h[J]}}(a)),m=0;m<f.length;m++)if("string"!==typeof f[m])return!1}}catch(q){return!1}return!0}
function E(a){var b=new Map;a=Array.prototype.slice.call(a.attributes);for(var c=0;c<a.length;c++){var d=a[c];d&&v.test(d.name)&&b.set(d.name.substr(24),d.value)}return b}
function F(a,b){var c=E(a);b.forEach(function(d,e){if("data-gwd-text"===e){var f=a.textContent===a.innerHTML;f=JSON.stringify({content:f?a.textContent:a.innerHTML,isPlainText:f})}else f=a.hasAttribute(e)?a.getAttribute(e):"gwd-attribute-removed";d!==f&&(c.has(e)?c.get(e)===d&&a.removeAttribute("data-gwd-media-override-"+e):a.setAttribute("data-gwd-media-override-"+e,f),"data-gwd-text"===e?(d=JSON.parse(d),d.isPlainText?a.textContent=d.content:window.gwd&&window.gwd.binders&&"function"===typeof window.gwd.binders.html?
window.gwd.binders.html(a,d.content):(console.log("The HTML binder is undefined or not a function. Setting textContent instead."),a.textContent=d.content)):"gwd-attribute-removed"===d?a.removeAttribute(e):a.setAttribute(e,d))})}function G(a){a=a.getAttribute("data-gwd-media-override");if(!a)return[];a=JSON.parse(a);return Object.keys(a).sort(C)}
function H(a,b){var c=new Map;a=a.getAttribute("data-gwd-media-override");if(!a)return c;b=JSON.parse(a)[b];if(!b)return c;a=Object.keys(b);for(var d=0;d<a.length;d++){var e=a[d];c.set(e,b[e])}return c};function I(){var a=HTMLElement.call(this)||this;a.g=null;a.i=[];a.l=!1;a.j=!1;return a}var K=HTMLElement;I.prototype=k(K.prototype);I.prototype.constructor=I;if(t)t(I,K);else for(var L in K)if("prototype"!=L)if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(K,L);M&&Object.defineProperty(I,L,M)}else I[L]=K[L];
I.prototype.connectedCallback=function(){var a=this;setTimeout(function(){a.g=a.ownerDocument.querySelector("gwd-pagedeck");a.g?0===a.g.getPages().length?u(a.g,a.m.bind(a)):a.m():a.registerElements(Array.from(a.ownerDocument.querySelectorAll("[data-gwd-media-override]")))},0)};I.prototype.registerElements=function(a){this.i=a;this.l=!0;this.j&&(this.applyOverrides(),this.j=!1)};I.prototype.applyOverrides=function(){if(this.l)for(var a=0;a<this.i.length;a++)N(this.i[a]);else this.j=!0};
function N(a){if(a.hasAttribute("data-gwd-media-override")&&D(a)){for(var b=E(a),c=G(a),d=0;d<c.length;d++){var e=c[d],f=B(e);window.matchMedia(f).matches&&H(a,e).forEach(function(m,q){b.set(q,m)})}F(a,b)}}I.prototype.m=function(){var a=this.g.getElementsBySelector("[data-gwd-media-override]"),b=[].concat(h(this.g.getPages()),[this.g]).filter(function(c){return c.hasAttribute("data-gwd-media-override")});a=a.concat(b);this.registerElements(a)};
customElements.define("gwd-responsive-attributes-helper",I);}).call(this);
