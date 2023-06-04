import { useState } from 'react';
import { ChartManager, ChartManagerOptions } from '../models/ChartManager';
import statistic from '../settings/statistic';

type useChartManagerType = () => [ChartManager, (options: ChartManagerOptions) => void ];

export const useChartManager: useChartManagerType = () => {
    const [chartManager, setChartManager] = useState<ChartManager>(new ChartManager({
        instituteName: statistic.institutes[0].name,
        statisticItemName: Object.keys(statistic.institutes[0].data)[0]
    }));

    const setChartManagerWrapper = (
        options: ChartManagerOptions
    )  => {
        setChartManager(new ChartManager(options))
    }

    return [
        chartManager,
        setChartManagerWrapper,
    ]
}
