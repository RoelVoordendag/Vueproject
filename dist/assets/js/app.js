/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(12);
var isBuffer = __webpack_require__(41);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(26)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(43);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(13);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(13);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false && isObject(value) && ('@binding' in value))
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.13';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(8), __webpack_require__(21).setImmediate))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppFooter_vue__ = __webpack_require__(29);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'app-header': __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__["a" /* default */],
    'app-footer': __WEBPACK_IMPORTED_MODULE_1__AppFooter_vue__["a" /* default */]
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_js__ = __webpack_require__(39);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'app-post': __WEBPACK_IMPORTED_MODULE_0__Post_vue__["a" /* default */]
  },
  data: function data() {
    return {
      id: this.$route.params.id,
      posts: []
    };
  },

  methods: {
    loadGames: function loadGames() {
      var _this = this;

      console.log('hallo');
      __WEBPACK_IMPORTED_MODULE_1__app_service_js__["a" /* default */].getPosts().then(function (data) {
        _this.posts = data.items;
      });
    }
  },
  watch: {
    '$route': function $route(to, from) {
      this.id = to.params.id;
      this.loadGames();
    }
  },
  created: function created() {
    this.loadGames();
    console.log('lmap');
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['post']
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(44);
var buildURL = __webpack_require__(46);
var parseHeaders = __webpack_require__(47);
var isURLSameOrigin = __webpack_require__(48);
var createError = __webpack_require__(14);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(49);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(50);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(45);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			title: '',
			creater: '',
			genre: '',
			msg: ''
		};
	},

	methods: {
		getFormValues: function getFormValues(submitEvent) {
			this.title = submitEvent.target.elements.title.value;
			this.genre = submitEvent.target.elements.genre.value;
			this.creater = submitEvent.target.elements.creater.value;
			this.error = submitEvent.target.elements.msg.value;

			this.postData(this.msg);
		},

		postData: function postData(event) {
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/games', {
				title: this.title,
				genre: this.genre,
				creater: this.creater
			}).catch(function (error) {
				console.log(error);
				document.getElementById('error').innerHTML = 'Er zijn velden leeg vul ze in';
			}).then(function (response) {
				console.log('dit is de response ' + response);
				if (response) {
					document.getElementById('error').innerHTML = '';
				}
			});
			console.log('werkt dit');
			this.creater = '';
			this.title = '';
			this.genre = '';
		}
	},
	watch: {
		'$route': function $route(to, from) {}
	},
	created: function created() {}
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            id: this.$route.params.id,
            game: []
        };
    },

    methods: {
        deleteGame: function deleteGame(event) {
            this.delete();
        },
        updateData: function updateData(event) {
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put('/games/' + this.$route.params.id, {
                title: this.title,
                genre: this.genre,
                creater: this.creater
            });
            console.log('put is done');
            this.getId();
        },
        getId: function getId() {
            var _this = this;

            console.log('game id is  ' + this.$route.params.id);
            return new Promise(function (resolve) {
                __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/games/' + _this.$route.params.id).then(function (response) {
                    resolve(response.data);
                    console.log('ik doe nu een get');
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response.headers);
                    _this.title = response.data.title;
                    _this.genre = response.data.genre;
                    _this.creater = response.data.creater;

                    _this.game = response.data;
                    console.log('creater' + response.data.creater);
                });
            });
        },
        delete: function _delete() {
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete('/games/' + this.$route.params.id).catch(function (error) {
                console.log('error' + error);
            }).then(function (response) {
                console.log('dit is de response ' + response);
                window.location.href = '/';
            });
            console.log('delete');
        }
        // getData() {
        //     this.getId().then(data => {
        //             console.log('getting data')
        //             this.game = data
        //       })
        //   }

    },
    watch: {
        '$route': function $route(to, from) {
            this.getId();
        }
    },
    created: function created() {
        this.getId();
    }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(20);


