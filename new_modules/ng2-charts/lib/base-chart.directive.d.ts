import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType, DefaultDataPoint, Plugin } from 'chart.js';
import { ThemeService } from './theme.service';
import * as i0 from "@angular/core";
export declare class BaseChartDirective<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> implements OnDestroy, OnChanges {
    private zone;
    private themeService;
    type: ChartConfiguration<TType, TData, TLabel>['type'];
    legend?: boolean;
    data?: ChartConfiguration<TType, TData, TLabel>['data'];
    options: ChartConfiguration<TType, TData, TLabel>['options'];
    plugins: Plugin<TType>[];
    labels?: ChartConfiguration<TType, TData, TLabel>['data']['labels'];
    datasets?: ChartConfiguration<TType, TData, TLabel>['data']['datasets'];
    chartClick: EventEmitter<{
        event?: ChartEvent;
        active?: {}[];
    }>;
    chartHover: EventEmitter<{
        event: ChartEvent;
        active: {}[];
    }>;
    ctx: string;
    chart?: Chart<TType, TData, TLabel>;
    private subs;
    private themeOverrides;
    constructor(element: ElementRef, zone: NgZone, themeService: ThemeService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    render(): Chart<TType, TData, TLabel>;
    update(duration?: any): void;
    hideDataset(index: number, hidden: boolean): void;
    isDatasetHidden(index: number): boolean | undefined;
    toBase64Image(): string | undefined;
    private themeChanged;
    private getChartOptions;
    private getChartConfiguration;
    private getChartData;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseChartDirective<any, any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseChartDirective<any, any, any>, "canvas[baseChart]", ["base-chart"], { "type": "type"; "legend": "legend"; "data": "data"; "options": "options"; "plugins": "plugins"; "labels": "labels"; "datasets": "datasets"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; }, never, never, false>;
}
