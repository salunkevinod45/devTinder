
const express = require("express");

const app = express();


app.use('/test',(req,res)=>{
    res.send('This is test middleware')
});

app.use('/hello',(req,res)=>{
    res.send('Hello World');
})

app.use("/",(req,res)=>{
    res.send('This is main dashboard')
})

app.listen(7777,()=>{
    console.log("server is running on port 7777");
})