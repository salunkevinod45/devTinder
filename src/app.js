const express = require("express");

const {adminAuth,userAuth} = require('./middlewares/auth');

const app = express();

app.use('/admin',adminAuth);

app.get('/admin/getAllData',(req,res)=>{
  console.log('get admin data')
  res.send('get all data from admin')
});

app.get('/admin/deleteUser',(req,res)=>{
  console.log('delete user')
  res.send('user is deleted');
})


app.get('/user/getUsers',userAuth,(req,res)=>{
  console.log('get users');
  res.send('get all users');
})

app.get('/user/login',(req,res)=>{
  console.log('login user')
  res.send('login user');
})


app.all('/api',(req,res)=>{
  console.log('api')
  res.send('api using app.use')
})

app.all('/api/demo',(req,res)=>{
  console.log('api 2')
  res.send('api using app.use 2')
})

app.listen(7777, () => {
  console.log("server is running on port 7777");
});
