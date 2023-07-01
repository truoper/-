const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL to get the pathname and query parameters
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Set the Content-Type header to indicate JSON response
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (pathname === '/api/parsetime') {
    // Handle '/api/parsetime' endpoint
    const iso = query.iso;
    const date = new Date(iso);
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.end(JSON.stringify(response));
  } else if (pathname === '/api/unixtime') {
    // Handle '/api/unixtime' endpoint
    const iso = query.iso;
    const unixtime = new Date(iso).getTime();
    const response = {
      unixtime: unixtime
    };
    res.end(JSON.stringify(response));
  } else {
    // Handle unknown endpoint
    res.writeHead(404);
    res.end();
  }
});

// Listen on the port specified in the first command-line argument
server.listen(Number(process.argv[2]));
