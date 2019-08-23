const express = require("express");
const app = express();
const users = require("./users")

app.get("/api/users", (request, response, next) => {
    console.log(request.query);
if (request.query.first_name) {

   const filteredUsers = users.filter(user => user.first_name === request.query.first_name);
    response.json(filteredUsers)
} else {
    response.json(users);
}
});

app.get("/api/users/:userId", (request, response, next) => {
const user = users.find(user => user.id === +request.params.userId);
console.log(user)
if (!user){
    response.status(404).json("No user found")
} else {
    response.json(user);
}
});

app.listen(5050, () => {
    console.log("Commander on deck")
});
