	
const express = require("express");
var fs = require('fs')
var cors = require('cors');

var bodyParser = require('body-parser');

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static('views'))
app.use(express.json({limit:'1mb'}));

//app.post('/',(req, res) => {

//	console.log(req.body)
	

	
//});

app.get("/",(res,req)=>{
res.sendFile("index.html")
})

	




app.listen(8085, () => {
	console.log("Example app listening on port 3000!");
});	
