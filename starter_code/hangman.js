var hangman;
function Hangman() {
  this.words = ["perro", "gato", "amsterdam", "murcielago", "conejo"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}
Hangman.prototype._getWord = function () {
   return this.words[Math.floor(Math.random() * this.words.length)];
};
Hangman.prototype._checkIfLetter = function(keyCode) {
   return ( keyCode >= 60 && keyCode <=90);
};
Hangman.prototype._checkClickedLetters = function(key) {
  
};
Hangman.prototype._addCorrectLetter = function(i){
};
Hangman.prototype._addWrongLetter = function (letter){
};
Hangman.prototype._checkGameOver = function() {
};
Hangman.prototype._checkWinner = function() {
};
document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};
document.onkeydown = function(e) {
};
