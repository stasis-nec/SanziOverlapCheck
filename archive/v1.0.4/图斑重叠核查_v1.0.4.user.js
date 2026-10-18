// ==UserScript==
// @name         三资云图·图斑重叠核查（惜福镇街道）
// @namespace    xifu.sanzhi.tbcheck
// @version      1.0.4
// @description  登录青岛市农村集体“三资”数字云图后，一键核查惜福镇街道31个组织资产图斑重叠（>20%），导出Excel。村级更正后可重复运行对比。
// @match        http://qdsz.cloudlizard.cn:19080/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==
/* eslint-disable */
(function () {
'use strict';

/* polygon-clipping v0.15.7 (MIT) inlined */
const polygonClipping = (function(){"use strict";
/**
     * splaytree v3.1.2
     * Fast Splay tree for Node and browser
     *
     * @author Alexander Milevski <info@w8r.name>
     * @license MIT
     * @preserve
     */
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function t(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}var e=function(t,e){this.next=null,this.key=t,this.data=e,this.left=null,this.right=null};function n(t,e){return t>e?1:t<e?-1:0}function r(t,n,r){for(var i=new e(null,null),o=i,s=i;;){var l=r(t,n.key);if(l<0){if(null===n.left)break;if(r(t,n.left.key)<0){var h=n.left;if(n.left=h.right,h.right=n,null===(n=h).left)break}s.left=n,s=n,n=n.left}else{if(!(l>0))break;if(null===n.right)break;if(r(t,n.right.key)>0){h=n.right;if(n.right=h.left,h.left=n,null===(n=h).right)break}o.right=n,o=n,n=n.right}}return o.right=n.left,s.left=n.right,n.left=i.right,n.right=i.left,n}function i(t,n,i,o){var s=new e(t,n);if(null===i)return s.left=s.right=null,s;var l=o(t,(i=r(t,i,o)).key);return l<0?(s.left=i.left,s.right=i,i.left=null):l>=0&&(s.right=i.right,s.left=i,i.right=null),s}function o(t,e,n){var i=null,o=null;if(e){var s=n((e=r(t,e,n)).key,t);0===s?(i=e.left,o=e.right):s<0?(o=e.right,e.right=null,i=e):(i=e.left,e.left=null,o=e)}return{left:i,right:o}}function s(t,e,n,r,i){if(t){r(e+(n?"└── ":"├── ")+i(t)+"\n");var o=e+(n?"    ":"│   ");t.left&&s(t.left,o,!1,r,i),t.right&&s(t.right,o,!0,r,i)}}var l=function(){function l(t){void 0===t&&(t=n),this._root=null,this._size=0,this._comparator=t}return l.prototype.insert=function(t,e){return this._size++,this._root=i(t,e,this._root,this._comparator)},l.prototype.add=function(t,n){var i=new e(t,n);null===this._root&&(i.left=i.right=null,this._size++,this._root=i);var o=this._comparator,s=r(t,this._root,o),l=o(t,s.key);return 0===l?this._root=s:(l<0?(i.left=s.left,i.right=s,s.left=null):l>0&&(i.right=s.right,i.left=s,s.right=null),this._size++,this._root=i),this._root},l.prototype.remove=function(t){this._root=this._remove(t,this._root,this._comparator)},l.prototype._remove=function(t,e,n){var i;return null===e?null:0===n(t,(e=r(t,e,n)).key)?(null===e.left?i=e.right:(i=r(t,e.left,n)).right=e.right,this._size--,i):e},l.prototype.pop=function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=r(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null},l.prototype.findStatic=function(t){for(var e=this._root,n=this._comparator;e;){var r=n(t,e.key);if(0===r)return e;e=r<0?e.left:e.right}return null},l.prototype.find=function(t){return this._root&&(this._root=r(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root},l.prototype.contains=function(t){for(var e=this._root,n=this._comparator;e;){var r=n(t,e.key);if(0===r)return!0;e=r<0?e.left:e.right}return!1},l.prototype.forEach=function(t,e){for(var n=this._root,r=[],i=!1;!i;)null!==n?(r.push(n),n=n.left):0!==r.length?(n=r.pop(),t.call(e,n),n=n.right):i=!0;return this},l.prototype.range=function(t,e,n,r){for(var i=[],o=this._comparator,s=this._root;0!==i.length||s;)if(s)i.push(s),s=s.left;else{if(o((s=i.pop()).key,e)>0)break;if(o(s.key,t)>=0&&n.call(r,s))return this;s=s.right}return this},l.prototype.keys=function(){var t=[];return this.forEach((function(e){var n=e.key;return t.push(n)})),t},l.prototype.values=function(){var t=[];return this.forEach((function(e){var n=e.data;return t.push(n)})),t},l.prototype.min=function(){return this._root?this.minNode(this._root).key:null},l.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},l.prototype.minNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.left;)t=t.left;return t},l.prototype.maxNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.right;)t=t.right;return t},l.prototype.at=function(t){for(var e=this._root,n=!1,r=0,i=[];!n;)if(e)i.push(e),e=e.left;else if(i.length>0){if(e=i.pop(),r===t)return e;r++,e=e.right}else n=!0;return null},l.prototype.next=function(t){var e=this._root,n=null;if(t.right){for(n=t.right;n.left;)n=n.left;return n}for(var r=this._comparator;e;){var i=r(t.key,e.key);if(0===i)break;i<0?(n=e,e=e.left):e=e.right}return n},l.prototype.prev=function(t){var e=this._root,n=null;if(null!==t.left){for(n=t.left;n.right;)n=n.right;return n}for(var r=this._comparator;e;){var i=r(t.key,e.key);if(0===i)break;i<0?e=e.left:(n=e,e=e.right)}return n},l.prototype.clear=function(){return this._root=null,this._size=0,this},l.prototype.toList=function(){return function(t){var n=t,r=[],i=!1,o=new e(null,null),s=o;for(;!i;)n?(r.push(n),n=n.left):r.length>0?n=(n=s=s.next=r.pop()).right:i=!0;return s.next=null,o.next}(this._root)},l.prototype.load=function(t,n,r){void 0===n&&(n=[]),void 0===r&&(r=!1);var i=t.length,o=this._comparator;if(r&&f(t,n,0,i-1,o),null===this._root)this._root=h(t,n,0,i),this._size=i;else{var s=function(t,n,r){var i=new e(null,null),o=i,s=t,l=n;for(;null!==s&&null!==l;)r(s.key,l.key)<0?(o.next=s,s=s.next):(o.next=l,l=l.next),o=o.next;null!==s?o.next=s:null!==l&&(o.next=l);return i.next}(this.toList(),function(t,n){for(var r=new e(null,null),i=r,o=0;o<t.length;o++)i=i.next=new e(t[o],n[o]);return i.next=null,r.next}(t,n),o);i=this._size+i,this._root=u({head:s},0,i)}return this},l.prototype.isEmpty=function(){return null===this._root},Object.defineProperty(l.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),l.prototype.toString=function(t){void 0===t&&(t=function(t){return String(t.key)});var e=[];return s(this._root,"",!0,(function(t){return e.push(t)}),t),e.join("")},l.prototype.update=function(t,e,n){var s=this._comparator,l=o(t,this._root,s),h=l.left,u=l.right;s(t,e)<0?u=i(e,n,u,s):h=i(e,n,h,s),this._root=function(t,e,n){return null===e?t:(null===t||((e=r(t.key,e,n)).left=t),e)}(h,u,s)},l.prototype.split=function(t){return o(t,this._root,this._comparator)},l.prototype[Symbol.iterator]=function(){var e,n,r;return t(this,(function(t){switch(t.label){case 0:e=this._root,n=[],r=!1,t.label=1;case 1:return r?[3,6]:null===e?[3,2]:(n.push(e),e=e.left,[3,5]);case 2:return 0===n.length?[3,4]:[4,e=n.pop()];case 3:return t.sent(),e=e.right,[3,5];case 4:r=!0,t.label=5;case 5:return[3,1];case 6:return[2]}}))},l}();function h(t,n,r,i){var o=i-r;if(o>0){var s=r+Math.floor(o/2),l=t[s],u=n[s],f=new e(l,u);return f.left=h(t,n,r,s),f.right=h(t,n,s+1,i),f}return null}function u(t,e,n){var r=n-e;if(r>0){var i=e+Math.floor(r/2),o=u(t,e,i),s=t.head;return s.left=o,t.head=t.head.next,s.right=u(t,i+1,n),s}return null}function f(t,e,n,r,i){if(!(n>=r)){for(var o=t[n+r>>1],s=n-1,l=r+1;;){do{s++}while(i(t[s],o)<0);do{l--}while(i(t[l],o)>0);if(s>=l)break;var h=t[s];t[s]=t[l],t[l]=h,h=e[s],e[s]=e[l],e[l]=h}f(t,e,n,l,i),f(t,e,l+1,r,i)}}const c=(t,e)=>t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y,p=(t,e)=>{if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;const n=t.ll.x<e.ll.x?e.ll.x:t.ll.x,r=t.ur.x<e.ur.x?t.ur.x:e.ur.x;return{ll:{x:n,y:t.ll.y<e.ll.y?e.ll.y:t.ll.y},ur:{x:r,y:t.ur.y<e.ur.y?t.ur.y:e.ur.y}}};let g=Number.EPSILON;void 0===g&&(g=Math.pow(2,-52));const a=g*g,y=(t,e)=>{if(-g<t&&t<g&&-g<e&&e<g)return 0;const n=t-e;return n*n<a*t*e?0:t<e?-1:1};class x{constructor(){this.tree=new l,this.round(0)}round(t){const e=this.tree.add(t),n=this.tree.prev(e);if(null!==n&&0===y(e.key,n.key))return this.tree.remove(t),n.key;const r=this.tree.next(e);return null!==r&&0===y(e.key,r.key)?(this.tree.remove(t),r.key):t}}const b=new class{constructor(){this.reset()}reset(){this.xRounder=new x,this.yRounder=new x}round(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}},v=11102230246251565e-32,d=134217729,m=(3+8*v)*v;function E(t,e,n,r,i){let o,s,l,h,u=e[0],f=r[0],c=0,p=0;f>u==f>-u?(o=u,u=e[++c]):(o=f,f=r[++p]);let g=0;if(c<t&&p<n)for(f>u==f>-u?(s=u+o,l=o-(s-u),u=e[++c]):(s=f+o,l=o-(s-f),f=r[++p]),o=s,0!==l&&(i[g++]=l);c<t&&p<n;)f>u==f>-u?(s=o+u,h=s-o,l=o-(s-h)+(u-h),u=e[++c]):(s=o+f,h=s-o,l=o-(s-h)+(f-h),f=r[++p]),o=s,0!==l&&(i[g++]=l);for(;c<t;)s=o+u,h=s-o,l=o-(s-h)+(u-h),u=e[++c],o=s,0!==l&&(i[g++]=l);for(;p<n;)s=o+f,h=s-o,l=o-(s-h)+(f-h),f=r[++p],o=s,0!==l&&(i[g++]=l);return 0===o&&0!==g||(i[g++]=o),g}function S(t){return new Float64Array(t)}const _=22204460492503146e-32,w=11093356479670487e-47,k=S(4),R=S(8),I=S(12),P=S(16),N=S(4);function A(t,e,n,r,i,o){const s=(e-o)*(n-i),l=(t-i)*(r-o),h=s-l,u=Math.abs(s+l);return Math.abs(h)>=33306690738754716e-32*u?h:-function(t,e,n,r,i,o,s){let l,h,u,f,c,p,g,a,y,x,b,v,S,A,O,L,$,M;const z=t-i,B=n-i,G=e-o,T=r-o;A=z*T,p=d*z,g=p-(p-z),a=z-g,p=d*T,y=p-(p-T),x=T-y,O=a*x-(A-g*y-a*y-g*x),L=G*B,p=d*G,g=p-(p-G),a=G-g,p=d*B,y=p-(p-B),x=B-y,$=a*x-(L-g*y-a*y-g*x),b=O-$,c=O-b,k[0]=O-(b+c)+(c-$),v=A+b,c=v-A,S=A-(v-c)+(b-c),b=S-L,c=S-b,k[1]=S-(b+c)+(c-L),M=v+b,c=M-v,k[2]=v-(M-c)+(b-c),k[3]=M;let q=function(t,e){let n=e[0];for(let r=1;r<t;r++)n+=e[r];return n}(4,k),C=_*s;if(q>=C||-q>=C)return q;if(c=t-z,l=t-(z+c)+(c-i),c=n-B,u=n-(B+c)+(c-i),c=e-G,h=e-(G+c)+(c-o),c=r-T,f=r-(T+c)+(c-o),0===l&&0===h&&0===u&&0===f)return q;if(C=w*s+m*Math.abs(q),q+=z*f+T*l-(G*u+B*h),q>=C||-q>=C)return q;A=l*T,p=d*l,g=p-(p-l),a=l-g,p=d*T,y=p-(p-T),x=T-y,O=a*x-(A-g*y-a*y-g*x),L=h*B,p=d*h,g=p-(p-h),a=h-g,p=d*B,y=p-(p-B),x=B-y,$=a*x-(L-g*y-a*y-g*x),b=O-$,c=O-b,N[0]=O-(b+c)+(c-$),v=A+b,c=v-A,S=A-(v-c)+(b-c),b=S-L,c=S-b,N[1]=S-(b+c)+(c-L),M=v+b,c=M-v,N[2]=v-(M-c)+(b-c),N[3]=M;const F=E(4,k,4,N,R);A=z*f,p=d*z,g=p-(p-z),a=z-g,p=d*f,y=p-(p-f),x=f-y,O=a*x-(A-g*y-a*y-g*x),L=G*u,p=d*G,g=p-(p-G),a=G-g,p=d*u,y=p-(p-u),x=u-y,$=a*x-(L-g*y-a*y-g*x),b=O-$,c=O-b,N[0]=O-(b+c)+(c-$),v=A+b,c=v-A,S=A-(v-c)+(b-c),b=S-L,c=S-b,N[1]=S-(b+c)+(c-L),M=v+b,c=M-v,N[2]=v-(M-c)+(b-c),N[3]=M;const j=E(F,R,4,N,I);A=l*f,p=d*l,g=p-(p-l),a=l-g,p=d*f,y=p-(p-f),x=f-y,O=a*x-(A-g*y-a*y-g*x),L=h*u,p=d*h,g=p-(p-h),a=h-g,p=d*u,y=p-(p-u),x=u-y,$=a*x-(L-g*y-a*y-g*x),b=O-$,c=O-b,N[0]=O-(b+c)+(c-$),v=A+b,c=v-A,S=A-(v-c)+(b-c),b=S-L,c=S-b,N[1]=S-(b+c)+(c-L),M=v+b,c=M-v,N[2]=v-(M-c)+(b-c),N[3]=M;const U=E(j,I,4,N,P);return P[U-1]}(t,e,n,r,i,o,u)}const O=(t,e)=>t.x*e.y-t.y*e.x,L=(t,e)=>t.x*e.x+t.y*e.y,$=(t,e,n)=>{const r=A(t.x,t.y,e.x,e.y,n.x,n.y);return r>0?-1:r<0?1:0},M=t=>Math.sqrt(L(t,t)),z=(t,e,n)=>{const r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y};return O(i,r)/M(i)/M(r)},B=(t,e,n)=>{const r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y};return L(i,r)/M(i)/M(r)},G=(t,e,n)=>0===e.y?null:{x:t.x+e.x/e.y*(n-t.y),y:n},T=(t,e,n)=>0===e.x?null:{x:n,y:t.y+e.y/e.x*(n-t.x)};class q{static compare(t,e){const n=q.comparePoints(t.point,e.point);return 0!==n?n:(t.point!==e.point&&t.link(e),t.isLeft!==e.isLeft?t.isLeft?1:-1:F.compare(t.segment,e.segment))}static comparePoints(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}constructor(t,e){void 0===t.events?t.events=[this]:t.events.push(this),this.point=t,this.isLeft=e}link(t){if(t.point===this.point)throw new Error("Tried to link already linked events");const e=t.point.events;for(let t=0,n=e.length;t<n;t++){const n=e[t];this.point.events.push(n),n.point=this.point}this.checkForConsuming()}checkForConsuming(){const t=this.point.events.length;for(let e=0;e<t;e++){const n=this.point.events[e];if(void 0===n.segment.consumedBy)for(let r=e+1;r<t;r++){const t=this.point.events[r];void 0===t.consumedBy&&(n.otherSE.point.events===t.otherSE.point.events&&n.segment.consume(t.segment))}}}getAvailableLinkedEvents(){const t=[];for(let e=0,n=this.point.events.length;e<n;e++){const n=this.point.events[e];n!==this&&!n.segment.ringOut&&n.segment.isInResult()&&t.push(n)}return t}getLeftmostComparator(t){const e=new Map,n=n=>{const r=n.otherSE;e.set(n,{sine:z(this.point,t.point,r.point),cosine:B(this.point,t.point,r.point)})};return(t,r)=>{e.has(t)||n(t),e.has(r)||n(r);const{sine:i,cosine:o}=e.get(t),{sine:s,cosine:l}=e.get(r);return i>=0&&s>=0?o<l?1:o>l?-1:0:i<0&&s<0?o<l?-1:o>l?1:0:s<i?-1:s>i?1:0}}}let C=0;class F{static compare(t,e){const n=t.leftSE.point.x,r=e.leftSE.point.x,i=t.rightSE.point.x,o=e.rightSE.point.x;if(o<n)return 1;if(i<r)return-1;const s=t.leftSE.point.y,l=e.leftSE.point.y,h=t.rightSE.point.y,u=e.rightSE.point.y;if(n<r){if(l<s&&l<h)return 1;if(l>s&&l>h)return-1;const n=t.comparePoint(e.leftSE.point);if(n<0)return 1;if(n>0)return-1;const r=e.comparePoint(t.rightSE.point);return 0!==r?r:-1}if(n>r){if(s<l&&s<u)return-1;if(s>l&&s>u)return 1;const n=e.comparePoint(t.leftSE.point);if(0!==n)return n;const r=t.comparePoint(e.rightSE.point);return r<0?1:r>0?-1:1}if(s<l)return-1;if(s>l)return 1;if(i<o){const n=e.comparePoint(t.rightSE.point);if(0!==n)return n}if(i>o){const n=t.comparePoint(e.rightSE.point);if(n<0)return 1;if(n>0)return-1}if(i!==o){const t=h-s,e=i-n,f=u-l,c=o-r;if(t>e&&f<c)return 1;if(t<e&&f>c)return-1}return i>o?1:i<o||h<u?-1:h>u?1:t.id<e.id?-1:t.id>e.id?1:0}constructor(t,e,n,r){this.id=++C,this.leftSE=t,t.segment=this,t.otherSE=e,this.rightSE=e,e.segment=this,e.otherSE=t,this.rings=n,this.windings=r}static fromRing(t,e,n){let r,i,o;const s=q.comparePoints(t,e);if(s<0)r=t,i=e,o=1;else{if(!(s>0))throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);r=e,i=t,o=-1}const l=new q(r,!0),h=new q(i,!1);return new F(l,h,[n],[o])}replaceRightSE(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){const t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:t>e?t:e}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}comparePoint(t){if(this.isAnEndpoint(t))return 0;const e=this.leftSE.point,n=this.rightSE.point,r=this.vector();if(e.x===n.x)return t.x===e.x?0:t.x<e.x?1:-1;const i=(t.y-e.y)/r.y,o=e.x+i*r.x;if(t.x===o)return 0;const s=(t.x-e.x)/r.x,l=e.y+s*r.y;return t.y===l?0:t.y<l?-1:1}getIntersection(t){const e=this.bbox(),n=t.bbox(),r=p(e,n);if(null===r)return null;const i=this.leftSE.point,o=this.rightSE.point,s=t.leftSE.point,l=t.rightSE.point,h=c(e,s)&&0===this.comparePoint(s),u=c(n,i)&&0===t.comparePoint(i),f=c(e,l)&&0===this.comparePoint(l),g=c(n,o)&&0===t.comparePoint(o);if(u&&h)return g&&!f?o:!g&&f?l:null;if(u)return f&&i.x===l.x&&i.y===l.y?null:i;if(h)return g&&o.x===s.x&&o.y===s.y?null:s;if(g&&f)return null;if(g)return o;if(f)return l;const a=((t,e,n,r)=>{if(0===e.x)return T(n,r,t.x);if(0===r.x)return T(t,e,n.x);if(0===e.y)return G(n,r,t.y);if(0===r.y)return G(t,e,n.y);const i=O(e,r);if(0==i)return null;const o={x:n.x-t.x,y:n.y-t.y},s=O(o,e)/i,l=O(o,r)/i;return{x:(t.x+l*e.x+(n.x+s*r.x))/2,y:(t.y+l*e.y+(n.y+s*r.y))/2}})(i,this.vector(),s,t.vector());return null===a?null:c(r,a)?b.round(a.x,a.y):null}split(t){const e=[],n=void 0!==t.events,r=new q(t,!0),i=new q(t,!1),o=this.rightSE;this.replaceRightSE(i),e.push(i),e.push(r);const s=new F(r,o,this.rings.slice(),this.windings.slice());return q.comparePoints(s.leftSE.point,s.rightSE.point)>0&&s.swapEvents(),q.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(r.checkForConsuming(),i.checkForConsuming()),e}swapEvents(){const t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let t=0,e=this.windings.length;t<e;t++)this.windings[t]*=-1}consume(t){let e=this,n=t;for(;e.consumedBy;)e=e.consumedBy;for(;n.consumedBy;)n=n.consumedBy;const r=F.compare(e,n);if(0!==r){if(r>0){const t=e;e=n,n=t}if(e.prev===n){const t=e;e=n,n=t}for(let t=0,r=n.rings.length;t<r;t++){const r=n.rings[t],i=n.windings[t],o=e.rings.indexOf(r);-1===o?(e.rings.push(r),e.windings.push(i)):e.windings[o]+=i}n.rings=null,n.windings=null,n.consumedBy=e,n.leftSE.consumedBy=e.leftSE,n.rightSE.consumedBy=e.rightSE}}prevInResult(){return void 0!==this._prevInResult||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}beforeState(){if(void 0!==this._beforeState)return this._beforeState;if(this.prev){const t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}afterState(){if(void 0!==this._afterState)return this._afterState;const t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};const e=this._afterState.rings,n=this._afterState.windings,r=this._afterState.multiPolys;for(let t=0,r=this.rings.length;t<r;t++){const r=this.rings[t],i=this.windings[t],o=e.indexOf(r);-1===o?(e.push(r),n.push(i)):n[o]+=i}const i=[],o=[];for(let t=0,r=e.length;t<r;t++){if(0===n[t])continue;const r=e[t],s=r.poly;if(-1===o.indexOf(s))if(r.isExterior)i.push(s);else{-1===o.indexOf(s)&&o.push(s);const t=i.indexOf(r.poly);-1!==t&&i.splice(t,1)}}for(let t=0,e=i.length;t<e;t++){const e=i[t].multiPoly;-1===r.indexOf(e)&&r.push(e)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(void 0!==this._isInResult)return this._isInResult;const t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(H.type){case"union":{const n=0===t.length,r=0===e.length;this._isInResult=n!==r;break}case"intersection":{let n,r;t.length<e.length?(n=t.length,r=e.length):(n=e.length,r=t.length),this._isInResult=r===H.numMultiPolys&&n<r;break}case"xor":{const n=Math.abs(t.length-e.length);this._isInResult=n%2==1;break}case"difference":{const n=t=>1===t.length&&t[0].isSubject;this._isInResult=n(t)!==n(e);break}default:throw new Error(`Unrecognized operation type found ${H.type}`)}return this._isInResult}}class j{constructor(t,e,n){if(!Array.isArray(t)||0===t.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=e,this.isExterior=n,this.segments=[],"number"!=typeof t[0][0]||"number"!=typeof t[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");const r=b.round(t[0][0],t[0][1]);this.bbox={ll:{x:r.x,y:r.y},ur:{x:r.x,y:r.y}};let i=r;for(let e=1,n=t.length;e<n;e++){if("number"!=typeof t[e][0]||"number"!=typeof t[e][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let n=b.round(t[e][0],t[e][1]);n.x===i.x&&n.y===i.y||(this.segments.push(F.fromRing(i,n,this)),n.x<this.bbox.ll.x&&(this.bbox.ll.x=n.x),n.y<this.bbox.ll.y&&(this.bbox.ll.y=n.y),n.x>this.bbox.ur.x&&(this.bbox.ur.x=n.x),n.y>this.bbox.ur.y&&(this.bbox.ur.y=n.y),i=n)}r.x===i.x&&r.y===i.y||this.segments.push(F.fromRing(i,r,this))}getSweepEvents(){const t=[];for(let e=0,n=this.segments.length;e<n;e++){const n=this.segments[e];t.push(n.leftSE),t.push(n.rightSE)}return t}}class U{constructor(t,e){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new j(t[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let e=1,n=t.length;e<n;e++){const n=new j(t[e],this,!1);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.interiorRings.push(n)}this.multiPoly=e}getSweepEvents(){const t=this.exteriorRing.getSweepEvents();for(let e=0,n=this.interiorRings.length;e<n;e++){const n=this.interiorRings[e].getSweepEvents();for(let e=0,r=n.length;e<r;e++)t.push(n[e])}return t}}class Y{constructor(t,e){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof t[0][0][0]&&(t=[t])}catch(t){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let e=0,n=t.length;e<n;e++){const n=new U(t[e],this);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.polys.push(n)}this.isSubject=e}getSweepEvents(){const t=[];for(let e=0,n=this.polys.length;e<n;e++){const n=this.polys[e].getSweepEvents();for(let e=0,r=n.length;e<r;e++)t.push(n[e])}return t}}class V{static factory(t){const e=[];for(let n=0,r=t.length;n<r;n++){const r=t[n];if(!r.isInResult()||r.ringOut)continue;let i=null,o=r.leftSE,s=r.rightSE;const l=[o],h=o.point,u=[];for(;i=o,o=s,l.push(o),o.point!==h;)for(;;){const t=o.getAvailableLinkedEvents();if(0===t.length){const t=l[0].point,e=l[l.length-1].point;throw new Error(`Unable to complete output ring starting at [${t.x}, ${t.y}]. Last matching segment found ends at [${e.x}, ${e.y}].`)}if(1===t.length){s=t[0].otherSE;break}let n=null;for(let t=0,e=u.length;t<e;t++)if(u[t].point===o.point){n=t;break}if(null!==n){const t=u.splice(n)[0],r=l.splice(t.index);r.unshift(r[0].otherSE),e.push(new V(r.reverse()));continue}u.push({index:l.length,point:o.point});const r=o.getLeftmostComparator(i);s=t.sort(r)[0].otherSE;break}e.push(new V(l))}return e}constructor(t){this.events=t;for(let e=0,n=t.length;e<n;e++)t[e].segment.ringOut=this;this.poly=null}getGeom(){let t=this.events[0].point;const e=[t];for(let n=1,r=this.events.length-1;n<r;n++){const r=this.events[n].point,i=this.events[n+1].point;0!==$(r,t,i)&&(e.push(r),t=r)}if(1===e.length)return null;const n=e[0],r=e[1];0===$(n,t,r)&&e.shift(),e.push(e[0]);const i=this.isExteriorRing()?1:-1,o=this.isExteriorRing()?0:e.length-1,s=this.isExteriorRing()?e.length:-1,l=[];for(let t=o;t!=s;t+=i)l.push([e[t].x,e[t].y]);return l}isExteriorRing(){if(void 0===this._isExteriorRing){const t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing}enclosingRing(){return void 0===this._enclosingRing&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let t=this.events[0];for(let e=1,n=this.events.length;e<n;e++){const n=this.events[e];q.compare(t,n)>0&&(t=n)}let e=t.segment.prevInResult(),n=e?e.prevInResult():null;for(;;){if(!e)return null;if(!n)return e.ringOut;if(n.ringOut!==e.ringOut)return n.ringOut.enclosingRing()!==e.ringOut?e.ringOut:e.ringOut.enclosingRing();e=n.prevInResult(),n=e?e.prevInResult():null}}}class X{constructor(t){this.exteriorRing=t,t.poly=this,this.interiorRings=[]}addInterior(t){this.interiorRings.push(t),t.poly=this}getGeom(){const t=[this.exteriorRing.getGeom()];if(null===t[0])return null;for(let e=0,n=this.interiorRings.length;e<n;e++){const n=this.interiorRings[e].getGeom();null!==n&&t.push(n)}return t}}class Q{constructor(t){this.rings=t,this.polys=this._composePolys(t)}getGeom(){const t=[];for(let e=0,n=this.polys.length;e<n;e++){const n=this.polys[e].getGeom();null!==n&&t.push(n)}return t}_composePolys(t){const e=[];for(let n=0,r=t.length;n<r;n++){const r=t[n];if(!r.poly)if(r.isExteriorRing())e.push(new X(r));else{const t=r.enclosingRing();t.poly||e.push(new X(t)),t.poly.addInterior(r)}}return e}}class W{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.compare;this.queue=t,this.tree=new l(e),this.segments=[]}process(t){const e=t.segment,n=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),n;const r=t.isLeft?this.tree.add(e):this.tree.find(e);if(!r)throw new Error(`Unable to find segment #${e.id} [${e.leftSE.point.x}, ${e.leftSE.point.y}] -> [${e.rightSE.point.x}, ${e.rightSE.point.y}] in SweepLine tree.`);let i,o,s=r,l=r;for(;void 0===i;)s=this.tree.prev(s),null===s?i=null:void 0===s.key.consumedBy&&(i=s.key);for(;void 0===o;)l=this.tree.next(l),null===l?o=null:void 0===l.key.consumedBy&&(o=l.key);if(t.isLeft){let r=null;if(i){const t=i.getIntersection(e);if(null!==t&&(e.isAnEndpoint(t)||(r=t),!i.isAnEndpoint(t))){const e=this._splitSafely(i,t);for(let t=0,r=e.length;t<r;t++)n.push(e[t])}}let s=null;if(o){const t=o.getIntersection(e);if(null!==t&&(e.isAnEndpoint(t)||(s=t),!o.isAnEndpoint(t))){const e=this._splitSafely(o,t);for(let t=0,r=e.length;t<r;t++)n.push(e[t])}}if(null!==r||null!==s){let t=null;if(null===r)t=s;else if(null===s)t=r;else{t=q.comparePoints(r,s)<=0?r:s}this.queue.remove(e.rightSE),n.push(e.rightSE);const i=e.split(t);for(let t=0,e=i.length;t<e;t++)n.push(i[t])}n.length>0?(this.tree.remove(e),n.push(t)):(this.segments.push(e),e.prev=i)}else{if(i&&o){const t=i.getIntersection(o);if(null!==t){if(!i.isAnEndpoint(t)){const e=this._splitSafely(i,t);for(let t=0,r=e.length;t<r;t++)n.push(e[t])}if(!o.isAnEndpoint(t)){const e=this._splitSafely(o,t);for(let t=0,r=e.length;t<r;t++)n.push(e[t])}}}this.tree.remove(e)}return n}_splitSafely(t,e){this.tree.remove(t);const n=t.rightSE;this.queue.remove(n);const r=t.split(e);return r.push(n),void 0===t.consumedBy&&this.tree.add(t),r}}const Z="undefined"!=typeof process&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,D="undefined"!=typeof process&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;const H=new class{run(t,e,n){H.type=t,b.reset();const r=[new Y(e,!0)];for(let t=0,e=n.length;t<e;t++)r.push(new Y(n[t],!1));if(H.numMultiPolys=r.length,"difference"===H.type){const t=r[0];let e=1;for(;e<r.length;)null!==p(r[e].bbox,t.bbox)?e++:r.splice(e,1)}if("intersection"===H.type)for(let t=0,e=r.length;t<e;t++){const e=r[t];for(let n=t+1,i=r.length;n<i;n++)if(null===p(e.bbox,r[n].bbox))return[]}const i=new l(q.compare);for(let t=0,e=r.length;t<e;t++){const e=r[t].getSweepEvents();for(let t=0,n=e.length;t<n;t++)if(i.insert(e[t]),i.size>Z)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}const o=new W(i);let s=i.size,h=i.pop();for(;h;){const t=h.key;if(i.size===s){const e=t.segment;throw new Error(`Unable to pop() ${t.isLeft?"left":"right"} SweepEvent [${t.point.x}, ${t.point.y}] from segment #${e.id} [${e.leftSE.point.x}, ${e.leftSE.point.y}] -> [${e.rightSE.point.x}, ${e.rightSE.point.y}] from queue.`)}if(i.size>Z)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(o.segments.length>D)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");const e=o.process(t);for(let t=0,n=e.length;t<n;t++){const n=e[t];void 0===n.consumedBy&&i.insert(n)}s=i.size,h=i.pop()}b.reset();const u=V.factory(o.segments);return new Q(u).getGeom()}};var J={union:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return H.run("union",t,n)},intersection:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return H.run("intersection",t,n)},xor:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return H.run("xor",t,n)},difference:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return H.run("difference",t,n)}};return J})();
//# sourceMappingURL=polygon-clipping.umd.min.js.map


