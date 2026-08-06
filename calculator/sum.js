const sumRequestHandler=(req, res)=>{
    console.log("In sum request handler ", req.url);
    //we are taking the chunks 
    // see the chunks.js once 
    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk)
    });
    req.on('end',()=>{
        const fullbody=Buffer.concat(body).toString();
        console.log(fullbody);
        const params=new URLSearchParams(fullbody);
        const jsonObject=Object.fromEntries(params);
        console.log(jsonObject);
        const result= Number(jsonObject.first)+Number(jsonObject.second);
        console.log(result);
    });
    
}

exports.sumRequestHandler=sumRequestHandler;