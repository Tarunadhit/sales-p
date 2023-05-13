/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@material/tooltip", [], factory);
	else if(typeof exports === 'object')
		exports["tooltip"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["tooltip"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/mdc-tooltip/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./node_modules/safevalues/builders/attribute_builders.js":
/*!****************************************************************!*\
  !*** ./node_modules/safevalues/builders/attribute_builders.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeAttrPrefix = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var attribute_impl_1 = __webpack_require__(/*! ../internals/attribute_impl */ "./node_modules/safevalues/internals/attribute_impl.js");
var string_literal_1 = __webpack_require__(/*! ../internals/string_literal */ "./node_modules/safevalues/internals/string_literal.js");
var sensitive_attributes_1 = __webpack_require__(/*! ./sensitive_attributes */ "./node_modules/safevalues/builders/sensitive_attributes.js");
/**
 * Creates a SafeAttributePrefix object from a template literal with no
 * interpolations for attributes that share a common prefix guaranteed to be not
 * security sensitive.
 *
 * The template literal is a prefix that makes it obvious this attribute is not
 * security sensitive. If it doesn't, this function will throw.
 */
function safeAttrPrefix(templ) {
    if (true) {
        (0, string_literal_1.assertIsTemplateObject)(templ, true, 'safeAttr is a template literal tag function ' +
            'and should be called using the tagged template syntax. ' +
            'For example, safeAttr`foo`;');
    }
    var attrPrefix = templ[0].toLowerCase();
    if (true) {
        if (attrPrefix.indexOf('on') === 0 || 'on'.indexOf(attrPrefix) === 0) {
            throw new Error("Prefix '".concat(templ[0], "' does not guarantee the attribute ") +
                "to be safe as it is also a prefix for event handler attributes" +
                "Please use 'addEventListener' to set event handlers.");
        }
        sensitive_attributes_1.SECURITY_SENSITIVE_ATTRIBUTES.forEach(function (sensitiveAttr) {
            if (sensitiveAttr.indexOf(attrPrefix) === 0) {
                throw new Error("Prefix '".concat(templ[0], "' does not guarantee the attribute ") +
                    "to be safe as it is also a prefix for " +
                    "the security sensitive attribute '".concat(sensitiveAttr, "'. ") +
                    "Please use native or safe DOM APIs to set the attribute.");
            }
        });
    }
    return (0, attribute_impl_1.createAttributePrefix)(attrPrefix);
}
exports.safeAttrPrefix = safeAttrPrefix;


/***/ }),

/***/ "./node_modules/safevalues/builders/html_builders.js":
/*!***********************************************************!*\
  !*** ./node_modules/safevalues/builders/html_builders.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatHtmls = exports.createScriptSrc = exports.createScript = exports.htmlEscape = void 0;
var html_impl_1 = __webpack_require__(/*! ../internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
var resource_url_impl_1 = __webpack_require__(/*! ../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
var script_impl_1 = __webpack_require__(/*! ../internals/script_impl */ "./node_modules/safevalues/internals/script_impl.js");
/**
 * Returns HTML-escaped text as a `SafeHtml` object.
 *
 * Available options:
 * - `preserveSpaces` turns every second consecutive space character into its
 * HTML entity representation (`&#160;`).
 * - `preserveNewlines` turns newline characters into breaks (`<br>`).
 * - `preserveTabs` wraps tab characters in a span with style=white-space:pre.
 */
function htmlEscape(text, options) {
    if (options === void 0) { options = {}; }
    var htmlEscapedString = htmlEscapeToString(text);
    if (options.preserveSpaces) {
        // Do this first to ensure we preserve spaces after newlines and tabs.
        htmlEscapedString =
            htmlEscapedString.replace(/(^|[\r\n\t ]) /g, '$1&#160;');
    }
    if (options.preserveNewlines) {
        htmlEscapedString = htmlEscapedString.replace(/(\r\n|\n|\r)/g, '<br>');
    }
    if (options.preserveTabs) {
        htmlEscapedString = htmlEscapedString.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>');
    }
    return (0, html_impl_1.createHtml)(htmlEscapedString);
}
exports.htmlEscape = htmlEscape;
/**
 * Creates a `SafeHtml` representing a script tag with inline script content.
 */
function createScript(script, options) {
    if (options === void 0) { options = {}; }
    var unwrappedScript = (0, script_impl_1.unwrapScript)(script).toString();
    var stringTag = "<script";
    if (options.id) {
        stringTag += " id=\"".concat(htmlEscapeToString(options.id), "\"");
    }
    if (options.nonce) {
        stringTag += " nonce=\"".concat(htmlEscapeToString(options.nonce), "\"");
    }
    if (options.type) {
        stringTag += " type=\"".concat(htmlEscapeToString(options.type), "\"");
    }
    stringTag += ">".concat(unwrappedScript, "</script>");
    return (0, html_impl_1.createHtml)(stringTag);
}
exports.createScript = createScript;
/**
 * Creates a `SafeHtml` representing a script tag with the src attribute.
 * This also supports CSP nonces and async loading.
 */
function createScriptSrc(src, async, nonce) {
    var unwrappedSrc = (0, resource_url_impl_1.unwrapResourceUrl)(src).toString();
    var stringTag = "<script src=\"".concat(htmlEscapeToString(unwrappedSrc), "\"");
    if (async) {
        stringTag += ' async';
    }
    if (nonce) {
        stringTag += " nonce=\"".concat(htmlEscapeToString(nonce), "\"");
    }
    stringTag += '>\x3c/script>';
    return (0, html_impl_1.createHtml)(stringTag);
}
exports.createScriptSrc = createScriptSrc;
/**
 * HTML-escapes the given text (`&`, `<`, `>`, `"` and `'`).
 */
function htmlEscapeToString(text) {
    var escaped = text.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    return escaped;
}
/** Creates a `SafeHtml` value by concatenating multiple `SafeHtml`s. */
function concatHtmls(htmls) {
    return (0, html_impl_1.createHtml)(htmls.map(html_impl_1.unwrapHtml).join(''));
}
exports.concatHtmls = concatHtmls;


/***/ }),

/***/ "./node_modules/safevalues/builders/html_sanitizer/html_sanitizer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/safevalues/builders/html_sanitizer/html_sanitizer.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeHtmlToFragment = exports.sanitizeHtmlAssertUnchanged = exports.sanitizeHtml = exports.HtmlSanitizerImpl = void 0;
__webpack_require__(/*! ../../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var html_impl_1 = __webpack_require__(/*! ../../internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
/* g3_import_pure from '../../internals/pure' */
var secrets_1 = __webpack_require__(/*! ../../internals/secrets */ "./node_modules/safevalues/internals/secrets.js");
var url_sanitizer_1 = __webpack_require__(/*! ../url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
var inert_fragment_1 = __webpack_require__(/*! ./inert_fragment */ "./node_modules/safevalues/builders/html_sanitizer/inert_fragment.js");
var no_clobber_1 = __webpack_require__(/*! ./no_clobber */ "./node_modules/safevalues/builders/html_sanitizer/no_clobber.js");
var default_sanitizer_table_1 = __webpack_require__(/*! ./sanitizer_table/default_sanitizer_table */ "./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/default_sanitizer_table.js");
var sanitizer_table_1 = __webpack_require__(/*! ./sanitizer_table/sanitizer_table */ "./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/sanitizer_table.js");
/** Implementation for `HtmlSanitizer` */
var HtmlSanitizerImpl = /** @class */ (function () {
    function HtmlSanitizerImpl(sanitizerTable, token) {
        this.sanitizerTable = sanitizerTable;
        this.changes = [];
        (0, secrets_1.ensureTokenIsValid)(token);
    }
    HtmlSanitizerImpl.prototype.sanitizeAssertUnchanged = function (html) {
        this.changes = [];
        var sanitizedHtml = this.sanitize(html);
        if (this.changes.length !== 0) {
            var message = '';
            if (true) {
                message =
                    "Unexpected change to HTML value as a result of sanitization. " +
                        "Input: \"".concat(html, "\", sanitized output: \"").concat(sanitizedHtml, "\"\n") +
                        "List of changes:".concat(this.changes.join('\n'));
            }
            throw new Error(message);
        }
        return sanitizedHtml;
    };
    HtmlSanitizerImpl.prototype.sanitize = function (html) {
        var fakeRoot = document.createElement('span');
        fakeRoot.appendChild(this.sanitizeToFragment(html));
        // XML serialization is preferred over HTML serialization as it is
        // stricter and makes sure all attributes are properly escaped, avoiding
        // cases where the tree might mutate when parsed again later due to the
        // complexities of the HTML parsing algorithm
        var serializedNewTree = new XMLSerializer().serializeToString(fakeRoot);
        // We remove the outer most element as this is the span node created as
        // the root for the sanitized tree and contains a spurious xmlns attribute
        // from the XML serialization step.
        serializedNewTree = serializedNewTree.slice(serializedNewTree.indexOf('>') + 1, serializedNewTree.lastIndexOf('</'));
        return (0, html_impl_1.createHtml)(serializedNewTree);
    };
    HtmlSanitizerImpl.prototype.sanitizeToFragment = function (html) {
        var _this = this;
        var dirtyFragment = (0, inert_fragment_1.createInertFragment)(html);
        var treeWalker = document.createTreeWalker(dirtyFragment, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, 
        // IE10 and IE11 won't accept a proper `NodeFilter` interface, and
        // expect the filtering function to be passed directly. It seems that
        // other browsers also do not mind getting the function directly. see
        // https://stackoverflow.com/q/38245898
        (function (n) { return _this.nodeFilter(n); }), 
        // @ts-ignore: error TS2554: Expected 1-3 arguments, but got 4.
        false);
        // `nextNode` is called so we skip the root `DocumentFragment`.
        var currentNode = treeWalker.nextNode();
        // We create a root element to attach all the children of the body to. We
        // use div as it as a semantic-free, generic container and does not
        // represent anything. This is removed when we serialize the tree back
        // into a string.
        var sanitizedFragment = document.createDocumentFragment();
        var sanitizedParent = sanitizedFragment;
        while (currentNode !== null) {
            var sanitizedNode = void 0;
            if ((0, no_clobber_1.isText)(currentNode)) {
                sanitizedNode = this.sanitizeTextNode(currentNode);
            }
            else if ((0, no_clobber_1.isElement)(currentNode)) {
                sanitizedNode = this.sanitizeElementNode(currentNode);
            }
            else {
                throw new Error('Node is not of type text or element');
            }
            sanitizedParent.appendChild(sanitizedNode);
            // Advance iterator while keeping track of the sanitized parent for the
            // current node
            currentNode = treeWalker.firstChild();
            if (currentNode) {
                sanitizedParent = sanitizedNode;
            }
            else {
                while (!(currentNode = treeWalker.nextSibling())) {
                    if (!(currentNode = treeWalker.parentNode())) {
                        break;
                    }
                    sanitizedParent = sanitizedParent.parentNode;
                }
            }
        }
        return sanitizedFragment;
    };
    HtmlSanitizerImpl.prototype.sanitizeTextNode = function (textNode) {
        return document.createTextNode(textNode.data);
    };
    HtmlSanitizerImpl.prototype.sanitizeElementNode = function (elementNode) {
        var e_1, _a;
        var elementName = (0, no_clobber_1.getNodeName)(elementNode);
        var newNode = document.createElement(elementName);
        var dirtyAttributes = elementNode.attributes;
        try {
            for (var dirtyAttributes_1 = __values(dirtyAttributes), dirtyAttributes_1_1 = dirtyAttributes_1.next(); !dirtyAttributes_1_1.done; dirtyAttributes_1_1 = dirtyAttributes_1.next()) {
                var _b = dirtyAttributes_1_1.value, name_1 = _b.name, value = _b.value;
                var policy = this.sanitizerTable.getAttributePolicy(name_1, elementName);
                if (!this.satisfiesAllConditions(policy.conditions, dirtyAttributes)) {
                    this.recordChange("Not all conditions satisfied for attribute: ".concat(name_1, "."));
                    continue;
                }
                switch (policy.policyAction) {
                    case sanitizer_table_1.AttributePolicyAction.KEEP:
                        newNode.setAttribute(name_1, value);
                        break;
                    case sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL:
                        var sanitizedAttrUrl = (0, url_sanitizer_1.restrictivelySanitizeUrl)(value);
                        if (sanitizedAttrUrl !== value) {
                            this.recordChange("Url in attribute ".concat(name_1, " was modified during sanitization. Original url:\"").concat(value, "\" was sanitized to: \"").concat(sanitizedAttrUrl, "\""));
                        }
                        newNode.setAttribute(name_1, sanitizedAttrUrl);
                        break;
                    case sanitizer_table_1.AttributePolicyAction.KEEP_AND_NORMALIZE:
                        // We don't consider changing the case of an attribute value to be a
                        // semantic change
                        newNode.setAttribute(name_1, value.toLowerCase());
                        break;
                    case sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_STYLE:
                        newNode.setAttribute(name_1, value);
                        break;
                    case sanitizer_table_1.AttributePolicyAction.DROP:
                        this.recordChange("Attribute: ".concat(name_1, " was dropped"));
                        break;
                    default:
                        checkExhaustive(policy.policyAction, 'Unhandled AttributePolicyAction case');
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dirtyAttributes_1_1 && !dirtyAttributes_1_1.done && (_a = dirtyAttributes_1.return)) _a.call(dirtyAttributes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return newNode;
    };
    HtmlSanitizerImpl.prototype.nodeFilter = function (node) {
        if ((0, no_clobber_1.isText)(node)) {
            return NodeFilter.FILTER_ACCEPT;
        }
        else if (!(0, no_clobber_1.isElement)(node)) {
            // Getting a node that is neither an `Element` or a `Text` node. This is
            // likely due to something that is not supposed to be an element in user
            // code but recognized as such by the TreeWalker (e.g. a polyfill for
            // other kind of nodes). Since we can't recognize it as an element, we
            // drop the node, but we don't record it as a meaningful change.
            return NodeFilter.FILTER_REJECT;
        }
        var nodeName = (0, no_clobber_1.getNodeName)(node);
        if (nodeName === null) {
            this.recordChange("Node name was null for node: ".concat(node));
            return NodeFilter.FILTER_REJECT;
        }
        if (this.sanitizerTable.isAllowedElement(nodeName)) {
            return NodeFilter.FILTER_ACCEPT;
        }
        this.recordChange("Element: ".concat(nodeName, " was dropped"));
        return NodeFilter.FILTER_REJECT;
    };
    HtmlSanitizerImpl.prototype.recordChange = function (errorMessage) {
        if (true) {
            this.changes.push(errorMessage);
        }
        else {}
    };
    HtmlSanitizerImpl.prototype.satisfiesAllConditions = function (conditions, attrs) {
        var e_2, _a;
        var _b;
        if (!conditions) {
            return true;
        }
        try {
            for (var conditions_1 = __values(conditions), conditions_1_1 = conditions_1.next(); !conditions_1_1.done; conditions_1_1 = conditions_1.next()) {
                var _c = __read(conditions_1_1.value, 2), attrName = _c[0], expectedValues = _c[1];
                var value = (_b = attrs.getNamedItem(attrName)) === null || _b === void 0 ? void 0 : _b.value;
                if (value && !expectedValues.has(value)) {
                    return false;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (conditions_1_1 && !conditions_1_1.done && (_a = conditions_1.return)) _a.call(conditions_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return true;
    };
    return HtmlSanitizerImpl;
}());
exports.HtmlSanitizerImpl = HtmlSanitizerImpl;
var defaultHtmlSanitizer = 
/* #__PURE__ */ (function () { return new HtmlSanitizerImpl(default_sanitizer_table_1.defaultSanitizerTable, secrets_1.secretToken); })();
/** Sanitizes untrusted html using the default sanitizer configuration. */
function sanitizeHtml(html) {
    return defaultHtmlSanitizer.sanitize(html);
}
exports.sanitizeHtml = sanitizeHtml;
/**
 * Sanitizes untrusted html using the default sanitizer configuration. Throws
 * an error if the html was changed.
 */
function sanitizeHtmlAssertUnchanged(html) {
    return defaultHtmlSanitizer.sanitizeAssertUnchanged(html);
}
exports.sanitizeHtmlAssertUnchanged = sanitizeHtmlAssertUnchanged;
/**
 * Sanitizes untrusted html using the default sanitizer configuration. Throws
 * an error if the html was changed.
 */
function sanitizeHtmlToFragment(html) {
    return defaultHtmlSanitizer.sanitizeToFragment(html);
}
exports.sanitizeHtmlToFragment = sanitizeHtmlToFragment;
function checkExhaustive(value, msg) {
    if (msg === void 0) { msg = "unexpected value ".concat(value, "!"); }
    throw new Error(msg);
}


/***/ }),

/***/ "./node_modules/safevalues/builders/html_sanitizer/html_sanitizer_builder.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/safevalues/builders/html_sanitizer/html_sanitizer_builder.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlSanitizerBuilder = void 0;
var secrets_1 = __webpack_require__(/*! ../../internals/secrets */ "./node_modules/safevalues/internals/secrets.js");
var html_sanitizer_1 = __webpack_require__(/*! ./html_sanitizer */ "./node_modules/safevalues/builders/html_sanitizer/html_sanitizer.js");
var default_sanitizer_table_1 = __webpack_require__(/*! ./sanitizer_table/default_sanitizer_table */ "./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/default_sanitizer_table.js");
var sanitizer_table_1 = __webpack_require__(/*! ./sanitizer_table/sanitizer_table */ "./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/sanitizer_table.js");
/** This class allows modifications to the default sanitizer configuration. */
var HtmlSanitizerBuilder = /** @class */ (function () {
    function HtmlSanitizerBuilder() {
        // To denote if the builder has called build() and therefore should make no
        // further changes to the sanitizer table.
        this.calledBuild = false;
        this.sanitizerTable = default_sanitizer_table_1.defaultSanitizerTable;
    }
    /** Builder option to restrict allowed elements to a smaller subset. */
    HtmlSanitizerBuilder.prototype.onlyAllowElements = function (elementSet) {
        var e_1, _a;
        var allowedElements = new Set();
        var allowedElementPolicies = new Map();
        try {
            for (var elementSet_1 = __values(elementSet), elementSet_1_1 = elementSet_1.next(); !elementSet_1_1.done; elementSet_1_1 = elementSet_1.next()) {
                var element = elementSet_1_1.value;
                element = element.toUpperCase();
                if (!this.sanitizerTable.isAllowedElement(element)) {
                    throw new Error("Element: ".concat(element, ", is not allowed by html5_contract.textpb"));
                }
                var elementPolicy = this.sanitizerTable.elementPolicies.get(element);
                if (elementPolicy !== undefined) {
                    allowedElementPolicies.set(element, elementPolicy);
                }
                else {
                    allowedElements.add(element);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elementSet_1_1 && !elementSet_1_1.done && (_a = elementSet_1.return)) _a.call(elementSet_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(allowedElements, allowedElementPolicies, this.sanitizerTable.allowedGlobalAttributes, this.sanitizerTable.globalAttributePolicies);
        return this;
    };
    /**
     * Builder option to restrict allowed attributes to a smaller subset.
     *
     * If the attribute isn't currently allowed then it won't be added.
     */
    HtmlSanitizerBuilder.prototype.onlyAllowAttributes = function (attributeSet) {
        var e_2, _a, e_3, _b, e_4, _c;
        var allowedGlobalAttributes = new Set();
        var globalAttributePolicies = new Map();
        var elementPolicies = new Map();
        try {
            for (var attributeSet_1 = __values(attributeSet), attributeSet_1_1 = attributeSet_1.next(); !attributeSet_1_1.done; attributeSet_1_1 = attributeSet_1.next()) {
                var attribute = attributeSet_1_1.value;
                if (this.sanitizerTable.allowedGlobalAttributes.has(attribute)) {
                    allowedGlobalAttributes.add(attribute);
                }
                if (this.sanitizerTable.globalAttributePolicies.has(attribute)) {
                    globalAttributePolicies.set(attribute, this.sanitizerTable.globalAttributePolicies.get(attribute));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (attributeSet_1_1 && !attributeSet_1_1.done && (_a = attributeSet_1.return)) _a.call(attributeSet_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _d = __values(this.sanitizerTable
                .elementPolicies.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = __read(_e.value, 2), elementName = _f[0], originalElementPolicy = _f[1];
                var newElementPolicy = new Map();
                try {
                    for (var _g = (e_4 = void 0, __values(originalElementPolicy
                        .entries())), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var _j = __read(_h.value, 2), attribute = _j[0], attributePolicy = _j[1];
                        if (attributeSet.has(attribute)) {
                            newElementPolicy.set(attribute, attributePolicy);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                elementPolicies.set(elementName, newElementPolicy);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, elementPolicies, allowedGlobalAttributes, globalAttributePolicies);
        return this;
    };
    /**
     * Allows the set of data attributes passed.
     *
     * These values must be prefixed with "data-"
     *
     * If called with onlyAllowElements or onlyAllowAttributes, those methods must
     * be called first.
     */
    HtmlSanitizerBuilder.prototype.allowDataAttributes = function (attributes) {
        var e_5, _a;
        var allowedGlobalAttributes = new Set(this.sanitizerTable.allowedGlobalAttributes);
        try {
            for (var attributes_1 = __values(attributes), attributes_1_1 = attributes_1.next(); !attributes_1_1.done; attributes_1_1 = attributes_1.next()) {
                var attribute = attributes_1_1.value;
                if (attribute.indexOf('data-') !== 0) {
                    throw new Error("data attribute: ".concat(attribute, " does not begin with the prefix \"data-\""));
                }
                allowedGlobalAttributes.add(attribute);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (attributes_1_1 && !attributes_1_1.done && (_a = attributes_1.return)) _a.call(attributes_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, this.sanitizerTable.elementPolicies, allowedGlobalAttributes, this.sanitizerTable.globalAttributePolicies);
        return this;
    };
    /**
     * Preserves style attributes. Note that the sanitizer won't parse and
     * sanitize the values but keep them as they are. In particular this means
     * that the code will be able to call functions that could do undesirable
     * things (e.g. `url` to trigger a network request), as well as any custom
     * properties or functions defined by the application.
     */
    HtmlSanitizerBuilder.prototype.allowStyleAttributes = function () {
        var globalAttributePolicies = new Map(this.sanitizerTable.globalAttributePolicies);
        globalAttributePolicies.set('style', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_STYLE });
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, this.sanitizerTable.elementPolicies, this.sanitizerTable.allowedGlobalAttributes, globalAttributePolicies);
        return this;
    };
    /**
     * Preserves the class attribute on all elements. This means contents can
     * adopt CSS styles from other page elements and possibly mask themselves as
     * legitimate UI elements, which can lead to phishing.
     */
    HtmlSanitizerBuilder.prototype.allowClassAttributes = function () {
        var globalAttributePolicies = new Map(this.sanitizerTable.globalAttributePolicies);
        globalAttributePolicies.set('class', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP });
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, this.sanitizerTable.elementPolicies, this.sanitizerTable.allowedGlobalAttributes, globalAttributePolicies);
        return this;
    };
    /**
     * Preserves id attributes. This carries moderate risk as it allows an
     * element to override other elements with the same ID.
     */
    HtmlSanitizerBuilder.prototype.allowIdAttributes = function () {
        var globalAttributePolicies = new Map(this.sanitizerTable.globalAttributePolicies);
        globalAttributePolicies.set('id', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP });
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, this.sanitizerTable.elementPolicies, this.sanitizerTable.allowedGlobalAttributes, globalAttributePolicies);
        return this;
    };
    HtmlSanitizerBuilder.prototype.build = function () {
        if (this.calledBuild) {
            throw new Error('this sanitizer has already called build');
        }
        this.calledBuild = true;
        return new html_sanitizer_1.HtmlSanitizerImpl(this.sanitizerTable, secrets_1.secretToken);
    };
    return HtmlSanitizerBuilder;
}());
exports.HtmlSanitizerBuilder = HtmlSanitizerBuilder;


/***/ }),

/***/ "./node_modules/safevalues/builders/html_sanitizer/inert_fragment.js":
/*!***************************************************************************!*\
  !*** ./node_modules/safevalues/builders/html_sanitizer/inert_fragment.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInertFragment = void 0;
var element_1 = __webpack_require__(/*! ../../dom/elements/element */ "./node_modules/safevalues/dom/elements/element.js");
var html_impl_1 = __webpack_require__(/*! ../../internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
/**
 * Returns a fragment that contains the parsed HTML for `dirtyHtml` without
 * executing any of the potential payload.
 */
function createInertFragment(dirtyHtml) {
    var template = document.createElement('template');
    // This call is only used to create an inert tree for the sanitizer to
    // further process and is never returned directly to the caller. We can't use
    // a reviewed conversion in order to avoid an import loop.
    var temporarySafeHtml = (0, html_impl_1.createHtml)(dirtyHtml);
    (0, element_1.setInnerHtml)(template, temporarySafeHtml);
    return template.content;
}
exports.createInertFragment = createInertFragment;


/***/ }),

/***/ "./node_modules/safevalues/builders/html_sanitizer/no_clobber.js":
/*!***********************************************************************!*\
  !*** ./node_modules/safevalues/builders/html_sanitizer/no_clobber.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isElement = exports.isText = exports.getNodeName = void 0;
/**
 * Library that provides safe getters for different node properties and
 * checks for clobbering.
 */
/** Gets a reasonable nodeName, even for clobbered nodes. */
function getNodeName(node) {
    var nodeName = node.nodeName;
    // If the property is clobbered, assume it is an `HTMLFormElement`.
    return (typeof nodeName === 'string') ? nodeName : 'FORM';
}
exports.getNodeName = getNodeName;
/** Returns true if the object passed is a Text node. */
function isText(node) {
    // The property cannot get clobbered on Text nodes.
    return node.nodeType === Node.TEXT_NODE;
}
exports.isText = isText;
/** Returns true if the object passed is an Element node. */
function isElement(node) {
    var nodeType = node.nodeType;
    // If the property is clobbered, we can assume it is an `HTMLFormElement`, and
    // thus an `Element`.
    return (nodeType === Node.ELEMENT_NODE) || (typeof nodeType !== 'number');
}
exports.isElement = isElement;


/***/ }),

/***/ "./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/default_sanitizer_table.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/default_sanitizer_table.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSanitizerTable = void 0;
var sanitizer_table_1 = __webpack_require__(/*! ./sanitizer_table */ "./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/sanitizer_table.js");
/**
 * GENERATED CODE, DO NOT MODIFY
 * This SanitizerTable was generated from the checked in html contract:
 *  webutil/html/types/codegen/html5_contract.textpb
 *
 * You can regenerate this file with:
 * webutil/html/types/codegen/update_generated_source_files.sh
 */
exports.defaultSanitizerTable = new sanitizer_table_1.SanitizerTable(new Set([
    'ARTICLE', 'SECTION', 'NAV', 'ASIDE', 'H1', 'H2',
    'H3', 'H4', 'H5', 'H6', 'HEADER', 'FOOTER',
    'ADDRESS', 'P', 'HR', 'PRE', 'BLOCKQUOTE', 'OL',
    'UL', 'LH', 'LI', 'DL', 'DT', 'DD',
    'FIGURE', 'FIGCAPTION', 'MAIN', 'DIV', 'EM', 'STRONG',
    'SMALL', 'S', 'CITE', 'Q', 'DFN', 'ABBR',
    'RUBY', 'RB', 'RT', 'RTC', 'RP', 'DATA',
    'TIME', 'CODE', 'VAR', 'SAMP', 'KBD', 'SUB',
    'SUP', 'I', 'B', 'U', 'MARK', 'BDI',
    'BDO', 'SPAN', 'BR', 'WBR', 'INS', 'DEL',
    'PICTURE', 'PARAM', 'TRACK', 'MAP', 'TABLE', 'CAPTION',
    'COLGROUP', 'COL', 'TBODY', 'THEAD', 'TFOOT', 'TR',
    'TD', 'TH', 'SELECT', 'DATALIST', 'OPTGROUP', 'OPTION',
    'OUTPUT', 'PROGRESS', 'METER', 'FIELDSET', 'LEGEND', 'DETAILS',
    'SUMMARY', 'MENU', 'DIALOG', 'SLOT', 'CANVAS', 'FONT',
    'CENTER',
]), new Map([
    [
        'A', new Map([
            ['href', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL }],
        ])
    ],
    [
        'AREA', new Map([
            ['href', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL }],
        ])
    ],
    [
        'LINK', new Map([
            [
                'href', {
                    policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL,
                    conditions: new Map([[
                            'rel', new Set([
                                'alternate',
                                'author',
                                'bookmark',
                                'canonical',
                                'cite',
                                'help',
                                'icon',
                                'license',
                                'next',
                                'prefetch',
                                'dns-prefetch',
                                'prerender',
                                'preconnect',
                                'preload',
                                'prev',
                                'search',
                                'subresource',
                            ])
                        ]])
                }
            ],
        ])
    ],
    [
        'SOURCE', new Map([
            ['src', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL }],
        ])
    ],
    [
        'IMG', new Map([
            ['src', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL }],
        ])
    ],
    [
        'VIDEO', new Map([
            ['src', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL }],
        ])
    ],
    [
        'AUDIO', new Map([
            ['src', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL }],
        ])
    ],
]), new Set([
    'title',
    'aria-atomic',
    'aria-autocomplete',
    'aria-busy',
    'aria-checked',
    'aria-current',
    'aria-disabled',
    'aria-dropeffect',
    'aria-expanded',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-label',
    'aria-level',
    'aria-live',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'alt',
    'align',
    'autocapitalize',
    'autocomplete',
    'autocorrect',
    'autofocus',
    'autoplay',
    'bgcolor',
    'border',
    'cellpadding',
    'cellspacing',
    'checked',
    'color',
    'cols',
    'colspan',
    'controls',
    'datetime',
    'disabled',
    'download',
    'draggable',
    'enctype',
    'face',
    'formenctype',
    'frameborder',
    'height',
    'hreflang',
    'hidden',
    'ismap',
    'label',
    'lang',
    'loop',
    'max',
    'maxlength',
    'media',
    'minlength',
    'min',
    'multiple',
    'muted',
    'nonce',
    'open',
    'placeholder',
    'preload',
    'rel',
    'required',
    'reversed',
    'role',
    'rows',
    'rowspan',
    'selected',
    'shape',
    'size',
    'sizes',
    'slot',
    'span',
    'spellcheck',
    'start',
    'step',
    'summary',
    'translate',
    'type',
    'valign',
    'value',
    'width',
    'wrap',
    'itemscope',
    'itemtype',
    'itemid',
    'itemprop',
    'itemref',
]), new Map([
    [
        'dir', {
            policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_NORMALIZE,
            conditions: new Map([[
                    'dir', new Set([
                        'auto',
                        'ltr',
                        'rtl',
                    ])
                ]])
        }
    ],
    [
        'async', {
            policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_NORMALIZE,
            conditions: new Map([[
                    'async', new Set([
                        'async',
                    ])
                ]])
        }
    ],
    ['cite', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL }],
    [
        'loading', {
            policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_NORMALIZE,
            conditions: new Map([[
                    'loading', new Set([
                        'eager',
                        'lazy',
                    ])
                ]])
        }
    ],
    ['poster', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_URL }],
    [
        'target', {
            policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_NORMALIZE,
            conditions: new Map([[
                    'target', new Set([
                        '_self',
                        '_blank',
                    ])
                ]])
        }
    ],
]));


