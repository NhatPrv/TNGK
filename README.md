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

### 2. 📝 Hệ Thống Trắc Nghiệm Toàn Diện (7 Bộ Đề) - `quiz.html`
- **5 Bộ đề luyện thi JLPT (100 câu / đề)**: 500 câu trắc nghiệm điền câu hoàn chỉnh mô phỏng đề thi JLPT N4 - N3.
- **2 Bộ đề chuyên sâu ôn 21 ngữ pháp cốt lõi (42 câu / đề)**:
  - 🌐 **Ngữ pháp ➔ Nghĩa TV**: Đưa ra mẫu ngữ pháp tiếng Nhật và cấu trúc kết hợp, chọn nghĩa tiếng Việt chính xác trong 4 phương án (không cần dịch cả câu dài).
  - 🇻🇳 **Nghĩa TV ➔ Ngữ pháp**: Đưa ra ý nghĩa tiếng Việt hoặc tình huống sử dụng, chọn mẫu ngữ pháp tiếng Nhật tương ứng.
- **Xáo trộn ngẫu nhiên (Shuffle)**: Toàn bộ câu hỏi được phân bổ ngẫu nhiên; có nút **"Xáo trộn câu hỏi"** để đảo thứ tự bất kỳ lúc nào.
- **2 Chế độ làm bài linh hoạt**:
  - ⚡ **Luyện tập tức thì**: Ẩn mẫu ngữ pháp khi chưa trả lời; chọn đáp án xong sẽ lập tức hiện ngữ pháp, kết quả đúng/sai và giải thích chi tiết.
  - ⏱️ **Thi thử tính giờ**: Đồng hồ đếm ngược 60 phút, nộp bài mới chấm điểm, xếp loại kết quả và phân tích chi tiết từng Unit.
- **Bảng số câu hỏi (Palette)**: Dễ dàng nhảy đến bất kỳ câu hỏi nào, đánh dấu cờ (bookmark) những câu phân vân để xem lại sau.
- **Hỗ trợ học tập thông minh**:
  - 🈳 **Furigana trên Hán tự**: Tích hợp phiên âm hiragana nhỏ trên đầu chữ Hán (chuẩn `<ruby>`), có nút `あ` bật/tắt linh hoạt.
  - 💡 **Gợi ý dịch câu (chừa chỗ trống)**: Nút bóng đèn mở bản dịch tiếng Việt của câu nhưng giữ lại chỗ trống `（......）`, giúp hiểu nghĩa xung quanh khi chưa dịch được.
  - 🔒 **Bảo mật đề thi**: Ẩn hoàn toàn Unit và mẫu ngữ pháp trước khi chọn đáp án để rèn luyện tư duy thực tế.
- **Phím tắt tiện lợi**:
  - `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D`: Chọn đáp án
  - `Mũi tên Trái / Phải`: Chuyển câu trước / sau
  - `H`: Bật/Tắt gợi ý dịch nghĩa câu (chừa chỗ trống)
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
