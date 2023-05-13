"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChartsModuleToAppModule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const ts = require("@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript");
const workspace_1 = require("@schematics/angular/utility/workspace");
const messages = require("../messages");
const schematics_2 = require("@angular/cdk/schematics");
const MODULE_NAME = 'NgChartsModule';
const PACKAGE_NAME = 'ng2-charts';
/**
 * Patches main application module by adding 'NgbModule' import
 */
function addChartsModuleToAppModule(options) {
    return async (host) => {
        const workspace = await (0, workspace_1.getWorkspace)(host);
        const projectName = options.project || workspace.extensions.defaultProject;
        const project = (0, schematics_2.getProjectFromWorkspace)(workspace, options.project);
        if (!project) {
            throw new schematics_1.SchematicsException(messages.noProject(projectName));
        }
        const modulePath = (0, ng_ast_utils_1.getAppModulePath)(host, (0, schematics_2.getProjectMainFile)(project));
        const text = host.read(modulePath);
        if (text === null) {
            throw new schematics_1.SchematicsException(`File '${modulePath}' does not exist.`);
        }
        const source = ts.createSourceFile(modulePath, text.toString('utf-8'), ts.ScriptTarget.Latest, true);
        const changes = (0, ast_utils_1.addImportToModule)(source, modulePath, MODULE_NAME, PACKAGE_NAME);
        const recorder = host.beginUpdate(modulePath);
        for (const change of changes) {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(recorder);
    };
}
exports.addChartsModuleToAppModule = addChartsModuleToAppModule;
//# sourceMappingURL=add-ng2-charts-module.js.map