const ORGS = [
  {code:"O370214008033001",name:"青岛和仁兴实业有限公司"},
  {code:"O370214008002001",name:"青岛市城阳区惜福镇街道西葛家集体经济组织"},
  {code:"O370214008003001",name:"青岛市城阳区惜福镇街道小庄集体经济组织"},
  {code:"O370214008004001",name:"青岛市城阳区惜福镇街道杨家村社区集体经济组织"},
  {code:"O370214008006001",name:"青岛市城阳区惜福镇街道松树庄社区股份经济合作社"},
  {code:"O370214008007001",name:"青岛市城阳区惜福镇街道科埠集体经济组织"},
  {code:"O370214008008001",name:"青岛市城阳区惜福镇街道宫家村社区股份经济合作社"},
  {code:"O370214008009001",name:"青岛市城阳区惜福镇街道傅家埠集体经济组织"},
  {code:"O370214008010001",name:"青岛市城阳区惜福镇街道青峰社区股份经济合作社"},
  {code:"O370214008011001",name:"青岛市城阳区惜福镇街道西铁社区股份经济合作社"},
  {code:"O370214008012001",name:"青岛市城阳区惜福镇街道惜福镇社区股份经济合作社"},
  {code:"O370214008013001",name:"青岛市城阳区惜福镇街道吴贾村社区股份经济合作社"},
  {code:"O370214008014001",name:"青岛市城阳区惜福镇街道河湾集体经济组织"},
  {code:"O370214008015001",name:"青岛市城阳区惜福镇街道霞沟集体经济组织"},
  {code:"O370214008016001",name:"青岛市城阳区惜福镇街道东荆社区股份经济合作社"},
  {code:"O370214008017001",name:"青岛市城阳区惜福镇街道演礼集体经济组织"},
  {code:"O370214008018001",name:"青岛市城阳区惜福镇街道后庄集体经济组织"},
  {code:"O370214008019001",name:"青岛市城阳区惜福镇街道东铁集体经济组织"},
  {code:"O370214008020001",name:"青岛市城阳区惜福镇街道李辛集体经济组织"},
  {code:"O370214008021001",name:"青岛市城阳区惜福镇街道前金集体经济组织"},
  {code:"O370214008022001",name:"青岛市城阳区惜福镇街道西荆集体经济组织"},
  {code:"O370214008023001",name:"青岛市城阳区惜福镇街道书院集体经济组织"},
  {code:"O370214008024001",name:"青岛市城阳区惜福镇街道黄家营集体经济组织"},
  {code:"O370214008025001",name:"青岛市城阳区惜福镇街道东葛家集体经济组织"},
  {code:"O370214008026001",name:"青岛市城阳区惜福镇街道后金社区股份经济合作社"},
  {code:"O370214008027001",name:"青岛市城阳区惜福镇街道棉花集体经济组织"},
  {code:"O370214008028001",name:"青岛市城阳区惜福镇街道院后社区股份经济合作社"},
  {code:"O370214008029001",name:"青岛市城阳区惜福镇街道超然集体经济组织"},
  {code:"O370214008030001",name:"青岛市城阳区惜福镇街道南寨集体经济组织"},
  {code:"O370214008031001",name:"青岛市城阳区惜福镇街道牟家村集体经济组织"},
  {code:"O370214008032001",name:"青岛市城阳区惜福镇街道纸房集体经济组织"},
];

