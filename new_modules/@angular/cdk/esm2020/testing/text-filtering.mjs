/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Gets text of element excluding certain selectors within the element.
 * @param element Element to get text from,
 * @param excludeSelector Selector identifying which elements to exclude,
 */
export function _getTextWithExcludedElements(element, excludeSelector) {
    const clone = element.cloneNode(true);
    const exclusions = clone.querySelectorAll(excludeSelector);
    for (let i = 0; i < exclusions.length; i++) {
        exclusions[i].remove();
    }
    return (clone.textContent || '').trim();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWx0ZXJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3Rlc3RpbmcvdGV4dC1maWx0ZXJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxPQUFnQixFQUFFLGVBQXVCO0lBQ3BGLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFZLENBQUM7SUFDakQsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN4QjtJQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBHZXRzIHRleHQgb2YgZWxlbWVudCBleGNsdWRpbmcgY2VydGFpbiBzZWxlY3RvcnMgd2l0aGluIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBnZXQgdGV4dCBmcm9tLFxuICogQHBhcmFtIGV4Y2x1ZGVTZWxlY3RvciBTZWxlY3RvciBpZGVudGlmeWluZyB3aGljaCBlbGVtZW50cyB0byBleGNsdWRlLFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldFRleHRXaXRoRXhjbHVkZWRFbGVtZW50cyhlbGVtZW50OiBFbGVtZW50LCBleGNsdWRlU2VsZWN0b3I6IHN0cmluZykge1xuICBjb25zdCBjbG9uZSA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnQ7XG4gIGNvbnN0IGV4Y2x1c2lvbnMgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKGV4Y2x1ZGVTZWxlY3Rvcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGV4Y2x1c2lvbnNbaV0ucmVtb3ZlKCk7XG4gIH1cbiAgcmV0dXJuIChjbG9uZS50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpO1xufVxuIl19