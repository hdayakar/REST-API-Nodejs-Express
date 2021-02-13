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
