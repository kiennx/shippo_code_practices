import {ReportAnalysis} from "../ReportAnalysis";
/**
 * Created by Piggat on 5/27/2017.
 */
let assert = require('assert');

describe('User Story 002.1:', function() {
    describe('Report analysis', function () {
        it('should be able to extract stock from normal text format', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán BVH (1.2, 1, 12-14) thật vi diệu");
            assert.equal(result.length, 1);

            let item = result[0];
            assert.equal(item.code, 'BVH');
            assert.equal(item.increase, 1.2);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 12);
            assert.equal(item.maxNextMonth, 14);
        });

        it('should be able to extract stock from text with more white spaces', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCB (3.4,  1,\t98-112) thật vi diệu");
            assert.equal(result.length, 1);

            let item = result[0];
            assert.equal(item.code, 'VCB');
            assert.equal(item.increase, 3.4);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 98);
            assert.equal(item.maxNextMonth, 112);
        });

        it('should be able to extract stock from text with long number', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCB (3.4, 1, 20000-50000) thật vi diệu");
            assert.equal(result.length, 1);

            let item = result[0];
            assert.equal(item.code, 'VCB');
            assert.equal(item.increase, 3.4);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 20000);
            assert.equal(item.maxNextMonth, 50000);
        });

        it('should be able to extract stock from text with more decimal than 1', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCB (3.45, 1, 98-112) thật vi diệu");
            assert.equal(result.length, 1);

            let item = result[0];
            assert.equal(item.code, 'VCB');
            assert.equal(item.increase, 3.45);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 98);
            assert.equal(item.maxNextMonth, 112);
        });

        it('should be able to extract stock with decimal forecast price', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCB (3.4, 1, 98.5-112) thật vi diệu");
            assert.equal(result.length, 1);

            let item = result[0];
            assert.equal(item.code, 'VCB');
            assert.equal(item.increase, 3.4);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 98.5);
            assert.equal(item.maxNextMonth, 112);
        });

        it('should be able to extract stock with code more than 3 character', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCBD (3.4, 1, 98-112) thật vi diệu");
            assert.equal(result.length, 1);

            let item = result[0];
            assert.equal(item.code, 'VCBD');
            assert.equal(item.increase, 3.4);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 98);
            assert.equal(item.maxNextMonth, 112);
        });

        it('should be able to extract stock with code contains number', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCB5 (3.4, 1, 98-112) thật vi diệu");
            assert.equal(result.length, 1);

            let item = result[0];
            assert.equal(item.code, 'VCB5');
            assert.equal(item.increase, 3.4);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 98);
            assert.equal(item.maxNextMonth, 112);
        });

        it('should be able to ignore lower case stock code', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán vcb5 (3.4, 1, 98-112) thật vi diệu");
            assert.equal(result.length, 0);
        });

        it('should be able to extract stock from text with no white space', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCB(3.5,1,98-112) thật vi diệu");
            assert.equal(result.length, 1);

            let item = result[0];
            assert.equal(item.code, 'VCB');
            assert.equal(item.increase, 3.5);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 98);
            assert.equal(item.maxNextMonth, 112);
        });

        it('should be able to extract more than one stock code', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCB (3.5, 1, 98-112), BVH (1.2, 1, 12-14) thật vi diệu");
            assert.equal(result.length, 2);

            let item = result[0];
            assert.equal(item.code, 'VCB');
            assert.equal(item.increase, 3.5);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 98);
            assert.equal(item.maxNextMonth, 112);

            item = result[1];
            assert.equal(item.code, 'BVH');
            assert.equal(item.increase, 1.2);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 12);
            assert.equal(item.maxNextMonth, 14);
        });

        it('should be able to extract more than one lines', function() {
            let result = ReportAnalysis.analyst("mã chứng khoán VCB (3.5,1,98-112),\r\n BVH (1.2, 1, 12-14)\r\n thật vi diệu");
            assert.equal(result.length, 2);

            let item = result[0];
            assert.equal(item.code, 'VCB');
            assert.equal(item.increase, 3.5);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 98);
            assert.equal(item.maxNextMonth, 112);

            item = result[1];
            assert.equal(item.code, 'BVH');
            assert.equal(item.increase, 1.2);
            assert.equal(item.decrease, 1);
            assert.equal(item.minNextMonth, 12);
            assert.equal(item.maxNextMonth, 14);
        });
    });
});