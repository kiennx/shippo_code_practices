import {TaskEstimate} from "../TaskEstimate";
/**
 * Created by Piggat on 5/20/2017.
 */
let assert = require('assert');

describe('User Story 02', function() {
    describe('Estimated finish day function', function () {
        it('should return the next monday if total estimated time is less than or equal to 8 but we start on weekend', function() {
            //all sample in this case should be implemented here
            let tasks = [
                { id: 1, title: "Làm việc phải đúng giờ", estimated: 5, consumed: 5 },
                { id: 2, title: "Không đúng cũng không sao", estimated: 3, consumed: 8 }
            ];
            let finishedDay = TaskEstimate.estimateFinishDay(tasks, new Date('2017-05-20'));
            assert.equal(finishedDay.toString(), new Date('2017-05-22').toString());

            tasks = [
                { id: 1, title: "Làm việc phải đúng giờ", estimated: 3, consumed: 5 },
                { id: 2, title: "Không đúng cũng không sao", estimated: 3, consumed: 8 }
            ];
            finishedDay = TaskEstimate.estimateFinishDay(tasks, new Date('2017-05-20'));
            assert.equal(finishedDay.toString(), new Date('2017-05-22').toString());
        });

        it('should return the right day if total estimated time is greater than 80', function() {
            let tasks = [
                { id: 1, title: "Làm việc phải đúng giờ", estimated: 50, consumed: 5 },
                { id: 2, title: "Không đúng cũng không sao", estimated: 38, consumed: 8 }
            ];
            let finishedDay = TaskEstimate.estimateFinishDay(tasks, new Date('2017-05-19'));
            assert.equal(finishedDay.toString(), new Date('2017-06-02').toString());

            tasks = [
                { id: 1, title: "Làm việc phải đúng giờ", estimated: 50, consumed: 5 },
                { id: 2, title: "Không đúng cũng không sao", estimated: 78, consumed: 8 }
            ];
            finishedDay = TaskEstimate.estimateFinishDay(tasks, new Date('2017-05-19'));
            assert.equal(finishedDay.toString(), new Date('2017-06-09').toString());
        });
    });
});