// Create a new Date object
const currentDate = new Date();

// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[currentDate.getDay()];

// Get the current time in 12-hour format
let hours = currentDate.getHours();
const amPm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12; // Convert to 12-hour format
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Create a string to display the current day and time
const currentTimeString = `${currentDay}, ${hours}:${minutes}:${seconds} ${amPm}`;

// Display the current day and time
console.log(currentTimeString);
