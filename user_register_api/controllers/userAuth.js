
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const sendMail = require('../utils/sendMail');

// REGISTER
const register = async(req, res, next)=>{
    try {
        const {name, email, password} = req.body;
        if (!(name && email && password)) {
            return res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        res.status(201).json(user);
    } catch (err) {
        next(err);
        // res.status(400).json({message: err.message});
    }
}

// LOGIN
const login = async(req, res, next)=>{
    try {
        const {email, password} = req.body;
        if (!(email && password)) {
            return res.status(400).json('All input is required')
        }

        const user = await User.findOne({email});

        if (user && (await bcrypt.compare(password, user.password))) {
            //create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY
            );
            user.token = token;

            return res.status(200).json(token);
        }
        res.status(400).json("Invalid Credential")
    } catch (err) {
        next(err);
    }
}

// FORGET PASSWORD
const forgetPassword = async(req, res, next)=>{
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
}

// RESET PASSWORD
const getResetPassword = async(req, res, next)=>{
    try {
        const {id, token} = req.params;
        const user = await User.findOne({token});
        if (!user) {
            return res.status(401).json("Invalid token")
        }
        res.status(200).send("<h1>Password Reset Page</h1>")
    } catch (error) {
        next(error)
    }
}

const postResetPassword = async(req, res, next)=>{
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
}

module.exports = { login, register, forgetPassword, getResetPassword, postResetPassword };
