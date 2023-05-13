/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { __values } from "tslib";
import { strings } from './constants';
var AUTO_INIT_ATTR = strings.AUTO_INIT_ATTR, DATASET_AUTO_INIT_STATE = strings.DATASET_AUTO_INIT_STATE, INITIALIZED_STATE = strings.INITIALIZED_STATE;
var registry = {};
// tslint:disable-next-line:no-console
var CONSOLE_WARN = console.warn.bind(console);
function emit(evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) { shouldBubble = false; }
    var evt;
    if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
            bubbles: shouldBubble,
            detail: evtData,
        });
    }
    else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }
    document.dispatchEvent(evt);
}
/* istanbul ignore next: optional argument is not a branch statement */
/**
 * Auto-initializes all MDC components on a page.
 */
function mdcAutoInit(root) {
    var e_1, _a;
    if (root === void 0) { root = document; }
    var components = [];
    var nodes = Array.from(root.querySelectorAll("[" + AUTO_INIT_ATTR + "]"));
    nodes = nodes.filter(function (node) { return node.dataset[DATASET_AUTO_INIT_STATE] !== INITIALIZED_STATE; });
    try {
        for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
            var node = nodes_1_1.value;
            var ctorName = node.getAttribute(AUTO_INIT_ATTR);
            if (!ctorName) {
                throw new Error('(mdc-auto-init) Constructor name must be given.');
            }
            // tslint:disable-next-line:enforce-name-casing
            var Constructor = registry[ctorName];
            if (typeof Constructor !== 'function') {
                throw new Error("(mdc-auto-init) Could not find constructor in registry for " + ctorName);
            }
            // TODO: Should we make an eslint rule for an attachTo() static method?
            // See https://github.com/Microsoft/TypeScript/issues/14600 for discussion
            // of static interface support in TS
            var component = Constructor.attachTo(node);
            Object.defineProperty(node, ctorName, {
                configurable: true,
                enumerable: false,
                value: component,
                writable: false,
            });
            components.push(component);
            node.dataset[DATASET_AUTO_INIT_STATE] = INITIALIZED_STATE;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    emit('MDCAutoInit:End', {});
    return components;
}
// Constructor is PascalCased because it is a direct reference to a class,
// rather than an instance of a class.
mdcAutoInit.register = function (componentName, 
// tslint:disable-next-line:enforce-name-casing
Constructor, warn) {
    if (warn === void 0) { warn = CONSOLE_WARN; }
    if (typeof Constructor !== 'function') {
        throw new Error("(mdc-auto-init) Invalid Constructor value: " + Constructor + ". Expected function.");
    }
    var registryValue = registry[componentName];
    if (registryValue) {
        warn("(mdc-auto-init) Overriding registration for " + componentName + " with " + Constructor + ". Was: " + registryValue);
    }
    registry[componentName] = Constructor;
};
mdcAutoInit.deregister = function (componentName) {
    delete registry[componentName];
};
/** @nocollapse */
mdcAutoInit.deregisterAll = function () {
    var e_2, _a;
    try {
        for (var _b = __values(Object.keys(registry)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var componentName = _c.value;
            mdcAutoInit.deregister(componentName);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
};
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default mdcAutoInit;
export { mdcAutoInit };
//# sourceMappingURL=index.js.map