const CONFIG = {
  baseUrl: 'http://qdsz.cloudlizard.cn:19080',
  checkOtherAssets: false, // 不可用的经营性/非经营性抽查默认跳过
  threshold: 0.20,          // 重叠比例阈值（严格大于）
  pageSize: 500,
  requestTimeout: 30000,    // 请求超时，避免无限等待
  detailConcurrency: 10,    // 明细接口并发数
  lat0: 36.3,               // 面积投影参考纬度（惜福镇）
  xlsxCdns: [
    'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
    'https://unpkg.com/xlsx@0.18.5/dist/xlsx.full.min.js'
  ]
};

/* ---------------- 工具 ---------------- */
function getToken() {
  const m = document.cookie.match(/(?:^|;\s*)X-user-token-header=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

async function apiFetch(path, opts) {
  opts = opts || {};
  const token = getToken();
  if (!token) throw new Error('NO_LOGIN');
  const headers = {
    'X-user-token-header': token,
    'X-tenant-id-header': 'default',
    'Content-Type': 'application/json'
  };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), opts.timeout || CONFIG.requestTimeout);
  try {
    const res = await fetch(CONFIG.baseUrl + path, {
      method: opts.method || 'GET', headers: headers, body: opts.body,
      signal: controller.signal
    });
    if (res.status === 401 || res.status === 403) throw new Error('NO_LOGIN');
    if (!res.ok) throw new Error('HTTP ' + res.status + '：' + path);
    const j = await res.json();
    // 平台成功码可能是数字 0 或字符串 "0"；缺失/空值不能当成功。
    if (!j || (j.returnCode !== 0 && j.returnCode !== '0')) {
      throw new Error('接口异常 returnCode=' + (j && j.returnCode) +
        '；' + String((j && (j.returnMsg || j.message || j.msg)) || '') + '；' + path);
    }
    return j;
  } catch (e) {
    if (e.name === 'AbortError') throw new Error('请求超过' + ((opts.timeout || CONFIG.requestTimeout) / 1000) + '秒：' + path + '，请检查网络后重试');
    throw e;
  } finally {
    clearTimeout(timer);
  }
}

