const express = require('express');
const app = express();

app.use(express.static(__dirname + '/distx'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);