/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import '../../environment/dev';
import { createHtml } from '../../internals/html_impl';
/* g3_import_pure from '../../internals/pure' */
import { ensureTokenIsValid, secretToken } from '../../internals/secrets';
import { restrictivelySanitizeUrl } from '../url_sanitizer';
import { createInertFragment } from './inert_fragment';
import { getNodeName, isElement, isText } from './no_clobber';
import { defaultSanitizerTable } from './sanitizer_table/default_sanitizer_table';
import { AttributePolicyAction } from './sanitizer_table/sanitizer_table';
/** Implementation for `HtmlSanitizer` */
export class HtmlSanitizerImpl {
    sanitizerTable;
    changes = [];
    constructor(sanitizerTable, token) {
        this.sanitizerTable = sanitizerTable;
        ensureTokenIsValid(token);
    }
    sanitizeAssertUnchanged(html) {
        this.changes = [];
        const sanitizedHtml = this.sanitize(html);
        if (this.changes.length !== 0) {
            let message = '';
            if (process.env.NODE_ENV !== 'production') {
                message =
                    `Unexpected change to HTML value as a result of sanitization. ` +
                        `Input: "${html}", sanitized output: "${sanitizedHtml}"\n` +
                        `List of changes:${this.changes.join('\n')}`;
            }
            throw new Error(message);
        }
        return sanitizedHtml;
    }
    sanitize(html) {
        const fakeRoot = document.createElement('span');
        fakeRoot.appendChild(this.sanitizeToFragment(html));
        // XML serialization is preferred over HTML serialization as it is
        // stricter and makes sure all attributes are properly escaped, avoiding
        // cases where the tree might mutate when parsed again later due to the
        // complexities of the HTML parsing algorithm
        let serializedNewTree = new XMLSerializer().serializeToString(fakeRoot);
        // We remove the outer most element as this is the span node created as
        // the root for the sanitized tree and contains a spurious xmlns attribute
        // from the XML serialization step.
        serializedNewTree = serializedNewTree.slice(serializedNewTree.indexOf('>') + 1, serializedNewTree.lastIndexOf('</'));
        return createHtml(serializedNewTree);
    }
    sanitizeToFragment(html) {
        const dirtyFragment = createInertFragment(html);
        const treeWalker = document.createTreeWalker(dirtyFragment, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, 
        // IE10 and IE11 won't accept a proper `NodeFilter` interface, and
        // expect the filtering function to be passed directly. It seems that
        // other browsers also do not mind getting the function directly. see
        // https://stackoverflow.com/q/38245898
        ((n) => this.nodeFilter(n)), 
        // @ts-ignore: error TS2554: Expected 1-3 arguments, but got 4.
        false);
        // `nextNode` is called so we skip the root `DocumentFragment`.
        let currentNode = treeWalker.nextNode();
        // We create a root element to attach all the children of the body to. We
        // use div as it as a semantic-free, generic container and does not
        // represent anything. This is removed when we serialize the tree back
        // into a string.
        const sanitizedFragment = document.createDocumentFragment();
        let sanitizedParent = sanitizedFragment;
        while (currentNode !== null) {
            let sanitizedNode;
            if (isText(currentNode)) {
                sanitizedNode = this.sanitizeTextNode(currentNode);
            }
            else if (isElement(currentNode)) {
                sanitizedNode = this.sanitizeElementNode(currentNode);
            }
            else {
                throw new Error('Node is not of type text or element');
            }
            sanitizedParent.appendChild(sanitizedNode);
            // Advance iterator while keeping track of the sanitized parent for the
            // current node
            currentNode = treeWalker.firstChild();
            if (currentNode) {
                sanitizedParent = sanitizedNode;
            }
            else {
                while (!(currentNode = treeWalker.nextSibling())) {
                    if (!(currentNode = treeWalker.parentNode())) {
                        break;
                    }
                    sanitizedParent = sanitizedParent.parentNode;
                }
            }
        }
        return sanitizedFragment;
    }
    sanitizeTextNode(textNode) {
        return document.createTextNode(textNode.data);
    }
    sanitizeElementNode(elementNode) {
        const elementName = getNodeName(elementNode);
        const newNode = document.createElement(elementName);
        const dirtyAttributes = elementNode.attributes;
        for (const { name, value } of dirtyAttributes) {
            const policy = this.sanitizerTable.getAttributePolicy(name, elementName);
            if (!this.satisfiesAllConditions(policy.conditions, dirtyAttributes)) {
                this.recordChange(`Not all conditions satisfied for attribute: ${name}.`);
                continue;
            }
            switch (policy.policyAction) {
                case AttributePolicyAction.KEEP:
                    newNode.setAttribute(name, value);
                    break;
                case AttributePolicyAction.KEEP_AND_SANITIZE_URL:
                    const sanitizedAttrUrl = restrictivelySanitizeUrl(value);
                    if (sanitizedAttrUrl !== value) {
                        this.recordChange(`Url in attribute ${name} was modified during sanitization. Original url:"${value}" was sanitized to: "${sanitizedAttrUrl}"`);
                    }
                    newNode.setAttribute(name, sanitizedAttrUrl);
                    break;
                case AttributePolicyAction.KEEP_AND_NORMALIZE:
                    // We don't consider changing the case of an attribute value to be a
                    // semantic change
                    newNode.setAttribute(name, value.toLowerCase());
                    break;
                case AttributePolicyAction.KEEP_AND_SANITIZE_STYLE:
                    newNode.setAttribute(name, value);
                    break;
                case AttributePolicyAction.DROP:
                    this.recordChange(`Attribute: ${name} was dropped`);
                    break;
                default:
                    checkExhaustive(policy.policyAction, 'Unhandled AttributePolicyAction case');
            }
        }
        return newNode;
    }
    nodeFilter(node) {
        if (isText(node)) {
            return NodeFilter.FILTER_ACCEPT;
        }
        else if (!isElement(node)) {
            // Getting a node that is neither an `Element` or a `Text` node. This is
            // likely due to something that is not supposed to be an element in user
            // code but recognized as such by the TreeWalker (e.g. a polyfill for
            // other kind of nodes). Since we can't recognize it as an element, we
            // drop the node, but we don't record it as a meaningful change.
            return NodeFilter.FILTER_REJECT;
        }
        const nodeName = getNodeName(node);
        if (nodeName === null) {
            this.recordChange(`Node name was null for node: ${node}`);
            return NodeFilter.FILTER_REJECT;
        }
        if (this.sanitizerTable.isAllowedElement(nodeName)) {
            return NodeFilter.FILTER_ACCEPT;
        }
        this.recordChange(`Element: ${nodeName} was dropped`);
        return NodeFilter.FILTER_REJECT;
    }
    recordChange(errorMessage) {
        if (process.env.NODE_ENV !== 'production') {
            this.changes.push(errorMessage);
        }
        else if (this.changes.length === 0) {
            this.changes.push('');
        }
    }
    satisfiesAllConditions(conditions, attrs) {
        if (!conditions) {
            return true;
        }
        for (const [attrName, expectedValues] of conditions) {
            const value = attrs.getNamedItem(attrName)?.value;
            if (value && !expectedValues.has(value)) {
                return false;
            }
        }
        return true;
    }
}
const defaultHtmlSanitizer = 
/* #__PURE__ */ (() => new HtmlSanitizerImpl(defaultSanitizerTable, secretToken))();
/** Sanitizes untrusted html using the default sanitizer configuration. */
export function sanitizeHtml(html) {
    return defaultHtmlSanitizer.sanitize(html);
}
/**
 * Sanitizes untrusted html using the default sanitizer configuration. Throws
 * an error if the html was changed.
 */
export function sanitizeHtmlAssertUnchanged(html) {
    return defaultHtmlSanitizer.sanitizeAssertUnchanged(html);
}
/**
 * Sanitizes untrusted html using the default sanitizer configuration. Throws
 * an error if the html was changed.
 */
export function sanitizeHtmlToFragment(html) {
    return defaultHtmlSanitizer.sanitizeToFragment(html);
}
function checkExhaustive(value, msg = `unexpected value ${value}!`) {
    throw new Error(msg);
}
