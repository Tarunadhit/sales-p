/* *
 *
 *  (c) 2010-2021 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import U from '../Utilities.js';
var extend = U.extend, merge = U.merge, pick = U.pick;
/* *
 *
 *  Namespace
 *
 * */
var LegendSymbol;
(function (LegendSymbol) {
    /* *
    *
    *  Functions
    *
    * */
    /* eslint-disable valid-jsdoc */
    /**
     * Get the series' symbol in the legend.
     *
     * This method should be overridable to create custom symbols through
     * Highcharts.seriesTypes[type].prototype.drawLegendSymbol.
     *
     * @private
     * @function Highcharts.LegendSymbolMixin.drawLineMarker
     *
     * @param {Highcharts.Legend} legend
     * The legend object.
     */
    function drawLineMarker(legend) {
        var legendItem = this.legendItem = this.legendItem || {}, options = this.options, symbolWidth = legend.symbolWidth, symbolHeight = legend.symbolHeight, generalRadius = symbolHeight / 2, renderer = this.chart.renderer, legendItemGroup = legendItem.group, verticalCenter = legend.baseline -
            Math.round(legend.fontMetrics.b * 0.3);
        var attr = {}, legendSymbol, markerOptions = options.marker, lineSizer = 0;
        // Draw the line
        if (!this.chart.styledMode) {
            attr = {
                'stroke-width': Math.min(options.lineWidth || 0, 24)
            };
            if (options.dashStyle) {
                attr.dashstyle = options.dashStyle;
            }
            else if (options.linecap !== 'square') {
                attr['stroke-linecap'] = 'round';
            }
        }
        legendItem.line = renderer
            .path()
            .addClass('highcharts-graph')
            .attr(attr)
            .add(legendItemGroup);
        if (attr['stroke-linecap']) {
            lineSizer = Math.min(legendItem.line.strokeWidth(), symbolWidth) / 2;
        }
        legendItem.line
            .attr({
            d: [
                ['M', lineSizer, verticalCenter],
                ['L', symbolWidth - lineSizer, verticalCenter]
            ]
        });
        // Draw the marker
        if (markerOptions && markerOptions.enabled !== false && symbolWidth) {
            // Do not allow the marker to be larger than the symbolHeight
            var radius = Math.min(pick(markerOptions.radius, generalRadius), generalRadius);
            // Restrict symbol markers size
            if (this.symbol.indexOf('url') === 0) {
                markerOptions = merge(markerOptions, {
                    width: symbolHeight,
                    height: symbolHeight
                });
                radius = 0;
            }
            legendItem.symbol = legendSymbol = renderer
                .symbol(this.symbol, (symbolWidth / 2) - radius, verticalCenter - radius, 2 * radius, 2 * radius, extend({ context: 'legend' }, markerOptions))
                .addClass('highcharts-point')
                .add(legendItemGroup);
            legendSymbol.isMarker = true;
        }
    }
    LegendSymbol.drawLineMarker = drawLineMarker;
    /**
     * Get the series' symbol in the legend.
     *
     * This method should be overridable to create custom symbols through
     * Highcharts.seriesTypes[type].prototype.drawLegendSymbol.
     *
     * @private
     * @function Highcharts.LegendSymbolMixin.drawRectangle
     *
     * @param {Highcharts.Legend} legend
     * The legend object
     *
     * @param {Highcharts.Point|Highcharts.Series} item
     * The series (this) or point
     */
    function drawRectangle(legend, item) {
        var legendItem = item.legendItem || {}, options = legend.options, symbolHeight = legend.symbolHeight, square = options.squareSymbol, symbolWidth = square ? symbolHeight : legend.symbolWidth;
        legendItem.symbol = this.chart.renderer
            .rect(square ? (legend.symbolWidth - symbolHeight) / 2 : 0, legend.baseline - symbolHeight + 1, // #3988
        symbolWidth, symbolHeight, pick(legend.options.symbolRadius, symbolHeight / 2))
            .addClass('highcharts-point')
            .attr({
            zIndex: 3
        })
            .add(legendItem.group);
    }
    LegendSymbol.drawRectangle = drawRectangle;
})(LegendSymbol || (LegendSymbol = {}));
/* *
 *
 *  Default Export
 *
 * */
export default LegendSymbol;
