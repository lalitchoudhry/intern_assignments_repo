
const express = require('express');
const auth = require('../middleware/auth');
const { getUser, addRemoveFriend, getUserFriends } = require('../controllers/user');

const router = express.Router();

// READ
router.get("/:id", auth, getUser);
router.get("/:id/friends", auth, getUserFriends);

//UPDATE
router.patch("/:id/:friendId", auth, addRemoveFriend);

module.exports = router;
