const express = require("express");
const jwt = require("jsonwebtoken"); // imported jwt library -->
const jwtPassword = "arvind"; // jwt password to encode and decode the username
const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  let exist = false;
  ALL_USERS.find((user) => {
    if (user.username === username && user.password === password) {
      exist = true;
    }
  });
  return exist;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const exist = userExists(username, password);

  if (!exist) {
    res.status(403).json({
      msg: "invalid user",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword); // creating token 
  res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decode = jwt.decode(token, jwtPassword); // decoding the  username
    const username = decode.username;
    res.json({
      ALL_USERS,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => console.log("listening on port 3000"));
