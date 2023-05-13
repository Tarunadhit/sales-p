"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const project_1 = require("../../utils/project");
function default_1(options) {
    return (0, schematics_1.chain)([
        (0, schematics_2.buildComponent)({ ...options }, {
            template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html.template',
            stylesheet: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__style__.template',
        }),
        options.skipImport ? (0, schematics_1.noop)() : (0, project_1.addChartsModulesToModule)(options),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map