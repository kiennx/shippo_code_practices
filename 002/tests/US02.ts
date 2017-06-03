import {IStock, ReportAnalysis} from "../ReportAnalysis";
/**
 * Created by Piggat on 5/27/2017.
 */
let assert = require('assert');

describe('User Story 002.2:', function() {
    describe('sortByIncrease function', function () {
        it('should be able to sort ASC', function() {
            let data:IStock[] = [
                {
                    code: 'VCB1',
                    increase: 5,
                    decrease: 6,
                    minNextMonth: 7,
                    maxNextMonth: 20
                },
                {
                    code: 'VCB2',
                    increase: 15,
                    decrease: 6,
                    minNextMonth: 7,
                    maxNextMonth: 20
                },
                {
                    code: 'VCB3',
                    increase: 10,
                    decrease: 6,
                    minNextMonth: 7,
                    maxNextMonth: 20
                }
            ];

            let result = ReportAnalysis.sortByIncrease(data,true);
            assert.equal(result[0].code, 'VCB1');
            assert.equal(result[1].code, 'VCB3');
            assert.equal(result[2].code, 'VCB2');
        });

        it('should be able to sort DESC', function() {
            let data:IStock[] = [
                {
                    code: 'VCB1',
                    increase: 5,
                    decrease: 6,
                    minNextMonth: 7,
                    maxNextMonth: 20
                },
                {
                    code: 'VCB2',
                    increase: 15,
                    decrease: 6,
                    minNextMonth: 7,
                    maxNextMonth: 20
                },
                {
                    code: 'VCB3',
                    increase: 10,
                    decrease: 6,
                    minNextMonth: 7,
                    maxNextMonth: 20
                }
            ];

            let result = ReportAnalysis.sortByIncrease(data,false);
            assert.equal(result[0].code, 'VCB2');
            assert.equal(result[1].code, 'VCB3');
            assert.equal(result[2].code, 'VCB1');
        });
    });

    describe('sortByForecastInstability function', function () {
        it('should be able to sort ASC', function() {
            let data:IStock[] = [
                {
                    code: 'VCB1',
                    increase: 5,
                    decrease: 6,
                    minNextMonth: 6,
                    maxNextMonth: 15
                },
                {
                    code: 'VCB2',
                    increase: 15,
                    decrease: 6,
                    minNextMonth: 9,
                    maxNextMonth: 12
                },
                {
                    code: 'VCB3',
                    increase: 10,
                    decrease: 6,
                    minNextMonth: 6,
                    maxNextMonth: 12
                }
            ];

            let result = ReportAnalysis.sortByIncrease(data,true);
            assert.equal(result[0].code, 'VCB2');
            assert.equal(result[1].code, 'VCB3');
            assert.equal(result[2].code, 'VCB1');
        });

        it('should be able to sort DESC', function() {
            let data:IStock[] = [
                {
                    code: 'VCB1',
                    increase: 5,
                    decrease: 6,
                    minNextMonth: 6,
                    maxNextMonth: 15
                },
                {
                    code: 'VCB2',
                    increase: 15,
                    decrease: 6,
                    minNextMonth: 9,
                    maxNextMonth: 12
                },
                {
                    code: 'VCB3',
                    increase: 10,
                    decrease: 6,
                    minNextMonth: 6,
                    maxNextMonth: 12
                }
            ];

            let result = ReportAnalysis.sortByForecastInstability(data,false);
            assert.equal(result[0].code, 'VCB1');
            assert.equal(result[1].code, 'VCB3');
            assert.equal(result[2].code, 'VCB2');
        });
    });
});