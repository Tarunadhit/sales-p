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
exports.unwrapStyleSheet = exports.isStyleSheet = exports.createStyleSheet = exports.SafeStyleSheet = void 0;
require("../environment/dev");
var secrets_1 = require("./secrets");
/**
 * A complete CSS style sheet, safe to use in style contexts in an HTML document
 * or DOM APIs.
 */
var SafeStyleSheet = /** @class */ (function () {
    function SafeStyleSheet() {
    }
    return SafeStyleSheet;
}());
exports.SafeStyleSheet = SafeStyleSheet;
/** Implementation for `SafeStyleSheet` */
var StyleSheetImpl = /** @class */ (function (_super) {
    __extends(StyleSheetImpl, _super);
    function StyleSheetImpl(styleSheet, token) {
        var _this = _super.call(this) || this;
        if (process.env.NODE_ENV !== 'production') {
            (0, secrets_1.ensureTokenIsValid)(token);
        }
        _this.privateDoNotAccessOrElseWrappedStyleSheet = styleSheet;
        return _this;
    }
    StyleSheetImpl.prototype.toString = function () {
        return this.privateDoNotAccessOrElseWrappedStyleSheet;
    };
    return StyleSheetImpl;
}(SafeStyleSheet));
/**
 * Builds a new `SafeStyleSheet` from the given string, without enforcing
 * safety guarantees. This shouldn't be exposed to application developers, and
 * must only be used as a step towards safe builders or safe constants.
 */
function createStyleSheet(styleSheet) {
    return new StyleSheetImpl(styleSheet, secrets_1.secretToken);
}
exports.createStyleSheet = createStyleSheet;
/**
 * Checks if the given value is a `SafeStyleSheet` instance.
 */
function isStyleSheet(value) {
    return value instanceof StyleSheetImpl;
}
exports.isStyleSheet = isStyleSheet;
/**
 * Returns the string value of the passed `SafeStyleSheet` object while
 * ensuring it has the correct type.
 */
function unwrapStyleSheet(value) {
    if (value instanceof StyleSheetImpl) {
        return value.privateDoNotAccessOrElseWrappedStyleSheet;
    }
    else {
        var message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping SafeStyleSheet';
        }
        throw new Error(message);
    }
}
exports.unwrapStyleSheet = unwrapStyleSheet;
