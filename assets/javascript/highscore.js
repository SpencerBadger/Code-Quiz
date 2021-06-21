const clearEl = document.getElementById('clear-highscores');
const Rank = document.getElementById('rank');
const sTable = document.getElementById('scoreTable');
const pName = document.getElementById('playerName');



clearEl.addEventListener('click', clearHighScore);

function clearHighScore() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
}

displayScore();


function displayScore() {

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
        return a - b;
    });
    highscores.forEach(function(score) {
        console.log(highscores);

        let count = 1;

        count + " " + score.name + " " + score.playerScores
        count++

        for (i = 0; i <= highscores.length; i++) {
            // console.dir(highscores[i].name);
            // console.dir(highscores[i].playerName);
            var nameInfo = highscores[i].name;
            var scoreInfo = highscores[i].playerName;
            var liOne = document.createElement('li');
            var ulOne = pName;
            pName.appendChild(liOne);
            liOne.innerHTML = nameInfo;
            var liTwo = document.createElement('li');
            var ulTwo = sTable;
            sTable.appendChild(liTwo);
            liTwo.innerHTML = scoreInfo;
            // var liThree = document.createElement('li');
            // var ulThree = Rank;
            // Rank.appendChild(liThree);
            // liThree.innerHTML = counter;

        }
    })
}



const hsCont = document.getElementById('hs-container');

// window.onload = function() {

//     if (highscores = JSON.parse(window.localStorage.getItem("highscores"))) {
//         console.log('information present');
//         hsContainer.classList.remove('hide');
//         displayScore();
//     } else {
//         const Cont = document.getElementById('no-score');
//         Cont.classList.remove('.hide');
//         hsCont.classList.add('.hide');
//     }
// }



// function highScore(){
//     highScoreT.classList.add('hide');
// }