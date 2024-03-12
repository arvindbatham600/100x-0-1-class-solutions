// Write a program to print biggest number in an array -->

const numbers = [3, 44, 46, 743, 874, 2, 97, 435, 75, 23, 1344];
let biggestNumber = numbers[0];

for (let num of numbers) {
  if (num > biggestNumber) {
    biggestNumber = num;
  }
}

console.log(biggestNumber);
