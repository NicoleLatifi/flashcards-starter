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
    return this.guess === this.card.correctAnswer
  }

  giveFeedback() {
    // console.log(this.evaluateGuess())

    // console.log("THIS.GUESS IS ", this.guess)
    // console.log("THIS.CARD.CORRECTANSWER IS ", this.card.correctAnswer)

    if (this.evaluateGuess() === true) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}


module.exports = Turn;
