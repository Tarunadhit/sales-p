import { BehaviorSubject } from 'rxjs';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import * as i0 from "@angular/core";
export declare class ThemeService {
    private pColorschemesOptions?;
    colorschemesOptions: BehaviorSubject<ChartOptions | undefined>;
    constructor();
    setColorschemesOptions(options: ChartConfiguration['options']): void;
    getColorschemesOptions(): ChartConfiguration['options'];
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
