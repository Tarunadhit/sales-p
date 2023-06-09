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
import { MDCFoundation } from '@material/base/foundation';
import { MDCSelectIconAdapter } from './adapter';
/** MDC Select Icon Foundation */
export declare class MDCSelectIconFoundation extends MDCFoundation<MDCSelectIconAdapter> {
    static get strings(): {
        ICON_EVENT: string;
        ICON_ROLE: string;
    };
    /**
     * See {@link MDCSelectIconAdapter} for typing information on parameters and
     * return types.
     */
    static get defaultAdapter(): MDCSelectIconAdapter;
    private savedTabIndex;
    private readonly interactionHandler;
    constructor(adapter?: Partial<MDCSelectIconAdapter>);
    init(): void;
    destroy(): void;
    setDisabled(disabled: boolean): void;
    setAriaLabel(label: string): void;
    setContent(content: string): void;
    handleInteraction(evt: MouseEvent | KeyboardEvent): void;
}
export default MDCSelectIconFoundation;
