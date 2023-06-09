/**
 * @license
 * Copyright 2018 Google Inc.
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
import { MDCComponent } from '@material/base/component';
import { MDCListFoundation } from './foundation';
import { MDCListIndex } from './types';
/** MDC List Factory */
export declare type MDCListFactory = (el: HTMLElement, foundation?: MDCListFoundation) => MDCList;
/** MDC List */
export declare class MDCList extends MDCComponent<MDCListFoundation> {
    set vertical(value: boolean);
    get listElements(): HTMLElement[];
    set wrapFocus(value: boolean);
    /**
     * @return Whether typeahead is currently matching a user-specified prefix.
     */
    get typeaheadInProgress(): boolean;
    /**
     * Sets whether typeahead functionality is enabled on the list.
     * @param hasTypeahead Whether typeahead is enabled.
     */
    set hasTypeahead(hasTypeahead: boolean);
    set singleSelection(isSingleSelectionList: boolean);
    set disabledItemsFocusable(areDisabledItemsFocusable: boolean);
    get selectedIndex(): MDCListIndex;
    set selectedIndex(index: MDCListIndex);
    static attachTo(root: HTMLElement): MDCList;
    private handleKeydown;
    private handleClick;
    private focusInEventListener;
    private focusOutEventListener;
    private classNameMap;
    private isEvolutionEnabled;
    private isInteractive;
    initialSyncWithDOM(): void;
    destroy(): void;
    layout(): void;
    /**
     * Extracts the primary text from a list item.
     * @param item The list item element.
     * @return The primary text in the element.
     */
    getPrimaryText(item: Element): string;
    /**
     * Initialize selectedIndex value based on pre-selected list items.
     */
    initializeListType(): void;
    /**
     * Updates the list item at itemIndex to the desired isEnabled state.
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    setEnabled(itemIndex: number, isEnabled: boolean): void;
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Defaults to
     *     the currently focused index.
     * @return The index of the matched item.
     */
    typeaheadMatchItem(nextChar: string, startingIndex?: number): number;
    getDefaultFoundation(): MDCListFoundation;
    /**
     * Ensures that at least one item is focusable if the list is interactive and
     * doesn't specify a suitable tabindex.
     */
    private ensureFocusable;
    private initialFocusIndex;
    /**
     * Used to figure out which list item this event is targeting. Or returns -1
     * if there is no list item
     */
    private getListItemIndex;
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    private handleFocusInEvent;
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    private handleFocusOutEvent;
    /**
     * Used to figure out which element was focused when keydown event occurred
     * before sending the event to the foundation.
     */
    private handleKeydownEvent;
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    private handleClickEvent;
}
