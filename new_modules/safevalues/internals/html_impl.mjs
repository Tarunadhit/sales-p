/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import '../environment/dev';
/* g3_import_pure from './pure' */
import { ensureTokenIsValid, secretToken } from './secrets';
import { getTrustedTypes, getTrustedTypesPolicy } from './trusted_types';
/**
 * Runtime implementation of `TrustedHTML` in browsers that don't support it.
 */
class HtmlImpl {
    privateDoNotAccessOrElseWrappedHtml;
    constructor(html, token) {
        if (process.env.NODE_ENV !== 'production') {
            ensureTokenIsValid(token);
        }
        this.privateDoNotAccessOrElseWrappedHtml = html;
    }
    toString() {
        return this.privateDoNotAccessOrElseWrappedHtml.toString();
    }
}
function createHtmlInternal(html, trusted) {
    return (trusted ?? new HtmlImpl(html, secretToken));
}
const GlobalTrustedHTML = (typeof window !== undefined) ? window.TrustedHTML : undefined;
/**
 * Also exports the constructor so that instanceof checks work.
 */
export const SafeHtml = (GlobalTrustedHTML ?? HtmlImpl);
/**
 * Builds a new `SafeHtml` from the given string, without enforcing safety
 * guarantees. It may cause side effects by creating a Trusted Types policy.
 * This shouldn't be exposed to application developers, and must only be used as
 * a step towards safe builders or safe constants.
 */
export function createHtml(html) {
    /** @noinline */
    const noinlineHtml = html;
    return createHtmlInternal(noinlineHtml, getTrustedTypesPolicy()?.createHTML(noinlineHtml));
}
/**
 * An empty `SafeHtml` constant.
 * Unlike the function above, using this will not create a policy.
 */
export const EMPTY_HTML = 
/* #__PURE__ */ (() => createHtmlInternal('', getTrustedTypes()?.emptyHTML))();
/**
 * Checks if the given value is a `SafeHtml` instance.
 */
export function isHtml(value) {
    return value instanceof SafeHtml;
}
/**
 * Returns the value of the passed `SafeHtml` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedHTML` or a string if Trusted Types are disabled.
 */
export function unwrapHtml(value) {
    if (getTrustedTypes()?.isHTML(value)) {
        return value;
    }
    else if (value instanceof HtmlImpl) {
        return value.privateDoNotAccessOrElseWrappedHtml;
    }
    else {
        let message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping SafeHtml';
        }
        throw new Error(message);
    }
}
