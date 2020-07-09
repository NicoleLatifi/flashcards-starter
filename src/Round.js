const Turn = require('../src/Turn'); //new

class Round{
  constructor(deck) {
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
  }

  returnCurrentCard = () => {
    return this.currentCard;
  }

  takeTurn = (guess) => { //removed deck and turn parameter, changed to guess
    const turn = new Turn(guess, this.returnCurrentCard()); //new
    this.turns++;
    // this.currentCard = deck.cards[this.turns]; //this was meant to change the currentCard, but deck is no longer a parameter
    turn.card = this.currentCard;
    turn.evaluateGuess();
    if (turn.guess !== turn.card.correctAnswer) {
      this.incorrectGuesses.push(this.turns);
    };
    turn.giveFeedback();
    console.log('THE FEEDBACK IS: ', turn.giveFeedback());
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
