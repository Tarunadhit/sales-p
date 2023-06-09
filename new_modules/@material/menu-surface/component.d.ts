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
import { Corner } from './constants';
import { MDCMenuSurfaceFoundation } from './foundation';
import { MDCMenuDistance } from './types';
/** MDC Menu Surface Factory */
export declare type MDCMenuSurfaceFactory = (el: HTMLElement, foundation?: MDCMenuSurfaceFoundation) => MDCMenuSurface;
/** MDC Menu Surface */
export declare class MDCMenuSurface extends MDCComponent<MDCMenuSurfaceFoundation> {
    static attachTo(root: HTMLElement): MDCMenuSurface;
    anchorElement: Element | null;
    private previousFocus?;
    private handleKeydown;
    private handleBodyClick;
    private registerBodyClickListener;
    private deregisterBodyClickListener;
    initialSyncWithDOM(): void;
    destroy(): void;
    isOpen(): boolean;
    open(): void;
    close(skipRestoreFocus?: boolean): void;
    set quickOpen(quickOpen: boolean);
    /**
     * Sets the foundation to use page offsets for a positioning when the menu is
     * hoisted to the body.
     */
    setIsHoisted(isHoisted: boolean): void;
    /** Sets the element that the menu-surface is anchored to. */
    setMenuSurfaceAnchorElement(element: Element): void;
    /** Sets the menu-surface to position: fixed. */
    setFixedPosition(isFixed: boolean): void;
    /**
     * Sets the absolute x/y position to position based on. Requires the menu to
     * be hoisted.
     */
    setAbsolutePosition(x: number, y: number): void;
    /**
     * @param corner Default anchor corner alignment of top-left surface corner.
     */
    setAnchorCorner(corner: Corner): void;
    setAnchorMargin(margin: Partial<MDCMenuDistance>): void;
    getDefaultFoundation(): MDCMenuSurfaceFoundation;
}
