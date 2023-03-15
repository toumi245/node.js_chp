const http = require('http');
const fs = require('fs');
const generatepassword = require('./password-generator');

console.log('HELLO WORLD');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello Node!!!!</h1>\n');


  res.end();
});
  // Creating a file
  fs.writeFile('welcome.txt', 'Hello Node', (err)=> {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  // Reading from a file
  fs.readFile('hello.txt','utf8', function(err, data) {
    if (err) throw err ;
    console.log (data)
  });

server.listen(3004, () => {
  console.log('Server is running on port 3004');
});
