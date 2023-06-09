"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapStyleSheet = exports.SafeStyleSheet = exports.isStyleSheet = exports.unwrapStyle = exports.SafeStyle = exports.isStyle = exports.unwrapScript = exports.SafeScript = exports.isScript = exports.EMPTY_SCRIPT = exports.unwrapResourceUrl = exports.TrustedResourceUrl = exports.isResourceUrl = exports.unwrapHtml = exports.SafeHtml = exports.isHtml = exports.EMPTY_HTML = exports.unwrapAttributePrefix = exports.SafeAttributePrefix = exports.safeStyleSheet = exports.concatStyleSheets = exports.safeStyle = exports.concatStyles = exports.scriptFromJson = exports.safeScriptWithArgs = exports.safeScript = exports.concatScripts = exports.trustedResourceUrl = exports.replaceFragment = exports.blobUrlFromScript = exports.appendParams = exports.HtmlSanitizerBuilder = exports.sanitizeHtmlToFragment = exports.sanitizeHtmlAssertUnchanged = exports.sanitizeHtml = exports.htmlEscape = exports.createScriptSrc = exports.createScript = exports.concatHtmls = exports.safeAttrPrefix = void 0;
/** Safe builders */
var attribute_builders_1 = require("./builders/attribute_builders");
Object.defineProperty(exports, "safeAttrPrefix", { enumerable: true, get: function () { return attribute_builders_1.safeAttrPrefix; } });
var html_builders_1 = require("./builders/html_builders");
Object.defineProperty(exports, "concatHtmls", { enumerable: true, get: function () { return html_builders_1.concatHtmls; } });
Object.defineProperty(exports, "createScript", { enumerable: true, get: function () { return html_builders_1.createScript; } });
Object.defineProperty(exports, "createScriptSrc", { enumerable: true, get: function () { return html_builders_1.createScriptSrc; } });
Object.defineProperty(exports, "htmlEscape", { enumerable: true, get: function () { return html_builders_1.htmlEscape; } });
var html_sanitizer_1 = require("./builders/html_sanitizer/html_sanitizer");
Object.defineProperty(exports, "sanitizeHtml", { enumerable: true, get: function () { return html_sanitizer_1.sanitizeHtml; } });
Object.defineProperty(exports, "sanitizeHtmlAssertUnchanged", { enumerable: true, get: function () { return html_sanitizer_1.sanitizeHtmlAssertUnchanged; } });
Object.defineProperty(exports, "sanitizeHtmlToFragment", { enumerable: true, get: function () { return html_sanitizer_1.sanitizeHtmlToFragment; } });
var html_sanitizer_builder_1 = require("./builders/html_sanitizer/html_sanitizer_builder");
Object.defineProperty(exports, "HtmlSanitizerBuilder", { enumerable: true, get: function () { return html_sanitizer_builder_1.HtmlSanitizerBuilder; } });
var resource_url_builders_1 = require("./builders/resource_url_builders");
Object.defineProperty(exports, "appendParams", { enumerable: true, get: function () { return resource_url_builders_1.appendParams; } });
Object.defineProperty(exports, "blobUrlFromScript", { enumerable: true, get: function () { return resource_url_builders_1.blobUrlFromScript; } });
Object.defineProperty(exports, "replaceFragment", { enumerable: true, get: function () { return resource_url_builders_1.replaceFragment; } });
Object.defineProperty(exports, "trustedResourceUrl", { enumerable: true, get: function () { return resource_url_builders_1.trustedResourceUrl; } });
var script_builders_1 = require("./builders/script_builders");
Object.defineProperty(exports, "concatScripts", { enumerable: true, get: function () { return script_builders_1.concatScripts; } });
Object.defineProperty(exports, "safeScript", { enumerable: true, get: function () { return script_builders_1.safeScript; } });
Object.defineProperty(exports, "safeScriptWithArgs", { enumerable: true, get: function () { return script_builders_1.safeScriptWithArgs; } });
Object.defineProperty(exports, "scriptFromJson", { enumerable: true, get: function () { return script_builders_1.scriptFromJson; } });
var style_builders_1 = require("./builders/style_builders");
Object.defineProperty(exports, "concatStyles", { enumerable: true, get: function () { return style_builders_1.concatStyles; } });
Object.defineProperty(exports, "safeStyle", { enumerable: true, get: function () { return style_builders_1.safeStyle; } });
var style_sheet_builders_1 = require("./builders/style_sheet_builders");
Object.defineProperty(exports, "concatStyleSheets", { enumerable: true, get: function () { return style_sheet_builders_1.concatStyleSheets; } });
Object.defineProperty(exports, "safeStyleSheet", { enumerable: true, get: function () { return style_sheet_builders_1.safeStyleSheet; } });
/** Types, constants and unwrappers */
var attribute_impl_1 = require("./internals/attribute_impl");
Object.defineProperty(exports, "SafeAttributePrefix", { enumerable: true, get: function () { return attribute_impl_1.SafeAttributePrefix; } });
Object.defineProperty(exports, "unwrapAttributePrefix", { enumerable: true, get: function () { return attribute_impl_1.unwrapAttributePrefix; } });
var html_impl_1 = require("./internals/html_impl");
Object.defineProperty(exports, "EMPTY_HTML", { enumerable: true, get: function () { return html_impl_1.EMPTY_HTML; } });
Object.defineProperty(exports, "isHtml", { enumerable: true, get: function () { return html_impl_1.isHtml; } });
Object.defineProperty(exports, "SafeHtml", { enumerable: true, get: function () { return html_impl_1.SafeHtml; } });
Object.defineProperty(exports, "unwrapHtml", { enumerable: true, get: function () { return html_impl_1.unwrapHtml; } });
var resource_url_impl_1 = require("./internals/resource_url_impl");
Object.defineProperty(exports, "isResourceUrl", { enumerable: true, get: function () { return resource_url_impl_1.isResourceUrl; } });
Object.defineProperty(exports, "TrustedResourceUrl", { enumerable: true, get: function () { return resource_url_impl_1.TrustedResourceUrl; } });
Object.defineProperty(exports, "unwrapResourceUrl", { enumerable: true, get: function () { return resource_url_impl_1.unwrapResourceUrl; } });
var script_impl_1 = require("./internals/script_impl");
Object.defineProperty(exports, "EMPTY_SCRIPT", { enumerable: true, get: function () { return script_impl_1.EMPTY_SCRIPT; } });
Object.defineProperty(exports, "isScript", { enumerable: true, get: function () { return script_impl_1.isScript; } });
Object.defineProperty(exports, "SafeScript", { enumerable: true, get: function () { return script_impl_1.SafeScript; } });
Object.defineProperty(exports, "unwrapScript", { enumerable: true, get: function () { return script_impl_1.unwrapScript; } });
var style_impl_1 = require("./internals/style_impl");
Object.defineProperty(exports, "isStyle", { enumerable: true, get: function () { return style_impl_1.isStyle; } });
Object.defineProperty(exports, "SafeStyle", { enumerable: true, get: function () { return style_impl_1.SafeStyle; } });
Object.defineProperty(exports, "unwrapStyle", { enumerable: true, get: function () { return style_impl_1.unwrapStyle; } });
var style_sheet_impl_1 = require("./internals/style_sheet_impl");
Object.defineProperty(exports, "isStyleSheet", { enumerable: true, get: function () { return style_sheet_impl_1.isStyleSheet; } });
Object.defineProperty(exports, "SafeStyleSheet", { enumerable: true, get: function () { return style_sheet_impl_1.SafeStyleSheet; } });
Object.defineProperty(exports, "unwrapStyleSheet", { enumerable: true, get: function () { return style_sheet_impl_1.unwrapStyleSheet; } });
