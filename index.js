const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

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

const restaurants = [
    {
        "_id": 1,
        "name": "Kacchi Bhai",
        "email": "kacchibhai@gmail.com"
    },
    {
        "_id": 2,
        "name": "Sultan's Dine",
        "email": "sultansdine@gmail.com"
    },
    {
        "_id": 3,
        "name": "Star Kabab",
        "email": "starkabab@gmail.com"
    },
    {
        "_id": 4,
        "name": "Handi Restaurant",
        "email": "handi@gmail.com"
    }
];

const animals = [
    {
        id: 1,
        name: "Royal Bengal Tiger",
        scientificName: "Panthera tigris tigris"
    },
    {
        id: 2,
        name: "African Elephant",
        scientificName: "Loxodonta africana"
    },
    {
        id: 3,
        name: "Domestic Cat",
        scientificName: "Felis catus"
    },
    {
        id: 4,
        name: "Domestic Dog",
        scientificName: "Canis lupus familiaris"
    }
];

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/restaurants", (req, res) => {
    res.send(restaurants);
});

app.get("/animals", (req, res) => {
    res.send(animals);
});

app.post("/users", (req, res) => {
    console.log("Users post method");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;

    // add data to the server
    users.push(newUser);

    res.send(newUser);
});

app.post("/restaurants", (req, res) => {
    console.log("Restaurants post method");
    const newRestaurant = req.body;
    newRestaurant.id = restaurants.length + 1;

    // add data to the server
    restaurants.push(newRestaurant);
    res.send(newRestaurant);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})