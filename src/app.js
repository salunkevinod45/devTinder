
const express = require("express");

const app = express();

// this will handle all the requests for the route /user , for all the HTTP methods
// app.use('/',(req,res)=>{
//     res.send('haaaaahaaa')
// })


/* use of ?,+,(),* in routing */


// ?


    // app.get('/us?er',(req,res)=>{
    //     res.send('if we use ? then the path or character before question mark is optional and we can ignore it')
    // })

    // app.get('/(us)?er',(req,res)=>{
    //     res.send('if we use ? then the path or character before question mark is optional and we can ignore it')
    // })

// use of +    

    // app.get('/user+Demo',(req,res)=>{
    //     res.send('if we use + then we can pass character which is just before + sign n number of times in the route and that route will become as a valid route so in this case we can pass r character n number of times as + is placed after r ')
    // })

    // app.get('/(user)+Demo',(req,res)=>{
    //     res.send('if we use + then we can pass character or group of characters  which is just before + sign n number of times in the route and that route will become as a valid route so in this case we can pass user n number of times as + is placed after user and user is enclosed in round bracket ')
    // })

// use of *

// app.get('/user*Demo',(req,res)=>{
//     res.send('if we use * then we can pass any strings where we have places in the route.In this case * is placed after user and demo so we can pass anything after user and before demo which will become a valid route')
// })


// user of regular expression

// app.get(/a/,(req,res)=>{
//     res.send('regular expression-> this example will work for all routes which has a in it');
// });


// app.get(/.*xyz$/,(req,res)=>{
//     res.send('regular expression-> this example will work for all routes which start with anything but needs to be end with xyz');
// });

// use of params
// app.get('/user/:userId/:deptId',(req,res)=>{

//     console.log(req.params);

//     res.send({userId:req.params.userId,deptId:req.params.deptId});

// })

// use of query params

app.get('/user',(req,res)=>{

    console.log(req.query);

    res.send({userId:req.query.userId,name:req.query.name});

})





// this will handle all the get requests starting from route /user
// app.get('/user',(req,res)=>{
//     res.send({fname:'vinod',lname:'salunke'});
// })

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