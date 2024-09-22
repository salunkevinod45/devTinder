
const express = require("express");

const app = express();

// this will handle all the requests for the route /user , for all the HTTP methods
app.use('/',(req,res)=>{
    res.send('haaaaahaaa')
})

// this will handle all the get requests starting from route /user
app.get('/user',(req,res)=>{
    res.send({fname:'vinod',lname:'salunke'});
})

// this will handle all the POST requests starting from route /user
app.post('/user',(req,res)=>{
    res.send('data successfully saved using post method');
})

// this will handle all the delete requests starting from route /user
app.delete('/user',(req,res)=>{
    res.send('Data deleted successfully')
})

// this will handle all the put(update a resource) requests starting from route /user
app.put('/user',(req,res)=>{
    res.send('Data updated successfully')
})

//this will handle all the patch(partial update i.e specific field update) requests starting from route /user

app.patch('/user',(req,res)=>{
    res.send('Data partially updated successfully');
})

app.listen(7777,()=>{
    console.log("server is running on port 7777");
})