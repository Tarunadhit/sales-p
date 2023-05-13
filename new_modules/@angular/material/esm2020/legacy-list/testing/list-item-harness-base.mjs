/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentHarness, HarnessPredicate, ContentContainerComponentHarness, parallel, } from '@angular/cdk/testing';
const iconSelector = '.mat-list-icon';
const avatarSelector = '.mat-list-avatar';
/**
 * Gets a `HarnessPredicate` that applies the given `BaseListItemHarnessFilters` to the given
 * list item harness.
 * @template H The type of list item harness to create a predicate for.
 * @param harnessType A constructor for a list item harness.
 * @param options An instance of `BaseListItemHarnessFilters` to apply.
 * @return A `HarnessPredicate` for the given harness type with the given options applied.
 * @deprecated Use `getListItemPredicate` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export function getListItemPredicate(harnessType, options) {
    return new HarnessPredicate(harnessType, options).addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
}
/**
 * Harness for interacting with a list subheader.
 * @deprecated Use `MatSubheaderHarness` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacySubheaderHarness extends ComponentHarness {
    static with(options = {}) {
        return new HarnessPredicate(MatLegacySubheaderHarness, options).addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
    }
    /** Gets the full text content of the list item (including text from any font icons). */
    async getText() {
        return (await this.host()).text();
    }
}
MatLegacySubheaderHarness.hostSelector = '.mat-subheader';
/**
 * Shared behavior among the harnesses for the various `MatListItem` flavors.
 * @docs-private
 * @deprecated Use `class` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyListItemHarnessBase extends ContentContainerComponentHarness {
    constructor() {
        super(...arguments);
        this._lines = this.locatorForAll('.mat-line');
        this._avatar = this.locatorForOptional(avatarSelector);
        this._icon = this.locatorForOptional(iconSelector);
    }
    /** Gets the full text content of the list item. */
    async getText() {
        return (await this.host()).text({ exclude: `${iconSelector}, ${avatarSelector}` });
    }
    /** Gets the lines of text (`mat-line` elements) in this nav list item. */
    async getLinesText() {
        const lines = await this._lines();
        return parallel(() => lines.map(l => l.text()));
    }
    /** Whether this list item has an avatar. */
    async hasAvatar() {
        return !!(await this._avatar());
    }
    /** Whether this list item has an icon. */
    async hasIcon() {
        return !!(await this._icon());
    }
    /** Whether this list option is disabled. */
    async isDisabled() {
        return (await this.host()).hasClass('mat-list-item-disabled');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLWhhcm5lc3MtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9sZWdhY3ktbGlzdC90ZXN0aW5nL2xpc3QtaXRlbS1oYXJuZXNzLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLGdCQUFnQixFQUVoQixnQkFBZ0IsRUFDaEIsZ0NBQWdDLEVBQ2hDLFFBQVEsR0FDVCxNQUFNLHNCQUFzQixDQUFDO0FBTTlCLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDO0FBQ3RDLE1BQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDO0FBRTFDOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsV0FBMkMsRUFDM0MsT0FBeUM7SUFFekMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ3pELE1BQU0sRUFDTixPQUFPLENBQUMsSUFBSSxFQUNaLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FDM0UsQ0FBQztBQUNKLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjtJQUc3RCxNQUFNLENBQUMsSUFBSSxDQUNULFVBQXlDLEVBQUU7UUFFM0MsT0FBTyxJQUFJLGdCQUFnQixDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDdkUsTUFBTSxFQUNOLE9BQU8sQ0FBQyxJQUFJLEVBQ1osQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQUVELHdGQUF3RjtJQUN4RixLQUFLLENBQUMsT0FBTztRQUNYLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7O0FBZk0sc0NBQVksR0FBRyxnQkFBZ0IsQ0FBQztBQTRCekM7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQWdCLDRCQUE2QixTQUFRLGdDQUEwRDtJQUFySDs7UUFDVSxXQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxZQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELFVBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUEyQnhELENBQUM7SUF6QkMsbURBQW1EO0lBQ25ELEtBQUssQ0FBQyxPQUFPO1FBQ1gsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsWUFBWSxLQUFLLGNBQWMsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLEtBQUssQ0FBQyxZQUFZO1FBQ2hCLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsS0FBSyxDQUFDLFNBQVM7UUFDYixPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDBDQUEwQztJQUMxQyxLQUFLLENBQUMsT0FBTztRQUNYLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNENBQTRDO0lBQzVDLEtBQUssQ0FBQyxVQUFVO1FBQ2QsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudEhhcm5lc3MsXG4gIENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcixcbiAgSGFybmVzc1ByZWRpY2F0ZSxcbiAgQ29udGVudENvbnRhaW5lckNvbXBvbmVudEhhcm5lc3MsXG4gIHBhcmFsbGVsLFxufSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge1xuICBMZWdhY3lCYXNlTGlzdEl0ZW1IYXJuZXNzRmlsdGVycyxcbiAgTGVnYWN5U3ViaGVhZGVySGFybmVzc0ZpbHRlcnMsXG59IGZyb20gJy4vbGlzdC1oYXJuZXNzLWZpbHRlcnMnO1xuXG5jb25zdCBpY29uU2VsZWN0b3IgPSAnLm1hdC1saXN0LWljb24nO1xuY29uc3QgYXZhdGFyU2VsZWN0b3IgPSAnLm1hdC1saXN0LWF2YXRhcic7XG5cbi8qKlxuICogR2V0cyBhIGBIYXJuZXNzUHJlZGljYXRlYCB0aGF0IGFwcGxpZXMgdGhlIGdpdmVuIGBCYXNlTGlzdEl0ZW1IYXJuZXNzRmlsdGVyc2AgdG8gdGhlIGdpdmVuXG4gKiBsaXN0IGl0ZW0gaGFybmVzcy5cbiAqIEB0ZW1wbGF0ZSBIIFRoZSB0eXBlIG9mIGxpc3QgaXRlbSBoYXJuZXNzIHRvIGNyZWF0ZSBhIHByZWRpY2F0ZSBmb3IuXG4gKiBAcGFyYW0gaGFybmVzc1R5cGUgQSBjb25zdHJ1Y3RvciBmb3IgYSBsaXN0IGl0ZW0gaGFybmVzcy5cbiAqIEBwYXJhbSBvcHRpb25zIEFuIGluc3RhbmNlIG9mIGBCYXNlTGlzdEl0ZW1IYXJuZXNzRmlsdGVyc2AgdG8gYXBwbHkuXG4gKiBAcmV0dXJuIEEgYEhhcm5lc3NQcmVkaWNhdGVgIGZvciB0aGUgZ2l2ZW4gaGFybmVzcyB0eXBlIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMgYXBwbGllZC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgZ2V0TGlzdEl0ZW1QcmVkaWNhdGVgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL2xpc3QvdGVzdGluZ2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdEl0ZW1QcmVkaWNhdGU8SCBleHRlbmRzIE1hdExlZ2FjeUxpc3RJdGVtSGFybmVzc0Jhc2U+KFxuICBoYXJuZXNzVHlwZTogQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPEg+LFxuICBvcHRpb25zOiBMZWdhY3lCYXNlTGlzdEl0ZW1IYXJuZXNzRmlsdGVycyxcbik6IEhhcm5lc3NQcmVkaWNhdGU8SD4ge1xuICByZXR1cm4gbmV3IEhhcm5lc3NQcmVkaWNhdGUoaGFybmVzc1R5cGUsIG9wdGlvbnMpLmFkZE9wdGlvbihcbiAgICAndGV4dCcsXG4gICAgb3B0aW9ucy50ZXh0LFxuICAgIChoYXJuZXNzLCB0ZXh0KSA9PiBIYXJuZXNzUHJlZGljYXRlLnN0cmluZ01hdGNoZXMoaGFybmVzcy5nZXRUZXh0KCksIHRleHQpLFxuICApO1xufVxuXG4vKipcbiAqIEhhcm5lc3MgZm9yIGludGVyYWN0aW5nIHdpdGggYSBsaXN0IHN1YmhlYWRlci5cbiAqIEBkZXByZWNhdGVkIFVzZSBgTWF0U3ViaGVhZGVySGFybmVzc2AgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdC90ZXN0aW5nYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRMZWdhY3lTdWJoZWFkZXJIYXJuZXNzIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcyB7XG4gIHN0YXRpYyBob3N0U2VsZWN0b3IgPSAnLm1hdC1zdWJoZWFkZXInO1xuXG4gIHN0YXRpYyB3aXRoKFxuICAgIG9wdGlvbnM6IExlZ2FjeVN1YmhlYWRlckhhcm5lc3NGaWx0ZXJzID0ge30sXG4gICk6IEhhcm5lc3NQcmVkaWNhdGU8TWF0TGVnYWN5U3ViaGVhZGVySGFybmVzcz4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZShNYXRMZWdhY3lTdWJoZWFkZXJIYXJuZXNzLCBvcHRpb25zKS5hZGRPcHRpb24oXG4gICAgICAndGV4dCcsXG4gICAgICBvcHRpb25zLnRleHQsXG4gICAgICAoaGFybmVzcywgdGV4dCkgPT4gSGFybmVzc1ByZWRpY2F0ZS5zdHJpbmdNYXRjaGVzKGhhcm5lc3MuZ2V0VGV4dCgpLCB0ZXh0KSxcbiAgICApO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGZ1bGwgdGV4dCBjb250ZW50IG9mIHRoZSBsaXN0IGl0ZW0gKGluY2x1ZGluZyB0ZXh0IGZyb20gYW55IGZvbnQgaWNvbnMpLiAqL1xuICBhc3luYyBnZXRUZXh0KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmhvc3QoKSkudGV4dCgpO1xuICB9XG59XG5cbi8qKlxuICogU2VsZWN0b3JzIGZvciB0aGUgdmFyaW91cyBsaXN0IGl0ZW0gc2VjdGlvbnMgdGhhdCBtYXkgY29udGFpbiB1c2VyIGNvbnRlbnQuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGVudW1gIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL2xpc3QvdGVzdGluZ2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICovXG5leHBvcnQgY29uc3QgZW51bSBNYXRMZWdhY3lMaXN0SXRlbVNlY3Rpb24ge1xuICBDT05URU5UID0gJy5tYXQtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAvLyBUT0RPKG1tYWxlcmJhKTogY29uc2lkZXIgYWRkaW5nIHNlY3Rpb25zIGZvciBsZWFkaW5nL3RyYWlsaW5nIGljb25zLlxufVxuXG4vKipcbiAqIFNoYXJlZCBiZWhhdmlvciBhbW9uZyB0aGUgaGFybmVzc2VzIGZvciB0aGUgdmFyaW91cyBgTWF0TGlzdEl0ZW1gIGZsYXZvcnMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGNsYXNzYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9saXN0L3Rlc3RpbmdgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1hdExlZ2FjeUxpc3RJdGVtSGFybmVzc0Jhc2UgZXh0ZW5kcyBDb250ZW50Q29udGFpbmVyQ29tcG9uZW50SGFybmVzczxNYXRMZWdhY3lMaXN0SXRlbVNlY3Rpb24+IHtcbiAgcHJpdmF0ZSBfbGluZXMgPSB0aGlzLmxvY2F0b3JGb3JBbGwoJy5tYXQtbGluZScpO1xuICBwcml2YXRlIF9hdmF0YXIgPSB0aGlzLmxvY2F0b3JGb3JPcHRpb25hbChhdmF0YXJTZWxlY3Rvcik7XG4gIHByaXZhdGUgX2ljb24gPSB0aGlzLmxvY2F0b3JGb3JPcHRpb25hbChpY29uU2VsZWN0b3IpO1xuXG4gIC8qKiBHZXRzIHRoZSBmdWxsIHRleHQgY29udGVudCBvZiB0aGUgbGlzdCBpdGVtLiAqL1xuICBhc3luYyBnZXRUZXh0KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmhvc3QoKSkudGV4dCh7ZXhjbHVkZTogYCR7aWNvblNlbGVjdG9yfSwgJHthdmF0YXJTZWxlY3Rvcn1gfSk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgbGluZXMgb2YgdGV4dCAoYG1hdC1saW5lYCBlbGVtZW50cykgaW4gdGhpcyBuYXYgbGlzdCBpdGVtLiAqL1xuICBhc3luYyBnZXRMaW5lc1RleHQoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGNvbnN0IGxpbmVzID0gYXdhaXQgdGhpcy5fbGluZXMoKTtcbiAgICByZXR1cm4gcGFyYWxsZWwoKCkgPT4gbGluZXMubWFwKGwgPT4gbC50ZXh0KCkpKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgbGlzdCBpdGVtIGhhcyBhbiBhdmF0YXIuICovXG4gIGFzeW5jIGhhc0F2YXRhcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5fYXZhdGFyKCkpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBsaXN0IGl0ZW0gaGFzIGFuIGljb24uICovXG4gIGFzeW5jIGhhc0ljb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuICEhKGF3YWl0IHRoaXMuX2ljb24oKSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIGxpc3Qgb3B0aW9uIGlzIGRpc2FibGVkLiAqL1xuICBhc3luYyBpc0Rpc2FibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLmhhc0NsYXNzKCdtYXQtbGlzdC1pdGVtLWRpc2FibGVkJyk7XG4gIH1cbn1cbiJdfQ==