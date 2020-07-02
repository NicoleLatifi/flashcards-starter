class Deck {
  constructor(cards) {
    this.cards = [];
    for (let i = 0; i < cards.length; i++) {
      this.cards.push(cards[i]);
    }
  }

  countCards = () => {
    return this.cards.length;
  }
}

module.exports = Deck;
