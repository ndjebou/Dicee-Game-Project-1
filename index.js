//Generate a random number from 1 to 6 
const firstRandomNum = Math.floor (Math.random()* 6) + 1

//concatenation/images/dice.png upto to dice6
const firstDiceImage = 'images/dice' + firstRandomNum + '.png';

document.querySelectorAll
('img') [0].setAttribute
('src', firstDiceImage); 


const secondRandomNum = Math.floor (Math.random()* 6) + 1

const secondDiceImage = 'images/dice' + secondRandomNum + '.png';

document.querySelectorAll
('img') [1].setAttribute
('src', secondDiceImage); 


// using conditional statement 
if (firstRandomNum > secondRandomNum) {
    document.querySelector ('h1').innerHTML = '🚩Player 1 is the winner!';
} else if (firstRandomNum < secondRandomNum) {
    document.querySelector ('h1').innerHTML = '🚩Player 2 is the winner!';
} else {
    document.querySelector ('h1').innerHTML = "It's a Draw!"; 
}
