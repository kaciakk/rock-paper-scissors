let score = JSON.parse(localStorage.getItem('score')) || {
wins: 0,
losses: 0,
ties: 0
  };
  updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result='';

    if(playerMove === 'rock'){
        if(computerMove === 'paper'){
            result = 'You lose. :( sadge';
        } else if (computerMove === 'scissors'){
            result = 'You win! :DDD GZ!!!';
        } else if (computerMove === 'rock'){
            result = 'Tie :)';
        }
    }else if (playerMove === 'paper'){
        if(computerMove === 'scissors'){
            result = 'You lose. :( sadge';
        } else if (computerMove === 'rock'){
            result = 'You win! :DDD GZ!!!';
        } else if (computerMove === 'paper'){
            result = 'Tie :)';
        }
    }else if (playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You lose. :( sadge';
        } else if (computerMove === 'paper'){
            result = 'You win! :DDD GZ!!!';
        } else if (computerMove === 'scissors'){
            result = 'Tie :)';
        }
    }
    if (result === "You win! :DDD GZ!!!"){
        score.wins +=1;
    } else if (result === "You lose. :( sadge"){
        score.losses +=1;
    } else if (result === "Tie :)"){
        score.ties +=1;
    }
    const resultElement = document.querySelector('.js-result');
  if (result === "You win! :DDD GZ!!!") {
    resultElement.classList.remove('lose', 'tie');
    resultElement.classList.add('win');
  } else if (result === "You lose. :( sadge") {
    resultElement.classList.remove('win', 'tie');
    resultElement.classList.add('lose');
  } else if (result === "Tie :)") {
    resultElement.classList.remove('win', 'lose');
    resultElement.classList.add('tie');
  }
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;



    /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
}

function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Player: ${score.wins}, Computer: ${score.losses}, Ties: ${score.ties}`;
  }


//losowanie komputera
function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

     if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
         } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
          } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
 }

  return computerMove;
}



