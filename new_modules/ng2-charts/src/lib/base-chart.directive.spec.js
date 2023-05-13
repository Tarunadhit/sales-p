"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_chart_directive_1 = require("./base-chart.directive");
const platform_browser_1 = require("@angular/platform-browser");
const testing_1 = require("@angular/core/testing");
const core_1 = require("@angular/core");
const chart_js_1 = require("chart.js");
let TestComponent = class TestComponent {
    constructor() {
        this.click = jasmine.createSpy('chartClick');
        this.hover = jasmine.createSpy('chartHover');
    }
};
TestComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        template: '<canvas baseChart' +
            ' [data]="data"' +
            ' [datasets]="datasets"' +
            ' [labels]="labels"' +
            ' (chartClick)="click()"' +
            ' (chartHover)="hover()"></canvas>'
    })
], TestComponent);
describe('BaseChartDirective', () => {
    let fixture;
    let element;
    let directive;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                base_chart_directive_1.BaseChartDirective
            ]
        });
        chart_js_1.Chart.register(...chart_js_1.registerables);
        fixture = testing_1.TestBed.createComponent(TestComponent);
        element = fixture.componentInstance;
        directive = fixture.debugElement.query(platform_browser_1.By.directive(base_chart_directive_1.BaseChartDirective))
            .injector.get(base_chart_directive_1.BaseChartDirective);
    });
    it('should create an instance', () => {
        expect(directive).toBeTruthy();
        fixture.detectChanges();
        expect(directive.chart).toBeDefined();
    });
    it('should trigger an update when labels or datasets change', () => {
        fixture.detectChanges();
        element.labels = ['Answers'];
        fixture.detectChanges();
        expect(directive.chart?.data.labels?.length).toBe(1);
        expect(directive.chart?.data.labels).toEqual(element.labels);
        element.datasets = [{
                data: [42]
            }];
        fixture.detectChanges();
        expect(directive.chart?.data.datasets?.length).toBe(1);
        expect(directive.chart?.data.datasets).toEqual(element.datasets);
    });
    it('should not merge labels when updating data', () => {
        fixture.detectChanges();
        element.data = {
            labels: ['Answers'],
            datasets: []
        };
        fixture.detectChanges();
        expect(directive.chart?.data.labels?.length).toBe(1);
        expect(directive.chart?.data.labels).toEqual(element.data.labels);
        element.data = {
            labels: ['Life', 'Universe', 'Everything'],
            datasets: []
        };
        fixture.detectChanges();
        expect(directive.chart?.data.labels?.length).toBe(3);
        expect(directive.chart?.data?.labels && directive.chart?.data?.labels[0]).not.toEqual('Answers');
    });
    it('should emit when the chart is clicked', (0, testing_1.fakeAsync)(() => {
        fixture.detectChanges();
        let canvas = fixture.nativeElement.querySelector('canvas');
        canvas.dispatchEvent(new MouseEvent("click", {
            clientX: canvas.getBoundingClientRect().left + 50,
            clientY: canvas.getBoundingClientRect().top + 50
        }));
        (0, testing_1.tick)(25);
        expect(element.click).toHaveBeenCalled();
    }));
    it('should emit when the chart is hovered', (0, testing_1.fakeAsync)(() => {
        fixture.detectChanges();
        let canvas = fixture.nativeElement.querySelector('canvas');
        canvas.dispatchEvent(new MouseEvent("mousemove", {
            clientX: canvas.getBoundingClientRect().left + 50,
            clientY: canvas.getBoundingClientRect().top + 50
        }));
        (0, testing_1.tick)(25);
        expect(element.hover).toHaveBeenCalled();
    }));
});
//# sourceMappingURL=base-chart.directive.spec.js.map