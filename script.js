console.log("Script started");

/* Questions objects should be formatted like this:
{
    question: "What is the capital of Arizona?",
    option1: "Tucson",
    option2: "Phoenix",
    option3: "Yuma",
    option4: "Flagstaff",
    answer: "Phoenix"
}
*/

// TODO: Create an array of objects to store the questions, options, and answer
let questions = [
    {
        Question: "What is the capital of Arizona?",
        Option1: "Tucson",
        Option2: "Phoenix",
        Option3: "Nogales",
        Option4: "Flagstaff",
        Answer: "Phoenix"
    },
    {
        Question: "What is the stupid number that kids are obsessed with?",
        Option1: "41",
        Option2: "21",
        Option3: "69",
        Option4: "67",
        Answer: "67"
    }
]

// TODO: Declare an empty array that will hold the user's answers
let userAnswers = [];

// TODO: Declare a variable to keep track of which question (index) we are on
let index = 0;

function showNextQuestion() {
    // TODO: Get the current question
    let question = questions[index];

    // TODO: Set the text of the question element
    let questionElem = document.getElementById("question");
    questionElem.innerText = question.Question;

    // TODO: Set the text of each option element
    let option1Text = document.getElementById("option1text");
    option1Text.innerText = question.Option1;

    let option2Text = document.getElementById("option2text");
    option2Text.innerText = question.Option2;

    let option3Text = document.getElementById("option3text");
    option3Text.innerText = question.Option3;

    let option4Text = document.getElementById("option4text");
    option4Text.innerText = question.Option4;
}

// TODO: Call showNextQuestion to load the first question when the page loads
showNextQuestion();

function submitAnswer(event) {
    console.log("Submit clicked");
    // TODO: Prevent the form from reloading the page
    event.preventDefault();

    // Get the radio button input elements
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    // TODO: Get the current question
    let question = questions[index];

    // TODO: Use a conditional (if/else-if) to check which option was clicked and push the option text into the userAnswer array
    if (option1.checked) {
        console.log("Option 1 Picked");
    }
    // TODO: Add one to the question index

    // TODO: Load the next question
}

function checkAnswers() {
    // TODO: Iterate through the user answers array and count how many are correct

    // TODO: Show an alert to the user with how many they got right out of the total

    // TODO: Reset and start over
}