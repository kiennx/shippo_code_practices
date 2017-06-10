## 1. Defensive before offensive

### English ###

This week we will return to our XO chess game, with more strategy in mind!

Last week, we have created a function to determine if any player has won the game. I wont say that it's the first part of my long time plan that will make you create an AI that could play XO Chess. Oops, I did it again...

So, place our mind in the game. Our "AI" should have known when his opponent or its should be the victory one. But we should teach it more about strategy of an XO game.

In this practice, we will teach him how to defend again attacks. Or, to block the other player line.

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

An Coordinate is a interface with two number x, y to give a position on the board.

Write a function to detect if a player have any "check" moves that should be blocked.

    public static checkDanger(board:number[][], player: number):Coordinate[]

this function should return an array of coordinate that "player" should be place stones on to block his opponents line. It means that any three stones without any obstacle should give two coordinate to block, and you should think about any other "check" moves. Note that, this function should only thinks about defensive, not about offensive, that means if there are moves that do not block enemy lines, but place we on the victory side, we do not consider it yet.

Hint: there are many moves that should be blocked. You should write all of them down first, then do your work one by one, to have best results.

### Tiếng Việt ###

Tuần này, chúng ta sẽ quay trở lại với trò chơi cờ ca rô, nhưng trong đầu cần có phải có chiến thuật hơn.

Tuần trước, chúng ta đã viết một hàm xác định xem một người chơi đã giành được chiến thắng trong trò chơi này. Tôi sẽ không tiết lộ cho các bạn biết rằng, từng bước từng bước chúng ta đang làm đang dẫn đến việc tạo ra một con AI đơn giản có thể chơi được cờ ca rô (nhưng không giỏi) đâu... Ừm, có vẻ như có gì đó không ổn.

Dù sao thì, quay trở lại với trò chơi của chúng ta. Kỳ thủ nhân tạo của chúng ta đã biết khi nào thì nó hoặc đối thủ giành chiến thắng. Nhưng để nó có thể chơi được, chúng ta cần dạy cho nó một số chiến thuật nữa.

Tuần này, chúng ta sẽ dạy cho nó biết làm thế nào để có thể chặn được những đòn tấn công từ phía đối thủ. Hay chính xác hơn là chặn khi gặp thế sắp thua.

Nếu như chúng ta có một bàn cờ ca rô được thể hiện dưới dạng một mảng hai chiều giống như sau:

    0 1 0 0 0 0
    0 1 2 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0
    0 0 1 2 0 0

Trong đó số 0 có nghĩa là đấy là một ô trống, số 1 có nghĩa là người chơi 1 đã đánh vào đó, số 2 có nghĩa là người chơi 2.

Một interface Coordinate bao gồm hai thuộc tính là x, y thể hiện một tọa độ trên bàn cờ. 

Viết một hàm cho phép xác định xem đã có người chơi có những nước cờ nào nguy hiểm cần chặn lại như sau:

    public static checkDanger(board:number[][], player: number):Coordinate[]

Hàm trả về một mảng các tọa độ, mỗi tọa độ là một nước đi cho phép chặn đối thủ. Ở đây chúng ta sẽ trả về tất cả các tọa độ có thể dùng để chặn nước thắng của đối phương, ngay kể cả khi đối phương đã có nước đôi. Tức là với mỗi 3 quân cờ thẳng hàng của đối phương, hàm này sẽ trả về tọa độ hai điểm 2 đầu dùng để chặn lại nước tiếp theo (tạo thành 4 quân cờ liên tiếp không chặn, tương đương với việc sẽ không thể cứu vãn tình thế). Chú ý rằng hàm này chúng ta tạm thời chỉ quan tâm đến việc phòng thủ, chưa quan tâm đến những nước cờ, tuy không mang tính chặn đối phương, nhưng lại khiến cho đối phương chưa thể thắng ngay được.

Tạm thời để đơn giản, chúng ta sẽ bỏ qua trường hợp đối phương đã có 4 quân không chặn, hoặc 5 quân bị chặn (tức là đã thua).

Gợi ý: sẽ có rất nhiều nước cờ mang tính "chiếu", và cần chặn lại nếu không muốn bị thua. Theo đúng tinh thần TDD, các bạn hãy cố gắng **liệt kê ra hết các trường hợp như vậy**, **sau đó mới dần dần code để giải quyết từng tình huống** để có được kết quả tốt nhất (vì tôi cho rằng, với lượng thời gian khá ngắn, các bạn sẽ không thể vượt qua hết được các case đặt ra).