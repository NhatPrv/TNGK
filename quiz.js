// ==========================================================================
// JavaScript Xử Lý Trang Trắc Nghiệm 100 Câu Ngữ Pháp Tiếng Nhật
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Trạng thái ứng dụng
  let currentSetKey = "1";
  let fullQuestions = (typeof QUIZ_SETS !== 'undefined' && QUIZ_SETS[currentSetKey]) 
    ? [...QUIZ_SETS[currentSetKey]] 
    : [...QUIZ_QUESTIONS];
  let filteredQuestions = [...fullQuestions];
  let currentIndex = 0;
  let userAnswers = {}; // { questionId: selectedOptionIndex }
  let flaggedQuestions = new Set();
  let currentMode = 'instant'; // 'instant' (Luyện tập) hoặc 'exam' (Thi thử)
  let currentUnitFilter = 'all';
  let isExamSubmitted = false;

  // Đồng hồ thi thử
  let timerSeconds = 60 * 60; // 60 phút
  let timerInterval = null;

  // Theme
  let currentTheme = localStorage.getItem('jlpt_theme') || 'dark';

  // DOM Elements
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  const btnModeInstant = document.getElementById('btn-mode-instant');
  const btnModeExam = document.getElementById('btn-mode-exam');
  const timerBox = document.getElementById('timer-box');
  const timerDisplay = document.getElementById('timer-display');
  const unitFilterButtons = document.querySelectorAll('.unit-filter-group .filter-btn');
  const setButtons = document.querySelectorAll('.set-btn-group .set-btn');
  const btnShuffleQuestions = document.getElementById('btn-shuffle-questions');
  const toast = document.getElementById('toast');

  // Question Card Elements
  const qUnitBadge = document.getElementById('q-unit-badge');
  const qPatternTag = document.getElementById('q-pattern-tag');
  const qIndexDisplay = document.getElementById('q-index-display');
  const qSpeakBtn = document.getElementById('q-speak-btn');
  const qFlagBtn = document.getElementById('q-flag-btn');
  const qText = document.getElementById('q-text');
  const optionsGrid = document.getElementById('options-grid');

  // Explanation Elements
  const explanationBox = document.getElementById('explanation-box');
  const expBadge = document.getElementById('exp-badge');
  const expTranslation = document.getElementById('exp-translation');
  const expDetail = document.getElementById('exp-detail');

  // Navigation Buttons
  const btnPrevQ = document.getElementById('btn-prev-q');
  const btnNextQ = document.getElementById('btn-next-q');
  const btnFinishQuiz = document.getElementById('btn-finish-quiz');
  const btnSidebarSubmit = document.getElementById('btn-sidebar-submit');

  // Palette Elements
  const paletteGrid = document.getElementById('palette-grid');
  const paletteStats = document.getElementById('palette-stats');

  // Modal Elements
  const resultModal = document.getElementById('result-modal');
  const modalScore = document.getElementById('modal-score');
  const modalRating = document.getElementById('modal-rating');
  const breakdownU9 = document.getElementById('breakdown-u9');
  const breakdownU10 = document.getElementById('breakdown-u10');
  const breakdownU11 = document.getElementById('breakdown-u11');
  const breakdownU12 = document.getElementById('breakdown-u12');
  const btnReviewAnswers = document.getElementById('btn-review-answers');
  const btnRetakeQuiz = document.getElementById('btn-retake-quiz');

  // Khởi động
  function init() {
    applyTheme(currentTheme);
    filterQuestions();
    renderQuestion();
    renderPalette();
    attachEventListeners();
  }

  // Quản lý Giao diện Sáng / Tối
  function applyTheme(theme) {
    currentTheme = theme;
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
      if (themeText) themeText.textContent = 'Chế độ Tối';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
      if (themeText) themeText.textContent = 'Chế độ Sáng';
    }
    try {
      localStorage.setItem('jlpt_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  // Chuyển đổi bộ đề (1 - 5)
  function switchSet(setKey) {
    if (currentMode === 'exam' && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
      if (!confirm('Bạn đang trong quá trình thi. Chuyển sang bộ đề khác sẽ đặt lại tiến trình của bộ đề hiện tại. Bạn có chắc muốn chuyển?')) {
        return;
      }
    }

    currentSetKey = String(setKey);
    fullQuestions = [...QUIZ_SETS[currentSetKey]];
    userAnswers = {};
    flaggedQuestions.clear();
    isExamSubmitted = false;
    currentIndex = 0;

    // Cập nhật active class cho các nút bộ đề
    setButtons.forEach(btn => {
      if (btn.getAttribute('data-set') === currentSetKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (currentMode === 'exam') {
      startExamTimer();
    }

    filterQuestions();
    renderQuestion();
    renderPalette();
  }

  // Xáo trộn ngẫu nhiên thứ tự câu hỏi trong bộ đề hiện tại
  function shuffleCurrentQuestions() {
    if (currentMode === 'exam' && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
      if (!confirm('Xáo trộn câu hỏi sẽ đặt lại tiến trình làm bài của bộ đề hiện tại. Bạn có chắc chắn muốn trộn?')) {
        return;
      }
    }

    // Fisher-Yates shuffle
    for (let i = fullQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fullQuestions[i], fullQuestions[j]] = [fullQuestions[j], fullQuestions[i]];
    }

    userAnswers = {};
    flaggedQuestions.clear();
    isExamSubmitted = false;
    currentIndex = 0;

    if (currentMode === 'exam') {
      startExamTimer();
    }

    filterQuestions();
    renderQuestion();
    renderPalette();

    showToast('Đã xáo trộn ngẫu nhiên thứ tự 100 câu hỏi! 🔀');
  }

  // Hiển thị thông báo Toast
  let toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // Lọc câu hỏi theo Unit
  function filterQuestions() {
    if (currentUnitFilter === 'all') {
      filteredQuestions = [...fullQuestions];
    } else {
      filteredQuestions = fullQuestions.filter(q => q.unit === currentUnitFilter);
    }
    currentIndex = 0;
  }

  // Lấy class màu của Unit
  function getBadgeClass(unit) {
    if (unit.includes('9')) return 'u9';
    if (unit.includes('10')) return 'u10';
    if (unit.includes('11')) return 'u11';
    if (unit.includes('12')) return 'u12';
    return 'u9';
  }

  // Hiển thị câu hỏi hiện tại
  function renderQuestion() {
    if (filteredQuestions.length === 0) return;

    const q = filteredQuestions[currentIndex];
    const badgeClass = getBadgeClass(q.unit);

    qUnitBadge.textContent = q.unit;
    qUnitBadge.className = `unit-badge ${badgeClass}`;
    qPatternTag.textContent = q.pattern;
    qIndexDisplay.textContent = `Câu ${String(currentIndex + 1).padStart(2, '0')} / ${String(filteredQuestions.length).padStart(2, '0')}`;
    qText.textContent = q.question;

    // Trạng thái cờ đánh dấu
    if (flaggedQuestions.has(q.id)) {
      qFlagBtn.classList.add('is-flagged');
      qFlagBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    } else {
      qFlagBtn.classList.remove('is-flagged');
      qFlagBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }

    // Hiển thị các phương án đáp án
    optionsGrid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const selectedAns = userAnswers[q.id];
    const showExplanation = currentMode === 'instant' ? (selectedAns !== undefined) : isExamSubmitted;

    q.options.forEach((opt, idx) => {
      const optItem = document.createElement('div');
      optItem.className = 'option-item';

      if (selectedAns === idx) {
        optItem.classList.add('selected');
      }

      // Tô màu đáp án đúng / sai khi hiển thị giải thích
      if (showExplanation) {
        if (idx === q.answer) {
          optItem.classList.add('correct');
        } else if (selectedAns === idx && selectedAns !== q.answer) {
          optItem.classList.add('wrong');
        }
      }

      optItem.innerHTML = `
        <div class="option-key">${letters[idx]}</div>
        <div class="option-text japanese-text">${opt}</div>
      `;

      // Click chọn đáp án
      optItem.addEventListener('click', () => {
        if (isExamSubmitted && currentMode === 'exam') return; // Đã nộp bài thì không sửa
        selectOption(idx);
      });

      optionsGrid.appendChild(optItem);
    });

    // Hiển thị hộp giải thích
    if (showExplanation && selectedAns !== undefined) {
      explanationBox.classList.add('show');
      const isCorrect = selectedAns === q.answer;

      if (isCorrect) {
        expBadge.className = 'exp-badge correct';
        expBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Chính xác!';
      } else {
        expBadge.className = 'exp-badge wrong';
        expBadge.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Chưa đúng! Đáp án đúng: ${letters[q.answer]}`;
      }

      expTranslation.textContent = `Dịch nghĩa: "${q.translation}"`;
      expDetail.textContent = q.explanation;
    } else {
      explanationBox.classList.remove('show');
    }

    // Nút điều hướng
    btnPrevQ.disabled = currentIndex === 0;
    btnNextQ.disabled = currentIndex === filteredQuestions.length - 1;

    if (currentIndex === filteredQuestions.length - 1 && currentMode === 'exam' && !isExamSubmitted) {
      btnFinishQuiz.style.display = 'inline-flex';
    } else {
      btnFinishQuiz.style.display = 'none';
    }

    updatePaletteState();
  }

  // Chọn đáp án
  function selectOption(index) {
    const q = filteredQuestions[currentIndex];
    userAnswers[q.id] = index;
    renderQuestion();
    renderPalette();
  }

  // Đổi trạng thái cờ câu hỏi
  function toggleFlag() {
    const q = filteredQuestions[currentIndex];
    if (flaggedQuestions.has(q.id)) {
      flaggedQuestions.delete(q.id);
    } else {
      flaggedQuestions.add(q.id);
    }
    renderQuestion();
    renderPalette();
  }

  // Render bảng số 100 câu hỏi
  function renderPalette() {
    paletteGrid.innerHTML = '';
    let answeredCount = 0;

    filteredQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;

      if (idx === currentIndex) {
        btn.classList.add('current');
      }

      const isAnswered = userAnswers[q.id] !== undefined;
      if (isAnswered) {
        answeredCount++;
        btn.classList.add('answered');

        // Nếu đã nộp bài hoặc ở chế độ xem lại, tô màu xanh/đỏ cho nút số câu
        if (isExamSubmitted || currentMode === 'instant') {
          if (userAnswers[q.id] === q.answer) {
            btn.classList.add('correct');
          } else {
            btn.classList.add('wrong');
          }
        }
      }

      if (flaggedQuestions.has(q.id)) {
        btn.classList.add('flagged');
      }

      btn.addEventListener('click', () => {
        currentIndex = idx;
        renderQuestion();
      });

      paletteGrid.appendChild(btn);
    });

    paletteStats.textContent = `${answeredCount}/${filteredQuestions.length} đã làm`;
  }

  // Cập nhật câu đang xem trên palette
  function updatePaletteState() {
    const buttons = paletteGrid.querySelectorAll('.palette-btn');
    buttons.forEach((btn, idx) => {
      if (idx === currentIndex) {
        btn.classList.add('current');
      } else {
        btn.classList.remove('current');
      }
    });
  }

  // Đổi câu hỏi
  function nextQuestion() {
    if (currentIndex < filteredQuestions.length - 1) {
      currentIndex++;
      renderQuestion();
    }
  }

  function prevQuestion() {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  }

  // Quản lý đếm ngược giờ thi thử
  function startExamTimer() {
    clearInterval(timerInterval);
    timerSeconds = 60 * 60; // 60 phút
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();

      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        alert('Đã hết thời gian làm bài thi! Hệ thống sẽ tự động nộp bài.');
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Nộp bài thi
  function submitExam() {
    clearInterval(timerInterval);
    isExamSubmitted = true;

    let score = 0;
    const unitScores = {
      'Unit 9': { correct: 0, total: 0 },
      'Unit 10': { correct: 0, total: 0 },
      'Unit 11': { correct: 0, total: 0 },
      'Unit 12': { correct: 0, total: 0 },
    };

    filteredQuestions.forEach(q => {
      const u = q.unit;
      if (unitScores[u]) unitScores[u].total++;

      if (userAnswers[q.id] === q.answer) {
        score++;
        if (unitScores[u]) unitScores[u].correct++;
      }
    });

    const percent = Math.round((score / filteredQuestions.length) * 100);

    // Điểm số hiển thị
    modalScore.textContent = `${score} / ${filteredQuestions.length} (${percent}%)`;

    // Đánh giá
    if (percent >= 90) {
      modalRating.textContent = '🏆 Xuất sắc! Bạn đã làm chủ ngữ pháp JLPT N4 - N3!';
      modalRating.style.color = 'var(--success)';
    } else if (percent >= 75) {
      modalRating.textContent = '🌟 Rất tốt! Nắm chắc hầu hết kiến thức trọng tâm.';
      modalRating.style.color = 'var(--accent)';
    } else if (percent >= 50) {
      modalRating.textContent = '📚 Khá! Cần ôn luyện thêm các câu đã làm sai.';
      modalRating.style.color = 'var(--warning)';
    } else {
      modalRating.textContent = '⚠️ Cần cố gắng ôn tập lại toàn bộ ngữ pháp!';
      modalRating.style.color = 'var(--danger)';
    }

    // Chi tiết từng Unit
    breakdownU9.textContent = `Unit 9: ${unitScores['Unit 9'].correct}/${unitScores['Unit 9'].total}`;
    breakdownU10.textContent = `Unit 10: ${unitScores['Unit 10'].correct}/${unitScores['Unit 10'].total}`;
    breakdownU11.textContent = `Unit 11: ${unitScores['Unit 11'].correct}/${unitScores['Unit 11'].total}`;
    breakdownU12.textContent = `Unit 12: ${unitScores['Unit 12'].correct}/${unitScores['Unit 12'].total}`;

    resultModal.classList.add('show');
    renderPalette();
    renderQuestion();
  }

  // Phát âm câu hỏi tiếng Nhật
  function speakQuestion() {
    if (!('speechSynthesis' in window)) return;
    const q = filteredQuestions[currentIndex];
    window.speechSynthesis.cancel();

    // Thay thế chỗ trống （　　）thành từ ngữ tự nhiên để đọc trôi chảy
    const textToRead = q.question.replace(/（.*?）/g, '');
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang.startsWith('ja') || v.lang.includes('JP'));
    if (jaVoice) utterance.voice = jaVoice;

    window.speechSynthesis.speak(utterance);
  }

  // Gắn sự kiện lắng nghe
  function attachEventListeners() {
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Chuyển đổi bộ đề thi
    setButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const setKey = btn.getAttribute('data-set');
        switchSet(setKey);
      });
    });

    // Nút Xáo trộn câu hỏi trong bộ đề
    if (btnShuffleQuestions) {
      btnShuffleQuestions.addEventListener('click', shuffleCurrentQuestions);
    }

    // Chuyển chế độ Luyện tập / Thi thử
    btnModeInstant.addEventListener('click', () => {
      currentMode = 'instant';
      btnModeInstant.classList.add('active');
      btnModeExam.classList.remove('active');
      timerBox.style.display = 'none';
      btnSidebarSubmit.style.display = 'none';
      clearInterval(timerInterval);
      isExamSubmitted = false;
      renderQuestion();
      renderPalette();
    });

    btnModeExam.addEventListener('click', () => {
      currentMode = 'exam';
      btnModeExam.classList.add('active');
      btnModeInstant.classList.remove('active');
      timerBox.style.display = 'inline-flex';
      btnSidebarSubmit.style.display = 'flex';
      isExamSubmitted = false;
      userAnswers = {}; // Reset lại đáp án thi
      startExamTimer();
      renderQuestion();
      renderPalette();
    });

    // Lọc theo Unit
    unitFilterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        unitFilterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentUnitFilter = btn.getAttribute('data-unit');
        filterQuestions();
        renderQuestion();
        renderPalette();
      });
    });

    // Nút điều hướng
    btnNextQ.addEventListener('click', nextQuestion);
    btnPrevQ.addEventListener('click', prevQuestion);
    qFlagBtn.addEventListener('click', toggleFlag);
    qSpeakBtn.addEventListener('click', speakQuestion);

    // Nộp bài thi
    btnFinishQuiz.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?')) {
        submitExam();
      }
    });

    btnSidebarSubmit.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?')) {
        submitExam();
      }
    });

    // Nút trong Modal Kết quả
    btnReviewAnswers.addEventListener('click', () => {
      resultModal.classList.remove('show');
      currentIndex = 0;
      renderQuestion();
      renderPalette();
    });

    btnRetakeQuiz.addEventListener('click', () => {
      resultModal.classList.remove('show');
      userAnswers = {};
      flaggedQuestions.clear();
      isExamSubmitted = false;
      if (currentMode === 'exam') {
        startExamTimer();
      }
      currentIndex = 0;
      renderQuestion();
      renderPalette();
    });

    // Phím tắt bàn phím
    document.addEventListener('keydown', (e) => {
      if (resultModal.classList.contains('show')) return;

      if (e.key === 'ArrowRight') {
        nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        prevQuestion();
      } else if (['1', 'a', 'A'].includes(e.key)) {
        selectOption(0);
      } else if (['2', 'b', 'B'].includes(e.key)) {
        selectOption(1);
      } else if (['3', 'c', 'C'].includes(e.key)) {
        selectOption(2);
      } else if (['4', 'd', 'D'].includes(e.key)) {
        selectOption(3);
      } else if (['f', 'F'].includes(e.key)) {
        toggleFlag();
      } else if (['s', 'S'].includes(e.key)) {
        speakQuestion();
      } else if (['t', 'T'].includes(e.key)) {
        toggleTheme();
      }
    });
  }

  // Khởi động
  init();
});
