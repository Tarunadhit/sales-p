/**
 * @license Highcharts JS v10.3.3 (2023-01-20)
 * @module highcharts/modules/offline-exporting
 * @requires highcharts
 * @requires highcharts/modules/exporting
 *
 * Client side exporting module
 *
 * (c) 2015-2021 Torstein Honsi / Oystein Moseng
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import OfflineExporting from '../../Extensions/OfflineExporting/OfflineExporting.js';
var G = Highcharts;
// Compatibility
G.downloadSVGLocal = OfflineExporting.downloadSVGLocal;
// Compose
OfflineExporting.compose(G.Chart);
