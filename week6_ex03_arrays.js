// Create an empty array called colors
let colors = [];

// Add three colors using push()
colors.push("red");
colors.push("blue");
colors.push("green");

// Create another array called numbers with five numbers
let numbers = [1, 2, 3, 4, 5];

// Remove the last color from the colors array
colors.pop();

// Add a new color to the beginning of the colors array
colors.unshift("yellow");

// Print the length of both arrays
console.log("Colors length:", colors.length);
console.log("Numbers length:", numbers.length);

// Optional: Print arrays to see changes
console.log(colors);
console.log(numbers);