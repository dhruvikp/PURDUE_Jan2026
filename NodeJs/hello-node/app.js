
const http = require('http');

const server = http.createServer((req, res) => {


  if(req.method === "POST") {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log('Received POST data:', body);
      
      
        
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<html><body><h1>Received POST data:</h1><pre>${body}</pre></body></html>`);
    });
  } 
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
