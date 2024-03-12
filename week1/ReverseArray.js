// Write a program that reverses all the elements of an array -->

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const reverseArray = numbers.slice().reverse(); // one way to do the same
let reverseArray2 = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reverseArray2.push(numbers[i]); // second way of doing same thing
}

console.log(reverseArray);
console.log("second reverse array ", reverseArray2);
