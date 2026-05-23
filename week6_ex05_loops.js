// Create an array called numbers with values 1 through 5
let numbers = [1, 2, 3, 4, 5];


// for loop that prints each number in the array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// while loop that counts down from 5 to 1
let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}


// loop that prints only even numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


// loop that calculates the sum of all numbers
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum:", sum);