/***/ }),

/***/ "./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/sanitizer_table.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/safevalues/builders/html_sanitizer/sanitizer_table/sanitizer_table.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributePolicyAction = exports.SanitizerTable = void 0;
/** Class for holding element and attribute policies used for sanitization. */
var SanitizerTable = /** @class */ (function () {
    function SanitizerTable(allowedElements, elementPolicies, allowedGlobalAttributes, globalAttributePolicies) {
        this.allowedElements = allowedElements;
        this.elementPolicies = elementPolicies;
        this.allowedGlobalAttributes = allowedGlobalAttributes;
        this.globalAttributePolicies = globalAttributePolicies;
    }
    SanitizerTable.prototype.isAllowedElement = function (elementName) {
        // Note: `HTMLFormElement`s are always dropped, supporting them is very
        // costly because of the DOM clobberring they can cause. The additional code
        // size required to properly work around DOM clobberring issues is large and
        // shouldn't be put on every user of the sanitizer. Thoroughly review
        // b/210975025 and the CLs linked there before you start allowing form
        // elements.
        return elementName.toLowerCase() !== 'form' &&
            (this.allowedElements.has(elementName) ||
                this.elementPolicies.has(elementName));
    };
    SanitizerTable.prototype.getAttributePolicy = function (attributeName, elementName) {
        var elementPolicy = this.elementPolicies.get(elementName);
        if (elementPolicy === null || elementPolicy === void 0 ? void 0 : elementPolicy.has(attributeName)) {
            return elementPolicy.get(attributeName);
        }
        if (this.allowedGlobalAttributes.has(attributeName)) {
            return { policyAction: AttributePolicyAction.KEEP };
        }
        var globalPolicy = this.globalAttributePolicies.get(attributeName);
        return globalPolicy || { policyAction: AttributePolicyAction.DROP };
    };
    return SanitizerTable;
}());
exports.SanitizerTable = SanitizerTable;
/**
 * Values derived from
 * https://godoc.corp.google.com/pkg/google3/third_party/safehtml/sanitizer/policy#AttributePolicy
 */
var AttributePolicyAction;
(function (AttributePolicyAction) {
    AttributePolicyAction[AttributePolicyAction["DROP"] = 0] = "DROP";
    AttributePolicyAction[AttributePolicyAction["KEEP"] = 1] = "KEEP";
    AttributePolicyAction[AttributePolicyAction["KEEP_AND_SANITIZE_URL"] = 2] = "KEEP_AND_SANITIZE_URL";
    AttributePolicyAction[AttributePolicyAction["KEEP_AND_NORMALIZE"] = 3] = "KEEP_AND_NORMALIZE";
    AttributePolicyAction[AttributePolicyAction["KEEP_AND_SANITIZE_STYLE"] = 4] = "KEEP_AND_SANITIZE_STYLE";
})(AttributePolicyAction = exports.AttributePolicyAction || (exports.AttributePolicyAction = {}));


/***/ }),

/***/ "./node_modules/safevalues/builders/resource_url_builders.js":
/*!*******************************************************************!*\
  !*** ./node_modules/safevalues/builders/resource_url_builders.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.blobUrlFromScript = exports.replaceFragment = exports.appendParams = exports.trustedResourceUrl = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var resource_url_impl_1 = __webpack_require__(/*! ../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
var script_impl_1 = __webpack_require__(/*! ../internals/script_impl */ "./node_modules/safevalues/internals/script_impl.js");
var string_literal_1 = __webpack_require__(/*! ../internals/string_literal */ "./node_modules/safevalues/internals/string_literal.js");
/**
 * Check whether the base url contains a valid origin,
 *
 * A string for an origin must contain only alphanumeric or any of the
 * following: `-.:`, and must not be an IP address. Remember that, as per the
 * documentation for TrustedResourceUrl, the origin must be trustworthy.
 *
 * @param base The base url that contains an origin.
 */
function hasValidOrigin(base) {
    if (!(/^https:\/\//.test(base) || /^\/\//.test(base))) {
        return false;
    }
    var originStart = base.indexOf('//') + 2;
    var originEnd = base.indexOf('/', originStart);
    // If the base url only contains the prefix (e.g. //), or the slash
    // for the origin is right after the prefix (e.g. ///), the origin is
    // missing.
    if (originEnd <= originStart) {
        throw new Error("Can't interpolate data in a url's origin, " +
            "Please make sure to fully specify the origin, terminated with '/'.");
    }
    var origin = base.substring(originStart, originEnd);
    if (!/^[0-9a-z.:-]+$/i.test(origin)) {
        throw new Error('The origin contains unsupported characters.');
    }
    if (!/^[^:]*(:[0-9]+)?$/i.test(origin)) {
        throw new Error('Invalid port number.');
    }
    if (!/(^|\.)[a-z][^.]*$/i.test(origin)) {
        throw new Error('The top-level domain must start with a letter.');
    }
    return true;
}
/**
 * Check whether the base url contains a valid about url at its beginning.
 *
 * An about url is either exactly 'about:blank' or 'about:blank#<str>' where
 * <str> can be an arbitrary string.
 *
 * @param base The base url.
 */
function isValidAboutUrl(base) {
    if (!/^about:blank/.test(base)) {
        return false;
    }
    if (base !== 'about:blank' && !/^about:blank#/.test(base)) {
        throw new Error('The about url is invalid.');
    }
    return true;
}
/**
 * Check whether the base url contains a valid path start at its beginning.
 *
 * A valid path start is either a '/' or a '/' followed by at least one
 * character that is not '/' or '\'.
 *
 * @param base The base url.
 */
function isValidPathStart(base) {
    if (!/^\//.test(base)) {
        return false;
    }
    if ((base === '/') ||
        (base.length > 1 && base[1] !== '/' && base[1] !== '\\')) {
        return true;
    }
    throw new Error('The path start in the url is invalid.');
}
/**
 * Builds TrustedResourceUrl from a template literal.
 *
 * This factory is a template literal tag function. It should be called with
 * a template literal, with or without embedded expressions. For example,
 *               trustedResourceUrl`//example.com/${bar}`;
 * or
 *               trustedResourceUrl`//example.com`;
 *
 * When this function is called with a template literal without any embedded
 * expressions, the template string may contain anything as the whole URL is
 * a compile-time string constant.
 *
 * When this function is called with a template literal that contains embedded
 * expressions, the template must start with one of the following:
 * - `https://<origin>/`
 * - `//<origin>/`
 * - `/<pathStart>`
 * - `about:blank`
 * - `data:`
 *
 * `<origin>` must contain only alphanumeric or any of the following: `-.:`.
 * Remember that, as per the documentation for TrustedResourceUrl, the origin
 * must be trustworthy. An origin of "example.com" could be set with this
 * method, but would tie the security of your site to the security of
 * example.com. Similarly, formats that potentially cover redirects hosted
 * on a trusted origin are problematic, since that could lead to untrusted
 * origins.
 *
 * `<pathStart>` is either an empty string, or a non empty string that does not
 * start with '/' or '\'.
 * In other words, `/<pathStart>` is either a '/' or a
 * '/' followed by at least one character that is not '/' or '\'.
 *
 * `data:` (data URL) does not allow embedded expressions in the template
 * literal input.
 *
 * All embedded expressions are URL encoded when they are interpolated. Do not
 * embed expressions that are already URL encoded as they will be double encoded
 * by the builder.
 *
 * @param templateObj This contains the literal part of the template literal.
 * @param rest This represents the template's embedded expressions.
 */
function trustedResourceUrl(templateObj) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    // Check if templateObj is actually from a template literal.
    if (true) {
        (0, string_literal_1.assertIsTemplateObject)(templateObj, true, 'trustedResourceUrl is a template literal tag function and ' +
            'can only be called as such (e.g. trustedResourceUrl`/somepath.js`)');
    }
    if (rest.length === 0) {
        return (0, resource_url_impl_1.createResourceUrl)(templateObj[0]);
    }
    var base = templateObj[0].toLowerCase();
    if (true) {
        if (/^data:/.test(base)) {
            throw new Error('Data URLs cannot have expressions in the template literal input.');
        }
        if (!hasValidOrigin(base) && !isValidPathStart(base) &&
            !isValidAboutUrl(base)) {
            throw new Error('Trying to interpolate expressions in an unsupported url format.');
        }
    }
    var urlParts = [templateObj[0]];
    for (var i = 0; i < rest.length; i++) {
        urlParts.push(encodeURIComponent(rest[i]));
        urlParts.push(templateObj[i + 1]);
    }
    return (0, resource_url_impl_1.createResourceUrl)(urlParts.join(''));
}
exports.trustedResourceUrl = trustedResourceUrl;
/**
 * Creates a new TrustedResourceUrl with params added to the URL's search
 * parameters.
 *
 * @param params What to add to the URL. Parameters with value `null` or
 * `undefined` are skipped. Both keys and values will be encoded. Do not pass
 * pre-encoded values as this will result them being double encoded. If the
 * value is an array then the same parameter is added for every element in the
 * array.
 */
function appendParams(trustedUrl, params) {
    var url = (0, resource_url_impl_1.unwrapResourceUrl)(trustedUrl).toString();
    if (/#/.test(url)) {
        var message = '';
        if (true) {
            message = "Found a hash in url (".concat(url, "), appending not supported");
        }
        throw new Error(message);
    }
    var separator = /\?/.test(url) ? '&' : '?';
    // for-of has a big polyfill.
    // tslint:disable-next-line:ban-iterable-foreach
    params.forEach(function (value, key) {
        var values = (value instanceof Array) ? value : [value];
        for (var i = 0; i < values.length; i++) {
            var v = values[i];
            if (v === null || v === undefined) {
                continue;
            }
            url += separator + encodeURIComponent(key) + '=' +
                encodeURIComponent(String(v));
            separator = '&';
        }
    });
    return (0, resource_url_impl_1.createResourceUrl)(url);
}
exports.appendParams = appendParams;
var BEFORE_FRAGMENT_REGEXP = /[^#]*/;
/**
 * Creates a new TrustedResourceUrl based on an existing one but with the
 * addition of a fragment (the part after `#`). If the URL already has a
 * fragment, it is replaced with the new one.
 * @param fragment The fragment to add to the URL, verbatim, without the leading
 * `#`. No additional escaping is applied.
 */
function replaceFragment(trustedUrl, fragment) {
    var urlString = (0, resource_url_impl_1.unwrapResourceUrl)(trustedUrl).toString();
    return (0, resource_url_impl_1.createResourceUrl)(BEFORE_FRAGMENT_REGEXP.exec(urlString)[0] + '#' + fragment);
}
exports.replaceFragment = replaceFragment;
/**
 * Creates a `TrustedResourceUrl` by generating a `Blob` from a
 * `SafeScript` and then calling `URL.createObjectURL` with that `Blob`.
 *
 * Caller must call `URL.revokeObjectUrl()` on the stringified url to
 * release the underlying `Blob`.
 */
function blobUrlFromScript(safeScript) {
    var scriptContent = (0, script_impl_1.unwrapScript)(safeScript).toString();
    var blob = new Blob([scriptContent], { type: 'text/javascript' });
    return (0, resource_url_impl_1.createResourceUrl)(URL.createObjectURL(blob));
}
exports.blobUrlFromScript = blobUrlFromScript;


/***/ }),

/***/ "./node_modules/safevalues/builders/script_builders.js":
/*!*************************************************************!*\
  !*** ./node_modules/safevalues/builders/script_builders.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeScriptWithArgs = exports.scriptFromJson = exports.concatScripts = exports.safeScript = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var script_impl_1 = __webpack_require__(/*! ../internals/script_impl */ "./node_modules/safevalues/internals/script_impl.js");
var string_literal_1 = __webpack_require__(/*! ../internals/string_literal */ "./node_modules/safevalues/internals/string_literal.js");
/**
 * Creates a SafeScript object from a template literal (without any embedded
 * expressions).
 *
 * This function is a template literal tag function. It should be called with
 * a template literal that does not contain any expressions. For example,
 *                           safeScript`foo`;
 *
 * @param templateObj This contains the literal part of the template literal.
 */
function safeScript(templateObj) {
    if (true) {
        (0, string_literal_1.assertIsTemplateObject)(templateObj, false, 'safeScript is a template literal tag function ' +
            'that only accepts template literals without expressions. ' +
            'For example, safeScript`foo`;');
    }
    return (0, script_impl_1.createScript)(templateObj[0]);
}
exports.safeScript = safeScript;
/** Creates a `SafeScript` value by concatenating multiple `SafeScript`s. */
function concatScripts(scripts) {
    return (0, script_impl_1.createScript)(scripts.map(script_impl_1.unwrapScript).join(''));
}
exports.concatScripts = concatScripts;
/**
 * Converts a serializable value into JSON that is safe to interpolate into a
 * script context. In particular it escapes < characters so that a value of
 * "</script>" doesn't break out of the context.
 * @param value The value to serialize.
 */
function scriptFromJson(value) {
    return (0, script_impl_1.createScript)(JSON.stringify(value).replace(/</g, '\\x3c'));
}
exports.scriptFromJson = scriptFromJson;
/**
 * Creates a `SafeScript` object from a template literal (without any embedded
 * expressions) along with additional arguments that the script should have
 * access to. These arguments will be JSON-encoded and passed to the script as
 * a function call.
 * @example
 * ```ts
 * safeScriptWithArgs`function (name, props) {
 *  console.log(name + ' is ' + props.age);
 * }`('Bob', { 'age': 42 })
 * ```
 * would return a `SafeScript` that represents the following code:
 * ```js
 * (function (name, props) {
 *  console.log(name + ' is ' + props.age);
 * })("Bob",{"age":42})
 * ```
 * @note Be careful when passing objects as arguments, as unquoted property
 * names may be changed during compilation.
 * @param templateObj This contains the literal part of the template literal.
 * @param emptyArgs Expressions that evaluate to the empty string to enable
 *     inline comments.
 */
function safeScriptWithArgs(templateObj) {
    var emptyArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        emptyArgs[_i - 1] = arguments[_i];
    }
    if (true) {
        if (emptyArgs.some(function (a) { return a !== ''; })) {
            throw new Error('safeScriptWithArgs only allows empty string expressions ' +
                'to enable inline comments.');
        }
        (0, string_literal_1.assertIsTemplateObject)(templateObj, true, 'safeScriptWithArgs is a template literal tag function ' +
            'that only accepts template literals. ' +
            'For example, safeScriptWithArgs`foo`;');
    }
    return function () {
        var argValues = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argValues[_i] = arguments[_i];
        }
        var values = argValues.map(function (v) { return scriptFromJson(v).toString(); });
        return (0, script_impl_1.createScript)("(".concat(templateObj.join(''), ")(").concat(values.join(','), ")"));
    };
}
exports.safeScriptWithArgs = safeScriptWithArgs;


/***/ }),

/***/ "./node_modules/safevalues/builders/sensitive_attributes.js":
/*!******************************************************************!*\
  !*** ./node_modules/safevalues/builders/sensitive_attributes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECURITY_SENSITIVE_ATTRIBUTES = void 0;
// AUTOGENERATED. DO NOT EDIT.
/**
 * Security sensitive attribute names that should not be set through
 * `setAttribute` or similar functions.
 */
exports.SECURITY_SENSITIVE_ATTRIBUTES = [
    'href',
    'rel',
    'src',
    'srcdoc',
    'action',
    'formaction',
    'sandbox',
    'cite',
    'poster',
    'icon',
];


/***/ }),

/***/ "./node_modules/safevalues/builders/style_builders.js":
/*!************************************************************!*\
  !*** ./node_modules/safevalues/builders/style_builders.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatStyles = exports.safeStyle = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var string_literal_1 = __webpack_require__(/*! ../internals/string_literal */ "./node_modules/safevalues/internals/string_literal.js");
var style_impl_1 = __webpack_require__(/*! ../internals/style_impl */ "./node_modules/safevalues/internals/style_impl.js");
/**
 * Creates a SafeStyle object from a template literal (without any embedded
 * expressions).
 *
 * ` style` should be in the format
 * ` name: value; [name: value; ...]` and must not have any < or >
 * characters in it. This is so that SafeStyle's contract is preserved,
 * allowing the SafeStyle to correctly be interpreted as a sequence of CSS
 * declarations and without affecting the syntactic structure of any
 * surrounding CSS and HTML.
 *
 * This function is a template literal tag function. It should be called with
 * a template literal that does not contain any expressions. For example,
 *                          safeStyle`foo`;
 * This function first checks if it is called with a literal template, and
 * then performs basic sanity checks on the format of ` style`
 * but does not constrain the format of ` name} and {@code value`, except
 * for disallowing tag characters.
 *
 * @param templateObj This contains the literal part of the template literal.
 */
function safeStyle(templateObj) {
    if (true) {
        (0, string_literal_1.assertIsTemplateObject)(templateObj, false, 'safeStyle is a template literal tag function ' +
            'that only accepts template literals without expressions. ' +
            'For example, safeStyle`foo`;');
    }
    var style = templateObj[0];
    if (true) {
        if (/[<>]/.test(style)) {
            throw new Error('Forbidden characters in style string: ' + style);
        }
        if (!/;$/.test(style)) {
            throw new Error('Style string does not end with ";": ' + style);
        }
        if (!/:/.test(style)) {
            throw new Error('Style string should contain one or more ":": ' + style);
        }
    }
    return (0, style_impl_1.createStyle)(style);
}
exports.safeStyle = safeStyle;
/** Creates a `SafeStyle` value by concatenating multiple `SafeStyle`s. */
function concatStyles(styles) {
    return (0, style_impl_1.createStyle)(styles.map(style_impl_1.unwrapStyle).join(''));
}
exports.concatStyles = concatStyles;


