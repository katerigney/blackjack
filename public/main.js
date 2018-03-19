//SHUFFLE///////////////////////////////////////

// Build a deck of 52 cards
let suitOptions = ["hearts", "spades", "clubs", "diamonds"];
let numberOptions = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
let thisDeck = [];
let suitSelected = "";
let numberSelected = "";
let card = [];

const shuffleDeck = () => {
  document.querySelector('.playerButtonOptions').style.visibility = "hidden";
  document.querySelector('.playAgainButton').style.visibility = "hidden";
  // console.log("Button was clicked");
  for (let i = 0; i < suitOptions.length; i++) {
    suitSelected = suitOptions[i];
    // console.log(suitSelected);
    for (let j = 0; j < numberOptions.length; j++) {
      numberSelected = numberOptions[j];
      // console.log(numberSelected);
      card = [suitSelected, numberSelected];
      // console.log(card);
      thisDeck.push(card);
    }
  }
  console.log(thisDeck);
}


//DEAL///////////////////////////////////////


// Tried to use splice to remove played cards from the array (thisDeck) but could not make it work.

let houseHand = [];
let playerHand = [];
let thisDeckPlayedCards = [];

const dealButtonClick = () => {
  for (i = 0; i <= 1; i++) {
    arrayItemPull = [Math.floor(Math.random() * thisDeck.length)]
    // thisDeckPlayedCards=thisDeck.splice(arrayItemPull);
    // thisDeck.splice(arrayItemPull);
    finalCard = thisDeck[arrayItemPull];
    // console.log(thisDeckPlayedCards);
    houseHand.push(finalCard);
  }
  // document.querySelector('#houseDealtCards').textContent = houseHand;
  document.querySelector('#houseDealtCards').textContent = "House Hand";
  console.log(houseHand);
  // // - house cards are hidden until reveal
  for (i = 0; i <= 1; i++) {
    arrayItemPull = [Math.floor(Math.random() * thisDeck.length)];
    finalCard = thisDeck[arrayItemPull];
    playerHand.push(finalCard);
  }
  document.querySelector('#playerDealtCards').textContent = playerHand;
  console.log(playerHand);
  cardValuesAfterDeal();
}


//CARD VALUES AFTER DEAL///////////////////////////////////////

let playerScore = 0;
let houseScore = 0;

let playerScoreTotal = [];
let houseScoreTotal = [];

const cardValuesAfterDeal = () => {
  // playerScoreTotal.length = 0; // won't function when I try to run again
  console.log(playerScoreTotal);
  for (i = 0; i < playerHand.length; i++) {
    if (playerHand[i].includes("ace")) {
      newPlayerScore = playerScore + 11;
    }
    if (playerHand[i].includes("queen")) {
      newPlayerScore = playerScore + 10;
    }
    if (playerHand[i].includes("king")) {
      newPlayerScore = playerScore + 10;
    }
    if (playerHand[i].includes("jack")) {
      newPlayerScore = playerScore + 10;
    }
    if (playerHand[i].includes("2")) {
      newPlayerScore = playerScore + 2;
    }
    if (playerHand[i].includes("3")) {
      newPlayerScore = playerScore + 3;
    }
    if (playerHand[i].includes("4")) {
      newPlayerScore = playerScore + 4;
    }
    if (playerHand[i].includes("5")) {
      newPlayerScore = playerScore + 5;
    }
    if (playerHand[i].includes("6")) {
      newPlayerScore = playerScore + 6;
    }
    if (playerHand[i].includes("7")) {
      newPlayerScore = playerScore + 7;
    }
    if (playerHand[i].includes("8")) {
      newPlayerScore = playerScore + 8;
    }
    if (playerHand[i].includes("9")) {
      newPlayerScore = playerScore + 9;
    }
    if (playerHand[i].includes("10")) {
      newPlayerScore = playerScore + 10;
    }
    playerScoreTotal.push(newPlayerScore);
    console.log(playerScoreTotal);
  }
  for (i = 0; i < houseHand.length; i++) {
    if (houseHand[i].includes("ace")) {
      newHouseScore = houseScore + 11;
    }
    if (houseHand[i].includes("queen")) {
      newHouseScore = houseScore + 10;
    }
    if (houseHand[i].includes("king")) {
      newHouseScore = houseScore + 10;
    }
    if (houseHand[i].includes("jack")) {
      newHouseScore = houseScore + 10;
    }
    if (houseHand[i].includes("2")) {
      newHouseScore = houseScore + 2;
    }
    if (houseHand[i].includes("3")) {
      newHouseScore = houseScore + 3;
    }
    if (houseHand[i].includes("4")) {
      newHouseScore = houseScore + 4;
    }
    if (houseHand[i].includes("5")) {
      newHouseScore = houseScore + 5;
    }
    if (houseHand[i].includes("6")) {
      newHouseScore = houseScore + 6;
    }
    if (houseHand[i].includes("7")) {
      newHouseScore = houseScore + 7;
    }
    if (houseHand[i].includes("8")) {
      newHouseScore = houseScore + 8;
    }
    if (houseHand[i].includes("9")) {
      newHouseScore = houseScore + 9;
    }
    if (houseHand[i].includes("10")) {
      newHouseScore = houseScore + 10;
    }
    houseScoreTotal.push(newHouseScore);
    console.log(houseScoreTotal);
  }
  playerAddTotal(playerScoreTotal);
  houseAddTotal(houseScoreTotal);
}

