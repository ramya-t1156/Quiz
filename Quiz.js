// Quiz data - questions, options, and correct answers
const questions = [
{
question: "1.What is the name of the villain in “The Lion King?",
options: ["Simba", "Mufasa", "Scar", "Timon"],
answer: "Scar"
},
{
question: "2.Which of the following cartoon characters lives under the sea in a pineapple?",
options: ["Squidward", "Mr. Crabs", "SpongeBob SquarePants", "Patrick Star"],
answer: "SpongeBob SquarePants"
},
{
question: "3.The phrase often said by Timon and Pumba, ‘Hakuna matata’, made popular by a song in The Lion King means ‘no worries’ in which language?",
options: ["French", "Hindi", "Spanish", "Swahili"],
answer: "Swahili"
}
];
// DOM elements
const questionElement = document.getElementById('question');
const optionsList = document.getElementById('options-list');
const answerForm = document.getElementById('answer-form');
const resultElement = document.getElementById('result');
let currentQuestion = 0;
let score = 0;
// Function to load a question and its options
function loadQuestion() {
const currentQuizData = questions[currentQuestion];
questionElement.textContent = currentQuizData.question;
// Clear previous options
optionsList.innerHTML = "";
currentQuizData.options.forEach(option => {
const li = document.createElement("li");
const label = document.createElement("label");
const radioInput = document.createElement("input");
radioInput.type = "radio";
radioInput.name = "answer";
radioInput.value = option;
label.appendChild(radioInput);
label.appendChild(document.createTextNode(option));
li.appendChild(label);
optionsList.appendChild(li);
});
}
// Function to check the selected answer and update score
function checkAnswer(answer) {
if (answer === questions[currentQuestion].answer) {
score++;
}
currentQuestion++;
if (currentQuestion < questions.length) {
loadQuestion();
} else {
showResult();
}
}
// Function to display the final result
function showResult() {
answerForm.style.display = 'none';
resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
}
// Load the first question when the page loads
loadQuestion();
// Event listener for form submission
answerForm.addEventListener('submit', function(event) {
event.preventDefault();
const selectedAnswer = document.querySelector('input[name="answer"]:checked');
if (!selectedAnswer) {
alert('Please select an answer');
return;
}
const userAnswer = selectedAnswer.value;
checkAnswer(userAnswer);
});