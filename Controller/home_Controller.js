// const db = require("./config/mongooseDB");
// const Todo=require('./models/todo')

// module.exports.home=function(req,res){
  
//    return res.render('home',{
//     title:'TODO_LIST'
//    })
// }

// module.exports.CreateTodo=function (req, res) {
  
//    Todo.create({
    
//      description:req.body.description,
//      category:req.body.category,
//      due_date:req.body.date
//    })
//      .then((data) => {
//        console.log("***********" + data);
//        return res.redirect("back");
//      })
//      .catch((err) => {
//        console.log(err);
//      });
//  };
 