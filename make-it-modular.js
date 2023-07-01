const mymodule = require('./mymodule');

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

mymodule(directoryPath, fileExtension, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  files.forEach((file) => console.log(file));
});
