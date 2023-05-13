/*
 Highstock JS v10.3.3 (2023-01-20)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/indicators/macd",["highcharts","highcharts/modules/stock"],function(h){b(h);b.Highcharts=h;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function h(b,k,d,h){b.hasOwnProperty(k)||(b[k]=h.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:k,module:b[k]}})))}
b=b?b._modules:{};h(b,"Stock/Indicators/MACD/MACDIndicator.js",[b["Core/Globals.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,k,d){var h=this&&this.__extends||function(){var b=function(c,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])};return b(c,a)};return function(c,a){function f(){this.constructor=c}b(c,a);c.prototype=null===a?Object.create(a):(f.prototype=a.prototype,
new f)}}(),t=b.noop,p=k.seriesTypes.sma,u=d.extend,q=d.correctFloat,l=d.defined,r=d.merge;d=function(d){function c(){var a=null!==d&&d.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;a.currentLineZone=void 0;a.graphmacd=void 0;a.graphsignal=void 0;a.macdZones=void 0;a.signalZones=void 0;return a}h(c,d);c.prototype.init=function(){k.seriesTypes.sma.prototype.init.apply(this,arguments);var a=this.color,b=this.userOptions._colorIndex;this.options&&(l(this.userOptions._colorIndex)&&
(this.options.signalLine&&this.options.signalLine.styles&&!this.options.signalLine.styles.lineColor&&(this.userOptions._colorIndex++,this.getCyclic("color",void 0,this.chart.options.colors),this.options.signalLine.styles.lineColor=this.color),this.options.macdLine&&this.options.macdLine.styles&&!this.options.macdLine.styles.lineColor&&(this.userOptions._colorIndex++,this.getCyclic("color",void 0,this.chart.options.colors),this.options.macdLine.styles.lineColor=this.color)),this.macdZones={zones:this.options.macdLine.zones,
startIndex:0},this.signalZones={zones:this.macdZones.zones.concat(this.options.signalLine.zones),startIndex:this.macdZones.zones.length},this.resetZones=!0);this.color=a;this.userOptions._colorIndex=b};c.prototype.toYData=function(a){return[a.y,a.signal,a.MACD]};c.prototype.translate=function(){var a=this,f=["plotSignal","plotMACD"];b.seriesTypes.column.prototype.translate.apply(a);a.points.forEach(function(b){[b.signal,b.MACD].forEach(function(c,e){null!==c&&(b[f[e]]=a.yAxis.toPixels(c,!0))})})};
c.prototype.destroy=function(){this.graph=null;this.graphmacd=this.graphmacd&&this.graphmacd.destroy();this.graphsignal=this.graphsignal&&this.graphsignal.destroy();k.seriesTypes.sma.prototype.destroy.apply(this,arguments)};c.prototype.drawGraph=function(){for(var a=this,b=a.points,c=b.length,d=a.options,e=a.zones,h={options:{gapSize:d.gapSize}},n=[[],[]],g;c--;)g=b[c],l(g.plotMACD)&&n[0].push({plotX:g.plotX,plotY:g.plotMACD,isNull:!l(g.plotMACD)}),l(g.plotSignal)&&n[1].push({plotX:g.plotX,plotY:g.plotSignal,
isNull:!l(g.plotMACD)});["macd","signal"].forEach(function(b,f){a.points=n[f];a.options=r(d[b+"Line"].styles,h);a.graph=a["graph"+b];a.currentLineZone=b+"Zones";a.zones=a[a.currentLineZone].zones;k.seriesTypes.sma.prototype.drawGraph.call(a);a["graph"+b]=a.graph});a.points=b;a.options=d;a.zones=e;a.currentLineZone=null};c.prototype.getZonesGraphs=function(a){var b=d.prototype.getZonesGraphs.call(this,a),c=b;this.currentLineZone&&(c=b.splice(this[this.currentLineZone].startIndex+1),c.length?c.splice(0,
0,a[0]):c=[a[0]]);return c};c.prototype.applyZones=function(){var a=this.zones;this.zones=this.signalZones.zones;k.seriesTypes.sma.prototype.applyZones.call(this);this.graphmacd&&this.options.macdLine.zones.length&&this.graphmacd.hide();this.zones=a};c.prototype.getValues=function(a,b){var c=b.longPeriod-b.shortPeriod,d=0,e=[],h=[],f=[];if(!(a.xData.length<b.longPeriod+b.signalPeriod)){var g=k.seriesTypes.ema.prototype.getValues(a,{period:b.shortPeriod,index:b.index});var m=k.seriesTypes.ema.prototype.getValues(a,
{period:b.longPeriod,index:b.index});g=g.values;m=m.values;for(a=0;a<=g.length;a++)l(m[a])&&l(m[a][1])&&l(g[a+c])&&l(g[a+c][0])&&e.push([g[a+c][0],0,null,g[a+c][1]-m[a][1]]);for(a=0;a<e.length;a++)h.push(e[a][0]),f.push([0,null,e[a][3]]);b=k.seriesTypes.ema.prototype.getValues({xData:h,yData:f},{period:b.signalPeriod,index:2});b=b.values;for(a=0;a<e.length;a++)e[a][0]>=b[0][0]&&(e[a][2]=b[d][1],f[a]=[0,b[d][1],e[a][3]],null===e[a][3]?(e[a][1]=0,f[a][0]=0):(e[a][1]=q(e[a][3]-b[d][1]),f[a][0]=q(e[a][3]-
b[d][1])),d++);return{values:e,xData:h,yData:f}}};c.defaultOptions=r(p.defaultOptions,{params:{shortPeriod:12,longPeriod:26,signalPeriod:9,period:26},signalLine:{zones:[],styles:{lineWidth:1,lineColor:void 0}},macdLine:{zones:[],styles:{lineWidth:1,lineColor:void 0}},threshold:0,groupPadding:.1,pointPadding:.1,crisp:!1,states:{hover:{halo:{size:0}}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Value: {point.MACD}<br/>Signal: {point.signal}<br/>Histogram: {point.y}<br/>'},
dataGrouping:{approximation:"averages"},minPointLength:0});return c}(p);u(d.prototype,{nameComponents:["longPeriod","shortPeriod","signalPeriod"],pointArrayMap:["y","signal","MACD"],parallelArrays:["x","y","signal","MACD"],pointValKey:"y",markerAttribs:t,getColumnMetrics:b.seriesTypes.column.prototype.getColumnMetrics,crispCol:b.seriesTypes.column.prototype.crispCol,drawPoints:b.seriesTypes.column.prototype.drawPoints});k.registerSeriesType("macd",d);"";return d});h(b,"masters/indicators/macd.src.js",
[],function(){})});
//# sourceMappingURL=macd.js.map