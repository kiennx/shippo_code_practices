##1. Why regex? ##

Regex, or Regular Expression is very helpful when it comes to write Automation Test at Acceptance Tests level. As everything else, your skill in Regex only improve if you write its **Expression** **Regular**ly.

##2. Practice #1 ##

### English ###

This practice was provided by Mr. Luu Trong Hieu ([https://github.com/tronghieu](https://github.com/tronghieu)).

A Securities Company send a detailed report contains information and its forecast about stock codes that its customer following monthly. For example: VNM (5, 3.5, 145-154), VNM is the stock code, 5 is the largest price increase in a session in that month, 3.5 is the largest decrease, 145-154 is their forecast for next month (it mean the price could be from 145.000đ to 154.000đ). Know that stock code only contain A-Z characters and numeric.

**User story:** As an investor, I want to get only the stock code with its information from the long and detail report.

Write a function that accept the detail report as params, and return list of stock codes, each one as follow:

    { code: "VNM", increase: 5, decrease: 3.5, minNextMonth: 145, maxNextMonth: 154 }

Example of the report could be seen at the end of Vietnamese content below.

### Tiếng Việt ###

***Nội dung bài thực hành này do anh Lưu Trọng Hiếu ([https://github.com/tronghieu](https://github.com/tronghieu)) cung cấp.***

Một công ty chứng khoán hàng tháng sẽ xuất ra một báo cáo các mã chứng khoán mà khách hàng quan tâm, gồm biên độ thay đổi giá lớn nhất trong phiên giao dịch (theo phần trăm), dự đoán mức giá trong tháng tiếp theo. Ví dụ: VNM (5, 3.5, 145-154), VNM là mã chứng khoán, 5 là biên độ tăng giá lớn nhất trong phiên giao dịch tháng vừa qua và 3.5 là biên độ giảm giá lớn nhất trong phiên giao dịch tháng vừa qua, 145-154 là giá cổ phiếu dự đoán trong tháng tiếp theo từ 145.000đ đến 154.000đ/1 cổ phiếu. Mã chứng khoán chỉ cho phép ký tự a-z viết hoa và chữ số.

**User Story:** Là nhà đầu tư chứng khoán, tôi muốn có thể lấy nội dung các mã chứng khoán và thông tin của nó từ nội dung báo cáo do công ty chứng khoán gửi để tiện thống kê.

Viết hàm tiếp nhận tham số là nội dung bản báo cáo và trả về danh sách các thông tin mã chứng khoán theo định dạng như sau:

    { code: "VNM", increase: 5, decrease: 3.5, minNextMonth: 145, maxNextMonth: 154 }

> **NỘI DUNG BẢN BÁO CÁO MẪU**
>
> **SAMPLE REPORT**
>
> Xu hướng: Chỉ số vẫn đang trong nhịp giảm hoàn bù cho giai đoạn tăng từ 514 đến 691 điểm. Biên độ dao động được tái lập trong khoảng 660-670 điểm.
> 
> - Mức điểm kháng cự: 670; 680;
> - Mức điểm hỗ trợ: 640; 650;
> 
> Chốt phiên 14/12, chỉ số VN-Index đảo chiều tăng tới 10.48 điểm lên dừng ở mốc 655.14 điểm. Với diễn biến này thì đà giảm tiêu cực đã tạm dừng và chỉ số nhanh chóng lấy lại toàn bộ số điểm để mất trong 02 phiên đầu tuần. Đây là tín hiệu mang ý nghĩa cải thiện mạnh đối với tâm lý khi mà phần đông nhà đầu tư đang tỏ ra khá bi quan, thận trọng.
> 
> Thân nến giao dịch của VN-Index phiên hôm nay là một Bullish marubozu thể hiện bên mua đã hoàn toàn lấy lại vai trò kiểm soát thị trường. Một dấu hiệu tích cực khác là đường giá của VN-Index đã đồng thời vượt lên khỏi cận trên của kênh hồi quy 01 tháng và đường SMA 12 ngày. Nhóm cổ phiếu bảo hiểm ngân hàng gồm: BID (3, 1.5, 31-43), STB (2.5, 1, 46-42), VCB (3.4, 1, 98-112), BVH (1.2, 1, 12-14) có tín hiệu khả quan khi giữ được đà tăng. Nhóm cổ phiếu bất động sản gồm: D2D (0.8, 1.2, 15-8), ITA (0.5, 1.2, 10-8) ảm đạm. Ngoài ra, tín hiệu giao cắt này cũng đạt được sự đồng thuận từ phía dòng tiền khi khối lượng khớp lệnh của sàn HSX đạt mức cao tương đương 115 triệu đơn vị (sau khi loại trừ khối lượng đột biến tại mã HQC (1.2, 1.5, 32-36)). Theo đó, những tín hiệu bi quan được tạo ra bởi 02 phiên giảm trước đó đã bị triệt tiêu phần lớn và kỳ vọng hồi phục có khả năng quay trở lại với diễn biến tuần của sàn HSX.
> 
> Về chỉ báo, đường MACD thu hẹp phân kỳ âm cùng cặp DI+/- có dấu hiệu hội tụ là những tín hiệu cho thấy rủi ro điều chỉnh đã được giảm bớt. Tuy nhiên, trước khi có được sự đồng thuận từ các chỉ báo khối lượng giao dịch và tính biến động thì hành động đón đầu xu hướng tăng giá vẫn cần phải thận trọng. Nhóm các cổ phiếu ngàng sản xuất: HPG (4, 4.9, 35.5-29), VSC6 (3.9, 4, 32-45), NTP (5,1.1, 45-79), PTB (2.3, 1, 112-145) sẽ vẫn giữ mức ổn định do tình hình sản xuất đầu năm khả quan.
> 
> Trong tháng tiếp theo, nhà đầu tư sẽ đón nhận thông tin về kết quả cuộc họp lãi suất của Fed. Đây là yếu tố có khả năng ảnh hưởng lớn đến biến động thị trường chứng khoán toàn cầu và tác động đến tâm lý trên thị trường chứng khoán Việt Nam. Do đó, các nhà đầu tư tiếp tục được khuyến nghị duy trì trạng quan sát, không vội vàng tham gia bắt đáy cho đến khi xuất hiện tín hiệu tin cậy cho khả năng của xu hướng tăng giá mới.

## 3. Practice #2 ##

### English ###

User story: as an investor, I want to sort the list I received by: largest increase in a trading session, the instability in the forecast and the price of that stock.

From the data we received in the last practice, create functions to sort by these field. The instability in the forecast should be different between min and max in the forecast.

### Tiếng Việt ###

User story: Là nhà đầu tư, tôi muốn có thể sắp xếp danh sách các mã chứng khoán theo: biên độ tăng giá cao nhất trong một phiên, khoảng giá dự đoán, giá theo thứ tự tăng dần hoặc giảm dần

Từ dữ liệu nhận được từ trước (là mảng các đối tượng như đã mô tả ở Practice #2), viết hàm sắp xếp theo các thông tin như trên, trong đó khoảng giá dự đoán được hiểu là độ rộng của khoảng dự đoán (bằng giá trị tối đa trừ đi giá trị tối thiểu)

    sortByIncrease(list, isAsc: boolean = true)
    sortByForecastInstability(list, isAsc: boolean = true)
    sortByPrice(list, isAsc: boolean = true)
