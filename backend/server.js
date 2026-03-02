const http = require('http'); //  getting http module form the node
const port = 8000;
const server = http.createServer((req,res)=>{ // creating the server

  
    if(req.url==="/" && req.method==="GET"){

     res.end("this is home page");

    }
    

});
server.listen(port,()=>{     // running the server 

 console.log("the server is running")

})