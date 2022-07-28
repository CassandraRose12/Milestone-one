//code multiple choice drink questions and answers
//code fill-in questions and answers
//source simplestepcode.com and "A Smarter Way to Learn Javascript" By Mark Myers
//some questions from https://www.ultimatequizquestions.com/alcohol-trivia-questions/
// code to select the quiz elements
//functions to build quiz
(function(){
function buildQuiz (){
    const output = [];
myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
            </div>`
        );
    }
);
quizContiner.innerHTML = output.join('');
}

//function to show and track results
function showResults(){
 const answerConatiner =quizContiner.querySelectorAll('.answers');
 let numCorrect = 0;
//identify answer
 myQuestions.forEach((currentQuestion, questionNumber) => {
  const answerConatiner = answerConatiners[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerConatiner.querySelector(selector)|| {}).value;
  //the reason for || and {} is to allow a question to remain blank without causing an error and just be undefined
  if(userAnswer === currentQuestion.correctAnswer){
     numCorrect++;
      answerConatiners[questionNumber].style.color = 'pink';     
    }
    else{
      answerConatiners[questionNumber].style.color = 'lightblue';  
    }
    });
//Show answer results
resultsConatiner.innerHTML = `${numCorrect} out of ${myQuestions.legth}`;
}
const quizContiner = document.getElementById('quiz');
const resultsConatiner = document.getElementById('results');
const submitButton = document.getElementById('submit');
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
buildQuiz();
//Event Listeners
    submitButton.addEventListener('click', showResults);
})();