/***/ }),

/***/ "./node_modules/safevalues/builders/style_sheet_builders.js":
/*!******************************************************************!*\
  !*** ./node_modules/safevalues/builders/style_sheet_builders.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatStyleSheets = exports.safeStyleSheet = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var string_literal_1 = __webpack_require__(/*! ../internals/string_literal */ "./node_modules/safevalues/internals/string_literal.js");
var style_sheet_impl_1 = __webpack_require__(/*! ../internals/style_sheet_impl */ "./node_modules/safevalues/internals/style_sheet_impl.js");
/**
 * Creates a SafeStyleSheet object from a template literal (without any
 * embedded expressions).
 *
 * This function is a template literal tag function. It should be called with
 * a template literal that does not contain any expressions. For example,
 *                         safeStyleSheet`foo`;
 * The argument must not have any < or > characters in it. This is so that
 * SafeStyleSheet's contract is preserved, allowing the SafeStyleSheet to
 * correctly be interpreted as a sequence of CSS declarations and without
 * affecting the syntactic structure of any surrounding CSS and HTML.
 *
 * @param templateObj This contains the literal part of the template literal.
 */
function safeStyleSheet(templateObj) {
    if (true) {
        (0, string_literal_1.assertIsTemplateObject)(templateObj, false, 'safeStyleSheet is a template literal tag ' +
            'function that only accepts template literals without ' +
            'expressions. For example, safeStyleSheet`foo`;');
    }
    var styleSheet = templateObj[0];
    if (true) {
        if (/[<>]/.test(styleSheet)) {
            throw new Error('Forbidden characters in styleSheet string: ' + styleSheet);
        }
    }
    return (0, style_sheet_impl_1.createStyleSheet)(styleSheet);
}
exports.safeStyleSheet = safeStyleSheet;
/**
 * Creates a `SafeStyleSheet` value by concatenating multiple `SafeStyleSheet`s.
 */
function concatStyleSheets(sheets) {
    return (0, style_sheet_impl_1.createStyleSheet)(sheets.map(style_sheet_impl_1.unwrapStyleSheet).join(''));
}
exports.concatStyleSheets = concatStyleSheets;


/***/ }),

/***/ "./node_modules/safevalues/builders/url_sanitizer.js":
/*!***********************************************************!*\
  !*** ./node_modules/safevalues/builders/url_sanitizer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictivelySanitizeUrl = exports.unwrapUrlOrSanitize = exports.sanitizeJavascriptUrl = void 0;
/**
 * @fileoverview Provides functions to enforce the SafeUrl contract at the sink
 * level.
 */
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
function extractScheme(url) {
    var parsedUrl;
    try {
        parsedUrl = new URL(url);
    }
    catch (e) {
        // According to https://url.spec.whatwg.org/#constructors, the URL
        // constructor with one parameter throws if `url` is not absolute. In this
        // case, we are sure that no explicit scheme (javascript: ) is set.
        // This can also be a URL parsing error, but in this case the URL won't be
        // run anyway.
        return 'https:';
    }
    return parsedUrl.protocol;
}
// We can't use an ES6 Set here because gws somehow depends on this code and
// doesn't want to pay the cost of a polyfill.
var ALLOWED_SCHEMES = ['data:', 'http:', 'https:', 'mailto:', 'ftp:'];
/**
 * Checks that the URL scheme is not javascript.
 * The URL parsing relies on the URL API in browsers that support it.
 * @param url The URL to sanitize for a SafeUrl sink.
 * @return undefined if url has a javascript: scheme, the original URL
 *     otherwise.
 */
function sanitizeJavascriptUrl(url) {
    var parsedScheme = extractScheme(url);
    if (parsedScheme === 'javascript:') {
        if (true) {
            console.error("A URL with content '".concat(url, "' was sanitized away."));
        }
        return undefined;
    }
    return url;
}
exports.sanitizeJavascriptUrl = sanitizeJavascriptUrl;
/**
 * Adapter to sanitize string URLs in DOM sink wrappers.
 * @return undefined if the URL was sanitized.
 */
function unwrapUrlOrSanitize(url) {
    return sanitizeJavascriptUrl(url);
}
exports.unwrapUrlOrSanitize = unwrapUrlOrSanitize;
/**
 * Sanitizes a URL restrictively.
 * This sanitizer protects against XSS and potentially other uncommon and
 * undesirable schemes that an attacker could use for e.g. phishing (tel:,
 * callto: ssh: etc schemes). This sanitizer is primarily meant to be used by
 * the HTML sanitizer.
 */
function restrictivelySanitizeUrl(url) {
    var parsedScheme = extractScheme(url);
    if (parsedScheme !== undefined &&
        ALLOWED_SCHEMES.indexOf(parsedScheme.toLowerCase()) !== -1) {
        return url;
    }
    return 'about:invalid#zClosurez';
}
exports.restrictivelySanitizeUrl = restrictivelySanitizeUrl;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/anchor.js":
/*!********************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/anchor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHref = void 0;
var url_sanitizer_1 = __webpack_require__(/*! ../../builders/url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
/**
 * Sets the Href attribute from the given Url.
 */
function setHref(anchor, url) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        anchor.href = sanitizedUrl;
    }
}
exports.setHref = setHref;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/area.js":
/*!******************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/area.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHref = void 0;
var url_sanitizer_1 = __webpack_require__(/*! ../../builders/url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
/**
 * Sets the Href attribute from the given Url.
 */
function setHref(area, url) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        area.href = sanitizedUrl;
    }
}
exports.setHref = setHref;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/button.js":
/*!********************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/button.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFormaction = void 0;
var url_sanitizer_1 = __webpack_require__(/*! ../../builders/url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
/**
 * Sets the Formaction attribute from the given Url.
 */
function setFormaction(button, url) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        button.formAction = sanitizedUrl;
    }
}
exports.setFormaction = setFormaction;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/element.js":
/*!*********************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/element.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPrefixedAttribute = exports.buildPrefixedAttributeSetter = exports.insertAdjacentHtml = exports.setCssText = exports.setOuterHtml = exports.setInnerHtml = void 0;
/**
 * @fileoverview This contains safe wrappers for properties that aren't specific
 * to one kind of HTMLElement (like innerHTML), plus other setters and functions
 * that are not tied to elements (like location.href or Worker constructor).
 */
var attribute_impl_1 = __webpack_require__(/*! ../../internals/attribute_impl */ "./node_modules/safevalues/internals/attribute_impl.js");
var html_impl_1 = __webpack_require__(/*! ../../internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
var style_impl_1 = __webpack_require__(/*! ../../internals/style_impl */ "./node_modules/safevalues/internals/style_impl.js");
/**
 * Safely set {@link Element.innerHTML} on a given ShadowRoot or Element which
 * may not be a `<script>` element or a `<style>` element.
 */
function setInnerHtml(elOrRoot, v) {
    if (isElement(elOrRoot)) {
        throwIfScriptOrStyle(elOrRoot);
    }
    elOrRoot.innerHTML = (0, html_impl_1.unwrapHtml)(v);
}
exports.setInnerHtml = setInnerHtml;
/**
 * Safely set {@link Element.outerHTML} for the given Element.
 */
function setOuterHtml(e, v) {
    var parent = e.parentElement;
    if (parent !== null) {
        throwIfScriptOrStyle(parent);
    }
    e.outerHTML = (0, html_impl_1.unwrapHtml)(v);
}
exports.setOuterHtml = setOuterHtml;
/**
 * Set `ElementCSSInlineStyle.cssText` for the given `ElementCSSInlineStyle`.
 */
function setCssText(e, v) {
    e.style.cssText = (0, style_impl_1.unwrapStyle)(v);
}
exports.setCssText = setCssText;
/**
 * Safely call {@link Element.insertAdjacentHTML} for the given Element.
 */
function insertAdjacentHtml(element, position, v) {
    var tagContext = (position === 'beforebegin' || position === 'afterend') ?
        element.parentElement :
        element;
    if (tagContext !== null) {
        throwIfScriptOrStyle(tagContext);
    }
    element.insertAdjacentHTML(position, (0, html_impl_1.unwrapHtml)(v));
}
exports.insertAdjacentHtml = insertAdjacentHtml;
/**
 * Given a set of known-to-be-safe prefixes (e.g., "data-", "aria-", "js"),
 * return a setter function that allows you to set attributes on an element,
 * as long as the names of the attributes to be set has one of the prefixes.
 *
 * The returned setter ensures that setting any dangerous attribute, e.g.,
 * "src", "href" will cause an exception. This is intended to be used as the
 * safe alterantive of `Element#setAttribute`, when applications need to set
 * attributes that do not have security implications and do not have a
 * corresponding DOM property.
 */
function buildPrefixedAttributeSetter(prefix) {
    var otherPrefixes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherPrefixes[_i - 1] = arguments[_i];
    }
    var prefixes = __spreadArray([prefix], __read(otherPrefixes), false);
    return function (e, attr, value) {
        setPrefixedAttribute(prefixes, e, attr, value);
    };
}
exports.buildPrefixedAttributeSetter = buildPrefixedAttributeSetter;
/**
 * The safe alternative to Element#setAttribute. The function takes a list of
 * `SafeAttributePrefix`, making developer intention explicit. The attribute
 * to be set must has one of the safe prefixes, otherwise the function throws
 * an Error.
 */
function setPrefixedAttribute(attrPrefixes, e, attr, value) {
    if (attrPrefixes.length === 0) {
        throw new Error('No prefixes are provided');
    }
    var prefixes = attrPrefixes.map(function (s) { return (0, attribute_impl_1.unwrapAttributePrefix)(s); });
    var attrLower = attr.toLowerCase();
    if (prefixes.every(function (p) { return attrLower.indexOf(p) !== 0; })) {
        throw new Error("Attribute \"".concat(attr, "\" does not match any of the allowed prefixes."));
    }
    e.setAttribute(attr, value);
}
exports.setPrefixedAttribute = setPrefixedAttribute;
function throwIfScriptOrStyle(element) {
    if (element.tagName.toLowerCase() === 'script') {
        throw new Error('Use setTextContent with a SafeScript.');
    }
    else if (element.tagName.toLowerCase() === 'style') {
        throw new Error('Use setTextContent with a SafeStyleSheet.');
    }
}
function isElement(elOrRoot) {
    return elOrRoot.tagName !== undefined;
}


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/embed.js":
/*!*******************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/embed.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSrc = void 0;
var resource_url_impl_1 = __webpack_require__(/*! ../../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
/**
 * Sets the Src attribute from the given SafeUrl.
 */
function setSrc(embedEl, url) {
    embedEl.src = (0, resource_url_impl_1.unwrapResourceUrl)(url);
}
exports.setSrc = setSrc;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/form.js":
/*!******************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/form.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAction = void 0;
var url_sanitizer_1 = __webpack_require__(/*! ../../builders/url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
/**
 * Sets the Action attribute from the given Url.
 */
function setAction(form, url) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        form.action = sanitizedUrl;
    }
}
exports.setAction = setAction;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/iframe.js":
/*!********************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/iframe.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSrcdoc = exports.setSrc = void 0;
/**
 * @fileoverview Safe iframe helpers and go/intents-for-iframes-for-closure
 */
var html_impl_1 = __webpack_require__(/*! ../../internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
var resource_url_impl_1 = __webpack_require__(/*! ../../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
/** Sets the Src attribute using a TrustedResourceUrl */
function setSrc(iframe, v) {
    iframe.src = (0, resource_url_impl_1.unwrapResourceUrl)(v).toString();
}
exports.setSrc = setSrc;
/** Sets the Srcdoc attribute using a SafeHtml */
function setSrcdoc(iframe, v) {
    iframe.srcdoc = (0, html_impl_1.unwrapHtml)(v);
}
exports.setSrcdoc = setSrcdoc;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/input.js":
/*!*******************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/input.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFormaction = void 0;
var url_sanitizer_1 = __webpack_require__(/*! ../../builders/url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
/**
 * Sets the Formaction attribute from the given Url.
 */
function setFormaction(input, url) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        input.formAction = sanitizedUrl;
    }
}
exports.setFormaction = setFormaction;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/link.js":
/*!******************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/link.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHrefAndRel = void 0;
var url_sanitizer_1 = __webpack_require__(/*! ../../builders/url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
var resource_url_impl_1 = __webpack_require__(/*! ../../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
var SAFE_URL_REL_VALUES = [
    'alternate',
    'author',
    'bookmark',
    'canonical',
    'cite',
    'help',
    'icon',
    'license',
    'next',
    'prefetch',
    'dns-prefetch',
    'prerender',
    'preconnect',
    'preload',
    'prev',
    'search',
    'subresource',
];
function setHrefAndRel(link, url, rel) {
    if (url instanceof resource_url_impl_1.TrustedResourceUrl) {
        link.href = (0, resource_url_impl_1.unwrapResourceUrl)(url).toString();
    }
    else {
        if (SAFE_URL_REL_VALUES.indexOf(rel) === -1) {
            throw new Error("TrustedResourceUrl href attribute required with rel=\"".concat(rel, "\""));
        }
        var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
        if (sanitizedUrl === undefined) {
            return;
        }
        link.href = sanitizedUrl;
    }
    link.rel = rel;
}
exports.setHrefAndRel = setHrefAndRel;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/object.js":
/*!********************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/object.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setData = void 0;
var resource_url_impl_1 = __webpack_require__(/*! ../../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
/** Sets the data attribute using a TrustedResourceUrl */
function setData(obj, v) {
    obj.data = (0, resource_url_impl_1.unwrapResourceUrl)(v);
}
exports.setData = setData;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/script.js":
/*!********************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/script.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSrc = exports.setTextContent = void 0;
var resource_url_impl_1 = __webpack_require__(/*! ../../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
var script_impl_1 = __webpack_require__(/*! ../../internals/script_impl */ "./node_modules/safevalues/internals/script_impl.js");
/** Returns CSP nonce, if set for any script tag. */
function getScriptNonceFromWindow(win) {
    var _a;
    var doc = win.document;
    // document.querySelector can be undefined in non-browser environments.
    var script = (_a = doc.querySelector) === null || _a === void 0 ? void 0 : _a.call(doc, 'script[nonce]');
    if (script) {
        // Try to get the nonce from the IDL property first, because browsers that
        // implement additional nonce protection features (currently only Chrome) to
        // prevent nonce stealing via CSS do not expose the nonce via attributes.
        // See https://github.com/whatwg/html/issues/2369
        return script['nonce'] || script.getAttribute('nonce') || '';
    }
    return '';
}
/** Propagates CSP nonce to dynamically created scripts. */
function setNonceForScriptElement(script) {
    var win = script.ownerDocument && script.ownerDocument.defaultView;
    var nonce = getScriptNonceFromWindow(win || window);
    if (nonce) {
        script.setAttribute('nonce', nonce);
    }
}
/** Sets textContent from the given SafeScript. */
function setTextContent(script, v) {
    script.textContent = (0, script_impl_1.unwrapScript)(v);
    setNonceForScriptElement(script);
}
exports.setTextContent = setTextContent;
/** Sets the Src attribute using a TrustedResourceUrl */
function setSrc(script, v) {
    script.src = (0, resource_url_impl_1.unwrapResourceUrl)(v);
    setNonceForScriptElement(script);
}
exports.setSrc = setSrc;


/***/ }),

/***/ "./node_modules/safevalues/dom/elements/style.js":
/*!*******************************************************!*\
  !*** ./node_modules/safevalues/dom/elements/style.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTextContent = void 0;
var style_sheet_impl_1 = __webpack_require__(/*! ../../internals/style_sheet_impl */ "./node_modules/safevalues/internals/style_sheet_impl.js");
/** Safe setters for `HTMLStyleElement`s. */
function setTextContent(elem, safeStyleSheet) {
    elem.textContent = (0, style_sheet_impl_1.unwrapStyleSheet)(safeStyleSheet);
}
exports.setTextContent = setTextContent;


/***/ }),

/***/ "./node_modules/safevalues/dom/globals/document.js":
/*!*********************************************************!*\
  !*** ./node_modules/safevalues/dom/globals/document.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.execCommandInsertHtml = exports.execCommand = exports.write = void 0;
var html_impl_1 = __webpack_require__(/*! ../../internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
/**
 * write safely calls {@link Document.write} on the given {@link Document} with
 * the given {@link SafeHtml}.
 */
function write(doc, text) {
    doc.write((0, html_impl_1.unwrapHtml)(text));
}
exports.write = write;
/**
 * Safely calls {@link Document.execCommand}. When command is insertHtml, a
 * SafeHtml must be passed in as value.
 */
function execCommand(doc, command, value) {
    var commandString = String(command);
    var valueArgument = value;
    if (commandString.toLowerCase() === 'inserthtml') {
        valueArgument = (0, html_impl_1.unwrapHtml)(value);
    }
    return doc.execCommand(commandString, /* showUi= */ false, valueArgument);
}
exports.execCommand = execCommand;
/**
 * Safely calls {@link Document.execCommand}('insertHtml').
 * @deprecated Use safeDocument.execCommand.
 */
function execCommandInsertHtml(doc, html) {
    return doc.execCommand('insertHTML', /* showUi= */ false, (0, html_impl_1.unwrapHtml)(html));
}
exports.execCommandInsertHtml = execCommandInsertHtml;


/***/ }),

/***/ "./node_modules/safevalues/dom/globals/dom_parser.js":
/*!***********************************************************!*\
  !*** ./node_modules/safevalues/dom/globals/dom_parser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFromString = exports.parseHtml = void 0;
var html_impl_1 = __webpack_require__(/*! ../../internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
/** Safely parses a string using the HTML parser. */
function parseHtml(parser, html) {
    return parseFromString(parser, html, 'text/html');
}
exports.parseHtml = parseHtml;
/** Safely parses a string using the HTML or XML parser. */
function parseFromString(parser, content, contentType) {
    return parser.parseFromString((0, html_impl_1.unwrapHtml)(content), contentType);
}
exports.parseFromString = parseFromString;


/***/ }),

/***/ "./node_modules/safevalues/dom/globals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/safevalues/dom/globals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalEval = void 0;
var script_impl_1 = __webpack_require__(/*! ../../internals/script_impl */ "./node_modules/safevalues/internals/script_impl.js");
/**
 * Evaluates a SafeScript value in the given scope using eval.
 *
 * Strongly consider avoiding this, as eval blocks CSP adoption and does not
 * benefit from compiler optimizations.
 */
function globalEval(win, script) {
    var trustedScript = (0, script_impl_1.unwrapScript)(script);
    var result = win.eval(trustedScript);
    if (result === trustedScript) {
        // https://crbug.com/1024786 manifesting in workers.
        result = win.eval(trustedScript.toString());
    }
    return result;
}
exports.globalEval = globalEval;


/***/ }),

/***/ "./node_modules/safevalues/dom/globals/location.js":
/*!*********************************************************!*\
  !*** ./node_modules/safevalues/dom/globals/location.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign = exports.replace = exports.setHref = void 0;
var url_sanitizer_1 = __webpack_require__(/*! ../../builders/url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
/**
 * setHref safely sets {@link Location.href} on the given {@link Location} with
 * given {@link Url}.
 */
function setHref(loc, url) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        loc.href = sanitizedUrl;
    }
}
exports.setHref = setHref;
/**
 * replace safely calls {@link Location.replace} on the given {@link Location}
 * with given {@link Url}.
 */
function replace(loc, url) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        loc.replace(sanitizedUrl);
    }
}
exports.replace = replace;
/**
 * assign safely calls {@link Location.assign} on the given {@link Location}
 * with given {@link Url}.
 */
function assign(loc, url) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        loc.assign(sanitizedUrl);
    }
}
exports.assign = assign;


/***/ }),

/***/ "./node_modules/safevalues/dom/globals/range.js":
/*!******************************************************!*\
  !*** ./node_modules/safevalues/dom/globals/range.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContextualFragment = void 0;
var html_impl_1 = __webpack_require__(/*! ../../internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
/** Safely creates a contextualFragment. */
function createContextualFragment(range, html) {
    return range.createContextualFragment((0, html_impl_1.unwrapHtml)(html));
}
exports.createContextualFragment = createContextualFragment;


/***/ }),

/***/ "./node_modules/safevalues/dom/globals/service_worker_container.js":
/*!*************************************************************************!*\
  !*** ./node_modules/safevalues/dom/globals/service_worker_container.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
var resource_url_impl_1 = __webpack_require__(/*! ../../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
/** Safely registers a service worker by URL */
function register(container, scriptURL, options) {
    return container.register((0, resource_url_impl_1.unwrapResourceUrl)(scriptURL), options);
}
exports.register = register;


/***/ }),

/***/ "./node_modules/safevalues/dom/globals/window.js":
/*!*******************************************************!*\
  !*** ./node_modules/safevalues/dom/globals/window.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.open = void 0;
var url_sanitizer_1 = __webpack_require__(/*! ../../builders/url_sanitizer */ "./node_modules/safevalues/builders/url_sanitizer.js");
/**
 * open calls {@link Window.open} on the given {@link Window}, given a
 * target {@link Url}.
 */
function open(win, url, target, features) {
    var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
    if (sanitizedUrl !== undefined) {
        return win.open(sanitizedUrl, target, features);
    }
    return null;
}
exports.open = open;


/***/ }),

/***/ "./node_modules/safevalues/dom/globals/worker.js":
/*!*******************************************************!*\
  !*** ./node_modules/safevalues/dom/globals/worker.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importScripts = exports.createShared = exports.create = void 0;
var resource_url_impl_1 = __webpack_require__(/*! ../../internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
/**
 * Safely creates a Web Worker.
 *
 * Example usage:
 *   const trustedResourceUrl = trustedResourceUrl`/safe_script.js`;
 *   safedom.safeWorker.create(trustedResourceUrl);
 * which is a safe alternative to
 *   new Worker(url);
 * The latter can result in loading untrusted code.
 */
function create(url, options) {
    return new Worker((0, resource_url_impl_1.unwrapResourceUrl)(url), options);
}
exports.create = create;
/** Safely creates a shared Web Worker. */
function createShared(url, options) {
    return new SharedWorker((0, resource_url_impl_1.unwrapResourceUrl)(url), options);
}
exports.createShared = createShared;
/** Safely calls importScripts */
function importScripts(scope) {
    var urls = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        urls[_i - 1] = arguments[_i];
    }
    scope.importScripts.apply(scope, __spreadArray([], __read(urls.map(function (url) { return (0, resource_url_impl_1.unwrapResourceUrl)(url); })), false));
}
exports.importScripts = importScripts;


/***/ }),

/***/ "./node_modules/safevalues/dom/index.js":
/*!**********************************************!*\
  !*** ./node_modules/safevalues/dom/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeWorker = exports.safeWindow = exports.safeServiceWorkerContainer = exports.safeRange = exports.safeLocation = exports.safeGlobal = exports.safeDomParser = exports.safeDocument = exports.safeStyleEl = exports.safeScriptEl = exports.safeObjectEl = exports.safeLinkEl = exports.safeInputEl = exports.safeIframeEl = exports.safeFormEl = exports.safeEmbedEl = exports.safeElement = exports.safeButtonEl = exports.safeAreaEl = exports.safeAnchorEl = void 0;
/**
 * @fileoverview This file re-exports all of the wrappers to ensure that we have
 * a clearly defined interface.
 */
