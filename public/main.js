// Build a deck of 52 cards
let suitOptions = ["hearts", "spades", "clubs", "diamonds"];
let numberOptions = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
let cards = [];

const shuffleDeck = () => {
  console.log ("Button was clicked")
  for (i = 0; i < suitOptions.length; i++) {
    let suitSelected = suitOptions[i];
    console.log (suitSelected);    
  }
  for (i = 0; i < numberOptions.length; i++) {
    let numberSelected = numberOptions[i];
    console.log (numberSelected);
  }
  let card = [suitSelected, numberSelected];
  console.log (card);
// cards.push(card);
// console.log (cards);
}


// // assign values to all 52 cards
// //      - 2-10 = face value
// //      - K, Q, J = 10
// //      - A = 11


// // Player = user
// // House = computer

// const dealButtonClick = () => {
//   //give 2 random cards to both the house and the player from the deck
// //       - house cards are hidden until reveal
//   evalScore();
// }
 
// const evalScore =  () =>{
//   //if either house or player over 21 = alert bust
//   //if either house or player equals 21 - alert winner
//  //else keep playing 
// }

// const hitButtonClick = () => {
// // player gets another card from the remaining deck until they stop hitting or 
//       // after each hit evalScore()

// // when player is done evaluate card sum and store
// // house draws cards until its has more than 18 or busts evalScore();

// // while (houseScore < 18){
//   // loop
// // }

// // evalScoreFinal();

// // compare house sum to player sum
//         //sum closest or equal to 21, alert winner


// //play again button to appear. player clicks = reset and "shuffle deck"





// //            
