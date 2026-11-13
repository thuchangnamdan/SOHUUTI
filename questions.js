/* KHO CÂU HỎI – khoá "vòng-chặng-mức" (mức: d=Dễ, t=Thường, k=Khó). Ví dụ '3-2-k' = Vòng 3, Chặng 2, mức Khó.
   Các dạng câu (t):
   mc    {t:'mc',q:'Đề',o:['A','B','C','D'],a:3,e:'Lời giải & lỗi sai'}      a = vị trí đáp án đúng (0,1,2,...). Đúng/Sai cũng dùng mc với o:['Đúng','Sai']. Bắt lỗi sai cũng dùng mc.
   fill  {t:'fill',q:'Đề',a:['-1/4','-0,25'],e:'...'}                        a = các đáp án chấp nhận (tự hiểu phân số/thập phân)
   match {t:'match',q:'Đề',L:['0,75','-1,5'],R:['3/4','-3/2'],a:[0,1],e:'...'}  a[i] = vị trí ô bên phải ghép với ô trái i
   order {t:'order',q:'Đề',o:['-1','-1/3','0,5'],e:'...'}                     o = thứ tự ĐÚNG (hệ thống tự xáo trộn). Dùng cho sắp xếp và sắp xếp bước giải
   tfm   {t:'tfm',q:'Đề',s:['ý 1','ý 2'],a:[true,false],e:'...'}              Đúng/Sai tổ hợp
   nl    {t:'nl',q:'Đề',lo:-1,hi:2,den:2,a:1,e:'...'}                         trục số từ lo đến hi, mỗi đơn vị chia den phần; a = tử số vạch đúng (a/den)
   Tuỳ chọn: h:'gợi ý cho Pháp sư', g:'tên dạng bài để thống kê' (mặc định theo vòng). */
const QB={
'1-1-d':[
{t:'mc',q:'Tập hợp các số hữu tỉ được kí hiệu là gì?',o:['Z','R','N','Q'],a:3,e:'N là tập số tự nhiên, Z là số nguyên, R là số thực, còn Q là kí hiệu của tập số hữu tỉ.'},
{t:'mc',q:'Số nào sau đây KHÔNG phải là số hữu tỉ?',o:['0','-3/4','5/0','1,25'],a:2,e:'Số hữu tỉ viết được dưới dạng a/b với a, b ∈ Z và b ≠ 0. Vì 5/0 có mẫu bằng 0 nên không xác định.'},
{t:'mc',q:'Khẳng định: “Số nguyên -5 là một số hữu tỉ” là Đúng hay Sai?',o:['Đúng','Sai'],a:0,e:'Mọi số nguyên a đều viết được dưới dạng a/1 nên là số hữu tỉ (-5 = -5/1).'},
{t:'mc',q:'Trong các số sau, số nào là số hữu tỉ dương?',o:['-2/3','0','3/4','-5'],a:2,e:'Số hữu tỉ lớn hơn 0 là số hữu tỉ dương. Số 0 không dương cũng không âm.'}],
'1-1-t':[
{t:'mc',q:'Số hữu tỉ nào sau đây là số hữu tỉ âm?',o:['(-4)/(-9)','(-3)/(-5)','0/(-3)','2/(-7)'],a:3,e:'Phân số có tử và mẫu trái dấu là số âm (2/(-7) = -2/7 < 0). Lưu ý (-4)/(-9) = 4/9 là số dương.'},
{t:'fill',q:'Viết số thập phân -0,25 dưới dạng phân số tối giản:',a:['-1/4'],e:'-0,25 = -25/100. Chia cả tử và mẫu cho 25 ta được -1/4.'},
{t:'match',q:'Ghép mỗi số thập phân với phân số tối giản bằng nó:',L:['0,75','-1,5','0,2','-0,125'],R:['-1/8','3/4','-3/2','1/5'],a:[1,2,3,0],e:'Đổi số thập phân sang phân số thập phân rồi rút gọn (ví dụ -0,125 = -125/1000 = -1/8).'},
{t:'mc',q:'Hỗn số -2 1/3 viết dưới dạng phân số là:',o:['-5/3','-7/3','7/3','-6/3'],a:1,e:'Bẫy: nhiều em tính (-2).3 + 1 = -5. Cách đúng: giữ dấu trừ trước hỗn số: -(2.3 + 1)/3 = -7/3.'}],
/* Mẫu các dạng nl và order (lấy từ Vòng 1 – Chặng 3) */
'1-3-d':[
{t:'nl',q:'Đặt điểm biểu diễn số 1/2 trên trục số (mỗi đơn vị chia 2 phần bằng nhau):',lo:-1,hi:2,den:2,a:1,e:'1/2 nằm bên phải điểm 0, cách 0 một khoảng bằng 1/2 đơn vị.'},
{t:'order',q:'Sắp xếp các số theo thứ tự tăng dần: -1 ; -1/3 ; 0,5 ; 3/4',o:['-1','-1/3','0,5','3/4'],e:'-1 < -1/3 < 0 < 0,5 (2/4) < 3/4.'},
{t:'mc',q:'Trên trục số nằm ngang, số hữu tỉ âm nằm ở phía nào của điểm 0?',o:['Bên phải điểm 0','Bên trái điểm 0','Trùng với điểm 0'],a:1,e:'Chiều dương hướng từ trái sang phải, số âm nằm bên trái số 0.'}]
/* ← Thêm các chặng còn lại ở đây, cùng định dạng, ngăn cách bằng dấu phẩy */
};
