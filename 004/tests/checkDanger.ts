/**
 * Created by Piggat on 6/10/2017.
 */
import {XOChess, Coordinate} from "../XOChess";
/**
 * Created by Piggat on 6/3/2017.
 */
let assert = require('assert');

describe('XOChess class', function() {
    function assertCordArray(actual: Coordinate[], expected: Coordinate[]) {
        for (let expect of expected) {
            let isFound = false;
            for (let act of actual) {
                if (act.x == expect.x && act.y == expect.y) {
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                throw new Error(`Mảng thực tế thiếu phần tử {x:${expect.x}, y:${expect.y}}`);
            }
        }

        for (let act of actual) {
            let isFound = false;
            for (let expect of expected) {
                if (act.x == expect.x && act.y == expect.y) {
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                throw new Error(`Mảng thực tế thừa phần tử {x:${act.x}, y:${act.y}}`);
            }
        }
    }

    it('should be able to detect lines with 3 consecutive stones (column)', function () {
        let board:number[][] = [
            [0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:0,y:2}, {x:4,y:2}
        ];

        assertCordArray(moves, expected);
    });

    it('should be able to detect lines with 3 consecutive stones (row)', function () {
        let board:number[][] = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:2,y:0}, {x:2,y:4}
        ];

        assertCordArray(moves, expected);
    });

    it('should be able to detect lines with 3 consecutive stones (diagon)', function () {
        let board:number[][] = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0],
            [0,0,0,1,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:6,y:1}, {x:2,y:5}
        ];

        assertCordArray(moves, expected);
    });

    it('should be able to detect line with 4 stones blocked in one side (column)', function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0],
            [0,0,2,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:6,y:2}
        ];

        assertCordArray(moves, expected);
    });

    it('should be able to detect line with 4 stones blocked in one side (row)', function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [2,1,1,1,1,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:2,y:5}
        ];

        assertCordArray(moves, expected);
    });

    it('should be able to detect line with 4 stones blocked in one side (diagon)', function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,0,1,0,0,0],
            [0,0,0,0,1,0,0],
            [0,0,0,0,0,2,0],
            [0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:0,y:0}
        ];

        assertCordArray(moves, expected);
    });

    it ('should be able to detect line with 4 or more stones, blocked in one side, but could be fill to make 5 stones (col)', function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,2,0,0,0,0],
            [0,0,0,0,1,0,0,0,0],
            [0,0,0,0,1,0,0,0,0],
            [0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:6,y:4}
        ];

        assertCordArray(moves, expected);
    });

    it ('should be able to detect line with 4 stones could be fill to make 5 stones (row)',function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [2,1,1,1,0,1,1,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:4,y:4}
        ];

        assertCordArray(moves, expected);
    });

    it ('should be able to detect line with 4 stones could be fill to make 5 stones (diagon)',function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,0,2,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];

        let moves = XOChess.checkDanger(board,1);
        let expected = [
            {x:5,y:4}
        ];

        assertCordArray(moves, expected);
    });

    it('should be able to detect double-check moves, which consists of two 3 consecutive stones');

    it('should be able to detect double-check moves, which consists of one 3 consecutive stones, and one 4 stones blocked in one side');

    it('should be able to detect triple-check moves');
});