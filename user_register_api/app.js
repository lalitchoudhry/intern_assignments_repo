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
const Post = require('./models/postModel');

// helper
const sendMail = require("./utils/sendMail");
const auth = require('./utils/auth');

app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res)=>{
    res.send("Lalit is at home");
})

// user register route
app.post('/api/register', async(req, res, next)=>{
    try {
        const {username, email, password} = req.body;
        if (!(username && email && password)) {
            return res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
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
app.post('/api/login', async(req, res, next)=>{
    try {
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

// forget_password
app.post("/api/forget-password", async(req, res, next)=>{
    try {
        const {email} = req.body;
        if (!email) {
            return res.status(400).json("email is required");
        }

        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(400).json("Invalid User");
        }
        const token = jwt.sign(
            { user_id: user._id },
            process.env.TOKEN_KEY
        );
        const updateToken = await User.updateOne({email: email}, {$set:{token: token}})
        await sendMail(user, "Reset Password Mail", token);
        return res.status(200).json("Check Your Inbox");

    } catch (error) {
        next(error);
    }
})

// reset_password
app.get("/api/reset-password/:_id/:token", auth, async(req, res, next)=>{
    try {
        const {_id, token} = req.params;
        const user = await User.findOne({token});
        if (!user) {
            return res.status(401).json("Invalid token")
        }
        res.status(200).send("<h1>Password Reset Page</h1>")
    } catch (error) {
        next(error)
    }
})

app.post("/api/reset-password/:id/:token", auth, async(req, res, next)=>{
    try {
        const {id, token} = req.params;
        const user = await User.findOne({token});
        if (!user) {
            return res.status(401).json("Invalid token")
        }

        const newPassword = req.body.password;
        const encryptedPassword = await bcrypt.hash(newPassword, 10);
        const updatedUser = await User.findByIdAndUpdate({_id: user._id}, {$set:{password: encryptedPassword, token: ''}}, {new:true});
        return res.status(201).json("Your Password is Reset successfuly");

    } catch (error) {
        next(error)
    }
})

// get posts
app.get("/api/post", async(req, res, next)=>{
    try {
        const posts = await Post.find({});
        res.send(posts);
    } catch (error) {
        next(error);
    }
})

// Create post
app.post("/api/post", auth, async(req, res, next)=>{
    try {
        console.log(req.body)
        const {userId, imgUrl, description} = req.body;
        if (!(userId, imgUrl, description)) {
            return res.status(400).json("All Input Is Required")
        }

        const post = await Post.create({
            userId: userId,
            imgUrl: imgUrl,
            description: description,
            like: 0,
            comments: [],
            commentLength: 0
        })
        res.status(201).json({message: 'successfuly added', post});
    } catch (error) {
        next(error)
    }
})

// Update Post
app.put("/api/post/:_id/:token", auth, async(req, res, next)=>{
    try {
        const {_id} = req.params;
        let body = req.body;
        console.log("old : ", body);
        if (req.body.comment) {
            let comment = {comment: {$each: [req.body.comment], $position: 0}};
            body.$push = comment;
        }
        for (const key in body) {
            if (body[key] === '' || key === 'comment') {
                delete body[key];
            }
        }
        console.log("new : ", body);
        const post = await Post.findByIdAndUpdate(_id, body);
        if (!post) {
            return res.status(404).json("Cannot find any product1")
        }

        const updatedPost = await Post.findById(_id);
        res.status(200).send(updatedPost);
    } catch (error) {
        next(error);   
    }
})

// Delete Post
app.delete("/api/post/:_id", auth, async(req, res, next)=>{
    try {
        const {_id} = req.params;
        const post = await Post.findByIdAndDelete(_id);
        if (!post) {
            res.status(404).json("Can't be able to delete");
        }
        res.status(200).send(post);
    } catch (error) {
        next(error);
    }
})

module.exports = app;