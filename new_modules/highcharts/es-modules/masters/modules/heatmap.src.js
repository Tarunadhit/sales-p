/**
 * @license Highmaps JS v10.3.3 (2023-01-20)
 * @module highcharts/modules/heatmap
 * @requires highcharts
 *
 * (c) 2009-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import ColorAxis from '../../Core/Axis/Color/ColorAxis.js';
import '../../Series/Heatmap/HeatmapSeries.js';
var G = Highcharts;
G.ColorAxis = ColorAxis;
ColorAxis.compose(G.Chart, G.Fx, G.Legend, G.Series);