exports.safeAnchorEl = __importStar(__webpack_require__(/*! ./elements/anchor */ "./node_modules/safevalues/dom/elements/anchor.js"));
exports.safeAreaEl = __importStar(__webpack_require__(/*! ./elements/area */ "./node_modules/safevalues/dom/elements/area.js"));
exports.safeButtonEl = __importStar(__webpack_require__(/*! ./elements/button */ "./node_modules/safevalues/dom/elements/button.js"));
exports.safeElement = __importStar(__webpack_require__(/*! ./elements/element */ "./node_modules/safevalues/dom/elements/element.js"));
exports.safeEmbedEl = __importStar(__webpack_require__(/*! ./elements/embed */ "./node_modules/safevalues/dom/elements/embed.js"));
exports.safeFormEl = __importStar(__webpack_require__(/*! ./elements/form */ "./node_modules/safevalues/dom/elements/form.js"));
exports.safeIframeEl = __importStar(__webpack_require__(/*! ./elements/iframe */ "./node_modules/safevalues/dom/elements/iframe.js"));
exports.safeInputEl = __importStar(__webpack_require__(/*! ./elements/input */ "./node_modules/safevalues/dom/elements/input.js"));
exports.safeLinkEl = __importStar(__webpack_require__(/*! ./elements/link */ "./node_modules/safevalues/dom/elements/link.js"));
exports.safeObjectEl = __importStar(__webpack_require__(/*! ./elements/object */ "./node_modules/safevalues/dom/elements/object.js"));
exports.safeScriptEl = __importStar(__webpack_require__(/*! ./elements/script */ "./node_modules/safevalues/dom/elements/script.js"));
exports.safeStyleEl = __importStar(__webpack_require__(/*! ./elements/style */ "./node_modules/safevalues/dom/elements/style.js"));
exports.safeDocument = __importStar(__webpack_require__(/*! ./globals/document */ "./node_modules/safevalues/dom/globals/document.js"));
exports.safeDomParser = __importStar(__webpack_require__(/*! ./globals/dom_parser */ "./node_modules/safevalues/dom/globals/dom_parser.js"));
exports.safeGlobal = __importStar(__webpack_require__(/*! ./globals/global */ "./node_modules/safevalues/dom/globals/global.js"));
exports.safeLocation = __importStar(__webpack_require__(/*! ./globals/location */ "./node_modules/safevalues/dom/globals/location.js"));
exports.safeRange = __importStar(__webpack_require__(/*! ./globals/range */ "./node_modules/safevalues/dom/globals/range.js"));
exports.safeServiceWorkerContainer = __importStar(__webpack_require__(/*! ./globals/service_worker_container */ "./node_modules/safevalues/dom/globals/service_worker_container.js"));
exports.safeWindow = __importStar(__webpack_require__(/*! ./globals/window */ "./node_modules/safevalues/dom/globals/window.js"));
exports.safeWorker = __importStar(__webpack_require__(/*! ./globals/worker */ "./node_modules/safevalues/dom/globals/worker.js"));


/***/ }),

/***/ "./node_modules/safevalues/environment/dev.js":
/*!****************************************************!*\
  !*** ./node_modules/safevalues/environment/dev.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Ensure process.env.NODE_ENV is set even when not running under Webpack or
 * Node. Terser will strip this out of production binaries.
 */
/*#__PURE__*/ (function () {
    if (typeof process === 'undefined') {
        window.process = { env: { NODE_ENV: 'development' } };
    }
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/safevalues/index.js":
/*!******************************************!*\
  !*** ./node_modules/safevalues/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapStyleSheet = exports.SafeStyleSheet = exports.isStyleSheet = exports.unwrapStyle = exports.SafeStyle = exports.isStyle = exports.unwrapScript = exports.SafeScript = exports.isScript = exports.EMPTY_SCRIPT = exports.unwrapResourceUrl = exports.TrustedResourceUrl = exports.isResourceUrl = exports.unwrapHtml = exports.SafeHtml = exports.isHtml = exports.EMPTY_HTML = exports.unwrapAttributePrefix = exports.SafeAttributePrefix = exports.safeStyleSheet = exports.concatStyleSheets = exports.safeStyle = exports.concatStyles = exports.scriptFromJson = exports.safeScriptWithArgs = exports.safeScript = exports.concatScripts = exports.trustedResourceUrl = exports.replaceFragment = exports.blobUrlFromScript = exports.appendParams = exports.HtmlSanitizerBuilder = exports.sanitizeHtmlToFragment = exports.sanitizeHtmlAssertUnchanged = exports.sanitizeHtml = exports.htmlEscape = exports.createScriptSrc = exports.createScript = exports.concatHtmls = exports.safeAttrPrefix = void 0;
/** Safe builders */
var attribute_builders_1 = __webpack_require__(/*! ./builders/attribute_builders */ "./node_modules/safevalues/builders/attribute_builders.js");
Object.defineProperty(exports, "safeAttrPrefix", { enumerable: true, get: function () { return attribute_builders_1.safeAttrPrefix; } });
var html_builders_1 = __webpack_require__(/*! ./builders/html_builders */ "./node_modules/safevalues/builders/html_builders.js");
Object.defineProperty(exports, "concatHtmls", { enumerable: true, get: function () { return html_builders_1.concatHtmls; } });
Object.defineProperty(exports, "createScript", { enumerable: true, get: function () { return html_builders_1.createScript; } });
Object.defineProperty(exports, "createScriptSrc", { enumerable: true, get: function () { return html_builders_1.createScriptSrc; } });
Object.defineProperty(exports, "htmlEscape", { enumerable: true, get: function () { return html_builders_1.htmlEscape; } });
var html_sanitizer_1 = __webpack_require__(/*! ./builders/html_sanitizer/html_sanitizer */ "./node_modules/safevalues/builders/html_sanitizer/html_sanitizer.js");
Object.defineProperty(exports, "sanitizeHtml", { enumerable: true, get: function () { return html_sanitizer_1.sanitizeHtml; } });
Object.defineProperty(exports, "sanitizeHtmlAssertUnchanged", { enumerable: true, get: function () { return html_sanitizer_1.sanitizeHtmlAssertUnchanged; } });
Object.defineProperty(exports, "sanitizeHtmlToFragment", { enumerable: true, get: function () { return html_sanitizer_1.sanitizeHtmlToFragment; } });
var html_sanitizer_builder_1 = __webpack_require__(/*! ./builders/html_sanitizer/html_sanitizer_builder */ "./node_modules/safevalues/builders/html_sanitizer/html_sanitizer_builder.js");
Object.defineProperty(exports, "HtmlSanitizerBuilder", { enumerable: true, get: function () { return html_sanitizer_builder_1.HtmlSanitizerBuilder; } });
var resource_url_builders_1 = __webpack_require__(/*! ./builders/resource_url_builders */ "./node_modules/safevalues/builders/resource_url_builders.js");
Object.defineProperty(exports, "appendParams", { enumerable: true, get: function () { return resource_url_builders_1.appendParams; } });
Object.defineProperty(exports, "blobUrlFromScript", { enumerable: true, get: function () { return resource_url_builders_1.blobUrlFromScript; } });
Object.defineProperty(exports, "replaceFragment", { enumerable: true, get: function () { return resource_url_builders_1.replaceFragment; } });
Object.defineProperty(exports, "trustedResourceUrl", { enumerable: true, get: function () { return resource_url_builders_1.trustedResourceUrl; } });
var script_builders_1 = __webpack_require__(/*! ./builders/script_builders */ "./node_modules/safevalues/builders/script_builders.js");
Object.defineProperty(exports, "concatScripts", { enumerable: true, get: function () { return script_builders_1.concatScripts; } });
Object.defineProperty(exports, "safeScript", { enumerable: true, get: function () { return script_builders_1.safeScript; } });
Object.defineProperty(exports, "safeScriptWithArgs", { enumerable: true, get: function () { return script_builders_1.safeScriptWithArgs; } });
Object.defineProperty(exports, "scriptFromJson", { enumerable: true, get: function () { return script_builders_1.scriptFromJson; } });
var style_builders_1 = __webpack_require__(/*! ./builders/style_builders */ "./node_modules/safevalues/builders/style_builders.js");
Object.defineProperty(exports, "concatStyles", { enumerable: true, get: function () { return style_builders_1.concatStyles; } });
Object.defineProperty(exports, "safeStyle", { enumerable: true, get: function () { return style_builders_1.safeStyle; } });
var style_sheet_builders_1 = __webpack_require__(/*! ./builders/style_sheet_builders */ "./node_modules/safevalues/builders/style_sheet_builders.js");
Object.defineProperty(exports, "concatStyleSheets", { enumerable: true, get: function () { return style_sheet_builders_1.concatStyleSheets; } });
Object.defineProperty(exports, "safeStyleSheet", { enumerable: true, get: function () { return style_sheet_builders_1.safeStyleSheet; } });
/** Types, constants and unwrappers */
var attribute_impl_1 = __webpack_require__(/*! ./internals/attribute_impl */ "./node_modules/safevalues/internals/attribute_impl.js");
Object.defineProperty(exports, "SafeAttributePrefix", { enumerable: true, get: function () { return attribute_impl_1.SafeAttributePrefix; } });
Object.defineProperty(exports, "unwrapAttributePrefix", { enumerable: true, get: function () { return attribute_impl_1.unwrapAttributePrefix; } });
var html_impl_1 = __webpack_require__(/*! ./internals/html_impl */ "./node_modules/safevalues/internals/html_impl.js");
Object.defineProperty(exports, "EMPTY_HTML", { enumerable: true, get: function () { return html_impl_1.EMPTY_HTML; } });
Object.defineProperty(exports, "isHtml", { enumerable: true, get: function () { return html_impl_1.isHtml; } });
Object.defineProperty(exports, "SafeHtml", { enumerable: true, get: function () { return html_impl_1.SafeHtml; } });
Object.defineProperty(exports, "unwrapHtml", { enumerable: true, get: function () { return html_impl_1.unwrapHtml; } });
var resource_url_impl_1 = __webpack_require__(/*! ./internals/resource_url_impl */ "./node_modules/safevalues/internals/resource_url_impl.js");
Object.defineProperty(exports, "isResourceUrl", { enumerable: true, get: function () { return resource_url_impl_1.isResourceUrl; } });
Object.defineProperty(exports, "TrustedResourceUrl", { enumerable: true, get: function () { return resource_url_impl_1.TrustedResourceUrl; } });
Object.defineProperty(exports, "unwrapResourceUrl", { enumerable: true, get: function () { return resource_url_impl_1.unwrapResourceUrl; } });
var script_impl_1 = __webpack_require__(/*! ./internals/script_impl */ "./node_modules/safevalues/internals/script_impl.js");
Object.defineProperty(exports, "EMPTY_SCRIPT", { enumerable: true, get: function () { return script_impl_1.EMPTY_SCRIPT; } });
Object.defineProperty(exports, "isScript", { enumerable: true, get: function () { return script_impl_1.isScript; } });
Object.defineProperty(exports, "SafeScript", { enumerable: true, get: function () { return script_impl_1.SafeScript; } });
Object.defineProperty(exports, "unwrapScript", { enumerable: true, get: function () { return script_impl_1.unwrapScript; } });
var style_impl_1 = __webpack_require__(/*! ./internals/style_impl */ "./node_modules/safevalues/internals/style_impl.js");
Object.defineProperty(exports, "isStyle", { enumerable: true, get: function () { return style_impl_1.isStyle; } });
Object.defineProperty(exports, "SafeStyle", { enumerable: true, get: function () { return style_impl_1.SafeStyle; } });
Object.defineProperty(exports, "unwrapStyle", { enumerable: true, get: function () { return style_impl_1.unwrapStyle; } });
var style_sheet_impl_1 = __webpack_require__(/*! ./internals/style_sheet_impl */ "./node_modules/safevalues/internals/style_sheet_impl.js");
Object.defineProperty(exports, "isStyleSheet", { enumerable: true, get: function () { return style_sheet_impl_1.isStyleSheet; } });
Object.defineProperty(exports, "SafeStyleSheet", { enumerable: true, get: function () { return style_sheet_impl_1.SafeStyleSheet; } });
Object.defineProperty(exports, "unwrapStyleSheet", { enumerable: true, get: function () { return style_sheet_impl_1.unwrapStyleSheet; } });


/***/ }),

/***/ "./node_modules/safevalues/internals/attribute_impl.js":
/*!*************************************************************!*\
  !*** ./node_modules/safevalues/internals/attribute_impl.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapAttributePrefix = exports.createAttributePrefix = exports.SafeAttributePrefix = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var secrets_1 = __webpack_require__(/*! ./secrets */ "./node_modules/safevalues/internals/secrets.js");
/** A prefix with which an attribute is safe to set using plain strings. */
var SafeAttributePrefix = /** @class */ (function () {
    function SafeAttributePrefix() {
    }
    return SafeAttributePrefix;
}());
exports.SafeAttributePrefix = SafeAttributePrefix;
/** Implementation for `SafeAttributePrefix` */
var AttributePrefixImpl = /** @class */ (function (_super) {
    __extends(AttributePrefixImpl, _super);
    function AttributePrefixImpl(attrPrefix, token) {
        var _this = _super.call(this) || this;
        if (true) {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        _this.privateDoNotAccessOrElseWrappedAttrPrefix = attrPrefix;
        return _this;
    }
    AttributePrefixImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedAttrPrefix;
    };
    return AttributePrefixImpl;
}(SafeAttributePrefix));
/**
 * Builds a new `SafeAttribute` from the given string, without enforcing
 * safety guarantees. This shouldn't be exposed to application developers, and
 * must only be used as a step towards safe builders or safe constants.
 */
function createAttributePrefix(attrPrefix) {
    return new AttributePrefixImpl(attrPrefix, secrets_1.secretToken);
}
exports.createAttributePrefix = createAttributePrefix;
/**
 * Returns the string value of the passed `SafeAttributePrefix` object while
 * ensuring it has the correct type.
 */
function unwrapAttributePrefix(value) {
    if (value instanceof AttributePrefixImpl) {
        return value.privateDoNotAccessOrElseWrappedAttrPrefix;
    }
    else {
        var message = '';
        if (true) {
            message = 'Unexpected type when unwrapping SafeAttributePrefix';
        }
        throw new Error(message);
    }
}
exports.unwrapAttributePrefix = unwrapAttributePrefix;


/***/ }),

/***/ "./node_modules/safevalues/internals/html_impl.js":
/*!********************************************************!*\
  !*** ./node_modules/safevalues/internals/html_impl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapHtml = exports.isHtml = exports.EMPTY_HTML = exports.createHtml = exports.SafeHtml = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
/* g3_import_pure from './pure' */
var secrets_1 = __webpack_require__(/*! ./secrets */ "./node_modules/safevalues/internals/secrets.js");
var trusted_types_1 = __webpack_require__(/*! ./trusted_types */ "./node_modules/safevalues/internals/trusted_types.js");
/**
 * Runtime implementation of `TrustedHTML` in browsers that don't support it.
 */
var HtmlImpl = /** @class */ (function () {
    function HtmlImpl(html, token) {
        if (true) {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        this.privateDoNotAccessOrElseWrappedHtml = html;
    }
    HtmlImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedHtml.toString();
    };
    return HtmlImpl;
}());
function createHtmlInternal(html, trusted) {
    return (trusted !== null && trusted !== void 0 ? trusted : new HtmlImpl(html, secrets_1.secretToken));
}
var GlobalTrustedHTML = (typeof window !== undefined) ? window.TrustedHTML : undefined;
/**
 * Also exports the constructor so that instanceof checks work.
 */
exports.SafeHtml = (GlobalTrustedHTML !== null && GlobalTrustedHTML !== void 0 ? GlobalTrustedHTML : HtmlImpl);
/**
 * Builds a new `SafeHtml` from the given string, without enforcing safety
 * guarantees. It may cause side effects by creating a Trusted Types policy.
 * This shouldn't be exposed to application developers, and must only be used as
 * a step towards safe builders or safe constants.
 */
function createHtml(html) {
    var _a;
    /** @noinline */
    var noinlineHtml = html;
    return createHtmlInternal(noinlineHtml, (_a = (0, trusted_types_1.getTrustedTypesPolicy)()) === null || _a === void 0 ? void 0 : _a.createHTML(noinlineHtml));
}
exports.createHtml = createHtml;
/**
 * An empty `SafeHtml` constant.
 * Unlike the function above, using this will not create a policy.
 */
exports.EMPTY_HTML = 
/* #__PURE__ */ (function () { var _a; return createHtmlInternal('', (_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.emptyHTML); })();
/**
 * Checks if the given value is a `SafeHtml` instance.
 */
function isHtml(value) {
    return value instanceof exports.SafeHtml;
}
exports.isHtml = isHtml;
/**
 * Returns the value of the passed `SafeHtml` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedHTML` or a string if Trusted Types are disabled.
 */
function unwrapHtml(value) {
    var _a;
    if ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isHTML(value)) {
        return value;
    }
    else if (value instanceof HtmlImpl) {
        return value.privateDoNotAccessOrElseWrappedHtml;
    }
    else {
        var message = '';
        if (true) {
            message = 'Unexpected type when unwrapping SafeHtml';
        }
        throw new Error(message);
    }
}
exports.unwrapHtml = unwrapHtml;


/***/ }),

/***/ "./node_modules/safevalues/internals/resource_url_impl.js":
/*!****************************************************************!*\
  !*** ./node_modules/safevalues/internals/resource_url_impl.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapResourceUrl = exports.isResourceUrl = exports.createResourceUrl = exports.TrustedResourceUrl = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var secrets_1 = __webpack_require__(/*! ./secrets */ "./node_modules/safevalues/internals/secrets.js");
var trusted_types_1 = __webpack_require__(/*! ./trusted_types */ "./node_modules/safevalues/internals/trusted_types.js");
/**
 * Runtime implementation of `TrustedScriptURL` in browsers that don't support
 * it.
 */
var ResourceUrlImpl = /** @class */ (function () {
    function ResourceUrlImpl(url, token) {
        if (true) {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        this.privateDoNotAccessOrElseWrappedResourceUrl = url;
    }
    ResourceUrlImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedResourceUrl.toString();
    };
    return ResourceUrlImpl;
}());
var GlobalTrustedScriptURL = (typeof window !== undefined) ? window.TrustedScriptURL : undefined;
/**
 * Also exports the constructor so that instanceof checks work.
 */
exports.TrustedResourceUrl = (GlobalTrustedScriptURL !== null && GlobalTrustedScriptURL !== void 0 ? GlobalTrustedScriptURL : ResourceUrlImpl);
/**
 * Builds a new `TrustedResourceUrl` from the given string, without
 * enforcing safety guarantees. It may cause side effects by creating a Trusted
 * Types policy. This shouldn't be exposed to application developers, and must
 * only be used as a step towards safe builders or safe constants.
 */
function createResourceUrl(url) {
    var _a;
    /** @noinline */
    var noinlineUrl = url;
    var trustedScriptURL = (_a = (0, trusted_types_1.getTrustedTypesPolicy)()) === null || _a === void 0 ? void 0 : _a.createScriptURL(noinlineUrl);
    return (trustedScriptURL !== null && trustedScriptURL !== void 0 ? trustedScriptURL : new ResourceUrlImpl(noinlineUrl, secrets_1.secretToken));
}
exports.createResourceUrl = createResourceUrl;
/**
 * Checks if the given value is a `TrustedResourceUrl` instance.
 */
function isResourceUrl(value) {
    return value instanceof exports.TrustedResourceUrl;
}
exports.isResourceUrl = isResourceUrl;
/**
 * Returns the value of the passed `TrustedResourceUrl` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedScriptURL` or a string if Trusted Types are
 * disabled.
 */
function unwrapResourceUrl(value) {
    var _a;
    if ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isScriptURL(value)) {
        return value;
    }
    else if (value instanceof ResourceUrlImpl) {
        return value.privateDoNotAccessOrElseWrappedResourceUrl;
    }
    else {
        var message = '';
        if (true) {
            message = 'Unexpected type when unwrapping TrustedResourceUrl';
        }
        throw new Error(message);
    }
}
exports.unwrapResourceUrl = unwrapResourceUrl;


/***/ }),

/***/ "./node_modules/safevalues/internals/script_impl.js":
/*!**********************************************************!*\
  !*** ./node_modules/safevalues/internals/script_impl.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapScript = exports.isScript = exports.EMPTY_SCRIPT = exports.createScript = exports.SafeScript = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
/* g3_import_pure from './pure' */
var secrets_1 = __webpack_require__(/*! ./secrets */ "./node_modules/safevalues/internals/secrets.js");
var trusted_types_1 = __webpack_require__(/*! ./trusted_types */ "./node_modules/safevalues/internals/trusted_types.js");
/**
 * Runtime implementation of `TrustedScript` in browswers that don't support it.
 * script element.
 */
var ScriptImpl = /** @class */ (function () {
    function ScriptImpl(script, token) {
        if (true) {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        this.privateDoNotAccessOrElseWrappedScript = script;
    }
    ScriptImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedScript.toString();
    };
    return ScriptImpl;
}());
function createScriptInternal(script, trusted) {
    return (trusted !== null && trusted !== void 0 ? trusted : new ScriptImpl(script, secrets_1.secretToken));
}
var GlobalTrustedScript = (typeof window !== undefined) ? window.TrustedScript : undefined;
/**
 * Also exports the constructor so that instanceof checks work.
 */
exports.SafeScript = (GlobalTrustedScript !== null && GlobalTrustedScript !== void 0 ? GlobalTrustedScript : ScriptImpl);
/**
 * Builds a new `SafeScript` from the given string, without enforcing
 * safety guarantees. It may cause side effects by creating a Trusted Types
 * policy. This shouldn't be exposed to application developers, and must only be
 * used as a step towards safe builders or safe constants.
 */
function createScript(script) {
    var _a;
    /** @noinline */
    var noinlineScript = script;
    return createScriptInternal(noinlineScript, (_a = (0, trusted_types_1.getTrustedTypesPolicy)()) === null || _a === void 0 ? void 0 : _a.createScript(noinlineScript));
}
exports.createScript = createScript;
/**
 * An empty `SafeScript` constant.
 * Unlike the functions above, using this will not create a policy.
 */
exports.EMPTY_SCRIPT = 
/* #__PURE__ */ (function () { var _a; return createScriptInternal('', (_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.emptyScript); })();
/**
 * Checks if the given value is a `SafeScript` instance.
 */
function isScript(value) {
    return value instanceof exports.SafeScript;
}
exports.isScript = isScript;
/**
 * Returns the value of the passed `SafeScript` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedScript` or a string if Trusted Types are disabled.
 */
function unwrapScript(value) {
    var _a;
    if ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isScript(value)) {
        return value;
    }
    else if (value instanceof ScriptImpl) {
        return value.privateDoNotAccessOrElseWrappedScript;
    }
    else {
        var message = '';
        if (true) {
            message = 'Unexpected type when unwrapping SafeScript';
        }
        throw new Error(message);
    }
}
exports.unwrapScript = unwrapScript;


/***/ }),

/***/ "./node_modules/safevalues/internals/secrets.js":
/*!******************************************************!*\
  !*** ./node_modules/safevalues/internals/secrets.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureTokenIsValid = exports.secretToken = void 0;
/**
 * A secret token that must be passed to safe type constructors. It is only
 * accessible from within safevalues, ensuring that unrestricted safe type
 * creation is only possible within safevalues. In particular, this prevents
 * forgery such as `safeHtmlValue.constructor('javascript:evil')`.
 */
exports.secretToken = {};
/**
 * Asserts that the given token matches the secret safevalues token. An
 * exception is thrown if that is not the case.
 */
function ensureTokenIsValid(token) {
    if (token !== exports.secretToken) {
        throw new Error('Bad secret');
    }
}
exports.ensureTokenIsValid = ensureTokenIsValid;


/***/ }),

/***/ "./node_modules/safevalues/internals/string_literal.js":
/*!*************************************************************!*\
  !*** ./node_modules/safevalues/internals/string_literal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsTemplateObject = void 0;
/**
 * An object of type TemplateStringsArray represents the literal part(s) of a
 * template literal. This function checks if a TemplateStringsArray object is
 * actually from a template literal.
 *
 * @param templateObj This contains the literal part of the template literal.
 * @param hasExprs If true, the input template may contain embedded expressions.
 * @param errorMsg The custom error message in case any checks fail.
 */
function assertIsTemplateObject(templateObj, hasExprs, errorMsg) {
    if (!Array.isArray(templateObj) || !Array.isArray(templateObj.raw) ||
        (!hasExprs && templateObj.length !== 1)) {
        throw new TypeError(errorMsg);
    }
}
exports.assertIsTemplateObject = assertIsTemplateObject;


/***/ }),

/***/ "./node_modules/safevalues/internals/style_impl.js":
/*!*********************************************************!*\
  !*** ./node_modules/safevalues/internals/style_impl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapStyle = exports.isStyle = exports.createStyle = exports.SafeStyle = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var secrets_1 = __webpack_require__(/*! ./secrets */ "./node_modules/safevalues/internals/secrets.js");
/**
 * Sequence of CSS declarations safe to use in style contexts in an HTML
 * document or in DOM APIs.
 */
