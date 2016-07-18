var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient; 
var myCollection;

app.post('/', function (req, res) {
  console.log(__dirname	);
  console.log("-----------------req--------------",req.body);
  console.log("+++++++++++++++++++++++++res++++++++++++++++++",res);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/signup.html");
});
// app.get('/signup.js?', function (req, res) {
//   console.log(__dirname	);
//   console.log(req.body);
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  var db = MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
	    if(err)
	        throw err;
	    else{
		    console.log("connected to the mongoDB !");
		    myCollection = db.collection('test_collection');
	    }
    });
});



