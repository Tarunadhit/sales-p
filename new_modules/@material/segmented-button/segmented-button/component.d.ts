/**
 * @license
 * Copyright 2020 Google Inc.
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
import { MDCSegmentedButtonSegment, MDCSegmentedButtonSegmentFactory } from '../segment/component';
import { SegmentDetail } from '../types';
import { MDCSegmentedButtonFoundation } from './foundation';
/** MDC Segmented Button */
export declare class MDCSegmentedButton extends MDCComponent<MDCSegmentedButtonFoundation> {
    static attachTo(root: HTMLElement): MDCSegmentedButton;
    get segments(): readonly MDCSegmentedButtonSegment[];
    private segmentsList;
    private segmentFactory;
    private handleSelected;
    initialize(segmentFactory?: MDCSegmentedButtonSegmentFactory): void;
    /**
     * @param segmentFactory Factory to create new child segments
     * @return Returns list of child segments found in DOM
     */
    private instantiateSegments;
    initialSyncWithDOM(): void;
    destroy(): void;
    getDefaultFoundation(): MDCSegmentedButtonFoundation;
    /**
     * @return Returns readonly list of selected child segments as SegmentDetails
     */
    getSelectedSegments(): readonly SegmentDetail[];
    /**
     * Sets identified segment to be selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    selectSegment(indexOrSegmentId: number | string): void;
    /**
     * Sets identified segment to be not selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    unselectSegment(indexOrSegmentId: number | string): void;
    /**
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     * @return Returns true if identified child segment is currently selected,
     * otherwise returns false
     */
    isSegmentSelected(indexOrSegmentId: number | string): boolean;
    /**
     * @return Returns child segments mapped to readonly SegmentDetail list
     */
    private mappedSegments;
}
