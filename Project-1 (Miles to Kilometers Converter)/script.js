// The conversion factor for miles to kilometers
let milesToKilometers = 1.60934;

// Ask user to enter data in miles

let miles = prompt("Please enter the distance in miles.");
console.log(miles, "Miles");

// Use the conversion factor to multiply miles into kilometers

let kilometers = miles * milesToKilometers;
console.log(kilometers, "Kilometers");

let sentence =
  "The distance of " + kilometers + "is equals to " + miles + " miles";

console.log(sentence);
