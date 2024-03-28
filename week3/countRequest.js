// create middleware which can count the number of request ;
const express = require("express");

const app = express();
let count = 0;
const countRequest = (req, res, next) => {
  count++;
  console.log(count);
  next();
};

app.use(countRequest); // this middleware will always called when you hit the request

app.get("/health-checkup", (req, res) => {
  res.json({
    msg: "you are healthy",
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
