const computerChoiceDisplay = document.getElementsByClassName('computer_choice')[0];
const userChoiceDisplay = document.getElementsByClassName('user_choice')[0];
const resultDisplay = document.getElementsByClassName('result')[0];
const choicesContainer = document.getElementsByClassName('choices_container')[0];
const choices = ["Rock", "Paper", "Scissors"]

let userChoice;
let computerChoice;

const generateComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice = (choices[randomNumber]);
    computerChoiceDisplay.innerHTML = computerChoice;
}

const gameResult = () => {
    switch (true) {
        case computerChoice === userChoice:
            resultDisplay.innerHTML = "It's a draw";
            break;
        case computerChoice === "Paper" && userChoice === "Scissors":
        case computerChoice === "Scissors" && userChoice === "Rock":
        case computerChoice === "Rock" && userChoice === "Paper":
            resultDisplay.innerHTML = "You win!";
            break;
        default:
            resultDisplay.innerHTML = "You lose!";
            break;
    }
};

const gamePlay = () => {
    choices.forEach(option => {
        const button = document.createElement('button');
        button.className = "buttonOption";
        button.textContent = option;
        button.addEventListener('click', (e) => {
            userChoice = e.target.textContent;
            userChoiceDisplay.innerHTML = userChoice;
            generateComputerChoice();
            gameResult();
        });
        choicesContainer.appendChild(button);
    });
};
gamePlay();

