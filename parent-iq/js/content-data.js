// Master Content Database for The Basketball Parent IQ System
const KANE_SYSTEM_DATA = [
  // ─── START & ORIENTATION ──────────────────────────────────────────
  {
    id: "intro",
    part: "Orientation",
    dayNumber: null,
    navTitle: "Introduction",
    pageHeading: "Everyone is building your child's basketball IQ. Nobody is building yours.",
    subtitle: "Why a parent IQ system, what exists today, and why Coach Kane.",
    audioId: null,
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 leading-relaxed text-base">
        <p>Ask any college coach what they recruit for and you will hear two words: <strong class="text-white">basketball IQ</strong>. Reading the floor, making the right decision fast, knowing what to do when the play breaks down. It has become the most wanted skill in the game, and a whole industry of trainers, camps and clubs exists to build it in your child.</p>
        <p>Now ask who is building the IQ of the person who drives that child to the gym, pays for the season and has the last word on the ride home. Until now, nobody.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
          <div class="p-4 rounded-xl bg-kaneCard border border-kaneBorder text-center">
            <span class="text-2xl font-black text-kaneOrange">+46%</span>
            <p class="text-xs text-gray-400 mt-1">Rise in family youth sports spending since 2019</p>
          </div>
          <div class="p-4 rounded-xl bg-kaneCard border border-kaneBorder text-center">
            <span class="text-2xl font-black text-white">49%</span>
            <p class="text-xs text-gray-400 mt-1">Parents confident child earns college scholarship</p>
          </div>
          <div class="p-4 rounded-xl bg-kaneCard border border-kaneBorder text-center">
            <span class="text-2xl font-black text-white">1 in 100</span>
            <p class="text-xs text-gray-400 mt-1">High school players reach Division I</p>
          </div>
          <div class="p-4 rounded-xl bg-kaneCard border border-kaneBorder text-center">
            <span class="text-2xl font-black text-kaneOrange">Zero</span>
            <p class="text-xs text-gray-400 mt-1">Training required to be a basketball parent</p>
          </div>
        </div>
        <p>Give me fourteen days, twenty minutes a night. By Day 14 you will know your job, what the season really costs, score your child's program, and have a decision in writing.</p>
      </div>
    `
  },
  {
    id: "day-0",
    part: "Orientation",
    dayNumber: 0,
    navTitle: "Day 0: Baseline Check",
    pageHeading: "Where Are You Starting From?",
    subtitle: "Take the quiz, answer three questions, and set your baseline before Day 1.",
    audioId: null,
    contentType: "interactive-checkin",
    checkinConfig: {
      type: "baseline",
      storageKeys: ["love_of_game", "two_words", "real_reason"]
    },
    contentHTML: `
      <div class="space-y-6">
        <p class="text-sm text-gray-300">Do these two things tonight, before Day 1. You will look at your answers again on Day 14, so write them down.</p>
        
        <!-- Interactive Tool 1: Love of the Game Slider -->
        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-4">
          <div class="flex justify-between items-center">
            <label class="text-sm font-bold text-white">1. Love of the Game (Scale 1 to 10)</label>
            <span id="display-love" class="text-2xl font-black text-kaneOrange">8</span>
          </div>
          <p class="text-xs text-gray-400">Ask your child directly: "On a scale of 1 to 10, how much do you love basketball right now?" Don't guess, and don't react to the number.</p>
          <input type="range" id="input_love_of_game" min="1" max="10" value="8" class="w-full accent-kaneOrange h-2 bg-gray-700 rounded-lg cursor-pointer" oninput="KANE_APP.handleLoveSlider(this.value)">
          <div id="love-warning-banner" class="hidden p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs leading-relaxed">
            <strong>Coach Kane Priority Note:</strong> If the love-of-the-game number is below 7, that comes before everything else in this book. Read <strong>Day 11 (Protect the Kid Before the Player)</strong> tonight, then come back to Day 1.
          </div>
        </div>

        <!-- Interactive Tool 2: Two Words -->
        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-3">
          <label class="text-sm font-bold text-white block">2. Describe basketball in two words (theirs, not yours):</label>
          <input type="text" id="input_two_words" placeholder="e.g. Fast, Fun (or Stressful, Tiring)" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white focus:outline-none focus:border-kaneOrange" onchange="KANE_APP.saveField('two_words', this.value)">
        </div>

        <!-- Interactive Tool 3: Real Reason -->
        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-3">
          <label class="text-sm font-bold text-white block">3. Why are we doing this? (Write your real reason):</label>
          <textarea id="input_real_reason" rows="2" placeholder="If it includes 'everyone else', 'falling behind' or 'exposure', be completely honest." class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white focus:outline-none focus:border-kaneOrange" onchange="KANE_APP.saveField('real_reason', this.value)"></textarea>
        </div>
      </div>
    `
  },

  // ─── PART 1: THE PLAYBOOK (DAYS 1-7) ──────────────────────────────
  {
    id: "day-1",
    part: "Part 1: The Playbook",
    dayNumber: 1,
    navTitle: "Day 1: Your Job in 4 Lines",
    pageHeading: "Players play. Coaches coach. Referees ref. Parents encourage, love, and support.",
    subtitle: "The drive home is the most important ten minutes in youth basketball.",
    audioId: null,
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Your child just played in front of a crowd. Maybe they made the mistake everyone saw. Their heart is still racing, they are hungry and tired, and they are replaying every mistake in their head. Then the person whose opinion matters most to them starts talking about the game.</p>
        <blockquote class="border-l-4 border-kaneOrange pl-4 italic text-white my-4 font-medium">
          "Players play. Coaches coach. Referees ref. Parents encourage, love, and support."
        </blockquote>
        <p>The car ride home isn't your coaching moment. If they want to talk, listen. If they don't, let them process. A child who gets a film session on every drive home learns to dread the drive, and after a while, the game that comes before it.</p>
        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Tonight's Action</h4>
          <p class="text-xs text-gray-400">Say nothing about the game on the drive home. Later, ask the after-game questions ("Did we do what we were told? Did we play hard?"). Log your observation:</p>
          <textarea id="input_day1_notes" rows="3" placeholder="What I did... What I noticed... What I'll do differently tomorrow..." class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white focus:outline-none focus:border-kaneOrange" onchange="KANE_APP.saveField('day1_notes', this.value)"></textarea>
        </div>
      </div>
    `
  },
  {
    id: "day-2",
    part: "Part 1: The Playbook",
    dayNumber: 2,
    navTitle: "Day 2: Development First",
    pageHeading: "Development first. Competition second.",
    subtitle: "Success means skills, IQ, and work ethic. Winning and playing time come second.",
    audioId: null,
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Youth basketball isn't the NBA or college ball. It is a development ground where young athletes learn the fundamentals of basketball and of life. You are signing up for a long-term commitment to your child's development, not their playing time.</p>
        <p>Notice what is NOT on Coach Kane's success list: A college scholarship, the NBA/WNBA, being the team's star, or fulfilling your own unfulfilled basketball dreams.</p>
        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Tonight's Action: 3 Development Goals</h4>
          <p class="text-xs text-gray-400">Write down three goals for your child this year. They must be development goals ("improve left-hand finishing", "consistent free throw routine"), not outcomes like wins or trophies.</p>
          <input type="text" id="input_day2_g1" placeholder="Goal 1" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" onchange="KANE_APP.saveField('day2_g1', this.value)">
          <input type="text" id="input_day2_g2" placeholder="Goal 2" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" onchange="KANE_APP.saveField('day2_g2', this.value)">
          <input type="text" id="input_day2_g3" placeholder="Goal 3" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" onchange="KANE_APP.saveField('day2_g3', this.value)">
        </div>
      </div>
    `
  },
  {
    id: "day-3",
    part: "Part 1: The Playbook",
    dayNumber: 3,
    navTitle: "Day 3: Clear Expectations",
    pageHeading: "Expect what today's child can give, not what tomorrow's hopes want.",
    subtitle: "Pursue excellence, not perfection. Playing time depends on doing what you're told and playing hard.",
    audioId: "audio-07",
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>In more than forty years of coaching I've seen more young athletes derailed by the wrong expectations than by lack of talent. Fair doesn't mean equal, and a parent who expects equal will find unfairness everywhere.</p>
        <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder flex items-center justify-between">
          <div>
            <span class="text-[10px] uppercase font-bold text-kaneOrange tracking-wider">Conversation Vault 07</span>
            <p class="text-sm font-bold text-white mt-0.5">When Your Kid Asks If They're Good Enough for College Ball</p>
          </div>
          <button onclick="KANE_APP.playVaultTrack('Audio 07', 'When Your Kid Asks About College Ball', 'audio-07.mp3')" class="px-4 py-2 bg-kaneOrange text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition">Listen (60s)</button>
        </div>
      </div>
    `
  },
  {
    id: "day-4",
    part: "Part 1: The Playbook",
    dayNumber: 4,
    navTitle: "Day 4: Where They Stand",
    pageHeading: "Check-in: Where Does Your Kid Stand Right Now?",
    subtitle: "Score the six statements. If three or more apply, stop guessing.",
    audioId: "audio-01",
    contentType: "checklist-audit",
    contentHTML: `
      <div class="space-y-6">
        <p class="text-sm text-gray-300">Check every statement that is true today:</p>
        <div class="space-y-3" id="day4-checklist">
          <label class="flex items-center space-x-3 p-4 rounded-xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition">
            <input type="checkbox" data-day4-check class="accent-kaneOrange w-4 h-4" onchange="KANE_APP.evalDay4Audit()">
            <span class="text-sm text-gray-200">My child and I can't name what they need to improve to play more</span>
          </label>
          <label class="flex items-center space-x-3 p-4 rounded-xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition">
            <input type="checkbox" data-day4-check class="accent-kaneOrange w-4 h-4" onchange="KANE_APP.evalDay4Audit()">
            <span class="text-sm text-gray-200">I've drafted an angry text or email to the coach in my head this month</span>
          </label>
          <label class="flex items-center space-x-3 p-4 rounded-xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition">
            <input type="checkbox" data-day4-check class="accent-kaneOrange w-4 h-4" onchange="KANE_APP.evalDay4Audit()">
            <span class="text-sm text-gray-200">My child's minutes have dropped, or stayed very low, for 3+ games</span>
          </label>
          <label class="flex items-center space-x-3 p-4 rounded-xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition">
            <input type="checkbox" data-day4-check class="accent-kaneOrange w-4 h-4" onchange="KANE_APP.evalDay4Audit()">
            <span class="text-sm text-gray-200">My child's love-of-the-game number on Day 0 was below 7</span>
          </label>
          <label class="flex items-center space-x-3 p-4 rounded-xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition">
            <input type="checkbox" data-day4-check class="accent-kaneOrange w-4 h-4" onchange="KANE_APP.evalDay4Audit()">
            <span class="text-sm text-gray-200">We're facing a big decision in next 60 days (AAU team, tryouts, money)</span>
          </label>
          <label class="flex items-center space-x-3 p-4 rounded-xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition">
            <input type="checkbox" data-day4-check class="accent-kaneOrange w-4 h-4" onchange="KANE_APP.evalDay4Audit()">
            <span class="text-sm text-gray-200">I'm not sure the current program is developing my child</span>
          </label>
        </div>

        <!-- 3+ Trigger: The $300 Audit Banner -->
        <div id="day4-upsell" class="hidden p-6 rounded-2xl bg-orange-950/40 border border-kaneOrange space-y-3">
          <span class="text-[10px] font-black uppercase text-kaneOrange tracking-wider">Coach Kane Standard Alert</span>
          <h4 class="text-lg font-bold text-white">3 or more checked: You're guessing about something that matters.</h4>
          <p class="text-xs text-gray-300 leading-relaxed">A guess is expensive. It sends families to a new team that has the exact same problem or into a confrontation with a coach that cannot be taken back. Book the Future Success Audit: 50-minute call, 3 priorities, written report the same day.</p>
          <a href="https://kanebasketballacademy.com/services/audits" class="inline-block py-2.5 px-6 bg-kaneOrange hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition shadow-lg">Book Future Success Audit ($300) &rarr;</a>
        </div>
      </div>
    `
  },
  {
    id: "day-5",
    part: "Part 1: The Playbook",
    dayNumber: 5,
    navTitle: "Day 5: Effort Scoreboard",
    pageHeading: "Effort is the scoreboard your child controls.",
    subtitle: "Praise what they control, and they will give you more of it.",
    audioId: "audio-04",
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Winning isn't everything, but the effort to win is. The scoreboard belongs to both teams. Effort belongs to your child alone, and it is the one number they control every night, win or lose.</p>
        <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder flex items-center justify-between">
          <div>
            <span class="text-[10px] uppercase font-bold text-kaneOrange tracking-wider">Conversation Vault 04</span>
            <p class="text-sm font-bold text-white mt-0.5">When Your Kid Says They Don't Want to Go to Practice</p>
          </div>
          <button onclick="KANE_APP.playVaultTrack('Audio 04', 'Don\'t Want to Go to Practice', 'audio-04.mp3')" class="px-4 py-2 bg-kaneOrange text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition">Listen (60s)</button>
        </div>
      </div>
    `
  },
  {
    id: "day-6",
    part: "Part 1: The Playbook",
    dayNumber: 6,
    navTitle: "Day 6: Facing Adversity",
    pageHeading: "Adversity is essential. Let them face it.",
    subtitle: "The 24-Hour Rule: Never contact a coach within 24 hours of a game.",
    audioId: "audio-03",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>The most common mistake is not doing too little; it's doing too much: removing obstacles, making excuses, fighting their battles. Each rescue sends the same message: you can't handle this. The child who is always rescued never finds out that they can.</p>
        <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder flex items-center justify-between">
          <div>
            <span class="text-[10px] uppercase font-bold text-kaneOrange tracking-wider">Conversation Vault 03</span>
            <p class="text-sm font-bold text-white mt-0.5">Before You Confront a Daddy-Ball Situation</p>
          </div>
          <button onclick="KANE_APP.playVaultTrack('Audio 03', 'Daddy-Ball Situations', 'audio-03.mp3')" class="px-4 py-2 bg-kaneOrange text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition">Listen (60s)</button>
        </div>
      </div>
    `
  },
  {
    id: "day-7",
    part: "Part 1: The Playbook",
    dayNumber: 7,
    navTitle: "Day 7: The Body Comes First",
    pageHeading: "The body comes first.",
    subtitle: "An injury prevented is worth more than any championship won.",
    audioId: "audio-08",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Rest is not a reward for a good week. It is part of training. A child who plays year-round with no time off is not getting ahead; they are wearing down, and the bill comes later.</p>
        <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder flex items-center justify-between">
          <div>
            <span class="text-[10px] uppercase font-bold text-kaneOrange tracking-wider">Conversation Vault 08</span>
            <p class="text-sm font-bold text-white mt-0.5">When a Coach Pressures Year-Round Commitment</p>
          </div>
          <button onclick="KANE_APP.playVaultTrack('Audio 08', 'Year-Round Pressure', 'audio-08.mp3')" class="px-4 py-2 bg-kaneOrange text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition">Listen (60s)</button>
        </div>
      </div>
    `
  },

  // ─── PART 2: THE KANE RESET (DAYS 8-14) ────────────────────────────
  {
    id: "day-8",
    part: "Part 2: The Kane Reset",
    dayNumber: 8,
    navTitle: "Day 8: The Real Number",
    pageHeading: "Know the real number.",
    subtitle: "The family basketball budget worksheet and the 5% household income rule.",
    audioId: "audio-02",
    contentType: "budget-calc",
    contentHTML: `
      <div class="space-y-6">
        <p class="text-sm text-gray-300">Registration is $1,200, but hotel markups, gas, meals, and extra trainers quickly push the real total between $5,000 and $13,000. Input your last 12 months below:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs text-gray-400 mb-1">Team or Club Fees ($)</label>
            <input type="number" data-budget-field="fees" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" placeholder="0" oninput="KANE_APP.recalcBudget()">
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Tournament Entry Fees ($)</label>
            <input type="number" data-budget-field="tournaments" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" placeholder="0" oninput="KANE_APP.recalcBudget()">
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Hotels & Lodging ($)</label>
            <input type="number" data-budget-field="hotels" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" placeholder="0" oninput="KANE_APP.recalcBudget()">
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Travel (Gas, Flights, Meals) ($)</label>
            <input type="number" data-budget-field="travel" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" placeholder="0" oninput="KANE_APP.recalcBudget()">
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Skills Trainers & Clinics ($)</label>
            <input type="number" data-budget-field="training" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" placeholder="0" oninput="KANE_APP.recalcBudget()">
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Shoes, Gear & Tech ($)</label>
            <input type="number" data-budget-field="gear" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" placeholder="0" oninput="KANE_APP.recalcBudget()">
          </div>
        </div>

        <div class="pt-2">
          <label class="block text-xs text-gray-400 mb-1">Estimated Annual Household Income ($)</label>
          <input type="number" id="input_household_income" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white" placeholder="e.g. 100000" oninput="KANE_APP.recalcBudget()">
        </div>

        <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span class="text-xs text-gray-400 uppercase font-bold">Total Annual Spend:</span>
            <p id="budget-sum-display" class="text-3xl font-black text-white">$0</p>
          </div>
          <div id="ratio-box" class="hidden text-right">
            <span class="text-xs text-gray-400 uppercase font-bold">% of Household Income:</span>
            <p id="budget-ratio-display" class="text-3xl font-black text-kaneOrange">0%</p>
          </div>
        </div>

        <div id="budget-overspend-alert" class="hidden p-5 rounded-2xl bg-red-950/40 border border-red-500/50 space-y-2">
          <p class="text-sm font-bold text-red-400">Kane Standard Rule Alert: All-in cost exceeds 5% of household income.</p>
          <p class="text-xs text-gray-300">You are overspending. Scale back to local programs or audit tournament schedules. No youth sports outcome justifies taking on household debt.</p>
        </div>
      </div>
    `
  },
  {
    id: "day-9",
    part: "Part 2: The Kane Reset",
    dayNumber: 9,
    navTitle: "Day 9: The Calendar",
    pageHeading: "Basketball is part of a life, not the whole of it.",
    subtitle: "Protect homework, family meals, and one non-negotiable rest day every week.",
    audioId: null,
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Success in basketball shouldn't cost success in life. If grades start to slip, get help right away and cut back on optional basketball until grades rebound. Balance is not a mood; it is a calendar decision.</p>
      </div>
    `
  },
  {
    id: "day-10",
    part: "Part 2: The Kane Reset",
    dayNumber: 10,
    navTitle: "Day 10: The Kane Standard",
    pageHeading: "Check-in: Is the Program Developing Your Kid?",
    subtitle: "Score your program across the 10 lines of the Kane Standard.",
    audioId: "audio-09",
    contentType: "scorecard-audit",
    contentHTML: `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <p class="text-sm text-gray-300">Score each line from 1 (No) to 5 (Consistent Yes):</p>
          <button onclick="KANE_APP.playVaultTrack('Audio 09', 'Evaluating an AAU Program', 'audio-09.mp3')" class="px-4 py-2 bg-kaneCard border border-kaneBorder hover:border-kaneOrange text-xs font-bold text-white rounded-xl transition">Listen to Audio 09 (60s)</button>
        </div>

        <div class="space-y-3" id="kane-scorecard-list">
          <!-- 10 lines generated dynamically in engine.js -->
        </div>

        <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400 font-bold uppercase">The Kane Standard Score</p>
            <p id="kane-score-status" class="text-xs text-gray-400 mt-1">Select scores above</p>
          </div>
          <span id="kane-score-total" class="text-3xl font-black text-kaneOrange">-- / 50</span>
        </div>

        <div id="day10-audit-upsell" class="hidden p-6 rounded-2xl bg-orange-950/40 border border-kaneOrange space-y-3">
          <span class="text-[10px] font-black uppercase text-kaneOrange tracking-wider">Coach Kane Recommendation</span>
          <h4 class="text-lg font-bold text-white">Your program scored under 30. Don't drift into another season.</h4>
          <p class="text-xs text-gray-300 leading-relaxed">A low score tells you something is wrong, but not whether to stay and fix it or leave. Book a Future Success Audit to get an objective read on your situation.</p>
          <a href="https://kanebasketballacademy.com/services/audits" class="inline-block py-2.5 px-6 bg-kaneOrange hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition shadow-lg">Book Future Success Audit ($300) &rarr;</a>
        </div>
      </div>
    `
  },
  {
    id: "day-11",
    part: "Part 2: The Kane Reset",
    dayNumber: 11,
    navTitle: "Day 11: Health & Burnout",
    pageHeading: "Protect the kid before the player.",
    subtitle: "70% of kids leave organized sports by age 13 because it stopped being fun.",
    audioId: null,
    contentType: "checklist",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Burnout isn't laziness, and it isn't just being tired. It is what happens when a child plays because they have to rather than because they want to. Your child does not owe basketball their childhood.</p>
      </div>
    `
  },
  {
    id: "day-12",
    part: "Part 2: The Kane Reset",
    dayNumber: 12,
    navTitle: "Day 12: Development Review",
    pageHeading: "What has actually improved?",
    subtitle: "Name three skills that improved over the last 3 months. If you can't, question the program.",
    audioId: "audio-10",
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Development shows up in skills you can point to: a left hand that finishes now, a free-throw routine that holds up late in games, talking on defense. If you can name three, the program is doing its job.</p>
        <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder flex items-center justify-between">
          <div>
            <span class="text-[10px] uppercase font-bold text-kaneOrange tracking-wider">Conversation Vault 10</span>
            <p class="text-sm font-bold text-white mt-0.5">When You Feel Like You're Failing Your Kid</p>
          </div>
          <button onclick="KANE_APP.playVaultTrack('Audio 10', 'When You Feel Like Failing', 'audio-10.mp3')" class="px-4 py-2 bg-kaneOrange text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition">Listen (60s)</button>
        </div>
      </div>
    `
  },
  {
    id: "day-13",
    part: "Part 2: The Kane Reset",
    dayNumber: 13,
    navTitle: "Day 13: The Partner Sync",
    pageHeading: "Two words, three goals, one conversation.",
    subtitle: "Put everything in front of your partner and agree on the budget and calendar.",
    audioId: null,
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Most of the fights families have about basketball are not about basketball. They are about money, time and expectations that two parents never said out loud to each other. Fifteen minutes tonight prevents months of arguments.</p>
      </div>
    `
  },
  {
    id: "day-14",
    part: "Part 2: The Kane Reset",
    dayNumber: 14,
    navTitle: "Day 14: The Final Decision",
    pageHeading: "Check-in: The Decision (Stay, Adjust, or Change)",
    subtitle: "Before you click re-register or write the next check, decide on purpose.",
    audioId: null,
    contentType: "decision-matrix",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>Fourteen days ago you started with a quiz and a love-of-the-game score. You have run the money, audited the calendar, and scored the program. Tonight is the one decision this entire system was built for:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition block space-y-2">
            <input type="radio" name="final_decision" value="stay" class="accent-kaneOrange" onchange="KANE_APP.handleDecisionSelection('stay')">
            <h5 class="text-white font-bold text-sm">1. Stay The Course</h5>
            <p class="text-xs text-gray-400">Current program passes the test and family has healthy perspective.</p>
          </label>
          <label class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition block space-y-2">
            <input type="radio" name="final_decision" value="adjust" class="accent-kaneOrange" onchange="KANE_APP.handleDecisionSelection('adjust')">
            <h5 class="text-white font-bold text-sm">2. Adjust</h5>
            <p class="text-xs text-gray-400">Change the schedule, budget, or expectations within current team.</p>
          </label>
          <label class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition block space-y-2">
            <input type="radio" name="final_decision" value="change" class="accent-kaneOrange" onchange="KANE_APP.handleDecisionSelection('change')">
            <h5 class="text-white font-bold text-sm">3. Change</h5>
            <p class="text-xs text-gray-400">Move to a local program, take a planned break, or start fresh.</p>
          </label>
        </div>

        <!-- The $997 Game Plan Dynamic Trigger -->
        <div id="decision-gameplan-box" class="hidden p-6 rounded-2xl bg-kaneCard border border-kaneOrange space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-xs uppercase font-black text-kaneOrange tracking-wider">Your Next Step</span>
            <span class="text-xl font-black text-white">$997</span>
          </div>
          <h4 class="text-lg font-bold text-white">Your decision is Adjust or Change. Here is where Coach Kane takes the wheel.</h4>
          <p class="text-xs text-gray-300 leading-relaxed">You get a written 90-day development plan built from your intake and your child's game film: three priorities with checkpoints, a weekly rhythm, your role, and check-in calls at Day 30 and Day 90.</p>
          <a href="https://kanebasketballacademy.com/game-plan" class="block w-full py-3 bg-kaneOrange hover:bg-orange-600 text-center font-bold text-xs text-white rounded-xl transition shadow-lg">Get The Game Plan ($997) &rarr;</a>
        </div>
      </div>
    `
  },

  // ─── PART 3 & BONUS: CONVERSATION VAULT & AAU PLAYBOOK ────────────
  {
    id: "conversation-vault",
    part: "Reference Vault",
    dayNumber: null,
    navTitle: "The Conversation Vault",
    pageHeading: "The Conversation Vault (All 10 Audios)",
    subtitle: "The words for the hardest moments. Sixty seconds each.",
    audioId: null,
    contentType: "audio-vault-directory",
    contentHTML: `
      <div class="space-y-6">
        <p class="text-sm text-gray-300">Tone is most of the message. Listen once to learn the words, and listen again in the parking lot right before the conversation takes place.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="vault-tracks-container">
          <!-- Tracks 01 to 10 rendered via JavaScript -->
        </div>
      </div>
    `
  },
  {
    id: "bonus-aau-playbook",
    part: "Bonus Chapter",
    dayNumber: null,
    navTitle: "Bonus: AAU & NIL Playbook",
    pageHeading: "The AAU, Recruiting and NIL Playbook",
    subtitle: "Cut through the noise. Protect your family budget, eligibility, and your kid.",
    audioId: "audio-05",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>There is no developmental window that closes at age 9 or 10. AAU is a tool, not a track. For players under 14, a local competitive league plus skills training gives 80% of the benefit for half the cost.</p>
      </div>
    `
  }
];
