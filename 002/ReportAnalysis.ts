/**
 * Created by Piggat on 5/24/2017.
 */
export class ReportAnalysis {

    /**
     * Phân tích nội dung
     * @param reportContent
     * @returns {IStock[]}
     */
    public static analyst(reportContent: string) {
        let data:IStock[] = [
            {
                code: 'VNM',
                increase: 5,
                decrease: 5,
                minNextMonth: 50,
                maxNextMonth: 60
            }
        ];
        return data;
    }

    public static sortByIncrease(list, isAsc: boolean = true) {
        let data:IStock[] = [
            {
                code: 'VNM',
                increase: 5,
                decrease: 5,
                minNextMonth: 50,
                maxNextMonth: 60
            }
        ];
        return data;
    }

    public static sortByForecastInstability(list, isAsc: boolean = true) {
        let data:IStock[] = [
            {
                code: 'VNM',
                increase: 5,
                decrease: 5,
                minNextMonth: 50,
                maxNextMonth: 60
            }
        ];
        return data;
    }

    public static sortByPrice(list, isAsc: boolean = true) {
        let data:IStock[] = [
            {
                code: 'VNM',
                increase: 5,
                decrease: 5,
                minNextMonth: 50,
                maxNextMonth: 60
            }
        ];
        return data;
    }
}

export interface IStock {
    code: string,
    increase: number,
    decrease: number,
    minNextMonth: number,
    maxNextMonth: number
}