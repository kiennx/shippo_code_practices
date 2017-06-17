/**
 * Created by Piggat on 6/17/2017.
 */
export class GameOfLife {
    private static _renderBoard = require('./board.hbs');

    public static createEmptyBoard(width: number, height: number) {
        let board: number[][] = [];
        for (let ii = 0; ii < height; ii++) {
            let row:number[] = [];
            for (let jj = 0; jj < width; jj++) {
                row.push(0);
            }
            board.push(row);
        }
        return board;
    }

    public static clickOnGameBoard(board: number[][], row, col) {
        board[row][col] = board[row][col] == 0 ? 1 : 0;
        return board;
    }

    public static renderBoard(board: number[][]) {
        let boardRendered = this._renderBoard(board);
        $('#board').html(boardRendered);
    }

    public static randomize(board: number[][]) {
        for (let ii = 0; ii < board.length; ii++) {
            let row = board[ii];
            for (let jj = 0; jj < row.length; jj++) {
                board[ii][jj] = Math.random() > 0.7 ? 1 : 0;
                console.info(board[ii][jj], ii, jj);
            }
        }
        return board;
    }

    /**
     * Next stages of this game board
     * @param board
     * @returns {number[][]}
     */
    public static next(board:number[][]):number[][] {
        console.debug('next stage of game');
        return board;
    }

    /**
     * Next stages of this gameboard using rule B36/S23
     * @param board
     */
    public static nextHighLife(board: number[][]):number[][] {
        return board;
    }

    /**
     * Next stages of this gameboard, using custom rule by format Bxxx/Sxxx
     * @param board
     * @param rules
     */
    public static nextByRule(board: number[][], rules:string):number[][] {
        return board;
    }
}