import {TaskEstimate} from "../TaskEstimate";
/**
 * Created by Piggat on 5/19/2017.
 */
let assert = require('assert');

describe('User Story 01', function() {
    before('Prepare data for this suit', function() {

    });

    describe('Estimated finish day function', function () {
        it('should return the day we start our works if total estimated time equal to 8', function() {
            //all sample in this case should be implemented here
            let tasks = [
                { id: 1, title: "Làm việc phải đúng giờ", estimated: 5, consumed: 5 },
                { id: 2, title: "Không đúng cũng không sao", estimated: 3, consumed: 8 }
            ];
            let finishedDay = TaskEstimate.estimateFinishDay(tasks, new Date('2017-05-19'));
            assert.equal(finishedDay, new Date('2017-05-19'));
        });

        it('should return the day after we start our works if total estimated time equal to 9');

        it('should return the day that is next 3 days if total estimated time equal to or greater than 24 but less than 32');
    });

    after('Cleaning up data after finished this suit', function() {

    })
});