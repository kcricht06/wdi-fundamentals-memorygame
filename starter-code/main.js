console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
//if (cardTwo === cardFour) {
//	alert('Sorry, try again.')
//}
//else if (cardOne === cardTwo) {
//	alert('You found a match!')
//}
//else if (cardThree === cardFour) {
//	alert('You found a match!')
//}
//else if (cardOne === cardThree) {
//	alert('Sorry, try again.')
//}
//else if (cardOne === cardFour) {
//	alert('Sorry, try again.')
//}
//else if (cardTwo === cardThree) {
//	alert('Sorry, try again.')
//}

//set board to variable
var createCards = function() {

var gameBoard = document.getElementById('game-board');

    for (i=0; i<4; i++) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        gameBoard.appendChild(cardDiv);
    }
}
createCards();


