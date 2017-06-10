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


});