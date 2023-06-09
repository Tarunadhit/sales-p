"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeWorker = exports.safeWindow = exports.safeServiceWorkerContainer = exports.safeRange = exports.safeLocation = exports.safeGlobal = exports.safeDomParser = exports.safeDocument = exports.safeStyleEl = exports.safeScriptEl = exports.safeObjectEl = exports.safeLinkEl = exports.safeInputEl = exports.safeIframeEl = exports.safeFormEl = exports.safeEmbedEl = exports.safeElement = exports.safeButtonEl = exports.safeAreaEl = exports.safeAnchorEl = void 0;
/**
 * @fileoverview This file re-exports all of the wrappers to ensure that we have
 * a clearly defined interface.
 */
exports.safeAnchorEl = __importStar(require("./elements/anchor"));
exports.safeAreaEl = __importStar(require("./elements/area"));
exports.safeButtonEl = __importStar(require("./elements/button"));
exports.safeElement = __importStar(require("./elements/element"));
exports.safeEmbedEl = __importStar(require("./elements/embed"));
exports.safeFormEl = __importStar(require("./elements/form"));
exports.safeIframeEl = __importStar(require("./elements/iframe"));
exports.safeInputEl = __importStar(require("./elements/input"));
exports.safeLinkEl = __importStar(require("./elements/link"));
exports.safeObjectEl = __importStar(require("./elements/object"));
exports.safeScriptEl = __importStar(require("./elements/script"));
exports.safeStyleEl = __importStar(require("./elements/style"));
exports.safeDocument = __importStar(require("./globals/document"));
exports.safeDomParser = __importStar(require("./globals/dom_parser"));
exports.safeGlobal = __importStar(require("./globals/global"));
exports.safeLocation = __importStar(require("./globals/location"));
exports.safeRange = __importStar(require("./globals/range"));
exports.safeServiceWorkerContainer = __importStar(require("./globals/service_worker_container"));
exports.safeWindow = __importStar(require("./globals/window"));
exports.safeWorker = __importStar(require("./globals/worker"));
