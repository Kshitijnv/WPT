const m1 = require("./module1");
const m2 = require("./logindetails");
const http = require("http");
const fs = require("fs");
const url = require("url");

/* q ={pathname:"request uri",query{
  email:user1,
  password:user1
}}
*/
var server = http.createServer(function (req, resp) {
  //To separate the query String & Uri
  var q = url.parse(req.url, true);
  //if Exactly uri is /login then go to login page
  if (q.pathname === "/login") {
    resp.setHeader("Content-Type", "text/html");
    var respData = fs.createReadStream("./public/login.html");
    respData.pipe(resp);
  } else {
    //  Handle other paths using switch or additional if statements
    switch (q.pathname) {
      case "/Calc":
        //Get the data from Query string Bcause url.parse() have 2 properties:
        //1)pathname -for uri
        //2)query object - which have all the form data
        var nm = q.query.name;
        var pwd = q.query.password;

        if (nm === m2.getData().name) {
          if (pwd === m2.getData().password) {
            resp.setHeader("Content-Type", "text/html");
            var respData = fs.createReadStream("./public/Calc.html");
            respData.pipe(resp);
          }
        }
        break;
      case "/result":
        var num1 = parseInt(q.query.num1);
        if (q.query.btn === "add") {
          var num2 = parseInt(q.query.num2);
          var result = m1.Addition(num1, num2);
          resp.setHeader("Content-Type", "text/html");
          resp.write("<html><body>");
          resp.write("<h1>Result:</h1>");
          resp.write(
            `<p>The result of adding ${num1} and ${num2} is: ${result} </p>`
          );
          resp.write("</body></html>");
          resp.end();
        }

        break;
    }
  }
});
server.listen(9090, function () {
  console.log("server started with port number 9090 ");
});
//If want to stop the server explicitly otherwise it will stop when you close the browser
// setTimeout(() => {
//   server.close(() => {
//     console.log("Server is now closed");
//   });
// }, 5000);
