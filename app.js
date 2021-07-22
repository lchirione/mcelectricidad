// initilitation
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

var path = require('path');
const hbs = require('hbs');


const indexRouter = require('./routes/indexRoutes')


// view engine

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));


// routes
app.use('/',indexRouter);

// run server
app.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});