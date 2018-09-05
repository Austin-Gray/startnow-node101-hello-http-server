// write your code here
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    console.log();
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World'); //write a response to the client
    res.end(); //end the response
}).listen(8080, function(){console.log('The server is now listening on port 8080')}); //the server object listens on port 8080