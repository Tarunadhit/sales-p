import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Input, Output, NgModule, Optional } from '@angular/core';
import { Chart, registerables, defaults } from 'chart.js';
import { distinctUntilChanged } from 'rxjs/operators';
import { merge } from 'lodash-es';
import { BehaviorSubject } from 'rxjs';

class ThemeService {
    constructor() {
        this.colorschemesOptions = new BehaviorSubject(undefined);
    }
    setColorschemesOptions(options) {
        this.pColorschemesOptions = options;
        this.colorschemesOptions.next(options);
    }
    getColorschemesOptions() {
        return this.pColorschemesOptions;
    }
}
ThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ThemeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class BaseChartDirective {
    constructor(element, zone, themeService) {
        this.zone = zone;
        this.themeService = themeService;
        this.type = 'bar';
        this.plugins = [];
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.subs = [];
        this.themeOverrides = {};
        this.ctx = element.nativeElement.getContext('2d');
        this.subs.push(this.themeService.colorschemesOptions
            .pipe(distinctUntilChanged())
            .subscribe(r => this.themeChanged(r)));
    }
    ngOnChanges(changes) {
        const requireRender = ['type'];
        const propertyNames = Object.getOwnPropertyNames(changes);
        if (propertyNames.some(key => requireRender.includes(key)) ||
            propertyNames.every(key => changes[key].isFirstChange())) {
            this.render();
        }
        else {
            const config = this.getChartConfiguration();
            // Using assign to avoid changing the original object reference
            if (this.chart) {
                Object.assign(this.chart.config.data, config.data);
                if (this.chart.config.plugins) {
                    Object.assign(this.chart.config.plugins, config.plugins);
                }
                if (this.chart.config.options) {
                    Object.assign(this.chart.config.options, config.options);
                }
            }
            this.update();
        }
    }
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
        this.subs.forEach(s => s.unsubscribe());
    }
    render() {
        if (this.chart) {
            this.chart.destroy();
        }
        return this.zone.runOutsideAngular(() => this.chart = new Chart(this.ctx, this.getChartConfiguration()));
    }
    update(duration) {
        if (this.chart) {
            this.zone.runOutsideAngular(() => { var _a; return (_a = this.chart) === null || _a === void 0 ? void 0 : _a.update(duration); });
        }
    }
    hideDataset(index, hidden) {
        if (this.chart) {
            this.chart.getDatasetMeta(index).hidden = hidden;
            this.update();
        }
    }
    isDatasetHidden(index) {
        var _a, _b;
        return (_b = (_a = this.chart) === null || _a === void 0 ? void 0 : _a.getDatasetMeta(index)) === null || _b === void 0 ? void 0 : _b.hidden;
    }
    toBase64Image() {
        var _a;
        return (_a = this.chart) === null || _a === void 0 ? void 0 : _a.toBase64Image();
    }
    themeChanged(options) {
        this.themeOverrides = options;
        if (this.chart) {
            if (this.chart.config.options) {
                Object.assign(this.chart.config.options, this.getChartOptions());
            }
            this.update();
        }
    }
    getChartOptions() {
        return merge({
            onHover: (event, active) => {
                var _a;
                if (!this.chartHover.observed && !((_a = this.chartHover.observers) === null || _a === void 0 ? void 0 : _a.length)) {
                    return;
                }
                this.zone.run(() => this.chartHover.emit({ event, active }));
            },
            onClick: (event, active) => {
                var _a;
                if (!this.chartClick.observed && !((_a = this.chartClick.observers) === null || _a === void 0 ? void 0 : _a.length)) {
                    return;
                }
                this.zone.run(() => this.chartClick.emit({ event, active }));
            }
        }, this.themeOverrides, this.options, {
            plugins: {
                legend: {
                    display: this.legend
                }
            }
        });
    }
    getChartConfiguration() {
        return {
            type: this.type,
            data: this.getChartData(),
            options: this.getChartOptions(),
            plugins: this.plugins
        };
    }
    getChartData() {
        return this.data ? this.data : {
            labels: this.labels || [],
            datasets: this.datasets || []
        };
    }
}
BaseChartDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BaseChartDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: ThemeService }], target: i0.ɵɵFactoryTarget.Directive });
BaseChartDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: BaseChartDirective, selector: "canvas[baseChart]", inputs: { type: "type", legend: "legend", data: "data", options: "options", plugins: "plugins", labels: "labels", datasets: "datasets" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, exportAs: ["base-chart"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BaseChartDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'canvas[baseChart]',
                    exportAs: 'base-chart',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: ThemeService }]; }, propDecorators: { type: [{
                type: Input
            }], legend: [{
                type: Input
            }], data: [{
                type: Input
            }], options: [{
                type: Input
            }], plugins: [{
                type: Input
            }], labels: [{
                type: Input
            }], datasets: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }] } });

const baseColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];

const builtInDefaults = {
    plugins: { colors: { enabled: false } },
    datasets: {
        line: {
            backgroundColor: (context) => rgba(generateColor(context.datasetIndex), 0.4),
            borderColor: (context) => rgba(generateColor(context.datasetIndex), 1),
            pointBackgroundColor: (context) => rgba(generateColor(context.datasetIndex), 1),
            pointBorderColor: '#fff',
        },
        bar: {
            backgroundColor: (context) => rgba(generateColor(context.datasetIndex), 0.6),
            borderColor: (context) => rgba(generateColor(context.datasetIndex), 1)
        },
        get radar() {
            return this.line;
        },
        doughnut: {
            backgroundColor: (context) => rgba(generateColor(context.dataIndex), 0.6),
            borderColor: '#fff'
        },
        get pie() {
            return this.doughnut;
        },
        polarArea: {
            backgroundColor: (context) => rgba(generateColor(context.dataIndex), 0.6),
            borderColor: (context) => rgba(generateColor(context.dataIndex), 1),
        },
        get bubble() {
            return this.doughnut;
        },
        get scatter() {
            return this.doughnut;
        },
        get area() {
            return this.polarArea;
        }
    }
};
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors
 */
function generateColor(index = 0) {
    return baseColors[index] || getRandomColor();
}

class NgChartsConfiguration {
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
class NgChartsModule {
    constructor(config) {
        if (config === null || config === void 0 ? void 0 : config.plugins)
            Chart.register(...config === null || config === void 0 ? void 0 : config.plugins);
        const ngChartsDefaults = merge((config === null || config === void 0 ? void 0 : config.generateColors) ? builtInDefaults : {}, (config === null || config === void 0 ? void 0 : config.defaults) || {});
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
        }], ctorParameters: function () {
        return [{ type: NgChartsConfiguration, decorators: [{
                        type: Optional
                    }] }];
    } });

/*
 * Public API Surface of ng2-charts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseChartDirective, NgChartsConfiguration, NgChartsModule, ThemeService, baseColors };
//# sourceMappingURL=ng2-charts.mjs.map
