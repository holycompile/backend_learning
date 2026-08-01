
const requestHandler=(req, res)=>{

    console.log(req.url, req.method);

    if(req.url==='/'){
        res.write("<h1> Welcome to Home Page of Calculator </h1>");
        res.write("Here is the link to the Calculator : <a href='/calculator'>Calculator</a>");
        return res.end();
    }
    else if(req.url.toLowerCase()==='/calculator'){
        res.write("<h1> Welcome to Calculator Page </h1>");
        return res.end();
    }
    else {
        res.write("<h1> Page 404 Not found  </h1>");
    }

}

exports.requestHandler = requestHandler;