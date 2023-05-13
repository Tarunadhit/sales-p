"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular-devkit/schematics/testing");
const get_file_content_1 = require("@schematics/angular/utility/test/get-file-content");
const testing_2 = require("../utils/testing");
const messages = require("./messages");
describe(`ng add 'ng2-charts'`, () => {
    let runner;
    let appTree;
    beforeEach(async () => {
        runner = new testing_1.SchematicTestRunner('schematics', require.resolve('../collection.json'));
        appTree = await (0, testing_2.createTestApp)(runner);
    });
    it(`should add missing dependencies to 'package.json'`, async () => {
        const tree = await runner.runSchematicAsync('ng-add', {}, appTree).toPromise();
        const { dependencies } = JSON.parse((0, get_file_content_1.getFileContent)(tree, '/package.json'));
        expect(dependencies['ng2-charts']).toBeDefined('ng2-charts should be installed');
        expect(dependencies['chart.js']).toBeDefined('chart.js should be installed');
    });
    it(`should report when specified 'project' is not found`, async () => {
        let message = '';
        try {
            await runner.runSchematicAsync('ng-add', { project: 'test' }, appTree).toPromise();
        }
        catch (e) {
            message = e.message;
        }
        finally {
            expect(message).toBe(messages.noProject('test'));
        }
    });
});
//# sourceMappingURL=index.spec.js.map