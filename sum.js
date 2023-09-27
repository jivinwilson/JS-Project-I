// Prompt the user for input and convert it to numbers
const num1String = prompt("Enter the first number:");
const num2String = prompt("Enter the second number:");

// Convert the input strings to numbers (parseFloat to allow decimal input)
const num1 = parseFloat(num1String);
const num2 = parseFloat(num2String);

// Check if the conversion was successful
if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  // Calculate the sum
  const sum = num1 + num2;

  // Display the result
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
}
