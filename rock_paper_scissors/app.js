document.addEventListener("DOMContentLoaded", () => {
    const computerChoiceDisplay = document.getElementsByClassName('computer_choice')[0];
    const userChoiceDisplay = document.getElementsByClassName('user_choice')[0];
    const resultDisplay = document.getElementsByClassName('result')[0];
    const buttons = document.querySelectorAll('button');
    const choices = ["Rock", "Paper", "Scissors"]

    let userChoice;
    let computerResult;

    const generateComputerChoice = () =>{
        const computerChoice = Math.floor(Math.random() * choices.length);
        computerResult = (choices[computerChoice]);
        computerChoiceDisplay.innerHTML = computerResult;
    }

    const gameResult = () =>{
        if (computerResult === userChoice){
            resultDisplay.innerHTML = "Its a draw"
        } else if(computerResult === "Paper" && userChoice === "Scissors"){
            resultDisplay.textContent = "You lose!"
        } else if(computerResult === "Scissors" && userChoice === "Paper"){
            resultDisplay.innerHTML = "You win!"
        } else if(computerResult === "Scissors" && userChoice === "Rock"){
            resultDisplay.innerHTML = "You win!"
        } else if(computerResult === "Rock" && userChoice === "Paper"){
            resultDisplay.innerHTML = "You win!"
        } 
    }

    buttons.forEach((button) =>{
        button.addEventListener('click', (e)=>{
            userChoice = e.target.textContent;
            userChoiceDisplay.innerHTML = userChoice;
            generateComputerChoice();
            gameResult();
        })
    })
})