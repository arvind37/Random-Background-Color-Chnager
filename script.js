const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor() {   
    
const randomOne = colors[~~(Math.random() * colors.length)]; // We can use ~~ instead of Math.floor
const randomTwo = colors[~~(Math.random() * colors.length)]; // We can use ~~ instead of Math.floor
const randomThree = colors[~~(Math.random() * colors.length)]; // We can use ~~ instead of Math.floor
const randomFour = colors[~~(Math.random() * colors.length)]; // We can use ~~ instead of Math.floor
const randomFive = colors[~~(Math.random() * colors.length)]; // We can use ~~ instead of Math.floor
const randomSix = colors[~~(Math.random() * colors.length)]; // We can use ~~ instead of Math.floor

const randomHex = randomOne + randomTwo + randomThree + randomFour + randomFive + randomSix;

//console.log(randomHex);

document.getElementById('color').innerHTML = randomHex

document.body.style.backgroundColor = '#' + randomHex;

}
setInterval(changeColor, 1000);

