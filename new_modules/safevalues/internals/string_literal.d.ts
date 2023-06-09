/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An object of type TemplateStringsArray represents the literal part(s) of a
 * template literal. This function checks if a TemplateStringsArray object is
 * actually from a template literal.
 *
 * @param templateObj This contains the literal part of the template literal.
 * @param hasExprs If true, the input template may contain embedded expressions.
 * @param errorMsg The custom error message in case any checks fail.
 */
export declare function assertIsTemplateObject(templateObj: TemplateStringsArray, hasExprs: boolean, errorMsg: string): void;
