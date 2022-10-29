const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

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

app.listen(3000, function(req, res) {
    console.log("Server started on port 3000");
});