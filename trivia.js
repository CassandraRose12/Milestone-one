//code multiple choice drink questions and answers
//code fill-in questions and answers
//source simplestepcode.com and "A Smarter Way to Learn Javascript" By Mark Myers
//some questions from https://www.ultimatequizquestions.com/alcohol-trivia-questions/
//WDS on youtube
//W3 schools
//geeksforGeeks

// code to select the trivia elements
//functions to build trivia

const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', buildTrivia)
   
   function buildTrivia(){
       //console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    nextQuestion()

    }

    function nextQuestion(){


    }

    function selectChoice(){

    }
    //Questions and Answers\
    let currentQuestion = 0
    var questions = [
        {
            "question": 'When was the earliest alcoholic beverage made?',
            "choices": ["7000–6600 BCE", "1620-1700", "1800-1900"],
             "answer": 1
        },
        {
            question: "What ingredients make up a Screwdriver?",
            choices: ["Rosé and orange liquor", "Gin and orange juice", "Vodka and orange juice"],
             answer: 3
        },
        {
            question: "Which popular cocktail is made using these ingredients: tequila, vodka, light rum, orange liqueur and cola? ",
            choices: ["Long Island Iced Tea", "Grasshopper", "Cosmopolitan"],
            answer: 1
    
        }
    ];
    var score = 0;

    //loop through questions 
   for (var i=0; i < questions.length; i++){
         if(results === questions[i].answer){
            score++;
            alert("Correct!");
            } else {
            alert("Wrong!");
         } 

        }  
    alert(score + "/" + questions.length);

