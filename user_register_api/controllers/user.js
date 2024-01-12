const User = require("../models/userModel");

// READ
const getUser = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json("Inavlid user")
        }
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const getUserFriends = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id)) 
        );
        const formattedFriends = friends.map(({_id, name, email}) => {
            return {_id, name, email};
        });
        return res.status(200).json(formattedFriends);
    } catch (error) {
        next(error);
    }
}

// UPDATE
const addRemoveFriend = async(req, res, next) => {
    try {
        const {id, friendId} = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        }
        else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriend = friends.map(({_id, name, email}) => {
            return {_id, name, email};
        });

        return res.status(200).json(formattedFriend);
    } catch (error) {
        next(error);
    }
}

module.exports = {getUser, getUserFriends, addRemoveFriend}
