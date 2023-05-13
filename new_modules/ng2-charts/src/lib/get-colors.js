"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtInDefaults = void 0;
const base_colors_1 = require("./base-colors");
exports.builtInDefaults = {
    plugins: { colors: { enabled: false } },
    datasets: {
        line: {
            backgroundColor: (context) => rgba(generateColor(context.datasetIndex), 0.4),
            borderColor: (context) => rgba(generateColor(context.datasetIndex), 1),
            pointBackgroundColor: (context) => rgba(generateColor(context.datasetIndex), 1),
            pointBorderColor: '#fff',
        },
        bar: {
            backgroundColor: (context) => rgba(generateColor(context.datasetIndex), 0.6),
            borderColor: (context) => rgba(generateColor(context.datasetIndex), 1)
        },
        get radar() {
            return this.line;
        },
        doughnut: {
            backgroundColor: (context) => rgba(generateColor(context.dataIndex), 0.6),
            borderColor: '#fff'
        },
        get pie() {
            return this.doughnut;
        },
        polarArea: {
            backgroundColor: (context) => rgba(generateColor(context.dataIndex), 0.6),
            borderColor: (context) => rgba(generateColor(context.dataIndex), 1),
        },
        get bubble() {
            return this.doughnut;
        },
        get scatter() {
            return this.doughnut;
        },
        get area() {
            return this.polarArea;
        }
    }
};
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors
 */
function generateColor(index = 0) {
    return base_colors_1.baseColors[index] || getRandomColor();
}
//# sourceMappingURL=get-colors.js.map