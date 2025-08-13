let choices = document.querySelectorAll(".option");
let userScoreMsg = document.querySelector("#user-score")
let compScoreMsg = document.querySelector("#computer-score")
let msg = document.querySelector(".result")


let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
      choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            console.log("User Choice: " + choice.getAttribute("id"));
            game(userChoice);
      })
})

const getCompChoice = () => {
      const options = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * 3);
      console.log("Comp Choice: " + options[randomIndex])
      return options[randomIndex];
}

const showWinner = (userWin, userChoice, compChoice) => {
      console.log(userWin);
      if (userWin) {
            userScore++;
            userScoreMsg.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
      } 
      else {
            compScore++;
            compScoreMsg.innerText = compScore;
            msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
      }
}

const game = (userChoice) => {
      const compChoice = getCompChoice();

      if (userChoice == compChoice) {
            msg.innerText = `Its a Draw!`;
            msg.style.backgroundColor = "gray";
      }
      else {
            let userWin = true;
            if (userChoice == "rock") {
                  userWin = compChoice === "paper" ? false : true;
            }
            else if (userChoice == "paper") {
                  userWin = compChoice === "scissors" ? false : true;
            }
            else {
                  userWin = compChoice === "scissors" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice)
      }
};
