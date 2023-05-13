"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const theme_service_1 = require("./theme.service");
describe('ThemeService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.inject(theme_service_1.ThemeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=theme.service.spec.js.map