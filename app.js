document.addEventListener('DOMContentLoaded', () => {
  const cardsArray = [
    {
      name: 'Black-Sea-Pirates',
      img: 'images/Black-Sea-Pirates.png',
    },
    {
      name: 'Black-Sea-Pirates',
      img: 'images/Black-Sea-Pirates.png',
    },
    {
      name: 'Blagoevgrad-Griffins',
      img: 'images/Blagoevgrad-Griffins.png',
    },
    {
      name: 'Blagoevgrad-Griffins',
      img: 'images/Blagoevgrad-Griffins.png',
    },
    {
      name: 'Gridiron-Bulgaria',
      img: 'images/Gridiron-Bulgaria.png',
    },
    {
      name: 'Gridiron-Bulgaria',
      img: 'images/Gridiron-Bulgaria.png',
    },
    {
      name: 'Shumen-Brewers',
      img: 'images/Shumen-Brewers.png',
    },
    {
      name: 'Shumen-Brewers',
      img: 'images/Shumen-Brewers.png',
    },
    {
      name: 'Sofia-Bears',
      img: 'images/Sofia-Bears.png',
    },
    {
      name: 'Sofia-Bears',
      img: 'images/Sofia-Bears.png',
    },
    {
      name: 'Sofia-Bulldozers',
      img: 'images/Sofia-Bulldozers.png',
    },
    {
      name: 'Sofia-Bulldozers',
      img: 'images/Sofia-Bulldozers.png',
    },
    {
      name: 'Sofia-Knights',
      img: 'images/Sofia-Knights.png',
    },
    {
      name: 'Sofia-Knights',
      img: 'images/Sofia-Knights.png',
    },
    {
      name: 'Varna-Sharks',
      img: 'images/Varna-Sharks.png',
    },
    {
      name: 'Varna-Sharks',
      img: 'images/Varna-Sharks.png',
    },
  ];

  cardsArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('You have clicked the same image!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardsArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
