const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello World</h1>\n<p>This is a Node App!</p>');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
