// Bộ dữ liệu các bộ đề thi trắc nghiệm ngữ pháp tiếng Nhật
// Bao gồm: Bộ Đề 1 - 5 (500 câu điền câu) và 2 Bộ Đề Chuyên Đề Cốt Lõi (84 câu)
// Đã tích hợp rubyQuestion (Furigana) và hintTranslation (gợi ý dịch có chỗ trống)
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
      "explanation": "Đáp án đúng là A. Nguyên nhân tích cực.",
      "rubyQuestion": "<ruby>天気<rt>てんき</rt></ruby>が<ruby>良か<rt>よか</rt></ruby>った（　　）、<ruby>富士山<rt>ふじさん</rt></ruby>の<ruby>頂上<rt>ちょうじょう</rt></ruby>まできれいに<ruby>見え<rt>みえ</rt></ruby>ました。",
      "hintTranslation": "（......） thời tiết đẹp nên ngắm rõ đỉnh núi Phú Sĩ."
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
      "explanation": "Đáp án đúng là D. 「V辞書形 + ごとに」: cứ mỗi lần...",
      "rubyQuestion": "<ruby>失敗<rt>しっぱい</rt></ruby>する（　　）<ruby>改善点<rt>かいぜんてん</rt></ruby>を<ruby>見つ<rt>みつ</rt></ruby>けていけば、<ruby>必ず<rt>かならず</rt></ruby><ruby>成長<rt>せいちょう</rt></ruby>できる。",
      "hintTranslation": "（......） thất bại nếu tìm ra điểm khắc phục thì sẽ trưởng thành."
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
      "explanation": "Đáp án đúng là C. Ngay cả tiền lẻ.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby>お<ruby>金<rt>きん</rt></ruby>がなくて、<ruby>明日<rt>あした</rt></ruby>のパンを<ruby>買う<rt>かう</rt></ruby><ruby>小銭<rt>こぜに</rt></ruby>（　　）<ruby>持っ<rt>もっ</rt></ruby>ていない。",
      "hintTranslation": "（......） Anh ấy túng quẫn đến tiền mua bánh mì ngày mai cũng không có."
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
      "explanation": "Đáp án đúng là C. Lựa chọn thay thế.",
      "rubyQuestion": "<ruby>車<rt>くるま</rt></ruby>を<ruby>買う<rt>かう</rt></ruby>（　　）、<ruby>家族<rt>かぞく</rt></ruby>で<ruby>海外旅行<rt>かいがいりょこう</rt></ruby>に<ruby>行く<rt>いく</rt></ruby>ことにした。",
      "hintTranslation": "（......） mua ô tô, nhà tôi quyết định đi du lịch nước ngoài."
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
      "explanation": "Đáp án đúng là B. Vừa mới nghe xong.",
      "rubyQuestion": "さっき<ruby>説明<rt>せつめい</rt></ruby>を<ruby>聞い<rt>きい</rt></ruby>（　　）なのに、もう<ruby>忘れ<rt>わすれ</rt></ruby>てしまったのですか。",
      "hintTranslation": "（......） nghe giải thích lúc nãy mà giờ đã quên rồi à?"
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
      "explanation": "Đáp án đúng là D. 「普通形 + 一方で」nêu 2 mặt đối lập.",
      "rubyQuestion": "<ruby>都会<rt>とかい</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>は<ruby>便利<rt>べんり</rt></ruby>な（　　）、<ruby>生活費<rt>せいかつひ</rt></ruby>が<ruby>高く<rt>たかく</rt></ruby>ストレスも<ruby>多い<rt>おおい</rt></ruby>。",
      "hintTranslation": "（......） Cuộc sống thành thị tiện lợi nhưng chi phí đắt đỏ."
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
      "explanation": "Đáp án đúng là B. Thay thế nguyên liệu.",
      "rubyQuestion": "<ruby>砂糖<rt>さとう</rt></ruby>の（　　）ハチミツを<ruby>使って<rt>つかって</rt></ruby>、<ruby>低<rt>てい</rt></ruby>カロリーのお<ruby>菓子<rt>かし</rt></ruby>を<ruby>作っ<rt>つくっ</rt></ruby>た。",
      "hintTranslation": "Dùng mật ong （......） đường để làm bánh ít calo."
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
      "explanation": "Đáp án đúng là D. 「重い」→「重さ」độ nặng.",
      "rubyQuestion": "この<ruby>荷物<rt>にもつ</rt></ruby>の（　　）を<ruby>測っ<rt>はかっ</rt></ruby>てから、<ruby>送料<rt>そうりょう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>してください。",
      "hintTranslation": "（......） Cân độ nặng hành lý rồi tính phí ship."
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
      "explanation": "Đáp án đúng là B. 「忘れっぽい」tính hay quên.",
      "rubyQuestion": "<ruby>祖父<rt>そふ</rt></ruby>は<ruby>最近<rt>さいきん</rt></ruby><ruby>歳<rt>とし</rt></ruby>をとったせいか、とても<ruby>忘れ<rt>わすれ</rt></ruby>（　　）なった。",
      "hintTranslation": "Ông tôi dạo này có tuổi nên trở nên rất （......）."
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
      "explanation": "Đáp án đúng là B. Nguy cơ dịch bệnh.",
      "rubyQuestion": "インフルエンザが<ruby>急速<rt>きゅうそく</rt></ruby>に<ruby>感染<rt>かんせん</rt></ruby><ruby>拡大<rt>かくだい</rt></ruby>する（　　）がある。",
      "hintTranslation": "（......） dịch cúm lan rộng nhanh chóng."
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
      "explanation": "Đáp án đúng là C. 「イAことはイAが」.",
      "rubyQuestion": "この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>美味しい<rt>おいしい</rt></ruby>（　　）<ruby>美味しい<rt>おいしい</rt></ruby>が、<ruby>作る<rt>つくる</rt></ruby>のに<ruby>時間<rt>じかん</rt></ruby>がかかる。",
      "hintTranslation": "Ngon （......） nhưng nấu mất nhiều thời gian."
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
      "explanation": "Đáp án đúng là D. Khó ra sân thi đấu.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>が<ruby>長引い<rt>ながびい</rt></ruby>ていて、<ruby>今週末<rt>こんしゅうまつ</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>には<ruby>出場<rt>しゅつじょう</rt></ruby>でき（　　）。",
      "hintTranslation": "（......） Cảm cúm kéo dài nên trận đấu cuối tuần khó mà ra sân được."
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
      "explanation": "Đáp án đúng là D. Ai mà thèm tin.",
      "rubyQuestion": "あんな<ruby>嘘つき<rt>うそつき</rt></ruby>の<ruby>言う<rt>いう</rt></ruby>ことなんて、<ruby>誰が<rt>だれが</rt></ruby><ruby>信じ<rt>しんじ</rt></ruby>る（　　）！",
      "hintTranslation": "（......） Lời tên nói dối đó thì ai mà tin cho được!"
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
      "explanation": "Đáp án đúng là A. 「〜としても」cho dù đi nữa.",
      "rubyQuestion": "たとえ<ruby>大金持<rt>おおがねもち</rt></ruby>ちになっ（　　）、<ruby>質素<rt>しっそ</rt></ruby>な<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>変え<rt>かえ</rt></ruby>ないだろう。",
      "hintTranslation": "（......） có giàu có tôi vẫn sống giản dị như giờ."
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
      "explanation": "Đáp án đúng là A. Kết quả tích cực từ lời khuyên.",
      "rubyQuestion": "<ruby>先輩<rt>せんぱい</rt></ruby>のアドバイスの（　　）、<ruby>面接<rt>めんせつ</rt></ruby>で<ruby>落ち着い<rt>おちつい</rt></ruby>て<ruby>受け答え<rt>うけこたえ</rt></ruby>ができた。",
      "hintTranslation": "（......） lời khuyên của tiền bối mà tôi đã tự tin trả lời phỏng vấn."
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
      "explanation": "Đáp án đúng là A. 「NによるN」.",
      "rubyQuestion": "<ruby>地震<rt>じしん</rt></ruby>（　　）<ruby>津波<rt>つなみ</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>があるため、<ruby>警報<rt>けいほう</rt></ruby>が<ruby>発令<rt>はつれい</rt></ruby>された。",
      "hintTranslation": "（......） Do có nguy cơ sóng thần vì động đất nên phát cảnh báo."
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
      "explanation": "Đáp án đúng là C. Cho dù bị ai nói gì.",
      "rubyQuestion": "<ruby>誰<rt>だれ</rt></ruby>に<ruby>何を<rt>なにを</rt></ruby><ruby>言わ<rt>いわ</rt></ruby>れ（　　）、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>諦め<rt>あきらめ</rt></ruby>るつもりはありません。",
      "hintTranslation": "（......） bị ai nói gì tôi cũng không từ bỏ ước mơ."
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
      "explanation": "Đáp án đúng là C. Hậu quả tiêu cực do mưa.",
      "rubyQuestion": "<ruby>大雨<rt>おおあめ</rt></ruby>の（　　）<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>運転<rt>うんてん</rt></ruby>を<ruby>見合わ<rt>みあわ</rt></ruby>せ、<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>遅刻<rt>ちこく</rt></ruby>した。",
      "hintTranslation": "（......） mưa lớn nên tàu dừng chạy, tôi bị muộn làm."
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
      "explanation": "Đáp án đúng là D. 「Vないことだ」khuyên không nên.",
      "rubyQuestion": "<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>したいなら、<ruby>毎日<rt>まいにち</rt></ruby><ruby>復習<rt>ふくしゅう</rt></ruby>を<ruby>怠ら<rt>おこたら</rt></ruby>（　　）。",
      "hintTranslation": "Muốn thi đỗ thì tốt nhất （......） lơ là ôn tập."
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
      "explanation": "Đáp án đúng là B. Văn nói: もんか.",
      "rubyQuestion": "「<ruby>俺<rt>おれ</rt></ruby>の<ruby>苦しい<rt>くるしい</rt></ruby><ruby>気持ち<rt>きもち</rt></ruby>がお<ruby>前<rt>まえ</rt></ruby>なんかに<ruby>分か<rt>わか</rt></ruby>ってたまる（　　）！」",
      "hintTranslation": "（......） Nỗi khổ của tao đứa như mày làm sao mà hiểu được!"
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
      "explanation": "Đáp án đúng là C. 「絶滅のおそれがある」.",
      "rubyQuestion": "この<ruby>鳥<rt>とり</rt></ruby>は<ruby>生息地<rt>せいそくち</rt></ruby>が<ruby>減少<rt>げんしょう</rt></ruby>し、<ruby>絶滅<rt>ぜつめつ</rt></ruby>の（　　）があると<ruby>言わ<rt>いわ</rt></ruby>れている。",
      "hintTranslation": "Loài chim này （......） tuyệt chủng."
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
      "explanation": "Đáp án đúng là B. 「めくるごとに」: cứ mỗi lần lật trang.",
      "rubyQuestion": "ページをめくる（　　）<ruby>新しい<rt>あたらしい</rt></ruby><ruby>発見<rt>はっけん</rt></ruby>があり、とても<ruby>面白い<rt>おもしろい</rt></ruby><ruby>本<rt>ほん</rt></ruby>だ。",
      "hintTranslation": "（......） lật một trang lại có phát hiện mới, cuốn sách rất hay."
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
      "explanation": "Đáp án đúng là C. Chủ thể trong câu bị động.",
      "rubyQuestion": "この<ruby>素晴らしい<rt>すばらしい</rt></ruby><ruby>絵画<rt>かいが</rt></ruby>は、ピカソ（　　）<ruby>描か<rt>えがか</rt></ruby>れた。",
      "hintTranslation": "（......） Bức tranh này được vẽ bởi Picasso."
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
      "explanation": "Đáp án đúng là B. 「深い」→「深さ」.",
      "rubyQuestion": "このプールの<ruby>水深<rt>すいしん</rt></ruby>の（　　）は<ruby>何<rt>なに</rt></ruby>メートルですか。",
      "hintTranslation": "（......） Độ sâu của bể bơi này là mấy mét?"
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
      "explanation": "Đáp án đúng là B. 「正確さ」tính từ đuôi na.",
      "rubyQuestion": "<ruby>彼の<rt>かの</rt></ruby><ruby>仕事<rt>しごと</rt></ruby>の<ruby>正確<rt>せいかく</rt></ruby>（　　）には、<ruby>誰も<rt>だれも</rt></ruby>が<ruby>一目<rt>いちもく</rt></ruby><ruby>置い<rt>おい</rt></ruby>ている。",
      "hintTranslation": "（......） Độ chính xác trong công việc của anh ấy ai cũng nể phục."
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
      "explanation": "Đáp án đúng là D. Tuyệt đối không thể hiểu.",
      "rubyQuestion": "まだ<ruby>一度<rt>いちど</rt></ruby>も<ruby>会っ<rt>あっ</rt></ruby>たことがない<ruby>人<rt>にん</rt></ruby>の<ruby>本心<rt>ほんしん</rt></ruby>が、<ruby>分か<rt>わか</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Người chưa gặp bao giờ làm sao hiểu thấu lòng dạ họ được!"
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
      "explanation": "Đáp án đúng là C. ナAだとは限らない.",
      "rubyQuestion": "お<ruby>金持ち<rt>かねもち</rt></ruby>の<ruby>人<rt>にん</rt></ruby>が、みんな<ruby>幸せ<rt>しあわせ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Người giàu không hẳn ai cũng đều hạnh phúc."
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
      "explanation": "Đáp án đúng là B. Đối lập thời tiết 2 ngày.",
      "rubyQuestion": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>猛暑<rt>もうしょ</rt></ruby>（　　）、<ruby>今日は<rt>こんにちは</rt></ruby><ruby>急に<rt>きゅうに</rt></ruby><ruby>気温<rt>きおん</rt></ruby>が<ruby>下が<rt>さが</rt></ruby>って<ruby>肌寒い<rt>はださむい</rt></ruby>。",
      "hintTranslation": "（......） cái nóng gay gắt hôm qua, hôm nay lạnh se se."
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
      "explanation": "Đáp án đúng là D. Thiên tai chồng chất.",
      "rubyQuestion": "<ruby>台風<rt>たいふう</rt></ruby>の<ruby>被害<rt>ひがい</rt></ruby>（　　）、<ruby>地震<rt>じしん</rt></ruby>まで<ruby>発生<rt>はっせい</rt></ruby>して<ruby>現地<rt>げんち</rt></ruby>は<ruby>混乱<rt>こんらん</rt></ruby>している。",
      "hintTranslation": "Bị bão tàn phá （......） động đất xảy ra khiến hiện trường hỗn loạn."
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
      "explanation": "Đáp án đúng là A. Nguy cơ phun trào.",
      "rubyQuestion": "<ruby>火山活動<rt>かざんかつどう</rt></ruby>が<ruby>活発化<rt>かっぱつか</rt></ruby>しており、<ruby>噴火<rt>ふんか</rt></ruby>の（　　）が<ruby>高ま<rt>たかま</rt></ruby>っている。",
      "hintTranslation": "Hoạt động núi lửa sôi động, （......） phun trào tăng cao."
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
      "explanation": "Đáp án đúng là A. Phủ định kép.",
      "rubyQuestion": "<ruby>何年<rt>なんねん</rt></ruby>も<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>ている<ruby>先生<rt>せんせい</rt></ruby>が、この<ruby>文法<rt>ぶんぽう</rt></ruby>を<ruby>知ら<rt>しら</rt></ruby>ない（　　）。",
      "hintTranslation": "Thầy dạy tiếng Nhật bao năm （......） không biết ngữ pháp này!"
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
      "explanation": "Đáp án đúng là C. Nguy cơ cháy nổ.",
      "rubyQuestion": "<ruby>火<rt>ひ</rt></ruby>の<ruby>不始末<rt>ふしまつ</rt></ruby>から<ruby>大規模<rt>だいきぼ</rt></ruby>な<ruby>火災<rt>かさい</rt></ruby>に<ruby>発展<rt>はってん</rt></ruby>する（　　）。",
      "hintTranslation": "Sơ suất tàn lửa （......） phát triển thành hỏa hoạn lớn."
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
      "explanation": "Đáp án đúng là B. Mặt tích cực đi kèm tiêu cực.",
      "rubyQuestion": "<ruby>観光客<rt>かんこうきゃく</rt></ruby>の<ruby>増加<rt>ぞうか</rt></ruby>で<ruby>地域<rt>ちいき</rt></ruby>が<ruby>潤<rt>じゅん</rt></ruby>う（　　）、ゴミや<ruby>騒音<rt>そうおん</rt></ruby>などの<ruby>問題<rt>もんだい</rt></ruby>も<ruby>生じ<rt>しょうじ</rt></ruby>ている。",
      "hintTranslation": "Khách du lịch tăng làm vùng phát triển, （......） phát sinh rác thải ồn ào."
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
      "explanation": "Đáp án đúng là A. Phủ định mỉa mai.",
      "rubyQuestion": "「あの<ruby>映画<rt>えいが</rt></ruby>、<ruby>面白か<rt>おもしろか</rt></ruby>った？」「<ruby>面白か<rt>おもしろか</rt></ruby>った（　　）。<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>寝ち<rt>ねち</rt></ruby>ゃったよ。」",
      "hintTranslation": "（......） Hay nỗi gì! Tôi ngủ gật giữa chừng luôn đấy."
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
      "explanation": "Đáp án đúng là D. Tự tin không thể hỏng.",
      "rubyQuestion": "あんなに<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby><ruby>準備<rt>じゅんび</rt></ruby>したプレゼンが、<ruby>失敗<rt>しっぱい</rt></ruby>する（　　）。",
      "hintTranslation": "（......） Chuẩn bị bài thuyết trình công phu thế thì làm sao thất bại được!"
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
      "explanation": "Đáp án đúng là D. Thay đổi hình thức trả tiền.",
      "rubyQuestion": "<ruby>現金<rt>げんきん</rt></ruby>で<ruby>支払う<rt>しはらう</rt></ruby>（　　）、<ruby>電子<rt>でんし</rt></ruby>マネーで<ruby>決済<rt>けっさい</rt></ruby>するとポイントが<ruby>付く<rt>つく</rt></ruby>。",
      "hintTranslation": "（......） trả tiền mặt, thanh toán ví điện tử sẽ được điểm."
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
      "explanation": "Đáp án đúng là D. 「〜とは限らない」chưa chắc là.",
      "rubyQuestion": "<ruby>値段<rt>ねだん</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>ものが、<ruby>必ずしも<rt>かならずしも</rt></ruby><ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>良い<rt>よい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Đồ đắt tiền chưa chắc chất lượng đã tốt."
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
      "explanation": "Đáp án đúng là D. Tính từ đuôi na: 便利なことは便利だが.",
      "rubyQuestion": "<ruby>便利<rt>べんり</rt></ruby>な（　　）<ruby>便利<rt>べんり</rt></ruby>だが、<ruby>使い<rt>つかい</rt></ruby>こなすまでに<ruby>練習<rt>れんしゅう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。",
      "hintTranslation": "Tiện thì tiện （......） cần luyện tập mới quen dùng."
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
      "explanation": "Đáp án đúng là C. Kiến thức cộng kinh nghiệm.",
      "rubyQuestion": "<ruby>専門知識<rt>せんもんちしき</rt></ruby>（　　）<ruby>豊か<rt>ゆたか</rt></ruby>な<ruby>実務経験<rt>じつむけいけん</rt></ruby>を<ruby>持つ<rt>もつ</rt></ruby><ruby>人材<rt>じんざい</rt></ruby>が<ruby>求め<rt>もとめ</rt></ruby>られている。",
      "hintTranslation": "（......） Đang tuyển nhân sự có kiến thức chuyên môn cộng thêm kinh nghiệm phong phú."
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
      "explanation": "Đáp án đúng là D. 「N + によって」chỉ nguyên nhân.",
      "rubyQuestion": "<ruby>今回<rt>こんかい</rt></ruby>の<ruby>台風<rt>たいふう</rt></ruby>（　　）、<ruby>多く<rt>おおく</rt></ruby>の<ruby>家屋<rt>かおく</rt></ruby>が<ruby>被害<rt>ひがい</rt></ruby>を<ruby>受け<rt>うけ</rt></ruby>ました。",
      "hintTranslation": "（......） Do cơn bão lần này, nhiều nhà cửa bị thiệt hại."
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
      "explanation": "Đáp án đúng là A. Chắc chắn ngon.",
      "rubyQuestion": "プロの<ruby>料理人<rt>りょうりにん</rt></ruby>が<ruby>作っ<rt>つくっ</rt></ruby>たのだから、まずい（　　）。",
      "hintTranslation": "Đầu bếp chuyên nghiệp nấu thì （......） dở được!"
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
      "explanation": "Đáp án đúng là A. Đối mặt với chỉ trích.",
      "rubyQuestion": "<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>批判<rt>ひはん</rt></ruby>（　　）、<ruby>首相<rt>しゅしょう</rt></ruby>は<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>を<ruby>続け<rt>つづけ</rt></ruby>た。",
      "hintTranslation": "（......） Đối diện với những lời phê phán gắt gao, thủ tướng vẫn bình tĩnh giải thích."
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
      "explanation": "Đáp án đúng là B. 「黒っぽい」hơi đen.",
      "rubyQuestion": "<ruby>黒<rt>くろ</rt></ruby>（　　）ジャケットを<ruby>羽織<rt>はおり</rt></ruby>って<ruby>出勤<rt>しゅっきん</rt></ruby>した。",
      "hintTranslation": "（......） Mặc áo khoác màu hơi ngả đen đi làm."
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
      "explanation": "Đáp án đúng là A. 「水っぽい」loãng, nhiều nước.",
      "rubyQuestion": "このスープは<ruby>水<rt>みず</rt></ruby>（　　）て、あまり<ruby>美味しく<rt>おいしく</rt></ruby>ない。",
      "hintTranslation": "Món súp này （......） (loãng toẹt), không ngon."
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
      "explanation": "Đáp án đúng là A. Động viên nên thử.",
      "rubyQuestion": "<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>恐れ<rt>おそれ</rt></ruby>ずに、<ruby>新しい<rt>あたらしい</rt></ruby>ことに<ruby>挑戦<rt>ちょうせん</rt></ruby>して<ruby>挑戦<rt>ちょうせん</rt></ruby>してみる（　　）。",
      "hintTranslation": "（......） sợ thất bại, tốt nhất là cứ thử sức với điều mới."
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
      "explanation": "Đáp án đúng là C. 「〜恐れがある」nguy cơ xấu.",
      "rubyQuestion": "<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近し<rt>せっきんし</rt></ruby>ているため、<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>河川<rt>かせん</rt></ruby>の<ruby>氾濫<rt>はんらん</rt></ruby>の（　　）。",
      "hintTranslation": "Bão đến gần （......） nước sông tràn bờ."
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
      "explanation": "Đáp án đúng là B. Hướng tới kỳ vọng.",
      "rubyQuestion": "<ruby>親<rt>おや</rt></ruby>の<ruby>期待<rt>きたい</rt></ruby>（　　）<ruby>応え<rt>こたえ</rt></ruby>られるよう、<ruby>全力<rt>ぜんりょく</rt></ruby>で<ruby>試験<rt>しけん</rt></ruby>に<ruby>臨ん<rt>のぞん</rt></ruby>だ。",
      "hintTranslation": "（......） Để đáp lại kỳ vọng của cha mẹ, tôi dốc sức thi."
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
      "explanation": "Đáp án đúng là D. Dù mất thời gian.",
      "rubyQuestion": "たとえ<ruby>時間<rt>じかん</rt></ruby>がかかっ（　　）、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>力<rt>ちから</rt></ruby>で<ruby>最後<rt>さいご</rt></ruby>までやり<ruby>遂げ<rt>とげ</rt></ruby>たい。",
      "hintTranslation": "（......） có tốn thời gian tôi muốn tự sức hoàn thành."
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
      "explanation": "Đáp án đúng là C. Cộng thêm khó khăn.",
      "rubyQuestion": "<ruby>人件費<rt>じんけんひ</rt></ruby>の<ruby>高騰<rt>こうとう</rt></ruby>（　　）<ruby>原材料費<rt>げんざいりょうひ</rt></ruby>の<ruby>値上がり<rt>ねあがり</rt></ruby>も、<ruby>経営<rt>けいえい</rt></ruby>を<ruby>圧迫<rt>あっぱく</rt></ruby>している。",
      "hintTranslation": "（......） Chi phí nhân công tăng cộng thêm nguyên liệu đắt gây áp lực kinh doanh."
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
      "explanation": "Đáp án đúng là B. 「Vないでほしい」mong đừng làm.",
      "rubyQuestion": "この<ruby>件<rt>けん</rt></ruby>については、<ruby>他の<rt>ほかの</rt></ruby><ruby>人<rt>にん</rt></ruby>には<ruby>誰<rt>だれ</rt></ruby>にも<ruby>言わ<rt>いわ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Mong bạn đừng nói việc này cho ai biết."
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
      "explanation": "Đáp án đúng là A. Phương tiện thông qua.",
      "rubyQuestion": "その<ruby>法案<rt>ほうあん</rt></ruby>は<ruby>国会<rt>こっかい</rt></ruby>の<ruby>多数決<rt>たすうけつ</rt></ruby>（　　）<ruby>可決<rt>かけつ</rt></ruby>されました。",
      "hintTranslation": "（......） Dự luật đó đã được thông qua bằng biểu quyết đa số ở quốc hội."
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
      "explanation": "Đáp án đúng là B. Bất khả thi.",
      "rubyQuestion": "<ruby>一人<rt>ひとり</rt></ruby>でこの<ruby>重い<rt>おもい</rt></ruby>ピアノを<ruby>持ち<rt>もち</rt></ruby><ruby>上げ<rt>あげ</rt></ruby>られる（　　）。<ruby>手伝っ<rt>てつだっ</rt></ruby>てくれ。",
      "hintTranslation": "（......） Một mình nâng sao nổi cây đàn piano này! Giúp tôi với."
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
      "explanation": "Đáp án đúng là C. Đi kèm 必ずしも.",
      "rubyQuestion": "「〜とは<ruby>限ら<rt>かぎら</rt></ruby>ない」と<ruby>一緒に<rt>いっしょに</rt></ruby>よく<ruby>使わ<rt>つかわ</rt></ruby>れる<ruby>副詞<rt>ふくし</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Phó từ hay đi kèm là 必ずしも."
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
      "explanation": "Đáp án đúng là D. Khó lòng kịp giờ.",
      "rubyQuestion": "<ruby>渋滞<rt>じゅうたい</rt></ruby>がひどいので、<ruby>約束<rt>やくそく</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>に<ruby>間に合い<rt>まにあい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Tắc đường nặng thế này có vẻ không kịp giờ hẹn."
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
      "explanation": "Đáp án đúng là C. Không thể ngồi yên.",
      "rubyQuestion": "こんな<ruby>屈辱<rt>くつじょく</rt></ruby>を<ruby>味わ<rt>あじわ</rt></ruby>って、<ruby>黙っ<rt>だまっ</rt></ruby>ていられる（　　）。",
      "hintTranslation": "（......） Chịu nỗi nhục nhã này làm sao mà im lặng chịu trận được!"
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
      "explanation": "Đáp án đúng là C. Bù lại tương xứng.",
      "rubyQuestion": "<ruby>英語<rt>えいご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>てもらう（　　）、<ruby>彼<rt>かれ</rt></ruby>にベトナム<ruby>語<rt>ご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>てあげている。",
      "hintTranslation": "（......） Được dạy tiếng Anh, đổi lại tôi dạy tiếng Việt cho bạn."
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
      "explanation": "Đáp án đúng là D. 「怒りっぽい」.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby><ruby>少し<rt>すこし</rt></ruby>のことですぐに<ruby>怒る<rt>いかる</rt></ruby>、<ruby>怒り<rt>いかり</rt></ruby>（　　）<ruby>性格<rt>せいかく</rt></ruby>だ。",
      "hintTranslation": "（......） Anh ấy tính hay nổi nóng chuyện nhỏ cũng cáu."
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
      "explanation": "Đáp án đúng là D. 「おかげで」dùng mỉa mai trách khéo.",
      "rubyQuestion": "（<ruby>皮肉<rt>ひにく</rt></ruby>）「<ruby>君<rt>くん</rt></ruby>が<ruby>重要な<rt>じゅうような</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>を<ruby>忘れ<rt>わすれ</rt></ruby>てくれた（　　）、<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>中止<rt>ちゅうし</rt></ruby>になっちゃったよ。」",
      "hintTranslation": "(Mỉa mai) '（......） cậu quên tài liệu mà cuộc họp bị hủy luôn rồi đấy!'"
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
      "explanation": "Đáp án đúng là A. Cảm nhận chủ quan vừa mới mua.",
      "rubyQuestion": "<ruby>先月<rt>せんげつ</rt></ruby><ruby>買っ<rt>かっ</rt></ruby>（　　）のスマートフォンが、もう<ruby>壊れ<rt>こわれ</rt></ruby>てしまった。",
      "hintTranslation": "Chiếc điện thoại （......） mua tháng trước đã hỏng."
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
      "explanation": "Đáp án đúng là A. 2 mặt đối lập của việc dạy con.",
      "rubyQuestion": "<ruby>親<rt>おや</rt></ruby>は<ruby>子供<rt>こども</rt></ruby>を<ruby>厳しく<rt>いかめしく</rt></ruby><ruby>注意<rt>ちゅうい</rt></ruby>する（　　）、<ruby>優し<rt>やさし</rt></ruby>く<ruby>褒め<rt>ほめ</rt></ruby>ることも<ruby>忘れ<rt>わすれ</rt></ruby>ない。",
      "hintTranslation": "Cha mẹ một mặt nghiêm khắc nhưng （......） cũng không quên khen con."
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
      "explanation": "Đáp án đúng là A. Cấu trúc lặp từ 「VことはVが」.",
      "rubyQuestion": "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>話せ<rt>はなせ</rt></ruby>る（　　）<ruby>話せ<rt>はなせ</rt></ruby>ますが、<ruby>日常会話<rt>にちじょうかいわ</rt></ruby>レベルです。",
      "hintTranslation": "Nói thì nói được （......） chỉ mức cơ bản."
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
      "explanation": "Đáp án đúng là D. Vừa mới sinh ra.",
      "rubyQuestion": "<ruby>生まれ<rt>うまれ</rt></ruby>て（　　）の<ruby>赤ちゃん<rt>あかちゃん</rt></ruby>を<ruby>抱っこ<rt>だっこ</rt></ruby>させてもらった。",
      "hintTranslation": "Tôi được bế em bé （......） chào đời."
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
      "explanation": "Đáp án đúng là C. Chưa chắc đã mưa.",
      "rubyQuestion": "<ruby>天気予報<rt>てんきよほう</rt></ruby>が<ruby>雨<rt>あめ</rt></ruby>だと<ruby>言って<rt>いって</rt></ruby>も、<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>雨<rt>あめ</rt></ruby>が<ruby>降る<rt>ふる</rt></ruby>（　　）。",
      "hintTranslation": "（......） Dự báo mưa chưa chắc trời đã mưa."
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
      "explanation": "Đáp án đúng là A. おかげで dùng châm biếm.",
      "rubyQuestion": "（<ruby>皮肉<rt>ひにく</rt></ruby>）「あなたが<ruby>余計<rt>よけい</rt></ruby>なことを<ruby>言った<rt>いった</rt></ruby>（　　）、<ruby>雰囲気<rt>ふんいき</rt></ruby>が<ruby>台無し<rt>だいなし</rt></ruby>ですよ。」",
      "hintTranslation": "(Mỉa mai) '（......） cậu nói lời thừa thãi mà không khí hỏng bét rồi đấy.'"
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
      "explanation": "Đáp án đúng là C. 「面白さ」.",
      "rubyQuestion": "この<ruby>小説<rt>しょうせつ</rt></ruby>の<ruby>面白<rt>おもしろ</rt></ruby>（　　）は、<ruby>読んだ<rt>よんだ</rt></ruby><ruby>人<rt>にん</rt></ruby>にしか<ruby>分か<rt>わか</rt></ruby>らない。",
      "hintTranslation": "（......） Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu."
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
      "explanation": "Đáp án đúng là B. 「安っぽい」trông rẻ tiền.",
      "rubyQuestion": "<ruby>安物<rt>やすもの</rt></ruby>（　　）<ruby>服<rt>ふく</rt></ruby>でも、<ruby>着こ<rt>つこ</rt></ruby>なし<ruby>次第<rt>しだい</rt></ruby>でおしゃれに<ruby>見え<rt>みえ</rt></ruby>る。",
      "hintTranslation": "（......） Dù là quần áo trông có vẻ rẻ tiền nhưng khéo mặc vẫn đẹp."
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
      "explanation": "Đáp án đúng là D. Nguyên nhân dẫn tới thua trận.",
      "rubyQuestion": "<ruby>油断<rt>ゆだん</rt></ruby>した（　　）、<ruby>試合<rt>しあい</rt></ruby>の<ruby>終了間際<rt>しゅうりょうまぎわ</rt></ruby>に<ruby>逆転<rt>ぎゃくてん</rt></ruby>ゴールを<ruby>決め<rt>きめ</rt></ruby>られた。",
      "hintTranslation": "（......） chủ quan nên sát giờ hết trận bị đối thủ ghi bàn lội ngược dòng."
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
      "explanation": "Đáp án đúng là D. Dù thất bại.",
      "rubyQuestion": "どんなに<ruby>失敗<rt>しっぱい</rt></ruby>し（　　）、そこから<ruby>学べ<rt>まなべ</rt></ruby>ば<ruby>無駄<rt>むだ</rt></ruby>にはならない。",
      "hintTranslation": "（......） thất bại thế nào nếu học hỏi được thì không vô ích."
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
      "explanation": "Đáp án đúng là C. So sánh đối lập 2 sự việc.",
      "rubyQuestion": "<ruby>兄<rt>あに</rt></ruby>が<ruby>社交的<rt>しゃこうてき</rt></ruby>なの（　　）、<ruby>弟<rt>おとうと</rt></ruby>は<ruby>内向的<rt>ないこうてき</rt></ruby>で<ruby>物<rt>もの</rt></ruby><ruby>静か<rt>しずか</rt></ruby>だ。",
      "hintTranslation": "（......） anh trai hòa đồng, em trai lại hướng nội."
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
      "explanation": "Đáp án đúng là B. Chưa hẳn đúng mọi lúc.",
      "rubyQuestion": "<ruby>辞書<rt>じしょ</rt></ruby>に<ruby>載っ<rt>のっ</rt></ruby>ている<ruby>意味<rt>いみ</rt></ruby>が、すべての<ruby>文脈<rt>ぶんみゃく</rt></ruby>に<ruby>当て<rt>あて</rt></ruby>はまる（　　）。",
      "hintTranslation": "（......） Nghĩa trong từ điển chưa chắc đúng mọi ngữ cảnh."
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
      "explanation": "Đáp án đúng là C. Phủ định: ないでほしい.",
      "rubyQuestion": "<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>には<ruby>近づ<rt>ちかづ</rt></ruby>か（　　）と<ruby>注意<rt>ちゅうい</rt></ruby>した。",
      "hintTranslation": "（......） Tôi dặn mong họ đừng lại gần nơi nguy hiểm."
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
      "explanation": "Đáp án đúng là C. Không hẳn là.",
      "rubyQuestion": "<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>大学<rt>だいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>したからといって、<ruby>良い<rt>よい</rt></ruby><ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>入れ<rt>いれ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Tốt nghiệp đại học danh tiếng chưa chắc vào được công ty tốt."
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
      "explanation": "Đáp án đúng là D. 「1キロごとに」: cứ cách 1 km.",
      "rubyQuestion": "このマラソンコースには、１キロ（　　）<ruby>給水所<rt>きゅうすいじょ</rt></ruby>が<ruby>設置<rt>せっち</rt></ruby>されています。",
      "hintTranslation": "Trên cung đường chạy này （......） 1km lại có trạm tiếp nước."
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
      "explanation": "Đáp án đúng là C. Nhấn mạnh mức độ không biết.",
      "rubyQuestion": "<ruby>名前<rt>なまえ</rt></ruby>（　　）<ruby>覚え<rt>おぼえ</rt></ruby>ていない<ruby>相手<rt>あいて</rt></ruby>から、<ruby>突然<rt>とつぜん</rt></ruby><ruby>高価<rt>こうか</rt></ruby>なプレゼントが<ruby>届い<rt>とどい</rt></ruby>た。",
      "hintTranslation": "Từ người mà （......） tên tôi cũng không nhớ, bỗng nhận được quà đắt tiền."
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
      "explanation": "Đáp án đúng là B. Rét cộng tuyết lớn.",
      "rubyQuestion": "<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>寒さ<rt>さむさ</rt></ruby>（　　）<ruby>大雪<rt>おおゆき</rt></ruby>に<ruby>見舞<rt>みまい</rt></ruby>われ、<ruby>交通網<rt>こうつうもう</rt></ruby>が<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>麻痺<rt>まひ</rt></ruby>した。",
      "hintTranslation": "（......） Rét đậm cộng thêm tuyết rơi dày khiến giao thông tê liệt."
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
      "explanation": "Đáp án đúng là D. Khó thắng được.",
      "rubyQuestion": "<ruby>相手<rt>あいて</rt></ruby>はプロの<ruby>選手<rt>せんしゅ</rt></ruby>だから、<ruby>初心者<rt>しょしんしゃ</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>が<ruby>勝て<rt>かて</rt></ruby>（　　）。",
      "hintTranslation": "（......） Đối thủ là tuyển thủ chuyên nghiệp, tôi khó mà thắng nổi."
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
      "explanation": "Đáp án đúng là A. 「N + ごとに」chỉ chu kỳ lặp lại 'cứ mỗi... lại...'.",
      "rubyQuestion": "オリンピックは４<ruby>年<rt>ねん</rt></ruby>（　　）<ruby>開催<rt>かいさい</rt></ruby>される<ruby>世界的<rt>せかいてき</rt></ruby>なスポーツの<ruby>祭典<rt>さいてん</rt></ruby>です。",
      "hintTranslation": "（......） Thế vận hội Olympic được tổ chức 4 năm một lần."
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
      "explanation": "Đáp án đúng là A. Phương tiện / cách thức.",
      "rubyQuestion": "インターネット（　　）、<ruby>世界中<rt>せかいじゅう</rt></ruby>のニュースが<ruby>瞬時<rt>しゅんじ</rt></ruby>に<ruby>伝わ<rt>つたわ</rt></ruby>る。",
      "hintTranslation": "（......） Nhờ có internet, tin tức toàn cầu truyền đi chớp mắt."
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
      "explanation": "Đáp án đúng là C. Lời khuyên thực tế.",
      "rubyQuestion": "トラブルを<ruby>避け<rt>さけ</rt></ruby>たいなら、<ruby>契約書<rt>けいやくしょ</rt></ruby>をよく<ruby>確認す<rt>かくにんす</rt></ruby>る（　　）ね。",
      "hintTranslation": "Muốn tránh rắc rối thì （......） đọc kỹ hợp đồng."
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
      "explanation": "Đáp án đúng là A. Mong ước cho con cái.",
      "rubyQuestion": "<ruby>親<rt>おや</rt></ruby>としては、<ruby>子供<rt>こども</rt></ruby>に<ruby>健康<rt>けんこう</rt></ruby>で<ruby>幸せ<rt>しあわせ</rt></ruby>に<ruby>育っ<rt>そだっ</rt></ruby>（　　）ものだ。",
      "hintTranslation": "（......） Là cha mẹ thì luôn mong con lớn lên khỏe mạnh hạnh phúc."
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
      "explanation": "Đáp án đúng là D. Đối lập 2 thực trạng.",
      "rubyQuestion": "<ruby>都市部<rt>としぶ</rt></ruby>の<ruby>人口<rt>じんこう</rt></ruby>が<ruby>増加<rt>ぞうか</rt></ruby>しているの（　　）、<ruby>地方<rt>ちほう</rt></ruby>では<ruby>過疎<rt>かそ</rt></ruby><ruby>化<rt>か</rt></ruby>が<ruby>進ん<rt>すすん</rt></ruby>でいる。",
      "hintTranslation": "（......） Trái ngược dân số thành thị tăng, vùng quê bị giảm dân."
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
      "explanation": "Đáp án đúng là D. Ngay cả lỗi bản thân.",
      "rubyQuestion": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>間違い<rt>まちがい</rt></ruby>（　　）<ruby>認め<rt>みとめ</rt></ruby>られない<ruby>人<rt>にん</rt></ruby>は、<ruby>成長す<rt>せいちょうす</rt></ruby>ることができない。",
      "hintTranslation": "Người mà （......） lỗi sai của mình cũng không thừa nhận thì không thể tiến bộ."
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
      "explanation": "Đáp án đúng là A. 「V辞書形こと + さえ」.",
      "rubyQuestion": "<ruby>足<rt>あし</rt></ruby>の<ruby>痛み<rt>いたみ</rt></ruby>がひどくて、<ruby>立つ<rt>たつ</rt></ruby>こと（　　）できない<ruby>状態<rt>じょうたい</rt></ruby>だ。",
      "hintTranslation": "Chân đau dữ dội, （......） việc đứng cũng không làm được."
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
      "explanation": "Đáp án đúng là B. Chưa chắc đã thành thạo.",
      "rubyQuestion": "<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>長く<rt>ながく</rt></ruby><ruby>住ん<rt>すん</rt></ruby>でいるからといって、<ruby>敬語<rt>けいご</rt></ruby>が<ruby>完璧<rt>かんぺき</rt></ruby>に<ruby>使え<rt>つかえ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Sống ở Nhật lâu chưa chắc đã dùng kính ngữ chuẩn."
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
      "explanation": "Đáp án đúng là B. 「である一方で」nêu 2 vai trò song song.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby><ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>研究者<rt>けんきゅうしゃ</rt></ruby>である（　　）、<ruby>大学<rt>だいがく</rt></ruby>で<ruby>学生<rt>がくせい</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>る<ruby>教育者<rt>きょういくしゃ</rt></ruby>でもある。",
      "hintTranslation": "（......） Anh ấy vừa là nhà nghiên cứu giỏi vừa là nhà giáo dục."
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
      "explanation": "Đáp án đúng là B. Khó leo nổi dốc.",
      "rubyQuestion": "<ruby>古い<rt>ふるい</rt></ruby><ruby>車<rt>くるま</rt></ruby>なので、<ruby>急な<rt>きゅうな</rt></ruby><ruby>坂道<rt>さかみち</rt></ruby>を<ruby>登り<rt>のぼり</rt></ruby><ruby>切れ<rt>きれ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Xe cũ nên dốc đứng thế này trông khó mà leo hết nổi."
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
      "explanation": "Đáp án đúng là B. 「せいで」chỉ nguyên nhân gây hậu quả xấu.",
      "rubyQuestion": "<ruby>昨夜<rt>さくや</rt></ruby><ruby>遅く<rt>おそく</rt></ruby>までゲームをした（　　）、<ruby>今朝<rt>けさ</rt></ruby><ruby>寝坊<rt>ねぼう</rt></ruby>してしまった。",
      "hintTranslation": "（......） chơi game muộn nên sáng nay ngủ quên."
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
      "explanation": "Đáp án đúng là C. 「Vタ形 + ばかり」vừa mới xong.",
      "rubyQuestion": "<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>来<rt>らい</rt></ruby>（　　）の<ruby>頃<rt>ごろ</rt></ruby>は、<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>乗り換え<rt>のりかえ</rt></ruby>さえ<ruby>難しか<rt>むずかしか</rt></ruby>った。",
      "hintTranslation": "Hồi （......） sang Nhật, đổi tàu cũng thấy khó."
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
      "explanation": "Đáp án đúng là C. Mong người khác hiểu.",
      "rubyQuestion": "<ruby>私<rt>わたし</rt></ruby>の<ruby>気持ち<rt>きもち</rt></ruby>をもう<ruby>少し<rt>すこし</rt></ruby><ruby>理解<rt>りかい</rt></ruby>し（　　）と<ruby>思い<rt>おもい</rt></ruby>ます。",
      "hintTranslation": "（......） Tôi mong bạn thấu hiểu cho tâm trạng của tôi một chút."
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
      "explanation": "Đáp án đúng là D. 「他人のせいにする」: đổ lỗi cho người khác.",
      "rubyQuestion": "<ruby>何で<rt>なんで</rt></ruby>も<ruby>他人<rt>たにん</rt></ruby>の（　　）にするのは、<ruby>大人<rt>おとな</rt></ruby>の<ruby>態度<rt>たいど</rt></ruby>とは<ruby>言え<rt>いえ</rt></ruby>ない。",
      "hintTranslation": "（......） Đổ lỗi cho người khác không phải thái độ người lớn."
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
      "explanation": "Đáp án đúng là C. Mặt lợi và mặt hại đối lập.",
      "rubyQuestion": "インターネットは<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>素早く<rt>すばやく</rt></ruby><ruby>得ら<rt>えら</rt></ruby>れる（　　）、<ruby>誤<rt>ご</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>が<ruby>広が<rt>ひろが</rt></ruby>りやすいリスクもある。",
      "hintTranslation": "Internet giúp tra thông tin nhanh, （......） có nguy cơ lan truyền tin giả."
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
      "explanation": "Đáp án đúng là D. Khuyên bảo lối sống.",
      "rubyQuestion": "<ruby>健康<rt>けんこう</rt></ruby>で<ruby>長生き<rt>ながいき</rt></ruby>したければ、<ruby>規則正し<rt>きそくただし</rt></ruby>い<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>送る<rt>おくる</rt></ruby>（　　）。",
      "hintTranslation": "Muốn sống lâu khỏe mạnh thì （......） sinh hoạt điều độ."
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
      "explanation": "Đáp án đúng là A. Yếu tố dồn thêm.",
      "rubyQuestion": "<ruby>今週<rt>こんしゅう</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>の<ruby>忙しさ<rt>いそがしさ</rt></ruby>（　　）<ruby>寝不足<rt>ねぶそく</rt></ruby>も<ruby>重なり<rt>かさなり</rt></ruby>、ひどく<ruby>疲れ<rt>つかれ</rt></ruby>ている。",
      "hintTranslation": "（......） Bận rộn việc cộng thêm thiếu ngủ khiến tôi kiệt sức."
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
      "explanation": "Đáp án đúng là B. Lược bỏ 'て' thành に加え.",
      "rubyQuestion": "「〜に<ruby>加え<rt>くわえ</rt></ruby>て」を<ruby>文章語<rt>ぶんしょうご</rt></ruby>（<ruby>書き言葉<rt>かきことば</rt></ruby>）でより<ruby>硬く<rt>かたく</rt></ruby><ruby>表現<rt>ひょうげん</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>正しい<rt>ただしい</rt></ruby><ruby>形<rt>かたち</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Dạng văn viết trang trọng là 〜に加え."
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
      "explanation": "Đáp án đúng là D. Nguy cơ an ninh mạng.",
      "rubyQuestion": "パスワードを<ruby>簡単<rt>かんたん</rt></ruby>にすると、<ruby>不正<rt>ふせい</rt></ruby>アクセスの<ruby>被害<rt>ひがい</rt></ruby>に<ruby>遭う<rt>あう</rt></ruby>（　　）。",
      "hintTranslation": "Đặt mật khẩu dễ đoán （......） bị tấn công tài khoản."
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
      "explanation": "Đáp án đúng là C. 「V辞書形 + ことだ」lời khuyên tốt nhất.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>早く<rt>はやく</rt></ruby><ruby>治し<rt>なおし</rt></ruby>たければ、<ruby>暖かく<rt>あたたかく</rt></ruby>してゆっくり<ruby>休む<rt>やすむ</rt></ruby>（　　）。",
      "hintTranslation": "Muốn mau khỏi cảm cúm thì （......） giữ ấm nghỉ ngơi."
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
      "explanation": "Đáp án đúng là C. Dù lương cao.",
      "rubyQuestion": "どんなに<ruby>給料<rt>きゅうりょう</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>（　　）、<ruby>残業<rt>ざんぎょう</rt></ruby>ばかりのブラック<ruby>企業<rt>きぎょう</rt></ruby>では<ruby>働き<rt>はたらき</rt></ruby>たくない。",
      "hintTranslation": "（......） lương có cao tôi cũng không làm công ty bóc lột tăng ca."
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
      "explanation": "Đáp án đúng là B. Mong ước.",
      "rubyQuestion": "<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>記念日<rt>きねんび</rt></ruby>だから、<ruby>二人<rt>ふたり</rt></ruby>でゆっくり<ruby>過ご<rt>すご</rt></ruby>し（　　）。",
      "hintTranslation": "（......） Ngày kỷ niệm quan trọng nên muốn cả hai bên nhau trọn vẹn."
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
      "explanation": "Đáp án đúng là D. Công nhận khả năng mua.",
      "rubyQuestion": "<ruby>買え<rt>かえ</rt></ruby>る（　　）<ruby>買え<rt>かえ</rt></ruby>るが、<ruby>今月<rt>こんげつ</rt></ruby>の<ruby>予算<rt>よさん</rt></ruby>をオーバーしてしまう。",
      "hintTranslation": "（......） Mua thì mua được nhưng vượt quá ngân sách tháng này."
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
      "explanation": "Đáp án đúng là C. Dù là sự thật.",
      "rubyQuestion": "<ruby>仮に<rt>かりに</rt></ruby>その<ruby>話<rt>はなし</rt></ruby>が<ruby>本当<rt>ほんとう</rt></ruby>だ（　　）、<ruby>彼<rt>かれ</rt></ruby>を<ruby>許す<rt>ゆるす</rt></ruby>ことはできない。",
      "hintTranslation": "（......） chuyện đó là thật tôi cũng không tha thứ cho anh ấy."
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
      "explanation": "Đáp án đúng là D. 「深い」→「深さ」.",
      "rubyQuestion": "このプールの<ruby>水深<rt>すいしん</rt></ruby>の（　　）は<ruby>何<rt>なに</rt></ruby>メートルですか。",
      "hintTranslation": "（......） Độ sâu của bể bơi này là mấy mét?"
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
      "explanation": "Đáp án đúng là B. 「黒っぽい」hơi đen.",
      "rubyQuestion": "<ruby>黒<rt>くろ</rt></ruby>（　　）ジャケットを<ruby>羽織<rt>はおり</rt></ruby>って<ruby>出勤<rt>しゅっきん</rt></ruby>した。",
      "hintTranslation": "（......） Mặc áo khoác màu hơi ngả đen đi làm."
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
      "explanation": "Đáp án đúng là B. Cộng thêm khó khăn.",
      "rubyQuestion": "<ruby>人件費<rt>じんけんひ</rt></ruby>の<ruby>高騰<rt>こうとう</rt></ruby>（　　）<ruby>原材料費<rt>げんざいりょうひ</rt></ruby>の<ruby>値上がり<rt>ねあがり</rt></ruby>も、<ruby>経営<rt>けいえい</rt></ruby>を<ruby>圧迫<rt>あっぱく</rt></ruby>している。",
      "hintTranslation": "（......） Chi phí nhân công tăng cộng thêm nguyên liệu đắt gây áp lực kinh doanh."
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
      "explanation": "Đáp án đúng là D. Đã xin lỗi nhưng chưa ổn.",
      "rubyQuestion": "<ruby>謝っ<rt>あやまっ</rt></ruby>た（　　）<ruby>謝っ<rt>あやまっ</rt></ruby>たが、まだ<ruby>相手<rt>あいて</rt></ruby>の<ruby>怒り<rt>いかり</rt></ruby>は<ruby>収ま<rt>おさま</rt></ruby>っていない。",
      "hintTranslation": "（......） Xin lỗi thì xin lỗi rồi nhưng đối phương vẫn chưa nguôi giận."
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
      "explanation": "Đáp án đúng là D. Nguy cơ phá sản.",
      "rubyQuestion": "<ruby>景気<rt>けいき</rt></ruby>の<ruby>悪化<rt>あっか</rt></ruby>が<ruby>続け<rt>つづけ</rt></ruby>ば、<ruby>多く<rt>おおく</rt></ruby>の<ruby>中小企業<rt>ちゅうしょうきぎょう</rt></ruby>が<ruby>倒産<rt>とうさん</rt></ruby>する（　　）。",
      "hintTranslation": "Kinh tế xấu tiếp diễn （......） nhiều doanh nghiệp phá sản."
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
      "explanation": "Đáp án đúng là C. Thay mẹ nấu ăn.",
      "rubyQuestion": "<ruby>忙しい<rt>いそがしい</rt></ruby><ruby>母<rt>はは</rt></ruby>の（　　）、<ruby>兄<rt>あに</rt></ruby>が<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>めし</rt></ruby>を<ruby>作っ<rt>つくっ</rt></ruby>てくれた。",
      "hintTranslation": "（......） mẹ bận, anh trai đã nấu cơm tối."
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
      "explanation": "Đáp án đúng là C. Hướng vào đối tượng câu hỏi.",
      "rubyQuestion": "<ruby>先生<rt>せんせい</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>（　　）、<ruby>彼は<rt>かれは</rt></ruby><ruby>自信<rt>じしん</rt></ruby>を<ruby>持っ<rt>もっ</rt></ruby>て<ruby>答え<rt>こたえ</rt></ruby>た。",
      "hintTranslation": "（......） câu hỏi của thầy, anh ấy tự tin trả lời."
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
      "explanation": "Đáp án đúng là A. Nguyên nhân dẫn tới thua trận.",
      "rubyQuestion": "<ruby>油断<rt>ゆだん</rt></ruby>した（　　）、<ruby>試合<rt>しあい</rt></ruby>の<ruby>終了間際<rt>しゅうりょうまぎわ</rt></ruby>に<ruby>逆転<rt>ぎゃくてん</rt></ruby>ゴールを<ruby>決め<rt>きめ</rt></ruby>られた。",
      "hintTranslation": "（......） chủ quan nên sát giờ hết trận bị đối thủ ghi bàn lội ngược dòng."
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
      "explanation": "Đáp án đúng là A. Đối lập 2 thực trạng.",
      "rubyQuestion": "<ruby>都市部<rt>としぶ</rt></ruby>の<ruby>人口<rt>じんこう</rt></ruby>が<ruby>増加<rt>ぞうか</rt></ruby>しているの（　　）、<ruby>地方<rt>ちほう</rt></ruby>では<ruby>過疎<rt>かそ</rt></ruby><ruby>化<rt>か</rt></ruby>が<ruby>進ん<rt>すすん</rt></ruby>でいる。",
      "hintTranslation": "（......） Trái ngược dân số thành thị tăng, vùng quê bị giảm dân."
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
      "explanation": "Đáp án đúng là D. Bổ nghĩa danh từ: 「NによるN」.",
      "rubyQuestion": "<ruby>不注意<rt>ふちゅうい</rt></ruby>（　　）<ruby>事故<rt>じこ</rt></ruby>を<ruby>防ぐ<rt>ふせぐ</rt></ruby>ために、<ruby>確認<rt>かくにん</rt></ruby>を<ruby>徹底<rt>てってい</rt></ruby>しましょう。",
      "hintTranslation": "（......） Để ngừa tai nạn do bất cẩn, hãy kiểm tra kỹ."
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
      "explanation": "Đáp án đúng là D. 「止まるごとに」: cứ mỗi lần dừng lại.",
      "rubyQuestion": "この<ruby>電車<rt>でんしゃ</rt></ruby>は<ruby>駅<rt>えき</rt></ruby>に<ruby>止ま<rt>とま</rt></ruby>る（　　）<ruby>多く<rt>おおく</rt></ruby>の<ruby>乗客<rt>じょうきゃく</rt></ruby>が<ruby>乗り降り<rt>のりおり</rt></ruby>する。",
      "hintTranslation": "Chuyến tàu này （......） dừng ở ga lại có đông hành khách lên xuống."
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
      "explanation": "Đáp án đúng là B. Chưa chắc ổn định.",
      "rubyQuestion": "<ruby>大手<rt>おおて</rt></ruby><ruby>企業<rt>きぎょう</rt></ruby>だからといって、<ruby>将来<rt>しょうらい</rt></ruby>ずっと<ruby>安定<rt>あんてい</rt></ruby>している（　　）。",
      "hintTranslation": "（......） Doanh nghiệp lớn chưa hẳn tương lai đã mãi ổn định."
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
      "explanation": "Đáp án đúng là B. 「おかげで」dùng mỉa mai trách khéo.",
      "rubyQuestion": "（<ruby>皮肉<rt>ひにく</rt></ruby>）「<ruby>君<rt>くん</rt></ruby>が<ruby>重要な<rt>じゅうような</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>を<ruby>忘れ<rt>わすれ</rt></ruby>てくれた（　　）、<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>中止<rt>ちゅうし</rt></ruby>になっちゃったよ。」",
      "hintTranslation": "(Mỉa mai) '（......） cậu quên tài liệu mà cuộc họp bị hủy luôn rồi đấy!'"
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
      "explanation": "Đáp án đúng là B. ナAだとは限らない.",
      "rubyQuestion": "お<ruby>金持ち<rt>かねもち</rt></ruby>の<ruby>人<rt>にん</rt></ruby>が、みんな<ruby>幸せ<rt>しあわせ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Người giàu không hẳn ai cũng đều hạnh phúc."
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
      "explanation": "Đáp án đúng là B. Phủ định kép.",
      "rubyQuestion": "<ruby>何年<rt>なんねん</rt></ruby>も<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>ている<ruby>先生<rt>せんせい</rt></ruby>が、この<ruby>文法<rt>ぶんぽう</rt></ruby>を<ruby>知ら<rt>しら</rt></ruby>ない（　　）。",
      "hintTranslation": "Thầy dạy tiếng Nhật bao năm （......） không biết ngữ pháp này!"
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
      "explanation": "Đáp án đúng là A. Khuyên bảo lối sống.",
      "rubyQuestion": "<ruby>健康<rt>けんこう</rt></ruby>で<ruby>長生き<rt>ながいき</rt></ruby>したければ、<ruby>規則正し<rt>きそくただし</rt></ruby>い<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>送る<rt>おくる</rt></ruby>（　　）。",
      "hintTranslation": "Muốn sống lâu khỏe mạnh thì （......） sinh hoạt điều độ."
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
      "explanation": "Đáp án đúng là A. Bổ nghĩa danh từ: 「〜に対するN」.",
      "rubyQuestion": "<ruby>環境問題<rt>かんきょうもんだい</rt></ruby>（　　）<ruby>関心<rt>かんしん</rt></ruby>が<ruby>世界中<rt>せかいじゅう</rt></ruby>で<ruby>高ま<rt>たかま</rt></ruby>っている。",
      "hintTranslation": "Sự quan tâm （......） môi trường đang tăng lên."
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
      "explanation": "Đáp án đúng là D. Hậu quả xấu do kinh tế.",
      "rubyQuestion": "<ruby>不景気<rt>ふけいき</rt></ruby>の（　　）<ruby>新卒<rt>しんそつ</rt></ruby>の<ruby>就職活動<rt>しゅうしょくかつどう</rt></ruby>が<ruby>非常に<rt>ひじょうに</rt></ruby><ruby>厳しく<rt>いかめしく</rt></ruby>なっている。",
      "hintTranslation": "（......） suy thoái kinh tế nên việc tìm việc làm rất gian nan."
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
      "explanation": "Đáp án đúng là C. Đối lập thời tiết 2 ngày.",
      "rubyQuestion": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>猛暑<rt>もうしょ</rt></ruby>（　　）、<ruby>今日は<rt>こんにちは</rt></ruby><ruby>急に<rt>きゅうに</rt></ruby><ruby>気温<rt>きおん</rt></ruby>が<ruby>下が<rt>さが</rt></ruby>って<ruby>肌寒い<rt>はださむい</rt></ruby>。",
      "hintTranslation": "（......） cái nóng gay gắt hôm qua, hôm nay lạnh se se."
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
      "explanation": "Đáp án đúng là D. 「Nのせいで」.",
      "rubyQuestion": "<ruby>寝不足<rt>ねぶそく</rt></ruby>の（　　）<ruby>頭<rt>あたま</rt></ruby>がボーッとして、<ruby>仕事<rt>しごと</rt></ruby>に<ruby>集中<rt>しゅうちゅう</rt></ruby>できない。",
      "hintTranslation": "（......） thiếu ngủ nên đầu óc lơ mơ không tập trung làm việc được."
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
      "explanation": "Đáp án đúng là B. Nhờ sự giúp đỡ của đồng nghiệp.",
      "rubyQuestion": "<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>手伝っ<rt>てつだっ</rt></ruby>てくれた（　　）、<ruby>定時<rt>ていじ</rt></ruby>に<ruby>仕事<rt>しごと</rt></ruby>を<ruby>終え<rt>おえ</rt></ruby>ることができた。",
      "hintTranslation": "（......） đồng nghiệp giúp đỡ nên tôi đã xong việc đúng giờ."
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
      "explanation": "Đáp án đúng là C. Đi kèm 必ずしも.",
      "rubyQuestion": "「〜とは<ruby>限ら<rt>かぎら</rt></ruby>ない」と<ruby>一緒に<rt>いっしょに</rt></ruby>よく<ruby>使わ<rt>つかわ</rt></ruby>れる<ruby>副詞<rt>ふくし</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Phó từ hay đi kèm là 必ずしも."
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
      "explanation": "Đáp án đúng là C. Nguy cơ cháy nổ.",
      "rubyQuestion": "<ruby>火<rt>ひ</rt></ruby>の<ruby>不始末<rt>ふしまつ</rt></ruby>から<ruby>大規模<rt>だいきぼ</rt></ruby>な<ruby>火災<rt>かさい</rt></ruby>に<ruby>発展<rt>はってん</rt></ruby>する（　　）。",
      "hintTranslation": "Sơ suất tàn lửa （......） phát triển thành hỏa hoạn lớn."
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
      "explanation": "Đáp án đúng là D. Dù là sự thật.",
      "rubyQuestion": "<ruby>仮に<rt>かりに</rt></ruby>その<ruby>話<rt>はなし</rt></ruby>が<ruby>本当<rt>ほんとう</rt></ruby>だ（　　）、<ruby>彼<rt>かれ</rt></ruby>を<ruby>許す<rt>ゆるす</rt></ruby>ことはできない。",
      "hintTranslation": "（......） chuyện đó là thật tôi cũng không tha thứ cho anh ấy."
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
      "explanation": "Đáp án đúng là D. Nguy cơ sóng thần.",
      "rubyQuestion": "<ruby>地震<rt>じしん</rt></ruby>の<ruby>後<rt>のち</rt></ruby>は、<ruby>津波<rt>つなみ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>する（　　）ので<ruby>避難<rt>ひなん</rt></ruby>してください。",
      "hintTranslation": "Sau động đất （......） sóng thần nên hãy sơ tán."
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
      "explanation": "Đáp án đúng là C. Ngay cả tiền lẻ.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby>お<ruby>金<rt>きん</rt></ruby>がなくて、<ruby>明日<rt>あした</rt></ruby>のパンを<ruby>買う<rt>かう</rt></ruby><ruby>小銭<rt>こぜに</rt></ruby>（　　）<ruby>持っ<rt>もっ</rt></ruby>ていない。",
      "hintTranslation": "（......） Anh ấy túng quẫn đến tiền mua bánh mì ngày mai cũng không có."
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
      "explanation": "Đáp án đúng là A. Dù mất thời gian.",
      "rubyQuestion": "たとえ<ruby>時間<rt>じかん</rt></ruby>がかかっ（　　）、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>力<rt>ちから</rt></ruby>で<ruby>最後<rt>さいご</rt></ruby>までやり<ruby>遂げ<rt>とげ</rt></ruby>たい。",
      "hintTranslation": "（......） có tốn thời gian tôi muốn tự sức hoàn thành."
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
      "explanation": "Đáp án đúng là D. Khó ra sân thi đấu.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>が<ruby>長引い<rt>ながびい</rt></ruby>ていて、<ruby>今週末<rt>こんしゅうまつ</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>には<ruby>出場<rt>しゅつじょう</rt></ruby>でき（　　）。",
      "hintTranslation": "（......） Cảm cúm kéo dài nên trận đấu cuối tuần khó mà ra sân được."
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
      "explanation": "Đáp án đúng là B. 「V辞書形 + ことだ」lời khuyên tốt nhất.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>早く<rt>はやく</rt></ruby><ruby>治し<rt>なおし</rt></ruby>たければ、<ruby>暖かく<rt>あたたかく</rt></ruby>してゆっくり<ruby>休む<rt>やすむ</rt></ruby>（　　）。",
      "hintTranslation": "Muốn mau khỏi cảm cúm thì （......） giữ ấm nghỉ ngơi."
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
      "explanation": "Đáp án đúng là A. Không thể ngồi yên.",
      "rubyQuestion": "こんな<ruby>屈辱<rt>くつじょく</rt></ruby>を<ruby>味わ<rt>あじわ</rt></ruby>って、<ruby>黙っ<rt>だまっ</rt></ruby>ていられる（　　）。",
      "hintTranslation": "（......） Chịu nỗi nhục nhã này làm sao mà im lặng chịu trận được!"
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
      "explanation": "Đáp án đúng là B. Mong hiện tượng xảy ra.",
      "rubyQuestion": "<ruby>遅刻<rt>ちこく</rt></ruby>しそうだから、<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>時間<rt>じかん</rt></ruby><ruby>通り<rt>とうり</rt></ruby>に<ruby>来<rt>らい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Sắp muộn rồi nên mong tàu đến đúng giờ."
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
      "explanation": "Đáp án đúng là D. Dù lương cao.",
      "rubyQuestion": "どんなに<ruby>給料<rt>きゅうりょう</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>（　　）、<ruby>残業<rt>ざんぎょう</rt></ruby>ばかりのブラック<ruby>企業<rt>きぎょう</rt></ruby>では<ruby>働き<rt>はたらき</rt></ruby>たくない。",
      "hintTranslation": "（......） lương có cao tôi cũng không làm công ty bóc lột tăng ca."
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
      "explanation": "Đáp án đúng là D. Lược bỏ 'て' thành に加え.",
      "rubyQuestion": "「〜に<ruby>加え<rt>くわえ</rt></ruby>て」を<ruby>文章語<rt>ぶんしょうご</rt></ruby>（<ruby>書き言葉<rt>かきことば</rt></ruby>）でより<ruby>硬く<rt>かたく</rt></ruby><ruby>表現<rt>ひょうげん</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>正しい<rt>ただしい</rt></ruby><ruby>形<rt>かたち</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Dạng văn viết trang trọng là 〜に加え."
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
      "explanation": "Đáp án đúng là D. Đối mặt với chỉ trích.",
      "rubyQuestion": "<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>批判<rt>ひはん</rt></ruby>（　　）、<ruby>首相<rt>しゅしょう</rt></ruby>は<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>を<ruby>続け<rt>つづけ</rt></ruby>た。",
      "hintTranslation": "（......） Đối diện với những lời phê phán gắt gao, thủ tướng vẫn bình tĩnh giải thích."
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
      "explanation": "Đáp án đúng là A. Ngay cả việc tối thiểu.",
      "rubyQuestion": "<ruby>忙しす<rt>いそがしす</rt></ruby>ぎて、<ruby>家族<rt>かぞく</rt></ruby>と<ruby>電話<rt>でんわ</rt></ruby>で<ruby>話す<rt>はなす</rt></ruby><ruby>時間<rt>じかん</rt></ruby>（　　）<ruby>取れ<rt>とれ</rt></ruby>ない。",
      "hintTranslation": "（......） Quá bận rộn, đến thời gian gọi điện cho gia đình cũng không thu xếp được."
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
      "explanation": "Đáp án đúng là A. 「V辞書形 + ごとに」: cứ mỗi lần gặp.",
      "rubyQuestion": "あの<ruby>人<rt>にん</rt></ruby>は<ruby>会う<rt>あう</rt></ruby>（　　）<ruby>新しい<rt>あたらしい</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>着て<rt>きて</rt></ruby>いて、とてもおしゃれだ。",
      "hintTranslation": "Người đó （......） gặp lại mặc đồ mới."
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
      "explanation": "Đáp án đúng là A. So sánh đối lập 2 người.",
      "rubyQuestion": "<ruby>兄<rt>あに</rt></ruby>は<ruby>社交的<rt>しゃこうてき</rt></ruby>で<ruby>友達<rt>ともだち</rt></ruby>が<ruby>多い<rt>おおい</rt></ruby>（　　）、<ruby>弟<rt>おとうと</rt></ruby>は<ruby>物<rt>もの</rt></ruby><ruby>静か<rt>しずか</rt></ruby>で<ruby>一人<rt>ひとり</rt></ruby>を<ruby>好む<rt>このむ</rt></ruby><ruby>性格<rt>せいかく</rt></ruby>だ。",
      "hintTranslation": "（......） Anh trai hoạt bát nhiều bạn bè, trái lại em trai trầm tính thích ở một mình."
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
      "explanation": "Đáp án đúng là C. 「面白さ」.",
      "rubyQuestion": "この<ruby>小説<rt>しょうせつ</rt></ruby>の<ruby>面白<rt>おもしろ</rt></ruby>（　　）は、<ruby>読んだ<rt>よんだ</rt></ruby><ruby>人<rt>にん</rt></ruby>にしか<ruby>分か<rt>わか</rt></ruby>らない。",
      "hintTranslation": "（......） Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu."
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
      "explanation": "Đáp án đúng là C. Khẳng định an toàn.",
      "rubyQuestion": "<ruby>鍵<rt>かぎ</rt></ruby>をかけたのだから、<ruby>泥棒<rt>どろぼう</rt></ruby>が<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>入れ<rt>いれ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Đã khóa cửa cẩn thận thì trộm làm sao vào dễ thế được!"
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
      "explanation": "Đáp án đúng là A. Khó leo nổi dốc.",
      "rubyQuestion": "<ruby>古い<rt>ふるい</rt></ruby><ruby>車<rt>くるま</rt></ruby>なので、<ruby>急な<rt>きゅうな</rt></ruby><ruby>坂道<rt>さかみち</rt></ruby>を<ruby>登り<rt>のぼり</rt></ruby><ruby>切れ<rt>きれ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Xe cũ nên dốc đứng thế này trông khó mà leo hết nổi."
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
      "explanation": "Đáp án đúng là C. Vừa mới ra khỏi nhà.",
      "rubyQuestion": "<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>しゅつ</rt></ruby>（　　）のところで<ruby>雨<rt>あめ</rt></ruby>が<ruby>降り<rt>おり</rt></ruby><ruby>出し<rt>だし</rt></ruby>、<ruby>傘<rt>かさ</rt></ruby>を<ruby>取り<rt>とり</rt></ruby>に<ruby>戻っ<rt>もどっ</rt></ruby>た。",
      "hintTranslation": "（......） bước ra khỏi nhà thì trời mưa, phải quay lại lấy ô."
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
      "explanation": "Đáp án đúng là C. 「飽きっぽい」tính chóng chán.",
      "rubyQuestion": "<ruby>私<rt>わたし</rt></ruby>は<ruby>飽き<rt>あき</rt></ruby>（　　）<ruby>性格<rt>せいかく</rt></ruby>なので、<ruby>何を<rt>なにを</rt></ruby>やっても<ruby>長続き<rt>ながつづき</rt></ruby>しない。",
      "hintTranslation": "（......） Tôi tính chóng chán nên làm gì cũng không bền."
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
      "explanation": "Đáp án đúng là A. Hai mặt cùng diễn ra song song.",
      "rubyQuestion": "<ruby>医療技術<rt>いりょうぎじゅつ</rt></ruby>が<ruby>進歩<rt>しんぽ</rt></ruby>する（　　）、<ruby>倫理的<rt>りんりてき</rt></ruby>な<ruby>課題<rt>かだい</rt></ruby>も<ruby>多く<rt>おおく</rt></ruby><ruby>議論<rt>ぎろん</rt></ruby>されるようになった。",
      "hintTranslation": "（......） Kỹ thuật y tế tiến bộ, bên cạnh đó các vấn đề đạo đức cũng được bàn luận nhiều."
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
      "explanation": "Đáp án đúng là A. 「AことはAが」nhượng bộ: công nhận nhưng có điểm trừ.",
      "rubyQuestion": "このアパートは<ruby>駅<rt>えき</rt></ruby>から<ruby>近い<rt>ちかい</rt></ruby>（　　）<ruby>近い<rt>ちかい</rt></ruby>が、<ruby>家賃<rt>やちん</rt></ruby>が<ruby>高す<rt>たかす</rt></ruby>ぎる。",
      "hintTranslation": "Gần ga thì có gần （......） giá quá đắt."
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
      "explanation": "Đáp án đúng là A. Dù bị phản đối.",
      "rubyQuestion": "<ruby>親<rt>おや</rt></ruby>に<ruby>反対<rt>はんたい</rt></ruby>され（　　）、<ruby>私<rt>わたし</rt></ruby>は<ruby>海外留学<rt>かいがいりゅうがく</rt></ruby>を<ruby>決意<rt>けつい</rt></ruby>した。",
      "hintTranslation": "（......） bị cha mẹ phản đối tôi vẫn quyết tâm du học."
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
      "explanation": "Đáp án đúng là C. Chưa hẳn đúng mọi lúc.",
      "rubyQuestion": "<ruby>辞書<rt>じしょ</rt></ruby>に<ruby>載っ<rt>のっ</rt></ruby>ている<ruby>意味<rt>いみ</rt></ruby>が、すべての<ruby>文脈<rt>ぶんみゃく</rt></ruby>に<ruby>当て<rt>あて</rt></ruby>はまる（　　）。",
      "hintTranslation": "（......） Nghĩa trong từ điển chưa chắc đúng mọi ngữ cảnh."
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
      "explanation": "Đáp án đúng là D. 「寒さ」cái lạnh.",
      "rubyQuestion": "<ruby>冬<rt>ふゆ</rt></ruby>の<ruby>寒<rt>かん</rt></ruby>（　　）が<ruby>厳しく<rt>いかめしく</rt></ruby>なる<ruby>前<rt>まえ</rt></ruby>に、<ruby>暖房器<rt>だんぼうき</rt></ruby><ruby>具<rt>ぐ</rt></ruby>を<ruby>用意し<rt>よういし</rt></ruby>た。",
      "hintTranslation": "（......） Trước khi cái lạnh mùa đông buốt giá, tôi chuẩn bị lò sưởi."
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
      "explanation": "Đáp án đúng là C. Tương ứng theo mùa.",
      "rubyQuestion": "<ruby>季節<rt>きせつ</rt></ruby>（　　）<ruby>咲く<rt>さく</rt></ruby><ruby>花<rt>はな</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>が<ruby>変わ<rt>かわ</rt></ruby>るので、<ruby>四季<rt>しき</rt></ruby>を<ruby>楽し<rt>たのし</rt></ruby>める。",
      "hintTranslation": "（......） Tùy theo mùa loài hoa nở thay đổi nên ngắm được 4 mùa."
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
      "explanation": "Đáp án đúng là D. Nhấn mạnh mức độ không biết.",
      "rubyQuestion": "<ruby>名前<rt>なまえ</rt></ruby>（　　）<ruby>覚え<rt>おぼえ</rt></ruby>ていない<ruby>相手<rt>あいて</rt></ruby>から、<ruby>突然<rt>とつぜん</rt></ruby><ruby>高価<rt>こうか</rt></ruby>なプレゼントが<ruby>届い<rt>とどい</rt></ruby>た。",
      "hintTranslation": "Từ người mà （......） tên tôi cũng không nhớ, bỗng nhận được quà đắt tiền."
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
      "explanation": "Đáp án đúng là A. Thay mặt ai.",
      "rubyQuestion": "<ruby>出張中<rt>しゅっちょうちゅう</rt></ruby>の<ruby>部長<rt>ぶちょう</rt></ruby>の（　　）、<ruby>私<rt>わたし</rt></ruby>が<ruby>代理<rt>だいり</rt></ruby>で<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>出席<rt>しゅっせき</rt></ruby>します。",
      "hintTranslation": "Thay mặt trưởng phòng đi công tác, tôi sẽ họp （......）."
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
      "explanation": "Đáp án đúng là A. Phương tiện thông qua.",
      "rubyQuestion": "その<ruby>法案<rt>ほうあん</rt></ruby>は<ruby>国会<rt>こっかい</rt></ruby>の<ruby>多数決<rt>たすうけつ</rt></ruby>（　　）<ruby>可決<rt>かけつ</rt></ruby>されました。",
      "hintTranslation": "（......） Dự luật đó đã được thông qua bằng biểu quyết đa số ở quốc hội."
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
      "explanation": "Đáp án đúng là C. 「油っぽい」nhiều dầu mỡ.",
      "rubyQuestion": "この<ruby>中華料理<rt>ちゅうかりょうり</rt></ruby>は<ruby>油<rt>あぶら</rt></ruby>（　　）て、<ruby>胃<rt>い</rt></ruby>にもたれる。",
      "hintTranslation": "Món Trung này ngấy （......） quá."
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
      "explanation": "Đáp án đúng là B. 「N + によって」= tùy vào.",
      "rubyQuestion": "<ruby>文化<rt>ぶんか</rt></ruby>や<ruby>習慣<rt>しゅうかん</rt></ruby>は、<ruby>国<rt>くに</rt></ruby>（　　）<ruby>大きく<rt>おおきく</rt></ruby><ruby>異な<rt>ことな</rt></ruby>ります。",
      "hintTranslation": "（......） Văn hóa khác nhau tùy theo mỗi quốc gia."
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
      "explanation": "Đáp án đúng là C. Nの + わけがない.",
      "rubyQuestion": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>昨日<rt>きのう</rt></ruby><ruby>東京<rt>とうきょう</rt></ruby>にいた<ruby>証拠<rt>しょうこ</rt></ruby>があるのだから、<ruby>犯人<rt>はんにん</rt></ruby>の（　　）。",
      "hintTranslation": "Có chứng cứ hôm qua anh ấy ở Tokyo thì （......） là thủ phạm được!"
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
      "explanation": "Đáp án đúng là B. Nhất định không đi.",
      "rubyQuestion": "あんな<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>、<ruby>頼ま<rt>たのま</rt></ruby>れたって<ruby>行く<rt>いく</rt></ruby>（　　）。",
      "hintTranslation": "（......） Nơi nguy hiểm thế dù có năn nỉ tôi cũng không thèm đi."
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
      "explanation": "Đáp án đúng là B. Bù lại khuyết điểm.",
      "rubyQuestion": "このアパートは<ruby>駅<rt>えき</rt></ruby>から<ruby>遠い<rt>とおい</rt></ruby>（　　）、<ruby>部屋<rt>へや</rt></ruby>が<ruby>広く<rt>ひろく</rt></ruby>て<ruby>家賃<rt>やちん</rt></ruby>も<ruby>安い<rt>やすい</rt></ruby>。",
      "hintTranslation": "（......） Tuy xa ga nhưng bù lại phòng rộng và giá rẻ."
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
      "explanation": "Đáp án đúng là A. Chưa chắc đã mưa.",
      "rubyQuestion": "<ruby>天気予報<rt>てんきよほう</rt></ruby>が<ruby>雨<rt>あめ</rt></ruby>だと<ruby>言って<rt>いって</rt></ruby>も、<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>雨<rt>あめ</rt></ruby>が<ruby>降る<rt>ふる</rt></ruby>（　　）。",
      "hintTranslation": "（......） Dự báo mưa chưa chắc trời đã mưa."
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
      "explanation": "Đáp án đúng là A. 「子供さえ」.",
      "rubyQuestion": "<ruby>子供<rt>こども</rt></ruby>（　　）<ruby>知って<rt>しって</rt></ruby>いる<ruby>常識<rt>じょうしき</rt></ruby>を、なぜ<ruby>大人<rt>おとな</rt></ruby>のあなたが<ruby>知ら<rt>しら</rt></ruby>ないのですか。",
      "hintTranslation": "（......） Thường thức đến trẻ con cũng biết sao người lớn lại không biết."
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
      "explanation": "Đáp án đúng là B. Phủ định kép: chắc chắn thắng.",
      "rubyQuestion": "<ruby>毎日<rt>まいにち</rt></ruby>５<ruby>時間<rt>じかん</rt></ruby>も<ruby>練習<rt>れんしゅう</rt></ruby>したのだから、<ruby>試合<rt>しあい</rt></ruby>に<ruby>勝て<rt>かて</rt></ruby>ない（　　）。",
      "hintTranslation": "Luyện 5 tiếng mỗi ngày thì （......） không thắng được!"
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
      "explanation": "Đáp án đúng là D. Công nhận khả năng mua.",
      "rubyQuestion": "<ruby>買え<rt>かえ</rt></ruby>る（　　）<ruby>買え<rt>かえ</rt></ruby>るが、<ruby>今月<rt>こんげつ</rt></ruby>の<ruby>予算<rt>よさん</rt></ruby>をオーバーしてしまう。",
      "hintTranslation": "（......） Mua thì mua được nhưng vượt quá ngân sách tháng này."
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
      "explanation": "Đáp án đúng là B. Nguy cơ dịch bệnh.",
      "rubyQuestion": "インフルエンザが<ruby>急速<rt>きゅうそく</rt></ruby>に<ruby>感染<rt>かんせん</rt></ruby><ruby>拡大<rt>かくだい</rt></ruby>する（　　）がある。",
      "hintTranslation": "（......） dịch cúm lan rộng nhanh chóng."
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
      "explanation": "Đáp án đúng là B. Ai mà thèm tin.",
      "rubyQuestion": "あんな<ruby>嘘つき<rt>うそつき</rt></ruby>の<ruby>言う<rt>いう</rt></ruby>ことなんて、<ruby>誰が<rt>だれが</rt></ruby><ruby>信じ<rt>しんじ</rt></ruby>る（　　）！",
      "hintTranslation": "（......） Lời tên nói dối đó thì ai mà tin cho được!"
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
      "explanation": "Đáp án đúng là C. Khuyên cách xử lý.",
      "rubyQuestion": "パソコンの<ruby>調子<rt>ちょうし</rt></ruby>が<ruby>悪い<rt>わるい</rt></ruby>ときは、まず<ruby>再起動<rt>さいきどう</rt></ruby>してみる（　　）よ。",
      "hintTranslation": "Khi máy tính trục trặc, tốt nhất （......） thử khởi động lại xem sao."
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
      "explanation": "Đáp án đúng là D. 「治ってほしい」.",
      "rubyQuestion": "<ruby>早く<rt>はやく</rt></ruby><ruby>風邪<rt>かぜ</rt></ruby>が<ruby>治っ<rt>なおっ</rt></ruby>（　　）から、<ruby>栄養<rt>えいよう</rt></ruby>のあるスープを<ruby>作っ<rt>つくっ</rt></ruby>た。",
      "hintTranslation": "（......） Muốn bạn mau khỏi ốm nên tôi nấu canh bổ dưỡng."
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
      "explanation": "Đáp án đúng là A. Vừa tốt nghiệp.",
      "rubyQuestion": "<ruby>大学<rt>だいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>し（　　）の<ruby>若手<rt>わかて</rt></ruby><ruby>社員<rt>しゃいん</rt></ruby>たちが<ruby>研修<rt>けんしゅう</rt></ruby>を<ruby>受け<rt>うけ</rt></ruby>ている。",
      "hintTranslation": "（......） Các nhân viên trẻ vừa tốt nghiệp đại học đang được đào tạo."
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
      "explanation": "Đáp án đúng là B. Vừa mới ăn lúc nãy.",
      "rubyQuestion": "「さっきお<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>めし</rt></ruby>を<ruby>食べ<rt>たべ</rt></ruby>（　　）なのに、もうお<ruby>腹<rt>はら</rt></ruby>が<ruby>空い<rt>あい</rt></ruby>たの？」",
      "hintTranslation": "（......） ăn cơm trưa xong giờ lại đói rồi à?"
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
      "explanation": "Đáp án đúng là B. Lời khuyên tâm huyết.",
      "rubyQuestion": "<ruby>後悔<rt>こうかい</rt></ruby>したくないなら、<ruby>今<rt>いま</rt></ruby>できる<ruby>全力<rt>ぜんりょく</rt></ruby>を<ruby>尽くす<rt>つくす</rt></ruby>（　　）。",
      "hintTranslation": "（......） Nếu không muốn hối hận thì hãy dốc toàn lực làm ngay lúc này."
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
      "explanation": "Đáp án đúng là A. Phủ định mỉa mai.",
      "rubyQuestion": "「あの<ruby>映画<rt>えいが</rt></ruby>、<ruby>面白か<rt>おもしろか</rt></ruby>った？」「<ruby>面白か<rt>おもしろか</rt></ruby>った（　　）。<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>寝ち<rt>ねち</rt></ruby>ゃったよ。」",
      "hintTranslation": "（......） Hay nỗi gì! Tôi ngủ gật giữa chừng luôn đấy."
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
      "explanation": "Đáp án đúng là B. Kết quả tốt đẹp nhờ người thân.",
      "rubyQuestion": "<ruby>家族<rt>かぞく</rt></ruby>が<ruby>支え<rt>ささえ</rt></ruby>てくれた（　　）、<ruby>長い<rt>ながい</rt></ruby><ruby>留学生<rt>りゅうがくせい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>乗り越え<rt>のりこえ</rt></ruby>られた。",
      "hintTranslation": "（......） gia đình ủng hộ nên tôi đã vượt qua thời gian du học bình an."
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
      "explanation": "Đáp án đúng là A. 「Vてほしい」nhờ vả, mong người khác làm.",
      "rubyQuestion": "すみませんが、この<ruby>荷物<rt>にもつ</rt></ruby>を２<ruby>階<rt>かい</rt></ruby>まで<ruby>運ん<rt>はこん</rt></ruby>（　　）のですが。",
      "hintTranslation": "（......） Bạn có thể mang giúp kiện hàng này lên tầng 2 được không?"
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
      "explanation": "Đáp án đúng là A. Nguyên nhân gây thiệt hại.",
      "rubyQuestion": "<ruby>景気<rt>けいき</rt></ruby>が<ruby>悪い<rt>わるい</rt></ruby>（　　）ボーナスが<ruby>大幅<rt>おおはば</rt></ruby>にカットされた。",
      "hintTranslation": "（......） kinh tế kém nên tiền thưởng bị cắt."
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
      "explanation": "Đáp án đúng là B. 「V辞書形 + ごとに」: cứ mỗi lần...",
      "rubyQuestion": "<ruby>失敗<rt>しっぱい</rt></ruby>する（　　）<ruby>改善点<rt>かいぜんてん</rt></ruby>を<ruby>見つ<rt>みつ</rt></ruby>けていけば、<ruby>必ず<rt>かならず</rt></ruby><ruby>成長<rt>せいちょう</rt></ruby>できる。",
      "hintTranslation": "（......） thất bại nếu tìm ra điểm khắc phục thì sẽ trưởng thành."
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
      "explanation": "Đáp án đúng là B. 「大人っぽい」chững chạc.",
      "rubyQuestion": "あの<ruby>子<rt>こ</rt></ruby>はまだ<ruby>中学生<rt>ちゅうがくせい</rt></ruby>なのに、とても<ruby>大人<rt>おとな</rt></ruby>（　　）。",
      "hintTranslation": "Đứa bé mới cấp 2 mà trông （......）."
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
      "explanation": "Đáp án đúng là C. 「やみそうもない」.",
      "rubyQuestion": "<ruby>空<rt>そら</rt></ruby>は<ruby>真っ黒<rt>まっくろ</rt></ruby>な<ruby>雲<rt>くも</rt></ruby>に<ruby>覆わ<rt>おおわ</rt></ruby>れ、<ruby>雨<rt>あめ</rt></ruby>はしばらくやみ（　　）。",
      "hintTranslation": "（......） Trời mây đen kịt, mưa trông có vẻ khó mà tạnh sớm."
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
      "explanation": "Đáp án đúng là B. Phương tiện / cách thức.",
      "rubyQuestion": "インターネット（　　）、<ruby>世界中<rt>せかいじゅう</rt></ruby>のニュースが<ruby>瞬時<rt>しゅんじ</rt></ruby>に<ruby>伝わ<rt>つたわ</rt></ruby>る。",
      "hintTranslation": "（......） Nhờ có internet, tin tức toàn cầu truyền đi chớp mắt."
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
      "explanation": "Đáp án đúng là B. 「忘れっぽい」tính hay quên.",
      "rubyQuestion": "<ruby>祖父<rt>そふ</rt></ruby>は<ruby>最近<rt>さいきん</rt></ruby><ruby>歳<rt>とし</rt></ruby>をとったせいか、とても<ruby>忘れ<rt>わすれ</rt></ruby>（　　）なった。",
      "hintTranslation": "Ông tôi dạo này có tuổi nên trở nên rất （......）."
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
      "explanation": "Đáp án đúng là A. 「N + に加えて」thêm vào đó.",
      "rubyQuestion": "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>英語<rt>えいご</rt></ruby>（　　）、<ruby>中国語<rt>ちゅうごくご</rt></ruby>とフランス<ruby>語<rt>ご</rt></ruby>も<ruby>流暢<rt>りゅうちょう</rt></ruby>に<ruby>話せ<rt>はなせ</rt></ruby>る。",
      "hintTranslation": "Anh Tanaka không chỉ tiếng Anh （......） còn nói tiếng Trung, Pháp."
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
      "explanation": "Đáp án đúng là D. 「〜とは限らない」chưa chắc là.",
      "rubyQuestion": "<ruby>値段<rt>ねだん</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>ものが、<ruby>必ずしも<rt>かならずしも</rt></ruby><ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>良い<rt>よい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Đồ đắt tiền chưa chắc chất lượng đã tốt."
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
      "explanation": "Đáp án đúng là B. Khuyên nên làm gì.",
      "rubyQuestion": "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になりたかったら、<ruby>恥ずかし<rt>はずかし</rt></ruby>がらずに<ruby>話す<rt>はなす</rt></ruby>（　　）。",
      "hintTranslation": "Muốn giỏi tiếng Nhật thì nên mạnh dạn nói （......） ngại."
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
      "explanation": "Đáp án đúng là A. 「正確さ」tính từ đuôi na.",
      "rubyQuestion": "<ruby>彼の<rt>かの</rt></ruby><ruby>仕事<rt>しごと</rt></ruby>の<ruby>正確<rt>せいかく</rt></ruby>（　　）には、<ruby>誰も<rt>だれも</rt></ruby>が<ruby>一目<rt>いちもく</rt></ruby><ruby>置い<rt>おい</rt></ruby>ている。",
      "hintTranslation": "（......） Độ chính xác trong công việc của anh ấy ai cũng nể phục."
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
      "explanation": "Đáp án đúng là C. Nguy cơ rò rỉ dữ liệu.",
      "rubyQuestion": "<ruby>個人情報<rt>こじんじょうほう</rt></ruby>が<ruby>外部<rt>がいぶ</rt></ruby>に<ruby>流出<rt>りゅうしゅつ</rt></ruby>する（　　）が<ruby>指摘<rt>してき</rt></ruby>されている。",
      "hintTranslation": "Đang bị cảnh báo （......） rò rỉ thông tin cá nhân ra ngoài."
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
      "explanation": "Đáp án đúng là D. Cho dù bị ai nói gì.",
      "rubyQuestion": "<ruby>誰<rt>だれ</rt></ruby>に<ruby>何を<rt>なにを</rt></ruby><ruby>言わ<rt>いわ</rt></ruby>れ（　　）、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>諦め<rt>あきらめ</rt></ruby>るつもりはありません。",
      "hintTranslation": "（......） bị ai nói gì tôi cũng không từ bỏ ước mơ."
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
      "explanation": "Đáp án đúng là C. Thêm điểm cộng.",
      "rubyQuestion": "<ruby>観光地<rt>かんこうち</rt></ruby>としての<ruby>魅力<rt>みりょく</rt></ruby>（　　）、<ruby>交通<rt>こうつう</rt></ruby>の<ruby>便<rt>びん</rt></ruby>の<ruby>良さ<rt>よさ</rt></ruby>も<ruby>人気<rt>にんき</rt></ruby>の<ruby>理由<rt>りゆう</rt></ruby>だ。",
      "hintTranslation": "Sức hút du lịch （......） giao thông thuận tiện tạo nên sự nổi tiếng."
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
      "explanation": "Đáp án đúng là C. Đối lập giữa 2 đối tượng.",
      "rubyQuestion": "<ruby>円安<rt>えんやす</rt></ruby>で<ruby>輸出<rt>ゆしゅつ</rt></ruby><ruby>企業<rt>きぎょう</rt></ruby>が<ruby>利益<rt>りえき</rt></ruby>を<ruby>上げ<rt>あげ</rt></ruby>る（　　）、<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>企業<rt>きぎょう</rt></ruby>は<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>直面<rt>ちょくめん</rt></ruby>している。",
      "hintTranslation": "（......） Đồng Yên giảm giúp doanh nghiệp xuất khẩu có lãi nhưng doanh nghiệp nhập khẩu gặp khó."
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
      "explanation": "Đáp án đúng là A. Phủ định: ないでほしい.",
      "rubyQuestion": "<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>には<ruby>近づ<rt>ちかづ</rt></ruby>か（　　）と<ruby>注意<rt>ちゅうい</rt></ruby>した。",
      "hintTranslation": "（......） Tôi dặn mong họ đừng lại gần nơi nguy hiểm."
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
      "explanation": "Đáp án đúng là C. Chắc chắn ngon.",
      "rubyQuestion": "プロの<ruby>料理人<rt>りょうりにん</rt></ruby>が<ruby>作っ<rt>つくっ</rt></ruby>たのだから、まずい（　　）。",
      "hintTranslation": "Đầu bếp chuyên nghiệp nấu thì （......） dở được!"
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
      "explanation": "Đáp án đúng là C. 「一方で」diễn tả đồng thời 2 việc song song.",
      "rubyQuestion": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>に<ruby>情熱<rt>じょうねつ</rt></ruby>を<ruby>注ぐ<rt>そそぐ</rt></ruby>（　　）、<ruby>休日<rt>きゅうじつ</rt></ruby>は<ruby>家族<rt>かぞく</rt></ruby>との<ruby>時間<rt>じかん</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしている。",
      "hintTranslation": "Cô ấy hết mình vì công việc, （......） trân trọng gia đình."
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
      "explanation": "Đáp án đúng là D. Khó thành hiện thực.",
      "rubyQuestion": "<ruby>予算<rt>よさん</rt></ruby>が<ruby>足り<rt>たり</rt></ruby>ないため、この<ruby>計画<rt>けいかく</rt></ruby>は<ruby>実現<rt>じつげん</rt></ruby>でき（　　）。",
      "hintTranslation": "（......） Ngân sách thiếu hụt nên kế hoạch khó mà thực hiện được."
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
      "explanation": "Đáp án đúng là D. Mưa to kèm gió lớn.",
      "rubyQuestion": "<ruby>激しい<rt>はげしい</rt></ruby><ruby>雨<rt>あめ</rt></ruby>（　　）<ruby>強い<rt>つよい</rt></ruby><ruby>風<rt>かぜ</rt></ruby>も<ruby>吹き<rt>ふき</rt></ruby><ruby>荒れ<rt>あれ</rt></ruby>、<ruby>外出<rt>がいしゅつ</rt></ruby>が<ruby>極め<rt>きわめ</rt></ruby>て<ruby>危険<rt>きけん</rt></ruby>な<ruby>状態<rt>じょうたい</rt></ruby>だ。",
      "hintTranslation": "Mưa to （......） gió giật mạnh, ra ngoài rất nguy hiểm."
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
      "explanation": "Đáp án đúng là A. Vừa mới vào làm.",
      "rubyQuestion": "<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>入社<rt>にゅうしゃ</rt></ruby>し（　　）なので、まだ<ruby>仕事<rt>しごと</rt></ruby>の<ruby>流れ<rt>ながれ</rt></ruby>に<ruby>慣れ<rt>なれ</rt></ruby>ていません。",
      "hintTranslation": "Tôi （......） vào công ty nên chưa quen quy trình việc."
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
      "explanation": "Đáp án đúng là C. Nguyên nhân tích cực.",
      "rubyQuestion": "<ruby>天気<rt>てんき</rt></ruby>が<ruby>良か<rt>よか</rt></ruby>った（　　）、<ruby>富士山<rt>ふじさん</rt></ruby>の<ruby>頂上<rt>ちょうじょう</rt></ruby>まできれいに<ruby>見え<rt>みえ</rt></ruby>ました。",
      "hintTranslation": "（......） thời tiết đẹp nên ngắm rõ đỉnh núi Phú Sĩ."
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
      "explanation": "Đáp án đúng là C. Ước nguyện thời tiết.",
      "rubyQuestion": "<ruby>明日<rt>あした</rt></ruby>から<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行く<rt>いく</rt></ruby>ので、<ruby>天気<rt>てんき</rt></ruby>が<ruby>晴れ<rt>はれ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Mai đi du lịch nên mong sao trời sẽ nắng ráo."
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
      "explanation": "Đáp án đúng là C. Lặp lại động từ.",
      "rubyQuestion": "<ruby>車<rt>くるま</rt></ruby>を<ruby>運転<rt>うんてん</rt></ruby>できる（　　）できますが、<ruby>高速道路<rt>こうそくどうろ</rt></ruby>は<ruby>怖く<rt>こわく</rt></ruby>て<ruby>走れ<rt>はしれ</rt></ruby>ません。",
      "hintTranslation": "Lái xe thì lái được （......） đường cao tốc thì không dám đi."
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
      "explanation": "Đáp án đúng là C. Chưa chắc đã thành thạo.",
      "rubyQuestion": "<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>長く<rt>ながく</rt></ruby><ruby>住ん<rt>すん</rt></ruby>でいるからといって、<ruby>敬語<rt>けいご</rt></ruby>が<ruby>完璧<rt>かんぺき</rt></ruby>に<ruby>使え<rt>つかえ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Sống ở Nhật lâu chưa chắc đã dùng kính ngữ chuẩn."
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
      "explanation": "Đáp án đúng là A. 「日ごとに」: từng ngày một, ngày qua ngày.",
      "rubyQuestion": "<ruby>桜<rt>さくら</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>になると、<ruby>日<rt>にち</rt></ruby>（　　）<ruby>暖かく<rt>あたたかく</rt></ruby>なっていくのを<ruby>感じ<rt>かんじ</rt></ruby>る。",
      "hintTranslation": "Mỗi khi mùa hoa anh đào đến, lại cảm nhận trời ấm dần lên （......） ngày."
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
      "explanation": "Đáp án đúng là A. Đối lập giữa 2 xu hướng trái chiều.",
      "rubyQuestion": "<ruby>電子<rt>でんし</rt></ruby><ruby>書籍<rt>しょせき</rt></ruby>の<ruby>利用者<rt>りようしゃ</rt></ruby>が<ruby>増え<rt>ふえ</rt></ruby>ている（　　）、<ruby>紙<rt>かみ</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>の<ruby>売り上げ<rt>うりあげ</rt></ruby>は<ruby>減少<rt>げんしょう</rt></ruby>している。",
      "hintTranslation": "（......） Người dùng sách điện tử tăng trong khi sách giấy giảm."
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
      "explanation": "Đáp án đúng là A. 「〜恐れがある」nguy cơ xấu.",
      "rubyQuestion": "<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近し<rt>せっきんし</rt></ruby>ているため、<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>河川<rt>かせん</rt></ruby>の<ruby>氾濫<rt>はんらん</rt></ruby>の（　　）。",
      "hintTranslation": "Bão đến gần （......） nước sông tràn bờ."
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
      "explanation": "Đáp án đúng là B. Dù thành công.",
      "rubyQuestion": "あの<ruby>計画<rt>けいかく</rt></ruby>が<ruby>成功<rt>せいこう</rt></ruby>した（　　）、<ruby>莫大<rt>ばくだい</rt></ruby>な<ruby>費用<rt>ひよう</rt></ruby>がかかるので<ruby>現実的<rt>げんじつてき</rt></ruby>ではない。",
      "hintTranslation": "Kế hoạch （......） có thành công thì quá tốn kém nên không khả thi."
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
      "explanation": "Đáp án đúng là C. Thay đổi hình thức trả tiền.",
      "rubyQuestion": "<ruby>現金<rt>げんきん</rt></ruby>で<ruby>支払う<rt>しはらう</rt></ruby>（　　）、<ruby>電子<rt>でんし</rt></ruby>マネーで<ruby>決済<rt>けっさい</rt></ruby>するとポイントが<ruby>付く<rt>つく</rt></ruby>。",
      "hintTranslation": "（......） trả tiền mặt, thanh toán ví điện tử sẽ được điểm."
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
      "explanation": "Đáp án đúng là A. Bổ sung ưu điểm.",
      "rubyQuestion": "<ruby>今回<rt>こんかい</rt></ruby>の<ruby>新型<rt>しんがた</rt></ruby>スマホは、<ruby>性能<rt>せいのう</rt></ruby>の<ruby>向上<rt>こうじょう</rt></ruby>（　　）デザインの<ruby>美しさ<rt>うつくしさ</rt></ruby>も<ruby>評価<rt>ひょうか</rt></ruby>されている。",
      "hintTranslation": "Điện thoại mới bên cạnh hiệu năng （......） thiết kế cũng đẹp."
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
      "explanation": "Đáp án đúng là B. Khó được tha.",
      "rubyQuestion": "<ruby>彼の<rt>かの</rt></ruby><ruby>怒り<rt>いかり</rt></ruby>は<ruby>相当<rt>そうとう</rt></ruby><ruby>激しく<rt>はげしく</rt></ruby>、<ruby>簡単<rt>かんたん</rt></ruby>には<ruby>許し<rt>ゆるし</rt></ruby>てくれ（　　）。",
      "hintTranslation": "（......） Cơn giận của anh ấy gay gắt, có vẻ không dễ tha thứ."
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
      "explanation": "Đáp án đúng là A. 「一方で」diễn tả đồng thời 2 việc song song.",
      "rubyQuestion": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>に<ruby>情熱<rt>じょうねつ</rt></ruby>を<ruby>注ぐ<rt>そそぐ</rt></ruby>（　　）、<ruby>休日<rt>きゅうじつ</rt></ruby>は<ruby>家族<rt>かぞく</rt></ruby>との<ruby>時間<rt>じかん</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしている。",
      "hintTranslation": "Cô ấy hết mình vì công việc, （......） trân trọng gia đình."
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
      "explanation": "Đáp án đúng là C. Dù là sự thật.",
      "rubyQuestion": "<ruby>仮に<rt>かりに</rt></ruby>その<ruby>話<rt>はなし</rt></ruby>が<ruby>本当<rt>ほんとう</rt></ruby>だ（　　）、<ruby>彼<rt>かれ</rt></ruby>を<ruby>許す<rt>ゆるす</rt></ruby>ことはできない。",
      "hintTranslation": "（......） chuyện đó là thật tôi cũng không tha thứ cho anh ấy."
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
      "explanation": "Đáp án đúng là D. Tự tin không thể hỏng.",
      "rubyQuestion": "あんなに<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby><ruby>準備<rt>じゅんび</rt></ruby>したプレゼンが、<ruby>失敗<rt>しっぱい</rt></ruby>する（　　）。",
      "hintTranslation": "（......） Chuẩn bị bài thuyết trình công phu thế thì làm sao thất bại được!"
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
      "explanation": "Đáp án đúng là C. Mặt lợi và mặt hại đối lập.",
      "rubyQuestion": "インターネットは<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>素早く<rt>すばやく</rt></ruby><ruby>得ら<rt>えら</rt></ruby>れる（　　）、<ruby>誤<rt>ご</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>が<ruby>広が<rt>ひろが</rt></ruby>りやすいリスクもある。",
      "hintTranslation": "Internet giúp tra thông tin nhanh, （......） có nguy cơ lan truyền tin giả."
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
      "explanation": "Đáp án đúng là A. 「Vないことだ」khuyên không nên.",
      "rubyQuestion": "<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>したいなら、<ruby>毎日<rt>まいにち</rt></ruby><ruby>復習<rt>ふくしゅう</rt></ruby>を<ruby>怠ら<rt>おこたら</rt></ruby>（　　）。",
      "hintTranslation": "Muốn thi đỗ thì tốt nhất （......） lơ là ôn tập."
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
      "explanation": "Đáp án đúng là A. Chắc chắn ngon.",
      "rubyQuestion": "プロの<ruby>料理人<rt>りょうりにん</rt></ruby>が<ruby>作っ<rt>つくっ</rt></ruby>たのだから、まずい（　　）。",
      "hintTranslation": "Đầu bếp chuyên nghiệp nấu thì （......） dở được!"
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
      "explanation": "Đáp án đúng là B. 「〜恐れがある」nguy cơ xấu.",
      "rubyQuestion": "<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近し<rt>せっきんし</rt></ruby>ているため、<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>河川<rt>かせん</rt></ruby>の<ruby>氾濫<rt>はんらん</rt></ruby>の（　　）。",
      "hintTranslation": "Bão đến gần （......） nước sông tràn bờ."
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
      "explanation": "Đáp án đúng là A. Dù bị phản đối.",
      "rubyQuestion": "<ruby>親<rt>おや</rt></ruby>に<ruby>反対<rt>はんたい</rt></ruby>され（　　）、<ruby>私<rt>わたし</rt></ruby>は<ruby>海外留学<rt>かいがいりゅうがく</rt></ruby>を<ruby>決意<rt>けつい</rt></ruby>した。",
      "hintTranslation": "（......） bị cha mẹ phản đối tôi vẫn quyết tâm du học."
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
      "explanation": "Đáp án đúng là B. Phủ định: ないでほしい.",
      "rubyQuestion": "<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>には<ruby>近づ<rt>ちかづ</rt></ruby>か（　　）と<ruby>注意<rt>ちゅうい</rt></ruby>した。",
      "hintTranslation": "（......） Tôi dặn mong họ đừng lại gần nơi nguy hiểm."
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
      "explanation": "Đáp án đúng là D. Dù tận thế.",
      "rubyQuestion": "もし<ruby>明日<rt>あした</rt></ruby><ruby>世界<rt>せかい</rt></ruby>が<ruby>終わ<rt>おわ</rt></ruby>る（　　）、<ruby>私<rt>わたし</rt></ruby>はいつも<ruby>通り<rt>とうり</rt></ruby>リンゴの<ruby>木<rt>き</rt></ruby>を<ruby>植え<rt>うえ</rt></ruby>るだろう。",
      "hintTranslation": "（......） mai ngày tận thế tôi vẫn sẽ trồng cây táo như thường."
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
      "explanation": "Đáp án đúng là D. 「イAことはイAが」.",
      "rubyQuestion": "この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>美味しい<rt>おいしい</rt></ruby>（　　）<ruby>美味しい<rt>おいしい</rt></ruby>が、<ruby>作る<rt>つくる</rt></ruby>のに<ruby>時間<rt>じかん</rt></ruby>がかかる。",
      "hintTranslation": "Ngon （......） nhưng nấu mất nhiều thời gian."
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
      "explanation": "Đáp án đúng là D. Chỉ phương pháp, cách thức.",
      "rubyQuestion": "<ruby>定期的<rt>ていきてき</rt></ruby>な<ruby>運動<rt>うんどう</rt></ruby>（　　）、<ruby>健康<rt>けんこう</rt></ruby>を<ruby>維持す<rt>いじす</rt></ruby>ることができます。",
      "hintTranslation": "（......） Bằng việc vận động định kỳ có thể giữ gìn sức khỏe."
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
      "explanation": "Đáp án đúng là B. So sánh đối lập 2 người.",
      "rubyQuestion": "<ruby>兄<rt>あに</rt></ruby>は<ruby>社交的<rt>しゃこうてき</rt></ruby>で<ruby>友達<rt>ともだち</rt></ruby>が<ruby>多い<rt>おおい</rt></ruby>（　　）、<ruby>弟<rt>おとうと</rt></ruby>は<ruby>物<rt>もの</rt></ruby><ruby>静か<rt>しずか</rt></ruby>で<ruby>一人<rt>ひとり</rt></ruby>を<ruby>好む<rt>このむ</rt></ruby><ruby>性格<rt>せいかく</rt></ruby>だ。",
      "hintTranslation": "（......） Anh trai hoạt bát nhiều bạn bè, trái lại em trai trầm tính thích ở một mình."
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
      "explanation": "Đáp án đúng là A. Mưa to kèm gió lớn.",
      "rubyQuestion": "<ruby>激しい<rt>はげしい</rt></ruby><ruby>雨<rt>あめ</rt></ruby>（　　）<ruby>強い<rt>つよい</rt></ruby><ruby>風<rt>かぜ</rt></ruby>も<ruby>吹き<rt>ふき</rt></ruby><ruby>荒れ<rt>あれ</rt></ruby>、<ruby>外出<rt>がいしゅつ</rt></ruby>が<ruby>極め<rt>きわめ</rt></ruby>て<ruby>危険<rt>きけん</rt></ruby>な<ruby>状態<rt>じょうたい</rt></ruby>だ。",
      "hintTranslation": "Mưa to （......） gió giật mạnh, ra ngoài rất nguy hiểm."
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
      "explanation": "Đáp án đúng là A. 「子供っぽい」tính trẻ con.",
      "rubyQuestion": "いい<ruby>大人<rt>おとな</rt></ruby>のくせに、そんな<ruby>子供<rt>こども</rt></ruby>（　　）わがままを<ruby>言う<rt>いう</rt></ruby>な。",
      "hintTranslation": "（......） Người lớn rồi đừng có nhõng nhẽo trẻ con như thế."
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
      "explanation": "Đáp án đúng là A. Rét cộng tuyết lớn.",
      "rubyQuestion": "<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>寒さ<rt>さむさ</rt></ruby>（　　）<ruby>大雪<rt>おおゆき</rt></ruby>に<ruby>見舞<rt>みまい</rt></ruby>われ、<ruby>交通網<rt>こうつうもう</rt></ruby>が<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>麻痺<rt>まひ</rt></ruby>した。",
      "hintTranslation": "（......） Rét đậm cộng thêm tuyết rơi dày khiến giao thông tê liệt."
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
      "explanation": "Đáp án đúng là B. Không từ bỏ.",
      "rubyQuestion": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>をこんなところで<ruby>諦め<rt>あきらめ</rt></ruby>てたまる（　　）。",
      "hintTranslation": "（......） Đời nào tôi chịu bỏ cuộc ước mơ ở nơi thế này!"
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
      "explanation": "Đáp án đúng là B. 「水っぽい」loãng, nhiều nước.",
      "rubyQuestion": "このスープは<ruby>水<rt>みず</rt></ruby>（　　）て、あまり<ruby>美味しく<rt>おいしく</rt></ruby>ない。",
      "hintTranslation": "Món súp này （......） (loãng toẹt), không ngon."
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
      "explanation": "Đáp án đúng là C. Ngay cả lỗi bản thân.",
      "rubyQuestion": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>間違い<rt>まちがい</rt></ruby>（　　）<ruby>認め<rt>みとめ</rt></ruby>られない<ruby>人<rt>にん</rt></ruby>は、<ruby>成長す<rt>せいちょうす</rt></ruby>ることができない。",
      "hintTranslation": "Người mà （......） lỗi sai của mình cũng không thừa nhận thì không thể tiến bộ."
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
      "explanation": "Đáp án đúng là D. 「飽きっぽい」tính chóng chán.",
      "rubyQuestion": "<ruby>私<rt>わたし</rt></ruby>は<ruby>飽き<rt>あき</rt></ruby>（　　）<ruby>性格<rt>せいかく</rt></ruby>なので、<ruby>何を<rt>なにを</rt></ruby>やっても<ruby>長続き<rt>ながつづき</rt></ruby>しない。",
      "hintTranslation": "（......） Tôi tính chóng chán nên làm gì cũng không bền."
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
      "explanation": "Đáp án đúng là D. Nguy cơ cháy nổ.",
      "rubyQuestion": "<ruby>火<rt>ひ</rt></ruby>の<ruby>不始末<rt>ふしまつ</rt></ruby>から<ruby>大規模<rt>だいきぼ</rt></ruby>な<ruby>火災<rt>かさい</rt></ruby>に<ruby>発展<rt>はってん</rt></ruby>する（　　）。",
      "hintTranslation": "Sơ suất tàn lửa （......） phát triển thành hỏa hoạn lớn."
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
      "explanation": "Đáp án đúng là D. 「めくるごとに」: cứ mỗi lần lật trang.",
      "rubyQuestion": "ページをめくる（　　）<ruby>新しい<rt>あたらしい</rt></ruby><ruby>発見<rt>はっけん</rt></ruby>があり、とても<ruby>面白い<rt>おもしろい</rt></ruby><ruby>本<rt>ほん</rt></ruby>だ。",
      "hintTranslation": "（......） lật một trang lại có phát hiện mới, cuốn sách rất hay."
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
      "explanation": "Đáp án đúng là A. 「絶滅のおそれがある」.",
      "rubyQuestion": "この<ruby>鳥<rt>とり</rt></ruby>は<ruby>生息地<rt>せいそくち</rt></ruby>が<ruby>減少<rt>げんしょう</rt></ruby>し、<ruby>絶滅<rt>ぜつめつ</rt></ruby>の（　　）があると<ruby>言わ<rt>いわ</rt></ruby>れている。",
      "hintTranslation": "Loài chim này （......） tuyệt chủng."
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
      "explanation": "Đáp án đúng là D. Mong ước.",
      "rubyQuestion": "<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>記念日<rt>きねんび</rt></ruby>だから、<ruby>二人<rt>ふたり</rt></ruby>でゆっくり<ruby>過ご<rt>すご</rt></ruby>し（　　）。",
      "hintTranslation": "（......） Ngày kỷ niệm quan trọng nên muốn cả hai bên nhau trọn vẹn."
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
      "explanation": "Đáp án đúng là D. Vừa mới dọn xong.",
      "rubyQuestion": "<ruby>昨日<rt>きのう</rt></ruby><ruby>掃除<rt>そうじ</rt></ruby>をし（　　）なのに、<ruby>子供<rt>こども</rt></ruby>たちがもう<ruby>部屋<rt>へや</rt></ruby>を<ruby>散ら<rt>ちら</rt></ruby>かした。",
      "hintTranslation": "（......） dọn hôm qua mà tụi nhỏ lại bày bừa rồi."
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
      "explanation": "Đáp án đúng là A. Chưa chắc thắng.",
      "rubyQuestion": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>したからといって、<ruby>必ず<rt>かならず</rt></ruby><ruby>試合<rt>しあい</rt></ruby>に<ruby>勝て<rt>かて</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Tập mỗi ngày chưa chắc đã thắng trận."
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
      "explanation": "Đáp án đúng là B. Nguyên nhân tích cực.",
      "rubyQuestion": "<ruby>天気<rt>てんき</rt></ruby>が<ruby>良か<rt>よか</rt></ruby>った（　　）、<ruby>富士山<rt>ふじさん</rt></ruby>の<ruby>頂上<rt>ちょうじょう</rt></ruby>まできれいに<ruby>見え<rt>みえ</rt></ruby>ました。",
      "hintTranslation": "（......） thời tiết đẹp nên ngắm rõ đỉnh núi Phú Sĩ."
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
      "explanation": "Đáp án đúng là B. Khẳng định an toàn.",
      "rubyQuestion": "<ruby>鍵<rt>かぎ</rt></ruby>をかけたのだから、<ruby>泥棒<rt>どろぼう</rt></ruby>が<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>入れ<rt>いれ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Đã khóa cửa cẩn thận thì trộm làm sao vào dễ thế được!"
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
      "explanation": "Đáp án đúng là A. Kiến thức cộng kinh nghiệm.",
      "rubyQuestion": "<ruby>専門知識<rt>せんもんちしき</rt></ruby>（　　）<ruby>豊か<rt>ゆたか</rt></ruby>な<ruby>実務経験<rt>じつむけいけん</rt></ruby>を<ruby>持つ<rt>もつ</rt></ruby><ruby>人材<rt>じんざい</rt></ruby>が<ruby>求め<rt>もとめ</rt></ruby>られている。",
      "hintTranslation": "（......） Đang tuyển nhân sự có kiến thức chuyên môn cộng thêm kinh nghiệm phong phú."
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
      "explanation": "Đáp án đúng là C. Mong hiện tượng xảy ra.",
      "rubyQuestion": "<ruby>遅刻<rt>ちこく</rt></ruby>しそうだから、<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>時間<rt>じかん</rt></ruby><ruby>通り<rt>とうり</rt></ruby>に<ruby>来<rt>らい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Sắp muộn rồi nên mong tàu đến đúng giờ."
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
      "explanation": "Đáp án đúng là D. Khó leo nổi dốc.",
      "rubyQuestion": "<ruby>古い<rt>ふるい</rt></ruby><ruby>車<rt>くるま</rt></ruby>なので、<ruby>急な<rt>きゅうな</rt></ruby><ruby>坂道<rt>さかみち</rt></ruby>を<ruby>登り<rt>のぼり</rt></ruby><ruby>切れ<rt>きれ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Xe cũ nên dốc đứng thế này trông khó mà leo hết nổi."
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
      "explanation": "Đáp án đúng là A. 「寒さ」cái lạnh.",
      "rubyQuestion": "<ruby>冬<rt>ふゆ</rt></ruby>の<ruby>寒<rt>かん</rt></ruby>（　　）が<ruby>厳しく<rt>いかめしく</rt></ruby>なる<ruby>前<rt>まえ</rt></ruby>に、<ruby>暖房器<rt>だんぼうき</rt></ruby><ruby>具<rt>ぐ</rt></ruby>を<ruby>用意し<rt>よういし</rt></ruby>た。",
      "hintTranslation": "（......） Trước khi cái lạnh mùa đông buốt giá, tôi chuẩn bị lò sưởi."
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
      "explanation": "Đáp án đúng là C. Dù mưa cũng thi đấu.",
      "rubyQuestion": "<ruby>明日<rt>あした</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>、たとえ<ruby>雨<rt>あめ</rt></ruby>が<ruby>降っ<rt>ふっ</rt></ruby>（　　）<ruby>予定通り<rt>よていどおり</rt></ruby><ruby>決行<rt>けっこう</rt></ruby>されます。",
      "hintTranslation": "（......） trời có mưa trận đấu vẫn diễn ra đúng lịch."
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
      "explanation": "Đáp án đúng là A. 「普通形 + 一方で」nêu 2 mặt đối lập.",
      "rubyQuestion": "<ruby>都会<rt>とかい</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>は<ruby>便利<rt>べんり</rt></ruby>な（　　）、<ruby>生活費<rt>せいかつひ</rt></ruby>が<ruby>高く<rt>たかく</rt></ruby>ストレスも<ruby>多い<rt>おおい</rt></ruby>。",
      "hintTranslation": "（......） Cuộc sống thành thị tiện lợi nhưng chi phí đắt đỏ."
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
      "explanation": "Đáp án đúng là C. Chưa chắc ổn định.",
      "rubyQuestion": "<ruby>大手<rt>おおて</rt></ruby><ruby>企業<rt>きぎょう</rt></ruby>だからといって、<ruby>将来<rt>しょうらい</rt></ruby>ずっと<ruby>安定<rt>あんてい</rt></ruby>している（　　）。",
      "hintTranslation": "（......） Doanh nghiệp lớn chưa hẳn tương lai đã mãi ổn định."
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
      "explanation": "Đáp án đúng là A. 「〜ことだ」.",
      "rubyQuestion": "お<ruby>金<rt>きん</rt></ruby>を<ruby>貯め<rt>ため</rt></ruby>たいなら、<ruby>無駄遣い<rt>むだづかい</rt></ruby>をやめる（　　）だ。",
      "hintTranslation": "Muốn tiết kiệm tiền thì （......） ngừng tiêu xài hoang phí."
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
      "explanation": "Đáp án đúng là C. 「面白さ」.",
      "rubyQuestion": "この<ruby>小説<rt>しょうせつ</rt></ruby>の<ruby>面白<rt>おもしろ</rt></ruby>（　　）は、<ruby>読んだ<rt>よんだ</rt></ruby><ruby>人<rt>にん</rt></ruby>にしか<ruby>分か<rt>わか</rt></ruby>らない。",
      "hintTranslation": "（......） Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu."
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
      "explanation": "Đáp án đúng là C. Lựa chọn thay thế.",
      "rubyQuestion": "<ruby>車<rt>くるま</rt></ruby>を<ruby>買う<rt>かう</rt></ruby>（　　）、<ruby>家族<rt>かぞく</rt></ruby>で<ruby>海外旅行<rt>かいがいりょこう</rt></ruby>に<ruby>行く<rt>いく</rt></ruby>ことにした。",
      "hintTranslation": "（......） mua ô tô, nhà tôi quyết định đi du lịch nước ngoài."
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
      "explanation": "Đáp án đúng là A. 「政治に対する関心」.",
      "rubyQuestion": "<ruby>若者<rt>わかもの</rt></ruby>の<ruby>政治<rt>せいじ</rt></ruby>（　　）<ruby>関心<rt>かんしん</rt></ruby>が<ruby>薄れ<rt>うすれ</rt></ruby>ていると<ruby>言わ<rt>いわ</rt></ruby>れている。",
      "hintTranslation": "Sự quan tâm của giới trẻ （......） chính trị đang mờ nhạt dần."
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
      "explanation": "Đáp án đúng là B. Khó thống nhất.",
      "rubyQuestion": "あの<ruby>二人<rt>ふたり</rt></ruby>は<ruby>意見<rt>いけん</rt></ruby>が<ruby>対立<rt>たいりつ</rt></ruby>していて、<ruby>話し合い<rt>はなしあい</rt></ruby>はまとまり（　　）。",
      "hintTranslation": "（......） Ý kiến hai người đối lập, cuộc thảo luận khó đi tới thống nhất."
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
      "explanation": "Đáp án đúng là B. 「重い」→「重さ」độ nặng.",
      "rubyQuestion": "この<ruby>荷物<rt>にもつ</rt></ruby>の（　　）を<ruby>測っ<rt>はかっ</rt></ruby>てから、<ruby>送料<rt>そうりょう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>してください。",
      "hintTranslation": "（......） Cân độ nặng hành lý rồi tính phí ship."
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
      "explanation": "Đáp án đúng là D. Thay đổi hình thức trả tiền.",
      "rubyQuestion": "<ruby>現金<rt>げんきん</rt></ruby>で<ruby>支払う<rt>しはらう</rt></ruby>（　　）、<ruby>電子<rt>でんし</rt></ruby>マネーで<ruby>決済<rt>けっさい</rt></ruby>するとポイントが<ruby>付く<rt>つく</rt></ruby>。",
      "hintTranslation": "（......） trả tiền mặt, thanh toán ví điện tử sẽ được điểm."
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
      "explanation": "Đáp án đúng là B. 「重ねるごとに」: cứ mỗi lần thêm tuổi.",
      "rubyQuestion": "<ruby>年齢<rt>ねんれい</rt></ruby>を<ruby>重ねる<rt>かさねる</rt></ruby>（　　）、<ruby>健康<rt>けんこう</rt></ruby>のありがたみが<ruby>身に<rt>みに</rt></ruby><ruby>染み<rt>そみ</rt></ruby>てわかる。",
      "hintTranslation": "（......） khi thêm tuổi lại càng thấm thía giá trị của sức khỏe."
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
      "explanation": "Đáp án đúng là C. Bổ nghĩa danh từ: 「NによるN」.",
      "rubyQuestion": "<ruby>不注意<rt>ふちゅうい</rt></ruby>（　　）<ruby>事故<rt>じこ</rt></ruby>を<ruby>防ぐ<rt>ふせぐ</rt></ruby>ために、<ruby>確認<rt>かくにん</rt></ruby>を<ruby>徹底<rt>てってい</rt></ruby>しましょう。",
      "hintTranslation": "（......） Để ngừa tai nạn do bất cẩn, hãy kiểm tra kỹ."
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
      "explanation": "Đáp án đúng là A. Khuyên cách xử lý.",
      "rubyQuestion": "パソコンの<ruby>調子<rt>ちょうし</rt></ruby>が<ruby>悪い<rt>わるい</rt></ruby>ときは、まず<ruby>再起動<rt>さいきどう</rt></ruby>してみる（　　）よ。",
      "hintTranslation": "Khi máy tính trục trặc, tốt nhất （......） thử khởi động lại xem sao."
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
      "explanation": "Đáp án đúng là B. 「Nの + おかげで」.",
      "rubyQuestion": "<ruby>最新<rt>さいしん</rt></ruby>の<ruby>医療技術<rt>いりょうぎじゅつ</rt></ruby>の（　　）、<ruby>多く<rt>おおく</rt></ruby>の<ruby>人命<rt>じんめい</rt></ruby>が<ruby>救わ<rt>すくわ</rt></ruby>れるようになった。",
      "hintTranslation": "（......） công nghệ y tế mới nhất mà nhiều sinh mạng được cứu."
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
      "explanation": "Đáp án đúng là A. Dù lương cao.",
      "rubyQuestion": "どんなに<ruby>給料<rt>きゅうりょう</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>（　　）、<ruby>残業<rt>ざんぎょう</rt></ruby>ばかりのブラック<ruby>企業<rt>きぎょう</rt></ruby>では<ruby>働き<rt>はたらき</rt></ruby>たくない。",
      "hintTranslation": "（......） lương có cao tôi cũng không làm công ty bóc lột tăng ca."
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
      "explanation": "Đáp án đúng là D. 「子供さえ」.",
      "rubyQuestion": "<ruby>子供<rt>こども</rt></ruby>（　　）<ruby>知って<rt>しって</rt></ruby>いる<ruby>常識<rt>じょうしき</rt></ruby>を、なぜ<ruby>大人<rt>おとな</rt></ruby>のあなたが<ruby>知ら<rt>しら</rt></ruby>ないのですか。",
      "hintTranslation": "（......） Thường thức đến trẻ con cũng biết sao người lớn lại không biết."
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
      "explanation": "Đáp án đúng là C. Thêm điểm cộng.",
      "rubyQuestion": "<ruby>観光地<rt>かんこうち</rt></ruby>としての<ruby>魅力<rt>みりょく</rt></ruby>（　　）、<ruby>交通<rt>こうつう</rt></ruby>の<ruby>便<rt>びん</rt></ruby>の<ruby>良さ<rt>よさ</rt></ruby>も<ruby>人気<rt>にんき</rt></ruby>の<ruby>理由<rt>りゆう</rt></ruby>だ。",
      "hintTranslation": "Sức hút du lịch （......） giao thông thuận tiện tạo nên sự nổi tiếng."
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
      "explanation": "Đáp án đúng là D. Chưa chắc hợp miệng.",
      "rubyQuestion": "<ruby>人気<rt>にんき</rt></ruby>のある<ruby>店<rt>みせ</rt></ruby>だからといって、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>口<rt>くち</rt></ruby>に<ruby>合う<rt>あう</rt></ruby>（　　）。",
      "hintTranslation": "（......） Quán đông khách chưa chắc đã hợp khẩu vị mình."
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
      "explanation": "Đáp án đúng là B. 「日ごとに」: từng ngày một, ngày qua ngày.",
      "rubyQuestion": "<ruby>桜<rt>さくら</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>になると、<ruby>日<rt>にち</rt></ruby>（　　）<ruby>暖かく<rt>あたたかく</rt></ruby>なっていくのを<ruby>感じ<rt>かんじ</rt></ruby>る。",
      "hintTranslation": "Mỗi khi mùa hoa anh đào đến, lại cảm nhận trời ấm dần lên （......） ngày."
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
      "explanation": "Đáp án đúng là C. Thiên tai chồng chất.",
      "rubyQuestion": "<ruby>台風<rt>たいふう</rt></ruby>の<ruby>被害<rt>ひがい</rt></ruby>（　　）、<ruby>地震<rt>じしん</rt></ruby>まで<ruby>発生<rt>はっせい</rt></ruby>して<ruby>現地<rt>げんち</rt></ruby>は<ruby>混乱<rt>こんらん</rt></ruby>している。",
      "hintTranslation": "Bị bão tàn phá （......） động đất xảy ra khiến hiện trường hỗn loạn."
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
      "explanation": "Đáp án đúng là D. Hậu quả xấu đối với sức khỏe.",
      "rubyQuestion": "スマートフォンの<ruby>見す<rt>みす</rt></ruby>ぎの（　　）、<ruby>最近<rt>さいきん</rt></ruby><ruby>急に<rt>きゅうに</rt></ruby><ruby>視力<rt>しりょく</rt></ruby>が<ruby>落ち<rt>おち</rt></ruby>てきた。",
      "hintTranslation": "（......） xem điện thoại quá nhiều nên dạo này thị lực giảm mạnh."
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
      "explanation": "Đáp án đúng là B. 「である一方で」nêu 2 vai trò song song.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby><ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>研究者<rt>けんきゅうしゃ</rt></ruby>である（　　）、<ruby>大学<rt>だいがく</rt></ruby>で<ruby>学生<rt>がくせい</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>る<ruby>教育者<rt>きょういくしゃ</rt></ruby>でもある。",
      "hintTranslation": "（......） Anh ấy vừa là nhà nghiên cứu giỏi vừa là nhà giáo dục."
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
      "explanation": "Đáp án đúng là C. Phủ định kép: chắc chắn thắng.",
      "rubyQuestion": "<ruby>毎日<rt>まいにち</rt></ruby>５<ruby>時間<rt>じかん</rt></ruby>も<ruby>練習<rt>れんしゅう</rt></ruby>したのだから、<ruby>試合<rt>しあい</rt></ruby>に<ruby>勝て<rt>かて</rt></ruby>ない（　　）。",
      "hintTranslation": "Luyện 5 tiếng mỗi ngày thì （......） không thắng được!"
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
      "explanation": "Đáp án đúng là A. Đã xem nhưng không nhớ.",
      "rubyQuestion": "あの<ruby>映画<rt>えいが</rt></ruby>は<ruby>見た<rt>みた</rt></ruby>（　　）<ruby>見た<rt>みた</rt></ruby>けれど、<ruby>内容<rt>ないよう</rt></ruby>をほとんど<ruby>覚え<rt>おぼえ</rt></ruby>ていない。",
      "hintTranslation": "Xem thì có xem （......） gần như không nhớ nội dung."
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
      "explanation": "Đáp án đúng là B. 「NによるN」.",
      "rubyQuestion": "<ruby>地震<rt>じしん</rt></ruby>（　　）<ruby>津波<rt>つなみ</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>があるため、<ruby>警報<rt>けいほう</rt></ruby>が<ruby>発令<rt>はつれい</rt></ruby>された。",
      "hintTranslation": "（......） Do có nguy cơ sóng thần vì động đất nên phát cảnh báo."
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
      "explanation": "Đáp án đúng là B. Dù thất bại.",
      "rubyQuestion": "どんなに<ruby>失敗<rt>しっぱい</rt></ruby>し（　　）、そこから<ruby>学べ<rt>まなべ</rt></ruby>ば<ruby>無駄<rt>むだ</rt></ruby>にはならない。",
      "hintTranslation": "（......） thất bại thế nào nếu học hỏi được thì không vô ích."
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
      "explanation": "Đáp án đúng là D. Chưa hẳn đúng mọi lúc.",
      "rubyQuestion": "<ruby>辞書<rt>じしょ</rt></ruby>に<ruby>載っ<rt>のっ</rt></ruby>ている<ruby>意味<rt>いみ</rt></ruby>が、すべての<ruby>文脈<rt>ぶんみゃく</rt></ruby>に<ruby>当て<rt>あて</rt></ruby>はまる（　　）。",
      "hintTranslation": "（......） Nghĩa trong từ điển chưa chắc đúng mọi ngữ cảnh."
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
      "explanation": "Đáp án đúng là C. 「N + に対して」chỉ đối tượng hướng tới.",
      "rubyQuestion": "お<ruby>客様<rt>きゃくさま</rt></ruby>（　　）<ruby>失礼<rt>しつれい</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby>をとってはいけません。",
      "hintTranslation": "Không được có thái độ thô lỗ （......） khách hàng."
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
      "explanation": "Đáp án đúng là A. Khuyên răn đạo lý.",
      "rubyQuestion": "<ruby>人<rt>にん</rt></ruby>との<ruby>信頼関係<rt>しんらいかんけい</rt></ruby>を<ruby>築き<rt>きづき</rt></ruby>たいなら、<ruby>約束<rt>やくそく</rt></ruby>を<ruby>守る<rt>まもる</rt></ruby>（　　）。",
      "hintTranslation": "Muốn xây dựng niềm tin thì （......） giữ đúng lời hứa."
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
      "explanation": "Đáp án đúng là C. 「N + さえ」nghĩa là 'ngay cả, đến cả'.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby>１<ruby>年<rt>ねん</rt></ruby>も<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>住ん<rt>すん</rt></ruby>でいるのに、ひらがな（　　）<ruby>書け<rt>かけ</rt></ruby>ない。",
      "hintTranslation": "Sống ở Nhật 1 năm mà （......） Hiragana cũng không viết được."
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
      "explanation": "Đáp án đúng là D. Vừa mới ra khỏi nhà.",
      "rubyQuestion": "<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>しゅつ</rt></ruby>（　　）のところで<ruby>雨<rt>あめ</rt></ruby>が<ruby>降り<rt>おり</rt></ruby><ruby>出し<rt>だし</rt></ruby>、<ruby>傘<rt>かさ</rt></ruby>を<ruby>取り<rt>とり</rt></ruby>に<ruby>戻っ<rt>もどっ</rt></ruby>た。",
      "hintTranslation": "（......） bước ra khỏi nhà thì trời mưa, phải quay lại lấy ô."
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
      "explanation": "Đáp án đúng là D. Nの + わけがない.",
      "rubyQuestion": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>昨日<rt>きのう</rt></ruby><ruby>東京<rt>とうきょう</rt></ruby>にいた<ruby>証拠<rt>しょうこ</rt></ruby>があるのだから、<ruby>犯人<rt>はんにん</rt></ruby>の（　　）。",
      "hintTranslation": "Có chứng cứ hôm qua anh ấy ở Tokyo thì （......） là thủ phạm được!"
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
      "explanation": "Đáp án đúng là B. Chưa chắc đã thành thạo.",
      "rubyQuestion": "<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>長く<rt>ながく</rt></ruby><ruby>住ん<rt>すん</rt></ruby>でいるからといって、<ruby>敬語<rt>けいご</rt></ruby>が<ruby>完璧<rt>かんぺき</rt></ruby>に<ruby>使え<rt>つかえ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Sống ở Nhật lâu chưa chắc đã dùng kính ngữ chuẩn."
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
      "explanation": "Đáp án đúng là C. Tương ứng theo mùa.",
      "rubyQuestion": "<ruby>季節<rt>きせつ</rt></ruby>（　　）<ruby>咲く<rt>さく</rt></ruby><ruby>花<rt>はな</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>が<ruby>変わ<rt>かわ</rt></ruby>るので、<ruby>四季<rt>しき</rt></ruby>を<ruby>楽し<rt>たのし</rt></ruby>める。",
      "hintTranslation": "（......） Tùy theo mùa loài hoa nở thay đổi nên ngắm được 4 mùa."
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
      "explanation": "Đáp án đúng là A. Hậu quả tiêu cực.",
      "rubyQuestion": "エアコンの<ruby>温度<rt>おんど</rt></ruby>を<ruby>下げ<rt>さげ</rt></ruby>すぎた（　　）、<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩し<rt>くずし</rt></ruby>てしまった。",
      "hintTranslation": "（......） bật điều hòa quá lạnh nên tôi bị ốm."
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
      "explanation": "Đáp án đúng là C. Kết quả tích cực dùng おかげで.",
      "rubyQuestion": "<ruby>毎日<rt>まいにち</rt></ruby>コツコツ<ruby>勉強<rt>べんきょう</rt></ruby>した（　　）、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>会話<rt>かいわ</rt></ruby>がスムーズになった。",
      "hintTranslation": "（......） chăm chỉ học mỗi ngày nên việc hội thoại trôi chảy hơn."
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
      "explanation": "Đáp án đúng là B. 「ありがたさ」.",
      "rubyQuestion": "<ruby>親元<rt>おやもと</rt></ruby>を<ruby>離れ<rt>はなれ</rt></ruby>て<ruby>初めて<rt>はじめて</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>のありがた（　　）が<ruby>身に<rt>みに</rt></ruby>しみて<ruby>分か<rt>わか</rt></ruby>った。",
      "hintTranslation": "（......） Rời xa cha mẹ mới thấm thía sự quý giá của gia đình."
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
      "explanation": "Đáp án đúng là B. Phủ định mỉa mai.",
      "rubyQuestion": "「あの<ruby>映画<rt>えいが</rt></ruby>、<ruby>面白か<rt>おもしろか</rt></ruby>った？」「<ruby>面白か<rt>おもしろか</rt></ruby>った（　　）。<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>寝ち<rt>ねち</rt></ruby>ゃったよ。」",
      "hintTranslation": "（......） Hay nỗi gì! Tôi ngủ gật giữa chừng luôn đấy."
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
      "explanation": "Đáp án đúng là B. 「V辞書形 + ことだ」lời khuyên tốt nhất.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>早く<rt>はやく</rt></ruby><ruby>治し<rt>なおし</rt></ruby>たければ、<ruby>暖かく<rt>あたたかく</rt></ruby>してゆっくり<ruby>休む<rt>やすむ</rt></ruby>（　　）。",
      "hintTranslation": "Muốn mau khỏi cảm cúm thì （......） giữ ấm nghỉ ngơi."
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
      "explanation": "Đáp án đúng là C. Ngay cả tiền lẻ.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby>お<ruby>金<rt>きん</rt></ruby>がなくて、<ruby>明日<rt>あした</rt></ruby>のパンを<ruby>買う<rt>かう</rt></ruby><ruby>小銭<rt>こぜに</rt></ruby>（　　）<ruby>持っ<rt>もっ</rt></ruby>ていない。",
      "hintTranslation": "（......） Anh ấy túng quẫn đến tiền mua bánh mì ngày mai cũng không có."
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
      "explanation": "Đáp án đúng là B. 「V辞書形 + ごとに」: cứ mỗi lần gặp.",
      "rubyQuestion": "あの<ruby>人<rt>にん</rt></ruby>は<ruby>会う<rt>あう</rt></ruby>（　　）<ruby>新しい<rt>あたらしい</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>着て<rt>きて</rt></ruby>いて、とてもおしゃれだ。",
      "hintTranslation": "Người đó （......） gặp lại mặc đồ mới."
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
      "explanation": "Đáp án đúng là D. Bổ nghĩa danh từ: 「〜に対するN」.",
      "rubyQuestion": "<ruby>環境問題<rt>かんきょうもんだい</rt></ruby>（　　）<ruby>関心<rt>かんしん</rt></ruby>が<ruby>世界中<rt>せかいじゅう</rt></ruby>で<ruby>高ま<rt>たかま</rt></ruby>っている。",
      "hintTranslation": "Sự quan tâm （......） môi trường đang tăng lên."
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
      "explanation": "Đáp án đúng là C. Nguy cơ rò rỉ dữ liệu.",
      "rubyQuestion": "<ruby>個人情報<rt>こじんじょうほう</rt></ruby>が<ruby>外部<rt>がいぶ</rt></ruby>に<ruby>流出<rt>りゅうしゅつ</rt></ruby>する（　　）が<ruby>指摘<rt>してき</rt></ruby>されている。",
      "hintTranslation": "Đang bị cảnh báo （......） rò rỉ thông tin cá nhân ra ngoài."
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
      "explanation": "Đáp án đúng là A. Chưa chắc đã mưa.",
      "rubyQuestion": "<ruby>天気予報<rt>てんきよほう</rt></ruby>が<ruby>雨<rt>あめ</rt></ruby>だと<ruby>言って<rt>いって</rt></ruby>も、<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>雨<rt>あめ</rt></ruby>が<ruby>降る<rt>ふる</rt></ruby>（　　）。",
      "hintTranslation": "（......） Dự báo mưa chưa chắc trời đã mưa."
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
      "explanation": "Đáp án đúng là A. Đi kèm 必ずしも.",
      "rubyQuestion": "「〜とは<ruby>限ら<rt>かぎら</rt></ruby>ない」と<ruby>一緒に<rt>いっしょに</rt></ruby>よく<ruby>使わ<rt>つかわ</rt></ruby>れる<ruby>副詞<rt>ふくし</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Phó từ hay đi kèm là 必ずしも."
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
      "explanation": "Đáp án đúng là B. Đối lập 2 thực trạng.",
      "rubyQuestion": "<ruby>都市部<rt>としぶ</rt></ruby>の<ruby>人口<rt>じんこう</rt></ruby>が<ruby>増加<rt>ぞうか</rt></ruby>しているの（　　）、<ruby>地方<rt>ちほう</rt></ruby>では<ruby>過疎<rt>かそ</rt></ruby><ruby>化<rt>か</rt></ruby>が<ruby>進ん<rt>すすん</rt></ruby>でいる。",
      "hintTranslation": "（......） Trái ngược dân số thành thị tăng, vùng quê bị giảm dân."
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
      "explanation": "Đáp án đúng là A. Mong người khác làm lành.",
      "rubyQuestion": "もう<ruby>喧嘩<rt>けんか</rt></ruby>は<ruby>終わり<rt>おわり</rt></ruby>にして、<ruby>仲直り<rt>なかなおり</rt></ruby>し（　　）。",
      "hintTranslation": "（......） Đừng cãi nhau nữa, tôi mong hai bạn làm lành với nhau."
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
      "explanation": "Đáp án đúng là A. Tuyệt đối không đầu hàng.",
      "rubyQuestion": "あんな<ruby>強い<rt>つよい</rt></ruby><ruby>相手<rt>あいて</rt></ruby>に、<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>負け<rt>まけ</rt></ruby>てたまる（　　）。<ruby>最後<rt>さいご</rt></ruby>まで<ruby>戦う<rt>たたかう</rt></ruby>ぞ！",
      "hintTranslation": "（......） Trước đối thủ mạnh đời nào ta chịu thua dễ thế! Chiến đấu tới cùng!"
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
      "explanation": "Đáp án đúng là D. 「黒っぽい」hơi đen.",
      "rubyQuestion": "<ruby>黒<rt>くろ</rt></ruby>（　　）ジャケットを<ruby>羽織<rt>はおり</rt></ruby>って<ruby>出勤<rt>しゅっきん</rt></ruby>した。",
      "hintTranslation": "（......） Mặc áo khoác màu hơi ngả đen đi làm."
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
      "explanation": "Đáp án đúng là A. Bù lại tương xứng.",
      "rubyQuestion": "<ruby>英語<rt>えいご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>てもらう（　　）、<ruby>彼<rt>かれ</rt></ruby>にベトナム<ruby>語<rt>ご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>てあげている。",
      "hintTranslation": "（......） Được dạy tiếng Anh, đổi lại tôi dạy tiếng Việt cho bạn."
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
      "explanation": "Đáp án đúng là C. Cấu trúc lặp từ 「VことはVが」.",
      "rubyQuestion": "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>話せ<rt>はなせ</rt></ruby>る（　　）<ruby>話せ<rt>はなせ</rt></ruby>ますが、<ruby>日常会話<rt>にちじょうかいわ</rt></ruby>レベルです。",
      "hintTranslation": "Nói thì nói được （......） chỉ mức cơ bản."
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
      "explanation": "Đáp án đúng là B. 「おかげで」dùng mỉa mai trách khéo.",
      "rubyQuestion": "（<ruby>皮肉<rt>ひにく</rt></ruby>）「<ruby>君<rt>くん</rt></ruby>が<ruby>重要な<rt>じゅうような</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>を<ruby>忘れ<rt>わすれ</rt></ruby>てくれた（　　）、<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>中止<rt>ちゅうし</rt></ruby>になっちゃったよ。」",
      "hintTranslation": "(Mỉa mai) '（......） cậu quên tài liệu mà cuộc họp bị hủy luôn rồi đấy!'"
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
      "explanation": "Đáp án đúng là A. Nguy cơ phá sản.",
      "rubyQuestion": "<ruby>景気<rt>けいき</rt></ruby>の<ruby>悪化<rt>あっか</rt></ruby>が<ruby>続け<rt>つづけ</rt></ruby>ば、<ruby>多く<rt>おおく</rt></ruby>の<ruby>中小企業<rt>ちゅうしょうきぎょう</rt></ruby>が<ruby>倒産<rt>とうさん</rt></ruby>する（　　）。",
      "hintTranslation": "Kinh tế xấu tiếp diễn （......） nhiều doanh nghiệp phá sản."
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
      "explanation": "Đáp án đúng là B. Khó lòng kịp giờ.",
      "rubyQuestion": "<ruby>渋滞<rt>じゅうたい</rt></ruby>がひどいので、<ruby>約束<rt>やくそく</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>に<ruby>間に合い<rt>まにあい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Tắc đường nặng thế này có vẻ không kịp giờ hẹn."
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
      "explanation": "Đáp án đúng là B. Vừa mới vào làm.",
      "rubyQuestion": "<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>入社<rt>にゅうしゃ</rt></ruby>し（　　）なので、まだ<ruby>仕事<rt>しごと</rt></ruby>の<ruby>流れ<rt>ながれ</rt></ruby>に<ruby>慣れ<rt>なれ</rt></ruby>ていません。",
      "hintTranslation": "Tôi （......） vào công ty nên chưa quen quy trình việc."
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
      "explanation": "Đáp án đúng là D. Hướng vào đối tượng câu hỏi.",
      "rubyQuestion": "<ruby>先生<rt>せんせい</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>（　　）、<ruby>彼は<rt>かれは</rt></ruby><ruby>自信<rt>じしん</rt></ruby>を<ruby>持っ<rt>もっ</rt></ruby>て<ruby>答え<rt>こたえ</rt></ruby>た。",
      "hintTranslation": "（......） câu hỏi của thầy, anh ấy tự tin trả lời."
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
      "explanation": "Đáp án đúng là D. Nguy cơ phun trào.",
      "rubyQuestion": "<ruby>火山活動<rt>かざんかつどう</rt></ruby>が<ruby>活発化<rt>かっぱつか</rt></ruby>しており、<ruby>噴火<rt>ふんか</rt></ruby>の（　　）が<ruby>高ま<rt>たかま</rt></ruby>っている。",
      "hintTranslation": "Hoạt động núi lửa sôi động, （......） phun trào tăng cao."
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
      "explanation": "Đáp án đúng là D. 「N + のかわりに」= thay cho.",
      "rubyQuestion": "<ruby>健康<rt>けんこう</rt></ruby>のために、<ruby>白米<rt>はくまい</rt></ruby>の（　　）<ruby>玄米<rt>げんまい</rt></ruby>を<ruby>食べ<rt>たべ</rt></ruby>るようにしています。",
      "hintTranslation": "Vì sức khỏe nên tôi ăn gạo lứt （......） gạo trắng."
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
      "explanation": "Đáp án đúng là B. Mong người khác hiểu.",
      "rubyQuestion": "<ruby>私<rt>わたし</rt></ruby>の<ruby>気持ち<rt>きもち</rt></ruby>をもう<ruby>少し<rt>すこし</rt></ruby><ruby>理解<rt>りかい</rt></ruby>し（　　）と<ruby>思い<rt>おもい</rt></ruby>ます。",
      "hintTranslation": "（......） Tôi mong bạn thấu hiểu cho tâm trạng của tôi một chút."
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
      "explanation": "Đáp án đúng là C. Không thể ngồi yên.",
      "rubyQuestion": "こんな<ruby>屈辱<rt>くつじょく</rt></ruby>を<ruby>味わ<rt>あじわ</rt></ruby>って、<ruby>黙っ<rt>だまっ</rt></ruby>ていられる（　　）。",
      "hintTranslation": "（......） Chịu nỗi nhục nhã này làm sao mà im lặng chịu trận được!"
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
      "explanation": "Đáp án đúng là B. Yếu tố dồn thêm.",
      "rubyQuestion": "<ruby>今週<rt>こんしゅう</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>の<ruby>忙しさ<rt>いそがしさ</rt></ruby>（　　）<ruby>寝不足<rt>ねぶそく</rt></ruby>も<ruby>重なり<rt>かさなり</rt></ruby>、ひどく<ruby>疲れ<rt>つかれ</rt></ruby>ている。",
      "hintTranslation": "（......） Bận rộn việc cộng thêm thiếu ngủ khiến tôi kiệt sức."
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
      "explanation": "Đáp án đúng là B. VことはVが.",
      "rubyQuestion": "<ruby>読め<rt>よめ</rt></ruby>る（　　）<ruby>読め<rt>よめ</rt></ruby>るが、<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>説明す<rt>せつめいす</rt></ruby>るのは<ruby>難しい<rt>むずかしい</rt></ruby>。",
      "hintTranslation": "（......） Đọc thì đọc được đấy nhưng giải thích nghĩa chữ Hán thì khó."
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
      "explanation": "Đáp án đúng là C. 「忘れっぽい」tính hay quên.",
      "rubyQuestion": "<ruby>祖父<rt>そふ</rt></ruby>は<ruby>最近<rt>さいきん</rt></ruby><ruby>歳<rt>とし</rt></ruby>をとったせいか、とても<ruby>忘れ<rt>わすれ</rt></ruby>（　　）なった。",
      "hintTranslation": "Ông tôi dạo này có tuổi nên trở nên rất （......）."
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
      "explanation": "Đáp án đúng là D. Phương tiện thông qua.",
      "rubyQuestion": "その<ruby>法案<rt>ほうあん</rt></ruby>は<ruby>国会<rt>こっかい</rt></ruby>の<ruby>多数決<rt>たすうけつ</rt></ruby>（　　）<ruby>可決<rt>かけつ</rt></ruby>されました。",
      "hintTranslation": "（......） Dự luật đó đã được thông qua bằng biểu quyết đa số ở quốc hội."
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
      "explanation": "Đáp án đúng là C. Hậu quả tiêu cực do mưa.",
      "rubyQuestion": "<ruby>大雨<rt>おおあめ</rt></ruby>の（　　）<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>運転<rt>うんてん</rt></ruby>を<ruby>見合わ<rt>みあわ</rt></ruby>せ、<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>遅刻<rt>ちこく</rt></ruby>した。",
      "hintTranslation": "（......） mưa lớn nên tàu dừng chạy, tôi bị muộn làm."
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
      "explanation": "Đáp án đúng là A. Hậu quả xấu do bị ốm.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>をひいた（　　）、<ruby>楽しみ<rt>たのしみ</rt></ruby>にしていた<ruby>旅行<rt>りょこう</rt></ruby>をキャンセルした。",
      "hintTranslation": "（......） bị cảm nên phải hủy chuyến du lịch mong đợi."
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
      "explanation": "Đáp án đúng là B. Vừa mới sinh ra.",
      "rubyQuestion": "<ruby>生まれ<rt>うまれ</rt></ruby>て（　　）の<ruby>赤ちゃん<rt>あかちゃん</rt></ruby>を<ruby>抱っこ<rt>だっこ</rt></ruby>させてもらった。",
      "hintTranslation": "Tôi được bế em bé （......） chào đời."
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
      "explanation": "Đáp án đúng là A. 「忘れっぽい」tính hay quên.",
      "rubyQuestion": "<ruby>祖父<rt>そふ</rt></ruby>は<ruby>最近<rt>さいきん</rt></ruby><ruby>歳<rt>とし</rt></ruby>をとったせいか、とても<ruby>忘れ<rt>わすれ</rt></ruby>（　　）なった。",
      "hintTranslation": "Ông tôi dạo này có tuổi nên trở nên rất （......）."
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
      "explanation": "Đáp án đúng là D. 「子供さえ」.",
      "rubyQuestion": "<ruby>子供<rt>こども</rt></ruby>（　　）<ruby>知って<rt>しって</rt></ruby>いる<ruby>常識<rt>じょうしき</rt></ruby>を、なぜ<ruby>大人<rt>おとな</rt></ruby>のあなたが<ruby>知ら<rt>しら</rt></ruby>ないのですか。",
      "hintTranslation": "（......） Thường thức đến trẻ con cũng biết sao người lớn lại không biết."
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
      "explanation": "Đáp án đúng là C. So sánh đối lập 2 sự việc.",
      "rubyQuestion": "<ruby>兄<rt>あに</rt></ruby>が<ruby>社交的<rt>しゃこうてき</rt></ruby>なの（　　）、<ruby>弟<rt>おとうと</rt></ruby>は<ruby>内向的<rt>ないこうてき</rt></ruby>で<ruby>物<rt>もの</rt></ruby><ruby>静か<rt>しずか</rt></ruby>だ。",
      "hintTranslation": "（......） anh trai hòa đồng, em trai lại hướng nội."
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
      "explanation": "Đáp án đúng là A. Chắc chắn ngon.",
      "rubyQuestion": "プロの<ruby>料理人<rt>りょうりにん</rt></ruby>が<ruby>作っ<rt>つくっ</rt></ruby>たのだから、まずい（　　）。",
      "hintTranslation": "Đầu bếp chuyên nghiệp nấu thì （......） dở được!"
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
      "explanation": "Đáp án đúng là C. Bù lại tương xứng.",
      "rubyQuestion": "<ruby>英語<rt>えいご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>てもらう（　　）、<ruby>彼<rt>かれ</rt></ruby>にベトナム<ruby>語<rt>ご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>てあげている。",
      "hintTranslation": "（......） Được dạy tiếng Anh, đổi lại tôi dạy tiếng Việt cho bạn."
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
      "explanation": "Đáp án đúng là C. Khó lòng kịp giờ.",
      "rubyQuestion": "<ruby>渋滞<rt>じゅうたい</rt></ruby>がひどいので、<ruby>約束<rt>やくそく</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>に<ruby>間に合い<rt>まにあい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Tắc đường nặng thế này có vẻ không kịp giờ hẹn."
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
      "explanation": "Đáp án đúng là B. 「他人のせいにする」: đổ lỗi cho người khác.",
      "rubyQuestion": "<ruby>何で<rt>なんで</rt></ruby>も<ruby>他人<rt>たにん</rt></ruby>の（　　）にするのは、<ruby>大人<rt>おとな</rt></ruby>の<ruby>態度<rt>たいど</rt></ruby>とは<ruby>言え<rt>いえ</rt></ruby>ない。",
      "hintTranslation": "（......） Đổ lỗi cho người khác không phải thái độ người lớn."
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
      "explanation": "Đáp án đúng là D. Rét cộng tuyết lớn.",
      "rubyQuestion": "<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>寒さ<rt>さむさ</rt></ruby>（　　）<ruby>大雪<rt>おおゆき</rt></ruby>に<ruby>見舞<rt>みまい</rt></ruby>われ、<ruby>交通網<rt>こうつうもう</rt></ruby>が<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>麻痺<rt>まひ</rt></ruby>した。",
      "hintTranslation": "（......） Rét đậm cộng thêm tuyết rơi dày khiến giao thông tê liệt."
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
      "explanation": "Đáp án đúng là C. Hậu quả xấu do bị ốm.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>をひいた（　　）、<ruby>楽しみ<rt>たのしみ</rt></ruby>にしていた<ruby>旅行<rt>りょこう</rt></ruby>をキャンセルした。",
      "hintTranslation": "（......） bị cảm nên phải hủy chuyến du lịch mong đợi."
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
      "explanation": "Đáp án đúng là D. Đối lập thời tiết 2 ngày.",
      "rubyQuestion": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>猛暑<rt>もうしょ</rt></ruby>（　　）、<ruby>今日は<rt>こんにちは</rt></ruby><ruby>急に<rt>きゅうに</rt></ruby><ruby>気温<rt>きおん</rt></ruby>が<ruby>下が<rt>さが</rt></ruby>って<ruby>肌寒い<rt>はださむい</rt></ruby>。",
      "hintTranslation": "（......） cái nóng gay gắt hôm qua, hôm nay lạnh se se."
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
      "explanation": "Đáp án đúng là D. Mưa to kèm gió lớn.",
      "rubyQuestion": "<ruby>激しい<rt>はげしい</rt></ruby><ruby>雨<rt>あめ</rt></ruby>（　　）<ruby>強い<rt>つよい</rt></ruby><ruby>風<rt>かぜ</rt></ruby>も<ruby>吹き<rt>ふき</rt></ruby><ruby>荒れ<rt>あれ</rt></ruby>、<ruby>外出<rt>がいしゅつ</rt></ruby>が<ruby>極め<rt>きわめ</rt></ruby>て<ruby>危険<rt>きけん</rt></ruby>な<ruby>状態<rt>じょうたい</rt></ruby>だ。",
      "hintTranslation": "Mưa to （......） gió giật mạnh, ra ngoài rất nguy hiểm."
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
      "explanation": "Đáp án đúng là B. 「面白さ」.",
      "rubyQuestion": "この<ruby>小説<rt>しょうせつ</rt></ruby>の<ruby>面白<rt>おもしろ</rt></ruby>（　　）は、<ruby>読んだ<rt>よんだ</rt></ruby><ruby>人<rt>にん</rt></ruby>にしか<ruby>分か<rt>わか</rt></ruby>らない。",
      "hintTranslation": "（......） Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu."
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
      "explanation": "Đáp án đúng là C. Lời khuyên tâm huyết.",
      "rubyQuestion": "<ruby>後悔<rt>こうかい</rt></ruby>したくないなら、<ruby>今<rt>いま</rt></ruby>できる<ruby>全力<rt>ぜんりょく</rt></ruby>を<ruby>尽くす<rt>つくす</rt></ruby>（　　）。",
      "hintTranslation": "（......） Nếu không muốn hối hận thì hãy dốc toàn lực làm ngay lúc này."
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
      "explanation": "Đáp án đúng là D. ナAだとは限らない.",
      "rubyQuestion": "お<ruby>金持ち<rt>かねもち</rt></ruby>の<ruby>人<rt>にん</rt></ruby>が、みんな<ruby>幸せ<rt>しあわせ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Người giàu không hẳn ai cũng đều hạnh phúc."
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
      "explanation": "Đáp án đúng là D. Khẳng định an toàn.",
      "rubyQuestion": "<ruby>鍵<rt>かぎ</rt></ruby>をかけたのだから、<ruby>泥棒<rt>どろぼう</rt></ruby>が<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>入れ<rt>いれ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Đã khóa cửa cẩn thận thì trộm làm sao vào dễ thế được!"
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
      "explanation": "Đáp án đúng là A. Nguy cơ dịch bệnh.",
      "rubyQuestion": "インフルエンザが<ruby>急速<rt>きゅうそく</rt></ruby>に<ruby>感染<rt>かんせん</rt></ruby><ruby>拡大<rt>かくだい</rt></ruby>する（　　）がある。",
      "hintTranslation": "（......） dịch cúm lan rộng nhanh chóng."
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
      "explanation": "Đáp án đúng là C. 「N + ごとに」mang nghĩa phân chia 'từng... một'.",
      "rubyQuestion": "<ruby>先生<rt>せんせい</rt></ruby>：「それでは<ruby>今か<rt>いまか</rt></ruby>ら、５<ruby>人<rt>にん</rt></ruby>（　　）のグループに<ruby>分か<rt>わか</rt></ruby>れてください。」",
      "hintTranslation": "（......） Thầy giáo: 'Hãy chia thành nhóm 5 người một nhé.'"
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
      "explanation": "Đáp án đúng là B. 「〜恐れがある」nguy cơ xấu.",
      "rubyQuestion": "<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近し<rt>せっきんし</rt></ruby>ているため、<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>河川<rt>かせん</rt></ruby>の<ruby>氾濫<rt>はんらん</rt></ruby>の（　　）。",
      "hintTranslation": "Bão đến gần （......） nước sông tràn bờ."
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
      "explanation": "Đáp án đúng là B. Chưa chắc hợp miệng.",
      "rubyQuestion": "<ruby>人気<rt>にんき</rt></ruby>のある<ruby>店<rt>みせ</rt></ruby>だからといって、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>口<rt>くち</rt></ruby>に<ruby>合う<rt>あう</rt></ruby>（　　）。",
      "hintTranslation": "（......） Quán đông khách chưa chắc đã hợp khẩu vị mình."
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
      "explanation": "Đáp án đúng là C. Mong người khác làm lành.",
      "rubyQuestion": "もう<ruby>喧嘩<rt>けんか</rt></ruby>は<ruby>終わり<rt>おわり</rt></ruby>にして、<ruby>仲直り<rt>なかなおり</rt></ruby>し（　　）。",
      "hintTranslation": "（......） Đừng cãi nhau nữa, tôi mong hai bạn làm lành với nhau."
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
      "explanation": "Đáp án đúng là D. Mặt lợi và mặt hại đối lập.",
      "rubyQuestion": "インターネットは<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>素早く<rt>すばやく</rt></ruby><ruby>得ら<rt>えら</rt></ruby>れる（　　）、<ruby>誤<rt>ご</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>が<ruby>広が<rt>ひろが</rt></ruby>りやすいリスクもある。",
      "hintTranslation": "Internet giúp tra thông tin nhanh, （......） có nguy cơ lan truyền tin giả."
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
      "explanation": "Đáp án đúng là A. Khuyên răn đạo lý.",
      "rubyQuestion": "<ruby>人<rt>にん</rt></ruby>との<ruby>信頼関係<rt>しんらいかんけい</rt></ruby>を<ruby>築き<rt>きづき</rt></ruby>たいなら、<ruby>約束<rt>やくそく</rt></ruby>を<ruby>守る<rt>まもる</rt></ruby>（　　）。",
      "hintTranslation": "Muốn xây dựng niềm tin thì （......） giữ đúng lời hứa."
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
      "explanation": "Đáp án đúng là C. Kết quả điều trị tốt.",
      "rubyQuestion": "<ruby>薬<rt>くすり</rt></ruby>を<ruby>早め<rt>はやめ</rt></ruby>に<ruby>飲ん<rt>のん</rt></ruby>だ（　　）、ひどくならずに<ruby>風邪<rt>かぜ</rt></ruby>が<ruby>治っ<rt>なおっ</rt></ruby>た。",
      "hintTranslation": "（......） uống thuốc sớm nên cảm cúm đã khỏi không bị nặng."
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
      "explanation": "Đáp án đúng là C. 「N + によって」chỉ nguyên nhân.",
      "rubyQuestion": "<ruby>今回<rt>こんかい</rt></ruby>の<ruby>台風<rt>たいふう</rt></ruby>（　　）、<ruby>多く<rt>おおく</rt></ruby>の<ruby>家屋<rt>かおく</rt></ruby>が<ruby>被害<rt>ひがい</rt></ruby>を<ruby>受け<rt>うけ</rt></ruby>ました。",
      "hintTranslation": "（......） Do cơn bão lần này, nhiều nhà cửa bị thiệt hại."
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
      "explanation": "Đáp án đúng là B. 「N + に対して」chỉ đối tượng hướng tới.",
      "rubyQuestion": "お<ruby>客様<rt>きゃくさま</rt></ruby>（　　）<ruby>失礼<rt>しつれい</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby>をとってはいけません。",
      "hintTranslation": "Không được có thái độ thô lỗ （......） khách hàng."
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
      "explanation": "Đáp án đúng là C. 「NによるN」.",
      "rubyQuestion": "<ruby>地震<rt>じしん</rt></ruby>（　　）<ruby>津波<rt>つなみ</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>があるため、<ruby>警報<rt>けいほう</rt></ruby>が<ruby>発令<rt>はつれい</rt></ruby>された。",
      "hintTranslation": "（......） Do có nguy cơ sóng thần vì động đất nên phát cảnh báo."
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
      "explanation": "Đáp án đúng là D. 「Nの + おかげで」.",
      "rubyQuestion": "<ruby>最新<rt>さいしん</rt></ruby>の<ruby>医療技術<rt>いりょうぎじゅつ</rt></ruby>の（　　）、<ruby>多く<rt>おおく</rt></ruby>の<ruby>人命<rt>じんめい</rt></ruby>が<ruby>救わ<rt>すくわ</rt></ruby>れるようになった。",
      "hintTranslation": "（......） công nghệ y tế mới nhất mà nhiều sinh mạng được cứu."
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
      "explanation": "Đáp án đúng là C. Lặp lại động từ.",
      "rubyQuestion": "<ruby>車<rt>くるま</rt></ruby>を<ruby>運転<rt>うんてん</rt></ruby>できる（　　）できますが、<ruby>高速道路<rt>こうそくどうろ</rt></ruby>は<ruby>怖く<rt>こわく</rt></ruby>て<ruby>走れ<rt>はしれ</rt></ruby>ません。",
      "hintTranslation": "Lái xe thì lái được （......） đường cao tốc thì không dám đi."
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
      "explanation": "Đáp án đúng là A. 「広さ」độ rộng.",
      "rubyQuestion": "この<ruby>部屋<rt>へや</rt></ruby>の<ruby>広<rt>こう</rt></ruby>（　　）なら、５<ruby>人<rt>にん</rt></ruby>でも<ruby>快適<rt>かいてき</rt></ruby>に<ruby>過ご<rt>すご</rt></ruby>せる。",
      "hintTranslation": "（......） Độ rộng căn phòng này thì 5 người ở vẫn thoải mái."
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
      "explanation": "Đáp án đúng là B. 「Vないでほしい」mong đừng làm.",
      "rubyQuestion": "この<ruby>件<rt>けん</rt></ruby>については、<ruby>他の<rt>ほかの</rt></ruby><ruby>人<rt>にん</rt></ruby>には<ruby>誰<rt>だれ</rt></ruby>にも<ruby>言わ<rt>いわ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Mong bạn đừng nói việc này cho ai biết."
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
      "explanation": "Đáp án đúng là B. Khó thành hiện thực.",
      "rubyQuestion": "<ruby>予算<rt>よさん</rt></ruby>が<ruby>足り<rt>たり</rt></ruby>ないため、この<ruby>計画<rt>けいかく</rt></ruby>は<ruby>実現<rt>じつげん</rt></ruby>でき（　　）。",
      "hintTranslation": "（......） Ngân sách thiếu hụt nên kế hoạch khó mà thực hiện được."
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
      "explanation": "Đáp án đúng là B. 「白っぽい」hơi trắng.",
      "rubyQuestion": "あの<ruby>白<rt>しろ</rt></ruby>（　　）シャツを<ruby>着て<rt>きて</rt></ruby>いる<ruby>男性<rt>だんせい</rt></ruby>が、<ruby>新しい<rt>あたらしい</rt></ruby><ruby>課長<rt>かちょう</rt></ruby>です。",
      "hintTranslation": "（......） Người đàn ông mặc áo màu hơi trăng trắng kia là tổ trưởng mới."
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
      "explanation": "Đáp án đúng là D. 「N + によって」= tùy vào.",
      "rubyQuestion": "<ruby>文化<rt>ぶんか</rt></ruby>や<ruby>習慣<rt>しゅうかん</rt></ruby>は、<ruby>国<rt>くに</rt></ruby>（　　）<ruby>大きく<rt>おおきく</rt></ruby><ruby>異な<rt>ことな</rt></ruby>ります。",
      "hintTranslation": "（......） Văn hóa khác nhau tùy theo mỗi quốc gia."
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
      "explanation": "Đáp án đúng là D. Vừa tốt nghiệp.",
      "rubyQuestion": "<ruby>大学<rt>だいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>し（　　）の<ruby>若手<rt>わかて</rt></ruby><ruby>社員<rt>しゃいん</rt></ruby>たちが<ruby>研修<rt>けんしゅう</rt></ruby>を<ruby>受け<rt>うけ</rt></ruby>ている。",
      "hintTranslation": "（......） Các nhân viên trẻ vừa tốt nghiệp đại học đang được đào tạo."
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
      "explanation": "Đáp án đúng là B. Tự tin không thể hỏng.",
      "rubyQuestion": "あんなに<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby><ruby>準備<rt>じゅんび</rt></ruby>したプレゼンが、<ruby>失敗<rt>しっぱい</rt></ruby>する（　　）。",
      "hintTranslation": "（......） Chuẩn bị bài thuyết trình công phu thế thì làm sao thất bại được!"
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
      "explanation": "Đáp án đúng là D. 「V辞書形 + ことだ」lời khuyên tốt nhất.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>早く<rt>はやく</rt></ruby><ruby>治し<rt>なおし</rt></ruby>たければ、<ruby>暖かく<rt>あたたかく</rt></ruby>してゆっくり<ruby>休む<rt>やすむ</rt></ruby>（　　）。",
      "hintTranslation": "Muốn mau khỏi cảm cúm thì （......） giữ ấm nghỉ ngơi."
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
      "explanation": "Đáp án đúng là D. 「暑さ」độ nóng.",
      "rubyQuestion": "<ruby>真夏<rt>まなつ</rt></ruby>の<ruby>暑<rt>しょ</rt></ruby>（　　）を<ruby>乗り切る<rt>のりきる</rt></ruby>ために、エアコンを<ruby>適切<rt>てきせつ</rt></ruby>に<ruby>使お<rt>つかお</rt></ruby>う。",
      "hintTranslation": "（......） Để vượt qua cái nóng mùa hè hãy dùng điều hòa hợp lý."
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
      "explanation": "Đáp án đúng là B. 「一方で」diễn tả đồng thời 2 việc song song.",
      "rubyQuestion": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>に<ruby>情熱<rt>じょうねつ</rt></ruby>を<ruby>注ぐ<rt>そそぐ</rt></ruby>（　　）、<ruby>休日<rt>きゅうじつ</rt></ruby>は<ruby>家族<rt>かぞく</rt></ruby>との<ruby>時間<rt>じかん</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしている。",
      "hintTranslation": "Cô ấy hết mình vì công việc, （......） trân trọng gia đình."
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
      "explanation": "Đáp án đúng là A. Chưa chắc ổn định.",
      "rubyQuestion": "<ruby>大手<rt>おおて</rt></ruby><ruby>企業<rt>きぎょう</rt></ruby>だからといって、<ruby>将来<rt>しょうらい</rt></ruby>ずっと<ruby>安定<rt>あんてい</rt></ruby>している（　　）。",
      "hintTranslation": "（......） Doanh nghiệp lớn chưa hẳn tương lai đã mãi ổn định."
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
      "explanation": "Đáp án đúng là B. Phủ định: ないでほしい.",
      "rubyQuestion": "<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>には<ruby>近づ<rt>ちかづ</rt></ruby>か（　　）と<ruby>注意<rt>ちゅうい</rt></ruby>した。",
      "hintTranslation": "（......） Tôi dặn mong họ đừng lại gần nơi nguy hiểm."
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
      "explanation": "Đáp án đúng là C. 「安っぽい」trông rẻ tiền.",
      "rubyQuestion": "<ruby>安物<rt>やすもの</rt></ruby>（　　）<ruby>服<rt>ふく</rt></ruby>でも、<ruby>着こ<rt>つこ</rt></ruby>なし<ruby>次第<rt>しだい</rt></ruby>でおしゃれに<ruby>見え<rt>みえ</rt></ruby>る。",
      "hintTranslation": "（......） Dù là quần áo trông có vẻ rẻ tiền nhưng khéo mặc vẫn đẹp."
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
      "explanation": "Đáp án đúng là D. Bổ nghĩa danh từ: 「NによるN」.",
      "rubyQuestion": "<ruby>不注意<rt>ふちゅうい</rt></ruby>（　　）<ruby>事故<rt>じこ</rt></ruby>を<ruby>防ぐ<rt>ふせぐ</rt></ruby>ために、<ruby>確認<rt>かくにん</rt></ruby>を<ruby>徹底<rt>てってい</rt></ruby>しましょう。",
      "hintTranslation": "（......） Để ngừa tai nạn do bất cẩn, hãy kiểm tra kỹ."
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
      "explanation": "Đáp án đúng là A. Cộng thêm khó khăn.",
      "rubyQuestion": "<ruby>人件費<rt>じんけんひ</rt></ruby>の<ruby>高騰<rt>こうとう</rt></ruby>（　　）<ruby>原材料費<rt>げんざいりょうひ</rt></ruby>の<ruby>値上がり<rt>ねあがり</rt></ruby>も、<ruby>経営<rt>けいえい</rt></ruby>を<ruby>圧迫<rt>あっぱく</rt></ruby>している。",
      "hintTranslation": "（......） Chi phí nhân công tăng cộng thêm nguyên liệu đắt gây áp lực kinh doanh."
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
      "explanation": "Đáp án đúng là D. Ngoại lệ: 「よさ」= điểm tốt, độ tốt.",
      "rubyQuestion": "<ruby>形容詞<rt>けいようし</rt></ruby>「いい（<ruby>良い<rt>よい</rt></ruby>）」を「〜さ」で<ruby>名詞化<rt>めいしか</rt></ruby>する<ruby>時<rt>とき</rt></ruby>、<ruby>正しい<rt>ただしい</rt></ruby><ruby>形<rt>かたち</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Tính từ いい biến đổi thành danh từ dạng nào?"
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
      "explanation": "Đáp án đúng là A. Lược bỏ 'て' thành に加え.",
      "rubyQuestion": "「〜に<ruby>加え<rt>くわえ</rt></ruby>て」を<ruby>文章語<rt>ぶんしょうご</rt></ruby>（<ruby>書き言葉<rt>かきことば</rt></ruby>）でより<ruby>硬く<rt>かたく</rt></ruby><ruby>表現<rt>ひょうげん</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>正しい<rt>ただしい</rt></ruby><ruby>形<rt>かたち</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Dạng văn viết trang trọng là 〜に加え."
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
      "explanation": "Đáp án đúng là A. 「子供っぽい」tính trẻ con.",
      "rubyQuestion": "いい<ruby>大人<rt>おとな</rt></ruby>のくせに、そんな<ruby>子供<rt>こども</rt></ruby>（　　）わがままを<ruby>言う<rt>いう</rt></ruby>な。",
      "hintTranslation": "（......） Người lớn rồi đừng có nhõng nhẽo trẻ con như thế."
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
      "explanation": "Đáp án đúng là D. 「やみそうもない」.",
      "rubyQuestion": "<ruby>空<rt>そら</rt></ruby>は<ruby>真っ黒<rt>まっくろ</rt></ruby>な<ruby>雲<rt>くも</rt></ruby>に<ruby>覆わ<rt>おおわ</rt></ruby>れ、<ruby>雨<rt>あめ</rt></ruby>はしばらくやみ（　　）。",
      "hintTranslation": "（......） Trời mây đen kịt, mưa trông có vẻ khó mà tạnh sớm."
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
      "explanation": "Đáp án đúng là D. 「絶滅のおそれがある」.",
      "rubyQuestion": "この<ruby>鳥<rt>とり</rt></ruby>は<ruby>生息地<rt>せいそくち</rt></ruby>が<ruby>減少<rt>げんしょう</rt></ruby>し、<ruby>絶滅<rt>ぜつめつ</rt></ruby>の（　　）があると<ruby>言わ<rt>いわ</rt></ruby>れている。",
      "hintTranslation": "Loài chim này （......） tuyệt chủng."
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
      "explanation": "Đáp án đúng là B. Bù lại khuyết điểm.",
      "rubyQuestion": "このアパートは<ruby>駅<rt>えき</rt></ruby>から<ruby>遠い<rt>とおい</rt></ruby>（　　）、<ruby>部屋<rt>へや</rt></ruby>が<ruby>広く<rt>ひろく</rt></ruby>て<ruby>家賃<rt>やちん</rt></ruby>も<ruby>安い<rt>やすい</rt></ruby>。",
      "hintTranslation": "（......） Tuy xa ga nhưng bù lại phòng rộng và giá rẻ."
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
      "explanation": "Đáp án đúng là C. 「おかげで」dùng mỉa mai trách khéo.",
      "rubyQuestion": "（<ruby>皮肉<rt>ひにく</rt></ruby>）「<ruby>君<rt>くん</rt></ruby>が<ruby>重要な<rt>じゅうような</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>を<ruby>忘れ<rt>わすれ</rt></ruby>てくれた（　　）、<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>中止<rt>ちゅうし</rt></ruby>になっちゃったよ。」",
      "hintTranslation": "(Mỉa mai) '（......） cậu quên tài liệu mà cuộc họp bị hủy luôn rồi đấy!'"
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
      "explanation": "Đáp án đúng là C. Kết quả tích cực từ lời khuyên.",
      "rubyQuestion": "<ruby>先輩<rt>せんぱい</rt></ruby>のアドバイスの（　　）、<ruby>面接<rt>めんせつ</rt></ruby>で<ruby>落ち着い<rt>おちつい</rt></ruby>て<ruby>受け答え<rt>うけこたえ</rt></ruby>ができた。",
      "hintTranslation": "（......） lời khuyên của tiền bối mà tôi đã tự tin trả lời phỏng vấn."
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
      "explanation": "Đáp án đúng là D. 「Nのせいで」.",
      "rubyQuestion": "<ruby>寝不足<rt>ねぶそく</rt></ruby>の（　　）<ruby>頭<rt>あたま</rt></ruby>がボーッとして、<ruby>仕事<rt>しごと</rt></ruby>に<ruby>集中<rt>しゅうちゅう</rt></ruby>できない。",
      "hintTranslation": "（......） thiếu ngủ nên đầu óc lơ mơ không tập trung làm việc được."
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
      "explanation": "Đáp án đúng là C. Vừa mới nghe xong.",
      "rubyQuestion": "さっき<ruby>説明<rt>せつめい</rt></ruby>を<ruby>聞い<rt>きい</rt></ruby>（　　）なのに、もう<ruby>忘れ<rt>わすれ</rt></ruby>てしまったのですか。",
      "hintTranslation": "（......） nghe giải thích lúc nãy mà giờ đã quên rồi à?"
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
      "explanation": "Đáp án đúng là D. Nguy cơ cháy nổ.",
      "rubyQuestion": "<ruby>火<rt>ひ</rt></ruby>の<ruby>不始末<rt>ふしまつ</rt></ruby>から<ruby>大規模<rt>だいきぼ</rt></ruby>な<ruby>火災<rt>かさい</rt></ruby>に<ruby>発展<rt>はってん</rt></ruby>する（　　）。",
      "hintTranslation": "Sơ suất tàn lửa （......） phát triển thành hỏa hoạn lớn."
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
      "explanation": "Đáp án đúng là D. Nhất định không đi.",
      "rubyQuestion": "あんな<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>、<ruby>頼ま<rt>たのま</rt></ruby>れたって<ruby>行く<rt>いく</rt></ruby>（　　）。",
      "hintTranslation": "（......） Nơi nguy hiểm thế dù có năn nỉ tôi cũng không thèm đi."
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
      "explanation": "Đáp án đúng là A. Văn phong trang trọng.",
      "rubyQuestion": "「〜<ruby>恐れ<rt>おそれ</rt></ruby>がある」は<ruby>主に<rt>おもに</rt></ruby>どのような<ruby>場面<rt>ばめん</rt></ruby>でよく<ruby>使わ<rt>つかわ</rt></ruby>れますか。",
      "hintTranslation": "（......） Hay gặp trong thời sự tin tức và cảnh báo công cộng."
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
      "explanation": "Đáp án đúng là C. Dù mưa cũng thi đấu.",
      "rubyQuestion": "<ruby>明日<rt>あした</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>、たとえ<ruby>雨<rt>あめ</rt></ruby>が<ruby>降っ<rt>ふっ</rt></ruby>（　　）<ruby>予定通り<rt>よていどおり</rt></ruby><ruby>決行<rt>けっこう</rt></ruby>されます。",
      "hintTranslation": "（......） trời có mưa trận đấu vẫn diễn ra đúng lịch."
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
      "explanation": "Đáp án đúng là C. Đổi ngày làm việc.",
      "rubyQuestion": "<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>出勤<rt>しゅっきん</rt></ruby>した（　　）、<ruby>月曜日<rt>げつようび</rt></ruby>に<ruby>振替休日<rt>ふりかえきゅうじつ</rt></ruby>をもらった。",
      "hintTranslation": "（......） Đi làm ngày Chủ Nhật bù lại được nghỉ bù Thứ Hai."
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
      "explanation": "Đáp án đúng là A. 「黒っぽい」hơi đen.",
      "rubyQuestion": "<ruby>黒<rt>くろ</rt></ruby>（　　）ジャケットを<ruby>羽織<rt>はおり</rt></ruby>って<ruby>出勤<rt>しゅっきん</rt></ruby>した。",
      "hintTranslation": "（......） Mặc áo khoác màu hơi ngả đen đi làm."
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
      "explanation": "Đáp án đúng là D. 「〜とは限らない」chưa chắc là.",
      "rubyQuestion": "<ruby>値段<rt>ねだん</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>ものが、<ruby>必ずしも<rt>かならずしも</rt></ruby><ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>良い<rt>よい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Đồ đắt tiền chưa chắc chất lượng đã tốt."
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
      "explanation": "Đáp án đúng là D. Dù bị phản đối.",
      "rubyQuestion": "<ruby>親<rt>おや</rt></ruby>に<ruby>反対<rt>はんたい</rt></ruby>され（　　）、<ruby>私<rt>わたし</rt></ruby>は<ruby>海外留学<rt>かいがいりゅうがく</rt></ruby>を<ruby>決意<rt>けつい</rt></ruby>した。",
      "hintTranslation": "（......） bị cha mẹ phản đối tôi vẫn quyết tâm du học."
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
      "explanation": "Đáp án đúng là B. Yếu tố dồn thêm.",
      "rubyQuestion": "<ruby>今週<rt>こんしゅう</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>の<ruby>忙しさ<rt>いそがしさ</rt></ruby>（　　）<ruby>寝不足<rt>ねぶそく</rt></ruby>も<ruby>重なり<rt>かさなり</rt></ruby>、ひどく<ruby>疲れ<rt>つかれ</rt></ruby>ている。",
      "hintTranslation": "（......） Bận rộn việc cộng thêm thiếu ngủ khiến tôi kiệt sức."
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
      "explanation": "Đáp án đúng là C. Bất khả thi.",
      "rubyQuestion": "<ruby>一人<rt>ひとり</rt></ruby>でこの<ruby>重い<rt>おもい</rt></ruby>ピアノを<ruby>持ち<rt>もち</rt></ruby><ruby>上げ<rt>あげ</rt></ruby>られる（　　）。<ruby>手伝っ<rt>てつだっ</rt></ruby>てくれ。",
      "hintTranslation": "（......） Một mình nâng sao nổi cây đàn piano này! Giúp tôi với."
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
      "explanation": "Đáp án đúng là C. Không hẳn là.",
      "rubyQuestion": "<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>大学<rt>だいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>したからといって、<ruby>良い<rt>よい</rt></ruby><ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>入れ<rt>いれ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Tốt nghiệp đại học danh tiếng chưa chắc vào được công ty tốt."
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
      "explanation": "Đáp án đúng là A. Dù mất thời gian.",
      "rubyQuestion": "たとえ<ruby>時間<rt>じかん</rt></ruby>がかかっ（　　）、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>力<rt>ちから</rt></ruby>で<ruby>最後<rt>さいご</rt></ruby>までやり<ruby>遂げ<rt>とげ</rt></ruby>たい。",
      "hintTranslation": "（......） có tốn thời gian tôi muốn tự sức hoàn thành."
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
      "explanation": "Đáp án đúng là A. 「普通形 + 一方で」nêu 2 mặt đối lập.",
      "rubyQuestion": "<ruby>都会<rt>とかい</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>は<ruby>便利<rt>べんり</rt></ruby>な（　　）、<ruby>生活費<rt>せいかつひ</rt></ruby>が<ruby>高く<rt>たかく</rt></ruby>ストレスも<ruby>多い<rt>おおい</rt></ruby>。",
      "hintTranslation": "（......） Cuộc sống thành thị tiện lợi nhưng chi phí đắt đỏ."
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
      "explanation": "Đáp án đúng là B. Thay thế nguyên liệu.",
      "rubyQuestion": "<ruby>砂糖<rt>さとう</rt></ruby>の（　　）ハチミツを<ruby>使って<rt>つかって</rt></ruby>、<ruby>低<rt>てい</rt></ruby>カロリーのお<ruby>菓子<rt>かし</rt></ruby>を<ruby>作っ<rt>つくっ</rt></ruby>た。",
      "hintTranslation": "Dùng mật ong （......） đường để làm bánh ít calo."
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
      "explanation": "Đáp án đúng là A. VことはVが.",
      "rubyQuestion": "<ruby>読め<rt>よめ</rt></ruby>る（　　）<ruby>読め<rt>よめ</rt></ruby>るが、<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>説明す<rt>せつめいす</rt></ruby>るのは<ruby>難しい<rt>むずかしい</rt></ruby>。",
      "hintTranslation": "（......） Đọc thì đọc được đấy nhưng giải thích nghĩa chữ Hán thì khó."
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
      "explanation": "Đáp án đúng là C. Nguy cơ an ninh mạng.",
      "rubyQuestion": "パスワードを<ruby>簡単<rt>かんたん</rt></ruby>にすると、<ruby>不正<rt>ふせい</rt></ruby>アクセスの<ruby>被害<rt>ひがい</rt></ruby>に<ruby>遭う<rt>あう</rt></ruby>（　　）。",
      "hintTranslation": "Đặt mật khẩu dễ đoán （......） bị tấn công tài khoản."
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
      "explanation": "Đáp án đúng là C. 「Vタ形 + ばかり」vừa mới xong.",
      "rubyQuestion": "<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>来<rt>らい</rt></ruby>（　　）の<ruby>頃<rt>ごろ</rt></ruby>は、<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>乗り換え<rt>のりかえ</rt></ruby>さえ<ruby>難しか<rt>むずかしか</rt></ruby>った。",
      "hintTranslation": "Hồi （......） sang Nhật, đổi tàu cũng thấy khó."
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
      "explanation": "Đáp án đúng là B. Tuyệt đối không đầu hàng.",
      "rubyQuestion": "あんな<ruby>強い<rt>つよい</rt></ruby><ruby>相手<rt>あいて</rt></ruby>に、<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>負け<rt>まけ</rt></ruby>てたまる（　　）。<ruby>最後<rt>さいご</rt></ruby>まで<ruby>戦う<rt>たたかう</rt></ruby>ぞ！",
      "hintTranslation": "（......） Trước đối thủ mạnh đời nào ta chịu thua dễ thế! Chiến đấu tới cùng!"
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
      "explanation": "Đáp án đúng là B. Vừa mới sinh ra.",
      "rubyQuestion": "<ruby>生まれ<rt>うまれ</rt></ruby>て（　　）の<ruby>赤ちゃん<rt>あかちゃん</rt></ruby>を<ruby>抱っこ<rt>だっこ</rt></ruby>させてもらった。",
      "hintTranslation": "Tôi được bế em bé （......） chào đời."
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
      "explanation": "Đáp án đúng là C. Công nhận khả năng mua.",
      "rubyQuestion": "<ruby>買え<rt>かえ</rt></ruby>る（　　）<ruby>買え<rt>かえ</rt></ruby>るが、<ruby>今月<rt>こんげつ</rt></ruby>の<ruby>予算<rt>よさん</rt></ruby>をオーバーしてしまう。",
      "hintTranslation": "（......） Mua thì mua được nhưng vượt quá ngân sách tháng này."
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
      "explanation": "Đáp án đúng là C. 「V辞書形 + ごとに」: cứ mỗi lần gặp.",
      "rubyQuestion": "あの<ruby>人<rt>にん</rt></ruby>は<ruby>会う<rt>あう</rt></ruby>（　　）<ruby>新しい<rt>あたらしい</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>着て<rt>きて</rt></ruby>いて、とてもおしゃれだ。",
      "hintTranslation": "Người đó （......） gặp lại mặc đồ mới."
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
      "explanation": "Đáp án đúng là B. Chưa hẳn đúng mọi lúc.",
      "rubyQuestion": "<ruby>辞書<rt>じしょ</rt></ruby>に<ruby>載っ<rt>のっ</rt></ruby>ている<ruby>意味<rt>いみ</rt></ruby>が、すべての<ruby>文脈<rt>ぶんみゃく</rt></ruby>に<ruby>当て<rt>あて</rt></ruby>はまる（　　）。",
      "hintTranslation": "（......） Nghĩa trong từ điển chưa chắc đúng mọi ngữ cảnh."
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
      "explanation": "Đáp án đúng là C. Hậu quả tiêu cực do mưa.",
      "rubyQuestion": "<ruby>大雨<rt>おおあめ</rt></ruby>の（　　）<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>運転<rt>うんてん</rt></ruby>を<ruby>見合わ<rt>みあわ</rt></ruby>せ、<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>遅刻<rt>ちこく</rt></ruby>した。",
      "hintTranslation": "（......） mưa lớn nên tàu dừng chạy, tôi bị muộn làm."
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
      "explanation": "Đáp án đúng là C. Dù thành công.",
      "rubyQuestion": "あの<ruby>計画<rt>けいかく</rt></ruby>が<ruby>成功<rt>せいこう</rt></ruby>した（　　）、<ruby>莫大<rt>ばくだい</rt></ruby>な<ruby>費用<rt>ひよう</rt></ruby>がかかるので<ruby>現実的<rt>げんじつてき</rt></ruby>ではない。",
      "hintTranslation": "Kế hoạch （......） có thành công thì quá tốn kém nên không khả thi."
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
      "explanation": "Đáp án đúng là A. 「発表されるごとに」: cứ mỗi lần được công bố.",
      "rubyQuestion": "テストの<ruby>点数<rt>てんすう</rt></ruby>が<ruby>発表<rt>はっぴょう</rt></ruby>される（　　）、クラス<ruby>中<rt>なか</rt></ruby>が<ruby>一喜一憂<rt>いっきいちゆう</rt></ruby>している。",
      "hintTranslation": "（......） công bố điểm thi, cả lớp lại hồi hộp vui buồn."
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
      "explanation": "Đáp án đúng là C. 「V辞書形 + ごとに」: cứ mỗi lần...",
      "rubyQuestion": "<ruby>失敗<rt>しっぱい</rt></ruby>する（　　）<ruby>改善点<rt>かいぜんてん</rt></ruby>を<ruby>見つ<rt>みつ</rt></ruby>けていけば、<ruby>必ず<rt>かならず</rt></ruby><ruby>成長<rt>せいちょう</rt></ruby>できる。",
      "hintTranslation": "（......） thất bại nếu tìm ra điểm khắc phục thì sẽ trưởng thành."
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
      "explanation": "Đáp án đúng là A. Mức độ cực đoan: đến cả ăn cũng không kịp.",
      "rubyQuestion": "<ruby>今日は<rt>こんにちは</rt></ruby><ruby>朝<rt>あさ</rt></ruby>から<ruby>忙しす<rt>いそがしす</rt></ruby>ぎて、<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>めし</rt></ruby>を<ruby>食べ<rt>たべ</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>（　　）なかった。",
      "hintTranslation": "Bận quá （......） thời gian ăn trưa cũng không có."
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
      "explanation": "Đáp án đúng là A. Nの + わけがない.",
      "rubyQuestion": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>昨日<rt>きのう</rt></ruby><ruby>東京<rt>とうきょう</rt></ruby>にいた<ruby>証拠<rt>しょうこ</rt></ruby>があるのだから、<ruby>犯人<rt>はんにん</rt></ruby>の（　　）。",
      "hintTranslation": "Có chứng cứ hôm qua anh ấy ở Tokyo thì （......） là thủ phạm được!"
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
      "explanation": "Đáp án đúng là D. Khó thắng được.",
      "rubyQuestion": "<ruby>相手<rt>あいて</rt></ruby>はプロの<ruby>選手<rt>せんしゅ</rt></ruby>だから、<ruby>初心者<rt>しょしんしゃ</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>が<ruby>勝て<rt>かて</rt></ruby>（　　）。",
      "hintTranslation": "（......） Đối thủ là tuyển thủ chuyên nghiệp, tôi khó mà thắng nổi."
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
      "explanation": "Đáp án đúng là D. Đến cả nước cũng không nuốt nổi.",
      "rubyQuestion": "<ruby>喉<rt>のど</rt></ruby>が<ruby>痛く<rt>いたく</rt></ruby>て、<ruby>水<rt>みず</rt></ruby>（　　）<ruby>飲み込む<rt>のみこむ</rt></ruby>のがつらい。",
      "hintTranslation": "Họng đau đến mức （......） nước uống nuốt xuống cũng thấy buốt."
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
      "explanation": "Đáp án đúng là D. Đi kèm 必ずしも.",
      "rubyQuestion": "「〜とは<ruby>限ら<rt>かぎら</rt></ruby>ない」と<ruby>一緒に<rt>いっしょに</rt></ruby>よく<ruby>使わ<rt>つかわ</rt></ruby>れる<ruby>副詞<rt>ふくし</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Phó từ hay đi kèm là 必ずしも."
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
      "explanation": "Đáp án đúng là B. Cấu trúc lặp từ 「VことはVが」.",
      "rubyQuestion": "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>話せ<rt>はなせ</rt></ruby>る（　　）<ruby>話せ<rt>はなせ</rt></ruby>ますが、<ruby>日常会話<rt>にちじょうかいわ</rt></ruby>レベルです。",
      "hintTranslation": "Nói thì nói được （......） chỉ mức cơ bản."
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
      "explanation": "Đáp án đúng là B. Dù lương cao.",
      "rubyQuestion": "どんなに<ruby>給料<rt>きゅうりょう</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>（　　）、<ruby>残業<rt>ざんぎょう</rt></ruby>ばかりのブラック<ruby>企業<rt>きぎょう</rt></ruby>では<ruby>働き<rt>はたらき</rt></ruby>たくない。",
      "hintTranslation": "（......） lương có cao tôi cũng không làm công ty bóc lột tăng ca."
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
      "explanation": "Đáp án đúng là D. Chỉ phương pháp, cách thức.",
      "rubyQuestion": "<ruby>定期的<rt>ていきてき</rt></ruby>な<ruby>運動<rt>うんどう</rt></ruby>（　　）、<ruby>健康<rt>けんこう</rt></ruby>を<ruby>維持す<rt>いじす</rt></ruby>ることができます。",
      "hintTranslation": "（......） Bằng việc vận động định kỳ có thể giữ gìn sức khỏe."
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
      "explanation": "Đáp án đúng là C. Đối lập giữa 2 đối tượng.",
      "rubyQuestion": "<ruby>円安<rt>えんやす</rt></ruby>で<ruby>輸出<rt>ゆしゅつ</rt></ruby><ruby>企業<rt>きぎょう</rt></ruby>が<ruby>利益<rt>りえき</rt></ruby>を<ruby>上げ<rt>あげ</rt></ruby>る（　　）、<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>企業<rt>きぎょう</rt></ruby>は<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>直面<rt>ちょくめん</rt></ruby>している。",
      "hintTranslation": "（......） Đồng Yên giảm giúp doanh nghiệp xuất khẩu có lãi nhưng doanh nghiệp nhập khẩu gặp khó."
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
      "explanation": "Đáp án đúng là D. Đối lập giữa 2 xu hướng trái chiều.",
      "rubyQuestion": "<ruby>電子<rt>でんし</rt></ruby><ruby>書籍<rt>しょせき</rt></ruby>の<ruby>利用者<rt>りようしゃ</rt></ruby>が<ruby>増え<rt>ふえ</rt></ruby>ている（　　）、<ruby>紙<rt>かみ</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>の<ruby>売り上げ<rt>うりあげ</rt></ruby>は<ruby>減少<rt>げんしょう</rt></ruby>している。",
      "hintTranslation": "（......） Người dùng sách điện tử tăng trong khi sách giấy giảm."
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
      "explanation": "Đáp án đúng là C. Không từ bỏ.",
      "rubyQuestion": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>をこんなところで<ruby>諦め<rt>あきらめ</rt></ruby>てたまる（　　）。",
      "hintTranslation": "（......） Đời nào tôi chịu bỏ cuộc ước mơ ở nơi thế này!"
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
      "explanation": "Đáp án đúng là A. Ai mà thèm tin.",
      "rubyQuestion": "あんな<ruby>嘘つき<rt>うそつき</rt></ruby>の<ruby>言う<rt>いう</rt></ruby>ことなんて、<ruby>誰が<rt>だれが</rt></ruby><ruby>信じ<rt>しんじ</rt></ruby>る（　　）！",
      "hintTranslation": "（......） Lời tên nói dối đó thì ai mà tin cho được!"
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
      "explanation": "Đáp án đúng là B. Thêm điểm cộng.",
      "rubyQuestion": "<ruby>観光地<rt>かんこうち</rt></ruby>としての<ruby>魅力<rt>みりょく</rt></ruby>（　　）、<ruby>交通<rt>こうつう</rt></ruby>の<ruby>便<rt>びん</rt></ruby>の<ruby>良さ<rt>よさ</rt></ruby>も<ruby>人気<rt>にんき</rt></ruby>の<ruby>理由<rt>りゆう</rt></ruby>だ。",
      "hintTranslation": "Sức hút du lịch （......） giao thông thuận tiện tạo nên sự nổi tiếng."
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
      "explanation": "Đáp án đúng là D. Dù là sự thật.",
      "rubyQuestion": "<ruby>仮に<rt>かりに</rt></ruby>その<ruby>話<rt>はなし</rt></ruby>が<ruby>本当<rt>ほんとう</rt></ruby>だ（　　）、<ruby>彼<rt>かれ</rt></ruby>を<ruby>許す<rt>ゆるす</rt></ruby>ことはできない。",
      "hintTranslation": "（......） chuyện đó là thật tôi cũng không tha thứ cho anh ấy."
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
      "explanation": "Đáp án đúng là A. Ước nguyện thời tiết.",
      "rubyQuestion": "<ruby>明日<rt>あした</rt></ruby>から<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行く<rt>いく</rt></ruby>ので、<ruby>天気<rt>てんき</rt></ruby>が<ruby>晴れ<rt>はれ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Mai đi du lịch nên mong sao trời sẽ nắng ráo."
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
      "explanation": "Đáp án đúng là A. Khuyên nên làm gì.",
      "rubyQuestion": "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になりたかったら、<ruby>恥ずかし<rt>はずかし</rt></ruby>がらずに<ruby>話す<rt>はなす</rt></ruby>（　　）。",
      "hintTranslation": "Muốn giỏi tiếng Nhật thì nên mạnh dạn nói （......） ngại."
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
      "explanation": "Đáp án đúng là A. Mong ước.",
      "rubyQuestion": "<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>記念日<rt>きねんび</rt></ruby>だから、<ruby>二人<rt>ふたり</rt></ruby>でゆっくり<ruby>過ご<rt>すご</rt></ruby>し（　　）。",
      "hintTranslation": "（......） Ngày kỷ niệm quan trọng nên muốn cả hai bên nhau trọn vẹn."
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
      "explanation": "Đáp án đúng là D. So sánh tỉ lệ đối lập.",
      "rubyQuestion": "<ruby>賛成意見<rt>さんせいいけん</rt></ruby>が６<ruby>割<rt>わり</rt></ruby>なの（　　）、<ruby>反対意見<rt>はんたいいけん</rt></ruby>は４<ruby>割<rt>わり</rt></ruby>にとどまった。",
      "hintTranslation": "（......） ý kiến tán thành chiếm 60%, phản đối chiếm 40%."
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
      "explanation": "Đáp án đúng là B. 「V辞書形こと + さえ」.",
      "rubyQuestion": "<ruby>足<rt>あし</rt></ruby>の<ruby>痛み<rt>いたみ</rt></ruby>がひどくて、<ruby>立つ<rt>たつ</rt></ruby>こと（　　）できない<ruby>状態<rt>じょうたい</rt></ruby>だ。",
      "hintTranslation": "Chân đau dữ dội, （......） việc đứng cũng không làm được."
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
      "explanation": "Đáp án đúng là A. 「Vないことだ」khuyên không nên.",
      "rubyQuestion": "<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>したいなら、<ruby>毎日<rt>まいにち</rt></ruby><ruby>復習<rt>ふくしゅう</rt></ruby>を<ruby>怠ら<rt>おこたら</rt></ruby>（　　）。",
      "hintTranslation": "Muốn thi đỗ thì tốt nhất （......） lơ là ôn tập."
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
      "explanation": "Đáp án đúng là B. Bổ nghĩa danh từ: 「〜に対するN」.",
      "rubyQuestion": "<ruby>環境問題<rt>かんきょうもんだい</rt></ruby>（　　）<ruby>関心<rt>かんしん</rt></ruby>が<ruby>世界中<rt>せかいじゅう</rt></ruby>で<ruby>高ま<rt>たかま</rt></ruby>っている。",
      "hintTranslation": "Sự quan tâm （......） môi trường đang tăng lên."
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
      "explanation": "Đáp án đúng là A. Phương tiện / cách thức.",
      "rubyQuestion": "インターネット（　　）、<ruby>世界中<rt>せかいじゅう</rt></ruby>のニュースが<ruby>瞬時<rt>しゅんじ</rt></ruby>に<ruby>伝わ<rt>つたわ</rt></ruby>る。",
      "hintTranslation": "（......） Nhờ có internet, tin tức toàn cầu truyền đi chớp mắt."
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
      "explanation": "Đáp án đúng là C. 「Vないでほしい」mong đừng làm.",
      "rubyQuestion": "この<ruby>件<rt>けん</rt></ruby>については、<ruby>他の<rt>ほかの</rt></ruby><ruby>人<rt>にん</rt></ruby>には<ruby>誰<rt>だれ</rt></ruby>にも<ruby>言わ<rt>いわ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Mong bạn đừng nói việc này cho ai biết."
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
      "explanation": "Đáp án đúng là D. Khuyên bảo lối sống.",
      "rubyQuestion": "<ruby>健康<rt>けんこう</rt></ruby>で<ruby>長生き<rt>ながいき</rt></ruby>したければ、<ruby>規則正し<rt>きそくただし</rt></ruby>い<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>送る<rt>おくる</rt></ruby>（　　）。",
      "hintTranslation": "Muốn sống lâu khỏe mạnh thì （......） sinh hoạt điều độ."
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
      "explanation": "Đáp án đúng là B. Rét cộng tuyết lớn.",
      "rubyQuestion": "<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>寒さ<rt>さむさ</rt></ruby>（　　）<ruby>大雪<rt>おおゆき</rt></ruby>に<ruby>見舞<rt>みまい</rt></ruby>われ、<ruby>交通網<rt>こうつうもう</rt></ruby>が<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>麻痺<rt>まひ</rt></ruby>した。",
      "hintTranslation": "（......） Rét đậm cộng thêm tuyết rơi dày khiến giao thông tê liệt."
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
      "explanation": "Đáp án đúng là D. Nguyên nhân gây thiệt hại.",
      "rubyQuestion": "<ruby>景気<rt>けいき</rt></ruby>が<ruby>悪い<rt>わるい</rt></ruby>（　　）ボーナスが<ruby>大幅<rt>おおはば</rt></ruby>にカットされた。",
      "hintTranslation": "（......） kinh tế kém nên tiền thưởng bị cắt."
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
      "explanation": "Đáp án đúng là D. 「N + によって」= tùy vào.",
      "rubyQuestion": "<ruby>文化<rt>ぶんか</rt></ruby>や<ruby>習慣<rt>しゅうかん</rt></ruby>は、<ruby>国<rt>くに</rt></ruby>（　　）<ruby>大きく<rt>おおきく</rt></ruby><ruby>異な<rt>ことな</rt></ruby>ります。",
      "hintTranslation": "（......） Văn hóa khác nhau tùy theo mỗi quốc gia."
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
      "explanation": "Đáp án đúng là A. Dù thất bại.",
      "rubyQuestion": "どんなに<ruby>失敗<rt>しっぱい</rt></ruby>し（　　）、そこから<ruby>学べ<rt>まなべ</rt></ruby>ば<ruby>無駄<rt>むだ</rt></ruby>にはならない。",
      "hintTranslation": "（......） thất bại thế nào nếu học hỏi được thì không vô ích."
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
      "explanation": "Đáp án đúng là C. Thay đổi hình thức trả tiền.",
      "rubyQuestion": "<ruby>現金<rt>げんきん</rt></ruby>で<ruby>支払う<rt>しはらう</rt></ruby>（　　）、<ruby>電子<rt>でんし</rt></ruby>マネーで<ruby>決済<rt>けっさい</rt></ruby>するとポイントが<ruby>付く<rt>つく</rt></ruby>。",
      "hintTranslation": "（......） trả tiền mặt, thanh toán ví điện tử sẽ được điểm."
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
      "explanation": "Đáp án đúng là B. Ngay cả việc tối thiểu.",
      "rubyQuestion": "<ruby>忙しす<rt>いそがしす</rt></ruby>ぎて、<ruby>家族<rt>かぞく</rt></ruby>と<ruby>電話<rt>でんわ</rt></ruby>で<ruby>話す<rt>はなす</rt></ruby><ruby>時間<rt>じかん</rt></ruby>（　　）<ruby>取れ<rt>とれ</rt></ruby>ない。",
      "hintTranslation": "（......） Quá bận rộn, đến thời gian gọi điện cho gia đình cũng không thu xếp được."
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
      "explanation": "Đáp án đúng là A. Tính từ đuôi na: 便利なことは便利だが.",
      "rubyQuestion": "<ruby>便利<rt>べんり</rt></ruby>な（　　）<ruby>便利<rt>べんり</rt></ruby>だが、<ruby>使い<rt>つかい</rt></ruby>こなすまでに<ruby>練習<rt>れんしゅう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。",
      "hintTranslation": "Tiện thì tiện （......） cần luyện tập mới quen dùng."
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
      "explanation": "Đáp án đúng là B. Thiên tai chồng chất.",
      "rubyQuestion": "<ruby>台風<rt>たいふう</rt></ruby>の<ruby>被害<rt>ひがい</rt></ruby>（　　）、<ruby>地震<rt>じしん</rt></ruby>まで<ruby>発生<rt>はっせい</rt></ruby>して<ruby>現地<rt>げんち</rt></ruby>は<ruby>混乱<rt>こんらん</rt></ruby>している。",
      "hintTranslation": "Bị bão tàn phá （......） động đất xảy ra khiến hiện trường hỗn loạn."
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
      "explanation": "Đáp án đúng là D. Đối lập thời tiết 2 ngày.",
      "rubyQuestion": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>猛暑<rt>もうしょ</rt></ruby>（　　）、<ruby>今日は<rt>こんにちは</rt></ruby><ruby>急に<rt>きゅうに</rt></ruby><ruby>気温<rt>きおん</rt></ruby>が<ruby>下が<rt>さが</rt></ruby>って<ruby>肌寒い<rt>はださむい</rt></ruby>。",
      "hintTranslation": "（......） cái nóng gay gắt hôm qua, hôm nay lạnh se se."
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
      "explanation": "Đáp án đúng là B. 「である一方で」nêu 2 vai trò song song.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby><ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>研究者<rt>けんきゅうしゃ</rt></ruby>である（　　）、<ruby>大学<rt>だいがく</rt></ruby>で<ruby>学生<rt>がくせい</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>る<ruby>教育者<rt>きょういくしゃ</rt></ruby>でもある。",
      "hintTranslation": "（......） Anh ấy vừa là nhà nghiên cứu giỏi vừa là nhà giáo dục."
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
      "explanation": "Đáp án đúng là C. Nguy cơ sóng thần.",
      "rubyQuestion": "<ruby>地震<rt>じしん</rt></ruby>の<ruby>後<rt>のち</rt></ruby>は、<ruby>津波<rt>つなみ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>する（　　）ので<ruby>避難<rt>ひなん</rt></ruby>してください。",
      "hintTranslation": "Sau động đất （......） sóng thần nên hãy sơ tán."
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
      "explanation": "Đáp án đúng là D. Phủ định mỉa mai.",
      "rubyQuestion": "「あの<ruby>映画<rt>えいが</rt></ruby>、<ruby>面白か<rt>おもしろか</rt></ruby>った？」「<ruby>面白か<rt>おもしろか</rt></ruby>った（　　）。<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>寝ち<rt>ねち</rt></ruby>ゃったよ。」",
      "hintTranslation": "（......） Hay nỗi gì! Tôi ngủ gật giữa chừng luôn đấy."
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
      "explanation": "Đáp án đúng là C. Chưa chắc ổn định.",
      "rubyQuestion": "<ruby>大手<rt>おおて</rt></ruby><ruby>企業<rt>きぎょう</rt></ruby>だからといって、<ruby>将来<rt>しょうらい</rt></ruby>ずっと<ruby>安定<rt>あんてい</rt></ruby>している（　　）。",
      "hintTranslation": "（......） Doanh nghiệp lớn chưa hẳn tương lai đã mãi ổn định."
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
      "explanation": "Đáp án đúng là C. Kết quả điều trị tốt.",
      "rubyQuestion": "<ruby>薬<rt>くすり</rt></ruby>を<ruby>早め<rt>はやめ</rt></ruby>に<ruby>飲ん<rt>のん</rt></ruby>だ（　　）、ひどくならずに<ruby>風邪<rt>かぜ</rt></ruby>が<ruby>治っ<rt>なおっ</rt></ruby>た。",
      "hintTranslation": "（......） uống thuốc sớm nên cảm cúm đã khỏi không bị nặng."
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
      "explanation": "Đáp án đúng là C. Dù mất thời gian.",
      "rubyQuestion": "たとえ<ruby>時間<rt>じかん</rt></ruby>がかかっ（　　）、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>力<rt>ちから</rt></ruby>で<ruby>最後<rt>さいご</rt></ruby>までやり<ruby>遂げ<rt>とげ</rt></ruby>たい。",
      "hintTranslation": "（......） có tốn thời gian tôi muốn tự sức hoàn thành."
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
      "explanation": "Đáp án đúng là C. 「他人のせいにする」: đổ lỗi cho người khác.",
      "rubyQuestion": "<ruby>何で<rt>なんで</rt></ruby>も<ruby>他人<rt>たにん</rt></ruby>の（　　）にするのは、<ruby>大人<rt>おとな</rt></ruby>の<ruby>態度<rt>たいど</rt></ruby>とは<ruby>言え<rt>いえ</rt></ruby>ない。",
      "hintTranslation": "（......） Đổ lỗi cho người khác không phải thái độ người lớn."
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
      "explanation": "Đáp án đúng là D. 「N + ごとに」mang nghĩa phân chia 'từng... một'.",
      "rubyQuestion": "<ruby>先生<rt>せんせい</rt></ruby>：「それでは<ruby>今か<rt>いまか</rt></ruby>ら、５<ruby>人<rt>にん</rt></ruby>（　　）のグループに<ruby>分か<rt>わか</rt></ruby>れてください。」",
      "hintTranslation": "（......） Thầy giáo: 'Hãy chia thành nhóm 5 người một nhé.'"
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
      "explanation": "Đáp án đúng là D. 「〜恐れがある」nguy cơ xấu.",
      "rubyQuestion": "<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近し<rt>せっきんし</rt></ruby>ているため、<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>河川<rt>かせん</rt></ruby>の<ruby>氾濫<rt>はんらん</rt></ruby>の（　　）。",
      "hintTranslation": "Bão đến gần （......） nước sông tràn bờ."
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
      "explanation": "Đáp án đúng là D. Văn phong trang trọng.",
      "rubyQuestion": "「〜<ruby>恐れ<rt>おそれ</rt></ruby>がある」は<ruby>主に<rt>おもに</rt></ruby>どのような<ruby>場面<rt>ばめん</rt></ruby>でよく<ruby>使わ<rt>つかわ</rt></ruby>れますか。",
      "hintTranslation": "（......） Hay gặp trong thời sự tin tức và cảnh báo công cộng."
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
      "explanation": "Đáp án đúng là D. Chưa chắc hợp miệng.",
      "rubyQuestion": "<ruby>人気<rt>にんき</rt></ruby>のある<ruby>店<rt>みせ</rt></ruby>だからといって、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>口<rt>くち</rt></ruby>に<ruby>合う<rt>あう</rt></ruby>（　　）。",
      "hintTranslation": "（......） Quán đông khách chưa chắc đã hợp khẩu vị mình."
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
      "explanation": "Đáp án đúng là C. Mong ước cho con cái.",
      "rubyQuestion": "<ruby>親<rt>おや</rt></ruby>としては、<ruby>子供<rt>こども</rt></ruby>に<ruby>健康<rt>けんこう</rt></ruby>で<ruby>幸せ<rt>しあわせ</rt></ruby>に<ruby>育っ<rt>そだっ</rt></ruby>（　　）ものだ。",
      "hintTranslation": "（......） Là cha mẹ thì luôn mong con lớn lên khỏe mạnh hạnh phúc."
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
      "explanation": "Đáp án đúng là A. Dù là sự thật.",
      "rubyQuestion": "<ruby>仮に<rt>かりに</rt></ruby>その<ruby>話<rt>はなし</rt></ruby>が<ruby>本当<rt>ほんとう</rt></ruby>だ（　　）、<ruby>彼<rt>かれ</rt></ruby>を<ruby>許す<rt>ゆるす</rt></ruby>ことはできない。",
      "hintTranslation": "（......） chuyện đó là thật tôi cũng không tha thứ cho anh ấy."
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
      "explanation": "Đáp án đúng là B. Tùy thuộc vào mỗi người.",
      "rubyQuestion": "<ruby>人<rt>にん</rt></ruby>（　　）<ruby>味<rt>あじ</rt></ruby>の<ruby>好み<rt>このみ</rt></ruby>が<ruby>違う<rt>ちがう</rt></ruby>のは<ruby>当たり前<rt>あたりまえ</rt></ruby>のことだ。",
      "hintTranslation": "（......） Tùy mỗi người mà khẩu vị khác nhau là điều hiển nhiên."
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
      "explanation": "Đáp án đúng là A. 「面白さ」.",
      "rubyQuestion": "この<ruby>小説<rt>しょうせつ</rt></ruby>の<ruby>面白<rt>おもしろ</rt></ruby>（　　）は、<ruby>読んだ<rt>よんだ</rt></ruby><ruby>人<rt>にん</rt></ruby>にしか<ruby>分か<rt>わか</rt></ruby>らない。",
      "hintTranslation": "（......） Độ thú vị của tiểu thuyết này chỉ ai đọc mới hiểu."
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
      "explanation": "Đáp án đúng là A. Mong người khác hiểu.",
      "rubyQuestion": "<ruby>私<rt>わたし</rt></ruby>の<ruby>気持ち<rt>きもち</rt></ruby>をもう<ruby>少し<rt>すこし</rt></ruby><ruby>理解<rt>りかい</rt></ruby>し（　　）と<ruby>思い<rt>おもい</rt></ruby>ます。",
      "hintTranslation": "（......） Tôi mong bạn thấu hiểu cho tâm trạng của tôi một chút."
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
      "explanation": "Đáp án đúng là C. Đối lập giữa 2 xu hướng trái chiều.",
      "rubyQuestion": "<ruby>電子<rt>でんし</rt></ruby><ruby>書籍<rt>しょせき</rt></ruby>の<ruby>利用者<rt>りようしゃ</rt></ruby>が<ruby>増え<rt>ふえ</rt></ruby>ている（　　）、<ruby>紙<rt>かみ</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>の<ruby>売り上げ<rt>うりあげ</rt></ruby>は<ruby>減少<rt>げんしょう</rt></ruby>している。",
      "hintTranslation": "（......） Người dùng sách điện tử tăng trong khi sách giấy giảm."
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
      "explanation": "Đáp án đúng là B. 「Vタ形 + ばかり」vừa mới xong.",
      "rubyQuestion": "<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>来<rt>らい</rt></ruby>（　　）の<ruby>頃<rt>ごろ</rt></ruby>は、<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>乗り換え<rt>のりかえ</rt></ruby>さえ<ruby>難しか<rt>むずかしか</rt></ruby>った。",
      "hintTranslation": "Hồi （......） sang Nhật, đổi tàu cũng thấy khó."
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
      "explanation": "Đáp án đúng là C. 「水っぽい」loãng, nhiều nước.",
      "rubyQuestion": "このスープは<ruby>水<rt>みず</rt></ruby>（　　）て、あまり<ruby>美味しく<rt>おいしく</rt></ruby>ない。",
      "hintTranslation": "Món súp này （......） (loãng toẹt), không ngon."
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
      "explanation": "Đáp án đúng là D. Khó leo nổi dốc.",
      "rubyQuestion": "<ruby>古い<rt>ふるい</rt></ruby><ruby>車<rt>くるま</rt></ruby>なので、<ruby>急な<rt>きゅうな</rt></ruby><ruby>坂道<rt>さかみち</rt></ruby>を<ruby>登り<rt>のぼり</rt></ruby><ruby>切れ<rt>きれ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Xe cũ nên dốc đứng thế này trông khó mà leo hết nổi."
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
      "explanation": "Đáp án đúng là D. 「N + ごとに」chỉ chu kỳ lặp lại 'cứ mỗi... lại...'.",
      "rubyQuestion": "オリンピックは４<ruby>年<rt>ねん</rt></ruby>（　　）<ruby>開催<rt>かいさい</rt></ruby>される<ruby>世界的<rt>せかいてき</rt></ruby>なスポーツの<ruby>祭典<rt>さいてん</rt></ruby>です。",
      "hintTranslation": "（......） Thế vận hội Olympic được tổ chức 4 năm một lần."
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
      "explanation": "Đáp án đúng là A. Lặp lại động từ.",
      "rubyQuestion": "<ruby>車<rt>くるま</rt></ruby>を<ruby>運転<rt>うんてん</rt></ruby>できる（　　）できますが、<ruby>高速道路<rt>こうそくどうろ</rt></ruby>は<ruby>怖く<rt>こわく</rt></ruby>て<ruby>走れ<rt>はしれ</rt></ruby>ません。",
      "hintTranslation": "Lái xe thì lái được （......） đường cao tốc thì không dám đi."
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
      "explanation": "Đáp án đúng là A. 「Vないことだ」khuyên không nên.",
      "rubyQuestion": "<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>したいなら、<ruby>毎日<rt>まいにち</rt></ruby><ruby>復習<rt>ふくしゅう</rt></ruby>を<ruby>怠ら<rt>おこたら</rt></ruby>（　　）。",
      "hintTranslation": "Muốn thi đỗ thì tốt nhất （......） lơ là ôn tập."
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
      "explanation": "Đáp án đúng là D. Phủ định khả năng xảy ra.",
      "rubyQuestion": "こんなに<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>計算<rt>けいさん</rt></ruby>、<ruby>大学生<rt>だいがくせい</rt></ruby>の<ruby>彼<rt>かれ</rt></ruby>が<ruby>間違え<rt>まちがえ</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Tính toán dễ thế này làm sao sinh viên đại học nhầm được!"
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
      "explanation": "Đáp án đúng là B. 「大人っぽい」chững chạc.",
      "rubyQuestion": "あの<ruby>子<rt>こ</rt></ruby>はまだ<ruby>中学生<rt>ちゅうがくせい</rt></ruby>なのに、とても<ruby>大人<rt>おとな</rt></ruby>（　　）。",
      "hintTranslation": "Đứa bé mới cấp 2 mà trông （......）."
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
      "explanation": "Đáp án đúng là A. 「政治に対する関心」.",
      "rubyQuestion": "<ruby>若者<rt>わかもの</rt></ruby>の<ruby>政治<rt>せいじ</rt></ruby>（　　）<ruby>関心<rt>かんしん</rt></ruby>が<ruby>薄れ<rt>うすれ</rt></ruby>ていると<ruby>言わ<rt>いわ</rt></ruby>れている。",
      "hintTranslation": "Sự quan tâm của giới trẻ （......） chính trị đang mờ nhạt dần."
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
      "explanation": "Đáp án đúng là B. 「高い」→「高さ」độ cao.",
      "rubyQuestion": "<ruby>富士山<rt>ふじさん</rt></ruby>の（　　）は、<ruby>約<rt>やく</rt></ruby>3,776メートルです。",
      "hintTranslation": "（......） Độ cao của núi Phú Sĩ là 3.776m."
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
      "explanation": "Đáp án đúng là B. Hai mặt cùng diễn ra song song.",
      "rubyQuestion": "<ruby>医療技術<rt>いりょうぎじゅつ</rt></ruby>が<ruby>進歩<rt>しんぽ</rt></ruby>する（　　）、<ruby>倫理的<rt>りんりてき</rt></ruby>な<ruby>課題<rt>かだい</rt></ruby>も<ruby>多く<rt>おおく</rt></ruby><ruby>議論<rt>ぎろん</rt></ruby>されるようになった。",
      "hintTranslation": "（......） Kỹ thuật y tế tiến bộ, bên cạnh đó các vấn đề đạo đức cũng được bàn luận nhiều."
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
      "explanation": "Đáp án đúng là A. 「深い」→「深さ」.",
      "rubyQuestion": "このプールの<ruby>水深<rt>すいしん</rt></ruby>の（　　）は<ruby>何<rt>なに</rt></ruby>メートルですか。",
      "hintTranslation": "（......） Độ sâu của bể bơi này là mấy mét?"
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
      "explanation": "Đáp án đúng là B. 「せいで」chỉ nguyên nhân gây hậu quả xấu.",
      "rubyQuestion": "<ruby>昨夜<rt>さくや</rt></ruby><ruby>遅く<rt>おそく</rt></ruby>までゲームをした（　　）、<ruby>今朝<rt>けさ</rt></ruby><ruby>寝坊<rt>ねぼう</rt></ruby>してしまった。",
      "hintTranslation": "（......） chơi game muộn nên sáng nay ngủ quên."
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
      "explanation": "Đáp án đúng là B. Phương tiện thông qua.",
      "rubyQuestion": "その<ruby>法案<rt>ほうあん</rt></ruby>は<ruby>国会<rt>こっかい</rt></ruby>の<ruby>多数決<rt>たすうけつ</rt></ruby>（　　）<ruby>可決<rt>かけつ</rt></ruby>されました。",
      "hintTranslation": "（......） Dự luật đó đã được thông qua bằng biểu quyết đa số ở quốc hội."
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
      "explanation": "Đáp án đúng là C. Nhấn mạnh mức độ không biết.",
      "rubyQuestion": "<ruby>名前<rt>なまえ</rt></ruby>（　　）<ruby>覚え<rt>おぼえ</rt></ruby>ていない<ruby>相手<rt>あいて</rt></ruby>から、<ruby>突然<rt>とつぜん</rt></ruby><ruby>高価<rt>こうか</rt></ruby>なプレゼントが<ruby>届い<rt>とどい</rt></ruby>た。",
      "hintTranslation": "Từ người mà （......） tên tôi cũng không nhớ, bỗng nhận được quà đắt tiền."
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
      "explanation": "Đáp án đúng là B. Nguy cơ dịch bệnh.",
      "rubyQuestion": "インフルエンザが<ruby>急速<rt>きゅうそく</rt></ruby>に<ruby>感染<rt>かんせん</rt></ruby><ruby>拡大<rt>かくだい</rt></ruby>する（　　）がある。",
      "hintTranslation": "（......） dịch cúm lan rộng nhanh chóng."
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
      "explanation": "Đáp án đúng là D. 「〜としても」cho dù đi nữa.",
      "rubyQuestion": "たとえ<ruby>大金持<rt>おおがねもち</rt></ruby>ちになっ（　　）、<ruby>質素<rt>しっそ</rt></ruby>な<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>変え<rt>かえ</rt></ruby>ないだろう。",
      "hintTranslation": "（......） có giàu có tôi vẫn sống giản dị như giờ."
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
      "explanation": "Đáp án đúng là D. Đổi ngày làm việc.",
      "rubyQuestion": "<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>出勤<rt>しゅっきん</rt></ruby>した（　　）、<ruby>月曜日<rt>げつようび</rt></ruby>に<ruby>振替休日<rt>ふりかえきゅうじつ</rt></ruby>をもらった。",
      "hintTranslation": "（......） Đi làm ngày Chủ Nhật bù lại được nghỉ bù Thứ Hai."
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
      "explanation": "Đáp án đúng là D. Lựa chọn thay thế.",
      "rubyQuestion": "<ruby>車<rt>くるま</rt></ruby>を<ruby>買う<rt>かう</rt></ruby>（　　）、<ruby>家族<rt>かぞく</rt></ruby>で<ruby>海外旅行<rt>かいがいりょこう</rt></ruby>に<ruby>行く<rt>いく</rt></ruby>ことにした。",
      "hintTranslation": "（......） mua ô tô, nhà tôi quyết định đi du lịch nước ngoài."
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
      "explanation": "Đáp án đúng là C. 「イAことはイAが」.",
      "rubyQuestion": "この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>美味しい<rt>おいしい</rt></ruby>（　　）<ruby>美味しい<rt>おいしい</rt></ruby>が、<ruby>作る<rt>つくる</rt></ruby>のに<ruby>時間<rt>じかん</rt></ruby>がかかる。",
      "hintTranslation": "Ngon （......） nhưng nấu mất nhiều thời gian."
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
      "explanation": "Đáp án đúng là B. Phủ định kép.",
      "rubyQuestion": "<ruby>何年<rt>なんねん</rt></ruby>も<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>ている<ruby>先生<rt>せんせい</rt></ruby>が、この<ruby>文法<rt>ぶんぽう</rt></ruby>を<ruby>知ら<rt>しら</rt></ruby>ない（　　）。",
      "hintTranslation": "Thầy dạy tiếng Nhật bao năm （......） không biết ngữ pháp này!"
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
      "explanation": "Đáp án đúng là C. Cộng thêm khó khăn.",
      "rubyQuestion": "<ruby>人件費<rt>じんけんひ</rt></ruby>の<ruby>高騰<rt>こうとう</rt></ruby>（　　）<ruby>原材料費<rt>げんざいりょうひ</rt></ruby>の<ruby>値上がり<rt>ねあがり</rt></ruby>も、<ruby>経営<rt>けいえい</rt></ruby>を<ruby>圧迫<rt>あっぱく</rt></ruby>している。",
      "hintTranslation": "（......） Chi phí nhân công tăng cộng thêm nguyên liệu đắt gây áp lực kinh doanh."
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
      "explanation": "Đáp án đúng là B. おかげで dùng châm biếm.",
      "rubyQuestion": "（<ruby>皮肉<rt>ひにく</rt></ruby>）「あなたが<ruby>余計<rt>よけい</rt></ruby>なことを<ruby>言った<rt>いった</rt></ruby>（　　）、<ruby>雰囲気<rt>ふんいき</rt></ruby>が<ruby>台無し<rt>だいなし</rt></ruby>ですよ。」",
      "hintTranslation": "(Mỉa mai) '（......） cậu nói lời thừa thãi mà không khí hỏng bét rồi đấy.'"
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
      "explanation": "Đáp án đúng là C. 「普通形 + 一方で」nêu 2 mặt đối lập.",
      "rubyQuestion": "<ruby>都会<rt>とかい</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>は<ruby>便利<rt>べんり</rt></ruby>な（　　）、<ruby>生活費<rt>せいかつひ</rt></ruby>が<ruby>高く<rt>たかく</rt></ruby>ストレスも<ruby>多い<rt>おおい</rt></ruby>。",
      "hintTranslation": "（......） Cuộc sống thành thị tiện lợi nhưng chi phí đắt đỏ."
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
      "explanation": "Đáp án đúng là A. 「安っぽい」trông rẻ tiền.",
      "rubyQuestion": "<ruby>安物<rt>やすもの</rt></ruby>（　　）<ruby>服<rt>ふく</rt></ruby>でも、<ruby>着こ<rt>つこ</rt></ruby>なし<ruby>次第<rt>しだい</rt></ruby>でおしゃれに<ruby>見え<rt>みえ</rt></ruby>る。",
      "hintTranslation": "（......） Dù là quần áo trông có vẻ rẻ tiền nhưng khéo mặc vẫn đẹp."
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
      "explanation": "Đáp án đúng là C. Chưa chắc thắng.",
      "rubyQuestion": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>したからといって、<ruby>必ず<rt>かならず</rt></ruby><ruby>試合<rt>しあい</rt></ruby>に<ruby>勝て<rt>かて</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Tập mỗi ngày chưa chắc đã thắng trận."
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
      "explanation": "Đáp án đúng là D. 「N + によって」chỉ nguyên nhân.",
      "rubyQuestion": "<ruby>今回<rt>こんかい</rt></ruby>の<ruby>台風<rt>たいふう</rt></ruby>（　　）、<ruby>多く<rt>おおく</rt></ruby>の<ruby>家屋<rt>かおく</rt></ruby>が<ruby>被害<rt>ひがい</rt></ruby>を<ruby>受け<rt>うけ</rt></ruby>ました。",
      "hintTranslation": "（......） Do cơn bão lần này, nhiều nhà cửa bị thiệt hại."
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
      "explanation": "Đáp án đúng là C. ナAだとは限らない.",
      "rubyQuestion": "お<ruby>金持ち<rt>かねもち</rt></ruby>の<ruby>人<rt>にん</rt></ruby>が、みんな<ruby>幸せ<rt>しあわせ</rt></ruby>（　　）。",
      "hintTranslation": "（......） Người giàu không hẳn ai cũng đều hạnh phúc."
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
      "explanation": "Đáp án đúng là B. 「N + に対して」chỉ đối tượng hướng tới.",
      "rubyQuestion": "お<ruby>客様<rt>きゃくさま</rt></ruby>（　　）<ruby>失礼<rt>しつれい</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby>をとってはいけません。",
      "hintTranslation": "Không được có thái độ thô lỗ （......） khách hàng."
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
      "explanation": "Đáp án đúng là B. 「止まるごとに」: cứ mỗi lần dừng lại.",
      "rubyQuestion": "この<ruby>電車<rt>でんしゃ</rt></ruby>は<ruby>駅<rt>えき</rt></ruby>に<ruby>止ま<rt>とま</rt></ruby>る（　　）<ruby>多く<rt>おおく</rt></ruby>の<ruby>乗客<rt>じょうきゃく</rt></ruby>が<ruby>乗り降り<rt>のりおり</rt></ruby>する。",
      "hintTranslation": "Chuyến tàu này （......） dừng ở ga lại có đông hành khách lên xuống."
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
      "explanation": "Đáp án đúng là B. Nguy cơ cháy nổ.",
      "rubyQuestion": "<ruby>火<rt>ひ</rt></ruby>の<ruby>不始末<rt>ふしまつ</rt></ruby>から<ruby>大規模<rt>だいきぼ</rt></ruby>な<ruby>火災<rt>かさい</rt></ruby>に<ruby>発展<rt>はってん</rt></ruby>する（　　）。",
      "hintTranslation": "Sơ suất tàn lửa （......） phát triển thành hỏa hoạn lớn."
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
      "explanation": "Đáp án đúng là B. 「ものか」tuyệt đối không bao giờ.",
      "rubyQuestion": "あんな<ruby>失礼<rt>しつれい</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby>の<ruby>店員<rt>てんいん</rt></ruby>がいる<ruby>店<rt>みせ</rt></ruby>には、<ruby>二度<rt>にど</rt></ruby>と<ruby>行く<rt>いく</rt></ruby>（　　）！",
      "hintTranslation": "（......） Quán nhân viên thô lỗ thế không bao giờ thèm đến nữa!"
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
      "explanation": "Đáp án đúng là D. Bổ sung ưu điểm.",
      "rubyQuestion": "<ruby>今回<rt>こんかい</rt></ruby>の<ruby>新型<rt>しんがた</rt></ruby>スマホは、<ruby>性能<rt>せいのう</rt></ruby>の<ruby>向上<rt>こうじょう</rt></ruby>（　　）デザインの<ruby>美しさ<rt>うつくしさ</rt></ruby>も<ruby>評価<rt>ひょうか</rt></ruby>されている。",
      "hintTranslation": "Điện thoại mới bên cạnh hiệu năng （......） thiết kế cũng đẹp."
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
      "explanation": "Đáp án đúng là A. Dù thành công.",
      "rubyQuestion": "あの<ruby>計画<rt>けいかく</rt></ruby>が<ruby>成功<rt>せいこう</rt></ruby>した（　　）、<ruby>莫大<rt>ばくだい</rt></ruby>な<ruby>費用<rt>ひよう</rt></ruby>がかかるので<ruby>現実的<rt>げんじつてき</rt></ruby>ではない。",
      "hintTranslation": "Kế hoạch （......） có thành công thì quá tốn kém nên không khả thi."
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
      "explanation": "Đáp án đúng là B. Trực ca thay thế.",
      "rubyQuestion": "<ruby>病気<rt>びょうき</rt></ruby>で<ruby>休ん<rt>やすん</rt></ruby>だ<ruby>同僚<rt>どうりょう</rt></ruby>の（　　）シフトに<ruby>入る<rt>いる</rt></ruby>ことになった。",
      "hintTranslation": "Tôi vào ca trực （......） đồng nghiệp nghỉ ốm."
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
      "explanation": "Đáp án đúng là C. Kết quả tốt đẹp nhờ người thân.",
      "rubyQuestion": "<ruby>家族<rt>かぞく</rt></ruby>が<ruby>支え<rt>ささえ</rt></ruby>てくれた（　　）、<ruby>長い<rt>ながい</rt></ruby><ruby>留学生<rt>りゅうがくせい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>乗り越え<rt>のりこえ</rt></ruby>られた。",
      "hintTranslation": "（......） gia đình ủng hộ nên tôi đã vượt qua thời gian du học bình an."
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
      "explanation": "Đáp án đúng là B. 「絶滅のおそれがある」.",
      "rubyQuestion": "この<ruby>鳥<rt>とり</rt></ruby>は<ruby>生息地<rt>せいそくち</rt></ruby>が<ruby>減少<rt>げんしょう</rt></ruby>し、<ruby>絶滅<rt>ぜつめつ</rt></ruby>の（　　）があると<ruby>言わ<rt>いわ</rt></ruby>れている。",
      "hintTranslation": "Loài chim này （......） tuyệt chủng."
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
      "explanation": "Đáp án đúng là C. Vừa mới sinh ra.",
      "rubyQuestion": "<ruby>生まれ<rt>うまれ</rt></ruby>て（　　）の<ruby>赤ちゃん<rt>あかちゃん</rt></ruby>を<ruby>抱っこ<rt>だっこ</rt></ruby>させてもらった。",
      "hintTranslation": "Tôi được bế em bé （......） chào đời."
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
      "explanation": "Đáp án đúng là C. Nhờ sự giúp đỡ của đồng nghiệp.",
      "rubyQuestion": "<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>手伝っ<rt>てつだっ</rt></ruby>てくれた（　　）、<ruby>定時<rt>ていじ</rt></ruby>に<ruby>仕事<rt>しごと</rt></ruby>を<ruby>終え<rt>おえ</rt></ruby>ることができた。",
      "hintTranslation": "（......） đồng nghiệp giúp đỡ nên tôi đã xong việc đúng giờ."
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
      "explanation": "Đáp án đúng là B. 「〜にさえ」 = ngay cả với ai.",
      "rubyQuestion": "<ruby>親友<rt>しんゆう</rt></ruby>に（　　）<ruby>言え<rt>いえ</rt></ruby>ない<ruby>秘密<rt>ひみつ</rt></ruby>を、<ruby>彼は<rt>かれは</rt></ruby>ずっと<ruby>一人<rt>ひとり</rt></ruby>で<ruby>抱え<rt>かかえ</rt></ruby>ていた。",
      "hintTranslation": "Bí mật mà （......） bạn thân cũng không nói."
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
      "explanation": "Đáp án đúng là B. Cho dù bị ai nói gì.",
      "rubyQuestion": "<ruby>誰<rt>だれ</rt></ruby>に<ruby>何を<rt>なにを</rt></ruby><ruby>言わ<rt>いわ</rt></ruby>れ（　　）、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>諦め<rt>あきらめ</rt></ruby>るつもりはありません。",
      "hintTranslation": "（......） bị ai nói gì tôi cũng không từ bỏ ước mơ."
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
      "explanation": "Đáp án đúng là D. Hậu quả tiêu cực.",
      "rubyQuestion": "エアコンの<ruby>温度<rt>おんど</rt></ruby>を<ruby>下げ<rt>さげ</rt></ruby>すぎた（　　）、<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩し<rt>くずし</rt></ruby>てしまった。",
      "hintTranslation": "（......） bật điều hòa quá lạnh nên tôi bị ốm."
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
      "explanation": "Đáp án đúng là B. So sánh đối lập 2 người.",
      "rubyQuestion": "<ruby>兄<rt>あに</rt></ruby>は<ruby>社交的<rt>しゃこうてき</rt></ruby>で<ruby>友達<rt>ともだち</rt></ruby>が<ruby>多い<rt>おおい</rt></ruby>（　　）、<ruby>弟<rt>おとうと</rt></ruby>は<ruby>物<rt>もの</rt></ruby><ruby>静か<rt>しずか</rt></ruby>で<ruby>一人<rt>ひとり</rt></ruby>を<ruby>好む<rt>このむ</rt></ruby><ruby>性格<rt>せいかく</rt></ruby>だ。",
      "hintTranslation": "（......） Anh trai hoạt bát nhiều bạn bè, trái lại em trai trầm tính thích ở một mình."
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
      "explanation": "Đáp án đúng là D. VことはVが.",
      "rubyQuestion": "<ruby>読め<rt>よめ</rt></ruby>る（　　）<ruby>読め<rt>よめ</rt></ruby>るが、<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>説明す<rt>せつめいす</rt></ruby>るのは<ruby>難しい<rt>むずかしい</rt></ruby>。",
      "hintTranslation": "（......） Đọc thì đọc được đấy nhưng giải thích nghĩa chữ Hán thì khó."
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
      "explanation": "Đáp án đúng là C. Văn nói: もんか.",
      "rubyQuestion": "「<ruby>俺<rt>おれ</rt></ruby>の<ruby>苦しい<rt>くるしい</rt></ruby><ruby>気持ち<rt>きもち</rt></ruby>がお<ruby>前<rt>まえ</rt></ruby>なんかに<ruby>分か<rt>わか</rt></ruby>ってたまる（　　）！」",
      "hintTranslation": "（......） Nỗi khổ của tao đứa như mày làm sao mà hiểu được!"
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
      "explanation": "Đáp án đúng là A. Vừa mới dọn xong.",
      "rubyQuestion": "<ruby>昨日<rt>きのう</rt></ruby><ruby>掃除<rt>そうじ</rt></ruby>をし（　　）なのに、<ruby>子供<rt>こども</rt></ruby>たちがもう<ruby>部屋<rt>へや</rt></ruby>を<ruby>散ら<rt>ちら</rt></ruby>かした。",
      "hintTranslation": "（......） dọn hôm qua mà tụi nhỏ lại bày bừa rồi."
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
      "explanation": "Đáp án đúng là C. Mong ước.",
      "rubyQuestion": "<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>記念日<rt>きねんび</rt></ruby>だから、<ruby>二人<rt>ふたり</rt></ruby>でゆっくり<ruby>過ご<rt>すご</rt></ruby>し（　　）。",
      "hintTranslation": "（......） Ngày kỷ niệm quan trọng nên muốn cả hai bên nhau trọn vẹn."
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
      "explanation": "Đáp án đúng là C. 「子供さえ」.",
      "rubyQuestion": "<ruby>子供<rt>こども</rt></ruby>（　　）<ruby>知って<rt>しって</rt></ruby>いる<ruby>常識<rt>じょうしき</rt></ruby>を、なぜ<ruby>大人<rt>おとな</rt></ruby>のあなたが<ruby>知ら<rt>しら</rt></ruby>ないのですか。",
      "hintTranslation": "（......） Thường thức đến trẻ con cũng biết sao người lớn lại không biết."
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
      "explanation": "Đáp án đúng là C. Chưa chắc đã mưa.",
      "rubyQuestion": "<ruby>天気予報<rt>てんきよほう</rt></ruby>が<ruby>雨<rt>あめ</rt></ruby>だと<ruby>言って<rt>いって</rt></ruby>も、<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>雨<rt>あめ</rt></ruby>が<ruby>降る<rt>ふる</rt></ruby>（　　）。",
      "hintTranslation": "（......） Dự báo mưa chưa chắc trời đã mưa."
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
      "explanation": "Đáp án đúng là B. 「重い」→「重さ」độ nặng.",
      "rubyQuestion": "この<ruby>荷物<rt>にもつ</rt></ruby>の（　　）を<ruby>測っ<rt>はかっ</rt></ruby>てから、<ruby>送料<rt>そうりょう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>してください。",
      "hintTranslation": "（......） Cân độ nặng hành lý rồi tính phí ship."
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
      "explanation": "Đáp án đúng là B. 「忘れっぽい」tính hay quên.",
      "rubyQuestion": "<ruby>祖父<rt>そふ</rt></ruby>は<ruby>最近<rt>さいきん</rt></ruby><ruby>歳<rt>とし</rt></ruby>をとったせいか、とても<ruby>忘れ<rt>わすれ</rt></ruby>（　　）なった。",
      "hintTranslation": "Ông tôi dạo này có tuổi nên trở nên rất （......）."
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
      "explanation": "Đáp án đúng là D. Mưa to kèm gió lớn.",
      "rubyQuestion": "<ruby>激しい<rt>はげしい</rt></ruby><ruby>雨<rt>あめ</rt></ruby>（　　）<ruby>強い<rt>つよい</rt></ruby><ruby>風<rt>かぜ</rt></ruby>も<ruby>吹き<rt>ふき</rt></ruby><ruby>荒れ<rt>あれ</rt></ruby>、<ruby>外出<rt>がいしゅつ</rt></ruby>が<ruby>極め<rt>きわめ</rt></ruby>て<ruby>危険<rt>きけん</rt></ruby>な<ruby>状態<rt>じょうたい</rt></ruby>だ。",
      "hintTranslation": "Mưa to （......） gió giật mạnh, ra ngoài rất nguy hiểm."
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
      "explanation": "Đáp án đúng là C. Phủ định: ないでほしい.",
      "rubyQuestion": "<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>には<ruby>近づ<rt>ちかづ</rt></ruby>か（　　）と<ruby>注意<rt>ちゅうい</rt></ruby>した。",
      "hintTranslation": "（......） Tôi dặn mong họ đừng lại gần nơi nguy hiểm."
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
      "explanation": "Đáp án đúng là B. Khó cất cánh.",
      "rubyQuestion": "<ruby>雪<rt>ゆき</rt></ruby>が<ruby>激しく<rt>はげしく</rt></ruby><ruby>降り<rt>おり</rt></ruby><ruby>続い<rt>つづい</rt></ruby>ており、<ruby>飛行機<rt>ひこうき</rt></ruby>は<ruby>飛び<rt>とび</rt></ruby>（　　）。",
      "hintTranslation": "（......） Tuyết rơi dày đặc, máy bay trông chừng khó cất cánh được."
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
      "explanation": "Đáp án đúng là D. Khó thống nhất.",
      "rubyQuestion": "あの<ruby>二人<rt>ふたり</rt></ruby>は<ruby>意見<rt>いけん</rt></ruby>が<ruby>対立<rt>たいりつ</rt></ruby>していて、<ruby>話し合い<rt>はなしあい</rt></ruby>はまとまり（　　）。",
      "hintTranslation": "（......） Ý kiến hai người đối lập, cuộc thảo luận khó đi tới thống nhất."
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
      "explanation": "Đáp án đúng là B. 「怒りっぽい」.",
      "rubyQuestion": "<ruby>彼は<rt>かれは</rt></ruby><ruby>少し<rt>すこし</rt></ruby>のことですぐに<ruby>怒る<rt>いかる</rt></ruby>、<ruby>怒り<rt>いかり</rt></ruby>（　　）<ruby>性格<rt>せいかく</rt></ruby>だ。",
      "hintTranslation": "（......） Anh ấy tính hay nổi nóng chuyện nhỏ cũng cáu."
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
      "explanation": "Đáp án đúng là A. Tuyệt đối không thể hiểu.",
      "rubyQuestion": "まだ<ruby>一度<rt>いちど</rt></ruby>も<ruby>会っ<rt>あっ</rt></ruby>たことがない<ruby>人<rt>にん</rt></ruby>の<ruby>本心<rt>ほんしん</rt></ruby>が、<ruby>分か<rt>わか</rt></ruby>る（　　）。",
      "hintTranslation": "（......） Người chưa gặp bao giờ làm sao hiểu thấu lòng dạ họ được!"
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
      "explanation": "Đáp án đúng là C. 「〜とは限らない」chưa chắc là.",
      "rubyQuestion": "<ruby>値段<rt>ねだん</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>ものが、<ruby>必ずしも<rt>かならずしも</rt></ruby><ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>良い<rt>よい</rt></ruby>（　　）。",
      "hintTranslation": "（......） Đồ đắt tiền chưa chắc chất lượng đã tốt."
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
      "explanation": "Đáp án đúng là D. Khuyên răn đạo lý.",
      "rubyQuestion": "<ruby>人<rt>にん</rt></ruby>との<ruby>信頼関係<rt>しんらいかんけい</rt></ruby>を<ruby>築き<rt>きづき</rt></ruby>たいなら、<ruby>約束<rt>やくそく</rt></ruby>を<ruby>守る<rt>まもる</rt></ruby>（　　）。",
      "hintTranslation": "Muốn xây dựng niềm tin thì （......） giữ đúng lời hứa."
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
      "explanation": "Đáp án đúng là C. Yếu tố dồn thêm.",
      "rubyQuestion": "<ruby>今週<rt>こんしゅう</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>の<ruby>忙しさ<rt>いそがしさ</rt></ruby>（　　）<ruby>寝不足<rt>ねぶそく</rt></ruby>も<ruby>重なり<rt>かさなり</rt></ruby>、ひどく<ruby>疲れ<rt>つかれ</rt></ruby>ている。",
      "hintTranslation": "（......） Bận rộn việc cộng thêm thiếu ngủ khiến tôi kiệt sức."
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
      "explanation": "Đáp án đúng là A. 「V辞書形 + ことだ」lời khuyên tốt nhất.",
      "rubyQuestion": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>早く<rt>はやく</rt></ruby><ruby>治し<rt>なおし</rt></ruby>たければ、<ruby>暖かく<rt>あたたかく</rt></ruby>してゆっくり<ruby>休む<rt>やすむ</rt></ruby>（　　）。",
      "hintTranslation": "Muốn mau khỏi cảm cúm thì （......） giữ ấm nghỉ ngơi."
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
      "explanation": "Đáp án đúng là A. Nの + わけがない.",
      "rubyQuestion": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>昨日<rt>きのう</rt></ruby><ruby>東京<rt>とうきょう</rt></ruby>にいた<ruby>証拠<rt>しょうこ</rt></ruby>があるのだから、<ruby>犯人<rt>はんにん</rt></ruby>の（　　）。",
      "hintTranslation": "Có chứng cứ hôm qua anh ấy ở Tokyo thì （......） là thủ phạm được!"
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
      "explanation": "Đáp án đúng là C. Cảm nhận chủ quan vừa mới mua.",
      "rubyQuestion": "<ruby>先月<rt>せんげつ</rt></ruby><ruby>買っ<rt>かっ</rt></ruby>（　　）のスマートフォンが、もう<ruby>壊れ<rt>こわれ</rt></ruby>てしまった。",
      "hintTranslation": "Chiếc điện thoại （......） mua tháng trước đã hỏng."
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
      "explanation": "Đáp án đúng là C. Bất khả thi.",
      "rubyQuestion": "<ruby>一人<rt>ひとり</rt></ruby>でこの<ruby>重い<rt>おもい</rt></ruby>ピアノを<ruby>持ち<rt>もち</rt></ruby><ruby>上げ<rt>あげ</rt></ruby>られる（　　）。<ruby>手伝っ<rt>てつだっ</rt></ruby>てくれ。",
      "hintTranslation": "（......） Một mình nâng sao nổi cây đàn piano này! Giúp tôi với."
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
      "explanation": "Đáp án đúng là D. 「V辞書形 + ごとに」: cứ mỗi lần gặp.",
      "rubyQuestion": "あの<ruby>人<rt>にん</rt></ruby>は<ruby>会う<rt>あう</rt></ruby>（　　）<ruby>新しい<rt>あたらしい</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>着て<rt>きて</rt></ruby>いて、とてもおしゃれだ。",
      "hintTranslation": "Người đó （......） gặp lại mặc đồ mới."
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
      "explanation": "Đáp án đúng là B. So sánh đối lập 2 sự việc.",
      "rubyQuestion": "<ruby>兄<rt>あに</rt></ruby>が<ruby>社交的<rt>しゃこうてき</rt></ruby>なの（　　）、<ruby>弟<rt>おとうと</rt></ruby>は<ruby>内向的<rt>ないこうてき</rt></ruby>で<ruby>物<rt>もの</rt></ruby><ruby>静か<rt>しずか</rt></ruby>だ。",
      "hintTranslation": "（......） anh trai hòa đồng, em trai lại hướng nội."
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
      "explanation": "Đáp án đúng là B. Đi kèm 必ずしも.",
      "rubyQuestion": "「〜とは<ruby>限ら<rt>かぎら</rt></ruby>ない」と<ruby>一緒に<rt>いっしょに</rt></ruby>よく<ruby>使わ<rt>つかわ</rt></ruby>れる<ruby>副詞<rt>ふくし</rt></ruby>はどれですか。",
      "hintTranslation": "（......） Phó từ hay đi kèm là 必ずしも."
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
      "explanation": "Đáp án đúng là C. Khó thắng được.",
      "rubyQuestion": "<ruby>相手<rt>あいて</rt></ruby>はプロの<ruby>選手<rt>せんしゅ</rt></ruby>だから、<ruby>初心者<rt>しょしんしゃ</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>が<ruby>勝て<rt>かて</rt></ruby>（　　）。",
      "hintTranslation": "（......） Đối thủ là tuyển thủ chuyên nghiệp, tôi khó mà thắng nổi."
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
      "explanation": "Đáp án đúng là A. Đối mặt với chỉ trích.",
      "rubyQuestion": "<ruby>厳しい<rt>いかめしい</rt></ruby><ruby>批判<rt>ひはん</rt></ruby>（　　）、<ruby>首相<rt>しゅしょう</rt></ruby>は<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>を<ruby>続け<rt>つづけ</rt></ruby>た。",
      "hintTranslation": "（......） Đối diện với những lời phê phán gắt gao, thủ tướng vẫn bình tĩnh giải thích."
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
      "explanation": "Đáp án đúng là B. Lời khuyên thực tế.",
      "rubyQuestion": "トラブルを<ruby>避け<rt>さけ</rt></ruby>たいなら、<ruby>契約書<rt>けいやくしょ</rt></ruby>をよく<ruby>確認す<rt>かくにんす</rt></ruby>る（　　）ね。",
      "hintTranslation": "Muốn tránh rắc rối thì （......） đọc kỹ hợp đồng."
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
      "explanation": "Đáp án đúng là A. Không từ bỏ.",
      "rubyQuestion": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>をこんなところで<ruby>諦め<rt>あきらめ</rt></ruby>てたまる（　　）。",
      "hintTranslation": "（......） Đời nào tôi chịu bỏ cuộc ước mơ ở nơi thế này!"
    }
  ],
  "grammar-to-meaning": [
    {
      "id": 1,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜一方で」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Cứ mỗi lần... lại...",
        "Tuy có... thật nhưng...",
        "Vừa... vừa... / Song song đó (đồng thời tiến hành hoặc tồn tại)",
        "Làm sao mà... được / Tuyệt đối không có chuyện..."
      ],
      "answer": 2,
      "translation": "Đặc điểm của 〜一方で: Vừa... vừa... / Song song đó (đồng thời tiến hành hoặc tồn tại)",
      "explanation": "Đáp án đúng là C. Ngoài ý nghĩa đối lập, 〜一方で còn dùng để chỉ sự song hành: cùng lúc vừa làm việc này vừa làm việc kia.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜<ruby>一方<rt>いっぽう</rt></ruby>で」đ」ư」ợc sử dụng với sắc thái / hoàn cảnh nào sau đo sau ây?",
      "hintTranslation": "Đặc điểm của 〜一方で: （......）... / Song song đó (đồng thời tiến hành hoặc tồn tại)"
    },
    {
      "id": 2,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜ことだ」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Không nên... / Đừng... (Vないことだ - lời khuyên cảnh báo)",
        "Cảm thấy như là / Có xu hướng dễ...",
        "Có vẻ không... / Khó lòng mà...",
        "Nhờ có... / Nhờ ơn..."
      ],
      "answer": 0,
      "translation": "Đặc điểm của 〜ことだ: Không nên... / Đừng... (Vないことだ - lời khuyên cảnh báo)",
      "explanation": "Đáp án đúng là A. Lưu ý: Không dùng mẫu câu này để đưa ra lời khuyên cho người bề trên hoặc cấp trên.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜ことだ」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜ことだ: Không nên... / （......）... (Vないことだ - lời khuyên cảnh báo)"
    },
    {
      "id": 3,
      "unit": "Unit 11",
      "pattern": "〜ものか / 〜もんか",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜ものか / 〜もんか」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Muốn ai đó làm việc gì cho mình",
        "Phủ định cực kỳ mạnh mẽ, kiên quyết không làm điều gì lần thứ 2",
        "Vừa mới... xong",
        "Cho dù... đi chăng nữa"
      ],
      "answer": 1,
      "translation": "Đặc điểm của 〜ものか / 〜もんか: Phủ định cực kỳ mạnh mẽ, kiên quyết không làm điều gì lần thứ 2",
      "explanation": "Đáp án đúng là B. Phân biệt: 〜わけがない là phủ định tính khả thi dựa trên lý lẽ; còn 〜ものか mang sắc thái cảm xúc quyết liệt của người nói.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜ものか / 〜もんか」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "（......） Đặc điểm của 〜ものか / 〜もんか: Phủ định cực kỳ mạnh mẽ, kiên quyết không làm điều gì lần thứ 2"
    },
    {
      "id": 4,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "Mẫu ngữ pháp「〜に対して」(N + に対して / Nに対するN / 普通形 + のに対して) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Phải... / Nên... (lời khuyên nhủ)",
        "Đối với... (thái độ, hành vi hướng tới ai/cái gì)",
        "Độ... / Mức độ...",
        "Không hẳn là... / Chưa chắc là..."
      ],
      "answer": 1,
      "translation": "Ngữ pháp: 〜に対して (ni taishite) ➔ Ý nghĩa: Đối với... (thái độ, hành vi hướng tới ai/cái gì)",
      "explanation": "Đáp án đúng là B. 「〜に対して」nghĩa 1: Hướng hành động/thái độ vào đối tượng (Ví dụ: Thầy giáo rất thân thiện đối với học sinh; Danh từ đi kèm: に対するN).",
      "rubyQuestion": "Mẫu ngữ pháp「〜に<ruby>対し<rt>たいし</rt></ruby>て」(N + に<ruby>対し<rt>たいし</rt></ruby>て / Nに<ruby>対する<rt>たいする</rt></ruby>N / <ruby>普通<rt>ふつう</rt></ruby><ruby>形<rt>かたち</rt></ruby> + のに<ruby>対し<rt>たいし</rt></ruby>て) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜に対して (ni taishite) ➔ Ý nghĩa: （......）... (thái độ, hành vi hướng tới ai/cái gì)"
    },
    {
      "id": 5,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "Mẫu ngữ pháp「〜一方で」(普通形 + 一方で) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Cứ mỗi lần... lại...",
        "Một mặt thì... mặt khác thì... (đối lập giữa 2 mặt của sự việc)",
        "Do ảnh hưởng của...",
        "Có vẻ là không... / Khó lòng mà..."
      ],
      "answer": 1,
      "translation": "Ngữ pháp: 〜一方で (ippou de) ➔ Ý nghĩa: Một mặt thì... mặt khác thì... (đối lập giữa 2 mặt của sự việc)",
      "explanation": "Đáp án đúng là B. 「〜一方で」dùng để nêu ra hai mặt đối lập tương phản của một vấn đề (Ví dụ: tiện lợi một mặt nhưng chi phí lại đắt đỏ).",
      "rubyQuestion": "Mẫu ngữ pháp「〜<ruby>一方<rt>いっぽう</rt></ruby>で」(<ruby>普通<rt>ふつう</rt></ruby><ruby>形<rt>かたち</rt></ruby> + <ruby>一方<rt>いっぽう</rt></ruby>で) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜一方で (ippou de) ➔ Ý nghĩa: （......）... mặt khác thì... (đối lập giữa 2 mặt của sự việc)"
    },
    {
      "id": 6,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜さえ」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Vừa mới... xong",
        "Thậm chí đến mức... (ví dụ điển hình ở mức tối thiểu để ngụ ý những cái khác)",
        "Không hẳn là... / Chưa chắc là...",
        "Nên... / Phải... (lời khuyên tốt nhất)"
      ],
      "answer": 1,
      "translation": "Đặc điểm của 〜さえ: Thậm chí đến mức... (ví dụ điển hình ở mức tối thiểu để ngụ ý những cái khác)",
      "explanation": "Đáp án đúng là B. Thường đi kèm trợ từ phủ định hoặc câu mang hàm ý bất ngờ, thất vọng.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜さえ」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜さえ: （......） đến mức... (ví dụ điển hình ở mức tối thiểu để ngụ ý những cái khác)"
    },
    {
      "id": 7,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "Mẫu ngữ pháp「〜せいで」(V/A/N + せいで) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Nhờ có... / Nhờ ơn...",
        "Dễ... / Hay có xu hướng tính cách...",
        "Do / Vì / Tại... (chỉ nguyên nhân dẫn đến kết quả xấu, đổ lỗi)",
        "Độ... / Mức độ..."
      ],
      "answer": 2,
      "translation": "Ngữ pháp: 〜せいで (sei de) ➔ Ý nghĩa: Do / Vì / Tại... (chỉ nguyên nhân dẫn đến kết quả xấu, đổ lỗi)",
      "explanation": "Đáp án đúng là C. 「〜せいで」dùng khi nói về nguyên nhân gây ra hậu quả tiêu cực, thường mang sắc thái trách móc, đổ lỗi.",
      "rubyQuestion": "Mẫu ngữ pháp「〜せいで」(V/A/N + せいで) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜せいで (sei de) ➔ Ý nghĩa: Do / Vì / （......）... (chỉ nguyên nhân dẫn đến kết quả xấu, đổ lỗi)"
    },
    {
      "id": 8,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜代わりに」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Bù lại... / Đổi lại... (sự bù trừ qua lại)",
        "Làm sao mà... được / Tuyệt đối không...",
        "Mong sao... / Muốn ai đó làm",
        "E là... / Có nguy cơ xảy ra việc xấu"
      ],
      "answer": 0,
      "translation": "Đặc điểm của 〜代わりに: Bù lại... / Đổi lại... (sự bù trừ qua lại)",
      "explanation": "Đáp án đúng là A. Ngoài ra còn có ý bù trừ: Công việc tuy vất vả nhưng bù lại lương rất cao.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜<ruby>代わり<rt>かわり</rt></ruby>に」đ」ư」ợc sử dụng với sắc thái / hoàn cảnh nào sau đo sau ây?",
      "hintTranslation": "（......） Đặc điểm của 〜代わりに: Bù lại... / Đổi lại... (sự bù trừ qua lại)"
    },
    {
      "id": 9,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜わけがない」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Vừa mới... xong",
        "Cứ mỗi lần... lại...",
        "Nên... / Phải... (lời khuyên tốt nhất)",
        "Không có lý do nào hoặc khả năng nào để xảy ra chuyện đó (= はずがない)"
      ],
      "answer": 3,
      "translation": "Đặc điểm của 〜わけがない: Không có lý do nào hoặc khả năng nào để xảy ra chuyện đó (= はずがない)",
      "explanation": "Đáp án đúng là D. Dạng phủ định kép: 〜ないわけがない mang ý nghĩa chắc chắn là có/sẽ.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜わけがない」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "（......） Đặc điểm của 〜わけがない: Không có lý do nào hoặc khả năng nào để xảy ra chuyện đó (= はずがない)"
    },
    {
      "id": 10,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "Mẫu ngữ pháp「〜としても」(普通形 + としても) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Không hẳn là... / Chưa chắc là...",
        "E là... / Có nguy cơ xảy ra việc xấu",
        "Làm sao mà... được / Tuyệt đối không...",
        "Cho dù... (đi chăng nữa thì vẫn không thay đổi)"
      ],
      "answer": 3,
      "translation": "Ngữ pháp: 〜としても (to shitemo) ➔ Ý nghĩa: Cho dù... (đi chăng nữa thì vẫn không thay đổi)",
      "explanation": "Đáp án đúng là D. 「〜としても」đặt ra điều kiện giả định: Cho dù tình huống ở vế trước có xảy ra đi chăng nữa, thì lập trường, suy nghĩ hoặc sự việc ở vế sau vẫn không hề bị suy chuyển.",
      "rubyQuestion": "Mẫu ngữ pháp「〜としても」(<ruby>普通<rt>ふつう</rt></ruby><ruby>形<rt>かたち</rt></ruby> + としても) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜としても (to shitemo) ➔ Ý nghĩa: （......）... (đi chăng nữa thì vẫn không thay đổi)"
    },
    {
      "id": 11,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "Mẫu ngữ pháp「〜ことは〜が〜」(AことはAが... (lặp lại cùng một từ)) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Cứ mỗi lần... lại...",
        "Cho dù... đi chăng nữa",
        "Muốn ai đó làm việc gì cho mình",
        "Tuy có... thật đấy, nhưng mà... (công nhận một phần nhưng vế sau hạn chế)"
      ],
      "answer": 3,
      "translation": "Ngữ pháp: 〜ことは〜が〜 (koto wa ... ga ...) ➔ Ý nghĩa: Tuy có... thật đấy, nhưng mà... (công nhận một phần nhưng vế sau hạn chế)",
      "explanation": "Đáp án đúng là D. 「〜ことは〜が〜」dùng bằng cách lặp lại cùng một động từ hoặc tính từ, biểu thị sự nhượng bộ: thừa nhận vế trước nhưng vế sau nêu mặt hạn chế (Ví dụ: Ngon thì ngon thật đấy nhưng giá đắt quá).",
      "rubyQuestion": "Mẫu ngữ pháp「〜ことは〜が〜」(AことはAが... (lặp lại cùng một từ)) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "（......） Ngữ pháp: 〜ことは〜が〜 (koto wa ... ga ...) ➔ Ý nghĩa: Tuy có... thật đấy, nhưng mà... (công nhận một phần nhưng vế sau hạn chế)"
    },
    {
      "id": 12,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜ごとに」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Một mặt thì... mặt khác thì... (đối lập)",
        "E là... / Có nguy cơ xảy ra điều xấu",
        "Nhờ có... / Nhờ ơn... (nguyên nhân kết quả tốt)",
        "Cứ cách một khoảng thời gian/chu kỳ thì lại lặp lại một lần (mỗi...)"
      ],
      "answer": 3,
      "translation": "Đặc điểm của 〜ごとに: Cứ cách một khoảng thời gian/chu kỳ thì lại lặp lại một lần (mỗi...)",
      "explanation": "Đáp án đúng là D. Khác với 〜たびに (nhấn mạnh cứ mỗi lần A thì lại xảy ra B bất kể thời gian), 〜ごとに nhấn mạnh sự lặp lại đều đặn theo chu kỳ, chuỗi thời gian hoặc đơn vị phân chia.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜ごとに」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜ごとに: （......） cách một khoảng thời gian/chu kỳ thì lại lặp lại một lần (mỗi...)"
    },
    {
      "id": 13,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜に対して」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Cứ mỗi lần... lại...",
        "Trái ngược với... / Ngược lại với... (so sánh tương phản 2 vế)",
        "Nhờ có... / Nhờ ơn...",
        "Phải... / Nên... (lời khuyên nhủ)"
      ],
      "answer": 1,
      "translation": "Đặc điểm của 〜に対して: Trái ngược với... / Ngược lại với... (so sánh tương phản 2 vế)",
      "explanation": "Đáp án đúng là B. Nghĩa 2: So sánh đối lập hai sự việc tương phản (Ví dụ: Tôi thích thể thao trái ngược với em trai thích đọc sách).",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜に<ruby>対し<rt>たいし</rt></ruby>て」đ」ư」ợc sử dụng với sắc thái / hoàn cảnh nào sau đo sau ây?",
      "hintTranslation": "Đặc điểm của 〜に対して: （......）... / Ngược lại với... (so sánh tương phản 2 vế)"
    },
    {
      "id": 14,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "Mẫu ngữ pháp「〜ごとに」(V（辞書形） / N + ごとに) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Thay cho... / Thay vì...",
        "Cứ mỗi lần... lại... / Từng... một",
        "E là... / Có nguy cơ xảy ra điều xấu",
        "Do / Vì / Tại... (kết quả xấu, đổ lỗi)"
      ],
      "answer": 1,
      "translation": "Ngữ pháp: 〜ごとに (goto ni) ➔ Ý nghĩa: Cứ mỗi lần... lại... / Từng... một",
      "explanation": "Đáp án đúng là B. 「〜ごとに」(chữ Hán là 毎に) diễn tả hành động hay sự việc cứ lặp lại tuần tự theo chu kỳ hoặc đơn vị (Ví dụ: 10分ごとに - cứ 10 phút một lần).",
      "rubyQuestion": "Mẫu ngữ pháp「〜ごとに」(V（<ruby>辞書<rt>じしょ</rt></ruby><ruby>形<rt>かたち</rt></ruby>） / N + ごとに) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜ごとに (goto ni) ➔ Ý nghĩa: （......）... lại... / Từng... một"
    },
    {
      "id": 15,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "Mẫu ngữ pháp「〜ことだ」(V（辞書形 / ナイ形） + ことだ) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Nên... / Phải... (đưa ra lời khuyên, giải pháp tốt nhất)",
        "Thay vì... / Thay cho...",
        "Ngay cả... / Thậm chí đến cả...",
        "Tuyệt đối không... đâu / Làm sao mà..."
      ],
      "answer": 0,
      "translation": "Ngữ pháp: 〜ことだ (koto da) ➔ Ý nghĩa: Nên... / Phải... (đưa ra lời khuyên, giải pháp tốt nhất)",
      "explanation": "Đáp án đúng là A. 「〜ことだ」dùng trong văn nói trực tiếp để khuyên nhủ ai đó: Làm việc đó là tốt nhất, thích hợp nhất trong hoàn cảnh này.",
      "rubyQuestion": "Mẫu ngữ pháp「〜ことだ」(V（<ruby>辞書<rt>じしょ</rt></ruby><ruby>形<rt>かたち</rt></ruby> / ナイ<ruby>形<rt>かたち</rt></ruby>） + ことだ) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜ことだ (koto da) ➔ Ý nghĩa: Nên... / （......）... (đưa ra lời khuyên, giải pháp tốt nhất)"
    },
    {
      "id": 16,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜おかげで」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Lẽ nào lại... / Tuyệt đối không thể",
        "Cho dù... đi chăng nữa",
        "Nhờ có... (đôi khi dùng với sắc thái mỉa mai, châm biếm)",
        "Thay vì... / Thay cho..."
      ],
      "answer": 2,
      "translation": "Đặc điểm của 〜おかげで: Nhờ có... (đôi khi dùng với sắc thái mỉa mai, châm biếm)",
      "explanation": "Đáp án đúng là C. Khi dùng với kết quả xấu, 〜おかげで mang hàm ý mỉa mai, trách khéo (Ví dụ: Nhờ ơn cậu làm sai mà tớ phải làm lại hết).",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜おかげで」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜おかげで: （......）... (đôi khi dùng với sắc thái mỉa mai, châm biếm)"
    },
    {
      "id": 17,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "Mẫu ngữ pháp「〜わけがない」(普通形 + わけがない) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Đối với... / Trái ngược với...",
        "Cứ mỗi lần... lại...",
        "Nên... / Phải... (lời khuyên tốt nhất)",
        "Lẽ nào lại... / Làm sao mà... được / Tuyệt đối không thể..."
      ],
      "answer": 3,
      "translation": "Ngữ pháp: 〜わけがない (wake ga nai) ➔ Ý nghĩa: Lẽ nào lại... / Làm sao mà... được / Tuyệt đối không thể...",
      "explanation": "Đáp án đúng là D. 「〜わけがない」biểu thị sự quả quyết mạnh mẽ của người nói rằng chuyện đó tuyệt đối không thể xảy ra dựa trên lý lẽ xác đáng. Văn thoại hay dùng: 〜わけない.",
      "rubyQuestion": "Mẫu ngữ pháp「〜わけがない」(<ruby>普通<rt>ふつう</rt></ruby><ruby>形<rt>かたち</rt></ruby> + わけがない) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜わけがない (wake ga nai) ➔ Ý nghĩa: （......）... / Làm sao mà... được / Tuyệt đối không thể..."
    },
    {
      "id": 18,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "Mẫu ngữ pháp「〜恐れがある」(V辞書形 / Nの + 恐れがある) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Nên... / Phải... (lời khuyên)",
        "Không hẳn là... / Chưa chắc là...",
        "Nhờ có... / Nhờ ơn...",
        "E là... / Có nguy cơ... / Lo sợ rằng..."
      ],
      "answer": 3,
      "translation": "Ngữ pháp: 〜恐れがある (osore ga aru) ➔ Ý nghĩa: E là... / Có nguy cơ... / Lo sợ rằng...",
      "explanation": "Đáp án đúng là D. 「〜恐れがある」(chữ Hán là 恐 - sợ hãi) dùng để cảnh báo về khả năng một sự việc tiêu cực, tai họa hoặc tổn thất có thể xảy ra trong tương lai.",
      "rubyQuestion": "Mẫu ngữ pháp「〜<ruby>恐れ<rt>おそれ</rt></ruby>がある」(V<ruby>辞書<rt>じしょ</rt></ruby><ruby>形<rt>かたち</rt></ruby> / Nの + <ruby>恐れ<rt>おそれ</rt></ruby>がある) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜恐れがある (osore ga aru) ➔ Ý nghĩa: E là... / （......）... / Lo sợ rằng..."
    },
    {
      "id": 19,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜恐れがある」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Nên... / Phải... (lời khuyên)",
        "Thêm vào đó... / Không chỉ mà còn...",
        "Vừa mới... xong",
        "Lo ngại có thể có một sự việc xấu, nguy hiểm sẽ xảy ra"
      ],
      "answer": 3,
      "translation": "Đặc điểm của 〜恐れがある: Lo ngại có thể có một sự việc xấu, nguy hiểm sẽ xảy ra",
      "explanation": "Đáp án đúng là D. Mang văn phong trang trọng, thường xuất hiện trong bản tin thời sự, dự báo thời tiết, thông báo y tế hoặc văn bản pháp quy.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜<ruby>恐れ<rt>おそれ</rt></ruby>がある」đ」ư」ợc sử dụng với sắc thái / hoàn cảnh nào sau đo sau ây?",
      "hintTranslation": "（......） Đặc điểm của 〜恐れがある: Lo ngại có thể có một sự việc xấu, nguy hiểm sẽ xảy ra"
    },
    {
      "id": 20,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "Mẫu ngữ pháp「〜たばかり」(V（タ形） + ばかり) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Một mặt thì... mặt khác thì...",
        "Độ... / Mức độ...",
        "Vừa mới... xong (theo cảm nhận chủ quan của người nói)",
        "Tuyệt đối không... đâu / Làm sao mà..."
      ],
      "answer": 2,
      "translation": "Ngữ pháp: 〜たばかり (ta bakari) ➔ Ý nghĩa: Vừa mới... xong (theo cảm nhận chủ quan của người nói)",
      "explanation": "Đáp án đúng là C. 「〜たばかり」diễn tả hành động vừa xảy ra cách đây ít lâu theo cảm nhận chủ quan của người nói (Ví dụ: Vừa mới vào công ty được 1 tuần; Vừa mới ăn cơm xong).",
      "rubyQuestion": "Mẫu ngữ pháp「〜たばかり」(V（タ<ruby>形<rt>かたち</rt></ruby>） + ばかり) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜たばかり (ta bakari) ➔ Ý nghĩa: （......）... xong (theo cảm nhận chủ quan của người nói)"
    },
    {
      "id": 21,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "Mẫu ngữ pháp「〜っぽい」(N / Aい（bỏ い） / Vます（bỏ ます） + っぽい) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Thay cho... / Thay vì...",
        "Vừa mới... xong",
        "Có vẻ như / Giống như... (cảm giác bề ngoài, màu sắc)",
        "Lẽ nào lại... / Làm sao có chuyện..."
      ],
      "answer": 2,
      "translation": "Ngữ pháp: 〜っぽい (-ppoi) ➔ Ý nghĩa: Có vẻ như / Giống như... (cảm giác bề ngoài, màu sắc)",
      "explanation": "Đáp án đúng là C. 「〜っぽい」có 3 nghĩa chính: 1. Có vẻ như (大人っぽい - giống người lớn, 白っぽい - hơi trắng); 2. Có nhiều chất gì đó (油っぽい - nhiều dầu mỡ); 3. Hay/Dễ làm gì (怒りっぽい - hay cáu, 忘れっぽい - hay quên).",
      "rubyQuestion": "Mẫu ngữ pháp「〜っぽい」(N / Aい（bỏ い） / Vます（bỏ ます） + っぽい) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "（......） Ngữ pháp: 〜っぽい (-ppoi) ➔ Ý nghĩa: Có vẻ như / Giống như... (cảm giác bề ngoài, màu sắc)"
    },
    {
      "id": 22,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜としても」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Không hẳn là... / Chưa chắc là...",
        "Nhờ có... / Nhờ ơn...",
        "Thêm vào đó... / Không chỉ mà còn...",
        "Dù giả định điều đó có xảy ra thì vế sau vẫn giữ nguyên"
      ],
      "answer": 3,
      "translation": "Đặc điểm của 〜としても: Dù giả định điều đó có xảy ra thì vế sau vẫn giữ nguyên",
      "explanation": "Đáp án đúng là D. Ví dụ: Cho dù tôi có trở thành người giàu thì lối sống của tôi vẫn bình dị như hiện tại.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜としても」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜としても: （......） giả định điều đó có xảy ra thì vế sau vẫn giữ nguyên"
    },
    {
      "id": 23,
      "unit": "Unit 10",
      "pattern": "〜によって / 〜により / 〜による",
      "question": "Mẫu ngữ pháp「〜によって / 〜により / 〜による」(N + によって / により / によるN) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Do / Vì... (nguyên nhân) HOẶC Bởi... (tác giả trong câu bị động)",
        "Làm sao mà... được / Tuyệt đối không...",
        "E là có nguy cơ xảy ra việc xấu",
        "Vừa mới... xong"
      ],
      "answer": 0,
      "translation": "Ngữ pháp: 〜によって / 〜により / 〜による (ni yotte / ni yori / ni yoru) ➔ Ý nghĩa: Do / Vì... (nguyên nhân) HOẶC Bởi... (tác giả trong câu bị động)",
      "explanation": "Đáp án đúng là A. 「〜によって」có 4 nghĩa quan trọng: 1. Do/Vì nguyên nhân; 2. Bởi ai (chủ thể bị động); 3. Bằng phương tiện/cách thức; 4. Tùy thuộc vào từng đối tượng.",
      "rubyQuestion": "Mẫu ngữ pháp「〜によって / 〜により / 〜による」(N + によって / により / によるN) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜によって / 〜により / 〜による (ni yotte / ni yori / ni yoru) ➔ Ý nghĩa: Do / Vì... (nguyên nhân) HOẶC （......）... (tác giả trong câu bị động)"
    },
    {
      "id": 24,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜ことは〜が〜」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "A thì có A nhưng không hoàn hảo / có điểm trừ",
        "Tuyệt đối không có chuyện... / Làm sao mà...",
        "Cho dù... đi chăng nữa",
        "Thêm vào đó... / Bên cạnh việc..."
      ],
      "answer": 0,
      "translation": "Đặc điểm của 〜ことは〜が〜: A thì có A nhưng không hoàn hảo / có điểm trừ",
      "explanation": "Đáp án đúng là A. Cấu trúc: V/AことはV/Aが... giúp câu nói mang tính khách quan, tế nhị hơn khi chê.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜ことは〜が〜」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜ことは〜が〜: A （......） A nhưng không hoàn hảo / có điểm trừ"
    },
    {
      "id": 25,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜っぽい」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Lẽ nào lại... / Làm sao có chuyện...",
        "Tùy vào... / Do...",
        "Dễ... / Hay... (xu hướng tính cách: hay quên, hay giận, chóng chán)",
        "Làm sao mà... được / Tuyệt đối không..."
      ],
      "answer": 2,
      "translation": "Đặc điểm của 〜っぽい: Dễ... / Hay... (xu hướng tính cách: hay quên, hay giận, chóng chán)",
      "explanation": "Đáp án đúng là C. Dùng nhiều trong văn nói thường ngày.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜っぽい」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜っぽい: Dễ... / Hay... (xu hướng tính cách: （......）, hay giận, chóng chán)"
    },
    {
      "id": 26,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "Mẫu ngữ pháp「〜おかげで」(V/A/N + おかげで) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Vừa mới... xong",
        "Do / Vì / Tại... (nguyên nhân đem lại kết quả xấu)",
        "Lẽ nào lại... / Tuyệt đối không thể",
        "Nhờ có... / Nhờ ơn... (chỉ nguyên nhân mang lại kết quả tốt)"
      ],
      "answer": 3,
      "translation": "Ngữ pháp: 〜おかげで (okage de) ➔ Ý nghĩa: Nhờ có... / Nhờ ơn... (chỉ nguyên nhân mang lại kết quả tốt)",
      "explanation": "Đáp án đúng là D. 「〜おかげで」chỉ nguyên nhân đem lại kết quả tốt đẹp, thuận lợi. Thể hiện sự cảm kích, biết ơn.",
      "rubyQuestion": "Mẫu ngữ pháp「〜おかげで」(V/A/N + おかげで) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜おかげで (okage de) ➔ Ý nghĩa: （......）... / Nhờ ơn... (chỉ nguyên nhân mang lại kết quả tốt)"
    },
    {
      "id": 27,
      "unit": "Unit 12",
      "pattern": "〜とは限りません / 〜とは限らない",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜とは限りません / 〜とは限らない」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Tuyệt đối không... đâu",
        "E là... / Có nguy cơ...",
        "Cho dù... đi chăng nữa",
        "Không nhất thiết 100% luôn luôn như vậy, vẫn có trường hợp ngoại lệ"
      ],
      "answer": 3,
      "translation": "Đặc điểm của 〜とは限りません / 〜とは限らない: Không nhất thiết 100% luôn luôn như vậy, vẫn có trường hợp ngoại lệ",
      "explanation": "Đáp án đúng là D. Thường đi kèm các phó từ: 必ずしも (chưa hẳn), いつも (luôn luôn), 全部 (toàn bộ).",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜とは<ruby>限り<rt>かぎり</rt></ruby>ません / 〜とは<ruby>限ら<rt>かぎら</rt></ruby>ない」đ」ư」ợc sử dụng với sắc thái / hoàn cảnh nào sau đo sau ây?",
      "hintTranslation": "（......） Đặc điểm của 〜とは限りません / 〜とは限らない: Không nhất thiết 100% luôn luôn như vậy, vẫn có trường hợp ngoại lệ"
    },
    {
      "id": 28,
      "unit": "Unit 11",
      "pattern": "〜さ（Aいさ / なAさ）",
      "question": "Mẫu ngữ pháp「〜さ（Aいさ / なAさ）」(Aい（bỏ い） + さ / Aな + さ) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Có vẻ như / Có khuynh hướng tính cách...",
        "Chưa chắc là... / Không hẳn là...",
        "Cho dù... đi chăng nữa",
        "Độ... / Mức độ... (danh từ hóa tính từ đo lường)"
      ],
      "answer": 3,
      "translation": "Ngữ pháp: 〜さ（Aいさ / なAさ） (-sa) ➔ Ý nghĩa: Độ... / Mức độ... (danh từ hóa tính từ đo lường)",
      "explanation": "Đáp án đúng là D. Thêm đuôi「〜さ」vào sau gốc tính từ để tạo thành danh từ chỉ mức độ đo lường khách quan (Ví dụ: 重さ - độ nặng, 長さ - chiều dài, 深さ - độ sâu).",
      "rubyQuestion": "Mẫu ngữ pháp「〜さ（Aいさ / なAさ）」(Aい（bỏ い） + さ / Aな + さ) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜さ（Aいさ / なAさ） (-sa) ➔ Ý nghĩa: （......）... / Mức độ... (danh từ hóa tính từ đo lường)"
    },
    {
      "id": 29,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "Mẫu ngữ pháp「〜さえ」(N / Vます（bỏ ます） + さえ) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Nên... / Phải... (lời khuyên tốt nhất)",
        "Không hẳn là... / Chưa chắc là...",
        "Ngay cả... / Đến cả... (cũng không)",
        "Tùy vào mỗi người..."
      ],
      "answer": 2,
      "translation": "Ngữ pháp: 〜さえ (sae) ➔ Ý nghĩa: Ngay cả... / Đến cả... (cũng không)",
      "explanation": "Đáp án đúng là C. 「〜さえ」nêu ra một ví dụ cực đoan hoặc ở mức tối thiểu mà còn (không) làm được, huống chi là những thứ khác (Ví dụ: Ngay cả tên mình cũng không viết được).",
      "rubyQuestion": "Mẫu ngữ pháp「〜さえ」(N / Vます（bỏ ます） + さえ) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜さえ (sae) ➔ Ý nghĩa: （......）... / Đến cả... (cũng không)"
    },
    {
      "id": 30,
      "unit": "Unit 10",
      "pattern": "〜てほしい / 〜ないでほしい",
      "question": "Mẫu ngữ pháp「〜てほしい / 〜ないでほしい」(Vてほしい / Vないでほしい) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Lẽ nào lại... / Tuyệt đối không thể...",
        "Muốn (ai đó) làm... / Mong (ai đó) đừng làm...",
        "Cho dù... đi chăng nữa",
        "Đã vừa mới... xong"
      ],
      "answer": 1,
      "translation": "Ngữ pháp: 〜てほしい / 〜ないでほしい (te hoshii / naide hoshii) ➔ Ý nghĩa: Muốn (ai đó) làm... / Mong (ai đó) đừng làm...",
      "explanation": "Đáp án đúng là B. 「〜てほしい」dùng để biểu đạt mong muốn của người nói yêu cầu đối phương hoặc người khác thực hiện một hành động (hoặc mong một hiện tượng tự nhiên xảy ra).",
      "rubyQuestion": "Mẫu ngữ pháp「〜てほしい / 〜ないでほしい」(Vてほしい / Vないでほしい) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜てほしい / 〜ないでほしい (te hoshii / naide hoshii) ➔ Ý nghĩa: （......） (ai đó) làm... / Mong (ai đó) đừng làm..."
    },
    {
      "id": 31,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "Mẫu ngữ pháp「〜に加えて」(N + に加えて) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Thay vì... / Thay cho...",
        "Thêm vào đó... / Không chỉ... mà còn...",
        "Làm sao mà... được / Tuyệt đối không...",
        "Trái ngược với... / Đối với..."
      ],
      "answer": 1,
      "translation": "Ngữ pháp: 〜に加えて (ni kuwaete) ➔ Ý nghĩa: Thêm vào đó... / Không chỉ... mà còn...",
      "explanation": "Đáp án đúng là B. 「〜に加えて」(chữ Hán là 加 - gia tăng) dùng để bổ sung thêm một điều gì đó cùng tính chất (Ví dụ: Ngoài kiến thức chuyên môn, anh ấy còn có kinh nghiệm phong phú).",
      "rubyQuestion": "Mẫu ngữ pháp「〜に<ruby>加え<rt>くわえ</rt></ruby>て」(N + に<ruby>加え<rt>くわえ</rt></ruby>て) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜に加えて (ni kuwaete) ➔ Ý nghĩa: （......）... / Không chỉ... mà còn..."
    },
    {
      "id": 32,
      "unit": "Unit 10",
      "pattern": "〜てほしい / 〜ないでほしい",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜てほしい / 〜ないでほしい」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Mong ước, nguyện vọng người khác làm điều gì đó cho mình",
        "Một mặt thì... mặt khác thì...",
        "Thêm vào đó... / Không chỉ mà còn...",
        "Cho dù... đi chăng nữa"
      ],
      "answer": 0,
      "translation": "Đặc điểm của 〜てほしい / 〜ないでほしい: Mong ước, nguyện vọng người khác làm điều gì đó cho mình",
      "explanation": "Đáp án đúng là A. Phân biệt: Vたい là bản thân người nói muốn làm; còn Vてほしい là muốn NGƯỜI KHÁC làm.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜てほしい / 〜ないでほしい」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜てほしい / 〜ないでほしい: （......） ước, nguyện vọng người khác làm điều gì đó cho mình"
    },
    {
      "id": 33,
      "unit": "Unit 11",
      "pattern": "〜そうにない / 〜そうもない",
      "question": "Mẫu ngữ pháp「〜そうにない / 〜そうもない」(Vます（bỏ ます） + そうにない / そうもない) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Thay cho... / Thay vì...",
        "Cho dù... đi chăng nữa",
        "Cứ mỗi lần... lại...",
        "Có vẻ là không... / Khó lòng mà... (khả năng xảy ra cực kỳ thấp)"
      ],
      "answer": 3,
      "translation": "Ngữ pháp: 〜そうにない / 〜そうもない (sou ni nai / sou mo nai) ➔ Ý nghĩa: Có vẻ là không... / Khó lòng mà... (khả năng xảy ra cực kỳ thấp)",
      "explanation": "Đáp án đúng là D. 「〜そうにない」diễn tả phán đoán của người nói dựa trên quan sát thực tế rằng khả năng một hành động/sự việc diễn ra là rất khó hoặc gần như không thể.",
      "rubyQuestion": "Mẫu ngữ pháp「〜そうにない / 〜そうもない」(Vます（bỏ ます） + そうにない / そうもない) có ý nghĩa tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜そうにない / 〜そうもない (sou ni nai / sou mo nai) ➔ Ý nghĩa: Có vẻ là không... / （......）... (khả năng xảy ra cực kỳ thấp)"
    },
    {
      "id": 34,
      "unit": "Unit 11",
      "pattern": "〜ものか / 〜もんか",
      "question": "Mẫu ngữ pháp「〜ものか / 〜もんか」(V辞書形 / A / N + ものか) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Vừa mới... xong",
        "Làm sao mà... được / Tuyệt đối không... đâu!",
        "Cứ mỗi lần... lại...",
        "Muốn ai đó làm việc gì cho mình"
      ],
      "answer": 1,
      "translation": "Ngữ pháp: 〜ものか / 〜もんか (mono ka / mon ka) ➔ Ý nghĩa: Làm sao mà... được / Tuyệt đối không... đâu!",
      "explanation": "Đáp án đúng là B. 「〜ものか」(văn nói thân mật: もんか) thể hiện sự phủ định đanh thép và quyết tâm mạnh mẽ của người nói (Ví dụ: Quán ăn tệ thế này tôi quyết không đến lần thứ hai đâu!).",
      "rubyQuestion": "Mẫu ngữ pháp「〜ものか / 〜もんか」(V<ruby>辞書<rt>じしょ</rt></ruby><ruby>形<rt>かたち</rt></ruby> / A / N + ものか) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜ものか / 〜もんか (mono ka / mon ka) ➔ Ý nghĩa: （......）... được / Tuyệt đối không... đâu!"
    },
    {
      "id": 35,
      "unit": "Unit 11",
      "pattern": "〜さ（Aいさ / なAさ）",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜さ（Aいさ / なAさ）」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Có vẻ như / Có khuynh hướng tính cách...",
        "Vừa mới... xong",
        "Ngay cả... / Thậm chí đến cả...",
        "Biến đổi tính từ thành danh từ biểu thị mức độ tính chất (độ cao, độ sâu, sức nặng...)"
      ],
      "answer": 3,
      "translation": "Đặc điểm của 〜さ（Aいさ / なAさ）: Biến đổi tính từ thành danh từ biểu thị mức độ tính chất (độ cao, độ sâu, sức nặng...)",
      "explanation": "Đáp án đúng là D. Trường hợp ngoại lệ đặc biệt: いい / よい biến thành よさ (điểm tốt, nét đẹp).",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜さ（Aいさ / なAさ）」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜さ（Aいさ / なAさ）: Biến đổi tính từ thành danh từ biểu thị mức độ tính chất (độ cao, （......）, sức nặng...)"
    },
    {
      "id": 36,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "Mẫu ngữ pháp「〜代わりに」(V辞書形 / Nの + かわりに) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Độ... / Mức độ... (danh từ hóa)",
        "Do / Vì / Tại... (đổ lỗi)",
        "Thay cho... / Thay vì... (thay thế người, vật hoặc hành động)",
        "E là... / Có nguy cơ xảy ra việc xấu"
      ],
      "answer": 2,
      "translation": "Ngữ pháp: 〜代わりに (kawari ni) ➔ Ý nghĩa: Thay cho... / Thay vì... (thay thế người, vật hoặc hành động)",
      "explanation": "Đáp án đúng là C. 「〜代わりに」diễn tả ý thay thế: không làm A mà làm B, hoặc dùng B để thay cho A (Ví dụ: Uống nước thay vì uống nước ngọt).",
      "rubyQuestion": "Mẫu ngữ pháp「〜<ruby>代わり<rt>かわり</rt></ruby>に」(V<ruby>辞書<rt>じしょ</rt></ruby><ruby>形<rt>かたち</rt></ruby> / Nの + かわりに) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜代わりに (kawari ni) ➔ Ý nghĩa: （......）... / Thay vì... (thay thế người, vật hoặc hành động)"
    },
    {
      "id": 37,
      "unit": "Unit 11",
      "pattern": "〜そうにない / 〜そうもない",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜そうにない / 〜そうもない」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Nhờ có... / Nhờ ơn...",
        "Nhìn tình hình thì khó mà hoàn thành/xảy ra được",
        "Vừa mới... xong",
        "Thay cho... / Thay vì..."
      ],
      "answer": 1,
      "translation": "Đặc điểm của 〜そうにない / 〜そうもない: Nhìn tình hình thì khó mà hoàn thành/xảy ra được",
      "explanation": "Đáp án đúng là B. Bản chất là thể phủ định của 〜そうだ (trông có vẻ).",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜そうにない / 〜そうもない」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "（......） Đặc điểm của 〜そうにない / 〜そうもない: Nhìn tình hình thì khó mà hoàn thành/xảy ra được"
    },
    {
      "id": 38,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜に加えて」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Cho dù... đi chăng nữa",
        "Trái ngược với... / Đối với...",
        "Cứ mỗi lần... lại...",
        "Bên cạnh N, hơn thế nữa còn bổ sung thêm một yếu tố khác"
      ],
      "answer": 3,
      "translation": "Đặc điểm của 〜に加えて: Bên cạnh N, hơn thế nữa còn bổ sung thêm một yếu tố khác",
      "explanation": "Đáp án đúng là D. Thường dùng trong văn viết hoặc văn phong trang trọng. Có thể lược bỏ て thành 〜にくわえ.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜に<ruby>加え<rt>くわえ</rt></ruby>て」đ」ư」ợc sử dụng với sắc thái / hoàn cảnh nào sau đo sau ây?",
      "hintTranslation": "Đặc điểm của 〜に加えて: （......） N, hơn thế nữa còn bổ sung thêm một yếu tố khác"
    },
    {
      "id": 39,
      "unit": "Unit 10",
      "pattern": "〜によって / 〜により / 〜による",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜によって / 〜により / 〜による」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Vừa mới... xong",
        "Bằng cách / Nhờ vào... (phương tiện, phương pháp) HOẶC Tùy vào...",
        "E là có nguy cơ xảy ra việc xấu",
        "Làm sao mà... được / Tuyệt đối không..."
      ],
      "answer": 1,
      "translation": "Đặc điểm của 〜によって / 〜により / 〜による: Bằng cách / Nhờ vào... (phương tiện, phương pháp) HOẶC Tùy vào...",
      "explanation": "Đáp án đúng là B. Đứng trước danh từ sẽ biến đổi thành「〜による + N」.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜によって / 〜により / 〜による」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜によって / 〜により / 〜による: Bằng cách / Nhờ vào... (phương tiện, phương pháp) HOẶC （......）..."
    },
    {
      "id": 40,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜せいで」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Tại vì... mà bị liên lụy (kết quả chẳng lành, quy trách nhiệm)",
        "Nhờ có... / Nhờ ơn...",
        "Trái ngược với... / Đối với...",
        "Độ... / Mức độ..."
      ],
      "answer": 0,
      "translation": "Đặc điểm của 〜せいで: Tại vì... mà bị liên lụy (kết quả chẳng lành, quy trách nhiệm)",
      "explanation": "Đáp án đúng là A. Phân biệt: Kết quả tốt dùng 〜おかげで, kết quả xấu đổ trách nhiệm dùng 〜せいで.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜せいで」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜せいで: （......）... mà bị liên lụy (kết quả chẳng lành, quy trách nhiệm)"
    },
    {
      "id": 41,
      "unit": "Unit 12",
      "pattern": "〜とは限りません / 〜とは限らない",
      "question": "Mẫu ngữ pháp「〜とは限りません / 〜とは限らない」(普通形 + とは限らない) có ý nghĩa tiếng Việt chính xác là gì?",
      "options": [
        "Không hẳn là... / Chưa chắc là... (phủ định một phần)",
        "Cho dù... đi chăng nữa",
        "Thêm vào đó... / Không chỉ mà còn...",
        "Tuyệt đối không... đâu"
      ],
      "answer": 0,
      "translation": "Ngữ pháp: 〜とは限りません / 〜とは限らない (to wa kagiranai) ➔ Ý nghĩa: Không hẳn là... / Chưa chắc là... (phủ định một phần)",
      "explanation": "Đáp án đúng là A. 「〜とは限らない」dùng để phủ định một phần: không phải lúc nào cũng là như thế, vẫn có khả năng ngoại lệ (Ví dụ: Đắt tiền chưa chắc đã là đồ tốt).",
      "rubyQuestion": "Mẫu ngữ pháp「〜とは<ruby>限り<rt>かぎり</rt></ruby>ません / 〜とは<ruby>限ら<rt>かぎら</rt></ruby>ない」(<ruby>普通<rt>ふつう</rt></ruby><ruby>形<rt>かたち</rt></ruby> + とは<ruby>限ら<rt>かぎら</rt></ruby>ない) có ý nghĩ ngha tiếng Việt chính xác là gì?",
      "hintTranslation": "Ngữ pháp: 〜とは限りません / 〜とは限らない (to wa kagiranai) ➔ Ý nghĩa: Không hẳn là... / （......）... (phủ định một phần)"
    },
    {
      "id": 42,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "Trong tiếng Nhật, mẫu ngữ pháp「〜たばかり」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "options": [
        "Do / Vì / Tại... (đổ lỗi)",
        "Tuyệt đối không... đâu / Làm sao mà...",
        "Hành động vừa mới kết thúc cách đây không lâu",
        "Một mặt thì... mặt khác thì..."
      ],
      "answer": 2,
      "translation": "Đặc điểm của 〜たばかり: Hành động vừa mới kết thúc cách đây không lâu",
      "explanation": "Đáp án đúng là C. Khác với 〜たところ (thời gian thực tế vừa trôi qua trong tích tắc), 〜たばかり có thể dùng cho sự việc đã qua vài tháng nếu người nói cảm thấy như mới hôm qua.",
      "rubyQuestion": "Trong tiếng Nhật, mẫu ngữ pháp「〜たばかり」được sử dụng với sắc thái / hoàn cảnh nào sau đây?",
      "hintTranslation": "Đặc điểm của 〜たばかり: Hành động （......） kết thúc cách đây không lâu"
    }
  ],
  "meaning-to-grammar": [
    {
      "id": 1,
      "unit": "Unit 12",
      "pattern": "〜とは限りません / 〜とは限らない",
      "question": "Ý nghĩa tiếng Việt: \"Không hẳn là... / Chưa chắc là... (phủ định một phần)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜ことは〜が〜",
        "〜とは限りません / 〜とは限らない",
        "〜ごとに",
        "〜に加えて"
      ],
      "answer": 1,
      "translation": "Ý nghĩa: \"Không hẳn là... / Chưa chắc là... (phủ định một phần)\" ➔ Mẫu ngữ pháp: 〜とは限りません / 〜とは限らない",
      "explanation": "Đáp án đúng là B (「〜とは限りません / 〜とは限らない」). 「〜とは限らない」dùng để phủ định một phần: không phải lúc nào cũng là như thế, vẫn có khả năng ngoại lệ (Ví dụ: Đắt tiền chưa chắc đã là đồ tốt).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Không hẳn là... / Chưa chắc là... (phủ định một phần)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"Không hẳn là... / （......）... (phủ định một phần)\" ➔ Mẫu ngữ pháp: 〜とは限りません / 〜とは限らない"
    },
    {
      "id": 2,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "Khi muốn diễn đạt: \"Tại vì... mà bị liên lụy (kết quả chẳng lành, quy trách nhiệm)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜わけがない",
        "〜せいで",
        "〜恐れがある",
        "〜としても"
      ],
      "answer": 1,
      "translation": "Sắc thái: \"Tại vì... mà bị liên lụy (kết quả chẳng lành, quy trách nhiệm)\" ➔ 〜せいで",
      "explanation": "Đáp án đúng là B (「〜せいで」). Phân biệt: Kết quả tốt dùng 〜おかげで, kết quả xấu đổ trách nhiệm dùng 〜せいで.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Tại vì... mà bị liên lụy (kết quả chẳng lành, quy trách nhiệm)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......）... mà bị liên lụy (kết quả chẳng lành, quy trách nhiệm)\" ➔ 〜せいで"
    },
    {
      "id": 3,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "Khi muốn diễn đạt: \"Bù lại... / Đổi lại... (sự bù trừ qua lại)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜一方で",
        "〜代わりに",
        "〜さえ",
        "〜っぽい"
      ],
      "answer": 1,
      "translation": "Sắc thái: \"Bù lại... / Đổi lại... (sự bù trừ qua lại)\" ➔ 〜代わりに",
      "explanation": "Đáp án đúng là B (「〜代わりに」). Ngoài ra còn có ý bù trừ: Công việc tuy vất vả nhưng bù lại lương rất cao.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Bù lại... / Đổi lại... (sự bù trừ qua lại)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "（......） Sắc thái: \"Bù lại... / Đổi lại... (sự bù trừ qua lại)\" ➔ 〜代わりに"
    },
    {
      "id": 4,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "Khi muốn diễn đạt: \"Nhờ có... (đôi khi dùng với sắc thái mỉa mai, châm biếm)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜ものか / 〜もんか",
        "〜によって / 〜により / 〜による",
        "〜に加えて",
        "〜おかげで"
      ],
      "answer": 3,
      "translation": "Sắc thái: \"Nhờ có... (đôi khi dùng với sắc thái mỉa mai, châm biếm)\" ➔ 〜おかげで",
      "explanation": "Đáp án đúng là D (「〜おかげで」). Khi dùng với kết quả xấu, 〜おかげで mang hàm ý mỉa mai, trách khéo (Ví dụ: Nhờ ơn cậu làm sai mà tớ phải làm lại hết).",
      "rubyQuestion": "Khi muốn diễn đạt: \"Nhờ có... (đôi khi dùng với sắc thái mỉa mai, châm biếm)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......）... (đôi khi dùng với sắc thái mỉa mai, châm biếm)\" ➔ 〜おかげで"
    },
    {
      "id": 5,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "Ý nghĩa tiếng Việt: \"Ngay cả... / Đến cả... (cũng không)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜ことは〜が〜",
        "〜ことだ",
        "〜さえ",
        "〜さ（Aいさ / なAさ）"
      ],
      "answer": 2,
      "translation": "Ý nghĩa: \"Ngay cả... / Đến cả... (cũng không)\" ➔ Mẫu ngữ pháp: 〜さえ",
      "explanation": "Đáp án đúng là C (「〜さえ」). 「〜さえ」nêu ra một ví dụ cực đoan hoặc ở mức tối thiểu mà còn (không) làm được, huống chi là những thứ khác (Ví dụ: Ngay cả tên mình cũng không viết được).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Ngay cả... / Đến cả... (cũng không)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... / Đến cả... (cũng không)\" ➔ Mẫu ngữ pháp: 〜さえ"
    },
    {
      "id": 6,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "Ý nghĩa tiếng Việt: \"Đối với... (thái độ, hành vi hướng tới ai/cái gì)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜に対して",
        "〜によって / 〜により / 〜による",
        "〜おかげで",
        "〜ものか / 〜もんか"
      ],
      "answer": 0,
      "translation": "Ý nghĩa: \"Đối với... (thái độ, hành vi hướng tới ai/cái gì)\" ➔ Mẫu ngữ pháp: 〜に対して",
      "explanation": "Đáp án đúng là A (「〜に対して」). 「〜に対して」nghĩa 1: Hướng hành động/thái độ vào đối tượng (Ví dụ: Thầy giáo rất thân thiện đối với học sinh; Danh từ đi kèm: に対するN).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Đối với... (thái độ, hành vi hướng tới ai/cái gì)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... (thái độ, hành vi hướng tới ai/cái gì)\" ➔ Mẫu ngữ pháp: 〜に対して"
    },
    {
      "id": 7,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "Khi muốn diễn đạt: \"Lo ngại có thể có một sự việc xấu, nguy hiểm sẽ xảy ra\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜に対して",
        "〜おかげで",
        "〜恐れがある",
        "〜わけがない"
      ],
      "answer": 2,
      "translation": "Sắc thái: \"Lo ngại có thể có một sự việc xấu, nguy hiểm sẽ xảy ra\" ➔ 〜恐れがある",
      "explanation": "Đáp án đúng là C (「〜恐れがある」). Mang văn phong trang trọng, thường xuất hiện trong bản tin thời sự, dự báo thời tiết, thông báo y tế hoặc văn bản pháp quy.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Lo ngại có thể có một sự việc xấu, nguy hiểm sẽ xảy ra\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "（......） Sắc thái: \"Lo ngại có thể có một sự việc xấu, nguy hiểm sẽ xảy ra\" ➔ 〜恐れがある"
    },
    {
      "id": 8,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "Ý nghĩa tiếng Việt: \"Thêm vào đó... / Không chỉ... mà còn...\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜さ（Aいさ / なAさ）",
        "〜恐れがある",
        "〜に加えて",
        "〜たばかり"
      ],
      "answer": 2,
      "translation": "Ý nghĩa: \"Thêm vào đó... / Không chỉ... mà còn...\" ➔ Mẫu ngữ pháp: 〜に加えて",
      "explanation": "Đáp án đúng là C (「〜に加えて」). 「〜に加えて」(chữ Hán là 加 - gia tăng) dùng để bổ sung thêm một điều gì đó cùng tính chất (Ví dụ: Ngoài kiến thức chuyên môn, anh ấy còn có kinh nghiệm phong phú).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Thêm vào đó... / Không chỉ... mà còn...\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... / Không chỉ... mà còn...\" ➔ Mẫu ngữ pháp: 〜に加えて"
    },
    {
      "id": 9,
      "unit": "Unit 9",
      "pattern": "〜おかげで",
      "question": "Ý nghĩa tiếng Việt: \"Nhờ có... / Nhờ ơn... (chỉ nguyên nhân mang lại kết quả tốt)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜恐れがある",
        "〜たばかり",
        "〜おかげで",
        "〜ことは〜が〜"
      ],
      "answer": 2,
      "translation": "Ý nghĩa: \"Nhờ có... / Nhờ ơn... (chỉ nguyên nhân mang lại kết quả tốt)\" ➔ Mẫu ngữ pháp: 〜おかげで",
      "explanation": "Đáp án đúng là C (「〜おかげで」). 「〜おかげで」chỉ nguyên nhân đem lại kết quả tốt đẹp, thuận lợi. Thể hiện sự cảm kích, biết ơn.",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Nhờ có... / Nhờ ơn... (chỉ nguyên nhân mang lại kết quả tốt)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... / Nhờ ơn... (chỉ nguyên nhân mang lại kết quả tốt)\" ➔ Mẫu ngữ pháp: 〜おかげで"
    },
    {
      "id": 10,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "Ý nghĩa tiếng Việt: \"Nên... / Phải... (đưa ra lời khuyên, giải pháp tốt nhất)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜せいで",
        "〜としても",
        "〜に加えて",
        "〜ことだ"
      ],
      "answer": 3,
      "translation": "Ý nghĩa: \"Nên... / Phải... (đưa ra lời khuyên, giải pháp tốt nhất)\" ➔ Mẫu ngữ pháp: 〜ことだ",
      "explanation": "Đáp án đúng là D (「〜ことだ」). 「〜ことだ」dùng trong văn nói trực tiếp để khuyên nhủ ai đó: Làm việc đó là tốt nhất, thích hợp nhất trong hoàn cảnh này.",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Nên... / Phải... (đưa ra lời khuyên, giải pháp tốt nhất)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"Nên... / （......）... (đưa ra lời khuyên, giải pháp tốt nhất)\" ➔ Mẫu ngữ pháp: 〜ことだ"
    },
    {
      "id": 11,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "Khi muốn diễn đạt: \"Cứ cách một khoảng thời gian/chu kỳ thì lại lặp lại một lần (mỗi...)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜ごとに",
        "〜わけがない",
        "〜に対して",
        "〜てほしい / 〜ないでほしい"
      ],
      "answer": 0,
      "translation": "Sắc thái: \"Cứ cách một khoảng thời gian/chu kỳ thì lại lặp lại một lần (mỗi...)\" ➔ 〜ごとに",
      "explanation": "Đáp án đúng là A (「〜ごとに」). Khác với 〜たびに (nhấn mạnh cứ mỗi lần A thì lại xảy ra B bất kể thời gian), 〜ごとに nhấn mạnh sự lặp lại đều đặn theo chu kỳ, chuỗi thời gian hoặc đơn vị phân chia.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Cứ cách một khoảng thời gian/chu kỳ thì lại lặp lại một lần (mỗi...)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......） cách một khoảng thời gian/chu kỳ thì lại lặp lại một lần (mỗi...)\" ➔ 〜ごとに"
    },
    {
      "id": 12,
      "unit": "Unit 9",
      "pattern": "〜さえ",
      "question": "Khi muốn diễn đạt: \"Thậm chí đến mức... (ví dụ điển hình ở mức tối thiểu để ngụ ý những cái khác)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜さえ",
        "〜ことだ",
        "〜ごとに",
        "〜に対して"
      ],
      "answer": 0,
      "translation": "Sắc thái: \"Thậm chí đến mức... (ví dụ điển hình ở mức tối thiểu để ngụ ý những cái khác)\" ➔ 〜さえ",
      "explanation": "Đáp án đúng là A (「〜さえ」). Thường đi kèm trợ từ phủ định hoặc câu mang hàm ý bất ngờ, thất vọng.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Thậm chí đến mức... (ví dụ điển hình ở mức tối thiểu để ngụ ý những cái khác)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......） đến mức... (ví dụ điển hình ở mức tối thiểu để ngụ ý những cái khác)\" ➔ 〜さえ"
    },
    {
      "id": 13,
      "unit": "Unit 11",
      "pattern": "〜さ（Aいさ / なAさ）",
      "question": "Ý nghĩa tiếng Việt: \"Độ... / Mức độ... (danh từ hóa tính từ đo lường)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜恐れがある",
        "〜さ（Aいさ / なAさ）",
        "〜ことだ",
        "〜ごとに"
      ],
      "answer": 1,
      "translation": "Ý nghĩa: \"Độ... / Mức độ... (danh từ hóa tính từ đo lường)\" ➔ Mẫu ngữ pháp: 〜さ（Aいさ / なAさ）",
      "explanation": "Đáp án đúng là B (「〜さ（Aいさ / なAさ）」). Thêm đuôi「〜さ」vào sau gốc tính từ để tạo thành danh từ chỉ mức độ đo lường khách quan (Ví dụ: 重さ - độ nặng, 長さ - chiều dài, 深さ - độ sâu).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Độ... / Mức độ... (danh từ hóa tính từ đo lường)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... / Mức độ... (danh từ hóa tính từ đo lường)\" ➔ Mẫu ngữ pháp: 〜さ（Aいさ / なAさ）"
    },
    {
      "id": 14,
      "unit": "Unit 9",
      "pattern": "〜ごとに",
      "question": "Ý nghĩa tiếng Việt: \"Cứ mỗi lần... lại... / Từng... một\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜ごとに",
        "〜さえ",
        "〜そうにない / 〜そうもない",
        "〜恐れがある"
      ],
      "answer": 0,
      "translation": "Ý nghĩa: \"Cứ mỗi lần... lại... / Từng... một\" ➔ Mẫu ngữ pháp: 〜ごとに",
      "explanation": "Đáp án đúng là A (「〜ごとに」). 「〜ごとに」(chữ Hán là 毎に) diễn tả hành động hay sự việc cứ lặp lại tuần tự theo chu kỳ hoặc đơn vị (Ví dụ: 10分ごとに - cứ 10 phút một lần).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Cứ mỗi lần... lại... / Từng... một\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... lại... / Từng... một\" ➔ Mẫu ngữ pháp: 〜ごとに"
    },
    {
      "id": 15,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "Ý nghĩa tiếng Việt: \"Tuy có... thật đấy, nhưng mà... (công nhận một phần nhưng vế sau hạn chế)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜ごとに",
        "〜せいで",
        "〜一方で",
        "〜ことは〜が〜"
      ],
      "answer": 3,
      "translation": "Ý nghĩa: \"Tuy có... thật đấy, nhưng mà... (công nhận một phần nhưng vế sau hạn chế)\" ➔ Mẫu ngữ pháp: 〜ことは〜が〜",
      "explanation": "Đáp án đúng là D (「〜ことは〜が〜」). 「〜ことは〜が〜」dùng bằng cách lặp lại cùng một động từ hoặc tính từ, biểu thị sự nhượng bộ: thừa nhận vế trước nhưng vế sau nêu mặt hạn chế (Ví dụ: Ngon thì ngon thật đấy nhưng giá đắt quá).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Tuy có... thật đấy, nhưng mà... (công nhận một phần nhưng vế sau hạn chế)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "（......） Ý nghĩa: \"Tuy có... thật đấy, nhưng mà... (công nhận một phần nhưng vế sau hạn chế)\" ➔ Mẫu ngữ pháp: 〜ことは〜が〜"
    },
    {
      "id": 16,
      "unit": "Unit 10",
      "pattern": "〜てほしい / 〜ないでほしい",
      "question": "Ý nghĩa tiếng Việt: \"Muốn (ai đó) làm... / Mong (ai đó) đừng làm...\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜てほしい / 〜ないでほしい",
        "〜さえ",
        "〜代わりに",
        "〜によって / 〜により / 〜による"
      ],
      "answer": 0,
      "translation": "Ý nghĩa: \"Muốn (ai đó) làm... / Mong (ai đó) đừng làm...\" ➔ Mẫu ngữ pháp: 〜てほしい / 〜ないでほしい",
      "explanation": "Đáp án đúng là A (「〜てほしい / 〜ないでほしい」). 「〜てほしい」dùng để biểu đạt mong muốn của người nói yêu cầu đối phương hoặc người khác thực hiện một hành động (hoặc mong một hiện tượng tự nhiên xảy ra).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Muốn (ai đó) làm... / Mong (ai đó) đừng làm...\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......） (ai đó) làm... / Mong (ai đó) đừng làm...\" ➔ Mẫu ngữ pháp: 〜てほしい / 〜ないでほしい"
    },
    {
      "id": 17,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "Ý nghĩa tiếng Việt: \"Vừa mới... xong (theo cảm nhận chủ quan của người nói)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜としても",
        "〜たばかり",
        "〜さえ",
        "〜ことだ"
      ],
      "answer": 1,
      "translation": "Ý nghĩa: \"Vừa mới... xong (theo cảm nhận chủ quan của người nói)\" ➔ Mẫu ngữ pháp: 〜たばかり",
      "explanation": "Đáp án đúng là B (「〜たばかり」). 「〜たばかり」diễn tả hành động vừa xảy ra cách đây ít lâu theo cảm nhận chủ quan của người nói (Ví dụ: Vừa mới vào công ty được 1 tuần; Vừa mới ăn cơm xong).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Vừa mới... xong (theo cảm nhận chủ quan của người nói)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... xong (theo cảm nhận chủ quan của người nói)\" ➔ Mẫu ngữ pháp: 〜たばかり"
    },
    {
      "id": 18,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "Khi muốn diễn đạt: \"Vừa... vừa... / Song song đó (đồng thời tiến hành hoặc tồn tại)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜っぽい",
        "〜おかげで",
        "〜一方で",
        "〜ごとに"
      ],
      "answer": 2,
      "translation": "Sắc thái: \"Vừa... vừa... / Song song đó (đồng thời tiến hành hoặc tồn tại)\" ➔ 〜一方で",
      "explanation": "Đáp án đúng là C (「〜一方で」). Ngoài ý nghĩa đối lập, 〜一方で còn dùng để chỉ sự song hành: cùng lúc vừa làm việc này vừa làm việc kia.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Vừa... vừa... / Song song đó (đồng thời tiến hành hoặc tồn tại)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......）... / Song song đó (đồng thời tiến hành hoặc tồn tại)\" ➔ 〜一方で"
    },
    {
      "id": 19,
      "unit": "Unit 11",
      "pattern": "〜そうにない / 〜そうもない",
      "question": "Ý nghĩa tiếng Việt: \"Có vẻ là không... / Khó lòng mà... (khả năng xảy ra cực kỳ thấp)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜によって / 〜により / 〜による",
        "〜さえ",
        "〜に対して",
        "〜そうにない / 〜そうもない"
      ],
      "answer": 3,
      "translation": "Ý nghĩa: \"Có vẻ là không... / Khó lòng mà... (khả năng xảy ra cực kỳ thấp)\" ➔ Mẫu ngữ pháp: 〜そうにない / 〜そうもない",
      "explanation": "Đáp án đúng là D (「〜そうにない / 〜そうもない」). 「〜そうにない」diễn tả phán đoán của người nói dựa trên quan sát thực tế rằng khả năng một hành động/sự việc diễn ra là rất khó hoặc gần như không thể.",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Có vẻ là không... / Khó lòng mà... (khả năng xảy ra cực kỳ thấp)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"Có vẻ là không... / （......）... (khả năng xảy ra cực kỳ thấp)\" ➔ Mẫu ngữ pháp: 〜そうにない / 〜そうもない"
    },
    {
      "id": 20,
      "unit": "Unit 10",
      "pattern": "〜てほしい / 〜ないでほしい",
      "question": "Khi muốn diễn đạt: \"Mong ước, nguyện vọng người khác làm điều gì đó cho mình\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜さ（Aいさ / なAさ）",
        "〜わけがない",
        "〜てほしい / 〜ないでほしい",
        "〜ことは〜が〜"
      ],
      "answer": 2,
      "translation": "Sắc thái: \"Mong ước, nguyện vọng người khác làm điều gì đó cho mình\" ➔ 〜てほしい / 〜ないでほしい",
      "explanation": "Đáp án đúng là C (「〜てほしい / 〜ないでほしい」). Phân biệt: Vたい là bản thân người nói muốn làm; còn Vてほしい là muốn NGƯỜI KHÁC làm.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Mong ước, nguyện vọng người khác làm điều gì đó cho mình\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......） ước, nguyện vọng người khác làm điều gì đó cho mình\" ➔ 〜てほしい / 〜ないでほしい"
    },
    {
      "id": 21,
      "unit": "Unit 11",
      "pattern": "〜そうにない / 〜そうもない",
      "question": "Khi muốn diễn đạt: \"Nhìn tình hình thì khó mà hoàn thành/xảy ra được\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜わけがない",
        "〜っぽい",
        "〜そうにない / 〜そうもない",
        "〜恐れがある"
      ],
      "answer": 2,
      "translation": "Sắc thái: \"Nhìn tình hình thì khó mà hoàn thành/xảy ra được\" ➔ 〜そうにない / 〜そうもない",
      "explanation": "Đáp án đúng là C (「〜そうにない / 〜そうもない」). Bản chất là thể phủ định của 〜そうだ (trông có vẻ).",
      "rubyQuestion": "Khi muốn diễn đạt: \"Nhìn tình hình thì khó mà hoàn thành/xảy ra được\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "（......） Sắc thái: \"Nhìn tình hình thì khó mà hoàn thành/xảy ra được\" ➔ 〜そうにない / 〜そうもない"
    },
    {
      "id": 22,
      "unit": "Unit 9",
      "pattern": "〜せいで",
      "question": "Ý nghĩa tiếng Việt: \"Do / Vì / Tại... (chỉ nguyên nhân dẫn đến kết quả xấu, đổ lỗi)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜せいで",
        "〜ことは〜が〜",
        "〜に加えて",
        "〜たばかり"
      ],
      "answer": 0,
      "translation": "Ý nghĩa: \"Do / Vì / Tại... (chỉ nguyên nhân dẫn đến kết quả xấu, đổ lỗi)\" ➔ Mẫu ngữ pháp: 〜せいで",
      "explanation": "Đáp án đúng là A (「〜せいで」). 「〜せいで」dùng khi nói về nguyên nhân gây ra hậu quả tiêu cực, thường mang sắc thái trách móc, đổ lỗi.",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Do / Vì / Tại... (chỉ nguyên nhân dẫn đến kết quả xấu, đổ lỗi)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"Do / Vì / （......）... (chỉ nguyên nhân dẫn đến kết quả xấu, đổ lỗi)\" ➔ Mẫu ngữ pháp: 〜せいで"
    },
    {
      "id": 23,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "Khi muốn diễn đạt: \"Không có lý do nào hoặc khả năng nào để xảy ra chuyện đó (= はずがない)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜に対して",
        "〜せいで",
        "〜一方で",
        "〜わけがない"
      ],
      "answer": 3,
      "translation": "Sắc thái: \"Không có lý do nào hoặc khả năng nào để xảy ra chuyện đó (= はずがない)\" ➔ 〜わけがない",
      "explanation": "Đáp án đúng là D (「〜わけがない」). Dạng phủ định kép: 〜ないわけがない mang ý nghĩa chắc chắn là có/sẽ.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Không có lý do nào hoặc khả năng nào để xảy ra chuyện đó (= はずがない)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "（......） Sắc thái: \"Không có lý do nào hoặc khả năng nào để xảy ra chuyện đó (= はずがない)\" ➔ 〜わけがない"
    },
    {
      "id": 24,
      "unit": "Unit 10",
      "pattern": "〜ことだ",
      "question": "Khi muốn diễn đạt: \"Không nên... / Đừng... (Vないことだ - lời khuyên cảnh báo)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜とは限りません / 〜とは限らない",
        "〜ことだ",
        "〜ことは〜が〜",
        "〜ものか / 〜もんか"
      ],
      "answer": 1,
      "translation": "Sắc thái: \"Không nên... / Đừng... (Vないことだ - lời khuyên cảnh báo)\" ➔ 〜ことだ",
      "explanation": "Đáp án đúng là B (「〜ことだ」). Lưu ý: Không dùng mẫu câu này để đưa ra lời khuyên cho người bề trên hoặc cấp trên.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Không nên... / Đừng... (Vないことだ - lời khuyên cảnh báo)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"Không nên... / （......）... (Vないことだ - lời khuyên cảnh báo)\" ➔ 〜ことだ"
    },
    {
      "id": 25,
      "unit": "Unit 10",
      "pattern": "〜に対して",
      "question": "Khi muốn diễn đạt: \"Trái ngược với... / Ngược lại với... (so sánh tương phản 2 vế)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜おかげで",
        "〜に加えて",
        "〜とは限りません / 〜とは限らない",
        "〜に対して"
      ],
      "answer": 3,
      "translation": "Sắc thái: \"Trái ngược với... / Ngược lại với... (so sánh tương phản 2 vế)\" ➔ 〜に対して",
      "explanation": "Đáp án đúng là D (「〜に対して」). Nghĩa 2: So sánh đối lập hai sự việc tương phản (Ví dụ: Tôi thích thể thao trái ngược với em trai thích đọc sách).",
      "rubyQuestion": "Khi muốn diễn đạt: \"Trái ngược với... / Ngược lại với... (so sánh tương phản 2 vế)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......）... / Ngược lại với... (so sánh tương phản 2 vế)\" ➔ 〜に対して"
    },
    {
      "id": 26,
      "unit": "Unit 12",
      "pattern": "〜とは限りません / 〜とは限らない",
      "question": "Khi muốn diễn đạt: \"Không nhất thiết 100% luôn luôn như vậy, vẫn có trường hợp ngoại lệ\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜おかげで",
        "〜ことは〜が〜",
        "〜とは限りません / 〜とは限らない",
        "〜そうにない / 〜そうもない"
      ],
      "answer": 2,
      "translation": "Sắc thái: \"Không nhất thiết 100% luôn luôn như vậy, vẫn có trường hợp ngoại lệ\" ➔ 〜とは限りません / 〜とは限らない",
      "explanation": "Đáp án đúng là C (「〜とは限りません / 〜とは限らない」). Thường đi kèm các phó từ: 必ずしも (chưa hẳn), いつも (luôn luôn), 全部 (toàn bộ).",
      "rubyQuestion": "Khi muốn diễn đạt: \"Không nhất thiết 100% luôn luôn như vậy, vẫn có trường hợp ngoại lệ\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "（......） Sắc thái: \"Không nhất thiết 100% luôn luôn như vậy, vẫn có trường hợp ngoại lệ\" ➔ 〜とは限りません / 〜とは限らない"
    },
    {
      "id": 27,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "Khi muốn diễn đạt: \"Dễ... / Hay... (xu hướng tính cách: hay quên, hay giận, chóng chán)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜さ（Aいさ / なAさ）",
        "〜ごとに",
        "〜っぽい",
        "〜に加えて"
      ],
      "answer": 2,
      "translation": "Sắc thái: \"Dễ... / Hay... (xu hướng tính cách: hay quên, hay giận, chóng chán)\" ➔ 〜っぽい",
      "explanation": "Đáp án đúng là C (「〜っぽい」). Dùng nhiều trong văn nói thường ngày.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Dễ... / Hay... (xu hướng tính cách: hay quên, hay giận, chóng chán)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"Dễ... / Hay... (xu hướng tính cách: （......）, hay giận, chóng chán)\" ➔ 〜っぽい"
    },
    {
      "id": 28,
      "unit": "Unit 10",
      "pattern": "〜によって / 〜により / 〜による",
      "question": "Khi muốn diễn đạt: \"Bằng cách / Nhờ vào... (phương tiện, phương pháp) HOẶC Tùy vào...\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜ごとに",
        "〜によって / 〜により / 〜による",
        "〜さえ",
        "〜に加えて"
      ],
      "answer": 1,
      "translation": "Sắc thái: \"Bằng cách / Nhờ vào... (phương tiện, phương pháp) HOẶC Tùy vào...\" ➔ 〜によって / 〜により / 〜による",
      "explanation": "Đáp án đúng là B (「〜によって / 〜により / 〜による」). Đứng trước danh từ sẽ biến đổi thành「〜による + N」.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Bằng cách / Nhờ vào... (phương tiện, phương pháp) HOẶC Tùy vào...\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"Bằng cách / Nhờ vào... (phương tiện, phương pháp) HOẶC （......）...\" ➔ 〜によって / 〜により / 〜による"
    },
    {
      "id": 29,
      "unit": "Unit 11",
      "pattern": "〜たばかり",
      "question": "Khi muốn diễn đạt: \"Hành động vừa mới kết thúc cách đây không lâu\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜てほしい / 〜ないでほしい",
        "〜せいで",
        "〜ことは〜が〜",
        "〜たばかり"
      ],
      "answer": 3,
      "translation": "Sắc thái: \"Hành động vừa mới kết thúc cách đây không lâu\" ➔ 〜たばかり",
      "explanation": "Đáp án đúng là D (「〜たばかり」). Khác với 〜たところ (thời gian thực tế vừa trôi qua trong tích tắc), 〜たばかり có thể dùng cho sự việc đã qua vài tháng nếu người nói cảm thấy như mới hôm qua.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Hành động vừa mới kết thúc cách đây không lâu\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"Hành động （......） kết thúc cách đây không lâu\" ➔ 〜たばかり"
    },
    {
      "id": 30,
      "unit": "Unit 10",
      "pattern": "〜わけがない",
      "question": "Ý nghĩa tiếng Việt: \"Lẽ nào lại... / Làm sao mà... được / Tuyệt đối không thể...\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜に加えて",
        "〜一方で",
        "〜さえ",
        "〜わけがない"
      ],
      "answer": 3,
      "translation": "Ý nghĩa: \"Lẽ nào lại... / Làm sao mà... được / Tuyệt đối không thể...\" ➔ Mẫu ngữ pháp: 〜わけがない",
      "explanation": "Đáp án đúng là D (「〜わけがない」). 「〜わけがない」biểu thị sự quả quyết mạnh mẽ của người nói rằng chuyện đó tuyệt đối không thể xảy ra dựa trên lý lẽ xác đáng. Văn thoại hay dùng: 〜わけない.",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Lẽ nào lại... / Làm sao mà... được / Tuyệt đối không thể...\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... / Làm sao mà... được / Tuyệt đối không thể...\" ➔ Mẫu ngữ pháp: 〜わけがない"
    },
    {
      "id": 31,
      "unit": "Unit 10",
      "pattern": "〜によって / 〜により / 〜による",
      "question": "Ý nghĩa tiếng Việt: \"Do / Vì... (nguyên nhân) HOẶC Bởi... (tác giả trong câu bị động)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜によって / 〜により / 〜による",
        "〜代わりに",
        "〜ことだ",
        "〜恐れがある"
      ],
      "answer": 0,
      "translation": "Ý nghĩa: \"Do / Vì... (nguyên nhân) HOẶC Bởi... (tác giả trong câu bị động)\" ➔ Mẫu ngữ pháp: 〜によって / 〜により / 〜による",
      "explanation": "Đáp án đúng là A (「〜によって / 〜により / 〜による」). 「〜によって」có 4 nghĩa quan trọng: 1. Do/Vì nguyên nhân; 2. Bởi ai (chủ thể bị động); 3. Bằng phương tiện/cách thức; 4. Tùy thuộc vào từng đối tượng.",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Do / Vì... (nguyên nhân) HOẶC Bởi... (tác giả trong câu bị động)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"Do / Vì... (nguyên nhân) HOẶC （......）... (tác giả trong câu bị động)\" ➔ Mẫu ngữ pháp: 〜によって / 〜により / 〜による"
    },
    {
      "id": 32,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "Ý nghĩa tiếng Việt: \"Cho dù... (đi chăng nữa thì vẫn không thay đổi)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜たばかり",
        "〜そうにない / 〜そうもない",
        "〜としても",
        "〜に加えて"
      ],
      "answer": 2,
      "translation": "Ý nghĩa: \"Cho dù... (đi chăng nữa thì vẫn không thay đổi)\" ➔ Mẫu ngữ pháp: 〜としても",
      "explanation": "Đáp án đúng là C (「〜としても」). 「〜としても」đặt ra điều kiện giả định: Cho dù tình huống ở vế trước có xảy ra đi chăng nữa, thì lập trường, suy nghĩ hoặc sự việc ở vế sau vẫn không hề bị suy chuyển.",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Cho dù... (đi chăng nữa thì vẫn không thay đổi)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... (đi chăng nữa thì vẫn không thay đổi)\" ➔ Mẫu ngữ pháp: 〜としても"
    },
    {
      "id": 33,
      "unit": "Unit 11",
      "pattern": "〜ものか / 〜もんか",
      "question": "Khi muốn diễn đạt: \"Phủ định cực kỳ mạnh mẽ, kiên quyết không làm điều gì lần thứ 2\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜ものか / 〜もんか",
        "〜おかげで",
        "〜さ（Aいさ / なAさ）",
        "〜そうにない / 〜そうもない"
      ],
      "answer": 0,
      "translation": "Sắc thái: \"Phủ định cực kỳ mạnh mẽ, kiên quyết không làm điều gì lần thứ 2\" ➔ 〜ものか / 〜もんか",
      "explanation": "Đáp án đúng là A (「〜ものか / 〜もんか」). Phân biệt: 〜わけがない là phủ định tính khả thi dựa trên lý lẽ; còn 〜ものか mang sắc thái cảm xúc quyết liệt của người nói.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Phủ định cực kỳ mạnh mẽ, kiên quyết không làm điều gì lần thứ 2\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "（......） Sắc thái: \"Phủ định cực kỳ mạnh mẽ, kiên quyết không làm điều gì lần thứ 2\" ➔ 〜ものか / 〜もんか"
    },
    {
      "id": 34,
      "unit": "Unit 9",
      "pattern": "〜一方で",
      "question": "Ý nghĩa tiếng Việt: \"Một mặt thì... mặt khác thì... (đối lập giữa 2 mặt của sự việc)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜ことは〜が〜",
        "〜一方で",
        "〜たばかり",
        "〜てほしい / 〜ないでほしい"
      ],
      "answer": 1,
      "translation": "Ý nghĩa: \"Một mặt thì... mặt khác thì... (đối lập giữa 2 mặt của sự việc)\" ➔ Mẫu ngữ pháp: 〜一方で",
      "explanation": "Đáp án đúng là B (「〜一方で」). 「〜一方で」dùng để nêu ra hai mặt đối lập tương phản của một vấn đề (Ví dụ: tiện lợi một mặt nhưng chi phí lại đắt đỏ).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Một mặt thì... mặt khác thì... (đối lập giữa 2 mặt của sự việc)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... mặt khác thì... (đối lập giữa 2 mặt của sự việc)\" ➔ Mẫu ngữ pháp: 〜一方で"
    },
    {
      "id": 35,
      "unit": "Unit 12",
      "pattern": "〜に加えて",
      "question": "Khi muốn diễn đạt: \"Bên cạnh N, hơn thế nữa còn bổ sung thêm một yếu tố khác\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜恐れがある",
        "〜とは限りません / 〜とは限らない",
        "〜に加えて",
        "〜わけがない"
      ],
      "answer": 2,
      "translation": "Sắc thái: \"Bên cạnh N, hơn thế nữa còn bổ sung thêm một yếu tố khác\" ➔ 〜に加えて",
      "explanation": "Đáp án đúng là C (「〜に加えて」). Thường dùng trong văn viết hoặc văn phong trang trọng. Có thể lược bỏ て thành 〜にくわえ.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Bên cạnh N, hơn thế nữa còn bổ sung thêm một yếu tố khác\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......） N, hơn thế nữa còn bổ sung thêm một yếu tố khác\" ➔ 〜に加えて"
    },
    {
      "id": 36,
      "unit": "Unit 11",
      "pattern": "〜代わりに",
      "question": "Ý nghĩa tiếng Việt: \"Thay cho... / Thay vì... (thay thế người, vật hoặc hành động)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜とは限りません / 〜とは限らない",
        "〜代わりに",
        "〜さえ",
        "〜ことだ"
      ],
      "answer": 1,
      "translation": "Ý nghĩa: \"Thay cho... / Thay vì... (thay thế người, vật hoặc hành động)\" ➔ Mẫu ngữ pháp: 〜代わりに",
      "explanation": "Đáp án đúng là B (「〜代わりに」). 「〜代わりに」diễn tả ý thay thế: không làm A mà làm B, hoặc dùng B để thay cho A (Ví dụ: Uống nước thay vì uống nước ngọt).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Thay cho... / Thay vì... (thay thế người, vật hoặc hành động)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... / Thay vì... (thay thế người, vật hoặc hành động)\" ➔ Mẫu ngữ pháp: 〜代わりに"
    },
    {
      "id": 37,
      "unit": "Unit 11",
      "pattern": "〜っぽい",
      "question": "Ý nghĩa tiếng Việt: \"Có vẻ như / Giống như... (cảm giác bề ngoài, màu sắc)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜によって / 〜により / 〜による",
        "〜っぽい",
        "〜さえ",
        "〜ことだ"
      ],
      "answer": 1,
      "translation": "Ý nghĩa: \"Có vẻ như / Giống như... (cảm giác bề ngoài, màu sắc)\" ➔ Mẫu ngữ pháp: 〜っぽい",
      "explanation": "Đáp án đúng là B (「〜っぽい」). 「〜っぽい」có 3 nghĩa chính: 1. Có vẻ như (大人っぽい - giống người lớn, 白っぽい - hơi trắng); 2. Có nhiều chất gì đó (油っぽい - nhiều dầu mỡ); 3. Hay/Dễ làm gì (怒りっぽい - hay cáu, 忘れっぽい - hay quên).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Có vẻ như / Giống như... (cảm giác bề ngoài, màu sắc)\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "（......） Ý nghĩa: \"Có vẻ như / Giống như... (cảm giác bề ngoài, màu sắc)\" ➔ Mẫu ngữ pháp: 〜っぽい"
    },
    {
      "id": 38,
      "unit": "Unit 11",
      "pattern": "〜ものか / 〜もんか",
      "question": "Ý nghĩa tiếng Việt: \"Làm sao mà... được / Tuyệt đối không... đâu!\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜とは限りません / 〜とは限らない",
        "〜恐れがある",
        "〜ものか / 〜もんか",
        "〜わけがない"
      ],
      "answer": 2,
      "translation": "Ý nghĩa: \"Làm sao mà... được / Tuyệt đối không... đâu!\" ➔ Mẫu ngữ pháp: 〜ものか / 〜もんか",
      "explanation": "Đáp án đúng là C (「〜ものか / 〜もんか」). 「〜ものか」(văn nói thân mật: もんか) thể hiện sự phủ định đanh thép và quyết tâm mạnh mẽ của người nói (Ví dụ: Quán ăn tệ thế này tôi quyết không đến lần thứ hai đâu!).",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"Làm sao mà... được / Tuyệt đối không... đâu!\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"（......）... được / Tuyệt đối không... đâu!\" ➔ Mẫu ngữ pháp: 〜ものか / 〜もんか"
    },
    {
      "id": 39,
      "unit": "Unit 9",
      "pattern": "〜ことは〜が〜",
      "question": "Khi muốn diễn đạt: \"A thì có A nhưng không hoàn hảo / có điểm trừ\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜おかげで",
        "〜さえ",
        "〜によって / 〜により / 〜による",
        "〜ことは〜が〜"
      ],
      "answer": 3,
      "translation": "Sắc thái: \"A thì có A nhưng không hoàn hảo / có điểm trừ\" ➔ 〜ことは〜が〜",
      "explanation": "Đáp án đúng là D (「〜ことは〜が〜」). Cấu trúc: V/AことはV/Aが... giúp câu nói mang tính khách quan, tế nhị hơn khi chê.",
      "rubyQuestion": "Khi muốn diễn đạt: \"A thì có A nhưng không hoàn hảo / có điểm trừ\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"A （......） A nhưng không hoàn hảo / có điểm trừ\" ➔ 〜ことは〜が〜"
    },
    {
      "id": 40,
      "unit": "Unit 12",
      "pattern": "〜としても",
      "question": "Khi muốn diễn đạt: \"Dù giả định điều đó có xảy ra thì vế sau vẫn giữ nguyên\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜としても",
        "〜に加えて",
        "〜恐れがある",
        "〜たばかり"
      ],
      "answer": 0,
      "translation": "Sắc thái: \"Dù giả định điều đó có xảy ra thì vế sau vẫn giữ nguyên\" ➔ 〜としても",
      "explanation": "Đáp án đúng là A (「〜としても」). Ví dụ: Cho dù tôi có trở thành người giàu thì lối sống của tôi vẫn bình dị như hiện tại.",
      "rubyQuestion": "Khi muốn diễn đạt: \"Dù giả định điều đó có xảy ra thì vế sau vẫn giữ nguyên\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"（......） giả định điều đó có xảy ra thì vế sau vẫn giữ nguyên\" ➔ 〜としても"
    },
    {
      "id": 41,
      "unit": "Unit 11",
      "pattern": "〜さ（Aいさ / なAさ）",
      "question": "Khi muốn diễn đạt: \"Biến đổi tính từ thành danh từ biểu thị mức độ tính chất (độ cao, độ sâu, sức nặng...)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "options": [
        "〜に対して",
        "〜ことは〜が〜",
        "〜っぽい",
        "〜さ（Aいさ / なAさ）"
      ],
      "answer": 3,
      "translation": "Sắc thái: \"Biến đổi tính từ thành danh từ biểu thị mức độ tính chất (độ cao, độ sâu, sức nặng...)\" ➔ 〜さ（Aいさ / なAさ）",
      "explanation": "Đáp án đúng là D (「〜さ（Aいさ / なAさ）」). Trường hợp ngoại lệ đặc biệt: いい / よい biến thành よさ (điểm tốt, nét đẹp).",
      "rubyQuestion": "Khi muốn diễn đạt: \"Biến đổi tính từ thành danh từ biểu thị mức độ tính chất (độ cao, độ sâu, sức nặng...)\", người Nhật thường dùng mẫu ngữ pháp nào?",
      "hintTranslation": "Sắc thái: \"Biến đổi tính từ thành danh từ biểu thị mức độ tính chất (độ cao, （......）, sức nặng...)\" ➔ 〜さ（Aいさ / なAさ）"
    },
    {
      "id": 42,
      "unit": "Unit 12",
      "pattern": "〜恐れがある",
      "question": "Ý nghĩa tiếng Việt: \"E là... / Có nguy cơ... / Lo sợ rằng...\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "options": [
        "〜せいで",
        "〜さえ",
        "〜恐れがある",
        "〜とは限りません / 〜とは限らない"
      ],
      "answer": 2,
      "translation": "Ý nghĩa: \"E là... / Có nguy cơ... / Lo sợ rằng...\" ➔ Mẫu ngữ pháp: 〜恐れがある",
      "explanation": "Đáp án đúng là C (「〜恐れがある」). 「〜恐れがある」(chữ Hán là 恐 - sợ hãi) dùng để cảnh báo về khả năng một sự việc tiêu cực, tai họa hoặc tổn thất có thể xảy ra trong tương lai.",
      "rubyQuestion": "Ý nghĩa tiếng Việt: \"E là... / Có nguy cơ... / Lo sợ rằng...\" tương ứng với mẫu ngữ pháp nào trong tiếng Nhật?",
      "hintTranslation": "Ý nghĩa: \"E là... / （......）... / Lo sợ rằng...\" ➔ Mẫu ngữ pháp: 〜恐れがある"
    }
  ]
};

// Tương thích ngược: mặc định bộ đề 1
const QUIZ_QUESTIONS = QUIZ_SETS["1"];
