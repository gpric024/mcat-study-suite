/* ===========================================================================
   MCAT Study Suite — interactive quiz engine  (vanilla JS, no dependencies)
   Works fully offline over file://  (no fetch, no build step).

   ---------------------------------------------------------------------------
   QUESTION SCHEMA  (each question object)
   {
     id:        "cp-1-001",                  // unique string
     section:   "chemphys|cars|biobiochem|psychsoc",
     passageId: "cp-1-p1",                   // optional — groups Qs under a passage
     stem:      "Question text (HTML ok)",
     options:   ["text A","text B","text C","text D"],
     answer:    2,                            // 0-based index of correct option
     rationales:["why A...","why B...","why C...","why D..."], // per-option (optional but preferred)
     explanation:"Overall explanation (HTML ok)",            // shown after answering
     source:    "AAMC Content Category 5A; Khan Academy MCAT: Acids and bases",
     topic:     "Acid–base equilibria",
     difficulty:"easy|medium|hard"
   }

   PASSAGE SCHEMA (optional, for CARS & passage sets)
   {
     id:    "cp-1-p1",
     section:"...",
     label: "Passage I — Biochemistry",
     html:  "<p>...</p><p>...</p>"
   }
   ---------------------------------------------------------------------------
   USAGE — study module quiz:
     MCAT.renderQuiz('#quiz-acidbase', { questions: [...], passages: [...] });

   USAGE — full exam section:
     MCAT.renderExam('#exam-root', {
        title:'Practice Exam 1',
        sections:[ {key:'chemphys', name:'Chemical & Physical Foundations',
                    minutes:95, questions:[...], passages:[...]}, ... ]
     });
   =========================================================================== */
