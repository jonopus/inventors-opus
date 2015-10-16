var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	console.log('Hello Http');
	res.end('Hello Http');
});
server.listen(8000);
console.log('listinging on 8000');