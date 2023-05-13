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
		define("@material/drawer", [], factory);
	else if(typeof exports === 'object')
		exports["drawer"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["drawer"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/mdc-drawer/index.ts");
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

/***/ "./packages/mdc-dom/focus-trap.ts":
/*!****************************************!*\
  !*** ./packages/mdc-dom/focus-trap.ts ***!
  \****************************************/
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
exports.FocusTrap = void 0;
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */
var FocusTrap = /** @class */function () {
    function FocusTrap(root, options) {
        if (options === void 0) {
            options = {};
        }
        this.root = root;
        this.options = options;
        // Previously focused element before trapping focus.
        this.elFocusedBeforeTrapFocus = null;
    }
    /**
     * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
     * otherwises sets initial focus to the first focusable child element.
     */
    FocusTrap.prototype.trapFocus = function () {
        var focusableEls = this.getFocusableElements(this.root);
        if (focusableEls.length === 0) {
            throw new Error('FocusTrap: Element must have at least one focusable child.');
        }
        this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        this.wrapTabFocus(this.root);
        if (!this.options.skipInitialFocus) {
            this.focusInitialElement(focusableEls, this.options.initialFocusEl);
        }
    };
    /**
     * Releases focus from `root`. Also restores focus to the previously focused
     * element.
     */
    FocusTrap.prototype.releaseFocus = function () {
        Array.from(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function (sentinelEl) {
            sentinelEl.parentElement.removeChild(sentinelEl);
        });
        if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
            this.elFocusedBeforeTrapFocus.focus();
        }
    };
    /**
     * Wraps tab focus within `el` by adding two hidden sentinel divs which are
     * used to mark the beginning and the end of the tabbable region. When
     * focused, these sentinel elements redirect focus to the first/last
     * children elements of the tabbable region, ensuring that focus is trapped
     * within that region.
     */
    FocusTrap.prototype.wrapTabFocus = function (el) {
        var _this = this;
        var sentinelStart = this.createSentinel();
        var sentinelEnd = this.createSentinel();
        sentinelStart.addEventListener('focus', function () {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) {
                focusableEls[focusableEls.length - 1].focus();
            }
        });
        sentinelEnd.addEventListener('focus', function () {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) {
                focusableEls[0].focus();
            }
        });
        el.insertBefore(sentinelStart, el.children[0]);
        el.appendChild(sentinelEnd);
    };
    /**
     * Focuses on `initialFocusEl` if defined and a child of the root element.
     * Otherwise, focuses on the first focusable child element of the root.
     */
    FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
        var focusIndex = 0;
        if (initialFocusEl) {
            focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
        }
        focusableEls[focusIndex].focus();
    };
    FocusTrap.prototype.getFocusableElements = function (root) {
        var focusableEls = Array.from(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
        return focusableEls.filter(function (el) {
            var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' || el.getAttribute('disabled') != null || el.getAttribute('hidden') != null || el.getAttribute('aria-hidden') === 'true';
            var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
            var isProgrammaticallyHidden = false;
            if (isTabbableAndVisible) {
                var style = getComputedStyle(el);
                isProgrammaticallyHidden = style.display === 'none' || style.visibility === 'hidden';
            }
            return isTabbableAndVisible && !isProgrammaticallyHidden;
        });
    };
    FocusTrap.prototype.createSentinel = function () {
        var sentinel = document.createElement('div');
        sentinel.setAttribute('tabindex', '0');
        // Don't announce in screen readers.
        sentinel.setAttribute('aria-hidden', 'true');
        sentinel.classList.add(FOCUS_SENTINEL_CLASS);
        return sentinel;
    };
    return FocusTrap;
}();
exports.FocusTrap = FocusTrap;

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

/***/ "./packages/mdc-dom/ponyfill.ts":
/*!**************************************!*\
  !*** ./packages/mdc-dom/ponyfill.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
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
exports.estimateScrollWidth = exports.matches = exports.closest = void 0;
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global
 * prototype chain. This makes ponyfills safer than traditional polyfills,
 * especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
exports.closest = closest;
/** Element.matches with support for webkit and IE. */
function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
exports.matches = matches;
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}
exports.estimateScrollWidth = estimateScrollWidth;

/***/ }),

/***/ "./packages/mdc-drawer/adapter.ts":
/*!****************************************!*\
  !*** ./packages/mdc-drawer/adapter.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
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

/***/ "./packages/mdc-drawer/component.ts":
/*!******************************************!*\
  !*** ./packages/mdc-drawer/component.ts ***!
  \******************************************/
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
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCDrawer = void 0;
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var focus_trap_1 = __webpack_require__(/*! @material/dom/focus-trap */ "./packages/mdc-dom/focus-trap.ts");
var component_2 = __webpack_require__(/*! @material/list/component */ "./packages/mdc-list/component.ts");
var foundation_1 = __webpack_require__(/*! ./dismissible/foundation */ "./packages/mdc-drawer/dismissible/foundation.ts");
var foundation_2 = __webpack_require__(/*! ./modal/foundation */ "./packages/mdc-drawer/modal/foundation.ts");
var util = __importStar(__webpack_require__(/*! ./util */ "./packages/mdc-drawer/util.ts"));
var cssClasses = foundation_1.MDCDismissibleDrawerFoundation.cssClasses,
    strings = foundation_1.MDCDismissibleDrawerFoundation.strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */
var MDCDrawer = /** @class */function (_super) {
    __extends(MDCDrawer, _super);
    function MDCDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCDrawer.attachTo = function (root) {
        return new MDCDrawer(root);
    };
    Object.defineProperty(MDCDrawer.prototype, "open", {
        /**
         * @return boolean Proxies to the foundation's `open`/`close` methods.
         * Also returns true if drawer is in the open position.
         */
        get: function get() {
            return this.foundation.isOpen();
        },
        /**
         * Toggles the drawer open and closed.
         */
        set: function set(isOpen) {
            if (isOpen) {
                this.foundation.open();
            } else {
                this.foundation.close();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDrawer.prototype, "list", {
        // initialSyncWithDOM()
        get: function get() {
            return this.innerList;
        },
        enumerable: false,
        configurable: true
    });
    MDCDrawer.prototype.initialize = function (focusTrapFactory, listFactory) {
        if (focusTrapFactory === void 0) {
            focusTrapFactory = function focusTrapFactory(el) {
                return new focus_trap_1.FocusTrap(el);
            };
        }
        if (listFactory === void 0) {
            listFactory = function listFactory(el) {
                return new component_2.MDCList(el);
            };
        }
        var listEl = this.root.querySelector(strings.LIST_SELECTOR);
        if (listEl) {
            this.innerList = listFactory(listEl);
            this.innerList.wrapFocus = true;
        }
        this.focusTrapFactory = focusTrapFactory;
    };
    MDCDrawer.prototype.initialSyncWithDOM = function () {
        var _this = this;
        var MODAL = cssClasses.MODAL;
        var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
        this.scrim = this.root.parentNode.querySelector(SCRIM_SELECTOR);
        if (this.scrim && this.root.classList.contains(MODAL)) {
            this.handleScrimClick = function () {
                _this.foundation.handleScrimClick();
            };
            this.scrim.addEventListener('click', this.handleScrimClick);
            this.focusTrap = util.createFocusTrapInstance(this.root, this.focusTrapFactory);
        }
        this.handleKeydown = function (evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleTransitionEnd = function (evt) {
            _this.foundation.handleTransitionEnd(evt);
        };
        this.listen('keydown', this.handleKeydown);
        this.listen('transitionend', this.handleTransitionEnd);
    };
    MDCDrawer.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten('transitionend', this.handleTransitionEnd);
        if (this.innerList) {
            this.innerList.destroy();
        }
        var MODAL = cssClasses.MODAL;
        if (this.scrim && this.handleScrimClick && this.root.classList.contains(MODAL)) {
            this.scrim.removeEventListener('click', this.handleScrimClick);
            // Ensure drawer is closed to hide scrim and release focus
            this.open = false;
        }
    };
    MDCDrawer.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function addClass(className) {
                _this.root.classList.add(className);
            },
            removeClass: function removeClass(className) {
                _this.root.classList.remove(className);
            },
            hasClass: function hasClass(className) {
                return _this.root.classList.contains(className);
            },
            elementHasClass: function elementHasClass(element, className) {
                return element.classList.contains(className);
            },
            saveFocus: function saveFocus() {
                _this.previousFocus = document.activeElement;
            },
            restoreFocus: function restoreFocus() {
                var previousFocus = _this.previousFocus;
                if (previousFocus && previousFocus.focus && _this.root.contains(document.activeElement)) {
                    previousFocus.focus();
                }
            },
            focusActiveNavigationItem: function focusActiveNavigationItem() {
                var activeNavItemEl = _this.root.querySelector(strings.LIST_ITEM_ACTIVATED_SELECTOR);
                if (activeNavItemEl) {
                    activeNavItemEl.focus();
                }
            },
            notifyClose: function notifyClose() {
                _this.emit(strings.CLOSE_EVENT, {}, true /* shouldBubble */);
            },
            notifyOpen: function notifyOpen() {
                _this.emit(strings.OPEN_EVENT, {}, true /* shouldBubble */);
            },
            trapFocus: function trapFocus() {
                _this.focusTrap.trapFocus();
            },
            releaseFocus: function releaseFocus() {
                _this.focusTrap.releaseFocus();
            }
        };
        // tslint:enable:object-literal-sort-keys
        var DISMISSIBLE = cssClasses.DISMISSIBLE,
            MODAL = cssClasses.MODAL;
        if (this.root.classList.contains(DISMISSIBLE)) {
            return new foundation_1.MDCDismissibleDrawerFoundation(adapter);
        } else if (this.root.classList.contains(MODAL)) {
            return new foundation_2.MDCModalDrawerFoundation(adapter);
        } else {
            throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
        }
    };
    return MDCDrawer;
}(component_1.MDCComponent);
exports.MDCDrawer = MDCDrawer;

/***/ }),

