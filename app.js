const express    =  require("express");
const bodyParser =  require("body-parser");
const pug        =  require("pug");
const mailer     =  require("nodemailer");
const app        =  express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("landing");
})

app.listen(8080, function(){
    console.log("app is running on port 8080...");
});