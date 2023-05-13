import { Color } from 'chart.js';
export declare const builtInDefaults: {
    plugins: {
        colors: {
            enabled: boolean;
        };
    };
    datasets: {
        line: {
            backgroundColor: (context: any) => Color;
            borderColor: (context: any) => Color;
            pointBackgroundColor: (context: any) => Color;
            pointBorderColor: string;
        };
        bar: {
            backgroundColor: (context: any) => Color;
            borderColor: (context: any) => Color;
        };
        readonly radar: {
            [key: string]: Color | ((context: any) => Color);
        };
        doughnut: {
            backgroundColor: (context: any) => Color;
            borderColor: string;
        };
        readonly pie: {
            [key: string]: Color | ((context: any) => Color);
        };
        polarArea: {
            backgroundColor: (context: any) => Color;
            borderColor: (context: any) => Color;
        };
        readonly bubble: {
            [key: string]: Color | ((context: any) => Color);
        };
        readonly scatter: {
            [key: string]: Color | ((context: any) => Color);
        };
        readonly area: {
            [key: string]: Color | ((context: any) => Color);
        };
    };
};
