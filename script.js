const quizDB=[

{
    question: "Q1: HTML stands for?",
    a:"HighText Machine Language",
    b:"HyperText and links Markup Language",
    c:"HyperText Markup Language",
    d:"None of these",
    ans:"ans3"

},

{
    question: "Q2:  Which of the following attribute is used to provide a unique name to an element?",
    a:"class",
    b:"id",
    c:"type",
    d:"None of above",
    ans:"ans2"

},

{
    question: "Q3: The CSS property used to make the text bold is?",
    a:"font-weight : bold",
    b:"weight: bold",
    c:"font: bold",
    d:"style: bold",
    ans:"ans1"

},

{
    question: "Q4: When interpreter encounters an empty statements, what it will do?",
    a:"Shows a warning",
    b:"Prompts to complete the statement",
    c:"Throws an error",
    d:"Ignores the statements",
    ans:"ans4"
},
];
// to update question and answer
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector ('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

// to copy data from script
const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText= questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer =()=> {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
      
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

// Submit event
submit.addEventListener('click', ()=> {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }; 

    questionCount ++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{ 
showScore.innerHTML=`
<h3> Your Score is ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.reload()">Play Again </button>
`;
showScore.classList.remove('scoreArea');
    }
});
