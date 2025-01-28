const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
//localhost:5000/add

app.use(cors());
app.use(express.json());

// Connect Database
mongoose
  .connect(
    "mongodb+srv://Crud:1234@cluster0.x7kff.mongodb.net/Crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database is Connected");
  });

const todo = mongoose.model("Todo", {
  name: String,
  age: Number,
  email: String,
});

// Add Task
app.post("/create", (req, res) => {
  console.log(req.body.name);

  const result = new todo({
    name: req.body.name,
  });

  result.save();
  res.status(201).send({ success: true, msg: "todo created successful" });
});
// All Todos
app.get("/alltodos", async (req, res) => {
  let alltodos = await todo.find({});
  res.send(alltodos);
});

// delete toto
app.delete("/deletetodo/:id", async (req, res) => {
  let { id } = req.params;
  let deletetodo = await todo.findOneAndDelete({
    _id: id,
  });
});
// res
//   .status(200)
//   .send({ success: true, msg: "deleted successful", data: deletetodo });

app.listen(3000, () => {
  console.log("Server is running");
});
