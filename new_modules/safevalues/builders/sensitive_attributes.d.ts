/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Security sensitive attribute names that should not be set through
 * `setAttribute` or similar functions.
 */
export declare const SECURITY_SENSITIVE_ATTRIBUTES: readonly ["href", "rel", "src", "srcdoc", "action", "formaction", "sandbox", "cite", "poster", "icon"];
