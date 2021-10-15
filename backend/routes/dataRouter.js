const router = require('express').Router();
let todos =  require('../models/todo.model');

router.route("/").get((req,res)=>{
 todos.find()
     .then(users=>res.json(users))
     .catch(err=>res.status(400).json("Error:"+err))
});

router.route("/add").post((req,res)=>{

    const data = req.body.data;
    const newTodo =  new todos({data});

newTodo.save()
     .then(()=>res.json("data added"))
     .catch(err=>res.status(400).json("Error:"+err))
});

module.exports = router;