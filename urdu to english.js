const questions = [
    {
        question: "کتاب",
        answer: "Book"
    },
    {
        question: "پانی",
        answer: "Water"
    },
    {
        question: "گھر",
        answer: "House"
    },
    {
        question: "دوست",
        answer: "Friend"
    },
    {
        question: "سکول",
        answer: "School"
    }
];

let currentQuestion = 0;
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submitButton");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextButton");

function showQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answerInput.value = "";
    resultElement.classList.add("hidden");
    nextButton.classList.add("hidden");
    resultElement.classList.remove("correct", "incorrect"); // Reset classes
}

submitButton.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestion].answer;

    resultElement.classList.remove("hidden");
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        resultElement.textContent = "صحیح! جواب: " + correctAnswer;
        resultElement.classList.add("correct");
    } else {
        resultElement.textContent = "غلط! صحیح جواب: " + correctAnswer;
        resultElement.classList.add("incorrect");
    }
    nextButton.classList.remove("hidden");
});

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "کھیل ختم!";
        answerInput.classList.add("hidden");
        submitButton.classList.add("hidden");
        nextButton.classList.add("hidden");
        resultElement.textContent = "";
    }
});

showQuestion();
