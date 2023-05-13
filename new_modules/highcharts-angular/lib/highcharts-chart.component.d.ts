import { ElementRef, EventEmitter, OnDestroy, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import type * as Highcharts from 'highcharts';
import type HighchartsESM from 'highcharts/es-modules/masters/highcharts.src';
import * as i0 from "@angular/core";
export declare class HighchartsChartComponent implements OnDestroy, OnChanges {
    private el;
    private _zone;
    Highcharts: typeof Highcharts | typeof HighchartsESM;
    constructorType: string;
    callbackFunction: Highcharts.ChartCallbackFunction;
    oneToOne: boolean;
    runOutsideAngular: boolean;
    options: Highcharts.Options;
    update: boolean;
    updateChange: EventEmitter<boolean>;
    chartInstance: EventEmitter<Highcharts.Chart>;
    private chart;
    constructor(el: ElementRef, _zone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    wrappedUpdateOrCreateChart(): void;
    updateOrCreateChart(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HighchartsChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HighchartsChartComponent, "highcharts-chart", never, { "Highcharts": "Highcharts"; "constructorType": "constructorType"; "callbackFunction": "callbackFunction"; "oneToOne": "oneToOne"; "runOutsideAngular": "runOutsideAngular"; "options": "options"; "update": "update"; }, { "updateChange": "updateChange"; "chartInstance": "chartInstance"; }, never, never, false, never>;
}
