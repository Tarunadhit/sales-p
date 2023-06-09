"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapHtml = exports.isHtml = exports.EMPTY_HTML = exports.createHtml = exports.SafeHtml = void 0;
require("../environment/dev");
/* g3_import_pure from './pure' */
var secrets_1 = require("./secrets");
var trusted_types_1 = require("./trusted_types");
/**
 * Runtime implementation of `TrustedHTML` in browsers that don't support it.
 */
var HtmlImpl = /** @class */ (function () {
    function HtmlImpl(html, token) {
        if (process.env.NODE_ENV !== 'production') {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        this.privateDoNotAccessOrElseWrappedHtml = html;
    }
    HtmlImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedHtml.toString();
    };
    return HtmlImpl;
}());
function createHtmlInternal(html, trusted) {
    return (trusted !== null && trusted !== void 0 ? trusted : new HtmlImpl(html, secrets_1.secretToken));
}
var GlobalTrustedHTML = (typeof window !== undefined) ? window.TrustedHTML : undefined;
/**
 * Also exports the constructor so that instanceof checks work.
 */
exports.SafeHtml = (GlobalTrustedHTML !== null && GlobalTrustedHTML !== void 0 ? GlobalTrustedHTML : HtmlImpl);
/**
 * Builds a new `SafeHtml` from the given string, without enforcing safety
 * guarantees. It may cause side effects by creating a Trusted Types policy.
 * This shouldn't be exposed to application developers, and must only be used as
 * a step towards safe builders or safe constants.
 */
function createHtml(html) {
    var _a;
    /** @noinline */
    var noinlineHtml = html;
    return createHtmlInternal(noinlineHtml, (_a = (0, trusted_types_1.getTrustedTypesPolicy)()) === null || _a === void 0 ? void 0 : _a.createHTML(noinlineHtml));
}
exports.createHtml = createHtml;
/**
 * An empty `SafeHtml` constant.
 * Unlike the function above, using this will not create a policy.
 */
exports.EMPTY_HTML = 
/* #__PURE__ */ (function () { var _a; return createHtmlInternal('', (_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.emptyHTML); })();
/**
 * Checks if the given value is a `SafeHtml` instance.
 */
function isHtml(value) {
    return value instanceof exports.SafeHtml;
}
exports.isHtml = isHtml;
/**
 * Returns the value of the passed `SafeHtml` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedHTML` or a string if Trusted Types are disabled.
 */
function unwrapHtml(value) {
    var _a;
    if ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isHTML(value)) {
        return value;
    }
    else if (value instanceof HtmlImpl) {
        return value.privateDoNotAccessOrElseWrappedHtml;
    }
    else {
        var message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping SafeHtml';
        }
        throw new Error(message);
    }
}
exports.unwrapHtml = unwrapHtml;
