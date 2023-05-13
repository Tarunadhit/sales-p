/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from './chart';
import { MapChart } from './mapchart';
import { StockChart } from './stockchart';
import { HighchartsGantt } from './highcharts-gantt';
import * as i0 from "@angular/core";
export declare class ChartDirective implements OnInit, OnDestroy, OnChanges {
    private el;
    chart: Chart | StockChart | MapChart | HighchartsGantt | undefined;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private init;
    private destroy;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChartDirective, "[chart]", never, { "chart": "chart"; }, {}, never, never, false, never>;
}
