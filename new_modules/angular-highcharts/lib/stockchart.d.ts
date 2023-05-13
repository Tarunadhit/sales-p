import { ElementRef } from '@angular/core';
import * as Highmaps from 'highcharts/highmaps';
import * as Highstock from 'highcharts/highstock';
import { Observable } from 'rxjs';
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
export declare class StockChart {
    private options;
    private refSubject;
    ref$: Observable<Highstock.Chart>;
    /**
     * @deprecated Deprecated. Please use `ref$`.
     */
    ref: Highmaps.Chart | undefined;
    constructor(options?: Highstock.Options);
    init(el: ElementRef): void;
    destroy(): void;
}
