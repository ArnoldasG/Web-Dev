// Slice /* Shift + Option + A */

/* Slice method */

// var name = "Arnoldas";
// name.slice(0, 1);

// var tweet = prompt("Compose your tweet");
// var tweetUnder140 = tweet.slice(0, 140);
// alert(tweetUnder140);

/* To Upper Case */

// var name = "Arnoldas";
// console.log(name.toUpperCase());

/* // Create a promt that asks for the user of the name and send them alert with Hello (their name (FIRST CHAR CAPITALIZED)) */

// var yourName = prompt("Enter your name");
// var firstChar = yourName.slice(0, 1);
// alert("Your name is: " + yourName.slice(0, 1).toUpperCase() + yourName.slice(1, 10).toLocaleLowerCase());


/* Numbers */

// var dogAge = prompt("Enter your Dog age")
// var humanAge = (dogAge - 2) * 4 + 21;
// alert("Your dog-human age is: " + humanAge);

/* Increment and Decrement */

// var x = 5;
// x++;
// console.log(x);
// x--;
// x--;
// console.log(x);

/* Functions */

// function lifeInWeeks(age) {

//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;

//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
// }

// lifeInWeeks(89);


// function calculationBmi(weight, height) {

//     // weight (kg) / [height (m)]2

//     var BMI = weight / (height * height)

//     return Math.round(BMI);
// }

// console.log(calculationBmi(96, 1.84));


/* Math Random */

// var n = Math.random();

// console.log(n);
// n = n * 6;
// // It never gets bigger than 6;
// console.log(n);

// var firstName = prompt("Enter the first lover name");
// var secondName = prompt("Enter the second lover name");

// var lovePercentage = Math.random();
// lovePercentage = lovePercentage * 100;
// lovePercentage = Math.floor(lovePercentage) + 1;
// console.log(firstName + " and " + secondName + " percentage of love is " + lovePercentage);

/* If Else Statements */

function calculationBmi(weight, height) {

    // weight (kg) / [height (m)]2

    var BMI = weight / (height * height)

    BMI = Math.round(BMI * 10) / 10;

    if (BMI < 18.5) {
        return "Your BMI is " + BMI + "," + " so you are underweight";
    } else if (BMI > 18.5 && BMI < 24.9) {
        return "Your BMI is " + BMI + "," + " so you are a normal weight";
    } else {
        return "Your BMI is " + BMI + "," + " so you are overweight";
    }
}




console.log(calculationBmi(75, 1.8));