/***/ "./packages/mdc-drawer/constants.ts":
/*!******************************************!*\
  !*** ./packages/mdc-drawer/constants.ts ***!
  \******************************************/
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
exports.strings = exports.cssClasses = void 0;
var cssClasses = {
    ANIMATE: 'mdc-drawer--animate',
    CLOSING: 'mdc-drawer--closing',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    OPENING: 'mdc-drawer--opening',
    ROOT: 'mdc-drawer'
};
exports.cssClasses = cssClasses;
var strings = {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
    LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
    LIST_ITEM_ACTIVATED_SELECTOR: '.mdc-list-item--activated,.mdc-deprecated-list-item--activated'
};
exports.strings = strings;

/***/ }),

/***/ "./packages/mdc-drawer/dismissible/foundation.ts":
/*!*******************************************************!*\
  !*** ./packages/mdc-drawer/dismissible/foundation.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCDismissibleDrawerFoundation = void 0;
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./packages/mdc-drawer/constants.ts");
/** MDC Dismissible Drawer Foundation */
var MDCDismissibleDrawerFoundation = /** @class */function (_super) {
    __extends(MDCDismissibleDrawerFoundation, _super);
    function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCDismissibleDrawerFoundation.defaultAdapter), adapter)) || this;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function addClass() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                hasClass: function hasClass() {
                    return false;
                },
                elementHasClass: function elementHasClass() {
                    return false;
                },
                notifyClose: function notifyClose() {
                    return undefined;
                },
                notifyOpen: function notifyOpen() {
                    return undefined;
                },
                saveFocus: function saveFocus() {
                    return undefined;
                },
                restoreFocus: function restoreFocus() {
                    return undefined;
                },
                focusActiveNavigationItem: function focusActiveNavigationItem() {
                    return undefined;
                },
                trapFocus: function trapFocus() {
                    return undefined;
                },
                releaseFocus: function releaseFocus() {
                    return undefined;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCDismissibleDrawerFoundation.prototype.destroy = function () {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
        }
    };
    /**
     * Opens the drawer from the closed state.
     */
    MDCDismissibleDrawerFoundation.prototype.open = function () {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter.addClass(constants_1.cssClasses.OPEN);
        this.adapter.addClass(constants_1.cssClasses.ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for
        // animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(constants_1.cssClasses.OPENING);
        });
        this.adapter.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */
    MDCDismissibleDrawerFoundation.prototype.close = function () {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter.addClass(constants_1.cssClasses.CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
        return this.adapter.hasClass(constants_1.cssClasses.OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
        return this.adapter.hasClass(constants_1.cssClasses.OPENING) || this.adapter.hasClass(constants_1.cssClasses.ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */
    MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
        return this.adapter.hasClass(constants_1.cssClasses.CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */
    MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode,
            key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */
    MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
        var OPENING = constants_1.cssClasses.OPENING,
            CLOSING = constants_1.cssClasses.CLOSING,
            OPEN = constants_1.cssClasses.OPEN,
            ANIMATE = constants_1.cssClasses.ANIMATE,
            ROOT = constants_1.cssClasses.ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without
        // classList, so check for Element first.
        var isRootElement = this.isElement(evt.target) && this.adapter.elementHasClass(evt.target, ROOT);
        if (!isRootElement) {
            return;
        }
        if (this.isClosing()) {
            this.adapter.removeClass(OPEN);
            this.closed();
            this.adapter.restoreFocus();
            this.adapter.notifyClose();
        } else {
            this.adapter.focusActiveNavigationItem();
            this.opened();
            this.adapter.notifyOpen();
        }
        this.adapter.removeClass(ANIMATE);
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */
    MDCDismissibleDrawerFoundation.prototype.opened = function () {}; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */
    MDCDismissibleDrawerFoundation.prototype.closed = function () {}; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to
     * factor in Firefox reflow behavior.
     */
    MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation.prototype.isElement = function (element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without
        // classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation;
}(foundation_1.MDCFoundation);
exports.MDCDismissibleDrawerFoundation = MDCDismissibleDrawerFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCDismissibleDrawerFoundation;

/***/ }),

/***/ "./packages/mdc-drawer/index.ts":
/*!**************************************!*\
  !*** ./packages/mdc-drawer/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2019 Google Inc.
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
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = void 0;
var util = __importStar(__webpack_require__(/*! ./util */ "./packages/mdc-drawer/util.ts"));
exports.util = util;
__exportStar(__webpack_require__(/*! ./adapter */ "./packages/mdc-drawer/adapter.ts"), exports);
__exportStar(__webpack_require__(/*! ./component */ "./packages/mdc-drawer/component.ts"), exports);
__exportStar(__webpack_require__(/*! ./constants */ "./packages/mdc-drawer/constants.ts"), exports);
__exportStar(__webpack_require__(/*! ./dismissible/foundation */ "./packages/mdc-drawer/dismissible/foundation.ts"), exports);
__exportStar(__webpack_require__(/*! ./modal/foundation */ "./packages/mdc-drawer/modal/foundation.ts"), exports);

/***/ }),

/***/ "./packages/mdc-drawer/modal/foundation.ts":
/*!*************************************************!*\
  !*** ./packages/mdc-drawer/modal/foundation.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCModalDrawerFoundation = void 0;
var foundation_1 = __webpack_require__(/*! ../dismissible/foundation */ "./packages/mdc-drawer/dismissible/foundation.ts");
/* istanbul ignore next: subclass is not a branch statement */
var MDCModalDrawerFoundation = /** @class */function (_super) {
    __extends(MDCModalDrawerFoundation, _super);
    function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */
    MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */
    MDCModalDrawerFoundation.prototype.opened = function () {
        this.adapter.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */
    MDCModalDrawerFoundation.prototype.closed = function () {
        this.adapter.releaseFocus();
    };
    return MDCModalDrawerFoundation;
}(foundation_1.MDCDismissibleDrawerFoundation);
exports.MDCModalDrawerFoundation = MDCModalDrawerFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCModalDrawerFoundation;

/***/ }),

/***/ "./packages/mdc-drawer/util.ts":
/*!*************************************!*\
  !*** ./packages/mdc-drawer/util.ts ***!
  \*************************************/
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
exports.createFocusTrapInstance = void 0;
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
    return focusTrapFactory(surfaceEl, {
        // Component handles focusing on active nav item.
        skipInitialFocus: true
    });
}
exports.createFocusTrapInstance = createFocusTrapInstance;

/***/ }),

