const clearEl = document.getElementById('clear-highscores');
const Rank = document.getElementById('rank');
const sTable = document.getElementById('scoreTable');
const pName = document.getElementById('playerName');

displayScore();
clearEl.onclick = clearHighScore;

function clearHighScore() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
}

function displayScore() {

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
        return a - b;
    });
    highscores.forEach(function(score) {
        console.log(highscores);

        let count = 1;
        //create litag
        //set text content
        count + " " + score.name + " " + score.playerScores
        count++
        //get the ol tag
        //append the li tag in the ol

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


const highScoreT = document.getElementById('highscores-table');
const hsContainer = document.getElementById('hs-container');

window.onload = function() {

    if (highscores = JSON.parse(window.localStorage.getItem("highscores"))) {
        console.log('information present');
        hsContainer.classList.remove('hide');
        displayScore();
    } else {
        const Cont = document.getElementById('no-score');
        Cont.classList.remove('hide');
    }
}

// function highScore(){
//     highScoreT.classList.add('hide');
// }