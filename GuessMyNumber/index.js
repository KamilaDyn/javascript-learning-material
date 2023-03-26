'use strict';
const randomNumber = Math.trunc(Math.random() * 20) + 1,
  checkBtn = document.querySelector('.check'),
  scoreMsg = document.querySelector('.score');

let highscore = 0,
  secretNumber = randomNumber,
  score = 10;
const scoreField = scoreMsg.textContent;
const body = color => {
  document.querySelector('body').style.backgroundColor = color;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const hightScore = score => {
  document.querySelector('.highscore').textContent = score;
};
const scoreInfo = score => {
  scoreMsg.textContent = score;
};
const guessNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = guess;
  if (!guess) {
    displayMessage('no number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    body('#60b347');
    secretNumber = randomNumber;
    if (score > highscore) {
      highscore = score;
      hightScore(highscore);
    }
  } else if (guess > secretNumber) {
    displayMessage('To hight');
    score--;
    scoreInfo(score);
  } else if (guess < secretNumber) {
    displayMessage('To low');
    score--;
    scoreInfo(score);
  }

  if (score <= 0) {
    displayMessage('Game over');
    checkBtn.disabled = true;
    checkBtn.style.backgroundColor = 'red';
  }
};

const startAgain = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  body('#222');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
};

document.querySelector('.check').addEventListener('click', guessNumber);

document.querySelector('.again').addEventListener('click', startAgain);
