const express = require("express");

const app = express();
app.use(express.json());

app.get("/health-checkup", (req, res) => {
  // expecting inputs as an array like kidney = [1,2]
  const kidneys = req.body.kidneys; // user can pass anything to this or can also attack on your server...
  console.log(kidneys);
  const kidneyLength = kidneys.length;
  console.log("length", kidneyLength);

  res.send("your kidneys length is " + kidneyLength);
});

// for the input validation we ll use global cathches -->
app.use((err, req, res, next) => {
    res.json({
        msg: "something is wrong with your inputs"
    })
})

app.listen(3000, () => console.log("listening on port 3000"));
