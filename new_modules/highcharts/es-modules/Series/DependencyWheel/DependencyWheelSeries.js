/* *
 *
 *  Dependency wheel module
 *
 *  (c) 2018-2021 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import A from '../../Core/Animation/AnimationUtilities.js';
var animObject = A.animObject;
import DependencyWheelPoint from './DependencyWheelPoint.js';
import DependencyWheelSeriesDefaults from './DependencyWheelSeriesDefaults.js';
import H from '../../Core/Globals.js';
var deg2rad = H.deg2rad;
import SankeyColumnComposition from '../Sankey/SankeyColumnComposition.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var _a = SeriesRegistry.seriesTypes, PieSeries = _a.pie, SankeySeries = _a.sankey;
import U from '../../Core/Utilities.js';
var extend = U.extend, merge = U.merge;
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.dependencywheel
 *
 * @augments Highcharts.seriesTypes.sankey
 */
var DependencyWheelSeries = /** @class */ (function (_super) {
    __extends(DependencyWheelSeries, _super);
    function DependencyWheelSeries() {
        /* *
         *
         *  Static Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         *  Properties
         *
         * */
        _this.data = void 0;
        _this.options = void 0;
        _this.nodeColumns = void 0;
        _this.nodes = void 0;
        _this.points = void 0;
        return _this;
        /* eslint-enable valid-jsdoc */
    }
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    DependencyWheelSeries.prototype.animate = function (init) {
        if (!init) {
            var duration = animObject(this.options.animation).duration, step_1 = (duration / 2) / this.nodes.length;
            this.nodes.forEach(function (point, i) {
                var graphic = point.graphic;
                if (graphic) {
                    graphic.attr({ opacity: 0 });
                    setTimeout(function () {
                        if (point.graphic) {
                            point.graphic.animate({ opacity: 1 }, { duration: step_1 });
                        }
                    }, step_1 * i);
                }
            }, this);
            this.points.forEach(function (point) {
                var graphic = point.graphic;
                if (!point.isNode && graphic) {
                    graphic.attr({ opacity: 0 })
                        .animate({
                        opacity: 1
                    }, this.options.animation);
                }
            }, this);
        }
    };
    DependencyWheelSeries.prototype.createNode = function (id) {
        var node = SankeySeries.prototype.createNode.call(this, id);
        /**
         * Return the sum of incoming and outgoing links.
         * @private
         */
        node.getSum = function () {
            return node.linksFrom
                .concat(node.linksTo)
                .reduce(function (acc, link) {
                return acc + link.weight;
            }, 0);
        };
        /**
         * Get the offset in weight values of a point/link.
         * @private
         */
        node.offset = function (point) {
            var offset = 0, i, links = node.linksFrom.concat(node.linksTo), sliced;
            /**
             * @private
             */
            function otherNode(link) {
                if (link.fromNode === node) {
                    return link.toNode;
                }
                return link.fromNode;
            }
            // Sort and slice the links to avoid links going out of each
            // node crossing each other.
            links.sort(function (a, b) {
                return otherNode(a).index - otherNode(b).index;
            });
            for (i = 0; i < links.length; i++) {
                if (otherNode(links[i]).index > node.index) {
                    links = links.slice(0, i).reverse().concat(links.slice(i).reverse());
                    sliced = true;
                    break;
                }
            }
            if (!sliced) {
                links.reverse();
            }
            for (i = 0; i < links.length; i++) {
                if (links[i] === point) {
                    return offset;
                }
                offset += links[i].weight;
            }
        };
        return node;
    };
    /**
     * Dependency wheel has only one column, it runs along the perimeter.
     * @private
     */
    DependencyWheelSeries.prototype.createNodeColumns = function () {
        var columns = [SankeyColumnComposition.compose([], this)];
        this.nodes.forEach(function (node) {
            node.column = 0;
            columns[0].push(node);
        });
        return columns;
    };
    /**
     * Translate from vertical pixels to perimeter.
     * @private
     */
    DependencyWheelSeries.prototype.getNodePadding = function () {
        return this.options.nodePadding / Math.PI;
    };
    /**
     * @private
     * @todo Override the refactored sankey translateLink and translateNode
     * functions instead of the whole translate function.
     */
    DependencyWheelSeries.prototype.translate = function () {
        var options = this.options, factor = 2 * Math.PI /
            (this.chart.plotHeight + this.getNodePadding()), center = this.getCenter(), startAngle = (options.startAngle - 90) * deg2rad;
        SankeySeries.prototype.translate.call(this);
        this.nodeColumns[0].forEach(function (node) {
            // Don't render the nodes if sum is 0 #12453
            if (node.sum) {
                var shapeArgs = node.shapeArgs, centerX_1 = center[0], centerY_1 = center[1], r = center[2] / 2, innerR_1 = r - options.nodeWidth, start = startAngle + factor * (shapeArgs.y || 0), end = startAngle +
                    factor * ((shapeArgs.y || 0) + (shapeArgs.height || 0));
                // Middle angle
                node.angle = start + (end - start) / 2;
                node.shapeType = 'arc';
                node.shapeArgs = {
                    x: centerX_1,
                    y: centerY_1,
                    r: r,
                    innerR: innerR_1,
                    start: start,
                    end: end
                };
                node.dlBox = {
                    x: centerX_1 + Math.cos((start + end) / 2) * (r + innerR_1) / 2,
                    y: centerY_1 + Math.sin((start + end) / 2) * (r + innerR_1) / 2,
                    width: 1,
                    height: 1
                };
                // Draw the links from this node
                node.linksFrom.forEach(function (point) {
                    if (point.linkBase) {
                        var distance_1;
                        var corners = point.linkBase.map(function (top, i) {
                            var angle = factor * top, x = Math.cos(startAngle + angle) * (innerR_1 + 1), y = Math.sin(startAngle + angle) * (innerR_1 + 1), curveFactor = options.curveFactor || 0;
                            // The distance between the from and to node
                            // along the perimeter. This affect how curved
                            // the link is, so that links between neighbours
                            // don't extend too far towards the center.
                            distance_1 = Math.abs(point.linkBase[3 - i] * factor - angle);
                            if (distance_1 > Math.PI) {
                                distance_1 = 2 * Math.PI - distance_1;
                            }
                            distance_1 = distance_1 * innerR_1;
                            if (distance_1 < innerR_1) {
                                curveFactor *= (distance_1 / innerR_1);
                            }
                            return {
                                x: centerX_1 + x,
                                y: centerY_1 + y,
                                cpX: centerX_1 + (1 - curveFactor) * x,
                                cpY: centerY_1 + (1 - curveFactor) * y
                            };
                        });
                        point.shapeArgs = {
                            d: [[
                                    'M',
                                    corners[0].x, corners[0].y
                                ], [
                                    'A',
                                    innerR_1, innerR_1,
                                    0,
                                    0,
                                    1,
                                    corners[1].x, corners[1].y
                                ], [
                                    'C',
                                    corners[1].cpX, corners[1].cpY,
                                    corners[2].cpX, corners[2].cpY,
                                    corners[2].x, corners[2].y
                                ], [
                                    'A',
                                    innerR_1, innerR_1,
                                    0,
                                    0,
                                    1,
                                    corners[3].x, corners[3].y
                                ], [
                                    'C',
                                    corners[3].cpX, corners[3].cpY,
                                    corners[0].cpX, corners[0].cpY,
                                    corners[0].x, corners[0].y
                                ]]
                        };
                    }
                });
            }
        });
    };
    DependencyWheelSeries.defaultOptions = merge(SankeySeries.defaultOptions, DependencyWheelSeriesDefaults);
    return DependencyWheelSeries;
}(SankeySeries));
extend(DependencyWheelSeries.prototype, {
    orderNodes: false,
    getCenter: PieSeries.prototype.getCenter
});
DependencyWheelSeries.prototype.pointClass = DependencyWheelPoint;
SeriesRegistry.registerSeriesType('dependencywheel', DependencyWheelSeries);
/* *
 *
 *  Default Export
 *
 * */
export default DependencyWheelSeries;
