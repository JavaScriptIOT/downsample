import { DataPoint, NormalizedDataPoint } from '../types';
export declare const mergeBucketAt: (buckets: NormalizedDataPoint[][], index: number) => NormalizedDataPoint[][];
export declare const splitBucketAt: (buckets: NormalizedDataPoint[][], index: number) => NormalizedDataPoint[][];
export declare const calculateLinearRegressionCoefficients: (data: NormalizedDataPoint[]) => [number, number];
export declare const calculateSSEForBucket: (dataPoints: NormalizedDataPoint[]) => number;
export declare const calculateSSEForBuckets: (buckets: NormalizedDataPoint[][]) => number[];
export declare const findLowestSSEAdjacentBucketsIndex: (sse: number[], ignoreIndex: number) => number | undefined;
export declare const findHighestSSEBucketIndex: (buckets: NormalizedDataPoint[][], sse: number[]) => number | undefined;
export default function LTD<T extends DataPoint>(data: T[], desiredLength: number): T[];
