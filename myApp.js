let express = require('express');
let app = express();

// Log "Hello World" to the console
console.log("Hello World");
// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
  });
module.exports = app;
