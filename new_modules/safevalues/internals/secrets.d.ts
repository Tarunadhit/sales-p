/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A secret token that must be passed to safe type constructors. It is only
 * accessible from within safevalues, ensuring that unrestricted safe type
 * creation is only possible within safevalues. In particular, this prevents
 * forgery such as `safeHtmlValue.constructor('javascript:evil')`.
 */
export declare const secretToken: {};
/**
 * Asserts that the given token matches the secret safevalues token. An
 * exception is thrown if that is not the case.
 */
export declare function ensureTokenIsValid(token: object): void;
