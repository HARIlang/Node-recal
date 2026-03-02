const http = require("http"); //  getting http module form the node
const port = 8000;

 const users = [
  { id: 1, name: "Arun Kumar", email: "arun@example.com", age: 25, role: "user", isActive: true },
  { id: 2, name: "Priya Sharma", email: "priya@example.com", age: 28, role: "admin", isActive: true },
  { id: 3, name: "Rahul Verma", email: "rahul@example.com", age: 22, role: "user", isActive: false },
  { id: 4, name: "Sneha Reddy", email: "sneha@example.com", age: 30, role: "manager", isActive: true },
  { id: 5, name: "Karthik Raj", email: "karthik@example.com", age: 27, role: "user", isActive: true },
  { id: 6, name: "Divya Nair", email: "divya@example.com", age: 24, role: "user", isActive: false },
  { id: 7, name: "Vikram Singh", email: "vikram@example.com", age: 31, role: "admin", isActive: true },
  { id: 8, name: "Meena Iyer", email: "meena@example.com", age: 26, role: "user", isActive: true },
  { id: 9, name: "Rohit Das", email: "rohit@example.com", age: 29, role: "manager", isActive: false },
  { id: 10, name: "Anjali Gupta", email: "anjali@example.com", age: 23, role: "user", isActive: true },
  { id: 11, name: "Sanjay Patel", email: "sanjay@example.com", age: 32, role: "admin", isActive: true },
  { id: 12, name: "Kavya Menon", email: "kavya@example.com", age: 21, role: "user", isActive: false },
  { id: 13, name: "Amit Yadav", email: "amit@example.com", age: 35, role: "manager", isActive: true },
  { id: 14, name: "Pooja Sinha", email: "pooja@example.com", age: 27, role: "user", isActive: true },
  { id: 15, name: "Naveen Rao", email: "naveen@example.com", age: 33, role: "admin", isActive: false },
  { id: 16, name: "Shreya Kapoor", email: "shreya@example.com", age: 26, role: "user", isActive: true },
  { id: 17, name: "Manoj Kumar", email: "manoj@example.com", age: 28, role: "manager", isActive: true },
  { id: 18, name: "Deepa Joshi", email: "deepa@example.com", age: 24, role: "user", isActive: false },
  { id: 19, name: "Harish Babu", email: "harish@example.com", age: 29, role: "admin", isActive: true },
  { id: 20, name: "Lakshmi Devi", email: "lakshmi@example.com", age: 30, role: "user", isActive: true }
];

const server = http.createServer((req, res) => {
  // creating the server

  if (req.url === "/" && req.method === "GET") {
    // home page using get method

    res.end("this is home page");
  } else if (req.url === "/about" && req.method === "GET") {
    // about page using the get

    res.end("about page");
  } else if (req.url == "/contact" && req.method === "GET") {
    res.end("contact page"); // contact page using the get  method




    
  } 
  
  
  else if(req.url === '/api/users' && req.method ==="GET"){  // user list api added
     
  res.setHeader("Contend-Type","application/json");
  res.end(JSON.stringify(users));
  }
  else {
    // error 404 page is added
    res.statusCode = 404;
    res.end("error  404 page not  found");
  }
});
server.listen(port, () => {
  // running the server

  console.log("the server is running");
});
