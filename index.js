const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('unable to connect databse', err);
	}
	else{
		console.log('connected to database:' + config.db);
	}
	
});

app.use(express.static(__dirname + '/my-app/dist/'))

app.get('*', (req, res)=>{
  res.send(path.join(__dirname + '/my-app/dist/index.html'));
});

app.listen(8080, () =>{
	
	console.log('listening on port 8080');
});