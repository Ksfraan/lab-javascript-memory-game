const cards = [
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' },
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
    let html = '';

    const myCardsArray = memoryGame.cards;
    const shuffledCards = memoryGame.shuffleCards(myCardsArray);

    shuffledCards.forEach((card) => {
        html += `
        <div class="card" data-card-name="${card.name}">
          <div class="back" name="${card.img}"></div>
          <div class="front" style="background: url(img/${card.img}) no-repeat"></div>
        </div>
      `;
    });

    // Add all the divs to the HTML
    document.querySelector('#memory-board').innerHTML = html;

    document.getElementById('pairs-clicked').innerHTML =
        memoryGame.pairsClicked;

    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('turned');
            memoryGame.pickedCards.push(card.getAttribute('data-card-name'));
            console.log('Card clicked:', card);
        });
    });

    memoryGame.checkIfPair(
        memoryGame.pickedCards[0],
        memoryGame.pickedCards[1]
    );
    memoryGame.checkIfFinished();
});
