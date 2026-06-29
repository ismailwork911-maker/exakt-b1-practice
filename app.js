const STORAGE_KEY = 'exakt-b1-progress-v1';

function normalizeAnswer(value) {
  return String(value || '').trim().toLowerCase();
}

const testThemes = [
  { id: 'unit-1', title: 'Einheit 1', subtitle: 'Leseverstehen', theme: 'Alltag', answers: { p1: ['Richtig', 'Falsch', 'Falsch', 'Falsch', 'Richtig', 'Richtig'], p2: ['A', 'C', 'C', 'A', 'C', 'A'], p3: ['B', 'D', 'A', 'B', 'O', 'F', 'E'], p4: ['Nein', 'Ja', 'Nein', 'Nein', 'Ja', 'Ja', 'Ja'], p5: ['A', 'C', 'B', 'A'] } },
  { id: 'unit-2', title: 'Einheit 2', subtitle: 'Beruf und Alltag', theme: 'Beruf', answers: { p1: ['Falsch', 'Richtig', 'Richtig', 'Falsch', 'Richtig', 'Falsch'], p2: ['B', 'C', 'A', 'B', 'C', 'C'], p3: ['B', 'H', 'D', 'I', 'O', 'I', 'E'], p4: ['Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja'], p5: ['B', 'C', 'A', 'B'] } },
  { id: 'unit-3', title: 'Einheit 3', subtitle: 'Freizeit und Reisen', theme: 'Reisen', answers: { p1: ['Richtig', 'Falsch', 'Richtig', 'Falsch', 'Falsch', 'Richtig'], p2: ['C', 'A', 'B', 'C', 'A', 'B'], p3: ['C', 'F', 'G', 'J', 'M', 'N', 'O'], p4: ['Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein'], p5: ['C', 'B', 'A', 'C'] } },
  { id: 'unit-4', title: 'Einheit 4', subtitle: 'Familie und Beziehungen', theme: 'Familie', answers: { p1: ['Richtig', 'Richtig', 'Falsch', 'Richtig', 'Falsch', 'Richtig'], p2: ['A', 'B', 'C', 'A', 'B', 'C'], p3: ['D', 'E', 'F', 'G', 'H', 'I', 'J'], p4: ['Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja'], p5: ['A', 'B', 'C', 'A'] } },
  { id: 'unit-5', title: 'Einheit 5', subtitle: 'Gesundheit und Wohlbefinden', theme: 'Gesundheit', answers: { p1: ['Richtig', 'Falsch', 'Richtig', 'Falsch', 'Falsch', 'Falsch'], p2: ['C', 'E', 'B', 'B', 'C', 'B'], p3: ['B', 'D', 'G', 'H', 'J', 'L', 'M'], p4: ['Nein', 'Nein', 'Ja', 'Nein', 'Ja', 'Ja', 'Nein'], p5: ['B', 'A', 'C', 'B'] } },
  { id: 'unit-6', title: 'Einheit 6', subtitle: 'Stadt und Mobilität', theme: 'Stadt', answers: { p1: ['Richtig', 'Richtig', 'Falsch', 'Falsch', 'Richtig', 'Falsch'], p2: ['A', 'B', 'C', 'A', 'B', 'C'], p3: ['C', 'D', 'E', 'F', 'G', 'H', 'I'], p4: ['Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja'], p5: ['A', 'B', 'C', 'A'] } },
  { id: 'unit-7', title: 'Einheit 7', subtitle: 'Kultur und Medien', theme: 'Kultur', answers: { p1: ['Richtig', 'Richtig', 'Falsch', 'Falsch', 'Falsch', 'Richtig'], p2: ['B', 'C', 'A', 'B', 'C', 'A'], p3: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], p4: ['Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein'], p5: ['C', 'A', 'B', 'C'] } },
  { id: 'unit-8', title: 'Einheit 8', subtitle: 'Essen und Einkaufen', theme: 'Essen', answers: { p1: ['Falsch', 'Richtig', 'Falsch', 'Richtig', 'Falsch', 'Richtig'], p2: ['A', 'C', 'B', 'A', 'C', 'B'], p3: ['E', 'F', 'G', 'H', 'I', 'J', 'K'], p4: ['Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja'], p5: ['B', 'C', 'A', 'B'] } },
  { id: 'unit-9', title: 'Einheit 9', subtitle: 'Sprachen und Lernen', theme: 'Lernen', answers: { p1: ['Richtig', 'Richtig', 'Falsch', 'Falsch', 'Richtig', 'Falsch'], p2: ['A', 'B', 'C', 'A', 'B', 'C'], p3: ['H', 'I', 'J', 'K', 'L', 'M', 'N'], p4: ['Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein'], p5: ['C', 'A', 'B', 'C'] } },
  { id: 'unit-10', title: 'Einheit 10', subtitle: 'Umwelt und Nachhaltigkeit', theme: 'Umwelt', answers: { p1: ['Richtig', 'Falsch', 'Richtig', 'Falsch', 'Richtig', 'Falsch'], p2: ['B', 'C', 'A', 'B', 'C', 'A'], p3: ['I', 'J', 'K', 'L', 'M', 'N', 'O'], p4: ['Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja'], p5: ['A', 'B', 'C', 'A'] } },
  { id: 'unit-11', title: 'Einheit 11', subtitle: 'Zukunft und Pläne', theme: 'Zukunft', answers: { p1: ['Richtig', 'Falsch', 'Richtig', 'Falsch', 'Richtig', 'Falsch'], p2: ['A', 'C', 'B', 'A', 'C', 'B'], p3: ['J', 'K', 'L', 'M', 'N', 'O', 'A'], p4: ['Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein'], p5: ['B', 'C', 'A', 'B'] } },
  { id: 'unit-12', title: 'Einheit 12', subtitle: 'Medien und Alltag', theme: 'Medien', answers: { p1: ['Richtig', 'Richtig', 'Falsch', 'Falsch', 'Richtig', 'Falsch'], p2: ['A', 'B', 'C', 'A', 'B', 'C'], p3: ['K', 'L', 'M', 'N', 'O', 'A', 'B'], p4: ['Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja'], p5: ['C', 'A', 'B', 'C'] } },
  { id: 'unit-13', title: 'Einheit 13', subtitle: 'Sprache und Wortschatz', theme: 'Sprache', answers: { p1: ['Richtig', 'Falsch', 'Richtig', 'Falsch', 'Falsch', 'Richtig'], p2: ['B', 'C', 'A', 'B', 'C', 'A'], p3: ['L', 'M', 'N', 'O', 'A', 'B', 'C'], p4: ['Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein'], p5: ['A', 'B', 'C', 'A'] } },
  { id: 'unit-14', title: 'Einheit 14', subtitle: 'Texte und Informationen', theme: 'Texte', answers: { p1: ['Richtig', 'Falsch', 'Richtig', 'Falsch', 'Richtig', 'Falsch'], p2: ['A', 'C', 'B', 'A', 'C', 'B'], p3: ['M', 'N', 'O', 'A', 'B', 'C', 'D'], p4: ['Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja'], p5: ['B', 'C', 'A', 'B'] } },
  { id: 'unit-15', title: 'Einheit 15', subtitle: 'Zusammenfassung und Prüfung', theme: 'Prüfung', answers: { p1: ['Richtig', 'Richtig', 'Falsch', 'Falsch', 'Richtig', 'Falsch'], p2: ['B', 'A', 'C', 'B', 'A', 'C'], p3: ['N', 'O', 'A', 'B', 'C', 'D', 'E'], p4: ['Nein', 'Ja', 'Nein', 'Ja', 'Nein', 'Ja', 'Nein'], p5: ['C', 'B', 'A', 'C'] } }
];

