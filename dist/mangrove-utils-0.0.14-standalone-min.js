/**
 * almond 0.2.7 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * mangrove-utils version: "0.0.14" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/mangrove-utils for details
 */

!function(){var n,e,r;!function(o){function t(n,e){return w.call(n,e)}function i(n,e){var r,o,t,i,s,u,c,a,f,l,p=e&&e.split("/"),m=b.map,g=m&&m["*"]||{};if(n&&"."===n.charAt(0))if(e){for(p=p.slice(0,p.length-1),n=p.concat(n.split("/")),a=0;a<n.length;a+=1)if(l=n[a],"."===l)n.splice(a,1),a-=1;else if(".."===l){if(1===a&&(".."===n[2]||".."===n[0]))break;a>0&&(n.splice(a-1,2),a-=2)}n=n.join("/")}else 0===n.indexOf("./")&&(n=n.substring(2));if((p||g)&&m){for(r=n.split("/"),a=r.length;a>0;a-=1){if(o=r.slice(0,a).join("/"),p)for(f=p.length;f>0;f-=1)if(t=m[p.slice(0,f).join("/")],t&&(t=t[o])){i=t,s=a;break}if(i)break;!u&&g&&g[o]&&(u=g[o],c=a)}!i&&u&&(i=u,s=c),i&&(r.splice(0,s,i),n=r.join("/"))}return n}function s(n,e){return function(){return m.apply(o,_.call(arguments,0).concat([n,e]))}}function u(n){return function(e){return i(e,n)}}function c(n){return function(e){h[n]=e}}function a(n){if(t(v,n)){var e=v[n];delete v[n],y[n]=!0,p.apply(o,e)}if(!t(h,n)&&!t(y,n))throw new Error("No "+n);return h[n]}function f(n){var e,r=n?n.indexOf("!"):-1;return r>-1&&(e=n.substring(0,r),n=n.substring(r+1,n.length)),[e,n]}function l(n){return function(){return b&&b.config&&b.config[n]||{}}}var p,m,g,d,h={},v={},b={},y={},w=Object.prototype.hasOwnProperty,_=[].slice;g=function(n,e){var r,o=f(n),t=o[0];return n=o[1],t&&(t=i(t,e),r=a(t)),t?n=r&&r.normalize?r.normalize(n,u(e)):i(n,e):(n=i(n,e),o=f(n),t=o[0],n=o[1],t&&(r=a(t))),{f:t?t+"!"+n:n,n:n,pr:t,p:r}},d={require:function(n){return s(n)},exports:function(n){var e=h[n];return"undefined"!=typeof e?e:h[n]={}},module:function(n){return{id:n,uri:"",exports:h[n],config:l(n)}}},p=function(n,e,r,i){var u,f,l,p,m,b,w=[],_=typeof r;if(i=i||n,"undefined"===_||"function"===_){for(e=!e.length&&r.length?["require","exports","module"]:e,m=0;m<e.length;m+=1)if(p=g(e[m],i),f=p.f,"require"===f)w[m]=d.require(n);else if("exports"===f)w[m]=d.exports(n),b=!0;else if("module"===f)u=w[m]=d.module(n);else if(t(h,f)||t(v,f)||t(y,f))w[m]=a(f);else{if(!p.p)throw new Error(n+" missing "+f);p.p.load(p.n,s(i,!0),c(f),{}),w[m]=h[f]}l=r?r.apply(h[n],w):void 0,n&&(u&&u.exports!==o&&u.exports!==h[n]?h[n]=u.exports:l===o&&b||(h[n]=l))}else n&&(h[n]=r)},n=e=m=function(n,e,r,t,i){return"string"==typeof n?d[n]?d[n](e):a(g(n,e).f):(n.splice||(b=n,e.splice?(n=e,e=r,r=null):n=o),e=e||function(){},"function"==typeof r&&(r=t,t=i),t?p(o,n,e,r):setTimeout(function(){p(o,n,e,r)},4),m)},m.config=function(n){return b=n,b.deps&&m(b.deps,b.callback),m},n._defined=h,r=function(n,e,r){e.splice||(r=e,e=[]),t(h,n)||t(v,n)||(v[n]=[n,e,r])},r.amd={jQuery:!0}}(),r("bower_components/almond/almond",function(){}),r("mangrove-utils/clone",[],function(){return function(n){var e={};for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r]);return e}}),r("mangrove-utils/eachKey",[],function(){return function(n,e){for(var r in n)n.hasOwnProperty(r)&&e(r,n[r])}}),r("mangrove-utils/enumerate",[],function(){return Object.keys||function(){var n,e=[],r=r?r.callee?Array.prototype.slice.call(r):r:{};for(n in r)e.hasOwnProperty.call(r,n)&&e.push(n);return e}}),r("mangrove-utils/extend",[],function(){return function(n){n.prototype&&(n=n.prototype);for(var e=1,r=arguments.length;r>e;e++){var o=arguments[e].prototype||arguments[e];for(var t in o)o.hasOwnProperty(t)&&(n[t]=o[t])}return n}}),r("mangrove-utils/isArray",[],function(){return function(n){return"object"==typeof n&&n&&-1!==n.constructor.toString().indexOf("Array")}}),r("mangrove-utils/hardClone",["./isArray"],function(n){return function(e){if("object"!=typeof e)return e;if(n(e)){for(var r=[],o=e.length;o--;){var t=typeof e[o];r[o]="string"===t||"number"===t||"boolean"===t||null===e[o]?e[o]:arguments.callee(e[o])}return r}var i={};for(var o in e)if(o&&e.hasOwnProperty(o)){var t=typeof e[o];i[o]="string"===t||"number"===t||"boolean"===t||null===e[o]?e[o]:arguments.callee(e[o])}return i}}),r("mangrove-utils/is",["./isArray"],function(n){var e=function(){};e.prototype={is:function(n,e){return this["is"+n.capitalize()](e)||!1},isNumber:function(n){return"number"==typeof n},isString:function(n){return"string"==typeof n},isArray:function(e){return n(e)},isValid:function(n){return"undefined"!=typeof n},isFunction:function(n){return"function"==typeof n},isPoint:function(n){return n&&n.isPoint},isPlainObject:function(n){var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString;if(!n||"[object Object]"!==r.call(n)||n.nodeType||n.setInterval)return!1;if(n.constructor&&!e.call(n,"constructor")&&!e.call(n.constructor.prototype,"isPrototypeOf"))return!1;var o;for(o in n);return void 0===o||e.call(n,o)}};var r=new e;return r.is.bind(r)}),r("mangrove-utils/merge",[],function(){return function(n,e){var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o]);for(o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);return r}}),r("mangrove-utils/objectify",[],function(){var n=/&amp;|&/g;return function(){for(var e={},r="string"==typeof arguments[0]?arguments[0]:"",o=~r.search(n)?r.split(n):r.length?[r]:[],t=0,i=o.length;i>t;t++)(function(n,e){var n=decodeURIComponent(n.replace(/\+/g,"%20")),r=n.indexOf("="),o=n.split("=",1),t=n.slice(r+1);e[o]=t})(o[t],e);return e}}),r("mangrove-utils/serialize",["./enumerate"],function(n){var e=/%20/g;return function(){for(var r=arguments[0]||{},o=n(r),t=0,i=o.length,s=[];i>t;t++)s.push(encodeURIComponent(o[t])+"="+encodeURIComponent(r[o[t]]));return s.join("&").replace(e,"+")}}),r("mangrove-utils/treeValue",[],function(){return function(n,e){for(var r=n.split("."),o=e,t=0,i=r.length;i>t;t++){var s=r[t].charAt(r[t].length-1);if(")"===s){var u=r[t].substr(0,r[t].indexOf("("));o=o[u]()}else"]"===s?(r[t].substr(0,r[t].indexOf("[")),o=o[u]):o=o[r[t]];if(!o)break}return o||null}}),r("mangrove-utils/mangrove-utils",["./clone","./eachKey","./enumerate","./extend","./hardClone","./is","./isArray","./merge","./objectify","./serialize","./treeValue"],function(n,e,r,o,t,i,s,u,c,a,f){return{clone:n,eachKey:e,enumerate:r,extend:o,hardClone:t,is:i,isArray:s,merge:u,objectify:c,serialize:a,treeValue:f}});var o=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};o.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(n){this._global=n},ifNode:function(n){this.isNode&&n()},ifBrowser:function(n){this.isBrowser&&n()},exports:function(n,e){this.isNode?this._global.exports=e:this.isBrowser&&(this._global[n]=e)}};var t,n,i=new o;i.ifNode(function(){t=__dirname,n=e("requirejs"),i.setGlobal(module)}),i.ifBrowser(function(){t="."}),n.config({baseUrl:function(){return"undefined"==typeof r?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{"mangrove-utils":".",almond:"bower_components/almond/almond",chai:"bower_components/chai/chai","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon"}});var s=!!n._defined,u=s;if(i.ifNode(function(){u=!0}),u){var c=n("mangrove-utils/mangrove-utils");i.exports("mangroveUtils",c)}else n(["mangrove-utils/mangrove-utils"],function(n){i.exports("mangroveUtils",n)});r("mangrove-utils/main",function(){})}();