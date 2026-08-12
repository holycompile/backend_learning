//External Module 
const express = require('express');
const bodyParser=require('body-parser');
const app =express();

app.get('/', (req,res,next)=>{
    console.log("I am in Home page", req.url, req.method);
    res.send(`<h1>I am in the Home page</h1>
        <h2> Here is the ink to our Conatct Page: </h2>
        <h5><a href='/contact-us'>Contact Us</a></h5>`);
});

app.get('/contact-us', (req,res,next)=>{
    console.log("I am in the contact us page", req.url, req.method);
    res.send(`<h1>Share your contact info here</h1>
        <form action="/contact-us" method="POST" class="from-eg">
        <div class="form-eg">
            <lable for="name"> Enter your name: </lable>
            <input type="text" name="name" id="name" required/>
            <br>
            <lable for="email"> Enter your email: </lable>
            <input type="email" name="email" id="email" required/>
            <!-- the submit button -->
            <br>
            <input type="submit" value="Submit"/>
        </div> 
        </form>`);
});

app.use(bodyParser.urlencoded());

app.post('/contact-us', (req,res,next)=>{
    console.log(`I am in the posting function now `, req.url, req.method, req.body);
    res.send(`We shall contact you soon`);
});

const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server is running in http://localhost:${PORT}`);
})
