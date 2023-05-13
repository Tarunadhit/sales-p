//import * as Highcharts from 'highcharts';
import * as Highstock from 'highcharts/highstock';
import { AsyncSubject } from 'rxjs';
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 *
 * @author Felix Itzenplitz
 * @author Timothy A. Perez (contributor)
 */
export class StockChart {
    constructor(options = { series: [] }) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    init(el) {
        if (!this.ref) {
            Highstock.stockChart(el.nativeElement, this.options, chart => {
                if (!this.ref) { // TODO: workaround for doubled callbacks on exporting charts: issue #238
                    this.refSubject.next(chart);
                    this.ref = chart;
                    this.refSubject.complete();
                }
            });
        }
    }
    destroy() {
        if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined;
            // new init subject
            this.refSubject = new AsyncSubject();
            this.ref$ = this.refSubject.asObservable();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2tjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItaGlnaGNoYXJ0cy9zcmMvbGliL3N0b2NrY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsMkNBQTJDO0FBQzNDLE9BQU8sS0FBSyxTQUFTLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUdoRDs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxPQUFPLFVBQVU7SUFPckIsWUFBb0IsVUFBNkIsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBTnZELGVBQVUsR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RSxTQUFJLEdBQWdDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFLRCxDQUFDO0lBRW5FLElBQUksQ0FBQyxFQUFjO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUseUVBQXlFO29CQUN4RixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQzVCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1lBRXJCLG1CQUFtQjtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgSGlnaG1hcHMgZnJvbSAnaGlnaGNoYXJ0cy9oaWdobWFwcyc7XG4vL2ltcG9ydCAqIGFzIEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XG5pbXBvcnQgKiBhcyBIaWdoc3RvY2sgZnJvbSAnaGlnaGNoYXJ0cy9oaWdoc3RvY2snO1xuaW1wb3J0IHsgQXN5bmNTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEZlbGl4IEl0emVucGxpdHouIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jZWJvci9hbmd1bGFyLWhpZ2hjaGFydHMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIEBhdXRob3IgRmVsaXggSXR6ZW5wbGl0elxuICogQGF1dGhvciBUaW1vdGh5IEEuIFBlcmV6IChjb250cmlidXRvcilcbiAqL1xuZXhwb3J0IGNsYXNzIFN0b2NrQ2hhcnQge1xuICBwcml2YXRlIHJlZlN1YmplY3Q6IEFzeW5jU3ViamVjdDxIaWdoc3RvY2suQ2hhcnQ+ID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuICByZWYkOiBPYnNlcnZhYmxlPEhpZ2hzdG9jay5DaGFydD4gPSB0aGlzLnJlZlN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBQbGVhc2UgdXNlIGByZWYkYC5cbiAgICovXG4gIHJlZjogSGlnaG1hcHMuQ2hhcnQgfCB1bmRlZmluZWQ7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogSGlnaHN0b2NrLk9wdGlvbnMgPSB7IHNlcmllczogW10gfSkge31cblxuICBpbml0KGVsOiBFbGVtZW50UmVmKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlZikge1xuICAgICAgSGlnaHN0b2NrLnN0b2NrQ2hhcnQoZWwubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zLCBjaGFydCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5yZWYpIHsgLy8gVE9ETzogd29ya2Fyb3VuZCBmb3IgZG91YmxlZCBjYWxsYmFja3Mgb24gZXhwb3J0aW5nIGNoYXJ0czogaXNzdWUgIzIzOFxuICAgICAgICAgIHRoaXMucmVmU3ViamVjdC5uZXh0KGNoYXJ0KTtcbiAgICAgICAgICB0aGlzLnJlZiA9IGNoYXJ0O1xuICAgICAgICAgIHRoaXMucmVmU3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5yZWYub3B0aW9ucztcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVmID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBuZXcgaW5pdCBzdWJqZWN0XG4gICAgICB0aGlzLnJlZlN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG4gICAgICB0aGlzLnJlZiQgPSB0aGlzLnJlZlN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=