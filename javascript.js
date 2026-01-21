let computerwin = 0;
let humanwin = 0;
let competitiondone=0;
const container = document.querySelector("#results");
const heading = document.getElementById('updates');
const result = document.getElementById('results')
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (competitiondone === 1 && humanChoice !== "reset") {
        console.log("rounds done.");
        return;
    }
    if (humanChoice === computerChoice) {
        heading.textContent = `Tie! Computer: ${computerwin} Human: ${humanwin}. No one get Points`;
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanwin++;
        heading.textContent = `Human wins the round! Computer: ${computerwin} Human: ${humanwin}`;
    }
    else if(humanChoice==="reset"){
        humanwin=0;
        computerwin=0;
        competitiondone=0;
        heading.textContent="Match Has Been Reset.";
        result.textContent="";
    } 
    else {
        computerwin++;
        heading.textContent = `Computer wins the round! Computer: ${computerwin} Human: ${humanwin}`;
    }

    if (computerwin === 5 || humanwin === 5) {
        competitiondone=1;
        result.textContent =
            computerwin > humanwin
                ? "The winner is the computer!"
                : "The winner is the human!";
        
    }
}

if(competitiondone===0){
    document.querySelector("#btn1").addEventListener("click", () => {
       playRound("rock", getComputerChoice());
    });
    document.querySelector("#btn2").addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    document.querySelector("#btn3").addEventListener("click", () => {
       playRound("scissors", getComputerChoice());
    });
    document.querySelector("#btn4").addEventListener("click", () => {
       playRound("reset", getComputerChoice());
    });
}
else{
    console.log("rounds done.");
}
