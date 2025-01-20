// Create web server
const express = require('express');
// Create express application
const app = express();
// Create a port number
const port = 3000;
// Create a route
app.get('/comments', (req, res) => {
    // Send a response
    res.send('Comments will be displayed here');
});
// Listen to port
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});