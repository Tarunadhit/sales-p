/**
 * @license Highcharts Gantt JS v10.3.3 (2023-01-20)
 * @module highcharts/modules/gantt
 * @requires highcharts
 *
 * Gantt series
 *
 * (c) 2016-2021 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Navigator from '../../Stock/Navigator/Navigator.js';
import Scrollbar from '../../Stock/Scrollbar/Scrollbar.js';
import RangeSelector from '../../Stock/RangeSelector/RangeSelector.js';
import XRangeSeries from '../../Series/XRange/XRangeSeries.js';
import '../../Series/Gantt/GanttSeries.js';
import GanttChart from '../../Core/Chart/GanttChart.js';
var G = Highcharts;
// Classes
G.GanttChart = GanttChart;
G.ganttChart = GanttChart.ganttChart;
G.Navigator = Navigator;
G.RangeSelector = RangeSelector;
G.Scrollbar = Scrollbar;
// Compositions
Navigator.compose(G.Axis, G.Chart, G.Series);
RangeSelector.compose(G.Axis, G.Chart);
Scrollbar.compose(G.Axis);
XRangeSeries.compose(G.Axis);
