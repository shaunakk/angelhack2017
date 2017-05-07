const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.resolve(__dirname, 'echoless', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'echoless', 'build', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
