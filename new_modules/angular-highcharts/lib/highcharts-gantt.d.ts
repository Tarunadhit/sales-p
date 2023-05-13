import { ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts-gantt';
import { Observable } from 'rxjs';
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
export declare class HighchartsGantt {
    private options;
    private refSubject;
    ref$: Observable<Highcharts.Chart>;
    /**
     * @deprecated Deprecated. Please use `ref$`.
     */
    ref: Highcharts.Chart | undefined;
    constructor(options?: Highcharts.Options);
    init(el: ElementRef): void;
    destroy(): void;
}
