/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview This contains safe wrappers for properties that aren't specific
 * to one kind of HTMLElement (like innerHTML), plus other setters and functions
 * that are not tied to elements (like location.href or Worker constructor).
 */
import { SafeAttributePrefix } from '../../internals/attribute_impl';
import { SafeHtml } from '../../internals/html_impl';
import { SafeStyle } from '../../internals/style_impl';
/**
 * Safely set {@link Element.innerHTML} on a given ShadowRoot or Element which
 * may not be a `<script>` element or a `<style>` element.
 */
export declare function setInnerHtml<T extends Element | ShadowRoot>(elOrRoot: Exclude<T, HTMLScriptElement | HTMLStyleElement>, v: SafeHtml): void;
/**
 * Safely set {@link Element.outerHTML} for the given Element.
 */
export declare function setOuterHtml(e: Element, v: SafeHtml): void;
/**
 * Set `ElementCSSInlineStyle.cssText` for the given `ElementCSSInlineStyle`.
 */
export declare function setCssText(e: ElementCSSInlineStyle, v: SafeStyle): void;
/**
 * Safely call {@link Element.insertAdjacentHTML} for the given Element.
 */
export declare function insertAdjacentHtml<T extends Element>(element: Exclude<T, HTMLScriptElement | HTMLStyleElement>, position: 'afterbegin' | 'afterend' | 'beforebegin' | 'beforeend', v: SafeHtml): void;
/**
 * Given a set of known-to-be-safe prefixes (e.g., "data-", "aria-", "js"),
 * return a setter function that allows you to set attributes on an element,
 * as long as the names of the attributes to be set has one of the prefixes.
 *
 * The returned setter ensures that setting any dangerous attribute, e.g.,
 * "src", "href" will cause an exception. This is intended to be used as the
 * safe alterantive of `Element#setAttribute`, when applications need to set
 * attributes that do not have security implications and do not have a
 * corresponding DOM property.
 */
export declare function buildPrefixedAttributeSetter(prefix: SafeAttributePrefix, ...otherPrefixes: readonly SafeAttributePrefix[]): (e: Element, attr: string, value: string) => void;
/**
 * The safe alternative to Element#setAttribute. The function takes a list of
 * `SafeAttributePrefix`, making developer intention explicit. The attribute
 * to be set must has one of the safe prefixes, otherwise the function throws
 * an Error.
 */
export declare function setPrefixedAttribute(attrPrefixes: readonly SafeAttributePrefix[], e: Element, attr: string, value: string): void;
