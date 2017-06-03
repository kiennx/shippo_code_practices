## 1. A game of wit 

## 2. Practice #1

### English ###

Given that we have a board of XO chess game as a 2d array as follow:

    0 1 0 0 0 0
    0 1 2 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0

In which:

- 0 means free cell
- 1 means player 1 have place a stone in it
- 2 means player 2 have place a stone in it

Write a function return if any of the players have won the game

    public static getPlayerWon(board:number[][]):number

Return 1 mean Player 1 have won.
Return 2 mean Player 2 have won.
Return 0 mean no player have won yet.

### Tiếng Việt ###

Nếu như chúng ta có một bàn cờ ca rô được thể hiện dưới dạng một mảng hai chiều giống như sau:

    0 1 0 0 0 0
    0 1 2 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0

Trong đó số 0 có nghĩa là đấy là một ô trống, số 1 có nghĩa là người chơi 1 đã đánh vào đó, số 2 có nghĩa là người chơi 2.

Viết một hàm cho phép xác định xem đã có người chơi chiến thắng hay chưa như sau:

    public static getPlayerWon(board:number[][]):number

Hàm trả về 1 nếu người chơi 1 thắng, 2 nếu người chơi 2 thắng, 0 nếu chưa có ai chiến thắng cả.

## 3. Practice #2

### English ###

In a normal game, a player should win if he has 5 stone in a straight line. But in some region, some player prefer that one should not win if in his move, his 5 stone has been blocked at both sides.

For example, in this board after player 2 have move:

    0 1 0 1 0 0 0
    0 1 2 2 0 0 0
    0 0 1 2 0 0 0
    0 0 1 2 0 0 0
    0 0 1 2 0 0 0
    0 0 1 2 0 0 0
    0 0 2 1 0 0 0

He shoud not win because his line has been already blocked by player 1.

Write a function check if player has won by this rule as follow:

    public static isPlayerWinWithoutBlocked(board: number[][], player:number):boolean

player: the player who has just move.
Return true if he should win the game, false if not.

### Tiếng Việt ###

Trong luật chơi thông thường, một người sẽ chiến thắng nếu như 5 quân của họ đạt thành một đường thẳng. Nhưng có một số nơi, người chơi lại thích quy định rằng nếu như 5 quân nhưng trước đó đã bị người chơi còn lại chặn hai đầu thì vẫn chưa phải là chiến thắng.

Ví dụ như, sau khi người chơi 2 đặt quân cờ của mình như sau:

    0 1 0 1 0 0 0
    0 1 2 2 0 0 0
    0 0 1 2 0 0 0
    0 0 1 2 0 0 0
    0 0 1 2 0 0 0
    0 0 1 2 0 0 0
    0 0 2 1 0 0 0

Người đó cũng chưa thắng được bởi vì đường thẳng của anh ta đã bị chặn bởi người chơi 1. 

Viết một hàm kiểm tra xem một người chơi đã thắng chưa theo luật chơi như trên như sau:

    public static isPlayerWinWithoutBlocked(board: number[][], player:number):boolean

Trong đó: board là bàn cờ, player là 1/2 chỉ người chơi vừa đặt quân cờ xong. Hàm trả về true nếu người chơi đó đã thắng, false nếu thua.

## Practice #3

public static countThreeStones(board: number[][], player: number)