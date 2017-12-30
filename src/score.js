const Score = function(){
  this.score = 0;
}

Score.prototype.forEveryOccurrence = function(scoreToAdd) {
  this.scoreToAdd = scoreToAdd;
  return;
};

Score.prototype.updateScore = function() {
  return this.score += this.scoreToAdd;
};
