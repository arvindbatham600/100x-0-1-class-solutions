const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); 

app.get("/", (req, res) => {
    res.json({
        message : "working"
    })
})

app.post("/todo", async (req, res) => {
  
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            message: "you sent the wrong inputs"
        })
        return
    }
    else {
        // create a todo in your mongodb database
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            isCompleted : false
        })
        res.json({
            message : "todo created successfully"
        })
    }


});
app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
});
app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            message: "wrong inputs"
        })
        return;
    } else {
        // update the todo in the database
       await todo.updateOne({
            _id: req.body.id
        }, {
            isCompleted : true
       })
        res.json({
            message: "marked as completed"
        })

    }
});
app.listen(3000, () => console.log("listening on port 3000"));
 