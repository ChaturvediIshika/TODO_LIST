const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override');
const { request } = require('http');
const Routes=require('./routes/Routes')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.use(Routes);


app.listen(3000,()=>{
    console.log("server running");
})