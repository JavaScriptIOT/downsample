import { XYDataPoint } from '../src/types';
import React from 'react';
export declare enum DownsamplingMethod {
    LTD = "LTD",
    LTOB = "LTOB",
    LTTB = "LTTB",
    ASAP = "ASAP"
}
export interface ChartProps {
    activeDownsamplingMethods: DownsamplingMethod[];
    data: XYDataPoint[];
    numDownsampledDataPoints: number;
    onActiveDownsamplingMethodsChange: (activeDownsamplingMethods: DownsamplingMethod[]) => void;
}
interface MergedDataPoint extends XYDataPoint {
    ltd?: number;
    ltob?: number;
    lttb?: number;
}
export default class Chart extends React.PureComponent<ChartProps> {
    getData(): MergedDataPoint[];
    private onLegendItemClick;
    private getColorForDownsamplingMethod;
    render(): React.ReactNode;
}
export {};
