// Create web server application with Node.js and Express
// 1. Create a folder named "nodejs-express" and open Visual Studio Code
// 2. Create a file named server.js and copy the code below
// 3. Run the command "npm init" to create a file named package.json
// 4. Run the command "npm install express" to install the Express module
// 5. Run the command "node server.js" to start the application
// 6. Test the application by sending an HTTP GET request to http://localhost:8081/comments

// Load the http module to create an http server.
const http = require('http');
const express = require('express');
const app = express();
const port = 8081;

// Configure our HTTP server to respond with Hello World to all requests.
app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/comments', function(request, response) {
  response.send('Comments page');
});

// Configure our HTTP server to respond with Hello World to all requests.
app.get('/hello', function(request, response) {
  response.send('Hello World!');
});

app.get('/goodbye', function(request, response) {
  response.send('Goodbye World!');
});

app.get('/comments/:id', function(request, response) {
  response.send('Comments page with id ' + request.params.id);
});

// Listen on port 8081, IP defaults to