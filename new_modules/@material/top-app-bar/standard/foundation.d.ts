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
import { MDCTopAppBarAdapter } from '../adapter';
import { MDCTopAppBarBaseFoundation } from '../foundation';
/** MDC Top App Bar Foundation */
export declare class MDCTopAppBarFoundation extends MDCTopAppBarBaseFoundation {
    /**
     * Indicates if the top app bar was docked in the previous scroll handler
     * iteration.
     */
    private wasDocked;
    /**
     * Indicates if the top app bar is docked in the fully shown position.
     */
    private isDockedShowing;
    /**
     * Variable for current scroll position of the top app bar
     */
    private currentAppBarOffsetTop;
    /**
     * Used to prevent the top app bar from being scrolled out of view during
     * resize events
     */
    private isCurrentlyBeingResized;
    /**
     * The timeout that's used to throttle the resize events
     */
    private resizeThrottleId;
    /**
     * Used for diffs of current scroll position vs previous scroll position
     */
    private lastScrollPosition;
    /**
     * Used to verify when the top app bar is completely showing or completely
     * hidden
     */
    private topAppBarHeight;
    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized
     * variable after a resize
     */
    private resizeDebounceId;
    constructor(adapter?: Partial<MDCTopAppBarAdapter>);
    destroy(): void;
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     */
    handleTargetScroll(): void;
    /**
     * Top app bar resize handler that throttle/debounce functions that execute
     * updates.
     */
    handleWindowResize(): void;
    /**
     * Function to determine if the DOM needs to update.
     */
    private checkForUpdate;
    /**
     * Function to move the top app bar if needed.
     */
    private moveTopAppBar;
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */
    private throttledResizeHandler;
}
export default MDCTopAppBarFoundation;