function download(filename, content, mime) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mime || 'application/octet-stream' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
}

function loadScript(url, timeout) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    const t = setTimeout(() => { s.remove(); reject(new Error('timeout')); }, timeout || 15000);
    s.onload = () => { clearTimeout(t); resolve(); };
    s.onerror = () => { clearTimeout(t); s.remove(); reject(new Error('load fail')); };
    s.src = url;
    document.head.appendChild(s);
  });
}

/* ---------------- 几何 ---------------- */
function projectMp(coords, lat0) {
  const kx = 111320 * Math.cos(lat0 * Math.PI / 180), ky = 110540;
  return coords.map(poly => poly.map(ring => ring.map(pt => [pt[0] * kx, pt[1] * ky])));
}
function ringArea(r) {
  if (!r.length) return 0;
  const ox = r[0][0], oy = r[0][1];
  let s = 0;
  for (let i = 0; i < r.length; i++) {
    const j = (i + 1) % r.length;
    s += (r[i][0] - ox) * (r[j][1] - oy) - (r[j][0] - ox) * (r[i][1] - oy);
  }
  return Math.abs(s) / 2;
}

function geometryMp(g) {
  if (g.type === 'Feature') return geometryMp(g.geometry);
  if (g.type === 'FeatureCollection') return g.features.flatMap(geometryMp);
  if (g.type === 'GeometryCollection') return g.geometries.flatMap(geometryMp);
  let mp;
  if (g.type === 'Polygon') mp = [g.coordinates];
  else if (g.type === 'MultiPolygon') mp = g.coordinates;
  else if (!g.type && Array.isArray(g.coordinates)) {
    mp = typeof g.coordinates[0]?.[0]?.[0] === 'number' ? [g.coordinates] : g.coordinates;
  } else throw new Error('不支持的图斑类型：' + g.type);
  if (!Array.isArray(mp) || !mp.length) throw new Error('图斑坐标为空');
  for (const poly of mp) for (const ring of poly) {
    if (!Array.isArray(ring) || ring.length < 3) throw new Error('图斑环不足3个点');
    for (const pt of ring) {
      if (!Array.isArray(pt) || !Number.isFinite(pt[0]) || !Number.isFinite(pt[1])) throw new Error('非数值坐标');
      if (Math.abs(pt[0]) > 180 || Math.abs(pt[1]) > 90) throw new Error('坐标不是经纬度，需核实坐标系');
    }
  }
  return mp;
}

