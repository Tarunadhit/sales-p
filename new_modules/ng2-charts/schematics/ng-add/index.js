"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const workspace_1 = require("@schematics/angular/utility/workspace");
const messages = require("./messages");
const package_config_1 = require("../utils/package-config");
const NG2_CHARTS_VERSION = '3.0.0';
const CHARTJS_VERSION = '3.6.0';
/**
 * This is executed when `ng add @ng-bootstrap/ng-bootstrap` is run.
 * It installs all dependencies in the 'package.json' and runs 'ng-add-setup-project' schematic.
 */
function ngAdd(options) {
    return async (tree, context) => {
        // Checking that project exists
        const { project } = options;
        if (project) {
            const workspace = await (0, workspace_1.getWorkspace)(tree);
            const projectWorkspace = workspace.projects.get(project);
            if (!projectWorkspace) {
                throw new schematics_1.SchematicsException(messages.noProject(project));
            }
        }
        (0, package_config_1.addPackageToPackageJson)(tree, 'ng2-charts', `^${NG2_CHARTS_VERSION}`);
        (0, package_config_1.addPackageToPackageJson)(tree, 'chart.js', `^${CHARTJS_VERSION}`);
        context.addTask(new tasks_1.RunSchematicTask('ng-add-setup-project', options), [
            context.addTask(new tasks_1.NodePackageInstallTask()),
        ]);
    };
}
exports.default = ngAdd;
//# sourceMappingURL=index.js.map