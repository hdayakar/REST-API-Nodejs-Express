# REST-API-Nodejs-Express
Simple REST API with Nodejs and Express

### Install the express tool to generate a complete express template
`npm install -g express-generator`

### Create package.json 
Open up your cmd in the folder you want to create your app in and type `npm init` to interactively create your package.json file

### Installing express
`npm install express --save`

### Installing cors
`npm install cors --save`

### Creating app
```
var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var users = [];
users.push(
	{
		"id": "1",
		"name": "user1",
	},
	{
		"id": "2",
		"name": "user2",
	}
);

app.get("/plans", (req, res, next) => {
	res.json([
		{
			"id": "1",
			"plan": "basic",
		},
		{
			"id": "2",
			"plan": "premium",
		},
	]);
});

app.get("/users", (req, res, next) => {
	res.json(users);
});

app.post('/users', function (req, res) {
	const newId = (users.length+1).toString();
	users.push(
		{
			"id": newId,
			"name": req.body.name,
		}
	);
	res.send(users[users.length-1]);
})

app.delete('/users/:userId', (req, res, next) => {
	users = users.filter((item) => item.id !== req.params.userId);
	res.send("Deleted user"+req.params.userId);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
```

### Running your app
`node index.js`

To view our data, open up your browser and enter `http://localhost:3000/url`
