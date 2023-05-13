"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const add_ng2_charts_module_1 = require("./steps/add-ng2-charts-module");
/**
 * Sets up a project with all required to run ng-bootstrap.
 * This is run after 'package.json' was patched and all dependencies installed
 */
function ngAddSetupProject(options) {
    return (0, schematics_1.chain)([
        (0, add_ng2_charts_module_1.addChartsModuleToAppModule)(options)
    ]);
}
exports.default = ngAddSetupProject;
//# sourceMappingURL=setup-project.js.map