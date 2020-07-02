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

  takeTurn = (turn, deck) => {
    this.turns++;
    this.currentCard = deck.cards[this.turns];
    turn.card = this.currentCard;
    turn.evaluateGuess();
    if (turn.guess !== turn.card.correctAnswer) {
      this.incorrectGuesses.push(this.turns);
    };
    turn.giveFeedback();
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
