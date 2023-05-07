const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  due_date: {
    type: String,
    require: true,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
//  const TODO1 = new Todo({
//   description:"i need veg",
//   category:"food",
//   due_date:"13/10/2024"
//  });

//  TODO1.save();
