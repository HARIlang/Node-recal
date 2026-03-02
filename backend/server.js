const http = require('http');
const port = 8000;
const server = http.createServer((req,res)=>{

  res.end("the server is runing in port 8000 (local-host)");

});
server.listen(port,()=>{

 console.log("the server is running")

})