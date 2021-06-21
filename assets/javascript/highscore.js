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
        return b.playerName - a.playerName;
    });
    highscores.forEach(function(score) {
        console.log(highscores);

        for (i = 0; i <= highscores.length; i++) {
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


        }
    })
}