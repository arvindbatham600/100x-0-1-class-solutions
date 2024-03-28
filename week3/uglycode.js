const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) => {
  // your logic here
  const userName = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyid;

  console.log("username", userName);
  console.log("passowd", password);
  console.log(kidneyId);

  if (userName != "arvind" || password != "pass") {
    res.status(403).send("wrong inputs from auth");
    console.log("in auth");
  }
  if (kidneyId != 1 && kidneyId != 2) {
    console.log("if wrong kidney id");
    res.status(403).send("wrong inputs from kidney");
  }
  res.send("you have healthy kidney");
  console.log("after sending correct res");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
