// Prompt the user for input and convert it to a number
const numberString = prompt("Enter a number:");
const number = parseFloat(numberString);

// Check if the conversion was successful and if the input is a number
if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  // Check whether the number is positive, negative, or zero
  if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}
