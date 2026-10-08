// Bộ dữ liệu 5 bộ đề thi trắc nghiệm ngữ pháp tiếng Nhật (500 câu)
// Đã được xáo trộn ngẫu nhiên đan xen các Unit và ngữ pháp
const QUIZ_SETS = {
  "1": [
    {
      "id": 1,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "天気が良かった（　　）、富士山の頂上まできれいに見えました。",
      "options": [
        "おかげで",
        "恐れがあって",
        "ごとに",
        "せいで"
      ],
      "answer": 0,
      "translation": "Nhờ thời tiết đẹp nên ngắm rõ đỉnh núi Phú Sĩ.",
      "explanation": "Đáp án đúng là A. Nguyên nhân tích cực."
    },
    {
      "id": 2,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "失敗する（　　）改善点を見つけていけば、必ず成長できる。",
      "options": [
        "せいで",
        "っぽく",
        "として",
        "ごとに"
      ],
      "answer": 3,
      "translation": "Cứ mỗi lần thất bại nếu tìm ra điểm khắc phục thì sẽ trưởng thành.",
      "explanation": "Đáp án đúng là D. 「V辞書形 + ごとに」: cứ mỗi lần..."
    },
    {
      "id": 3,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "彼はお金がなくて、明日のパンを買う小銭（　　）持っていない。",
      "options": [
        "恐れがある",
        "せいで",
        "さえ",
        "おかげで"
      ],
      "answer": 2,
      "translation": "Anh ấy túng quẫn đến tiền mua bánh mì ngày mai cũng không có.",
      "explanation": "Đáp án đúng là C. Ngay cả tiền lẻ."
    },
    {
      "id": 4,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "車を買う（　　）、家族で海外旅行に行くことにした。",
      "options": [
        "ごとに",
        "せいで",
        "代わりに",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Thay vì mua ô tô, nhà tôi quyết định đi du lịch nước ngoài.",
      "explanation": "Đáp án đúng là C. Lựa chọn thay thế."
    },
    {
      "id": 5,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "さっき説明を聞い（　　）なのに、もう忘れてしまったのですか。",
      "options": [
        "そうにない",
        "たばかり",
        "るばかり",
        "ているばかり"
      ],
      "answer": 1,
      "translation": "Vừa mới nghe giải thích lúc nãy mà giờ đã quên rồi à?",
      "explanation": "Đáp án đúng là B. Vừa mới nghe xong."
    },
    {
      "id": 6,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "都会の生活は便利な（　　）、生活費が高くストレスも多い。",
      "options": [
        "せいで",
        "おかげで",
        "ごとに",
        "一方で"
      ],
      "answer": 3,
      "translation": "Cuộc sống thành thị tiện lợi nhưng chi phí đắt đỏ.",
      "explanation": "Đáp án đúng là D. 「普通形 + 一方で」nêu 2 mặt đối lập."
    },
    {
      "id": 7,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "砂糖の（　　）ハチミツを使って、低カロリーのお菓子を作った。",
      "options": [
        "ごとに",
        "代わりに",
        "せいで",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Dùng mật ong thay cho đường để làm bánh ít calo.",
      "explanation": "Đáp án đúng là B. Thay thế nguyên liệu."
    },
    {
      "id": 8,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この荷物の（　　）を測ってから、送料を計算してください。",
      "options": [
        "重い",
        "重いさ",
        "重く",
        "重さ"
      ],
      "answer": 3,
      "translation": "Cân độ nặng hành lý rồi tính phí ship.",
      "explanation": "Đáp án đúng là D. 「重い」→「重さ」độ nặng."
    },
    {
      "id": 9,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "祖父は最近歳をとったせいか、とても忘れ（　　）なった。",
      "options": [
        "がちに",
        "っぽく",
        "そうに",
        "らしく"
      ],
      "answer": 1,
      "translation": "Ông tôi dạo này có tuổi nên trở nên rất hay quên.",
      "explanation": "Đáp án đúng là B. 「忘れっぽい」tính hay quên."
    },
    {
      "id": 10,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "インフルエンザが急速に感染拡大する（　　）がある。",
      "options": [
        "おかげ",
        "恐れ",
        "代わり",
        "せい"
      ],
      "answer": 1,
      "translation": "Có nguy cơ dịch cúm lan rộng nhanh chóng.",
      "explanation": "Đáp án đúng là B. Nguy cơ dịch bệnh."
    },
    {
      "id": 11,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "この料理は美味しい（　　）美味しいが、作るのに時間がかかる。",
      "options": [
        "ごとに",
        "さえ",
        "ことは",
        "せいで"
      ],
      "answer": 2,
      "translation": "Ngon thì ngon thật nhưng nấu mất nhiều thời gian.",
      "explanation": "Đáp án đúng là C. 「イAことはイAが」."
    },
    {
      "id": 12,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "風邪が長引いていて、今週末の試合には出場でき（　　）。",
      "options": [
        "ことだ",
        "たばかりだ",
        "せいで",
        "そうもない"
      ],
      "answer": 3,
      "translation": "Cảm cúm kéo dài nên trận đấu cuối tuần khó mà ra sân được.",
      "explanation": "Đáp án đúng là D. Khó ra sân thi đấu."
    },
    {
      "id": 13,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "あんな嘘つきの言うことなんて、誰が信じる（　　）！",
      "options": [
        "ことだ",
        "恐れがある",
        "に加えて",
        "ものか"
      ],
      "answer": 3,
      "translation": "Lời tên nói dối đó thì ai mà tin cho được!",
      "explanation": "Đáp án đúng là D. Ai mà thèm tin."
    },
    {
      "id": 14,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "たとえ大金持ちになっ（　　）、質素な生活を変えないだろう。",
      "options": [
        "たとしても",
        "たせいで",
        "たばかりに",
        "たごとに"
      ],
      "answer": 0,
      "translation": "Dù có giàu có tôi vẫn sống giản dị như giờ.",
      "explanation": "Đáp án đúng là A. 「〜としても」cho dù đi nữa."
    },
    {
      "id": 15,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "先輩のアドバイスの（　　）、面接で落ち着いて受け答えができた。",
      "options": [
        "おかげで",
        "ものか",
        "ごとに",
        "せいで"
      ],
      "answer": 0,
      "translation": "Nhờ lời khuyên của tiền bối mà tôi đã tự tin trả lời phỏng vấn.",
      "explanation": "Đáp án đúng là A. Kết quả tích cực từ lời khuyên."
    },
    {
      "id": 16,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "地震（　　）津波の危険があるため、警報が発令された。",
      "options": [
        "による",
        "について",
        "に対する",
        "によって"
      ],
      "answer": 0,
      "translation": "Do có nguy cơ sóng thần vì động đất nên phát cảnh báo.",
      "explanation": "Đáp án đúng là A. 「NによるN」."
    },
    {
      "id": 17,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "誰に何を言われ（　　）、自分の夢を諦めるつもりはありません。",
      "options": [
        "たおかげで",
        "るごとに",
        "たとしても",
        "たものか"
      ],
      "answer": 2,
      "translation": "Dù bị ai nói gì tôi cũng không từ bỏ ước mơ.",
      "explanation": "Đáp án đúng là C. Cho dù bị ai nói gì."
    },
    {
      "id": 18,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "大雨の（　　）電車が運転を見合わせ、会社に遅刻した。",
      "options": [
        "さ",
        "ものか",
        "せいで",
        "おかげで"
      ],
      "answer": 2,
      "translation": "Do mưa lớn nên tàu dừng chạy, tôi bị muộn làm.",
      "explanation": "Đáp án đúng là C. Hậu quả tiêu cực do mưa."
    },
    {
      "id": 19,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "試験に合格したいなら、毎日復習を怠ら（　　）。",
      "options": [
        "ないせいで",
        "ないものか",
        "ないごとに",
        "ないことだ"
      ],
      "answer": 3,
      "translation": "Muốn thi đỗ thì tốt nhất không nên lơ là ôn tập.",
      "explanation": "Đáp án đúng là D. 「Vないことだ」khuyên không nên."
    },
    {
      "id": 20,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "「俺の苦しい気持ちがお前なんかに分かってたまる（　　）！」",
      "options": [
        "恐れがある",
        "もんか",
        "ことだ",
        "おかげで"
      ],
      "answer": 1,
      "translation": "Nỗi khổ của tao đứa như mày làm sao mà hiểu được!",
      "explanation": "Đáp án đúng là B. Văn nói: もんか."
    },
    {
      "id": 21,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "この鳥は生息地が減少し、絶滅の（　　）があると言われている。",
      "options": [
        "代わり",
        "おかげ",
        "恐れ",
        "せい"
      ],
      "answer": 2,
      "translation": "Loài chim này có nguy cơ tuyệt chủng.",
      "explanation": "Đáp án đúng là C. 「絶滅のおそれがある」."
    },
    {
      "id": 22,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "ページをめくる（　　）新しい発見があり、とても面白い本だ。",
      "options": [
        "せいで",
        "ごとに",
        "代わりに",
        "ぽい"
      ],
      "answer": 1,
      "translation": "Cứ mỗi lần lật một trang lại có phát hiện mới, cuốn sách rất hay.",
      "explanation": "Đáp án đúng là B. 「めくるごとに」: cứ mỗi lần lật trang."
    },
    {
      "id": 23,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "この素晴らしい絵画は、ピカソ（　　）描かれた。",
      "options": [
        "に対して",
        "ものか",
        "によって",
        "代わりに"
      ],
      "answer": 2,
      "translation": "Bức tranh này được vẽ bởi Picasso.",
      "explanation": "Đáp án đúng là C. Chủ thể trong câu bị động."
    },
    {
      "id": 24,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "このプールの水深の（　　）は何メートルですか。",
      "options": [
        "深いさ",
        "深さ",
        "深く",
        "深み"
      ],
      "answer": 1,
      "translation": "Độ sâu của bể bơi này là mấy mét?",
      "explanation": "Đáp án đúng là B. 「深い」→「深さ」."
    },
    {
      "id": 25,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "彼の仕事の正確（　　）には、誰もが一目置いている。",
      "options": [
        "み",
        "さ",
        "い",
        "く"
      ],
      "answer": 1,
      "translation": "Độ chính xác trong công việc của anh ấy ai cũng nể phục.",
      "explanation": "Đáp án đúng là B. 「正確さ」tính từ đuôi na."
    },
    {
      "id": 26,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "まだ一度も会ったことがない人の本心が、分かる（　　）。",
      "options": [
        "恐れがある",
        "ものか",
        "代わりに",
        "わけがない"
      ],
      "answer": 3,
      "translation": "Người chưa gặp bao giờ làm sao hiểu thấu lòng dạ họ được!",
      "explanation": "Đáp án đúng là D. Tuyệt đối không thể hiểu."
    },
    {
      "id": 27,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "お金持ちの人が、みんな幸せ（　　）。",
      "options": [
        "恐れがある",
        "ことだ",
        "だとは限らない",
        "せいだ"
      ],
      "answer": 2,
      "translation": "Người giàu không hẳn ai cũng đều hạnh phúc.",
      "explanation": "Đáp án đúng là C. ナAだとは限らない."
    },
    {
      "id": 28,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "昨日の猛暑（　　）、今日は急に気温が下がって肌寒い。",
      "options": [
        "恐れがある",
        "に対して",
        "によって",
        "おかげで"
      ],
      "answer": 1,
      "translation": "Trái ngược với cái nóng gay gắt hôm qua, hôm nay lạnh se se.",
      "explanation": "Đáp án đúng là B. Đối lập thời tiết 2 ngày."
    },
    {
      "id": 29,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "台風の被害（　　）、地震まで発生して現地は混乱している。",
      "options": [
        "としても",
        "のおかげで",
        "たばかりで",
        "に加えて"
      ],
      "answer": 3,
      "translation": "Bị bão tàn phá thêm vào đó động đất xảy ra khiến hiện trường hỗn loạn.",
      "explanation": "Đáp án đúng là D. Thiên tai chồng chất."
    },
    {
      "id": 30,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "火山活動が活発化しており、噴火の（　　）が高まっている。",
      "options": [
        "恐れ",
        "せい",
        "代わり",
        "おかげ"
      ],
      "answer": 0,
      "translation": "Hoạt động núi lửa sôi động, nguy cơ phun trào tăng cao.",
      "explanation": "Đáp án đúng là A. Nguy cơ phun trào."
    },
    {
      "id": 31,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "何年も日本語を教えている先生が、この文法を知らない（　　）。",
      "options": [
        "わけがない",
        "ことだ",
        "恐れがある",
        "ものか"
      ],
      "answer": 0,
      "translation": "Thầy dạy tiếng Nhật bao năm lẽ nào lại không biết ngữ pháp này!",
      "explanation": "Đáp án đúng là A. Phủ định kép."
    },
    {
      "id": 32,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "火の不始末から大規模な火災に発展する（　　）。",
      "options": [
        "ものか",
        "ことだ",
        "恐れがある",
        "おかげだ"
      ],
      "answer": 2,
      "translation": "Sơ suất tàn lửa có nguy cơ phát triển thành hỏa hoạn lớn.",
      "explanation": "Đáp án đúng là C. Nguy cơ cháy nổ."
    },
    {
      "id": 33,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "観光客の増加で地域が潤う（　　）、ゴミや騒音などの問題も生じている。",
      "options": [
        "ものか",
        "一方で",
        "おかげで",
        "さ"
      ],
      "answer": 1,
      "translation": "Khách du lịch tăng làm vùng phát triển, mặt khác phát sinh rác thải ồn ào.",
      "explanation": "Đáp án đúng là B. Mặt tích cực đi kèm tiêu cực."
    },
    {
      "id": 34,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "「あの映画、面白かった？」「面白かった（　　）。途中で寝ちゃったよ。」",
      "options": [
        "ものか",
        "おかげで",
        "恐れがある",
        "ことだ"
      ],
      "answer": 0,
      "translation": "Hay nỗi gì! Tôi ngủ gật giữa chừng luôn đấy.",
      "explanation": "Đáp án đúng là A. Phủ định mỉa mai."
    },
    {
      "id": 35,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "あんなに一生懸命準備したプレゼンが、失敗する（　　）。",
      "options": [
        "ことだ",
        "せいで",
        "恐れがある",
        "わけがない"
      ],
      "answer": 3,
      "translation": "Chuẩn bị bài thuyết trình công phu thế thì làm sao thất bại được!",
      "explanation": "Đáp án đúng là D. Tự tin không thể hỏng."
    },
    {
      "id": 36,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "現金で支払う（　　）、電子マネーで決済するとポイントが付く。",
      "options": [
        "さ",
        "せいで",
        "ものか",
        "代わりに"
      ],
      "answer": 3,
      "translation": "Thay vì trả tiền mặt, thanh toán ví điện tử sẽ được điểm.",
      "explanation": "Đáp án đúng là D. Thay đổi hình thức trả tiền."
    },
    {
      "id": 37,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "値段が高いものが、必ずしも品質が良い（　　）。",
      "options": [
        "ことだ",
        "恐れがある",
        "に決まっている",
        "とは限らない"
      ],
      "answer": 3,
      "translation": "Đồ đắt tiền chưa chắc chất lượng đã tốt.",
      "explanation": "Đáp án đúng là D. 「〜とは限らない」chưa chắc là."
    },
    {
      "id": 38,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "便利な（　　）便利だが、使いこなすまでに練習が必要だ。",
      "options": [
        "せいで",
        "ごとに",
        "っぽい",
        "ことは"
      ],
      "answer": 3,
      "translation": "Tiện thì tiện thật nhưng cần luyện tập mới quen dùng.",
      "explanation": "Đáp án đúng là D. Tính từ đuôi na: 便利なことは便利だが."
    },
    {
      "id": 39,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "専門知識（　　）豊かな実務経験を持つ人材が求められている。",
      "options": [
        "ものか",
        "のおかげで",
        "に加えて",
        "としても"
      ],
      "answer": 2,
      "translation": "Đang tuyển nhân sự có kiến thức chuyên môn cộng thêm kinh nghiệm phong phú.",
      "explanation": "Đáp án đúng là C. Kiến thức cộng kinh nghiệm."
    },
    {
      "id": 40,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "今回の台風（　　）、多くの家屋が被害を受けました。",
      "options": [
        "ことだ",
        "に対して",
        "てほしい",
        "によって"
      ],
      "answer": 3,
      "translation": "Do cơn bão lần này, nhiều nhà cửa bị thiệt hại.",
      "explanation": "Đáp án đúng là D. 「N + によって」chỉ nguyên nhân."
    },
    {
      "id": 41,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "プロの料理人が作ったのだから、まずい（　　）。",
      "options": [
        "わけがない",
        "恐れがある",
        "ことだ",
        "せいで"
      ],
      "answer": 0,
      "translation": "Đầu bếp chuyên nghiệp nấu thì làm sao mà dở được!",
      "explanation": "Đáp án đúng là A. Chắc chắn ngon."
    },
    {
      "id": 42,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "厳しい批判（　　）、首相は冷静に説明を続けた。",
      "options": [
        "に対して",
        "によって",
        "せいで",
        "ものか"
      ],
      "answer": 0,
      "translation": "Đối diện với những lời phê phán gắt gao, thủ tướng vẫn bình tĩnh giải thích.",
      "explanation": "Đáp án đúng là A. Đối mặt với chỉ trích."
    },
    {
      "id": 43,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "黒（　　）ジャケットを羽織って出勤した。",
      "options": [
        "ものか",
        "っぽい",
        "そうにない",
        "たばかり"
      ],
      "answer": 1,
      "translation": "Mặc áo khoác màu hơi ngả đen đi làm.",
      "explanation": "Đáp án đúng là B. 「黒っぽい」hơi đen."
    },
    {
      "id": 44,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "このスープは水（　　）て、あまり美味しくない。",
      "options": [
        "っぽく",
        "みたい",
        "そうに",
        "らしく"
      ],
      "answer": 0,
      "translation": "Món súp này nhiều nước (loãng toẹt), không ngon.",
      "explanation": "Đáp án đúng là A. 「水っぽい」loãng, nhiều nước."
    },
    {
      "id": 45,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "失敗を恐れずに、新しいことに挑戦して挑戦してみる（　　）。",
      "options": [
        "ことだ",
        "ごとに",
        "せいで",
        "ものか"
      ],
      "answer": 0,
      "translation": "Đừng sợ thất bại, tốt nhất là cứ thử sức với điều mới.",
      "explanation": "Đáp án đúng là A. Động viên nên thử."
    },
    {
      "id": 46,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "台風が接近しているため、大雨による河川の氾濫の（　　）。",
      "options": [
        "ことだ",
        "ものか",
        "恐れがある",
        "おかげだ"
      ],
      "answer": 2,
      "translation": "Bão đến gần có nguy cơ nước sông tràn bờ.",
      "explanation": "Đáp án đúng là C. 「〜恐れがある」nguy cơ xấu."
    },
    {
      "id": 47,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "親の期待（　　）応えられるよう、全力で試験に臨んだ。",
      "options": [
        "さえ",
        "に対して",
        "によって",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Để đáp lại kỳ vọng của cha mẹ, tôi dốc sức thi.",
      "explanation": "Đáp án đúng là B. Hướng tới kỳ vọng."
    },
    {
      "id": 48,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "たとえ時間がかかっ（　　）、自分の力で最後までやり遂げたい。",
      "options": [
        "たばかりに",
        "たものか",
        "たせいで",
        "たとしても"
      ],
      "answer": 3,
      "translation": "Dù có tốn thời gian tôi muốn tự sức hoàn thành.",
      "explanation": "Đáp án đúng là D. Dù mất thời gian."
    },
    {
      "id": 49,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "人件費の高騰（　　）原材料費の値上がりも、経営を圧迫している。",
      "options": [
        "としても",
        "のおかげで",
        "に加えて",
        "ものか"
      ],
      "answer": 2,
      "translation": "Chi phí nhân công tăng cộng thêm nguyên liệu đắt gây áp lực kinh doanh.",
      "explanation": "Đáp án đúng là C. Cộng thêm khó khăn."
    },
    {
      "id": 50,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "この件については、他の人には誰にも言わ（　　）。",
      "options": [
        "てほしい",
        "ないでほしい",
        "なければならない",
        "なくていい"
      ],
      "answer": 1,
      "translation": "Mong bạn đừng nói việc này cho ai biết.",
      "explanation": "Đáp án đúng là B. 「Vないでほしい」mong đừng làm."
    },
    {
      "id": 51,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "その法案は国会の多数決（　　）可決されました。",
      "options": [
        "によって",
        "ごとに",
        "に対して",
        "さえ"
      ],
      "answer": 0,
      "translation": "Dự luật đó đã được thông qua bằng biểu quyết đa số ở quốc hội.",
      "explanation": "Đáp án đúng là A. Phương tiện thông qua."
    },
    {
      "id": 52,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "一人でこの重いピアノを持ち上げられる（　　）。手伝ってくれ。",
      "options": [
        "ごとに",
        "わけがない",
        "ことだ",
        "せいだ"
      ],
      "answer": 1,
      "translation": "Một mình nâng sao nổi cây đàn piano này! Giúp tôi với.",
      "explanation": "Đáp án đúng là B. Bất khả thi."
    },
    {
      "id": 53,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "「〜とは限らない」と一緒によく使われる副詞はどれですか。",
      "options": [
        "ぜひ",
        "まるで",
        "必ずしも",
        "まったく"
      ],
      "answer": 2,
      "translation": "Phó từ hay đi kèm là 必ずしも.",
      "explanation": "Đáp án đúng là C. Đi kèm 必ずしも."
    },
    {
      "id": 54,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "渋滞がひどいので、約束の時間に間に合い（　　）。",
      "options": [
        "ものか",
        "たばかりだ",
        "さ",
        "そうにない"
      ],
      "answer": 3,
      "translation": "Tắc đường nặng thế này có vẻ không kịp giờ hẹn.",
      "explanation": "Đáp án đúng là D. Khó lòng kịp giờ."
    },
    {
      "id": 55,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "こんな屈辱を味わって、黙っていられる（　　）。",
      "options": [
        "せいで",
        "ごとに",
        "ものか",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Chịu nỗi nhục nhã này làm sao mà im lặng chịu trận được!",
      "explanation": "Đáp án đúng là C. Không thể ngồi yên."
    },
    {
      "id": 56,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "英語を教えてもらう（　　）、彼にベトナム語を教えてあげている。",
      "options": [
        "ものか",
        "さ",
        "代わりに",
        "せいで"
      ],
      "answer": 2,
      "translation": "Được dạy tiếng Anh, đổi lại tôi dạy tiếng Việt cho bạn.",
      "explanation": "Đáp án đúng là C. Bù lại tương xứng."
    },
    {
      "id": 57,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "彼は少しのことですぐに怒る、怒り（　　）性格だ。",
      "options": [
        "ものか",
        "たばかり",
        "そうにない",
        "っぽい"
      ],
      "answer": 3,
      "translation": "Anh ấy tính hay nổi nóng chuyện nhỏ cũng cáu.",
      "explanation": "Đáp án đúng là D. 「怒りっぽい」."
    },
    {
      "id": 58,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "（皮肉）「君が重要な書類を忘れてくれた（　　）、会議が中止になっちゃったよ。」",
      "options": [
        "一方で",
        "ごとに",
        "さえ",
        "おかげで"
      ],
      "answer": 3,
      "translation": "(Mỉa mai) 'Nhờ cậu quên tài liệu mà cuộc họp bị hủy luôn rồi đấy!'",
      "explanation": "Đáp án đúng là D. 「おかげで」dùng mỉa mai trách khéo."
    },
    {
      "id": 59,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "先月買っ（　　）のスマートフォンが、もう壊れてしまった。",
      "options": [
        "たばかり",
        "たところ",
        "てばかり",
        "るばかり"
      ],
      "answer": 0,
      "translation": "Chiếc điện thoại vừa mới mua tháng trước đã hỏng.",
      "explanation": "Đáp án đúng là A. Cảm nhận chủ quan vừa mới mua."
    },
    {
      "id": 60,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "親は子供を厳しく注意する（　　）、優しく褒めることも忘れない。",
      "options": [
        "一方で",
        "恐れがある",
        "せいで",
        "さえ"
      ],
      "answer": 0,
      "translation": "Cha mẹ một mặt nghiêm khắc nhưng mặt khác cũng không quên khen con.",
      "explanation": "Đáp án đúng là A. 2 mặt đối lập của việc dạy con."
    },
    {
      "id": 61,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "日本語が話せる（　　）話せますが、日常会話レベルです。",
      "options": [
        "ことは",
        "おかげで",
        "恐れは",
        "せいで"
      ],
      "answer": 0,
      "translation": "Nói thì nói được thật nhưng chỉ mức cơ bản.",
      "explanation": "Đáp án đúng là A. Cấu trúc lặp từ 「VことはVが」."
    },
    {
      "id": 62,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "生まれて（　　）の赤ちゃんを抱っこさせてもらった。",
      "options": [
        "ているばかり",
        "るばかり",
        "そうにない",
        "たばかり"
      ],
      "answer": 3,
      "translation": "Tôi được bế em bé vừa mới chào đời.",
      "explanation": "Đáp án đúng là D. Vừa mới sinh ra."
    },
    {
      "id": 63,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "天気予報が雨だと言っても、絶対に雨が降る（　　）。",
      "options": [
        "せいで",
        "恐れがある",
        "とは限らない",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Dự báo mưa chưa chắc trời đã mưa.",
      "explanation": "Đáp án đúng là C. Chưa chắc đã mưa."
    },
    {
      "id": 64,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "（皮肉）「あなたが余計なことを言った（　　）、雰囲気が台無しですよ。」",
      "options": [
        "おかげで",
        "せいで",
        "ことだ",
        "さえ"
      ],
      "answer": 0,
      "translation": "(Mỉa mai) 'Nhờ cậu nói lời thừa thãi mà không khí hỏng bét rồi đấy.'",
      "explanation": "Đáp án đúng là A. おかげで dùng châm biếm."
    },
    {
      "id": 65,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この小説の面白（　　）は、読んだ人にしか分からない。",
      "options": [
        "い",
        "み",
        "さ",
        "く"
      ],
      "answer": 2,
      "translation": "Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu.",
      "explanation": "Đáp án đúng là C. 「面白さ」."
    },
    {
      "id": 66,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "安物（　　）服でも、着こなし次第でおしゃれに見える。",
      "options": [
        "たばかり",
        "っぽい",
        "そうにない",
        "ものか"
      ],
      "answer": 1,
      "translation": "Dù là quần áo trông có vẻ rẻ tiền nhưng khéo mặc vẫn đẹp.",
      "explanation": "Đáp án đúng là B. 「安っぽい」trông rẻ tiền."
    },
    {
      "id": 67,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "油断した（　　）、試合の終了間際に逆転ゴールを決められた。",
      "options": [
        "おかげで",
        "ことだ",
        "一方で",
        "せいで"
      ],
      "answer": 3,
      "translation": "Do chủ quan nên sát giờ hết trận bị đối thủ ghi bàn lội ngược dòng.",
      "explanation": "Đáp án đúng là D. Nguyên nhân dẫn tới thua trận."
    },
    {
      "id": 68,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "どんなに失敗し（　　）、そこから学べば無駄にはならない。",
      "options": [
        "たばかりで",
        "たおかげで",
        "るごとに",
        "たとしても"
      ],
      "answer": 3,
      "translation": "Dù thất bại thế nào nếu học hỏi được thì không vô ích.",
      "explanation": "Đáp án đúng là D. Dù thất bại."
    },
    {
      "id": 69,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "兄が社交的なの（　　）、弟は内向的で物静かだ。",
      "options": [
        "によって",
        "せいで",
        "に対して",
        "ことに対して"
      ],
      "answer": 2,
      "translation": "Trái với anh trai hòa đồng, em trai lại hướng nội.",
      "explanation": "Đáp án đúng là C. So sánh đối lập 2 sự việc."
    },
    {
      "id": 70,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "辞書に載っている意味が、すべての文脈に当てはまる（　　）。",
      "options": [
        "恐れがある",
        "とは限らない",
        "ものか",
        "おかげだ"
      ],
      "answer": 1,
      "translation": "Nghĩa trong từ điển chưa chắc đúng mọi ngữ cảnh.",
      "explanation": "Đáp án đúng là B. Chưa hẳn đúng mọi lúc."
    },
    {
      "id": 71,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "危険な場所には近づか（　　）と注意した。",
      "options": [
        "てほしい",
        "なくてよい",
        "ないでほしい",
        "なければならない"
      ],
      "answer": 2,
      "translation": "Tôi dặn mong họ đừng lại gần nơi nguy hiểm.",
      "explanation": "Đáp án đúng là C. Phủ định: ないでほしい."
    },
    {
      "id": 72,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "有名な大学を卒業したからといって、良い会社に入れる（　　）。",
      "options": [
        "ものか",
        "恐れがある",
        "とは限らない",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Tốt nghiệp đại học danh tiếng chưa chắc vào được công ty tốt.",
      "explanation": "Đáp án đúng là C. Không hẳn là."
    },
    {
      "id": 73,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "このマラソンコースには、１キロ（　　）給水所が設置されています。",
      "options": [
        "一方で",
        "代わりに",
        "恐れがあって",
        "ごとに"
      ],
      "answer": 3,
      "translation": "Trên cung đường chạy này cứ 1km lại có trạm tiếp nước.",
      "explanation": "Đáp án đúng là D. 「1キロごとに」: cứ cách 1 km."
    },
    {
      "id": 74,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "名前（　　）覚えていない相手から、突然高価なプレゼントが届いた。",
      "options": [
        "せいで",
        "ことだ",
        "さえ",
        "おかげで"
      ],
      "answer": 2,
      "translation": "Từ người mà ngay cả tên tôi cũng không nhớ, bỗng nhận được quà đắt tiền.",
      "explanation": "Đáp án đúng là C. Nhấn mạnh mức độ không biết."
    },
    {
      "id": 75,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "厳しい寒さ（　　）大雪に見舞われ、交通網が完全に麻痺した。",
      "options": [
        "としても",
        "に加えて",
        "のおかげで",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Rét đậm cộng thêm tuyết rơi dày khiến giao thông tê liệt.",
      "explanation": "Đáp án đúng là B. Rét cộng tuyết lớn."
    },
    {
      "id": 76,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "相手はプロの選手だから、初心者の私が勝て（　　）。",
      "options": [
        "ことだ",
        "一方で",
        "せいだ",
        "そうもない"
      ],
      "answer": 3,
      "translation": "Đối thủ là tuyển thủ chuyên nghiệp, tôi khó mà thắng nổi.",
      "explanation": "Đáp án đúng là D. Khó thắng được."
    },
    {
      "id": 77,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "オリンピックは４年（　　）開催される世界的なスポーツの祭典です。",
      "options": [
        "ごとに",
        "おかげで",
        "一方で",
        "さえ"
      ],
      "answer": 0,
      "translation": "Thế vận hội Olympic được tổ chức 4 năm một lần.",
      "explanation": "Đáp án đúng là A. 「N + ごとに」chỉ chu kỳ lặp lại 'cứ mỗi... lại...'."
    },
    {
      "id": 78,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "インターネット（　　）、世界中のニュースが瞬時に伝わる。",
      "options": [
        "によって",
        "に対して",
        "ことだ",
        "せいで"
      ],
      "answer": 0,
      "translation": "Nhờ có internet, tin tức toàn cầu truyền đi chớp mắt.",
      "explanation": "Đáp án đúng là A. Phương tiện / cách thức."
    },
    {
      "id": 79,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "トラブルを避けたいなら、契約書をよく確認する（　　）ね。",
      "options": [
        "っぽい",
        "おかげで",
        "ことだ",
        "せいで"
      ],
      "answer": 2,
      "translation": "Muốn tránh rắc rối thì nên đọc kỹ hợp đồng.",
      "explanation": "Đáp án đúng là C. Lời khuyên thực tế."
    },
    {
      "id": 80,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "親としては、子供に健康で幸せに育っ（　　）ものだ。",
      "options": [
        "てほしい",
        "てばかりの",
        "てさえ",
        "たものの"
      ],
      "answer": 0,
      "translation": "Là cha mẹ thì luôn mong con lớn lên khỏe mạnh hạnh phúc.",
      "explanation": "Đáp án đúng là A. Mong ước cho con cái."
    },
    {
      "id": 81,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "都市部の人口が増加しているの（　　）、地方では過疎化が進んでいる。",
      "options": [
        "によって",
        "おかげで",
        "ごとに",
        "に対して"
      ],
      "answer": 3,
      "translation": "Trái ngược dân số thành thị tăng, vùng quê bị giảm dân.",
      "explanation": "Đáp án đúng là D. Đối lập 2 thực trạng."
    },
    {
      "id": 82,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "自分の間違い（　　）認められない人は、成長することができない。",
      "options": [
        "一方で",
        "ごとに",
        "さ",
        "さえ"
      ],
      "answer": 3,
      "translation": "Người mà ngay cả lỗi sai của mình cũng không thừa nhận thì không thể tiến bộ.",
      "explanation": "Đáp án đúng là D. Ngay cả lỗi bản thân."
    },
    {
      "id": 83,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "足の痛みがひどくて、立つこと（　　）できない状態だ。",
      "options": [
        "さえ",
        "せいで",
        "ものか",
        "おかげで"
      ],
      "answer": 0,
      "translation": "Chân đau dữ dội, đến cả việc đứng cũng không làm được.",
      "explanation": "Đáp án đúng là A. 「V辞書形こと + さえ」."
    },
    {
      "id": 84,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "日本に長く住んでいるからといって、敬語が完璧に使える（　　）。",
      "options": [
        "おかげだ",
        "とは限らない",
        "恐れがある",
        "ことにする"
      ],
      "answer": 1,
      "translation": "Sống ở Nhật lâu chưa chắc đã dùng kính ngữ chuẩn.",
      "explanation": "Đáp án đúng là B. Chưa chắc đã thành thạo."
    },
    {
      "id": 85,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "彼は優秀な研究者である（　　）、大学で学生を教える教育者でもある。",
      "options": [
        "ごとに",
        "一方で",
        "っぽい",
        "せいで"
      ],
      "answer": 1,
      "translation": "Anh ấy vừa là nhà nghiên cứu giỏi vừa là nhà giáo dục.",
      "explanation": "Đáp án đúng là B. 「である一方で」nêu 2 vai trò song song."
    },
    {
      "id": 86,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "古い車なので、急な坂道を登り切れ（　　）。",
      "options": [
        "ものか",
        "そうにない",
        "たばかりだ",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Xe cũ nên dốc đứng thế này trông khó mà leo hết nổi.",
      "explanation": "Đáp án đúng là B. Khó leo nổi dốc."
    },
    {
      "id": 87,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "昨夜遅くまでゲームをした（　　）、今朝寝坊してしまった。",
      "options": [
        "おかげで",
        "せいで",
        "一方で",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Vì chơi game muộn nên sáng nay ngủ quên.",
      "explanation": "Đáp án đúng là B. 「せいで」chỉ nguyên nhân gây hậu quả xấu."
    },
    {
      "id": 88,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "日本に来（　　）の頃は、電車の乗り換えさえ難しかった。",
      "options": [
        "そうにない",
        "るばかり",
        "たばかり",
        "ているばかり"
      ],
      "answer": 2,
      "translation": "Hồi vừa mới sang Nhật, đổi tàu cũng thấy khó.",
      "explanation": "Đáp án đúng là C. 「Vタ形 + ばかり」vừa mới xong."
    },
    {
      "id": 89,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "私の気持ちをもう少し理解し（　　）と思います。",
      "options": [
        "る恐れがある",
        "たばかり",
        "てほしい",
        "るごとに"
      ],
      "answer": 2,
      "translation": "Tôi mong bạn thấu hiểu cho tâm trạng của tôi một chút.",
      "explanation": "Đáp án đúng là C. Mong người khác hiểu."
    },
    {
      "id": 90,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "何でも他人の（　　）にするのは、大人の態度とは言えない。",
      "options": [
        "っぽい",
        "おかげ",
        "ごと",
        "せい"
      ],
      "answer": 3,
      "translation": "Đổ lỗi cho người khác không phải thái độ người lớn.",
      "explanation": "Đáp án đúng là D. 「他人のせいにする」: đổ lỗi cho người khác."
    },
    {
      "id": 91,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "インターネットは情報を素早く得られる（　　）、誤情報が広がりやすいリスクもある。",
      "options": [
        "せいで",
        "たばかり",
        "一方で",
        "さえ"
      ],
      "answer": 2,
      "translation": "Internet giúp tra thông tin nhanh, mặt khác có nguy cơ lan truyền tin giả.",
      "explanation": "Đáp án đúng là C. Mặt lợi và mặt hại đối lập."
    },
    {
      "id": 92,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "健康で長生きしたければ、規則正しい生活を送る（　　）。",
      "options": [
        "おかげだ",
        "恐れがある",
        "ものか",
        "ことだ"
      ],
      "answer": 3,
      "translation": "Muốn sống lâu khỏe mạnh thì nên sinh hoạt điều độ.",
      "explanation": "Đáp án đúng là D. Khuyên bảo lối sống."
    },
    {
      "id": 93,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "今週は仕事の忙しさ（　　）寝不足も重なり、ひどく疲れている。",
      "options": [
        "に加えて",
        "のおかげで",
        "としても",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Bận rộn việc cộng thêm thiếu ngủ khiến tôi kiệt sức.",
      "explanation": "Đáp án đúng là A. Yếu tố dồn thêm."
    },
    {
      "id": 94,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "「〜に加えて」を文章語（書き言葉）でより硬く表現する場合、正しい形はどれですか。",
      "options": [
        "〜に加えない",
        "〜に加え",
        "〜に加える",
        "〜に加えた"
      ],
      "answer": 1,
      "translation": "Dạng văn viết trang trọng là 〜に加え.",
      "explanation": "Đáp án đúng là B. Lược bỏ 'て' thành に加え."
    },
    {
      "id": 95,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "パスワードを簡単にすると、不正アクセスの被害に遭う（　　）。",
      "options": [
        "ことだ",
        "おかげだ",
        "ものか",
        "恐れがある"
      ],
      "answer": 3,
      "translation": "Đặt mật khẩu dễ đoán có nguy cơ bị tấn công tài khoản.",
      "explanation": "Đáp án đúng là D. Nguy cơ an ninh mạng."
    },
    {
      "id": 96,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "風邪を早く治したければ、暖かくしてゆっくり休む（　　）。",
      "options": [
        "恐れがある",
        "ものか",
        "ことだ",
        "わけがない"
      ],
      "answer": 2,
      "translation": "Muốn mau khỏi cảm cúm thì nên giữ ấm nghỉ ngơi.",
      "explanation": "Đáp án đúng là C. 「V辞書形 + ことだ」lời khuyên tốt nhất."
    },
    {
      "id": 97,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "どんなに給料が高い（　　）、残業ばかりのブラック企業では働きたくない。",
      "options": [
        "せいで",
        "ものか",
        "としても",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Dù lương có cao tôi cũng không làm công ty bóc lột tăng ca.",
      "explanation": "Đáp án đúng là C. Dù lương cao."
    },
    {
      "id": 98,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "大切な記念日だから、二人でゆっくり過ごし（　　）。",
      "options": [
        "るごとに",
        "てほしい",
        "たばかり",
        "る恐れがある"
      ],
      "answer": 1,
      "translation": "Ngày kỷ niệm quan trọng nên muốn cả hai bên nhau trọn vẹn.",
      "explanation": "Đáp án đúng là B. Mong ước."
    },
    {
      "id": 99,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "買える（　　）買えるが、今月の予算をオーバーしてしまう。",
      "options": [
        "一方で",
        "恐れがある",
        "せいで",
        "ことは"
      ],
      "answer": 3,
      "translation": "Mua thì mua được nhưng vượt quá ngân sách tháng này.",
      "explanation": "Đáp án đúng là D. Công nhận khả năng mua."
    },
    {
      "id": 100,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "仮にその話が本当だ（　　）、彼を許すことはできない。",
      "options": [
        "せいで",
        "ものか",
        "としても",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Cho dù chuyện đó là thật tôi cũng không tha thứ cho anh ấy.",
      "explanation": "Đáp án đúng là C. Dù là sự thật."
    }
  ],
  "2": [
    {
      "id": 1,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "このプールの水深の（　　）は何メートルですか。",
      "options": [
        "深く",
        "深いさ",
        "深み",
        "深さ"
      ],
      "answer": 3,
      "translation": "Độ sâu của bể bơi này là mấy mét?",
      "explanation": "Đáp án đúng là D. 「深い」→「深さ」."
    },
    {
      "id": 2,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "黒（　　）ジャケットを羽織って出勤した。",
      "options": [
        "ものか",
        "っぽい",
        "そうにない",
        "たばかり"
      ],
      "answer": 1,
      "translation": "Mặc áo khoác màu hơi ngả đen đi làm.",
      "explanation": "Đáp án đúng là B. 「黒っぽい」hơi đen."
    },
    {
      "id": 3,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "人件費の高騰（　　）原材料費の値上がりも、経営を圧迫している。",
      "options": [
        "ものか",
        "に加えて",
        "としても",
        "のおかげで"
      ],
      "answer": 1,
      "translation": "Chi phí nhân công tăng cộng thêm nguyên liệu đắt gây áp lực kinh doanh.",
      "explanation": "Đáp án đúng là B. Cộng thêm khó khăn."
    },
    {
      "id": 4,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "謝った（　　）謝ったが、まだ相手の怒りは収まっていない。",
      "options": [
        "せいで",
        "おかげで",
        "さえ",
        "ことは"
      ],
      "answer": 3,
      "translation": "Xin lỗi thì xin lỗi rồi nhưng đối phương vẫn chưa nguôi giận.",
      "explanation": "Đáp án đúng là D. Đã xin lỗi nhưng chưa ổn."
    },
    {
      "id": 5,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "景気の悪化が続けば、多くの中小企業が倒産する（　　）。",
      "options": [
        "ものか",
        "代わりに",
        "おかげだ",
        "恐れがある"
      ],
      "answer": 3,
      "translation": "Kinh tế xấu tiếp diễn có nguy cơ nhiều doanh nghiệp phá sản.",
      "explanation": "Đáp án đúng là D. Nguy cơ phá sản."
    },
    {
      "id": 6,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "忙しい母の（　　）、兄が晩ご飯を作ってくれた。",
      "options": [
        "ごとに",
        "せいで",
        "代わりに",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Thay vì mẹ bận, anh trai đã nấu cơm tối.",
      "explanation": "Đáp án đúng là C. Thay mẹ nấu ăn."
    },
    {
      "id": 7,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "先生の質問（　　）、彼は自信を持って答えた。",
      "options": [
        "さえ",
        "によって",
        "に対して",
        "おかげで"
      ],
      "answer": 2,
      "translation": "Đối với câu hỏi của thầy, anh ấy tự tin trả lời.",
      "explanation": "Đáp án đúng là C. Hướng vào đối tượng câu hỏi."
    },
    {
      "id": 8,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "油断した（　　）、試合の終了間際に逆転ゴールを決められた。",
      "options": [
        "せいで",
        "おかげで",
        "ことだ",
        "一方で"
      ],
      "answer": 0,
      "translation": "Do chủ quan nên sát giờ hết trận bị đối thủ ghi bàn lội ngược dòng.",
      "explanation": "Đáp án đúng là A. Nguyên nhân dẫn tới thua trận."
    },
    {
      "id": 9,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "都市部の人口が増加しているの（　　）、地方では過疎化が進んでいる。",
      "options": [
        "に対して",
        "ごとに",
        "によって",
        "おかげで"
      ],
      "answer": 0,
      "translation": "Trái ngược dân số thành thị tăng, vùng quê bị giảm dân.",
      "explanation": "Đáp án đúng là A. Đối lập 2 thực trạng."
    },
    {
      "id": 10,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "不注意（　　）事故を防ぐために、確認を徹底しましょう。",
      "options": [
        "によるの",
        "に向けた",
        "に対する",
        "による"
      ],
      "answer": 3,
      "translation": "Để ngừa tai nạn do bất cẩn, hãy kiểm tra kỹ.",
      "explanation": "Đáp án đúng là D. Bổ nghĩa danh từ: 「NによるN」."
    },
    {
      "id": 11,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "この電車は駅に止まる（　　）多くの乗客が乗り降りする。",
      "options": [
        "ものか",
        "せいで",
        "おかげで",
        "ごとに"
      ],
      "answer": 3,
      "translation": "Chuyến tàu này cứ mỗi lần dừng ở ga lại có đông hành khách lên xuống.",
      "explanation": "Đáp án đúng là D. 「止まるごとに」: cứ mỗi lần dừng lại."
    },
    {
      "id": 12,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "大手企業だからといって、将来ずっと安定している（　　）。",
      "options": [
        "ものか",
        "とは限らない",
        "恐れがある",
        "ことだ"
      ],
      "answer": 1,
      "translation": "Doanh nghiệp lớn chưa hẳn tương lai đã mãi ổn định.",
      "explanation": "Đáp án đúng là B. Chưa chắc ổn định."
    },
    {
      "id": 13,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "（皮肉）「君が重要な書類を忘れてくれた（　　）、会議が中止になっちゃったよ。」",
      "options": [
        "一方で",
        "おかげで",
        "さえ",
        "ごとに"
      ],
      "answer": 1,
      "translation": "(Mỉa mai) 'Nhờ cậu quên tài liệu mà cuộc họp bị hủy luôn rồi đấy!'",
      "explanation": "Đáp án đúng là B. 「おかげで」dùng mỉa mai trách khéo."
    },
    {
      "id": 14,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "お金持ちの人が、みんな幸せ（　　）。",
      "options": [
        "恐れがある",
        "だとは限らない",
        "せいだ",
        "ことだ"
      ],
      "answer": 1,
      "translation": "Người giàu không hẳn ai cũng đều hạnh phúc.",
      "explanation": "Đáp án đúng là B. ナAだとは限らない."
    },
    {
      "id": 15,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "何年も日本語を教えている先生が、この文法を知らない（　　）。",
      "options": [
        "ことだ",
        "わけがない",
        "ものか",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Thầy dạy tiếng Nhật bao năm lẽ nào lại không biết ngữ pháp này!",
      "explanation": "Đáp án đúng là B. Phủ định kép."
    },
    {
      "id": 16,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "健康で長生きしたければ、規則正しい生活を送る（　　）。",
      "options": [
        "ことだ",
        "おかげだ",
        "恐れがある",
        "ものか"
      ],
      "answer": 0,
      "translation": "Muốn sống lâu khỏe mạnh thì nên sinh hoạt điều độ.",
      "explanation": "Đáp án đúng là A. Khuyên bảo lối sống."
    },
    {
      "id": 17,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "環境問題（　　）関心が世界中で高まっている。",
      "options": [
        "に対する",
        "について",
        "によって",
        "による"
      ],
      "answer": 0,
      "translation": "Sự quan tâm đối với môi trường đang tăng lên.",
      "explanation": "Đáp án đúng là A. Bổ nghĩa danh từ: 「〜に対するN」."
    },
    {
      "id": 18,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "不景気の（　　）新卒の就職活動が非常に厳しくなっている。",
      "options": [
        "おかげで",
        "さ",
        "ものか",
        "せいで"
      ],
      "answer": 3,
      "translation": "Tại vì suy thoái kinh tế nên việc tìm việc làm rất gian nan.",
      "explanation": "Đáp án đúng là D. Hậu quả xấu do kinh tế."
    },
    {
      "id": 19,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "昨日の猛暑（　　）、今日は急に気温が下がって肌寒い。",
      "options": [
        "によって",
        "恐れがある",
        "に対して",
        "おかげで"
      ],
      "answer": 2,
      "translation": "Trái ngược với cái nóng gay gắt hôm qua, hôm nay lạnh se se.",
      "explanation": "Đáp án đúng là C. Đối lập thời tiết 2 ngày."
    },
    {
      "id": 20,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "寝不足の（　　）頭がボーッとして、仕事に集中できない。",
      "options": [
        "ごとに",
        "恐れがある",
        "おかげで",
        "せいで"
      ],
      "answer": 3,
      "translation": "Vì thiếu ngủ nên đầu óc lơ mơ không tập trung làm việc được.",
      "explanation": "Đáp án đúng là D. 「Nのせいで」."
    },
    {
      "id": 21,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "同僚が手伝ってくれた（　　）、定時に仕事を終えることができた。",
      "options": [
        "せいで",
        "おかげで",
        "さ",
        "ものか"
      ],
      "answer": 1,
      "translation": "Nhờ đồng nghiệp giúp đỡ nên tôi đã xong việc đúng giờ.",
      "explanation": "Đáp án đúng là B. Nhờ sự giúp đỡ của đồng nghiệp."
    },
    {
      "id": 22,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "「〜とは限らない」と一緒によく使われる副詞はどれですか。",
      "options": [
        "まるで",
        "まったく",
        "必ずしも",
        "ぜひ"
      ],
      "answer": 2,
      "translation": "Phó từ hay đi kèm là 必ずしも.",
      "explanation": "Đáp án đúng là C. Đi kèm 必ずしも."
    },
    {
      "id": 23,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "火の不始末から大規模な火災に発展する（　　）。",
      "options": [
        "ものか",
        "ことだ",
        "恐れがある",
        "おかげだ"
      ],
      "answer": 2,
      "translation": "Sơ suất tàn lửa có nguy cơ phát triển thành hỏa hoạn lớn.",
      "explanation": "Đáp án đúng là C. Nguy cơ cháy nổ."
    },
    {
      "id": 24,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "仮にその話が本当だ（　　）、彼を許すことはできない。",
      "options": [
        "ごとに",
        "ものか",
        "せいで",
        "としても"
      ],
      "answer": 3,
      "translation": "Cho dù chuyện đó là thật tôi cũng không tha thứ cho anh ấy.",
      "explanation": "Đáp án đúng là D. Dù là sự thật."
    },
    {
      "id": 25,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "地震の後は、津波が発生する（　　）ので避難してください。",
      "options": [
        "ことである",
        "ものか",
        "おかげである",
        "恐れがある"
      ],
      "answer": 3,
      "translation": "Sau động đất có nguy cơ sóng thần nên hãy sơ tán.",
      "explanation": "Đáp án đúng là D. Nguy cơ sóng thần."
    },
    {
      "id": 26,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "彼はお金がなくて、明日のパンを買う小銭（　　）持っていない。",
      "options": [
        "おかげで",
        "せいで",
        "さえ",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Anh ấy túng quẫn đến tiền mua bánh mì ngày mai cũng không có.",
      "explanation": "Đáp án đúng là C. Ngay cả tiền lẻ."
    },
    {
      "id": 27,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "たとえ時間がかかっ（　　）、自分の力で最後までやり遂げたい。",
      "options": [
        "たとしても",
        "たものか",
        "たばかりに",
        "たせいで"
      ],
      "answer": 0,
      "translation": "Dù có tốn thời gian tôi muốn tự sức hoàn thành.",
      "explanation": "Đáp án đúng là A. Dù mất thời gian."
    },
    {
      "id": 28,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "風邪が長引いていて、今週末の試合には出場でき（　　）。",
      "options": [
        "たばかりだ",
        "せいで",
        "ことだ",
        "そうもない"
      ],
      "answer": 3,
      "translation": "Cảm cúm kéo dài nên trận đấu cuối tuần khó mà ra sân được.",
      "explanation": "Đáp án đúng là D. Khó ra sân thi đấu."
    },
    {
      "id": 29,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "風邪を早く治したければ、暖かくしてゆっくり休む（　　）。",
      "options": [
        "わけがない",
        "ことだ",
        "ものか",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Muốn mau khỏi cảm cúm thì nên giữ ấm nghỉ ngơi.",
      "explanation": "Đáp án đúng là B. 「V辞書形 + ことだ」lời khuyên tốt nhất."
    },
    {
      "id": 30,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "こんな屈辱を味わって、黙っていられる（　　）。",
      "options": [
        "ものか",
        "せいで",
        "ごとに",
        "ことだ"
      ],
      "answer": 0,
      "translation": "Chịu nỗi nhục nhã này làm sao mà im lặng chịu trận được!",
      "explanation": "Đáp án đúng là A. Không thể ngồi yên."
    },
    {
      "id": 31,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "遅刻しそうだから、電車が時間通りに来（　　）。",
      "options": [
        "るせいで",
        "てほしい",
        "たばかり",
        "るものか"
      ],
      "answer": 1,
      "translation": "Sắp muộn rồi nên mong tàu đến đúng giờ.",
      "explanation": "Đáp án đúng là B. Mong hiện tượng xảy ra."
    },
    {
      "id": 32,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "どんなに給料が高い（　　）、残業ばかりのブラック企業では働きたくない。",
      "options": [
        "せいで",
        "ごとに",
        "ものか",
        "としても"
      ],
      "answer": 3,
      "translation": "Dù lương có cao tôi cũng không làm công ty bóc lột tăng ca.",
      "explanation": "Đáp án đúng là D. Dù lương cao."
    },
    {
      "id": 33,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "「〜に加えて」を文章語（書き言葉）でより硬く表現する場合、正しい形はどれですか。",
      "options": [
        "〜に加える",
        "〜に加えた",
        "〜に加えない",
        "〜に加え"
      ],
      "answer": 3,
      "translation": "Dạng văn viết trang trọng là 〜に加え.",
      "explanation": "Đáp án đúng là D. Lược bỏ 'て' thành に加え."
    },
    {
      "id": 34,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "厳しい批判（　　）、首相は冷静に説明を続けた。",
      "options": [
        "ものか",
        "せいで",
        "によって",
        "に対して"
      ],
      "answer": 3,
      "translation": "Đối diện với những lời phê phán gắt gao, thủ tướng vẫn bình tĩnh giải thích.",
      "explanation": "Đáp án đúng là D. Đối mặt với chỉ trích."
    },
    {
      "id": 35,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "忙しすぎて、家族と電話で話す時間（　　）取れない。",
      "options": [
        "さえ",
        "せいで",
        "っぽい",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Quá bận rộn, đến thời gian gọi điện cho gia đình cũng không thu xếp được.",
      "explanation": "Đáp án đúng là A. Ngay cả việc tối thiểu."
    },
    {
      "id": 36,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "あの人は会う（　　）新しい服を着ていて、とてもおしゃれだ。",
      "options": [
        "ごとに",
        "せいで",
        "一方で",
        "ものか"
      ],
      "answer": 0,
      "translation": "Người đó cứ mỗi lần gặp lại mặc đồ mới.",
      "explanation": "Đáp án đúng là A. 「V辞書形 + ごとに」: cứ mỗi lần gặp."
    },
    {
      "id": 37,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "兄は社交的で友達が多い（　　）、弟は物静かで一人を好む性格だ。",
      "options": [
        "一方で",
        "ごとに",
        "恐れがある",
        "せいで"
      ],
      "answer": 0,
      "translation": "Anh trai hoạt bát nhiều bạn bè, trái lại em trai trầm tính thích ở một mình.",
      "explanation": "Đáp án đúng là A. So sánh đối lập 2 người."
    },
    {
      "id": 38,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この小説の面白（　　）は、読んだ人にしか分からない。",
      "options": [
        "く",
        "み",
        "さ",
        "い"
      ],
      "answer": 2,
      "translation": "Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu.",
      "explanation": "Đáp án đúng là C. 「面白さ」."
    },
    {
      "id": 39,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "鍵をかけたのだから、泥棒が簡単に入れる（　　）。",
      "options": [
        "ことだ",
        "恐れがある",
        "わけがない",
        "ものか"
      ],
      "answer": 2,
      "translation": "Đã khóa cửa cẩn thận thì trộm làm sao vào dễ thế được!",
      "explanation": "Đáp án đúng là C. Khẳng định an toàn."
    },
    {
      "id": 40,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "古い車なので、急な坂道を登り切れ（　　）。",
      "options": [
        "そうにない",
        "たばかりだ",
        "ものか",
        "恐れがある"
      ],
      "answer": 0,
      "translation": "Xe cũ nên dốc đứng thế này trông khó mà leo hết nổi.",
      "explanation": "Đáp án đúng là A. Khó leo nổi dốc."
    },
    {
      "id": 41,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "家を出（　　）のところで雨が降り出し、傘を取りに戻った。",
      "options": [
        "ているばかり",
        "るばかり",
        "たばかり",
        "そうにない"
      ],
      "answer": 2,
      "translation": "Vừa mới bước ra khỏi nhà thì trời mưa, phải quay lại lấy ô.",
      "explanation": "Đáp án đúng là C. Vừa mới ra khỏi nhà."
    },
    {
      "id": 42,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "私は飽き（　　）性格なので、何をやっても長続きしない。",
      "options": [
        "ものか",
        "そうにない",
        "っぽい",
        "たばかり"
      ],
      "answer": 2,
      "translation": "Tôi tính chóng chán nên làm gì cũng không bền.",
      "explanation": "Đáp án đúng là C. 「飽きっぽい」tính chóng chán."
    },
    {
      "id": 43,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "医療技術が進歩する（　　）、倫理的な課題も多く議論されるようになった。",
      "options": [
        "一方で",
        "っぽい",
        "せいで",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Kỹ thuật y tế tiến bộ, bên cạnh đó các vấn đề đạo đức cũng được bàn luận nhiều.",
      "explanation": "Đáp án đúng là A. Hai mặt cùng diễn ra song song."
    },
    {
      "id": 44,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "このアパートは駅から近い（　　）近いが、家賃が高すぎる。",
      "options": [
        "ことは",
        "せいで",
        "一方で",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Gần ga thì có gần thật nhưng giá quá đắt.",
      "explanation": "Đáp án đúng là A. 「AことはAが」nhượng bộ: công nhận nhưng có điểm trừ."
    },
    {
      "id": 45,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "親に反対され（　　）、私は海外留学を決意した。",
      "options": [
        "たとしても",
        "たものか",
        "たばかりに",
        "たせいで"
      ],
      "answer": 0,
      "translation": "Dù bị cha mẹ phản đối tôi vẫn quyết tâm du học.",
      "explanation": "Đáp án đúng là A. Dù bị phản đối."
    },
    {
      "id": 46,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "辞書に載っている意味が、すべての文脈に当てはまる（　　）。",
      "options": [
        "恐れがある",
        "ものか",
        "とは限らない",
        "おかげだ"
      ],
      "answer": 2,
      "translation": "Nghĩa trong từ điển chưa chắc đúng mọi ngữ cảnh.",
      "explanation": "Đáp án đúng là C. Chưa hẳn đúng mọi lúc."
    },
    {
      "id": 47,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "冬の寒（　　）が厳しくなる前に、暖房器具を用意した。",
      "options": [
        "み",
        "く",
        "い",
        "さ"
      ],
      "answer": 3,
      "translation": "Trước khi cái lạnh mùa đông buốt giá, tôi chuẩn bị lò sưởi.",
      "explanation": "Đáp án đúng là D. 「寒さ」cái lạnh."
    },
    {
      "id": 48,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "季節（　　）咲く花の種類が変わるので、四季を楽しめる。",
      "options": [
        "に対して",
        "恐れがある",
        "によって",
        "せいで"
      ],
      "answer": 2,
      "translation": "Tùy theo mùa loài hoa nở thay đổi nên ngắm được 4 mùa.",
      "explanation": "Đáp án đúng là C. Tương ứng theo mùa."
    },
    {
      "id": 49,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "名前（　　）覚えていない相手から、突然高価なプレゼントが届いた。",
      "options": [
        "ことだ",
        "おかげで",
        "せいで",
        "さえ"
      ],
      "answer": 3,
      "translation": "Từ người mà ngay cả tên tôi cũng không nhớ, bỗng nhận được quà đắt tiền.",
      "explanation": "Đáp án đúng là D. Nhấn mạnh mức độ không biết."
    },
    {
      "id": 50,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "出張中の部長の（　　）、私が代理で会議に出席します。",
      "options": [
        "代わりに",
        "おかげで",
        "ごとに",
        "恐れがあって"
      ],
      "answer": 0,
      "translation": "Thay mặt trưởng phòng đi công tác, tôi sẽ họp thay.",
      "explanation": "Đáp án đúng là A. Thay mặt ai."
    },
    {
      "id": 51,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "その法案は国会の多数決（　　）可決されました。",
      "options": [
        "によって",
        "さえ",
        "に対して",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Dự luật đó đã được thông qua bằng biểu quyết đa số ở quốc hội.",
      "explanation": "Đáp án đúng là A. Phương tiện thông qua."
    },
    {
      "id": 52,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "この中華料理は油（　　）て、胃にもたれる。",
      "options": [
        "らしく",
        "みたい",
        "っぽく",
        "がちに"
      ],
      "answer": 2,
      "translation": "Món Trung này ngấy nhiều dầu mỡ quá.",
      "explanation": "Đáp án đúng là C. 「油っぽい」nhiều dầu mỡ."
    },
    {
      "id": 53,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "文化や習慣は、国（　　）大きく異なります。",
      "options": [
        "せいで",
        "によって",
        "に対して",
        "ばかりに"
      ],
      "answer": 1,
      "translation": "Văn hóa khác nhau tùy theo mỗi quốc gia.",
      "explanation": "Đáp án đúng là B. 「N + によって」= tùy vào."
    },
    {
      "id": 54,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "彼が昨日東京にいた証拠があるのだから、犯人の（　　）。",
      "options": [
        "恐れがある",
        "ことだ",
        "わけがない",
        "おかげだ"
      ],
      "answer": 2,
      "translation": "Có chứng cứ hôm qua anh ấy ở Tokyo thì lẽ nào là thủ phạm được!",
      "explanation": "Đáp án đúng là C. Nの + わけがない."
    },
    {
      "id": 55,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "あんな危険な場所、頼まれたって行く（　　）。",
      "options": [
        "ことだ",
        "ものか",
        "に加えて",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Nơi nguy hiểm thế dù có năn nỉ tôi cũng không thèm đi.",
      "explanation": "Đáp án đúng là B. Nhất định không đi."
    },
    {
      "id": 56,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "このアパートは駅から遠い（　　）、部屋が広くて家賃も安い。",
      "options": [
        "せいで",
        "代わりに",
        "ごとに",
        "ものか"
      ],
      "answer": 1,
      "translation": "Tuy xa ga nhưng bù lại phòng rộng và giá rẻ.",
      "explanation": "Đáp án đúng là B. Bù lại khuyết điểm."
    },
    {
      "id": 57,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "天気予報が雨だと言っても、絶対に雨が降る（　　）。",
      "options": [
        "とは限らない",
        "恐れがある",
        "せいで",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Dự báo mưa chưa chắc trời đã mưa.",
      "explanation": "Đáp án đúng là A. Chưa chắc đã mưa."
    },
    {
      "id": 58,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "子供（　　）知っている常識を、なぜ大人のあなたが知らないのですか。",
      "options": [
        "さえ",
        "ごとに",
        "一方で",
        "せいで"
      ],
      "answer": 0,
      "translation": "Thường thức đến trẻ con cũng biết sao người lớn lại không biết.",
      "explanation": "Đáp án đúng là A. 「子供さえ」."
    },
    {
      "id": 59,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "毎日５時間も練習したのだから、試合に勝てない（　　）。",
      "options": [
        "恐れがある",
        "わけがない",
        "せいで",
        "ことだ"
      ],
      "answer": 1,
      "translation": "Luyện 5 tiếng mỗi ngày thì lẽ nào lại không thắng được!",
      "explanation": "Đáp án đúng là B. Phủ định kép: chắc chắn thắng."
    },
    {
      "id": 60,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "買える（　　）買えるが、今月の予算をオーバーしてしまう。",
      "options": [
        "せいで",
        "一方で",
        "恐れがある",
        "ことは"
      ],
      "answer": 3,
      "translation": "Mua thì mua được nhưng vượt quá ngân sách tháng này.",
      "explanation": "Đáp án đúng là D. Công nhận khả năng mua."
    },
    {
      "id": 61,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "インフルエンザが急速に感染拡大する（　　）がある。",
      "options": [
        "おかげ",
        "恐れ",
        "せい",
        "代わり"
      ],
      "answer": 1,
      "translation": "Có nguy cơ dịch cúm lan rộng nhanh chóng.",
      "explanation": "Đáp án đúng là B. Nguy cơ dịch bệnh."
    },
    {
      "id": 62,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "あんな嘘つきの言うことなんて、誰が信じる（　　）！",
      "options": [
        "恐れがある",
        "ものか",
        "ことだ",
        "に加えて"
      ],
      "answer": 1,
      "translation": "Lời tên nói dối đó thì ai mà tin cho được!",
      "explanation": "Đáp án đúng là B. Ai mà thèm tin."
    },
    {
      "id": 63,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "パソコンの調子が悪いときは、まず再起動してみる（　　）よ。",
      "options": [
        "せいで",
        "さえ",
        "ことだ",
        "ものか"
      ],
      "answer": 2,
      "translation": "Khi máy tính trục trặc, tốt nhất nên thử khởi động lại xem sao.",
      "explanation": "Đáp án đúng là C. Khuyên cách xử lý."
    },
    {
      "id": 64,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "早く風邪が治っ（　　）から、栄養のあるスープを作った。",
      "options": [
        "たばかり",
        "るせいで",
        "るものか",
        "てほしい"
      ],
      "answer": 3,
      "translation": "Muốn bạn mau khỏi ốm nên tôi nấu canh bổ dưỡng.",
      "explanation": "Đáp án đúng là D. 「治ってほしい」."
    },
    {
      "id": 65,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "大学を卒業し（　　）の若手社員たちが研修を受けている。",
      "options": [
        "たばかり",
        "るばかり",
        "ているばかり",
        "そうにない"
      ],
      "answer": 0,
      "translation": "Các nhân viên trẻ vừa tốt nghiệp đại học đang được đào tạo.",
      "explanation": "Đáp án đúng là A. Vừa tốt nghiệp."
    },
    {
      "id": 66,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "「さっきお昼ご飯を食べ（　　）なのに、もうお腹が空いたの？」",
      "options": [
        "そうにない",
        "たばかり",
        "ないばかり",
        "るばかり"
      ],
      "answer": 1,
      "translation": "Vừa mới ăn cơm trưa xong giờ lại đói rồi à?",
      "explanation": "Đáp án đúng là B. Vừa mới ăn lúc nãy."
    },
    {
      "id": 67,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "後悔したくないなら、今できる全力を尽くす（　　）。",
      "options": [
        "恐れがある",
        "ことだ",
        "ものか",
        "おかげだ"
      ],
      "answer": 1,
      "translation": "Nếu không muốn hối hận thì hãy dốc toàn lực làm ngay lúc này.",
      "explanation": "Đáp án đúng là B. Lời khuyên tâm huyết."
    },
    {
      "id": 68,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "「あの映画、面白かった？」「面白かった（　　）。途中で寝ちゃったよ。」",
      "options": [
        "ものか",
        "ことだ",
        "おかげで",
        "恐れがある"
      ],
      "answer": 0,
      "translation": "Hay nỗi gì! Tôi ngủ gật giữa chừng luôn đấy.",
      "explanation": "Đáp án đúng là A. Phủ định mỉa mai."
    },
    {
      "id": 69,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "家族が支えてくれた（　　）、長い留学生活を無事に乗り越えられた。",
      "options": [
        "恐れがある",
        "おかげで",
        "一方で",
        "せいで"
      ],
      "answer": 1,
      "translation": "Nhờ gia đình ủng hộ nên tôi đã vượt qua thời gian du học bình an.",
      "explanation": "Đáp án đúng là B. Kết quả tốt đẹp nhờ người thân."
    },
    {
      "id": 70,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "すみませんが、この荷物を２階まで運ん（　　）のですが。",
      "options": [
        "でほしい",
        "だばかり",
        "でほしいことだ",
        "でものか"
      ],
      "answer": 0,
      "translation": "Bạn có thể mang giúp kiện hàng này lên tầng 2 được không?",
      "explanation": "Đáp án đúng là A. 「Vてほしい」nhờ vả, mong người khác làm."
    },
    {
      "id": 71,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "景気が悪い（　　）ボーナスが大幅にカットされた。",
      "options": [
        "せいで",
        "おかげで",
        "一方で",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Tại vì kinh tế kém nên tiền thưởng bị cắt.",
      "explanation": "Đáp án đúng là A. Nguyên nhân gây thiệt hại."
    },
    {
      "id": 72,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "失敗する（　　）改善点を見つけていけば、必ず成長できる。",
      "options": [
        "せいで",
        "ごとに",
        "として",
        "っぽく"
      ],
      "answer": 1,
      "translation": "Cứ mỗi lần thất bại nếu tìm ra điểm khắc phục thì sẽ trưởng thành.",
      "explanation": "Đáp án đúng là B. 「V辞書形 + ごとに」: cứ mỗi lần..."
    },
    {
      "id": 73,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "あの子はまだ中学生なのに、とても大人（　　）。",
      "options": [
        "たばかり",
        "っぽい",
        "そうにない",
        "ものか"
      ],
      "answer": 1,
      "translation": "Đứa bé mới cấp 2 mà trông rất giống người lớn.",
      "explanation": "Đáp án đúng là B. 「大人っぽい」chững chạc."
    },
    {
      "id": 74,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "空は真っ黒な雲に覆われ、雨はしばらくやみ（　　）。",
      "options": [
        "恐れがある",
        "たばかりだ",
        "そうもない",
        "に加えて"
      ],
      "answer": 2,
      "translation": "Trời mây đen kịt, mưa trông có vẻ khó mà tạnh sớm.",
      "explanation": "Đáp án đúng là C. 「やみそうもない」."
    },
    {
      "id": 75,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "インターネット（　　）、世界中のニュースが瞬時に伝わる。",
      "options": [
        "ことだ",
        "によって",
        "に対して",
        "せいで"
      ],
      "answer": 1,
      "translation": "Nhờ có internet, tin tức toàn cầu truyền đi chớp mắt.",
      "explanation": "Đáp án đúng là B. Phương tiện / cách thức."
    },
    {
      "id": 76,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "祖父は最近歳をとったせいか、とても忘れ（　　）なった。",
      "options": [
        "がちに",
        "っぽく",
        "らしく",
        "そうに"
      ],
      "answer": 1,
      "translation": "Ông tôi dạo này có tuổi nên trở nên rất hay quên.",
      "explanation": "Đáp án đúng là B. 「忘れっぽい」tính hay quên."
    },
    {
      "id": 77,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "田中さんは英語（　　）、中国語とフランス語も流暢に話せる。",
      "options": [
        "に加えて",
        "せいで",
        "ごとに",
        "恐れがあって"
      ],
      "answer": 0,
      "translation": "Anh Tanaka không chỉ tiếng Anh thêm vào đó còn nói tiếng Trung, Pháp.",
      "explanation": "Đáp án đúng là A. 「N + に加えて」thêm vào đó."
    },
    {
      "id": 78,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "値段が高いものが、必ずしも品質が良い（　　）。",
      "options": [
        "に決まっている",
        "恐れがある",
        "ことだ",
        "とは限らない"
      ],
      "answer": 3,
      "translation": "Đồ đắt tiền chưa chắc chất lượng đã tốt.",
      "explanation": "Đáp án đúng là D. 「〜とは限らない」chưa chắc là."
    },
    {
      "id": 79,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "日本語が上手になりたかったら、恥ずかしがらずに話す（　　）。",
      "options": [
        "わけがない",
        "ことだ",
        "恐れがある",
        "ものか"
      ],
      "answer": 1,
      "translation": "Muốn giỏi tiếng Nhật thì nên mạnh dạn nói đừng ngại.",
      "explanation": "Đáp án đúng là B. Khuyên nên làm gì."
    },
    {
      "id": 80,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "彼の仕事の正確（　　）には、誰もが一目置いている。",
      "options": [
        "さ",
        "み",
        "く",
        "い"
      ],
      "answer": 0,
      "translation": "Độ chính xác trong công việc của anh ấy ai cũng nể phục.",
      "explanation": "Đáp án đúng là A. 「正確さ」tính từ đuôi na."
    },
    {
      "id": 81,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "個人情報が外部に流出する（　　）が指摘されている。",
      "options": [
        "おかげ",
        "代わり",
        "恐れ",
        "せい"
      ],
      "answer": 2,
      "translation": "Đang bị cảnh báo có nguy cơ rò rỉ thông tin cá nhân ra ngoài.",
      "explanation": "Đáp án đúng là C. Nguy cơ rò rỉ dữ liệu."
    },
    {
      "id": 82,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "誰に何を言われ（　　）、自分の夢を諦めるつもりはありません。",
      "options": [
        "るごとに",
        "たおかげで",
        "たものか",
        "たとしても"
      ],
      "answer": 3,
      "translation": "Dù bị ai nói gì tôi cũng không từ bỏ ước mơ.",
      "explanation": "Đáp án đúng là D. Cho dù bị ai nói gì."
    },
    {
      "id": 83,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "観光地としての魅力（　　）、交通の便の良さも人気の理由だ。",
      "options": [
        "ごとに",
        "としても",
        "に加えて",
        "のせいで"
      ],
      "answer": 2,
      "translation": "Sức hút du lịch thêm vào đó giao thông thuận tiện tạo nên sự nổi tiếng.",
      "explanation": "Đáp án đúng là C. Thêm điểm cộng."
    },
    {
      "id": 84,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "円安で輸出企業が利益を上げる（　　）、輸入企業は厳しい状況に直面している。",
      "options": [
        "ごとに",
        "おかげで",
        "一方で",
        "ものか"
      ],
      "answer": 2,
      "translation": "Đồng Yên giảm giúp doanh nghiệp xuất khẩu có lãi nhưng doanh nghiệp nhập khẩu gặp khó.",
      "explanation": "Đáp án đúng là C. Đối lập giữa 2 đối tượng."
    },
    {
      "id": 85,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "危険な場所には近づか（　　）と注意した。",
      "options": [
        "ないでほしい",
        "なければならない",
        "なくてよい",
        "てほしい"
      ],
      "answer": 0,
      "translation": "Tôi dặn mong họ đừng lại gần nơi nguy hiểm.",
      "explanation": "Đáp án đúng là A. Phủ định: ないでほしい."
    },
    {
      "id": 86,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "プロの料理人が作ったのだから、まずい（　　）。",
      "options": [
        "せいで",
        "ことだ",
        "わけがない",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Đầu bếp chuyên nghiệp nấu thì làm sao mà dở được!",
      "explanation": "Đáp án đúng là C. Chắc chắn ngon."
    },
    {
      "id": 87,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "彼女は仕事に情熱を注ぐ（　　）、休日は家族との時間を大切にしている。",
      "options": [
        "さえ",
        "ものか",
        "一方で",
        "せいで"
      ],
      "answer": 2,
      "translation": "Cô ấy hết mình vì công việc, song song đó trân trọng gia đình.",
      "explanation": "Đáp án đúng là C. 「一方で」diễn tả đồng thời 2 việc song song."
    },
    {
      "id": 88,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "予算が足りないため、この計画は実現でき（　　）。",
      "options": [
        "たばかりだ",
        "さ",
        "ものか",
        "そうにない"
      ],
      "answer": 3,
      "translation": "Ngân sách thiếu hụt nên kế hoạch khó mà thực hiện được.",
      "explanation": "Đáp án đúng là D. Khó thành hiện thực."
    },
    {
      "id": 89,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "激しい雨（　　）強い風も吹き荒れ、外出が極めて危険な状態だ。",
      "options": [
        "としても",
        "のおかげで",
        "たばかりで",
        "に加えて"
      ],
      "answer": 3,
      "translation": "Mưa to thêm vào đó gió giật mạnh, ra ngoài rất nguy hiểm.",
      "explanation": "Đáp án đúng là D. Mưa to kèm gió lớn."
    },
    {
      "id": 90,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "会社に入社し（　　）なので、まだ仕事の流れに慣れていません。",
      "options": [
        "たばかり",
        "ているばかり",
        "るばかり",
        "そうにない"
      ],
      "answer": 0,
      "translation": "Tôi vừa mới vào công ty nên chưa quen quy trình việc.",
      "explanation": "Đáp án đúng là A. Vừa mới vào làm."
    },
    {
      "id": 91,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "天気が良かった（　　）、富士山の頂上まできれいに見えました。",
      "options": [
        "恐れがあって",
        "ごとに",
        "おかげで",
        "せいで"
      ],
      "answer": 2,
      "translation": "Nhờ thời tiết đẹp nên ngắm rõ đỉnh núi Phú Sĩ.",
      "explanation": "Đáp án đúng là C. Nguyên nhân tích cực."
    },
    {
      "id": 92,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "明日から旅行に行くので、天気が晴れ（　　）。",
      "options": [
        "るせいで",
        "る一方で",
        "てほしい",
        "てならない"
      ],
      "answer": 2,
      "translation": "Mai đi du lịch nên mong sao trời sẽ nắng ráo.",
      "explanation": "Đáp án đúng là C. Ước nguyện thời tiết."
    },
    {
      "id": 93,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "車を運転できる（　　）できますが、高速道路は怖くて走れません。",
      "options": [
        "恐れがある",
        "ごとに",
        "ことは",
        "せいで"
      ],
      "answer": 2,
      "translation": "Lái xe thì lái được thật nhưng đường cao tốc thì không dám đi.",
      "explanation": "Đáp án đúng là C. Lặp lại động từ."
    },
    {
      "id": 94,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "日本に長く住んでいるからといって、敬語が完璧に使える（　　）。",
      "options": [
        "おかげだ",
        "ことにする",
        "とは限らない",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Sống ở Nhật lâu chưa chắc đã dùng kính ngữ chuẩn.",
      "explanation": "Đáp án đúng là C. Chưa chắc đã thành thạo."
    },
    {
      "id": 95,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "桜の季節になると、日（　　）暖かくなっていくのを感じる。",
      "options": [
        "ごとに",
        "恐れ",
        "一方で",
        "さえ"
      ],
      "answer": 0,
      "translation": "Mỗi khi mùa hoa anh đào đến, lại cảm nhận trời ấm dần lên từng ngày.",
      "explanation": "Đáp án đúng là A. 「日ごとに」: từng ngày một, ngày qua ngày."
    },
    {
      "id": 96,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "電子書籍の利用者が増えている（　　）、紙の本の売り上げは減少している。",
      "options": [
        "一方で",
        "ことだ",
        "ごとに",
        "おかげで"
      ],
      "answer": 0,
      "translation": "Người dùng sách điện tử tăng trong khi sách giấy giảm.",
      "explanation": "Đáp án đúng là A. Đối lập giữa 2 xu hướng trái chiều."
    },
    {
      "id": 97,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "台風が接近しているため、大雨による河川の氾濫の（　　）。",
      "options": [
        "恐れがある",
        "ことだ",
        "おかげだ",
        "ものか"
      ],
      "answer": 0,
      "translation": "Bão đến gần có nguy cơ nước sông tràn bờ.",
      "explanation": "Đáp án đúng là A. 「〜恐れがある」nguy cơ xấu."
    },
    {
      "id": 98,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "あの計画が成功した（　　）、莫大な費用がかかるので現実的ではない。",
      "options": [
        "ものか",
        "としても",
        "ごとに",
        "せいで"
      ],
      "answer": 1,
      "translation": "Kế hoạch dù có thành công thì quá tốn kém nên không khả thi.",
      "explanation": "Đáp án đúng là B. Dù thành công."
    },
    {
      "id": 99,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "現金で支払う（　　）、電子マネーで決済するとポイントが付く。",
      "options": [
        "さ",
        "せいで",
        "代わりに",
        "ものか"
      ],
      "answer": 2,
      "translation": "Thay vì trả tiền mặt, thanh toán ví điện tử sẽ được điểm.",
      "explanation": "Đáp án đúng là C. Thay đổi hình thức trả tiền."
    },
    {
      "id": 100,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "今回の新型スマホは、性能の向上（　　）デザインの美しさも評価されている。",
      "options": [
        "に加えて",
        "としても",
        "ものか",
        "のせいで"
      ],
      "answer": 0,
      "translation": "Điện thoại mới bên cạnh hiệu năng thêm vào đó thiết kế cũng đẹp.",
      "explanation": "Đáp án đúng là A. Bổ sung ưu điểm."
    }
  ],
  "3": [
    {
      "id": 1,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "彼の怒りは相当激しく、簡単には許してくれ（　　）。",
      "options": [
        "たばかりだ",
        "そうにない",
        "ものか",
        "ことだ"
      ],
      "answer": 1,
      "translation": "Cơn giận của anh ấy gay gắt, có vẻ không dễ tha thứ.",
      "explanation": "Đáp án đúng là B. Khó được tha."
    },
    {
      "id": 2,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "彼女は仕事に情熱を注ぐ（　　）、休日は家族との時間を大切にしている。",
      "options": [
        "一方で",
        "さえ",
        "ものか",
        "せいで"
      ],
      "answer": 0,
      "translation": "Cô ấy hết mình vì công việc, song song đó trân trọng gia đình.",
      "explanation": "Đáp án đúng là A. 「一方で」diễn tả đồng thời 2 việc song song."
    },
    {
      "id": 3,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "仮にその話が本当だ（　　）、彼を許すことはできない。",
      "options": [
        "ものか",
        "ごとに",
        "としても",
        "せいで"
      ],
      "answer": 2,
      "translation": "Cho dù chuyện đó là thật tôi cũng không tha thứ cho anh ấy.",
      "explanation": "Đáp án đúng là C. Dù là sự thật."
    },
    {
      "id": 4,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "あんなに一生懸命準備したプレゼンが、失敗する（　　）。",
      "options": [
        "恐れがある",
        "ことだ",
        "せいで",
        "わけがない"
      ],
      "answer": 3,
      "translation": "Chuẩn bị bài thuyết trình công phu thế thì làm sao thất bại được!",
      "explanation": "Đáp án đúng là D. Tự tin không thể hỏng."
    },
    {
      "id": 5,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "インターネットは情報を素早く得られる（　　）、誤情報が広がりやすいリスクもある。",
      "options": [
        "せいで",
        "たばかり",
        "一方で",
        "さえ"
      ],
      "answer": 2,
      "translation": "Internet giúp tra thông tin nhanh, mặt khác có nguy cơ lan truyền tin giả.",
      "explanation": "Đáp án đúng là C. Mặt lợi và mặt hại đối lập."
    },
    {
      "id": 6,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "試験に合格したいなら、毎日復習を怠ら（　　）。",
      "options": [
        "ないことだ",
        "ないものか",
        "ないごとに",
        "ないせいで"
      ],
      "answer": 0,
      "translation": "Muốn thi đỗ thì tốt nhất không nên lơ là ôn tập.",
      "explanation": "Đáp án đúng là A. 「Vないことだ」khuyên không nên."
    },
    {
      "id": 7,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "プロの料理人が作ったのだから、まずい（　　）。",
      "options": [
        "わけがない",
        "ことだ",
        "せいで",
        "恐れがある"
      ],
      "answer": 0,
      "translation": "Đầu bếp chuyên nghiệp nấu thì làm sao mà dở được!",
      "explanation": "Đáp án đúng là A. Chắc chắn ngon."
    },
    {
      "id": 8,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "台風が接近しているため、大雨による河川の氾濫の（　　）。",
      "options": [
        "おかげだ",
        "恐れがある",
        "ことだ",
        "ものか"
      ],
      "answer": 1,
      "translation": "Bão đến gần có nguy cơ nước sông tràn bờ.",
      "explanation": "Đáp án đúng là B. 「〜恐れがある」nguy cơ xấu."
    },
    {
      "id": 9,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "親に反対され（　　）、私は海外留学を決意した。",
      "options": [
        "たとしても",
        "たせいで",
        "たばかりに",
        "たものか"
      ],
      "answer": 0,
      "translation": "Dù bị cha mẹ phản đối tôi vẫn quyết tâm du học.",
      "explanation": "Đáp án đúng là A. Dù bị phản đối."
    },
    {
      "id": 10,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "危険な場所には近づか（　　）と注意した。",
      "options": [
        "なければならない",
        "ないでほしい",
        "てほしい",
        "なくてよい"
      ],
      "answer": 1,
      "translation": "Tôi dặn mong họ đừng lại gần nơi nguy hiểm.",
      "explanation": "Đáp án đúng là B. Phủ định: ないでほしい."
    },
    {
      "id": 11,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "もし明日世界が終わる（　　）、私はいつも通りリンゴの木を植えるだろう。",
      "options": [
        "ごとに",
        "せいで",
        "ものか",
        "としても"
      ],
      "answer": 3,
      "translation": "Cho dù mai ngày tận thế tôi vẫn sẽ trồng cây táo như thường.",
      "explanation": "Đáp án đúng là D. Dù tận thế."
    },
    {
      "id": 12,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "この料理は美味しい（　　）美味しいが、作るのに時間がかかる。",
      "options": [
        "さえ",
        "せいで",
        "ごとに",
        "ことは"
      ],
      "answer": 3,
      "translation": "Ngon thì ngon thật nhưng nấu mất nhiều thời gian.",
      "explanation": "Đáp án đúng là D. 「イAことはイAが」."
    },
    {
      "id": 13,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "定期的な運動（　　）、健康を維持することができます。",
      "options": [
        "に対して",
        "ごとに",
        "せいで",
        "によって"
      ],
      "answer": 3,
      "translation": "Bằng việc vận động định kỳ có thể giữ gìn sức khỏe.",
      "explanation": "Đáp án đúng là D. Chỉ phương pháp, cách thức."
    },
    {
      "id": 14,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "兄は社交的で友達が多い（　　）、弟は物静かで一人を好む性格だ。",
      "options": [
        "ごとに",
        "一方で",
        "せいで",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Anh trai hoạt bát nhiều bạn bè, trái lại em trai trầm tính thích ở một mình.",
      "explanation": "Đáp án đúng là B. So sánh đối lập 2 người."
    },
    {
      "id": 15,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "激しい雨（　　）強い風も吹き荒れ、外出が極めて危険な状態だ。",
      "options": [
        "に加えて",
        "としても",
        "たばかりで",
        "のおかげで"
      ],
      "answer": 0,
      "translation": "Mưa to thêm vào đó gió giật mạnh, ra ngoài rất nguy hiểm.",
      "explanation": "Đáp án đúng là A. Mưa to kèm gió lớn."
    },
    {
      "id": 16,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "いい大人のくせに、そんな子供（　　）わがままを言うな。",
      "options": [
        "っぽい",
        "たばかり",
        "ものか",
        "そうにない"
      ],
      "answer": 0,
      "translation": "Người lớn rồi đừng có nhõng nhẽo trẻ con như thế.",
      "explanation": "Đáp án đúng là A. 「子供っぽい」tính trẻ con."
    },
    {
      "id": 17,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "厳しい寒さ（　　）大雪に見舞われ、交通網が完全に麻痺した。",
      "options": [
        "に加えて",
        "ごとに",
        "としても",
        "のおかげで"
      ],
      "answer": 0,
      "translation": "Rét đậm cộng thêm tuyết rơi dày khiến giao thông tê liệt.",
      "explanation": "Đáp án đúng là A. Rét cộng tuyết lớn."
    },
    {
      "id": 18,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "自分の夢をこんなところで諦めてたまる（　　）。",
      "options": [
        "ことだ",
        "ものか",
        "おかげだ",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Đời nào tôi chịu bỏ cuộc ước mơ ở nơi thế này!",
      "explanation": "Đáp án đúng là B. Không từ bỏ."
    },
    {
      "id": 19,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "このスープは水（　　）て、あまり美味しくない。",
      "options": [
        "そうに",
        "っぽく",
        "みたい",
        "らしく"
      ],
      "answer": 1,
      "translation": "Món súp này nhiều nước (loãng toẹt), không ngon.",
      "explanation": "Đáp án đúng là B. 「水っぽい」loãng, nhiều nước."
    },
    {
      "id": 20,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "自分の間違い（　　）認められない人は、成長することができない。",
      "options": [
        "さ",
        "一方で",
        "さえ",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Người mà ngay cả lỗi sai của mình cũng không thừa nhận thì không thể tiến bộ.",
      "explanation": "Đáp án đúng là C. Ngay cả lỗi bản thân."
    },
    {
      "id": 21,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "私は飽き（　　）性格なので、何をやっても長続きしない。",
      "options": [
        "ものか",
        "たばかり",
        "そうにない",
        "っぽい"
      ],
      "answer": 3,
      "translation": "Tôi tính chóng chán nên làm gì cũng không bền.",
      "explanation": "Đáp án đúng là D. 「飽きっぽい」tính chóng chán."
    },
    {
      "id": 22,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "火の不始末から大規模な火災に発展する（　　）。",
      "options": [
        "ものか",
        "おかげだ",
        "ことだ",
        "恐れがある"
      ],
      "answer": 3,
      "translation": "Sơ suất tàn lửa có nguy cơ phát triển thành hỏa hoạn lớn.",
      "explanation": "Đáp án đúng là D. Nguy cơ cháy nổ."
    },
    {
      "id": 23,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "ページをめくる（　　）新しい発見があり、とても面白い本だ。",
      "options": [
        "せいで",
        "ぽい",
        "代わりに",
        "ごとに"
      ],
      "answer": 3,
      "translation": "Cứ mỗi lần lật một trang lại có phát hiện mới, cuốn sách rất hay.",
      "explanation": "Đáp án đúng là D. 「めくるごとに」: cứ mỗi lần lật trang."
    },
    {
      "id": 24,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "この鳥は生息地が減少し、絶滅の（　　）があると言われている。",
      "options": [
        "恐れ",
        "代わり",
        "おかげ",
        "せい"
      ],
      "answer": 0,
      "translation": "Loài chim này có nguy cơ tuyệt chủng.",
      "explanation": "Đáp án đúng là A. 「絶滅のおそれがある」."
    },
    {
      "id": 25,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "大切な記念日だから、二人でゆっくり過ごし（　　）。",
      "options": [
        "る恐れがある",
        "るごとに",
        "たばかり",
        "てほしい"
      ],
      "answer": 3,
      "translation": "Ngày kỷ niệm quan trọng nên muốn cả hai bên nhau trọn vẹn.",
      "explanation": "Đáp án đúng là D. Mong ước."
    },
    {
      "id": 26,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "昨日掃除をし（　　）なのに、子供たちがもう部屋を散らかした。",
      "options": [
        "ているばかり",
        "るばかり",
        "そうにない",
        "たばかり"
      ],
      "answer": 3,
      "translation": "Mới dọn hôm qua mà tụi nhỏ lại bày bừa rồi.",
      "explanation": "Đáp án đúng là D. Vừa mới dọn xong."
    },
    {
      "id": 27,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "毎日練習したからといって、必ず試合に勝てる（　　）。",
      "options": [
        "とは限らない",
        "ことだ",
        "恐れがある",
        "せいで"
      ],
      "answer": 0,
      "translation": "Tập mỗi ngày chưa chắc đã thắng trận.",
      "explanation": "Đáp án đúng là A. Chưa chắc thắng."
    },
    {
      "id": 28,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "天気が良かった（　　）、富士山の頂上まできれいに見えました。",
      "options": [
        "せいで",
        "おかげで",
        "ごとに",
        "恐れがあって"
      ],
      "answer": 1,
      "translation": "Nhờ thời tiết đẹp nên ngắm rõ đỉnh núi Phú Sĩ.",
      "explanation": "Đáp án đúng là B. Nguyên nhân tích cực."
    },
    {
      "id": 29,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "鍵をかけたのだから、泥棒が簡単に入れる（　　）。",
      "options": [
        "ものか",
        "わけがない",
        "ことだ",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Đã khóa cửa cẩn thận thì trộm làm sao vào dễ thế được!",
      "explanation": "Đáp án đúng là B. Khẳng định an toàn."
    },
    {
      "id": 30,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "専門知識（　　）豊かな実務経験を持つ人材が求められている。",
      "options": [
        "に加えて",
        "のおかげで",
        "としても",
        "ものか"
      ],
      "answer": 0,
      "translation": "Đang tuyển nhân sự có kiến thức chuyên môn cộng thêm kinh nghiệm phong phú.",
      "explanation": "Đáp án đúng là A. Kiến thức cộng kinh nghiệm."
    },
    {
      "id": 31,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "遅刻しそうだから、電車が時間通りに来（　　）。",
      "options": [
        "るせいで",
        "るものか",
        "てほしい",
        "たばかり"
      ],
      "answer": 2,
      "translation": "Sắp muộn rồi nên mong tàu đến đúng giờ.",
      "explanation": "Đáp án đúng là C. Mong hiện tượng xảy ra."
    },
    {
      "id": 32,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "古い車なので、急な坂道を登り切れ（　　）。",
      "options": [
        "ものか",
        "恐れがある",
        "たばかりだ",
        "そうにない"
      ],
      "answer": 3,
      "translation": "Xe cũ nên dốc đứng thế này trông khó mà leo hết nổi.",
      "explanation": "Đáp án đúng là D. Khó leo nổi dốc."
    },
    {
      "id": 33,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "冬の寒（　　）が厳しくなる前に、暖房器具を用意した。",
      "options": [
        "さ",
        "み",
        "く",
        "い"
      ],
      "answer": 0,
      "translation": "Trước khi cái lạnh mùa đông buốt giá, tôi chuẩn bị lò sưởi.",
      "explanation": "Đáp án đúng là A. 「寒さ」cái lạnh."
    },
    {
      "id": 34,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "明日の試合、たとえ雨が降っ（　　）予定通り決行されます。",
      "options": [
        "たばかりに",
        "たものか",
        "たとしても",
        "たせいで"
      ],
      "answer": 2,
      "translation": "Dù trời có mưa trận đấu vẫn diễn ra đúng lịch.",
      "explanation": "Đáp án đúng là C. Dù mưa cũng thi đấu."
    },
    {
      "id": 35,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "都会の生活は便利な（　　）、生活費が高くストレスも多い。",
      "options": [
        "一方で",
        "ごとに",
        "おかげで",
        "せいで"
      ],
      "answer": 0,
      "translation": "Cuộc sống thành thị tiện lợi nhưng chi phí đắt đỏ.",
      "explanation": "Đáp án đúng là A. 「普通形 + 一方で」nêu 2 mặt đối lập."
    },
    {
      "id": 36,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "大手企業だからといって、将来ずっと安定している（　　）。",
      "options": [
        "恐れがある",
        "ことだ",
        "とは限らない",
        "ものか"
      ],
      "answer": 2,
      "translation": "Doanh nghiệp lớn chưa hẳn tương lai đã mãi ổn định.",
      "explanation": "Đáp án đúng là C. Chưa chắc ổn định."
    },
    {
      "id": 37,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "お金を貯めたいなら、無駄遣いをやめる（　　）だ。",
      "options": [
        "こと",
        "もの",
        "わけ",
        "せい"
      ],
      "answer": 0,
      "translation": "Muốn tiết kiệm tiền thì nên ngừng tiêu xài hoang phí.",
      "explanation": "Đáp án đúng là A. 「〜ことだ」."
    },
    {
      "id": 38,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この小説の面白（　　）は、読んだ人にしか分からない。",
      "options": [
        "い",
        "み",
        "さ",
        "く"
      ],
      "answer": 2,
      "translation": "Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu.",
      "explanation": "Đáp án đúng là C. 「面白さ」."
    },
    {
      "id": 39,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "車を買う（　　）、家族で海外旅行に行くことにした。",
      "options": [
        "恐れがある",
        "せいで",
        "代わりに",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Thay vì mua ô tô, nhà tôi quyết định đi du lịch nước ngoài.",
      "explanation": "Đáp án đúng là C. Lựa chọn thay thế."
    },
    {
      "id": 40,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "若者の政治（　　）関心が薄れていると言われている。",
      "options": [
        "に対する",
        "によって",
        "による",
        "について"
      ],
      "answer": 0,
      "translation": "Sự quan tâm của giới trẻ đối với chính trị đang mờ nhạt dần.",
      "explanation": "Đáp án đúng là A. 「政治に対する関心」."
    },
    {
      "id": 41,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "あの二人は意見が対立していて、話し合いはまとまり（　　）。",
      "options": [
        "たばかりだ",
        "そうにない",
        "ことだ",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Ý kiến hai người đối lập, cuộc thảo luận khó đi tới thống nhất.",
      "explanation": "Đáp án đúng là B. Khó thống nhất."
    },
    {
      "id": 42,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この荷物の（　　）を測ってから、送料を計算してください。",
      "options": [
        "重い",
        "重さ",
        "重く",
        "重いさ"
      ],
      "answer": 1,
      "translation": "Cân độ nặng hành lý rồi tính phí ship.",
      "explanation": "Đáp án đúng là B. 「重い」→「重さ」độ nặng."
    },
    {
      "id": 43,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "現金で支払う（　　）、電子マネーで決済するとポイントが付く。",
      "options": [
        "ものか",
        "さ",
        "せいで",
        "代わりに"
      ],
      "answer": 3,
      "translation": "Thay vì trả tiền mặt, thanh toán ví điện tử sẽ được điểm.",
      "explanation": "Đáp án đúng là D. Thay đổi hình thức trả tiền."
    },
    {
      "id": 44,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "年齢を重ねる（　　）、健康のありがたみが身に染みてわかる。",
      "options": [
        "せいで",
        "ごとに",
        "ものか",
        "おかげで"
      ],
      "answer": 1,
      "translation": "Cứ mỗi khi thêm tuổi lại càng thấm thía giá trị của sức khỏe.",
      "explanation": "Đáp án đúng là B. 「重ねるごとに」: cứ mỗi lần thêm tuổi."
    },
    {
      "id": 45,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "不注意（　　）事故を防ぐために、確認を徹底しましょう。",
      "options": [
        "によるの",
        "に対する",
        "による",
        "に向けた"
      ],
      "answer": 2,
      "translation": "Để ngừa tai nạn do bất cẩn, hãy kiểm tra kỹ.",
      "explanation": "Đáp án đúng là C. Bổ nghĩa danh từ: 「NによるN」."
    },
    {
      "id": 46,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "パソコンの調子が悪いときは、まず再起動してみる（　　）よ。",
      "options": [
        "ことだ",
        "さえ",
        "ものか",
        "せいで"
      ],
      "answer": 0,
      "translation": "Khi máy tính trục trặc, tốt nhất nên thử khởi động lại xem sao.",
      "explanation": "Đáp án đúng là A. Khuyên cách xử lý."
    },
    {
      "id": 47,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "最新の医療技術の（　　）、多くの人命が救われるようになった。",
      "options": [
        "恐れがある",
        "おかげで",
        "せいで",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Nhờ công nghệ y tế mới nhất mà nhiều sinh mạng được cứu.",
      "explanation": "Đáp án đúng là B. 「Nの + おかげで」."
    },
    {
      "id": 48,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "どんなに給料が高い（　　）、残業ばかりのブラック企業では働きたくない。",
      "options": [
        "としても",
        "ごとに",
        "せいで",
        "ものか"
      ],
      "answer": 0,
      "translation": "Dù lương có cao tôi cũng không làm công ty bóc lột tăng ca.",
      "explanation": "Đáp án đúng là A. Dù lương cao."
    },
    {
      "id": 49,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "子供（　　）知っている常識を、なぜ大人のあなたが知らないのですか。",
      "options": [
        "ごとに",
        "一方で",
        "せいで",
        "さえ"
      ],
      "answer": 3,
      "translation": "Thường thức đến trẻ con cũng biết sao người lớn lại không biết.",
      "explanation": "Đáp án đúng là D. 「子供さえ」."
    },
    {
      "id": 50,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "観光地としての魅力（　　）、交通の便の良さも人気の理由だ。",
      "options": [
        "ごとに",
        "のせいで",
        "に加えて",
        "としても"
      ],
      "answer": 2,
      "translation": "Sức hút du lịch thêm vào đó giao thông thuận tiện tạo nên sự nổi tiếng.",
      "explanation": "Đáp án đúng là C. Thêm điểm cộng."
    },
    {
      "id": 51,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "人気のある店だからといって、自分の口に合う（　　）。",
      "options": [
        "おかげだ",
        "ごとに",
        "恐れがある",
        "とは限らない"
      ],
      "answer": 3,
      "translation": "Quán đông khách chưa chắc đã hợp khẩu vị mình.",
      "explanation": "Đáp án đúng là D. Chưa chắc hợp miệng."
    },
    {
      "id": 52,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "桜の季節になると、日（　　）暖かくなっていくのを感じる。",
      "options": [
        "さえ",
        "ごとに",
        "恐れ",
        "一方で"
      ],
      "answer": 1,
      "translation": "Mỗi khi mùa hoa anh đào đến, lại cảm nhận trời ấm dần lên từng ngày.",
      "explanation": "Đáp án đúng là B. 「日ごとに」: từng ngày một, ngày qua ngày."
    },
    {
      "id": 53,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "台風の被害（　　）、地震まで発生して現地は混乱している。",
      "options": [
        "としても",
        "たばかりで",
        "に加えて",
        "のおかげで"
      ],
      "answer": 2,
      "translation": "Bị bão tàn phá thêm vào đó động đất xảy ra khiến hiện trường hỗn loạn.",
      "explanation": "Đáp án đúng là C. Thiên tai chồng chất."
    },
    {
      "id": 54,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "スマートフォンの見すぎの（　　）、最近急に視力が落ちてきた。",
      "options": [
        "おかげで",
        "ごとに",
        "一方で",
        "せいで"
      ],
      "answer": 3,
      "translation": "Tại xem điện thoại quá nhiều nên dạo này thị lực giảm mạnh.",
      "explanation": "Đáp án đúng là D. Hậu quả xấu đối với sức khỏe."
    },
    {
      "id": 55,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "彼は優秀な研究者である（　　）、大学で学生を教える教育者でもある。",
      "options": [
        "せいで",
        "一方で",
        "っぽい",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Anh ấy vừa là nhà nghiên cứu giỏi vừa là nhà giáo dục.",
      "explanation": "Đáp án đúng là B. 「である一方で」nêu 2 vai trò song song."
    },
    {
      "id": 56,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "毎日５時間も練習したのだから、試合に勝てない（　　）。",
      "options": [
        "せいで",
        "ことだ",
        "わけがない",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Luyện 5 tiếng mỗi ngày thì lẽ nào lại không thắng được!",
      "explanation": "Đáp án đúng là C. Phủ định kép: chắc chắn thắng."
    },
    {
      "id": 57,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "あの映画は見た（　　）見たけれど、内容をほとんど覚えていない。",
      "options": [
        "ことは",
        "せいで",
        "おかげで",
        "ものか"
      ],
      "answer": 0,
      "translation": "Xem thì có xem thật nhưng gần như không nhớ nội dung.",
      "explanation": "Đáp án đúng là A. Đã xem nhưng không nhớ."
    },
    {
      "id": 58,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "地震（　　）津波の危険があるため、警報が発令された。",
      "options": [
        "について",
        "による",
        "に対する",
        "によって"
      ],
      "answer": 1,
      "translation": "Do có nguy cơ sóng thần vì động đất nên phát cảnh báo.",
      "explanation": "Đáp án đúng là B. 「NによるN」."
    },
    {
      "id": 59,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "どんなに失敗し（　　）、そこから学べば無駄にはならない。",
      "options": [
        "るごとに",
        "たとしても",
        "たばかりで",
        "たおかげで"
      ],
      "answer": 1,
      "translation": "Dù thất bại thế nào nếu học hỏi được thì không vô ích.",
      "explanation": "Đáp án đúng là B. Dù thất bại."
    },
    {
      "id": 60,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "辞書に載っている意味が、すべての文脈に当てはまる（　　）。",
      "options": [
        "ものか",
        "恐れがある",
        "おかげだ",
        "とは限らない"
      ],
      "answer": 3,
      "translation": "Nghĩa trong từ điển chưa chắc đúng mọi ngữ cảnh.",
      "explanation": "Đáp án đúng là D. Chưa hẳn đúng mọi lúc."
    },
    {
      "id": 61,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "お客様（　　）失礼な態度をとってはいけません。",
      "options": [
        "によって",
        "おかげで",
        "に対して",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Không được có thái độ thô lỗ đối với khách hàng.",
      "explanation": "Đáp án đúng là C. 「N + に対して」chỉ đối tượng hướng tới."
    },
    {
      "id": 62,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "人との信頼関係を築きたいなら、約束を守る（　　）。",
      "options": [
        "ことだ",
        "わけがない",
        "ものか",
        "恐れがある"
      ],
      "answer": 0,
      "translation": "Muốn xây dựng niềm tin thì nên giữ đúng lời hứa.",
      "explanation": "Đáp án đúng là A. Khuyên răn đạo lý."
    },
    {
      "id": 63,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "彼は１年も日本に住んでいるのに、ひらがな（　　）書けない。",
      "options": [
        "ごとに",
        "一方で",
        "さえ",
        "おかげで"
      ],
      "answer": 2,
      "translation": "Sống ở Nhật 1 năm mà ngay cả Hiragana cũng không viết được.",
      "explanation": "Đáp án đúng là C. 「N + さえ」nghĩa là 'ngay cả, đến cả'."
    },
    {
      "id": 64,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "家を出（　　）のところで雨が降り出し、傘を取りに戻った。",
      "options": [
        "ているばかり",
        "そうにない",
        "るばかり",
        "たばかり"
      ],
      "answer": 3,
      "translation": "Vừa mới bước ra khỏi nhà thì trời mưa, phải quay lại lấy ô.",
      "explanation": "Đáp án đúng là D. Vừa mới ra khỏi nhà."
    },
    {
      "id": 65,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "彼が昨日東京にいた証拠があるのだから、犯人の（　　）。",
      "options": [
        "おかげだ",
        "恐れがある",
        "ことだ",
        "わけがない"
      ],
      "answer": 3,
      "translation": "Có chứng cứ hôm qua anh ấy ở Tokyo thì lẽ nào là thủ phạm được!",
      "explanation": "Đáp án đúng là D. Nの + わけがない."
    },
    {
      "id": 66,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "日本に長く住んでいるからといって、敬語が完璧に使える（　　）。",
      "options": [
        "ことにする",
        "とは限らない",
        "恐れがある",
        "おかげだ"
      ],
      "answer": 1,
      "translation": "Sống ở Nhật lâu chưa chắc đã dùng kính ngữ chuẩn.",
      "explanation": "Đáp án đúng là B. Chưa chắc đã thành thạo."
    },
    {
      "id": 67,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "季節（　　）咲く花の種類が変わるので、四季を楽しめる。",
      "options": [
        "恐れがある",
        "せいで",
        "によって",
        "に対して"
      ],
      "answer": 2,
      "translation": "Tùy theo mùa loài hoa nở thay đổi nên ngắm được 4 mùa.",
      "explanation": "Đáp án đúng là C. Tương ứng theo mùa."
    },
    {
      "id": 68,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "エアコンの温度を下げすぎた（　　）、体調を崩してしまった。",
      "options": [
        "せいで",
        "さえ",
        "ものか",
        "おかげで"
      ],
      "answer": 0,
      "translation": "Tại bật điều hòa quá lạnh nên tôi bị ốm.",
      "explanation": "Đáp án đúng là A. Hậu quả tiêu cực."
    },
    {
      "id": 69,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "毎日コツコツ勉強した（　　）、日本語の会話がスムーズになった。",
      "options": [
        "ものか",
        "せいで",
        "おかげで",
        "一方で"
      ],
      "answer": 2,
      "translation": "Nhờ chăm chỉ học mỗi ngày nên việc hội thoại trôi chảy hơn.",
      "explanation": "Đáp án đúng là C. Kết quả tích cực dùng おかげで."
    },
    {
      "id": 70,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "親元を離れて初めて、家族のありがた（　　）が身にしみて分かった。",
      "options": [
        "い",
        "さ",
        "く",
        "み"
      ],
      "answer": 1,
      "translation": "Rời xa cha mẹ mới thấm thía sự quý giá của gia đình.",
      "explanation": "Đáp án đúng là B. 「ありがたさ」."
    },
    {
      "id": 71,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "「あの映画、面白かった？」「面白かった（　　）。途中で寝ちゃったよ。」",
      "options": [
        "ことだ",
        "ものか",
        "恐れがある",
        "おかげで"
      ],
      "answer": 1,
      "translation": "Hay nỗi gì! Tôi ngủ gật giữa chừng luôn đấy.",
      "explanation": "Đáp án đúng là B. Phủ định mỉa mai."
    },
    {
      "id": 72,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "風邪を早く治したければ、暖かくしてゆっくり休む（　　）。",
      "options": [
        "わけがない",
        "ことだ",
        "ものか",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Muốn mau khỏi cảm cúm thì nên giữ ấm nghỉ ngơi.",
      "explanation": "Đáp án đúng là B. 「V辞書形 + ことだ」lời khuyên tốt nhất."
    },
    {
      "id": 73,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "彼はお金がなくて、明日のパンを買う小銭（　　）持っていない。",
      "options": [
        "おかげで",
        "せいで",
        "さえ",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Anh ấy túng quẫn đến tiền mua bánh mì ngày mai cũng không có.",
      "explanation": "Đáp án đúng là C. Ngay cả tiền lẻ."
    },
    {
      "id": 74,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "あの人は会う（　　）新しい服を着ていて、とてもおしゃれだ。",
      "options": [
        "一方で",
        "ごとに",
        "せいで",
        "ものか"
      ],
      "answer": 1,
      "translation": "Người đó cứ mỗi lần gặp lại mặc đồ mới.",
      "explanation": "Đáp án đúng là B. 「V辞書形 + ごとに」: cứ mỗi lần gặp."
    },
    {
      "id": 75,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "環境問題（　　）関心が世界中で高まっている。",
      "options": [
        "によって",
        "について",
        "による",
        "に対する"
      ],
      "answer": 3,
      "translation": "Sự quan tâm đối với môi trường đang tăng lên.",
      "explanation": "Đáp án đúng là D. Bổ nghĩa danh từ: 「〜に対するN」."
    },
    {
      "id": 76,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "個人情報が外部に流出する（　　）が指摘されている。",
      "options": [
        "おかげ",
        "代わり",
        "恐れ",
        "せい"
      ],
      "answer": 2,
      "translation": "Đang bị cảnh báo có nguy cơ rò rỉ thông tin cá nhân ra ngoài.",
      "explanation": "Đáp án đúng là C. Nguy cơ rò rỉ dữ liệu."
    },
    {
      "id": 77,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "天気予報が雨だと言っても、絶対に雨が降る（　　）。",
      "options": [
        "とは限らない",
        "せいで",
        "恐れがある",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Dự báo mưa chưa chắc trời đã mưa.",
      "explanation": "Đáp án đúng là A. Chưa chắc đã mưa."
    },
    {
      "id": 78,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "「〜とは限らない」と一緒によく使われる副詞はどれですか。",
      "options": [
        "必ずしも",
        "まったく",
        "まるで",
        "ぜひ"
      ],
      "answer": 0,
      "translation": "Phó từ hay đi kèm là 必ずしも.",
      "explanation": "Đáp án đúng là A. Đi kèm 必ずしも."
    },
    {
      "id": 79,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "都市部の人口が増加しているの（　　）、地方では過疎化が進んでいる。",
      "options": [
        "によって",
        "に対して",
        "おかげで",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Trái ngược dân số thành thị tăng, vùng quê bị giảm dân.",
      "explanation": "Đáp án đúng là B. Đối lập 2 thực trạng."
    },
    {
      "id": 80,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "もう喧嘩は終わりにして、仲直りし（　　）。",
      "options": [
        "てほしい",
        "るものか",
        "るせいで",
        "たばかり"
      ],
      "answer": 0,
      "translation": "Đừng cãi nhau nữa, tôi mong hai bạn làm lành với nhau.",
      "explanation": "Đáp án đúng là A. Mong người khác làm lành."
    },
    {
      "id": 81,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "あんな強い相手に、簡単に負けてたまる（　　）。最後まで戦うぞ！",
      "options": [
        "ものか",
        "せいで",
        "ごとに",
        "ことだ"
      ],
      "answer": 0,
      "translation": "Trước đối thủ mạnh đời nào ta chịu thua dễ thế! Chiến đấu tới cùng!",
      "explanation": "Đáp án đúng là A. Tuyệt đối không đầu hàng."
    },
    {
      "id": 82,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "黒（　　）ジャケットを羽織って出勤した。",
      "options": [
        "ものか",
        "そうにない",
        "たばかり",
        "っぽい"
      ],
      "answer": 3,
      "translation": "Mặc áo khoác màu hơi ngả đen đi làm.",
      "explanation": "Đáp án đúng là D. 「黒っぽい」hơi đen."
    },
    {
      "id": 83,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "英語を教えてもらう（　　）、彼にベトナム語を教えてあげている。",
      "options": [
        "代わりに",
        "さ",
        "ものか",
        "せいで"
      ],
      "answer": 0,
      "translation": "Được dạy tiếng Anh, đổi lại tôi dạy tiếng Việt cho bạn.",
      "explanation": "Đáp án đúng là A. Bù lại tương xứng."
    },
    {
      "id": 84,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "日本語が話せる（　　）話せますが、日常会話レベルです。",
      "options": [
        "おかげで",
        "恐れは",
        "ことは",
        "せいで"
      ],
      "answer": 2,
      "translation": "Nói thì nói được thật nhưng chỉ mức cơ bản.",
      "explanation": "Đáp án đúng là C. Cấu trúc lặp từ 「VことはVが」."
    },
    {
      "id": 85,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "（皮肉）「君が重要な書類を忘れてくれた（　　）、会議が中止になっちゃったよ。」",
      "options": [
        "一方で",
        "おかげで",
        "さえ",
        "ごとに"
      ],
      "answer": 1,
      "translation": "(Mỉa mai) 'Nhờ cậu quên tài liệu mà cuộc họp bị hủy luôn rồi đấy!'",
      "explanation": "Đáp án đúng là B. 「おかげで」dùng mỉa mai trách khéo."
    },
    {
      "id": 86,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "景気の悪化が続けば、多くの中小企業が倒産する（　　）。",
      "options": [
        "恐れがある",
        "代わりに",
        "ものか",
        "おかげだ"
      ],
      "answer": 0,
      "translation": "Kinh tế xấu tiếp diễn có nguy cơ nhiều doanh nghiệp phá sản.",
      "explanation": "Đáp án đúng là A. Nguy cơ phá sản."
    },
    {
      "id": 87,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "渋滞がひどいので、約束の時間に間に合い（　　）。",
      "options": [
        "たばかりだ",
        "そうにない",
        "さ",
        "ものか"
      ],
      "answer": 1,
      "translation": "Tắc đường nặng thế này có vẻ không kịp giờ hẹn.",
      "explanation": "Đáp án đúng là B. Khó lòng kịp giờ."
    },
    {
      "id": 88,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "会社に入社し（　　）なので、まだ仕事の流れに慣れていません。",
      "options": [
        "ているばかり",
        "たばかり",
        "るばかり",
        "そうにない"
      ],
      "answer": 1,
      "translation": "Tôi vừa mới vào công ty nên chưa quen quy trình việc.",
      "explanation": "Đáp án đúng là B. Vừa mới vào làm."
    },
    {
      "id": 89,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "先生の質問（　　）、彼は自信を持って答えた。",
      "options": [
        "によって",
        "さえ",
        "おかげで",
        "に対して"
      ],
      "answer": 3,
      "translation": "Đối với câu hỏi của thầy, anh ấy tự tin trả lời.",
      "explanation": "Đáp án đúng là D. Hướng vào đối tượng câu hỏi."
    },
    {
      "id": 90,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "火山活動が活発化しており、噴火の（　　）が高まっている。",
      "options": [
        "おかげ",
        "代わり",
        "せい",
        "恐れ"
      ],
      "answer": 3,
      "translation": "Hoạt động núi lửa sôi động, nguy cơ phun trào tăng cao.",
      "explanation": "Đáp án đúng là D. Nguy cơ phun trào."
    },
    {
      "id": 91,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "健康のために、白米の（　　）玄米を食べるようにしています。",
      "options": [
        "ごとに",
        "せいで",
        "っぽく",
        "代わりに"
      ],
      "answer": 3,
      "translation": "Vì sức khỏe nên tôi ăn gạo lứt thay cho gạo trắng.",
      "explanation": "Đáp án đúng là D. 「N + のかわりに」= thay cho."
    },
    {
      "id": 92,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "私の気持ちをもう少し理解し（　　）と思います。",
      "options": [
        "るごとに",
        "てほしい",
        "たばかり",
        "る恐れがある"
      ],
      "answer": 1,
      "translation": "Tôi mong bạn thấu hiểu cho tâm trạng của tôi một chút.",
      "explanation": "Đáp án đúng là B. Mong người khác hiểu."
    },
    {
      "id": 93,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "こんな屈辱を味わって、黙っていられる（　　）。",
      "options": [
        "ことだ",
        "ごとに",
        "ものか",
        "せいで"
      ],
      "answer": 2,
      "translation": "Chịu nỗi nhục nhã này làm sao mà im lặng chịu trận được!",
      "explanation": "Đáp án đúng là C. Không thể ngồi yên."
    },
    {
      "id": 94,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "今週は仕事の忙しさ（　　）寝不足も重なり、ひどく疲れている。",
      "options": [
        "としても",
        "に加えて",
        "ごとに",
        "のおかげで"
      ],
      "answer": 1,
      "translation": "Bận rộn việc cộng thêm thiếu ngủ khiến tôi kiệt sức.",
      "explanation": "Đáp án đúng là B. Yếu tố dồn thêm."
    },
    {
      "id": 95,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "読める（　　）読めるが、漢字の意味を説明するのは難しい。",
      "options": [
        "ものか",
        "ことは",
        "せいで",
        "一方で"
      ],
      "answer": 1,
      "translation": "Đọc thì đọc được đấy nhưng giải thích nghĩa chữ Hán thì khó.",
      "explanation": "Đáp án đúng là B. VことはVが."
    },
    {
      "id": 96,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "祖父は最近歳をとったせいか、とても忘れ（　　）なった。",
      "options": [
        "そうに",
        "らしく",
        "っぽく",
        "がちに"
      ],
      "answer": 2,
      "translation": "Ông tôi dạo này có tuổi nên trở nên rất hay quên.",
      "explanation": "Đáp án đúng là C. 「忘れっぽい」tính hay quên."
    },
    {
      "id": 97,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "その法案は国会の多数決（　　）可決されました。",
      "options": [
        "に対して",
        "さえ",
        "ごとに",
        "によって"
      ],
      "answer": 3,
      "translation": "Dự luật đó đã được thông qua bằng biểu quyết đa số ở quốc hội.",
      "explanation": "Đáp án đúng là D. Phương tiện thông qua."
    },
    {
      "id": 98,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "大雨の（　　）電車が運転を見合わせ、会社に遅刻した。",
      "options": [
        "ものか",
        "おかげで",
        "せいで",
        "さ"
      ],
      "answer": 2,
      "translation": "Do mưa lớn nên tàu dừng chạy, tôi bị muộn làm.",
      "explanation": "Đáp án đúng là C. Hậu quả tiêu cực do mưa."
    },
    {
      "id": 99,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "風邪をひいた（　　）、楽しみにしていた旅行をキャンセルした。",
      "options": [
        "せいで",
        "おかげで",
        "さ",
        "ものか"
      ],
      "answer": 0,
      "translation": "Vì bị cảm nên phải hủy chuyến du lịch mong đợi.",
      "explanation": "Đáp án đúng là A. Hậu quả xấu do bị ốm."
    },
    {
      "id": 100,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "生まれて（　　）の赤ちゃんを抱っこさせてもらった。",
      "options": [
        "ているばかり",
        "たばかり",
        "そうにない",
        "るばかり"
      ],
      "answer": 1,
      "translation": "Tôi được bế em bé vừa mới chào đời.",
      "explanation": "Đáp án đúng là B. Vừa mới sinh ra."
    }
  ],
  "4": [
    {
      "id": 1,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "祖父は最近歳をとったせいか、とても忘れ（　　）なった。",
      "options": [
        "っぽく",
        "がちに",
        "らしく",
        "そうに"
      ],
      "answer": 0,
      "translation": "Ông tôi dạo này có tuổi nên trở nên rất hay quên.",
      "explanation": "Đáp án đúng là A. 「忘れっぽい」tính hay quên."
    },
    {
      "id": 2,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "子供（　　）知っている常識を、なぜ大人のあなたが知らないのですか。",
      "options": [
        "せいで",
        "一方で",
        "ごとに",
        "さえ"
      ],
      "answer": 3,
      "translation": "Thường thức đến trẻ con cũng biết sao người lớn lại không biết.",
      "explanation": "Đáp án đúng là D. 「子供さえ」."
    },
    {
      "id": 3,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "兄が社交的なの（　　）、弟は内向的で物静かだ。",
      "options": [
        "ことに対して",
        "によって",
        "に対して",
        "せいで"
      ],
      "answer": 2,
      "translation": "Trái với anh trai hòa đồng, em trai lại hướng nội.",
      "explanation": "Đáp án đúng là C. So sánh đối lập 2 sự việc."
    },
    {
      "id": 4,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "プロの料理人が作ったのだから、まずい（　　）。",
      "options": [
        "わけがない",
        "恐れがある",
        "ことだ",
        "せいで"
      ],
      "answer": 0,
      "translation": "Đầu bếp chuyên nghiệp nấu thì làm sao mà dở được!",
      "explanation": "Đáp án đúng là A. Chắc chắn ngon."
    },
    {
      "id": 5,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "英語を教えてもらう（　　）、彼にベトナム語を教えてあげている。",
      "options": [
        "ものか",
        "さ",
        "代わりに",
        "せいで"
      ],
      "answer": 2,
      "translation": "Được dạy tiếng Anh, đổi lại tôi dạy tiếng Việt cho bạn.",
      "explanation": "Đáp án đúng là C. Bù lại tương xứng."
    },
    {
      "id": 6,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "渋滞がひどいので、約束の時間に間に合い（　　）。",
      "options": [
        "ものか",
        "さ",
        "そうにない",
        "たばかりだ"
      ],
      "answer": 2,
      "translation": "Tắc đường nặng thế này có vẻ không kịp giờ hẹn.",
      "explanation": "Đáp án đúng là C. Khó lòng kịp giờ."
    },
    {
      "id": 7,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "何でも他人の（　　）にするのは、大人の態度とは言えない。",
      "options": [
        "ごと",
        "せい",
        "おかげ",
        "っぽい"
      ],
      "answer": 1,
      "translation": "Đổ lỗi cho người khác không phải thái độ người lớn.",
      "explanation": "Đáp án đúng là B. 「他人のせいにする」: đổ lỗi cho người khác."
    },
    {
      "id": 8,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "厳しい寒さ（　　）大雪に見舞われ、交通網が完全に麻痺した。",
      "options": [
        "のおかげで",
        "ごとに",
        "としても",
        "に加えて"
      ],
      "answer": 3,
      "translation": "Rét đậm cộng thêm tuyết rơi dày khiến giao thông tê liệt.",
      "explanation": "Đáp án đúng là D. Rét cộng tuyết lớn."
    },
    {
      "id": 9,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "風邪をひいた（　　）、楽しみにしていた旅行をキャンセルした。",
      "options": [
        "ものか",
        "おかげで",
        "せいで",
        "さ"
      ],
      "answer": 2,
      "translation": "Vì bị cảm nên phải hủy chuyến du lịch mong đợi.",
      "explanation": "Đáp án đúng là C. Hậu quả xấu do bị ốm."
    },
    {
      "id": 10,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "昨日の猛暑（　　）、今日は急に気温が下がって肌寒い。",
      "options": [
        "によって",
        "恐れがある",
        "おかげで",
        "に対して"
      ],
      "answer": 3,
      "translation": "Trái ngược với cái nóng gay gắt hôm qua, hôm nay lạnh se se.",
      "explanation": "Đáp án đúng là D. Đối lập thời tiết 2 ngày."
    },
    {
      "id": 11,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "激しい雨（　　）強い風も吹き荒れ、外出が極めて危険な状態だ。",
      "options": [
        "たばかりで",
        "のおかげで",
        "としても",
        "に加えて"
      ],
      "answer": 3,
      "translation": "Mưa to thêm vào đó gió giật mạnh, ra ngoài rất nguy hiểm.",
      "explanation": "Đáp án đúng là D. Mưa to kèm gió lớn."
    },
    {
      "id": 12,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この小説の面白（　　）は、読んだ人にしか分からない。",
      "options": [
        "く",
        "さ",
        "み",
        "い"
      ],
      "answer": 1,
      "translation": "Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu.",
      "explanation": "Đáp án đúng là B. 「面白さ」."
    },
    {
      "id": 13,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "後悔したくないなら、今できる全力を尽くす（　　）。",
      "options": [
        "恐れがある",
        "ものか",
        "ことだ",
        "おかげだ"
      ],
      "answer": 2,
      "translation": "Nếu không muốn hối hận thì hãy dốc toàn lực làm ngay lúc này.",
      "explanation": "Đáp án đúng là C. Lời khuyên tâm huyết."
    },
    {
      "id": 14,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "お金持ちの人が、みんな幸せ（　　）。",
      "options": [
        "ことだ",
        "恐れがある",
        "せいだ",
        "だとは限らない"
      ],
      "answer": 3,
      "translation": "Người giàu không hẳn ai cũng đều hạnh phúc.",
      "explanation": "Đáp án đúng là D. ナAだとは限らない."
    },
    {
      "id": 15,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "鍵をかけたのだから、泥棒が簡単に入れる（　　）。",
      "options": [
        "ものか",
        "ことだ",
        "恐れがある",
        "わけがない"
      ],
      "answer": 3,
      "translation": "Đã khóa cửa cẩn thận thì trộm làm sao vào dễ thế được!",
      "explanation": "Đáp án đúng là D. Khẳng định an toàn."
    },
    {
      "id": 16,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "インフルエンザが急速に感染拡大する（　　）がある。",
      "options": [
        "恐れ",
        "おかげ",
        "代わり",
        "せい"
      ],
      "answer": 0,
      "translation": "Có nguy cơ dịch cúm lan rộng nhanh chóng.",
      "explanation": "Đáp án đúng là A. Nguy cơ dịch bệnh."
    },
    {
      "id": 17,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "先生：「それでは今から、５人（　　）のグループに分かれてください。」",
      "options": [
        "せいで",
        "おかげで",
        "ごとに",
        "さえ"
      ],
      "answer": 2,
      "translation": "Thầy giáo: 'Hãy chia thành nhóm 5 người một nhé.'",
      "explanation": "Đáp án đúng là C. 「N + ごとに」mang nghĩa phân chia 'từng... một'."
    },
    {
      "id": 18,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "台風が接近しているため、大雨による河川の氾濫の（　　）。",
      "options": [
        "ことだ",
        "恐れがある",
        "ものか",
        "おかげだ"
      ],
      "answer": 1,
      "translation": "Bão đến gần có nguy cơ nước sông tràn bờ.",
      "explanation": "Đáp án đúng là B. 「〜恐れがある」nguy cơ xấu."
    },
    {
      "id": 19,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "人気のある店だからといって、自分の口に合う（　　）。",
      "options": [
        "ごとに",
        "とは限らない",
        "おかげだ",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Quán đông khách chưa chắc đã hợp khẩu vị mình.",
      "explanation": "Đáp án đúng là B. Chưa chắc hợp miệng."
    },
    {
      "id": 20,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "もう喧嘩は終わりにして、仲直りし（　　）。",
      "options": [
        "るせいで",
        "たばかり",
        "てほしい",
        "るものか"
      ],
      "answer": 2,
      "translation": "Đừng cãi nhau nữa, tôi mong hai bạn làm lành với nhau.",
      "explanation": "Đáp án đúng là C. Mong người khác làm lành."
    },
    {
      "id": 21,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "インターネットは情報を素早く得られる（　　）、誤情報が広がりやすいリスクもある。",
      "options": [
        "さえ",
        "せいで",
        "たばかり",
        "一方で"
      ],
      "answer": 3,
      "translation": "Internet giúp tra thông tin nhanh, mặt khác có nguy cơ lan truyền tin giả.",
      "explanation": "Đáp án đúng là D. Mặt lợi và mặt hại đối lập."
    },
    {
      "id": 22,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "人との信頼関係を築きたいなら、約束を守る（　　）。",
      "options": [
        "ことだ",
        "恐れがある",
        "わけがない",
        "ものか"
      ],
      "answer": 0,
      "translation": "Muốn xây dựng niềm tin thì nên giữ đúng lời hứa.",
      "explanation": "Đáp án đúng là A. Khuyên răn đạo lý."
    },
    {
      "id": 23,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "薬を早めに飲んだ（　　）、ひどくならずに風邪が治った。",
      "options": [
        "せいで",
        "一方で",
        "おかげで",
        "っぽい"
      ],
      "answer": 2,
      "translation": "Nhờ uống thuốc sớm nên cảm cúm đã khỏi không bị nặng.",
      "explanation": "Đáp án đúng là C. Kết quả điều trị tốt."
    },
    {
      "id": 24,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "今回の台風（　　）、多くの家屋が被害を受けました。",
      "options": [
        "てほしい",
        "に対して",
        "によって",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Do cơn bão lần này, nhiều nhà cửa bị thiệt hại.",
      "explanation": "Đáp án đúng là C. 「N + によって」chỉ nguyên nhân."
    },
    {
      "id": 25,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "お客様（　　）失礼な態度をとってはいけません。",
      "options": [
        "によって",
        "に対して",
        "ことだ",
        "おかげで"
      ],
      "answer": 1,
      "translation": "Không được có thái độ thô lỗ đối với khách hàng.",
      "explanation": "Đáp án đúng là B. 「N + に対して」chỉ đối tượng hướng tới."
    },
    {
      "id": 26,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "地震（　　）津波の危険があるため、警報が発令された。",
      "options": [
        "に対する",
        "について",
        "による",
        "によって"
      ],
      "answer": 2,
      "translation": "Do có nguy cơ sóng thần vì động đất nên phát cảnh báo.",
      "explanation": "Đáp án đúng là C. 「NによるN」."
    },
    {
      "id": 27,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "最新の医療技術の（　　）、多くの人命が救われるようになった。",
      "options": [
        "せいで",
        "ごとに",
        "恐れがある",
        "おかげで"
      ],
      "answer": 3,
      "translation": "Nhờ công nghệ y tế mới nhất mà nhiều sinh mạng được cứu.",
      "explanation": "Đáp án đúng là D. 「Nの + おかげで」."
    },
    {
      "id": 28,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "車を運転できる（　　）できますが、高速道路は怖くて走れません。",
      "options": [
        "せいで",
        "ごとに",
        "ことは",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Lái xe thì lái được thật nhưng đường cao tốc thì không dám đi.",
      "explanation": "Đáp án đúng là C. Lặp lại động từ."
    },
    {
      "id": 29,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この部屋の広（　　）なら、５人でも快適に過ごせる。",
      "options": [
        "さ",
        "み",
        "い",
        "く"
      ],
      "answer": 0,
      "translation": "Độ rộng căn phòng này thì 5 người ở vẫn thoải mái.",
      "explanation": "Đáp án đúng là A. 「広さ」độ rộng."
    },
    {
      "id": 30,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "この件については、他の人には誰にも言わ（　　）。",
      "options": [
        "なければならない",
        "ないでほしい",
        "てほしい",
        "なくていい"
      ],
      "answer": 1,
      "translation": "Mong bạn đừng nói việc này cho ai biết.",
      "explanation": "Đáp án đúng là B. 「Vないでほしい」mong đừng làm."
    },
    {
      "id": 31,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "予算が足りないため、この計画は実現でき（　　）。",
      "options": [
        "たばかりだ",
        "そうにない",
        "ものか",
        "さ"
      ],
      "answer": 1,
      "translation": "Ngân sách thiếu hụt nên kế hoạch khó mà thực hiện được.",
      "explanation": "Đáp án đúng là B. Khó thành hiện thực."
    },
    {
      "id": 32,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "あの白（　　）シャツを着ている男性が、新しい課長です。",
      "options": [
        "そうにない",
        "っぽい",
        "たばかり",
        "ものか"
      ],
      "answer": 1,
      "translation": "Người đàn ông mặc áo màu hơi trăng trắng kia là tổ trưởng mới.",
      "explanation": "Đáp án đúng là B. 「白っぽい」hơi trắng."
    },
    {
      "id": 33,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "文化や習慣は、国（　　）大きく異なります。",
      "options": [
        "ばかりに",
        "に対して",
        "せいで",
        "によって"
      ],
      "answer": 3,
      "translation": "Văn hóa khác nhau tùy theo mỗi quốc gia.",
      "explanation": "Đáp án đúng là D. 「N + によって」= tùy vào."
    },
    {
      "id": 34,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "大学を卒業し（　　）の若手社員たちが研修を受けている。",
      "options": [
        "ているばかり",
        "るばかり",
        "そうにない",
        "たばかり"
      ],
      "answer": 3,
      "translation": "Các nhân viên trẻ vừa tốt nghiệp đại học đang được đào tạo.",
      "explanation": "Đáp án đúng là D. Vừa tốt nghiệp."
    },
    {
      "id": 35,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "あんなに一生懸命準備したプレゼンが、失敗する（　　）。",
      "options": [
        "せいで",
        "わけがない",
        "ことだ",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Chuẩn bị bài thuyết trình công phu thế thì làm sao thất bại được!",
      "explanation": "Đáp án đúng là B. Tự tin không thể hỏng."
    },
    {
      "id": 36,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "風邪を早く治したければ、暖かくしてゆっくり休む（　　）。",
      "options": [
        "わけがない",
        "恐れがある",
        "ものか",
        "ことだ"
      ],
      "answer": 3,
      "translation": "Muốn mau khỏi cảm cúm thì nên giữ ấm nghỉ ngơi.",
      "explanation": "Đáp án đúng là D. 「V辞書形 + ことだ」lời khuyên tốt nhất."
    },
    {
      "id": 37,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "真夏の暑（　　）を乗り切るために、エアコンを適切に使おう。",
      "options": [
        "み",
        "く",
        "い",
        "さ"
      ],
      "answer": 3,
      "translation": "Để vượt qua cái nóng mùa hè hãy dùng điều hòa hợp lý.",
      "explanation": "Đáp án đúng là D. 「暑さ」độ nóng."
    },
    {
      "id": 38,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "彼女は仕事に情熱を注ぐ（　　）、休日は家族との時間を大切にしている。",
      "options": [
        "せいで",
        "一方で",
        "ものか",
        "さえ"
      ],
      "answer": 1,
      "translation": "Cô ấy hết mình vì công việc, song song đó trân trọng gia đình.",
      "explanation": "Đáp án đúng là B. 「一方で」diễn tả đồng thời 2 việc song song."
    },
    {
      "id": 39,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "大手企業だからといって、将来ずっと安定している（　　）。",
      "options": [
        "とは限らない",
        "ことだ",
        "ものか",
        "恐れがある"
      ],
      "answer": 0,
      "translation": "Doanh nghiệp lớn chưa hẳn tương lai đã mãi ổn định.",
      "explanation": "Đáp án đúng là A. Chưa chắc ổn định."
    },
    {
      "id": 40,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "危険な場所には近づか（　　）と注意した。",
      "options": [
        "てほしい",
        "ないでほしい",
        "なければならない",
        "なくてよい"
      ],
      "answer": 1,
      "translation": "Tôi dặn mong họ đừng lại gần nơi nguy hiểm.",
      "explanation": "Đáp án đúng là B. Phủ định: ないでほしい."
    },
    {
      "id": 41,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "安物（　　）服でも、着こなし次第でおしゃれに見える。",
      "options": [
        "そうにない",
        "ものか",
        "っぽい",
        "たばかり"
      ],
      "answer": 2,
      "translation": "Dù là quần áo trông có vẻ rẻ tiền nhưng khéo mặc vẫn đẹp.",
      "explanation": "Đáp án đúng là C. 「安っぽい」trông rẻ tiền."
    },
    {
      "id": 42,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "不注意（　　）事故を防ぐために、確認を徹底しましょう。",
      "options": [
        "に対する",
        "に向けた",
        "によるの",
        "による"
      ],
      "answer": 3,
      "translation": "Để ngừa tai nạn do bất cẩn, hãy kiểm tra kỹ.",
      "explanation": "Đáp án đúng là D. Bổ nghĩa danh từ: 「NによるN」."
    },
    {
      "id": 43,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "人件費の高騰（　　）原材料費の値上がりも、経営を圧迫している。",
      "options": [
        "に加えて",
        "のおかげで",
        "としても",
        "ものか"
      ],
      "answer": 0,
      "translation": "Chi phí nhân công tăng cộng thêm nguyên liệu đắt gây áp lực kinh doanh.",
      "explanation": "Đáp án đúng là A. Cộng thêm khó khăn."
    },
    {
      "id": 44,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "形容詞「いい（良い）」を「〜さ」で名詞化する時、正しい形はどれですか。",
      "options": [
        "いいさ",
        "いくさ",
        "よし",
        "よさ"
      ],
      "answer": 3,
      "translation": "Tính từ いい biến đổi thành danh từ dạng nào?",
      "explanation": "Đáp án đúng là D. Ngoại lệ: 「よさ」= điểm tốt, độ tốt."
    },
    {
      "id": 45,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "「〜に加えて」を文章語（書き言葉）でより硬く表現する場合、正しい形はどれですか。",
      "options": [
        "〜に加え",
        "〜に加えた",
        "〜に加えない",
        "〜に加える"
      ],
      "answer": 0,
      "translation": "Dạng văn viết trang trọng là 〜に加え.",
      "explanation": "Đáp án đúng là A. Lược bỏ 'て' thành に加え."
    },
    {
      "id": 46,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "いい大人のくせに、そんな子供（　　）わがままを言うな。",
      "options": [
        "っぽい",
        "ものか",
        "そうにない",
        "たばかり"
      ],
      "answer": 0,
      "translation": "Người lớn rồi đừng có nhõng nhẽo trẻ con như thế.",
      "explanation": "Đáp án đúng là A. 「子供っぽい」tính trẻ con."
    },
    {
      "id": 47,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "空は真っ黒な雲に覆われ、雨はしばらくやみ（　　）。",
      "options": [
        "恐れがある",
        "たばかりだ",
        "に加えて",
        "そうもない"
      ],
      "answer": 3,
      "translation": "Trời mây đen kịt, mưa trông có vẻ khó mà tạnh sớm.",
      "explanation": "Đáp án đúng là D. 「やみそうもない」."
    },
    {
      "id": 48,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "この鳥は生息地が減少し、絶滅の（　　）があると言われている。",
      "options": [
        "おかげ",
        "代わり",
        "せい",
        "恐れ"
      ],
      "answer": 3,
      "translation": "Loài chim này có nguy cơ tuyệt chủng.",
      "explanation": "Đáp án đúng là D. 「絶滅のおそれがある」."
    },
    {
      "id": 49,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "このアパートは駅から遠い（　　）、部屋が広くて家賃も安い。",
      "options": [
        "ごとに",
        "代わりに",
        "せいで",
        "ものか"
      ],
      "answer": 1,
      "translation": "Tuy xa ga nhưng bù lại phòng rộng và giá rẻ.",
      "explanation": "Đáp án đúng là B. Bù lại khuyết điểm."
    },
    {
      "id": 50,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "（皮肉）「君が重要な書類を忘れてくれた（　　）、会議が中止になっちゃったよ。」",
      "options": [
        "ごとに",
        "さえ",
        "おかげで",
        "一方で"
      ],
      "answer": 2,
      "translation": "(Mỉa mai) 'Nhờ cậu quên tài liệu mà cuộc họp bị hủy luôn rồi đấy!'",
      "explanation": "Đáp án đúng là C. 「おかげで」dùng mỉa mai trách khéo."
    },
    {
      "id": 51,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "先輩のアドバイスの（　　）、面接で落ち着いて受け答えができた。",
      "options": [
        "ごとに",
        "ものか",
        "おかげで",
        "せいで"
      ],
      "answer": 2,
      "translation": "Nhờ lời khuyên của tiền bối mà tôi đã tự tin trả lời phỏng vấn.",
      "explanation": "Đáp án đúng là C. Kết quả tích cực từ lời khuyên."
    },
    {
      "id": 52,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "寝不足の（　　）頭がボーッとして、仕事に集中できない。",
      "options": [
        "恐れがある",
        "おかげで",
        "ごとに",
        "せいで"
      ],
      "answer": 3,
      "translation": "Vì thiếu ngủ nên đầu óc lơ mơ không tập trung làm việc được.",
      "explanation": "Đáp án đúng là D. 「Nのせいで」."
    },
    {
      "id": 53,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "さっき説明を聞い（　　）なのに、もう忘れてしまったのですか。",
      "options": [
        "ているばかり",
        "るばかり",
        "たばかり",
        "そうにない"
      ],
      "answer": 2,
      "translation": "Vừa mới nghe giải thích lúc nãy mà giờ đã quên rồi à?",
      "explanation": "Đáp án đúng là C. Vừa mới nghe xong."
    },
    {
      "id": 54,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "火の不始末から大規模な火災に発展する（　　）。",
      "options": [
        "おかげだ",
        "ことだ",
        "ものか",
        "恐れがある"
      ],
      "answer": 3,
      "translation": "Sơ suất tàn lửa có nguy cơ phát triển thành hỏa hoạn lớn.",
      "explanation": "Đáp án đúng là D. Nguy cơ cháy nổ."
    },
    {
      "id": 55,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "あんな危険な場所、頼まれたって行く（　　）。",
      "options": [
        "恐れがある",
        "ことだ",
        "に加えて",
        "ものか"
      ],
      "answer": 3,
      "translation": "Nơi nguy hiểm thế dù có năn nỉ tôi cũng không thèm đi.",
      "explanation": "Đáp án đúng là D. Nhất định không đi."
    },
    {
      "id": 56,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "「〜恐れがある」は主にどのような場面でよく使われますか。",
      "options": [
        "ニュースや天気予報、公的な注意喚起・通知",
        "希望や夢を語る時",
        "感謝を伝える時",
        "友人同士の日常会話"
      ],
      "answer": 0,
      "translation": "Hay gặp trong thời sự tin tức và cảnh báo công cộng.",
      "explanation": "Đáp án đúng là A. Văn phong trang trọng."
    },
    {
      "id": 57,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "明日の試合、たとえ雨が降っ（　　）予定通り決行されます。",
      "options": [
        "たものか",
        "たばかりに",
        "たとしても",
        "たせいで"
      ],
      "answer": 2,
      "translation": "Dù trời có mưa trận đấu vẫn diễn ra đúng lịch.",
      "explanation": "Đáp án đúng là C. Dù mưa cũng thi đấu."
    },
    {
      "id": 58,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "日曜日に出勤した（　　）、月曜日に振替休日をもらった。",
      "options": [
        "せいで",
        "ものか",
        "代わりに",
        "さ"
      ],
      "answer": 2,
      "translation": "Đi làm ngày Chủ Nhật bù lại được nghỉ bù Thứ Hai.",
      "explanation": "Đáp án đúng là C. Đổi ngày làm việc."
    },
    {
      "id": 59,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "黒（　　）ジャケットを羽織って出勤した。",
      "options": [
        "っぽい",
        "ものか",
        "そうにない",
        "たばかり"
      ],
      "answer": 0,
      "translation": "Mặc áo khoác màu hơi ngả đen đi làm.",
      "explanation": "Đáp án đúng là A. 「黒っぽい」hơi đen."
    },
    {
      "id": 60,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "値段が高いものが、必ずしも品質が良い（　　）。",
      "options": [
        "に決まっている",
        "恐れがある",
        "ことだ",
        "とは限らない"
      ],
      "answer": 3,
      "translation": "Đồ đắt tiền chưa chắc chất lượng đã tốt.",
      "explanation": "Đáp án đúng là D. 「〜とは限らない」chưa chắc là."
    },
    {
      "id": 61,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "親に反対され（　　）、私は海外留学を決意した。",
      "options": [
        "たものか",
        "たばかりに",
        "たせいで",
        "たとしても"
      ],
      "answer": 3,
      "translation": "Dù bị cha mẹ phản đối tôi vẫn quyết tâm du học.",
      "explanation": "Đáp án đúng là D. Dù bị phản đối."
    },
    {
      "id": 62,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "今週は仕事の忙しさ（　　）寝不足も重なり、ひどく疲れている。",
      "options": [
        "ごとに",
        "に加えて",
        "のおかげで",
        "としても"
      ],
      "answer": 1,
      "translation": "Bận rộn việc cộng thêm thiếu ngủ khiến tôi kiệt sức.",
      "explanation": "Đáp án đúng là B. Yếu tố dồn thêm."
    },
    {
      "id": 63,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "一人でこの重いピアノを持ち上げられる（　　）。手伝ってくれ。",
      "options": [
        "せいだ",
        "ことだ",
        "わけがない",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Một mình nâng sao nổi cây đàn piano này! Giúp tôi với.",
      "explanation": "Đáp án đúng là C. Bất khả thi."
    },
    {
      "id": 64,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "有名な大学を卒業したからといって、良い会社に入れる（　　）。",
      "options": [
        "ものか",
        "ことだ",
        "とは限らない",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Tốt nghiệp đại học danh tiếng chưa chắc vào được công ty tốt.",
      "explanation": "Đáp án đúng là C. Không hẳn là."
    },
    {
      "id": 65,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "たとえ時間がかかっ（　　）、自分の力で最後までやり遂げたい。",
      "options": [
        "たとしても",
        "たせいで",
        "たものか",
        "たばかりに"
      ],
      "answer": 0,
      "translation": "Dù có tốn thời gian tôi muốn tự sức hoàn thành.",
      "explanation": "Đáp án đúng là A. Dù mất thời gian."
    },
    {
      "id": 66,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "都会の生活は便利な（　　）、生活費が高くストレスも多い。",
      "options": [
        "一方で",
        "おかげで",
        "せいで",
        "ごとに"
      ],
      "answer": 0,
      "translation": "Cuộc sống thành thị tiện lợi nhưng chi phí đắt đỏ.",
      "explanation": "Đáp án đúng là A. 「普通形 + 一方で」nêu 2 mặt đối lập."
    },
    {
      "id": 67,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "砂糖の（　　）ハチミツを使って、低カロリーのお菓子を作った。",
      "options": [
        "ごとに",
        "代わりに",
        "恐れがある",
        "せいで"
      ],
      "answer": 1,
      "translation": "Dùng mật ong thay cho đường để làm bánh ít calo.",
      "explanation": "Đáp án đúng là B. Thay thế nguyên liệu."
    },
    {
      "id": 68,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "読める（　　）読めるが、漢字の意味を説明するのは難しい。",
      "options": [
        "ことは",
        "ものか",
        "せいで",
        "一方で"
      ],
      "answer": 0,
      "translation": "Đọc thì đọc được đấy nhưng giải thích nghĩa chữ Hán thì khó.",
      "explanation": "Đáp án đúng là A. VことはVが."
    },
    {
      "id": 69,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "パスワードを簡単にすると、不正アクセスの被害に遭う（　　）。",
      "options": [
        "おかげだ",
        "ことだ",
        "恐れがある",
        "ものか"
      ],
      "answer": 2,
      "translation": "Đặt mật khẩu dễ đoán có nguy cơ bị tấn công tài khoản.",
      "explanation": "Đáp án đúng là C. Nguy cơ an ninh mạng."
    },
    {
      "id": 70,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "日本に来（　　）の頃は、電車の乗り換えさえ難しかった。",
      "options": [
        "そうにない",
        "るばかり",
        "たばかり",
        "ているばかり"
      ],
      "answer": 2,
      "translation": "Hồi vừa mới sang Nhật, đổi tàu cũng thấy khó.",
      "explanation": "Đáp án đúng là C. 「Vタ形 + ばかり」vừa mới xong."
    },
    {
      "id": 71,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "あんな強い相手に、簡単に負けてたまる（　　）。最後まで戦うぞ！",
      "options": [
        "せいで",
        "ものか",
        "ことだ",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Trước đối thủ mạnh đời nào ta chịu thua dễ thế! Chiến đấu tới cùng!",
      "explanation": "Đáp án đúng là B. Tuyệt đối không đầu hàng."
    },
    {
      "id": 72,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "生まれて（　　）の赤ちゃんを抱っこさせてもらった。",
      "options": [
        "るばかり",
        "たばかり",
        "ているばかり",
        "そうにない"
      ],
      "answer": 1,
      "translation": "Tôi được bế em bé vừa mới chào đời.",
      "explanation": "Đáp án đúng là B. Vừa mới sinh ra."
    },
    {
      "id": 73,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "買える（　　）買えるが、今月の予算をオーバーしてしまう。",
      "options": [
        "せいで",
        "一方で",
        "ことは",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Mua thì mua được nhưng vượt quá ngân sách tháng này.",
      "explanation": "Đáp án đúng là C. Công nhận khả năng mua."
    },
    {
      "id": 74,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "あの人は会う（　　）新しい服を着ていて、とてもおしゃれだ。",
      "options": [
        "ものか",
        "せいで",
        "ごとに",
        "一方で"
      ],
      "answer": 2,
      "translation": "Người đó cứ mỗi lần gặp lại mặc đồ mới.",
      "explanation": "Đáp án đúng là C. 「V辞書形 + ごとに」: cứ mỗi lần gặp."
    },
    {
      "id": 75,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "辞書に載っている意味が、すべての文脈に当てはまる（　　）。",
      "options": [
        "おかげだ",
        "とは限らない",
        "ものか",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Nghĩa trong từ điển chưa chắc đúng mọi ngữ cảnh.",
      "explanation": "Đáp án đúng là B. Chưa hẳn đúng mọi lúc."
    },
    {
      "id": 76,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "大雨の（　　）電車が運転を見合わせ、会社に遅刻した。",
      "options": [
        "さ",
        "ものか",
        "せいで",
        "おかげで"
      ],
      "answer": 2,
      "translation": "Do mưa lớn nên tàu dừng chạy, tôi bị muộn làm.",
      "explanation": "Đáp án đúng là C. Hậu quả tiêu cực do mưa."
    },
    {
      "id": 77,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "あの計画が成功した（　　）、莫大な費用がかかるので現実的ではない。",
      "options": [
        "ごとに",
        "せいで",
        "としても",
        "ものか"
      ],
      "answer": 2,
      "translation": "Kế hoạch dù có thành công thì quá tốn kém nên không khả thi.",
      "explanation": "Đáp án đúng là C. Dù thành công."
    },
    {
      "id": 78,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "テストの点数が発表される（　　）、クラス中が一喜一憂している。",
      "options": [
        "ごとに",
        "一方で",
        "さえ",
        "恐れがある"
      ],
      "answer": 0,
      "translation": "Cứ mỗi lần công bố điểm thi, cả lớp lại hồi hộp vui buồn.",
      "explanation": "Đáp án đúng là A. 「発表されるごとに」: cứ mỗi lần được công bố."
    },
    {
      "id": 79,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "失敗する（　　）改善点を見つけていけば、必ず成長できる。",
      "options": [
        "っぽく",
        "せいで",
        "ごとに",
        "として"
      ],
      "answer": 2,
      "translation": "Cứ mỗi lần thất bại nếu tìm ra điểm khắc phục thì sẽ trưởng thành.",
      "explanation": "Đáp án đúng là C. 「V辞書形 + ごとに」: cứ mỗi lần..."
    },
    {
      "id": 80,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "今日は朝から忙しすぎて、昼ご飯を食べる時間（　　）なかった。",
      "options": [
        "さえ",
        "ごとに",
        "せいで",
        "ものか"
      ],
      "answer": 0,
      "translation": "Bận quá đến cả thời gian ăn trưa cũng không có.",
      "explanation": "Đáp án đúng là A. Mức độ cực đoan: đến cả ăn cũng không kịp."
    },
    {
      "id": 81,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "彼が昨日東京にいた証拠があるのだから、犯人の（　　）。",
      "options": [
        "わけがない",
        "恐れがある",
        "ことだ",
        "おかげだ"
      ],
      "answer": 0,
      "translation": "Có chứng cứ hôm qua anh ấy ở Tokyo thì lẽ nào là thủ phạm được!",
      "explanation": "Đáp án đúng là A. Nの + わけがない."
    },
    {
      "id": 82,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "相手はプロの選手だから、初心者の私が勝て（　　）。",
      "options": [
        "ことだ",
        "せいだ",
        "一方で",
        "そうもない"
      ],
      "answer": 3,
      "translation": "Đối thủ là tuyển thủ chuyên nghiệp, tôi khó mà thắng nổi.",
      "explanation": "Đáp án đúng là D. Khó thắng được."
    },
    {
      "id": 83,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "喉が痛くて、水（　　）飲み込むのがつらい。",
      "options": [
        "ものか",
        "ごとに",
        "一方で",
        "さえ"
      ],
      "answer": 3,
      "translation": "Họng đau đến mức ngay cả nước uống nuốt xuống cũng thấy buốt.",
      "explanation": "Đáp án đúng là D. Đến cả nước cũng không nuốt nổi."
    },
    {
      "id": 84,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "「〜とは限らない」と一緒によく使われる副詞はどれですか。",
      "options": [
        "まるで",
        "まったく",
        "ぜひ",
        "必ずしも"
      ],
      "answer": 3,
      "translation": "Phó từ hay đi kèm là 必ずしも.",
      "explanation": "Đáp án đúng là D. Đi kèm 必ずしも."
    },
    {
      "id": 85,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "日本語が話せる（　　）話せますが、日常会話レベルです。",
      "options": [
        "おかげで",
        "ことは",
        "せいで",
        "恐れは"
      ],
      "answer": 1,
      "translation": "Nói thì nói được thật nhưng chỉ mức cơ bản.",
      "explanation": "Đáp án đúng là B. Cấu trúc lặp từ 「VことはVが」."
    },
    {
      "id": 86,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "どんなに給料が高い（　　）、残業ばかりのブラック企業では働きたくない。",
      "options": [
        "ものか",
        "としても",
        "ごとに",
        "せいで"
      ],
      "answer": 1,
      "translation": "Dù lương có cao tôi cũng không làm công ty bóc lột tăng ca.",
      "explanation": "Đáp án đúng là B. Dù lương cao."
    },
    {
      "id": 87,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "定期的な運動（　　）、健康を維持することができます。",
      "options": [
        "に対して",
        "せいで",
        "ごとに",
        "によって"
      ],
      "answer": 3,
      "translation": "Bằng việc vận động định kỳ có thể giữ gìn sức khỏe.",
      "explanation": "Đáp án đúng là D. Chỉ phương pháp, cách thức."
    },
    {
      "id": 88,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "円安で輸出企業が利益を上げる（　　）、輸入企業は厳しい状況に直面している。",
      "options": [
        "ごとに",
        "おかげで",
        "一方で",
        "ものか"
      ],
      "answer": 2,
      "translation": "Đồng Yên giảm giúp doanh nghiệp xuất khẩu có lãi nhưng doanh nghiệp nhập khẩu gặp khó.",
      "explanation": "Đáp án đúng là C. Đối lập giữa 2 đối tượng."
    },
    {
      "id": 89,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "電子書籍の利用者が増えている（　　）、紙の本の売り上げは減少している。",
      "options": [
        "ことだ",
        "おかげで",
        "ごとに",
        "一方で"
      ],
      "answer": 3,
      "translation": "Người dùng sách điện tử tăng trong khi sách giấy giảm.",
      "explanation": "Đáp án đúng là D. Đối lập giữa 2 xu hướng trái chiều."
    },
    {
      "id": 90,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "自分の夢をこんなところで諦めてたまる（　　）。",
      "options": [
        "おかげだ",
        "恐れがある",
        "ものか",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Đời nào tôi chịu bỏ cuộc ước mơ ở nơi thế này!",
      "explanation": "Đáp án đúng là C. Không từ bỏ."
    },
    {
      "id": 91,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "あんな嘘つきの言うことなんて、誰が信じる（　　）！",
      "options": [
        "ものか",
        "に加えて",
        "恐れがある",
        "ことだ"
      ],
      "answer": 0,
      "translation": "Lời tên nói dối đó thì ai mà tin cho được!",
      "explanation": "Đáp án đúng là A. Ai mà thèm tin."
    },
    {
      "id": 92,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "観光地としての魅力（　　）、交通の便の良さも人気の理由だ。",
      "options": [
        "としても",
        "に加えて",
        "のせいで",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Sức hút du lịch thêm vào đó giao thông thuận tiện tạo nên sự nổi tiếng.",
      "explanation": "Đáp án đúng là B. Thêm điểm cộng."
    },
    {
      "id": 93,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "仮にその話が本当だ（　　）、彼を許すことはできない。",
      "options": [
        "ものか",
        "ごとに",
        "せいで",
        "としても"
      ],
      "answer": 3,
      "translation": "Cho dù chuyện đó là thật tôi cũng không tha thứ cho anh ấy.",
      "explanation": "Đáp án đúng là D. Dù là sự thật."
    },
    {
      "id": 94,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "明日から旅行に行くので、天気が晴れ（　　）。",
      "options": [
        "てほしい",
        "るせいで",
        "る一方で",
        "てならない"
      ],
      "answer": 0,
      "translation": "Mai đi du lịch nên mong sao trời sẽ nắng ráo.",
      "explanation": "Đáp án đúng là A. Ước nguyện thời tiết."
    },
    {
      "id": 95,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "日本語が上手になりたかったら、恥ずかしがらずに話す（　　）。",
      "options": [
        "ことだ",
        "恐れがある",
        "ものか",
        "わけがない"
      ],
      "answer": 0,
      "translation": "Muốn giỏi tiếng Nhật thì nên mạnh dạn nói đừng ngại.",
      "explanation": "Đáp án đúng là A. Khuyên nên làm gì."
    },
    {
      "id": 96,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "大切な記念日だから、二人でゆっくり過ごし（　　）。",
      "options": [
        "てほしい",
        "る恐れがある",
        "るごとに",
        "たばかり"
      ],
      "answer": 0,
      "translation": "Ngày kỷ niệm quan trọng nên muốn cả hai bên nhau trọn vẹn.",
      "explanation": "Đáp án đúng là A. Mong ước."
    },
    {
      "id": 97,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "賛成意見が６割なの（　　）、反対意見は４割にとどまった。",
      "options": [
        "によって",
        "せいで",
        "ことだ",
        "に対して"
      ],
      "answer": 3,
      "translation": "Trái với ý kiến tán thành chiếm 60%, phản đối chiếm 40%.",
      "explanation": "Đáp án đúng là D. So sánh tỉ lệ đối lập."
    },
    {
      "id": 98,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "足の痛みがひどくて、立つこと（　　）できない状態だ。",
      "options": [
        "ものか",
        "さえ",
        "せいで",
        "おかげで"
      ],
      "answer": 1,
      "translation": "Chân đau dữ dội, đến cả việc đứng cũng không làm được.",
      "explanation": "Đáp án đúng là B. 「V辞書形こと + さえ」."
    },
    {
      "id": 99,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "試験に合格したいなら、毎日復習を怠ら（　　）。",
      "options": [
        "ないことだ",
        "ないせいで",
        "ないごとに",
        "ないものか"
      ],
      "answer": 0,
      "translation": "Muốn thi đỗ thì tốt nhất không nên lơ là ôn tập.",
      "explanation": "Đáp án đúng là A. 「Vないことだ」khuyên không nên."
    },
    {
      "id": 100,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "環境問題（　　）関心が世界中で高まっている。",
      "options": [
        "による",
        "に対する",
        "について",
        "によって"
      ],
      "answer": 1,
      "translation": "Sự quan tâm đối với môi trường đang tăng lên.",
      "explanation": "Đáp án đúng là B. Bổ nghĩa danh từ: 「〜に対するN」."
    }
  ],
  "5": [
    {
      "id": 1,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "インターネット（　　）、世界中のニュースが瞬時に伝わる。",
      "options": [
        "によって",
        "ことだ",
        "せいで",
        "に対して"
      ],
      "answer": 0,
      "translation": "Nhờ có internet, tin tức toàn cầu truyền đi chớp mắt.",
      "explanation": "Đáp án đúng là A. Phương tiện / cách thức."
    },
    {
      "id": 2,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "この件については、他の人には誰にも言わ（　　）。",
      "options": [
        "てほしい",
        "なければならない",
        "ないでほしい",
        "なくていい"
      ],
      "answer": 2,
      "translation": "Mong bạn đừng nói việc này cho ai biết.",
      "explanation": "Đáp án đúng là C. 「Vないでほしい」mong đừng làm."
    },
    {
      "id": 3,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "健康で長生きしたければ、規則正しい生活を送る（　　）。",
      "options": [
        "おかげだ",
        "恐れがある",
        "ものか",
        "ことだ"
      ],
      "answer": 3,
      "translation": "Muốn sống lâu khỏe mạnh thì nên sinh hoạt điều độ.",
      "explanation": "Đáp án đúng là D. Khuyên bảo lối sống."
    },
    {
      "id": 4,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "厳しい寒さ（　　）大雪に見舞われ、交通網が完全に麻痺した。",
      "options": [
        "ごとに",
        "に加えて",
        "としても",
        "のおかげで"
      ],
      "answer": 1,
      "translation": "Rét đậm cộng thêm tuyết rơi dày khiến giao thông tê liệt.",
      "explanation": "Đáp án đúng là B. Rét cộng tuyết lớn."
    },
    {
      "id": 5,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "景気が悪い（　　）ボーナスが大幅にカットされた。",
      "options": [
        "ごとに",
        "一方で",
        "おかげで",
        "せいで"
      ],
      "answer": 3,
      "translation": "Tại vì kinh tế kém nên tiền thưởng bị cắt.",
      "explanation": "Đáp án đúng là D. Nguyên nhân gây thiệt hại."
    },
    {
      "id": 6,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "文化や習慣は、国（　　）大きく異なります。",
      "options": [
        "に対して",
        "せいで",
        "ばかりに",
        "によって"
      ],
      "answer": 3,
      "translation": "Văn hóa khác nhau tùy theo mỗi quốc gia.",
      "explanation": "Đáp án đúng là D. 「N + によって」= tùy vào."
    },
    {
      "id": 7,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "どんなに失敗し（　　）、そこから学べば無駄にはならない。",
      "options": [
        "たとしても",
        "たおかげで",
        "たばかりで",
        "るごとに"
      ],
      "answer": 0,
      "translation": "Dù thất bại thế nào nếu học hỏi được thì không vô ích.",
      "explanation": "Đáp án đúng là A. Dù thất bại."
    },
    {
      "id": 8,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "現金で支払う（　　）、電子マネーで決済するとポイントが付く。",
      "options": [
        "せいで",
        "ものか",
        "代わりに",
        "さ"
      ],
      "answer": 2,
      "translation": "Thay vì trả tiền mặt, thanh toán ví điện tử sẽ được điểm.",
      "explanation": "Đáp án đúng là C. Thay đổi hình thức trả tiền."
    },
    {
      "id": 9,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "忙しすぎて、家族と電話で話す時間（　　）取れない。",
      "options": [
        "せいで",
        "さえ",
        "ごとに",
        "っぽい"
      ],
      "answer": 1,
      "translation": "Quá bận rộn, đến thời gian gọi điện cho gia đình cũng không thu xếp được.",
      "explanation": "Đáp án đúng là B. Ngay cả việc tối thiểu."
    },
    {
      "id": 10,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "便利な（　　）便利だが、使いこなすまでに練習が必要だ。",
      "options": [
        "ことは",
        "ごとに",
        "っぽい",
        "せいで"
      ],
      "answer": 0,
      "translation": "Tiện thì tiện thật nhưng cần luyện tập mới quen dùng.",
      "explanation": "Đáp án đúng là A. Tính từ đuôi na: 便利なことは便利だが."
    },
    {
      "id": 11,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "台風の被害（　　）、地震まで発生して現地は混乱している。",
      "options": [
        "としても",
        "に加えて",
        "たばかりで",
        "のおかげで"
      ],
      "answer": 1,
      "translation": "Bị bão tàn phá thêm vào đó động đất xảy ra khiến hiện trường hỗn loạn.",
      "explanation": "Đáp án đúng là B. Thiên tai chồng chất."
    },
    {
      "id": 12,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "昨日の猛暑（　　）、今日は急に気温が下がって肌寒い。",
      "options": [
        "おかげで",
        "恐れがある",
        "によって",
        "に対して"
      ],
      "answer": 3,
      "translation": "Trái ngược với cái nóng gay gắt hôm qua, hôm nay lạnh se se.",
      "explanation": "Đáp án đúng là D. Đối lập thời tiết 2 ngày."
    },
    {
      "id": 13,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "彼は優秀な研究者である（　　）、大学で学生を教える教育者でもある。",
      "options": [
        "せいで",
        "一方で",
        "ごとに",
        "っぽい"
      ],
      "answer": 1,
      "translation": "Anh ấy vừa là nhà nghiên cứu giỏi vừa là nhà giáo dục.",
      "explanation": "Đáp án đúng là B. 「である一方で」nêu 2 vai trò song song."
    },
    {
      "id": 14,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "地震の後は、津波が発生する（　　）ので避難してください。",
      "options": [
        "ことである",
        "おかげである",
        "恐れがある",
        "ものか"
      ],
      "answer": 2,
      "translation": "Sau động đất có nguy cơ sóng thần nên hãy sơ tán.",
      "explanation": "Đáp án đúng là C. Nguy cơ sóng thần."
    },
    {
      "id": 15,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "「あの映画、面白かった？」「面白かった（　　）。途中で寝ちゃったよ。」",
      "options": [
        "ことだ",
        "恐れがある",
        "おかげで",
        "ものか"
      ],
      "answer": 3,
      "translation": "Hay nỗi gì! Tôi ngủ gật giữa chừng luôn đấy.",
      "explanation": "Đáp án đúng là D. Phủ định mỉa mai."
    },
    {
      "id": 16,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "大手企業だからといって、将来ずっと安定している（　　）。",
      "options": [
        "恐れがある",
        "ことだ",
        "とは限らない",
        "ものか"
      ],
      "answer": 2,
      "translation": "Doanh nghiệp lớn chưa hẳn tương lai đã mãi ổn định.",
      "explanation": "Đáp án đúng là C. Chưa chắc ổn định."
    },
    {
      "id": 17,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "薬を早めに飲んだ（　　）、ひどくならずに風邪が治った。",
      "options": [
        "っぽい",
        "せいで",
        "おかげで",
        "一方で"
      ],
      "answer": 2,
      "translation": "Nhờ uống thuốc sớm nên cảm cúm đã khỏi không bị nặng.",
      "explanation": "Đáp án đúng là C. Kết quả điều trị tốt."
    },
    {
      "id": 18,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "たとえ時間がかかっ（　　）、自分の力で最後までやり遂げたい。",
      "options": [
        "たせいで",
        "たものか",
        "たとしても",
        "たばかりに"
      ],
      "answer": 2,
      "translation": "Dù có tốn thời gian tôi muốn tự sức hoàn thành.",
      "explanation": "Đáp án đúng là C. Dù mất thời gian."
    },
    {
      "id": 19,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "何でも他人の（　　）にするのは、大人の態度とは言えない。",
      "options": [
        "っぽい",
        "ごと",
        "せい",
        "おかげ"
      ],
      "answer": 2,
      "translation": "Đổ lỗi cho người khác không phải thái độ người lớn.",
      "explanation": "Đáp án đúng là C. 「他人のせいにする」: đổ lỗi cho người khác."
    },
    {
      "id": 20,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "先生：「それでは今から、５人（　　）のグループに分かれてください。」",
      "options": [
        "さえ",
        "おかげで",
        "せいで",
        "ごとに"
      ],
      "answer": 3,
      "translation": "Thầy giáo: 'Hãy chia thành nhóm 5 người một nhé.'",
      "explanation": "Đáp án đúng là D. 「N + ごとに」mang nghĩa phân chia 'từng... một'."
    },
    {
      "id": 21,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "台風が接近しているため、大雨による河川の氾濫の（　　）。",
      "options": [
        "ことだ",
        "ものか",
        "おかげだ",
        "恐れがある"
      ],
      "answer": 3,
      "translation": "Bão đến gần có nguy cơ nước sông tràn bờ.",
      "explanation": "Đáp án đúng là D. 「〜恐れがある」nguy cơ xấu."
    },
    {
      "id": 22,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "「〜恐れがある」は主にどのような場面でよく使われますか。",
      "options": [
        "感謝を伝える時",
        "友人同士の日常会話",
        "希望や夢を語る時",
        "ニュースや天気予報、公的な注意喚起・通知"
      ],
      "answer": 3,
      "translation": "Hay gặp trong thời sự tin tức và cảnh báo công cộng.",
      "explanation": "Đáp án đúng là D. Văn phong trang trọng."
    },
    {
      "id": 23,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "人気のある店だからといって、自分の口に合う（　　）。",
      "options": [
        "おかげだ",
        "ごとに",
        "恐れがある",
        "とは限らない"
      ],
      "answer": 3,
      "translation": "Quán đông khách chưa chắc đã hợp khẩu vị mình.",
      "explanation": "Đáp án đúng là D. Chưa chắc hợp miệng."
    },
    {
      "id": 24,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "親としては、子供に健康で幸せに育っ（　　）ものだ。",
      "options": [
        "てさえ",
        "たものの",
        "てほしい",
        "てばかりの"
      ],
      "answer": 2,
      "translation": "Là cha mẹ thì luôn mong con lớn lên khỏe mạnh hạnh phúc.",
      "explanation": "Đáp án đúng là C. Mong ước cho con cái."
    },
    {
      "id": 25,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "仮にその話が本当だ（　　）、彼を許すことはできない。",
      "options": [
        "としても",
        "ごとに",
        "ものか",
        "せいで"
      ],
      "answer": 0,
      "translation": "Cho dù chuyện đó là thật tôi cũng không tha thứ cho anh ấy.",
      "explanation": "Đáp án đúng là A. Dù là sự thật."
    },
    {
      "id": 26,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "人（　　）味の好みが違うのは当たり前のことだ。",
      "options": [
        "ものか",
        "によって",
        "おかげで",
        "に対して"
      ],
      "answer": 1,
      "translation": "Tùy mỗi người mà khẩu vị khác nhau là điều hiển nhiên.",
      "explanation": "Đáp án đúng là B. Tùy thuộc vào mỗi người."
    },
    {
      "id": 27,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この小説の面白（　　）は、読んだ人にしか分からない。",
      "options": [
        "さ",
        "い",
        "み",
        "く"
      ],
      "answer": 0,
      "translation": "Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu.",
      "explanation": "Đáp án đúng là A. 「面白さ」."
    },
    {
      "id": 28,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "私の気持ちをもう少し理解し（　　）と思います。",
      "options": [
        "てほしい",
        "る恐れがある",
        "たばかり",
        "るごとに"
      ],
      "answer": 0,
      "translation": "Tôi mong bạn thấu hiểu cho tâm trạng của tôi một chút.",
      "explanation": "Đáp án đúng là A. Mong người khác hiểu."
    },
    {
      "id": 29,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "電子書籍の利用者が増えている（　　）、紙の本の売り上げは減少している。",
      "options": [
        "ごとに",
        "おかげで",
        "一方で",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Người dùng sách điện tử tăng trong khi sách giấy giảm.",
      "explanation": "Đáp án đúng là C. Đối lập giữa 2 xu hướng trái chiều."
    },
    {
      "id": 30,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "日本に来（　　）の頃は、電車の乗り換えさえ難しかった。",
      "options": [
        "ているばかり",
        "たばかり",
        "るばかり",
        "そうにない"
      ],
      "answer": 1,
      "translation": "Hồi vừa mới sang Nhật, đổi tàu cũng thấy khó.",
      "explanation": "Đáp án đúng là B. 「Vタ形 + ばかり」vừa mới xong."
    },
    {
      "id": 31,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "このスープは水（　　）て、あまり美味しくない。",
      "options": [
        "みたい",
        "そうに",
        "っぽく",
        "らしく"
      ],
      "answer": 2,
      "translation": "Món súp này nhiều nước (loãng toẹt), không ngon.",
      "explanation": "Đáp án đúng là C. 「水っぽい」loãng, nhiều nước."
    },
    {
      "id": 32,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "古い車なので、急な坂道を登り切れ（　　）。",
      "options": [
        "たばかりだ",
        "恐れがある",
        "ものか",
        "そうにない"
      ],
      "answer": 3,
      "translation": "Xe cũ nên dốc đứng thế này trông khó mà leo hết nổi.",
      "explanation": "Đáp án đúng là D. Khó leo nổi dốc."
    },
    {
      "id": 33,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "オリンピックは４年（　　）開催される世界的なスポーツの祭典です。",
      "options": [
        "一方で",
        "おかげで",
        "さえ",
        "ごとに"
      ],
      "answer": 3,
      "translation": "Thế vận hội Olympic được tổ chức 4 năm một lần.",
      "explanation": "Đáp án đúng là D. 「N + ごとに」chỉ chu kỳ lặp lại 'cứ mỗi... lại...'."
    },
    {
      "id": 34,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "車を運転できる（　　）できますが、高速道路は怖くて走れません。",
      "options": [
        "ことは",
        "ごとに",
        "恐れがある",
        "せいで"
      ],
      "answer": 0,
      "translation": "Lái xe thì lái được thật nhưng đường cao tốc thì không dám đi.",
      "explanation": "Đáp án đúng là A. Lặp lại động từ."
    },
    {
      "id": 35,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "試験に合格したいなら、毎日復習を怠ら（　　）。",
      "options": [
        "ないことだ",
        "ないものか",
        "ないせいで",
        "ないごとに"
      ],
      "answer": 0,
      "translation": "Muốn thi đỗ thì tốt nhất không nên lơ là ôn tập.",
      "explanation": "Đáp án đúng là A. 「Vないことだ」khuyên không nên."
    },
    {
      "id": 36,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "こんなに簡単な計算、大学生の彼が間違える（　　）。",
      "options": [
        "恐れがある",
        "おかげで",
        "ことだ",
        "わけがない"
      ],
      "answer": 3,
      "translation": "Tính toán dễ thế này làm sao sinh viên đại học nhầm được!",
      "explanation": "Đáp án đúng là D. Phủ định khả năng xảy ra."
    },
    {
      "id": 37,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "あの子はまだ中学生なのに、とても大人（　　）。",
      "options": [
        "そうにない",
        "っぽい",
        "たばかり",
        "ものか"
      ],
      "answer": 1,
      "translation": "Đứa bé mới cấp 2 mà trông rất giống người lớn.",
      "explanation": "Đáp án đúng là B. 「大人っぽい」chững chạc."
    },
    {
      "id": 38,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "若者の政治（　　）関心が薄れていると言われている。",
      "options": [
        "に対する",
        "によって",
        "による",
        "について"
      ],
      "answer": 0,
      "translation": "Sự quan tâm của giới trẻ đối với chính trị đang mờ nhạt dần.",
      "explanation": "Đáp án đúng là A. 「政治に対する関心」."
    },
    {
      "id": 39,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "富士山の（　　）は、約3,776メートルです。",
      "options": [
        "高くて",
        "高さ",
        "高いさ",
        "高み"
      ],
      "answer": 1,
      "translation": "Độ cao của núi Phú Sĩ là 3.776m.",
      "explanation": "Đáp án đúng là B. 「高い」→「高さ」độ cao."
    },
    {
      "id": 40,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "医療技術が進歩する（　　）、倫理的な課題も多く議論されるようになった。",
      "options": [
        "っぽい",
        "一方で",
        "せいで",
        "ごとに"
      ],
      "answer": 1,
      "translation": "Kỹ thuật y tế tiến bộ, bên cạnh đó các vấn đề đạo đức cũng được bàn luận nhiều.",
      "explanation": "Đáp án đúng là B. Hai mặt cùng diễn ra song song."
    },
    {
      "id": 41,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "このプールの水深の（　　）は何メートルですか。",
      "options": [
        "深さ",
        "深く",
        "深いさ",
        "深み"
      ],
      "answer": 0,
      "translation": "Độ sâu của bể bơi này là mấy mét?",
      "explanation": "Đáp án đúng là A. 「深い」→「深さ」."
    },
    {
      "id": 42,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "昨夜遅くまでゲームをした（　　）、今朝寝坊してしまった。",
      "options": [
        "おかげで",
        "せいで",
        "ごとに",
        "一方で"
      ],
      "answer": 1,
      "translation": "Vì chơi game muộn nên sáng nay ngủ quên.",
      "explanation": "Đáp án đúng là B. 「せいで」chỉ nguyên nhân gây hậu quả xấu."
    },
    {
      "id": 43,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "その法案は国会の多数決（　　）可決されました。",
      "options": [
        "に対して",
        "によって",
        "ごとに",
        "さえ"
      ],
      "answer": 1,
      "translation": "Dự luật đó đã được thông qua bằng biểu quyết đa số ở quốc hội.",
      "explanation": "Đáp án đúng là B. Phương tiện thông qua."
    },
    {
      "id": 44,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "名前（　　）覚えていない相手から、突然高価なプレゼントが届いた。",
      "options": [
        "おかげで",
        "ことだ",
        "さえ",
        "せいで"
      ],
      "answer": 2,
      "translation": "Từ người mà ngay cả tên tôi cũng không nhớ, bỗng nhận được quà đắt tiền.",
      "explanation": "Đáp án đúng là C. Nhấn mạnh mức độ không biết."
    },
    {
      "id": 45,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "インフルエンザが急速に感染拡大する（　　）がある。",
      "options": [
        "せい",
        "恐れ",
        "代わり",
        "おかげ"
      ],
      "answer": 1,
      "translation": "Có nguy cơ dịch cúm lan rộng nhanh chóng.",
      "explanation": "Đáp án đúng là B. Nguy cơ dịch bệnh."
    },
    {
      "id": 46,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "たとえ大金持ちになっ（　　）、質素な生活を変えないだろう。",
      "options": [
        "たせいで",
        "たごとに",
        "たばかりに",
        "たとしても"
      ],
      "answer": 3,
      "translation": "Dù có giàu có tôi vẫn sống giản dị như giờ.",
      "explanation": "Đáp án đúng là D. 「〜としても」cho dù đi nữa."
    },
    {
      "id": 47,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "日曜日に出勤した（　　）、月曜日に振替休日をもらった。",
      "options": [
        "ものか",
        "さ",
        "せいで",
        "代わりに"
      ],
      "answer": 3,
      "translation": "Đi làm ngày Chủ Nhật bù lại được nghỉ bù Thứ Hai.",
      "explanation": "Đáp án đúng là D. Đổi ngày làm việc."
    },
    {
      "id": 48,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "車を買う（　　）、家族で海外旅行に行くことにした。",
      "options": [
        "ごとに",
        "せいで",
        "恐れがある",
        "代わりに"
      ],
      "answer": 3,
      "translation": "Thay vì mua ô tô, nhà tôi quyết định đi du lịch nước ngoài.",
      "explanation": "Đáp án đúng là D. Lựa chọn thay thế."
    },
    {
      "id": 49,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "この料理は美味しい（　　）美味しいが、作るのに時間がかかる。",
      "options": [
        "ごとに",
        "さえ",
        "ことは",
        "せいで"
      ],
      "answer": 2,
      "translation": "Ngon thì ngon thật nhưng nấu mất nhiều thời gian.",
      "explanation": "Đáp án đúng là C. 「イAことはイAが」."
    },
    {
      "id": 50,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "何年も日本語を教えている先生が、この文法を知らない（　　）。",
      "options": [
        "ことだ",
        "わけがない",
        "恐れがある",
        "ものか"
      ],
      "answer": 1,
      "translation": "Thầy dạy tiếng Nhật bao năm lẽ nào lại không biết ngữ pháp này!",
      "explanation": "Đáp án đúng là B. Phủ định kép."
    },
    {
      "id": 51,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "人件費の高騰（　　）原材料費の値上がりも、経営を圧迫している。",
      "options": [
        "のおかげで",
        "としても",
        "に加えて",
        "ものか"
      ],
      "answer": 2,
      "translation": "Chi phí nhân công tăng cộng thêm nguyên liệu đắt gây áp lực kinh doanh.",
      "explanation": "Đáp án đúng là C. Cộng thêm khó khăn."
    },
    {
      "id": 52,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "（皮肉）「あなたが余計なことを言った（　　）、雰囲気が台無しですよ。」",
      "options": [
        "せいで",
        "おかげで",
        "さえ",
        "ことだ"
      ],
      "answer": 1,
      "translation": "(Mỉa mai) 'Nhờ cậu nói lời thừa thãi mà không khí hỏng bét rồi đấy.'",
      "explanation": "Đáp án đúng là B. おかげで dùng châm biếm."
    },
    {
      "id": 53,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "都会の生活は便利な（　　）、生活費が高くストレスも多い。",
      "options": [
        "せいで",
        "おかげで",
        "一方で",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Cuộc sống thành thị tiện lợi nhưng chi phí đắt đỏ.",
      "explanation": "Đáp án đúng là C. 「普通形 + 一方で」nêu 2 mặt đối lập."
    },
    {
      "id": 54,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "安物（　　）服でも、着こなし次第でおしゃれに見える。",
      "options": [
        "っぽい",
        "そうにない",
        "たばかり",
        "ものか"
      ],
      "answer": 0,
      "translation": "Dù là quần áo trông có vẻ rẻ tiền nhưng khéo mặc vẫn đẹp.",
      "explanation": "Đáp án đúng là A. 「安っぽい」trông rẻ tiền."
    },
    {
      "id": 55,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "毎日練習したからといって、必ず試合に勝てる（　　）。",
      "options": [
        "恐れがある",
        "せいで",
        "とは限らない",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Tập mỗi ngày chưa chắc đã thắng trận.",
      "explanation": "Đáp án đúng là C. Chưa chắc thắng."
    },
    {
      "id": 56,
      "unit": "Unit 10",
      "pattern": "〜によって",
      "question": "今回の台風（　　）、多くの家屋が被害を受けました。",
      "options": [
        "てほしい",
        "ことだ",
        "に対して",
        "によって"
      ],
      "answer": 3,
      "translation": "Do cơn bão lần này, nhiều nhà cửa bị thiệt hại.",
      "explanation": "Đáp án đúng là D. 「N + によって」chỉ nguyên nhân."
    },
    {
      "id": 57,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "お金持ちの人が、みんな幸せ（　　）。",
      "options": [
        "ことだ",
        "せいだ",
        "だとは限らない",
        "恐れがある"
      ],
      "answer": 2,
      "translation": "Người giàu không hẳn ai cũng đều hạnh phúc.",
      "explanation": "Đáp án đúng là C. ナAだとは限らない."
    },
    {
      "id": 58,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "お客様（　　）失礼な態度をとってはいけません。",
      "options": [
        "おかげで",
        "に対して",
        "によって",
        "ことだ"
      ],
      "answer": 1,
      "translation": "Không được có thái độ thô lỗ đối với khách hàng.",
      "explanation": "Đáp án đúng là B. 「N + に対して」chỉ đối tượng hướng tới."
    },
    {
      "id": 59,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "この電車は駅に止まる（　　）多くの乗客が乗り降りする。",
      "options": [
        "おかげで",
        "ごとに",
        "せいで",
        "ものか"
      ],
      "answer": 1,
      "translation": "Chuyến tàu này cứ mỗi lần dừng ở ga lại có đông hành khách lên xuống.",
      "explanation": "Đáp án đúng là B. 「止まるごとに」: cứ mỗi lần dừng lại."
    },
    {
      "id": 60,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "火の不始末から大規模な火災に発展する（　　）。",
      "options": [
        "ことだ",
        "恐れがある",
        "おかげだ",
        "ものか"
      ],
      "answer": 1,
      "translation": "Sơ suất tàn lửa có nguy cơ phát triển thành hỏa hoạn lớn.",
      "explanation": "Đáp án đúng là B. Nguy cơ cháy nổ."
    },
    {
      "id": 61,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "あんな失礼な態度の店員がいる店には、二度と行く（　　）！",
      "options": [
        "恐れがある",
        "ものか",
        "に加えて",
        "ことだ"
      ],
      "answer": 1,
      "translation": "Quán nhân viên thô lỗ thế không bao giờ thèm đến nữa!",
      "explanation": "Đáp án đúng là B. 「ものか」tuyệt đối không bao giờ."
    },
    {
      "id": 62,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "今回の新型スマホは、性能の向上（　　）デザインの美しさも評価されている。",
      "options": [
        "ものか",
        "のせいで",
        "としても",
        "に加えて"
      ],
      "answer": 3,
      "translation": "Điện thoại mới bên cạnh hiệu năng thêm vào đó thiết kế cũng đẹp.",
      "explanation": "Đáp án đúng là D. Bổ sung ưu điểm."
    },
    {
      "id": 63,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "あの計画が成功した（　　）、莫大な費用がかかるので現実的ではない。",
      "options": [
        "としても",
        "ごとに",
        "ものか",
        "せいで"
      ],
      "answer": 0,
      "translation": "Kế hoạch dù có thành công thì quá tốn kém nên không khả thi.",
      "explanation": "Đáp án đúng là A. Dù thành công."
    },
    {
      "id": 64,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "病気で休んだ同僚の（　　）シフトに入ることになった。",
      "options": [
        "せいで",
        "代わりに",
        "おかげで",
        "ものか"
      ],
      "answer": 1,
      "translation": "Tôi vào ca trực thay cho đồng nghiệp nghỉ ốm.",
      "explanation": "Đáp án đúng là B. Trực ca thay thế."
    },
    {
      "id": 65,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "家族が支えてくれた（　　）、長い留学生活を無事に乗り越えられた。",
      "options": [
        "せいで",
        "恐れがある",
        "おかげで",
        "一方で"
      ],
      "answer": 2,
      "translation": "Nhờ gia đình ủng hộ nên tôi đã vượt qua thời gian du học bình an.",
      "explanation": "Đáp án đúng là C. Kết quả tốt đẹp nhờ người thân."
    },
    {
      "id": 66,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "この鳥は生息地が減少し、絶滅の（　　）があると言われている。",
      "options": [
        "せい",
        "恐れ",
        "代わり",
        "おかげ"
      ],
      "answer": 1,
      "translation": "Loài chim này có nguy cơ tuyệt chủng.",
      "explanation": "Đáp án đúng là B. 「絶滅のおそれがある」."
    },
    {
      "id": 67,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "生まれて（　　）の赤ちゃんを抱っこさせてもらった。",
      "options": [
        "そうにない",
        "ているばかり",
        "たばかり",
        "るばかり"
      ],
      "answer": 2,
      "translation": "Tôi được bế em bé vừa mới chào đời.",
      "explanation": "Đáp án đúng là C. Vừa mới sinh ra."
    },
    {
      "id": 68,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "同僚が手伝ってくれた（　　）、定時に仕事を終えることができた。",
      "options": [
        "さ",
        "ものか",
        "おかげで",
        "せいで"
      ],
      "answer": 2,
      "translation": "Nhờ đồng nghiệp giúp đỡ nên tôi đã xong việc đúng giờ.",
      "explanation": "Đáp án đúng là C. Nhờ sự giúp đỡ của đồng nghiệp."
    },
    {
      "id": 69,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "親友に（　　）言えない秘密を、彼はずっと一人で抱えていた。",
      "options": [
        "おかげで",
        "さえ",
        "一方で",
        "せいで"
      ],
      "answer": 1,
      "translation": "Bí mật mà ngay cả bạn thân cũng không nói.",
      "explanation": "Đáp án đúng là B. 「〜にさえ」 = ngay cả với ai."
    },
    {
      "id": 70,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "誰に何を言われ（　　）、自分の夢を諦めるつもりはありません。",
      "options": [
        "るごとに",
        "たとしても",
        "たおかげで",
        "たものか"
      ],
      "answer": 1,
      "translation": "Dù bị ai nói gì tôi cũng không từ bỏ ước mơ.",
      "explanation": "Đáp án đúng là B. Cho dù bị ai nói gì."
    },
    {
      "id": 71,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "エアコンの温度を下げすぎた（　　）、体調を崩してしまった。",
      "options": [
        "おかげで",
        "さえ",
        "ものか",
        "せいで"
      ],
      "answer": 3,
      "translation": "Tại bật điều hòa quá lạnh nên tôi bị ốm.",
      "explanation": "Đáp án đúng là D. Hậu quả tiêu cực."
    },
    {
      "id": 72,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "兄は社交的で友達が多い（　　）、弟は物静かで一人を好む性格だ。",
      "options": [
        "ごとに",
        "一方で",
        "せいで",
        "恐れがある"
      ],
      "answer": 1,
      "translation": "Anh trai hoạt bát nhiều bạn bè, trái lại em trai trầm tính thích ở một mình.",
      "explanation": "Đáp án đúng là B. So sánh đối lập 2 người."
    },
    {
      "id": 73,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "読める（　　）読めるが、漢字の意味を説明するのは難しい。",
      "options": [
        "一方で",
        "せいで",
        "ものか",
        "ことは"
      ],
      "answer": 3,
      "translation": "Đọc thì đọc được đấy nhưng giải thích nghĩa chữ Hán thì khó.",
      "explanation": "Đáp án đúng là D. VことはVが."
    },
    {
      "id": 74,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "「俺の苦しい気持ちがお前なんかに分かってたまる（　　）！」",
      "options": [
        "おかげで",
        "恐れがある",
        "もんか",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Nỗi khổ của tao đứa như mày làm sao mà hiểu được!",
      "explanation": "Đáp án đúng là C. Văn nói: もんか."
    },
    {
      "id": 75,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "昨日掃除をし（　　）なのに、子供たちがもう部屋を散らかした。",
      "options": [
        "たばかり",
        "るばかり",
        "そうにない",
        "ているばかり"
      ],
      "answer": 0,
      "translation": "Mới dọn hôm qua mà tụi nhỏ lại bày bừa rồi.",
      "explanation": "Đáp án đúng là A. Vừa mới dọn xong."
    },
    {
      "id": 76,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "大切な記念日だから、二人でゆっくり過ごし（　　）。",
      "options": [
        "るごとに",
        "る恐れがある",
        "てほしい",
        "たばかり"
      ],
      "answer": 2,
      "translation": "Ngày kỷ niệm quan trọng nên muốn cả hai bên nhau trọn vẹn.",
      "explanation": "Đáp án đúng là C. Mong ước."
    },
    {
      "id": 77,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "子供（　　）知っている常識を、なぜ大人のあなたが知らないのですか。",
      "options": [
        "一方で",
        "せいで",
        "さえ",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Thường thức đến trẻ con cũng biết sao người lớn lại không biết.",
      "explanation": "Đáp án đúng là C. 「子供さえ」."
    },
    {
      "id": 78,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "天気予報が雨だと言っても、絶対に雨が降る（　　）。",
      "options": [
        "恐れがある",
        "せいで",
        "とは限らない",
        "ごとに"
      ],
      "answer": 2,
      "translation": "Dự báo mưa chưa chắc trời đã mưa.",
      "explanation": "Đáp án đúng là C. Chưa chắc đã mưa."
    },
    {
      "id": 79,
      "unit": "Unit 11",
      "pattern": "〜さ",
      "question": "この荷物の（　　）を測ってから、送料を計算してください。",
      "options": [
        "重いさ",
        "重さ",
        "重い",
        "重く"
      ],
      "answer": 1,
      "translation": "Cân độ nặng hành lý rồi tính phí ship.",
      "explanation": "Đáp án đúng là B. 「重い」→「重さ」độ nặng."
    },
    {
      "id": 80,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "祖父は最近歳をとったせいか、とても忘れ（　　）なった。",
      "options": [
        "らしく",
        "っぽく",
        "がちに",
        "そうに"
      ],
      "answer": 1,
      "translation": "Ông tôi dạo này có tuổi nên trở nên rất hay quên.",
      "explanation": "Đáp án đúng là B. 「忘れっぽい」tính hay quên."
    },
    {
      "id": 81,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "激しい雨（　　）強い風も吹き荒れ、外出が極めて危険な状態だ。",
      "options": [
        "たばかりで",
        "としても",
        "のおかげで",
        "に加えて"
      ],
      "answer": 3,
      "translation": "Mưa to thêm vào đó gió giật mạnh, ra ngoài rất nguy hiểm.",
      "explanation": "Đáp án đúng là D. Mưa to kèm gió lớn."
    },
    {
      "id": 82,
      "unit": "Unit 10",
      "pattern": "〜てほしい",
      "question": "危険な場所には近づか（　　）と注意した。",
      "options": [
        "なくてよい",
        "てほしい",
        "ないでほしい",
        "なければならない"
      ],
      "answer": 2,
      "translation": "Tôi dặn mong họ đừng lại gần nơi nguy hiểm.",
      "explanation": "Đáp án đúng là C. Phủ định: ないでほしい."
    },
    {
      "id": 83,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "雪が激しく降り続いており、飛行機は飛び（　　）。",
      "options": [
        "ものか",
        "そうにない",
        "ことだ",
        "たばかりだ"
      ],
      "answer": 1,
      "translation": "Tuyết rơi dày đặc, máy bay trông chừng khó cất cánh được.",
      "explanation": "Đáp án đúng là B. Khó cất cánh."
    },
    {
      "id": 84,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "あの二人は意見が対立していて、話し合いはまとまり（　　）。",
      "options": [
        "ことだ",
        "たばかりだ",
        "恐れがある",
        "そうにない"
      ],
      "answer": 3,
      "translation": "Ý kiến hai người đối lập, cuộc thảo luận khó đi tới thống nhất.",
      "explanation": "Đáp án đúng là D. Khó thống nhất."
    },
    {
      "id": 85,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "彼は少しのことですぐに怒る、怒り（　　）性格だ。",
      "options": [
        "そうにない",
        "っぽい",
        "たばかり",
        "ものか"
      ],
      "answer": 1,
      "translation": "Anh ấy tính hay nổi nóng chuyện nhỏ cũng cáu.",
      "explanation": "Đáp án đúng là B. 「怒りっぽい」."
    },
    {
      "id": 86,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "まだ一度も会ったことがない人の本心が、分かる（　　）。",
      "options": [
        "わけがない",
        "代わりに",
        "ものか",
        "恐れがある"
      ],
      "answer": 0,
      "translation": "Người chưa gặp bao giờ làm sao hiểu thấu lòng dạ họ được!",
      "explanation": "Đáp án đúng là A. Tuyệt đối không thể hiểu."
    },
    {
      "id": 87,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "値段が高いものが、必ずしも品質が良い（　　）。",
      "options": [
        "に決まっている",
        "恐れがある",
        "とは限らない",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Đồ đắt tiền chưa chắc chất lượng đã tốt.",
      "explanation": "Đáp án đúng là C. 「〜とは限らない」chưa chắc là."
    },
    {
      "id": 88,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "人との信頼関係を築きたいなら、約束を守る（　　）。",
      "options": [
        "恐れがある",
        "ものか",
        "わけがない",
        "ことだ"
      ],
      "answer": 3,
      "translation": "Muốn xây dựng niềm tin thì nên giữ đúng lời hứa.",
      "explanation": "Đáp án đúng là D. Khuyên răn đạo lý."
    },
    {
      "id": 89,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "今週は仕事の忙しさ（　　）寝不足も重なり、ひどく疲れている。",
      "options": [
        "ごとに",
        "のおかげで",
        "に加えて",
        "としても"
      ],
      "answer": 2,
      "translation": "Bận rộn việc cộng thêm thiếu ngủ khiến tôi kiệt sức.",
      "explanation": "Đáp án đúng là C. Yếu tố dồn thêm."
    },
    {
      "id": 90,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "風邪を早く治したければ、暖かくしてゆっくり休む（　　）。",
      "options": [
        "ことだ",
        "恐れがある",
        "わけがない",
        "ものか"
      ],
      "answer": 0,
      "translation": "Muốn mau khỏi cảm cúm thì nên giữ ấm nghỉ ngơi.",
      "explanation": "Đáp án đúng là A. 「V辞書形 + ことだ」lời khuyên tốt nhất."
    },
    {
      "id": 91,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "彼が昨日東京にいた証拠があるのだから、犯人の（　　）。",
      "options": [
        "わけがない",
        "おかげだ",
        "恐れがある",
        "ことだ"
      ],
      "answer": 0,
      "translation": "Có chứng cứ hôm qua anh ấy ở Tokyo thì lẽ nào là thủ phạm được!",
      "explanation": "Đáp án đúng là A. Nの + わけがない."
    },
    {
      "id": 92,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "先月買っ（　　）のスマートフォンが、もう壊れてしまった。",
      "options": [
        "たところ",
        "るばかり",
        "たばかり",
        "てばかり"
      ],
      "answer": 2,
      "translation": "Chiếc điện thoại vừa mới mua tháng trước đã hỏng.",
      "explanation": "Đáp án đúng là C. Cảm nhận chủ quan vừa mới mua."
    },
    {
      "id": 93,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "一人でこの重いピアノを持ち上げられる（　　）。手伝ってくれ。",
      "options": [
        "ごとに",
        "ことだ",
        "わけがない",
        "せいだ"
      ],
      "answer": 2,
      "translation": "Một mình nâng sao nổi cây đàn piano này! Giúp tôi với.",
      "explanation": "Đáp án đúng là C. Bất khả thi."
    },
    {
      "id": 94,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "あの人は会う（　　）新しい服を着ていて、とてもおしゃれだ。",
      "options": [
        "一方で",
        "せいで",
        "ものか",
        "ごとに"
      ],
      "answer": 3,
      "translation": "Người đó cứ mỗi lần gặp lại mặc đồ mới.",
      "explanation": "Đáp án đúng là D. 「V辞書形 + ごとに」: cứ mỗi lần gặp."
    },
    {
      "id": 95,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "兄が社交的なの（　　）、弟は内向的で物静かだ。",
      "options": [
        "ことに対して",
        "に対して",
        "によって",
        "せいで"
      ],
      "answer": 1,
      "translation": "Trái với anh trai hòa đồng, em trai lại hướng nội.",
      "explanation": "Đáp án đúng là B. So sánh đối lập 2 sự việc."
    },
    {
      "id": 96,
      "unit": "Unit 12",
      "pattern": "〜とは限らない",
      "question": "「〜とは限らない」と一緒によく使われる副詞はどれですか。",
      "options": [
        "まるで",
        "必ずしも",
        "ぜひ",
        "まったく"
      ],
      "answer": 1,
      "translation": "Phó từ hay đi kèm là 必ずしも.",
      "explanation": "Đáp án đúng là B. Đi kèm 必ずしも."
    },
    {
      "id": 97,
      "unit": "Unit 11",
      "pattern": "〜そうにない",
      "question": "相手はプロの選手だから、初心者の私が勝て（　　）。",
      "options": [
        "一方で",
        "せいだ",
        "そうもない",
        "ことだ"
      ],
      "answer": 2,
      "translation": "Đối thủ là tuyển thủ chuyên nghiệp, tôi khó mà thắng nổi.",
      "explanation": "Đáp án đúng là C. Khó thắng được."
    },
    {
      "id": 98,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "厳しい批判（　　）、首相は冷静に説明を続けた。",
      "options": [
        "に対して",
        "ものか",
        "せいで",
        "によって"
      ],
      "answer": 0,
      "translation": "Đối diện với những lời phê phán gắt gao, thủ tướng vẫn bình tĩnh giải thích.",
      "explanation": "Đáp án đúng là A. Đối mặt với chỉ trích."
    },
    {
      "id": 99,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "トラブルを避けたいなら、契約書をよく確認する（　　）ね。",
      "options": [
        "っぽい",
        "ことだ",
        "せいで",
        "おかげで"
      ],
      "answer": 1,
      "translation": "Muốn tránh rắc rối thì nên đọc kỹ hợp đồng.",
      "explanation": "Đáp án đúng là B. Lời khuyên thực tế."
    },
    {
      "id": 100,
      "unit": "Unit 11",
      "pattern": "〜ものか",
      "question": "自分の夢をこんなところで諦めてたまる（　　）。",
      "options": [
        "ものか",
        "ことだ",
        "恐れがある",
        "おかげだ"
      ],
      "answer": 0,
      "translation": "Đời nào tôi chịu bỏ cuộc ước mơ ở nơi thế này!",
      "explanation": "Đáp án đúng là A. Không từ bỏ."
    }
  ]
};

// Tương thích ngược: mặc định bộ đề 1
const QUIZ_QUESTIONS = QUIZ_SETS["1"];
