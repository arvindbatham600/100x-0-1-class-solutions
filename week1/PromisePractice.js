// Promise is a class like Date class with function as a argument..

const d = new Promise((resolve) => {
  setTimeout(() => {   // define here your asynchronous logic here..
    resolve("Jai Shree Ram");
  }, 1000);
});

console.log(d); // if you console.log(d) --> d is object here of Promise class.. it will console log Promise { <pending>}

d.then(() => {
  console.log(d); // here it will print "Jai Shree Ram"
});
