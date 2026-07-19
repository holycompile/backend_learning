//taking input from user
//1st server making 
const http=require('http');
const fs=require('fs');

const server = http.createServer(
    (req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url==='/'){
       res.write('<h1>Welcome to Home page</h1>');

        res.write('<form action="/submit-details" method="POST">');

        res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');

        res.write('<label for="gender">Gender:</label>');

        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');

        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br><br>');

        res.write('<button type="submit">Submit</button>');

        res.write('</form>');

        return res.end();


    }
    else if (req.url.toLowerCase() ==="/submit-details" && req.method==="POST"){
        fs.writeFileSync('user.txt', 'DUMMY DATA');
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }
    else if(req.url==='/products'){
       res.write('<body><h1>This is the PRODUCTS PAGE </h1></body>');
       return res.end();
    }
    else{
        res.setHeader('Context-Type', 'test/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding </title></heading>');
        res.write('<body><h1> hello ike and share </h1></body>')
        res.write('</html>');
        return res.end();

    }
    
    } 
);

const PORT=3001;
server.listen( PORT, () =>{
    console.log(`Server Running on address http://localhost:${PORT}`);
});
// Use the browser to access: 
// http://localhost:3001/
// http://localhost:3001/products