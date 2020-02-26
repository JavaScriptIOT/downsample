import { DataPoint, NormalizedDataPoint } from '../types';
export declare function LTTBIndexesForBuckets(buckets: NormalizedDataPoint[][]): number[];
export default function LTTB<T extends DataPoint>(data: T[], desiredLength: number): T[];
