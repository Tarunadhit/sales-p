/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/// <reference types="trusted-types" />
import '../environment/dev';
/**
 * String that is safe to use in all URL contexts in DOM APIs and HTML
 * documents; even as a reference to resources that may load in the current
 * origin (e.g. scripts and stylesheets).
 */
export declare type TrustedResourceUrl = TrustedScriptURL;
/**
 * Also exports the constructor so that instanceof checks work.
 */
export declare const TrustedResourceUrl: typeof TrustedScriptURL;
/**
 * Builds a new `TrustedResourceUrl` from the given string, without
 * enforcing safety guarantees. It may cause side effects by creating a Trusted
 * Types policy. This shouldn't be exposed to application developers, and must
 * only be used as a step towards safe builders or safe constants.
 */
export declare function createResourceUrl(url: string): TrustedResourceUrl;
/**
 * Checks if the given value is a `TrustedResourceUrl` instance.
 */
export declare function isResourceUrl(value: unknown): value is TrustedResourceUrl;
/**
 * Returns the value of the passed `TrustedResourceUrl` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedScriptURL` or a string if Trusted Types are
 * disabled.
 */
export declare function unwrapResourceUrl(value: TrustedResourceUrl): TrustedScriptURL | string;
