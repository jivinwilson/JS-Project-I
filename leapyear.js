// Prompt the user for input and convert it to a number
const yearString = prompt("Enter a year:");
const year = parseInt(yearString);

// Check if the conversion was successful and if the input is a positive integer
if (isNaN(year) || year < 0 || !Number.isInteger(year)) {
  console.log("Invalid input. Please enter a valid positive integer year.");
} else {
  // Check whether the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}
