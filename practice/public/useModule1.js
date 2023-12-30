const m1 = require("./module1")
const http = require("http")
const fs = require("fs")
const url = require("url")
const m2 = require("./moduleData")
var server = http.createServer(function (req, resp) {

    //localhost:9090/auth?email="asdsa"%password="sadsad"
    var q = url.parse(req.url, true)
    //q have two objects-1)pathname="/uri" 2)query={email="sadas",password="adsasd"}
    if (q.pathname == "/auth") {
        if (m2.getData.email == q.query.email) {
            if (m2.getData.password == q.query.password) {
                resp.write(`<html><body>
                <h1>Authorization success</h1>
                </body></html>`)
                resp.end();
            }
        }
    }
    if (req.url == "/login") {
        var page = fs.createReadStream("./public/login.html")
        resp.setHeader("content-type", "text / html")
        page.pipe(resp)

    } else if (req.url == "/home") {

    }
    else {
        resp.writeHead(404, "Not Found");
    }
})
server.listen(9090, function () {
    console.log("server started")
})