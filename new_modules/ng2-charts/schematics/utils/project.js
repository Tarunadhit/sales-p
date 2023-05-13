"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChartsModulesToModule = exports.getProjectTargetOptions = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
/**
 * Resolves options for the build target of the given project
 */
function getProjectTargetOptions(project, buildTarget) {
    const buildTargetObject = project.targets.get(buildTarget);
    if (buildTargetObject && buildTargetObject.options) {
        return buildTargetObject.options;
    }
    throw new schematics_1.SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
}
exports.getProjectTargetOptions = getProjectTargetOptions;
/**
 * Adds the required modules to the relative module.
 */
function addChartsModulesToModule(options) {
    return async (host) => {
        const modulePath = (await (0, schematics_2.findModuleFromOptions)(host, options));
        (0, schematics_2.addModuleImportToModule)(host, modulePath, 'NgChartsModule', 'ng2-charts');
    };
}
exports.addChartsModulesToModule = addChartsModulesToModule;
//# sourceMappingURL=project.js.map