import { ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 * @author Felix Itzenplitz
 * @author Timothy A. Perez (contributor)
 */
export type Point = number | [number, number] | Highcharts.Point;
export declare class Chart {
    private options;
    private refSubject;
    ref$: Observable<Highcharts.Chart>;
    /**
     * @deprecated Deprecated. Please use `ref$`.
     */
    ref: Highcharts.Chart | undefined;
    constructor(options?: Highcharts.Options);
    /**
     * Add Point
     * @param point         Highcharts.DataPoint, number touple or number
     * @param serieIndex    Index position of series. This defaults to 0.
     * @param redraw        Flag whether or not to redraw point. This defaults to true.
     * @param shift         Shift point to the start of series. This defaults to false.
     */
    addPoint(point: Point, serieIndex?: number, redraw?: boolean, shift?: boolean): void;
    /**
     * Add Series
     * @param series        Series Configuration
     * @param redraw        Flag whether or not to redraw series. This defaults to true.
     * @param animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     */
    addSeries(series: Highcharts.SeriesOptionsType, redraw: boolean | undefined, animation: boolean): void;
    /**
     * Remove Point
     * @param pointIndex    Index of Point
     * @param serieIndex    Specified Index of Series. Defaults to 0.
     */
    removePoint(pointIndex: number, serieIndex?: number): void;
    /**
     * Remove Series
     * @param seriesIndex    Index position of series to remove.
     */
    removeSeries(seriesIndex: number): void;
    init(el: ElementRef): void;
    destroy(): void;
}
