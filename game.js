const gameSummary = {
    numbers: 0,
    wins: 0,
    losses : 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

const hands = [...document.querySelectorAll(".select img")];

// First function
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
    console.log(game.playerHand);
}
hands.forEach(hand => hand.addEventListener('click', handSelection));


function aiChoice() {
    const aiHand = hands[Math.floor(Math.random()*3)].dataset.option;
    return aiHand;
    } 

function checkResult (player, ai) {
    if(player === ai){
        return 'draw';
    } else if((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper" )){
        return "You win";
    } else {
        return "You loss";
    }
    
}

function publishResult(player, ai, result) {
 document.querySelector('[data-summary="your-choice"]').textContent = player;
 document.querySelector('[data-summary="ai-choice"]').textContent = ai;

 document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

 if(result === "You win") {
    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = 'You win :)';
    document.querySelector('[data-summary="who-win"]').style.color = 'green';
 } else if (result === "You loss") {
    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent = 'You loss :(';
    document.querySelector('[data-summary="who-win"]').style.color = 'red';
 } else {
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = 'Is draw :/';
    document.querySelector('[data-summary="who-win"]').style.color = 'orange';
 }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";

}
// Function start game
function startGame(){
    if(!game.playerHand) return alert("Select Hand")
    game.aiHand = aiChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log (gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
    
};


document.querySelector('.start').addEventListener('click', startGame);

