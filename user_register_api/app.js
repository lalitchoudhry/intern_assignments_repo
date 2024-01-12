// packeges
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// router imports
const authRoutes = require('./routes/userAuth');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

// database models
const User = require('./models/userModel');
const Post = require('./models/postModel');

// helper
const sendMail = require("./utils/sendMail");
const auth = require('./middleware/auth');

app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res)=>{
    res.send("Lalit is at home");
})

// AUTH ROUTES
app.use("/api/auth", authRoutes);

// PRODUCT ROUTES
app.use("/api/posts", postRoutes);

// USER ROUTES
app.use("/api/users", userRoutes);

module.exports = app;