//SHUFFLE

// Build a deck of 52 cards
let suitOptions = ["hearts", "spades", "clubs", "diamonds"];
let numberOptions = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
let thisDeck = [];
let suitSelected = "";
let numberSelected = "";
let card = [];

const shuffleDeck = () => {
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



// // Player = user
// // House = computer



//DEAL

let houseHand = [];
let playerHand = [];

const dealButtonClick = () => {
  for (i = 0; i <= 1; i++) {
    arrayItemPull = [Math.floor(Math.random() * thisDeck.length)];
    finalCard = thisDeck[arrayItemPull];
    houseHand.push(finalCard);
  }
  document.querySelector('#houseDealtCards').textContent = houseHand;
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



//CARD VALUES

let playerScore = 0;
let houseScore = 0;
let playerScoreTotal = [];
let houseScoreTotal = [];

const cardValuesAfterDeal = () => {
  for (i = 0; i < playerHand.length; i++) {
    if (playerHand[i].includes("ace")) {
      console.log ("+11")
      newPlayerScore = playerScore + 11;
    }
    if (playerHand[i].includes("queen")) {
      console.log ("+10")
      newPlayerScore = playerScore + 10;
    }
    if (playerHand[i].includes("king")) {
      console.log ("+10")
      newPlayerScore = playerScore + 10;
    }
    if (playerHand[i].includes("jack")) {
      console.log ("+10")
      newPlayerScore = playerScore + 10;
    }
    if (playerHand[i].includes("2")) {
      console.log ("+2")
      newPlayerScore = playerScore + 2;
    }
    if (playerHand[i].includes("3")) {
      console.log ("+3")
      newPlayerScore = playerScore + 3;
    }
    if (playerHand[i].includes("4")) {
      console.log ("+4")
      newPlayerScore = playerScore + 4;
    }
    if (playerHand[i].includes("5")) {
      console.log ("+5")
      newPlayerScore = playerScore + 5;
    }
    if (playerHand[i].includes("6")) {
      console.log ("+6")
      newPlayerScore = playerScore + 6;
    }
    if (playerHand[i].includes("7")) {
      console.log ("+7")
      newPlayerScore = playerScore + 7;
    }
    if (playerHand[i].includes("8")) {
      console.log ("+8")
      newPlayerScore = playerScore + 8;
    }
    if (playerHand[i].includes("9")) {
      console.log ("+9")
      newPlayerScore = playerScore + 9;
    }
    if (playerHand[i].includes("10")) {
      console.log ("+10")
      newPlayerScore = playerScore + 10;
    }
    playerScoreTotal.push(newPlayerScore);
    console.log(playerScoreTotal);
  }
  for (i = 0; i < houseHand.length; i++) {
    if (houseHand[i].includes("ace")) {
      console.log ("+11")
      newHouseScore = houseScore + 11;
    }
    if (houseHand[i].includes("queen")) {
      console.log ("+10")
      newHouseScore = houseScore + 10;
    }
    if (houseHand[i].includes("king")) {
      console.log ("+10")
      newHouseScore = houseScore + 10;
    }
    if (houseHand[i].includes("jack")) {
      console.log ("+10")
      newHouseScore = houseScore + 10;
    }
    if (houseHand[i].includes("2")) {
      console.log ("+2")
      newHouseScore = houseScore + 2;
    }
    if (houseHand[i].includes("3")) {
      console.log ("+3")
      newHouseScore = houseScore + 3;
    }
    if (houseHand[i].includes("4")) {
      console.log ("+4")
      newHouseScore = houseScore + 4;
    }
    if (houseHand[i].includes("5")) {
      console.log ("+5")
      newHouseScore = houseScore + 5;
    }
    if (houseHand[i].includes("6")) {
      console.log ("+6")
      newHouseScore = houseScore + 6;
    }
    if (houseHand[i].includes("7")) {
      console.log ("+7")
      newHouseScore = houseScore + 7;
    }
    if (houseHand[i].includes("8")) {
      console.log ("+8")
      newHouseScore = houseScore + 8;
    }
    if (houseHand[i].includes("9")) {
      console.log ("+9")
      newHouseScore = houseScore + 9;
    }
    if (houseHand[i].includes("10")) {
      console.log ("+10")
      newHouseScore = houseScore + 10;
    }
    houseScoreTotal.push(newHouseScore);
    console.log(houseScoreTotal);
  }
  playerAddTotal();
}



// let playerSum = playerScoreTotal.reduce(a,b) => a + b;

// let sumStart = 0;
// let playerSum = [];

// const playerAddTotal = () => {
//   console.log("Button was clicked")
//   for (let i=0; i < playerScoreTotal.length; i++) {
//     playerSum = sumStart + playerScoreTotal[i];
//   }
//   return playerSum;
//   console.log (playerSum);
// }




// const evalScore =  () =>{

//   if (houseSum > 21){
//     alert("House busts!")
//   } 
//   else if (playerSum > 21){
//     alert("Player busts!")
//     }
//   else if (houseSum = 21){
//     alert("House wins!")
//     }
//   else if (playerSum = 21){
//     alert("Player wins!")
//       }
//   }
//   //if either house or player over 21 = alert bust
//   //if either house or player equals 21 - alert winner
//  //else keep playing 


const hitButtonClick = () => {
  console.log("Button was clicked");
  arrayItemPull = [Math.floor(Math.random() * thisDeck.length)];
  finalCard = thisDeck[arrayItemPull];
  playerHand.push(finalCard);
  document.querySelector('#playerDealtCards').textContent = playerHand;
  console.log(playerHand);
  cardValuesAfterHit();

  // // player gets another card from the remaining deck until they stop hitting or  // after each hit evalScore()
}

const stayButtonClick = () => {
  console.log("Button was clicked");
  //evalScore();
  housePlay();
  cardValues();

  // // when player is done evaluate card sum and store
}

const housePlay = () => {
  while (houseScore < 18) { //DEFINE houseScore //
    arrayItemPull = [Math.floor(Math.random() * thisDeck.length)];
    finalCard = thisDeck[arrayItemPull];
    houseHand.push(finalCard);
  }
  document.querySelector('#houseDealtCards').textContent = houseHand;
  console.log(houseHand);
  cardValues();

}


// // evalScoreFinal();

// // compare house sum to player sum
//         //sum closest or equal to 21, alert winner

// const evalScoreFinal =  () =>{
//   if (houseSum > 21){
//     alert("House busts!")
//   } 
//   else if (playerSum > 21){
//     alert("Player busts!")
//     }
//   else if (houseSum = 21){
//     alert("House wins!")
//     }
//   else if (playerSum = 21){
//     alert("Player wins!")
//       }
// else if (houseSum > playerSum){
//  alert("House wins!")
// }
// else {"Player wins!"}
//   }


// //play again button to appear. player clicks = reset and "shuffle deck"
const playAgainButtonClick = () => {
  console.log("Button was clicked");
  location.reload();
}

document.addEventListener("DOMContentLoaded", shuffleDeck);


// //            
