"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestApp = void 0;
function createWorkspace(runner) {
    return runner
        .runExternalSchematicAsync('@schematics/angular', 'workspace', {
        name: 'workspace',
        version: '10.0.0',
        newProjectRoot: 'projects',
    })
        .toPromise();
}
/**
 * Creates a sample workspace with two applications: 'app' (default) and 'second-app'
 */
async function createTestApp(runner, appOptions = {}) {
    let tree = await createWorkspace(runner);
    tree =
        await runner.runExternalSchematicAsync('@schematics/angular', 'application', { name: 'app', ...appOptions }, tree)
            .toPromise();
    return runner
        .runExternalSchematicAsync('@schematics/angular', 'application', { name: 'second-app', ...appOptions }, tree)
        .toPromise();
}
exports.createTestApp = createTestApp;
//# sourceMappingURL=testing.js.map