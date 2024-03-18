const express = require("express");

// port- in which we will listen to our backend...
const port = 4000;

// creat object of the  express class ==>
const app = express();

// get request on your ports
app.get("/", (req, res) => {
  console.log(req.body.message)
  res.send("<i>Hello Arvind !!..</i>");
});
// access the about route using /route
app.get("/about", (req, res) => {
  const about = "Software Engineer || Developer";
  res.send(about);
});

// can also send html files.... ==>

app.listen(port, () => {
  console.log(`we are listening on port : ${port}`);
});
