const fs = require("fs");
const { resolve } = require("path");

// defining my async function which returns the promise
const readFileAsync = () =>
  new Promise((resolve) => {
    fs.readFile("./a.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });

  // callback function to call
const onDone = (data) => {
  console.log(`${data} : received text from a.txt file.`);
};

readFileAsync().then(onDone);
