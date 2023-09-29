var http = require('http');
var upper_case = require('upper-case');
http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(upper_case.upperCase("Hello World!"));
    res.end();
}).listen(8080);