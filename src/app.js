const express = require("express");

const app = express();

app.use(
  "/user",[
  (req, res, next) => {
    console.log("RH 1");
    // res.send(' response from route handler 1')
    next();
    // res.send(' response from route handler 1')
  }],
  (req, res, next) => {
    console.log("RH 2");
    // res.send('response from route handler 2');
    next();
  },
  (req, res, next) => {
    console.log("RH 3");
    // res.send('response from route handler 3');
    next();
  },
  (req, res, next) => {
    console.log("RH 4");
    // res.send('response from route handler 4');
    next();
  },
  (req, res, next) => {
    console.log("RH 5");
    // res.send('response from route handler 5');
    next();
  },
  (req, res, next) => {
    console.log("RH 6");
    res.send('response from route handler 6');
  }
);

app.listen(7777, () => {
  console.log("server is running on port 7777");
});
