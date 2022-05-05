//Generate a random number from 1 to 6 
const firstRandomNum = Math.floor (Math.random()* 6) + 1

//concatenation/images/dice1.png up to to dice6
const firstDiceImage = "images/dice" + firstRandomNum + " .png";

document.querySelectorAll
("img") [0].setAttribute
('src', firstDiceImage);


const secondRandomNum = Math.floor (Math.random()* 6) + 1

const secondDiceImage = 'images/dice' + secondRandomNum + '.png';

document.querySelectorAll
('img') [1].setAttribute
('src', secondDiceImage); 
