var currentlyOnline={};

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/listAllOnline', function (req, res) {
  res.send(JSON.stringify(currentlyOnline));
})

app.get('/logConnected/:user', function (req, res) {
  currentlyOnline[req.params.user]={name:req.params.user,time:Math.floor(((new Date).getTime())/ 1000)};
  res.send("success");
})

app.listen(8080, function () { 
  console.log('Example app listening on port 8080!'); 
})

setInterval(function(){ 
    for (i in currentlyOnline){
        if (currentlyOnline[i].time > Math.floor(((new Date).getTime())/ 1000)-30){}else {
            delete currentlyOnline[i];
        }
    }
}, 10000);