function geometrySelfTest() {
  const a = [[[[0,0],[10,0],[10,10],[0,10],[0,0]]]];
  const b = [[[[5,0],[15,0],[15,10],[5,10],[5,0]]]];
  const area = mpArea(polygonClipping.intersection(a, b));
  if (Math.abs(area - 50) > 1e-8) throw new Error('几何自检失败：已知交集应为50，实际=' + area);
}

function mpArea(mp) {
  let a = 0;
  for (const poly of mp) {
    if (!poly.length) continue;
    a += ringArea(poly[0]);
    for (let i = 1; i < poly.length; i++) a -= ringArea(poly[i]);
  }
  return a;
}
function mpBbox(mp) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const poly of mp) for (const ring of poly) for (const pt of ring) {
    if (pt[0] < x0) x0 = pt[0]; if (pt[0] > x1) x1 = pt[0];
    if (pt[1] < y0) y0 = pt[1]; if (pt[1] > y1) y1 = pt[1];
  }
  return [x0, y0, x1, y1];
}
function bboxHit(a, b) {
  return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
}

/* ---------------- 数据拉取 ---------------- */
async function fetchOrgAssets(orgCode, onTick) {
  let page = 1;
  const all = [];
  for (;;) {
    const j = await apiFetch(
      '/api/asset/landAsset/page?page=' + page + '&rows=' + CONFIG.pageSize +
      '&assetCategory=Z&snapshot=false&valid=1&orgCode=' + encodeURIComponent(orgCode),
      { method: 'POST', body: '{}' }
    );
    if (!j.data || !Array.isArray(j.data.rows)) throw new Error('资产列表响应缺少 data.rows，组织=' + orgCode);
    const rows = (j.data && j.data.rows) || [];
    all.push(...rows);
    const total = (j.data && j.data.total) || 0;
    if (onTick) onTick(all.length, total);
    if (all.length >= total || rows.length === 0) break;
    page++;
  }
  return all;
}

