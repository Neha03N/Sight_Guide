// server/index.js

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/user')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success")
                } else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No record exists")
            }
        })
})

app.get("/user/:email", (req, res) => {
    const email = req.params.email;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.json("User not found");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Internal Server Error");
        });
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if a user with the same email already exists
        const existingUser = await UserModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        // Create a new user if no existing user found
        const newUser = await UserModel.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Registration failed.', error: error });
    }
});


app.listen(3001, () => {
    console.log("server is running")
})
