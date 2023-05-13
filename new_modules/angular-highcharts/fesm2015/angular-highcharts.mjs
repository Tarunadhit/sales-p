import * as Highcharts from 'highcharts';
import { AsyncSubject } from 'rxjs';
import * as i0 from '@angular/core';
import { Directive, Input, InjectionToken, Injectable, Inject, NgModule } from '@angular/core';
import * as Highmaps from 'highcharts/highmaps';
import * as Highstock from 'highcharts/highstock';
import * as Highcharts$1 from 'highcharts/highcharts-gantt';

class Chart {
    constructor(options = { series: [] }) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    /**
     * Add Point
     * @param point         Highcharts.DataPoint, number touple or number
     * @param serieIndex    Index position of series. This defaults to 0.
     * @param redraw        Flag whether or not to redraw point. This defaults to true.
     * @param shift         Shift point to the start of series. This defaults to false.
     */
    addPoint(point, serieIndex = 0, redraw = true, shift = false) {
        this.ref$.subscribe(chart => {
            if (chart.series.length > serieIndex) {
                chart.series[serieIndex].addPoint(point, redraw, shift);
            }
        });
    }
    /**
     * Add Series
     * @param series        Series Configuration
     * @param redraw        Flag whether or not to redraw series. This defaults to true.
     * @param animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     */
    addSeries(series, redraw = true, animation) {
        this.ref$.subscribe(chart => {
            chart.addSeries(series, redraw, animation);
        });
    }
    /**
     * Remove Point
     * @param pointIndex    Index of Point
     * @param serieIndex    Specified Index of Series. Defaults to 0.
     */
    removePoint(pointIndex, serieIndex = 0) {
        this.ref$.subscribe(chart => {
            if (chart.series.length > serieIndex && chart.series[serieIndex].data.length > pointIndex) {
                chart.series[serieIndex].removePoint(pointIndex, true);
            }
        });
    }
    /**
     * Remove Series
     * @param seriesIndex    Index position of series to remove.
     */
    removeSeries(seriesIndex) {
        this.ref$.subscribe(chart => {
            if (chart.series.length > seriesIndex) {
                chart.series[seriesIndex].remove(true);
            }
        });
    }
    init(el) {
        if (!this.ref) {
            Highcharts.chart(el.nativeElement, this.options, chart => {
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

// import * as Highcharts from 'highcharts';
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
class MapChart {
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

//import * as Highcharts from 'highcharts';
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
class StockChart {
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

/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
class HighchartsGantt {
    constructor(options = { series: [] }) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    init(el) {
        if (!this.ref) {
            Highcharts$1.ganttChart(el.nativeElement, this.options, chart => {
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

/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
class ChartDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnChanges(changes) {
        var _a;
        if (!((_a = changes['chart']) === null || _a === void 0 ? void 0 : _a.isFirstChange())) {
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

/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
let HIGHCHARTS_MODULES = new InjectionToken('HighchartsModules');
class ChartService {
    constructor(chartModules) {
        this.chartModules = chartModules;
    }
    initModules() {
        this.chartModules.forEach(chartModule => {
            [Highcharts, Highstock, Highmaps, Highcharts$1].forEach(chartModule);
        });
    }
}
ChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartService, deps: [{ token: HIGHCHARTS_MODULES }], target: i0.ɵɵFactoryTarget.Injectable });
ChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [HIGHCHARTS_MODULES]
                    }] }];
    } });

/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
class ChartModule {
    constructor(cs) {
        this.cs = cs;
        this.cs.initModules();
    }
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ChartModule, deps: [{ token: ChartService }], target: i0.ɵɵFactoryTarget.NgModule });
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
        }], ctorParameters: function () { return [{ type: ChartService }]; } });

/*
 * Public API Surface of angular-highcharts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Chart, ChartDirective, ChartModule, HIGHCHARTS_MODULES, HighchartsGantt, MapChart, StockChart };
//# sourceMappingURL=angular-highcharts.mjs.map
