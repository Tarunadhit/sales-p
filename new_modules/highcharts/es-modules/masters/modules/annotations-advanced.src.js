/**
 * @license Highcharts JS v10.3.3 (2023-01-20)
 * @module highcharts/modules/annotations-advanced
 * @requires highcharts
 *
 * Annotations module
 *
 * (c) 2009-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Annotation from '../../Extensions/Annotations/Annotation.js';
import '../../Extensions/Annotations/Types/BasicAnnotation.js';
import '../../Extensions/Annotations/Types/CrookedLine.js';
import '../../Extensions/Annotations/Types/ElliottWave.js';
import '../../Extensions/Annotations/Types/Tunnel.js';
import '../../Extensions/Annotations/Types/InfinityLine.js';
import '../../Extensions/Annotations/Types/TimeCycles.js';
import '../../Extensions/Annotations/Types/Fibonacci.js';
import '../../Extensions/Annotations/Types/FibonacciTimeZones.js';
import '../../Extensions/Annotations/Types/Pitchfork.js';
import '../../Extensions/Annotations/Types/VerticalLine.js';
import '../../Extensions/Annotations/Types/Measure.js';
var G = Highcharts;
G.Annotation = Annotation;
Annotation.compose(G.Chart, G.Pointer, G.SVGRenderer);
