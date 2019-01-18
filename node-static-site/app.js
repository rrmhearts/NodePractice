const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  var url = req.url;

  switch(url) {
	case '/':
		getStaticFileContent(res, 'public/home.html', 'text/html');
		break;
	case '/about':
		getStaticFileContent(res, 'public/about.html', 'text/html');
		break;
	case '/contact':
		getStaticFileContent(res, 'public/contact.html', 'text/html');
		break;
	default:
		res.writeHead(404, {'Content-Type':'text/plain'});
		res.end('404 -- Page not found.');
		break;
  }
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World\n');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getStaticFileContent(resp, filepath, contentType){
   fs.readFile(filepath, function(error, data) {
	if (error) {
		resp.writeHead(500, {'Content-Type':'text/plain'});
		resp.end('500 -- Internal Server Error.');
	}
	if (data) {
		resp.writeHead(200, {'Content-Type':'text/plain'});
		resp.end(data);
	}

   });
}
