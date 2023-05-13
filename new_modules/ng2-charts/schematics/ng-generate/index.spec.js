"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestApp = void 0;
const testing_1 = require("@angular-devkit/schematics/testing");
let appTree;
function createWorkspace(runner) {
    return runner
        .runExternalSchematicAsync('@schematics/angular', 'workspace', {
        name: 'workspace',
        version: '10.0.0',
        newProjectRoot: 'projects'
    })
        .toPromise();
}
/**
 * Creates a sample workspace with two applications: 'app' (default) and 'second-app'
 */
async function createTestApp(runner, appOptions = {}) {
    const tree = await createWorkspace(runner);
    return runner
        .runExternalSchematicAsync('@schematics/angular', 'application', { name: 'app', ...appOptions }, tree)
        .toPromise();
}
exports.createTestApp = createTestApp;
describe('ng2-charts-schematics', () => {
    let runner;
    beforeEach(async () => {
        runner = new testing_1.SchematicTestRunner('schematics', require.resolve('../collection.json'));
        appTree = await createTestApp(runner);
    });
    it('works', async () => {
        const tree = await runner.runSchematicAsync('line', { name: 'test-chart', project: 'app' }, appTree).toPromise();
        expect(tree.files.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=index.spec.js.map