class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }

    shuffleCards(cards) {
        if (!this.cards) {
            return undefined;
        }
        for (let i = this.cards.length - 1; i > 0; i--) {
            const shuffle = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[shuffle];
            this.cards[shuffle] = temp;
        }
        return cards;
    }
    checkIfPair(card1, card2) {
        this.pairsClicked += 1;
        if (card1 === card2) {
            this.pairsGuessed += 1;
            return true;
        }
        return false;
    }

    checkIfFinished() {
        if (this.pairsGuessed === this.cards.length / 2) {
            return true;
        }
        return false;
    }
}
