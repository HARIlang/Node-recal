const http = require('http'); //  getting http module form the node
const port = 8000;
const server = http.createServer((req,res)=>{ // creating the server

  
    if(req.url==="/" && req.method==="GET"){          // home page using get method

     res.end("this is home page");

    }
    
    else if(req.url==="/about" && req.method ==="GET"){   // about page using the get 
     
         res.end("about page");
      

    }
    else if(req.url=="/contact" && req.method==="GET"){ 
        
      res.end("contact page");                    // contact page using the get  method 
    }
    else{                                           // error 404 page is added
        res.statusCode = 404;
        res.end("error  404 something went wrong");
    }
});
server.listen(port,()=>{     // running the server 

 console.log("the server is running")

})