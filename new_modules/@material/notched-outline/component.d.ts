/**
 * @license
 * Copyright 2017 Google Inc.
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
import { MDCNotchedOutlineFoundation } from './foundation';
/** MDC Notched Outline Factory */
export declare type MDCNotchedOutlineFactory = (el: HTMLElement, foundation?: MDCNotchedOutlineFoundation) => MDCNotchedOutline;
/** MDC Notched Outline */
export declare class MDCNotchedOutline extends MDCComponent<MDCNotchedOutlineFoundation> {
    static attachTo(root: HTMLElement): MDCNotchedOutline;
    private notchElement;
    initialSyncWithDOM(): void;
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    notch(notchWidth: number): void;
    /**
     * Updates classes and styles to close the notch.
     */
    closeNotch(): void;
    getDefaultFoundation(): MDCNotchedOutlineFoundation;
}
