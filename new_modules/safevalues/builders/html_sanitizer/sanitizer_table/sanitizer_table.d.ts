/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/** Class for holding element and attribute policies used for sanitization. */
export declare class SanitizerTable {
    readonly allowedElements: ReadonlySet<string>;
    readonly elementPolicies: ReadonlyMap<string, ElementPolicy>;
    readonly allowedGlobalAttributes: ReadonlySet<string>;
    readonly globalAttributePolicies: ReadonlyMap<string, AttributePolicy>;
    constructor(allowedElements: ReadonlySet<string>, elementPolicies: ReadonlyMap<string, ElementPolicy>, allowedGlobalAttributes: ReadonlySet<string>, globalAttributePolicies: ReadonlyMap<string, AttributePolicy>);
    isAllowedElement(elementName: string): boolean;
    getAttributePolicy(attributeName: string, elementName: string): AttributePolicy;
}
/**
 * Holds information on how to sanitize the attributes of a particular element.
 * An element with an ElementPolicy specified is implicitly kept in the output.
 */
export declare type ElementPolicy = ReadonlyMap<string, AttributePolicy>;
/**
 * Values derived from
 * https://godoc.corp.google.com/pkg/google3/third_party/safehtml/sanitizer/policy#AttributePolicy
 */
export declare enum AttributePolicyAction {
    DROP = 0,
    KEEP = 1,
    KEEP_AND_SANITIZE_URL = 2,
    KEEP_AND_NORMALIZE = 3,
    KEEP_AND_SANITIZE_STYLE = 4
}
/**
 * Holds information on how to sanitize the values of a particular attribute.
 */
export interface AttributePolicy {
    readonly policyAction: AttributePolicyAction;
    readonly conditions?: ReadonlyMap<string, Set<string>>;
}
