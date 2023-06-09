/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview Provides functions to enforce the SafeUrl contract at the sink
 * level.
 */
import '../environment/dev';
/**
 * Checks that the URL scheme is not javascript.
 * The URL parsing relies on the URL API in browsers that support it.
 * @param url The URL to sanitize for a SafeUrl sink.
 * @return undefined if url has a javascript: scheme, the original URL
 *     otherwise.
 */
export declare function sanitizeJavascriptUrl(url: string): string | undefined;
/**
 * Type alias for URLs passed to DOM sink wrappers.
 */
export declare type Url = string;
/**
 * Adapter to sanitize string URLs in DOM sink wrappers.
 * @return undefined if the URL was sanitized.
 */
export declare function unwrapUrlOrSanitize(url: Url): string | undefined;
/**
 * Sanitizes a URL restrictively.
 * This sanitizer protects against XSS and potentially other uncommon and
 * undesirable schemes that an attacker could use for e.g. phishing (tel:,
 * callto: ssh: etc schemes). This sanitizer is primarily meant to be used by
 * the HTML sanitizer.
 */
export declare function restrictivelySanitizeUrl(url: string): string;