/***/ "./packages/mdc-list/component.ts":
/*!****************************************!*\
  !*** ./packages/mdc-list/component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCList = void 0;
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var ponyfill_1 = __webpack_require__(/*! @material/dom/ponyfill */ "./packages/mdc-dom/ponyfill.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-list/constants.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-list/foundation.ts");
/** MDC List */
var MDCList = /** @class */function (_super) {
    __extends(MDCList, _super);
    function MDCList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList.prototype, "vertical", {
        set: function set(value) {
            this.foundation.setVerticalOrientation(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "listElements", {
        get: function get() {
            return Array.from(this.root.querySelectorAll("." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_CLASS]));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "wrapFocus", {
        set: function set(value) {
            this.foundation.setWrapFocus(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "typeaheadInProgress", {
        /**
         * @return Whether typeahead is currently matching a user-specified prefix.
         */
        get: function get() {
            return this.foundation.isTypeaheadInProgress();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "hasTypeahead", {
        /**
         * Sets whether typeahead functionality is enabled on the list.
         * @param hasTypeahead Whether typeahead is enabled.
         */
        set: function set(hasTypeahead) {
            this.foundation.setHasTypeahead(hasTypeahead);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "singleSelection", {
        set: function set(isSingleSelectionList) {
            this.foundation.setSingleSelection(isSingleSelectionList);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "disabledItemsFocusable", {
        set: function set(areDisabledItemsFocusable) {
            this.foundation.setDisabledItemsFocusable(areDisabledItemsFocusable);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "selectedIndex", {
        get: function get() {
            return this.foundation.getSelectedIndex();
        },
        set: function set(index) {
            this.foundation.setSelectedIndex(index);
        },
        enumerable: false,
        configurable: true
    });
    MDCList.attachTo = function (root) {
        return new MDCList(root);
    };
    MDCList.prototype.initialSyncWithDOM = function () {
        this.isEvolutionEnabled = constants_1.evolutionAttribute in this.root.dataset;
        if (this.isEvolutionEnabled) {
            this.classNameMap = constants_1.evolutionClassNameMap;
        } else if (ponyfill_1.matches(this.root, constants_1.strings.DEPRECATED_SELECTOR)) {
            this.classNameMap = constants_1.deprecatedClassNameMap;
        } else {
            this.classNameMap = Object.values(constants_1.cssClasses).reduce(function (obj, className) {
                obj[className] = className;
                return obj;
            }, {});
        }
        this.handleClick = this.handleClickEvent.bind(this);
        this.handleKeydown = this.handleKeydownEvent.bind(this);
        this.focusInEventListener = this.handleFocusInEvent.bind(this);
        this.focusOutEventListener = this.handleFocusOutEvent.bind(this);
        this.listen('keydown', this.handleKeydown);
        this.listen('click', this.handleClick);
        this.listen('focusin', this.focusInEventListener);
        this.listen('focusout', this.focusOutEventListener);
        this.layout();
        this.initializeListType();
        this.ensureFocusable();
    };
    MDCList.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten('click', this.handleClick);
        this.unlisten('focusin', this.focusInEventListener);
        this.unlisten('focusout', this.focusOutEventListener);
    };
    MDCList.prototype.layout = function () {
        var direction = this.root.getAttribute(constants_1.strings.ARIA_ORIENTATION);
        this.vertical = direction !== constants_1.strings.ARIA_ORIENTATION_HORIZONTAL;
        var itemSelector = "." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_CLASS] + ":not([tabindex])";
        var childSelector = constants_1.strings.FOCUSABLE_CHILD_ELEMENTS;
        // List items need to have at least tabindex=-1 to be focusable.
        var itemEls = this.root.querySelectorAll(itemSelector);
        if (itemEls.length) {
            Array.prototype.forEach.call(itemEls, function (el) {
                el.setAttribute('tabindex', '-1');
            });
        }
        // Child button/a elements are not tabbable until the list item is focused.
        var focusableChildEls = this.root.querySelectorAll(childSelector);
        if (focusableChildEls.length) {
            Array.prototype.forEach.call(focusableChildEls, function (el) {
                el.setAttribute('tabindex', '-1');
            });
        }
        if (this.isEvolutionEnabled) {
            this.foundation.setUseSelectedAttribute(true);
        }
        this.foundation.layout();
    };
    /**
     * Extracts the primary text from a list item.
     * @param item The list item element.
     * @return The primary text in the element.
     */
    MDCList.prototype.getPrimaryText = function (item) {
        var _a;
        var primaryText = item.querySelector("." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS]);
        if (this.isEvolutionEnabled || primaryText) {
            return (_a = primaryText === null || primaryText === void 0 ? void 0 : primaryText.textContent) !== null && _a !== void 0 ? _a : '';
        }
        var singleLineText = item.querySelector("." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_TEXT_CLASS]);
        return singleLineText && singleLineText.textContent || '';
    };
    /**
     * Initialize selectedIndex value based on pre-selected list items.
     */
    MDCList.prototype.initializeListType = function () {
        var _this = this;
        this.isInteractive = ponyfill_1.matches(this.root, constants_1.strings.ARIA_INTERACTIVE_ROLES_SELECTOR);
        if (this.isEvolutionEnabled && this.isInteractive) {
            var selection = Array.from(this.root.querySelectorAll(constants_1.strings.SELECTED_ITEM_SELECTOR), function (listItem) {
                return _this.listElements.indexOf(listItem);
            });
            if (ponyfill_1.matches(this.root, constants_1.strings.ARIA_MULTI_SELECTABLE_SELECTOR)) {
                this.selectedIndex = selection;
            } else if (selection.length > 0) {
                this.selectedIndex = selection[0];
            }
            return;
        }
        var checkboxListItems = this.root.querySelectorAll(constants_1.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
        var radioSelectedListItem = this.root.querySelector(constants_1.strings.ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root.querySelectorAll(constants_1.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex = Array.from(preselectedItems, function (listItem) {
                return _this.listElements.indexOf(listItem);
            });
        } else if (radioSelectedListItem) {
            this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
    };
    /**
     * Updates the list item at itemIndex to the desired isEnabled state.
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
        this.foundation.setEnabled(itemIndex, isEnabled);
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Defaults to
     *     the currently focused index.
     * @return The index of the matched item.
     */
    MDCList.prototype.typeaheadMatchItem = function (nextChar, startingIndex) {
        return this.foundation.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */true);
    };
    MDCList.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function addClassForElementIndex(index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.add(_this.classNameMap[className]);
                }
            },
            focusItemAtIndex: function focusItemAtIndex(index) {
                var _a;
                (_a = _this.listElements[index]) === null || _a === void 0 ? void 0 : _a.focus();
            },
            getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
                return _this.listElements[index].getAttribute(attr);
            },
            getFocusedElementIndex: function getFocusedElementIndex() {
                return _this.listElements.indexOf(document.activeElement);
            },
            getListItemCount: function getListItemCount() {
                return _this.listElements.length;
            },
            getPrimaryTextAtIndex: function getPrimaryTextAtIndex(index) {
                return _this.getPrimaryText(_this.listElements[index]);
            },
            hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(constants_1.strings.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function hasRadioAtIndex(index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(constants_1.strings.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(constants_1.strings.CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function isFocusInsideList() {
                return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
            },
            isRootFocused: function isRootFocused() {
                return document.activeElement === _this.root;
            },
            listItemAtIndexHasClass: function listItemAtIndexHasClass(index, className) {
                return _this.listElements[index].classList.contains(_this.classNameMap[className]);
            },
            notifyAction: function notifyAction(index) {
                _this.emit(constants_1.strings.ACTION_EVENT, { index: index }, /** shouldBubble */true);
            },
            notifySelectionChange: function notifySelectionChange(changedIndices) {
                _this.emit(constants_1.strings.SELECTION_CHANGE_EVENT, { changedIndices: changedIndices },
                /** shouldBubble */true);
            },
            removeClassForElementIndex: function removeClassForElementIndex(index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.remove(_this.classNameMap[className]);
                }
            },
            setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
                var element = _this.listElements[index];
                if (element) {
                    _this.safeSetAttribute(element, attr, value);
                }
            },
            setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(constants_1.strings.CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var selector = constants_1.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
                Array.prototype.forEach.call(element.querySelectorAll(selector), function (el) {
                    el.tabIndex = Number(tabIndexValue);
                });
            }
        };
        return new foundation_1.MDCListFoundation(adapter);
    };
    /**
     * Ensures that at least one item is focusable if the list is interactive and
     * doesn't specify a suitable tabindex.
     */
    MDCList.prototype.ensureFocusable = function () {
        if (this.isEvolutionEnabled && this.isInteractive) {
            if (!this.root.querySelector("." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_CLASS] + "[tabindex=\"0\"]")) {
                var index = this.initialFocusIndex();
                if (index !== -1) {
                    this.listElements[index].tabIndex = 0;
                }
            }
        }
    };
    MDCList.prototype.initialFocusIndex = function () {
        if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) {
            return this.selectedIndex[0];
        }
        if (typeof this.selectedIndex === 'number' && this.selectedIndex !== constants_1.numbers.UNSET_INDEX) {
            return this.selectedIndex;
        }
        var el = this.root.querySelector("." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_DISABLED_CLASS] + ")");
        if (el === null) {
            return -1;
        }
        return this.getListItemIndex(el);
    };
    /**
     * Used to figure out which list item this event is targeting. Or returns -1
     * if there is no list item
     */
    MDCList.prototype.getListItemIndex = function (el) {
        var nearestParent = ponyfill_1.closest(el, "." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_CLASS] + ", ." + this.classNameMap[constants_1.cssClasses.ROOT]);
        // Get the index of the element if it is a list item.
        if (nearestParent && ponyfill_1.matches(nearestParent, "." + this.classNameMap[constants_1.cssClasses.LIST_ITEM_CLASS])) {
            return this.listElements.indexOf(nearestParent);
        }
        return -1;
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    MDCList.prototype.handleFocusInEvent = function (evt) {
        var index = this.getListItemIndex(evt.target);
        this.foundation.handleFocusIn(index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    MDCList.prototype.handleFocusOutEvent = function (evt) {
        var index = this.getListItemIndex(evt.target);
        this.foundation.handleFocusOut(index);
    };
    /**
     * Used to figure out which element was focused when keydown event occurred
     * before sending the event to the foundation.
     */
    MDCList.prototype.handleKeydownEvent = function (evt) {
        var index = this.getListItemIndex(evt.target);
        var target = evt.target;
        this.foundation.handleKeydown(evt, target.classList.contains(this.classNameMap[constants_1.cssClasses.LIST_ITEM_CLASS]), index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    MDCList.prototype.handleClickEvent = function (evt) {
        var index = this.getListItemIndex(evt.target);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the
        // checkbox will have 2 change events.
        var toggleCheckbox = !ponyfill_1.matches(target, constants_1.strings.CHECKBOX_RADIO_SELECTOR);
        this.foundation.handleClick(index, toggleCheckbox, evt);
    };
    return MDCList;
}(component_1.MDCComponent);
exports.MDCList = MDCList;

/***/ }),

/***/ "./packages/mdc-list/constants.ts":
/*!****************************************!*\
  !*** ./packages/mdc-list/constants.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
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

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.evolutionClassNameMap = exports.evolutionAttribute = exports.deprecatedClassNameMap = exports.numbers = exports.cssClasses = exports.strings = void 0;
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
    LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
    ROOT: 'mdc-list'
};
exports.cssClasses = cssClasses;
var evolutionClassNameMap = (_a = {}, _a["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated', _a["" + cssClasses.LIST_ITEM_CLASS] = 'mdc-list-item', _a["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled', _a["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected', _a["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text', _a["" + cssClasses.ROOT] = 'mdc-list', _a);
exports.evolutionClassNameMap = evolutionClassNameMap;
var deprecatedClassNameMap = (_b = {}, _b["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated', _b["" + cssClasses.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item', _b["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled', _b["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected', _b["" + cssClasses.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text', _b["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text', _b["" + cssClasses.ROOT] = 'mdc-deprecated-list', _b);
exports.deprecatedClassNameMap = deprecatedClassNameMap;
var strings = {
    ACTION_EVENT: 'MDCList:action',
    SELECTION_CHANGE_EVENT: 'MDCList:selectionChange',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
exports.strings = strings;
var numbers = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
exports.numbers = numbers;
var evolutionAttribute = 'evolution';
exports.evolutionAttribute = evolutionAttribute;

/***/ }),

/***/ "./packages/mdc-list/events.ts":
/*!*************************************!*\
  !*** ./packages/mdc-list/events.ts ***!
  \*************************************/
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
exports.preventDefaultEvent = void 0;
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
/**
 * Ensures that preventDefault is only called if the containing element
 * doesn't consume the event, and it will cause an unintended scroll.
 *
 * @param evt keyboard event to be prevented.
 */
var preventDefaultEvent = function preventDefaultEvent(evt) {
    var target = evt.target;
    if (!target) {
        return;
    }
    var tagName = ("" + target.tagName).toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
    }
};
exports.preventDefaultEvent = preventDefaultEvent;

/***/ }),

/***/ "./packages/mdc-list/foundation.ts":
/*!*****************************************!*\
  !*** ./packages/mdc-list/foundation.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
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
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDCListFoundation = void 0;
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var keyboard_1 = __webpack_require__(/*! @material/dom/keyboard */ "./packages/mdc-dom/keyboard.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-list/constants.ts");
var events_1 = __webpack_require__(/*! ./events */ "./packages/mdc-list/events.ts");
var typeahead = __importStar(__webpack_require__(/*! ./typeahead */ "./packages/mdc-list/typeahead.ts"));
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
/** List of modifier keys to consider while handling keyboard events. */
var handledModifierKeys = ['Alt', 'Control', 'Meta', 'Shift'];
/** Checks if the event has the given modifier keys. */
function createModifierChecker(event) {
    var eventModifiers = new Set(event ? handledModifierKeys.filter(function (m) {
        return event.getModifierState(m);
    }) : []);
    return function (modifiers) {
        return modifiers.every(function (m) {
            return eventModifiers.has(m);
        }) && modifiers.length === eventModifiers.size;
    };
}
/** MDC List Foundation */
var MDCListFoundation = /** @class */function (_super) {
    __extends(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCListFoundation.defaultAdapter), adapter)) || this;
        _this.wrapFocus = false;
        _this.isVertical = true;
        _this.isSingleSelectionList = false;
        _this.areDisabledItemsFocusable = false;
        _this.selectedIndex = constants_1.numbers.UNSET_INDEX;
        _this.focusedItemIndex = constants_1.numbers.UNSET_INDEX;
        _this.useActivatedClass = false;
        _this.useSelectedAttr = false;
        _this.ariaCurrentAttrValue = null;
        _this.isCheckboxList = false;
        _this.isRadioList = false;
        _this.lastSelectedIndex = null;
        _this.hasTypeahead = false;
        // Transiently holds current typeahead prefix from user.
        _this.typeaheadState = typeahead.initState();
        _this.sortedIndexByFirstChar = new Map();
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function get() {
            return constants_1.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function get() {
            return {
                addClassForElementIndex: function addClassForElementIndex() {
                    return undefined;
                },
                focusItemAtIndex: function focusItemAtIndex() {
                    return undefined;
                },
                getAttributeForElementIndex: function getAttributeForElementIndex() {
                    return null;
                },
                getFocusedElementIndex: function getFocusedElementIndex() {
                    return 0;
                },
                getListItemCount: function getListItemCount() {
                    return 0;
                },
                hasCheckboxAtIndex: function hasCheckboxAtIndex() {
                    return false;
                },
                hasRadioAtIndex: function hasRadioAtIndex() {
                    return false;
                },
                isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
                    return false;
                },
                isFocusInsideList: function isFocusInsideList() {
                    return false;
                },
                isRootFocused: function isRootFocused() {
                    return false;
                },
                listItemAtIndexHasClass: function listItemAtIndexHasClass() {
                    return false;
                },
                notifyAction: function notifyAction() {
                    return undefined;
                },
                notifySelectionChange: function notifySelectionChange() {},
                removeClassForElementIndex: function removeClassForElementIndex() {
                    return undefined;
                },
                setAttributeForElementIndex: function setAttributeForElementIndex() {
                    return undefined;
                },
                setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
                    return undefined;
                },
                setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
                    return undefined;
                },
                getPrimaryTextAtIndex: function getPrimaryTextAtIndex() {
                    return '';
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter.getListItemCount() === 0) {
            return;
        }
        // TODO(b/172274142): consider all items when determining the list's type.
        if (this.adapter.hasCheckboxAtIndex(0)) {
            this.isCheckboxList = true;
            this.selectedIndex = [];
        } else if (this.adapter.hasRadioAtIndex(0)) {
            this.isRadioList = true;
        } else {
            this.maybeInitializeSingleSelection();
        }
        if (this.hasTypeahead) {
            this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
        }
    };
    /** Returns the index of the item that was last focused. */
    MDCListFoundation.prototype.getFocusedItemIndex = function () {
        return this.focusedItemIndex;
    };
    /** Toggles focus wrapping with keyboard navigation. */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus = value;
    };
    /**
     * Toggles orientation direction for keyboard navigation (true for vertical,
     * false for horizontal).
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical = value;
    };
    /** Toggles single-selection behavior. */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList = value;
        if (value) {
            this.maybeInitializeSingleSelection();
            this.selectedIndex = this.getSelectedIndexFromDOM();
        }
    };
    MDCListFoundation.prototype.setDisabledItemsFocusable = function (value) {
        this.areDisabledItemsFocusable = value;
    };
    /**
     * Automatically determines whether the list is single selection list. If so,
     * initializes the internal state to match the selected item.
     */
    MDCListFoundation.prototype.maybeInitializeSingleSelection = function () {
        var selectedItemIndex = this.getSelectedIndexFromDOM();
        if (selectedItemIndex === constants_1.numbers.UNSET_INDEX) return;
        var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
        if (hasActivatedClass) {
            this.setUseActivatedClass(true);
        }
        this.isSingleSelectionList = true;
        this.selectedIndex = selectedItemIndex;
    };
    /** @return Index of the first selected item based on the DOM state. */
    MDCListFoundation.prototype.getSelectedIndexFromDOM = function () {
        var selectedIndex = constants_1.numbers.UNSET_INDEX;
        var listItemsCount = this.adapter.getListItemCount();
        for (var i = 0; i < listItemsCount; i++) {
            var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, constants_1.cssClasses.LIST_ITEM_SELECTED_CLASS);
            var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
            if (!(hasSelectedClass || hasActivatedClass)) {
                continue;
            }
            selectedIndex = i;
            break;
        }
        return selectedIndex;
    };
    /**
     * Sets whether typeahead is enabled on the list.
     * @param hasTypeahead Whether typeahead is enabled.
     */
    MDCListFoundation.prototype.setHasTypeahead = function (hasTypeahead) {
        this.hasTypeahead = hasTypeahead;
        if (hasTypeahead) {
            this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
        }
    };
    /**
     * @return Whether typeahead is currently matching a user-specified prefix.
     */
    MDCListFoundation.prototype.isTypeaheadInProgress = function () {
        return this.hasTypeahead && typeahead.isTypingInProgress(this.typeaheadState);
    };
    /** Toggle use of the "activated" CSS class. */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass = useActivated;
    };
    /**
     * Toggles use of the selected attribute (true for aria-selected, false for
     * aria-checked).
     */
    MDCListFoundation.prototype.setUseSelectedAttribute = function (useSelected) {
        this.useSelectedAttr = useSelected;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index, options) {
        if (options === void 0) {
            options = {};
        }
        if (!this.isIndexValid(index)) {
            return;
        }
        if (this.isCheckboxList) {
            this.setCheckboxAtIndex(index, options);
        } else if (this.isRadioList) {
            this.setRadioAtIndex(index, options);
        } else {
            this.setSingleSelectionAtIndex(index, options);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (listItemIndex) {
        if (listItemIndex >= 0) {
            this.focusedItemIndex = listItemIndex;
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '0');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '-1');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */
        setTimeout(function () {
            if (!_this.adapter.isFocusInsideList()) {
                _this.setTabindexToFirstSelectedOrFocusedItem();
            }
        }, 0);
    };
    MDCListFoundation.prototype.isIndexDisabled = function (index) {
        return this.adapter.listItemAtIndexHasClass(index, constants_1.cssClasses.LIST_ITEM_DISABLED_CLASS);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (event, isRootListItem, listItemIndex) {
        var _this = this;
        var _a;
        var isArrowLeft = keyboard_1.normalizeKey(event) === 'ArrowLeft';
        var isArrowUp = keyboard_1.normalizeKey(event) === 'ArrowUp';
        var isArrowRight = keyboard_1.normalizeKey(event) === 'ArrowRight';
        var isArrowDown = keyboard_1.normalizeKey(event) === 'ArrowDown';
        var isHome = keyboard_1.normalizeKey(event) === 'Home';
        var isEnd = keyboard_1.normalizeKey(event) === 'End';
        var isEnter = keyboard_1.normalizeKey(event) === 'Enter';
        var isSpace = keyboard_1.normalizeKey(event) === 'Spacebar';
        // The keys for forward and back differ based on list orientation.
        var isForward = this.isVertical && isArrowDown || !this.isVertical && isArrowRight;
        var isBack = this.isVertical && isArrowUp || !this.isVertical && isArrowLeft;
        // Have to check both upper and lower case, because having caps lock on
        // affects the value.
        var isLetterA = event.key === 'A' || event.key === 'a';
        var eventHasModifiers = createModifierChecker(event);
        if (this.adapter.isRootFocused()) {
            if ((isBack || isEnd) && eventHasModifiers([])) {
                event.preventDefault();
                this.focusLastElement();
            } else if ((isForward || isHome) && eventHasModifiers([])) {
                event.preventDefault();
                this.focusFirstElement();
            } else if (isBack && eventHasModifiers(['Shift']) && this.isCheckboxList) {
                event.preventDefault();
                var focusedIndex = this.focusLastElement();
                if (focusedIndex !== -1) {
                    this.setSelectedIndexOnAction(focusedIndex, false);
                }
            } else if (isForward && eventHasModifiers(['Shift']) && this.isCheckboxList) {
                event.preventDefault();
                var focusedIndex = this.focusFirstElement();
                if (focusedIndex !== -1) {
                    this.setSelectedIndexOnAction(focusedIndex, false);
                }
            }
            if (this.hasTypeahead) {
                var handleKeydownOpts = {
                    event: event,
                    focusItemAtIndex: function focusItemAtIndex(index) {
                        _this.focusItemAtIndex(index);
                    },
                    focusedItemIndex: -1,
                    isTargetListItem: isRootListItem,
                    sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                    isItemAtIndexDisabled: function isItemAtIndexDisabled(index) {
                        return _this.isIndexDisabled(index);
                    }
                };
                typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
            }
            return;
        }
        var currentIndex = this.adapter.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        if (isForward && eventHasModifiers([])) {
            events_1.preventDefaultEvent(event);
            this.focusNextElement(currentIndex);
        } else if (isBack && eventHasModifiers([])) {
            events_1.preventDefaultEvent(event);
            this.focusPrevElement(currentIndex);
        } else if (isForward && eventHasModifiers(['Shift']) && this.isCheckboxList) {
            events_1.preventDefaultEvent(event);
            var focusedIndex = this.focusNextElement(currentIndex);
            if (focusedIndex !== -1) {
                this.setSelectedIndexOnAction(focusedIndex, false);
            }
        } else if (isBack && eventHasModifiers(['Shift']) && this.isCheckboxList) {
            events_1.preventDefaultEvent(event);
            var focusedIndex = this.focusPrevElement(currentIndex);
            if (focusedIndex !== -1) {
                this.setSelectedIndexOnAction(focusedIndex, false);
            }
        } else if (isHome && eventHasModifiers([])) {
            events_1.preventDefaultEvent(event);
            this.focusFirstElement();
        } else if (isEnd && eventHasModifiers([])) {
            events_1.preventDefaultEvent(event);
            this.focusLastElement();
        } else if (isHome && eventHasModifiers(['Control', 'Shift']) && this.isCheckboxList) {
            events_1.preventDefaultEvent(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            this.focusFirstElement();
            this.toggleCheckboxRange(0, currentIndex, currentIndex);
        } else if (isEnd && eventHasModifiers(['Control', 'Shift']) && this.isCheckboxList) {
            events_1.preventDefaultEvent(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            this.focusLastElement();
            this.toggleCheckboxRange(currentIndex, this.adapter.getListItemCount() - 1, currentIndex);
        } else if (isLetterA && eventHasModifiers(['Control']) && this.isCheckboxList) {
            event.preventDefault();
            this.checkboxListToggleAll(this.selectedIndex === constants_1.numbers.UNSET_INDEX ? [] : this.selectedIndex, true);
        } else if ((isEnter || isSpace) && eventHasModifiers([])) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                var target = event.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                events_1.preventDefaultEvent(event);
                if (this.isIndexDisabled(currentIndex)) {
                    return;
                }
                if (!this.isTypeaheadInProgress()) {
                    if (this.isSelectableList()) {
                        this.setSelectedIndexOnAction(currentIndex, false);
                    }
                    this.adapter.notifyAction(currentIndex);
                }
            }
        } else if ((isEnter || isSpace) && eventHasModifiers(['Shift']) && this.isCheckboxList) {
            // Return early if enter key is pressed on anchor element which triggers
            // synthetic MouseEvent event.
            var target = event.target;
            if (target && target.tagName === 'A' && isEnter) {
                return;
            }
            events_1.preventDefaultEvent(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            if (!this.isTypeaheadInProgress()) {
                this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : currentIndex, currentIndex, currentIndex);
                this.adapter.notifyAction(currentIndex);
            }
        }
        if (this.hasTypeahead) {
            var handleKeydownOpts = {
                event: event,
                focusItemAtIndex: function focusItemAtIndex(index) {
                    _this.focusItemAtIndex(index);
                },
                focusedItemIndex: this.focusedItemIndex,
                isTargetListItem: isRootListItem,
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                isItemAtIndexDisabled: function isItemAtIndexDisabled(index) {
                    return _this.isIndexDisabled(index);
                }
            };
            typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
    };
    /**
     * Click handler for the list.
     *
     * @param index Index for the item that has been clicked.
     * @param isCheckboxAlreadyUpdatedInAdapter Whether the checkbox for
     *   the list item has already been updated in the adapter. This attribute
     *   should be set to `true` when e.g. the click event directly landed on
     *   the underlying native checkbox element which would cause the checked
     *   state to be already toggled within `adapter.isCheckboxCheckedAtIndex`.
     */
    MDCListFoundation.prototype.handleClick = function (index, isCheckboxAlreadyUpdatedInAdapter, event) {
        var _a;
        var eventHasModifiers = createModifierChecker(event);
        if (index === constants_1.numbers.UNSET_INDEX) {
            return;
        }
        if (this.isIndexDisabled(index)) {
            return;
        }
        if (eventHasModifiers([])) {
            if (this.isSelectableList()) {
                this.setSelectedIndexOnAction(index, isCheckboxAlreadyUpdatedInAdapter);
            }
            this.adapter.notifyAction(index);
        } else if (this.isCheckboxList && eventHasModifiers(['Shift'])) {
            this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : index, index, index);
            this.adapter.notifyAction(index);
        }
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter.getListItemCount();
        var nextIndex = index;
        var firstChecked = null;
        do {
            nextIndex++;
            if (nextIndex >= count) {
                if (this.wrapFocus) {
                    nextIndex = 0;
                } else {
                    // Return early because last item is already focused.
                    return index;
                }
            }
            if (nextIndex === firstChecked) {
                return -1;
            }
            firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : nextIndex;
        } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(nextIndex));
        this.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var count = this.adapter.getListItemCount();
        var prevIndex = index;
        var firstChecked = null;
        do {
            prevIndex--;
            if (prevIndex < 0) {
                if (this.wrapFocus) {
                    prevIndex = count - 1;
                } else {
                    // Return early because first item is already focused.
                    return index;
                }
            }
            if (prevIndex === firstChecked) {
                return -1;
            }
            firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : prevIndex;
        } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(prevIndex));
        this.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        // Pass -1 to `focusNextElement`, since it will incremement to 0 and focus
        // the first element.
        return this.focusNextElement(-1);
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        // Pass the length of the list to `focusNextElement` since it will decrement
        // to length - 1 and focus the last element.
        return this.focusPrevElement(this.adapter.getListItemCount());
    };
    MDCListFoundation.prototype.focusInitialElement = function () {
        var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
        if (initialIndex !== constants_1.numbers.UNSET_INDEX) {
            this.focusItemAtIndex(initialIndex);
        }
        return initialIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
        if (!this.isIndexValid(itemIndex, false)) {
            return;
        }
        if (isEnabled) {
            this.adapter.removeClassForElementIndex(itemIndex, constants_1.cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, constants_1.strings.ARIA_DISABLED, 'false');
        } else {
            this.adapter.addClassForElementIndex(itemIndex, constants_1.cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, constants_1.strings.ARIA_DISABLED, 'true');
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex = function (index, options) {
        if (options === void 0) {
            options = {};
        }
        if (this.selectedIndex === index && !options.forceUpdate) {
            return;
        }
        var selectedClassName = constants_1.cssClasses.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass) {
            selectedClassName = constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex !== constants_1.numbers.UNSET_INDEX) {
            this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
        }
        this.setAriaForSingleSelectionAtIndex(index);
        this.setTabindexAtIndex(index);
        if (index !== constants_1.numbers.UNSET_INDEX) {
            this.adapter.addClassForElementIndex(index, selectedClassName);
        }
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && !options.forceUpdate) {
            this.adapter.notifySelectionChange([index]);
        }
    };
    /**
     * Sets aria attribute for single selection at given index.
     */
    MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex = function (index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex === constants_1.numbers.UNSET_INDEX && index !== constants_1.numbers.UNSET_INDEX) {
            this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(index, constants_1.strings.ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue !== null;
        var ariaAttribute = isAriaCurrent ? constants_1.strings.ARIA_CURRENT : constants_1.strings.ARIA_SELECTED;
        if (this.selectedIndex !== constants_1.numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, 'false');
        }
        if (index !== constants_1.numbers.UNSET_INDEX) {
            var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : 'true';
            this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
        }
    };
    /**
     * Returns the attribute to use for indicating selection status.
     */
    MDCListFoundation.prototype.getSelectionAttribute = function () {
        return this.useSelectedAttr ? constants_1.strings.ARIA_SELECTED : constants_1.strings.ARIA_CHECKED;
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it
     * is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex = function (index, options) {
        if (options === void 0) {
            options = {};
        }
        var selectionAttribute = this.getSelectionAttribute();
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex === index && !options.forceUpdate) {
            return;
        }
        if (this.selectedIndex !== constants_1.numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, 'false');
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, 'true');
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && !options.forceUpdate) {
            this.adapter.notifySelectionChange([index]);
        }
    };
    MDCListFoundation.prototype.setCheckboxAtIndex = function (indices, options) {
        if (options === void 0) {
            options = {};
        }
        var currentIndex = this.selectedIndex;
        // If this update is not triggered by a user interaction, we do not
        // need to know about the currently selected indices and can avoid
        // constructing the `Set` for performance reasons.
        var currentlySelected = options.isUserInteraction ? new Set(currentIndex === constants_1.numbers.UNSET_INDEX ? [] : currentIndex) : null;
        var selectionAttribute = this.getSelectionAttribute();
        var changedIndices = [];
        for (var i = 0; i < this.adapter.getListItemCount(); i++) {
            if (options.omitDisabledItems && this.isIndexDisabled(i)) {
                continue;
            }
            var previousIsChecked = currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(i);
            var newIsChecked = indices.indexOf(i) >= 0;
            // If the selection has changed for this item, we keep track of it
            // so that we can notify the adapter.
            if (newIsChecked !== previousIsChecked) {
                changedIndices.push(i);
            }
            this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
            this.adapter.setAttributeForElementIndex(i, selectionAttribute, newIsChecked ? 'true' : 'false');
        }
        this.selectedIndex = options.omitDisabledItems ? this.resolveSelectedIndices(indices) : indices;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && changedIndices.length) {
            this.adapter.notifySelectionChange(changedIndices);
        }
    };
    /**
     * Helper method for ensuring that the list of selected indices remains
     * accurate when calling setCheckboxAtIndex with omitDisabledItems set to
     * true.
     */
    MDCListFoundation.prototype.resolveSelectedIndices = function (setCheckedItems) {
        var _this = this;
        var currentlySelectedItems = this.selectedIndex === constants_1.numbers.UNSET_INDEX ? [] : this.selectedIndex;
        var currentlySelectedDisabledItems = currentlySelectedItems.filter(function (i) {
            return _this.isIndexDisabled(i);
        });
        var enabledSetCheckedItems = setCheckedItems.filter(function (i) {
            return !_this.isIndexDisabled(i);
        });
        // Updated selectedIndex should be the enabled setCheckedItems + any missing
        // selected disabled items.
        var updatedSelectedItems = __spreadArray([], __read(new Set(__spreadArray(__spreadArray([], __read(enabledSetCheckedItems)), __read(currentlySelectedDisabledItems)))));
        return updatedSelectedItems.sort(function (a, b) {
            return a - b;
        });
    };
    /**
     * Toggles the state of all checkboxes in the given range (inclusive) based
     * on the state of the checkbox at the `toggleIndex`. To determine whether
     * to set the given range to checked or unchecked, read the value of the
     * checkbox at the `toggleIndex` and negate it. Then apply that new checked
     * state to all checkboxes in the range.
     * @param fromIndex The start of the range of checkboxes to toggle
     * @param toIndex The end of the range of checkboxes to toggle
     * @param toggleIndex The index that will be used to determine the new state
     *     of the given checkbox range.
     */
    MDCListFoundation.prototype.toggleCheckboxRange = function (fromIndex, toIndex, toggleIndex) {
        this.lastSelectedIndex = toggleIndex;
        var currentlySelected = new Set(this.selectedIndex === constants_1.numbers.UNSET_INDEX ? [] : this.selectedIndex);
        var newIsChecked = !(currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(toggleIndex));
        var _a = __read([fromIndex, toIndex].sort(), 2),
            startIndex = _a[0],
            endIndex = _a[1];
        var selectionAttribute = this.getSelectionAttribute();
        var changedIndices = [];
        for (var i = startIndex; i <= endIndex; i++) {
            if (this.isIndexDisabled(i)) {
                continue;
            }
            var previousIsChecked = currentlySelected.has(i);
            // If the selection has changed for this item, we keep track of it
            // so that we can notify the adapter.
            if (newIsChecked !== previousIsChecked) {
                changedIndices.push(i);
                this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
                this.adapter.setAttributeForElementIndex(i, selectionAttribute, "" + newIsChecked);
                if (newIsChecked) {
                    currentlySelected.add(i);
                } else {
                    currentlySelected.delete(i);
                }
            }
        }
        // If the selected value has changed, update and notify the selection
        // change to the adapter.
        if (changedIndices.length) {
            this.selectedIndex = __spreadArray([], __read(currentlySelected));
            this.adapter.notifySelectionChange(changedIndices);
        }
    };
    MDCListFoundation.prototype.setTabindexAtIndex = function (index) {
        if (this.focusedItemIndex === constants_1.numbers.UNSET_INDEX && index !== 0 && index !== constants_1.numbers.UNSET_INDEX) {
            // If some list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has
            // no preselected items.
            this.adapter.setAttributeForElementIndex(0, 'tabindex', '-1');
        } else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
            this.adapter.setAttributeForElementIndex(this.focusedItemIndex, 'tabindex', '-1');
        }
        // Set the previous selection's tabindex to -1. We need this because
        // in selection menus that are not visible, programmatically setting an
        // option will not change focus but will change where tabindex should be
        // 0.
        if (!(this.selectedIndex instanceof Array) && this.selectedIndex !== index && this.focusedItemIndex !== constants_1.numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, 'tabindex', '-1');
        }
        if (index !== constants_1.numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(index, 'tabindex', '0');
        }
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio
     *     list.
     */
    MDCListFoundation.prototype.isSelectableList = function () {
        return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
        var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation.prototype.getFirstSelectedOrFocusedItemIndex = function () {
        var e_1, _a;
        var firstFocusableListItem = this.getFirstEnabledItem();
        if (this.adapter.getListItemCount() === 0) {
            return constants_1.numbers.UNSET_INDEX;
        }
        // Action lists retain focus on the most recently focused item.
        if (!this.isSelectableList()) {
            return Math.max(this.focusedItemIndex, firstFocusableListItem);
        }
        // Single-selection lists focus the selected item.
        if (typeof this.selectedIndex === 'number' && this.selectedIndex !== constants_1.numbers.UNSET_INDEX) {
            return this.areDisabledItemsFocusable && this.isIndexDisabled(this.selectedIndex) ? firstFocusableListItem : this.selectedIndex;
        }
        // Multiple-selection lists focus the first enabled selected item.
        if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) {
            var sorted = __spreadArray([], __read(this.selectedIndex)).sort(function (a, b) {
                return a - b;
            });
            try {
                for (var sorted_1 = __values(sorted), sorted_1_1 = sorted_1.next(); !sorted_1_1.done; sorted_1_1 = sorted_1.next()) {
                    var index = sorted_1_1.value;
                    if (this.isIndexDisabled(index) && !this.areDisabledItemsFocusable) {
                        continue;
                    } else {
                        return index;
                    }
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 };
            } finally {
                try {
                    if (sorted_1_1 && !sorted_1_1.done && (_a = sorted_1.return)) _a.call(sorted_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
        }
        // Selection lists without a selection focus the first item.
        return firstFocusableListItem;
    };
    MDCListFoundation.prototype.getFirstEnabledItem = function () {
        var listSize = this.adapter.getListItemCount();
        var i = 0;
        while (i < listSize) {
            if (!this.isIndexDisabled(i)) {
                break;
            }
            i++;
        }
        return i === listSize ? constants_1.numbers.UNSET_INDEX : i;
    };
    MDCListFoundation.prototype.isIndexValid = function (index, validateListType) {
        var _this = this;
        if (validateListType === void 0) {
            validateListType = true;
        }
        if (index instanceof Array) {
            if (!this.isCheckboxList && validateListType) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            } else {
                return index.some(function (i) {
                    return _this.isIndexInRange(i);
                });
            }
        } else if (typeof index === 'number') {
            if (this.isCheckboxList && validateListType) {
                throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
            }
            return this.isIndexInRange(index) || this.isSingleSelectionList && index === constants_1.numbers.UNSET_INDEX;
        } else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange = function (index) {
        var listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    };
    /**
     * Sets selected index on user action, toggles checkboxes in checkbox lists
     * by default, unless `isCheckboxAlreadyUpdatedInAdapter` is set to `true`.
     *
     * In cases where `isCheckboxAlreadyUpdatedInAdapter` is set to `true`, the
     * UI is just updated to reflect the value returned by the adapter.
     *
     * When calling this, make sure user interaction does not toggle disabled
     * list items.
     */
    MDCListFoundation.prototype.setSelectedIndexOnAction = function (index, isCheckboxAlreadyUpdatedInAdapter) {
        this.lastSelectedIndex = index;
        if (this.isCheckboxList) {
            this.toggleCheckboxAtIndex(index, isCheckboxAlreadyUpdatedInAdapter);
            this.adapter.notifySelectionChange([index]);
        } else {
            this.setSelectedIndex(index, { isUserInteraction: true });
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex = function (index, isCheckboxAlreadyUpdatedInAdapter) {
        var selectionAttribute = this.getSelectionAttribute();
        var adapterIsChecked = this.adapter.isCheckboxCheckedAtIndex(index);
        // By default the checked value from the adapter is toggled unless the
        // checked state in the adapter has already been updated beforehand.
        // This can be happen when the underlying native checkbox has already
        // been updated through the native click event.
        var newCheckedValue;
        if (isCheckboxAlreadyUpdatedInAdapter) {
            newCheckedValue = adapterIsChecked;
        } else {
            newCheckedValue = !adapterIsChecked;
            this.adapter.setCheckedCheckboxOrRadioAtIndex(index, newCheckedValue);
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, newCheckedValue ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not
        // initialized then provide a default value.
        var selectedIndexes = this.selectedIndex === constants_1.numbers.UNSET_INDEX ? [] : this.selectedIndex.slice();
        if (newCheckedValue) {
            selectedIndexes.push(index);
        } else {
            selectedIndexes = selectedIndexes.filter(function (i) {
                return i !== index;
            });
        }
        this.selectedIndex = selectedIndexes;
    };
    MDCListFoundation.prototype.focusItemAtIndex = function (index) {
        this.adapter.focusItemAtIndex(index);
        this.focusedItemIndex = index;
    };
    MDCListFoundation.prototype.getEnabledListItemCount = function () {
        var listSize = this.adapter.getListItemCount();
        var adjustedCount = 0;
        for (var i = 0; i < listSize; i++) {
            if (!this.isIndexDisabled(i)) {
                adjustedCount++;
            }
        }
        return adjustedCount;
    };
    MDCListFoundation.prototype.checkboxListToggleAll = function (currentlySelectedIndices, isUserInteraction) {
        var _this = this;
        var enabledListItemCount = this.getEnabledListItemCount();
        var totalListItemCount = this.adapter.getListItemCount();
        var currentlyEnabledSelectedIndices = currentlySelectedIndices.filter(function (i) {
            return !_this.isIndexDisabled(i);
        });
        // If all items are selected, deselect everything.
        // We check >= rather than === to `enabledListItemCount` since a disabled
        // item could be selected, and we don't take that into consideration when
        // toggling the other checkbox values.
        if (currentlyEnabledSelectedIndices.length >= enabledListItemCount) {
            // Use omitDisabledItems option to ensure disabled selected items are not
            // de-selected.
            this.setCheckboxAtIndex([], { isUserInteraction: isUserInteraction, omitDisabledItems: true });
        } else {
            // Otherwise select all enabled options.
            var allIndexes = [];
            for (var i = 0; i < totalListItemCount; i++) {
                if (!this.isIndexDisabled(i) || currentlySelectedIndices.indexOf(i) > -1) {
                    allIndexes.push(i);
                }
            }
            // Use omitDisabledItems option to ensure disabled selected items are not
            // de-selected.
            this.setCheckboxAtIndex(allIndexes, { isUserInteraction: isUserInteraction, omitDisabledItems: true });
        }
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Only
     *     relevant when starting a new match sequence. To start a new match
     *     sequence, clear the buffer using `clearTypeaheadBuffer`, or wait for
     *     the buffer to clear after a set interval defined in list foundation.
     *     Defaults to the currently focused index.
     * @return The index of the matched item, or -1 if no match.
     */
    MDCListFoundation.prototype.typeaheadMatchItem = function (nextChar, startingIndex, skipFocus) {
        var _this = this;
        if (skipFocus === void 0) {
            skipFocus = false;
        }
        var opts = {
            focusItemAtIndex: function focusItemAtIndex(index) {
                _this.focusItemAtIndex(index);
            },
            focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
            nextChar: nextChar,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            skipFocus: skipFocus,
            isItemAtIndexDisabled: function isItemAtIndexDisabled(index) {
                return _this.isIndexDisabled(index);
            }
        };
        return typeahead.matchItem(opts, this.typeaheadState);
    };
    /**
     * Initializes the MDCListTextAndIndex data structure by indexing the
     * current list items by primary text.
     *
     * @return The primary texts of all the list items sorted by first
     *     character.
     */
    MDCListFoundation.prototype.typeaheadInitSortedIndex = function () {
        return typeahead.initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    };
    /**
     * Clears the typeahead buffer.
     */
    MDCListFoundation.prototype.clearTypeaheadBuffer = function () {
        typeahead.clearBuffer(this.typeaheadState);
    };
    return MDCListFoundation;
}(foundation_1.MDCFoundation);
exports.MDCListFoundation = MDCListFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCListFoundation;

/***/ }),

/***/ "./packages/mdc-list/typeahead.ts":
/*!****************************************!*\
  !*** ./packages/mdc-list/typeahead.ts ***!
  \****************************************/
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
exports.handleKeydown = exports.clearBuffer = exports.isTypingInProgress = exports.matchItem = exports.initSortedIndex = exports.initState = void 0;
var keyboard_1 = __webpack_require__(/*! @material/dom/keyboard */ "./packages/mdc-dom/keyboard.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-list/constants.ts");
var events_1 = __webpack_require__(/*! ./events */ "./packages/mdc-list/events.ts");
/**
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */
function initState() {
    var state = {
        bufferClearTimeout: 0,
        currentFirstChar: '',
        sortedIndexCursor: 0,
        typeaheadBuffer: ''
    };
    return state;
}
exports.initState = initState;
/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and its index
 */
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
    var sortedIndexByFirstChar = new Map();
    // Aggregate item text to index mapping
    for (var i = 0; i < listItemCount; i++) {
        var primaryText = getPrimaryTextByItemIndex(i).trim();
        if (!primaryText) {
            continue;
        }
        var firstChar = primaryText[0].toLowerCase();
        if (!sortedIndexByFirstChar.has(firstChar)) {
            sortedIndexByFirstChar.set(firstChar, []);
        }
        sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
    }
    // Sort the mapping
    // TODO(b/157162694): Investigate replacing forEach with Map.values()
    sortedIndexByFirstChar.forEach(function (values) {
        values.sort(function (first, second) {
            return first.index - second.index;
        });
    });
    return sortedIndexByFirstChar;
}
exports.initSortedIndex = initSortedIndex;
/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */
function matchItem(opts, state) {
    var nextChar = opts.nextChar,
        focusItemAtIndex = opts.focusItemAtIndex,
        sortedIndexByFirstChar = opts.sortedIndexByFirstChar,
        focusedItemIndex = opts.focusedItemIndex,
        skipFocus = opts.skipFocus,
        isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    clearTimeout(state.bufferClearTimeout);
    state.bufferClearTimeout = setTimeout(function () {
        clearBuffer(state);
    }, constants_1.numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
    state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
    var index;
    if (state.typeaheadBuffer.length === 1) {
        index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
    } else {
        index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
    }
    if (index !== -1 && !skipFocus) {
        focusItemAtIndex(index);
    }
    return index;
}
exports.matchItem = matchItem;
/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */
function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
        return -1;
    }
    // Has the same firstChar been recently matched?
    // Also, did starting index remain the same between key presses?
    // If both hold true, simply increment index.
    if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
        state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
        var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
        if (!isItemAtIndexDisabled(newIndex)) {
            return newIndex;
        }
    }
    // If we're here, it means one of the following happened:
    // - either firstChar or startingIndex has changed, invalidating the
    // cursor.
    // - The next item of typeahead is disabled, so we have to look further.
    state.currentFirstChar = firstChar;
    var newCursorPosition = -1;
    var cursorPosition;
    // Find the first non-disabled item as a fallback.
    for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
        if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
            newCursorPosition = cursorPosition;
            break;
        }
    }
    // Advance cursor to first item matching the firstChar that is positioned
    // after starting item. Cursor is unchanged from fallback if there's no
    // such item.
    for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
        if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
            newCursorPosition = cursorPosition;
            break;
        }
    }
    if (newCursorPosition !== -1) {
        state.sortedIndexCursor = newCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */
function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
        return -1;
    }
    // Do nothing if text already matches
    var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
    if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
        return startingItem.index;
    }
    // Find next item that matches completely; if no match, we'll eventually
    // loop around to same position
    var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var nextCursorPosition = -1;
    while (cursorPosition !== state.sortedIndexCursor) {
        var currentItem = itemsMatchingFirstChar[cursorPosition];
        var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
        var isEnabled = !isItemAtIndexDisabled(currentItem.index);
        if (matches && isEnabled) {
            nextCursorPosition = cursorPosition;
            break;
        }
        cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
    }
    if (nextCursorPosition !== -1) {
        state.sortedIndexCursor = nextCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function isTypingInProgress(state) {
    return state.typeaheadBuffer.length > 0;
}
exports.isTypingInProgress = isTypingInProgress;
/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function clearBuffer(state) {
    state.typeaheadBuffer = '';
}
exports.clearBuffer = clearBuffer;
/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicking the typeahead functionality
 * of a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @return index of the item matched by the keydown. -1 if not matched.
 */
function handleKeydown(opts, state) {
    var event = opts.event,
        isTargetListItem = opts.isTargetListItem,
        focusedItemIndex = opts.focusedItemIndex,
        focusItemAtIndex = opts.focusItemAtIndex,
        sortedIndexByFirstChar = opts.sortedIndexByFirstChar,
        isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    var isArrowLeft = keyboard_1.normalizeKey(event) === 'ArrowLeft';
    var isArrowUp = keyboard_1.normalizeKey(event) === 'ArrowUp';
    var isArrowRight = keyboard_1.normalizeKey(event) === 'ArrowRight';
    var isArrowDown = keyboard_1.normalizeKey(event) === 'ArrowDown';
    var isHome = keyboard_1.normalizeKey(event) === 'Home';
    var isEnd = keyboard_1.normalizeKey(event) === 'End';
    var isEnter = keyboard_1.normalizeKey(event) === 'Enter';
    var isSpace = keyboard_1.normalizeKey(event) === 'Spacebar';
    if (event.altKey || event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
        return -1;
    }
    var isCharacterKey = !isSpace && event.key.length === 1;
    if (isCharacterKey) {
        events_1.preventDefaultEvent(event);
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: event.key.toLowerCase(),
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled
        };
        return matchItem(matchItemOpts, state);
    }
    if (!isSpace) {
        return -1;
    }
    if (isTargetListItem) {
        events_1.preventDefaultEvent(event);
    }
    var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
    if (typeaheadOnListItem) {
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: ' ',
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled
        };
        // space participates in typeahead matching if in rapid typing mode
        return matchItem(matchItemOpts, state);
    }
    return -1;
}
exports.handleKeydown = handleKeydown;

/***/ })

/******/ });
});
//# sourceMappingURL=mdc.drawer.js.map