import STATISTIC from "./statistic.json";

export interface StatisticItem {
    year: number;
    count: number;
}

export interface Institute {
    name: string;
    data: Partial<{
        [key: string]: StatisticItem[];
    }>
}

export interface Statistic {
    institutes: Institute[];
}

export default STATISTIC as Statistic;

