/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


const prompt = require('prompt-sync')({ sigint: true }); // Import prompt-sync
const weightInput = prompt("Please enter your Weight(kg): "); // Use a different variable name to clarify it's the raw input
const heightInput = prompt("Please enter your height(m): "); // Use a different variable name to clarify it's the raw input
const weight = Number(weightInput);
const height = Number(heightInput);

BMI = weight / height**2;
console.log("Your BMI: " + BMI);

if (isNaN(weight)) {
    console.log("Invalid input. Please enter a numeric price for the burger.");
}
else if (isNaN(height)) {
    console.log("Invalid input. Please enter a numeric price for the burger.");
}
else if (BMI < 18.5) {
    console.log("You are underweight")
}else if (BMI >= 18.5 && BMI <=24.9) {
    console.log("You are normal")
}
else if (BMI >= 25 && BMI <=29.9) {
    console.log("You are overweight")
}
else {
    console.log ("You are obese")
}
