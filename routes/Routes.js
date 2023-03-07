const express=require('express');
const router=express.Router();

const todo=[];

router.get('/',(req,res)=>{
    res.render('index',{todo});
})

router.post('/',(req,res)=>{
    const {text}=req.body;
    todo.push(text);
    res.redirect('/');
})

module.exports=router;