async function fetchGeoBatch(items, onProg) {
  // items: [{id, ...}], 返回 geoJson 数组（与 items 对齐）
  const out = new Array(items.length).fill(null);
  let cursor = 0, done = 0, failure = null;
  async function worker() {
    while (!failure && cursor < items.length) {
      const i = cursor++;
      try {
        const j = await apiFetch('/api/asset/landAsset/get/' + items[i].id);
        out[i] = (j.data && j.data.geoJson) || null;
      } catch (e) { failure = failure || new Error('图斑明细读取失败，资产ID=' + items[i].id + '：' + e.message); return; }
      if (failure) return;
      done++;
      if (onProg) onProg(done, items.length);
    }
  }
  const ws = [];
  for (let k = 0; k < CONFIG.detailConcurrency; k++) ws.push(worker());
  await Promise.all(ws);
  if (failure) throw failure;
  return out;
}

// 经营性/非经营性资产图斑抽查（仅计数，不拉明细）
async function checkJF(orgCode) {
  try {
    const j = await apiFetch('/api/asset/page?page=1&rows=500&orgCode=' + encodeURIComponent(orgCode),
      { method: 'POST', body: '{}', timeout: 10000 });
    if (!j.data || !Array.isArray(j.data.rows)) throw new Error('抽查响应缺少 data.rows');
    const rows = j.data.rows;
    return { total: j.data.total || 0, withGeo: rows.filter(r => r.geoJson).length, sampled: rows.length, err: false };
  } catch (e) {
    return { total: 0, withGeo: 0, sampled: 0, err: true, error: e.message };
  }
}

async function checkJFBatch(orgs, onProg) {
  const out = new Array(orgs.length);
  let cursor = 0, done = 0;
  async function worker() {
    while (cursor < orgs.length) {
      const i = cursor++;
      const org = orgs[i];
      const s = await checkJF(org.code);
      out[i] = { ...s, name: org.name, code: org.code };
      done++;
      if (onProg) onProg(done, orgs.length, out[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(4, orgs.length) }, () => worker()));
  return out;
}

/* ---------------- 分析 ---------------- */
// 两个图斑共用同一局部原点；平移不改变面积和重叠关系。
function intersectPair(a, b) {
  const ox = Math.min(a.bbox[0], b.bbox[0]);
  const oy = Math.min(a.bbox[1], b.bbox[1]);
  const local = (mp, grid) => mp.map(poly => poly.map(ring => ring.map(pt => {
    const x = pt[0] - ox, y = pt[1] - oy;
    return grid ? [Math.round(x / grid) * grid, Math.round(y / grid) * grid] : [x, y];
  })));
  let lastError;
  for (const grid of [0, 0.001, 0.01]) {
    try {
      const inter = polygonClipping.intersection(local(a.mp, grid), local(b.mp, grid));
      const area = mpArea(inter);
      if (!Number.isFinite(area)) throw new Error('交集面积非有限数值');
      return { area, grid };
    } catch (e) { lastError = e; }
  }
  throw lastError;
}

async function analyze(polys, threshold, onProg) {
  let lastYield = Date.now();
  const overlaps = [];
  const n = polys.length;
  let checked = 0;
  const diagnostics = { candidatePairs: 0, positivePairs: 0, failedPairs: 0, roundedPairs: 0, maxRatio: 0, errors: [], issues: [] };
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Date.now() - lastYield > 40) {
        if (onProg) onProg(i, n);
        await new Promise(resolve => setTimeout(resolve, 0));
        lastYield = Date.now();
      }
      if (!bboxHit(polys[i].bbox, polys[j].bbox)) continue;
      diagnostics.candidatePairs++;
      let calc;
      try { calc = intersectPair(polys[i], polys[j]); }
      catch (e) {
        diagnostics.failedPairs++;
        const error = String(polys[i].assetCode) + ' / ' + String(polys[j].assetCode) + '：' + e.message;
        if (diagnostics.errors.length < 5) diagnostics.errors.push(error);
        diagnostics.issues.push({ ai: i, bi: j, status: '计算失败，重叠比例未知，待核实', grid: '', error: e.message });
        continue;
      }
      if (calc.grid) {
        diagnostics.roundedPairs++;
        diagnostics.issues.push({ ai: i, bi: j, status: '精度重试成功，近阈值结果需复核', grid: calc.grid, error: '' });
      }
      const ia = calc.area;
      if (ia <= 0) continue;
      diagnostics.positivePairs++;
      const ratio = ia / Math.min(polys[i].area, polys[j].area);
      diagnostics.maxRatio = Math.max(diagnostics.maxRatio, ratio);
      if (ratio > threshold) overlaps.push({ ai: i, bi: j, interArea: ia, ratio: ratio, grid: calc.grid });
    }
    checked++;
    if (onProg && (checked % 50 === 0 || checked === n)) onProg(checked, n);
  }
  overlaps.sort((x, y) => y.ratio - x.ratio);
  overlaps.diagnostics = diagnostics;
  return overlaps;
}

/* ---------------- 导出 ---------------- */
function buildRows(polys, overlaps) {
  return overlaps.map((o, idx) => {
    const a = polys[o.ai], b = polys[o.bi];
    let note = '';
    if (o.ratio >= 0.999) note = '疑似重复登记（小的完全被大的包住）';
    else if (a.orgCode !== b.orgCode) note = '跨组织重叠';
    if (o.grid) note += (note ? '；' : '') + '坐标按' + (o.grid * 1000) + '毫米网格重试，面积为近似值';
    return {
      '序号': idx + 1,
      '权属单位A': a.orgName, '资产名称A': a.assetName, '资产编号A': a.assetCode,
      '图斑面积A(㎡)': Math.round(a.area * 100) / 100,
      '权属单位B': b.orgName, '资产名称B': b.assetName, '资产编号B': b.assetCode,
      '图斑面积B(㎡)': Math.round(b.area * 100) / 100,
      '交集面积(㎡)': Math.round(o.interArea * 100) / 100,
      '重叠比例': Math.round(o.ratio * 10000) / 100 + '%',
      '备注': note
    };
  });
}

