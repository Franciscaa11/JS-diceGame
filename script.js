const player0El = document.querySelector(".player--0 ");
const player1El = document.querySelector(".player--1 ");

// sets players score to 0
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

// hides dice
const diceEl = document.querySelector(".dice");

// button for initial rolling of dice
const btnRoll = document.querySelector(".btn--roll");

// btn hold
const btnHold = document.querySelector(".btn--hold");

// new game
const btnNew = document.querySelector(".btn--new");

// current score
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

let scores, currentScore, activePlayer, playGame;

const inti = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");

  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playGame = true;

  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};

inti();

// switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playGame) {
    diceEl.classList.remove("hidden");

    // get random numbers
    const dice = Math.floor(Math.random() * 6) + 1;

    // display dice images
    diceEl.src = `./Images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      // current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playGame) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playGame = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", inti);
