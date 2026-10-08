# JLPT N4 - N3 Grammar Flashcards & Quiz Web App (Unit 9 - 12)

Ứng dụng web hỗ trợ ôn tập và kiểm tra ngữ pháp tiếng Nhật JLPT N4 - N3 (Unit 9, 10, 11, 12 - 21 mẫu ngữ pháp trọng tâm) với giao diện hiện đại, trực quan, hỗ trợ chế độ Sáng / Tối (Light & Dark Mode) và phát âm giọng đọc tiếng Nhật bản xứ qua Web Speech API.

---

## 🌟 Tính Năng Nổi Bật

### 1. 🎴 Thẻ Ghi Nhớ Ngữ Pháp 3D (Flashcards) - `index.html`
- **21 mẫu ngữ pháp JLPT N4 - N3 đầy đủ**: Bao gồm cấu trúc, giải thích ý nghĩa tiếng Việt và các câu ví dụ thực tế kèm phiên âm romaji / furigana và dịch nghĩa.
- **Lật thẻ 3D mượt mà**: Click để xem mặt sau của thẻ hoặc dùng phím cách (`Space`).
- **Phát âm tiếng Nhật chuẩn**: Tích hợp Web Speech API đọc to câu ví dụ và mẫu câu ngữ pháp.
- **Bộ lọc thông minh**: Lọc theo từng Unit (Unit 9, 10, 11, 12), lọc danh sách "Cần ôn tập" hoặc "Đã thuộc".
- **Tìm kiếm tức thì**: Tra cứu nhanh chóng theo từ khóa mẫu ngữ pháp hoặc ý nghĩa.
- **Chế độ xem tổng quan (Grid View)**: Xem toàn bộ các thẻ ngữ pháp dạng lưới bảng.

### 2. 📝 Hệ Thống Trắc Nghiệm 500 Câu (5 Bộ Đề Độc Lập) - `quiz.html`
- **5 Bộ đề độc lập (100 câu / đề)**: Tổng cộng 500 câu trắc nghiệm bao quát toàn bộ 21 mẫu ngữ pháp.
- **Xáo trộn ngẫu nhiên (Shuffle)**: Các câu hỏi được xáo trộn đan xen ngẫu nhiên giữa các Unit và mẫu ngữ pháp, mô phỏng sát kỳ thi thực tế. Hỗ trợ nút **"Xáo trộn câu hỏi"** để đảo đề bất kỳ lúc nào.
- **2 Chế độ làm bài linh hoạt**:
  - ⚡ **Luyện tập tức thì**: Hiển thị ngay đáp án đúng / sai và giải thích chi tiết ngay khi chọn phương án.
  - ⏱️ **Thi thử tính giờ**: Đồng hồ đếm ngược 60 phút, nộp bài mới chấm điểm, xếp loại kết quả và phân tích chi tiết từng Unit.
- **Bảng số câu hỏi (Palette)**: Dễ dàng nhảy đến bất kỳ câu nào trong 100 câu, đánh dấu cờ (bookmark) những câu phân vân để xem lại sau.
- **Phím tắt tiện lợi**:
  - `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D`: Chọn đáp án
  - `Mũi tên Trái / Phải`: Chuyển câu trước / sau
  - `F`: Đánh dấu cờ (Bookmark)
  - `S`: Nghe phát âm câu hỏi
  - `T`: Chuyển đổi giao diện Sáng / Tối

---

## 🚀 Hướng Dẫn Khởi Chạy Local

Bạn có thể chạy dự án nhanh chóng bằng bất kỳ máy chủ HTTP tĩnh nào:

### Cách 1: Sử dụng Python (khuyên dùng)
```bash
# Mở terminal tại thư mục dự án và chạy:
python -m http.server 3000
```
Sau đó mở trình duyệt truy cập:
- **Trang Flashcard**: `http://localhost:3000/index.html`
- **Trang Trắc nghiệm**: `http://localhost:3000/quiz.html`

### Cách 2: Sử dụng Node.js `npx serve`
```bash
npx -y serve -p 3000
```

### Cách 3: Sử dụng VS Code Live Server
Mở thư mục trong VS Code và nhấn **Go Live** ở góc dưới màn hình.

---

## 📂 Cấu Trúc Dự Án

```
TNGK/
├── index.html          # Trang chủ ứng dụng Flashcard ôn tập ngữ pháp
├── style.css           # Giao diện CSS hiện đại cho Flashcard (Light & Dark theme)
├── app.js              # Logic ứng dụng Flashcard (lật thẻ, âm thanh, lọc, tìm kiếm)
├── data.js             # Dữ liệu 21 mẫu ngữ pháp trích xuất từ Unit 9 - 12
├── quiz.html           # Trang trắc nghiệm luyện tập và thi thử tính giờ
├── quiz.css            # Giao diện CSS cho trang trắc nghiệm
├── quiz.js             # Logic trang trắc nghiệm (chấm điểm, timer, chuyển bộ đề, xáo trộn)
├── quiz_data.js        # Ngân hàng 500 câu hỏi trắc nghiệm chia thành 5 bộ đề
├── README.md           # Hướng dẫn dự án
└── drive-download-.../ # Tài liệu PDF gốc (Unit 9, 10, 11, 12)
```
