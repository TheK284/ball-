let homescore = 0
let guestscore = 0

function add(team,point){
    if(team == 'h'){
        homescore +=point
        document.getElementById("score-home").textContent = homescore
    }
    else{
        guestscore +=point
        document.getElementById("score-guest").textContent = guestscore
    }
}
function reset() {
    homescore = 0
    guestscore = 0
    document.getElementById("score-home").textContent = homescore;
    document.getElementById("score-guest").textContent = guestscore;
}
