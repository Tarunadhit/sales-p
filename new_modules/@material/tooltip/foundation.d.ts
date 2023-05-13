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
import { MDCFoundation } from '@material/base/foundation';
import { EventType, SpecificEventListener } from '@material/base/types';
import { MDCTooltipAdapter } from './adapter';
import { AnchorBoundaryType, PositionWithCaret, XPosition, YPosition } from './constants';
/** MDC Tooltip Foundation */
export declare class MDCTooltipFoundation extends MDCFoundation<MDCTooltipAdapter> {
    static get defaultAdapter(): MDCTooltipAdapter;
    private interactiveTooltip;
    private richTooltip;
    private persistentTooltip;
    private hasCaret;
    private tooltipShown;
    private anchorGap;
    private xTooltipPos;
    private yTooltipPos;
    private tooltipPositionWithCaret;
    private readonly minViewportTooltipThreshold;
    private hideDelayMs;
    private showDelayMs;
    private anchorRect;
    private parentRect;
    private frameId;
    private hideTimeout;
    private showTimeout;
    private readonly animFrame;
    private readonly anchorBlurHandler;
    private readonly documentClickHandler;
    private readonly documentKeydownHandler;
    private readonly tooltipMouseEnterHandler;
    private readonly tooltipMouseLeaveHandler;
    private readonly richTooltipFocusOutHandler;
    private readonly windowScrollHandler;
    private readonly windowResizeHandler;
    private readonly addAncestorScrollEventListeners;
    private readonly removeAncestorScrollEventListeners;
    constructor(adapter?: Partial<MDCTooltipAdapter>);
    init(): void;
    isShown(): boolean;
    isRich(): boolean;
    isPersistent(): boolean;
    handleAnchorMouseEnter(): void;
    handleAnchorTouchstart(): void;
    private preventContextMenuOnLongTouch;
    /**
     * Helper methods for determining if the event target or related target
     * is contained inside the tooltip or the anchor. These methods are used to
     * determing when a tooltip should be closed of left open on blur and click
     * events.
     */
    private tooltipContainsRelatedTargetElement;
    private anchorOrTooltipContainsTargetElement;
    handleAnchorTouchend(): void;
    handleAnchorFocus(evt: FocusEvent): void;
    handleAnchorMouseLeave(): void;
    handleAnchorClick(): void;
    handleDocumentClick(evt: MouseEvent): void;
    handleKeydown(evt: KeyboardEvent): boolean;
    private handleAnchorBlur;
    private handleTooltipMouseEnter;
    private handleTooltipMouseLeave;
    private handleRichTooltipFocusOut;
    private handleWindowScrollEvent;
    /**
     * On window resize or scroll, check the anchor position and size and
     * repostion tooltip if necessary.
     */
    private handleWindowChangeEvent;
    show(): void;
    hide(): void;
    handleTransitionEnd(): void;
    private clearAllAnimationClasses;
    setTooltipPosition(position: {
        xPos?: XPosition;
        yPos?: YPosition;
        withCaretPos?: PositionWithCaret;
    }): void;
    setAnchorBoundaryType(type: AnchorBoundaryType): void;
    setShowDelay(delayMs: number): void;
    setHideDelay(delayMs: number): void;
    private isTooltipMultiline;
    private positionPlainTooltip;
    private positionRichTooltip;
    /**
     * Calculates the position of the tooltip. A tooltip will be placed
     * beneath the anchor element and aligned either with the 'start'/'end'
     * edge of the anchor element or the 'center'.
     *
     * Tooltip alignment is selected such that the tooltip maintains a
     * threshold distance away from the viewport (defaulting to 'center'
     * alignment). If the placement of the anchor prevents this threshold
     * distance from being maintained, the tooltip is positioned so that it
     * does not collide with the viewport.
     *
     * Users can specify an alignment, however, if this alignment results in
     * the tooltip colliding with the viewport, this specification is
     * overwritten.
     */
    private calculateTooltipStyles;
    /**
     * Calculates the `left` distance for the tooltip.
     * Returns the distance value and a string indicating the x-axis transform-
     * origin that should be used when animating the tooltip.
     */
    private calculateXTooltipDistance;
    /**
     * Given the values for the horizontal alignments of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all alignments violate the threshold, then the returned Set
     * contains values that keep the tooltip within the viewport.
     */
    private determineValidPositionOptions;
    private positionHonorsViewportThreshold;
    private positionDoesntCollideWithViewport;
    /**
     * Calculates the `top` distance for the tooltip.
     * Returns the distance value and a string indicating the y-axis transform-
     * origin that should be used when animating the tooltip.
     */
    private calculateYTooltipDistance;
    /**
     * Given the values for above/below alignment of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all possible alignments violate the threshold, then the
     * returned Set contains values that keep the tooltip within the viewport.
     */
    private determineValidYPositionOptions;
    private yPositionHonorsViewportThreshold;
    private yPositionDoesntCollideWithViewport;
    private calculateTooltipWithCaretStyles;
    private calculateXWithCaretDistanceOptions;
    private calculateYWithCaretDistanceOptions;
    private repositionTooltipOnAnchorMove;
    /**
     * Given a list of x/y position options for a rich tooltip with caret, checks
     * if valid x/y combinations of these position options are either within the
     * viewport threshold, or simply within the viewport. Returns a map with the
     * valid x/y position combinations that all either honor the viewport
     * threshold or are simply inside within the viewport.
     */
    private validateTooltipWithCaretDistances;
    /**
     * Method for generating a horizontal and vertical position for the tooltip if
     * all other calculated values are considered invalid. This would only happen
     * in situations of very small viewports/large tooltips.
     */
    private generateBackupPositionOption;
    /**
     * Given a list of valid position options for a rich tooltip with caret,
     * returns the option that should be used.
     */
    private determineTooltipWithCaretDistance;
    /**
     * Returns the corresponding PositionWithCaret enum for the provided
     * XPositionWithCaret and YPositionWithCaret enums. This mapping exists so our
     * public API accepts only PositionWithCaret enums (as all combinations of
     * XPositionWithCaret and YPositionWithCaret are not valid), but internally we
     * can calculate the X and Y positions of a rich tooltip with caret
     * separately.
     */
    private caretPositionOptionsMapping;
    /**
     * Given a PositionWithCaret, applies the correct styles to the caret element
     * so that it is positioned properly on the rich tooltip.
     * Returns the x and y positions of the caret, to be used as the
     * transform-origin on the tooltip itself for entrance animations.
     */
    private setCaretPositionStyles;
    /**
     * Given a PositionWithCaret, determines the correct styles to position the
     * caret properly on the rich tooltip.
     */
    private calculateCaretPositionOnTooltip;
    private clearShowTimeout;
    private clearHideTimeout;
    /**
     * Method that allows user to specify additional elements that should have a
     * scroll event listener attached to it. This should be used in instances
     * where the anchor element is placed inside a scrollable container, and will
     * ensure that the tooltip will stay attached to the anchor on scroll.
     */
    attachScrollHandler(addEventListenerFn: <K extends EventType>(event: K, handler: SpecificEventListener<K>) => void): void;
    /**
     * Must be used in conjunction with #attachScrollHandler. Removes the scroll
     * event handler from elements on the page.
     */
    removeScrollHandler(removeEventHandlerFn: <K extends EventType>(event: K, handler: SpecificEventListener<K>) => void): void;
    destroy(): void;
}
export default MDCTooltipFoundation;
