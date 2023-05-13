/**
 * @license Highcharts JS v10.3.3 (2023-01-20)
 * @module highcharts/modules/variwide
 * @requires highcharts
 *
 * Highcharts variwide module
 *
 * (c) 2010-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import VariwideSeries from '../../Series/Variwide/VariwideSeries.js';
var G = Highcharts;
VariwideSeries.compose(G.Axis, G.Tick);
