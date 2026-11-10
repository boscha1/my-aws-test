const http = require('http');

const html = `<!DOCTYPE html>
<html>
<head><title>It Works</title></head>
<body><h1>Deployed to AWS!!!!</AWS></h1></body>
</html>`;

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end('{"status":"ok"}');
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(3000, () => console.log('listening on 3000'));