"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let ThemeService = class ThemeService {
    constructor() {
        this.colorschemesOptions = new rxjs_1.BehaviorSubject(undefined);
    }
    setColorschemesOptions(options) {
        this.pColorschemesOptions = options;
        this.colorschemesOptions.next(options);
    }
    getColorschemesOptions() {
        return this.pColorschemesOptions;
    }
};
ThemeService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], ThemeService);
exports.ThemeService = ThemeService;
//# sourceMappingURL=theme.service.js.map