const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const scoreValueElement = document.getElementById("score-value");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", selectOption);
        optionsContainer.appendChild(button);
    });

    // Hide the Next button initially
    nextButton.classList.add("hidden");
}

function selectOption(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is ${correctAnswer}.`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = "";
    nextButton.classList.add("hidden");
    scoreElement.classList.remove("hidden");
    scoreValueElement.textContent = score;

    // Show the Restart button
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    optionsContainer.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.classList.add("hidden");
    showQuestion();
}

// Start the quiz
showQuestion();
