/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { SafeHtml } from '../internals/html_impl';
import { TrustedResourceUrl } from '../internals/resource_url_impl';
import { SafeScript } from '../internals/script_impl';
/**
 * Returns HTML-escaped text as a `SafeHtml` object.
 *
 * Available options:
 * - `preserveSpaces` turns every second consecutive space character into its
 * HTML entity representation (`&#160;`).
 * - `preserveNewlines` turns newline characters into breaks (`<br>`).
 * - `preserveTabs` wraps tab characters in a span with style=white-space:pre.
 */
export declare function htmlEscape(text: string, options?: {
    preserveNewlines?: boolean;
    preserveSpaces?: boolean;
    preserveTabs?: boolean;
}): SafeHtml;
/**
 * Creates a `SafeHtml` representing a script tag with inline script content.
 */
export declare function createScript(script: SafeScript, options?: {
    id?: string;
    nonce?: string;
    type?: string;
}): SafeHtml;
/**
 * Creates a `SafeHtml` representing a script tag with the src attribute.
 * This also supports CSP nonces and async loading.
 */
export declare function createScriptSrc(src: TrustedResourceUrl, async?: boolean, nonce?: string): SafeHtml;
/** Creates a `SafeHtml` value by concatenating multiple `SafeHtml`s. */
export declare function concatHtmls(htmls: readonly SafeHtml[]): SafeHtml;
