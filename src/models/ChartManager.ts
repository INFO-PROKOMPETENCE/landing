import statistic, { Institute, StatisticItem } from '../settings/statistic';

export interface ChartManagerOptions {
    instituteName: string,
    statisticItemName: string,
}

export class ChartManager {
    private _statistic = statistic;
    private _institute: Institute;
    private _instituteName: string;
    private _statisticItemName: string;

    constructor(
        options: ChartManagerOptions
    ) {
        this._instituteName = options.instituteName || statistic.institutes[0].name;
        this._statisticItemName = options.statisticItemName || Object.keys(statistic.institutes[0].data)[0];

        this._institute = this._statistic.institutes
            .find(institute => institute.name === this._instituteName) || {
            name: "ИРИТ-РТФ",
            data: {}
        };
    }

    public get instituteName(): string {
        return this._instituteName;
    }

    public get statisticItemName(): string {
        return this._statisticItemName;
    }

    public get labels(): string[] {
        if (this._institute && this._statisticItemName in this._institute.data) {
            // @ts-ignore
            return this._institute.data[this._statisticItemName]?.map(item => item.year.toString());
        }

        return [];
    }

    public get data(): number[] {
        if (this._institute && this._statisticItemName in this._institute.data) {
            // @ts-ignore
            return this._institute.data[this._statisticItemName]?.map(item => item.count);
        }

        return [];
    }

    public get statisticItems(): { title: string, count: number }[] {
        const titles = Object.keys(this._institute.data);
        const getAllCountByTitle = (title: string) => {
            return this._institute.data[title]!!.reduce((sum, curr) => {
                return sum + curr.count;
            }, 0);
        }

        return titles.map(title => {
            return {
                title,
                count: getAllCountByTitle(title),
            }
        })
    }
}
