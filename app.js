const express    =  require("express");
const bodyParser =  require("body-parser");
const path       =  require("path");
const pug        =  require("pug");
const mailer     =  require("nodemailer");
const app        =  express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//--- Application constants
const acc = {user: "cfeiend4835", pass: "bravO*496"};
const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: acc.user, 
        pass: acc.pass  
    }
});

app.post("/mail_the_pack", function(req, res){
    let name = req.body.name;
    let email = req.body.from;
    let service = req.body.service;
    let msg = req.body.msg;
    // setup email data with unicode symbols
    let mailOptions = {
        from: email, // sender address
        to: 'friend.colin31@gmail.com', // list of receivers
        subject: name + " is interested in " + service, // Subject line
        text: msg + "reply to - " + email
    };
    let autoReply = {
        from: 'cfeiend4835@gmail.com',
        to: email,
        subject: "Thank you!",
        text: "Thank you for your interest in the Pack...."
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
    transporter.sendMail(autoReply, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
    res.redirect("/#contact");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname +'/index.html'));
})

app.listen(5000, function(){
    console.log("app is running on port 8080...");
});