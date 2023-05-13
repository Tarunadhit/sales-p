import { Injectable, NgModule, Optional } from '@angular/core';
import { BaseChartDirective } from './base-chart.directive';
import { Chart, registerables, defaults } from 'chart.js';
import { merge } from "lodash-es";
import { builtInDefaults } from "./get-colors";
import * as i0 from "@angular/core";
export class NgChartsConfiguration {
    constructor() {
        this.generateColors = true;
    }
}
NgChartsConfiguration.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgChartsConfiguration, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgChartsConfiguration.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgChartsConfiguration, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgChartsConfiguration, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
Chart.register(...registerables);
export class NgChartsModule {
    constructor(config) {
        if (config?.plugins)
            Chart.register(...config?.plugins);
        const ngChartsDefaults = merge(config?.generateColors ? builtInDefaults : {}, config?.defaults || {});
        defaults.set(ngChartsDefaults);
    }
    static forRoot(config) {
        return {
            ngModule: NgChartsModule,
            providers: [
                { provide: NgChartsConfiguration, useValue: config }
            ]
        };
    }
}
NgChartsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgChartsModule, deps: [{ token: NgChartsConfiguration, optional: true }], target: i0.ɵɵFactoryTarget.NgModule });
NgChartsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: NgChartsModule, declarations: [BaseChartDirective], exports: [BaseChartDirective] });
NgChartsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgChartsModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgChartsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [BaseChartDirective],
                    exports: [BaseChartDirective]
                }]
        }], ctorParameters: function () { return [{ type: NgChartsConfiguration, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhcnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1jaGFydHMvc3JjL2xpYi9uZy1jaGFydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQWdDLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRy9DLE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFJUyxtQkFBYyxHQUFHLElBQUksQ0FBQztLQUM5Qjs7bUhBSlkscUJBQXFCO3VIQUFyQixxQkFBcUIsY0FEUixNQUFNOzRGQUNuQixxQkFBcUI7a0JBRGpDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztBQU9sQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7QUFPakMsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFBd0IsTUFBOEI7UUFDcEQsSUFBSSxNQUFNLEVBQUUsT0FBTztZQUNqQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7UUFFdEcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQThCO1FBQ2xELE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUNyRDtTQUNGLENBQUM7SUFDSixDQUFDOzs0R0FsQlUsY0FBYzs2R0FBZCxjQUFjLGlCQUhULGtCQUFrQixhQUN2QixrQkFBa0I7NkdBRWxCLGNBQWM7NEZBQWQsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTtvQkFDcEMsT0FBTyxFQUFFLENBQUUsa0JBQWtCLENBQUU7aUJBQ2hDOzswQkFHYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ2hhcnREaXJlY3RpdmUgfSBmcm9tICcuL2Jhc2UtY2hhcnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IENoYXJ0LCByZWdpc3RlcmFibGVzLCBDaGFydENvbXBvbmVudExpa2UsIERlZmF1bHRzLCBkZWZhdWx0cyB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgYnVpbHRJbkRlZmF1bHRzIH0gZnJvbSBcIi4vZ2V0LWNvbG9yc1wiO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE5nQ2hhcnRzQ29uZmlndXJhdGlvbiB7XG4gIHB1YmxpYyBwbHVnaW5zPzogQ2hhcnRDb21wb25lbnRMaWtlW107XG4gIHB1YmxpYyBkZWZhdWx0cz86IFBhcnRpYWw8RGVmYXVsdHM+O1xuICBwdWJsaWMgZ2VuZXJhdGVDb2xvcnMgPSB0cnVlO1xufVxuXG5DaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogWyBCYXNlQ2hhcnREaXJlY3RpdmUgXSxcbiAgZXhwb3J0czogWyBCYXNlQ2hhcnREaXJlY3RpdmUgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0NoYXJ0c01vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgY29uZmlnPzogTmdDaGFydHNDb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKGNvbmZpZz8ucGx1Z2lucylcbiAgICAgIENoYXJ0LnJlZ2lzdGVyKC4uLmNvbmZpZz8ucGx1Z2lucyk7XG5cbiAgICBjb25zdCBuZ0NoYXJ0c0RlZmF1bHRzID0gbWVyZ2UoY29uZmlnPy5nZW5lcmF0ZUNvbG9ycyA/IGJ1aWx0SW5EZWZhdWx0cyA6IHt9LCBjb25maWc/LmRlZmF1bHRzIHx8IHt9KTtcblxuICAgIGRlZmF1bHRzLnNldChuZ0NoYXJ0c0RlZmF1bHRzKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBOZ0NoYXJ0c0NvbmZpZ3VyYXRpb24pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nQ2hhcnRzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYXJ0c01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5nQ2hhcnRzQ29uZmlndXJhdGlvbiwgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19