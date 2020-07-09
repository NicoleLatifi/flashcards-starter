const Turn = require('../src/Turn'); //new

class Round{
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
  }

  returnCurrentCard = () => {
    return this.deck.cards[this.turns];
  }

  takeTurn = (guess) => {
    const turn = new Turn(guess, this.returnCurrentCard());
    console.log("CARD ARGUMENT IS: ", this.returnCurrentCard());
    this.turns++;
    // turn.evaluateGuess();
    // if (turn.guess !== turn.card.correctAnswer) {
    //   this.incorrectGuesses.push(this.turns);
    // };
    return turn.giveFeedback();
  }

  calculatePercentCorrect = () => {
    let numberOfCorrectGuesses = this.turns - this.incorrectGuesses.length;
    this.percentCorrect = numberOfCorrectGuesses / this.turns * 100;
    return this.percentCorrect;
  }

  endRound = () => {
    console.log(`** Round over! ** You answered ${this.percentCorrect}% of the questions correctly`)
  }
}

module.exports = Round;