__WEBPACK_IMPORTED_MODULE_0__app__["a" /* app */].$mount('#app');

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_layout_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(32);
/* unused harmony reexport router */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */](_extends({
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_1__theme_layout_vue__["a" /* default */]));



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(22);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(2)))

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b108ca3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b108ca3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b108ca3", Component.options)
  } else {
    hotAPI.reload("data-v-3b108ca3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("094210bb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b108ca3\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b108ca3\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/*! bulma.io v0.6.2 | MIT License | github.com/jgthms/bulma */\n@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n\n/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nul {\n  list-style: none;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\nhtml {\n  box-sizing: border-box;\n}\n* {\n  box-sizing: inherit;\n}\n*:before, *:after {\n    box-sizing: inherit;\n}\nimg,\nembed,\nobject,\naudio,\nvideo {\n  max-width: 100%;\n}\niframe {\n  border: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n  text-align: left;\n}\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%;\n}\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\nbody {\n  color: #4a4a4a;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none;\n}\na strong {\n    color: currentColor;\n}\na:hover {\n    color: #363636;\n}\ncode {\n  background-color: whitesmoke;\n  color: #ff3860;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\nhr {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 1.5rem 0;\n}\nimg {\n  height: auto;\n  max-width: 100%;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline;\n}\nsmall {\n  font-size: 0.875em;\n}\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\npre code {\n    background-color: transparent;\n    color: currentColor;\n    font-size: 1em;\n    padding: 0;\n}\ntable td,\ntable th {\n  text-align: left;\n  vertical-align: top;\n}\ntable th {\n  color: #363636;\n}\n.is-clearfix:after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n.is-pulled-left {\n  float: left !important;\n}\n.is-pulled-right {\n  float: right !important;\n}\n.is-clipped {\n  overflow: hidden !important;\n}\n.is-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.is-size-1 {\n  font-size: 3rem !important;\n}\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n.is-size-3 {\n  font-size: 2rem !important;\n}\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n.is-size-6 {\n  font-size: 1rem !important;\n}\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-1-mobile {\n    font-size: 3rem !important;\n}\n.is-size-2-mobile {\n    font-size: 2.5rem !important;\n}\n.is-size-3-mobile {\n    font-size: 2rem !important;\n}\n.is-size-4-mobile {\n    font-size: 1.5rem !important;\n}\n.is-size-5-mobile {\n    font-size: 1.25rem !important;\n}\n.is-size-6-mobile {\n    font-size: 1rem !important;\n}\n.is-size-7-mobile {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-1-tablet {\n    font-size: 3rem !important;\n}\n.is-size-2-tablet {\n    font-size: 2.5rem !important;\n}\n.is-size-3-tablet {\n    font-size: 2rem !important;\n}\n.is-size-4-tablet {\n    font-size: 1.5rem !important;\n}\n.is-size-5-tablet {\n    font-size: 1.25rem !important;\n}\n.is-size-6-tablet {\n    font-size: 1rem !important;\n}\n.is-size-7-tablet {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.is-size-1-touch {\n    font-size: 3rem !important;\n}\n.is-size-2-touch {\n    font-size: 2.5rem !important;\n}\n.is-size-3-touch {\n    font-size: 2rem !important;\n}\n.is-size-4-touch {\n    font-size: 1.5rem !important;\n}\n.is-size-5-touch {\n    font-size: 1.25rem !important;\n}\n.is-size-6-touch {\n    font-size: 1rem !important;\n}\n.is-size-7-touch {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.is-size-1-desktop {\n    font-size: 3rem !important;\n}\n.is-size-2-desktop {\n    font-size: 2.5rem !important;\n}\n.is-size-3-desktop {\n    font-size: 2rem !important;\n}\n.is-size-4-desktop {\n    font-size: 1.5rem !important;\n}\n.is-size-5-desktop {\n    font-size: 1.25rem !important;\n}\n.is-size-6-desktop {\n    font-size: 1rem !important;\n}\n.is-size-7-desktop {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.is-size-1-widescreen {\n    font-size: 3rem !important;\n}\n.is-size-2-widescreen {\n    font-size: 2.5rem !important;\n}\n.is-size-3-widescreen {\n    font-size: 2rem !important;\n}\n.is-size-4-widescreen {\n    font-size: 1.5rem !important;\n}\n.is-size-5-widescreen {\n    font-size: 1.25rem !important;\n}\n.is-size-6-widescreen {\n    font-size: 1rem !important;\n}\n.is-size-7-widescreen {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.is-size-1-fullhd {\n    font-size: 3rem !important;\n}\n.is-size-2-fullhd {\n    font-size: 2.5rem !important;\n}\n.is-size-3-fullhd {\n    font-size: 2rem !important;\n}\n.is-size-4-fullhd {\n    font-size: 1.5rem !important;\n}\n.is-size-5-fullhd {\n    font-size: 1.25rem !important;\n}\n.is-size-6-fullhd {\n    font-size: 1rem !important;\n}\n.is-size-7-fullhd {\n    font-size: 0.75rem !important;\n}\n}\n.has-text-centered {\n  text-align: center !important;\n}\n@media screen and (max-width: 768px) {\n.has-text-centered-mobile {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-centered-tablet {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.has-text-centered-tablet-only {\n    text-align: center !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.has-text-centered-touch {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.has-text-centered-desktop {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.has-text-centered-desktop-only {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.has-text-centered-widescreen {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.has-text-centered-widescreen-only {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.has-text-centered-fullhd {\n    text-align: center !important;\n}\n}\n.has-text-justified {\n  text-align: justify !important;\n}\n@media screen and (max-width: 768px) {\n.has-text-justified-mobile {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-justified-tablet {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.has-text-justified-tablet-only {\n    text-align: justify !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.has-text-justified-touch {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.has-text-justified-desktop {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.has-text-justified-desktop-only {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.has-text-justified-widescreen {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.has-text-justified-widescreen-only {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.has-text-justified-fullhd {\n    text-align: justify !important;\n}\n}\n.has-text-left {\n  text-align: left !important;\n}\n@media screen and (max-width: 768px) {\n.has-text-left-mobile {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-left-tablet {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.has-text-left-tablet-only {\n    text-align: left !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.has-text-left-touch {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.has-text-left-desktop {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.has-text-left-desktop-only {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.has-text-left-widescreen {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.has-text-left-widescreen-only {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.has-text-left-fullhd {\n    text-align: left !important;\n}\n}\n.has-text-right {\n  text-align: right !important;\n}\n@media screen and (max-width: 768px) {\n.has-text-right-mobile {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-right-tablet {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.has-text-right-tablet-only {\n    text-align: right !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.has-text-right-touch {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.has-text-right-desktop {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.has-text-right-desktop-only {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.has-text-right-widescreen {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.has-text-right-widescreen-only {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.has-text-right-fullhd {\n    text-align: right !important;\n}\n}\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n.is-italic {\n  font-style: italic !important;\n}\n.has-text-white {\n  color: white !important;\n}\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n.has-text-black {\n  color: #0a0a0a !important;\n}\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n.has-text-light {\n  color: whitesmoke !important;\n}\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n.has-text-dark {\n  color: #363636 !important;\n}\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n.has-text-primary {\n  color: #00d1b2 !important;\n}\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important;\n}\n.has-text-link {\n  color: #3273dc !important;\n}\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important;\n}\n.has-text-info {\n  color: #209cee !important;\n}\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0f81cc !important;\n}\n.has-text-success {\n  color: #23d160 !important;\n}\na.has-text-success:hover, a.has-text-success:focus {\n  color: #1ca64c !important;\n}\n.has-text-warning {\n  color: #ffdd57 !important;\n}\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important;\n}\n.has-text-danger {\n  color: #ff3860 !important;\n}\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ff0537 !important;\n}\n.has-text-black-bis {\n  color: #121212 !important;\n}\n.has-text-black-ter {\n  color: #242424 !important;\n}\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n.is-block {\n  display: block !important;\n}\n@media screen and (max-width: 768px) {\n.is-block-mobile {\n    display: block !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-block-tablet {\n    display: block !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.is-block-tablet-only {\n    display: block !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.is-block-touch {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.is-block-desktop {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.is-block-desktop-only {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.is-block-widescreen {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.is-block-widescreen-only {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.is-block-fullhd {\n    display: block !important;\n}\n}\n.is-flex {\n  display: flex !important;\n}\n@media screen and (max-width: 768px) {\n.is-flex-mobile {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-flex-tablet {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.is-flex-tablet-only {\n    display: flex !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.is-flex-touch {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.is-flex-desktop {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.is-flex-desktop-only {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.is-flex-widescreen {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.is-flex-widescreen-only {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.is-flex-fullhd {\n    display: flex !important;\n}\n}\n.is-inline {\n  display: inline !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-mobile {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-tablet {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.is-inline-tablet-only {\n    display: inline !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.is-inline-touch {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.is-inline-desktop {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.is-inline-desktop-only {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.is-inline-widescreen {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.is-inline-widescreen-only {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.is-inline-fullhd {\n    display: inline !important;\n}\n}\n.is-inline-block {\n  display: inline-block !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-block-mobile {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-block-tablet {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.is-inline-block-tablet-only {\n    display: inline-block !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.is-inline-block-touch {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.is-inline-block-desktop {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.is-inline-block-desktop-only {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.is-inline-block-widescreen {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.is-inline-block-widescreen-only {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.is-inline-block-fullhd {\n    display: inline-block !important;\n}\n}\n.is-inline-flex {\n  display: inline-flex !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-flex-mobile {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-flex-tablet {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.is-inline-flex-tablet-only {\n    display: inline-flex !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.is-inline-flex-touch {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.is-inline-flex-desktop {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.is-inline-flex-desktop-only {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.is-inline-flex-widescreen {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.is-inline-flex-widescreen-only {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.is-inline-flex-fullhd {\n    display: inline-flex !important;\n}\n}\n.is-hidden {\n  display: none !important;\n}\n@media screen and (max-width: 768px) {\n.is-hidden-mobile {\n    display: none !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-hidden-tablet {\n    display: none !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.is-hidden-tablet-only {\n    display: none !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.is-hidden-touch {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.is-hidden-desktop {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.is-hidden-desktop-only {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.is-hidden-widescreen {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.is-hidden-widescreen-only {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.is-hidden-fullhd {\n    display: none !important;\n}\n}\n.is-invisible {\n  visibility: hidden !important;\n}\n@media screen and (max-width: 768px) {\n.is-invisible-mobile {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-invisible-tablet {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.is-invisible-tablet-only {\n    visibility: hidden !important;\n}\n}\n@media screen and (max-width: 1023px) {\n.is-invisible-touch {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1024px) {\n.is-invisible-desktop {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n.is-invisible-desktop-only {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1216px) {\n.is-invisible-widescreen {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n.is-invisible-widescreen-only {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1408px) {\n.is-invisible-fullhd {\n    visibility: hidden !important;\n}\n}\n.is-marginless {\n  margin: 0 !important;\n}\n.is-paddingless {\n  padding: 0 !important;\n}\n.is-radiusless {\n  border-radius: 0 !important;\n}\n.is-shadowless {\n  box-shadow: none !important;\n}\n.is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box {\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n.box:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\na.box:hover, a.box:focus {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;\n}\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;\n}\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  text-align: center;\n  white-space: nowrap;\n}\n.button:focus, .button.is-focused, .button:active, .button.is-active {\n    outline: none;\n}\n.button[disabled] {\n    cursor: not-allowed;\n}\n.button strong {\n    color: inherit;\n}\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n    height: 1.5em;\n    width: 1.5em;\n}\n.button .icon:first-child:not(:last-child) {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: 0.1875em;\n}\n.button .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: calc(-0.375em - 1px);\n}\n.button .icon:first-child:last-child {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: calc(-0.375em - 1px);\n}\n.button:hover, .button.is-hovered {\n    border-color: #b5b5b5;\n    color: #363636;\n}\n.button:focus, .button.is-focused {\n    border-color: #3273dc;\n    color: #363636;\n}\n.button:focus:not(:active), .button.is-focused:not(:active) {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.button:active, .button.is-active {\n    border-color: #4a4a4a;\n    color: #363636;\n}\n.button.is-text {\n    background-color: transparent;\n    border-color: transparent;\n    color: #4a4a4a;\n    text-decoration: underline;\n}\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.button.is-text:active, .button.is-text.is-active {\n      background-color: #e8e8e8;\n      color: #363636;\n}\n.button.is-text[disabled] {\n      background-color: transparent;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-white {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.button.is-white:hover, .button.is-white.is-hovered {\n      background-color: #f9f9f9;\n      border-color: transparent;\n      color: #0a0a0a;\n}\n.button.is-white:focus, .button.is-white.is-focused {\n      border-color: transparent;\n      color: #0a0a0a;\n}\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.button.is-white:active, .button.is-white.is-active {\n      background-color: #f2f2f2;\n      border-color: transparent;\n      color: #0a0a0a;\n}\n.button.is-white[disabled] {\n      background-color: white;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-white.is-inverted {\n      background-color: #0a0a0a;\n      color: white;\n}\n.button.is-white.is-inverted:hover {\n        background-color: black;\n}\n.button.is-white.is-inverted[disabled] {\n        background-color: #0a0a0a;\n        border-color: transparent;\n        box-shadow: none;\n        color: white;\n}\n.button.is-white.is-loading:after {\n      border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white;\n}\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined:focus {\n        background-color: white;\n        border-color: white;\n        color: #0a0a0a;\n}\n.button.is-white.is-outlined.is-loading:after {\n        border-color: transparent transparent white white !important;\n}\n.button.is-white.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white;\n}\n.button.is-white.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a;\n}\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined:focus {\n        background-color: #0a0a0a;\n        color: white;\n}\n.button.is-white.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white;\n}\n.button.is-black:hover, .button.is-black.is-hovered {\n      background-color: #040404;\n      border-color: transparent;\n      color: white;\n}\n.button.is-black:focus, .button.is-black.is-focused {\n      border-color: transparent;\n      color: white;\n}\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.button.is-black:active, .button.is-black.is-active {\n      background-color: black;\n      border-color: transparent;\n      color: white;\n}\n.button.is-black[disabled] {\n      background-color: #0a0a0a;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-black.is-inverted {\n      background-color: white;\n      color: #0a0a0a;\n}\n.button.is-black.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-black.is-inverted[disabled] {\n        background-color: white;\n        border-color: transparent;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black.is-loading:after {\n      border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a;\n}\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined:focus {\n        background-color: #0a0a0a;\n        border-color: #0a0a0a;\n        color: white;\n}\n.button.is-black.is-outlined.is-loading:after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white;\n}\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined:focus {\n        background-color: white;\n        color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white;\n}\n.button.is-light {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636;\n}\n.button.is-light:hover, .button.is-light.is-hovered {\n      background-color: #eeeeee;\n      border-color: transparent;\n      color: #363636;\n}\n.button.is-light:focus, .button.is-light.is-focused {\n      border-color: transparent;\n      color: #363636;\n}\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.button.is-light:active, .button.is-light.is-active {\n      background-color: #e8e8e8;\n      border-color: transparent;\n      color: #363636;\n}\n.button.is-light[disabled] {\n      background-color: whitesmoke;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-light.is-inverted {\n      background-color: #363636;\n      color: whitesmoke;\n}\n.button.is-light.is-inverted:hover {\n        background-color: #292929;\n}\n.button.is-light.is-inverted[disabled] {\n        background-color: #363636;\n        border-color: transparent;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-light.is-loading:after {\n      border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-light.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke;\n}\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined:focus {\n        background-color: whitesmoke;\n        border-color: whitesmoke;\n        color: #363636;\n}\n.button.is-light.is-outlined.is-loading:after {\n        border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636;\n}\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined:focus {\n        background-color: #363636;\n        color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.button.is-dark:hover, .button.is-dark.is-hovered {\n      background-color: #2f2f2f;\n      border-color: transparent;\n      color: whitesmoke;\n}\n.button.is-dark:focus, .button.is-dark.is-focused {\n      border-color: transparent;\n      color: whitesmoke;\n}\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.button.is-dark:active, .button.is-dark.is-active {\n      background-color: #292929;\n      border-color: transparent;\n      color: whitesmoke;\n}\n.button.is-dark[disabled] {\n      background-color: #363636;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-dark.is-inverted {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.button.is-dark.is-inverted:hover {\n        background-color: #e8e8e8;\n}\n.button.is-dark.is-inverted[disabled] {\n        background-color: whitesmoke;\n        border-color: transparent;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark.is-loading:after {\n      border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-dark.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636;\n}\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined:focus {\n        background-color: #363636;\n        border-color: #363636;\n        color: whitesmoke;\n}\n.button.is-dark.is-outlined.is-loading:after {\n        border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke;\n}\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined:focus {\n        background-color: whitesmoke;\n        color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-primary {\n    background-color: #00d1b2;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-primary:hover, .button.is-primary.is-hovered {\n      background-color: #00c4a7;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-primary:focus, .button.is-primary.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.button.is-primary:active, .button.is-primary.is-active {\n      background-color: #00b89c;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-primary[disabled] {\n      background-color: #00d1b2;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-primary.is-inverted {\n      background-color: #fff;\n      color: #00d1b2;\n}\n.button.is-primary.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-primary.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #00d1b2;\n}\n.button.is-primary.is-loading:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined {\n      background-color: transparent;\n      border-color: #00d1b2;\n      color: #00d1b2;\n}\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {\n        background-color: #00d1b2;\n        border-color: #00d1b2;\n        color: #fff;\n}\n.button.is-primary.is-outlined.is-loading:after {\n        border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n.button.is-primary.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #00d1b2;\n        box-shadow: none;\n        color: #00d1b2;\n}\n.button.is-primary.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #00d1b2;\n}\n.button.is-primary.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-link {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-link:hover, .button.is-link.is-hovered {\n      background-color: #276cda;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-link:focus, .button.is-link.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.button.is-link:active, .button.is-link.is-active {\n      background-color: #2366d1;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-link[disabled] {\n      background-color: #3273dc;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-link.is-inverted {\n      background-color: #fff;\n      color: #3273dc;\n}\n.button.is-link.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-link.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #3273dc;\n}\n.button.is-link.is-loading:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined {\n      background-color: transparent;\n      border-color: #3273dc;\n      color: #3273dc;\n}\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined:focus {\n        background-color: #3273dc;\n        border-color: #3273dc;\n        color: #fff;\n}\n.button.is-link.is-outlined.is-loading:after {\n        border-color: transparent transparent #3273dc #3273dc !important;\n}\n.button.is-link.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #3273dc;\n        box-shadow: none;\n        color: #3273dc;\n}\n.button.is-link.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #3273dc;\n}\n.button.is-link.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-info {\n    background-color: #209cee;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-info:hover, .button.is-info.is-hovered {\n      background-color: #1496ed;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-info:focus, .button.is-info.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.button.is-info:active, .button.is-info.is-active {\n      background-color: #118fe4;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-info[disabled] {\n      background-color: #209cee;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-info.is-inverted {\n      background-color: #fff;\n      color: #209cee;\n}\n.button.is-info.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-info.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #209cee;\n}\n.button.is-info.is-loading:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined {\n      background-color: transparent;\n      border-color: #209cee;\n      color: #209cee;\n}\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined:focus {\n        background-color: #209cee;\n        border-color: #209cee;\n        color: #fff;\n}\n.button.is-info.is-outlined.is-loading:after {\n        border-color: transparent transparent #209cee #209cee !important;\n}\n.button.is-info.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #209cee;\n        box-shadow: none;\n        color: #209cee;\n}\n.button.is-info.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #209cee;\n}\n.button.is-info.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-success {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-success:hover, .button.is-success.is-hovered {\n      background-color: #22c65b;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-success:focus, .button.is-success.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.button.is-success:active, .button.is-success.is-active {\n      background-color: #20bc56;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-success[disabled] {\n      background-color: #23d160;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-success.is-inverted {\n      background-color: #fff;\n      color: #23d160;\n}\n.button.is-success.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-success.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #23d160;\n}\n.button.is-success.is-loading:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined {\n      background-color: transparent;\n      border-color: #23d160;\n      color: #23d160;\n}\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined:focus {\n        background-color: #23d160;\n        border-color: #23d160;\n        color: #fff;\n}\n.button.is-success.is-outlined.is-loading:after {\n        border-color: transparent transparent #23d160 #23d160 !important;\n}\n.button.is-success.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #23d160;\n        box-shadow: none;\n        color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-warning {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:hover, .button.is-warning.is-hovered {\n      background-color: #ffdb4a;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus, .button.is-warning.is-focused {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.button.is-warning:active, .button.is-warning.is-active {\n      background-color: #ffd83d;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[disabled] {\n      background-color: #ffdd57;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-warning.is-inverted {\n      background-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57;\n}\n.button.is-warning.is-inverted:hover {\n        background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted[disabled] {\n        background-color: rgba(0, 0, 0, 0.7);\n        border-color: transparent;\n        box-shadow: none;\n        color: #ffdd57;\n}\n.button.is-warning.is-loading:after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined {\n      background-color: transparent;\n      border-color: #ffdd57;\n      color: #ffdd57;\n}\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined:focus {\n        background-color: #ffdd57;\n        border-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-outlined.is-loading:after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n.button.is-warning.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #ffdd57;\n        box-shadow: none;\n        color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: rgba(0, 0, 0, 0.7);\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined:focus {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.7);\n}\n.button.is-danger {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-danger:hover, .button.is-danger.is-hovered {\n      background-color: #ff2b56;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-danger:focus, .button.is-danger.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.button.is-danger:active, .button.is-danger.is-active {\n      background-color: #ff1f4b;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-danger[disabled] {\n      background-color: #ff3860;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-danger.is-inverted {\n      background-color: #fff;\n      color: #ff3860;\n}\n.button.is-danger.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-danger.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #ff3860;\n}\n.button.is-danger.is-loading:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined {\n      background-color: transparent;\n      border-color: #ff3860;\n      color: #ff3860;\n}\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined:focus {\n        background-color: #ff3860;\n        border-color: #ff3860;\n        color: #fff;\n}\n.button.is-danger.is-outlined.is-loading:after {\n        border-color: transparent transparent #ff3860 #ff3860 !important;\n}\n.button.is-danger.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #ff3860;\n        box-shadow: none;\n        color: #ff3860;\n}\n.button.is-danger.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #ff3860;\n}\n.button.is-danger.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.button.is-medium {\n    font-size: 1.25rem;\n}\n.button.is-large {\n    font-size: 1.5rem;\n}\n.button[disabled] {\n    background-color: white;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    opacity: 0.5;\n}\n.button.is-fullwidth {\n    display: flex;\n    width: 100%;\n}\n.button.is-loading {\n    color: transparent !important;\n    pointer-events: none;\n}\n.button.is-loading:after {\n      animation: spinAround 500ms infinite linear;\n      border: 2px solid #dbdbdb;\n      border-radius: 290486px;\n      border-right-color: transparent;\n      border-top-color: transparent;\n      content: \"\";\n      display: block;\n      height: 1em;\n      position: relative;\n      width: 1em;\n      position: absolute;\n      left: calc(50% - (1em / 2));\n      top: calc(50% - (1em / 2));\n      position: absolute !important;\n}\n.button.is-static {\n    background-color: whitesmoke;\n    border-color: #dbdbdb;\n    color: #7a7a7a;\n    box-shadow: none;\n    pointer-events: none;\n}\n.button.is-rounded {\n    border-radius: 290486px;\n    padding-left: 1em;\n    padding-right: 1em;\n}\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.buttons .button {\n    margin-bottom: 0.5rem;\n}\n.buttons .button:not(:last-child) {\n      margin-right: 0.5rem;\n}\n.buttons:last-child {\n    margin-bottom: -0.5rem;\n}\n.buttons:not(:last-child) {\n    margin-bottom: 1rem;\n}\n.buttons.has-addons .button:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n.buttons.has-addons .button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    margin-right: -1px;\n}\n.buttons.has-addons .button:last-child {\n    margin-right: 0;\n}\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n    z-index: 2;\n}\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n    z-index: 3;\n}\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n      z-index: 4;\n}\n.buttons.is-centered {\n    justify-content: center;\n}\n.buttons.is-right {\n    justify-content: flex-end;\n}\n.container {\n  margin: 0 auto;\n  position: relative;\n}\n@media screen and (min-width: 1024px) {\n.container {\n      max-width: 960px;\n      width: 960px;\n}\n.container.is-fluid {\n        margin-left: 32px;\n        margin-right: 32px;\n        max-width: none;\n        width: auto;\n}\n}\n@media screen and (max-width: 1215px) {\n.container.is-widescreen {\n      max-width: 1152px;\n      width: auto;\n}\n}\n@media screen and (max-width: 1407px) {\n.container.is-fullhd {\n      max-width: 1344px;\n      width: auto;\n}\n}\n@media screen and (min-width: 1216px) {\n.container {\n      max-width: 1152px;\n      width: 1152px;\n}\n}\n@media screen and (min-width: 1408px) {\n.container {\n      max-width: 1344px;\n      width: 1344px;\n}\n}\n.content:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.content li + li {\n  margin-top: 0.25em;\n}\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 400;\n  line-height: 1.125;\n}\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n.content h1:not(:first-child) {\n    margin-top: 1em;\n}\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n.content h2:not(:first-child) {\n    margin-top: 1.1428em;\n}\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n.content h3:not(:first-child) {\n    margin-top: 1.3333em;\n}\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n.content ol {\n  list-style: decimal outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul ul {\n    list-style-type: circle;\n    margin-top: 0.5em;\n}\n.content ul ul ul {\n      list-style-type: square;\n}\n.content dd {\n  margin-left: 2em;\n}\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n.content figure:not(:first-child) {\n    margin-top: 2em;\n}\n.content figure:not(:last-child) {\n    margin-bottom: 2em;\n}\n.content figure img {\n    display: inline-block;\n}\n.content figure figcaption {\n    font-style: italic;\n}\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n.content table {\n  width: 100%;\n}\n.content table td,\n  .content table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top;\n}\n.content table th {\n    color: #363636;\n    text-align: left;\n}\n.content table tr:hover {\n    background-color: whitesmoke;\n}\n.content table thead td,\n  .content table thead th {\n    border-width: 0 0 2px;\n    color: #363636;\n}\n.content table tfoot td,\n  .content table tfoot th {\n    border-width: 2px 0 0;\n    color: #363636;\n}\n.content table tbody tr:last-child td,\n  .content table tbody tr:last-child th {\n    border-bottom-width: 0;\n}\n.content.is-small {\n  font-size: 0.75rem;\n}\n.content.is-medium {\n  font-size: 1.25rem;\n}\n.content.is-large {\n  font-size: 1.5rem;\n}\n.input,\n.textarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  width: 100%;\n}\n.input:focus, .input.is-focused, .input:active, .input.is-active,\n  .textarea:focus,\n  .textarea.is-focused,\n  .textarea:active,\n  .textarea.is-active {\n    outline: none;\n}\n.input[disabled],\n  .textarea[disabled] {\n    cursor: not-allowed;\n}\n.input::-moz-placeholder,\n  .textarea::-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3);\n}\n.input::-webkit-input-placeholder,\n  .textarea::-webkit-input-placeholder {\n    color: rgba(54, 54, 54, 0.3);\n}\n.input:-moz-placeholder,\n  .textarea:-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3);\n}\n.input:-ms-input-placeholder,\n  .textarea:-ms-input-placeholder {\n    color: rgba(54, 54, 54, 0.3);\n}\n.input:hover, .input.is-hovered,\n  .textarea:hover,\n  .textarea.is-hovered {\n    border-color: #b5b5b5;\n}\n.input:focus, .input.is-focused, .input:active, .input.is-active,\n  .textarea:focus,\n  .textarea.is-focused,\n  .textarea:active,\n  .textarea.is-active {\n    border-color: #3273dc;\n    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.input[disabled],\n  .textarea[disabled] {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    box-shadow: none;\n    color: #7a7a7a;\n}\n.input[disabled]::-moz-placeholder,\n    .textarea[disabled]::-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]::-webkit-input-placeholder,\n    .textarea[disabled]::-webkit-input-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]:-moz-placeholder,\n    .textarea[disabled]:-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]:-ms-input-placeholder,\n    .textarea[disabled]:-ms-input-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[readonly],\n  .textarea[readonly] {\n    box-shadow: none;\n}\n.input.is-white,\n  .textarea.is-white {\n    border-color: white;\n}\n.input.is-white:focus, .input.is-white.is-focused, .input.is-white:active, .input.is-white.is-active,\n    .textarea.is-white:focus,\n    .textarea.is-white.is-focused,\n    .textarea.is-white:active,\n    .textarea.is-white.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.input.is-black,\n  .textarea.is-black {\n    border-color: #0a0a0a;\n}\n.input.is-black:focus, .input.is-black.is-focused, .input.is-black:active, .input.is-black.is-active,\n    .textarea.is-black:focus,\n    .textarea.is-black.is-focused,\n    .textarea.is-black:active,\n    .textarea.is-black.is-active {\n      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.input.is-light,\n  .textarea.is-light {\n    border-color: whitesmoke;\n}\n.input.is-light:focus, .input.is-light.is-focused, .input.is-light:active, .input.is-light.is-active,\n    .textarea.is-light:focus,\n    .textarea.is-light.is-focused,\n    .textarea.is-light:active,\n    .textarea.is-light.is-active {\n      box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.input.is-dark,\n  .textarea.is-dark {\n    border-color: #363636;\n}\n.input.is-dark:focus, .input.is-dark.is-focused, .input.is-dark:active, .input.is-dark.is-active,\n    .textarea.is-dark:focus,\n    .textarea.is-dark.is-focused,\n    .textarea.is-dark:active,\n    .textarea.is-dark.is-active {\n      box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.input.is-primary,\n  .textarea.is-primary {\n    border-color: #00d1b2;\n}\n.input.is-primary:focus, .input.is-primary.is-focused, .input.is-primary:active, .input.is-primary.is-active,\n    .textarea.is-primary:focus,\n    .textarea.is-primary.is-focused,\n    .textarea.is-primary:active,\n    .textarea.is-primary.is-active {\n      box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.input.is-link,\n  .textarea.is-link {\n    border-color: #3273dc;\n}\n.input.is-link:focus, .input.is-link.is-focused, .input.is-link:active, .input.is-link.is-active,\n    .textarea.is-link:focus,\n    .textarea.is-link.is-focused,\n    .textarea.is-link:active,\n    .textarea.is-link.is-active {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.input.is-info,\n  .textarea.is-info {\n    border-color: #209cee;\n}\n.input.is-info:focus, .input.is-info.is-focused, .input.is-info:active, .input.is-info.is-active,\n    .textarea.is-info:focus,\n    .textarea.is-info.is-focused,\n    .textarea.is-info:active,\n    .textarea.is-info.is-active {\n      box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.input.is-success,\n  .textarea.is-success {\n    border-color: #23d160;\n}\n.input.is-success:focus, .input.is-success.is-focused, .input.is-success:active, .input.is-success.is-active,\n    .textarea.is-success:focus,\n    .textarea.is-success.is-focused,\n    .textarea.is-success:active,\n    .textarea.is-success.is-active {\n      box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.input.is-warning,\n  .textarea.is-warning {\n    border-color: #ffdd57;\n}\n.input.is-warning:focus, .input.is-warning.is-focused, .input.is-warning:active, .input.is-warning.is-active,\n    .textarea.is-warning:focus,\n    .textarea.is-warning.is-focused,\n    .textarea.is-warning:active,\n    .textarea.is-warning.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.input.is-danger,\n  .textarea.is-danger {\n    border-color: #ff3860;\n}\n.input.is-danger:focus, .input.is-danger.is-focused, .input.is-danger:active, .input.is-danger.is-active,\n    .textarea.is-danger:focus,\n    .textarea.is-danger.is-focused,\n    .textarea.is-danger:active,\n    .textarea.is-danger.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.input.is-small,\n  .textarea.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.input.is-medium,\n  .textarea.is-medium {\n    font-size: 1.25rem;\n}\n.input.is-large,\n  .textarea.is-large {\n    font-size: 1.5rem;\n}\n.input.is-fullwidth,\n  .textarea.is-fullwidth {\n    display: block;\n    width: 100%;\n}\n.input.is-inline,\n  .textarea.is-inline {\n    display: inline;\n    width: auto;\n}\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical;\n}\n.textarea:not([rows]) {\n    max-height: 600px;\n    min-height: 120px;\n}\n.textarea[rows] {\n    height: unset;\n}\n.textarea.has-fixed-size {\n    resize: none;\n}\n.checkbox,\n.radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n.checkbox input,\n  .radio input {\n    cursor: pointer;\n}\n.checkbox:hover,\n  .radio:hover {\n    color: #363636;\n}\n.checkbox[disabled],\n  .radio[disabled] {\n    color: #7a7a7a;\n    cursor: not-allowed;\n}\n.radio + .radio {\n  margin-left: 0.5em;\n}\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n.select:not(.is-multiple) {\n    height: 2.25em;\n}\n.select:not(.is-multiple)::after {\n      border: 1px solid #3273dc;\n      border-right: 0;\n      border-top: 0;\n      content: \" \";\n      display: block;\n      height: 0.5em;\n      pointer-events: none;\n      position: absolute;\n      transform: rotate(-45deg);\n      transform-origin: center;\n      width: 0.5em;\n      margin-top: -0.375em;\n      right: 1.125em;\n      top: 50%;\n      z-index: 4;\n}\n.select.is-rounded select {\n    border-radius: 290486px;\n    padding-left: 1em;\n}\n.select select {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: none;\n    display: inline-flex;\n    font-size: 1rem;\n    height: 2.25em;\n    justify-content: flex-start;\n    line-height: 1.5;\n    padding-bottom: calc(0.375em - 1px);\n    padding-left: calc(0.625em - 1px);\n    padding-right: calc(0.625em - 1px);\n    padding-top: calc(0.375em - 1px);\n    position: relative;\n    vertical-align: top;\n    background-color: white;\n    border-color: #dbdbdb;\n    color: #363636;\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none;\n}\n.select select:focus, .select select.is-focused, .select select:active, .select select.is-active {\n      outline: none;\n}\n.select select[disabled] {\n      cursor: not-allowed;\n}\n.select select::-moz-placeholder {\n      color: rgba(54, 54, 54, 0.3);\n}\n.select select::-webkit-input-placeholder {\n      color: rgba(54, 54, 54, 0.3);\n}\n.select select:-moz-placeholder {\n      color: rgba(54, 54, 54, 0.3);\n}\n.select select:-ms-input-placeholder {\n      color: rgba(54, 54, 54, 0.3);\n}\n.select select:hover, .select select.is-hovered {\n      border-color: #b5b5b5;\n}\n.select select:focus, .select select.is-focused, .select select:active, .select select.is-active {\n      border-color: #3273dc;\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.select select[disabled] {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      box-shadow: none;\n      color: #7a7a7a;\n}\n.select select[disabled]::-moz-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]::-webkit-input-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-moz-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-ms-input-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select::-ms-expand {\n      display: none;\n}\n.select select[disabled]:hover {\n      border-color: whitesmoke;\n}\n.select select:not([multiple]) {\n      padding-right: 2.5em;\n}\n.select select[multiple] {\n      height: unset;\n      padding: 0;\n}\n.select select[multiple] option {\n        padding: 0.5em 1em;\n}\n.select:hover::after {\n    border-color: #363636;\n}\n.select.is-white select {\n    border-color: white;\n}\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.select.is-black select {\n    border-color: #0a0a0a;\n}\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.select.is-light select {\n    border-color: whitesmoke;\n}\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.select.is-dark select {\n    border-color: #363636;\n}\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.select.is-primary select {\n    border-color: #00d1b2;\n}\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.select.is-link select {\n    border-color: #3273dc;\n}\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.select.is-info select {\n    border-color: #209cee;\n}\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.select.is-success select {\n    border-color: #23d160;\n}\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.select.is-warning select {\n    border-color: #ffdd57;\n}\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.select.is-danger select {\n    border-color: #ff3860;\n}\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.select.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.select.is-medium {\n    font-size: 1.25rem;\n}\n.select.is-large {\n    font-size: 1.5rem;\n}\n.select.is-disabled::after {\n    border-color: #7a7a7a;\n}\n.select.is-fullwidth {\n    width: 100%;\n}\n.select.is-fullwidth select {\n      width: 100%;\n}\n.select.is-loading::after {\n    animation: spinAround 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    transform: none;\n}\n.select.is-loading.is-small:after {\n    font-size: 0.75rem;\n}\n.select.is-loading.is-medium:after {\n    font-size: 1.25rem;\n}\n.select.is-loading.is-large:after {\n    font-size: 1.5rem;\n}\n.file {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n.file.is-white .file-cta {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n    background-color: #f9f9f9;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n    color: #0a0a0a;\n}\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n    background-color: #f2f2f2;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-black .file-cta {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white;\n}\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n    background-color: #040404;\n    border-color: transparent;\n    color: white;\n}\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n    color: white;\n}\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n    background-color: black;\n    border-color: transparent;\n    color: white;\n}\n.file.is-light .file-cta {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n    background-color: #eeeeee;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n    color: #363636;\n}\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n    background-color: #e8e8e8;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-dark .file-cta {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n    background-color: #2f2f2f;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n    color: whitesmoke;\n}\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n    background-color: #292929;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-primary .file-cta {\n    background-color: #00d1b2;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n    background-color: #00c4a7;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n    color: #fff;\n}\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n    background-color: #00b89c;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-link .file-cta {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n    background-color: #276cda;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n    color: #fff;\n}\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n    background-color: #2366d1;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info .file-cta {\n    background-color: #209cee;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n    background-color: #1496ed;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);\n    color: #fff;\n}\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n    background-color: #118fe4;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success .file-cta {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n    background-color: #22c65b;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n    color: #fff;\n}\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n    background-color: #20bc56;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-warning .file-cta {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n    background-color: #ffdb4a;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n    background-color: #ffd83d;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-danger .file-cta {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n    background-color: #ff2b56;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n    color: #fff;\n}\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n    background-color: #ff1f4b;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-small {\n    font-size: 0.75rem;\n}\n.file.is-medium {\n    font-size: 1.25rem;\n}\n.file.is-medium .file-icon .fa {\n      font-size: 21px;\n}\n.file.is-large {\n    font-size: 1.5rem;\n}\n.file.is-large .file-icon .fa {\n      font-size: 28px;\n}\n.file.has-name .file-cta {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.file.has-name .file-name {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n.file.has-name.is-empty .file-cta {\n    border-radius: 3px;\n}\n.file.has-name.is-empty .file-name {\n    display: none;\n}\n.file.is-boxed .file-label {\n    flex-direction: column;\n}\n.file.is-boxed .file-cta {\n    flex-direction: column;\n    height: auto;\n    padding: 1em 3em;\n}\n.file.is-boxed .file-name {\n    border-width: 0 1px 1px;\n}\n.file.is-boxed .file-icon {\n    height: 1.5em;\n    width: 1.5em;\n}\n.file.is-boxed .file-icon .fa {\n      font-size: 21px;\n}\n.file.is-boxed.is-small .file-icon .fa {\n    font-size: 14px;\n}\n.file.is-boxed.is-medium .file-icon .fa {\n    font-size: 28px;\n}\n.file.is-boxed.is-large .file-icon .fa {\n    font-size: 35px;\n}\n.file.is-boxed.has-name .file-cta {\n    border-radius: 3px 3px 0 0;\n}\n.file.is-boxed.has-name .file-name {\n    border-radius: 0 0 3px 3px;\n    border-width: 0 1px 1px;\n}\n.file.is-centered {\n    justify-content: center;\n}\n.file.is-fullwidth .file-label {\n    width: 100%;\n}\n.file.is-fullwidth .file-name {\n    flex-grow: 1;\n    max-width: none;\n}\n.file.is-right {\n    justify-content: flex-end;\n}\n.file.is-right .file-cta {\n      border-radius: 0 3px 3px 0;\n}\n.file.is-right .file-name {\n      border-radius: 3px 0 0 3px;\n      border-width: 1px 0 1px 1px;\n      order: -1;\n}\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n.file-label:hover .file-cta {\n    background-color: #eeeeee;\n    color: #363636;\n}\n.file-label:hover .file-name {\n    border-color: #d5d5d5;\n}\n.file-label:active .file-cta {\n    background-color: #e8e8e8;\n    color: #363636;\n}\n.file-label:active .file-name {\n    border-color: #cfcfcf;\n}\n.file-input {\n  height: 0.01em;\n  left: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 0.01em;\n}\n.file-cta,\n.file-name {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  border-color: #dbdbdb;\n  border-radius: 3px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n.file-cta:focus, .file-cta.is-focused, .file-cta:active, .file-cta.is-active,\n  .file-name:focus,\n  .file-name.is-focused,\n  .file-name:active,\n  .file-name.is-active {\n    outline: none;\n}\n.file-cta[disabled],\n  .file-name[disabled] {\n    cursor: not-allowed;\n}\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n}\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n.file-icon .fa {\n    font-size: 14px;\n}\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.label:not(:last-child) {\n    margin-bottom: 0.5em;\n}\n.label.is-small {\n    font-size: 0.75rem;\n}\n.label.is-medium {\n    font-size: 1.25rem;\n}\n.label.is-large {\n    font-size: 1.5rem;\n}\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.help.is-white {\n    color: white;\n}\n.help.is-black {\n    color: #0a0a0a;\n}\n.help.is-light {\n    color: whitesmoke;\n}\n.help.is-dark {\n    color: #363636;\n}\n.help.is-primary {\n    color: #00d1b2;\n}\n.help.is-link {\n    color: #3273dc;\n}\n.help.is-info {\n    color: #209cee;\n}\n.help.is-success {\n    color: #23d160;\n}\n.help.is-warning {\n    color: #ffdd57;\n}\n.help.is-danger {\n    color: #ff3860;\n}\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.has-addons .control:not(:last-child) {\n    margin-right: -1px;\n}\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n  .field.has-addons .control:not(:first-child):not(:last-child) .input,\n  .field.has-addons .control:not(:first-child):not(:last-child) .select select {\n    border-radius: 0;\n}\n.field.has-addons .control:first-child .button,\n  .field.has-addons .control:first-child .input,\n  .field.has-addons .control:first-child .select select {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.field.has-addons .control:last-child .button,\n  .field.has-addons .control:last-child .input,\n  .field.has-addons .control:last-child .select select {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n.field.has-addons .control .button:hover, .field.has-addons .control .button.is-hovered,\n  .field.has-addons .control .input:hover,\n  .field.has-addons .control .input.is-hovered,\n  .field.has-addons .control .select select:hover,\n  .field.has-addons .control .select select.is-hovered {\n    z-index: 2;\n}\n.field.has-addons .control .button:focus, .field.has-addons .control .button.is-focused, .field.has-addons .control .button:active, .field.has-addons .control .button.is-active,\n  .field.has-addons .control .input:focus,\n  .field.has-addons .control .input.is-focused,\n  .field.has-addons .control .input:active,\n  .field.has-addons .control .input.is-active,\n  .field.has-addons .control .select select:focus,\n  .field.has-addons .control .select select.is-focused,\n  .field.has-addons .control .select select:active,\n  .field.has-addons .control .select select.is-active {\n    z-index: 3;\n}\n.field.has-addons .control .button:focus:hover, .field.has-addons .control .button.is-focused:hover, .field.has-addons .control .button:active:hover, .field.has-addons .control .button.is-active:hover,\n    .field.has-addons .control .input:focus:hover,\n    .field.has-addons .control .input.is-focused:hover,\n    .field.has-addons .control .input:active:hover,\n    .field.has-addons .control .input.is-active:hover,\n    .field.has-addons .control .select select:focus:hover,\n    .field.has-addons .control .select select.is-focused:hover,\n    .field.has-addons .control .select select:active:hover,\n    .field.has-addons .control .select select.is-active:hover {\n      z-index: 4;\n}\n.field.has-addons .control.is-expanded {\n    flex-grow: 1;\n}\n.field.has-addons.has-addons-centered {\n    justify-content: center;\n}\n.field.has-addons.has-addons-right {\n    justify-content: flex-end;\n}\n.field.has-addons.has-addons-fullwidth .control {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.is-grouped > .control {\n    flex-shrink: 0;\n}\n.field.is-grouped > .control:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem;\n}\n.field.is-grouped > .control.is-expanded {\n      flex-grow: 1;\n      flex-shrink: 1;\n}\n.field.is-grouped.is-grouped-centered {\n    justify-content: center;\n}\n.field.is-grouped.is-grouped-right {\n    justify-content: flex-end;\n}\n.field.is-grouped.is-grouped-multiline {\n    flex-wrap: wrap;\n}\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:last-child {\n      margin-bottom: -0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n      margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n.field.is-horizontal {\n    display: flex;\n}\n}\n.field-label .label {\n  font-size: inherit;\n}\n@media screen and (max-width: 768px) {\n.field-label {\n    margin-bottom: 0.5rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n}\n.field-label.is-small {\n      font-size: 0.75rem;\n      padding-top: 0.375em;\n}\n.field-label.is-normal {\n      padding-top: 0.375em;\n}\n.field-label.is-medium {\n      font-size: 1.25rem;\n      padding-top: 0.375em;\n}\n.field-label.is-large {\n      font-size: 1.5rem;\n      padding-top: 0.375em;\n}\n}\n.field-body .field .field {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n.field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n}\n.field-body .field {\n      margin-bottom: 0;\n}\n.field-body > .field {\n      flex-shrink: 1;\n}\n.field-body > .field:not(.is-narrow) {\n        flex-grow: 1;\n}\n.field-body > .field:not(:last-child) {\n        margin-right: 0.75rem;\n}\n}\n.control {\n  font-size: 1rem;\n  position: relative;\n  text-align: left;\n}\n.control.has-icon .icon {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4;\n}\n.control.has-icon .input:focus + .icon {\n    color: #7a7a7a;\n}\n.control.has-icon .input.is-small + .icon {\n    font-size: 0.75rem;\n}\n.control.has-icon .input.is-medium + .icon {\n    font-size: 1.25rem;\n}\n.control.has-icon .input.is-large + .icon {\n    font-size: 1.5rem;\n}\n.control.has-icon:not(.has-icon-right) .icon {\n    left: 0;\n}\n.control.has-icon:not(.has-icon-right) .input {\n    padding-left: 2.25em;\n}\n.control.has-icon.has-icon-right .icon {\n    right: 0;\n}\n.control.has-icon.has-icon-right .input {\n    padding-right: 2.25em;\n}\n.control.has-icons-left .input:focus ~ .icon,\n  .control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n  .control.has-icons-right .select:focus ~ .icon {\n    color: #7a7a7a;\n}\n.control.has-icons-left .input.is-small ~ .icon,\n  .control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n  .control.has-icons-right .select.is-small ~ .icon {\n    font-size: 0.75rem;\n}\n.control.has-icons-left .input.is-medium ~ .icon,\n  .control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n  .control.has-icons-right .select.is-medium ~ .icon {\n    font-size: 1.25rem;\n}\n.control.has-icons-left .input.is-large ~ .icon,\n  .control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n  .control.has-icons-right .select.is-large ~ .icon {\n    font-size: 1.5rem;\n}\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4;\n}\n.control.has-icons-left .input,\n  .control.has-icons-left .select select {\n    padding-left: 2.25em;\n}\n.control.has-icons-left .icon.is-left {\n    left: 0;\n}\n.control.has-icons-right .input,\n  .control.has-icons-right .select select {\n    padding-right: 2.25em;\n}\n.control.has-icons-right .icon.is-right {\n    right: 0;\n}\n.control.is-loading::after {\n    animation: spinAround 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em;\n    z-index: 4;\n}\n.control.is-loading.is-small:after {\n    font-size: 0.75rem;\n}\n.control.is-loading.is-medium:after {\n    font-size: 1.25rem;\n}\n.control.is-loading.is-large:after {\n    font-size: 1.5rem;\n}\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.icon.is-small {\n    height: 1rem;\n    width: 1rem;\n}\n.icon.is-medium {\n    height: 2rem;\n    width: 2rem;\n}\n.icon.is-large {\n    height: 3rem;\n    width: 3rem;\n}\n.image {\n  display: block;\n  position: relative;\n}\n.image img {\n    display: block;\n    height: auto;\n    width: 100%;\n}\n.image img.is-rounded {\n      border-radius: 290486px;\n}\n.image.is-square img, .image.is-1by1 img, .image.is-4by3 img, .image.is-3by2 img, .image.is-16by9 img, .image.is-2by1 img {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n}\n.image.is-square, .image.is-1by1 {\n    padding-top: 100%;\n}\n.image.is-4by3 {\n    padding-top: 75%;\n}\n.image.is-3by2 {\n    padding-top: 66.6666%;\n}\n.image.is-16by9 {\n    padding-top: 56.25%;\n}\n.image.is-2by1 {\n    padding-top: 50%;\n}\n.image.is-16x16 {\n    height: 16px;\n    width: 16px;\n}\n.image.is-24x24 {\n    height: 24px;\n    width: 24px;\n}\n.image.is-32x32 {\n    height: 32px;\n    width: 32px;\n}\n.image.is-48x48 {\n    height: 48px;\n    width: 48px;\n}\n.image.is-64x64 {\n    height: 64px;\n    width: 64px;\n}\n.image.is-96x96 {\n    height: 96px;\n    width: 96px;\n}\n.image.is-128x128 {\n    height: 128px;\n    width: 128px;\n}\n.notification {\n  background-color: whitesmoke;\n  border-radius: 3px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative;\n}\n.notification:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.notification a:not(.button) {\n    color: currentColor;\n    text-decoration: underline;\n}\n.notification strong {\n    color: currentColor;\n}\n.notification code,\n  .notification pre {\n    background: white;\n}\n.notification pre code {\n    background: transparent;\n}\n.notification > .delete {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem;\n}\n.notification .title,\n  .notification .subtitle,\n  .notification .content {\n    color: currentColor;\n}\n.notification.is-white {\n    background-color: white;\n    color: #0a0a0a;\n}\n.notification.is-black {\n    background-color: #0a0a0a;\n    color: white;\n}\n.notification.is-light {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.notification.is-dark {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.notification.is-primary {\n    background-color: #00d1b2;\n    color: #fff;\n}\n.notification.is-link {\n    background-color: #3273dc;\n    color: #fff;\n}\n.notification.is-info {\n    background-color: #209cee;\n    color: #fff;\n}\n.notification.is-success {\n    background-color: #23d160;\n    color: #fff;\n}\n.notification.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-danger {\n    background-color: #ff3860;\n    color: #fff;\n}\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n.progress:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.progress::-webkit-progress-bar {\n    background-color: #dbdbdb;\n}\n.progress::-webkit-progress-value {\n    background-color: #4a4a4a;\n}\n.progress::-moz-progress-bar {\n    background-color: #4a4a4a;\n}\n.progress::-ms-fill {\n    background-color: #4a4a4a;\n    border: none;\n}\n.progress.is-white::-webkit-progress-value {\n    background-color: white;\n}\n.progress.is-white::-moz-progress-bar {\n    background-color: white;\n}\n.progress.is-white::-ms-fill {\n    background-color: white;\n}\n.progress.is-black::-webkit-progress-value {\n    background-color: #0a0a0a;\n}\n.progress.is-black::-moz-progress-bar {\n    background-color: #0a0a0a;\n}\n.progress.is-black::-ms-fill {\n    background-color: #0a0a0a;\n}\n.progress.is-light::-webkit-progress-value {\n    background-color: whitesmoke;\n}\n.progress.is-light::-moz-progress-bar {\n    background-color: whitesmoke;\n}\n.progress.is-light::-ms-fill {\n    background-color: whitesmoke;\n}\n.progress.is-dark::-webkit-progress-value {\n    background-color: #363636;\n}\n.progress.is-dark::-moz-progress-bar {\n    background-color: #363636;\n}\n.progress.is-dark::-ms-fill {\n    background-color: #363636;\n}\n.progress.is-primary::-webkit-progress-value {\n    background-color: #00d1b2;\n}\n.progress.is-primary::-moz-progress-bar {\n    background-color: #00d1b2;\n}\n.progress.is-primary::-ms-fill {\n    background-color: #00d1b2;\n}\n.progress.is-link::-webkit-progress-value {\n    background-color: #3273dc;\n}\n.progress.is-link::-moz-progress-bar {\n    background-color: #3273dc;\n}\n.progress.is-link::-ms-fill {\n    background-color: #3273dc;\n}\n.progress.is-info::-webkit-progress-value {\n    background-color: #209cee;\n}\n.progress.is-info::-moz-progress-bar {\n    background-color: #209cee;\n}\n.progress.is-info::-ms-fill {\n    background-color: #209cee;\n}\n.progress.is-success::-webkit-progress-value {\n    background-color: #23d160;\n}\n.progress.is-success::-moz-progress-bar {\n    background-color: #23d160;\n}\n.progress.is-success::-ms-fill {\n    background-color: #23d160;\n}\n.progress.is-warning::-webkit-progress-value {\n    background-color: #ffdd57;\n}\n.progress.is-warning::-moz-progress-bar {\n    background-color: #ffdd57;\n}\n.progress.is-warning::-ms-fill {\n    background-color: #ffdd57;\n}\n.progress.is-danger::-webkit-progress-value {\n    background-color: #ff3860;\n}\n.progress.is-danger::-moz-progress-bar {\n    background-color: #ff3860;\n}\n.progress.is-danger::-ms-fill {\n    background-color: #ff3860;\n}\n.progress.is-small {\n    height: 0.75rem;\n}\n.progress.is-medium {\n    height: 1.25rem;\n}\n.progress.is-large {\n    height: 1.5rem;\n}\n.table {\n  background-color: white;\n  color: #363636;\n  margin-bottom: 1.5rem;\n}\n.table td,\n  .table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top;\n}\n.table td.is-white,\n    .table th.is-white {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a;\n}\n.table td.is-black,\n    .table th.is-black {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white;\n}\n.table td.is-light,\n    .table th.is-light {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636;\n}\n.table td.is-dark,\n    .table th.is-dark {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke;\n}\n.table td.is-primary,\n    .table th.is-primary {\n      background-color: #00d1b2;\n      border-color: #00d1b2;\n      color: #fff;\n}\n.table td.is-link,\n    .table th.is-link {\n      background-color: #3273dc;\n      border-color: #3273dc;\n      color: #fff;\n}\n.table td.is-info,\n    .table th.is-info {\n      background-color: #209cee;\n      border-color: #209cee;\n      color: #fff;\n}\n.table td.is-success,\n    .table th.is-success {\n      background-color: #23d160;\n      border-color: #23d160;\n      color: #fff;\n}\n.table td.is-warning,\n    .table th.is-warning {\n      background-color: #ffdd57;\n      border-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-danger,\n    .table th.is-danger {\n      background-color: #ff3860;\n      border-color: #ff3860;\n      color: #fff;\n}\n.table td.is-narrow,\n    .table th.is-narrow {\n      white-space: nowrap;\n      width: 1%;\n}\n.table td.is-selected,\n    .table th.is-selected {\n      background-color: #00d1b2;\n      color: #fff;\n}\n.table td.is-selected a,\n      .table td.is-selected strong,\n      .table th.is-selected a,\n      .table th.is-selected strong {\n        color: currentColor;\n}\n.table th {\n    color: #363636;\n    text-align: left;\n}\n.table tr.is-selected {\n    background-color: #00d1b2;\n    color: #fff;\n}\n.table tr.is-selected a,\n    .table tr.is-selected strong {\n      color: currentColor;\n}\n.table tr.is-selected td,\n    .table tr.is-selected th {\n      border-color: #fff;\n      color: currentColor;\n}\n.table thead td,\n  .table thead th {\n    border-width: 0 0 2px;\n    color: #363636;\n}\n.table tfoot td,\n  .table tfoot th {\n    border-width: 2px 0 0;\n    color: #363636;\n}\n.table tbody tr:last-child td,\n  .table tbody tr:last-child th {\n    border-bottom-width: 0;\n}\n.table.is-bordered td,\n  .table.is-bordered th {\n    border-width: 1px;\n}\n.table.is-bordered tr:last-child td,\n  .table.is-bordered tr:last-child th {\n    border-bottom-width: 1px;\n}\n.table.is-fullwidth {\n    width: 100%;\n}\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n    background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n    background-color: whitesmoke;\n}\n.table.is-narrow td,\n  .table.is-narrow th {\n    padding: 0.25em 0.5em;\n}\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n    background-color: #fafafa;\n}\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.tags .tag {\n    margin-bottom: 0.5rem;\n}\n.tags .tag:not(:last-child) {\n      margin-right: 0.5rem;\n}\n.tags:last-child {\n    margin-bottom: -0.5rem;\n}\n.tags:not(:last-child) {\n    margin-bottom: 1rem;\n}\n.tags.has-addons .tag {\n    margin-right: 0;\n}\n.tags.has-addons .tag:not(:first-child) {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n}\n.tags.has-addons .tag:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n}\n.tags.is-centered {\n    justify-content: center;\n}\n.tags.is-centered .tag {\n      margin-right: 0.25rem;\n      margin-left: 0.25rem;\n}\n.tags.is-right {\n    justify-content: flex-end;\n}\n.tags.is-right .tag:not(:first-child) {\n      margin-left: 0.5rem;\n}\n.tags.is-right .tag:not(:last-child) {\n      margin-right: 0;\n}\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 3px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.tag:not(body) .delete {\n    margin-left: 0.25em;\n    margin-right: -0.375em;\n}\n.tag:not(body).is-white {\n    background-color: white;\n    color: #0a0a0a;\n}\n.tag:not(body).is-black {\n    background-color: #0a0a0a;\n    color: white;\n}\n.tag:not(body).is-light {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.tag:not(body).is-dark {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.tag:not(body).is-primary {\n    background-color: #00d1b2;\n    color: #fff;\n}\n.tag:not(body).is-link {\n    background-color: #3273dc;\n    color: #fff;\n}\n.tag:not(body).is-info {\n    background-color: #209cee;\n    color: #fff;\n}\n.tag:not(body).is-success {\n    background-color: #23d160;\n    color: #fff;\n}\n.tag:not(body).is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-danger {\n    background-color: #ff3860;\n    color: #fff;\n}\n.tag:not(body).is-medium {\n    font-size: 1rem;\n}\n.tag:not(body).is-large {\n    font-size: 1.25rem;\n}\n.tag:not(body) .icon:first-child:not(:last-child) {\n    margin-left: -0.375em;\n    margin-right: 0.1875em;\n}\n.tag:not(body) .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: -0.375em;\n}\n.tag:not(body) .icon:first-child:last-child {\n    margin-left: -0.375em;\n    margin-right: -0.375em;\n}\n.tag:not(body).is-delete {\n    margin-left: 1px;\n    padding: 0;\n    position: relative;\n    width: 2em;\n}\n.tag:not(body).is-delete:before, .tag:not(body).is-delete:after {\n      background-color: currentColor;\n      content: \"\";\n      display: block;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      transform-origin: center center;\n}\n.tag:not(body).is-delete:before {\n      height: 1px;\n      width: 50%;\n}\n.tag:not(body).is-delete:after {\n      height: 50%;\n      width: 1px;\n}\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n      background-color: #e8e8e8;\n}\n.tag:not(body).is-delete:active {\n      background-color: #dbdbdb;\n}\n.tag:not(body).is-rounded {\n    border-radius: 290486px;\n}\na.tag:hover {\n  text-decoration: underline;\n}\n.title,\n.subtitle {\n  word-break: break-word;\n}\n.title:not(:last-child),\n  .subtitle:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.title em,\n  .title span,\n  .subtitle em,\n  .subtitle span {\n    font-weight: inherit;\n}\n.title sub,\n  .subtitle sub {\n    font-size: 0.75em;\n}\n.title sup,\n  .subtitle sup {\n    font-size: 0.75em;\n}\n.title .tag,\n  .subtitle .tag {\n    vertical-align: middle;\n}\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.title strong {\n    color: inherit;\n    font-weight: inherit;\n}\n.title + .highlight {\n    margin-top: -0.75rem;\n}\n.title:not(.is-spaced) + .subtitle {\n    margin-top: -1.5rem;\n}\n.title.is-1 {\n    font-size: 3rem;\n}\n.title.is-2 {\n    font-size: 2.5rem;\n}\n.title.is-3 {\n    font-size: 2rem;\n}\n.title.is-4 {\n    font-size: 1.5rem;\n}\n.title.is-5 {\n    font-size: 1.25rem;\n}\n.title.is-6 {\n    font-size: 1rem;\n}\n.title.is-7 {\n    font-size: 0.75rem;\n}\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n.subtitle strong {\n    color: #363636;\n    font-weight: 600;\n}\n.subtitle:not(.is-spaced) + .title {\n    margin-top: -1.5rem;\n}\n.subtitle.is-1 {\n    font-size: 3rem;\n}\n.subtitle.is-2 {\n    font-size: 2.5rem;\n}\n.subtitle.is-3 {\n    font-size: 2rem;\n}\n.subtitle.is-4 {\n    font-size: 1.5rem;\n}\n.subtitle.is-5 {\n    font-size: 1.25rem;\n}\n.subtitle.is-6 {\n    font-size: 1rem;\n}\n.subtitle.is-7 {\n    font-size: 0.75rem;\n}\n.block:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.delete {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n.delete:before, .delete:after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center;\n}\n.delete:before {\n    height: 2px;\n    width: 50%;\n}\n.delete:after {\n    height: 50%;\n    width: 2px;\n}\n.delete:hover, .delete:focus {\n    background-color: rgba(10, 10, 10, 0.3);\n}\n.delete:active {\n    background-color: rgba(10, 10, 10, 0.4);\n}\n.delete.is-small {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px;\n}\n.delete.is-medium {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px;\n}\n.delete.is-large {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px;\n}\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n.highlight {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n.highlight:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.highlight pre {\n    overflow: auto;\n    max-width: 100%;\n}\n.loader {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n.breadcrumb {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.breadcrumb:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.breadcrumb a {\n    align-items: center;\n    color: #3273dc;\n    display: flex;\n    justify-content: center;\n    padding: 0.5em 0.75em;\n}\n.breadcrumb a:hover {\n      color: #363636;\n}\n.breadcrumb li {\n    align-items: center;\n    display: flex;\n}\n.breadcrumb li:first-child a {\n      padding-left: 0;\n}\n.breadcrumb li.is-active a {\n      color: #363636;\n      cursor: default;\n      pointer-events: none;\n}\n.breadcrumb li + li::before {\n      color: #4a4a4a;\n      content: \"/\";\n}\n.breadcrumb ul, .breadcrumb ol {\n    align-items: center;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    justify-content: flex-start;\n}\n.breadcrumb .icon:first-child {\n    margin-right: 0.5em;\n}\n.breadcrumb .icon:last-child {\n    margin-left: 0.5em;\n}\n.breadcrumb.is-centered ol, .breadcrumb.is-centered ul {\n    justify-content: center;\n}\n.breadcrumb.is-right ol, .breadcrumb.is-right ul {\n    justify-content: flex-end;\n}\n.breadcrumb.is-small {\n    font-size: 0.75rem;\n}\n.breadcrumb.is-medium {\n    font-size: 1.25rem;\n}\n.breadcrumb.is-large {\n    font-size: 1.5rem;\n}\n.breadcrumb.has-arrow-separator li + li::before {\n    content: \"\\2192\";\n}\n.breadcrumb.has-bullet-separator li + li::before {\n    content: \"\\2022\";\n}\n.breadcrumb.has-dot-separator li + li::before {\n    content: \"\\B7\";\n}\n.breadcrumb.has-succeeds-separator li + li::before {\n    content: \"\\227B\";\n}\n.card {\n  background-color: white;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n.card-header {\n  align-items: stretch;\n  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n.card-header-title {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem;\n}\n.card-header-title.is-centered {\n    justify-content: center;\n}\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-image {\n  display: block;\n  position: relative;\n}\n.card-content {\n  padding: 1.5rem;\n}\n.card-footer {\n  border-top: 1px solid #dbdbdb;\n  align-items: stretch;\n  display: flex;\n}\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-footer-item:not(:last-child) {\n    border-right: 1px solid #dbdbdb;\n}\n.card .media:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n    display: block;\n}\n.dropdown.is-right .dropdown-menu {\n    left: auto;\n    right: 0;\n}\n.dropdown.is-up .dropdown-menu {\n    bottom: 100%;\n    padding-bottom: 4px;\n    padding-top: unset;\n    top: auto;\n}\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n.dropdown-content {\n  background-color: white;\n  border-radius: 3px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\na.dropdown-item {\n  padding-right: 3rem;\n  white-space: nowrap;\n}\na.dropdown-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n}\na.dropdown-item.is-active {\n    background-color: #3273dc;\n    color: #fff;\n}\n.dropdown-divider {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n.level {\n  align-items: center;\n  justify-content: space-between;\n}\n.level:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.level code {\n    border-radius: 3px;\n}\n.level img {\n    display: inline-block;\n    vertical-align: top;\n}\n.level.is-mobile {\n    display: flex;\n}\n.level.is-mobile .level-left,\n    .level.is-mobile .level-right {\n      display: flex;\n}\n.level.is-mobile .level-left + .level-right {\n      margin-top: 0;\n}\n.level.is-mobile .level-item {\n      margin-right: 0.75rem;\n}\n.level.is-mobile .level-item:not(:last-child) {\n        margin-bottom: 0;\n}\n.level.is-mobile .level-item:not(.is-narrow) {\n        flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n.level {\n      display: flex;\n}\n.level > .level-item:not(.is-narrow) {\n        flex-grow: 1;\n}\n}\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.level-item .title,\n  .level-item .subtitle {\n    margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n.level-item:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n}\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.level-left .level-item.is-flexible,\n  .level-right .level-item.is-flexible {\n    flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n.level-left .level-item:not(:last-child),\n    .level-right .level-item:not(:last-child) {\n      margin-right: 0.75rem;\n}\n}\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n@media screen and (max-width: 768px) {\n.level-left + .level-right {\n      margin-top: 1.5rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.level-left {\n      display: flex;\n}\n}\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n@media screen and (min-width: 769px), print {\n.level-right {\n      display: flex;\n}\n}\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: left;\n}\n.media .content:not(:last-child) {\n    margin-bottom: 0.75rem;\n}\n.media .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    display: flex;\n    padding-top: 0.75rem;\n}\n.media .media .content:not(:last-child),\n    .media .media .control:not(:last-child) {\n      margin-bottom: 0.5rem;\n}\n.media .media .media {\n      padding-top: 0.5rem;\n}\n.media .media .media + .media {\n        margin-top: 0.5rem;\n}\n.media + .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    margin-top: 1rem;\n    padding-top: 1rem;\n}\n.media.is-large + .media {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem;\n}\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.media-left {\n  margin-right: 1rem;\n}\n.media-right {\n  margin-left: 1rem;\n}\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  text-align: left;\n}\n.menu {\n  font-size: 1rem;\n}\n.menu.is-small {\n    font-size: 0.75rem;\n}\n.menu.is-medium {\n    font-size: 1.25rem;\n}\n.menu.is-large {\n    font-size: 1.5rem;\n}\n.menu-list {\n  line-height: 1.25;\n}\n.menu-list a {\n    border-radius: 2px;\n    color: #4a4a4a;\n    display: block;\n    padding: 0.5em 0.75em;\n}\n.menu-list a:hover {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.menu-list a.is-active {\n      background-color: #3273dc;\n      color: #fff;\n}\n.menu-list li ul {\n    border-left: 1px solid #dbdbdb;\n    margin: 0.75em;\n    padding-left: 0.75em;\n}\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.menu-label:not(:first-child) {\n    margin-top: 1em;\n}\n.menu-label:not(:last-child) {\n    margin-bottom: 1em;\n}\n.message {\n  background-color: whitesmoke;\n  border-radius: 3px;\n  font-size: 1rem;\n}\n.message:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.message strong {\n    color: currentColor;\n}\n.message a:not(.button):not(.tag) {\n    color: currentColor;\n    text-decoration: underline;\n}\n.message.is-small {\n    font-size: 0.75rem;\n}\n.message.is-medium {\n    font-size: 1.25rem;\n}\n.message.is-large {\n    font-size: 1.5rem;\n}\n.message.is-white {\n    background-color: white;\n}\n.message.is-white .message-header {\n      background-color: white;\n      color: #0a0a0a;\n}\n.message.is-white .message-body {\n      border-color: white;\n      color: #4d4d4d;\n}\n.message.is-black {\n    background-color: #fafafa;\n}\n.message.is-black .message-header {\n      background-color: #0a0a0a;\n      color: white;\n}\n.message.is-black .message-body {\n      border-color: #0a0a0a;\n      color: #090909;\n}\n.message.is-light {\n    background-color: #fafafa;\n}\n.message.is-light .message-header {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.message.is-light .message-body {\n      border-color: whitesmoke;\n      color: #505050;\n}\n.message.is-dark {\n    background-color: #fafafa;\n}\n.message.is-dark .message-header {\n      background-color: #363636;\n      color: whitesmoke;\n}\n.message.is-dark .message-body {\n      border-color: #363636;\n      color: #2a2a2a;\n}\n.message.is-primary {\n    background-color: #f5fffd;\n}\n.message.is-primary .message-header {\n      background-color: #00d1b2;\n      color: #fff;\n}\n.message.is-primary .message-body {\n      border-color: #00d1b2;\n      color: #021310;\n}\n.message.is-link {\n    background-color: #f6f9fe;\n}\n.message.is-link .message-header {\n      background-color: #3273dc;\n      color: #fff;\n}\n.message.is-link .message-body {\n      border-color: #3273dc;\n      color: #22509a;\n}\n.message.is-info {\n    background-color: #f6fbfe;\n}\n.message.is-info .message-header {\n      background-color: #209cee;\n      color: #fff;\n}\n.message.is-info .message-body {\n      border-color: #209cee;\n      color: #12537e;\n}\n.message.is-success {\n    background-color: #f6fef9;\n}\n.message.is-success .message-header {\n      background-color: #23d160;\n      color: #fff;\n}\n.message.is-success .message-body {\n      border-color: #23d160;\n      color: #0e301a;\n}\n.message.is-warning {\n    background-color: #fffdf5;\n}\n.message.is-warning .message-header {\n      background-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7);\n}\n.message.is-warning .message-body {\n      border-color: #ffdd57;\n      color: #3b3108;\n}\n.message.is-danger {\n    background-color: #fff5f7;\n}\n.message.is-danger .message-header {\n      background-color: #ff3860;\n      color: #fff;\n}\n.message.is-danger .message-body {\n      border-color: #ff3860;\n      color: #cd0930;\n}\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 3px 3px 0 0;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n  position: relative;\n}\n.message-header .delete {\n    flex-grow: 0;\n    flex-shrink: 0;\n    margin-left: 0.75em;\n}\n.message-header + .message-body {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-top: none;\n}\n.message-body {\n  border: 1px solid #dbdbdb;\n  border-radius: 3px;\n  color: #4a4a4a;\n  padding: 1em 1.25em;\n}\n.message-body code,\n  .message-body pre {\n    background-color: white;\n}\n.message-body pre code {\n    background-color: transparent;\n}\n.modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n.modal.is-active {\n    display: flex;\n}\n.modal-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: rgba(10, 10, 10, 0.86);\n}\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.modal-content,\n    .modal-card {\n      margin: 0 auto;\n      max-height: calc(100vh - 40px);\n      width: 640px;\n}\n}\n.modal-close {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n.modal-close:before, .modal-close:after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center;\n}\n.modal-close:before {\n    height: 2px;\n    width: 50%;\n}\n.modal-close:after {\n    height: 50%;\n    width: 2px;\n}\n.modal-close:hover, .modal-close:focus {\n    background-color: rgba(10, 10, 10, 0.3);\n}\n.modal-close:active {\n    background-color: rgba(10, 10, 10, 0.4);\n}\n.modal-close.is-small {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px;\n}\n.modal-close.is-medium {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px;\n}\n.modal-close.is-large {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px;\n}\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n}\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.modal-card-title {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.modal-card-foot {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top: 1px solid #dbdbdb;\n}\n.modal-card-foot .button:not(:last-child) {\n    margin-right: 10px;\n}\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n}\n.navbar.is-white {\n    background-color: white;\n    color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > .navbar-item,\n    .navbar.is-white .navbar-brand .navbar-link {\n      color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-white .navbar-brand .navbar-link:hover,\n    .navbar.is-white .navbar-brand .navbar-link.is-active {\n      background-color: #f2f2f2;\n      color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand .navbar-link::after {\n      border-color: #0a0a0a;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-white .navbar-start > .navbar-item,\n      .navbar.is-white .navbar-start .navbar-link,\n      .navbar.is-white .navbar-end > .navbar-item,\n      .navbar.is-white .navbar-end .navbar-link {\n        color: #0a0a0a;\n}\n.navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n      .navbar.is-white .navbar-start .navbar-link:hover,\n      .navbar.is-white .navbar-start .navbar-link.is-active,\n      .navbar.is-white .navbar-end > a.navbar-item:hover,\n      .navbar.is-white .navbar-end > a.navbar-item.is-active,\n      .navbar.is-white .navbar-end .navbar-link:hover,\n      .navbar.is-white .navbar-end .navbar-link.is-active {\n        background-color: #f2f2f2;\n        color: #0a0a0a;\n}\n.navbar.is-white .navbar-start .navbar-link::after,\n      .navbar.is-white .navbar-end .navbar-link::after {\n        border-color: #0a0a0a;\n}\n.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #f2f2f2;\n        color: #0a0a0a;\n}\n.navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n        background-color: white;\n        color: #0a0a0a;\n}\n}\n.navbar.is-black {\n    background-color: #0a0a0a;\n    color: white;\n}\n.navbar.is-black .navbar-brand > .navbar-item,\n    .navbar.is-black .navbar-brand .navbar-link {\n      color: white;\n}\n.navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-black .navbar-brand .navbar-link:hover,\n    .navbar.is-black .navbar-brand .navbar-link.is-active {\n      background-color: black;\n      color: white;\n}\n.navbar.is-black .navbar-brand .navbar-link::after {\n      border-color: white;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-black .navbar-start > .navbar-item,\n      .navbar.is-black .navbar-start .navbar-link,\n      .navbar.is-black .navbar-end > .navbar-item,\n      .navbar.is-black .navbar-end .navbar-link {\n        color: white;\n}\n.navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n      .navbar.is-black .navbar-start .navbar-link:hover,\n      .navbar.is-black .navbar-start .navbar-link.is-active,\n      .navbar.is-black .navbar-end > a.navbar-item:hover,\n      .navbar.is-black .navbar-end > a.navbar-item.is-active,\n      .navbar.is-black .navbar-end .navbar-link:hover,\n      .navbar.is-black .navbar-end .navbar-link.is-active {\n        background-color: black;\n        color: white;\n}\n.navbar.is-black .navbar-start .navbar-link::after,\n      .navbar.is-black .navbar-end .navbar-link::after {\n        border-color: white;\n}\n.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: black;\n        color: white;\n}\n.navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n        background-color: #0a0a0a;\n        color: white;\n}\n}\n.navbar.is-light {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.navbar.is-light .navbar-brand > .navbar-item,\n    .navbar.is-light .navbar-brand .navbar-link {\n      color: #363636;\n}\n.navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-light .navbar-brand .navbar-link:hover,\n    .navbar.is-light .navbar-brand .navbar-link.is-active {\n      background-color: #e8e8e8;\n      color: #363636;\n}\n.navbar.is-light .navbar-brand .navbar-link::after {\n      border-color: #363636;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-light .navbar-start > .navbar-item,\n      .navbar.is-light .navbar-start .navbar-link,\n      .navbar.is-light .navbar-end > .navbar-item,\n      .navbar.is-light .navbar-end .navbar-link {\n        color: #363636;\n}\n.navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n      .navbar.is-light .navbar-start .navbar-link:hover,\n      .navbar.is-light .navbar-start .navbar-link.is-active,\n      .navbar.is-light .navbar-end > a.navbar-item:hover,\n      .navbar.is-light .navbar-end > a.navbar-item.is-active,\n      .navbar.is-light .navbar-end .navbar-link:hover,\n      .navbar.is-light .navbar-end .navbar-link.is-active {\n        background-color: #e8e8e8;\n        color: #363636;\n}\n.navbar.is-light .navbar-start .navbar-link::after,\n      .navbar.is-light .navbar-end .navbar-link::after {\n        border-color: #363636;\n}\n.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #e8e8e8;\n        color: #363636;\n}\n.navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n        background-color: whitesmoke;\n        color: #363636;\n}\n}\n.navbar.is-dark {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand > .navbar-item,\n    .navbar.is-dark .navbar-brand .navbar-link {\n      color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-dark .navbar-brand .navbar-link:hover,\n    .navbar.is-dark .navbar-brand .navbar-link.is-active {\n      background-color: #292929;\n      color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand .navbar-link::after {\n      border-color: whitesmoke;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-dark .navbar-start > .navbar-item,\n      .navbar.is-dark .navbar-start .navbar-link,\n      .navbar.is-dark .navbar-end > .navbar-item,\n      .navbar.is-dark .navbar-end .navbar-link {\n        color: whitesmoke;\n}\n.navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n      .navbar.is-dark .navbar-start .navbar-link:hover,\n      .navbar.is-dark .navbar-start .navbar-link.is-active,\n      .navbar.is-dark .navbar-end > a.navbar-item:hover,\n      .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n      .navbar.is-dark .navbar-end .navbar-link:hover,\n      .navbar.is-dark .navbar-end .navbar-link.is-active {\n        background-color: #292929;\n        color: whitesmoke;\n}\n.navbar.is-dark .navbar-start .navbar-link::after,\n      .navbar.is-dark .navbar-end .navbar-link::after {\n        border-color: whitesmoke;\n}\n.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #292929;\n        color: whitesmoke;\n}\n.navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n        background-color: #363636;\n        color: whitesmoke;\n}\n}\n.navbar.is-primary {\n    background-color: #00d1b2;\n    color: #fff;\n}\n.navbar.is-primary .navbar-brand > .navbar-item,\n    .navbar.is-primary .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-primary .navbar-brand .navbar-link:hover,\n    .navbar.is-primary .navbar-brand .navbar-link.is-active {\n      background-color: #00b89c;\n      color: #fff;\n}\n.navbar.is-primary .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-primary .navbar-start > .navbar-item,\n      .navbar.is-primary .navbar-start .navbar-link,\n      .navbar.is-primary .navbar-end > .navbar-item,\n      .navbar.is-primary .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-start .navbar-link:hover,\n      .navbar.is-primary .navbar-start .navbar-link.is-active,\n      .navbar.is-primary .navbar-end > a.navbar-item:hover,\n      .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-end .navbar-link:hover,\n      .navbar.is-primary .navbar-end .navbar-link.is-active {\n        background-color: #00b89c;\n        color: #fff;\n}\n.navbar.is-primary .navbar-start .navbar-link::after,\n      .navbar.is-primary .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #00b89c;\n        color: #fff;\n}\n.navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n        background-color: #00d1b2;\n        color: #fff;\n}\n}\n.navbar.is-link {\n    background-color: #3273dc;\n    color: #fff;\n}\n.navbar.is-link .navbar-brand > .navbar-item,\n    .navbar.is-link .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-link .navbar-brand .navbar-link:hover,\n    .navbar.is-link .navbar-brand .navbar-link.is-active {\n      background-color: #2366d1;\n      color: #fff;\n}\n.navbar.is-link .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-link .navbar-start > .navbar-item,\n      .navbar.is-link .navbar-start .navbar-link,\n      .navbar.is-link .navbar-end > .navbar-item,\n      .navbar.is-link .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n      .navbar.is-link .navbar-start .navbar-link:hover,\n      .navbar.is-link .navbar-start .navbar-link.is-active,\n      .navbar.is-link .navbar-end > a.navbar-item:hover,\n      .navbar.is-link .navbar-end > a.navbar-item.is-active,\n      .navbar.is-link .navbar-end .navbar-link:hover,\n      .navbar.is-link .navbar-end .navbar-link.is-active {\n        background-color: #2366d1;\n        color: #fff;\n}\n.navbar.is-link .navbar-start .navbar-link::after,\n      .navbar.is-link .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #2366d1;\n        color: #fff;\n}\n.navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n        background-color: #3273dc;\n        color: #fff;\n}\n}\n.navbar.is-info {\n    background-color: #209cee;\n    color: #fff;\n}\n.navbar.is-info .navbar-brand > .navbar-item,\n    .navbar.is-info .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-info .navbar-brand .navbar-link:hover,\n    .navbar.is-info .navbar-brand .navbar-link.is-active {\n      background-color: #118fe4;\n      color: #fff;\n}\n.navbar.is-info .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-info .navbar-start > .navbar-item,\n      .navbar.is-info .navbar-start .navbar-link,\n      .navbar.is-info .navbar-end > .navbar-item,\n      .navbar.is-info .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n      .navbar.is-info .navbar-start .navbar-link:hover,\n      .navbar.is-info .navbar-start .navbar-link.is-active,\n      .navbar.is-info .navbar-end > a.navbar-item:hover,\n      .navbar.is-info .navbar-end > a.navbar-item.is-active,\n      .navbar.is-info .navbar-end .navbar-link:hover,\n      .navbar.is-info .navbar-end .navbar-link.is-active {\n        background-color: #118fe4;\n        color: #fff;\n}\n.navbar.is-info .navbar-start .navbar-link::after,\n      .navbar.is-info .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #118fe4;\n        color: #fff;\n}\n.navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n        background-color: #209cee;\n        color: #fff;\n}\n}\n.navbar.is-success {\n    background-color: #23d160;\n    color: #fff;\n}\n.navbar.is-success .navbar-brand > .navbar-item,\n    .navbar.is-success .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-success .navbar-brand .navbar-link:hover,\n    .navbar.is-success .navbar-brand .navbar-link.is-active {\n      background-color: #20bc56;\n      color: #fff;\n}\n.navbar.is-success .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-success .navbar-start > .navbar-item,\n      .navbar.is-success .navbar-start .navbar-link,\n      .navbar.is-success .navbar-end > .navbar-item,\n      .navbar.is-success .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n      .navbar.is-success .navbar-start .navbar-link:hover,\n      .navbar.is-success .navbar-start .navbar-link.is-active,\n      .navbar.is-success .navbar-end > a.navbar-item:hover,\n      .navbar.is-success .navbar-end > a.navbar-item.is-active,\n      .navbar.is-success .navbar-end .navbar-link:hover,\n      .navbar.is-success .navbar-end .navbar-link.is-active {\n        background-color: #20bc56;\n        color: #fff;\n}\n.navbar.is-success .navbar-start .navbar-link::after,\n      .navbar.is-success .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #20bc56;\n        color: #fff;\n}\n.navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n        background-color: #23d160;\n        color: #fff;\n}\n}\n.navbar.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > .navbar-item,\n    .navbar.is-warning .navbar-brand .navbar-link {\n      color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-warning .navbar-brand .navbar-link:hover,\n    .navbar.is-warning .navbar-brand .navbar-link.is-active {\n      background-color: #ffd83d;\n      color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand .navbar-link::after {\n      border-color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-warning .navbar-start > .navbar-item,\n      .navbar.is-warning .navbar-start .navbar-link,\n      .navbar.is-warning .navbar-end > .navbar-item,\n      .navbar.is-warning .navbar-end .navbar-link {\n        color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-start .navbar-link:hover,\n      .navbar.is-warning .navbar-start .navbar-link.is-active,\n      .navbar.is-warning .navbar-end > a.navbar-item:hover,\n      .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-end .navbar-link:hover,\n      .navbar.is-warning .navbar-end .navbar-link.is-active {\n        background-color: #ffd83d;\n        color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-start .navbar-link::after,\n      .navbar.is-warning .navbar-end .navbar-link::after {\n        border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #ffd83d;\n        color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n        background-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7);\n}\n}\n.navbar.is-danger {\n    background-color: #ff3860;\n    color: #fff;\n}\n.navbar.is-danger .navbar-brand > .navbar-item,\n    .navbar.is-danger .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-danger .navbar-brand .navbar-link:hover,\n    .navbar.is-danger .navbar-brand .navbar-link.is-active {\n      background-color: #ff1f4b;\n      color: #fff;\n}\n.navbar.is-danger .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1024px) {\n.navbar.is-danger .navbar-start > .navbar-item,\n      .navbar.is-danger .navbar-start .navbar-link,\n      .navbar.is-danger .navbar-end > .navbar-item,\n      .navbar.is-danger .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-start .navbar-link:hover,\n      .navbar.is-danger .navbar-start .navbar-link.is-active,\n      .navbar.is-danger .navbar-end > a.navbar-item:hover,\n      .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-end .navbar-link:hover,\n      .navbar.is-danger .navbar-end .navbar-link.is-active {\n        background-color: #ff1f4b;\n        color: #fff;\n}\n.navbar.is-danger .navbar-start .navbar-link::after,\n      .navbar.is-danger .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #ff1f4b;\n        color: #fff;\n}\n.navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n        background-color: #ff3860;\n        color: #fff;\n}\n}\n.navbar > .container {\n    align-items: stretch;\n    display: flex;\n    min-height: 3.25rem;\n    width: 100%;\n}\n.navbar.has-shadow {\n    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);\n}\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n}\n.navbar.is-fixed-bottom {\n    bottom: 0;\n}\n.navbar.is-fixed-bottom.has-shadow {\n      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n}\n.navbar.is-fixed-top {\n    top: 0;\n}\nhtml.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem;\n}\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.navbar-burger {\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n.navbar-burger span {\n    background-color: currentColor;\n    display: block;\n    height: 1px;\n    left: calc(50% - 8px);\n    position: absolute;\n    transform-origin: center;\n    transition-duration: 86ms;\n    transition-property: background-color, opacity, transform;\n    transition-timing-function: ease-out;\n    width: 16px;\n}\n.navbar-burger span:nth-child(1) {\n      top: calc(50% - 6px);\n}\n.navbar-burger span:nth-child(2) {\n      top: calc(50% - 1px);\n}\n.navbar-burger span:nth-child(3) {\n      top: calc(50% + 4px);\n}\n.navbar-burger:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n.navbar-burger.is-active span:nth-child(1) {\n    transform: translateY(5px) rotate(45deg);\n}\n.navbar-burger.is-active span:nth-child(2) {\n    opacity: 0;\n}\n.navbar-burger.is-active span:nth-child(3) {\n    transform: translateY(-5px) rotate(-45deg);\n}\n.navbar-menu {\n  display: none;\n}\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 1rem;\n  position: relative;\n}\na.navbar-item:hover, a.navbar-item.is-active,\na.navbar-link:hover,\na.navbar-link.is-active {\n  background-color: whitesmoke;\n  color: #3273dc;\n}\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.navbar-item img {\n    max-height: 1.75rem;\n}\n.navbar-item.has-dropdown {\n    padding: 0;\n}\n.navbar-item.is-expanded {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.navbar-item.is-tab {\n    border-bottom: 1px solid transparent;\n    min-height: 3.25rem;\n    padding-bottom: calc(0.5rem - 1px);\n}\n.navbar-item.is-tab:hover {\n      background-color: transparent;\n      border-bottom-color: #3273dc;\n}\n.navbar-item.is-tab.is-active {\n      background-color: transparent;\n      border-bottom-color: #3273dc;\n      border-bottom-style: solid;\n      border-bottom-width: 3px;\n      color: #3273dc;\n      padding-bottom: calc(0.5rem - 3px);\n}\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.navbar-link {\n  padding-right: 2.5em;\n}\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.navbar-dropdown .navbar-item {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.navbar-divider {\n  background-color: #dbdbdb;\n  border: none;\n  display: none;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n@media screen and (max-width: 1023px) {\n.navbar > .container {\n    display: block;\n}\n.navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex;\n}\n.navbar-menu {\n    background-color: white;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n}\n.navbar-menu.is-active {\n      display: block;\n}\n.navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n}\n.navbar.is-fixed-bottom-touch {\n    bottom: 0;\n}\n.navbar.is-fixed-bottom-touch.has-shadow {\n      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n}\n.navbar.is-fixed-top-touch {\n    top: 0;\n}\n.navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n}\nhtml.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n}\n}\n@media screen and (min-width: 1024px) {\n.navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex;\n}\n.navbar {\n    min-height: 3.25rem;\n}\n.navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n    .navbar.is-transparent a.navbar-link:hover,\n    .navbar.is-transparent a.navbar-link.is-active {\n      background-color: transparent !important;\n}\n.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n      background-color: transparent !important;\n}\n.navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n      background-color: whitesmoke;\n      color: #0a0a0a;\n}\n.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n      background-color: whitesmoke;\n      color: #3273dc;\n}\n.navbar-burger {\n    display: none;\n}\n.navbar-item,\n  .navbar-link {\n    align-items: center;\n    display: flex;\n}\n.navbar-item.has-dropdown {\n    align-items: stretch;\n}\n.navbar-item.has-dropdown-up .navbar-link::after {\n    transform: rotate(135deg) translate(0.25em, -0.25em);\n}\n.navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 1px solid #dbdbdb;\n    border-radius: 5px 5px 0 0;\n    border-top: none;\n    bottom: 100%;\n    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n}\n.navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n}\n.navbar-item.is-active .navbar-dropdown.is-boxed, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n      opacity: 1;\n      pointer-events: auto;\n      transform: translateY(0);\n}\n.navbar-link::after {\n    border: 1px solid #3273dc;\n    border-right: 0;\n    border-top: 0;\n    content: \" \";\n    display: block;\n    height: 0.5em;\n    pointer-events: none;\n    position: absolute;\n    transform: rotate(-45deg);\n    transform-origin: center;\n    width: 0.5em;\n    margin-top: -0.375em;\n    right: 1.125em;\n    top: 50%;\n}\n.navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.navbar-start {\n    justify-content: flex-start;\n    margin-right: auto;\n}\n.navbar-end {\n    justify-content: flex-end;\n    margin-left: auto;\n}\n.navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-top: 1px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n}\n.navbar-dropdown .navbar-item {\n      padding: 0.375rem 1rem;\n      white-space: nowrap;\n}\n.navbar-dropdown a.navbar-item {\n      padding-right: 3rem;\n}\n.navbar-dropdown a.navbar-item:hover {\n        background-color: whitesmoke;\n        color: #0a0a0a;\n}\n.navbar-dropdown a.navbar-item.is-active {\n        background-color: whitesmoke;\n        color: #3273dc;\n}\n.navbar-dropdown.is-boxed {\n      border-radius: 5px;\n      border-top: none;\n      box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n      display: block;\n      opacity: 0;\n      pointer-events: none;\n      top: calc(100% + (-4px));\n      transform: translateY(-5px);\n      transition-duration: 86ms;\n      transition-property: opacity, transform;\n}\n.navbar-dropdown.is-right {\n      left: auto;\n      right: 0;\n}\n.navbar-divider {\n    display: block;\n}\n.navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -1rem;\n}\n.navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -1rem;\n}\n.navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n}\n.navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n}\n.navbar.is-fixed-bottom-desktop.has-shadow {\n      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n}\n.navbar.is-fixed-top-desktop {\n    top: 0;\n}\nhtml.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n}\na.navbar-item.is-active,\n  a.navbar-link.is-active {\n    color: #0a0a0a;\n}\na.navbar-item.is-active:not(:hover),\n  a.navbar-link.is-active:not(:hover) {\n    background-color: transparent;\n}\n.navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: whitesmoke;\n}\n}\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n.pagination.is-small {\n    font-size: 0.75rem;\n}\n.pagination.is-medium {\n    font-size: 1.25rem;\n}\n.pagination.is-large {\n    font-size: 1.5rem;\n}\n.pagination.is-rounded .pagination-previous,\n  .pagination.is-rounded .pagination-next {\n    padding-left: 1em;\n    padding-right: 1em;\n    border-radius: 290486px;\n}\n.pagination.is-rounded .pagination-link {\n    border-radius: 290486px;\n}\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 1em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  justify-content: center;\n  margin: 0.25rem;\n  text-align: center;\n}\n.pagination-previous:focus, .pagination-previous.is-focused, .pagination-previous:active, .pagination-previous.is-active,\n  .pagination-next:focus,\n  .pagination-next.is-focused,\n  .pagination-next:active,\n  .pagination-next.is-active,\n  .pagination-link:focus,\n  .pagination-link.is-focused,\n  .pagination-link:active,\n  .pagination-link.is-active,\n  .pagination-ellipsis:focus,\n  .pagination-ellipsis.is-focused,\n  .pagination-ellipsis:active,\n  .pagination-ellipsis.is-active {\n    outline: none;\n}\n.pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled],\n  .pagination-ellipsis[disabled] {\n    cursor: not-allowed;\n}\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.25em;\n}\n.pagination-previous:hover,\n  .pagination-next:hover,\n  .pagination-link:hover {\n    border-color: #b5b5b5;\n    color: #363636;\n}\n.pagination-previous:focus,\n  .pagination-next:focus,\n  .pagination-link:focus {\n    border-color: #3273dc;\n}\n.pagination-previous:active,\n  .pagination-next:active,\n  .pagination-link:active {\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n.pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled] {\n    background-color: #dbdbdb;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    color: #7a7a7a;\n    opacity: 0.5;\n}\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.pagination-link.is-current {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n.pagination-list {\n  flex-wrap: wrap;\n}\n@media screen and (max-width: 768px) {\n.pagination {\n    flex-wrap: wrap;\n}\n.pagination-previous,\n  .pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n}\n@media screen and (min-width: 769px), print {\n.pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n}\n.pagination-previous {\n    order: 2;\n}\n.pagination-next {\n    order: 3;\n}\n.pagination {\n    justify-content: space-between;\n}\n.pagination.is-centered .pagination-previous {\n      order: 1;\n}\n.pagination.is-centered .pagination-list {\n      justify-content: center;\n      order: 2;\n}\n.pagination.is-centered .pagination-next {\n      order: 3;\n}\n.pagination.is-right .pagination-previous {\n      order: 1;\n}\n.pagination.is-right .pagination-next {\n      order: 2;\n}\n.pagination.is-right .pagination-list {\n      justify-content: flex-end;\n      order: 3;\n}\n}\n.panel {\n  font-size: 1rem;\n}\n.panel:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.panel-heading,\n.panel-tabs,\n.panel-block {\n  border-bottom: 1px solid #dbdbdb;\n  border-left: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb;\n}\n.panel-heading:first-child,\n  .panel-tabs:first-child,\n  .panel-block:first-child {\n    border-top: 1px solid #dbdbdb;\n}\n.panel-heading {\n  background-color: whitesmoke;\n  border-radius: 3px 3px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 300;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n}\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n.panel-tabs a {\n    border-bottom: 1px solid #dbdbdb;\n    margin-bottom: -1px;\n    padding: 0.5em;\n}\n.panel-tabs a.is-active {\n      border-bottom-color: #4a4a4a;\n      color: #363636;\n}\n.panel-list a {\n  color: #4a4a4a;\n}\n.panel-list a:hover {\n    color: #3273dc;\n}\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n.panel-block input[type=\"checkbox\"] {\n    margin-right: 0.75em;\n}\n.panel-block > .control {\n    flex-grow: 1;\n    flex-shrink: 1;\n    width: 100%;\n}\n.panel-block.is-wrapped {\n    flex-wrap: wrap;\n}\n.panel-block.is-active {\n    border-left-color: #3273dc;\n    color: #363636;\n}\n.panel-block.is-active .panel-icon {\n      color: #3273dc;\n}\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\na.panel-block:hover,\n  label.panel-block:hover {\n    background-color: whitesmoke;\n}\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n.panel-icon .fa {\n    font-size: inherit;\n    line-height: inherit;\n}\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.tabs:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.tabs a {\n    align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    color: #4a4a4a;\n    display: flex;\n    justify-content: center;\n    margin-bottom: -1px;\n    padding: 0.5em 1em;\n    vertical-align: top;\n}\n.tabs a:hover {\n      border-bottom-color: #363636;\n      color: #363636;\n}\n.tabs li {\n    display: block;\n}\n.tabs li.is-active a {\n      border-bottom-color: #3273dc;\n      color: #3273dc;\n}\n.tabs ul {\n    align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    justify-content: flex-start;\n}\n.tabs ul.is-left {\n      padding-right: 0.75em;\n}\n.tabs ul.is-center {\n      flex: none;\n      justify-content: center;\n      padding-left: 0.75em;\n      padding-right: 0.75em;\n}\n.tabs ul.is-right {\n      justify-content: flex-end;\n      padding-left: 0.75em;\n}\n.tabs .icon:first-child {\n    margin-right: 0.5em;\n}\n.tabs .icon:last-child {\n    margin-left: 0.5em;\n}\n.tabs.is-centered ul {\n    justify-content: center;\n}\n.tabs.is-right ul {\n    justify-content: flex-end;\n}\n.tabs.is-boxed a {\n    border: 1px solid transparent;\n    border-radius: 3px 3px 0 0;\n}\n.tabs.is-boxed a:hover {\n      background-color: whitesmoke;\n      border-bottom-color: #dbdbdb;\n}\n.tabs.is-boxed li.is-active a {\n    background-color: white;\n    border-color: #dbdbdb;\n    border-bottom-color: transparent !important;\n}\n.tabs.is-fullwidth li {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.tabs.is-toggle a {\n    border-color: #dbdbdb;\n    border-style: solid;\n    border-width: 1px;\n    margin-bottom: 0;\n    position: relative;\n}\n.tabs.is-toggle a:hover {\n      background-color: whitesmoke;\n      border-color: #b5b5b5;\n      z-index: 2;\n}\n.tabs.is-toggle li + li {\n    margin-left: -1px;\n}\n.tabs.is-toggle li:first-child a {\n    border-radius: 3px 0 0 3px;\n}\n.tabs.is-toggle li:last-child a {\n    border-radius: 0 3px 3px 0;\n}\n.tabs.is-toggle li.is-active a {\n    background-color: #3273dc;\n    border-color: #3273dc;\n    color: #fff;\n    z-index: 1;\n}\n.tabs.is-toggle ul {\n    border-bottom: none;\n}\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n    border-bottom-left-radius: 290486px;\n    border-top-left-radius: 290486px;\n    padding-left: 1.25em;\n}\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n    border-bottom-right-radius: 290486px;\n    border-top-right-radius: 290486px;\n    padding-right: 1.25em;\n}\n.tabs.is-small {\n    font-size: 0.75rem;\n}\n.tabs.is-medium {\n    font-size: 1.25rem;\n}\n.tabs.is-large {\n    font-size: 1.5rem;\n}\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n.columns.is-mobile > .column.is-narrow {\n    flex: none;\n}\n.columns.is-mobile > .column.is-full {\n    flex: none;\n    width: 100%;\n}\n.columns.is-mobile > .column.is-three-quarters {\n    flex: none;\n    width: 75%;\n}\n.columns.is-mobile > .column.is-two-thirds {\n    flex: none;\n    width: 66.6666%;\n}\n.columns.is-mobile > .column.is-half {\n    flex: none;\n    width: 50%;\n}\n.columns.is-mobile > .column.is-one-third {\n    flex: none;\n    width: 33.3333%;\n}\n.columns.is-mobile > .column.is-one-quarter {\n    flex: none;\n    width: 25%;\n}\n.columns.is-mobile > .column.is-one-fifth {\n    flex: none;\n    width: 20%;\n}\n.columns.is-mobile > .column.is-two-fifths {\n    flex: none;\n    width: 40%;\n}\n.columns.is-mobile > .column.is-three-fifths {\n    flex: none;\n    width: 60%;\n}\n.columns.is-mobile > .column.is-four-fifths {\n    flex: none;\n    width: 80%;\n}\n.columns.is-mobile > .column.is-offset-three-quarters {\n    margin-left: 75%;\n}\n.columns.is-mobile > .column.is-offset-two-thirds {\n    margin-left: 66.6666%;\n}\n.columns.is-mobile > .column.is-offset-half {\n    margin-left: 50%;\n}\n.columns.is-mobile > .column.is-offset-one-third {\n    margin-left: 33.3333%;\n}\n.columns.is-mobile > .column.is-offset-one-quarter {\n    margin-left: 25%;\n}\n.columns.is-mobile > .column.is-offset-one-fifth {\n    margin-left: 20%;\n}\n.columns.is-mobile > .column.is-offset-two-fifths {\n    margin-left: 40%;\n}\n.columns.is-mobile > .column.is-offset-three-fifths {\n    margin-left: 60%;\n}\n.columns.is-mobile > .column.is-offset-four-fifths {\n    margin-left: 80%;\n}\n.columns.is-mobile > .column.is-1 {\n    flex: none;\n    width: 8.33333%;\n}\n.columns.is-mobile > .column.is-offset-1 {\n    margin-left: 8.33333%;\n}\n.columns.is-mobile > .column.is-2 {\n    flex: none;\n    width: 16.66667%;\n}\n.columns.is-mobile > .column.is-offset-2 {\n    margin-left: 16.66667%;\n}\n.columns.is-mobile > .column.is-3 {\n    flex: none;\n    width: 25%;\n}\n.columns.is-mobile > .column.is-offset-3 {\n    margin-left: 25%;\n}\n.columns.is-mobile > .column.is-4 {\n    flex: none;\n    width: 33.33333%;\n}\n.columns.is-mobile > .column.is-offset-4 {\n    margin-left: 33.33333%;\n}\n.columns.is-mobile > .column.is-5 {\n    flex: none;\n    width: 41.66667%;\n}\n.columns.is-mobile > .column.is-offset-5 {\n    margin-left: 41.66667%;\n}\n.columns.is-mobile > .column.is-6 {\n    flex: none;\n    width: 50%;\n}\n.columns.is-mobile > .column.is-offset-6 {\n    margin-left: 50%;\n}\n.columns.is-mobile > .column.is-7 {\n    flex: none;\n    width: 58.33333%;\n}\n.columns.is-mobile > .column.is-offset-7 {\n    margin-left: 58.33333%;\n}\n.columns.is-mobile > .column.is-8 {\n    flex: none;\n    width: 66.66667%;\n}\n.columns.is-mobile > .column.is-offset-8 {\n    margin-left: 66.66667%;\n}\n.columns.is-mobile > .column.is-9 {\n    flex: none;\n    width: 75%;\n}\n.columns.is-mobile > .column.is-offset-9 {\n    margin-left: 75%;\n}\n.columns.is-mobile > .column.is-10 {\n    flex: none;\n    width: 83.33333%;\n}\n.columns.is-mobile > .column.is-offset-10 {\n    margin-left: 83.33333%;\n}\n.columns.is-mobile > .column.is-11 {\n    flex: none;\n    width: 91.66667%;\n}\n.columns.is-mobile > .column.is-offset-11 {\n    margin-left: 91.66667%;\n}\n.columns.is-mobile > .column.is-12 {\n    flex: none;\n    width: 100%;\n}\n.columns.is-mobile > .column.is-offset-12 {\n    margin-left: 100%;\n}\n@media screen and (max-width: 768px) {\n.column.is-narrow-mobile {\n      flex: none;\n}\n.column.is-full-mobile {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-mobile {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-mobile {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-mobile {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-mobile {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-mobile {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-mobile {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-mobile {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-mobile {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-mobile {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-mobile {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-mobile {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-mobile {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-mobile {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-mobile {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-mobile {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-mobile {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-mobile {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-mobile {\n      margin-left: 80%;\n}\n.column.is-1-mobile {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-mobile {\n      margin-left: 8.33333%;\n}\n.column.is-2-mobile {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-mobile {\n      margin-left: 16.66667%;\n}\n.column.is-3-mobile {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-mobile {\n      margin-left: 25%;\n}\n.column.is-4-mobile {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-mobile {\n      margin-left: 33.33333%;\n}\n.column.is-5-mobile {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-mobile {\n      margin-left: 41.66667%;\n}\n.column.is-6-mobile {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-mobile {\n      margin-left: 50%;\n}\n.column.is-7-mobile {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-mobile {\n      margin-left: 58.33333%;\n}\n.column.is-8-mobile {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-mobile {\n      margin-left: 66.66667%;\n}\n.column.is-9-mobile {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-mobile {\n      margin-left: 75%;\n}\n.column.is-10-mobile {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-mobile {\n      margin-left: 83.33333%;\n}\n.column.is-11-mobile {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-mobile {\n      margin-left: 91.66667%;\n}\n.column.is-12-mobile {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-mobile {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 769px), print {\n.column.is-narrow, .column.is-narrow-tablet {\n      flex: none;\n}\n.column.is-full, .column.is-full-tablet {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters, .column.is-three-quarters-tablet {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds, .column.is-two-thirds-tablet {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half, .column.is-half-tablet {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third, .column.is-one-third-tablet {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter, .column.is-one-quarter-tablet {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth, .column.is-one-fifth-tablet {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths, .column.is-two-fifths-tablet {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths, .column.is-three-fifths-tablet {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths, .column.is-four-fifths-tablet {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half, .column.is-offset-half-tablet {\n      margin-left: 50%;\n}\n.column.is-offset-one-third, .column.is-offset-one-third-tablet {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n      margin-left: 80%;\n}\n.column.is-1, .column.is-1-tablet {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1, .column.is-offset-1-tablet {\n      margin-left: 8.33333%;\n}\n.column.is-2, .column.is-2-tablet {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2, .column.is-offset-2-tablet {\n      margin-left: 16.66667%;\n}\n.column.is-3, .column.is-3-tablet {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3, .column.is-offset-3-tablet {\n      margin-left: 25%;\n}\n.column.is-4, .column.is-4-tablet {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4, .column.is-offset-4-tablet {\n      margin-left: 33.33333%;\n}\n.column.is-5, .column.is-5-tablet {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5, .column.is-offset-5-tablet {\n      margin-left: 41.66667%;\n}\n.column.is-6, .column.is-6-tablet {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6, .column.is-offset-6-tablet {\n      margin-left: 50%;\n}\n.column.is-7, .column.is-7-tablet {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7, .column.is-offset-7-tablet {\n      margin-left: 58.33333%;\n}\n.column.is-8, .column.is-8-tablet {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8, .column.is-offset-8-tablet {\n      margin-left: 66.66667%;\n}\n.column.is-9, .column.is-9-tablet {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9, .column.is-offset-9-tablet {\n      margin-left: 75%;\n}\n.column.is-10, .column.is-10-tablet {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10, .column.is-offset-10-tablet {\n      margin-left: 83.33333%;\n}\n.column.is-11, .column.is-11-tablet {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11, .column.is-offset-11-tablet {\n      margin-left: 91.66667%;\n}\n.column.is-12, .column.is-12-tablet {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12, .column.is-offset-12-tablet {\n      margin-left: 100%;\n}\n}\n@media screen and (max-width: 1023px) {\n.column.is-narrow-touch {\n      flex: none;\n}\n.column.is-full-touch {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-touch {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-touch {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-touch {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-touch {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-touch {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-touch {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-touch {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-touch {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-touch {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-touch {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-touch {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-touch {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-touch {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-touch {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-touch {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-touch {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-touch {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-touch {\n      margin-left: 80%;\n}\n.column.is-1-touch {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-touch {\n      margin-left: 8.33333%;\n}\n.column.is-2-touch {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-touch {\n      margin-left: 16.66667%;\n}\n.column.is-3-touch {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-touch {\n      margin-left: 25%;\n}\n.column.is-4-touch {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-touch {\n      margin-left: 33.33333%;\n}\n.column.is-5-touch {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-touch {\n      margin-left: 41.66667%;\n}\n.column.is-6-touch {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-touch {\n      margin-left: 50%;\n}\n.column.is-7-touch {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-touch {\n      margin-left: 58.33333%;\n}\n.column.is-8-touch {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-touch {\n      margin-left: 66.66667%;\n}\n.column.is-9-touch {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-touch {\n      margin-left: 75%;\n}\n.column.is-10-touch {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-touch {\n      margin-left: 83.33333%;\n}\n.column.is-11-touch {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-touch {\n      margin-left: 91.66667%;\n}\n.column.is-12-touch {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-touch {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1024px) {\n.column.is-narrow-desktop {\n      flex: none;\n}\n.column.is-full-desktop {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-desktop {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-desktop {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-desktop {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-desktop {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-desktop {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-desktop {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-desktop {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-desktop {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-desktop {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-desktop {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-desktop {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-desktop {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-desktop {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-desktop {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-desktop {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-desktop {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-desktop {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-desktop {\n      margin-left: 80%;\n}\n.column.is-1-desktop {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-desktop {\n      margin-left: 8.33333%;\n}\n.column.is-2-desktop {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-desktop {\n      margin-left: 16.66667%;\n}\n.column.is-3-desktop {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-desktop {\n      margin-left: 25%;\n}\n.column.is-4-desktop {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-desktop {\n      margin-left: 33.33333%;\n}\n.column.is-5-desktop {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-desktop {\n      margin-left: 41.66667%;\n}\n.column.is-6-desktop {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-desktop {\n      margin-left: 50%;\n}\n.column.is-7-desktop {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-desktop {\n      margin-left: 58.33333%;\n}\n.column.is-8-desktop {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-desktop {\n      margin-left: 66.66667%;\n}\n.column.is-9-desktop {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-desktop {\n      margin-left: 75%;\n}\n.column.is-10-desktop {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-desktop {\n      margin-left: 83.33333%;\n}\n.column.is-11-desktop {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-desktop {\n      margin-left: 91.66667%;\n}\n.column.is-12-desktop {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-desktop {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1216px) {\n.column.is-narrow-widescreen {\n      flex: none;\n}\n.column.is-full-widescreen {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-widescreen {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-widescreen {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-widescreen {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-widescreen {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-widescreen {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-widescreen {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-widescreen {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-widescreen {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-widescreen {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-widescreen {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-widescreen {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-widescreen {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-widescreen {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-widescreen {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-widescreen {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-widescreen {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-widescreen {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-widescreen {\n      margin-left: 80%;\n}\n.column.is-1-widescreen {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-widescreen {\n      margin-left: 8.33333%;\n}\n.column.is-2-widescreen {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-widescreen {\n      margin-left: 16.66667%;\n}\n.column.is-3-widescreen {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-widescreen {\n      margin-left: 25%;\n}\n.column.is-4-widescreen {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-widescreen {\n      margin-left: 33.33333%;\n}\n.column.is-5-widescreen {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-widescreen {\n      margin-left: 41.66667%;\n}\n.column.is-6-widescreen {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-widescreen {\n      margin-left: 50%;\n}\n.column.is-7-widescreen {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-widescreen {\n      margin-left: 58.33333%;\n}\n.column.is-8-widescreen {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-widescreen {\n      margin-left: 66.66667%;\n}\n.column.is-9-widescreen {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-widescreen {\n      margin-left: 75%;\n}\n.column.is-10-widescreen {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-widescreen {\n      margin-left: 83.33333%;\n}\n.column.is-11-widescreen {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-widescreen {\n      margin-left: 91.66667%;\n}\n.column.is-12-widescreen {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-widescreen {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1408px) {\n.column.is-narrow-fullhd {\n      flex: none;\n}\n.column.is-full-fullhd {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-fullhd {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-fullhd {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-fullhd {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-fullhd {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-fullhd {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-fullhd {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-fullhd {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-fullhd {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-fullhd {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-fullhd {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-fullhd {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-fullhd {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-fullhd {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-fullhd {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-fullhd {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-fullhd {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-fullhd {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-fullhd {\n      margin-left: 80%;\n}\n.column.is-1-fullhd {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-fullhd {\n      margin-left: 8.33333%;\n}\n.column.is-2-fullhd {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-fullhd {\n      margin-left: 16.66667%;\n}\n.column.is-3-fullhd {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-fullhd {\n      margin-left: 25%;\n}\n.column.is-4-fullhd {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-fullhd {\n      margin-left: 33.33333%;\n}\n.column.is-5-fullhd {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-fullhd {\n      margin-left: 41.66667%;\n}\n.column.is-6-fullhd {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-fullhd {\n      margin-left: 50%;\n}\n.column.is-7-fullhd {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-fullhd {\n      margin-left: 58.33333%;\n}\n.column.is-8-fullhd {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-fullhd {\n      margin-left: 66.66667%;\n}\n.column.is-9-fullhd {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-fullhd {\n      margin-left: 75%;\n}\n.column.is-10-fullhd {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-fullhd {\n      margin-left: 83.33333%;\n}\n.column.is-11-fullhd {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-fullhd {\n      margin-left: 91.66667%;\n}\n.column.is-12-fullhd {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-fullhd {\n      margin-left: 100%;\n}\n}\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.columns:last-child {\n    margin-bottom: -0.75rem;\n}\n.columns:not(:last-child) {\n    margin-bottom: calc(1.5rem - 0.75rem);\n}\n.columns.is-centered {\n    justify-content: center;\n}\n.columns.is-gapless {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n}\n.columns.is-gapless > .column {\n      margin: 0;\n      padding: 0 !important;\n}\n.columns.is-gapless:not(:last-child) {\n      margin-bottom: 1.5rem;\n}\n.columns.is-gapless:last-child {\n      margin-bottom: 0;\n}\n.columns.is-mobile {\n    display: flex;\n}\n.columns.is-multiline {\n    flex-wrap: wrap;\n}\n.columns.is-vcentered {\n    align-items: center;\n}\n@media screen and (min-width: 769px), print {\n.columns:not(.is-desktop) {\n      display: flex;\n}\n}\n@media screen and (min-width: 1024px) {\n.columns.is-desktop {\n      display: flex;\n}\n}\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n.columns.is-variable .column {\n    padding-left: var(--columnGap);\n    padding-right: var(--columnGap);\n}\n.columns.is-variable.is-0 {\n    --columnGap: 0rem;\n}\n.columns.is-variable.is-1 {\n    --columnGap: 0.25rem;\n}\n.columns.is-variable.is-2 {\n    --columnGap: 0.5rem;\n}\n.columns.is-variable.is-3 {\n    --columnGap: 0.75rem;\n}\n.columns.is-variable.is-4 {\n    --columnGap: 1rem;\n}\n.columns.is-variable.is-5 {\n    --columnGap: 1.25rem;\n}\n.columns.is-variable.is-6 {\n    --columnGap: 1.5rem;\n}\n.columns.is-variable.is-7 {\n    --columnGap: 1.75rem;\n}\n.columns.is-variable.is-8 {\n    --columnGap: 2rem;\n}\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content;\n}\n.tile.is-ancestor {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n    margin-top: -0.75rem;\n}\n.tile.is-ancestor:last-child {\n      margin-bottom: -0.75rem;\n}\n.tile.is-ancestor:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n.tile.is-child {\n    margin: 0 !important;\n}\n.tile.is-parent {\n    padding: 0.75rem;\n}\n.tile.is-vertical {\n    flex-direction: column;\n}\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n      margin-bottom: 1.5rem !important;\n}\n@media screen and (min-width: 769px), print {\n.tile:not(.is-child) {\n      display: flex;\n}\n.tile.is-1 {\n      flex: none;\n      width: 8.33333%;\n}\n.tile.is-2 {\n      flex: none;\n      width: 16.66667%;\n}\n.tile.is-3 {\n      flex: none;\n      width: 25%;\n}\n.tile.is-4 {\n      flex: none;\n      width: 33.33333%;\n}\n.tile.is-5 {\n      flex: none;\n      width: 41.66667%;\n}\n.tile.is-6 {\n      flex: none;\n      width: 50%;\n}\n.tile.is-7 {\n      flex: none;\n      width: 58.33333%;\n}\n.tile.is-8 {\n      flex: none;\n      width: 66.66667%;\n}\n.tile.is-9 {\n      flex: none;\n      width: 75%;\n}\n.tile.is-10 {\n      flex: none;\n      width: 83.33333%;\n}\n.tile.is-11 {\n      flex: none;\n      width: 91.66667%;\n}\n.tile.is-12 {\n      flex: none;\n      width: 100%;\n}\n}\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hero .navbar {\n    background: none;\n}\n.hero .tabs ul {\n    border-bottom: none;\n}\n.hero.is-white {\n    background-color: white;\n    color: #0a0a0a;\n}\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-white strong {\n      color: inherit;\n}\n.hero.is-white .title {\n      color: #0a0a0a;\n}\n.hero.is-white .subtitle {\n      color: rgba(10, 10, 10, 0.9);\n}\n.hero.is-white .subtitle a:not(.button),\n      .hero.is-white .subtitle strong {\n        color: #0a0a0a;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-white .navbar-menu {\n        background-color: white;\n}\n}\n.hero.is-white .navbar-item,\n    .hero.is-white .navbar-link {\n      color: rgba(10, 10, 10, 0.7);\n}\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n    .hero.is-white .navbar-link:hover,\n    .hero.is-white .navbar-link.is-active {\n      background-color: #f2f2f2;\n      color: #0a0a0a;\n}\n.hero.is-white .tabs a {\n      color: #0a0a0a;\n      opacity: 0.9;\n}\n.hero.is-white .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-white .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n      color: #0a0a0a;\n}\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white;\n}\n.hero.is-white.is-bold {\n      background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-white.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n}\n.hero.is-black {\n    background-color: #0a0a0a;\n    color: white;\n}\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-black strong {\n      color: inherit;\n}\n.hero.is-black .title {\n      color: white;\n}\n.hero.is-black .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-black .subtitle a:not(.button),\n      .hero.is-black .subtitle strong {\n        color: white;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-black .navbar-menu {\n        background-color: #0a0a0a;\n}\n}\n.hero.is-black .navbar-item,\n    .hero.is-black .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n    .hero.is-black .navbar-link:hover,\n    .hero.is-black .navbar-link.is-active {\n      background-color: black;\n      color: white;\n}\n.hero.is-black .tabs a {\n      color: white;\n      opacity: 0.9;\n}\n.hero.is-black .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-black .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n      color: white;\n}\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a;\n}\n.hero.is-black.is-bold {\n      background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-black.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n}\n.hero.is-light {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-light strong {\n      color: inherit;\n}\n.hero.is-light .title {\n      color: #363636;\n}\n.hero.is-light .subtitle {\n      color: rgba(54, 54, 54, 0.9);\n}\n.hero.is-light .subtitle a:not(.button),\n      .hero.is-light .subtitle strong {\n        color: #363636;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-light .navbar-menu {\n        background-color: whitesmoke;\n}\n}\n.hero.is-light .navbar-item,\n    .hero.is-light .navbar-link {\n      color: rgba(54, 54, 54, 0.7);\n}\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n    .hero.is-light .navbar-link:hover,\n    .hero.is-light .navbar-link.is-active {\n      background-color: #e8e8e8;\n      color: #363636;\n}\n.hero.is-light .tabs a {\n      color: #363636;\n      opacity: 0.9;\n}\n.hero.is-light .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-light .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n      color: #363636;\n}\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke;\n}\n.hero.is-light.is-bold {\n      background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-light.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n}\n.hero.is-dark {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-dark strong {\n      color: inherit;\n}\n.hero.is-dark .title {\n      color: whitesmoke;\n}\n.hero.is-dark .subtitle {\n      color: rgba(245, 245, 245, 0.9);\n}\n.hero.is-dark .subtitle a:not(.button),\n      .hero.is-dark .subtitle strong {\n        color: whitesmoke;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-dark .navbar-menu {\n        background-color: #363636;\n}\n}\n.hero.is-dark .navbar-item,\n    .hero.is-dark .navbar-link {\n      color: rgba(245, 245, 245, 0.7);\n}\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n    .hero.is-dark .navbar-link:hover,\n    .hero.is-dark .navbar-link.is-active {\n      background-color: #292929;\n      color: whitesmoke;\n}\n.hero.is-dark .tabs a {\n      color: whitesmoke;\n      opacity: 0.9;\n}\n.hero.is-dark .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-dark .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n      color: whitesmoke;\n}\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636;\n}\n.hero.is-dark.is-bold {\n      background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-dark.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n}\n.hero.is-primary {\n    background-color: #00d1b2;\n    color: #fff;\n}\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-primary strong {\n      color: inherit;\n}\n.hero.is-primary .title {\n      color: #fff;\n}\n.hero.is-primary .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-primary .subtitle a:not(.button),\n      .hero.is-primary .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-primary .navbar-menu {\n        background-color: #00d1b2;\n}\n}\n.hero.is-primary .navbar-item,\n    .hero.is-primary .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n    .hero.is-primary .navbar-link:hover,\n    .hero.is-primary .navbar-link.is-active {\n      background-color: #00b89c;\n      color: #fff;\n}\n.hero.is-primary .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-primary .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-primary .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #00d1b2;\n}\n.hero.is-primary.is-bold {\n      background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-primary.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n}\n}\n.hero.is-link {\n    background-color: #3273dc;\n    color: #fff;\n}\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-link strong {\n      color: inherit;\n}\n.hero.is-link .title {\n      color: #fff;\n}\n.hero.is-link .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-link .subtitle a:not(.button),\n      .hero.is-link .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-link .navbar-menu {\n        background-color: #3273dc;\n}\n}\n.hero.is-link .navbar-item,\n    .hero.is-link .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n    .hero.is-link .navbar-link:hover,\n    .hero.is-link .navbar-link.is-active {\n      background-color: #2366d1;\n      color: #fff;\n}\n.hero.is-link .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-link .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-link .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #3273dc;\n}\n.hero.is-link.is-bold {\n      background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-link.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n}\n.hero.is-info {\n    background-color: #209cee;\n    color: #fff;\n}\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-info strong {\n      color: inherit;\n}\n.hero.is-info .title {\n      color: #fff;\n}\n.hero.is-info .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-info .subtitle a:not(.button),\n      .hero.is-info .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-info .navbar-menu {\n        background-color: #209cee;\n}\n}\n.hero.is-info .navbar-item,\n    .hero.is-info .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n    .hero.is-info .navbar-link:hover,\n    .hero.is-info .navbar-link.is-active {\n      background-color: #118fe4;\n      color: #fff;\n}\n.hero.is-info .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-info .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-info .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #209cee;\n}\n.hero.is-info.is-bold {\n      background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-info.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);\n}\n}\n.hero.is-success {\n    background-color: #23d160;\n    color: #fff;\n}\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-success strong {\n      color: inherit;\n}\n.hero.is-success .title {\n      color: #fff;\n}\n.hero.is-success .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-success .subtitle a:not(.button),\n      .hero.is-success .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-success .navbar-menu {\n        background-color: #23d160;\n}\n}\n.hero.is-success .navbar-item,\n    .hero.is-success .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n    .hero.is-success .navbar-link:hover,\n    .hero.is-success .navbar-link.is-active {\n      background-color: #20bc56;\n      color: #fff;\n}\n.hero.is-success .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-success .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-success .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #23d160;\n}\n.hero.is-success.is-bold {\n      background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-success.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n}\n}\n.hero.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-warning strong {\n      color: inherit;\n}\n.hero.is-warning .title {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .subtitle {\n      color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-warning .subtitle a:not(.button),\n      .hero.is-warning .subtitle strong {\n        color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1023px) {\n.hero.is-warning .navbar-menu {\n        background-color: #ffdd57;\n}\n}\n.hero.is-warning .navbar-item,\n    .hero.is-warning .navbar-link {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n    .hero.is-warning .navbar-link:hover,\n    .hero.is-warning .navbar-link.is-active {\n      background-color: #ffd83d;\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs a {\n      color: rgba(0, 0, 0, 0.7);\n      opacity: 0.9;\n}\n.hero.is-warning .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-warning .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n      background-color: rgba(0, 0, 0, 0.7);\n      border-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57;\n}\n.hero.is-warning.is-bold {\n      background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-warning.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n}\n.hero.is-danger {\n    background-color: #ff3860;\n    color: #fff;\n}\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-danger strong {\n      color: inherit;\n}\n.hero.is-danger .title {\n      color: #fff;\n}\n.hero.is-danger .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-danger .subtitle a:not(.button),\n      .hero.is-danger .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1023px) {\n.hero.is-danger .navbar-menu {\n        background-color: #ff3860;\n}\n}\n.hero.is-danger .navbar-item,\n    .hero.is-danger .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n    .hero.is-danger .navbar-link:hover,\n    .hero.is-danger .navbar-link.is-active {\n      background-color: #ff1f4b;\n      color: #fff;\n}\n.hero.is-danger .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-danger .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-danger .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #ff3860;\n}\n.hero.is-danger.is-bold {\n      background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-danger.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);\n}\n}\n.hero.is-small .hero-body {\n    padding-bottom: 1.5rem;\n    padding-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.hero.is-medium .hero-body {\n      padding-bottom: 9rem;\n      padding-top: 9rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.hero.is-large .hero-body {\n      padding-bottom: 18rem;\n      padding-top: 18rem;\n}\n}\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body {\n    align-items: center;\n    display: flex;\n}\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container {\n      flex-grow: 1;\n      flex-shrink: 1;\n}\n.hero.is-halfheight {\n    min-height: 50vh;\n}\n.hero.is-fullheight {\n    min-height: 100vh;\n}\n.hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n.hero-video video {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n}\n.hero-video.is-transparent {\n    opacity: 0.3;\n}\n@media screen and (max-width: 768px) {\n.hero-video {\n      display: none;\n}\n}\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n.hero-buttons .button {\n      display: flex;\n}\n.hero-buttons .button:not(:last-child) {\n        margin-bottom: 0.75rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.hero-buttons {\n      display: flex;\n      justify-content: center;\n}\n.hero-buttons .button:not(:last-child) {\n        margin-right: 1.5rem;\n}\n}\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n.section {\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 1024px) {\n.section.is-medium {\n      padding: 9rem 1.5rem;\n}\n.section.is-large {\n      padding: 18rem 1.5rem;\n}\n}\n.footer {\n  background-color: whitesmoke;\n  padding: 3rem 1.5rem 6rem;\n}\n.columns {\n  flex-wrap: wrap;\n}\n", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c597c05_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__ = __webpack_require__(28);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c597c05_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\AppHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c597c05", Component.options)
  } else {
    hotAPI.reload("data-v-6c597c05", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "nav has-shadow" }, [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("router-link", { attrs: { to: "/", exact: "" } }, [
          _c("img", { attrs: { src: "http://bit.ly/vue-img", alt: "Vue SPA" } })
        ]),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "nav-time is-tab", attrs: { to: "/", exact: "" } },
          [_vm._v("\n             Home\n         ")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "nav-time is-tab", attrs: { to: "/post", exact: "" } },
          [_vm._v("\n             Post\n         ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c597c05", esExports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b271813_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__ = __webpack_require__(30);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b271813_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\AppFooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b271813", Component.options)
  } else {
    hotAPI.reload("data-v-4b271813", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "content has-text-centered" }, [
          _vm._v("\n       Vue Project\n     ")
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b271813", esExports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("app-header"),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "main-section section" },
        [_c("router-view")],
        1
      ),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b108ca3", esExports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_Category_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_Upload_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_Game_vue__ = __webpack_require__(63);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
  routes: [{ path: '/post', component: __WEBPACK_IMPORTED_MODULE_3__theme_Upload_vue__["a" /* default */] }, { path: '/', component: __WEBPACK_IMPORTED_MODULE_2__theme_Category_vue__["a" /* default */] }, { path: '/game/:id', component: __WEBPACK_IMPORTED_MODULE_4__theme_Game_vue__["a" /* default */] }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa55b752_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__(58);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa55b752_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa55b752", Component.options)
  } else {
    hotAPI.reload("data-v-aa55b752", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6de3310e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__ = __webpack_require__(38);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(36)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6de3310e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Post.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6de3310e", Component.options)
  } else {
    hotAPI.reload("data-v-6de3310e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("c56148e8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6de3310e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Post.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6de3310e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Post.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.card{\n    padding-bottom: 40px;\n    height: 100%;\n}\nfooter{\n    position: absolute;\n    bottom:0;\n    width: 100%;\n    left: 0;\n}\n", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-content" },
      [_vm._t("title"), _vm._v(" "), _vm._t("content")],
      2
    ),
    _vm._v(" "),
    _c("footer", { staticClass: "card-footer" }, [
      _c(
        "a",
        {
          staticClass: "card-footer-item button",
          attrs: { href: "/game/" + _vm.post._id }
        },
        [_vm._v("Click for More ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6de3310e", esExports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.baseURL = 'http://198.211.121.193:8000/api';

var appService = {
  getPosts: function getPosts() {
    return new Promise(function (resolve) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/games').then(function (response) {
        console.log(response.data);
        resolve(response.data);
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (appService);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(12);
var Axios = __webpack_require__(42);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(16);
axios.CancelToken = __webpack_require__(56);
axios.isCancel = __webpack_require__(15);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(57);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(51);
var dispatchRequest = __webpack_require__(52);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(14);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(53);
var isCancel = __webpack_require__(15);
var defaults = __webpack_require__(6);
var isAbsoluteURL = __webpack_require__(54);
var combineURLs = __webpack_require__(55);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(16);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container content" }, [
    _c(
      "div",
      { staticClass: "columns" },
      _vm._l(_vm.posts, function(post, title) {
        return _c(
          "div",
          { key: post.id, staticClass: "column is-one-third" },
          [
            _c("app-post", { attrs: { post: post } }, [
              _c("h3", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v(_vm._s(post.title))
              ])
            ])
          ],
          1
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-aa55b752", esExports)
  }
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Upload_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e1ef8fcc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Upload_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Upload_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e1ef8fcc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Upload_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1ef8fcc", Component.options)
  } else {
    hotAPI.reload("data-v-e1ef8fcc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("b88b3412", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8fcc\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Upload.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8fcc\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Upload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#error{\r\n\ttext-align: left;\n}\r\n", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("h2", [_vm._v("Post Data")]),
    _vm._v(" "),
    _c("div", { staticClass: "field is-horizontal" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "field-body" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.title,
                  expression: "title"
                }
              ],
              staticClass: "input",
              attrs: { type: "text", placeholder: "Title" },
              domProps: { value: _vm.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.title = $event.target.value
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field is-horizontal" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "field-body" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.genre,
                  expression: "genre"
                }
              ],
              staticClass: "input",
              attrs: { type: "text", placeholder: "Genre" },
              domProps: { value: _vm.genre },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.genre = $event.target.value
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field is-horizontal" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "field-body" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.creater,
                  expression: "creater"
                }
              ],
              staticClass: "input",
              attrs: { type: "text", placeholder: "Creator" },
              domProps: { value: _vm.creater },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.creater = $event.target.value
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field is-horizontal" }, [
      _c("div", { staticClass: "field-label" }),
      _vm._v(" "),
      _c("div", { staticClass: "field-body" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control" }, [
            _c(
              "button",
              { staticClass: "button is-primary", on: { click: _vm.postData } },
              [_vm._v("\r\n\t\t\t\tPost\r\n\t\t\t  ")]
            ),
            _vm._v(" "),
            _c("h2", { attrs: { id: "error" } }, [_vm._v(_vm._s(_vm.msg))])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Title")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Genre")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Creator")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e1ef8fcc", esExports)
  }
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Game_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_327c21cb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Game_vue__ = __webpack_require__(66);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Game_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_327c21cb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Game_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Game.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-327c21cb", Component.options)
  } else {
    hotAPI.reload("data-v-327c21cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0a1c76d6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-327c21cb\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Game.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-327c21cb\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Game.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.card-game {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 35%;\n  height: auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  /* 5px rounded corners */\n}\n.containter {\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-game" }, [
    _c("div", { staticClass: "container" }, [
      _c("p", { staticClass: "title is-3" }, [
        _vm._v("Title: " + _vm._s(_vm.game.title))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "title is-3" }, [
        _vm._v("Genre: " + _vm._s(_vm.game.genre))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "title is-3" }, [
        _vm._v("Creator: " + _vm._s(_vm.game.creater))
      ])
    ]),
    _vm._v(" "),
    _c(
      "a",
      { staticClass: "button is-danger", on: { click: _vm.deleteGame } },
      [_vm._v("\n            Delete\n        ")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "form" }, [
      _c("div", { staticClass: "field" }, [
        _c("h1", { staticClass: "title" }, [_vm._v("Change Data")]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("label", { staticClass: "label" }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.title,
                expression: "title"
              }
            ],
            staticClass: "input",
            attrs: { type: "text", value: "" },
            domProps: { value: _vm.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.title = $event.target.value
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("label", { staticClass: "label" }, [_vm._v("Genre")]),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.genre,
                expression: "genre"
              }
            ],
            staticClass: "input",
            attrs: { type: "text", value: "" },
            domProps: { value: _vm.genre },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.genre = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", { staticClass: "label" }, [_vm._v("Creater")]),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.creater,
                  expression: "creater"
                }
              ],
              staticClass: "input",
              attrs: { type: "text", value: "" },
              domProps: { value: _vm.creater },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.creater = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "button is-warning", on: { click: _vm.updateData } },
          [_vm._v("\n                Update Data\n            ")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-327c21cb", esExports)
  }
}

/***/ })
/******/ ]);