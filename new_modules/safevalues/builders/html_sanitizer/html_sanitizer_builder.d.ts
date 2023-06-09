/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { HtmlSanitizer } from './html_sanitizer';
/** This class allows modifications to the default sanitizer configuration. */
export declare class HtmlSanitizerBuilder {
    private sanitizerTable;
    private calledBuild;
    constructor();
    /** Builder option to restrict allowed elements to a smaller subset. */
    onlyAllowElements(elementSet: ReadonlySet<string>): HtmlSanitizerBuilder;
    /**
     * Builder option to restrict allowed attributes to a smaller subset.
     *
     * If the attribute isn't currently allowed then it won't be added.
     */
    onlyAllowAttributes(attributeSet: ReadonlySet<string>): HtmlSanitizerBuilder;
    /**
     * Allows the set of data attributes passed.
     *
     * These values must be prefixed with "data-"
     *
     * If called with onlyAllowElements or onlyAllowAttributes, those methods must
     * be called first.
     */
    allowDataAttributes(attributes: string[]): HtmlSanitizerBuilder;
    /**
     * Preserves style attributes. Note that the sanitizer won't parse and
     * sanitize the values but keep them as they are. In particular this means
     * that the code will be able to call functions that could do undesirable
     * things (e.g. `url` to trigger a network request), as well as any custom
     * properties or functions defined by the application.
     */
    allowStyleAttributes(): HtmlSanitizerBuilder;
    /**
     * Preserves the class attribute on all elements. This means contents can
     * adopt CSS styles from other page elements and possibly mask themselves as
     * legitimate UI elements, which can lead to phishing.
     */
    allowClassAttributes(): HtmlSanitizerBuilder;
    /**
     * Preserves id attributes. This carries moderate risk as it allows an
     * element to override other elements with the same ID.
     */
    allowIdAttributes(): HtmlSanitizerBuilder;
    build(): HtmlSanitizer;
}
