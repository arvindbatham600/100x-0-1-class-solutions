// create middleware which can find the average time your server is taking to handle the request.

const express = require("express");

const app = express();
// for calculating the average time
// totalRequestTime / totalRequestCount

let totalRequestTime = 0;
let totalRequestCount = 0;

const requestAverageTime = (req, res, next) => {
  const start = Date.now();
  console.log("start", start);

    res.on("finish", () => {
        const end = Date.now();
        console.log("request end", end);
        const requestTime = end - start;
        totalRequestTime += requestTime;
        totalRequestCount++;

        const averagetime = totalRequestTime / totalRequestCount;
        console.log("current request Time : ", requestTime)
        console.log("total request count : ", totalRequestCount)
        console.log("total request time : ", totalRequestTime)
        console.log("Average Time : ", averagetime);
    })

  next();
};

app.get("/health-checkup", requestAverageTime, (req, res) => {
  res.json({
    msg: "you are healthy",
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
