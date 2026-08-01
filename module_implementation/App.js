const http=require('http');
const userRequestHandler= require('./user.js');

const server = http.createServer(userRequestHandler);


const PORT=3001;
server.listen( PORT, () =>{
    console.log(`Server Running on address http://localhost:${PORT}`);
});
