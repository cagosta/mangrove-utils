/**
 * mangrove-utils version: "0.0.25" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/mangrove-utils for details
 */

define("mangrove-utils/clone",[],function(){return function(e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);return n}}),define("mangrove-utils/eachKey",[],function(){return function(e,n){for(var r in e)e.hasOwnProperty(r)&&n(r,e[r])}}),define("mangrove-utils/enumerate",[],function(){return Object.keys||function(){var e,n=[],r=r?r.callee?Array.prototype.slice.call(r):r:{};for(e in r)n.hasOwnProperty.call(r,e)&&n.push(e);return n}}),define("mangrove-utils/extend",[],function(){return function(e){e.prototype&&(e=e.prototype);for(var n=1,r=arguments.length;r>n;n++){var o=arguments[n].prototype||arguments[n];for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])}return e}}),define("mangrove-utils/isArray",[],function(){return function(e){return"object"==typeof e&&e&&-1!==e.constructor.toString().indexOf("Array")}}),define("mangrove-utils/hardClone",["./isArray"],function(e){return function(n){if("object"!=typeof n)return n;if(e(n)){for(var r=[],o=n.length;o--;){var t=typeof n[o];r[o]="string"===t||"number"===t||"boolean"===t||null===n[o]?n[o]:arguments.callee(n[o])}return r}var i={};for(var o in n)if(o&&n.hasOwnProperty(o)){var t=typeof n[o];i[o]="string"===t||"number"===t||"boolean"===t||null===n[o]?n[o]:arguments.callee(n[o])}return i}}),define("mangrove-utils/is",["./isArray"],function(e){var n=function(){};n.prototype={is:function(e,n){return this["is"+e.capitalize()](n)||!1},isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isArray:function(n){return e(n)},isValid:function(e){return"undefined"!=typeof e},isFunction:function(e){return"function"==typeof e},isPoint:function(e){return e&&e.isPoint},isPlainObject:function(e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString;if(!e||"[object Object]"!==r.call(e)||e.nodeType||e.setInterval)return!1;if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1;var o;for(o in e);return void 0===o||n.call(e,o)}};var r=new n;return r.is.bind(r)}),define("mangrove-utils/merge",[],function(){return function(e,n){var r={};for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);for(o in e)e.hasOwnProperty(o)&&(r[o]=e[o]);return r}}),define("mangrove-utils/objectify",[],function(){var e=/&amp;|&/g;return function(){for(var n={},r="string"==typeof arguments[0]?arguments[0]:"",o=~r.search(e)?r.split(e):r.length?[r]:[],t=0,i=o.length;i>t;t++)(function(e,n){var e=decodeURIComponent(e.replace(/\+/g,"%20")),r=e.indexOf("="),o=e.split("=",1),t=e.slice(r+1);n[o]=t})(o[t],n);return n}}),define("mangrove-utils/serialize",["./enumerate"],function(e){var n=/%20/g;return function(){for(var r=arguments[0]||{},o=e(r),t=0,i=o.length,s=[];i>t;t++)s.push(encodeURIComponent(o[t])+"="+encodeURIComponent(r[o[t]]));return s.join("&").replace(n,"+")}}),define("mangrove-utils/treeValue",[],function(){return function(e,n){for(var r=e.split("."),o=n,t=0,i=r.length;i>t;t++){var s=r[t].charAt(r[t].length-1);if(")"===s){var u=r[t].substr(0,r[t].indexOf("("));o=o[u]()}else"]"===s?(r[t].substr(0,r[t].indexOf("[")),o=o[u]):o=o[r[t]];if(!o)break}return o||null}}),define("mangrove-utils/bindPolyfill",[],function(){return Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),r=this,o=function(){},t=function(){return r.apply(this instanceof o&&e?this:e,n.concat(Array.prototype.slice.call(arguments)))};return o.prototype=this.prototype,t.prototype=new o,t}),Function.prototype.bind}),define("mangrove-utils/cover",[],function(){return function(e,n){var r=n[1]/n[0],o=e[1]/e[0],t=r>=o;return t?[e[0],e[0]*n[1]/n[0]]:[e[1]*n[0]/n[1],e[1]]}}),define("mangrove-utils/mangrove-utils",["./clone","./eachKey","./enumerate","./extend","./hardClone","./is","./isArray","./merge","./objectify","./serialize","./treeValue","./bindPolyfill","./cover"],function(e,n,r,o,t,i,s,u,a,c,l,f,p){return{clone:e,eachKey:n,enumerate:r,extend:o,hardClone:t,is:i,isArray:s,merge:u,objectify:a,serialize:c,treeValue:l,bindPolyfill:f,cover:p}});var EngineDetector=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};EngineDetector.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(e){this._global=e},ifNode:function(e){this.isNode&&e()},ifBrowser:function(e){this.isBrowser&&e()},exports:function(e,n){this.isNode?this._global.exports=n:this.isBrowser&&(this._global[e]=n)}};var engine=new EngineDetector,baseUrl,requirejs;engine.ifNode(function(){baseUrl=__dirname,requirejs=require("requirejs"),engine.setGlobal(module)}),engine.ifBrowser(function(){baseUrl="."}),requirejs.config({baseUrl:function(){return"undefined"==typeof define?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{"mangrove-utils":".",engineDetector:"bower_components/engineDetector/app",almond:"bower_components/almond/almond",chai:"bower_components/chai/chai","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon",ifEngineIsNode:"bower_components/engineDetector/app/ifEngineIsNode",ifEngineIsBrowser:"bower_components/engineDetector/app/ifEngineIsBrowser"}});var isStandalone=!!requirejs._defined,synchronous=isStandalone;if(engine.ifNode(function(){synchronous=!0}),synchronous){var mangroveUtils=requirejs("mangrove-utils/mangrove-utils");engine.exports("mangroveUtils",mangroveUtils)}else requirejs(["mangrove-utils/mangrove-utils"],function(e){engine.exports("mangroveUtils",e)});define("mangrove-utils/main",function(){});