const http = require('http');
const fs = require('fs');

// Read the file path from the second command-line argument
const filePath = process.argv[3];

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Create a read stream from the file and pipe it to the response
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

// Listen on the port specified in the first command-line argument
server.listen(Number(process.argv[2]));
