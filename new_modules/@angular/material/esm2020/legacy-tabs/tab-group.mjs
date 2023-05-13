/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Inject, Optional, QueryList, ViewChild, ViewEncapsulation, } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { MatLegacyTab } from './tab';
import { _MatTabGroupBase, MAT_TAB_GROUP, MAT_TABS_CONFIG, } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/portal";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/cdk/a11y";
import * as i5 from "./tab-label-wrapper";
import * as i6 from "./tab-body";
import * as i7 from "./tab-header";
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 * @deprecated Use `MatTabGroup` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyTabGroup extends _MatTabGroupBase {
    constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        super(elementRef, changeDetectorRef, defaultConfig, animationMode);
    }
}
MatLegacyTabGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: MatLegacyTabGroup, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: MAT_TABS_CONFIG, optional: true }, { token: ANIMATION_MODULE_TYPE, optional: true }], target: i0.ɵɵFactoryTarget.Component });
MatLegacyTabGroup.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: MatLegacyTabGroup, selector: "mat-tab-group", inputs: { color: "color", disableRipple: "disableRipple" }, host: { properties: { "class.mat-tab-group-dynamic-height": "dynamicHeight", "class.mat-tab-group-inverted-header": "headerPosition === \"below\"" }, classAttribute: "mat-tab-group" }, providers: [
        {
            provide: MAT_TAB_GROUP,
            useExisting: MatLegacyTabGroup,
        },
    ], queries: [{ propertyName: "_allTabs", predicate: MatLegacyTab, descendants: true }], viewQueries: [{ propertyName: "_tabBodyWrapper", first: true, predicate: ["tabBodyWrapper"], descendants: true }, { propertyName: "_tabHeader", first: true, predicate: ["tabHeader"], descendants: true }], exportAs: ["matTabGroup"], usesInheritance: true, ngImport: i0, template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple\n       cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex === i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex === i\"\n       [ngClass]=\"tab.labelClass\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\"\n       (cdkFocusChange)=\"_tabFocusChanged($event, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\" [ngIfElse]=\"tabTextLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template #tabTextLabel>{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.tabindex]=\"(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex === i\"\n               [ngClass]=\"tab.bodyClass\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               [preserveContent]=\"preserveContent\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n", styles: [".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }, { kind: "directive", type: i3.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: i4.CdkMonitorFocus, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: ["cdkFocusChange"], exportAs: ["cdkMonitorFocus"] }, { kind: "directive", type: i5.MatLegacyTabLabelWrapper, selector: "[matTabLabelWrapper]", inputs: ["disabled"] }, { kind: "component", type: i6.MatLegacyTabBody, selector: "mat-tab-body" }, { kind: "component", type: i7.MatLegacyTabHeader, selector: "mat-tab-header", inputs: ["selectedIndex"], outputs: ["selectFocusedIndex", "indexFocused"] }], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: MatLegacyTabGroup, decorators: [{
            type: Component,
            args: [{ selector: 'mat-tab-group', exportAs: 'matTabGroup', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, inputs: ['color', 'disableRipple'], providers: [
                        {
                            provide: MAT_TAB_GROUP,
                            useExisting: MatLegacyTabGroup,
                        },
                    ], host: {
                        'class': 'mat-tab-group',
                        '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
                        '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"',
                    }, template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple\n       cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex === i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex === i\"\n       [ngClass]=\"tab.labelClass\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\"\n       (cdkFocusChange)=\"_tabFocusChanged($event, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\" [ngIfElse]=\"tabTextLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template #tabTextLabel>{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.tabindex]=\"(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex === i\"\n               [ngClass]=\"tab.bodyClass\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               [preserveContent]=\"preserveContent\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n", styles: [".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_TABS_CONFIG]
                }, {
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ANIMATION_MODULE_TYPE]
                }] }]; }, propDecorators: { _allTabs: [{
                type: ContentChildren,
                args: [MatLegacyTab, { descendants: true }]
            }], _tabBodyWrapper: [{
                type: ViewChild,
                args: ['tabBodyWrapper']
            }], _tabHeader: [{
                type: ViewChild,
                args: ['tabHeader']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2xlZ2FjeS10YWJzL3RhYi1ncm91cC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9sZWdhY3ktdGFicy90YWItZ3JvdXAuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDbkMsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxHQUdoQixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFFaEM7Ozs7OztHQU1HO0FBc0JILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFLckQsWUFDRSxVQUFzQixFQUN0QixpQkFBb0MsRUFDQyxhQUE2QixFQUN2QixhQUFzQjtRQUVqRSxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNyRSxDQUFDOzttSEFaVSxpQkFBaUIsNkVBUWxCLGVBQWUsNkJBQ0gscUJBQXFCO3VHQVRoQyxpQkFBaUIsNlJBWmpCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsYUFBYTtZQUN0QixXQUFXLEVBQUUsaUJBQWlCO1NBQy9CO0tBQ0YsbURBUWdCLFlBQVksK1NDM0QvQixzbEZBeURBO2dHRENhLGlCQUFpQjtrQkFyQjdCLFNBQVM7K0JBQ0UsZUFBZSxZQUNmLGFBQWEsaUJBR1IsaUJBQWlCLENBQUMsSUFBSSxtQkFFcEIsdUJBQXVCLENBQUMsT0FBTyxVQUN4QyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsYUFDdkI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsbUJBQW1CO3lCQUMvQjtxQkFDRixRQUNLO3dCQUNKLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixzQ0FBc0MsRUFBRSxlQUFlO3dCQUN2RCx1Q0FBdUMsRUFBRSw0QkFBNEI7cUJBQ3RFOzswQkFVRSxNQUFNOzJCQUFDLGVBQWU7OzBCQUFHLFFBQVE7OzBCQUNqQyxRQUFROzswQkFBSSxNQUFNOzJCQUFDLHFCQUFxQjs0Q0FSUyxRQUFRO3NCQUEzRCxlQUFlO3VCQUFDLFlBQVksRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUM7Z0JBQ3JCLGVBQWU7c0JBQTNDLFNBQVM7dUJBQUMsZ0JBQWdCO2dCQUNILFVBQVU7c0JBQWpDLFNBQVM7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge01hdExlZ2FjeVRhYn0gZnJvbSAnLi90YWInO1xuaW1wb3J0IHtcbiAgX01hdFRhYkdyb3VwQmFzZSxcbiAgTUFUX1RBQl9HUk9VUCxcbiAgTUFUX1RBQlNfQ09ORklHLFxuICBNYXRUYWJHcm91cEJhc2VIZWFkZXIsXG4gIE1hdFRhYnNDb25maWcsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuXG4vKipcbiAqIE1hdGVyaWFsIGRlc2lnbiB0YWItZ3JvdXAgY29tcG9uZW50LiBTdXBwb3J0cyBiYXNpYyB0YWIgcGFpcnMgKGxhYmVsICsgY29udGVudCkgYW5kIGluY2x1ZGVzXG4gKiBhbmltYXRlZCBpbmstYmFyLCBrZXlib2FyZCBuYXZpZ2F0aW9uLCBhbmQgc2NyZWVuIHJlYWRlci5cbiAqIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy90YWJzLmh0bWxcbiAqIEBkZXByZWNhdGVkIFVzZSBgTWF0VGFiR3JvdXBgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXRhYi1ncm91cCcsXG4gIGV4cG9ydEFzOiAnbWF0VGFiR3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBpbnB1dHM6IFsnY29sb3InLCAnZGlzYWJsZVJpcHBsZSddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBNQVRfVEFCX0dST1VQLFxuICAgICAgdXNlRXhpc3Rpbmc6IE1hdExlZ2FjeVRhYkdyb3VwLFxuICAgIH0sXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LXRhYi1ncm91cCcsXG4gICAgJ1tjbGFzcy5tYXQtdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0XSc6ICdkeW5hbWljSGVpZ2h0JyxcbiAgICAnW2NsYXNzLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyXSc6ICdoZWFkZXJQb3NpdGlvbiA9PT0gXCJiZWxvd1wiJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0TGVnYWN5VGFiR3JvdXAgZXh0ZW5kcyBfTWF0VGFiR3JvdXBCYXNlIHtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRMZWdhY3lUYWIsIHtkZXNjZW5kYW50czogdHJ1ZX0pIF9hbGxUYWJzOiBRdWVyeUxpc3Q8TWF0TGVnYWN5VGFiPjtcbiAgQFZpZXdDaGlsZCgndGFiQm9keVdyYXBwZXInKSBfdGFiQm9keVdyYXBwZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYkhlYWRlcicpIF90YWJIZWFkZXI6IE1hdFRhYkdyb3VwQmFzZUhlYWRlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KE1BVF9UQUJTX0NPTkZJRykgQE9wdGlvbmFsKCkgZGVmYXVsdENvbmZpZz86IE1hdFRhYnNDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIGFuaW1hdGlvbk1vZGU/OiBzdHJpbmcsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCBkZWZhdWx0Q29uZmlnLCBhbmltYXRpb25Nb2RlKTtcbiAgfVxufVxuIiwiPG1hdC10YWItaGVhZGVyICN0YWJIZWFkZXJcbiAgICAgICAgICAgICAgIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkSW5kZXggfHwgMFwiXG4gICAgICAgICAgICAgICBbZGlzYWJsZVJpcHBsZV09XCJkaXNhYmxlUmlwcGxlXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlUGFnaW5hdGlvbl09XCJkaXNhYmxlUGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAoaW5kZXhGb2N1c2VkKT1cIl9mb2N1c0NoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAoc2VsZWN0Rm9jdXNlZEluZGV4KT1cInNlbGVjdGVkSW5kZXggPSAkZXZlbnRcIj5cbiAgPGRpdiBjbGFzcz1cIm1hdC10YWItbGFiZWwgbWF0LWZvY3VzLWluZGljYXRvclwiIHJvbGU9XCJ0YWJcIiBtYXRUYWJMYWJlbFdyYXBwZXIgbWF0LXJpcHBsZVxuICAgICAgIGNka01vbml0b3JFbGVtZW50Rm9jdXNcbiAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIF90YWJzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICBbaWRdPVwiX2dldFRhYkxhYmVsSWQoaSlcIlxuICAgICAgIFthdHRyLnRhYkluZGV4XT1cIl9nZXRUYWJJbmRleChpKVwiXG4gICAgICAgW2F0dHIuYXJpYS1wb3NpbnNldF09XCJpICsgMVwiXG4gICAgICAgW2F0dHIuYXJpYS1zZXRzaXplXT1cIl90YWJzLmxlbmd0aFwiXG4gICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJfZ2V0VGFiQ29udGVudElkKGkpXCJcbiAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInNlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwidGFiLmFyaWFMYWJlbCB8fCBudWxsXCJcbiAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiKCF0YWIuYXJpYUxhYmVsICYmIHRhYi5hcmlhTGFiZWxsZWRieSkgPyB0YWIuYXJpYUxhYmVsbGVkYnkgOiBudWxsXCJcbiAgICAgICBbY2xhc3MubWF0LXRhYi1sYWJlbC1hY3RpdmVdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiXG4gICAgICAgW25nQ2xhc3NdPVwidGFiLmxhYmVsQ2xhc3NcIlxuICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgIFttYXRSaXBwbGVEaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWQgfHwgZGlzYWJsZVJpcHBsZVwiXG4gICAgICAgKGNsaWNrKT1cIl9oYW5kbGVDbGljayh0YWIsIHRhYkhlYWRlciwgaSlcIlxuICAgICAgIChjZGtGb2N1c0NoYW5nZSk9XCJfdGFiRm9jdXNDaGFuZ2VkKCRldmVudCwgaSlcIj5cblxuXG4gICAgPGRpdiBjbGFzcz1cIm1hdC10YWItbGFiZWwtY29udGVudFwiPlxuICAgICAgPCEtLSBJZiB0aGVyZSBpcyBhIGxhYmVsIHRlbXBsYXRlLCB1c2UgaXQuIC0tPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInRhYi50ZW1wbGF0ZUxhYmVsXCIgW25nSWZFbHNlXT1cInRhYlRleHRMYWJlbFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJ0YWIudGVtcGxhdGVMYWJlbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8IS0tIElmIHRoZXJlIGlzIG5vdCBhIGxhYmVsIHRlbXBsYXRlLCBmYWxsIGJhY2sgdG8gdGhlIHRleHQgbGFiZWwuIC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICN0YWJUZXh0TGFiZWw+e3t0YWIudGV4dExhYmVsfX08L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbWF0LXRhYi1oZWFkZXI+XG5cbjxkaXZcbiAgY2xhc3M9XCJtYXQtdGFiLWJvZHktd3JhcHBlclwiXG4gIFtjbGFzcy5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZV09XCJfYW5pbWF0aW9uTW9kZSA9PT0gJ05vb3BBbmltYXRpb25zJ1wiXG4gICN0YWJCb2R5V3JhcHBlcj5cbiAgPG1hdC10YWItYm9keSByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiBfdGFiczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICBbaWRdPVwiX2dldFRhYkNvbnRlbnRJZChpKVwiXG4gICAgICAgICAgICAgICBbYXR0ci50YWJpbmRleF09XCIoY29udGVudFRhYkluZGV4ICE9IG51bGwgJiYgc2VsZWN0ZWRJbmRleCA9PT0gaSkgPyBjb250ZW50VGFiSW5kZXggOiBudWxsXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJfZ2V0VGFiTGFiZWxJZChpKVwiXG4gICAgICAgICAgICAgICBbY2xhc3MubWF0LXRhYi1ib2R5LWFjdGl2ZV09XCJzZWxlY3RlZEluZGV4ID09PSBpXCJcbiAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInRhYi5ib2R5Q2xhc3NcIlxuICAgICAgICAgICAgICAgW2NvbnRlbnRdPVwidGFiLmNvbnRlbnQhXCJcbiAgICAgICAgICAgICAgIFtwb3NpdGlvbl09XCJ0YWIucG9zaXRpb24hXCJcbiAgICAgICAgICAgICAgIFtvcmlnaW5dPVwidGFiLm9yaWdpblwiXG4gICAgICAgICAgICAgICBbYW5pbWF0aW9uRHVyYXRpb25dPVwiYW5pbWF0aW9uRHVyYXRpb25cIlxuICAgICAgICAgICAgICAgW3ByZXNlcnZlQ29udGVudF09XCJwcmVzZXJ2ZUNvbnRlbnRcIlxuICAgICAgICAgICAgICAgKF9vbkNlbnRlcmVkKT1cIl9yZW1vdmVUYWJCb2R5V3JhcHBlckhlaWdodCgpXCJcbiAgICAgICAgICAgICAgIChfb25DZW50ZXJpbmcpPVwiX3NldFRhYkJvZHlXcmFwcGVySGVpZ2h0KCRldmVudClcIj5cbiAgPC9tYXQtdGFiLWJvZHk+XG48L2Rpdj5cbiJdfQ==