function toCsv(rows) {
  if (!rows.length) return '';
  const keys = Object.keys(rows[0]);
  const esc = v => {
    const s = String(v == null ? '' : v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  const lines = [keys.map(esc).join(',')];
  for (const r of rows) lines.push(keys.map(k => esc(r[k])).join(','));
  return '\ufeff' + lines.join('\r\n');
}

async function exportExcel(polys, overlaps, stats, jfStats) {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const detailRows = buildRows(polys, overlaps);

  // 组织汇总
  const orgStat = {};
  ORGS.forEach(o => { orgStat[o.code] = { name: o.name, code: o.code, total: 0, withGeom: 0, overlap: 0 }; });
  stats.perOrg.forEach(s => {
    if (orgStat[s.code]) { orgStat[s.code].total = s.total; orgStat[s.code].withGeom = s.withGeom; }
  });
  overlaps.forEach(o => {
    const a = polys[o.ai], b = polys[o.bi];
    if (orgStat[a.orgCode]) orgStat[a.orgCode].overlap++;
    if (orgStat[b.orgCode]) orgStat[b.orgCode].overlap++;
  });
  const summaryRows = ORGS.map((o, i) => ({
    '序号': i + 1, '组织名称': o.name, '组织代码': o.code,
    '资源性资产总数': orgStat[o.code].total,
    '有图斑数': orgStat[o.code].withGeom,
    '涉及重叠关系数': orgStat[o.code].overlap
  }));

  const diag = overlaps.diagnostics || {};
  const issueRows = (diag.issues || []).map((issue, i) => {
    const a = polys[issue.ai], b = polys[issue.bi];
    return { '序号': i + 1, '权属单位A': a.orgName, '资产名称A': a.assetName, '资产编号A': a.assetCode,
      '权属单位B': b.orgName, '资产名称B': b.assetName, '资产编号B': b.assetCode,
      '处理状态': issue.status, '重试网格(毫米)': issue.grid ? issue.grid * 1000 : '', '错误信息': issue.error };
  });
  const noteLines = [
    '分析诊断：候选对=' + diag.candidatePairs + '，正交集对=' + diag.positivePairs + '，失败对=' + diag.failedPairs + '，最大比例=' + ((diag.maxRatio || 0) * 100).toFixed(2) + '%',
    '结果状态：' + (diag.failedPairs ? '部分结果；仍有' + diag.failedPairs + '对无法计算，详见异常待核查表。不得认定核查完整。' : '本次有效资源性图斑对已完成计算。') + ' 精度重试' + (diag.roundedPairs || 0) + '对。',
    '数字云图图斑重叠核查说明（油猴脚本自动生成）',
    '',
    '一、核查范围：惜福镇街道下属31个组织；资源性资产（Z）图斑。',
    '二、计算口径：重叠比例 = 交集面积 ÷ min(两图斑面积)，严格大于阈值（默认20%）的纳入明细。',
    '   面积：将EPSG:4490经纬度按等距圆柱投影换算为平方米（参考纬度36.3°，青岛适用）。',
    '三、经营性/非经营性资产仅抽查各组织第一页，不参与本次资源性资产重叠计算。抽查失败不代表无图斑。',
    '   各组织抽查：' + (jfStats.length ? '已执行；' : '本次跳过，图斑情况未知；') + jfStats.map(s => s.name + '：' + (s.err ? '抽查失败（' + s.error + '）' : s.withGeo + '/' + s.sampled)).join('，'),
    '四、本次仅查询分析，未修改平台任何数据。',
    '五、生成时间：' + new Date().toLocaleString('zh-CN')
  ];

  // 尝试加载 SheetJS
  let xlsxOk = !!window.XLSX;
  if (!xlsxOk) {
    for (const url of CONFIG.xlsxCdns) {
      try { await loadScript(url, 15000); if (window.XLSX) { xlsxOk = true; break; } }
      catch (e) { /* 试下一个 */ }
    }
  }

  if (xlsxOk) {
    const wb = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(wb, window.XLSX.utils.json_to_sheet(detailRows), '重叠明细');
    window.XLSX.utils.book_append_sheet(wb, window.XLSX.utils.json_to_sheet(summaryRows), '组织汇总');
    window.XLSX.utils.book_append_sheet(wb,
      window.XLSX.utils.aoa_to_sheet(noteLines.map(t => [t])), '处理说明');
    if (issueRows.length) window.XLSX.utils.book_append_sheet(wb, window.XLSX.utils.json_to_sheet(issueRows), '异常待核查');
    const wbout = window.XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    download('惜福镇街道图斑重叠核查_' + (diag.failedPairs ? '部分结果_' : '') + dateStr + '.xlsx',
      new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    return 'xlsx';
  } else {
    download('惜福镇街道图斑重叠核查_重叠明细_' + dateStr + '.csv', toCsv(detailRows), 'text/csv;charset=utf-8');
    download('惜福镇街道图斑重叠核查_组织汇总_' + dateStr + '.csv', toCsv(summaryRows), 'text/csv;charset=utf-8');
    if (issueRows.length) download('惜福镇街道图斑重叠核查_异常待核查_' + dateStr + '.csv', toCsv(issueRows), 'text/csv;charset=utf-8');
    download('惜福镇街道图斑重叠核查_处理说明_' + dateStr + '.txt', noteLines.join('\r\n'), 'text/plain;charset=utf-8');
    return 'csv';
  }
}

/* ---------------- 主流程 ---------------- */
async function runCheck(ui) {
  geometrySelfTest();
  ui.log('几何库自检通过：已知50%重叠计算正确');
  const threshold = ui.getThreshold();
  ui.log('开始核查：31个组织，阈值 >' + Math.round(threshold * 100) + '%');
  ui.progress(2, '拉取资产列表…');

  // 1. 拉取各组织资产
  const allAssets = [];
  const perOrg = [];
  for (let i = 0; i < ORGS.length; i++) {
    const org = ORGS[i];
    ui.progress(2 + (i / ORGS.length) * 28, '拉取资产列表 (' + (i + 1) + '/31)：' + org.name.slice(-8));
    const rows = await fetchOrgAssets(org.code, (d, t) => {
      ui.progress(2 + (i / ORGS.length) * 28, '拉取资产列表 (' + (i + 1) + '/31)：' + org.name.slice(-8) + '，已取' + d + '/' + t);
    });
    perOrg.push({ code: org.code, name: org.name, total: rows.length, withGeom: 0 });
    rows.forEach(r => allAssets.push({
      id: r.id, orgCode: r.orgCode || org.code, orgName: r.orgName || org.name,
      assetCode: r.assetCode, assetName: r.assetName, mapArea: r.mapArea
    }));
  }
  ui.log('资产总数：' + allAssets.length);

  // 2. 拉取图斑
  ui.progress(32, '拉取图斑明细（' + allAssets.length + '条）…');
  const geos = await fetchGeoBatch(allAssets, (d, t) => {
    ui.progress(32 + (d / t) * 40, '拉取图斑明细：' + d + '/' + t);
  });

  // 3. 解析几何
  const polys = [];
  let parseFail = 0;
  // 用全部图斑的 bbox 中心纬度做投影参考
  let latSum = 0, latCnt = 0;
  const rawGeoms = [];
  for (let i = 0; i < allAssets.length; i++) {
    const g = geos[i];
    if (!g) continue;
    try {
      const gj = typeof g === 'string' ? JSON.parse(g) : g;
      const coords = geometryMp(gj);
      if (!coords || !coords.length) continue;
      rawGeoms.push({ asset: allAssets[i], coords: coords });
      // 采样纬度
      const s = coords[0][0][0];
      latSum += s[1]; latCnt++;
    } catch (e) { parseFail++; }
  }
  const lat0 = latCnt ? latSum / latCnt : CONFIG.lat0;
  for (const rg of rawGeoms) {
    try {
      const mp = projectMp(rg.coords, lat0);
      const area = mpArea(mp);
      if (!Number.isFinite(area) || area <= 0) throw new Error('无效图斑面积');
      polys.push({
        orgCode: rg.asset.orgCode, orgName: rg.asset.orgName,
        assetCode: rg.asset.assetCode, assetName: rg.asset.assetName,
        mapArea: rg.asset.mapArea, mp: mp, area: area, bbox: mpBbox(mp)
      });
    } catch (e) { parseFail++; }
  }
  perOrg.forEach(p => {
    p.withGeom = polys.filter(x => x.orgCode === p.code).length;
  });
  ui.log('有效图斑：' + polys.length + '（解析失败 ' + parseFail + '）');

  // 4. 经营性/非经营性抽查
  ui.progress(74, '抽查经营性/非经营性资产图斑…');
  const jfStats = CONFIG.checkOtherAssets ? await checkJFBatch(ORGS, (d, t, s) => {
    ui.progress(74 + (d / t) * 5, '抽查经营性/非经营性资产图斑：' + d + '/' + t);
    ui.log('抽查 ' + d + '/' + t + '：' + s.name + (s.err ? '；失败：' + s.error : '；有图斑 ' + s.withGeo + '/' + s.sampled));
  }) : [];
  const jfFailed = jfStats.filter(s => s.err).length;
  const jfTotal = jfStats.reduce((a, b) => a + b.withGeo, 0);
  if (CONFIG.checkOtherAssets) ui.log('抽查成功 ' + (ORGS.length - jfFailed) + '/31，有图斑 ' + jfTotal + '，失败 ' + jfFailed + '（失败不计为无图斑）；继续资源性资产重叠分析');
  if (!CONFIG.checkOtherAssets) ui.log('经营性/非经营性抽查已跳过（接口此前全部超时），其图斑情况未知；本次仅核查资源性资产');
  if (jfTotal) ui.log('注意：抽查发现经营性/非经营性资产有图斑，本次重叠分析仍仅覆盖资源性资产。');

  // 5. 重叠分析
  ui.progress(80, '空间分析中…');
  const overlaps = await analyze(polys, threshold, (d, t) => {
    ui.progress(80 + (d / t) * 18, '空间分析：' + d + '/' + t);
  });
  const diag = overlaps.diagnostics;
  ui.log('分析诊断：包围框相交 ' + diag.candidatePairs + ' 对；正交集 ' + diag.positivePairs + ' 对；计算失败 ' + diag.failedPairs + ' 对；最大比例 ' + (diag.maxRatio * 100).toFixed(2) + '%');
  diag.errors.forEach(e => ui.log('计算失败样例：' + e));
  ui.log('精度重试成功：' + diag.roundedPairs + ' 对（异常待核查表中标记）');
  if (diag.failedPairs) ui.log('⚠ 仍有 ' + diag.failedPairs + ' 对无法计算；可导出已检出结果，失败对单列异常待核查，不能当作完整结论');
  if (parseFail) throw new Error('存在 ' + parseFail + ' 个图斑解析失败，不能将结果作为完整核查结论；请核实图斑格式/坐标系');
  ui.progress(100, diag.failedPairs ? '部分完成：仍有图斑对待核实' : '完成');
  ui.log('检出重叠>' + Math.round(threshold * 100) + '%：' + overlaps.length + '对');

  // 分类统计
  let identical = 0, cross = 0;
  overlaps.forEach(o => {
    if (o.ratio >= 0.999) identical++;
    if (polys[o.ai].orgCode !== polys[o.bi].orgCode) cross++;
  });

  return { polys, overlaps, perOrg, jfStats, stats: { identical, cross } };
}

/* ---------------- 界面 ---------------- */
function createUI() {
  const box = document.createElement('div');
  box.id = 'tbcheck-panel';
  box.innerHTML =
    '<div id="tbcheck-head" style="cursor:pointer;user-select:none;display:flex;justify-content:space-between;align-items:center;">' +
    '<b>📐 图斑重叠核查</b><span id="tbcheck-toggle">－</span></div>' +
    '<div id="tbcheck-body">' +
    '<div style="margin:8px 0;font-size:12px;color:#555;">惜福镇街道31个组织 · 资源性资产图斑<br>重叠比例 = 交集面积 ÷ 较小图斑面积</div>' +
    '<label style="font-size:12px;">阈值(%) <input id="tbcheck-th" type="number" value="20" min="1" max="99" style="width:52px;"></label> ' +
    '<button id="tbcheck-run" style="margin-left:6px;padding:4px 14px;cursor:pointer;">开始核查</button>' +
    '<div id="tbcheck-barwrap" style="display:none;margin-top:8px;background:#eee;border-radius:4px;height:10px;">' +
    '<div id="tbcheck-bar" style="height:100%;width:0%;background:#1F4E78;border-radius:4px;"></div></div>' +
    '<div id="tbcheck-status" style="font-size:12px;color:#666;margin-top:6px;min-height:18px;"></div>' +
    '<div id="tbcheck-log" style="font-size:11px;color:#888;max-height:120px;overflow:auto;margin-top:4px;border-top:1px solid #eee;padding-top:4px;"></div>' +
    '<div id="tbcheck-result" style="display:none;margin-top:8px;"></div>' +
    '</div>';
  Object.assign(box.style, {
    position: 'fixed', top: '70px', right: '12px', width: '360px', zIndex: 99999,
    background: '#fff', border: '1px solid #1F4E78', borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0,0,0,.25)', fontFamily: 'Microsoft YaHei,sans-serif',
    fontSize: '13px', color: '#333'
  });
  box.querySelector('#tbcheck-head').style.cssText +=
    ';background:#1F4E78;color:#fff;padding:8px 12px;border-radius:7px 7px 0 0;';
  box.querySelector('#tbcheck-body').style.padding = '10px 12px';
  document.body.appendChild(box);

  const ui = {
    bar: box.querySelector('#tbcheck-bar'),
    barwrap: box.querySelector('#tbcheck-barwrap'),
    status: box.querySelector('#tbcheck-status'),
    logBox: box.querySelector('#tbcheck-log'),
    result: box.querySelector('#tbcheck-result'),
    getThreshold() {
      const v = parseFloat(box.querySelector('#tbcheck-th').value);
      return (isNaN(v) || v <= 0 || v >= 100 ? 20 : v) / 100;
    },
    progress(p, text) {
      this.barwrap.style.display = 'block';
      this.bar.style.width = Math.min(100, p) + '%';
      if (text) this.status.textContent = text;
    },
    log(t) {
      const d = document.createElement('div');
      d.textContent = new Date().toLocaleTimeString('zh-CN') + ' ' + t;
      this.logBox.appendChild(d);
      this.logBox.scrollTop = this.logBox.scrollHeight;
    },
    showResult(data) {
      const r = this.result;
      r.style.display = 'block';
      const s = data.stats;
      const diag = data.overlaps.diagnostics;
      r.innerHTML =
        '<div style="font-size:13px;line-height:1.9;background:#f6f9fc;padding:8px;border-radius:4px;">' +
        (diag.failedPairs ? '⚠ 部分结果：' + diag.failedPairs + '对计算失败，详见异常待核查表<br>' : '') +
        '精度重试：' + diag.roundedPairs + '对<br>' +
        '有效图斑：<b>' + data.polys.length + '</b> 个<br>' +
        '重叠关系：<b style="color:#c00;">' + data.overlaps.length + '</b> 对<br>' +
        '<span style="font-size:12px;color:#666;">其中≈100%（小完全被包住）' + s.identical +
        ' 对 · 跨组织 ' + s.cross + ' 对</span></div>' +
        '<button id="tbcheck-dl" style="margin-top:8px;padding:6px 16px;cursor:pointer;background:#1F4E78;color:#fff;border:none;border-radius:4px;">⬇ 导出Excel</button>' +
        '<div id="tbcheck-dlmsg" style="font-size:11px;color:#888;margin-top:4px;"></div>';
      r.querySelector('#tbcheck-dl').onclick = async () => {
        const msg = r.querySelector('#tbcheck-dlmsg');
        msg.textContent = '正在生成文件…';
        try {
          const fmt = await exportExcel(data.polys, data.overlaps, data, data.jfStats);
          msg.textContent = fmt === 'xlsx' ? '已导出 xlsx' : 'CDN不可用，已导出 csv（可用Excel打开）';
        } catch (e) { msg.textContent = '导出失败：' + e.message; }
      };
    }
  };

  box.querySelector('#tbcheck-head').onclick = () => {
    const b = box.querySelector('#tbcheck-body');
    const t = box.querySelector('#tbcheck-toggle');
    if (b.style.display === 'none') { b.style.display = 'block'; t.textContent = '－'; }
    else { b.style.display = 'none'; t.textContent = '＋'; }
  };

  box.querySelector('#tbcheck-run').onclick = async (e) => {
    const btn = e.target;
    btn.disabled = true;
    ui.result.style.display = 'none';
    ui.logBox.innerHTML = '';
    try {
      if (!getToken()) throw new Error('NO_LOGIN');
      const data = await runCheck(ui);
      ui.showResult(data);
    } catch (err) {
      if (err.message === 'NO_LOGIN') {
        ui.status.textContent = '';
        ui.log('❌ 未检测到登录状态，请先在平台登录后再运行');
        alert('请先登录三资云图平台，再运行核查脚本');
      } else {
        ui.log('❌ 出错：' + err.message);
        ui.progress(0, '核查已停止，请查看上方错误日志后重试');
      }
      ui.bar.style.width = '0%';
    }
    btn.disabled = false;
  };

  return ui;
}

/* ---------------- 启动 ---------------- */
if (document.getElementById('tbcheck-panel')) {
  document.getElementById('tbcheck-panel').remove();
}
createUI();
console.log('[图斑重叠核查] 脚本已加载，面板在右上角');

})();
