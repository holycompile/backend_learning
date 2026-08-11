
const {sumRequestHandler}=require('./sum.js');
const {homeRequestHandler}=require('./home.js');


const requestHandler=(req, res)=>{

    console.log(req.url, req.method);

    if(req.url==='/'){
        res.write("<h1> Welcome to Home Page of Calculator </h1>");
        res.write("Here is the link to the Calculator : <a href='/calculator'>Calculator</a>");
        return res.end();
    }
    else if(req.url.toLowerCase()==='/calculator' ){

        return homeRequestHandler(req,res);
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