# 1. Slow down with Game of life

## English ##

After last week's failure, we will return to one of our more simple problem that we have tried in the past: Game of life.

In this practice, we already have a basic project structure as you can see in the code. You should run npm install to get all module needed for this problem.

### Conway's game of life

Well, according to wikipedia, The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Given that we have this universe of this game as an 2D array of integer as

    0 0 0 1 0
    0 1 0 0 1
    1 0 0 0 1
    1 1 0 0 0
    0 1 1 0 1
    
In which 1 and 0 is the state of that cell, and 1 mean populated cell, 0 mean free cell.

Write 3 functions to solve the game of life as:

#### 1. General rules


    public static next(board:number[][])

This will advance our board game state into its next stage, using default rule as above.

#### 2. High life rules


    public static nextHighLife(board: number[][])

This will advance our board game state into its next stage, using new rules as below:

1. Any live cell with 2 or 3 live neighbours survives, otherwise, it will be come dead.
2. Any free cell with 3 or 6 live neighbours should be come populated

#### 3. Any custom rules

    public static nextByRule(board: number[][], rules:string)

This will advance our board game state into its next stage, using custom rules. The rules are being store in a string as:

B36/S23: like our high life rules above, a cell will be BORN if it has 3 or 6 neighbours. A cell will SURVIVE if it has 2 or 3 neighbours, otherwise, it will be dead.

B1234/S1234: BORN if 1,2,3 or 4. SURVIVE if 1,2,3 or 4.

Bxxxxx/Sxxxxx

We won't have any Vietnamese version for this week. Because I do not want to. Feel free to use Google Translate.

Tips: to run this game in browser, use command:

./node_modules/.bin/webpack.cmd --config 005/webpack.config.js (on windows)

then you can just open index.html with your browser, and play the game.