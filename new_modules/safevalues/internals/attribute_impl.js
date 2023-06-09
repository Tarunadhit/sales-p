"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapAttributePrefix = exports.createAttributePrefix = exports.SafeAttributePrefix = void 0;
require("../environment/dev");
var secrets_1 = require("./secrets");
/** A prefix with which an attribute is safe to set using plain strings. */
var SafeAttributePrefix = /** @class */ (function () {
    function SafeAttributePrefix() {
    }
    return SafeAttributePrefix;
}());
exports.SafeAttributePrefix = SafeAttributePrefix;
/** Implementation for `SafeAttributePrefix` */
var AttributePrefixImpl = /** @class */ (function (_super) {
    __extends(AttributePrefixImpl, _super);
    function AttributePrefixImpl(attrPrefix, token) {
        var _this = _super.call(this) || this;
        if (process.env.NODE_ENV !== 'production') {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        _this.privateDoNotAccessOrElseWrappedAttrPrefix = attrPrefix;
        return _this;
    }
    AttributePrefixImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedAttrPrefix;
    };
    return AttributePrefixImpl;
}(SafeAttributePrefix));
/**
 * Builds a new `SafeAttribute` from the given string, without enforcing
 * safety guarantees. This shouldn't be exposed to application developers, and
 * must only be used as a step towards safe builders or safe constants.
 */
function createAttributePrefix(attrPrefix) {
    return new AttributePrefixImpl(attrPrefix, secrets_1.secretToken);
}
exports.createAttributePrefix = createAttributePrefix;
/**
 * Returns the string value of the passed `SafeAttributePrefix` object while
 * ensuring it has the correct type.
 */
function unwrapAttributePrefix(value) {
    if (value instanceof AttributePrefixImpl) {
        return value.privateDoNotAccessOrElseWrappedAttrPrefix;
    }
    else {
        var message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping SafeAttributePrefix';
        }
        throw new Error(message);
    }
}
exports.unwrapAttributePrefix = unwrapAttributePrefix;
