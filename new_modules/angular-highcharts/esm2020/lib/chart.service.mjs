/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Highstock from 'highcharts/highstock';
import * as Highmaps from 'highcharts/highmaps';
import * as HighchartsGnatt from 'highcharts/highcharts-gantt';
import * as i0 from "@angular/core";
export let HIGHCHARTS_MODULES = new InjectionToken('HighchartsModules');
export class ChartService {
    constructor(chartModules) {
        this.chartModules = chartModules;
    }
    initModules() {
        this.chartModules.forEach(chartModule => {
            [Highcharts, Highstock, Highmaps, HighchartsGnatt].forEach(chartModule);
        });
    }
}
ChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartService, deps: [{ token: HIGHCHARTS_MODULES }], target: i0.ɵɵFactoryTarget.Injectable });
ChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [HIGHCHARTS_MODULES]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItaGlnaGNoYXJ0cy9zcmMvbGliL2NoYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUNILE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEtBQUssU0FBUyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sS0FBSyxRQUFRLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxLQUFLLGVBQWUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFL0QsTUFBTSxDQUFDLElBQUksa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQVEsbUJBQW1CLENBQUMsQ0FBQztBQUcvRSxNQUFNLE9BQU8sWUFBWTtJQUN2QixZQUFnRCxZQUFtQjtRQUFuQixpQkFBWSxHQUFaLFlBQVksQ0FBTztJQUFJLENBQUM7SUFFeEUsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RDLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7eUdBUFUsWUFBWSxrQkFDSCxrQkFBa0I7NkdBRDNCLFlBQVk7MkZBQVosWUFBWTtrQkFEeEIsVUFBVTs7MEJBRUksTUFBTTsyQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgRmVsaXggSXR6ZW5wbGl0ei4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdFxuICogaHR0cHM6Ly9naXRodWIuY29tL2NlYm9yL2FuZ3VsYXItaGlnaGNoYXJ0cy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XG5pbXBvcnQgKiBhcyBIaWdoc3RvY2sgZnJvbSAnaGlnaGNoYXJ0cy9oaWdoc3RvY2snO1xuaW1wb3J0ICogYXMgSGlnaG1hcHMgZnJvbSAnaGlnaGNoYXJ0cy9oaWdobWFwcyc7XG5pbXBvcnQgKiBhcyBIaWdoY2hhcnRzR25hdHQgZnJvbSAnaGlnaGNoYXJ0cy9oaWdoY2hhcnRzLWdhbnR0JztcblxuZXhwb3J0IGxldCBISUdIQ0hBUlRTX01PRFVMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55W10+KCdIaWdoY2hhcnRzTW9kdWxlcycpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChISUdIQ0hBUlRTX01PRFVMRVMpIHByaXZhdGUgY2hhcnRNb2R1bGVzOiBhbnlbXSkgeyB9XG5cbiAgaW5pdE1vZHVsZXMoKSB7XG4gICAgdGhpcy5jaGFydE1vZHVsZXMuZm9yRWFjaChjaGFydE1vZHVsZSA9PiB7XG4gICAgICBbSGlnaGNoYXJ0cywgSGlnaHN0b2NrLCBIaWdobWFwcywgSGlnaGNoYXJ0c0duYXR0XS5mb3JFYWNoKGNoYXJ0TW9kdWxlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19