(function (global) {
  'use strict';

  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }

  /* ---- render one question into a container ---------------------------- */
  function renderQuestion(q, displayNum, state) {
    var card = el('div', 'q');
    card.dataset.qid = q.id;

    var head = el('div', 'q-head');
    head.appendChild(el('span', 'q-num', '' + displayNum));
    var stem = el('div', 'q-stem', q.stem);
    head.appendChild(stem);
    card.appendChild(head);

    if (q.difficulty || q.topic) {
      var meta = el('div', 'q-meta');
      if (q.difficulty) meta.appendChild(el('span', 'pill ' + diffClass(q.difficulty), q.difficulty));
      if (q.topic) meta.appendChild(el('span', 'pill', q.topic));
      card.appendChild(meta);
    }

    var opts = el('div', 'opts');
    q.options.forEach(function (text, i) {
      var label = el('label', 'opt');
      var input = el('input');
      input.type = 'radio';
      input.name = q.id;
      input.value = i;
      input.addEventListener('change', function () {
        state.answers[q.id] = i;
        if (state.instant) lockQuestion(card, q, state);
        if (state.onChange) state.onChange();
      });
      label.appendChild(input);
      label.appendChild(el('span', 'letter', LETTERS[i] + '.'));
      label.appendChild(el('span', 'opt-text', text));
      opts.appendChild(label);
    });
    card.appendChild(opts);

    var explain = el('div', 'explain');
    card.appendChild(explain);
    return card;
  }

  function diffClass(d) {
    d = (d || '').toLowerCase();
    if (d === 'hard') return 'hard';
    if (d === 'medium') return 'med';
    return 'easy';
  }

  /* ---- reveal answer + rationales for one card ------------------------- */
  function lockQuestion(card, q, state) {
    var chosen = state.answers[q.id];
    var labels = card.querySelectorAll('.opt');
    labels.forEach(function (lab, i) {
      lab.classList.add('locked');
      var input = lab.querySelector('input');
      input.disabled = true;
      if (i === q.answer) lab.classList.add('correct');
      if (i === chosen && chosen !== q.answer) lab.classList.add('incorrect');
    });
    var ex = card.querySelector('.explain');
    if (ex.classList.contains('show')) return;
    var right = chosen === q.answer;
    var html = '';
    html += '<div class="verdict ' + (right ? 'right' : 'wrong') + '">' +
      (right ? '✓ Correct' : '✗ ' + (chosen == null ? 'Not answered' : 'Incorrect') +
       ' — correct answer is ' + LETTERS[q.answer]) + '</div>';
    if (q.explanation) html += '<div class="rationale">' + q.explanation + '</div>';
    if (q.rationales && q.rationales.length) {
      q.rationales.forEach(function (r, i) {
        html += '<div class="rationale"><span class="ltr">' + LETTERS[i] + '.</span> ' + r + '</div>';
      });
    }
    if (q.source) html += '<div class="source">' + q.source + '</div>';
    ex.innerHTML = html;
    ex.classList.add('show');
  }

  /* ---- group questions under their passages ---------------------------- */
  function renderSet(container, cfg, state, startNum) {
    var passages = {};
    (cfg.passages || []).forEach(function (p) { passages[p.id] = p; });
    var num = startNum || 1;
    var renderedPassages = {};

    cfg.questions.forEach(function (q) {
      if (q.passageId && passages[q.passageId] && !renderedPassages[q.passageId]) {
        var p = passages[q.passageId];
        var pdiv = el('div', 'passage');
        pdiv.appendChild(el('div', 'passage-label', p.label || 'Passage'));
        pdiv.appendChild(el('div', 'passage-body', p.html));
        container.appendChild(pdiv);
        renderedPassages[q.passageId] = true;
      }
      container.appendChild(renderQuestion(q, num++, state));
    });
    return num;
  }

  /* ---- scoring --------------------------------------------------------- */
  function scoreOf(questions, answers) {
    var correct = 0, answered = 0;
    questions.forEach(function (q) {
      if (answers[q.id] != null) {
        answered++;
        if (answers[q.id] === q.answer) correct++;
      }
    });
    return { correct: correct, answered: answered, total: questions.length };
  }

  /* =======================  PUBLIC: study quiz  ======================== */
  function renderQuiz(sel, cfg) {
    var host = (typeof sel === 'string') ? $(sel) : sel;
    if (!host) return;
    var state = { answers: {}, instant: cfg.instant !== false }; // study mode = instant feedback by default

    var wrap = el('div', 'quiz');
    var bar = el('div', 'quiz-toolbar');
    var score = el('span', 'score', 'Score: 0 / ' + cfg.questions.length);
    bar.appendChild(score);
    bar.appendChild(el('span', 'spacer'));
    var reveal = el('button', 'btn ghost small', 'Reveal all answers');
    var reset = el('button', 'btn ghost small', 'Reset');
    bar.appendChild(reveal); bar.appendChild(reset);
    wrap.appendChild(bar);

    var body = el('div', 'quiz-body');
    wrap.appendChild(body);
    host.appendChild(wrap);

    state.onChange = function () {
      var s = scoreOf(cfg.questions, state.answers);
      score.textContent = 'Score: ' + s.correct + ' / ' + s.total + '  (' + s.answered + ' answered)';
    };
    renderSet(body, cfg, state, 1);

    reveal.addEventListener('click', function () {
      cfg.questions.forEach(function (q) {
        var card = body.querySelector('[data-qid="' + cssEsc(q.id) + '"]');
        if (card) lockQuestion(card, q, state);
      });
    });
    reset.addEventListener('click', function () {
      state.answers = {};
      body.innerHTML = '';
      renderSet(body, cfg, state, 1);
      state.onChange();
    });
  }

  /* =======================  PUBLIC: full exam  ========================= */
  function renderExam(sel, cfg) {
    var host = (typeof sel === 'string') ? $(sel) : sel;
    if (!host) return;
    var state = { answers: {}, instant: false }; // exam mode = answer first, grade at end

    var allQ = [];
    cfg.sections.forEach(function (s) { allQ = allQ.concat(s.questions); });

    // toolbar
    var bar = el('div', 'quiz-toolbar');
    var prog = el('span', 'score', '0 / ' + allQ.length + ' answered');
    var timer = el('span', 'timer', '');
    bar.appendChild(prog);
    bar.appendChild(el('span', 'spacer'));
    bar.appendChild(timer);
    host.appendChild(bar);

    // section nav
    var nav = el('div', 'panel');
    var navHtml = '<strong>Sections:</strong> ';
    cfg.sections.forEach(function (s, i) {
      navHtml += '<a class="btn ghost small" href="#sec-' + i + '">' + s.name + ' (' + s.questions.length + ' Q · ' + s.minutes + ' min)</a> ';
    });
    nav.innerHTML = navHtml;
    host.appendChild(nav);

    var banner = el('div', 'result-banner');
    host.appendChild(banner);

    var num = 1;
    cfg.sections.forEach(function (s, i) {
      var sec = el('div', 'exam-section');
      sec.id = 'sec-' + i;
      sec.appendChild(el('h2', null, s.name + ' <span class="muted" style="font-size:15px">— ' + s.questions.length + ' questions · suggested ' + s.minutes + ' min</span>'));
      var body = el('div');
      sec.appendChild(body);
      host.appendChild(sec);
      num = renderSet(body, s, state, num);
    });

    state.onChange = function () {
      var s = scoreOf(allQ, state.answers);
      prog.textContent = s.answered + ' / ' + s.total + ' answered';
    };

    // submit
    var submitWrap = el('div', 'panel');
    submitWrap.style.textAlign = 'center';
    var submit = el('button', 'btn', 'Submit exam & grade');
    submitWrap.appendChild(submit);
    host.appendChild(submitWrap);

    submit.addEventListener('click', function () {
      // lock & reveal everything
      cfg.sections.forEach(function (s) {
        s.questions.forEach(function (q) {
          var card = host.querySelector('[data-qid="' + cssEsc(q.id) + '"]');
          if (card) lockQuestion(card, q, state);
        });
      });
      // build report
      var html = '<h3>Results — ' + (cfg.title || 'Practice Exam') + '</h3>';
      var totalC = 0, totalT = 0;
      cfg.sections.forEach(function (s) {
        var sc = scoreOf(s.questions, state.answers);
        totalC += sc.correct; totalT += sc.total;
        var pct = sc.total ? Math.round(100 * sc.correct / sc.total) : 0;
        html += '<p><strong>' + s.name + ':</strong> ' + sc.correct + ' / ' + sc.total + ' (' + pct + '%)</p>';
      });
      var totPct = totalT ? Math.round(100 * totalC / totalT) : 0;
      html += '<p class="big">' + totalC + ' / ' + totalT + '  (' + totPct + '%)</p>';
      html += '<p class="muted">Scroll through each question to read the full explanation and source. ' +
              'Note: percent-correct does not map linearly to the 472–528 scaled score; use it to track relative progress.</p>';
      banner.innerHTML = html;
      banner.classList.add('show');
      banner.scrollIntoView({ behavior: 'smooth' });
      if (state.timerId) { clearInterval(state.timerId); }
    });

    // running timer (count up; informational)
    var started = Date.now ? null : null; // Date.now may be unavailable in some sandboxes; guard.
    var seconds = 0;
    state.timerId = setInterval(function () {
      seconds++;
      var h = Math.floor(seconds / 3600), m = Math.floor((seconds % 3600) / 60), s = seconds % 60;
      timer.textContent = (h ? h + ':' : '') + (m < 10 && h ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s + ' elapsed';
    }, 1000);
  }

  function cssEsc(s) { return String(s).replace(/"/g, '\\"'); }

  global.MCAT = {
    renderQuiz: renderQuiz,
    renderExam: renderExam,
    _score: scoreOf
  };
})(window);
