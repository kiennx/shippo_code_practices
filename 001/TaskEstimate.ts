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
        let totalEstimated = this.sumEstimated(tasks);
        let day = Math.floor(totalEstimated/8);

        if (day > 0) {
            day -= 1;
        }

        let week = 0;
        if (day > 5) {
            week = Math.floor(day/5);
        }

        let time = startDay.getTime();
        time += 60*60*24*week*7*1000; //add more week
        let finishedDay = new Date(time);

        day = day%5; //remaining
        while (day > 0 || this.isHoliday(finishedDay)) {
            if (!this.isHoliday(finishedDay)) {
                day--;
            }
            time += 60*60*24*1000;
            finishedDay.setTime(time);
        }

        return finishedDay;
    }

    private static sumEstimated(tasks: Task[]) {
        let total = 0;
        for (let task of tasks) {
            if (task.estimated) {
                total += task.estimated;
            }
        }
        return total;
    }

    private static isHoliday(day:Date) {
        return day.getDay() == 0 || day.getDay() == 6;
    }
}

export interface Task {
    id:number,
    title:string,
    estimated:number,
    consumed:number
}