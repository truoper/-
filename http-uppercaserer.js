const http = require('http');
const map = require('through2-map');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle only POST requests
  if (req.method === 'POST') {
    // Use through2-map to transform the incoming data to upper-case
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  } else {
    res.end('Only POST requests are supported.');
  }
});

// Listen on the port specified in the first command-line argument
server.listen(Number(process.argv[2]));
