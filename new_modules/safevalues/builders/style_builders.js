"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatStyles = exports.safeStyle = void 0;
require("../environment/dev");
var string_literal_1 = require("../internals/string_literal");
var style_impl_1 = require("../internals/style_impl");
/**
 * Creates a SafeStyle object from a template literal (without any embedded
 * expressions).
 *
 * ` style` should be in the format
 * ` name: value; [name: value; ...]` and must not have any < or >
 * characters in it. This is so that SafeStyle's contract is preserved,
 * allowing the SafeStyle to correctly be interpreted as a sequence of CSS
 * declarations and without affecting the syntactic structure of any
 * surrounding CSS and HTML.
 *
 * This function is a template literal tag function. It should be called with
 * a template literal that does not contain any expressions. For example,
 *                          safeStyle`foo`;
 * This function first checks if it is called with a literal template, and
 * then performs basic sanity checks on the format of ` style`
 * but does not constrain the format of ` name} and {@code value`, except
 * for disallowing tag characters.
 *
 * @param templateObj This contains the literal part of the template literal.
 */
function safeStyle(templateObj) {
    if (process.env.NODE_ENV !== 'production') {
        (0, string_literal_1.assertIsTemplateObject)(templateObj, false, 'safeStyle is a template literal tag function ' +
            'that only accepts template literals without expressions. ' +
            'For example, safeStyle`foo`;');
    }
    var style = templateObj[0];
    if (process.env.NODE_ENV !== 'production') {
        if (/[<>]/.test(style)) {
            throw new Error('Forbidden characters in style string: ' + style);
        }
        if (!/;$/.test(style)) {
            throw new Error('Style string does not end with ";": ' + style);
        }
        if (!/:/.test(style)) {
            throw new Error('Style string should contain one or more ":": ' + style);
        }
    }
    return (0, style_impl_1.createStyle)(style);
}
exports.safeStyle = safeStyle;
/** Creates a `SafeStyle` value by concatenating multiple `SafeStyle`s. */
function concatStyles(styles) {
    return (0, style_impl_1.createStyle)(styles.map(style_impl_1.unwrapStyle).join(''));
}
exports.concatStyles = concatStyles;
