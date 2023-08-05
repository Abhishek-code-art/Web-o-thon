const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname,'views'));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.render("home", {title: "Cesta"});
});
app.get("/about", function(req, res) {
    res.render("about", {title: "Cesta-About Us"});
});
app.get("/event", function(req, res) {
    res.render("event", {title: "Cesta-Event"});
});
app.get("/contact", function(req, res) {
    res.render("contact", {title: "Contact"});
});

app.listen(process.env.PORT || 3000, function(req, res) {
    console.log("Server started Successfully");
});