const cutOff = document.querySelector(".cutoff");
const cutoffSubmitButton = document.querySelector(".cutoff-submition");
const cutOffEntry = document.querySelector(".cutoff-entry");
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");
const turnIndicator = document.querySelector(".turn");
const rollDice = document.querySelector(".roll-dice");
const diceOutput = document.querySelector(".output");
const restartButton = document.querySelector(".restart");
setDisplayOnDom("none", restartButton);
setDisplayOnDom("none", rollDice);
let cutoffScore;
let toss;
let turn;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function getCutoffScore() {
  cutoffScore = cutOffEntry.value;
  setDisplayOnDom("none", cutoffSubmitButton);
  setDisplayOnDom("none", cutOffEntry);
  setValueOnDom(cutoffScore, cutOff);
  setInitialScore();
  setDisplayOnDom("block", rollDice);
}
function setInitialScore() {
  toss = Math.round(Math.random());
  setValueOnDom(0, player1Score);
  setValueOnDom(0, player2Score);
  setTurn(toss);
}
function setTurn(value) {
  turn = value;
  turn === 0
    ? setValueOnDom("player one's turn ", turnIndicator)
    : setValueOnDom("player two's turn ", turnIndicator);
}
function rollthedice() {
  const output = Math.round(Math.random() * 5 + 1);
  setValueOnDom(output, diceOutput);
  addTheScore(output);
  checkScore();
  output !== 6 ? (turn = turn === 0 ? 1 : 0) : turn;
  setTurn(turn);
}
function checkScore() {
  scorePlayer1 >= cutoffScore ? declareWinner(1) : null;
  scorePlayer2 >= cutoffScore ? declareWinner(2) : null;
}
function declareWinner(value) {
  value === 1
    ? setValueOnDom("player one is the  winner", diceOutput)
    : setValueOnDom("player two is the winner ", diceOutput);
  stoptheGame();
}
function addTheScore(value) {
  turn === 0
    ? (scorePlayer1 = scorePlayer1 + value)
    : (scorePlayer2 = scorePlayer2 + value);
  turn === 0
    ? setValueOnDom(scorePlayer1, player1Score)
    : setValueOnDom(scorePlayer2, player2Score);
}
function stoptheGame() {
  setDisplayOnDom("none", rollDice);
  setDisplayOnDom("none", turnIndicator);
  setDisplayOnDom("block", restartButton);
}
function restartGame() {
  setDisplayOnDom("block", turnIndicator);
  setDisplayOnDom("block", cutoffSubmitButton);
  setDisplayOnDom("block", cutOffEntry);
  setDisplayOnDom("none", restartButton);
  setValueOnDom(0, player2Score);
  setValueOnDom(0, player1Score);
  cutOffEntry.value = " ";
  setValueOnDom("", cutOff);
  setValueOnDom("", turnIndicator);
  setValueOnDom("", diceOutput);
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}
function setDisplayOnDom(value, element) {
  element.style.display = value;
}
function setValueOnDom(value, element) {
  element.innerHTML = value;
}
restartButton.addEventListener("click", restartGame);
rollDice.addEventListener("click", rollthedice);
cutoffSubmitButton.addEventListener("click", getCutoffScore);
