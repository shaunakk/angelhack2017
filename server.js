const express = require('express');
const app = express();
const path = require('path');
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.join(__dirname, 'echoless', 'build')));

app.get('*', (req, res) => {
      res.render(path.resolve(__dirname, 'echoless', 'build', 'index.html')); ===
      ===
      =
      app.get('/', (req, res) => {
        res.sendFile(__dirname + '/echoless/build/index.html');
      });

      app.listen(app.get('port'), function() {
        console.log("Node app is running at localhost:" + app.get('port'));
      })
