/**
 * mangrove-utils version: "0.0.24" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/mangrove-utils for details
 */

define( [
    './clone',
    './eachKey',
    './enumerate',
    './extend',
    './hardClone',
    './is',
    './isArray',
    './merge',
    './objectify',
    './serialize',
    './treeValue',
    './bindPolyfill'
 ], function( clone, eachKey, enumerate, extend, hardClone, is, isArray, merge, objectify, serialize, treeValue, all, bindPolyfill) {


    return {
        clone: clone,
        eachKey: eachKey,
        enumerate: enumerate,
        extend: extend,
        hardClone: hardClone,
        is: is,
        isArray: isArray,
        merge: merge,
        objectify: objectify,
        serialize: serialize,
        treeValue: treeValue,
        bindPolyfill: bindPolyfill
    }
} )