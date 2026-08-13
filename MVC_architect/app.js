// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const userRouter = require("./routes/userRouter")
const {hostRouter} = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");

const app = express();

//ejs setup
app.set('view engine','ejs');
app.set('views','views'); // here in our project the defualt name of the folder was views 
//                  this second one written is the name of the folder 
//syntax is app.set('views','folder_name');
//syntax is app.set(name, value )

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host", hostRouter);


app.use(express.static(path.join(__dirname, 'public')));

const errorsController=require('./controllers/error.js')
app.use(errorsController.showerror);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});