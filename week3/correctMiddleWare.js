const express = require("express");

const app = express();

const userCheck = (req, res, next) => {
    if (req.headers.username != "arvind" || req.headers.password != "pass") {
        res.status(403).json({
            msg: "invalid username or password"
        })
    } else {
        next();
    }
}
const kidneyCheck = (req, res, next) => {
    if (req.query.kidneyid != 1 && req.query.kidneyid != 2) {
        res.status(403).json({
            msg: "invalid kidney id"
        })
    } else {
        next();
    }
}

app.get("/health-checkup", userCheck, kidneyCheck, (req, res) => {
  res.send("your kidney is healthy");
});

app.listen(3000, () => console.log("listening on port 3000"));
