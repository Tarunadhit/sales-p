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
import { MDCChip, MDCChipFactory } from '../chip/component';
import { MDCChipSetFoundation } from './foundation';
/** MDC Chip Set */
export declare class MDCChipSet extends MDCComponent<MDCChipSetFoundation> {
    static attachTo(root: HTMLElement): MDCChipSet;
    get chips(): readonly MDCChip[];
    /**
     * @return An array of the IDs of all selected chips.
     */
    get selectedChipIds(): readonly string[];
    private chipsList;
    private chipFactory;
    private handleChipInteraction;
    private handleChipSelection;
    private handleChipRemoval;
    private handleChipNavigation;
    /**
     * @param chipFactory A function which creates a new MDCChip.
     */
    initialize(chipFactory?: MDCChipFactory): void;
    initialSyncWithDOM(): void;
    destroy(): void;
    /**
     * Adds a new chip object to the chip set from the given chip element.
     */
    addChip(chipEl: HTMLElement): void;
    getDefaultFoundation(): MDCChipSetFoundation;
    /**
     * Instantiates chip components on all of the chip set's child chip elements.
     */
    private instantiateChips;
    /**
     * Returns the index of the chip with the given id, or -1 if the chip does not
     * exist.
     */
    private findChipIndex;
}
