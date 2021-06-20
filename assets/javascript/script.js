const startBtnEl = document.getElementById('start-button');
const nextBtnEl = document.getElementById('next-button');
const endBtnEl = document.getElementById('end-button');
const questionContEl = document.getElementById('question-container');
let randomQuestion;
let questionArray;
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer-buttons');

/*Questions array*/
const questions = [{
        question: "Commonly used data types DO NOT include: ",
        answers: [
            { text: "Strings", correct: false },
            { text: "Booleans", correct: false },
            { text: "Alerts", correct: true },
            { text: "Numbers", correct: false },
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "Parantheses", correct: true },
            { text: "square brackets", correct: false },
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            { text: "Numbers and Strings", correct: false },
            { text: "Other arrays", correct: false },
            { text: "Booleans", correct: false },
            { text: "All of the above.", correct: true },
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: [
            { text: 'Javascript', correct: false },
            { text: 'Terminal / Bash', correct: false },
            { text: 'For Loops', correct: false },
            { text: 'console.log', correct: true },
        ]
    },
]

nextBtnEl.classList.add('hide');
endBtnEl.classList.add('hide');
startBtnEl.addEventListener('click', startGame);
nextBtnEl.addEventListener('click', () => {
        questionIndex++;
        NextQuestion();
    })
    /*nextBtnEl.addEventListener('click',);
    ;*/

/* Start Game Function*/
function startGame() {
    startBtnEl.classList.add('hide');
    questionContEl.classList.remove('hide');
    randomQuestion = questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    NextQuestion();
    timeDisplay();
    timeCycle();
};
/*Next Question Function*/
function NextQuestion() {
    resetAns()
    showQuest(randomQuestion[questionIndex]);
};
/*Function to show questions*/
function showQuest(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerEl.appendChild(button);
    })
}
/*Function to reset card in between questions*/
function resetAns() {
    nextBtnEl.classList.add('hide');
    endBtnEl.classList.add('hide');
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
        (answerEl.firstChild);
    }
}
let cardScore = 0;
/*Function to get next question and/or show the next or end button*/
function selectAnswer(e) {
    const choiceBut = e.target;
    const correctCheck = choiceBut.dataset.correct;
    Array.from(answerEl.children).forEach(button => {
            setStatus(button, button.dataset.correct);
        })
        /*Adding score points for each correct answer */
    if (correctCheck) {
        cardScore += 5;
        /* Will remove 5 seconds from clock if incorrect answer. */
    } else {
        time -= 5;
    }
    if (randomQuestion.length > questionIndex + 1) {
        nextBtnEl.classList.remove('hide');
    } else {
        endBtnEl.classList.remove('hide');

    }
};
/*Function to highlight the correct answers*/
function setStatus(element, correct) {
    clearStatusEl(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
};

function clearStatusEl(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
};

/* Time */
const TIME_REMAINING = document.getElementById("time-remaining");
let time = 30;
let totalTimeInterval;
let choiceStatusTimeout;
/*Function for counting down the time which was initialized at 30 seconds.*/
function timeCycle() {
    totalTimeInterval = setInterval(function() {
        time--;
        timeCheck();
        timeDisplay();
    }, 1000);
}
/*Will end game if time reduces to zero.*/
function timeCheck() {
    if (time <= 0) {
        time = 0;
        endGame();
    }
}

function timeDisplay() {
    TIME_REMAINING.textContent = time;
}
/* Section for ending the game and then submitting the score to local storage.*/
const gameEnd = document.getElementById("end-of-game");
const title = document.getElementById("title-End");
const playerScore = document.getElementById("result");
const playerName = document.getElementById("name");
const scoreSubmit = document.getElementById("submit");
const errorMsg = document.getElementById("error");
const questElement = document.getElementById('question-container');


/*End Game Functions*/
function endGame() {
    displayScore();
    endHeadingSet();
    nextBtnEl.classList.add('hide');
    endBtnEl.classList.add('hide');
    questElement.classList.add('hide');
}

/* Will display score at end, combination of time and points for cards.*/
function displayScore() {
    playerScore.textContent = cardScore + time;

}

function endHeadingSet() {
    questionEl.classList.add('hide');
    gameEnd.classList.remove('hide');
}


endBtnEl.addEventListener('click', endGame);
const containerEl = document.getElementById('container');

scoreSubmit.addEventListener('click', submitScore);

function submitScore() {
    const name = document.getElementById('player-name').value.toUpperCase();
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var playerScores = cardScore + time;
    var newScore = { name: name, score: playerScores };

    highscores.push({ name: name, playerName: playerScores });
    localStorage.setItem("highscores", JSON.stringify(highscores));
    scoreSubmit.addEventListener('click', location.reload());


}