const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());

app.use(express.static(__dirname + '/public/assets/js'));

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server listening on ' + PORT);
});
