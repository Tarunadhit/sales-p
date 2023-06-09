/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/// <reference types="trusted-types" />
import '../environment/dev';
/**
 * String that is safe to use in HTML contexts in DOM APIs and HTML
 documents.
 */
export declare type SafeHtml = TrustedHTML;
/**
 * Also exports the constructor so that instanceof checks work.
 */
export declare const SafeHtml: typeof TrustedHTML;
/**
 * Builds a new `SafeHtml` from the given string, without enforcing safety
 * guarantees. It may cause side effects by creating a Trusted Types policy.
 * This shouldn't be exposed to application developers, and must only be used as
 * a step towards safe builders or safe constants.
 */
export declare function createHtml(html: string): SafeHtml;
/**
 * An empty `SafeHtml` constant.
 * Unlike the function above, using this will not create a policy.
 */
export declare const EMPTY_HTML: SafeHtml;
/**
 * Checks if the given value is a `SafeHtml` instance.
 */
export declare function isHtml(value: unknown): value is SafeHtml;
/**
 * Returns the value of the passed `SafeHtml` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedHTML` or a string if Trusted Types are disabled.
 */
export declare function unwrapHtml(value: SafeHtml): TrustedHTML | string;
