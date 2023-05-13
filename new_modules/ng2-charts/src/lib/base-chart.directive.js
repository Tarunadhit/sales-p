"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseChartDirective = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const chart_js_1 = require("chart.js");
const operators_1 = require("rxjs/operators");
const lodash_es_1 = require("lodash-es");
let BaseChartDirective = class BaseChartDirective {
    constructor(element, zone, themeService) {
        this.zone = zone;
        this.themeService = themeService;
        this.type = 'bar';
        this.plugins = [];
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.subs = [];
        this.themeOverrides = {};
        this.ctx = element.nativeElement.getContext('2d');
        this.subs.push(this.themeService.colorschemesOptions
            .pipe((0, operators_1.distinctUntilChanged)())
            .subscribe(r => this.themeChanged(r)));
    }
    ngOnChanges(changes) {
        const requireRender = ['type'];
        const propertyNames = Object.getOwnPropertyNames(changes);
        if (propertyNames.some(key => requireRender.includes(key)) ||
            propertyNames.every(key => changes[key].isFirstChange())) {
            this.render();
        }
        else {
            const config = this.getChartConfiguration();
            // Using assign to avoid changing the original object reference
            if (this.chart) {
                Object.assign(this.chart.config.data, config.data);
                if (this.chart.config.plugins) {
                    Object.assign(this.chart.config.plugins, config.plugins);
                }
                if (this.chart.config.options) {
                    Object.assign(this.chart.config.options, config.options);
                }
            }
            this.update();
        }
    }
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
        this.subs.forEach(s => s.unsubscribe());
    }
    render() {
        if (this.chart) {
            this.chart.destroy();
        }
        return this.zone.runOutsideAngular(() => this.chart = new chart_js_1.Chart(this.ctx, this.getChartConfiguration()));
    }
    update(duration) {
        if (this.chart) {
            this.zone.runOutsideAngular(() => this.chart?.update(duration));
        }
    }
    hideDataset(index, hidden) {
        if (this.chart) {
            this.chart.getDatasetMeta(index).hidden = hidden;
            this.update();
        }
    }
    isDatasetHidden(index) {
        return this.chart?.getDatasetMeta(index)?.hidden;
    }
    toBase64Image() {
        return this.chart?.toBase64Image();
    }
    themeChanged(options) {
        this.themeOverrides = options;
        if (this.chart) {
            if (this.chart.config.options) {
                Object.assign(this.chart.config.options, this.getChartOptions());
            }
            this.update();
        }
    }
    getChartOptions() {
        return (0, lodash_es_1.merge)({
            onHover: (event, active) => {
                if (!this.chartHover.observed && !this.chartHover.observers?.length) {
                    return;
                }
                this.zone.run(() => this.chartHover.emit({ event, active }));
            },
            onClick: (event, active) => {
                if (!this.chartClick.observed && !this.chartClick.observers?.length) {
                    return;
                }
                this.zone.run(() => this.chartClick.emit({ event, active }));
            }
        }, this.themeOverrides, this.options, {
            plugins: {
                legend: {
                    display: this.legend
                }
            }
        });
    }
    getChartConfiguration() {
        return {
            type: this.type,
            data: this.getChartData(),
            options: this.getChartOptions(),
            plugins: this.plugins
        };
    }
    getChartData() {
        return this.data ? this.data : {
            labels: this.labels || [],
            datasets: this.datasets || []
        };
    }
};
tslib_1.__decorate([
    (0, core_1.Input)()
], BaseChartDirective.prototype, "type", void 0);
tslib_1.__decorate([
    (0, core_1.Input)()
], BaseChartDirective.prototype, "legend", void 0);
tslib_1.__decorate([
    (0, core_1.Input)()
], BaseChartDirective.prototype, "data", void 0);
tslib_1.__decorate([
    (0, core_1.Input)()
], BaseChartDirective.prototype, "options", void 0);
tslib_1.__decorate([
    (0, core_1.Input)()
], BaseChartDirective.prototype, "plugins", void 0);
tslib_1.__decorate([
    (0, core_1.Input)()
], BaseChartDirective.prototype, "labels", void 0);
tslib_1.__decorate([
    (0, core_1.Input)()
], BaseChartDirective.prototype, "datasets", void 0);
tslib_1.__decorate([
    (0, core_1.Output)()
], BaseChartDirective.prototype, "chartClick", void 0);
tslib_1.__decorate([
    (0, core_1.Output)()
], BaseChartDirective.prototype, "chartHover", void 0);
BaseChartDirective = tslib_1.__decorate([
    (0, core_1.Directive)({
        // eslint-disable-next-line @angular-eslint/directive-selector
        selector: 'canvas[baseChart]',
        exportAs: 'base-chart',
    })
], BaseChartDirective);
exports.BaseChartDirective = BaseChartDirective;
//# sourceMappingURL=base-chart.directive.js.map