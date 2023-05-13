"use strict";
var NgChartsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgChartsModule = exports.NgChartsConfiguration = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const base_chart_directive_1 = require("./base-chart.directive");
const chart_js_1 = require("chart.js");
const lodash_es_1 = require("lodash-es");
const get_colors_1 = require("./get-colors");
let NgChartsConfiguration = class NgChartsConfiguration {
    constructor() {
        this.generateColors = true;
    }
};
NgChartsConfiguration = tslib_1.__decorate([
    (0, core_1.Injectable)({ providedIn: 'root' })
], NgChartsConfiguration);
exports.NgChartsConfiguration = NgChartsConfiguration;
chart_js_1.Chart.register(...chart_js_1.registerables);
let NgChartsModule = NgChartsModule_1 = class NgChartsModule {
    constructor(config) {
        if (config?.plugins)
            chart_js_1.Chart.register(...config?.plugins);
        const ngChartsDefaults = (0, lodash_es_1.merge)(config?.generateColors ? get_colors_1.builtInDefaults : {}, config?.defaults || {});
        chart_js_1.defaults.set(ngChartsDefaults);
    }
    static forRoot(config) {
        return {
            ngModule: NgChartsModule_1,
            providers: [
                { provide: NgChartsConfiguration, useValue: config }
            ]
        };
    }
};
NgChartsModule = NgChartsModule_1 = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [],
        declarations: [base_chart_directive_1.BaseChartDirective],
        exports: [base_chart_directive_1.BaseChartDirective]
    }),
    tslib_1.__param(0, (0, core_1.Optional)())
], NgChartsModule);
exports.NgChartsModule = NgChartsModule;
//# sourceMappingURL=ng-charts.module.js.map