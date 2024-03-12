// Create a counter in JavaScript (30 to 0) -->

const start = 30;
const end = 0;

function print(i) {
  console.log(i);
}

for (let i = start; i >= end; i--) {
  setTimeout(print, 1000 * (start - i), i);
}