let playerSum = 0;
let houseSum = 0;

const playerAddTotal = (playerScoreTotal) => {
  for (let i = 0; i < playerScoreTotal.length; i++) {
    playerSum += playerScoreTotal[i];
    console.log(playerSum);
  }
}

const houseAddTotal = (houseScoreTotal) => {
  console.log("Button was clicked");
  for (let i = 0; i < houseScoreTotal.length; i++) {
    houseSum += houseScoreTotal[i];
    console.log(houseSum);
  }
  setTimeout(evalScore, 1000)
}

const evalScore = () => {
  if (houseSum > 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("House busts!")
    console.log("House busts!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (playerSum > 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("Player busts!")
    console.log("Player busts!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (houseSum === 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("House wins!")
    console.log("House wins!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (playerSum === 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("Player wins!")
    console.log("Player wins!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (houseSum === playerSum) {
    alert("It's a draw!")
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else {
    document.querySelector('.playerButtonOptions').style.visibility = "visible";
  }
}


//HIT///////////////////////////////////////

const hitButtonClick = () => {
  // console.log("Button was clicked");
  arrayItemPull = [Math.floor(Math.random() * thisDeck.length)];
  finalCard = thisDeck[arrayItemPull];
  playerHand.push(finalCard);
  document.querySelector('#playerDealtCards').textContent = playerHand;
  console.log(playerHand);
}


//STAY///////////////////////////////////////

const stayButtonClick = () => {
  console.log("Stay button was clicked");
  cardValuesAfterStay();
}


//CARD VALUES AFTER STAY///////////////////////////////////////

let playerScoreAfterStay = 0;
let playerScoreTotalAfterStay = [];

const cardValuesAfterStay = () => {
  playerHand.length === 0;
  for (i = 0; i < playerHand.length; i++) {
    if (playerHand[i].includes("ace")) {
      newPlayerScore = playerScoreAfterStay + 11;
    }
    if (playerHand[i].includes("queen")) {
      newPlayerScore = playerScoreAfterStay + 10;
    }
    if (playerHand[i].includes("king")) {
      newPlayerScore = playerScoreAfterStay + 10;
    }
    if (playerHand[i].includes("jack")) {
      newPlayerScore = playerScoreAfterStay + 10;
    }
    if (playerHand[i].includes("2")) {
      newPlayerScore = playerScoreAfterStay + 2;
    }
    if (playerHand[i].includes("3")) {
      newPlayerScore = playerScoreAfterStay + 3;
    }
    if (playerHand[i].includes("4")) {
      newPlayerScore = playerScoreAfterStay + 4;
    }
    if (playerHand[i].includes("5")) {
      newPlayerScore = playerScoreAfterStay + 5;
    }
    if (playerHand[i].includes("6")) {
      newPlayerScore = playerScoreAfterStay + 6;
    }
    if (playerHand[i].includes("7")) {
      newPlayerScore = playerScoreAfterStay + 7;
    }
    if (playerHand[i].includes("8")) {
      newPlayerScore = playerScoreAfterStay + 8;
    }
    if (playerHand[i].includes("9")) {
      newPlayerScore = playerScoreAfterStay + 9;
    }
    if (playerHand[i].includes("10")) {
      newPlayerScore = playerScoreAfterStay + 10;
    }
    playerScoreTotalAfterStay.push(newPlayerScore);
    console.log(playerScoreTotalAfterStay);
  }
  playerAddTotalAfterStay(playerScoreTotalAfterStay);
}

let playerSumAfterStay = 0;

const playerAddTotalAfterStay = (playerScoreTotalAfterStay) => {
  for (let i = 0; i < playerScoreTotalAfterStay.length; i++) {
    playerSumAfterStay += playerScoreTotalAfterStay[i];
    console.log(playerSumAfterStay);
  }
  setTimeout(evalScoreAfterStay, 1000)
}

const evalScoreAfterStay = () => {
  console.log(houseSum);
  console.log(playerSumAfterStay);
  if (houseSum > 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("House busts!")
    console.log("House busts!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (playerSumAfterStay > 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("Player busts!")
    console.log("Player busts!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (houseSum === 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("House wins!")
    console.log("House wins!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (playerSumAfterStay === 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("Player wins!")
    console.log("Player wins!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (houseSum === playerSumAfterStay) {
    alert("It's a draw!")
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else {
    housePlay();
  }
}


// HOUSE IS PLAYING///////////////////////////////////////

const housePlay = () => {
  console.log(houseSum + "house is playing")
  if (houseSum < 18) {
    arrayItemPull = [Math.floor(Math.random() * thisDeck.length)];
    finalCard = thisDeck[arrayItemPull];
    houseHand.push(finalCard);
    console.log(houseHand)
    cardValuesAfterHousePlays();
  }
  else if (houseSumAfterHousePlays > 0 && houseSumAfterHousePlays < 18) {
    arrayItemPull = [Math.floor(Math.random() * thisDeck.length)];
    finalCard = thisDeck[arrayItemPull];
    houseHand.push(finalCard);
    console.log(houseHand)
    cardValuesAfterHousePlays();
  }
  else {
    cardValuesAfterHousePlays();
  }
  document.querySelector('#houseDealtCards').textContent = houseHand;
}


//CARD VALUES AFTER HOUSE PLAYS///////////////////////////////////////

let houseScoreAfterHousePlays = 0;
let houseScoreTotalAfterHousePlays = [];

const cardValuesAfterHousePlays = () => {
  houseHand.length === 0;
  for (i = 0; i < houseHand.length; i++) {
    if (houseHand[i].includes("ace")) {
      newHouseScore = houseScoreAfterHousePlays + 11;
    }
    if (houseHand[i].includes("queen")) {
      newHouseScore = houseScoreAfterHousePlays + 10;
    }
    if (houseHand[i].includes("king")) {
      newHouseScore = houseScoreAfterHousePlays + 10;
    }
    if (houseHand[i].includes("jack")) {
      newHouseScore = houseScoreAfterHousePlays + 10;
    }
    if (houseHand[i].includes("2")) {
      newHouseScore = houseScoreAfterHousePlays + 2;
    }
    if (houseHand[i].includes("3")) {
      newHouseScore = houseScoreAfterHousePlays + 3;
    }
    if (houseHand[i].includes("4")) {
      newHouseScore = houseScoreAfterHousePlays + 4;
    }
    if (houseHand[i].includes("5")) {
      newHouseScore = houseScoreAfterHousePlays + 5;
    }
    if (houseHand[i].includes("6")) {
      newHouseScore = houseScoreAfterHousePlays + 6;
    }
    if (houseHand[i].includes("7")) {
      newHouseScore = houseScoreAfterHousePlays + 7;
    }
    if (houseHand[i].includes("8")) {
      newHouseScore = houseScoreAfterHousePlays + 8;
    }
    if (houseHand[i].includes("9")) {
      newHouseScore = houseScoreAfterHousePlays + 9;
    }
    if (houseHand[i].includes("10")) {
      newHouseScore = houseScoreAfterHousePlays + 10;
    }
    houseScoreTotalAfterHousePlays.push(newHouseScore);
    console.log(houseScoreTotalAfterHousePlays);
  }
  houseAddTotalAfterHousePlays(houseScoreTotalAfterHousePlays);
}

let houseSumAfterHousePlays = 0;

const houseAddTotalAfterHousePlays = (houseScoreTotalAfterHousePlays) => {
  for (let i = 0; i < houseScoreTotalAfterHousePlays.length; i++) {
    houseSumAfterHousePlays += houseScoreTotalAfterHousePlays[i];
    console.log(houseSumAfterHousePlays);
  }
  if (houseSumAfterHousePlays > 0 && houseSumAfterHousePlays < 18) {
    housePlay();
  }
  else if (houseSumAfterHousePlays >= 18) {
    setTimeout(evalScoreAfterHousePlays, 1000)
  }
}

const evalScoreAfterHousePlays = () => {
  console.log(houseSumAfterHousePlays);
  console.log(playerSumAfterStay);
  if (houseSumAfterHousePlays > 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("House busts!")
    console.log("House busts!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (playerSumAfterStay > 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("Player busts!")
    console.log("Player busts!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (houseSumAfterHousePlays === 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("House wins!")
    console.log("House wins!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (playerSumAfterStay === 21) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("Player wins!")
    console.log("Player wins!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (houseSumAfterHousePlays > playerSumAfterStay) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("House wins!")
    console.log("House wins!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (houseSumAfterHousePlays < playerSumAfterStay) {
    document.querySelector('#houseDealtCards').textContent = houseHand;
    alert("Player wins!")
    console.log("Player wins!");
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else if (houseSumAfterHousePlays === playerSumAfterStay) {
    alert("It's a draw!")
    document.querySelector('.playAgainButton').style.visibility = "visible";
  }
  else {
    housePlay();
  }
}

// //play again button to appear. player clicks = reset and "shuffle deck"
const playAgainButtonClick = () => {
  console.log("Button was clicked");
  location.reload();
}

document.addEventListener("DOMContentLoaded", shuffleDeck);
