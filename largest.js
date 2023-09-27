// Prompt the user for input and convert them to numbers
const num1String = prompt("Enter the first number:");
const num2String = prompt("Enter the second number:");
const num3String = prompt("Enter the third number:");

// Convert the input strings to numbers
const num1 = parseFloat(num1String);
const num2 = parseFloat(num2String);
const num3 = parseFloat(num3String);

// Check if the conversion was successful and if all three inputs are numbers
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  // Find the largest number using conditional statements
  let largest;

  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  // Display the result
  console.log(`The largest number is: ${largest}`);
}
