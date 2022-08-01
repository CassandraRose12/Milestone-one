//code fill-in questions and answers
//source simplestepcode.com and "A Smarter Way to Learn Javascript" By Mark Myers
//some questions from https://www.ultimatequizquestions.com/alcohol-trivia-questions/
//WDS on youtube
//W3 schools
//geeksforGeeks

// code to select the trivia elements
//functions to build trivia

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choiceButtonsElement = document.getElementById('choices-button');

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', buildTrivia);
   
   function buildTrivia(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()

    }

    function nextQuestion(){
        showQuestion(shuffledQuestions[currentQuestionIndex])


    }
    function showQuestion(question){
        console.log(question.choices, 'line 37');
        questionElement.innerText = question.question;
        question.choices.forEach(choice => {
            choiceButtons(choice);
        })
    }

    function choiceButtons(text) {
        const button = document.createElement('button');
            button.innerText = text
            button.classList.add('button')
            button.addEventListener('click', function() {
                console.log('clicked');
            })
            choiceButtonsElement.append(button);
    }
    function resetQuestion() {
        nextButton.add('hide')
       while (choiceButtonsElement.firstChild)
       choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)

       }
    

    function selectChoices(e){
        const selector = e.target
        const correct = selector.dataset.correct
        setStatusClass(document.body.correct);
        Array.from(choiceButtonsElement.children).forEach((button) => {
            setStatusClass(button,button.dataset.correct);
        })
    
    function setStatusClass(element, correct){
        clearStatusClass(element);
        
    } 

    }
    //Questions and Answers\
    var userChoices = document.getElementsByTagName('input[type:radio]');
    let currentQuestion = 0;
    let score = 0;
    var questions = [
        { 
            question: 'When was the earliest alcoholic beverage made?',
            choices: ["7000–6600 BCE", "1620-1700", "1800-1900"],
            correctAnswer: 1
        
        },
        {
            question: "What ingredients make up a Screwdriver?",
            choices: ["Rosé and orange liquor", "Gin and orange juice", "Vodka and orange juice"],
             correctAnswer: 3
        },
        {
            question: "Which popular cocktail is made using these ingredients: tequila, vodka, light rum, orange liqueur and cola? ",
            choices: ["Long Island Iced Tea", "Grasshopper", "Cosmopolitan"],
            correctAnswer: 1
    
        }
    ];

