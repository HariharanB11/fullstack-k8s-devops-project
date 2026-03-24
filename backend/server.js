const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const mongoURL = process.env.MONGO_URL || "mongodb://mongodb:27017/tododb"

mongoose.connect(mongoURL)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

const TodoSchema = new mongoose.Schema({
    task: String
})

const Todo = mongoose.model("Todo", TodoSchema)

app.get("/todos", async (req,res)=>{
    const todos = await Todo.find()
    res.json(todos)
})

app.post("/todos", async (req,res)=>{
    const todo = new Todo({task:req.body.task})
    await todo.save()
    res.json(todo)
})

app.delete("/todos/:id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.json({ message: "Todo deleted" })
    } catch (err) {
        res.status(500).json({ error: "Failed to delete todo" })
    }
})

app.listen(5000, "0.0.0.0", ()=>{
    console.log("Server running on port 5000")
})
