document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardsArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
    ]

    cardsArray.sort(() => 0.5 - Math.random());
    
    const grid = document.querySelector('.grid');
    let cardsChosenName = [];
    let cardsChosenId = [];
    let resultDisplay = document.querySelector('#result');
    let cardsWon = [];
    //create board
    let createBoard = () => {
        for(let i = 0; i < cardsArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    createBoard();
    function checkForMatch() {
        let cards = document.querySelectorAll('img');  
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosenName[0] === cardsChosenName[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosenName)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry pictures do not match');
        }
        cardsChosenName = [];
        cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardsArray.length / 2) {
            alert('You have won!')
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosenName.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        if(cardsChosenName.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


})