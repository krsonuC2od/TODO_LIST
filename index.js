const express = require("express");
const path = require("path");
const port = 8000;
const db = require("./config/mongooseDB");
const Todo = require("./models/todo");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));
app.use(express.urlencoded());
app.use(express.static("assert"));
// app.use('/',require('./route'))

app.get("/", function (req, res) {
  Todo.find({})

    .then((todo) => {
      console.log(todo);
      return res.render("home", {
        title: "sonu",
        todo_list: todo,
      });
    })
    .catch((err) => {
      console.log("Error getting print contact ");
    });
});

app.post("/create_Todo", function (req, res) {
  Todo.create({
    description: req.body.description,
    category: req.body.category,
    due_date: req.body.date,
  })
    .then((data) => {
      console.log("***********" + data);
      return res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
});



app.get("/delete-task", function (req, res) {

  const id = req.query.id;
  Todo.findByIdAndDelete(id)
  
    .then((id) => {
      console.log(req.query.id + "  is deleted");
      return res.redirect("back");
    })
    .catch((err) => {
      console.warn(err);
    });
});


app.listen(port);
