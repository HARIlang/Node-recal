const http = require('http'); //  getting http module form the node
const port = 8000;
const server = http.createServer((req,res)=>{ // creating the server

  
    if(req.url==="/" && req.method==="GET"){          // home page using get method

     res.end("this is home page");

    }
    
    else if(req.url==="/about" && req.method ==="GET"){   // about page using the get 
     
         res.end("about page");
      

    }
    else if(req.url=="contact" && method==="GET"){  // contact page using the get  method       res.end("contact page");
    }
});
server.listen(port,()=>{     // running the server 

 console.log("the server is running")

})