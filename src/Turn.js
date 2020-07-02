class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess(round) {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      // round.incorrectGuesses.push(this.guess);
      return false;
    }
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}


module.exports = Turn;
