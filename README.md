# REST-API-Nodejs-Express
Simple REST API with Nodejs and Express

### Install the express tool to generate a complete express template
`npm install -g express-generator`

### Create package.json 
Open up your cmd in the folder you want to create your app in and type `npm init` to interactively create your package.json file

### Installing express
`npm install express --save`

### Creating app
```
var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
	res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
```

### Running your app
`node app.js`

To view our data, open up your browser and enter `http://localhost:3000/url`
