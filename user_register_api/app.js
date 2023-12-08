// packeges
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('./config/database');

// database models
const User = require('./models/userModel');

app.use(express.json());
app.use(cors());

// routes
app.get('/health', (req, res)=>{
    res.send("Lalit is at home");
})

// user register route
app.post('/register', async(req, res, next)=>{
    try {
        const {username, email, password} = req.body;
        console.log(req.body)
        if (!(username && email && password)) {
            return res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            console.log('409')
            return res.status(409).send("User Already Exist. Please Login");
        }
        console.log('again')
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username: username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        res.status(201).json(user.username);
    } catch (err) {
        next(err);
        // res.status(400).json({message: err.message});
    }
})

// login user
app.post('/login', async(req, res, next)=>{
    try {
        console.log(req.body)
        const {username, password} = req.body;
        if (!(username && password)) {
            return res.status(400).json('All input is required')
        }

        const user = await User.findOne({username});

        if (user && (await bcrypt.compare(password, user.password))) {
            //create token
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.TOKEN_KEY
            );
            user.token = token;

            return res.status(200).json(token);
        }
        res.status(400).json("Invalid Credential")
    } catch (err) {
        next(err);
    }
})

module.exports = app;