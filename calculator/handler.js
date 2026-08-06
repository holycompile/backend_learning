
const {sumRequestHandler}=require('./sum.js')



const requestHandler=(req, res)=>{

    console.log(req.url, req.method);

    if(req.url==='/'){
        res.write("<h1> Welcome to Home Page of Calculator </h1>");
        res.write("Here is the link to the Calculator : <a href='/calculator'>Calculator</a>");
        return res.end();
    }
    else if(req.url.toLowerCase()==='/calculator' ){
        res.write("<h1> Welcome to Calculator Page </h1>");
        res.write(` <html> 
                    <body>
                    <form  action="/cal-result" method="POST">
                    <input type="text" placeholder="Enter the 1st no" name="first"/>
                    <input type="text" placeholder="Enter the 2nd no" name="second"/>
                    <input type="submit" value="sum">
                    <input />
                    </form>
                    </body>
                    </html>`);
        return res.end();
    }
    else if(req.url.toLowerCase()==='/cal-result')
        {
            
            return sumRequestHandler(req, res);
        }
    
    else {
        res.write("<h1> Page 404 Not found  </h1>");
        res.write("<a href='/'>Go to Home Page</a>");
    }

}

exports.requestHandler = requestHandler;