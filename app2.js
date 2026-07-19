//1st server making 
const http=require('http');

const server = http.createServer(
    (req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url==='/'){
       res.write('<body><h1>This is the HOME PAGE  </h1></body>');
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