//taking input from user
//1st server making 

const fs=require('fs');

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);

    if(req.url==='/'){
       res.write('<h1>Welcome to Home page</h1>');

        res.write('<form action="/submit-details" method="POST">');

        res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');

        res.write('<label for="gender">Gender:</label>');

        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');

        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br><br>');

        res.write('<button type="submit">Submit</button>');

        res.write('</form>');

        return res.end();


    }
    else if (req.url.toLowerCase() ==="/submit-details" && req.method==="POST"){
       
        //buffer chunks 
        const body=[];

        //chunks of data 
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk); // here we are pushing the chunks of data into the body array
        });
        req.on('end', () => {
            const fullbody = Buffer.concat(body).toString();
            console.log(fullbody);
            //parsing the URL encoded data
            const params = new URLSearchParams(fullbody);
            //const jsonObject={};
            //for(const [key, value] of params.entries()){
            //   jsonObject[key]=value;
            // }
           const jsonObject = Object.fromEntries(params.entries()); //shortcut to convert URLSearchParams to JSON object
            console.log(jsonObject);
            //Output: { name: 'John Doe', gender: 'male'
            fs.writeFileSync('user.txt', JSON.stringify(jsonObject));
        })
        
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }
    else if(req.url==='/products'){
       res.write('<body><h1>This is the PRODUCTS PAGE </h1></body>');
       return res.end();
    }
    else{
        res.setHeader('Context-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding </title></heading>');
        res.write('<body><h1> hello ike and share </h1></body>')
        res.write('</html>');
        return res.end();

    }
    
} 

module.exports = userRequestHandler;

