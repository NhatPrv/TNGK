// ==========================================================================
// Ứng dụng Flashcard Ngữ Pháp Tiếng Nhật (Unit 9, 10, 11, 12)
// Quản lý trạng thái, âm thanh SpeechSynthesis, lưu tiến độ localStorage
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Trạng thái ứng dụng
  let fullList = [...GRAMMAR_DATA];
  let filteredList = [...fullList];
  let currentIndex = 0;
  let isFlipped = false;
  let currentUnitFilter = 'all';
  let searchQuery = '';
  let currentViewMode = 'card'; // 'card' hoặc 'table'

  // Đọc danh sách đã thuộc và theme từ LocalStorage
  let masteredIds = new Set();
  let currentTheme = 'dark';
  try {
    const saved = localStorage.getItem('jlpt_mastered_ids');
    if (saved) {
      masteredIds = new Set(JSON.parse(saved));
    }
    const savedTheme = localStorage.getItem('jlpt_theme');
    if (savedTheme) {
      currentTheme = savedTheme;
    }
  } catch (e) {
    console.error('Không thể đọc dữ liệu từ localStorage', e);
  }

  // DOM Elements
  const cardElement = document.getElementById('card-element');
  const flashcardArena = document.getElementById('flashcard-arena');
  const tableViewContainer = document.getElementById('table-view-container');
  const emptyState = document.getElementById('empty-state');

  // Stats & Progress Elements
  const statTotal = document.getElementById('stat-total');
  const statCurrent = document.getElementById('stat-current');
  const statMastered = document.getElementById('stat-mastered');
  const statPercent = document.getElementById('stat-percent');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  // Front Card Elements
  const frontUnitBadge = document.getElementById('front-unit-badge');
  const frontCardIndex = document.getElementById('front-card-index');
  const frontPattern = document.getElementById('front-pattern');
  const frontRomaji = document.getElementById('front-romaji');
  const frontConnection = document.getElementById('front-connection');
  const frontSpeakBtn = document.getElementById('front-speak-btn');

  // Back Card Elements
  const backUnitBadge = document.getElementById('back-unit-badge');
  const backPattern = document.getElementById('back-pattern');
  const backMeaningVi = document.getElementById('back-meaning-vi');
  const backMeaningJa = document.getElementById('back-meaning-ja');
  const backExamplesList = document.getElementById('back-examples-list');
  const backSpeakBtn = document.getElementById('back-speak-btn');

  // Control Buttons
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnFlip = document.getElementById('btn-flip');
  const btnShuffle = document.getElementById('btn-shuffle');
  const btnToggleMastered = document.getElementById('btn-toggle-mastered');
  const masteredBtnText = document.getElementById('mastered-btn-text');
  const searchInput = document.getElementById('search-input');
  const unitFilterButtons = document.querySelectorAll('.unit-filters .filter-btn');
  const btnModeCard = document.getElementById('btn-mode-card');
  const btnModeTable = document.getElementById('btn-mode-table');
  const toast = document.getElementById('toast');

  // Theme Elements
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  // Khởi tạo
  function init() {
    applyTheme(currentTheme);
    updateFilteredList();
    renderCurrentCard();
    renderTableView();
    updateStats();
    attachEventListeners();
  }

  // Quản lý Light / Dark Mode
  function applyTheme(theme) {
    currentTheme = theme;
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
      if (themeText) themeText.textContent = 'Chế độ Tối';
      if (themeToggleBtn) themeToggleBtn.title = 'Chuyển sang Chế độ Tối (T)';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
      if (themeText) themeText.textContent = 'Chế độ Sáng';
      if (themeToggleBtn) themeToggleBtn.title = 'Chuyển sang Chế độ Sáng (T)';
    }
    try {
      localStorage.setItem('jlpt_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }

  function toggleTheme() {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    showToast(nextTheme === 'light' ? 'Đã bật Chế độ Sáng ☀️' : 'Đã bật Chế độ Tối 🌙');
  }

  // Lọc danh sách theo Unit và Tìm kiếm
  function updateFilteredList() {
    filteredList = fullList.filter(item => {
      // Bộ lọc Unit
      let matchesUnit = true;
      if (currentUnitFilter === 'unmastered') {
        matchesUnit = !masteredIds.has(item.id);
      } else if (currentUnitFilter !== 'all') {
        matchesUnit = item.unit === currentUnitFilter;
      }

      // Bộ lọc tìm kiếm
      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const inPattern = item.pattern.toLowerCase().includes(q);
        const inRomaji = item.romaji ? item.romaji.toLowerCase().includes(q) : false;
        const inMeaningVi = item.meaningVi.toLowerCase().includes(q);
        const inMeaningJa = item.meaningJa.toLowerCase().includes(q);
        const inConnection = item.connection.toLowerCase().includes(q);
        const inExamples = item.examples.some(ex => 
          ex.ja.toLowerCase().includes(q) || ex.vi.toLowerCase().includes(q)
        );

        matchesSearch = inPattern || inRomaji || inMeaningVi || inMeaningJa || inConnection || inExamples;
      }

      return matchesUnit && matchesSearch;
    });

    if (currentIndex >= filteredList.length) {
      currentIndex = 0;
    }
  }

  // Lấy class badge màu theo Unit
  function getBadgeClass(unit) {
    if (unit.includes('9')) return 'u9';
    if (unit.includes('10')) return 'u10';
    if (unit.includes('11')) return 'u11';
    if (unit.includes('12')) return 'u12';
    return 'u9';
  }

  // Render thẻ hiện tại ở chế độ Flashcard
  function renderCurrentCard() {
    if (filteredList.length === 0) {
      flashcardArena.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    flashcardArena.style.display = 'flex';
    emptyState.style.display = 'none';

    // Đưa thẻ về mặt trước khi đổi thẻ
    if (isFlipped) {
      isFlipped = false;
      cardElement.classList.remove('is-flipped');
    }

    const item = filteredList[currentIndex];
    const badgeClass = getBadgeClass(item.unit);

    // Render Mặt trước
    frontUnitBadge.textContent = item.unit;
    frontUnitBadge.className = `unit-badge ${badgeClass}`;
    frontCardIndex.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(filteredList.length).padStart(2, '0')}`;
    frontPattern.textContent = item.pattern;
    frontRomaji.textContent = item.romaji || '';
    frontConnection.textContent = item.connection;

    // Render Mặt sau
    backUnitBadge.textContent = item.unit;
    backUnitBadge.className = `unit-badge ${badgeClass}`;
    backPattern.textContent = item.pattern;
    backMeaningVi.textContent = item.meaningVi;
    backMeaningJa.textContent = item.meaningJa;

    // Render danh sách ví dụ mặt sau
    backExamplesList.innerHTML = '';
    item.examples.forEach((ex, idx) => {
      const exDiv = document.createElement('div');
      exDiv.className = 'example-item';
      exDiv.innerHTML = `
        <div class="example-ja japanese-text">${ex.ja}</div>
        <div class="example-vi">${ex.vi}</div>
        <button class="example-audio-btn" data-audio-text="${encodeURIComponent(ex.ja)}" title="Nghe câu ví dụ">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      `;
      backExamplesList.appendChild(exDiv);
    });

    // Gắn sự kiện phát âm từng ví dụ
    const audioButtons = backExamplesList.querySelectorAll('.example-audio-btn');
    audioButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = decodeURIComponent(btn.getAttribute('data-audio-text'));
        speakJapanese(text);
      });
    });

    // Nút trạng thái Đã thuộc
    const isMastered = masteredIds.has(item.id);
    if (isMastered) {
      btnToggleMastered.classList.add('is-active');
      btnToggleMastered.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span id="mastered-btn-text">Đã thuộc</span>';
    } else {
      btnToggleMastered.classList.remove('is-active');
      btnToggleMastered.innerHTML = '<i class="fa-regular fa-circle"></i> <span id="mastered-btn-text">Cần ôn</span>';
    }

    updateStats();
  }

  // Render Chế độ bảng tổng hợp danh sách
  function renderTableView() {
    tableViewContainer.innerHTML = '';

    if (filteredList.length === 0) {
      tableViewContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon"><i class="fa-regular fa-folder-open"></i></div>
          <h3>Không có dữ liệu ngữ pháp tương ứng</h3>
        </div>
      `;
      return;
    }

    filteredList.forEach((item, index) => {
      const badgeClass = getBadgeClass(item.unit);
      const isMastered = masteredIds.has(item.id);

      const refCard = document.createElement('div');
      refCard.className = 'ref-card';
      refCard.innerHTML = `
        <div class="ref-header">
          <span class="unit-badge ${badgeClass}">${item.unit}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">#${index + 1}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div class="ref-pattern japanese-text">${item.pattern}</div>
          <button class="card-audio-btn" style="width: 28px; height: 28px; font-size: 0.75rem;" data-speak="${encodeURIComponent(item.pattern)}" title="Nghe phát âm">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
        <div class="ref-romaji">${item.romaji || ''}</div>
        <div class="ref-connection japanese-text"><strong>Cấu trúc:</strong><br>${item.connection}</div>
        <div class="ref-meaning"><strong>Ý nghĩa:</strong><br>${item.meaningVi}</div>
        <div class="ref-examples-title">Ví dụ tiêu biểu:</div>
        <div class="ref-example-item">
          <div class="ref-example-ja japanese-text">${item.examples[0].ja}</div>
          <div class="ref-example-vi">${item.examples[0].vi}</div>
        </div>
        <button class="action-btn btn-mastered ${isMastered ? 'is-active' : ''}" style="margin-top: auto; padding: 6px 12px; font-size: 0.8rem;" data-toggle-id="${item.id}">
          <i class="${isMastered ? 'fa-solid' : 'fa-regular'} fa-circle-check"></i> ${isMastered ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}
        </button>
      `;

      tableViewContainer.appendChild(refCard);
    });

    // Gắn sự kiện nghe phát âm trong bảng
    tableViewContainer.querySelectorAll('[data-speak]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = decodeURIComponent(btn.getAttribute('data-speak'));
        speakJapanese(text);
      });
    });

    // Gắn sự kiện toggle đã thuộc trong bảng
    tableViewContainer.querySelectorAll('[data-toggle-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-toggle-id');
        toggleMasteredById(id);
      });
    });
  }

  // Cập nhật số liệu thống kê & thanh tiến độ
  function updateStats() {
    statTotal.textContent = fullList.length;
    statCurrent.textContent = filteredList.length > 0 ? `${currentIndex + 1} / ${filteredList.length}` : '0 / 0';
    statMastered.textContent = masteredIds.size;

    const percent = Math.round((masteredIds.size / fullList.length) * 100);
    statPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    progressText.textContent = `${masteredIds.size} / ${fullList.length} (${percent}%) hoàn thành`;
  }

  // Lật thẻ
  function toggleFlip() {
    isFlipped = !isFlipped;
    if (isFlipped) {
      cardElement.classList.add('is-flipped');
    } else {
      cardElement.classList.remove('is-flipped');
    }
  }

  // Chuyển thẻ kế tiếp
  function nextCard() {
    if (filteredList.length === 0) return;
    currentIndex = (currentIndex + 1) % filteredList.length;
    renderCurrentCard();
  }

  // Quay lại thẻ trước
  function prevCard() {
    if (filteredList.length === 0) return;
    currentIndex = (currentIndex - 1 + filteredList.length) % filteredList.length;
    renderCurrentCard();
  }

  // Xáo trộn thứ tự thẻ
  function shuffleCards() {
    if (filteredList.length <= 1) return;
    for (let i = filteredList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredList[i], filteredList[j]] = [filteredList[j], filteredList[i]];
    }
    currentIndex = 0;
    renderCurrentCard();
    renderTableView();
    showToast('Đã xáo trộn ngẫu nhiên các thẻ!');
  }

  // Đánh dấu đã thuộc / cần ôn
  function toggleCurrentMastered() {
    if (filteredList.length === 0) return;
    const currentItem = filteredList[currentIndex];
    toggleMasteredById(currentItem.id);
  }

  function toggleMasteredById(id) {
    if (masteredIds.has(id)) {
      masteredIds.delete(id);
      showToast('Đã chuyển về danh sách cần ôn tập.');
    } else {
      masteredIds.add(id);
      showToast('Chúc mừng! Đã đánh dấu thuộc mẫu câu.');
    }

    try {
      localStorage.setItem('jlpt_mastered_ids', JSON.stringify([...masteredIds]));
    } catch (e) {
      console.error(e);
    }

    if (currentUnitFilter === 'unmastered') {
      updateFilteredList();
    }

    renderCurrentCard();
    renderTableView();
    updateStats();
  }

  // Phát âm tiếng Nhật bằng Web Speech API
  function speakJapanese(text) {
    if (!('speechSynthesis' in window)) {
      showToast('Trình duyệt không hỗ trợ Web Speech API.');
      return;
    }

    window.speechSynthesis.cancel(); // Dừng câu đang đọc nếu có
    const cleanText = text.replace(/〜/g, '').replace(/（.*?）/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9; // Tốc độ tự nhiên, rõ ràng

    // Tìm giọng tiếng Nhật có sẵn trong hệ thống
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang.startsWith('ja') || v.lang.includes('JP'));
    if (jaVoice) {
      utterance.voice = jaVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  // Hiển thị thông báo Toast
  let toastTimer = null;
  function showToast(msg) {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // Gắn các sự kiện lắng nghe (Event Listeners)
  function attachEventListeners() {
    // Click vào card để lật
    cardElement.addEventListener('click', (e) => {
      // Không lật nếu bấm vào nút âm thanh hoặc link
      if (e.target.closest('.card-audio-btn') || e.target.closest('.example-audio-btn')) {
        return;
      }
      toggleFlip();
    });

    // Các nút điều khiển
    btnFlip.addEventListener('click', toggleFlip);
    btnNext.addEventListener('click', nextCard);
    btnPrev.addEventListener('click', prevCard);
    btnShuffle.addEventListener('click', shuffleCards);
    btnToggleMastered.addEventListener('click', toggleCurrentMastered);

    // Nút phát âm mặt trước / mặt sau
    frontSpeakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (filteredList.length > 0) {
        speakJapanese(filteredList[currentIndex].pattern);
      }
    });

    backSpeakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (filteredList.length > 0) {
        speakJapanese(filteredList[currentIndex].pattern);
      }
    });

    // Bộ lọc theo Unit
    unitFilterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        unitFilterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentUnitFilter = btn.getAttribute('data-unit');
        currentIndex = 0;
        updateFilteredList();
        renderCurrentCard();
        renderTableView();
      });
    });

    // Tìm kiếm ô input
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      currentIndex = 0;
      updateFilteredList();
      renderCurrentCard();
      renderTableView();
    });

    // Đổi chế độ Thẻ 3D / Bảng tổng hợp
    btnModeCard.addEventListener('click', () => {
      currentViewMode = 'card';
      btnModeCard.classList.add('active');
      btnModeTable.classList.remove('active');
      flashcardArena.style.display = filteredList.length > 0 ? 'flex' : 'none';
      tableViewContainer.classList.remove('active');
    });

    btnModeTable.addEventListener('click', () => {
      currentViewMode = 'table';
      btnModeTable.classList.add('active');
      btnModeCard.classList.remove('active');
      flashcardArena.style.display = 'none';
      tableViewContainer.classList.add('active');
    });

    // Phím tắt bàn phím tiện lợi
    document.addEventListener('keydown', (e) => {
      // Bỏ qua khi đang gõ trong ô tìm kiếm
      if (document.activeElement === searchInput) return;

      if (e.code === 'Space') {
        e.preventDefault();
        toggleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        nextCard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        prevCard();
      } else if (e.key === 's' || e.key === 'S') {
        if (filteredList.length > 0) {
          speakJapanese(filteredList[currentIndex].pattern);
        }
      } else if (e.key === 'm' || e.key === 'M') {
        toggleCurrentMastered();
      } else if (e.key === 'r' || e.key === 'R') {
        shuffleCards();
      } else if (e.key === 't' || e.key === 'T') {
        toggleTheme();
      }
    });

    // Sự kiện nút Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  }

  // Khởi động
  init();
});
