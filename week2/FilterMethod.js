// given an numbers array, use Filter method and return an array with even values -->

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(i => i % 2 == 0);
console.log(evenNumbers)