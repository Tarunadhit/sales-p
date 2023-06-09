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
require("../environment/dev");
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
        if (process.env.NODE_ENV !== 'production') {
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
