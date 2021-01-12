const http  = require('http');

// Getting request attribute (headers, method, url, etc.)
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

server.listen(3000);