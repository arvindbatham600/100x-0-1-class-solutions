const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());
const schema = zod.array(zod.number());

// how to create schema -->

// const userSchema = zod.object({
//   email: zod.string().email(),   // will check the valid email
//   passowrd: zod.string().min(8), // minimum 8 letters should be in password
//   country: zod.literal("IN").or(zod.literal("USA")), // country should be either IN or USA
// });



app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
    // expection input as an array like [1,3,4]
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.json({
            msg: "wrong inputs"
        })
    } else {
        res.send("you have " + kidneys.length + " kidneys")
    }

  // const kidneysLength = kidneys.length;
});

app.listen(3000, () => console.log("listening on port 3000"));
