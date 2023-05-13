// import * as Highcharts from 'highcharts';
import * as Highmaps from 'highcharts/highmaps';
import { AsyncSubject } from 'rxjs';
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
export class MapChart {
    constructor(options = { series: [] }) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    init(el) {
        if (!this.ref) {
            Highmaps.mapChart(el.nativeElement, this.options, chart => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWhpZ2hjaGFydHMvc3JjL2xpYi9tYXBjaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSw0Q0FBNEM7QUFDNUMsT0FBTyxLQUFLLFFBQVEsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRWhEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLE9BQU8sUUFBUTtJQVFuQixZQUFvQixVQUE0QixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7UUFQdEQsZUFBVSxHQUFpQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RFLFNBQUksR0FBK0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQU1ELENBQUM7SUFFbEUsSUFBSSxDQUFDLEVBQWM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSx5RUFBeUU7b0JBQ3hGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFFckIsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgKiBhcyBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnO1xuaW1wb3J0ICogYXMgSGlnaG1hcHMgZnJvbSAnaGlnaGNoYXJ0cy9oaWdobWFwcyc7XG5pbXBvcnQgeyBBc3luY1N1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEZlbGl4IEl0emVucGxpdHouIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jZWJvci9hbmd1bGFyLWhpZ2hjaGFydHMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5leHBvcnQgY2xhc3MgTWFwQ2hhcnQge1xuICBwcml2YXRlIHJlZlN1YmplY3Q6IEFzeW5jU3ViamVjdDxIaWdobWFwcy5DaGFydD4gPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG4gIHJlZiQ6IE9ic2VydmFibGU8SGlnaG1hcHMuQ2hhcnQ+ID0gdGhpcy5yZWZTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgcmVmJGAuXG4gICAqL1xuICByZWY6IEhpZ2htYXBzLkNoYXJ0IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogSGlnaG1hcHMuT3B0aW9ucyA9IHsgc2VyaWVzOiBbXSB9KSB7fVxuXG4gIGluaXQoZWw6IEVsZW1lbnRSZWYpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVmKSB7XG4gICAgICBIaWdobWFwcy5tYXBDaGFydChlbC5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMsIGNoYXJ0ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnJlZikgeyAvLyBUT0RPOiB3b3JrYXJvdW5kIGZvciBkb3VibGVkIGNhbGxiYWNrcyBvbiBleHBvcnRpbmcgY2hhcnRzOiBpc3N1ZSAjMjM4XG4gICAgICAgICAgdGhpcy5yZWZTdWJqZWN0Lm5leHQoY2hhcnQpO1xuICAgICAgICAgIHRoaXMucmVmID0gY2hhcnQ7XG4gICAgICAgICAgdGhpcy5yZWZTdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnJlZi5vcHRpb25zO1xuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5yZWYgPSB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIG5ldyBpbml0IHN1YmplY3RcbiAgICAgIHRoaXMucmVmU3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgICAgIHRoaXMucmVmJCA9IHRoaXMucmVmU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==