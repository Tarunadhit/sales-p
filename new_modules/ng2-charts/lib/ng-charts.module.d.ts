import { ModuleWithProviders } from '@angular/core';
import { ChartComponentLike, Defaults } from 'chart.js';
import * as i0 from "@angular/core";
import * as i1 from "./base-chart.directive";
export declare class NgChartsConfiguration {
    plugins?: ChartComponentLike[];
    defaults?: Partial<Defaults>;
    generateColors: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgChartsConfiguration, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgChartsConfiguration>;
}
export declare class NgChartsModule {
    constructor(config?: NgChartsConfiguration);
    static forRoot(config?: NgChartsConfiguration): ModuleWithProviders<NgChartsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgChartsModule, [{ optional: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgChartsModule, [typeof i1.BaseChartDirective], never, [typeof i1.BaseChartDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgChartsModule>;
}
