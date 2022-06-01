(()=>{"use strict";var n,r,e,t,o,a,i,c,s,p,d,u,l,f,g={424:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  .main-container {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    box-shadow: 0 0 15px;\r\n    padding-top: 12px;\r\n    margin-top: 25vh;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .main-container div {\r\n    border-bottom: solid #d3d3d3 2px;\r\n  \r\n    /* border-top: solid #d3d3d3 1px; */\r\n  }\r\n  \r\n  .heading {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  .heading h2 {\r\n    opacity: 0.75;\r\n    font-size: 20px;\r\n  \r\n    /* margin-top: 24px; */\r\n    margin-left: 12px;\r\n    margin-bottom: 12px;\r\n  }\r\n  \r\n  .heading i {\r\n    margin-right: 12px;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  .line {\r\n    color: #d3d3d3;\r\n    opacity: 0.75;\r\n  }\r\n  \r\n  #input {\r\n    border: none;\r\n    margin-left: 12px;\r\n    font-style: italic;\r\n    padding: 12px;\r\n    width: 80%;\r\n  }\r\n  \r\n  #input:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .text-input {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  .text-input i {\r\n    margin-right: 12px;\r\n  }\r\n  \r\n  .hidden {\r\n    display: none;\r\n  }\r\n  \r\n  .task-ui {\r\n    display: flex;\r\n    padding-left: 12px;\r\n    align-items: center;\r\n  }\r\n  \r\n  .icon {\r\n    margin-left: auto;\r\n    margin-right: 12px;\r\n    cursor: pointer;\r\n    padding: 6px;\r\n  }\r\n  \r\n  .return {\r\n    padding: 6px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .reset {\r\n    padding: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .highlight {\r\n    background-color: #fbfecd;\r\n  }\r\n  \r\n  .para {\r\n    margin-left: 12px;\r\n    padding: 12px;\r\n  }\r\n  \r\n  .para:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .footer {\r\n    background-color: #f6f6f6;\r\n  \r\n    /* padding: 12px; */\r\n  }\r\n  \r\n  footer button {\r\n    border: none;\r\n    padding: 24px;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .line-through {\r\n    text-decoration: line-through;\r\n  }\r\n  ",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=t.base?s[0]+t.base:s[0],d=a[p]||0,u="".concat(p," ").concat(d);a[p]=d+1;var l=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)r[l].references++,r[l].updater(f);else{var g=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),p=0;p<a.length;p++){var d=e(a[p]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},h={};function m(n){var r=h[n];if(void 0!==r)return r.exports;var e=h[n]={id:n,exports:{}};return g[n](e,e.exports,m),e.exports}m.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return m.d(r,{a:r}),r},m.d=(n,r)=>{for(var e in r)m.o(r,e)&&!m.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},m.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),m.nc=void 0,n=m(379),r=m.n(n),e=m(795),t=m.n(e),o=m(569),a=m.n(o),i=m(565),c=m.n(i),s=m(216),p=m.n(s),d=m(589),u=m.n(d),l=m(424),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=p(),r()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals})();