import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class HighchartsChartComponent {
    constructor(el, _zone // #75
    ) {
        this.el = el;
        this._zone = _zone;
        this.updateChange = new EventEmitter(true);
        this.chartInstance = new EventEmitter(); // #26
    }
    ngOnChanges(changes) {
        const update = changes.update && changes.update.currentValue;
        if (changes.options || update) {
            this.wrappedUpdateOrCreateChart();
            if (update) {
                this.updateChange.emit(false); // clear the flag after update
            }
        }
    }
    wrappedUpdateOrCreateChart() {
        if (this.runOutsideAngular) {
            this._zone.runOutsideAngular(() => {
                this.updateOrCreateChart();
            });
        }
        else {
            this.updateOrCreateChart();
        }
    }
    updateOrCreateChart() {
        if (this.chart && this.chart.update) {
            this.chart.update(this.options, true, this.oneToOne || false);
        }
        else {
            this.chart = this.Highcharts[this.constructorType || 'chart'](this.el.nativeElement, this.options, this.callbackFunction || null);
            // emit chart instance on init
            this.chartInstance.emit(this.chart);
        }
    }
    ngOnDestroy() {
        if (this.chart) { // #56
            this.chart.destroy();
            this.chart = null;
        }
    }
}
HighchartsChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HighchartsChartComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
HighchartsChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HighchartsChartComponent, selector: "highcharts-chart", inputs: { Highcharts: "Highcharts", constructorType: "constructorType", callbackFunction: "callbackFunction", oneToOne: "oneToOne", runOutsideAngular: "runOutsideAngular", options: "options", update: "update" }, outputs: { updateChange: "updateChange", chartInstance: "chartInstance" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HighchartsChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'highcharts-chart',
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { Highcharts: [{
                type: Input
            }], constructorType: [{
                type: Input
            }], callbackFunction: [{
                type: Input
            }], oneToOne: [{
                type: Input
            }], runOutsideAngular: [{
                type: Input
            }], options: [{
                type: Input
            }], update: [{
                type: Input
            }], updateChange: [{
                type: Output
            }], chartInstance: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9oaWdoY2hhcnRzLWFuZ3VsYXIvc3JjL2xpYi9oaWdoY2hhcnRzLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFvQyxNQUFNLGVBQWUsQ0FBQzs7QUFRaEksTUFBTSxPQUFPLHdCQUF3QjtJQWNuQyxZQUNVLEVBQWMsRUFDZCxLQUFhLENBQUMsTUFBTTs7UUFEcEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQVE7UUFQYixpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUMsQ0FBQyxNQUFNO0lBT25FLENBQUM7SUFFSixXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM3RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ2xDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsOEJBQThCO2FBQzlEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsMEJBQTBCO1FBQ3hCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUksSUFBSSxDQUFDLFVBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDcEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FDOUIsQ0FBQztZQUVGLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFHLE1BQU07WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7O3FIQTNEVSx3QkFBd0I7eUdBQXhCLHdCQUF3Qiw0V0FGekIsRUFBRTsyRkFFRCx3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7c0hBRVUsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUVJLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSAqIGFzIEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XG5pbXBvcnQgdHlwZSBIaWdoY2hhcnRzRVNNIGZyb20gJ2hpZ2hjaGFydHMvZXMtbW9kdWxlcy9tYXN0ZXJzL2hpZ2hjaGFydHMuc3JjJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGlnaGNoYXJ0cy1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIEhpZ2hjaGFydHM6IHR5cGVvZiBIaWdoY2hhcnRzIHwgdHlwZW9mIEhpZ2hjaGFydHNFU007XG4gIEBJbnB1dCgpIGNvbnN0cnVjdG9yVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja0Z1bmN0aW9uOiBIaWdoY2hhcnRzLkNoYXJ0Q2FsbGJhY2tGdW5jdGlvbjtcbiAgQElucHV0KCkgb25lVG9PbmU6IGJvb2xlYW47IC8vICMyMFxuICBASW5wdXQoKSBydW5PdXRzaWRlQW5ndWxhcjogYm9vbGVhbjsgLy8gIzc1XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEhpZ2hjaGFydHMuT3B0aW9ucztcbiAgQElucHV0KCkgdXBkYXRlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSB1cGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuICBAT3V0cHV0KCkgY2hhcnRJbnN0YW5jZSA9IG5ldyBFdmVudEVtaXR0ZXI8SGlnaGNoYXJ0cy5DaGFydD4oKTsgLy8gIzI2XG5cbiAgcHJpdmF0ZSBjaGFydDogSGlnaGNoYXJ0cy5DaGFydDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSAvLyAjNzVcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB1cGRhdGUgPSBjaGFuZ2VzLnVwZGF0ZSAmJiBjaGFuZ2VzLnVwZGF0ZS5jdXJyZW50VmFsdWU7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCB1cGRhdGUpIHtcbiAgICAgIHRoaXMud3JhcHBlZFVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGFuZ2UuZW1pdChmYWxzZSk7IC8vIGNsZWFyIHRoZSBmbGFnIGFmdGVyIHVwZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCkgeyAvLyAjNzVcbiAgICBpZiAodGhpcy5ydW5PdXRzaWRlQW5ndWxhcikge1xuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3JDcmVhdGVDaGFydCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCAmJiB0aGlzLmNoYXJ0LnVwZGF0ZSkge1xuICAgICAgdGhpcy5jaGFydC51cGRhdGUodGhpcy5vcHRpb25zLCB0cnVlLCB0aGlzLm9uZVRvT25lIHx8IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydCA9ICh0aGlzLkhpZ2hjaGFydHMgYXMgYW55KVt0aGlzLmNvbnN0cnVjdG9yVHlwZSB8fCAnY2hhcnQnXShcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbiB8fCBudWxsXG4gICAgICApO1xuXG4gICAgICAvLyBlbWl0IGNoYXJ0IGluc3RhbmNlIG9uIGluaXRcbiAgICAgIHRoaXMuY2hhcnRJbnN0YW5jZS5lbWl0KHRoaXMuY2hhcnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkgeyAvLyAjNDRcbiAgICBpZiAodGhpcy5jaGFydCkgeyAgLy8gIzU2XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19