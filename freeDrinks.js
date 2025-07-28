/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const prompt = require('prompt-sync')({ sigint: true }); // Import prompt-sync
const burgerInput = prompt("Please enter price: "); // Use a different variable name to clarify it's the raw input
const coke = 30;

// Convert the input string to a number
// Number() is a good general choice, or parseInt() if you only expect whole numbers.
const burger = Number(burgerInput);

// Check if the conversion resulted in a valid number (not NaN - Not a Number)
if (isNaN(burger)) {
    console.log("Invalid input. Please enter a numeric price for the burger.");
} else if (burger > 500) {
    console.log("Free Coke");
} else {
    console.log("Price: " + (burger + coke) + " tk");
}