import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

class HighchartsChartComponent {
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

class HighchartsChartModule {
}
HighchartsChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HighchartsChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HighchartsChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: HighchartsChartModule, declarations: [HighchartsChartComponent], exports: [HighchartsChartComponent] });
HighchartsChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HighchartsChartModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HighchartsChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HighchartsChartComponent],
                    exports: [HighchartsChartComponent]
                }]
        }] });

/*
 * Public API Surface of highcharts-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HighchartsChartComponent, HighchartsChartModule };
//# sourceMappingURL=highcharts-angular.mjs.map
