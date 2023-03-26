'use strict';

const player0El = document.querySelector('.player--0'),
  player01El = document.querySelector('.player--1'),
  score0El = document.getElementById('score--0'),
  score1El = document.getElementById('score--1'),
  current0El = document.getElementById('current--0'),
  current1El = document.getElementById('current--1'),
  btnNew = document.querySelector('.btn--new'),
  btnHold = document.querySelector('.btn--hold'),
  diceEl = document.querySelector('.dice'),
  btnRoll = document.querySelector('.btn--roll');

let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player01El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player01El.classList.remove('player--active');
};
init();
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player01El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `assets/dice-${dice}.png`;

    // rolled 1
    if (dice !== 1) {
      // add dice to current score

      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player is  >=100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to new player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
