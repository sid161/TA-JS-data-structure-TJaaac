// 1. Create an array named numbers and store 5 number values in it
let numbers = [1,2,3,4,5];

// 2. Calculate the sum of array items and print it to the console using console.log()
console.log(
    numbers.reduce((a, b) => a + b, 0)
  )

// 3. Calculate the average of array items and print it to the console using console.log()
const sum = times.reduce((a, b) => a + b, 0);
const avg = (sum / times.length) || 0;

console.log(`The sum is: ${sum}. The average is: ${avg}.`);

// 4. Find the highest number in the array and print it to the console using console.log()

// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
for(let number of numbers){
    if(number % 2 == 0){
        console.log(`${number}`);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

// 9. Log all the element of the array one by one

// 10. Find all the number in the array that is divisible by 3
