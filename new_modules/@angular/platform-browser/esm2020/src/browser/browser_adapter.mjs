/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵparseCookieValue as parseCookieValue, ɵsetRootDomAdapter as setRootDomAdapter } from '@angular/common';
import { GenericBrowserDomAdapter } from './generic_browser_adapter';
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
export class BrowserDomAdapter extends GenericBrowserDomAdapter {
    static makeCurrent() {
        setRootDomAdapter(new BrowserDomAdapter());
    }
    onAndCancel(el, evt, listener) {
        el.addEventListener(evt, listener, false);
        // Needed to follow Dart's subscription semantic, until fix of
        // https://code.google.com/p/dart/issues/detail?id=17406
        return () => {
            el.removeEventListener(evt, listener, false);
        };
    }
    dispatchEvent(el, evt) {
        el.dispatchEvent(evt);
    }
    remove(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    createElement(tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElement(tagName);
    }
    createHtmlDocument() {
        return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
        return document;
    }
    isElementNode(node) {
        return node.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(node) {
        return node instanceof DocumentFragment;
    }
    /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
    getGlobalEventTarget(doc, target) {
        if (target === 'window') {
            return window;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    }
    getBaseHref(doc) {
        const href = getBaseElementHref();
        return href == null ? null : relativePath(href);
    }
    resetBaseElement() {
        baseElement = null;
    }
    getUserAgent() {
        return window.navigator.userAgent;
    }
    getCookie(name) {
        return parseCookieValue(document.cookie, name);
    }
}
let baseElement = null;
function getBaseElementHref() {
    baseElement = baseElement || document.querySelector('base');
    return baseElement ? baseElement.getAttribute('href') : null;
}
// based on urlUtils.js in AngularJS 1
let urlParsingNode;
function relativePath(url) {
    urlParsingNode = urlParsingNode || document.createElement('a');
    urlParsingNode.setAttribute('href', url);
    const pathName = urlParsingNode.pathname;
    return pathName.charAt(0) === '/' ? pathName : `/${pathName}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvYnJvd3Nlci9icm93c2VyX2FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixJQUFJLGdCQUFnQixFQUFFLGtCQUFrQixJQUFJLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFL0csT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFbkU7Ozs7O0dBS0c7QUFDSCxvREFBb0Q7QUFDcEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHdCQUF3QjtJQUM3RCxNQUFNLENBQUMsV0FBVztRQUNoQixpQkFBaUIsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEVBQVEsRUFBRSxHQUFRLEVBQUUsUUFBYTtRQUMzQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyw4REFBOEQ7UUFDOUQsd0RBQXdEO1FBQ3hELE9BQU8sR0FBRyxFQUFFO1lBQ1YsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELGFBQWEsQ0FBQyxFQUFRLEVBQUUsR0FBUTtRQUM5QixFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBVTtRQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZSxFQUFFLEdBQWM7UUFDM0MsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN2QyxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGtCQUFrQjtRQUNoQixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELGtCQUFrQjtRQUNoQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFTO1FBQ3BCLE9BQU8sSUFBSSxZQUFZLGdCQUFnQixDQUFDO0lBQzFDLENBQUM7SUFFRCxpRkFBaUY7SUFDakYsb0JBQW9CLENBQUMsR0FBYSxFQUFFLE1BQWM7UUFDaEQsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLE1BQU0sS0FBSyxVQUFVLEVBQUU7WUFDekIsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNyQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxXQUFXLENBQUMsR0FBYTtRQUN2QixNQUFNLElBQUksR0FBRyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELGdCQUFnQjtRQUNkLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELFlBQVk7UUFDVixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGO0FBRUQsSUFBSSxXQUFXLEdBQXFCLElBQUksQ0FBQztBQUN6QyxTQUFTLGtCQUFrQjtJQUN6QixXQUFXLEdBQUcsV0FBVyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMvRCxDQUFDO0FBRUQsc0NBQXNDO0FBQ3RDLElBQUksY0FBMkMsQ0FBQztBQUNoRCxTQUFTLFlBQVksQ0FBQyxHQUFRO0lBQzVCLGNBQWMsR0FBRyxjQUFjLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvRCxjQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ3pDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNoRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ybVwYXJzZUNvb2tpZVZhbHVlIGFzIHBhcnNlQ29va2llVmFsdWUsIMm1c2V0Um9vdERvbUFkYXB0ZXIgYXMgc2V0Um9vdERvbUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7R2VuZXJpY0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICcuL2dlbmVyaWNfYnJvd3Nlcl9hZGFwdGVyJztcblxuLyoqXG4gKiBBIGBEb21BZGFwdGVyYCBwb3dlcmVkIGJ5IGZ1bGwgYnJvd3NlciBET00gQVBJcy5cbiAqXG4gKiBAc2VjdXJpdHkgVHJlYWQgY2FyZWZ1bGx5ISBJbnRlcmFjdGluZyB3aXRoIHRoZSBET00gZGlyZWN0bHkgaXMgZGFuZ2Vyb3VzIGFuZFxuICogY2FuIGludHJvZHVjZSBYU1Mgcmlza3MuXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOnJlcXVpcmVQYXJhbWV0ZXJUeXBlIG5vLWNvbnNvbGUgKi9cbmV4cG9ydCBjbGFzcyBCcm93c2VyRG9tQWRhcHRlciBleHRlbmRzIEdlbmVyaWNCcm93c2VyRG9tQWRhcHRlciB7XG4gIHN0YXRpYyBtYWtlQ3VycmVudCgpIHtcbiAgICBzZXRSb290RG9tQWRhcHRlcihuZXcgQnJvd3NlckRvbUFkYXB0ZXIoKSk7XG4gIH1cblxuICBvbkFuZENhbmNlbChlbDogTm9kZSwgZXZ0OiBhbnksIGxpc3RlbmVyOiBhbnkpOiBGdW5jdGlvbiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgLy8gTmVlZGVkIHRvIGZvbGxvdyBEYXJ0J3Mgc3Vic2NyaXB0aW9uIHNlbWFudGljLCB1bnRpbCBmaXggb2ZcbiAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2RhcnQvaXNzdWVzL2RldGFpbD9pZD0xNzQwNlxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9O1xuICB9XG4gIGRpc3BhdGNoRXZlbnQoZWw6IE5vZGUsIGV2dDogYW55KSB7XG4gICAgZWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG4gIHJlbW92ZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuICBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IHN0cmluZywgZG9jPzogRG9jdW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgZG9jID0gZG9jIHx8IHRoaXMuZ2V0RGVmYXVsdERvY3VtZW50KCk7XG4gICAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICB9XG4gIGNyZWF0ZUh0bWxEb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnZmFrZVRpdGxlJyk7XG4gIH1cbiAgZ2V0RGVmYXVsdERvY3VtZW50KCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH1cblxuICBpc0VsZW1lbnROb2RlKG5vZGU6IE5vZGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREU7XG4gIH1cblxuICBpc1NoYWRvd1Jvb3Qobm9kZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50O1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIE5vIGxvbmdlciBiZWluZyB1c2VkIGluIEl2eSBjb2RlLiBUbyBiZSByZW1vdmVkIGluIHZlcnNpb24gMTQuICovXG4gIGdldEdsb2JhbEV2ZW50VGFyZ2V0KGRvYzogRG9jdW1lbnQsIHRhcmdldDogc3RyaW5nKTogRXZlbnRUYXJnZXR8bnVsbCB7XG4gICAgaWYgKHRhcmdldCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuICAgIGlmICh0YXJnZXQgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIHJldHVybiBkb2M7XG4gICAgfVxuICAgIGlmICh0YXJnZXQgPT09ICdib2R5Jykge1xuICAgICAgcmV0dXJuIGRvYy5ib2R5O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXRCYXNlSHJlZihkb2M6IERvY3VtZW50KTogc3RyaW5nfG51bGwge1xuICAgIGNvbnN0IGhyZWYgPSBnZXRCYXNlRWxlbWVudEhyZWYoKTtcbiAgICByZXR1cm4gaHJlZiA9PSBudWxsID8gbnVsbCA6IHJlbGF0aXZlUGF0aChocmVmKTtcbiAgfVxuICByZXNldEJhc2VFbGVtZW50KCk6IHZvaWQge1xuICAgIGJhc2VFbGVtZW50ID0gbnVsbDtcbiAgfVxuICBnZXRVc2VyQWdlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cbiAgZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICByZXR1cm4gcGFyc2VDb29raWVWYWx1ZShkb2N1bWVudC5jb29raWUsIG5hbWUpO1xuICB9XG59XG5cbmxldCBiYXNlRWxlbWVudDogSFRNTEVsZW1lbnR8bnVsbCA9IG51bGw7XG5mdW5jdGlvbiBnZXRCYXNlRWxlbWVudEhyZWYoKTogc3RyaW5nfG51bGwge1xuICBiYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKTtcbiAgcmV0dXJuIGJhc2VFbGVtZW50ID8gYmFzZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgOiBudWxsO1xufVxuXG4vLyBiYXNlZCBvbiB1cmxVdGlscy5qcyBpbiBBbmd1bGFySlMgMVxubGV0IHVybFBhcnNpbmdOb2RlOiBIVE1MQW5jaG9yRWxlbWVudHx1bmRlZmluZWQ7XG5mdW5jdGlvbiByZWxhdGl2ZVBhdGgodXJsOiBhbnkpOiBzdHJpbmcge1xuICB1cmxQYXJzaW5nTm9kZSA9IHVybFBhcnNpbmdOb2RlIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgY29uc3QgcGF0aE5hbWUgPSB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZTtcbiAgcmV0dXJuIHBhdGhOYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aE5hbWUgOiBgLyR7cGF0aE5hbWV9YDtcbn1cbiJdfQ==