const questions = [
    {
        question: "What does CEO stand for?",
        options: ["Chief Executive Officer", "Chief Energy Officer", "Chief Engineering Officer"],
        answer: 0
    },
    {
        question: "Which company is known for its electric cars?",
        options: ["Ford", "Tesla", "General Motors"],
        answer: 1
    },
    {
        question: "What is the primary purpose of advertising?",
        options: ["To sell products", "To inform customers", "To create brand awareness"],
        answer: 0
    },
    {
        question: "What is a market economy?",
        options: ["An economy controlled by the government", "An economy where prices are determined by supply and demand", "An economy based on barter"],
        answer: 1
    },
    {
        question: "Which of these is a common financial statement?",
        options: ["Balance Sheet", "Profit Statement", "Sales Report"],
        answer: 0
    }
];

let currentQuestion = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");

function showQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";
    current.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsElement.appendChild(button);
    });
    nextButton.classList.add("hidden");
    resultElement.classList.add("hidden");
}

function selectOption(index) {
    const current = questions[currentQuestion];
    if (index === current.answer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong! The correct answer is: " + current.options[current.answer];
    }
    resultElement.classList.remove("hidden");
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        nextButton.classList.add("hidden");
        resultElement.textContent = "";
    }
});

showQuestion();
