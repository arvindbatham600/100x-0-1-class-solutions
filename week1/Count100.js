// Write a program that calculates sum of 0-100 and prints the sum -->

const start = 0;
const end = 100;
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}
console.log("Total sum of 0-100 numbers is : ", sum);
