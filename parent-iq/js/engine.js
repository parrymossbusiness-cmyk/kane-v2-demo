// Reader Engine & Dynamic State Manager
const KANE_APP = {
  activeIdx: 0,
  audioBaseUrl: "https://pub-your-r2-subdomain.r2.dev/parent-iq-audios/", // Cloudflare R2 bucket

  init() {
    this.renderTOC();
    this.loadChapter(0);
    this.bindKeyboardNav();
  },

  renderTOC() {
    const tocContainer = document.getElementById("toc-nav");
    if (!tocContainer) return;
    tocContainer.innerHTML = "";

    let currentSection = "";
    KANE_SYSTEM_DATA.forEach((item, idx) => {
      // Group header
      if (item.part !== currentSection) {
        currentSection = item.part;
        const sectionHeader = document.createElement("p");
        sectionHeader.className = "text-[10px] font-black uppercase tracking-widest text-gray-500 pt-3 pb-1 px-3";
        sectionHeader.innerText = currentSection;
        tocContainer.appendChild(sectionHeader);
      }

      // Nav Button
      const btn = document.createElement("button");
      btn.onclick = () => {
        this.loadChapter(idx);
        this.toggleDrawer(false);
      };
      btn.className = `w-full text-left px-3 py-2 rounded-xl transition flex items-center justify-between text-xs ${
        idx === this.activeIdx
          ? "bg-kaneOrange/15 text-kaneOrange font-bold border border-kaneOrange/30"
          : "text-gray-400 hover:text-white hover:bg-kaneCard"
      }`;
      btn.innerHTML = `
        <span class="truncate">${item.navTitle}</span>
        <span class="text-[10px] opacity-40">${item.dayNumber !== null ? 'Day ' + item.dayNumber : ''}</span>
      `;
      tocContainer.appendChild(btn);
    });
  },

  loadChapter(idx) {
    this.activeIdx = idx;
    const chapter = KANE_SYSTEM_DATA[idx];
    const stage = document.getElementById("content-stage");
    if (!stage) return;

    stage.innerHTML = `
      <div class="border-b border-kaneBorder pb-6">
        <span class="text-xs font-black uppercase tracking-widest text-kaneOrange">${chapter.part}</span>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-tight">${chapter.pageHeading}</h1>
        <p class="text-sm text-gray-400 mt-2">${chapter.subtitle}</p>
      </div>
      <div class="pt-2">${chapter.contentHTML}</div>
    `;

    // Special Component Initializers
    if (chapter.id === "day-10") this.renderKaneScorecard();
    if (chapter.id === "conversation-vault") this.renderVaultTracks();

    // Update Bottom Arrows & Indicators
    this.updateFooterNav();
    this.renderTOC();
    this.restoreSavedInputs();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  updateFooterNav() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const progText = document.getElementById("progress-indicator");
    const progBar = document.getElementById("progress-meter");

    prevBtn.disabled = this.activeIdx === 0;
    nextBtn.disabled = this.activeIdx === KANE_SYSTEM_DATA.length - 1;

    progText.innerText = `${this.activeIdx + 1} of ${KANE_SYSTEM_DATA.length}`;
    const pct = ((this.activeIdx + 1) / KANE_SYSTEM_DATA.length) * 100;
    progBar.style.width = pct + "%";
  },

  next() {
    if (this.activeIdx < KANE_SYSTEM_DATA.length - 1) this.loadChapter(this.activeIdx + 1);
  },

  prev() {
    if (this.activeIdx > 0) this.loadChapter(this.activeIdx - 1);
  },

  // State Persistence
  saveField(key, val) {
    localStorage.setItem("kane_" + key, val);
  },

  restoreSavedInputs() {
    const loveInput = document.getElementById("input_love_of_game");
    if (loveInput) {
      const val = localStorage.getItem("kane_love_of_game") || 8;
      loveInput.value = val;
      this.handleLoveSlider(val);
    }
  },

  // Day 0
  handleLoveSlider(val) {
    const display = document.getElementById("display-love");
    const warning = document.getElementById("love-warning-banner");
    if (display) display.innerText = val;
    if (warning) {
      if (parseInt(val) < 7) warning.classList.remove("hidden");
      else warning.classList.add("hidden");
    }
    this.saveField("love_of_game", val);
  },

  // Day 4 Audit Trigger
  evalDay4Audit() {
    const checks = document.querySelectorAll("[data-day4-check]:checked").length;
    const upsell = document.getElementById("day4-upsell");
    if (checks >= 3) upsell.classList.remove("hidden");
    else upsell.classList.add("hidden");
  },

  // Day 8 Budget Engine
  recalcBudget() {
    const fields = document.querySelectorAll("[data-budget-field]");
    let sum = 0;
    fields.forEach(f => sum += parseFloat(f.value) || 0);

    const sumDisplay = document.getElementById("budget-sum-display");
    if (sumDisplay) sumDisplay.innerText = "$" + sum.toLocaleString();

    const income = parseFloat(document.getElementById("input_household_income")?.value) || 0;
    const ratioBox = document.getElementById("ratio-box");
    const ratioDisplay = document.getElementById("budget-ratio-display");
    const overspendAlert = document.getElementById("budget-overspend-alert");

    if (income > 0) {
      ratioBox.classList.remove("hidden");
      const ratio = (sum / income) * 100;
      ratioDisplay.innerText = ratio.toFixed(1) + "%";
      if (ratio > 5) overspendAlert.classList.remove("hidden");
      else overspendAlert.classList.add("hidden");
    } else {
      ratioBox?.classList.add("hidden");
      overspendAlert?.classList.add("hidden");
    }
  },

  // Day 10 Scorecard Generator
  renderKaneScorecard() {
    const container = document.getElementById("kane-scorecard-list");
    if (!container) return;
    const questions = [
      "Practice quality: Structured, skill-focused and energetic",
      "Coach communication: Proactive on expectations and roles",
      "Playing-time philosophy: Clear, fair, and followed consistently",
      "Individual attention: Constructive feedback for all 10+ players",
      "Practice-to-game ratio: At least 1.5 practices per game",
      "Parent culture: Sidelines supportive, not hostile",
      "Financial transparency: Full upfront cost stated in writing",
      "Player retention: High rate of returning players season to season",
      "Coaching background: Legitimate basketball pedigree",
      "End-of-bench experience: Bench parents confirm real skill growth"
    ];

    container.innerHTML = questions.map((q, i) => `
      <div class="p-3.5 rounded-xl bg-kaneCard border border-kaneBorder flex items-center justify-between text-xs">
        <span class="text-gray-300 pr-2">${i + 1}. ${q}</span>
        <select class="kane-score-select bg-kaneDark border border-kaneBorder text-white rounded-lg p-1.5 focus:border-kaneOrange" onchange="KANE_APP.calcKaneScore()">
          <option value="5">5 - Always</option>
          <option value="4">4 - Mostly</option>
          <option value="3" selected>3 - Sometimes</option>
          <option value="2">2 - Rarely</option>
          <option value="1">1 - Never</option>
        </select>
      </div>
    `).join("");

    this.calcKaneScore();
  },

  calcKaneScore() {
    const selects = document.querySelectorAll(".kane-score-select");
    let total = 0;
    selects.forEach(s => total += parseInt(s.value));

    const display = document.getElementById("kane-score-total");
    const status = document.getElementById("kane-score-status");
    const upsell = document.getElementById("day10-audit-upsell");

    if (display) display.innerText = `${total} / 50`;

    if (total < 30) {
      if (status) status.innerText = "Status: Serious Program Deficiencies";
      upsell?.classList.remove("hidden");
    } else {
      if (status) status.innerText = "Status: Program Passes The Kane Standard";
      upsell?.classList.add("hidden");
    }
  },

  // Day 14 Decision Matrix
  handleDecisionSelection(val) {
    const gameplanCard = document.getElementById("decision-gameplan-box");
    if (val === "adjust" || val === "change") {
      gameplanCard?.classList.remove("hidden");
    } else {
      gameplanCard?.classList.add("hidden");
    }
  },

  // Conversation Vault Audio Directory
  renderVaultTracks() {
    const container = document.getElementById("vault-tracks-container");
    if (!container) return;
    const tracks = [
      { id: "01", title: "Before You Talk to Coach About Minutes", file: "audio-01.mp3" },
      { id: "02", title: "Before Talking to Spouse About Budget", file: "audio-02.mp3" },
      { id: "03", title: "Before Confronting Daddy-Ball", file: "audio-03.mp3" },
      { id: "04", title: "When Kid Won't Go to Practice", file: "audio-04.mp3" },
      { id: "05", title: "When Pitched on Exposure", file: "audio-05.mp3" },
      { id: "06", title: "Before Overspending on Tournaments", file: "audio-06.mp3" },
      { id: "07", title: "When Kid Asks If Good Enough for College", file: "audio-07.mp3" },
      { id: "08", title: "When Coach Pressures Year-Round Play", file: "audio-08.mp3" },
      { id: "09", title: "Before Evaluating a New AAU Team", file: "audio-09.mp3" },
      { id: "10", title: "When You Feel Like You're Failing Your Kid", file: "audio-10.mp3" }
    ];

    container.innerHTML = tracks.map(t => `
      <div class="p-4 rounded-xl bg-kaneCard border border-kaneBorder flex items-center justify-between">
        <div>
          <span class="text-[10px] text-kaneOrange font-black uppercase">Track ${t.id}</span>
          <p class="text-xs font-bold text-white mt-0.5">${t.title}</p>
        </div>
        <button onclick="KANE_APP.playVaultTrack('Track ${t.id}', '${t.title}', '${t.file}')" class="p-2 rounded-lg bg-kaneOrange text-white hover:bg-orange-600 transition">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
        </button>
      </div>
    `).join("");
  },

  // Audio Playback
  playVaultTrack(tag, title, filename) {
    const player = document.getElementById("global-vault-player");
    const audio = document.getElementById("native-audio-element");
    document.getElementById("vault-track-tag").innerText = tag;
    document.getElementById("vault-track-title").innerText = title;
    audio.src = this.audioBaseUrl + filename;
    player.classList.remove("hidden");
    audio.play();
  },

  dismissAudio() {
    const player = document.getElementById("global-vault-player");
    const audio = document.getElementById("native-audio-element");
    audio.pause();
    player.classList.add("hidden");
  },

  toggleDrawer(force) {
    const drawer = document.getElementById("toc-sidebar");
    if (force === false) drawer.classList.add("-translate-x-full");
    else drawer.classList.toggle("-translate-x-full");
  },

  bindKeyboardNav() {
    document.addEventListener("keydown", (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
      if (e.key === "ArrowRight") this.next();
      if (e.key === "ArrowLeft") this.prev();
    });
  }
};

window.addEventListener("DOMContentLoaded", () => KANE_APP.init());
