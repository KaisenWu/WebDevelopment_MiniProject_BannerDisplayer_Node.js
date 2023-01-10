const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

app.get("/", function(req,res){
    res.render("index");
})

app.post("/", function(req, res) {
    let firstMsg = req.body.firstMsg;
    res.render("index", {firstMsgPug: firstMsg});
})

app.get("/message", function(req,res){
    res.render("message");
})

app.post("/message", function(req, res) {
    let secondMsg = req.body.secondMsg;
    res.render("message", {secondMsgPug: secondMsg});
})


app.listen(3000, function() {
    console.log("The Server in running on port 3000");
})