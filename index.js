const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.port || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello world")
})

const users = [
    {
        id: 1,
        name: "Rahim Uddin",
        email: "rahim@example.com",
        age: 28,
        role: "Admin"
    },
    {
        id: 2,
        name: "Karim Ahmed",
        email: "karim@example.com",
        age: 24,
        role: "User"
    },
    {
        id: 3,
        name: "Fatema Khatun",
        email: "fatema@example.com",
        age: 26,
        role: "Moderator"
    },
    {
        id: 4,
        name: "Sakin Islam",
        email: "sakin@example.com",
        age: 30,
        role: "User"
    }
];

app.get("/users", (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})