const express = require('express');
const {login, register, forgetPassword, getResetPassword, postResetPassword} = require('../controllers/userAuth');

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.post('/forget-password', forgetPassword);

router.get('/reset-password/:id/:token', getResetPassword);

router.post('/reset-password/:id/:token', postResetPassword);

module.exports = router;