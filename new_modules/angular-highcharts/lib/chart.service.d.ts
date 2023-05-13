/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export declare let HIGHCHARTS_MODULES: InjectionToken<any[]>;
export declare class ChartService {
    private chartModules;
    constructor(chartModules: any[]);
    initModules(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChartService>;
}
