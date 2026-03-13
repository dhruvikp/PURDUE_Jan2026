
const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === "/" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Welcome to the Home Page</h1></body></html>');
    }

    else if(req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>About Us</h1><p>This is the about page.</p></body></html>');
    }

    else if(req.url === "/contact" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Contact Us</h1><p>This is the contact page.</p></body></html>');
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>404 Not Found</h1></body></html>');
    }


});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
