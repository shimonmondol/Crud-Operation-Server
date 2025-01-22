const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
//localhost:5000/add

mongoose
  .connect(
    "mongodb+srv://Crud:1234@cluster0.x7kff.mongodb.net/Crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database is Connected");
  });
app.use(cors());
app.use(express.json());

const User = mongoose.model("User", { task: String });

app.post("/add", (req, res) => {
  // let { name } = req.body;
  // console.log(name);
  // res.send(name);
  let { name } = req.body;

  let result = new User({
    task: name,
  });
  result.save();
  res.send(result);
});

app.listen(port || 5000, () => {
  console.log(`Example app listening on port ${port}`);
});
