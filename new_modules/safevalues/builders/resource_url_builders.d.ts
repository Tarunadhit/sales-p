/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/// <reference types="trusted-types" />
import '../environment/dev';
import { TrustedResourceUrl } from '../internals/resource_url_impl';
import { SafeScript } from '../internals/script_impl';
/** Type that we know how to interpolate */
declare type Primitive = string | number | boolean;
/**
 * Builds TrustedResourceUrl from a template literal.
 *
 * This factory is a template literal tag function. It should be called with
 * a template literal, with or without embedded expressions. For example,
 *               trustedResourceUrl`//example.com/${bar}`;
 * or
 *               trustedResourceUrl`//example.com`;
 *
 * When this function is called with a template literal without any embedded
 * expressions, the template string may contain anything as the whole URL is
 * a compile-time string constant.
 *
 * When this function is called with a template literal that contains embedded
 * expressions, the template must start with one of the following:
 * - `https://<origin>/`
 * - `//<origin>/`
 * - `/<pathStart>`
 * - `about:blank`
 * - `data:`
 *
 * `<origin>` must contain only alphanumeric or any of the following: `-.:`.
 * Remember that, as per the documentation for TrustedResourceUrl, the origin
 * must be trustworthy. An origin of "example.com" could be set with this
 * method, but would tie the security of your site to the security of
 * example.com. Similarly, formats that potentially cover redirects hosted
 * on a trusted origin are problematic, since that could lead to untrusted
 * origins.
 *
 * `<pathStart>` is either an empty string, or a non empty string that does not
 * start with '/' or '\'.
 * In other words, `/<pathStart>` is either a '/' or a
 * '/' followed by at least one character that is not '/' or '\'.
 *
 * `data:` (data URL) does not allow embedded expressions in the template
 * literal input.
 *
 * All embedded expressions are URL encoded when they are interpolated. Do not
 * embed expressions that are already URL encoded as they will be double encoded
 * by the builder.
 *
 * @param templateObj This contains the literal part of the template literal.
 * @param rest This represents the template's embedded expressions.
 */
export declare function trustedResourceUrl(templateObj: TemplateStringsArray, ...rest: Primitive[]): TrustedResourceUrl;
/**
 * Creates a new TrustedResourceUrl with params added to the URL's search
 * parameters.
 *
 * @param params What to add to the URL. Parameters with value `null` or
 * `undefined` are skipped. Both keys and values will be encoded. Do not pass
 * pre-encoded values as this will result them being double encoded. If the
 * value is an array then the same parameter is added for every element in the
 * array.
 */
export declare function appendParams(trustedUrl: TrustedResourceUrl, params: Map<string, Primitive | null | Array<Primitive | null>>): TrustedResourceUrl;
/**
 * Creates a new TrustedResourceUrl based on an existing one but with the
 * addition of a fragment (the part after `#`). If the URL already has a
 * fragment, it is replaced with the new one.
 * @param fragment The fragment to add to the URL, verbatim, without the leading
 * `#`. No additional escaping is applied.
 */
export declare function replaceFragment(trustedUrl: TrustedResourceUrl, fragment: string): TrustedScriptURL;
/**
 * Creates a `TrustedResourceUrl` by generating a `Blob` from a
 * `SafeScript` and then calling `URL.createObjectURL` with that `Blob`.
 *
 * Caller must call `URL.revokeObjectUrl()` on the stringified url to
 * release the underlying `Blob`.
 */
export declare function blobUrlFromScript(safeScript: SafeScript): TrustedResourceUrl;
export {};