var SafeStyle = /** @class */ (function () {
    function SafeStyle() {
    }
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;
/** Implementation for `SafeStyle` */
var StyleImpl = /** @class */ (function (_super) {
    __extends(StyleImpl, _super);
    function StyleImpl(style, token) {
        var _this = _super.call(this) || this;
        if (true) {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        _this.privateDoNotAccessOrElseWrappedStyle = style;
        return _this;
    }
    StyleImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedStyle;
    };
    return StyleImpl;
}(SafeStyle));
/**
 * Builds a new `SafeStyle` from the given string, without enforcing
 * safety guarantees. This shouldn't be exposed to application developers, and
 * must only be used as a step towards safe builders or safe constants.
 */
function createStyle(style) {
    return new StyleImpl(style, secrets_1.secretToken);
}
exports.createStyle = createStyle;
/**
 * Checks if the given value is a `SafeStyle` instance.
 */
function isStyle(value) {
    return value instanceof StyleImpl;
}
exports.isStyle = isStyle;
/**
 * Returns the string value of the passed `SafeStyle` object while ensuring it
 * has the correct type.
 */
function unwrapStyle(value) {
    if (value instanceof StyleImpl) {
        return value.privateDoNotAccessOrElseWrappedStyle;
    }
    else {
        var message = '';
        if (true) {
            message = 'Unexpected type when unwrapping SafeStyle';
        }
        throw new Error(message);
    }
}
exports.unwrapStyle = unwrapStyle;


/***/ }),

/***/ "./node_modules/safevalues/internals/style_sheet_impl.js":
/*!***************************************************************!*\
  !*** ./node_modules/safevalues/internals/style_sheet_impl.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapStyleSheet = exports.isStyleSheet = exports.createStyleSheet = exports.SafeStyleSheet = void 0;
__webpack_require__(/*! ../environment/dev */ "./node_modules/safevalues/environment/dev.js");
var secrets_1 = __webpack_require__(/*! ./secrets */ "./node_modules/safevalues/internals/secrets.js");
/**
 * A complete CSS style sheet, safe to use in style contexts in an HTML document
 * or DOM APIs.
 */
var SafeStyleSheet = /** @class */ (function () {
    function SafeStyleSheet() {
    }
    return SafeStyleSheet;
}());
exports.SafeStyleSheet = SafeStyleSheet;
/** Implementation for `SafeStyleSheet` */
var StyleSheetImpl = /** @class */ (function (_super) {
    __extends(StyleSheetImpl, _super);
    function StyleSheetImpl(styleSheet, token) {
        var _this = _super.call(this) || this;
        if (true) {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        _this.privateDoNotAccessOrElseWrappedStyleSheet = styleSheet;
        return _this;
    }
    StyleSheetImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedStyleSheet;
    };
    return StyleSheetImpl;
}(SafeStyleSheet));
/**
 * Builds a new `SafeStyleSheet` from the given string, without enforcing
 * safety guarantees. This shouldn't be exposed to application developers, and
 * must only be used as a step towards safe builders or safe constants.
 */
function createStyleSheet(styleSheet) {
    return new StyleSheetImpl(styleSheet, secrets_1.secretToken);
}
exports.createStyleSheet = createStyleSheet;
/**
 * Checks if the given value is a `SafeStyleSheet` instance.
 */
function isStyleSheet(value) {
    return value instanceof StyleSheetImpl;
}
exports.isStyleSheet = isStyleSheet;
/**
 * Returns the string value of the passed `SafeStyleSheet` object while
 * ensuring it has the correct type.
 */
function unwrapStyleSheet(value) {
    if (value instanceof StyleSheetImpl) {
        return value.privateDoNotAccessOrElseWrappedStyleSheet;
    }
    else {
        var message = '';
        if (true) {
            message = 'Unexpected type when unwrapping SafeStyleSheet';
        }
        throw new Error(message);
    }
}
exports.unwrapStyleSheet = unwrapStyleSheet;


/***/ }),

/***/ "./node_modules/safevalues/internals/trusted_types.js":
/*!************************************************************!*\
  !*** ./node_modules/safevalues/internals/trusted_types.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_ONLY = exports.getTrustedTypesPolicy = exports.getTrustedTypes = void 0;
/**
 * The name of the Trusted Types policy used by TS safevalues, or empty
 * to disable Trusted Types. This duplicates the 'google#safe', but
 * can be overridden in tests.
 */
var trustedTypesPolicyName = 'google#safe';
/** Helper to retrieve the value of `window.trustedTypes`. */
function trustedTypes() {
    if (typeof window !== 'undefined') {
        return window.trustedTypes;
    }
    return undefined;
}
/**
 * Returns window.trustedTypes if Trusted Types are enabled and supported, or
 * null otherwise.
 */
function getTrustedTypes() {
    var _a;
    return (trustedTypesPolicyName !== '') ? ((_a = trustedTypes()) !== null && _a !== void 0 ? _a : null) : null;
}
exports.getTrustedTypes = getTrustedTypes;
/**
 * The Trusted Types policy used by TS safevalues, or null if Trusted Types
 * are not enabled/supported, or undefined if the policy has not been created
 * yet.
 */
var trustedTypesPolicy;
/**
 * Returns the Trusted Types policy used by TS safevalues, or null if Trusted
 * Types are not enabled/supported. The first call to this function will
 * create the policy.
 */
function getTrustedTypesPolicy() {
    var _a, _b;
    if (trustedTypesPolicy === undefined) {
        try {
            trustedTypesPolicy =
                (_b = (_a = getTrustedTypes()) === null || _a === void 0 ? void 0 : _a.createPolicy(trustedTypesPolicyName, {
                    createHTML: function (s) { return s; },
                    createScript: function (s) { return s; },
                    createScriptURL: function (s) { return s; }
                })) !== null && _b !== void 0 ? _b : null;
        }
        catch (_c) {
            // In Chromium versions before 81, trustedTypes.createPolicy throws if
            // called with a name that is already registered, even if no CSP is set.
            // Until users have largely migrated to 81 or above, catch the error not
            // to break the applications functionally. In such case, the code will
            // fall back to using regular Safe Types.
            trustedTypesPolicy = null;
        }
    }
    return trustedTypesPolicy;
}
exports.getTrustedTypesPolicy = getTrustedTypesPolicy;
/** Helpers for tests. */
exports.TEST_ONLY = {
    resetDefaults: function () {
        trustedTypesPolicy = undefined;
        trustedTypesPolicyName = 'google#safe';
    },
    setTrustedTypesPolicyName: function (name) {
        trustedTypesPolicyName = name;
    },
};


/***/ }),

/***/ "./packages/mdc-animation/animationframe.ts":
/*!**************************************************!*\
  !*** ./packages/mdc-animation/animationframe.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationFrame = void 0;
/**
 * AnimationFrame provides a user-friendly abstraction around requesting
 * and canceling animation frames.
 */
var AnimationFrame = /** @class */function () {
    function AnimationFrame() {
        this.rafIDs = new Map();
    }
    /**
     * Requests an animation frame. Cancels any existing frame with the same key.
     * @param {string} key The key for this callback.
     * @param {FrameRequestCallback} callback The callback to be executed.
     */
    AnimationFrame.prototype.request = function (key, callback) {
        var _this = this;
        this.cancel(key);
        var frameID = requestAnimationFrame(function (frame) {
            _this.rafIDs.delete(key);
            // Callback must come *after* the key is deleted so that nested calls to
            // request with the same key are not deleted.
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    };
    /**
     * Cancels a queued callback with the given key.
     * @param {string} key The key for this callback.
     */
    AnimationFrame.prototype.cancel = function (key) {
        var rafID = this.rafIDs.get(key);
        if (rafID) {
            cancelAnimationFrame(rafID);
            this.rafIDs.delete(key);
        }
    };
    /**
     * Cancels all queued callback.
     */
    AnimationFrame.prototype.cancelAll = function () {
        var _this = this;
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            _this.cancel(key);
        });
    };
    /**
     * Returns the queue of unexecuted callback keys.
     */
    AnimationFrame.prototype.getQueue = function () {
        var queue = [];
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            queue.push(key);
        });
        return queue;
    };
    return AnimationFrame;
}();
exports.AnimationFrame = AnimationFrame;

/***/ }),

/***/ "./packages/mdc-animation/util.ts":
/*!****************************************!*\
  !*** ./packages/mdc-animation/util.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCorrectEventName = exports.getCorrectPropertyName = void 0;
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation'
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform'
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition'
    }
};
var jsEventTypeMap = {
    animationend: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationEnd',
        standard: 'animationend'
    },
    animationiteration: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationIteration',
        standard: 'animationiteration'
    },
    animationstart: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationStart',
        standard: 'animationstart'
    },
    transitionend: {
        cssProperty: 'transition',
        prefixed: 'webkitTransitionEnd',
        standard: 'transitionend'
    }
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty],
            standard = _a.standard,
            prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}
exports.getCorrectPropertyName = getCorrectPropertyName;
function getCorrectEventName(windowObj, eventType) {
    if (isWindow(windowObj) && eventType in jsEventTypeMap) {
        var el = windowObj.document.createElement('div');
        var _a = jsEventTypeMap[eventType],
            standard = _a.standard,
            prefixed = _a.prefixed,
            cssProperty = _a.cssProperty;
        var isStandard = cssProperty in el.style;
        return isStandard ? standard : prefixed;
    }
    return eventType;
}
exports.getCorrectEventName = getCorrectEventName;

/***/ }),

/***/ "./packages/mdc-base/component.ts":
/*!****************************************!*\
  !*** ./packages/mdc-base/component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
var __read = this && this.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
        to[j] = from[i];
    }return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCComponent = void 0;
var safevalues_1 = __webpack_require__(/*! safevalues */ "./node_modules/safevalues/index.js");
var dom_1 = __webpack_require__(/*! safevalues/dom */ "./node_modules/safevalues/dom/index.js");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-base/foundation.ts");
function toCamelCase(str) {
    // tslint:disable-next-line:enforce-name-casing
    return String(str).replace(/\-([a-z])/g, function (_, match) {
        return match.toUpperCase();
    });
}
/** MDC Component base */
var MDCComponent = /** @class */function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root = root;
        this.initialize.apply(this, __spreadArray([], __read(args)));
        // Note that we initialize foundation here and not within the constructor's
        // default param so that this.root is defined and can be used within the
        // foundation class.
        this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that
        // takes a root element and returns an instantiated component with its root
        // set to that element. Also note that in the cases of subclasses, an
        // explicit foundation class will not have to be passed in; it will simply
        // be initialized from getDefaultFoundation().
        return new MDCComponent(root, new foundation_1.MDCFoundation({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does
     * not need to be unit tested */
    // tslint:disable-next-line:enforce-name-casing
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would
        // be considered part of a "constructor". Essentially, it is a hook into the
        // parent constructor before the foundation is initialized. Any additional
        // arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured
        // foundation class for the component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to
        // synchronize with a host DOM object. An example of this would be a form
        // control wrapper that needs to synchronize its internal state to some
        // property or attribute of the host DOM. Please note: this is *not* the
        // place to perform DOM reads/writes that would cause layout / paint, as
        // this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources /
        // deregister any listeners they have attached. An example of this might be
        // deregistering a resize event from the window object.
        this.foundation.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of
     * the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) {
            shouldBubble = false;
        }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData
            });
        } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root.dispatchEvent(evt);
    };
    /**
     * This is a intermediate fix to allow components to use safevalues. This
     * limits setAttribute to setting tabindex, data attributes, and aria
     * attributes.
     *
     * TODO(b/263990206): remove this method and add these directly in each
     * component. This will remove this abstraction and make it clear that the
     * caller can't set any attribute.
     */
    MDCComponent.prototype.safeSetAttribute = function (element, attribute, value) {
        if (attribute.toLowerCase() === 'tabindex') {
            element.tabIndex = Number(value);
        } else if (attribute.indexOf('data-') === 0) {
            var dataKey = toCamelCase(attribute.replace(/^data-/, ''));
            element.dataset[dataKey] = value;
        } else {
            dom_1.safeElement.setPrefixedAttribute([safevalues_1.safeAttrPrefix(templateObject_1 || (templateObject_1 = __makeTemplateObject(["aria-"], ["aria-"]))), safevalues_1.safeAttrPrefix(templateObject_2 || (templateObject_2 = __makeTemplateObject(["role"], ["role"])))], element, attribute, value);
        }
    };
    return MDCComponent;
}();
exports.MDCComponent = MDCComponent;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCComponent;
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./packages/mdc-base/foundation.ts":
/*!*****************************************!*\
  !*** ./packages/mdc-base/foundation.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCFoundation = void 0;
/** MDC Foundation */
var MDCFoundation = /** @class */function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) {
            adapter = {};
        }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an
            // object which exports every CSS class the foundation class needs as a
            // property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an
            // object which exports all semantic strings as constants. e.g. {ARIA_ROLE:
            // 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an
            // object which exports all of its semantic numbers as constants.
            // e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function get() {
            // Classes extending MDCFoundation may choose to implement this getter in
            // order to provide a convenient way of viewing the necessary methods of an
            // adapter. In the future, this could also be used for adapter validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines
        // (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization
        // routines (de-registering events, etc.)
    };
    return MDCFoundation;
}();
exports.MDCFoundation = MDCFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCFoundation;

/***/ }),

/***/ "./packages/mdc-dom/keyboard.ts":
/*!**************************************!*\
  !*** ./packages/mdc-dom/keyboard.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.isNavigationEvent = exports.normalizeKey = exports.KEY = void 0;
/**
 * KEY provides normalized string values for keys.
 */
exports.KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
    ESCAPE: 'Escape',
    TAB: 'Tab'
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(exports.KEY.BACKSPACE);
normalizedKeys.add(exports.KEY.ENTER);
normalizedKeys.add(exports.KEY.SPACEBAR);
normalizedKeys.add(exports.KEY.PAGE_UP);
normalizedKeys.add(exports.KEY.PAGE_DOWN);
normalizedKeys.add(exports.KEY.END);
normalizedKeys.add(exports.KEY.HOME);
normalizedKeys.add(exports.KEY.ARROW_LEFT);
normalizedKeys.add(exports.KEY.ARROW_UP);
normalizedKeys.add(exports.KEY.ARROW_RIGHT);
normalizedKeys.add(exports.KEY.ARROW_DOWN);
normalizedKeys.add(exports.KEY.DELETE);
normalizedKeys.add(exports.KEY.ESCAPE);
normalizedKeys.add(exports.KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, exports.KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, exports.KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, exports.KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, exports.KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, exports.KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, exports.KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, exports.KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, exports.KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, exports.KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, exports.KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, exports.KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, exports.KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, exports.KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, exports.KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(exports.KEY.PAGE_UP);
navigationKeys.add(exports.KEY.PAGE_DOWN);
navigationKeys.add(exports.KEY.END);
navigationKeys.add(exports.KEY.HOME);
navigationKeys.add(exports.KEY.ARROW_LEFT);
navigationKeys.add(exports.KEY.ARROW_UP);
navigationKeys.add(exports.KEY.ARROW_RIGHT);
navigationKeys.add(exports.KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) {
        return key;
    }
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
        return mappedKey;
    }
    return exports.KEY.UNKNOWN;
}
exports.normalizeKey = normalizeKey;
/**
 * isNavigationEvent returns whether the event is a navigation event
 */
function isNavigationEvent(evt) {
    return navigationKeys.has(normalizeKey(evt));
}
exports.isNavigationEvent = isNavigationEvent;

/***/ }),

/***/ "./packages/mdc-tooltip/adapter.ts":
/*!*****************************************!*\
  !*** ./packages/mdc-tooltip/adapter.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });

/***/ }),

/***/ "./packages/mdc-tooltip/component.ts":
/*!*******************************************!*\
  !*** ./packages/mdc-tooltip/component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCTooltip = void 0;
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var safevalues_1 = __webpack_require__(/*! safevalues */ "./node_modules/safevalues/index.js");
var dom_1 = __webpack_require__(/*! safevalues/dom */ "./node_modules/safevalues/dom/index.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-tooltip/constants.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-tooltip/foundation.ts");
var ARIA_ATTR_PREFIX = [safevalues_1.safeAttrPrefix(templateObject_1 || (templateObject_1 = __makeTemplateObject(["aria-"], ["aria-"])))];
/** MDC Tooltip */
var MDCTooltip = /** @class */function (_super) {
    __extends(MDCTooltip, _super);
    function MDCTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTooltip.attachTo = function (root) {
        return new MDCTooltip(root);
    };
    MDCTooltip.prototype.initialize = function () {
        var tooltipId = this.root.getAttribute('id');
        if (!tooltipId) {
            throw new Error('MDCTooltip: Tooltip component must have an id.');
        }
        var anchorElem = document.querySelector("[data-tooltip-id=\"" + tooltipId + "\"]") || document.querySelector("[aria-describedby=\"" + tooltipId + "\"]");
        if (!anchorElem) {
            throw new Error('MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id].');
        }
        this.anchorElem = anchorElem;
    };
    MDCTooltip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.isTooltipRich = this.foundation.isRich();
        this.isTooltipPersistent = this.foundation.isPersistent();
        this.handleMouseEnter = function () {
            _this.foundation.handleAnchorMouseEnter();
        };
        this.handleFocus = function (evt) {
            _this.foundation.handleAnchorFocus(evt);
        };
        this.handleMouseLeave = function () {
            _this.foundation.handleAnchorMouseLeave();
        };
        this.handleTransitionEnd = function () {
            _this.foundation.handleTransitionEnd();
        };
        this.handleClick = function () {
            _this.foundation.handleAnchorClick();
        };
        this.handleTouchstart = function () {
            _this.foundation.handleAnchorTouchstart();
        };
        this.handleTouchend = function () {
            _this.foundation.handleAnchorTouchend();
        };
        if (this.isTooltipRich && this.isTooltipPersistent) {
            this.anchorElem.addEventListener('click', this.handleClick);
        } else {
            this.anchorElem.addEventListener('mouseenter', this.handleMouseEnter);
            // TODO(b/157075286): Listening for a 'focus' event is too broad.
            this.anchorElem.addEventListener('focus', this.handleFocus);
            this.anchorElem.addEventListener('mouseleave', this.handleMouseLeave);
            this.anchorElem.addEventListener('touchstart', this.handleTouchstart);
            this.anchorElem.addEventListener('touchend', this.handleTouchend);
        }
        this.listen('transitionend', this.handleTransitionEnd);
    };
    MDCTooltip.prototype.destroy = function () {
        if (this.anchorElem) {
            if (this.isTooltipRich && this.isTooltipPersistent) {
                this.anchorElem.removeEventListener('click', this.handleClick);
            } else {
                this.anchorElem.removeEventListener('mouseenter', this.handleMouseEnter);
                this.anchorElem.removeEventListener('focus', this.handleFocus);
                this.anchorElem.removeEventListener('mouseleave', this.handleMouseLeave);
                this.anchorElem.removeEventListener('touchstart', this.handleTouchstart);
                this.anchorElem.removeEventListener('touchend', this.handleTouchend);
            }
        }
        this.unlisten('transitionend', this.handleTransitionEnd);
        _super.prototype.destroy.call(this);
    };
    MDCTooltip.prototype.setTooltipPosition = function (position) {
        this.foundation.setTooltipPosition(position);
    };
    MDCTooltip.prototype.setAnchorBoundaryType = function (type) {
        this.foundation.setAnchorBoundaryType(type);
    };
    MDCTooltip.prototype.setShowDelay = function (delayMs) {
        this.foundation.setShowDelay(delayMs);
    };
    MDCTooltip.prototype.setHideDelay = function (delayMs) {
        this.foundation.setHideDelay(delayMs);
    };
    MDCTooltip.prototype.hide = function () {
        this.foundation.hide();
    };
    MDCTooltip.prototype.isShown = function () {
        return this.foundation.isShown();
    };
    /**
     * Method that allows user to specify additional elements that should have a
     * scroll event listener attached to it. This should be used in instances
     * where the anchor element is placed inside a scrollable container (that is
     * not the body element), and will ensure that the tooltip will stay attached
     * to the anchor on scroll.
     */
    MDCTooltip.prototype.attachScrollHandler = function (addEventListenerFn) {
        this.foundation.attachScrollHandler(addEventListenerFn);
    };
    /**
     * Must be used in conjunction with #attachScrollHandler. Removes the scroll
     * event handler from elements on the page.
     */
    MDCTooltip.prototype.removeScrollHandler = function (removeEventHandlerFn) {
        this.foundation.removeScrollHandler(removeEventHandlerFn);
    };
    MDCTooltip.prototype.getDefaultFoundation = function () {
        var _this = this;
        var adapter = {
            getAttribute: function getAttribute(attr) {
                return _this.root.getAttribute(attr);
            },
            setAttribute: function setAttribute(attr, value) {
                dom_1.safeElement.setPrefixedAttribute(ARIA_ATTR_PREFIX, _this.root, attr, value);
            },
            removeAttribute: function removeAttribute(attr) {
                _this.root.removeAttribute(attr);
            },
            addClass: function addClass(className) {
                _this.root.classList.add(className);
            },
            hasClass: function hasClass(className) {
                return _this.root.classList.contains(className);
            },
            removeClass: function removeClass(className) {
                _this.root.classList.remove(className);
            },
            getComputedStyleProperty: function getComputedStyleProperty(propertyName) {
                return window.getComputedStyle(_this.root).getPropertyValue(propertyName);
            },
            setStyleProperty: function setStyleProperty(propertyName, value) {
                _this.root.style.setProperty(propertyName, value);
            },
            setSurfaceAnimationStyleProperty: function setSurfaceAnimationStyleProperty(propertyName, value) {
                var surface = _this.root.querySelector("." + constants_1.CssClasses.SURFACE_ANIMATION);
                surface === null || surface === void 0 ? void 0 : surface.style.setProperty(propertyName, value);
            },
            getViewportWidth: function getViewportWidth() {
                return window.innerWidth;
            },
            getViewportHeight: function getViewportHeight() {
                return window.innerHeight;
            },
            getTooltipSize: function getTooltipSize() {
                return { width: _this.root.offsetWidth, height: _this.root.offsetHeight };
            },
            getAnchorBoundingRect: function getAnchorBoundingRect() {
                return _this.anchorElem ? _this.anchorElem.getBoundingClientRect() : null;
            },
            getParentBoundingRect: function getParentBoundingRect() {
                var _a, _b;
                return (_b = (_a = _this.root.parentElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : null;
            },
            getAnchorAttribute: function getAnchorAttribute(attr) {
                return _this.anchorElem ? _this.anchorElem.getAttribute(attr) : null;
            },
            setAnchorAttribute: function setAnchorAttribute(attr, value) {
                if (_this.anchorElem) {
                    dom_1.safeElement.setPrefixedAttribute(ARIA_ATTR_PREFIX, _this.anchorElem, attr, value);
                }
            },
            isRTL: function isRTL() {
                return getComputedStyle(_this.root).direction === 'rtl';
            },
            anchorContainsElement: function anchorContainsElement(element) {
                var _a;
                return !!((_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.contains(element));
            },
            tooltipContainsElement: function tooltipContainsElement(element) {
                return _this.root.contains(element);
            },
            focusAnchorElement: function focusAnchorElement() {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.focus();
            },
            registerEventHandler: function registerEventHandler(evt, handler) {
                if (_this.root instanceof HTMLElement) {
                    _this.root.addEventListener(evt, handler);
                }
            },
            deregisterEventHandler: function deregisterEventHandler(evt, handler) {
                if (_this.root instanceof HTMLElement) {
                    _this.root.removeEventListener(evt, handler);
                }
            },
            registerAnchorEventHandler: function registerAnchorEventHandler(evt, handler) {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.addEventListener(evt, handler);
            },
            deregisterAnchorEventHandler: function deregisterAnchorEventHandler(evt, handler) {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.removeEventListener(evt, handler);
            },
            registerDocumentEventHandler: function registerDocumentEventHandler(evt, handler) {
                document.body.addEventListener(evt, handler);
            },
            deregisterDocumentEventHandler: function deregisterDocumentEventHandler(evt, handler) {
                document.body.removeEventListener(evt, handler);
            },
            registerWindowEventHandler: function registerWindowEventHandler(evt, handler) {
                window.addEventListener(evt, handler);
            },
            deregisterWindowEventHandler: function deregisterWindowEventHandler(evt, handler) {
                window.removeEventListener(evt, handler);
            },
            notifyHidden: function notifyHidden() {
                _this.emit(constants_1.events.HIDDEN, {});
            },
            notifyShown: function notifyShown() {
                _this.emit(constants_1.events.SHOWN, {});
            },
            getTooltipCaretBoundingRect: function getTooltipCaretBoundingRect() {
                var caret = _this.root.querySelector("." + constants_1.CssClasses.TOOLTIP_CARET_TOP);
                if (!caret) {
                    return null;
                }
                return caret.getBoundingClientRect();
            },
            setTooltipCaretStyle: function setTooltipCaretStyle(propertyName, value) {
                var topCaret = _this.root.querySelector("." + constants_1.CssClasses.TOOLTIP_CARET_TOP);
                var bottomCaret = _this.root.querySelector("." + constants_1.CssClasses.TOOLTIP_CARET_BOTTOM);
                if (!topCaret || !bottomCaret) {
                    return;
                }
                topCaret.style.setProperty(propertyName, value);
                bottomCaret.style.setProperty(propertyName, value);
            },
            clearTooltipCaretStyles: function clearTooltipCaretStyles() {
                var topCaret = _this.root.querySelector("." + constants_1.CssClasses.TOOLTIP_CARET_TOP);
                var bottomCaret = _this.root.querySelector("." + constants_1.CssClasses.TOOLTIP_CARET_BOTTOM);
                if (!topCaret || !bottomCaret) {
                    return;
                }
                topCaret.removeAttribute('style');
                bottomCaret.removeAttribute('style');
            },
            getActiveElement: function getActiveElement() {
                return document.activeElement;
            },
            isInstanceOfElement: function isInstanceOfElement(eventTarget) {
                return eventTarget instanceof Element;
            }
        };
        //tslint:enable:object-literal-sort-keys
        return new foundation_1.MDCTooltipFoundation(adapter);
    };
    return MDCTooltip;
}(component_1.MDCComponent);
exports.MDCTooltip = MDCTooltip;
var templateObject_1;

/***/ }),

