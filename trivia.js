//code multiple choice drink questions and answers
//code fill-in questions and answers
//source simplestepcode.com and "A Smarter Way to Learn Javascript" By Mark Myers
//some questions from https://www.ultimatequizquestions.com/alcohol-trivia-questions/
// code to select the quiz elements

const quizContiner = document.getElementById('quiz');
const resultsConatiner = document.getElementById('results');
const submitButton = document.getElementById('submit');

//functions to build quiz
function buildQuiz (){
    const output = [];
}
myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question
            )
        }
    }
)
function showResults(){}

buildQuiz ();

submitButton.addEventListener('click', showResults);

//Questions and Answers
const myQuestions = [
    {
        question: "When was the earliest alcoholic beverage made?",
        answers: {
            a: "7000–6600 BCE",
            b: "1620-1700",
            c: "1800-1900"
        },
        correctAnswer: "a"
    },
    {
        question: "What ingredients make up a Screwdriver?",
        answers: {
            a: "Rosé and orange liquor",
            b: "Gin and orange juice",
            c: "Vodka and orange juice"
        },
         correctAnswer: "c"
    },
    {
        question: "Which popular cocktail is made using these ingredients: tequila, vodka, light rum, orange liqueur and cola? ",
        answers: { 
            a: "Long Island Iced Tea",
            b: "Grasshopper",
            c: "Cosmopolitan"
        },
        correctAnswer: "a"
    }
];

