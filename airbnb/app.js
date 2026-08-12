//Core Modules
const path=require('path'); 

//External Module 
const express=require('express');
const app=express();

//Local Module 
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");
const rootDir =require("./utils/pathUtil");

//
app.use((req,res,next)=>{
    console.log(`Request is home`, req.url,req.method);
    next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,'public')));
//
//Handling the 404 error section
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});
//


const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Running at http://localhost:${PORT}`);
    
});
