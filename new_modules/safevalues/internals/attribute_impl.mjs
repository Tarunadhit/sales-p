/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import '../environment/dev';
import { ensureTokenIsValid, secretToken } from './secrets';
/** A prefix with which an attribute is safe to set using plain strings. */
export class SafeAttributePrefix {
    // @ts-ignore: error TS6133: 'brand' is declared but its value is never read.
    brand; // To prevent structural typing.
}
/** Implementation for `SafeAttributePrefix` */
class AttributePrefixImpl extends SafeAttributePrefix {
    privateDoNotAccessOrElseWrappedAttrPrefix;
    constructor(attrPrefix, token) {
        super();
        if (process.env.NODE_ENV !== 'production') {
            ensureTokenIsValid(token);
        }
        this.privateDoNotAccessOrElseWrappedAttrPrefix = attrPrefix;
    }
    toString() {
        return this.privateDoNotAccessOrElseWrappedAttrPrefix;
    }
}
/**
 * Builds a new `SafeAttribute` from the given string, without enforcing
 * safety guarantees. This shouldn't be exposed to application developers, and
 * must only be used as a step towards safe builders or safe constants.
 */
export function createAttributePrefix(attrPrefix) {
    return new AttributePrefixImpl(attrPrefix, secretToken);
}
/**
 * Returns the string value of the passed `SafeAttributePrefix` object while
 * ensuring it has the correct type.
 */
export function unwrapAttributePrefix(value) {
    if (value instanceof AttributePrefixImpl) {
        return value.privateDoNotAccessOrElseWrappedAttrPrefix;
    }
    else {
        let message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping SafeAttributePrefix';
        }
        throw new Error(message);
    }
}
