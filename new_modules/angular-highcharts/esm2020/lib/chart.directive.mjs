/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { Directive, Input } from '@angular/core';
import { Chart } from './chart';
import { MapChart } from './mapchart';
import { StockChart } from './stockchart';
import { HighchartsGantt } from './highcharts-gantt';
import * as i0 from "@angular/core";
export class ChartDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnChanges(changes) {
        if (!changes['chart']?.isFirstChange()) {
            this.destroy();
            this.init();
        }
    }
    ngOnInit() {
        this.init();
    }
    ngOnDestroy() {
        this.destroy();
    }
    init() {
        if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart
            || this.chart instanceof HighchartsGantt) {
            this.chart.init(this.el);
        }
    }
    destroy() {
        if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart
            || this.chart instanceof HighchartsGantt) {
            this.chart.destroy();
        }
    }
}
ChartDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ChartDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: ChartDirective, selector: "[chart]", inputs: { chart: "chart" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[chart]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { chart: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1oaWdoY2hhcnRzL3NyYy9saWIvY2hhcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7QUFDSCxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUtyRCxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7SUFFdEMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsYUFBYSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyxJQUFJO1FBQ1YsSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLFFBQVE7ZUFDaEcsSUFBSSxDQUFDLEtBQUssWUFBWSxlQUFlLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVPLE9BQU87UUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksUUFBUTtlQUNoRyxJQUFJLENBQUMsS0FBSyxZQUFZLGVBQWUsRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7MkdBaENVLGNBQWM7K0ZBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjtpR0FFVSxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgRmVsaXggSXR6ZW5wbGl0ei4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdFxuICogaHR0cHM6Ly9naXRodWIuY29tL2NlYm9yL2FuZ3VsYXItaGlnaGNoYXJ0cy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyBNYXBDaGFydCB9IGZyb20gJy4vbWFwY2hhcnQnO1xuaW1wb3J0IHsgU3RvY2tDaGFydCB9IGZyb20gJy4vc3RvY2tjaGFydCc7XG5pbXBvcnQgeyBIaWdoY2hhcnRzR2FudHQgfSBmcm9tICcuL2hpZ2hjaGFydHMtZ2FudHQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2hhcnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjaGFydDogQ2hhcnQgfCBTdG9ja0NoYXJ0IHwgTWFwQ2hhcnQgfCBIaWdoY2hhcnRzR2FudHQgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCFjaGFuZ2VzWydjaGFydCddPy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCBpbnN0YW5jZW9mIENoYXJ0IHx8IHRoaXMuY2hhcnQgaW5zdGFuY2VvZiBTdG9ja0NoYXJ0IHx8IHRoaXMuY2hhcnQgaW5zdGFuY2VvZiBNYXBDaGFydFxuICAgICAgfHwgdGhpcy5jaGFydCBpbnN0YW5jZW9mIEhpZ2hjaGFydHNHYW50dCkge1xuICAgICAgdGhpcy5jaGFydC5pbml0KHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jaGFydCBpbnN0YW5jZW9mIENoYXJ0IHx8IHRoaXMuY2hhcnQgaW5zdGFuY2VvZiBTdG9ja0NoYXJ0IHx8IHRoaXMuY2hhcnQgaW5zdGFuY2VvZiBNYXBDaGFydFxuICAgICAgfHwgdGhpcy5jaGFydCBpbnN0YW5jZW9mIEhpZ2hjaGFydHNHYW50dCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iXX0=