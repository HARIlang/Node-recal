const http = require('http'); //  getting http module form the node
const port = 8000;
const server = http.createServer((req,res)=>{ // creating the server

  res.end("the server is runing in port 8000 (local-host)");

});
server.listen(port,()=>{     // running the server 

 console.log("the server is running")

})