// Calculate the time it takes a setTimeout call and the inner function actually running -->

const date = new Date();
function DoSomething() {
  const afterExecuton = new Date().getTime();
  const difference = afterExecuton - beforeExecuton;
  console.log("Difference : ", difference, "milliseconds");
  console.log("Doing Something");
}

const beforeExecuton = date.getTime();
setTimeout(DoSomething, 1000);