/***/ "./packages/mdc-tooltip/constants.ts":
/*!*******************************************!*\
  !*** ./packages/mdc-tooltip/constants.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.XPositionWithCaret = exports.YPositionWithCaret = exports.PositionWithCaret = exports.strings = exports.YPosition = exports.AnchorBoundaryType = exports.XPosition = exports.events = exports.attributes = exports.numbers = exports.CssClasses = void 0;
var CssClasses;
(function (CssClasses) {
    CssClasses["RICH"] = "mdc-tooltip--rich";
    CssClasses["SHOWN"] = "mdc-tooltip--shown";
    CssClasses["SHOWING"] = "mdc-tooltip--showing";
    CssClasses["SHOWING_TRANSITION"] = "mdc-tooltip--showing-transition";
    CssClasses["HIDE"] = "mdc-tooltip--hide";
    CssClasses["HIDE_TRANSITION"] = "mdc-tooltip--hide-transition";
    CssClasses["MULTILINE_TOOLTIP"] = "mdc-tooltip--multiline";
    CssClasses["SURFACE"] = "mdc-tooltip__surface";
    CssClasses["SURFACE_ANIMATION"] = "mdc-tooltip__surface-animation";
    CssClasses["TOOLTIP_CARET_TOP"] = "mdc-tooltip__caret-surface-top";
    CssClasses["TOOLTIP_CARET_BOTTOM"] = "mdc-tooltip__caret-surface-bottom";
})(CssClasses || (CssClasses = {}));
exports.CssClasses = CssClasses;
var numbers = {
    BOUNDED_ANCHOR_GAP: 4,
    UNBOUNDED_ANCHOR_GAP: 8,
    MIN_VIEWPORT_TOOLTIP_THRESHOLD: 8,
    HIDE_DELAY_MS: 600,
    SHOW_DELAY_MS: 500,
    // LINT.IfChange(tooltip-dimensions)
    MIN_WIDTH: 40,
    MIN_HEIGHT: 24,
    MAX_WIDTH: 200,
    // LINT.ThenChange(_tooltip.scss:tooltip-dimensions)
    CARET_INDENTATION: 24,
    // LINT.IfChange(tooltip-anim-scale)
    ANIMATION_SCALE: 0.8,
    // LINT.ThenChange(_tooltip.scss:tooltip-anim-scale)
    // LINT.IfChange(rich-tooltip-dimensions)
    RICH_MAX_WIDTH: 320
};
exports.numbers = numbers;
var attributes = {
    ARIA_EXPANDED: 'aria-expanded',
    ARIA_HASPOPUP: 'aria-haspopup',
    PERSISTENT: 'data-mdc-tooltip-persistent',
    SCROLLABLE_ANCESTOR: 'tooltip-scrollable-ancestor',
    HAS_CARET: 'data-mdc-tooltip-has-caret'
};
exports.attributes = attributes;
var events = {
    HIDDEN: 'MDCTooltip:hidden',
    SHOWN: 'MDCTooltip:shown'
};
exports.events = events;
/** Enum for possible tooltip positioning relative to its anchor element. */
var XPosition;
(function (XPosition) {
    XPosition[XPosition["DETECTED"] = 0] = "DETECTED";
    XPosition[XPosition["START"] = 1] = "START";
    // Note: CENTER is not valid for rich tooltips.
    XPosition[XPosition["CENTER"] = 2] = "CENTER";
    XPosition[XPosition["END"] = 3] = "END";
    // SIDE_XXX positioning is only valid for plain tooltips.
    XPosition[XPosition["SIDE_START"] = 4] = "SIDE_START";
    XPosition[XPosition["SIDE_END"] = 5] = "SIDE_END";
})(XPosition || (XPosition = {}));
exports.XPosition = XPosition;
var YPosition;
(function (YPosition) {
    YPosition[YPosition["DETECTED"] = 0] = "DETECTED";
    YPosition[YPosition["ABOVE"] = 1] = "ABOVE";
    YPosition[YPosition["BELOW"] = 2] = "BELOW";
    // SIDE positioning is only valid for plain tooltips with either SIDE_START or
    // SIDE_END x positioning.
    YPosition[YPosition["SIDE"] = 3] = "SIDE";
})(YPosition || (YPosition = {}));
exports.YPosition = YPosition;
/**
 * Enum for possible anchor boundary types. This determines the gap between the
 * bottom of the anchor and the tooltip element.
 * Bounded anchors have an identifiable boundary (e.g. buttons).
 * Unbounded anchors don't have a visually declared boundary (e.g. plain text).
 */
var AnchorBoundaryType;
(function (AnchorBoundaryType) {
    AnchorBoundaryType[AnchorBoundaryType["BOUNDED"] = 0] = "BOUNDED";
    AnchorBoundaryType[AnchorBoundaryType["UNBOUNDED"] = 1] = "UNBOUNDED";
})(AnchorBoundaryType || (AnchorBoundaryType = {}));
exports.AnchorBoundaryType = AnchorBoundaryType;
var strings = {
    LEFT: 'left',
    RIGHT: 'right',
    CENTER: 'center',
    TOP: 'top',
    BOTTOM: 'bottom'
};
exports.strings = strings;
/**
 * Enum for possible positions of a tooltip with caret (this specifies the
 * positioning of the tooltip relative to the anchor -- the position of the
 * caret will follow that of the tooltip). This can NOT be combined with the
 * above X/YPosition options. Naming for the enums follows: (vertical
 * placement)_(horizontal placement).
 */
var PositionWithCaret;
(function (PositionWithCaret) {
    PositionWithCaret[PositionWithCaret["DETECTED"] = 0] = "DETECTED";
    PositionWithCaret[PositionWithCaret["ABOVE_START"] = 1] = "ABOVE_START";
    PositionWithCaret[PositionWithCaret["ABOVE_CENTER"] = 2] = "ABOVE_CENTER";
    PositionWithCaret[PositionWithCaret["ABOVE_END"] = 3] = "ABOVE_END";
    PositionWithCaret[PositionWithCaret["TOP_SIDE_START"] = 4] = "TOP_SIDE_START";
    PositionWithCaret[PositionWithCaret["CENTER_SIDE_START"] = 5] = "CENTER_SIDE_START";
    PositionWithCaret[PositionWithCaret["BOTTOM_SIDE_START"] = 6] = "BOTTOM_SIDE_START";
    PositionWithCaret[PositionWithCaret["TOP_SIDE_END"] = 7] = "TOP_SIDE_END";
    PositionWithCaret[PositionWithCaret["CENTER_SIDE_END"] = 8] = "CENTER_SIDE_END";
    PositionWithCaret[PositionWithCaret["BOTTOM_SIDE_END"] = 9] = "BOTTOM_SIDE_END";
    PositionWithCaret[PositionWithCaret["BELOW_START"] = 10] = "BELOW_START";
    PositionWithCaret[PositionWithCaret["BELOW_CENTER"] = 11] = "BELOW_CENTER";
    PositionWithCaret[PositionWithCaret["BELOW_END"] = 12] = "BELOW_END";
})(PositionWithCaret || (PositionWithCaret = {}));
exports.PositionWithCaret = PositionWithCaret;
var YPositionWithCaret;
(function (YPositionWithCaret) {
    YPositionWithCaret[YPositionWithCaret["ABOVE"] = 1] = "ABOVE";
    YPositionWithCaret[YPositionWithCaret["BELOW"] = 2] = "BELOW";
    YPositionWithCaret[YPositionWithCaret["SIDE_TOP"] = 3] = "SIDE_TOP";
    YPositionWithCaret[YPositionWithCaret["SIDE_CENTER"] = 4] = "SIDE_CENTER";
    YPositionWithCaret[YPositionWithCaret["SIDE_BOTTOM"] = 5] = "SIDE_BOTTOM";
})(YPositionWithCaret || (YPositionWithCaret = {}));
exports.YPositionWithCaret = YPositionWithCaret;
var XPositionWithCaret;
(function (XPositionWithCaret) {
    XPositionWithCaret[XPositionWithCaret["START"] = 1] = "START";
    XPositionWithCaret[XPositionWithCaret["CENTER"] = 2] = "CENTER";
    XPositionWithCaret[XPositionWithCaret["END"] = 3] = "END";
    XPositionWithCaret[XPositionWithCaret["SIDE_START"] = 4] = "SIDE_START";
    XPositionWithCaret[XPositionWithCaret["SIDE_END"] = 5] = "SIDE_END";
})(XPositionWithCaret || (XPositionWithCaret = {}));
exports.XPositionWithCaret = XPositionWithCaret;

/***/ }),

