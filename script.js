'use strict';
//jesli chcemy testowac grę i zmiany w grze to można uncomment 11 linijkę kodu i wtedy secretNumber nie będzie ukryta

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.score').textContent = '19';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const check = function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);

  //   else if (guess === 0) {
  //     document.querySelector('message').textContent =
  //       'Please input number between 1 and 20';
  //   }

  //   else if (guess > 20||guess) {
  //     document.querySelector('.message').textContent = 'Max is 20!';
  //   }

  if (!guess) {
    displayMessage('Please input a number between 1 and 20');
    //document.querySelector('.message').textContent =
    //'Please input a number between 1 and 20';
  } else if (guess != secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('Too high!')
        : displayMessage('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! Press Again to reset');
      document.querySelector('body').style.backgroundColor = '#AD1111';
    }
  }

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     //document.querySelector('.message').textContent = 'Too high!';
  //     displayMessage('Too high!');
  //     score--; //to to samo co jakby zapisać score = score -1
  //
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--; //to to samo co jakby zapisać score = score -1
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  else if (guess === secretNumber) {
    displayMessage('Correct number!!!');
    //document.querySelector('.message').textContent = 'Correct number!!!';
    //let highScore = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  }
};

const again = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';

  //document.querySelector('.number').textContent = secretNumber;
};
document.querySelector('.check').addEventListener('click', check);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    check();
  } else if (e.key === 'Escape') {
    again();
  }
});

document.querySelector('.again').addEventListener('click', again);

// if (!guess) {
//   document.querySelector('.message').textContent =
//     'Please input a number between 1 and 20';
// } else if (guess != secretNumber) {
//   guess > secretNumber
//     ? displayMessage('Too high!')
//     : displayMessage('Too low!');
//   score--;
//   document.querySelector('.score').textContent = score;
// }
