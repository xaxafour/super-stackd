var http = require('http');
var port = 1337;

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	res.end("Hello");
}).listen(port);

console.log('Server running at http://localhost:'+port);
