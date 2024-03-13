// aysnc await syntax.. No need to use .then(function() => {})

const fs = require("fs");

const readFileFunction = () => {
  return new Promise((resolve) => {
    // use your async logic here..like read file, setTimeout and all..
    fs.readFile("./a.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
};

// function which call your logic Function should be async

/* const Print = () => {    //  this is using the .then(() => {}) syntax
  const value = readFileFunction().then((data) => {
    console.log(`${data} : received this data from the a.txt file. `);
  });
}; */

const Print = async () => {
  const value = await readFileFunction();
  console.log(
    `${value} : received this data from the a.txt file. (this is using async await syntax) `
  );
};

Print();
