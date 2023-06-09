/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/// <reference types="trusted-types" />
import '../environment/dev';
/**
 * JavaScript code that is safe to evaluate and use as the content of an HTML
 * script element.
 */
export declare type SafeScript = TrustedScript;
/**
 * Also exports the constructor so that instanceof checks work.
 */
export declare const SafeScript: typeof TrustedScript;
/**
 * Builds a new `SafeScript` from the given string, without enforcing
 * safety guarantees. It may cause side effects by creating a Trusted Types
 * policy. This shouldn't be exposed to application developers, and must only be
 * used as a step towards safe builders or safe constants.
 */
export declare function createScript(script: string): SafeScript;
/**
 * An empty `SafeScript` constant.
 * Unlike the functions above, using this will not create a policy.
 */
export declare const EMPTY_SCRIPT: SafeScript;
/**
 * Checks if the given value is a `SafeScript` instance.
 */
export declare function isScript(value: unknown): value is SafeScript;
/**
 * Returns the value of the passed `SafeScript` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedScript` or a string if Trusted Types are disabled.
 */
export declare function unwrapScript(value: SafeScript): TrustedScript | string;
