const express = require('express');
const app = express();
// Set Handlebars.
var exphbs = require("express-handlebars");
const controllers = require('./controllers/burgersController');
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(controllers);

app.listen(PORT, ()=> console.log('app is listening on port '+PORT));