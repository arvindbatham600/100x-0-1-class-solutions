const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://<username>:<password>@cluster0.sbp45mw.mongodb.net/newUserApp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  });

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "arvind",
  email: "arvind@gmail.com",
  password: "welcome1234",
});
user.save().then(() => console.log("database inserted"));
