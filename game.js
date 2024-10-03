const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "Nauru", "Malta"],
        answer: "Vatican City"
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const resultContainer = document.getElementById("result");
    const nextButton = document.getElementById("nextButton");

    if (selectedOption === correctAnswer) {
        resultContainer.innerHTML = `<p>Correct!</p><img src="gift.png" alt="Gift">`;
    } else {
        resultContainer.innerHTML = `<p>Wrong answer! The correct answer was: ${correctAnswer}</p>`;
    }

    resultContainer.classList.remove("hidden");
    nextButton.classList.remove("hidden");
}

document.getElementById("nextButton").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById("result").classList.add("hidden");
        document.getElementById("nextButton").classList.add("hidden");
        displayQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Complete!";
        document.getElementById("options").innerHTML = '';
        document.getElementById("result").classList.add("hidden");
        document.getElementById("nextButton").classList.add("hidden");
    }
});

// Start the quiz
displayQuestion();
