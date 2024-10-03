const questions = [
    {
        question: "What is the past tense of 'go'?",
        options: ["Go", "Goes", "Went", "Going"],
        answer: "Went"
    },
    {
        question: "Choose the correct sentence:",
        options: ["She don’t like ice cream.", "She doesn't like ice cream.", "She doesn't likes ice cream.", "She don't likes ice cream."],
        answer: "She doesn't like ice cream."
    },
    {
        question: "Which is a noun?",
        options: ["Quickly", "Happy", "Dog", "Running"],
        answer: "Dog"
    },
    {
        question: "Fill in the blank: I ___ swimming every Saturday.",
        options: ["am", "is", "are", "was"],
        answer: "am"
    },
    {
        question: "Identify the correct future tense: 'They ___ to the park tomorrow.'",
        options: ["go", "going", "will go", "gone"],
        answer: "will go"
    },
    {
        question: "Which sentence is correct?",
        options: ["He run fast.", "He runs fast.", "He running fast.", "He runned fast."],
        answer: "He runs fast."
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
        resultContainer.innerHTML = `<p>Correct!</p>`;
    } else {
        resultContainer.innerHTML = `<p>Wrong! The correct answer was: ${correctAnswer}</p>`;
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
