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
exports.unwrapStyle = exports.isStyle = exports.createStyle = exports.SafeStyle = void 0;
require("../environment/dev");
var secrets_1 = require("./secrets");
/**
 * Sequence of CSS declarations safe to use in style contexts in an HTML
 * document or in DOM APIs.
 */
var SafeStyle = /** @class */ (function () {
    function SafeStyle() {
    }
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;
/** Implementation for `SafeStyle` */
var StyleImpl = /** @class */ (function (_super) {
    __extends(StyleImpl, _super);
    function StyleImpl(style, token) {
        var _this = _super.call(this) || this;
        if (process.env.NODE_ENV !== 'production') {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        _this.privateDoNotAccessOrElseWrappedStyle = style;
        return _this;
    }
    StyleImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedStyle;
    };
    return StyleImpl;
}(SafeStyle));
/**
 * Builds a new `SafeStyle` from the given string, without enforcing
 * safety guarantees. This shouldn't be exposed to application developers, and
 * must only be used as a step towards safe builders or safe constants.
 */
function createStyle(style) {
    return new StyleImpl(style, secrets_1.secretToken);
}
exports.createStyle = createStyle;
/**
 * Checks if the given value is a `SafeStyle` instance.
 */
function isStyle(value) {
    return value instanceof StyleImpl;
}
exports.isStyle = isStyle;
/**
 * Returns the string value of the passed `SafeStyle` object while ensuring it
 * has the correct type.
 */
function unwrapStyle(value) {
    if (value instanceof StyleImpl) {
        return value.privateDoNotAccessOrElseWrappedStyle;
    }
    else {
        var message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping SafeStyle';
        }
        throw new Error(message);
    }
}
exports.unwrapStyle = unwrapStyle;
