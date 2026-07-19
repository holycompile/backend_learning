/* Making a Navigation bar with following stuffs:
1) Home 
2) Men
3) Women
3) Kids 
4) Kids 
5) Cart
clicking on any of the above will take you to the respective page. with a welcome messsage of that paerticular section.
*/
const http=require('http');
const fs=require('fs');

const server=http.createServer(
       (req,res)=>
       {
            console.log(req.url, req.method, req.headers);

            if(req.url == '/')
            {
                res.write('<h1>Myntra</h1>');

                res.write('<a href="/home">Home</a><br>');
                res.write('<a href="/men">Men</a><br>');
                res.write('<a href="/women">Women</a><br>');
                res.write('<a href="/kids">Kids</a><br>');
                res.write('<a href="/cart">Cart</a><br>');

                return res.end();
            }
             else if (req.url.toLowerCase() === '/home' )
            {
                res.write('<h1> This is the HOME PAGE </h1>');
                return res.end();
            }
            else if (req.url.toLowerCase() === '/men' )
            {
                res.write('<h1> This is the MEN PAGE </h1>');
                return res.end();
            }
            else if (req.url.toLowerCase() === '/women' )
            {
                res.write('<h1> This is the WOMEN PAGE </h1>');
                return res.end();
            }
            else if (req.url.toLowerCase() === '/kids' )
            {
                res.write('<h1> This is the KIDS PAGE </h1>');
                return res.end();
            }
             else if (req.url.toLowerCase() === '/cart' )
            {
                res.write('<h1> This is the CART PAGE </h1>');
                return res.end();
            }
            else
            {
                res.write('<h1> Page Not Found </h1>');
                return res.end();
            }

            
       }

       
);

const POST=3000;
server.listen( POST, 
       ()=>
       {
        console.log(`Server Running on address http://localhost:${POST}`);
       }
);
