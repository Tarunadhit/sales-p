/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import '../environment/dev';
import { ensureTokenIsValid, secretToken } from './secrets';
/**
 * A complete CSS style sheet, safe to use in style contexts in an HTML document
 * or DOM APIs.
 */
export class SafeStyleSheet {
    // @ts-ignore: error TS6133: 'brand' is declared but its value is never read.
    brand; // To prevent structural typing.
}
/** Implementation for `SafeStyleSheet` */
class StyleSheetImpl extends SafeStyleSheet {
    privateDoNotAccessOrElseWrappedStyleSheet;
    constructor(styleSheet, token) {
        super();
        if (process.env.NODE_ENV !== 'production') {
            ensureTokenIsValid(token);
        }
        this.privateDoNotAccessOrElseWrappedStyleSheet = styleSheet;
    }
    toString() {
        return this.privateDoNotAccessOrElseWrappedStyleSheet;
    }
}
/**
 * Builds a new `SafeStyleSheet` from the given string, without enforcing
 * safety guarantees. This shouldn't be exposed to application developers, and
 * must only be used as a step towards safe builders or safe constants.
 */
export function createStyleSheet(styleSheet) {
    return new StyleSheetImpl(styleSheet, secretToken);
}
/**
 * Checks if the given value is a `SafeStyleSheet` instance.
 */
export function isStyleSheet(value) {
    return value instanceof StyleSheetImpl;
}
/**
 * Returns the string value of the passed `SafeStyleSheet` object while
 * ensuring it has the correct type.
 */
export function unwrapStyleSheet(value) {
    if (value instanceof StyleSheetImpl) {
        return value.privateDoNotAccessOrElseWrappedStyleSheet;
    }
    else {
        let message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping SafeStyleSheet';
        }
        throw new Error(message);
    }
}
