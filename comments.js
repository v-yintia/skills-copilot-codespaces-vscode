// Create web server
// Create a server that listens on port 3000
// The server should respond with a file named comments.html when the route /comments is accessed
// Use the fs module to read the file and send it back to the client
// Use the http module to create the server
// Use the fs module to read the file
// Use the res object to send the file back to the client
// Use the listen method to listen on port 3000

// Require the http module
const http = require('http');

// Require the fs module
const fs = require('fs');

// Create a server
http.createServer((req, res) => {
    // Check if the request is for the /comments route
    if (req.url === '/comments') {
        // Read the file comments.html
        fs.readFile('comments.html', (err, data) => {
            // Check if there is an error
            if (err) {
                // Send a 404 response
                res.writeHead(404);
                res.end('Not Found');
            } else {
                // Send the file back to the client
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    } else {
        // Send a 404 response
        res.writeHead(404);
        res.end('Not Found');
    }
}).listen(3000); // Listen on port 3000

// Output
// When the route /comments is accessed, the server should respond with the file comments.html
// If the file is found, the server should send the file back to the client
// If the file is not found, the server should respond with a 404 Not Found response
// The server should listen on port 3000