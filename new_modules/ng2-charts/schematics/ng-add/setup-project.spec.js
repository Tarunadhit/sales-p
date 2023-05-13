"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular-devkit/schematics/testing");
const testing_2 = require("../utils/testing");
['app', 'second-app'].forEach(projectName => {
    describe(`ng-add-project-setup, 'project=${projectName}'`, () => {
        let runner;
        let log = [];
        beforeEach(() => {
            log = [];
            runner = new testing_1.SchematicTestRunner('schematics', require.resolve('../collection.json'));
            runner.logger.subscribe(({ message }) => log.push(message));
        });
        it(`should add ng2-charts module`, async () => {
            let tree = await (0, testing_2.createTestApp)(runner);
            const appModulePath = `projects/${projectName}/src/app/app.module.ts`;
            expect(tree.read(appModulePath).toString()).not.toContain('NgChartsModule');
            tree = await runner.runSchematicAsync('ng-add-setup-project', projectName ? { project: projectName } : {}, tree)
                .toPromise();
            expect(tree.read(appModulePath).toString()).toContain('NgChartsModule');
        });
    });
});
//# sourceMappingURL=setup-project.spec.js.map