"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapResourceUrl = exports.isResourceUrl = exports.createResourceUrl = exports.TrustedResourceUrl = void 0;
require("../environment/dev");
var secrets_1 = require("./secrets");
var trusted_types_1 = require("./trusted_types");
/**
 * Runtime implementation of `TrustedScriptURL` in browsers that don't support
 * it.
 */
var ResourceUrlImpl = /** @class */ (function () {
    function ResourceUrlImpl(url, token) {
        if (process.env.NODE_ENV !== 'production') {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        this.privateDoNotAccessOrElseWrappedResourceUrl = url;
    }
    ResourceUrlImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedResourceUrl.toString();
    };
    return ResourceUrlImpl;
}());
var GlobalTrustedScriptURL = (typeof window !== undefined) ? window.TrustedScriptURL : undefined;
/**
 * Also exports the constructor so that instanceof checks work.
 */
exports.TrustedResourceUrl = (GlobalTrustedScriptURL !== null && GlobalTrustedScriptURL !== void 0 ? GlobalTrustedScriptURL : ResourceUrlImpl);
/**
 * Builds a new `TrustedResourceUrl` from the given string, without
 * enforcing safety guarantees. It may cause side effects by creating a Trusted
 * Types policy. This shouldn't be exposed to application developers, and must
 * only be used as a step towards safe builders or safe constants.
 */
function createResourceUrl(url) {
    var _a;
    /** @noinline */
    var noinlineUrl = url;
    var trustedScriptURL = (_a = (0, trusted_types_1.getTrustedTypesPolicy)()) === null || _a === void 0 ? void 0 : _a.createScriptURL(noinlineUrl);
    return (trustedScriptURL !== null && trustedScriptURL !== void 0 ? trustedScriptURL : new ResourceUrlImpl(noinlineUrl, secrets_1.secretToken));
}
exports.createResourceUrl = createResourceUrl;
/**
 * Checks if the given value is a `TrustedResourceUrl` instance.
 */
function isResourceUrl(value) {
    return value instanceof exports.TrustedResourceUrl;
}
exports.isResourceUrl = isResourceUrl;
/**
 * Returns the value of the passed `TrustedResourceUrl` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedScriptURL` or a string if Trusted Types are
 * disabled.
 */
function unwrapResourceUrl(value) {
    var _a;
    if ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isScriptURL(value)) {
        return value;
    }
    else if (value instanceof ResourceUrlImpl) {
        return value.privateDoNotAccessOrElseWrappedResourceUrl;
    }
    else {
        var message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping TrustedResourceUrl';
        }
        throw new Error(message);
    }
}
exports.unwrapResourceUrl = unwrapResourceUrl;
