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
import { MDCComponent } from '@material/base/component';
import { MDCFoundation } from '@material/base/foundation';
/** MDC Attachable */
export interface MDCAttachable extends Function {
    attachTo(root: HTMLElement): MDCComponent<MDCFoundation>;
}
/**
 * Auto-initializes all MDC components on a page.
 */
declare function mdcAutoInit(root?: ParentNode): MDCComponent<MDCFoundation<{}>>[];
declare namespace mdcAutoInit {
    var register: (componentName: string, Constructor: MDCAttachable, warn?: (...data: any[]) => void) => void;
    var deregister: (componentName: string) => void;
    var deregisterAll: () => void;
}
export default mdcAutoInit;
export { mdcAutoInit };
