"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHrefAndRel = void 0;
var url_sanitizer_1 = require("../../builders/url_sanitizer");
var resource_url_impl_1 = require("../../internals/resource_url_impl");
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
