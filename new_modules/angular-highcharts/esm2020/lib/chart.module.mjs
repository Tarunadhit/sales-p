/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import { ChartDirective } from './chart.directive';
import { ChartService, HIGHCHARTS_MODULES } from './chart.service';
import * as i0 from "@angular/core";
import * as i1 from "./chart.service";
export class ChartModule {
    constructor(cs) {
        this.cs = cs;
        this.cs.initModules();
    }
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartModule, deps: [{ token: i1.ChartService }], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.1", ngImport: i0, type: ChartModule, declarations: [ChartDirective], exports: [ChartDirective] });
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartModule, providers: [
        { provide: HIGHCHARTS_MODULES, useValue: [] },
        ChartService
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ChartDirective],
                    declarations: [ChartDirective],
                    providers: [
                        { provide: HIGHCHARTS_MODULES, useValue: [] },
                        ChartService
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.ChartService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1oaWdoY2hhcnRzL3NyYy9saWIvY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7QUFDSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVVuRSxNQUFNLE9BQU8sV0FBVztJQUN0QixZQUFvQixFQUFnQjtRQUFoQixPQUFFLEdBQUYsRUFBRSxDQUFjO1FBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7d0dBSFUsV0FBVzt5R0FBWCxXQUFXLGlCQU5QLGNBQWMsYUFEbkIsY0FBYzt5R0FPYixXQUFXLGFBTFg7UUFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1FBQzdDLFlBQVk7S0FDYjsyRkFFVSxXQUFXO2tCQVJ2QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTt3QkFDN0MsWUFBWTtxQkFDYjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBGZWxpeCBJdHplbnBsaXR6LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0XG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2Vib3IvYW5ndWxhci1oaWdoY2hhcnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGFydC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2hhcnRTZXJ2aWNlLCBISUdIQ0hBUlRTX01PRFVMRVMgfSBmcm9tICcuL2NoYXJ0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbQ2hhcnREaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtDaGFydERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSElHSENIQVJUU19NT0RVTEVTLCB1c2VWYWx1ZTogW10gfSxcbiAgICBDaGFydFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3M6IENoYXJ0U2VydmljZSkge1xuICAgIHRoaXMuY3MuaW5pdE1vZHVsZXMoKTtcbiAgfVxufVxuIl19