function createTest({ id, title, subtitle, theme, answers }) {
  const createPartQuestions = (prefix, count, questionsData, answerValues = []) =>
    questionsData.slice(0, count).map((item, index) => {
      const questionId = `${id}-${prefix}-${index + 1}`;
      const correct = answerValues[index] || item.correct;
      return createQuestion(questionId, item.prompt, item.options, correct, item.type);
    });

  const part1 = {
    title: 'Teil 1 – Richtig oder Falsch',
    questions: createPartQuestions('p1', 6, [
      { prompt: `Stimmt die Aussage über ${theme} im Text?`, options: ['Richtig', 'Falsch'], correct: 'Richtig', type: 'true-false' },
      { prompt: `Wird ${theme} im Text als wichtig dargestellt?`, options: ['Richtig', 'Falsch'], correct: 'Richtig', type: 'true-false' },
      { prompt: `Ist die Lösung für ${theme} im Beispiel klar erkennbar?`, options: ['Richtig', 'Falsch'], correct: 'Falsch', type: 'true-false' },
      { prompt: `Wird der Vorschlag zu ${theme} als sinnvoll bewertet?`, options: ['Richtig', 'Falsch'], correct: 'Richtig', type: 'true-false' },
      { prompt: `Ist die Information über ${theme} im Text nicht vollständig?`, options: ['Richtig', 'Falsch'], correct: 'Falsch', type: 'true-false' },
      { prompt: `Klingt der Hinweis zu ${theme} passend?`, options: ['Richtig', 'Falsch'], correct: 'Richtig', type: 'true-false' }
    ], answers.p1)
  };

  const part2 = {
    title: 'Teil 2 – A, B oder C',
    questions: createPartQuestions('p2', 6, [
      { prompt: `Welche Antwort passt am besten zu ${theme}?`, options: ['A', 'B', 'C'], correct: 'A', type: 'abc' },
      { prompt: `Welche Lösung ist für ${theme} am passendsten?`, options: ['A', 'B', 'C'], correct: 'B', type: 'abc' },
      { prompt: `Welche Variante beschreibt ${theme} am treffendsten?`, options: ['A', 'B', 'C'], correct: 'C', type: 'abc' },
      { prompt: `Welche Option passt zur Situation rund um ${theme}?`, options: ['A', 'B', 'C'], correct: 'A', type: 'abc' },
      { prompt: `Welche Antwort ist bei ${theme} die beste Wahl?`, options: ['A', 'B', 'C'], correct: 'B', type: 'abc' },
      { prompt: `Welche Lösung würde man bei ${theme} zuerst wählen?`, options: ['A', 'B', 'C'], correct: 'C', type: 'abc' }
    ], answers.p2)
  };

  const part3 = {
    title: 'Teil 3 – Zuordnen',
    questions: createPartQuestions('p3', 7, [
      { prompt: `Ordnen Sie die Aussage zu ${theme} dem passenden Buchstaben zu.`, options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'], correct: 'J', type: 'match' },
      { prompt: `Ordnen Sie die passende Ergänzung zu ${theme} korrekt zu.`, options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'], correct: 'M', type: 'match' },
      { prompt: `Welche Zuordnung passt zu ${theme}?`, options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'], correct: 'C', type: 'match' },
      { prompt: `Ordnen Sie die Information zu ${theme} passend ein.`, options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'], correct: 'O', type: 'match' },
      { prompt: `Welcher Buchstabe passt zur Beschreibung von ${theme}?`, options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'], correct: 'F', type: 'match' },
      { prompt: `Ordnen Sie den Hinweis zu ${theme} korrekt zu.`, options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'], correct: 'K', type: 'match' },
      { prompt: `Ordnen Sie den letzten Hinweis zu ${theme} passend zu.`, options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'], correct: 'D', type: 'match' }
    ], answers.p3)
  };

  const part4 = {
    title: 'Teil 4 – Ja oder Nein',
    questions: createPartQuestions('p4', 7, [
      { prompt: `Ist die Lösung für ${theme} hilfreich?`, options: ['Ja', 'Nein'], correct: 'Ja', type: 'yes-no' },
      { prompt: `Wird der Vorschlag zu ${theme} unterstützt?`, options: ['Ja', 'Nein'], correct: 'Nein', type: 'yes-no' },
      { prompt: `Ist die Information über ${theme} klar?`, options: ['Ja', 'Nein'], correct: 'Ja', type: 'yes-no' },
      { prompt: `Passt die Empfehlung zu ${theme}?`, options: ['Ja', 'Nein'], correct: 'Ja', type: 'yes-no' },
      { prompt: `Wäre die Entscheidung bei ${theme} sinnvoll?`, options: ['Ja', 'Nein'], correct: 'Nein', type: 'yes-no' },
      { prompt: `Ist der Hinweis zu ${theme} passend?`, options: ['Ja', 'Nein'], correct: 'Ja', type: 'yes-no' },
      { prompt: `Ist der letzte Gedanke zu ${theme} verständlich?`, options: ['Ja', 'Nein'], correct: 'Nein', type: 'yes-no' }
    ], answers.p4)
  };

  const part5 = {
    title: 'Teil 5 – A, B oder C',
    questions: createPartQuestions('p5', 4, [
      { prompt: `Welche Aussage passt am besten zu ${theme}?`, options: ['A', 'B', 'C'], correct: 'B', type: 'abc' },
      { prompt: `Welche Lösung wäre bei ${theme} die beste Abschlussform?`, options: ['A', 'B', 'C'], correct: 'C', type: 'abc' },
      { prompt: `Welche Variante passt am besten zur Situation bei ${theme}?`, options: ['A', 'B', 'C'], correct: 'A', type: 'abc' },
      { prompt: `Welche Antwort wäre in ${theme} am sinnvollsten?`, options: ['A', 'B', 'C'], correct: 'B', type: 'abc' }
    ], answers.p5)
  };

  return { id, title, subtitle, theme, parts: [part1, part2, part3, part4, part5] };
}

function createQuestion(id, prompt, options, correct, type) {
  return { id, prompt, options, correct, type };
}

const tests = testThemes.map(createTest);

const state = {
  view: 'home',
  currentTestId: null,
  currentQuestionIndex: 0,
  answers: {},
  results: null,
  reviewQuestions: [],
  progress: {}
};

function init() {
  loadProgress();
  bindEvents();
  render();
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const actionEl = event.target.closest('[data-action]');
    if (!actionEl) return;

    const { action } = actionEl.dataset;

    switch (action) {
      case 'open-test':
        startTest(actionEl.dataset.testId);
        break;
      case 'show-home':
        state.view = 'home';
        render();
        break;
      case 'show-preparation':
        state.view = 'preparation';
        render();
        break;
      case 'show-statistics':
        state.view = 'statistics';
        render();
        break;
      case 'start-quiz':
        if (state.currentTestId) {
          state.view = 'quiz';
          state.currentQuestionIndex = 0;
          render();
        }
        break;
      case 'submit-quiz':
        submitQuiz();
        break;
      case 'review-results':
        state.view = 'review';
        state.reviewQuestions = state.results ? state.results.reviewQuestions : [];
        render();
        break;
      case 'choose-another-test':
        state.view = 'home';
        render();
        break;
      case 'retake-test':
        if (state.currentTestId) {
          startTest(state.currentTestId);
        }
        break;
      case 'reset-current-test':
        resetCurrentTest();
        break;
      case 'reset-all-tests':
        resetAllTests();
        break;
      default:
        break;
    }
  });

  document.addEventListener('click', (event) => {
    const optionEl = event.target.closest('[data-option]');
    if (!optionEl) return;

    const { option, questionId } = optionEl.dataset;
    state.answers[questionId] = option;
    saveProgress();
    render();
  });
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state.progress = parsed;
      state.answers = {};
      if (state.currentTestId) {
        state.answers = state.progress[state.currentTestId]?.answers || {};
      }
    }
  } catch (error) {
    console.warn('Konnte Fortschritt nicht laden.', error);
  }
}

function saveProgress() {
  const currentTest = getCurrentTest();
  if (!currentTest) return;

  const existing = state.progress[currentTest.id] || { history: [], answers: {} };
  existing.answers = { ...existing.answers, ...state.answers };
  existing.lastUpdated = new Date().toISOString();
  existing.lastQuestionIndex = state.currentQuestionIndex;
  state.progress[currentTest.id] = existing;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getCurrentTest() {
  return tests.find((test) => test.id === state.currentTestId) || null;
}

function getAllQuestions() {
  const currentTest = getCurrentTest();
  if (!currentTest) return [];
  return currentTest.parts.flatMap((part) => part.questions.map((q, index) => ({ ...q, partTitle: part.title, partIndex: currentTest.parts.indexOf(part), questionIndex: index })));
}

function getCurrentQuestion() {
  const questions = getAllQuestions();
  return questions[state.currentQuestionIndex] || null;
}

function startTest(testId) {
  const existing = state.progress[testId] || { history: [], answers: {} };
  existing.answers = {};
  existing.completed = false;
  existing.lastScore = 0;
  existing.lastCompletedAt = null;
  existing.lastUpdated = new Date().toISOString();
  state.progress[testId] = existing;

  state.currentTestId = testId;
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.results = null;
  state.reviewQuestions = [];
  state.view = 'quiz';
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  render();
}

function submitQuiz() {
  const currentTest = getCurrentTest();
  if (!currentTest) return;

  const questions = getAllQuestions();
  let correctCount = 0;

  const partResults = currentTest.parts.map((part) => {
    const partQuestions = part.questions;
    let partCorrect = 0;
    partQuestions.forEach((question) => {
      const selected = normalizeAnswer(state.answers[question.id]);
      const expected = normalizeAnswer(question.correct);
      const isCorrect = selected === expected;
      if (isCorrect) partCorrect += 1;
    });
    return { title: part.title, total: partQuestions.length, correct: partCorrect };
  });

  questions.forEach((question) => {
    const selected = normalizeAnswer(state.answers[question.id]);
    const expected = normalizeAnswer(question.correct);
    if (selected === expected) correctCount += 1;
  });

  const total = questions.length;
  const score = Math.round((correctCount / total) * 100);
  const reviewQuestions = questions.map((question) => ({
    ...question,
    selected: state.answers[question.id] || '—',
    correct: question.correct,
    isCorrect: normalizeAnswer(state.answers[question.id]) === normalizeAnswer(question.correct)
  }));

  const existing = state.progress[currentTest.id] || { history: [], answers: {} };
  existing.answers = { ...existing.answers, ...state.answers };
  existing.completed = true;
  existing.lastScore = score;
  existing.lastCompletedAt = new Date().toISOString();
  existing.history = existing.history || [];
  existing.history.unshift({
    date: new Date().toLocaleString('de-DE'),
    score,
    correct: correctCount,
    total,
    passed: score >= 60
  });
  state.progress[currentTest.id] = existing;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));

  state.results = {
    test: currentTest,
    score,
    correctCount,
    wrongCount: total - correctCount,
    total,
    reviewQuestions,
    partResults
  };
  state.reviewQuestions = reviewQuestions;
  state.view = 'results';
  render();
}

function render() {
  renderHome();
  renderQuiz();
  renderResults();
  renderReview();
  renderPreparation();
  renderStatistics();

  document.querySelectorAll('.view').forEach((view) => view.classList.remove('active'));
  const activeView = document.getElementById(`${state.view}-view`);
  if (activeView) {
    activeView.classList.add('active');
  }
}

function renderHome() {
  const homeEl = document.getElementById('home-view');
  const completedTests = Object.values(state.progress).filter((entry) => entry.completed).length;
  const averageScore = computeAverageScore();

  homeEl.innerHTML = `
    <div class="card hero-card">
      <div class="hero-badge">Exakt B1 · Vorbereitung</div>
      <h2>Übe gezielt mit 10 professionell aufgebauten Tests</h2>
      <p>Jeder Test enthält 5 Teile, klare Aufgaben, sofortige Lösungen und einen Verlauf für deine Fortschritte.</p>
      <div class="result-grid">
        <div class="metric-card">
          <span>Abgeschlossene Tests</span>
          <strong>${completedTests}</strong>
        </div>
        <div class="metric-card">
          <span>Durchschnitt</span>
          <strong>${averageScore}%</strong>
        </div>
      </div>
      <div class="nav-row">
        <button class="primary-btn" data-action="show-statistics">Statistiken ansehen</button>
        <button class="secondary-btn" data-action="show-preparation">Lösungen & Vorbereitung</button>
        <button class="secondary-btn" data-action="reset-all-tests">Alle Tests zurücksetzen</button>
      </div>
    </div>

    <div class="grid">
      ${tests.map((test) => {
        const progressEntry = state.progress[test.id];
        const percent = progressEntry?.lastScore || 0;
        return `
          <button class="test-card" data-action="open-test" data-test-id="${test.id}">
            <h3>${test.title}</h3>
            <p>${test.subtitle}</p>
            <div class="test-meta">
              <span>${test.theme}</span>
              <span>${progressEntry?.completed ? 'Abgeschlossen' : 'Starten'}</span>
            </div>
            <div class="progress-line" style="margin-top: 10px;">
              <span style="width: ${percent}%;"></span>
            </div>
          </button>
        `;
      }).join('')}
    </div>
  `;
}

function renderQuiz() {
  const quizEl = document.getElementById('quiz-view');
  const currentTest = getCurrentTest();
  if (!currentTest) {
    quizEl.innerHTML = '<div class="card"><p class="empty-state">Bitte wähle zuerst einen Test aus.</p></div>';
    return;
  }

  const questions = getAllQuestions();
  const answeredCount = questions.filter((question) => Boolean(state.answers[question.id])).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  quizEl.innerHTML = `
    <div class="card">
      <div class="quiz-topbar">
        <div>
          <h2>${currentTest.title}</h2>
          <div class="quiz-meta">${currentTest.subtitle}</div>
        </div>
        <div class="quiz-meta">${answeredCount}/${questions.length} beantwortet</div>
      </div>

      <div class="progress-line" style="margin: 8px 0 16px;">
        <span style="width: ${progressPercent}%;"></span>
      </div>
      <p class="helper-text">Wähle für jede Frage deine Antwort aus und klicke unten auf „Ergebnis prüfen“.</p>

      <div class="quiz-list">
        ${currentTest.parts.map((part, partIndex) => `
          <div class="part-block">
            <h3>${part.title}</h3>
            ${part.questions.map((question, questionIndex) => {
              const fullQuestion = questions.find((item) => item.id === question.id);
              return `
                <div class="question-card">
                  <p class="question-title"><strong>${partIndex + 1}.${questionIndex + 1}</strong> ${fullQuestion?.prompt || question.prompt}</p>
                  <div class="option-stack">
                    ${(fullQuestion?.options || question.options).map((option) => `
                      <button class="option-btn ${state.answers[fullQuestion?.id || question.id] === option ? 'active' : ''}" data-option="${option}" data-question-id="${fullQuestion?.id || question.id}">
                        ${option}
                      </button>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `).join('')}
      </div>

      <div class="nav-row" style="margin-top: 18px;">
        <button class="secondary-btn" data-action="show-home">Zurück</button>
        <button class="secondary-btn" data-action="reset-current-test">Test zurücksetzen</button>
        <button class="primary-btn" data-action="submit-quiz">Ergebnis prüfen</button>
      </div>
    </div>
  `;
}

function renderResults() {
  const resultsEl = document.getElementById('results-view');
  if (!state.results) {
    resultsEl.innerHTML = '<div class="card"><p class="empty-state">Noch keine Ergebnisse verfügbar.</p></div>';
    return;
  }

  const { test, score, correctCount, wrongCount, total, partResults } = state.results;

  resultsEl.innerHTML = `
    <div class="card">
      <h2>Ergebnis für ${test.title}</h2>
      <p class="quiz-meta">${test.subtitle}</p>
      <div class="result-grid">
        <div class="metric-card">
          <span>Ergebnis</span>
          <strong>${correctCount}/${total}</strong>
          <div class="quiz-meta">${score}%</div>
        </div>
        <div class="metric-card">
          <span>Richtig</span>
          <strong>${correctCount}</strong>
        </div>
        <div class="metric-card">
          <span>Falsch</span>
          <strong>${wrongCount}</strong>
        </div>
        <div class="metric-card">
          <span>Gesamt</span>
          <strong>${total}</strong>
        </div>
      </div>

      <div class="summary-card" style="padding: 18px; margin-top: 16px;">
        <h3>Ergebnis nach Teilen</h3>
        ${partResults.map((part) => `
          <div class="part-result">
            <strong>${part.title}</strong>
            <div class="quiz-meta">${part.correct} von ${part.total} richtig</div>
            <div class="progress-line" style="margin-top: 8px;"><span style="width: ${(part.correct / part.total) * 100}%;"></span></div>
          </div>
        `).join('')}
      </div>

      <div class="nav-row" style="margin-top: 18px;">
        <button class="primary-btn" data-action="review-results">Antworten prüfen</button>
        <button class="secondary-btn" data-action="retake-test">Test nochmal starten</button>
        <button class="secondary-btn" data-action="reset-current-test">Zurücksetzen</button>
      </div>
    </div>
  `;
}

function renderReview() {
  const reviewEl = document.getElementById('review-view');
  if (!state.reviewQuestions.length) {
    reviewEl.innerHTML = '<div class="card"><p class="empty-state">Noch keine Prüfungen zur Ansicht gespeichert.</p></div>';
    return;
  }

  reviewEl.innerHTML = `
    <div class="card">
      <h2>Antwortenübersicht</h2>
      <p class="quiz-meta">Prüfe jede Antwort mit der korrekten Lösung.</p>
      <div class="list-stack">
        ${state.reviewQuestions.map((question) => `
          <div class="review-card">
            <p><strong>${question.partTitle}</strong></p>
            <p>${question.prompt}</p>
            <p>Gewählt: <strong>${question.selected}</strong></p>
            <p>Korrekt: <strong>${question.correct}</strong></p>
          </div>
        `).join('')}
      </div>
      <div class="nav-row" style="margin-top: 18px;">
        <button class="secondary-btn" data-action="show-home">Zurück zum Start</button>
      </div>
    </div>
  `;
}

function renderPreparation() {
  const prepEl = document.getElementById('preparation-view');
  prepEl.innerHTML = `
    <div class="card">
      <h2>Vorbereitung und Lösungen</h2>
      <p class="quiz-meta">Diese Seite ist deine Lernhilfe: prüfe jede Lösung direkt, lerne die Muster und starte einen Test danach erneut frisch.</p>
      <div class="prep-grid">
        <div class="prep-card">
          <h3>So nutzt du die Seite</h3>
          <ul class="tip-list">
            <li>Beantworte zuerst einen Test ohne Hilfe.</li>
            <li>Prüfe danach die Lösungen in jedem Teil.</li>
            <li>Starte den Test danach erneut, um das Gelernte sofort zu testen.</li>
          </ul>
        </div>
        <div class="prep-card">
          <h3>PDF-Lösungsschlüssel</h3>
          <p>Die Lösungsschlüssel aus dem Korrekturbogen sind hier als klare Lernhilfe aufgebaut, damit du dich gezielt auf Schwachstellen konzentrieren kannst.</p>
          <a class="secondary-btn" href="ilide.info-losungsschlussel-exakt-1-pr_d2f4dd942c47bcf2a0c92ed80228b201.pdf" target="_blank" rel="noopener">PDF öffnen</a>
        </div>
      </div>
      <div class="list-stack" style="margin-top: 16px;">
        ${tests.map((test) => `
          <div class="review-card">
            <div class="quiz-topbar" style="margin-bottom: 8px;">
              <h3>${test.title} · ${test.subtitle}</h3>
              <span class="hero-badge">Teil 1-5</span>
            </div>
            ${test.parts.map((part) => `
              <div class="part-result">
                <strong>${part.title}</strong>
                <div class="quiz-meta">Lösungen: ${part.questions.map((question) => question.correct).join(' · ')}</div>
                <ul>
                  ${part.questions.map((question) => `<li><span class="quiz-meta">${question.prompt}</span><br /><strong>${question.correct}</strong></li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderStatistics() {
  const statsEl = document.getElementById('statistics-view');
  const completedEntries = Object.entries(state.progress).filter(([, entry]) => entry.completed);
  const completedTests = completedEntries.length;
  const averageScore = computeAverageScore();
  const bestScore = completedEntries.reduce((best, [, entry]) => Math.max(best, entry.lastScore || 0), 0);
  const passedCount = completedEntries.filter(([, entry]) => (entry.lastScore || 0) >= 60).length;
  const progressAnalysis = tests.map((test) => {
    const entry = state.progress[test.id];
    const percent = entry?.lastScore || 0;
    return `
      <div class="part-result">
        <strong>${test.title}</strong>
        <div class="quiz-meta">${percent}%</div>
        <div class="progress-line" style="margin-top: 8px;"><span style="width: ${percent}%;"></span></div>
      </div>
    `;
  }).join('');

  const historyList = completedEntries.flatMap(([, entry]) => (entry.history || []).map((item) => `
    <div class="review-card">
      <strong>${entry.title || 'Test'}</strong>
      <p>${item.date} · ${item.score}%</p>
    </div>
  `));

  statsEl.innerHTML = `
    <div class="card">
      <h2>Statistiken</h2>
      <div class="stats-grid">
        <div class="metric-card"><span>Abgeschlossene Tests</span><strong>${completedTests}</strong></div>
        <div class="metric-card"><span>Durchschnitt</span><strong>${averageScore}%</strong></div>
        <div class="metric-card"><span>Bestes Ergebnis</span><strong>${bestScore}%</strong></div>
        <div class="metric-card"><span>Bestanden</span><strong>${passedCount}</strong></div>
      </div>

      <div class="summary-card" style="padding: 18px; margin-top: 16px;">
        <h3>Fortschrittsanalyse</h3>
        ${progressAnalysis}
      </div>

      <div class="summary-card" style="padding: 18px; margin-top: 16px;">
        <h3>Verlauf</h3>
        ${historyList.length ? historyList.join('') : '<p class="empty-state">Noch kein Verlauf vorhanden.</p>'}
      </div>
    </div>
  `;
}

function computeAverageScore() {
  const completedEntries = Object.values(state.progress).filter((entry) => entry.completed);
  if (!completedEntries.length) return 0;
  const total = completedEntries.reduce((sum, entry) => sum + (entry.lastScore || 0), 0);
  return Math.round(total / completedEntries.length);
}

init();
