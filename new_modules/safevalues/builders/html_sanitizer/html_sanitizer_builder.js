"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlSanitizerBuilder = void 0;
var secrets_1 = require("../../internals/secrets");
var html_sanitizer_1 = require("./html_sanitizer");
var default_sanitizer_table_1 = require("./sanitizer_table/default_sanitizer_table");
var sanitizer_table_1 = require("./sanitizer_table/sanitizer_table");
/** This class allows modifications to the default sanitizer configuration. */
var HtmlSanitizerBuilder = /** @class */ (function () {
    function HtmlSanitizerBuilder() {
        // To denote if the builder has called build() and therefore should make no
        // further changes to the sanitizer table.
        this.calledBuild = false;
        this.sanitizerTable = default_sanitizer_table_1.defaultSanitizerTable;
    }
    /** Builder option to restrict allowed elements to a smaller subset. */
    HtmlSanitizerBuilder.prototype.onlyAllowElements = function (elementSet) {
        var e_1, _a;
        var allowedElements = new Set();
        var allowedElementPolicies = new Map();
        try {
            for (var elementSet_1 = __values(elementSet), elementSet_1_1 = elementSet_1.next(); !elementSet_1_1.done; elementSet_1_1 = elementSet_1.next()) {
                var element = elementSet_1_1.value;
                element = element.toUpperCase();
                if (!this.sanitizerTable.isAllowedElement(element)) {
                    throw new Error("Element: ".concat(element, ", is not allowed by html5_contract.textpb"));
                }
                var elementPolicy = this.sanitizerTable.elementPolicies.get(element);
                if (elementPolicy !== undefined) {
                    allowedElementPolicies.set(element, elementPolicy);
                }
                else {
                    allowedElements.add(element);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elementSet_1_1 && !elementSet_1_1.done && (_a = elementSet_1.return)) _a.call(elementSet_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(allowedElements, allowedElementPolicies, this.sanitizerTable.allowedGlobalAttributes, this.sanitizerTable.globalAttributePolicies);
        return this;
    };
    /**
     * Builder option to restrict allowed attributes to a smaller subset.
     *
     * If the attribute isn't currently allowed then it won't be added.
     */
    HtmlSanitizerBuilder.prototype.onlyAllowAttributes = function (attributeSet) {
        var e_2, _a, e_3, _b, e_4, _c;
        var allowedGlobalAttributes = new Set();
        var globalAttributePolicies = new Map();
        var elementPolicies = new Map();
        try {
            for (var attributeSet_1 = __values(attributeSet), attributeSet_1_1 = attributeSet_1.next(); !attributeSet_1_1.done; attributeSet_1_1 = attributeSet_1.next()) {
                var attribute = attributeSet_1_1.value;
                if (this.sanitizerTable.allowedGlobalAttributes.has(attribute)) {
                    allowedGlobalAttributes.add(attribute);
                }
                if (this.sanitizerTable.globalAttributePolicies.has(attribute)) {
                    globalAttributePolicies.set(attribute, this.sanitizerTable.globalAttributePolicies.get(attribute));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (attributeSet_1_1 && !attributeSet_1_1.done && (_a = attributeSet_1.return)) _a.call(attributeSet_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _d = __values(this.sanitizerTable
                .elementPolicies.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = __read(_e.value, 2), elementName = _f[0], originalElementPolicy = _f[1];
                var newElementPolicy = new Map();
                try {
                    for (var _g = (e_4 = void 0, __values(originalElementPolicy
                        .entries())), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var _j = __read(_h.value, 2), attribute = _j[0], attributePolicy = _j[1];
                        if (attributeSet.has(attribute)) {
                            newElementPolicy.set(attribute, attributePolicy);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                elementPolicies.set(elementName, newElementPolicy);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, elementPolicies, allowedGlobalAttributes, globalAttributePolicies);
        return this;
    };
    /**
     * Allows the set of data attributes passed.
     *
     * These values must be prefixed with "data-"
     *
     * If called with onlyAllowElements or onlyAllowAttributes, those methods must
     * be called first.
     */
    HtmlSanitizerBuilder.prototype.allowDataAttributes = function (attributes) {
        var e_5, _a;
        var allowedGlobalAttributes = new Set(this.sanitizerTable.allowedGlobalAttributes);
        try {
            for (var attributes_1 = __values(attributes), attributes_1_1 = attributes_1.next(); !attributes_1_1.done; attributes_1_1 = attributes_1.next()) {
                var attribute = attributes_1_1.value;
                if (attribute.indexOf('data-') !== 0) {
                    throw new Error("data attribute: ".concat(attribute, " does not begin with the prefix \"data-\""));
                }
                allowedGlobalAttributes.add(attribute);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (attributes_1_1 && !attributes_1_1.done && (_a = attributes_1.return)) _a.call(attributes_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, this.sanitizerTable.elementPolicies, allowedGlobalAttributes, this.sanitizerTable.globalAttributePolicies);
        return this;
    };
    /**
     * Preserves style attributes. Note that the sanitizer won't parse and
     * sanitize the values but keep them as they are. In particular this means
     * that the code will be able to call functions that could do undesirable
     * things (e.g. `url` to trigger a network request), as well as any custom
     * properties or functions defined by the application.
     */
    HtmlSanitizerBuilder.prototype.allowStyleAttributes = function () {
        var globalAttributePolicies = new Map(this.sanitizerTable.globalAttributePolicies);
        globalAttributePolicies.set('style', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP_AND_SANITIZE_STYLE });
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, this.sanitizerTable.elementPolicies, this.sanitizerTable.allowedGlobalAttributes, globalAttributePolicies);
        return this;
    };
    /**
     * Preserves the class attribute on all elements. This means contents can
     * adopt CSS styles from other page elements and possibly mask themselves as
     * legitimate UI elements, which can lead to phishing.
     */
    HtmlSanitizerBuilder.prototype.allowClassAttributes = function () {
        var globalAttributePolicies = new Map(this.sanitizerTable.globalAttributePolicies);
        globalAttributePolicies.set('class', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP });
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, this.sanitizerTable.elementPolicies, this.sanitizerTable.allowedGlobalAttributes, globalAttributePolicies);
        return this;
    };
    /**
     * Preserves id attributes. This carries moderate risk as it allows an
     * element to override other elements with the same ID.
     */
    HtmlSanitizerBuilder.prototype.allowIdAttributes = function () {
        var globalAttributePolicies = new Map(this.sanitizerTable.globalAttributePolicies);
        globalAttributePolicies.set('id', { policyAction: sanitizer_table_1.AttributePolicyAction.KEEP });
        this.sanitizerTable = new sanitizer_table_1.SanitizerTable(this.sanitizerTable.allowedElements, this.sanitizerTable.elementPolicies, this.sanitizerTable.allowedGlobalAttributes, globalAttributePolicies);
        return this;
    };
    HtmlSanitizerBuilder.prototype.build = function () {
        if (this.calledBuild) {
            throw new Error('this sanitizer has already called build');
        }
        this.calledBuild = true;
        return new html_sanitizer_1.HtmlSanitizerImpl(this.sanitizerTable, secrets_1.secretToken);
    };
    return HtmlSanitizerBuilder;
}());
exports.HtmlSanitizerBuilder = HtmlSanitizerBuilder;
