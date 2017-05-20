## 1. What is TDD?
TDD is acronym for Test-Driven-Development. You could enter "TDD" into Google to know more about the term. This program will not contains definition or any thing more specific about TDD. Instead, we will dive into practices.

Because our team consists of testers and developers, and our testers lack the skill required to fully exercises those practices, we randomly pick one tester to match with one developer to create some "pairs". The upside is we could practice one more XP trick here: pair programming.

So we will practice both TDD and Pair Programming at the same time.

#2. Practice #1
### English ###
User story: As dev team, we want to estimate when we will have all task completed (in a sprint).

We have a list of todo tasks stored in an array as below:

    [ { id: 1, title: "You should work on time", estimated: 5, consumed: 5 },
    {id: 2, title: "But being late is not too bad", estimated: 3, consumed: 8 }
    ]

We have known that each day each one of us should have 8 working hours. Write a function that will give us the day one could complete all these tasks as estimated. Input should be the array and the day he start working on these task. Output should be the day he finish his works if he work 8 hours per day non-stop.

Example: with the data provided, we should have:

    getFinishedDay(tasks, new Date('2017-05-19')) should return 2017-05-19
    getFinishedDay(tasks, new Date('2017-05-29')) should return 2017-05-29
    
In this practices we should focus on TDD work-flow process. Firstly, we will create test cases based on the requirements given. After that, we should have cases that don't pass AND we will have the interface of the function we should write.

Now, when we have all the cases, we should start working on coding.  

### Tiếng Việt ###
User story: Là dev team, chúng tôi muốn có thể dự tính được thời gian hoàn thành công việc trong sprint.

Có một danh sách các task được thể hiện dưới dạng một mảng như sau:

    [ { id: 1, title: "Làm việc phải đúng giờ", estimated: 5, consumed: 5 },
    {id: 2, title: "Không đúng cũng không sao", estimated: 3, consumed: 8 }
    ]

Biết một ngày làm việc là 8 tiếng, viết hàm tính toán số ngày dự kiến để một người có thể làm hết các task, đầu vào của hàm là mảng danh sách nói trên và ngày bắt đầu làm việc, hàm sẽ trả về ngày hoàn thành được hết các task nếu như làm việc liên tục.

Ví dụ: với dữ liệu như trên chúng ta sẽ có

    getFinishedDay(tasks, new Date('2017-05-19')) sẽ trả về ngày 2017-05-19
    getFinishedDay(tasks, new Date('2017-05-29')) sẽ trả về ngày 2017-05-29

Trong bài tập này, chúng ta sẽ tập trung vào quá trình phát triển theo hướng TDD. Đầu tiên, chúng ta sẽ tạo ra những unit test case dựa trên yêu cầu đưa ra. Sau đó, chúng ta sẽ có một loạt các test case chắc chắn là không thể pass được, nhưng đồng thời chúng ta cũng đã có interface của cái hàm cần viết.

Bây giờ, sau khi đã có đầy đủ các test case, chúng ta sẽ bắt đầu code.

#3. Practice #2

### English ###
User story: As dev team, we want to have weekend holidays at Saturday and Sunday.

As you know, our working days are 5 day per week (weekend are Saturday and Sunday). Upgrade the function we have written to reflect that.

Example: with the data provided, we should have:

    getFinishedDay(tasks, new Date('2017-05-19')) should return 2017-05-19
    getFinishedDay(tasks, new Date('2017-05-20')) should return 2017-05-22

In this practice, we should see what will happen when we build another feature on top of existing feature. 

### Tiếng Việt ###

User story: Là dev team, chúng tôi muốn được nghỉ các ngày thứ bảy chủ nhật.

Lịch làm việc là 5 ngày/tuần (nghỉ thứ bảy chủ nhật), hãy nâng cấp hàm nói trên để có thể tính được ngày dự kiến hoàn thành hết các task sau khi đã trừ đi ngày nghỉ cuối tuần không làm việc.

Ví dụ: với dữ liệu như trên chúng ta sẽ có

    getFinishedDay(tasks, new Date('2017-05-19')) sẽ trả về ngày 2017-05-19
    getFinishedDay(tasks, new Date('2017-05-20')) sẽ trả về ngày 2017-05-22