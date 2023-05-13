/**
 * @license Highstock JS v10.3.3 (2023-01-20)
 * @module highcharts/modules/full-screen
 * @requires highcharts
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2021 Highsoft AS
 * Author: Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Fullscreen from '../../Extensions/Exporting/Fullscreen.js';
var G = Highcharts;
G.Fullscreen = Fullscreen;
Fullscreen.compose(G.Chart);
