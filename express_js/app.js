//core module 
const http = require('http');

//external module
const express=require('express');

//local module
const requestHandler = require('./user');

const app=express();

app.use
  ( "/", 
  (req, res, next) => {
  console.log(`Came in the first middleware`,req.url, req.method);
  //res.send("<p>I am in the 1st domain now </p>");
  next();
  }  );

app.use("/submit-details", 
  (req, res, next)=>{
    console.log(`Inside the 2nd iteration place `, req.url, req.method);
    res.send("<p>I am in the 2nd domain now</p>");
    
  }
);


//const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});