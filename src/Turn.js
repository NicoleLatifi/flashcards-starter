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

  evaluateGuess() {
    console.log("CARD IN EVALUATEGUESS: ", this.card);
    return this.guess === this.card.correctAnswer;
  }

  giveFeedback() {
    console.log("CARD IN GIVEFEEDBACK: ", this.card)
    if (this.evaluateGuess() === true) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}


module.exports = Turn;
