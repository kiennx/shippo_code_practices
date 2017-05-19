/**
 * Created by Piggat on 5/19/2017.
 */
export class TaskEstimate {

    /**
     *
     * @param tasks
     * @param startDay
     * @returns {Date}
     */
    public static estimateFinishDay(tasks: Task[], startDay:Date) {
        return new Date();
    }
}

export interface Task {
    id:number,
    title:string,
    estimated:number,
    consumed:number
}