const http=require('http');
const testingSyntax=require('./syntax.js')

const server= http.createServer((req,res)=>{
    console.log(req.url, res.method);
    testingSyntax();
});

const PORT= 3003;
server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});