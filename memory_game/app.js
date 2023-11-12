const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
    },
    {
        name: 'milk-shake',
        img: 'img/milk-shake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
    },
    {
        name: 'milk-shake',
        img: 'img/milk-shake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());

const gridDIisplay = document.getElementById('grid');
console.log(cardArray.length);

document.addEventListener('DOMContentLoaded', () =>{

const cardChosen = [];

const createBoard = () =>{
    for (let i = 0; i < 10; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDIisplay.appendChild(card);
        console.log(card, i);
    }
}

createBoard();

const checkMatch = () =>{
    if(cardChosen[0] == cardChosen[1])
    console.log("check for match!");
}

function flipCard (){
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2){
        setTimeout(() => {
            checkMatch;
        }, 500);
    }
    console.log(cardChosen);
}

flipCard();

})