## 1. A game of wit 

## 2. Practice #1

Given that we have a board of XO chess game as a 2d array as follow:

0 1 0 0 0 0
0 1 2 2 0 0
0 0 1 2 0 0
0 0 1 2 0 0
0 0 1 2 0 0
0 0 1 2 0 0

In which:

0 means free cell
1 means player 1 have place a stone in it
2 means player 2 have place a stone in it

Write a function return if any of the players have won the game

    public static getPlayerWon(board:number[][]):number

Return 1 mean Player 1 have won.
Return 2 mean Player 2 have won.
Return 0 mean no player have won yet.

## 3. Practice #2

public static isPlayerWinWithoutBlocked(board: number[][], player:number):boolean

public static countThreeStones(board: number[][], player: number)