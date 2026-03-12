
const http = require('http');

const server = http.createServer((req, res) => {

    console.log(`Received request: ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Processing request...');

    
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
