// Generating random number between 0 and 0.99; multiply by 6 than rounding to the nearest whole number.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1)



// Getting a string from dice1 to dice 6
var randomDiceImage = "dice" + randomNumber1 + ".png";

// Getting the full source address
var randomImageSource = "images/" + randomDiceImage;

// selecting the first image in the html
var image1 = document.querySelectorAll("img")[0];

// Changing the image
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2)

// Changing the title depending on the results

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins";

}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}


//Code below is commented due to it being long and very repetative

// if (randomNumber1 > randomNumber2){
//     document.getElementsByTagName("h1").innerHTML = "Player1 wins!";
// }

// if (randomNumber1 == 1){
//     document.getElementsByClassName("img1")[0].src="images/dice1.png";
// }

// if (randomNumber1 == 2){
//     document.getElementsByClassName("img1")[0].src="images/dice2.png";
// }

// if (randomNumber1 == 3){
//     document.getElementsByClassName("img1")[0].src="images/dice3.png";
// }

// if (randomNumber1 == 4){
//     document.getElementsByClassName("img1")[0].src="images/dice4.png";
// }

// if (randomNumber1 == 5){
//     document.getElementsByClassName("img1")[0].src="images/dice5.png";
// }

// if (randomNumber1 == 6){
//     document.getElementsByClassName("img1")[0].src="images/dice6.png";
// }




// if (randomNumber2 == 1){
//     document.getElementsByClassName("img2")[0].src="images/dice1.png";
// }

// if (randomNumber2 == 2){
//     document.getElementsByClassName("img2")[0].src="images/dice2.png";
// }

// if (randomNumber2 == 3){
//     document.getElementsByClassName("img2")[0].src="images/dice3.png";
// }

// if (randomNumber2 == 4){
//     document.getElementsByClassName("img2")[0].src="images/dice4.png";
// }

// if (randomNumber2 == 5){
//     document.getElementsByClassName("img2")[0].src="images/dice5.png";
// }

// if (randomNumber2 == 6){
//     document.getElementsByClassName("img2")[0].src="images/dice6.png";
// }


