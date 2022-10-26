var express = require("express"); //requiring express module
var app = express(); //creating express instance
var fs = require("fs"); //require fs(file system) module
var request = require("request"); //requiring request module

app.get("/", function(req, res) {
 //calling request function
 request("http://pingb.in/p/4dbd7d0c90dcb43463d680a8904b", function(error, response, body) {
   if (!error && response.statusCode == 200) {
     // writing the response to a file named data.html
     fs.writeFileSync("data.html", body);
   }
 });
});
