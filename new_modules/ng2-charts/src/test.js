"use strict";
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
Object.defineProperty(exports, "__esModule", { value: true });
// import 'core-js/es7/reflect';
require("zone.js");
require("zone.js/testing");
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/platform-browser-dynamic/testing");
// First, initialize the Angular testing environment.
(0, testing_1.getTestBed)().initTestEnvironment(testing_2.BrowserDynamicTestingModule, (0, testing_2.platformBrowserDynamicTesting)());
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
//# sourceMappingURL=test.js.map