//Array for images
const cardArray = [
  {
    name: "bear",
    img: "images/bear.png",
  },
  {
    name: "fox",
    img: "images/fox.png",
  },
  {
    name: "frog",
    img: "images/frog.png",
  },
  {
    name: "koala",
    img: "images/koala.png",
  },
  {
    name: "uni",
    img: "images/uni.png",
  },
  {
    name: "wolf",
    img: "images/wolf.png",
  },
  {
    name: "hamster",
    img: "images/hamster.png",
  },
  {
    name: "monkey",
    img: "images/monkey.png",
  },
  {
    name: "rabbit",
    img: "images/rabbit.png",
  },
  {
    name: "panda",
    img: "images/panda.png",
  },
  {
    name: "bear",
    img: "images/bear.png",
  },
  {
    name: "fox",
    img: "images/fox.png",
  },
  {
    name: "frog",
    img: "images/frog.png",
  },
  {
    name: "koala",
    img: "images/koala.png",
  },
  {
    name: "uni",
    img: "images/uni.png",
  },
  {
    name: "wolf",
    img: "images/wolf.png",
  },
  {
    name: "hamster",
    img: "images/hamster.png",
  },
  {
    name: "monkey",
    img: "images/monkey.png",
  },
  {
    name: "rabbit",
    img: "images/rabbit.png",
  },
  {
    name: "panda",
    img: "images/panda.png",
  },
];

// Disorder Cards Randomly
cardArray.sort(() => 0.5 - Math.random());

// Variables
const grid = document.querySelector("#grid");
const score = document.querySelector("#score");
const fails = document.querySelector("#fails");
const title = document.querySelector("#title");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let cardsFails = [];

// Create the board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

// Check for matches
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    let matched = document.querySelector("#subtitle");
    matched.innerHTML = "You have clicked the same image!";
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/star.png");
    cards[optionTwoId].setAttribute("src", "images/star.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    let matched = document.querySelector("#subtitle");
    matched.innerHTML = "Nope, try again!";
    cardsFails.push(cardsChosen);
  }

  cardsChosen = [];
  cardsChosenId = [];
  score.textContent = cardsWon.length;
  fails.textContent = cardsFails.length;
  if (cardsWon.length === cardArray.length / 2) {
    title.textContent = "Congratulations! You found them all!";
  }
}

// Flip the card
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();

// Display to black mode
function swishToBlack() {
  let body = document.querySelector("body");
  body.classList.toggle("dark-mode");

  let swish = document.querySelector("#button");
  swish.classList.toggle("dark-mode-button");
}

let button = document.querySelector("#button");
button.addEventListener("click", swishToBlack);
