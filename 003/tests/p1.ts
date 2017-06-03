import {XOChess} from "../XOChess";
/**
 * Created by Piggat on 6/3/2017.
 */
let assert = require('assert');

describe('XOChess class', function() {
    it('should be able to check player 1 has won', function() {
        let board:number[][] = [
            [2,0,0,0,0,0,0],
            [0,0,0,1,2,0,0],
            [0,2,0,1,0,0,0],
            [0,0,0,1,0,0,0],
            [0,2,0,1,0,0,0],
            [0,0,0,1,0,2,0],
            [2,0,2,0,0,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),1);
    });

    it('should be able to check player 2 has won', function() {
        let board:number[][] = [
            [0,1,0,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,2,2,2,2,2,0],
            [0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0],
            [0,0,1,0,0,0,0],
            [0,1,0,0,0,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),2);
    });

    it('should be able to check on a rect board instead of square one', function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0,0],
            [0,0,1,0,2,0,0,0],
            [0,0,1,0,2,2,0,0],
            [0,0,1,0,2,2,0,0],
            [0,0,1,0,2,0,0,0],
            [0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),1);
    });

    it('should be able to return player 1 won even when his line is blocked', function() {
        let board:number[][] = [
            [0,0,2,0,0,0,0],
            [0,0,1,2,0,0,0],
            [0,0,1,2,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,2,0,0,0],
            [0,0,1,2,0,0,0],
            [0,0,2,0,0,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),1);
    });

    it('should be able to return player 1 won in a row', function() {
        let board:number[][] = [
            [0,0,2,0,0,0,0],
            [0,0,0,2,0,0,0],
            [0,0,0,0,2,0,0],
            [1,1,1,1,1,2,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),1);
    });

    it('should be able to return player 1 won in a column',function() {
        let board:number[][] = [
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,2,2,2,0],
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,2,0,0,0,0],
            [0,0,0,0,0,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),1);
    });

    it('should be able to return player 1 won in a diagon',function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,0,1,0,0,0],
            [0,0,0,0,1,0,0],
            [0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),1);

        board = [
            [0,0,0,0,0,0,0],
            [0,2,2,2,1,0,0],
            [1,0,2,1,2,0,0],
            [0,1,0,2,1,0,0],
            [0,0,1,0,0,2,0],
            [0,0,0,1,0,0,0],
            [0,0,0,0,1,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),1);
    });

    it('should be able to return that no one has won',function() {
        let board:number[][] = [
            [0,0,0,0,0,0,0],
            [0,1,0,2,0,1,0],
            [0,0,1,1,2,0,0],
            [0,1,2,2,2,1,0],
            [0,0,2,0,1,0,0],
            [0,1,0,0,0,1,0],
            [0,0,0,0,0,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),0);

        board = [
            [0,0,0,0,0,0,0],
            [0,0,1,0,2,0,0],
            [2,1,1,1,1,2,0],
            [0,2,1,1,1,2,0],
            [0,0,2,2,1,0,0],
            [0,0,0,1,1,2,0],
            [0,0,0,0,2,0,0]
        ];

        assert.equal(XOChess.getPlayerWon(board),0);
    });
});