"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatHtmls = exports.createScriptSrc = exports.createScript = exports.htmlEscape = void 0;
var html_impl_1 = require("../internals/html_impl");
var resource_url_impl_1 = require("../internals/resource_url_impl");
var script_impl_1 = require("../internals/script_impl");
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
