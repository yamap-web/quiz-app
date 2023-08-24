const quiz = [
  {
    id: 1,
    question: "好きな色は何色か",
    answers: ["ひまわりイエロー", "ターコイズブルー", "深紅", "漆黒"],
    correct: "ひまわりイエロー",
  },
  {
    id: 2,
    question: "最近個人的にアツいもの3つの組み合わせはどれか",
    answers: ["プログラミング・アーニャ・競馬", "プログラミング・ちいかわ・パチンコ", "プログラミング・ちいかわ・競馬", "ボルダリング・アーニャ・パチンコ"],
    correct: "プログラミング・ちいかわ・競馬",
  },
  {
    id: 3,
    question: "最も好きな言語はどれか",
    answers: [
      "マークアップ言語 HTML",
      "スタイルシート言語 CSS",
      "プログラミング言語 JavaScript",
      "データベース言語 SQL",
    ],
    correct: "プログラミング言語 JavaScript",
  },
  {
    id: 4,
    question: "最も好きなライブラリ・フレームワークはどれか",
    answers: [
      "jQuery",
      "Swiper",
      "React",
      "Express",
    ],
    correct:
      "React",
  },
  {
    id: 5,
    question: "高校時代にやっていたことはなにか",
    answers: [
      "ブラスバンドでドラム",
      "民俗音楽部で和太鼓",
      "軽音楽部でボーカル",
      "クラシックギターオーケストラ",
    ],
    correct: "クラシックギターオーケストラ",
  },
];


// 定数・変数を定義
let quizCount = 0;
const quizLength = quiz.length;
let score = 0;
const choice = document.querySelectorAll(".answer");
const choiceLength = choice.length;

// ページのロード時のイベント
window.addEventListener("load", () => {
  setupQuiz();
  isAnswerCorrect();
});

// ----------- クイズを表示する ------------
const setupQuiz = () => {
  // 問題文と問題番号に配列の要素を代入
  document.getElementById("js-question").textContent = quiz[quizCount].question;
  document.getElementById("js-number").textContent = quiz[quizCount].id;

  let choiceIndex = 0;

  //   選択肢の数(4)だけ、選択肢の内容を代入する
  while (choiceIndex < choiceLength) {
    choice[choiceIndex].textContent = quiz[quizCount].answers[choiceIndex];
    choiceIndex++;
  }
};

// ----------- 正誤判定する ------------
const isAnswerCorrect = () => {
  let choseIndex = 0;
  while (choseIndex < choiceLength) {
    choice[choseIndex].addEventListener("click", (e) => {
      const answerCorrect = document.querySelector(".answer_correct");
      const answerIncorrect = document.querySelector(".answer_incorrect");
      const answerResult = document.querySelector(".answer_result");
      const answerResultCount = document.querySelector(".answer_result_count");
      const answerResultText = document.querySelector(".answer_result_text");

      if (quiz[quizCount].correct === e.target.textContent) {
        answerCorrect.classList.add("active_answer");
        setTimeout(function () {
          answerCorrect.classList.remove("active_answer");
        }, 1000);
        // alert("正解！")
        score++;
      } else {
        answerIncorrect.classList.add("active_answer");
        setTimeout(function () {
          answerIncorrect.classList.remove("active_answer");
        }, 1000);
        // alert("不正解")
      }

      quizCount++;
      if (quizCount < quizLength) {
        setTimeout(function () {
          setupQuiz();
        }, 1000);
      } else {
        let quiz_master_element = document.querySelector(".quiz_master");
        quiz_master_element.remove();
        setTimeout(function () {
          answerResult.classList.add("active_result");
          answerResultCount.textContent = quizLength;
          answerResultText.textContent = `${score}問`;
        }, 1500);
      }
    });
    choseIndex++;
  }
};
