import { Directive, EventEmitter, Input, Output, } from '@angular/core';
import { Chart } from 'chart.js';
import { distinctUntilChanged } from 'rxjs/operators';
import { merge } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "./theme.service";
export class BaseChartDirective {
    constructor(element, zone, themeService) {
        this.zone = zone;
        this.themeService = themeService;
        this.type = 'bar';
        this.plugins = [];
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.subs = [];
        this.themeOverrides = {};
        this.ctx = element.nativeElement.getContext('2d');
        this.subs.push(this.themeService.colorschemesOptions
            .pipe(distinctUntilChanged())
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
        return this.zone.runOutsideAngular(() => this.chart = new Chart(this.ctx, this.getChartConfiguration()));
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
        return merge({
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
}
BaseChartDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BaseChartDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.ThemeService }], target: i0.ɵɵFactoryTarget.Directive });
BaseChartDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: BaseChartDirective, selector: "canvas[baseChart]", inputs: { type: "type", legend: "legend", data: "data", options: "options", plugins: "plugins", labels: "labels", datasets: "datasets" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, exportAs: ["base-chart"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BaseChartDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'canvas[baseChart]',
                    exportAs: 'base-chart',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.ThemeService }]; }, propDecorators: { type: [{
                type: Input
            }], legend: [{
                type: Input
            }], data: [{
                type: Input
            }], options: [{
                type: Input
            }], plugins: [{
                type: Input
            }], labels: [{
                type: Input
            }], datasets: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItY2hhcnRzL3NyYy9saWIvYmFzZS1jaGFydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsS0FBSyxFQU1OLE1BQU0sVUFBVSxDQUFDO0FBSWxCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQU9sQyxNQUFNLE9BQU8sa0JBQWtCO0lBc0I3QixZQUFtQixPQUFtQixFQUFVLElBQVksRUFBVSxZQUEwQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFsQmhGLFNBQUksR0FBcUQsS0FBYyxDQUFDO1FBSXhFLFlBQU8sR0FBb0IsRUFBRSxDQUFDO1FBSzdCLGVBQVUsR0FBd0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRixlQUFVLEdBQXNELElBQUksWUFBWSxFQUFFLENBQUM7UUFLNUYsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBa0MsRUFBRSxDQUFDO1FBR3pELElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUI7YUFDakQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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QTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDaGFydCxcbiAgQ2hhcnRDb25maWd1cmF0aW9uLFxuICBDaGFydEV2ZW50LFxuICBDaGFydFR5cGUsXG4gIERlZmF1bHREYXRhUG9pbnQsXG4gIFBsdWdpblxufSBmcm9tICdjaGFydC5qcyc7XG5cbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2NhbnZhc1tiYXNlQ2hhcnRdJyxcbiAgZXhwb3J0QXM6ICdiYXNlLWNoYXJ0Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNoYXJ0RGlyZWN0aXZlPFRUeXBlIGV4dGVuZHMgQ2hhcnRUeXBlID0gQ2hhcnRUeXBlLFxuICBURGF0YSA9IERlZmF1bHREYXRhUG9pbnQ8VFR5cGU+LFxuICBUTGFiZWwgPSB1bmtub3duPiBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPlsndHlwZSddID0gJ2JhcicgYXMgVFR5cGU7XG4gIEBJbnB1dCgpIHB1YmxpYyBsZWdlbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YT86IENoYXJ0Q29uZmlndXJhdGlvbjxUVHlwZSwgVERhdGEsIFRMYWJlbD5bJ2RhdGEnXTtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IENoYXJ0Q29uZmlndXJhdGlvbjxUVHlwZSwgVERhdGEsIFRMYWJlbD5bJ29wdGlvbnMnXTtcbiAgQElucHV0KCkgcHVibGljIHBsdWdpbnM6IFBsdWdpbjxUVHlwZT5bXSA9IFtdO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbHM/OiBDaGFydENvbmZpZ3VyYXRpb248VFR5cGUsIFREYXRhLCBUTGFiZWw+WydkYXRhJ11bJ2xhYmVscyddO1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YXNldHM/OiBDaGFydENvbmZpZ3VyYXRpb248VFR5cGUsIFREYXRhLCBUTGFiZWw+WydkYXRhJ11bJ2RhdGFzZXRzJ107XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8eyBldmVudD86IENoYXJ0RXZlbnQsIGFjdGl2ZT86IHt9W10gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENoYXJ0RXZlbnQsIGFjdGl2ZToge31bXSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY3R4OiBzdHJpbmc7XG4gIHB1YmxpYyBjaGFydD86IENoYXJ0PFRUeXBlLCBURGF0YSwgVExhYmVsPjtcblxuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgdGhlbWVPdmVycmlkZXM6IENoYXJ0Q29uZmlndXJhdGlvblsnb3B0aW9ucyddID0ge307XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIHRoZW1lU2VydmljZTogVGhlbWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5jdHggPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnRoZW1lU2VydmljZS5jb2xvcnNjaGVtZXNPcHRpb25zXG4gICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgLnN1YnNjcmliZShyID0+IHRoaXMudGhlbWVDaGFuZ2VkKHIpKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgcmVxdWlyZVJlbmRlciA9IFsgJ3R5cGUnIF07XG4gICAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNoYW5nZXMpO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZXMuc29tZShrZXkgPT4gcmVxdWlyZVJlbmRlci5pbmNsdWRlcyhrZXkpKSB8fFxuICAgICAgcHJvcGVydHlOYW1lcy5ldmVyeShrZXkgPT4gY2hhbmdlc1trZXldLmlzRmlyc3RDaGFuZ2UoKSlcbiAgICApIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0Q2hhcnRDb25maWd1cmF0aW9uKCk7XG5cbiAgICAgIC8vIFVzaW5nIGFzc2lnbiB0byBhdm9pZCBjaGFuZ2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0IHJlZmVyZW5jZVxuICAgICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNoYXJ0LmNvbmZpZy5kYXRhLCBjb25maWcuZGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0LmNvbmZpZy5wbHVnaW5zKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNoYXJ0LmNvbmZpZy5wbHVnaW5zLCBjb25maWcucGx1Z2lucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhcnQuY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY2hhcnQuY29uZmlnLm9wdGlvbnMsIGNvbmZpZy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gdm9pZCAwO1xuICAgIH1cbiAgICB0aGlzLnN1YnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IENoYXJ0PFRUeXBlLCBURGF0YSwgVExhYmVsPiB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLmN0eCwgdGhpcy5nZXRDaGFydENvbmZpZ3VyYXRpb24oKSkpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdXJhdGlvbj86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydD8udXBkYXRlKGR1cmF0aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZGVEYXRhc2V0KGluZGV4OiBudW1iZXIsIGhpZGRlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmdldERhdGFzZXRNZXRhKGluZGV4KS5oaWRkZW4gPSBoaWRkZW47XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0RhdGFzZXRIaWRkZW4oaW5kZXg6IG51bWJlcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0Py5nZXREYXRhc2V0TWV0YShpbmRleCk/LmhpZGRlbjtcbiAgfVxuXG4gIHB1YmxpYyB0b0Jhc2U2NEltYWdlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnQ/LnRvQmFzZTY0SW1hZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgdGhlbWVDaGFuZ2VkKG9wdGlvbnM6IENoYXJ0Q29uZmlndXJhdGlvblsnb3B0aW9ucyddKTogdm9pZCB7XG4gICAgdGhpcy50aGVtZU92ZXJyaWRlcyA9IG9wdGlvbnM7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0LmNvbmZpZy5vcHRpb25zKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jaGFydC5jb25maWcub3B0aW9ucywgdGhpcy5nZXRDaGFydE9wdGlvbnMoKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGFydE9wdGlvbnMoKTogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPlsnb3B0aW9ucyddIHtcbiAgICByZXR1cm4gbWVyZ2Uoe1xuICAgICAgICBvbkhvdmVyOiAoZXZlbnQ6IENoYXJ0RXZlbnQsIGFjdGl2ZToge31bXSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5jaGFydEhvdmVyLm9ic2VydmVkICYmICF0aGlzLmNoYXJ0SG92ZXIub2JzZXJ2ZXJzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuY2hhcnRIb3Zlci5lbWl0KHsgZXZlbnQsIGFjdGl2ZSB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IChldmVudD86IENoYXJ0RXZlbnQsIGFjdGl2ZT86IHt9W10pID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuY2hhcnRDbGljay5vYnNlcnZlZCAmJiAhdGhpcy5jaGFydENsaWNrLm9ic2VydmVycz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGV2ZW50LCBhY3RpdmUgfSkpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpcy50aGVtZU92ZXJyaWRlcyxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHtcbiAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgZGlzcGxheTogdGhpcy5sZWdlbmRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGFydENvbmZpZ3VyYXRpb24oKTogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGRhdGE6IHRoaXMuZ2V0Q2hhcnREYXRhKCksXG4gICAgICBvcHRpb25zOiB0aGlzLmdldENoYXJ0T3B0aW9ucygpLFxuICAgICAgcGx1Z2luczogdGhpcy5wbHVnaW5zXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hhcnREYXRhKCk6IENoYXJ0Q29uZmlndXJhdGlvbjxUVHlwZSwgVERhdGEsIFRMYWJlbD5bJ2RhdGEnXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSA/IHRoaXMuZGF0YSA6IHtcbiAgICAgIGxhYmVsczogdGhpcy5sYWJlbHMgfHwgW10sXG4gICAgICBkYXRhc2V0czogdGhpcy5kYXRhc2V0cyB8fCBbXVxuICAgIH1cbiAgfVxufVxuIl19