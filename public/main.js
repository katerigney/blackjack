// Build a deck of 52 cards
let suitOptions = ["hearts", "spades", "clubs", "diamonds"];
let numberOptions = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
let thisDeck = [];
let suitSelected = "";
let numberSelected = "";
let card = [];

const shuffleDeck = () => {
  console.log("Button was clicked");
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

// // assign values to all 52 cards
// //      - 2-10 = face value
// //      - K, Q, J = 10
// //      - A = 11


// // Player = user
// // House = computer

let houseHand = [];
let playerHand = [];


const dealButtonClick = () => {
  console.log("Button was clicked");
  for (i = 0; i <= 1; i++) {
    card = [Math.floor(Math.random() * thisDeck.length)];
    finalcard = thisDeck[card];
    houseHand.push(finalcard);
  }
  document.querySelector('#houseDealtCards').textContent = houseHand;
  console.log(houseHand);

  // //       - house cards are hidden until reveal

  for (i = 0; i <= 1; i++) {
    card = [Math.floor(Math.random() * thisDeck.length)];
    finalcard = thisDeck[card];
    playerHand.push(finalcard);
  }
  document.querySelector('#playerDealtCards').textContent = playerHand;
  console.log(playerHand);

  //   evalScore();
}

// // const evalScore =  () =>{
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
// }

const hitButtonClick = () => {
  console.log("Button was clicked");
  card = [Math.floor(Math.random() * thisDeck.length)];
  playerHand.push(card);
  document.querySelector('#playerDealtCards').textContent = playerHand;
  console.log(playerHand);

  // // player gets another card from the remaining deck until they stop hitting or  // after each hit evalScore()
}

const stayButtonClick = () => {
  console.log("Button was clicked");
  //evalScore();
  housePlay();
 // // when player is done evaluate card sum and store
}

const housePlay = () => {
  while (houseScore < 18) { //DEFINE houseScore //
    card = [Math.floor(Math.random() * thisDeck.length)];
    houseHand.push(card);
  }
  document.querySelector('#houseDealtCards').textContent = houseHand;
  console.log(houseHand);
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
