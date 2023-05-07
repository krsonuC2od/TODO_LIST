// const express = require('express');
// const routes=express.Router();
// const homeController =require('../Controller/home_Controller');
// console.log("router is loaded");

// routes.get('/',homeController.home);
// routes.post('/create_Todo',homeController.CreateTodo);

// routes.post('/create_Todo',function (req, res) {
  
//     Todo.create({
     
//       description:req.body.description,
//       category:req.body.category,
//       due_date:req.body.date
//     })
//       .then((data) => {
//         console.log("***********" + data);
//         return res.redirect("back");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
  





module.exports=routes;


