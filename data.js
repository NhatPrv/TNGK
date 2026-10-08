// Dữ liệu ngữ pháp tiếng Nhật tổng hợp từ 4 file PDF (Unit 9, Unit 10, Unit 11, Unit 12)
const GRAMMAR_DATA = [
  // ================= UNIT 9 =================
  {
    id: "u9-1",
    unit: "Unit 9",
    unitNum: 9,
    pattern: "〜ごとに",
    romaji: "goto ni",
    connection: "V（辞書形） + ごとに\nN + ごとに",
    meaningVi: "Cứ... lại... / Từng... một\n- Diễn đạt ý \"cứ mỗi lần... lại...\"\n- Cũng có trường hợp diễn đạt ý \"Từng... (người) một\"\n- Chữ Hán của ごとに là 毎に (mỗi)",
    meaningJa: "〜たびに / 〜単位で / 〜周期で\n・「〜ごとに」は漢字にすると「〜毎に」となる。",
    examples: [
      {
        ja: "バスは10分ごとに通っている。",
        vi: "Cứ 10 phút lại có một chuyến xe buýt chạy qua đây."
      },
      {
        ja: "人は失敗するごとに成長していくものだ。",
        vi: "Con người cứ mỗi lần thất bại sẽ trưởng thành hơn."
      },
      {
        ja: "それでは今からグループごとに発表してもらいます。",
        vi: "Vậy thì từ giờ từng nhóm sẽ phát biểu."
      }
    ]
  },
  {
    id: "u9-2",
    unit: "Unit 9",
    unitNum: 9,
    pattern: "〜一方で",
    romaji: "ippou de",
    connection: "普通形 + 一方で",
    meaningVi: "Ý nghĩa 1: Một mặt thì... mặt khác thì... (Đối lập giữa 2 sự việc)\nÝ nghĩa 2: Vừa... vừa... / Song song đó (Đồng thời thực hiện 2 sự việc)",
    meaningJa: "意味①：Xは〜だが、Yは〜（対比）\n意味②：ある面では〜だが、別の面では〜（並列）",
    examples: [
      {
        ja: "いい親は厳しくしかる一方で、ほめることも忘れない。",
        vi: "Cha mẹ tốt thì một mặt la rầy nghiêm khắc, nhưng mặt khác cũng không quên khen ngợi con cái."
      },
      {
        ja: "彼女はお金に困っていると言う一方で、ずいぶんむだづかいもしているらしい。",
        vi: "Cô ta một mặt nói rằng đang gặp khó khăn về tiền bạc, nhưng mặt khác lại nghe nói rằng cô ta đang tiêu xài khá hoang phí."
      },
      {
        ja: "オンラインでの売り上げが上がる一方で、店舗での売り上げが落ちている。",
        vi: "Doanh thu online tăng lên nhưng mặt khác doanh thu tại các cửa hàng giảm xuống."
      },
      {
        ja: "リコーという会社はカメラを製造する一方で、医療機器の開発にも力を入れている。",
        vi: "Công ty Rico vừa chế tạo máy ảnh, vừa bỏ công sức vào việc phát triển các thiết bị y tế."
      },
      {
        ja: "彼はお金持ちである一方で、積極的にボランティアやチャリティーに参加する優しい人でもある。",
        vi: "Anh ấy vừa giàu, vừa là một người hiền lành tích cực tham gia các hoạt động tình nguyện và từ thiện."
      },
      {
        ja: "トムさんは日本語が話せる一方で、中国語も話せる。",
        vi: "Tom nói được tiếng Nhật, bên cạnh đó cũng nói được tiếng Trung."
      }
    ]
  },
  {
    id: "u9-3",
    unit: "Unit 9",
    unitNum: 9,
    pattern: "〜おかげで",
    romaji: "okage de",
    connection: "V（普通形） + おかげで\nイA（普通形） + おかげで\nナAな + おかげで\nNの + おかげで",
    meaningVi: "Nhờ... / Nhờ có...\n- Chỉ nguyên nhân, lý do dẫn đến kết quả tốt đẹp.\n- Ngoài ra cũng có trường hợp sử dụng với ý mỉa mai, châm biếm.",
    meaningJa: "〜が原因で\n・基本的に良い結果になった原因を言う時に使う。\n・悪い結果に使うこともできるが、皮肉となる。",
    examples: [
      {
        ja: "友達の助けのおかげで試験に合格しました。",
        vi: "Nhờ sự giúp đỡ của bạn, tôi đã vượt qua kỳ thi."
      },
      {
        ja: "練習のおかげで上達しました。",
        vi: "Nhờ luyện tập, tôi đã tiến bộ."
      },
      {
        ja: "一生懸命勉強したおかげで、いい会社に就職することができました。",
        vi: "Nhờ học tập chăm chỉ tôi đã có thể vào làm việc ở công ty tốt."
      },
      {
        ja: "【皮肉】君がミスしてくれたおかげで、全部やり直しだよ。",
        vi: "【Mỉa mai】 Nhờ sai lầm của cậu mà đã phải sửa lại mọi thứ."
      }
    ]
  },
  {
    id: "u9-4",
    unit: "Unit 9",
    unitNum: 9,
    pattern: "〜せいで",
    romaji: "sei de",
    connection: "V（普通形） + せいで\nイA（普通形） + せいで\nナAな + せいで\nNの + せいで",
    meaningVi: "Do / Vì / Tại...\n- Diễn tả nguyên nhân đã xảy ra việc chẳng lành hoặc để đổ trách nhiệm cho ai.",
    meaningJa: "〜が原因で\n・悪い結果になった原因を言う時に使う。",
    examples: [
      {
        ja: "雨のせいでピクニックに行けませんでした。",
        vi: "Vì mưa, chúng tôi không thể đi picnic."
      },
      {
        ja: "遅刻のせいで重要な会議を逃しました。",
        vi: "Tôi đã bỏ lỡ cuộc họp quan trọng vì đi muộn."
      },
      {
        ja: "電車が遅れたせいで、飛行機に乗れなかった。",
        vi: "Vì tàu điện tới trễ nên tôi đã không thể lên máy bay."
      }
    ]
  },
  {
    id: "u9-5",
    unit: "Unit 9",
    unitNum: 9,
    pattern: "〜さえ",
    romaji: "sae",
    connection: "V（ます形 bỏ ます） + さえ\nN + さえ",
    meaningVi: "Ngay cả... / Đến cả... (cũng)\n- Dùng để chỉ một trường hợp mà bình thường ai cũng nghĩ là đương nhiên xảy ra, nhưng thực tế lại không phải như thế, với hàm ý \"huống chi là những trường hợp khác\".",
    meaningJa: "〜も（〜もそうだから、他も当然そうだ。）\n・話し手の驚きやあきれた気持ちが含まれる。\n・マイナスの意味で使うことがほとんど。",
    examples: [
      {
        ja: "ジョンさんは１年も日本語を勉強したのに、ひらがなさえ書けない。",
        vi: "John đã học tiếng Nhật 1 năm thế mà ngay cả Hiragana cũng không viết được."
      },
      {
        ja: "食事することさえ忘れてしまうほど、彼は研究に熱中していた。",
        vi: "Anh ta mải nghiên cứu đến mức ngay cả việc ăn cũng quên."
      },
      {
        ja: "忙しすぎて、ご飯を食べる時間さえない。",
        vi: "Tôi quá bận, ngay cả thời gian ăn cơm cũng không có."
      }
    ]
  },
  {
    id: "u9-6",
    unit: "Unit 9",
    unitNum: 9,
    pattern: "〜ことは〜が〜",
    romaji: "koto wa ... ga ...",
    connection: "V（普通形） + ことは + V（普通形） + が\nイA（普通形） + ことは + イA（普通形） + が\nナAな + ことは + ナAな + が",
    meaningVi: "Tuy có... thật, nhưng...\n- Dùng bằng cách lặp lại cùng một từ.\n- Biểu thị sự nhượng bộ: tạm thời công nhận vế trước nhưng vế sau lại không trọn vẹn hoặc có điểm hạn chế.",
    meaningJa: "一応Aするが、しかし\n・「AことはAが」の「A」に動詞が入る場合は「一応Aするが、いい結果が起こらないだろう」「一応Aしたが、いい結果が起こらなかった」というように、後ろにマイナスのことがくる。",
    examples: [
      {
        ja: "このレストランは美味しいことは美味しいが、値段が高すぎます。",
        vi: "Nhà hàng này ngon thì ngon, nhưng giá cả thì quá đắt."
      },
      {
        ja: "彼女は速く走ることは速く走れますが、長距離は苦手です。",
        vi: "Cô ấy chạy nhanh thì nhanh đấy, nhưng không giỏi chạy đường dài."
      },
      {
        ja: "日本語は話せることは話せるんですが、日常会話しかできません。",
        vi: "Tiếng Nhật nói thì tôi có thể nói được nhưng chỉ là hội thoại thường ngày."
      }
    ]
  },

  // ================= UNIT 10 =================
  {
    id: "u10-1",
    unit: "Unit 10",
    unitNum: 10,
    pattern: "〜によって / 〜により / 〜による",
    romaji: "ni yotte / ni yori / ni yoru",
    connection: "N + により\nN + によって\nN + による + N",
    meaningVi: "Ý nghĩa 1: Do/Vì... (nguyên nhân chỉ kết quả)\nÝ nghĩa 2: Bởi... (chủ thể hành động trong câu bị động)\nÝ nghĩa 3: Bằng/Nhờ... (phương tiện, công cụ, phương pháp)\nÝ nghĩa 4: Tùy vào... (tương ứng, thay đổi theo từng đối tượng)",
    meaningJa: "意味①：〜が原因で。（原因・理由）\n意味②：〜に〜される。（受身文の動作主）\n意味③：Nという手段や方法で〜する。（手段・方法）\n意味④：「〜」が変わると、後件も変わる。（対応）",
    examples: [
      {
        ja: "不景気の影響により、物を買う人が減ってきた。",
        vi: "Do ảnh hưởng của suy thoái kinh tế, số người mua hàng đã giảm xuống."
      },
      {
        ja: "日本では昔よりも、いじめによる自殺者数が増えている。",
        vi: "Ở Nhật Bản, số người tự sát do bị bắt nạt tăng lên so với ngày xưa."
      },
      {
        ja: "このバッグは人気歌手によってデザインされた。",
        vi: "Cái túi này được thiết kế bởi ca sỹ nổi tiếng."
      },
      {
        ja: "アメリカ大陸は、コロンブスによって発見された。",
        vi: "Lục địa châu Mỹ được phát hiện bởi Columbus."
      },
      {
        ja: "インターネットによって、世界中の情報が簡単に手に入るようになった。",
        vi: "Nhờ internet, chúng ta có thể dễ dàng tiếp cận thông tin từ khắp nơi trên thế giới."
      },
      {
        ja: "その問題は話し合いによって解決されました。",
        vi: "Vấn đề đó đã được giải quyết bằng việc thảo luận."
      },
      {
        ja: "文化は国によって異なる。",
        vi: "Văn hoá thì khác nhau tuỳ vào mỗi quốc gia."
      },
      {
        ja: "人によって感じ方は違うものだ。",
        vi: "Tuỳ vào mỗi người thì cách suy nghĩ sẽ khác nhau."
      }
    ]
  },
  {
    id: "u10-2",
    unit: "Unit 10",
    unitNum: 10,
    pattern: "〜に対して",
    romaji: "ni taishite",
    connection: "N + に対して\nN/なA + であるのに対して / なのに対して",
    meaningVi: "Ý nghĩa 1: Đối với... (hướng hành vi, thái độ về đối tượng; trước danh từ dùng: 〜に対するN)\nÝ nghĩa 2: Trái với... / Ngược lại với... (đối lập giữa 2 vế)",
    meaningJa: "意味①：〜に / 〜を相手として（対象）\n・後ろに名詞が来る場合は「〜に対するN」という形をとる。\n意味②：〜に対比して考えると（対比）",
    examples: [
      {
        ja: "その質問に対して、誰も答えることができなかった。",
        vi: "Đối với câu hỏi đó, không ai có thể trả lời được."
      },
      {
        ja: "先生は学生に対してとても親切です。",
        vi: "Giáo viên rất tốt với học sinh."
      },
      {
        ja: "私はスポーツが好きなのに対して、弟は読書が好きです。",
        vi: "Trái ngược với tôi thích thể thao, em trai tôi lại thích đọc sách."
      },
      {
        ja: "今年の夏は涼しかったのに対して、去年の夏は非常に暑かった。",
        vi: "Trái ngược với mùa hè năm nay mát mẻ, mùa hè năm ngoái rất nóng."
      }
    ]
  },
  {
    id: "u10-4",
    unit: "Unit 10",
    unitNum: 10,
    pattern: "〜てほしい / 〜ないでほしい",
    romaji: "te hoshii / naide hoshii",
    connection: "Vてほしい\nVないでほしい",
    meaningVi: "Muốn (ai đó) làm... / Mong sao...\n- Muốn ai đó làm việc gì đó cho mình.\n- Mong muốn điều gì đó xảy ra.\n- Nhờ vả gián tiếp thông qua việc nói lên nguyện vọng của mình.",
    meaningJa: "希望・・・\n・相手に対するお願い、希望、要求を表す。\n・「〜が＋動て形＋ほしい」の形で、ある現象の発生を期待することを表す。",
    examples: [
      {
        ja: "手伝ってほしい。",
        vi: "Tôi muốn bạn giúp đỡ."
      },
      {
        ja: "今日は雨が降らないでほしい。",
        vi: "Tôi mong hôm nay trời đừng mưa."
      },
      {
        ja: "誰か私のそばに居てほしい。",
        vi: "Tôi muốn có ai đó ở bên cạnh."
      }
    ]
  },
  {
    id: "u10-5",
    unit: "Unit 10",
    unitNum: 10,
    pattern: "〜ことだ",
    romaji: "koto da",
    connection: "V（辞書形 / ナイ形） + ことだ",
    meaningVi: "Phải... / Nên... / Đừng... (khuyên nhủ, cảnh báo)\n- Như thế là tốt nhất, thích hợp nhất trong tình huống đó.\n- Đóng vai trò cảnh cáo hoặc khuyên nhủ gián tiếp. Dùng trong văn nói, không dùng với người bề trên.",
    meaningJa: "〜したほうがいい / 〜しないほうがいい\n・助言や忠告をする時に使う表現。\n・目上の人に対しては使わない。",
    examples: [
      {
        ja: "痩せたかったら、間食をやめることだ。",
        vi: "Nếu muốn ốm lại thì phải ngừng ăn vặt."
      },
      {
        ja: "日本語が上手になりたかったら、毎日話すことだ。",
        vi: "Nếu muốn giỏi tiếng Nhật lên thì phải nói mỗi ngày."
      },
      {
        ja: "壊れて困るのなら、最初から持ってこないことだね。",
        vi: "Nếu bị hỏng là không được thì ngay từ đầu đừng mang theo."
      }
    ]
  },
  {
    id: "u10-6",
    unit: "Unit 10",
    unitNum: 10,
    pattern: "〜わけがない",
    romaji: "wake ga nai",
    connection: "V（普通形） + わけがない\nイA（普通形） + わけがない\nナAな/である + わけがない\nNの/である + わけがない",
    meaningVi: "Lẽ nào lại... / Làm sao... được / Tuyệt đối không thể...\n- Biểu thị sự quả quyết mạnh mẽ rằng không có lý do hoặc khả năng nào để xảy ra chuyện như thế (= 〜はずがない).\n- Dạng phủ định kép: 〜ないわけがない (chắc chắn là có/sẽ).\n- Văn thoại hay dùng: 〜わけない.",
    meaningJa: "〜は考えられない / 絶対に〜でない\n・話し手が確信を持って、「〜ではない」と言う時に使う表現。\n・可能性を完全に否定する。\n・「〜はずがない」と言い換えが可能。\n・会話では「〜わけない」という表現がよく使われる。",
    examples: [
      {
        ja: "彼がそんなことをするわけがない。",
        vi: "Lẽ nào anh ấy lại làm điều đó."
      },
      {
        ja: "この問題は簡単だから、解けないわけがない。",
        vi: "Vấn đề này đơn giản, lẽ nào lại không giải được."
      },
      {
        ja: "あんな下手な絵が売れるわけがない。",
        vi: "Bức tranh tệ thế kia làm sao mà bán được."
      }
    ]
  },

  // ================= UNIT 11 =================
  {
    id: "u11-1",
    unit: "Unit 11",
    unitNum: 11,
    pattern: "〜そうにない / 〜そうもない",
    romaji: "sou ni nai / sou mo nai",
    connection: "Vます（bỏ ます） ＋ そうにない / そうもない / そうにもない",
    meaningVi: "Có vẻ là không... / Khó lòng mà...\n- Mô tả một việc có khả năng xảy ra rất thấp. Người nói dựa trên quan sát tình hình thực tế hiện tại mà phán đoán.",
    meaningJa: "できる可能性が低いことを表す。\n・話し手が状況から判断して言う表現。",
    examples: [
      {
        ja: "すみません、今日中に終わりそうにないんですが、明日でもよろしいでしょうか。",
        vi: "Xin lỗi, có vẻ hôm nay không xong được nên để ngày mai có được không ạ?"
      },
      {
        ja: "部長は１時間以上も話しているが、まだまだ終わりそうもない。",
        vi: "Trưởng phòng nói chuyện hơn 1 tiếng rồi mà không có vẻ gì là sắp kết thúc."
      }
    ]
  },
  {
    id: "u11-2",
    unit: "Unit 11",
    unitNum: 11,
    pattern: "〜代わりに",
    romaji: "kawari ni",
    connection: "V（辞書形） + かわりに\nN + のかわりに（= Nにかわって）",
    meaningVi: "Thay cho... / Thay vì...\n- Diễn tả ý \"thay vào đó\", \"bù lại\", thay vì làm A / dùng A thì làm B / dùng B.",
    meaningJa: "Vしないで、他のことをする。\nN（人や物）ではなく他の（人や物）が・・・。\n・「Nのかわりに」は「Nにかわって」という言い方もある。",
    examples: [
      {
        ja: "ジュースのかわりに水を飲んだ。",
        vi: "Tôi đã uống nước thay cho nước ép."
      },
      {
        ja: "ダイエットをしているので、ごはんのかわりに豆腐を食べるようにしている。",
        vi: "Vì đang ăn kiêng nên tôi ăn đậu hũ thay cho cơm."
      },
      {
        ja: "今の子供たちは、テレビを見るかわりに、Youtubeを見ているそうだ。",
        vi: "Nghe nói bọn trẻ bây giờ thay vì xem tivi thì lại xem Youtube."
      }
    ]
  },
  {
    id: "u11-3",
    unit: "Unit 11",
    unitNum: 11,
    pattern: "〜さ（Aいさ / なAさ）",
    romaji: "-sa (danh từ hóa)",
    connection: "いA（bỏ い） + さ\nなA + さ\n* Ngoại lệ: いい → よさ",
    meaningVi: "Độ... / Mức độ...\n- Biến tính từ thành danh từ (mô tả mức độ của tính chất).",
    meaningJa: "形容詞を名詞化する\n・程度を表す",
    examples: [
      {
        ja: "ケーキの大きさによって、値段が変わります。",
        vi: "Tuỳ vào độ lớn của bánh mà giá sẽ khác nhau."
      },
      {
        ja: "この絵のすばらしさは、言葉では表せないくらいだ。",
        vi: "Độ tuyệt vời của bức tranh này không ngôn từ nào có thể mô tả được."
      },
      {
        ja: "このプールの深さは何メートルですか？",
        vi: "Độ sâu của bể bơi này là bao nhiêu mét?"
      }
    ]
  },
  {
    id: "u11-4",
    unit: "Unit 11",
    unitNum: 11,
    pattern: "〜っぽい",
    romaji: "-ppoi",
    connection: "N + っぽい\nいA（bỏ い） + っぽい（ví dụ: やすっぽい）\nVます（bỏ ます） + っぽい",
    meaningVi: "Ý nghĩa 1: Cảm thấy giống như ~/ Như là ~ (khuynh hướng, màu sắc, dáng vẻ)\nÝ nghĩa 2: Nhiều ~ (cảm giác có nhiều thành phần như nước, dầu mỡ...)\nÝ nghĩa 3: Dễ ~ / Hay ~ (xu hướng tính cách: 怒りっぽい - hay giận, 忘れっぽい - hay quên, 飽きっぽい - chóng chán)",
    meaningJa: "意味①：〜のように感じる / 〜のように見える（N / いA + っぽい）\n意味②：〜が多いと感じる（N + っぽい）\n意味③：〜しやすい / よく〜する（Vます + っぽい）",
    examples: [
      {
        ja: "あの白っぽいシャツを着ている人は誰ですか。",
        vi: "Cái người mặc áo sơ mi màu gần như trắng kia là ai?"
      },
      {
        ja: "あの子はまだ小学生なのに、とても大人っぽい。",
        vi: "Đứa bé kia mới học tiểu học nhưng mà rất giống người lớn."
      },
      {
        ja: "このスープ、水っぽい。",
        vi: "Món canh này nhiều nước (loãng quá)."
      },
      {
        ja: "この料理は油っぽくていやだ。",
        vi: "Món ăn này nhiều dầu mỡ, tôi không thích."
      },
      {
        ja: "私の母はもう年のせいか、最近忘れっぽい。",
        vi: "Mẹ tôi chắc tại tuổi tác hay sao mà dạo này hay quên."
      },
      {
        ja: "私は飽きっぽい性格なので、何をしてもすぐにやめてしまう。",
        vi: "Tôi có tính cách dễ chán nên làm gì cũng nhanh từ bỏ."
      }
    ]
  },
  {
    id: "u11-5",
    unit: "Unit 11",
    unitNum: 11,
    pattern: "〜たばかり",
    romaji: "ta bakari",
    connection: "V（タ形） + ばかり",
    meaningVi: "Vừa mới... xong\n- Sự việc đã kết thúc (mới đây) theo cảm nhận chủ quan của người nói.",
    meaningJa: "ちょっと前に〜が終わった、〜をした。\n・動作が終わってからの時間が短いことを言いたい時に使う。",
    examples: [
      {
        ja: "入社したばかりなのに、毎日とても忙しいです。",
        vi: "Vừa mới vào công ty mà ngày nào cũng bận hết."
      },
      {
        ja: "今さっき、食べたばかりなのに、また食べるの。",
        vi: "Vừa mới ăn lúc nãy mà giờ lại ăn nữa à."
      },
      {
        ja: "昨日、教えたばかりなのにもう忘れちゃったの？",
        vi: "Mới dạy hôm qua mà giờ đã quên mất rồi sao?"
      }
    ]
  },
  {
    id: "u11-6",
    unit: "Unit 11",
    unitNum: 11,
    pattern: "〜ものか / 〜もんか",
    romaji: "mono ka / mon ka",
    connection: "V（辞書形） + ものか\nイAい + ものか\nナAな + ものか\nNな + ものか",
    meaningVi: "Làm sao mà...(có thể được) / Tuyệt đối không...đâu\n- Phủ định mạnh mẽ rằng chuyện gì đó nhất định không thể xảy ra.\n- Văn nói dùng thân mật: もんか.",
    meaningJa: "二度と〜ない / 決して〜ない\n・強い否定を表す。\n・「ものか」よりもくだけた言い方は「もんか」。",
    examples: [
      {
        ja: "店員の態度は悪いし、料理は美味しくないし、こんな店二度と来るものか。",
        vi: "Thái độ nhân viên thì tệ, đồ ăn thì dở, tôi không đến lại tiệm này lần 2 đâu."
      },
      {
        ja: "俺の今の気持ちなんてわかるもんか。",
        vi: "Làm sao mà bạn có thể hiểu được tâm trạng của tôi bây giờ."
      }
    ]
  },

  // ================= UNIT 12 =================
  {
    id: "u12-1",
    unit: "Unit 12",
    unitNum: 12,
    pattern: "〜としても",
    romaji: "to shitemo",
    connection: "V / イA / ナA / N（普通形） + としても",
    meaningVi: "Cho dù... (đi chăng nữa)\n- Vế trước là điều kiện giả định. Dù vế trước có xảy ra thì vế sau vẫn không bị ảnh hưởng, không thay đổi.",
    meaningJa: "もし仮に〜が起こったという場合でも\n・前件の条件が成立しても、後件の条件には影響しないということを表す。",
    examples: [
      {
        ja: "私はお金もちになったとしても、私は今と変わらない生活をするでしょう。",
        vi: "Dù trở thành người giàu tôi vẫn sống không khác bây giờ."
      },
      {
        ja: "誰に何を言われたとしても、意見を変えるつもりはありません。",
        vi: "Dù có bị ai nói gì tôi cũng không định thay đổi ý kiến."
      }
    ]
  },
  {
    id: "u12-2",
    unit: "Unit 12",
    unitNum: 12,
    pattern: "〜とは限りません / 〜とは限らない",
    romaji: "to wa kagiranai",
    connection: "V / イA / ナA / N（普通形） + とは限りません / とは限らない",
    meaningVi: "Không hẳn là... / Chưa chắc là...\n- Mẫu câu phủ định một phần, diễn tả ý không nhất thiết phải là như thế, vẫn có trường hợp ngoại lệ.\n- Thường đi kèm với: いつも (luôn luôn) / 必ずしも (chưa hẳn) / 全部 (tất cả) / 誰でも (ai cũng).",
    meaningJa: "必ず〜になるとは言えない。例外もある。\n・部分否定の表現。\n・「いつも / 必ずしも / 全部 / 誰でも」と一緒に使うことが多い。",
    examples: [
      {
        ja: "海外に住んだからと言って、英語がペラペラになるとは限らない。",
        vi: "Nói là sống ở nước ngoài nhưng mà chưa chắc là nói tiếng Anh lưu loát."
      },
      {
        ja: "いい大学を卒業したからといって、いい会社に入れるとは限らない。",
        vi: "Dù tốt nghiệp đại học tốt nhưng không hẳn là có thể vào được công ty tốt."
      }
    ]
  },
  {
    id: "u12-3",
    unit: "Unit 12",
    unitNum: 12,
    pattern: "〜に加えて",
    romaji: "ni kuwaete",
    connection: "N ＋ に加えて",
    meaningVi: "Thêm vào đó... / Không chỉ... mà còn...\n- Không chỉ có N, mà hơn thế nữa còn có thêm sự việc khác. Thường dùng trong văn viết (có thể dùng 〜にくわえ).",
    meaningJa: "「〜し、さらに〜」\n・この文型は似ていることをプラスして言う時に使われる。\n・ほとんどの場合は書き言葉として使用される。「て」を省略して「〜にくわえ」とも言える。",
    examples: [
      {
        ja: "来週開催予定の製品発表会では、新しいハードウェアに加えて、ソフトウェアのバージョンアップに関する発表も期待されている。",
        vi: "Tại buổi phát biểu sản phẩm tuần sau, bên cạnh phần cứng mới thì thêm vào đó phát biểu về version mới của phần mềm cũng đang được mong đợi."
      },
      {
        ja: "田中さんは専門的な知識に加えて、経験も豊富な方なので、とても頼りになります。",
        vi: "Tanaka-san có kiến thức chuyên môn, thêm vào đó còn là người có kinh nghiệm phong phú nên rất được việc."
      }
    ]
  },
  {
    id: "u12-4",
    unit: "Unit 12",
    unitNum: 12,
    pattern: "〜恐れがある",
    romaji: "osore ga aru",
    connection: "V（普通形） / Nの + おそれがある",
    meaningVi: "E là... / Có nguy cơ... / Lo sợ rằng...\n- Lo ngại có thể có một việc không tốt sẽ xảy ra. Cách nói trang trọng, hay dùng trong tin tức báo chí, thông báo.",
    meaningJa: "「〜という心配がある / 〜に可能性がある」\n・悪いことが起こるかもしれないと言いたい時に使われる表現。少し硬い表現でニュースや通知などに使われることが多い。",
    examples: [
      {
        ja: "不景気なので、大学を卒業しても就職できないおそれがある。",
        vi: "Tình hình kinh tế bất ổn nên dù có tốt nghiệp e là cũng có nguy cơ không kiếm được việc."
      },
      {
        ja: "この鳥は絶滅のおそれがあると言われている鳥です。",
        vi: "Loài chim này là loài chim được nói là có nguy cơ tuyệt chủng."
      }
    ]
  }
];
