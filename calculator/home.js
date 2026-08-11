const homeRequestHandler =(req,res)=>{
    res.write("<h1> Welcome to Calculator Page </h1>");
        res.write(` <html> 
                    <body>
                    <form  action="/cal-result" method="POST">
                    <input type="text" placeholder="Enter the 1st no" name="first"/>
                    <input type="text" placeholder="Enter the 2nd no" name="second"/>
                    <input type="submit" value="sum">
                    </form>
                    </body>
                    </html>`);
        res.end();
}
exports.homeRequestHandler= homeRequestHandler;