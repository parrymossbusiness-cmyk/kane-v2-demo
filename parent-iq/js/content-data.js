// Master Content Database for The Basketball Parent IQ System
// Complete 91-Page Edition with KaneUI Visual Components
const KANE_SYSTEM_DATA = [
  // ─── START & ORIENTATION ──────────────────────────────────────────
  {
    id: "cover",
    part: "Start",
    dayNumber: null,
    navTitle: "Cover",
    pageHeading: "The Basketball Parent IQ System",
    subtitle: "Fourteen days. Twenty minutes a night. What to say, what to spend and what to decide, on the day you need it.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-center">
        <div class="rounded-2xl overflow-hidden border border-kaneBorder bg-black flex justify-center max-w-md mx-auto shadow-2xl">
          <img 
            src="/images/kane-cover.jpg" 
            alt="The Basketball Parent IQ System - Coach Dennis Kane" 
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="space-y-2 pt-2">
          <p class="text-xs font-black uppercase tracking-widest text-kaneOrange">Coach Dennis Kane • The Basketball Parent Coach</p>
          <p class="text-xs text-gray-400">440 Wins • 71 College Players • 12 Pros • 1,000+ Parent Conversations</p>
        </div>
      </div>
    `
  },
  {
    id: "intro",
    part: "Start",
    dayNumber: null,
    navTitle: "Introduction",
    pageHeading: "Everyone is building your child's basketball IQ. Nobody is building yours.",
    subtitle: "Why a parent IQ system, what exists today, and why Coach Kane.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>Ask any college coach what they recruit for and you will hear two words: <strong class="text-white">basketball IQ</strong>. Reading the floor, making the right decision fast, knowing what to do when the play breaks down. It has become the most wanted skill in the game, and a whole industry of trainers, camps and clubs exists to build it in your child. Now ask who is building the IQ of the person who drives that child to the gym, pays for the season and has the last word on the ride home. Until now, nobody.</p>
        
        ${KaneUI.stats([
          { val: "3h 23m", label: "Spent each day of practice or game" },
          { val: "+46%", label: "Rise in family youth sports spending" },
          { val: "49%", label: "Confident child earns scholarship" },
          { val: "1 in 100", label: "Make NCAA Division 1" }
        ])}

        <p>Read those numbers together. Parents are giving basketball more time and more money than ever, and about half believe it will end in a scholarship, while the odds of playing Division I are about one in a hundred. That gap is not a lack of love. It is a lack of information. Nobody ever taught these parents the job.</p>

        <h3 class="text-base sm:text-lg font-bold text-white pt-2">An Industry of Noise</h3>
        <p>Today's basketball parent is surrounded by advice, and most of it comes with a price tag. The club director is selling next season's team. The trainer is selling the next session. The showcase is selling exposure. The group chat is selling panic, and the highlight reels on social media are selling the idea that every other kid is further ahead than yours.</p>
        <p>So parents end up in one of two places. Some become overzealous: the second coach in the stands, the film session in the car. Others become passive: they pay, they drive, they cheer, and say nothing when something is wrong. Both love their kid. Neither was ever taught the job.</p>

        ${KaneUI.coachNote(
          "I built my career on turning losing programs into winning ones. My first head job in San Diego was a team that had just gone 0 and 20, the worst season in the school's history. Two years later we were playing for the CIF Division I championship. They didn't get more talented. They got a plan, and they worked it every day. What changed my direction wasn't the players—it was the parents. Give me fourteen days, twenty minutes a night. I will give you a system.",
          "FROM COACH KANE"
        )}
      </div>
    `
  },
  {
    id: "start-here",
    part: "Start",
    dayNumber: null,
    navTitle: "Start Here",
    pageHeading: "Start Here: 14 Days. 20 Minutes a Night.",
    subtitle: "What this is, how to use it, and what to do if you can't wait.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
        <blockquote class="border-l-4 border-kaneOrange pl-4 italic text-white text-base sm:text-lg">
          "This guide is for the parent sitting in folding chairs at 7 a.m. on a Sunday, coffee getting cold, watching their kid warm up for game three of a tournament they drove ninety minutes to attend."
        </blockquote>
        <p>This is not a book to read once and put on a shelf. It is a 14-day program. Most days are two pages: first a short read, then tonight's action, a 60-second audio from Dennis, and room to write down what happened.</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder">
            <span class="text-xs font-bold text-kaneOrange uppercase">Part 1 (Days 1–7)</span>
            <h4 class="text-white font-bold mt-1">The Playbook</h4>
            <p class="text-xs text-gray-400 mt-1">How you show up: in the bleachers, in the car, and at the kitchen table.</p>
          </div>
          <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder">
            <span class="text-xs font-bold text-kaneOrange uppercase">Part 2 (Days 8–14)</span>
            <h4 class="text-white font-bold mt-1">The Kane Reset</h4>
            <p class="text-xs text-gray-400 mt-1">The money, the calendar, scoring the program, health, and a decision in writing.</p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-orange-950/30 border border-kaneOrange/50 space-y-2">
          <h4 class="text-sm font-bold text-white">If You Can't Wait 14 Days:</h4>
          <p class="text-xs text-gray-300">If there is a decision you have to make this week (a team, a coach, a tryout, a check you're about to write), book the Future Success Audit. One 50-minute call, three priorities, and a written report same day.</p>
          <a href="https://kanebasketballacademy.com/services/audits" class="inline-block mt-2 px-5 py-2.5 bg-kaneOrange text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition">Book Future Success Audit ($300) &rarr;</a>
        </div>
      </div>
    `
  },
  {
    id: "keys-to-success",
    part: "Start",
    dayNumber: null,
    navTitle: "The Three Keys",
    pageHeading: "The Keys to a Successful Life",
    subtitle: "Self-Control, Self-Discipline, and Self-Sacrifice.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>Before we talk about basketball, here are the three keys I teach every player. They decide who gets on the floor. They decide a great deal more than that:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder space-y-2">
            <span class="text-xs font-black text-kaneOrange uppercase">Key 1</span>
            <h4 class="text-lg font-bold text-white">Self-Control</h4>
            <p class="text-xs text-gray-400">The ability to control what you say and do. In your seat: saying nothing to referees, and nothing about the game on the drive home.</p>
          </div>
          <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder space-y-2">
            <span class="text-xs font-black text-kaneOrange uppercase">Key 2</span>
            <h4 class="text-lg font-bold text-white">Self-Discipline</h4>
            <p class="text-xs text-gray-400">Doing what you have to do, doing it to the best of your ability, and doing it all the time without being told.</p>
          </div>
          <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder space-y-2">
            <span class="text-xs font-black text-kaneOrange uppercase">Key 3</span>
            <h4 class="text-lg font-bold text-white">Self-Sacrifice</h4>
            <p class="text-xs text-gray-400">Giving up something now to have more later. In your seat: giving up the post-game lecture now to have a child who still wants to talk to you about basketball later.</p>
          </div>
        </div>

        ${KaneUI.coachNote("There are only two things you can give your child: roots and wings.", "COACH KANE")}
      </div>
    `
  },
  {
    id: "day-0",
    part: "Part 1: The Playbook",
    dayNumber: 0,
    navTitle: "Day 0: Baseline Check",
    pageHeading: "Day 0 Check-In: Where Are You Starting From?",
    subtitle: "Answer these baseline assessments tonight before Day 1.",
    contentType: "interactive-checkin",
    contentHTML: `
      <div class="space-y-6">
        <p class="text-sm text-gray-300">Do these two things tonight, before Day 1. You will look at your answers again on Day 14, so write them down.</p>
        
        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-4">
          <div class="flex justify-between items-center">
            <label class="text-sm font-bold text-white">1. Love of the Game (Scale 1 to 10)</label>
            <span id="display-love" class="text-2xl font-black text-kaneOrange">8</span>
          </div>
          <p class="text-xs text-gray-400">Ask them directly: "On a scale of 1 to 10, how much do you love basketball right now?" Don't guess, and don't react to the number.</p>
          <input type="range" id="input_love_of_game" min="1" max="10" value="8" class="w-full accent-kaneOrange h-2 bg-gray-700 rounded-lg cursor-pointer" oninput="KANE_APP.handleLoveSlider(this.value)">
          <div id="love-warning-banner" class="hidden p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs leading-relaxed">
            <strong>Important Rule:</strong> If the love-of-the-game number is below 7, that comes before everything else in this book. Read <strong>Day 11 (Protect the Kid Before the Player)</strong> tonight, then come back to Day 1.
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-3">
          <label class="text-sm font-bold text-white block">2. Describe basketball in two words (theirs, not yours):</label>
          <input type="text" id="input_two_words" placeholder="e.g. Fast, Fun (or Stressful, Tiring)" class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white focus:outline-none focus:border-kaneOrange" onchange="KANE_APP.saveField('two_words', this.value)">
        </div>

        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-3">
          <label class="text-sm font-bold text-white block">3. Why are we doing this? (Write your real reason):</label>
          <textarea id="input_real_reason" rows="2" placeholder="If it includes 'everyone else', 'falling behind', or 'exposure', be completely honest." class="w-full bg-kaneDark border border-kaneBorder rounded-xl p-3 text-sm text-white focus:outline-none focus:border-kaneOrange" onchange="KANE_APP.saveField('real_reason', this.value)"></textarea>
        </div>
      </div>
    `
  },
  {
    id: "day-1",
    part: "Part 1: The Playbook",
    dayNumber: 1,
    navTitle: "Day 1: Your Job in 4 Lines",
    pageHeading: "Players play. Coaches coach. Referees ref. Parents encourage, love, and support.",
    subtitle: "The drive home is the most important ten minutes in youth basketball.",
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>The game just ended. Your kid is walking to the car. You have a lot to say. But the drive home is the most important ten minutes in youth sports, and most parents spend it on the wrong thing. Your child's heart is still racing, they are hungry and tired, and they are replaying every mistake in their head.</p>
        
        <blockquote class="border-l-4 border-kaneOrange pl-4 italic text-white my-4 font-semibold text-lg">
          "Players play. Coaches coach. Referees ref. Parents encourage, love, and support."
        </blockquote>

        <p>When a parent takes the coach's job, the child hears two sets of instructions and follows neither well. When a parent takes the referee's job, the child learns that losing is somebody else's fault. The fourth job is the only one nobody else in the gym can do.</p>

        ${KaneUI.coachNote(
          "I taught in a classroom and coached on a bench for 44 years, and I raised two sons who played. The hardest job I ever had was the one in the bleachers. What I learned is that 'I love watching you play' is the whole speech. Say it, then wait. If they want the game, they will bring it to you, usually the next day.",
          "COACH KANE'S NOTE"
        )}

        ${KaneUI.tonightBox(
          "day1",
          "Say nothing about the game on the drive home. Later, hand your child the four questions (Did we do what we were told? Did we play hard? Did we play together? Did we play smart?)."
        )}
      </div>
    `
  },
  {
    id: "day-2",
    part: "Part 1: The Playbook",
    dayNumber: 2,
    navTitle: "Day 2: Development First",
    pageHeading: "Development first. Competition second.",
    subtitle: "Youth basketball isn't the NBA. It is a development ground.",
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>One good game, one tournament, and suddenly other parents are using words like AAU, D1, and NIL about children who are still losing baby teeth. The scholarship talk can wait. The fundamentals can't: the footwork, the layup with both hands, the habit of showing up early.</p>
        
        ${KaneUI.stats([
          { val: "<1%", label: "Youth players play professionally" },
          { val: "4 in 100", label: "High school boys play NCAA" },
          { val: "1 in 100", label: "Reach Division I" },
          { val: "100%", label: "Can use the life lessons" }
        ])}

        ${KaneUI.coachNote(
          "Every great player started as a beginner. Your job is to help your child take the steps properly, not to skip them.",
          "COACH KANE"
        )}

        ${KaneUI.tonightBox(
          "day2",
          "Write down three development goals for your child's basketball this year (e.g., 'improve left-hand finishing', 'consistent free-throw routine'), not outcomes like wins or trophies."
        )}
      </div>
    `
  },
  {
    id: "day-3",
    part: "Part 1: The Playbook",
    dayNumber: 3,
    navTitle: "Day 3: Clear Expectations",
    pageHeading: "Expect what today's child can give, not what tomorrow's hopes want.",
    subtitle: "Fair doesn't mean equal. A parent who expects equal will find unfairness everywhere.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>It starts with a glance at the clock. Then you are counting minutes and comparing them to teammates. Playing time depends on three things, in this order: doing what you're told, playing hard, and talent. Talent is last on purpose.</p>
        <p>If your child wants more playing time, your child asks the coach first: 'What do I need to work on?' Do not ask for them. Then help them work on it.</p>

        ${KaneUI.coachNote("Fair doesn't mean equal.", "COACH KANE")}

        ${KaneUI.tonightBox(
          "day3",
          "Write down what you expect this season from your child, the coach, yourself and the team. Cross out anything that doesn't match reality or isn't yours to expect.",
          { tag: "Audio 07", title: "When Kid Asks If Good Enough for College", file: "audio-07.mp3" }
        )}
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
    contentType: "checklist-audit",
    contentHTML: `
      <div class="space-y-6">
        <p class="text-sm text-gray-300">Three days in. You let the coach coach. But the bleachers are a terrible place to see from. Check every statement that is true today:</p>
        
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
            <span class="text-sm text-gray-200">We're facing a big decision in the next 60 days (AAU team, tryouts, money)</span>
          </label>
          <label class="flex items-center space-x-3 p-4 rounded-xl bg-kaneCard border border-kaneBorder cursor-pointer hover:border-kaneOrange transition">
            <input type="checkbox" data-day4-check class="accent-kaneOrange w-4 h-4" onchange="KANE_APP.evalDay4Audit()">
            <span class="text-sm text-gray-200">I'm not sure the current program is developing my child</span>
          </label>
        </div>

        <div id="day4-upsell" class="hidden p-6 rounded-2xl bg-orange-950/40 border border-kaneOrange space-y-3">
          <span class="text-[10px] font-black uppercase text-kaneOrange tracking-wider">Coach Kane Standard Alert</span>
          <h4 class="text-lg font-bold text-white">3 or more checked: You're guessing about something that matters.</h4>
          <p class="text-xs text-gray-300 leading-relaxed">A guess is expensive. It sends families to a new team that has the exact same problem or into a confrontation with a coach that cannot be taken back. Book the Future Success Audit: 50-minute call, 3 priorities, written report the same day.</p>
          <a href="https://kanebasketballacademy.com/services/audits" class="inline-block py-2.5 px-6 bg-kaneOrange hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition shadow-lg">Book Future Success Audit ($300) &rarr;</a>
        </div>

        ${KaneUI.tonightBox(
          "day4",
          "Score the six statements. Decide your next move.",
          { tag: "Audio 01", title: "Before You Talk to Coach About Playing Time", file: "audio-01.mp3" }
        )}
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
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>Some losses are loud. This one is quiet: lost by twenty, team looked flat. Winning isn't everything, but the effort to win is. Consistent effort beats sporadic talent, practice habits decide game performance, and mental toughness comes from facing challenges.</p>
        <p>The scoreboard belongs to both teams. Effort belongs to your child alone. Win with humility. Lose with dignity.</p>

        ${KaneUI.coachNote("Win with humility. Lose with dignity.", "COACH KANE")}

        ${KaneUI.tonightBox(
          "day5",
          "After tonight's practice or game, praise one specific effort ('you sprinted back on defense every time'), not the result.",
          { tag: "Audio 04", title: "When Kid Won't Go to Practice", file: "audio-04.mp3" }
        )}
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
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>Every player hits a wall. The most common mistake is not doing too little—it's doing too much: removing obstacles, making excuses, fighting their battles. Each rescue sends the message: you can't handle this.</p>
        
        ${KaneUI.decisionTable([
          { if: "Playing Time Drops", then: "Focus on what they control. Win the practices. Be ready when the chance comes." },
          { if: "A Shooting Slump", then: "Back to fundamentals. Same routine every day. Build on small wins." },
          { if: "Team / Coach Conflict", then: "Address it directly. Be a good teammate anyway. Be part of the solution." }
        ])}

        ${KaneUI.coachNote("Emotions are indicators, not dictators.", "COACH KANE")}

        ${KaneUI.tonightBox(
          "day6",
          "Make the 24-Hour Rule a family policy tonight: 'I will not contact the coach about anything emotional within 24 hours of a game.'",
          { tag: "Audio 03", title: "Before Confronting Daddy-Ball", file: "audio-03.mp3" }
        )}
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
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>Tournament Sunday has its own logic: you paid for the weekend, drove ninety minutes, and your kid is limping. Nobody in that gym is thinking about how that ankle will feel in three years. That job is yours.</p>
        <p>Rest is not a reward for a good week. It is part of training. Take 4 to 6 weeks off from basketball every year. Take one full rest day every week.</p>

        ${KaneUI.coachNote("No game is worth risking long-term health.", "COACH KANE")}

        ${KaneUI.tonightBox(
          "day7",
          "Look at this week's schedule and protect one full rest day with no organized basketball at all.",
          { tag: "Audio 08", title: "When Coach Pressures Year-Round Play", file: "audio-08.mp3" }
        )}
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
    contentType: "budget-calc",
    contentHTML: `
      <div class="space-y-6">
        <p class="text-sm text-gray-300">Registration is $1,200, but hotel markups, gas, meals, and trainers quickly push the real total between $5,000 and $13,000. Input your last 12 months below:</p>
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
          <p class="text-xs text-gray-300">Scale back to local programs or audit tournament schedules. No youth sports outcome justifies taking on household debt.</p>
        </div>

        ${KaneUI.tonightBox(
          "day8",
          "Fill in the worksheet with every dollar from the last 12 months. Write the total on a sticky note where you see it every day.",
          { tag: "Audio 02", title: "Before Talking to Spouse About Budget", file: "audio-02.mp3" }
        )}
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
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>Grades are slipping, dinner is always in the car, and nobody in the house has had a free weekend since September. School always comes first. A college coach can't recruit a player who isn't eligible.</p>
        <p>Balance is not a mood; it is a calendar decision. Under 14: limit basketball to 10–12 hours a week. High school: limit to 15–18 hours a week. Protect one day every week with zero basketball.</p>

        ${KaneUI.coachNote("Success in basketball shouldn't cost success in life.", "COACH KANE")}

        ${KaneUI.tonightBox(
          "day9",
          "Put the whole family calendar for next month on one page. Mark one weekend with no basketball, and mark this week's rest day. Keep both."
        )}
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
    contentType: "scorecard-audit",
    contentHTML: `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <p class="text-sm text-gray-300">Score each line from 1 (No) to 5 (Consistent Yes):</p>
          <button onclick="KANE_APP.playVaultTrack('Audio 09', 'Evaluating an AAU Program', 'audio-09.mp3')" class="px-4 py-2 bg-kaneCard border border-kaneBorder hover:border-kaneOrange text-xs font-bold text-white rounded-xl transition">Listen to Audio 09 (60s)</button>
        </div>

        <div class="space-y-3" id="kane-scorecard-list"></div>

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

        ${KaneUI.tonightBox(
          "day10",
          "Score the program tonight. This week, talk to two parents whose kids aren't starters and ask: 'Has your child gotten better this season?'",
          { tag: "Audio 09", title: "Before Evaluating an AAU Program", file: "audio-09.mp3" }
        )}
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
    contentType: "checklist",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>The kid who used to sprint into the gym now drags their feet. Burnout isn't laziness; it's what happens when a child plays because they have to rather than because they want to. Your child does not owe basketball their childhood.</p>
        
        ${KaneUI.coachNote(
          "I have lost players to burnout: real talent who played so much, so young, with so much pressure, that they had nothing left by high school. Every one of them had a parent who told me: 'I wish I'd pulled back sooner.'",
          "COACH KANE'S NOTE"
        )}

        ${KaneUI.decisionTable([
          { if: "3 or more burnout signs", then: "Talk with your child before the next practice." },
          { if: "2 or more signs for 2 weeks in a row", then: "Take one full week off from all organized basketball." },
          { if: "Child cries after games / severe anxiety", then: "Emergency signal. Something is seriously wrong. Step in immediately." }
        ])}

        ${KaneUI.tonightBox(
          "day11",
          "Run the burnout checklist. Ask the 1-to-10 fun question: 'On a scale of 1 to 10, how much fun are you having in basketball right now?' Just listen."
        )}
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
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>Development shows up in skills you can name: a left hand that finishes now, a free-throw routine that holds up late in games, talking on defense. If you can name three, the program is doing its job. If you can't, question what you are paying for.</p>

        ${KaneUI.coachNote("Today's game is forgotten in a week. This season is forgotten in a year. Relationships outlast records.", "COACH KANE")}

        ${KaneUI.tonightBox(
          "day12",
          "Write down the three specific skills. Then mute three social media accounts that make you anxious about your child's timeline.",
          { tag: "Audio 10", title: "When You Feel Like You're Failing Your Kid", file: "audio-10.mp3" }
        )}
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
    contentType: "journal",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>Most of the fights families have about basketball are not about basketball. They are about money, time and expectations that two parents never said out loud to each other. Fifteen minutes tonight prevents months of arguments.</p>
        <p>Sync on three things: agree on the budget for the year, agree on the schedule limit, and agree on what you expect from the coach and your child.</p>

        ${KaneUI.coachNote("If your child is not driving the desire, the timing is wrong.", "COACH KANE")}

        ${KaneUI.tonightBox(
          "day13",
          "Ask for the two words describing basketball right now and write them next to Day 0. Then sit down with your partner for fifteen minutes."
        )}
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
    contentType: "decision-matrix",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
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

  // ─── PART 3: THE CONVERSATION VAULT ───────────────────────────────
  {
    id: "conversation-vault",
    part: "Part 3: The Vault",
    dayNumber: null,
    navTitle: "The Conversation Vault",
    pageHeading: "The Conversation Vault (All 10 Audios)",
    subtitle: "The words for the hardest moments. Sixty seconds each.",
    contentType: "audio-vault-directory",
    contentHTML: `
      <div class="space-y-6">
        <p class="text-sm text-gray-300">Tone is most of the message. Listen once to learn the words, and listen again in the parking lot right before the conversation takes place.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="vault-tracks-container"></div>
      </div>
    `
  },

  // ─── BONUS CHAPTER: AAU, RECRUITING & NIL PLAYBOOK ───────────────
  {
    id: "aau-state",
    part: "Bonus Chapter: AAU & NIL",
    dayNumber: null,
    navTitle: "The State of AAU",
    pageHeading: "The State of AAU: Five Decision Traps and Six Myths",
    subtitle: "The Work over The Hype. Always.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        ${KaneUI.stats([
          { val: "$3K–$15K", label: "Travel basketball cost/yr" },
          { val: "70%", label: "Quit sports by 13" },
          { val: "40%+", label: "D1 men in portal" },
          { val: "Zero", label: "Coaching credentials for AAU" }
        ])}

        <h3 class="text-lg font-bold text-white pt-2">The Five Traps That Cost Families Most</h3>
        <p>1. <strong>The Sunk-Cost Fallacy:</strong> 'We spent $3,000 this year, so we can't quit now.' Past spending is gone. Every season is a new decision.</p>
        <p>2. <strong>The Comparison Spiral:</strong> 'Jaden is on a national team.' Your child's path is not Jaden's path.</p>
        <p>3. <strong>The Coach-as-Expert Bias:</strong> 'The coach said our son needs to play up.' Get a second opinion from someone who doesn't profit from your check.</p>
        <p>4. <strong>The Early-Start Myth:</strong> 'If we don't start by 3rd grade it's too late.' Multi-sport athletes consistently outperform early specialists.</p>
        <p>5. <strong>The Exposure Shortcut:</strong> 'If we just get in front of the right people.' No coach offers a 12-year-old in a hotel lobby.</p>
      </div>
    `
  },
  {
    id: "aau-sec1",
    part: "Bonus Chapter: AAU & NIL",
    dayNumber: null,
    navTitle: "Section 1: Should We Do AAU?",
    pageHeading: "Should We Do AAU? The Age and Stage Decision",
    subtitle: "Readiness is a three-part test: Does the child want it? Can the family sustain it? Will it develop them?",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>AAU basketball is a tool. It is not a requirement, not a destiny, and not a measure of your parenting. Used at the right time it works; used too early it damages bodies and drains bank accounts.</p>
        ${KaneUI.decisionTable([
          { if: "Under 10 and playing other sports", then: "Stay in rec league. AAU gives no measurable advantage at this age." },
          { if: "10 to 12, basketball is main sport", then: "Explore a local AAU program with a development focus, not national travel." },
          { if: "12 to 14, strong fundamentals", then: "The right entry window if the drive comes from them." }
        ])}
      </div>
    `
  },
  {
    id: "aau-sec2",
    part: "Bonus Chapter: AAU & NIL",
    dayNumber: null,
    navTitle: "Section 2: Vetting a Program",
    pageHeading: "How to Vet a Program: The Kane Standard",
    subtitle: "Ten lines that tell you what you're paying for before writing the check.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>The gap between the best and worst programs is a canyon. The best indicator of a quality program is not its record; it is how the eighth, ninth, and tenth players on the bench describe their experience.</p>
        <p>If a program will not let you watch two full practices before committing, walk away immediately. Legitimate programs have nothing to hide.</p>
      </div>
    `
  },
  {
    id: "aau-sec3",
    part: "Bonus Chapter: AAU & NIL",
    dayNumber: null,
    navTitle: "Section 3: Playing Time & Politics",
    pageHeading: "Playing Time, Roles and Politics",
    subtitle: "How to advocate for your child the right way without starting a bleacher war.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>Playing time in AAU is almost never handed out purely on merit. But the response should never be post-game confrontation or complaining in the parking lot.</p>
        <p>Teach your child to ask the coach directly: 'What do I specifically need to work on to earn more time?' If you step in, wait 24 hours and ask curious questions in private.</p>
      </div>
    `
  },
  {
    id: "aau-sec4",
    part: "Bonus Chapter: AAU & NIL",
    dayNumber: null,
    navTitle: "Section 4: Exposure Reality Check",
    pageHeading: "Exposure vs. Development: The Recruiting Reality Check",
    subtitle: "Development is the strategy; exposure is the tactic. Get the order right.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>College coaches evaluate varsity film and live period tournaments for high school juniors and seniors. They are not evaluating middle schoolers. Spend the money on skills training instead.</p>
        ${KaneUI.tonightBox(
          "aau_exp",
          "Answering an exposure sales pitch with clear questions.",
          { tag: "Audio 05", title: "When Pitched on Exposure", file: "audio-05.mp3" }
        )}
      </div>
    `
  },
  {
    id: "aau-sec5",
    part: "Bonus Chapter: AAU & NIL",
    dayNumber: null,
    navTitle: "Section 5: Money, Travel & ROI",
    pageHeading: "Money, Travel and ROI: Protecting the Family Budget",
    subtitle: "You are the customer. Act like one.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>For most families with players under 14, the best return on investment is a local league plus a dedicated skills trainer once a week (~$3,500/yr), not a $12,000 national travel circuit.</p>
        ${KaneUI.tonightBox(
          "aau_money",
          "Protecting your family budget from unnecessary travel markups.",
          { tag: "Audio 06", title: "Tournament Overspending", file: "audio-06.mp3" }
        )}
      </div>
    `
  },
  {
    id: "aau-sec6",
    part: "Bonus Chapter: AAU & NIL",
    dayNumber: null,
    navTitle: "Section 6: Health & Confidence",
    pageHeading: "Protecting Health and Confidence: Overuse and Weekly Rhythm",
    subtitle: "Sensible training loads produce healthier, more durable athletes.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>Three to five games on a weekend, two practices during the week, month after month without rest, is a recipe for overuse breakdown (tendinitis, stress fractures, ACL tears). Build skills in 30–45 minute focused bursts, not marathon sessions.</p>
      </div>
    `
  },
  {
    id: "nil-reality",
    part: "Bonus Chapter: AAU & NIL",
    dayNumber: null,
    navTitle: "NIL in Plain English",
    pageHeading: "NIL and the New Reality: What Parents Need to Know",
    subtitle: "Nine essential terms, four danger zones, and the parent action framework.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>NIL stands for Name, Image, and Likeness: the right to monetize who you are. It is not a salary for playing basketball. Never let your child sign any deal without an attorney review.</p>
        <p>Put the ball first. A strong highlight reel, solid GPA, and high character will open far more college doors than 10,000 followers on social media.</p>
      </div>
    `
  },
  {
    id: "script-index",
    part: "Reference & Index",
    dayNumber: null,
    navTitle: "The Script Index",
    pageHeading: "The Script Index",
    subtitle: "Every conversation and checklist in the book, organized by the moment you need it.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder space-y-3">
            <h4 class="font-bold text-white uppercase text-kaneOrange tracking-wider">Deciding on AAU (Section 1)</h4>
            <ul class="space-y-1.5 text-gray-300">
              <li>• When your child asks to play AAU</li>
              <li>• When another parent pressures you to join</li>
              <li>• When a coach recruits your child</li>
            </ul>
            <h4 class="font-bold text-white uppercase text-kaneOrange tracking-wider pt-2">Vetting a Program (Section 2)</h4>
            <ul class="space-y-1.5 text-gray-300">
              <li>• Asking to watch practice</li>
              <li>• Asking about development & playing time</li>
              <li>• Asking about total cost & other parents</li>
            </ul>
          </div>

          <div class="p-5 rounded-2xl bg-kaneCard border border-kaneBorder space-y-3">
            <h4 class="font-bold text-white uppercase text-kaneOrange tracking-wider">Playing Time & Conflicts (Section 3)</h4>
            <ul class="space-y-1.5 text-gray-300">
              <li>• Opening the conversation with a coach</li>
              <li>• Asking about the rotation</li>
              <li>• Disagreeing and staying productive</li>
              <li>• Leaving a program the right way</li>
            </ul>
            <h4 class="font-bold text-white uppercase text-kaneOrange tracking-wider pt-2">Health & Well-Being (Section 6 & Day 11)</h4>
            <ul class="space-y-1.5 text-gray-300">
              <li>• 'I don't want to go to practice'</li>
              <li>• Pushing back on year-round pressure</li>
              <li>• When your child compares themselves</li>
              <li>• When it's time for a break</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "work-with-me",
    part: "Where to Go From Here",
    dayNumber: null,
    navTitle: "Four Ways to Work With Me",
    pageHeading: "Four Ways to Work With Me",
    subtitle: "This book is the first step. Take the next step only when you need it.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span class="text-xs font-black uppercase text-kaneOrange tracking-widest">You Are Here</span>
            <h4 class="text-xl font-bold text-white mt-1">The Basketball Parent IQ System</h4>
            <p class="text-xs text-gray-400 mt-1">The 14 days, the 10 audios, and the AAU, Recruiting & NIL Playbook.</p>
          </div>
          <span class="text-2xl font-black text-white">$47</span>
        </div>

        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span class="text-xs font-bold text-gray-400 uppercase">When You Have a Decision to Make</span>
            <h4 class="text-xl font-bold text-white mt-1">The Future Success Audit</h4>
            <p class="text-xs text-gray-400 mt-1">50-minute call, three clear priorities, written report the same day.</p>
            <a href="https://kanebasketballacademy.com/services/audits" class="inline-block mt-3 px-4 py-2 bg-kaneDark border border-kaneBorder hover:border-kaneOrange text-xs font-bold text-white rounded-xl transition">Book Audit ($300) &rarr;</a>
          </div>
          <span class="text-2xl font-black text-kaneOrange">$300</span>
        </div>

        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneOrange/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span class="text-xs font-black uppercase text-kaneOrange tracking-widest">When You Need a Plan</span>
            <h4 class="text-xl font-bold text-white mt-1">The Game Plan</h4>
            <p class="text-xs text-gray-400 mt-1">Written 90-day plan from Coach Kane based on your intake & film, plus calls at Day 30 and 90.</p>
            <a href="https://kanebasketballacademy.com/game-plan" class="inline-block mt-3 px-4 py-2 bg-kaneOrange hover:bg-orange-600 text-xs font-bold text-white rounded-xl transition">Get The Game Plan ($997) &rarr;</a>
          </div>
          <span class="text-2xl font-black text-white">$997</span>
        </div>

        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span class="text-xs font-bold text-gray-400 uppercase">When You Want Me There Every Week</span>
            <h4 class="text-xl font-bold text-white mt-1">The Kane Development System</h4>
            <p class="text-xs text-gray-400 mt-1">Three months, weekly calls, milestone tracking, and full season mentorship.</p>
            <a href="https://kanebasketballacademy.com/1-on-1-calls" class="inline-block mt-3 px-4 py-2 bg-kaneDark border border-kaneBorder hover:border-kaneOrange text-xs font-bold text-white rounded-xl transition">Enroll ($2,500) &rarr;</a>
          </div>
          <span class="text-2xl font-black text-white">$2,500</span>
        </div>
      </div>
    `
  },
  {
    id: "decision-rules",
    part: "Summary & Rules",
    dayNumber: null,
    navTitle: "The Kane Decision Rules",
    pageHeading: "The Kane Decision Rules (The 10 Non-Negotiables)",
    subtitle: "Tear this page out. Keep it taped to your dashboard.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-kaneCard border border-kaneBorder space-y-3 text-sm text-gray-200">
          <p><strong>1.</strong> Never make an AAU decision based on what other families are doing.</p>
          <p><strong>2.</strong> Never commit to a program without watching at least two practices.</p>
          <p><strong>3.</strong> Never start a playing-time conversation within 24 hours of a game.</p>
          <p><strong>4.</strong> Never pay for 'exposure' for a player under 14.</p>
          <p><strong>5.</strong> Never spend more than 5% of household income on youth sports.</p>
          <p><strong>6.</strong> Never use credit or debt to pay for travel basketball.</p>
          <p><strong>7.</strong> Never allow year-round basketball without at least 4 weeks off.</p>
          <p><strong>8.</strong> Never force a child to play who has told you they do not want to.</p>
          <p><strong>9.</strong> Never judge a program only by its win-loss record.</p>
          <p><strong>10.</strong> Never skip the conversation with your child about how they actually feel.</p>
        </div>
      </div>
    `
  },
  {
   {
    id: "back-cover",
    part: "Summary & Rules",
    dayNumber: null,
    navTitle: "Back Cover",
    pageHeading: "The Basketball Parent Coach",
    subtitle: "Coach Dennis Kane • The Work over The Hype. Always.",
    contentType: "reading",
    contentHTML: `
      <div class="space-y-6 text-center">
        <div class="rounded-2xl overflow-hidden border border-kaneBorder bg-black flex justify-center max-w-lg mx-auto shadow-2xl">
          <img 
            src="/images/back-page.jpg" 
            alt="The Basketball Parent IQ System - Back Page" 
            class="w-full h-auto object-contain"
          />
        </div>
        <p class="text-xs text-gray-400">© 2026 Coach Dennis Kane. All rights reserved. The Work over The Hype. Always.</p>
      </div>
    `
  }
];
];
