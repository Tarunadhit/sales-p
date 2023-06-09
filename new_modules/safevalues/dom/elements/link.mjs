/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { unwrapUrlOrSanitize } from '../../builders/url_sanitizer';
import { TrustedResourceUrl, unwrapResourceUrl } from '../../internals/resource_url_impl';
const SAFE_URL_REL_VALUES = [
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
export function setHrefAndRel(link, url, rel) {
    if (url instanceof TrustedResourceUrl) {
        link.href = unwrapResourceUrl(url).toString();
    }
    else {
        if (SAFE_URL_REL_VALUES.indexOf(rel) === -1) {
            throw new Error(`TrustedResourceUrl href attribute required with rel="${rel}"`);
        }
        const sanitizedUrl = unwrapUrlOrSanitize(url);
        if (sanitizedUrl === undefined) {
            return;
        }
        link.href = sanitizedUrl;
    }
    link.rel = rel;
}
