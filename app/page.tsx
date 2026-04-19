"use client";

import { useEffect, useState } from "react";
import { lessons, Lesson, VocabItem } from "./data/lessons";

type FeedbackMap = Record<number, string>;

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function normalizeAnswer(text: string) {
  return (text || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, " ");
}

function highlightText(sentence: string, target: string) {
  if (!sentence || !target) return sentence || "";
  return sentence.replace(
    target,
    `<span class="grammar-inline-highlight">${target}</span>`
  );
}

export default function Home() {
  const [currentLessonKey, setCurrentLessonKey] = useState("chapter1-section1");
  const [grammarMode, setGrammarMode] = useState<"notes" | "quiz">("notes");

  const [quizData, setQuizData] = useState<{
    quizItems: VocabItem[];
    wordBank: string[];
  }>({
    quizItems: [],
    wordBank: [],
  });

  const [placements, setPlacements] = useState<Record<number, string>>({});
  const [selectedBlank, setSelectedBlank] = useState<number | null>(null);
  const [readingInputs, setReadingInputs] = useState<Record<number, string>>({});
  const [meaningInputs, setMeaningInputs] = useState<Record<number, string>>({});
  const [blankFeedback, setBlankFeedback] = useState<FeedbackMap>({});
  const [readingFeedback, setReadingFeedback] = useState<FeedbackMap>({});
  const [meaningFeedback, setMeaningFeedback] = useState<FeedbackMap>({});
  const [blankStatus, setBlankStatus] = useState<Record<number, "correct" | "wrong" | "">>({});
  const [resultsHtml, setResultsHtml] = useState<string>("");
  const [grammarInputs, setGrammarInputs] = useState<Record<number, string>>({});
  const [grammarFeedback, setGrammarFeedback] = useState<Record<number, { text: string; correct: boolean }>>({});

  const currentLesson: Lesson = lessons[currentLessonKey];

  function buildQuizData(lesson: Lesson) {
    const shuffled = shuffle(lesson.vocab);
    const quizCount = Math.min(8, Math.max(1, shuffled.length - 1));
    const quizItems = shuffled.slice(0, quizCount);
    const distractor = shuffled[quizCount];

    const wordBank = distractor
      ? shuffle([...quizItems.map((v) => v.kanji), distractor.kanji])
      : shuffle([...quizItems.map((v) => v.kanji)]);

    return { quizItems, wordBank };
  }

  useEffect(() => {
    const newQuiz = buildQuizData(currentLesson);
    setQuizData(newQuiz);

    setPlacements({});
    setReadingInputs({});
    setMeaningInputs({});
    setBlankFeedback({});
    setReadingFeedback({});
    setMeaningFeedback({});
    setBlankStatus({});
    setResultsHtml("");
    setSelectedBlank(null);
  }, [currentLessonKey]);

  function handleLessonChange(newKey: string) {
    setCurrentLessonKey(newKey);
    setGrammarMode("notes");
    setGrammarInputs({});
    setGrammarFeedback({});
    setPlacements({});
    setReadingInputs({});
    setMeaningInputs({});
    setBlankFeedback({});
    setReadingFeedback({});
    setMeaningFeedback({});
    setBlankStatus({});
    setResultsHtml("");
    setSelectedBlank(null);
  }

  function generateNewQuiz() {
    const newQuiz = buildQuizData(currentLesson);
    setQuizData(newQuiz);

    setPlacements({});
    setReadingInputs({});
    setMeaningInputs({});
    setBlankFeedback({});
    setReadingFeedback({});
    setMeaningFeedback({});
    setBlankStatus({});
    setResultsHtml("");
    setSelectedBlank(null);
  }

  function placeWord(word: string) {
    if (selectedBlank === null) return;

    const nextPlacements = { ...placements };

    Object.keys(nextPlacements).forEach((key) => {
      const numKey = Number(key);
      if (nextPlacements[numKey] === word) {
        nextPlacements[numKey] = "";
      }
    });

    nextPlacements[selectedBlank] = word;
    setPlacements(nextPlacements);
  }

  function checkAnswers() {
    let placementScore = 0;
    let readingScore = 0;
    let meaningScore = 0;

    const nextBlankFeedback: FeedbackMap = {};
    const nextReadingFeedback: FeedbackMap = {};
    const nextMeaningFeedback: FeedbackMap = {};
    const nextBlankStatus: Record<number, "correct" | "wrong" | ""> = {};

    quizData.quizItems.forEach((item, index) => {
      const id = index + 1;
      const placed = placements[id] || "";
      const readingValue = (readingInputs[id] || "").trim();
      const meaningValue = normalizeAnswer(meaningInputs[id] || "");

      if (placed === item.kanji) {
        placementScore++;
        nextBlankStatus[id] = "correct";
      } else {
        nextBlankStatus[id] = "wrong";
        nextBlankFeedback[id] = `Correct kanji: ${item.kanji}`;
      }

      if (readingValue === item.hira) {
        readingScore++;
        nextReadingFeedback[id] = "Hiragana: Correct";
      } else {
        nextReadingFeedback[id] = `Correct hiragana: ${item.hira}`;
      }

      const acceptedMeanings = (item.accepted || [item.eng]).map(normalizeAnswer);
      if (acceptedMeanings.includes(meaningValue)) {
        meaningScore++;
        nextMeaningFeedback[id] = "Meaning: Correct";
      } else {
        nextMeaningFeedback[id] = `Correct meaning: ${item.eng}`;
      }
    });

    setBlankFeedback(nextBlankFeedback);
    setReadingFeedback(nextReadingFeedback);
    setMeaningFeedback(nextMeaningFeedback);
    setBlankStatus(nextBlankStatus);

    let message = "";
    const total = quizData.quizItems.length * 3;
    const score = placementScore + readingScore + meaningScore;

    if (score === total) {
      message = "Perfect! You nailed every part of this round.";
    } else if (score >= Math.floor(total * 0.75)) {
      message = "Nice work — revise the highlighted parts and try again.";
    } else {
      message = "Good start. Use the highlighted feedback to fix the missed items.";
    }

    setResultsHtml(`
      <h3>Results</h3>
      <div class="results-message">${message}</div>
      <div class="results-grid">
        <div class="result-pill">
          <span>Placement</span>
          <strong>${placementScore}/${quizData.quizItems.length}</strong>
        </div>
        <div class="result-pill">
          <span>Reading</span>
          <strong>${readingScore}/${quizData.quizItems.length}</strong>
        </div>
        <div class="result-pill">
          <span>Meaning</span>
          <strong>${meaningScore}/${quizData.quizItems.length}</strong>
        </div>
      </div>
    `);
  }

  function tryAgain() {
    setResultsHtml(`
      <h3>Try Again</h3>
      <div class="results-message">Fix the highlighted items, then check your answers again.</div>
    `);
  }

  function checkGrammarAnswers() {
    const nextFeedback: Record<number, { text: string; correct: boolean }> = {};

    currentLesson.grammar.forEach((item, index) => {
      const userAnswer = normalizeAnswer(grammarInputs[index] || "");
      const acceptedAnswers = (item.accepted || [item.meaning]).map(normalizeAnswer);

      if (acceptedAnswers.includes(userAnswer)) {
        nextFeedback[index] = { text: "Correct", correct: true };
      } else {
        nextFeedback[index] = { text: `Correct answer: ${item.meaning}`, correct: false };
      }
    });

    setGrammarFeedback(nextFeedback);
  }

  if (quizData.quizItems.length === 0) {
    return (
      <div id="appShell">
        <div id="appHeader">
          <span className="eyebrow">JPN 3302</span>
          <h1>食で考える日本社会</h1>
          <p>Loading lesson...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="appShell">
      <div id="appHeader">
        <span className="eyebrow">JPN 3302</span>
        <h1>食で考える日本社会</h1>
        <p>Practice vocabulary, readings, meanings, and grammar in context.</p>
      </div>

      <div id="toolbar">
        <label htmlFor="lessonSelect">Select Lesson</label>
        <select
          id="lessonSelect"
          value={currentLessonKey}
          onChange={(e) => handleLessonChange(e.target.value)}
        >
          {Object.entries(lessons).map(([key, lesson]) => (
            <option key={key} value={key}>
              {lesson.title}
            </option>
          ))}
        </select>
      </div>

      <div id="mainLayout">
        <div id="leftColumn">
          <div id="quiz">
            <h2>{currentLesson.title}</h2>
            <p>
              {quizData.quizItems.map((item, index) => {
                const id = index + 1;
                const sentenceParts = item.sentence.split("{blank}");
                const status = blankStatus[id] || "";

                return (
                  <span key={id}>
                    {sentenceParts[0]}
                    <button
                      type="button"
                      className={`blank ${selectedBlank === id ? "active" : ""} ${status}`}
                      onClick={() => setSelectedBlank(id)}
                    >
                      {placements[id] || "____"}
                    </button>
                    {sentenceParts[1]}{" "}
                    {blankFeedback[id] && (
                      <span className="inline-feedback wrong-text">{blankFeedback[id]}</span>
                    )}{" "}
                  </span>
                );
              })}
            </p>
          </div>

          <div>
            <h3 className="section-title">Word Bank</h3>
            <div id="words">
              {quizData.wordBank.map((word) => (
                <button
                  type="button"
                  key={word}
                  className={`word ${Object.values(placements).includes(word) ? "used" : ""}`}
                  onClick={() => placeWord(word)}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          <div id="reading">
            <h3>Hiragana</h3>
            {quizData.quizItems.map((item, index) => {
              const id = index + 1;
              return (
                <div className="input-row" key={`r-${id}`}>
                  <label>{item.kanji}:</label>
                  <input
                    value={readingInputs[id] || ""}
                    onChange={(e) =>
                      setReadingInputs((prev) => ({ ...prev, [id]: e.target.value }))
                    }
                  />
                  {readingFeedback[id] && (
                    <div
                      className={`feedback ${
                        readingFeedback[id] === "Hiragana: Correct"
                          ? "correct-text"
                          : "wrong-text"
                      }`}
                    >
                      {readingFeedback[id]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div id="meaning">
            <h3>English Meaning</h3>
            {quizData.quizItems.map((item, index) => {
              const id = index + 1;
              return (
                <div className="input-row" key={`m-${id}`}>
                  <label>{item.kanji}:</label>
                  <input
                    value={meaningInputs[id] || ""}
                    onChange={(e) =>
                      setMeaningInputs((prev) => ({ ...prev, [id]: e.target.value }))
                    }
                  />
                  {meaningFeedback[id] && (
                    <div
                      className={`feedback ${
                        meaningFeedback[id] === "Meaning: Correct"
                          ? "correct-text"
                          : "wrong-text"
                      }`}
                    >
                      {meaningFeedback[id]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="button-row">
            <button onClick={checkAnswers}>Check Answers</button>
            <button className="secondary" onClick={tryAgain}>
              Try Again
            </button>
            <button className="secondary" onClick={generateNewQuiz}>
              New Quiz
            </button>
          </div>

          <div id="results" dangerouslySetInnerHTML={{ __html: resultsHtml }} />
        </div>

        <div id="rightColumn">
          <div id="grammarBox">
            {grammarMode === "notes" ? (
              <>
                <h3>Grammar Focus</h3>
                <button
                  className="secondary"
                  onClick={() => {
                    setGrammarMode("quiz");
                    setGrammarFeedback({});
                    setGrammarInputs({});
                  }}
                >
                  Practice Grammar
                </button>

                {currentLesson.grammar.map((item, index) => (
                  <div className="grammar-item" key={index}>
                    <div className="grammar-pattern">{item.pattern}</div>
                    <div className="grammar-meaning">{item.meaning}</div>
                    <div
                      className="grammar-example"
                      dangerouslySetInnerHTML={{
                        __html: highlightText(item.example, item.highlight),
                      }}
                    />
                    <div className="grammar-translation">{item.translation}</div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <h3>Grammar Practice</h3>
                <button className="secondary" onClick={() => setGrammarMode("notes")}>
                  Back to Grammar Notes
                </button>

                {currentLesson.grammar.map((item, index) => (
                  <div className="grammar-item" key={index}>
                    <div className="grammar-pattern">{item.pattern}</div>
                    <input
                      placeholder="Type the meaning in English"
                      value={grammarInputs[index] || ""}
                      onChange={(e) =>
                        setGrammarInputs((prev) => ({ ...prev, [index]: e.target.value }))
                      }
                    />
                    {grammarFeedback[index] && (
                      <div
                        className={`feedback ${
                          grammarFeedback[index].correct ? "correct-text" : "wrong-text"
                        }`}
                      >
                        {grammarFeedback[index].text}
                      </div>
                    )}
                  </div>
                ))}

                <button onClick={checkGrammarAnswers}>Check Grammar</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}