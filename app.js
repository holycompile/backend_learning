//1st server making 
const http=require('http');

const server = http.createServer(
    (request, response) => {
    console.log(request);
    process.exit(); // helps to stop the event loop
    } 
);

const PORT=3001;
server.listen( PORT, () =>{
    console.log(`Server Running on address http://localhost:${PORT}`);
});