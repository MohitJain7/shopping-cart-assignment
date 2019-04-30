const express = require('express');
const path = require('path');
const app = express();

app.use(require('body-parser').json());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/resources/views'));

// using resource route to serve static asserts from resources folder
app.use('/resources', express.static('resources'));

// app routes
require('./routes')(app);

app.listen(8080, () => console.log('8080 is the magic port'));
