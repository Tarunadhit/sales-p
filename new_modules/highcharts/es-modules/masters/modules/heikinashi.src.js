/**
 * @license Highstock JS v10.3.3 (2023-01-20)
 * @module highcharts/modules/heikinashi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * HeikinAshi series type for Highcharts Stock
 *
 * (c) 2010-2021 Karol Kolodziej
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import HeikinAshiSeries from '../../Series/HeikinAshi/HeikinAshiSeries.js';
var G = Highcharts;
HeikinAshiSeries.compose(G.Series, G.Axis);
