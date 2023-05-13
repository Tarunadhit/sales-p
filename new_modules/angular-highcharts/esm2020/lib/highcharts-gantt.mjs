import * as Highcharts from 'highcharts/highcharts-gantt';
import { AsyncSubject } from 'rxjs';
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
export class HighchartsGantt {
    constructor(options = { series: [] }) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    init(el) {
        if (!this.ref) {
            Highcharts.ganttChart(el.nativeElement, this.options, chart => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1nYW50dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItaGlnaGNoYXJ0cy9zcmMvbGliL2hpZ2hjaGFydHMtZ2FudHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRWhEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLE9BQU8sZUFBZTtJQVExQixZQUFvQixVQUE4QixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFBNUMsWUFBTyxHQUFQLE9BQU8sQ0FBcUM7UUFQeEQsZUFBVSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hFLFNBQUksR0FBaUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQU1ELENBQUM7SUFFcEUsSUFBSSxDQUFDLEVBQWM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSx5RUFBeUU7b0JBQ3hGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFFckIsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMvaGlnaGNoYXJ0cy1nYW50dCc7XG5pbXBvcnQgeyBBc3luY1N1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEZlbGl4IEl0emVucGxpdHouIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jZWJvci9hbmd1bGFyLWhpZ2hjaGFydHMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5leHBvcnQgY2xhc3MgSGlnaGNoYXJ0c0dhbnR0IHtcbiAgcHJpdmF0ZSByZWZTdWJqZWN0OiBBc3luY1N1YmplY3Q8SGlnaGNoYXJ0cy5DaGFydD4gPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG4gIHJlZiQ6IE9ic2VydmFibGU8SGlnaGNoYXJ0cy5DaGFydD4gPSB0aGlzLnJlZlN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBQbGVhc2UgdXNlIGByZWYkYC5cbiAgICovXG4gIHJlZjogSGlnaGNoYXJ0cy5DaGFydCB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IEhpZ2hjaGFydHMuT3B0aW9ucyA9IHsgc2VyaWVzOiBbXSB9KSB7fVxuXG4gIGluaXQoZWw6IEVsZW1lbnRSZWYpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVmKSB7XG4gICAgICBIaWdoY2hhcnRzLmdhbnR0Q2hhcnQoZWwubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zLCBjaGFydCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5yZWYpIHsgLy8gVE9ETzogd29ya2Fyb3VuZCBmb3IgZG91YmxlZCBjYWxsYmFja3Mgb24gZXhwb3J0aW5nIGNoYXJ0czogaXNzdWUgIzIzOFxuICAgICAgICAgIHRoaXMucmVmU3ViamVjdC5uZXh0KGNoYXJ0KTtcbiAgICAgICAgICB0aGlzLnJlZiA9IGNoYXJ0O1xuICAgICAgICAgIHRoaXMucmVmU3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5yZWYub3B0aW9ucztcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucmVmID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBuZXcgaW5pdCBzdWJqZWN0XG4gICAgICB0aGlzLnJlZlN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG4gICAgICB0aGlzLnJlZiQgPSB0aGlzLnJlZlN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=