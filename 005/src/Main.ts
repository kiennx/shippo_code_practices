import {GameOfLife} from "./GameOfLife";
/**
 * Created by Piggat on 6/17/2017.
 */

let Handlebars = require('handlebars');

let Game = {
    playing : false,
    interval: null,
    resetButtonState: function() {
        $('#start').prop('disabled', this.playing);
        $('#pause').prop('disabled', !this.playing);
        $('#randomize').prop('disabled', this.playing);
        $('#next').prop('disabled', this.playing);
    }
};

$(document).ready(()=> {

    //let boardTemplate = $('#board_template').html();
    //let renderBoard = Handlebars.compile(boardTemplate);
    let gameBoard = GameOfLife.createEmptyBoard(30,30);
    GameOfLife.renderBoard(gameBoard);

    Game.resetButtonState();

    $(document).on('click','.cell', function() {
        if (Game.playing) {
            return;
        }
        let col = $(this).data("col");
        let row = $(this).parent().data('row');
        gameBoard = GameOfLife.clickOnGameBoard(gameBoard, row, col);
        GameOfLife.renderBoard(gameBoard);
    });

    $(document).on('click', '#start', function() {
        Game.playing = true;
        Game.resetButtonState();
        Game.interval = setInterval(function() {
            gameBoard = GameOfLife.next(gameBoard);
            GameOfLife.renderBoard(gameBoard);
        }, 1000);
    });

    $(document).on('click', '#pause', function() {
        Game.playing = false;
        Game.resetButtonState();
        clearInterval(Game.interval);
    });

    $(document).on('click', '#next', function() {
        gameBoard = GameOfLife.next(gameBoard);
        GameOfLife.renderBoard(gameBoard);
    });

    $(document).on('click', '#randomize', function() {
        Game.playing = false;
        Game.resetButtonState();
        clearInterval(Game.interval);
        gameBoard = GameOfLife.randomize(gameBoard);
        GameOfLife.renderBoard(gameBoard);
    });
});