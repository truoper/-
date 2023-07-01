const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error('Error:', err);
    }

    const content = data.toString();
    console.log(content.length);
    console.log(content);
  }));
}).on('error', (err) => {
  console.error('Error:', err);
});