/***/ "./packages/mdc-tooltip/foundation.ts":
/*!********************************************!*\
  !*** ./packages/mdc-tooltip/foundation.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = this && this.__values || function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
        to[j] = from[i];
    }return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCTooltipFoundation = void 0;
var animationframe_1 = __webpack_require__(/*! @material/animation/animationframe */ "./packages/mdc-animation/animationframe.ts");
var util_1 = __webpack_require__(/*! @material/animation/util */ "./packages/mdc-animation/util.ts");
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var keyboard_1 = __webpack_require__(/*! @material/dom/keyboard */ "./packages/mdc-dom/keyboard.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-tooltip/constants.ts");
var RICH = constants_1.CssClasses.RICH,
    SHOWN = constants_1.CssClasses.SHOWN,
    SHOWING = constants_1.CssClasses.SHOWING,
    SHOWING_TRANSITION = constants_1.CssClasses.SHOWING_TRANSITION,
    HIDE = constants_1.CssClasses.HIDE,
    HIDE_TRANSITION = constants_1.CssClasses.HIDE_TRANSITION,
    MULTILINE_TOOLTIP = constants_1.CssClasses.MULTILINE_TOOLTIP;
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["POLL_ANCHOR"] = "poll_anchor";
})(AnimationKeys || (AnimationKeys = {}));
// Accessing `window` without a `typeof` check will throw on Node environments.
var HAS_WINDOW = typeof window !== 'undefined';
/** MDC Tooltip Foundation */
var MDCTooltipFoundation = /** @class */function (_super) {
    __extends(MDCTooltipFoundation, _super);
    function MDCTooltipFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTooltipFoundation.defaultAdapter), adapter)) || this;
        _this.tooltipShown = false;
        _this.anchorGap = constants_1.numbers.BOUNDED_ANCHOR_GAP;
        _this.xTooltipPos = constants_1.XPosition.DETECTED;
        _this.yTooltipPos = constants_1.YPosition.DETECTED;
        _this.tooltipPositionWithCaret = constants_1.PositionWithCaret.DETECTED;
        // Minimum threshold distance needed between the tooltip and the viewport.
        _this.minViewportTooltipThreshold = constants_1.numbers.MIN_VIEWPORT_TOOLTIP_THRESHOLD;
        _this.hideDelayMs = constants_1.numbers.HIDE_DELAY_MS;
        _this.showDelayMs = constants_1.numbers.SHOW_DELAY_MS;
        _this.anchorRect = null;
        _this.parentRect = null;
        _this.frameId = null;
        _this.hideTimeout = null;
        _this.showTimeout = null;
        _this.addAncestorScrollEventListeners = new Array();
        _this.removeAncestorScrollEventListeners = new Array();
        _this.animFrame = new animationframe_1.AnimationFrame();
        _this.anchorBlurHandler = function (evt) {
            _this.handleAnchorBlur(evt);
        };
        _this.documentClickHandler = function (evt) {
            _this.handleDocumentClick(evt);
        };
        _this.documentKeydownHandler = function (evt) {
            _this.handleKeydown(evt);
        };
        _this.tooltipMouseEnterHandler = function () {
            _this.handleTooltipMouseEnter();
        };
        _this.tooltipMouseLeaveHandler = function () {
            _this.handleTooltipMouseLeave();
        };
        _this.richTooltipFocusOutHandler = function (evt) {
            _this.handleRichTooltipFocusOut(evt);
        };
        _this.windowScrollHandler = function () {
            _this.handleWindowScrollEvent();
        };
        _this.windowResizeHandler = function () {
            _this.handleWindowChangeEvent();
        };
        return _this;
    }
    Object.defineProperty(MDCTooltipFoundation, "defaultAdapter", {
        get: function get() {
            return {
                getAttribute: function getAttribute() {
                    return null;
                },
                setAttribute: function setAttribute() {
                    return undefined;
                },
                removeAttribute: function removeAttribute() {
                    return undefined;
                },
                addClass: function addClass() {
                    return undefined;
                },
                hasClass: function hasClass() {
                    return false;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                getComputedStyleProperty: function getComputedStyleProperty() {
                    return '';
                },
                setStyleProperty: function setStyleProperty() {
                    return undefined;
                },
                setSurfaceAnimationStyleProperty: function setSurfaceAnimationStyleProperty() {
                    return undefined;
                },
                getViewportWidth: function getViewportWidth() {
                    return 0;
                },
                getViewportHeight: function getViewportHeight() {
                    return 0;
                },
                getTooltipSize: function getTooltipSize() {
                    return { width: 0, height: 0 };
                },
                getAnchorBoundingRect: function getAnchorBoundingRect() {
                    return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
                },
                getParentBoundingRect: function getParentBoundingRect() {
                    return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
                },
                getAnchorAttribute: function getAnchorAttribute() {
                    return null;
                },
                setAnchorAttribute: function setAnchorAttribute() {
                    return null;
                },
                isRTL: function isRTL() {
                    return false;
                },
                anchorContainsElement: function anchorContainsElement() {
                    return false;
                },
                tooltipContainsElement: function tooltipContainsElement() {
                    return false;
                },
                focusAnchorElement: function focusAnchorElement() {
                    return undefined;
                },
                registerEventHandler: function registerEventHandler() {
                    return undefined;
                },
                deregisterEventHandler: function deregisterEventHandler() {
                    return undefined;
                },
                registerAnchorEventHandler: function registerAnchorEventHandler() {
                    return undefined;
                },
                deregisterAnchorEventHandler: function deregisterAnchorEventHandler() {
                    return undefined;
                },
                registerDocumentEventHandler: function registerDocumentEventHandler() {
                    return undefined;
                },
                deregisterDocumentEventHandler: function deregisterDocumentEventHandler() {
                    return undefined;
                },
                registerWindowEventHandler: function registerWindowEventHandler() {
                    return undefined;
                },
                deregisterWindowEventHandler: function deregisterWindowEventHandler() {
                    return undefined;
                },
                notifyHidden: function notifyHidden() {
                    return undefined;
                },
                notifyShown: function notifyShown() {
                    return undefined;
                },
                getTooltipCaretBoundingRect: function getTooltipCaretBoundingRect() {
                    return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
                },
                setTooltipCaretStyle: function setTooltipCaretStyle() {
                    return undefined;
                },
                clearTooltipCaretStyles: function clearTooltipCaretStyles() {
                    return undefined;
                },
                getActiveElement: function getActiveElement() {
                    return null;
                },
                isInstanceOfElement: function isInstanceOfElement() {
                    return false;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCTooltipFoundation.prototype.init = function () {
        this.richTooltip = this.adapter.hasClass(RICH);
        this.persistentTooltip = this.adapter.getAttribute(constants_1.attributes.PERSISTENT) === 'true';
        this.interactiveTooltip = !!this.adapter.getAnchorAttribute(constants_1.attributes.ARIA_EXPANDED) && this.adapter.getAnchorAttribute(constants_1.attributes.ARIA_HASPOPUP) === 'dialog';
        this.hasCaret = this.richTooltip && this.adapter.getAttribute(constants_1.attributes.HAS_CARET) === 'true';
    };
    MDCTooltipFoundation.prototype.isShown = function () {
        return this.tooltipShown;
    };
    MDCTooltipFoundation.prototype.isRich = function () {
        return this.richTooltip;
    };
    MDCTooltipFoundation.prototype.isPersistent = function () {
        return this.persistentTooltip;
    };
    MDCTooltipFoundation.prototype.handleAnchorMouseEnter = function () {
        var _this = this;
        if (this.tooltipShown) {
            // Covers the instance where a user hovers over the anchor to reveal the
            // tooltip, and then quickly navigates away and then back to the anchor.
            // The tooltip should stay visible without animating out and then back in
            // again.
            this.show();
        } else {
            // clearHideTimeout here since handleAnchorMouseLeave sets a hideTimeout
            // and that can execute before the showTimeout executes, resulting in hide
            // being called and the showTimeout set below to be cleared.
            this.clearHideTimeout();
            this.showTimeout = setTimeout(function () {
                _this.show();
            }, this.showDelayMs);
        }
    };
    MDCTooltipFoundation.prototype.handleAnchorTouchstart = function () {
        var _this = this;
        this.showTimeout = setTimeout(function () {
            _this.show();
        }, this.showDelayMs);
        // Prevent a context menu from appearing if user is long-pressing on a
        // tooltip anchor.
        this.adapter.registerWindowEventHandler('contextmenu', this.preventContextMenuOnLongTouch);
    };
    MDCTooltipFoundation.prototype.preventContextMenuOnLongTouch = function (evt) {
        evt.preventDefault();
    };
    /**
     * Helper methods for determining if the event target or related target
     * is contained inside the tooltip or the anchor. These methods are used to
     * determing when a tooltip should be closed of left open on blur and click
     * events.
     */
    MDCTooltipFoundation.prototype.tooltipContainsRelatedTargetElement = function (target) {
        return this.adapter.isInstanceOfElement(target) && this.adapter.tooltipContainsElement(target);
    };
    MDCTooltipFoundation.prototype.anchorOrTooltipContainsTargetElement = function (target) {
        return this.adapter.isInstanceOfElement(target) && (this.adapter.tooltipContainsElement(target) || this.adapter.anchorContainsElement(target));
    };
    MDCTooltipFoundation.prototype.handleAnchorTouchend = function () {
        this.clearShowTimeout();
        // Only remove the 'contextmenu' listener if the tooltip is not shown. When
        // the tooltip *is* shown, listener is removed in the close method.
        if (!this.isShown()) {
            this.adapter.deregisterWindowEventHandler('contextmenu', this.preventContextMenuOnLongTouch);
        }
    };
    MDCTooltipFoundation.prototype.handleAnchorFocus = function (evt) {
        // TODO(b/157075286): Need to add some way to distinguish keyboard
        // navigation focus events from other focus events, and only show the
        // tooltip on the former of these events.
        var _this = this;
        // Do not show tooltip if the previous focus was on a tooltip element. This
        // occurs when a rich tooltip is closed and focus is restored to the anchor
        // or when user tab-navigates back into the anchor from the rich tooltip.
        if (this.tooltipContainsRelatedTargetElement(evt.relatedTarget)) {
            return;
        }
        this.showTimeout = setTimeout(function () {
            _this.show();
        }, this.showDelayMs);
    };
    MDCTooltipFoundation.prototype.handleAnchorMouseLeave = function () {
        var _this = this;
        this.clearShowTimeout();
        this.hideTimeout = setTimeout(function () {
            _this.hide();
        }, this.hideDelayMs);
    };
    MDCTooltipFoundation.prototype.handleAnchorClick = function () {
        if (this.tooltipShown) {
            this.hide();
        } else {
            this.show();
        }
    };
    MDCTooltipFoundation.prototype.handleDocumentClick = function (evt) {
        // For persistent rich tooltips, we will not hide if:
        // - The click target is within the anchor element. Otherwise, both
        //   the anchor element's click handler and this handler will handle the
        //   click (due to event propagation), resulting in a shown tooltip
        //   being immediately hidden if the tooltip was initially hidden.
        // - The click target is within the tooltip element, since clicks
        //   on the tooltip do not close the tooltip.
        if (this.richTooltip && this.persistentTooltip && this.anchorOrTooltipContainsTargetElement(evt.target)) {
            return;
        }
        // Hide the tooltip immediately on click.
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleKeydown = function (evt) {
        // Hide the tooltip immediately on ESC key.
        var key = keyboard_1.normalizeKey(evt);
        if (key === keyboard_1.KEY.ESCAPE) {
            var activeElement = this.adapter.getActiveElement();
            var tooltipContainsActiveElement = false;
            if (this.adapter.isInstanceOfElement(activeElement)) {
                tooltipContainsActiveElement = this.adapter.tooltipContainsElement(activeElement);
            }
            if (tooltipContainsActiveElement) {
                this.adapter.focusAnchorElement();
            }
            this.hide();
            // prevent event from bubbling
            evt.stopPropagation();
            return false;
        }
        return true;
    };
    MDCTooltipFoundation.prototype.handleAnchorBlur = function (evt) {
        if (this.richTooltip) {
            if (evt.relatedTarget === null || this.tooltipContainsRelatedTargetElement(evt.relatedTarget)) {
                // There are two scenarios where a blur event on a rich tooltip anchor
                // should leave the tooltip open.
                // 1. When the `evt.relatedTarget` contains the tooltip element. This
                // indicates that focus has moved off the anchor and onto the tooltip.
                // 2. When the `evt.relatedTarget` is null. This occurs because focus is
                // moving to an element that is not focusable. This should only occur in
                // instances of a screen reader in browse mode/linear navigation mode.
                // We allow linear navigation over the contents of all rich tooltips to
                // enable clients to hear a line-by-line reading of the tooltip's
                // content.
                return;
            }
        }
        // Hide tooltip immediately on focus change.
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleTooltipMouseEnter = function () {
        this.show();
    };
    MDCTooltipFoundation.prototype.handleTooltipMouseLeave = function () {
        var _this = this;
        this.clearShowTimeout();
        this.hideTimeout = setTimeout(function () {
            _this.hide();
        }, this.hideDelayMs);
    };
    MDCTooltipFoundation.prototype.handleRichTooltipFocusOut = function (evt) {
        // If the focus is still within the anchor or the tooltip, do not hide the
        // tooltip.
        if (this.anchorOrTooltipContainsTargetElement(evt.relatedTarget)) {
            return;
        }
        if (evt.relatedTarget === null && this.interactiveTooltip) {
            // If evt.relatedTarget is null, it is because focus is moving to an
            // element that is not focusable. This should only occur in instances
            // of a screen reader in browse mode/linear navigation mode. If the
            // tooltip is interactive (and so the entire content is not read by
            // the screen reader upon the tooltip being opened), we want to allow
            // users to read the content of the tooltip (and not just the focusable
            // elements).
            return;
        }
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleWindowScrollEvent = function () {
        if (this.persistentTooltip) {
            // Persistent tooltips remain visible on user scroll, call appropriate
            // handler to ensure the tooltip remains pinned to the anchor on page
            // scroll.
            this.handleWindowChangeEvent();
            return;
        }
        this.hide();
    };
    /**
     * On window resize or scroll, check the anchor position and size and
     * repostion tooltip if necessary.
     */
    MDCTooltipFoundation.prototype.handleWindowChangeEvent = function () {
        var _this = this;
        // Since scroll and resize events can fire at a high rate, we throttle
        // the potential re-positioning of tooltip component using
        // requestAnimationFrame.
        this.animFrame.request(AnimationKeys.POLL_ANCHOR, function () {
            _this.repositionTooltipOnAnchorMove();
        });
    };
    MDCTooltipFoundation.prototype.show = function () {
        var e_1, _a;
        var _this = this;
        this.clearHideTimeout();
        this.clearShowTimeout();
        if (this.tooltipShown) {
            return;
        }
        this.tooltipShown = true;
        this.adapter.removeAttribute('aria-hidden');
        if (this.richTooltip) {
            if (this.interactiveTooltip) {
                this.adapter.setAnchorAttribute('aria-expanded', 'true');
            }
            this.adapter.registerEventHandler('focusout', this.richTooltipFocusOutHandler);
        }
        if (!this.persistentTooltip) {
            this.adapter.registerEventHandler('mouseenter', this.tooltipMouseEnterHandler);
            this.adapter.registerEventHandler('mouseleave', this.tooltipMouseLeaveHandler);
        }
        this.adapter.removeClass(HIDE);
        this.adapter.addClass(SHOWING);
        if (this.isTooltipMultiline() && !this.richTooltip) {
            this.adapter.addClass(MULTILINE_TOOLTIP);
        }
        this.anchorRect = this.adapter.getAnchorBoundingRect();
        this.parentRect = this.adapter.getParentBoundingRect();
        this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip();
        this.adapter.registerAnchorEventHandler('blur', this.anchorBlurHandler);
        this.adapter.registerDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.registerDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.registerWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        try {
            // Register any additional scroll handlers
            for (var _b = __values(this.addAncestorScrollEventListeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fn = _c.value;
                fn();
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
        this.frameId = requestAnimationFrame(function () {
            _this.clearAllAnimationClasses();
            _this.adapter.addClass(SHOWN);
            _this.adapter.addClass(SHOWING_TRANSITION);
        });
    };
    MDCTooltipFoundation.prototype.hide = function () {
        var e_2, _a;
        this.clearHideTimeout();
        this.clearShowTimeout();
        if (!this.tooltipShown) {
            return;
        }
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
        }
        this.tooltipShown = false;
        this.adapter.setAttribute('aria-hidden', 'true');
        this.adapter.deregisterEventHandler('focusout', this.richTooltipFocusOutHandler);
        if (this.richTooltip) {
            if (this.interactiveTooltip) {
                this.adapter.setAnchorAttribute('aria-expanded', 'false');
            }
        }
        if (!this.persistentTooltip) {
            this.adapter.deregisterEventHandler('mouseenter', this.tooltipMouseEnterHandler);
            this.adapter.deregisterEventHandler('mouseleave', this.tooltipMouseLeaveHandler);
        }
        this.clearAllAnimationClasses();
        this.adapter.addClass(HIDE);
        this.adapter.addClass(HIDE_TRANSITION);
        this.adapter.removeClass(SHOWN);
        this.adapter.deregisterAnchorEventHandler('blur', this.anchorBlurHandler);
        this.adapter.deregisterDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.deregisterDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.deregisterWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('contextmenu', this.preventContextMenuOnLongTouch);
        try {
            // Deregister any additional scroll handlers
            for (var _b = __values(this.removeAncestorScrollEventListeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fn = _c.value;
                fn();
            }
        } catch (e_2_1) {
            e_2 = { error: e_2_1 };
        } finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
                if (e_2) throw e_2.error;
            }
        }
    };
    MDCTooltipFoundation.prototype.handleTransitionEnd = function () {
        var isHidingTooltip = this.adapter.hasClass(HIDE);
        this.adapter.removeClass(SHOWING);
        this.adapter.removeClass(SHOWING_TRANSITION);
        this.adapter.removeClass(HIDE);
        this.adapter.removeClass(HIDE_TRANSITION);
        // If handleTransitionEnd is called after hiding the tooltip, the tooltip
        // will have the HIDE class (before calling the adapter removeClass method).
        // If tooltip is now hidden, send a notification that the animation has
        // completed and the tooltip is no longer visible.
        // We don't send a notification of the animation completing if a showTimeout
        // value is set -- this happens when a user triggers a tooltip to be shown
        // while that tooltip is fading. Once this hide transition is completed,
        // that same tooltip will be re-shown.
        if (isHidingTooltip && this.showTimeout === null) {
            this.adapter.notifyHidden();
        } else if (!isHidingTooltip) {
            this.adapter.notifyShown();
        }
    };
    MDCTooltipFoundation.prototype.clearAllAnimationClasses = function () {
        this.adapter.removeClass(SHOWING_TRANSITION);
        this.adapter.removeClass(HIDE_TRANSITION);
    };
    MDCTooltipFoundation.prototype.setTooltipPosition = function (position) {
        var xPos = position.xPos,
            yPos = position.yPos,
            withCaretPos = position.withCaretPos;
        if (this.hasCaret && withCaretPos) {
            this.tooltipPositionWithCaret = withCaretPos;
            return;
        }
        if (xPos) {
            this.xTooltipPos = xPos;
        }
        if (yPos) {
            this.yTooltipPos = yPos;
        }
    };
    MDCTooltipFoundation.prototype.setAnchorBoundaryType = function (type) {
        if (type === constants_1.AnchorBoundaryType.UNBOUNDED) {
            this.anchorGap = constants_1.numbers.UNBOUNDED_ANCHOR_GAP;
        } else {
            this.anchorGap = constants_1.numbers.BOUNDED_ANCHOR_GAP;
        }
    };
    MDCTooltipFoundation.prototype.setShowDelay = function (delayMs) {
        this.showDelayMs = delayMs;
    };
    MDCTooltipFoundation.prototype.setHideDelay = function (delayMs) {
        this.hideDelayMs = delayMs;
    };
    MDCTooltipFoundation.prototype.isTooltipMultiline = function () {
        var tooltipSize = this.adapter.getTooltipSize();
        return tooltipSize.height > constants_1.numbers.MIN_HEIGHT && tooltipSize.width >= constants_1.numbers.MAX_WIDTH;
    };
    MDCTooltipFoundation.prototype.positionPlainTooltip = function () {
        // A plain tooltip has `fixed` positioning and is placed as an immediate
        // child of the document body. Its positioning is calculated with respect to
        // the viewport.
        var _a = this.calculateTooltipStyles(this.anchorRect),
            top = _a.top,
            yTransformOrigin = _a.yTransformOrigin,
            left = _a.left,
            xTransformOrigin = _a.xTransformOrigin;
        var transformProperty = HAS_WINDOW ? util_1.getCorrectPropertyName(window, 'transform') : 'transform';
        this.adapter.setSurfaceAnimationStyleProperty(transformProperty + "-origin", xTransformOrigin + " " + yTransformOrigin);
        this.adapter.setStyleProperty('top', top + "px");
        this.adapter.setStyleProperty('left', left + "px");
    };
    MDCTooltipFoundation.prototype.positionRichTooltip = function () {
        // TODO(b/177686782): Remove width setting when max-content is used to style
        // the rich tooltip.
        var _a, _b, _c, _d;
        // Reset rich tooltip positioning/styling so we can get an accurate
        // measurement of the rich tooltip width. Toolip has to be moved to the left
        // to ensure that the parent component does not restrict the size of the
        // tooltip. See b/245915536 for more info.
        this.adapter.setStyleProperty('width', '');
        this.adapter.setStyleProperty('left', "-" + constants_1.numbers.RICH_MAX_WIDTH + "px");
        // getComputedStyleProperty is used instead of getTooltipSize since
        // getTooltipSize returns the offSetWidth, which includes the border and
        // padding. What we need is the width of the tooltip without border and
        // padding.
        var computedWidth = Number(this.adapter.getComputedStyleProperty('width').slice(0, -2));
        var widthNum = isFinite(computedWidth) ? computedWidth : constants_1.numbers.RICH_MAX_WIDTH;
        var viewportWidth = Math.max(this.adapter.getViewportWidth() - 2 * constants_1.numbers.MIN_VIEWPORT_TOOLTIP_THRESHOLD, constants_1.numbers.MIN_WIDTH);
        // Tooltip width is the minimum of the tooltip's computed width (which is
        // dictated by the content inside the tooltip) and the viewport width.
        // See b/261878540 for more info.
        var tooltipWidth = Math.min(viewportWidth, widthNum);
        // When rich tooltips are positioned within their parent containers, the
        // tooltip width might be shrunk if it collides with the edge of the parent
        // container. We set the width of the tooltip to prevent this.
        this.adapter.setStyleProperty('width', tooltipWidth + "px");
        var _e = this.hasCaret ? this.calculateTooltipWithCaretStyles(this.anchorRect) : this.calculateTooltipStyles(this.anchorRect),
            top = _e.top,
            yTransformOrigin = _e.yTransformOrigin,
            left = _e.left,
            xTransformOrigin = _e.xTransformOrigin;
        var transformProperty = HAS_WINDOW ? util_1.getCorrectPropertyName(window, 'transform') : 'transform';
        this.adapter.setSurfaceAnimationStyleProperty(transformProperty + "-origin", xTransformOrigin + " " + yTransformOrigin);
        // A rich tooltip has `absolute` positioning and is placed as a sibling to
        // the anchor element. Its positioning is calculated with respect to the
        // parent element, and so the values need to be adjusted against the parent
        // element.
        var leftAdjustment = left - ((_b = (_a = this.parentRect) === null || _a === void 0 ? void 0 : _a.left) !== null && _b !== void 0 ? _b : 0);
        var topAdjustment = top - ((_d = (_c = this.parentRect) === null || _c === void 0 ? void 0 : _c.top) !== null && _d !== void 0 ? _d : 0);
        this.adapter.setStyleProperty('top', topAdjustment + "px");
        this.adapter.setStyleProperty('left', leftAdjustment + "px");
    };
    /**
     * Calculates the position of the tooltip. A tooltip will be placed
     * beneath the anchor element and aligned either with the 'start'/'end'
     * edge of the anchor element or the 'center'.
     *
     * Tooltip alignment is selected such that the tooltip maintains a
     * threshold distance away from the viewport (defaulting to 'center'
     * alignment). If the placement of the anchor prevents this threshold
     * distance from being maintained, the tooltip is positioned so that it
     * does not collide with the viewport.
     *
     * Users can specify an alignment, however, if this alignment results in
     * the tooltip colliding with the viewport, this specification is
     * overwritten.
     */
    MDCTooltipFoundation.prototype.calculateTooltipStyles = function (anchorRect) {
        if (!anchorRect) {
            return { top: 0, left: 0 };
        }
        var tooltipSize = this.adapter.getTooltipSize();
        var top = this.calculateYTooltipDistance(anchorRect, tooltipSize.height);
        var left = this.calculateXTooltipDistance(anchorRect, tooltipSize.width);
        return {
            top: top.distance,
            yTransformOrigin: top.yTransformOrigin,
            left: left.distance,
            xTransformOrigin: left.xTransformOrigin
        };
    };
    /**
     * Calculates the `left` distance for the tooltip.
     * Returns the distance value and a string indicating the x-axis transform-
     * origin that should be used when animating the tooltip.
     */
    MDCTooltipFoundation.prototype.calculateXTooltipDistance = function (anchorRect, tooltipWidth) {
        var isLTR = !this.adapter.isRTL();
        var startPos, endPos, centerPos, sideStartPos, sideEndPos;
        var startTransformOrigin, endTransformOrigin;
        if (this.richTooltip) {
            startPos = isLTR ? anchorRect.left - tooltipWidth : anchorRect.right;
            endPos = isLTR ? anchorRect.right : anchorRect.left - tooltipWidth;
            startTransformOrigin = isLTR ? constants_1.strings.RIGHT : constants_1.strings.LEFT;
            endTransformOrigin = isLTR ? constants_1.strings.LEFT : constants_1.strings.RIGHT;
        } else {
            startPos = isLTR ? anchorRect.left : anchorRect.right - tooltipWidth;
            endPos = isLTR ? anchorRect.right - tooltipWidth : anchorRect.left;
            centerPos = anchorRect.left + (anchorRect.width - tooltipWidth) / 2;
            var sideLeftAligned = anchorRect.left - (tooltipWidth + this.anchorGap);
            var sideRightAligned = anchorRect.right + this.anchorGap;
            sideStartPos = isLTR ? sideLeftAligned : sideRightAligned;
            sideEndPos = isLTR ? sideRightAligned : sideLeftAligned;
            startTransformOrigin = isLTR ? constants_1.strings.LEFT : constants_1.strings.RIGHT;
            endTransformOrigin = isLTR ? constants_1.strings.RIGHT : constants_1.strings.LEFT;
        }
        // For plain tooltips, centerPos is defined
        var plainTooltipPosOptions = [startPos, centerPos, endPos];
        // Side positioning should only be considered if it is specified by the
        // client.
        if (this.xTooltipPos === constants_1.XPosition.SIDE_START) {
            plainTooltipPosOptions.push(sideStartPos);
        } else if (this.xTooltipPos === constants_1.XPosition.SIDE_END) {
            plainTooltipPosOptions.push(sideEndPos);
        }
        var positionOptions = this.richTooltip ? this.determineValidPositionOptions(startPos, endPos) : this.determineValidPositionOptions.apply(this, __spreadArray([], __read(plainTooltipPosOptions)));
        if (this.xTooltipPos === constants_1.XPosition.START && positionOptions.has(startPos)) {
            return { distance: startPos, xTransformOrigin: startTransformOrigin };
        } else if (this.xTooltipPos === constants_1.XPosition.END && positionOptions.has(endPos)) {
            return { distance: endPos, xTransformOrigin: endTransformOrigin };
        } else if (this.xTooltipPos === constants_1.XPosition.CENTER && positionOptions.has(centerPos)) {
            // This code path is only executed if calculating the distance for plain
            // tooltips. In this instance, centerPos will always be defined, so we can
            // safely assert that the returned value is non-null/undefined.
            return { distance: centerPos, xTransformOrigin: constants_1.strings.CENTER };
        } else if (this.xTooltipPos === constants_1.XPosition.SIDE_START && positionOptions.has(sideStartPos)) {
            // This code path is only executed if calculating the distance for plain
            // tooltips. In this instance, sideStartPos will always be defined, so we
            // can safely assert that the returned value is non-null/undefined.
            return { distance: sideStartPos, xTransformOrigin: endTransformOrigin };
        } else if (this.xTooltipPos === constants_1.XPosition.SIDE_END && positionOptions.has(sideEndPos)) {
            // This code path is only executed if calculating the distance for plain
            // tooltips. In this instance, sideEndPos will always be defined, so we
            // can safely assert that the returned value is non-null/undefined.
            return { distance: sideEndPos, xTransformOrigin: startTransformOrigin };
        }
        // If no user position is supplied, rich tooltips default to end pos, then
        // start position. Plain tooltips default to center, start, then end.
        var possiblePositions = this.richTooltip ? [{ distance: endPos, xTransformOrigin: endTransformOrigin }, { distance: startPos, xTransformOrigin: startTransformOrigin }] : [{ distance: centerPos, xTransformOrigin: constants_1.strings.CENTER }, { distance: startPos, xTransformOrigin: startTransformOrigin }, { distance: endPos, xTransformOrigin: endTransformOrigin }];
        var validPosition = possiblePositions.find(function (_a) {
            var distance = _a.distance;
            return positionOptions.has(distance);
        });
        if (validPosition) {
            return validPosition;
        }
        // Indicates that all potential positions would result in the tooltip
        // colliding with the viewport. This would only occur when the anchor
        // element itself collides with the viewport, or the viewport is very
        // narrow. In this case, we allow the tooltip to be mis-aligned from the
        // anchor element.
        if (anchorRect.left < 0) {
            return {
                distance: this.minViewportTooltipThreshold,
                xTransformOrigin: constants_1.strings.LEFT
            };
        } else {
            var viewportWidth = this.adapter.getViewportWidth();
            var distance = viewportWidth - (tooltipWidth + this.minViewportTooltipThreshold);
            return { distance: distance, xTransformOrigin: constants_1.strings.RIGHT };
        }
    };
    /**
     * Given the values for the horizontal alignments of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all alignments violate the threshold, then the returned Set
     * contains values that keep the tooltip within the viewport.
     */
    MDCTooltipFoundation.prototype.determineValidPositionOptions = function () {
        var e_3, _a;
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        var posWithinThreshold = new Set();
        var posWithinViewport = new Set();
        try {
            for (var positions_1 = __values(positions), positions_1_1 = positions_1.next(); !positions_1_1.done; positions_1_1 = positions_1.next()) {
                var position = positions_1_1.value;
                if (this.positionHonorsViewportThreshold(position)) {
                    posWithinThreshold.add(position);
                } else if (this.positionDoesntCollideWithViewport(position)) {
                    posWithinViewport.add(position);
                }
            }
        } catch (e_3_1) {
            e_3 = { error: e_3_1 };
        } finally {
            try {
                if (positions_1_1 && !positions_1_1.done && (_a = positions_1.return)) _a.call(positions_1);
            } finally {
                if (e_3) throw e_3.error;
            }
        }
        return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
    };
    MDCTooltipFoundation.prototype.positionHonorsViewportThreshold = function (leftPos) {
        var viewportWidth = this.adapter.getViewportWidth();
        var tooltipWidth = this.adapter.getTooltipSize().width;
        return leftPos + tooltipWidth <= viewportWidth - this.minViewportTooltipThreshold && leftPos >= this.minViewportTooltipThreshold;
    };
    MDCTooltipFoundation.prototype.positionDoesntCollideWithViewport = function (leftPos) {
        var viewportWidth = this.adapter.getViewportWidth();
        var tooltipWidth = this.adapter.getTooltipSize().width;
        return leftPos + tooltipWidth <= viewportWidth && leftPos >= 0;
    };
    /**
     * Calculates the `top` distance for the tooltip.
     * Returns the distance value and a string indicating the y-axis transform-
     * origin that should be used when animating the tooltip.
     */
    MDCTooltipFoundation.prototype.calculateYTooltipDistance = function (anchorRect, tooltipHeight) {
        var belowYPos = anchorRect.bottom + this.anchorGap;
        var aboveYPos = anchorRect.top - (this.anchorGap + tooltipHeight);
        var anchorMidpoint = anchorRect.top + anchorRect.height / 2;
        var sideYPos = anchorMidpoint - tooltipHeight / 2;
        var posOptions = [aboveYPos, belowYPos];
        if (this.yTooltipPos === constants_1.YPosition.SIDE) {
            // Side positioning should only be considered if it is specified by the
            // client.
            posOptions.push(sideYPos);
        }
        var yPositionOptions = this.determineValidYPositionOptions.apply(this, __spreadArray([], __read(posOptions)));
        if (this.yTooltipPos === constants_1.YPosition.ABOVE && yPositionOptions.has(aboveYPos)) {
            return { distance: aboveYPos, yTransformOrigin: constants_1.strings.BOTTOM };
        } else if (this.yTooltipPos === constants_1.YPosition.BELOW && yPositionOptions.has(belowYPos)) {
            return { distance: belowYPos, yTransformOrigin: constants_1.strings.TOP };
        } else if (this.yTooltipPos === constants_1.YPosition.SIDE && yPositionOptions.has(sideYPos)) {
            return { distance: sideYPos, yTransformOrigin: constants_1.strings.CENTER };
        }
        if (yPositionOptions.has(belowYPos)) {
            return { distance: belowYPos, yTransformOrigin: constants_1.strings.TOP };
        }
        if (yPositionOptions.has(aboveYPos)) {
            return { distance: aboveYPos, yTransformOrigin: constants_1.strings.BOTTOM };
        }
        // Indicates that all potential positions would result in the tooltip
        // colliding with the viewport. This would only occur when the viewport is
        // very short.
        return { distance: belowYPos, yTransformOrigin: constants_1.strings.TOP };
    };
    /**
     * Given the values for above/below alignment of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all possible alignments violate the threshold, then the
     * returned Set contains values that keep the tooltip within the viewport.
     */
    MDCTooltipFoundation.prototype.determineValidYPositionOptions = function () {
        var e_4, _a;
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        var posWithinThreshold = new Set();
        var posWithinViewport = new Set();
        try {
            for (var positions_2 = __values(positions), positions_2_1 = positions_2.next(); !positions_2_1.done; positions_2_1 = positions_2.next()) {
                var position = positions_2_1.value;
                if (this.yPositionHonorsViewportThreshold(position)) {
                    posWithinThreshold.add(position);
                } else if (this.yPositionDoesntCollideWithViewport(position)) {
                    posWithinViewport.add(position);
                }
            }
        } catch (e_4_1) {
            e_4 = { error: e_4_1 };
        } finally {
            try {
                if (positions_2_1 && !positions_2_1.done && (_a = positions_2.return)) _a.call(positions_2);
            } finally {
                if (e_4) throw e_4.error;
            }
        }
        return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
    };
    MDCTooltipFoundation.prototype.yPositionHonorsViewportThreshold = function (yPos) {
        var viewportHeight = this.adapter.getViewportHeight();
        var tooltipHeight = this.adapter.getTooltipSize().height;
        return yPos + tooltipHeight + this.minViewportTooltipThreshold <= viewportHeight && yPos >= this.minViewportTooltipThreshold;
    };
    MDCTooltipFoundation.prototype.yPositionDoesntCollideWithViewport = function (yPos) {
        var viewportHeight = this.adapter.getViewportHeight();
        var tooltipHeight = this.adapter.getTooltipSize().height;
        return yPos + tooltipHeight <= viewportHeight && yPos >= 0;
    };
    MDCTooltipFoundation.prototype.calculateTooltipWithCaretStyles = function (anchorRect) {
        // Prior to grabbing the caret bounding rect, we clear all styles set on the
        // caret. This will ensure the width/height is consistent (since we rotate
        // the caret 90deg in some positions which would result in the height and
        // width bounding rect measurements flipping).
        this.adapter.clearTooltipCaretStyles();
        var caretSize = this.adapter.getTooltipCaretBoundingRect();
        if (!anchorRect || !caretSize) {
            return { position: constants_1.PositionWithCaret.DETECTED, top: 0, left: 0 };
        }
        // The caret for the rich tooltip is created by rotating/skewing/scaling
        // square div into a diamond shape and then hiding half of it so it looks
        // like a triangle. We use the boundingClientRect to calculate the
        // width/height of the element after the transforms (to the caret) have been
        // applied. Since the full tooltip is scaled by 0.8 for the entrance
        // animation, we divide by this value to retrieve the actual caret
        // dimensions.
        var caretWidth = caretSize.width / constants_1.numbers.ANIMATION_SCALE;
        // Since we hide half of caret, we divide the returned DOMRect height
        // by 2.
        var caretHeight = caretSize.height / constants_1.numbers.ANIMATION_SCALE / 2;
        var tooltipSize = this.adapter.getTooltipSize();
        var yOptions = this.calculateYWithCaretDistanceOptions(anchorRect, tooltipSize.height, { caretWidth: caretWidth, caretHeight: caretHeight });
        var xOptions = this.calculateXWithCaretDistanceOptions(anchorRect, tooltipSize.width, { caretWidth: caretWidth, caretHeight: caretHeight });
        var positionOptions = this.validateTooltipWithCaretDistances(yOptions, xOptions);
        if (positionOptions.size < 1) {
            positionOptions = this.generateBackupPositionOption(anchorRect, tooltipSize, { caretWidth: caretWidth, caretHeight: caretHeight });
        }
        var _a = this.determineTooltipWithCaretDistance(positionOptions),
            position = _a.position,
            xDistance = _a.xDistance,
            yDistance = _a.yDistance;
        // After determining the position of the tooltip relative to the anchor,
        // place the caret in the corresponding position and retrieve the necessary
        // x/y transform origins needed to properly animate the tooltip entrance.
        var _b = this.setCaretPositionStyles(position, { caretWidth: caretWidth, caretHeight: caretHeight }),
            yTransformOrigin = _b.yTransformOrigin,
            xTransformOrigin = _b.xTransformOrigin;
        return {
            yTransformOrigin: yTransformOrigin,
            xTransformOrigin: xTransformOrigin,
            top: yDistance,
            left: xDistance
        };
    };
    MDCTooltipFoundation.prototype.calculateXWithCaretDistanceOptions = function (anchorRect, tooltipWidth, caretSize) {
        var caretWidth = caretSize.caretWidth,
            caretHeight = caretSize.caretHeight;
        var isLTR = !this.adapter.isRTL();
        var anchorMidpoint = anchorRect.left + anchorRect.width / 2;
        var sideLeftAligned = anchorRect.left - (tooltipWidth + this.anchorGap + caretHeight);
        var sideRightAligned = anchorRect.right + this.anchorGap + caretHeight;
        var sideStartPos = isLTR ? sideLeftAligned : sideRightAligned;
        var sideEndPos = isLTR ? sideRightAligned : sideLeftAligned;
        var verticalLeftAligned = anchorMidpoint - (constants_1.numbers.CARET_INDENTATION + caretWidth / 2);
        var verticalRightAligned = anchorMidpoint - (tooltipWidth - constants_1.numbers.CARET_INDENTATION - caretWidth / 2);
        var verticalStartPos = isLTR ? verticalLeftAligned : verticalRightAligned;
        var verticalEndPos = isLTR ? verticalRightAligned : verticalLeftAligned;
        var verticalCenterPos = anchorMidpoint - tooltipWidth / 2;
        var possiblePositionsMap = new Map([[constants_1.XPositionWithCaret.START, verticalStartPos], [constants_1.XPositionWithCaret.CENTER, verticalCenterPos], [constants_1.XPositionWithCaret.END, verticalEndPos], [constants_1.XPositionWithCaret.SIDE_END, sideEndPos], [constants_1.XPositionWithCaret.SIDE_START, sideStartPos]]);
        return possiblePositionsMap;
    };
    MDCTooltipFoundation.prototype.calculateYWithCaretDistanceOptions = function (anchorRect, tooltipHeight, caretSize) {
        var caretWidth = caretSize.caretWidth,
            caretHeight = caretSize.caretHeight;
        var anchorMidpoint = anchorRect.top + anchorRect.height / 2;
        var belowYPos = anchorRect.bottom + this.anchorGap + caretHeight;
        var aboveYPos = anchorRect.top - (this.anchorGap + tooltipHeight + caretHeight);
        var sideTopYPos = anchorMidpoint - (constants_1.numbers.CARET_INDENTATION + caretWidth / 2);
        var sideCenterYPos = anchorMidpoint - tooltipHeight / 2;
        var sideBottomYPos = anchorMidpoint - (tooltipHeight - constants_1.numbers.CARET_INDENTATION - caretWidth / 2);
        var possiblePositionsMap = new Map([[constants_1.YPositionWithCaret.ABOVE, aboveYPos], [constants_1.YPositionWithCaret.BELOW, belowYPos], [constants_1.YPositionWithCaret.SIDE_TOP, sideTopYPos], [constants_1.YPositionWithCaret.SIDE_CENTER, sideCenterYPos], [constants_1.YPositionWithCaret.SIDE_BOTTOM, sideBottomYPos]]);
        return possiblePositionsMap;
    };
    MDCTooltipFoundation.prototype.repositionTooltipOnAnchorMove = function () {
        var newAnchorRect = this.adapter.getAnchorBoundingRect();
        if (!newAnchorRect || !this.anchorRect) return;
        // Don't repositioning the tooltip if the anchor is moved/scrolled out of
        // the viewport. See b/264343145 for more info.
        var windowHeight = this.adapter.getViewportHeight();
        if (newAnchorRect.top + newAnchorRect.height < 0 || newAnchorRect.bottom - newAnchorRect.height >= windowHeight) {
            return;
        }
        if (newAnchorRect.top !== this.anchorRect.top || newAnchorRect.left !== this.anchorRect.left || newAnchorRect.height !== this.anchorRect.height || newAnchorRect.width !== this.anchorRect.width) {
            this.anchorRect = newAnchorRect;
            this.parentRect = this.adapter.getParentBoundingRect();
            this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip();
        }
    };
    /**
     * Given a list of x/y position options for a rich tooltip with caret, checks
     * if valid x/y combinations of these position options are either within the
     * viewport threshold, or simply within the viewport. Returns a map with the
     * valid x/y position combinations that all either honor the viewport
     * threshold or are simply inside within the viewport.
     */
    MDCTooltipFoundation.prototype.validateTooltipWithCaretDistances = function (yOptions, xOptions) {
        var e_5, _a, e_6, _b, e_7, _c;
        var posWithinThreshold = new Map();
        var posWithinViewport = new Map();
        // If a tooltip has a caret, not all combinations of YPositionWithCarets and
        // XPositionWithCarets are possible. Because of this we only check the
        // validity of a given XPositionWithCaret if a potential corresponding
        // YPositionWithCaret is valid.
        var validMappings = new Map([[constants_1.YPositionWithCaret.ABOVE, [constants_1.XPositionWithCaret.START, constants_1.XPositionWithCaret.CENTER, constants_1.XPositionWithCaret.END]], [constants_1.YPositionWithCaret.BELOW, [constants_1.XPositionWithCaret.START, constants_1.XPositionWithCaret.CENTER, constants_1.XPositionWithCaret.END]], [constants_1.YPositionWithCaret.SIDE_TOP, [constants_1.XPositionWithCaret.SIDE_START, constants_1.XPositionWithCaret.SIDE_END]], [constants_1.YPositionWithCaret.SIDE_CENTER, [constants_1.XPositionWithCaret.SIDE_START, constants_1.XPositionWithCaret.SIDE_END]], [constants_1.YPositionWithCaret.SIDE_BOTTOM, [constants_1.XPositionWithCaret.SIDE_START, constants_1.XPositionWithCaret.SIDE_END]]]);
        try {
            // TODO(b/227383292): Handle instances where one direction can fit in
            // in the viewport (whether honoring the threshold or not), and the
            // other direction does not.
            for (var _d = __values(validMappings.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var y = _e.value;
                var yDistance = yOptions.get(y);
                if (this.yPositionHonorsViewportThreshold(yDistance)) {
                    try {
                        for (var _f = (e_6 = void 0, __values(validMappings.get(y))), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var x = _g.value;
                            var xDistance = xOptions.get(x);
                            if (this.positionHonorsViewportThreshold(xDistance)) {
                                var caretPositionName = this.caretPositionOptionsMapping(x, y);
                                posWithinThreshold.set(caretPositionName, { xDistance: xDistance, yDistance: yDistance });
                            }
                        }
                    } catch (e_6_1) {
                        e_6 = { error: e_6_1 };
                    } finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        } finally {
                            if (e_6) throw e_6.error;
                        }
                    }
                }
                if (this.yPositionDoesntCollideWithViewport(yDistance)) {
                    try {
                        for (var _h = (e_7 = void 0, __values(validMappings.get(y))), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var x = _j.value;
                            var xDistance = xOptions.get(x);
                            if (this.positionDoesntCollideWithViewport(xDistance)) {
                                var caretPositionName = this.caretPositionOptionsMapping(x, y);
                                posWithinViewport.set(caretPositionName, { xDistance: xDistance, yDistance: yDistance });
                            }
                        }
                    } catch (e_7_1) {
                        e_7 = { error: e_7_1 };
                    } finally {
                        try {
                            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                        } finally {
                            if (e_7) throw e_7.error;
                        }
                    }
                }
            }
        } catch (e_5_1) {
            e_5 = { error: e_5_1 };
        } finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            } finally {
                if (e_5) throw e_5.error;
            }
        }
        return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
    };
    /**
     * Method for generating a horizontal and vertical position for the tooltip if
     * all other calculated values are considered invalid. This would only happen
     * in situations of very small viewports/large tooltips.
     */
    MDCTooltipFoundation.prototype.generateBackupPositionOption = function (anchorRect, tooltipSize, caretSize) {
        var isLTR = !this.adapter.isRTL();
        var xDistance;
        var xPos;
        if (anchorRect.left < 0) {
            xDistance = this.minViewportTooltipThreshold + caretSize.caretHeight;
            xPos = isLTR ? constants_1.XPositionWithCaret.END : constants_1.XPositionWithCaret.START;
        } else {
            var viewportWidth = this.adapter.getViewportWidth();
            xDistance = viewportWidth - (tooltipSize.width + this.minViewportTooltipThreshold + caretSize.caretHeight);
            xPos = isLTR ? constants_1.XPositionWithCaret.START : constants_1.XPositionWithCaret.END;
        }
        var yDistance;
        var yPos;
        if (anchorRect.top < 0) {
            yDistance = this.minViewportTooltipThreshold + caretSize.caretHeight;
            yPos = constants_1.YPositionWithCaret.BELOW;
        } else {
            var viewportHeight = this.adapter.getViewportHeight();
            yDistance = viewportHeight - (tooltipSize.height + this.minViewportTooltipThreshold + caretSize.caretHeight);
            yPos = constants_1.YPositionWithCaret.ABOVE;
        }
        var caretPositionName = this.caretPositionOptionsMapping(xPos, yPos);
        return new Map([[caretPositionName, { xDistance: xDistance, yDistance: yDistance }]]);
    };
    /**
     * Given a list of valid position options for a rich tooltip with caret,
     * returns the option that should be used.
     */
    MDCTooltipFoundation.prototype.determineTooltipWithCaretDistance = function (options) {
        if (options.has(this.tooltipPositionWithCaret)) {
            var tooltipPos = options.get(this.tooltipPositionWithCaret);
            return {
                position: this.tooltipPositionWithCaret,
                xDistance: tooltipPos.xDistance,
                yDistance: tooltipPos.yDistance
            };
        }
        var orderPref = [constants_1.PositionWithCaret.ABOVE_START, constants_1.PositionWithCaret.ABOVE_CENTER, constants_1.PositionWithCaret.ABOVE_END, constants_1.PositionWithCaret.TOP_SIDE_START, constants_1.PositionWithCaret.CENTER_SIDE_START, constants_1.PositionWithCaret.BOTTOM_SIDE_START, constants_1.PositionWithCaret.TOP_SIDE_END, constants_1.PositionWithCaret.CENTER_SIDE_END, constants_1.PositionWithCaret.BOTTOM_SIDE_END, constants_1.PositionWithCaret.BELOW_START, constants_1.PositionWithCaret.BELOW_CENTER, constants_1.PositionWithCaret.BELOW_END];
        // Before calling this method we check whether or not the "options" param
        // is empty and invoke a different method. We, therefore, can be certain
        // that "validPosition" will always be defined.
        var validPosition = orderPref.find(function (pos) {
            return options.has(pos);
        });
        var pos = options.get(validPosition);
        return {
            position: validPosition,
            xDistance: pos.xDistance,
            yDistance: pos.yDistance
        };
    };
    /**
     * Returns the corresponding PositionWithCaret enum for the provided
     * XPositionWithCaret and YPositionWithCaret enums. This mapping exists so our
     * public API accepts only PositionWithCaret enums (as all combinations of
     * XPositionWithCaret and YPositionWithCaret are not valid), but internally we
     * can calculate the X and Y positions of a rich tooltip with caret
     * separately.
     */
    MDCTooltipFoundation.prototype.caretPositionOptionsMapping = function (xPos, yPos) {
        switch (yPos) {
            case constants_1.YPositionWithCaret.ABOVE:
                if (xPos === constants_1.XPositionWithCaret.START) {
                    return constants_1.PositionWithCaret.ABOVE_START;
                } else if (xPos === constants_1.XPositionWithCaret.CENTER) {
                    return constants_1.PositionWithCaret.ABOVE_CENTER;
                } else if (xPos === constants_1.XPositionWithCaret.END) {
                    return constants_1.PositionWithCaret.ABOVE_END;
                }
                break;
            case constants_1.YPositionWithCaret.BELOW:
                if (xPos === constants_1.XPositionWithCaret.START) {
                    return constants_1.PositionWithCaret.BELOW_START;
                } else if (xPos === constants_1.XPositionWithCaret.CENTER) {
                    return constants_1.PositionWithCaret.BELOW_CENTER;
                } else if (xPos === constants_1.XPositionWithCaret.END) {
                    return constants_1.PositionWithCaret.BELOW_END;
                }
                break;
            case constants_1.YPositionWithCaret.SIDE_TOP:
                if (xPos === constants_1.XPositionWithCaret.SIDE_START) {
                    return constants_1.PositionWithCaret.TOP_SIDE_START;
                } else if (xPos === constants_1.XPositionWithCaret.SIDE_END) {
                    return constants_1.PositionWithCaret.TOP_SIDE_END;
                }
                break;
            case constants_1.YPositionWithCaret.SIDE_CENTER:
                if (xPos === constants_1.XPositionWithCaret.SIDE_START) {
                    return constants_1.PositionWithCaret.CENTER_SIDE_START;
                } else if (xPos === constants_1.XPositionWithCaret.SIDE_END) {
                    return constants_1.PositionWithCaret.CENTER_SIDE_END;
                }
                break;
            case constants_1.YPositionWithCaret.SIDE_BOTTOM:
                if (xPos === constants_1.XPositionWithCaret.SIDE_START) {
                    return constants_1.PositionWithCaret.BOTTOM_SIDE_START;
                } else if (xPos === constants_1.XPositionWithCaret.SIDE_END) {
                    return constants_1.PositionWithCaret.BOTTOM_SIDE_END;
                }
                break;
            default:
                break;
        }
        throw new Error("MDCTooltipFoundation: Invalid caret position of " + xPos + ", " + yPos);
    };
    /**
     * Given a PositionWithCaret, applies the correct styles to the caret element
     * so that it is positioned properly on the rich tooltip.
     * Returns the x and y positions of the caret, to be used as the
     * transform-origin on the tooltip itself for entrance animations.
     */
    MDCTooltipFoundation.prototype.setCaretPositionStyles = function (position, caretSize) {
        var e_8, _a;
        var values = this.calculateCaretPositionOnTooltip(position, caretSize);
        if (!values) {
            return { yTransformOrigin: 0, xTransformOrigin: 0 };
        }
        // Prior to setting the caret position styles, clear any previous styles
        // set. This is necessary as all position options do not use the same
        // properties (e.g. using 'left' or 'right') and so old style properties
        // might not get overridden, causing misplaced carets.
        this.adapter.clearTooltipCaretStyles();
        this.adapter.setTooltipCaretStyle(values.yAlignment, values.yAxisPx);
        this.adapter.setTooltipCaretStyle(values.xAlignment, values.xAxisPx);
        // Value of scaleX is cos(skew), Math.cos() expects radians though, so we
        // must first convert the skew value (which is in degrees) to radians.
        var skewRadians = values.skew * (Math.PI / 180);
        var scaleX = Math.cos(skewRadians);
        this.adapter.setTooltipCaretStyle('transform', "rotate(" + values.rotation + "deg) skewY(" + values.skew + "deg) scaleX(" + scaleX + ")");
        this.adapter.setTooltipCaretStyle('transform-origin', values.xAlignment + " " + values.yAlignment);
        try {
            for (var _b = __values(values.caretCorners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var corner = _c.value;
                this.adapter.setTooltipCaretStyle(corner, '0');
            }
        } catch (e_8_1) {
            e_8 = { error: e_8_1 };
        } finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
                if (e_8) throw e_8.error;
            }
        }
        return {
            yTransformOrigin: values.yTransformOrigin,
            xTransformOrigin: values.xTransformOrigin
        };
    };
    /**
     * Given a PositionWithCaret, determines the correct styles to position the
     * caret properly on the rich tooltip.
     */
    MDCTooltipFoundation.prototype.calculateCaretPositionOnTooltip = function (tooltipPos, caretSize) {
        var isLTR = !this.adapter.isRTL();
        var tooltipWidth = this.adapter.getComputedStyleProperty('width');
        var tooltipHeight = this.adapter.getComputedStyleProperty('height');
        if (!tooltipWidth || !tooltipHeight || !caretSize) {
            return;
        }
        var midpointWidth = "calc((" + tooltipWidth + " - " + caretSize.caretWidth + "px) / 2)";
        var midpointHeight = "calc((" + tooltipHeight + " - " + caretSize.caretWidth + "px) / 2)";
        var flushWithEdge = '0';
        var indentedFromEdge = constants_1.numbers.CARET_INDENTATION + "px";
        var indentedFromWidth = "calc(" + tooltipWidth + " - " + indentedFromEdge + ")";
        var indentedFromHeight = "calc(" + tooltipHeight + " - " + indentedFromEdge + ")";
        var verticalRotation = 35;
        var horizontalRotation = Math.abs(90 - verticalRotation);
        var bottomRightTopLeftBorderRadius = ['border-bottom-right-radius', 'border-top-left-radius'];
        var bottomLeftTopRightBorderRadius = ['border-bottom-left-radius', 'border-top-right-radius'];
        var skewDeg = 20;
        switch (tooltipPos) {
            case constants_1.PositionWithCaret.BELOW_CENTER:
                return {
                    yAlignment: constants_1.strings.TOP,
                    xAlignment: constants_1.strings.LEFT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: midpointWidth,
                    rotation: -1 * verticalRotation,
                    skew: -1 * skewDeg,
                    xTransformOrigin: midpointWidth,
                    yTransformOrigin: flushWithEdge,
                    caretCorners: bottomRightTopLeftBorderRadius
                };
            case constants_1.PositionWithCaret.BELOW_END:
                return {
                    yAlignment: constants_1.strings.TOP,
                    xAlignment: isLTR ? constants_1.strings.RIGHT : constants_1.strings.LEFT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: indentedFromEdge,
                    rotation: isLTR ? verticalRotation : -1 * verticalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? indentedFromWidth : indentedFromEdge,
                    yTransformOrigin: flushWithEdge,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
                };
            case constants_1.PositionWithCaret.BELOW_START:
                return {
                    yAlignment: constants_1.strings.TOP,
                    xAlignment: isLTR ? constants_1.strings.LEFT : constants_1.strings.RIGHT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: indentedFromEdge,
                    rotation: isLTR ? -1 * verticalRotation : verticalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? indentedFromEdge : indentedFromWidth,
                    yTransformOrigin: flushWithEdge,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
                };
            case constants_1.PositionWithCaret.TOP_SIDE_END:
                return {
                    yAlignment: constants_1.strings.TOP,
                    xAlignment: isLTR ? constants_1.strings.LEFT : constants_1.strings.RIGHT,
                    yAxisPx: indentedFromEdge,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
                    yTransformOrigin: indentedFromEdge,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
                };
            case constants_1.PositionWithCaret.CENTER_SIDE_END:
                return {
                    yAlignment: constants_1.strings.TOP,
                    xAlignment: isLTR ? constants_1.strings.LEFT : constants_1.strings.RIGHT,
                    yAxisPx: midpointHeight,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
                    yTransformOrigin: midpointHeight,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
                };
            case constants_1.PositionWithCaret.BOTTOM_SIDE_END:
                return {
                    yAlignment: constants_1.strings.BOTTOM,
                    xAlignment: isLTR ? constants_1.strings.LEFT : constants_1.strings.RIGHT,
                    yAxisPx: indentedFromEdge,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
                    yTransformOrigin: indentedFromHeight,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
                };
            case constants_1.PositionWithCaret.TOP_SIDE_START:
                return {
                    yAlignment: constants_1.strings.TOP,
                    xAlignment: isLTR ? constants_1.strings.RIGHT : constants_1.strings.LEFT,
                    yAxisPx: indentedFromEdge,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
                    yTransformOrigin: indentedFromEdge,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
                };
            case constants_1.PositionWithCaret.CENTER_SIDE_START:
                return {
                    yAlignment: constants_1.strings.TOP,
                    xAlignment: isLTR ? constants_1.strings.RIGHT : constants_1.strings.LEFT,
                    yAxisPx: midpointHeight,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
                    yTransformOrigin: midpointHeight,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
                };
            case constants_1.PositionWithCaret.BOTTOM_SIDE_START:
                return {
                    yAlignment: constants_1.strings.BOTTOM,
                    xAlignment: isLTR ? constants_1.strings.RIGHT : constants_1.strings.LEFT,
                    yAxisPx: indentedFromEdge,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
                    yTransformOrigin: indentedFromHeight,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
                };
            case constants_1.PositionWithCaret.ABOVE_CENTER:
                return {
                    yAlignment: constants_1.strings.BOTTOM,
                    xAlignment: constants_1.strings.LEFT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: midpointWidth,
                    rotation: verticalRotation,
                    skew: skewDeg,
                    xTransformOrigin: midpointWidth,
                    yTransformOrigin: tooltipHeight,
                    caretCorners: bottomLeftTopRightBorderRadius
                };
            case constants_1.PositionWithCaret.ABOVE_END:
                return {
                    yAlignment: constants_1.strings.BOTTOM,
                    xAlignment: isLTR ? constants_1.strings.RIGHT : constants_1.strings.LEFT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: indentedFromEdge,
                    rotation: isLTR ? -1 * verticalRotation : verticalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? indentedFromWidth : indentedFromEdge,
                    yTransformOrigin: tooltipHeight,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
                };
            default:
            case constants_1.PositionWithCaret.ABOVE_START:
                return {
                    yAlignment: constants_1.strings.BOTTOM,
                    xAlignment: isLTR ? constants_1.strings.LEFT : constants_1.strings.RIGHT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: indentedFromEdge,
                    rotation: isLTR ? verticalRotation : -1 * verticalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? indentedFromEdge : indentedFromWidth,
                    yTransformOrigin: tooltipHeight,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
                };
        }
    };
    MDCTooltipFoundation.prototype.clearShowTimeout = function () {
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = null;
        }
    };
    MDCTooltipFoundation.prototype.clearHideTimeout = function () {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    };
    /**
     * Method that allows user to specify additional elements that should have a
     * scroll event listener attached to it. This should be used in instances
     * where the anchor element is placed inside a scrollable container, and will
     * ensure that the tooltip will stay attached to the anchor on scroll.
     */
    MDCTooltipFoundation.prototype.attachScrollHandler = function (addEventListenerFn) {
        var _this = this;
        this.addAncestorScrollEventListeners.push(function () {
            addEventListenerFn('scroll', _this.windowScrollHandler);
        });
    };
    /**
     * Must be used in conjunction with #attachScrollHandler. Removes the scroll
     * event handler from elements on the page.
     */
    MDCTooltipFoundation.prototype.removeScrollHandler = function (removeEventHandlerFn) {
        var _this = this;
        this.removeAncestorScrollEventListeners.push(function () {
            removeEventHandlerFn('scroll', _this.windowScrollHandler);
        });
    };
    MDCTooltipFoundation.prototype.destroy = function () {
        var e_9, _a;
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
            this.frameId = null;
        }
        this.clearHideTimeout();
        this.clearShowTimeout();
        this.adapter.removeClass(SHOWN);
        this.adapter.removeClass(SHOWING_TRANSITION);
        this.adapter.removeClass(SHOWING);
        this.adapter.removeClass(HIDE);
        this.adapter.removeClass(HIDE_TRANSITION);
        if (this.richTooltip) {
            this.adapter.deregisterEventHandler('focusout', this.richTooltipFocusOutHandler);
        }
        if (!this.persistentTooltip) {
            this.adapter.deregisterEventHandler('mouseenter', this.tooltipMouseEnterHandler);
            this.adapter.deregisterEventHandler('mouseleave', this.tooltipMouseLeaveHandler);
        }
        this.adapter.deregisterAnchorEventHandler('blur', this.anchorBlurHandler);
        this.adapter.deregisterDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.deregisterDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.deregisterWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        try {
            for (var _b = __values(this.removeAncestorScrollEventListeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fn = _c.value;
                fn();
            }
        } catch (e_9_1) {
            e_9 = { error: e_9_1 };
        } finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
                if (e_9) throw e_9.error;
            }
        }
        this.animFrame.cancelAll();
    };
    return MDCTooltipFoundation;
}(foundation_1.MDCFoundation);
exports.MDCTooltipFoundation = MDCTooltipFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCTooltipFoundation;

/***/ }),

/***/ "./packages/mdc-tooltip/index.ts":
/*!***************************************!*\
  !*** ./packages/mdc-tooltip/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./adapter */ "./packages/mdc-tooltip/adapter.ts"), exports);
__exportStar(__webpack_require__(/*! ./component */ "./packages/mdc-tooltip/component.ts"), exports);
__exportStar(__webpack_require__(/*! ./foundation */ "./packages/mdc-tooltip/foundation.ts"), exports);
__exportStar(__webpack_require__(/*! ./constants */ "./packages/mdc-tooltip/constants.ts"), exports);

/***/ })

/******/ });
});
//# sourceMappingURL=mdc.tooltip.js.map