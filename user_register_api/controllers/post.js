
const Post = require('../models/postModel');

// READ PRODUCTS
const getAllProducts = async(req, res, next)=>{
    try {
        const posts = await Post.find({});
        res.send(posts);
    } catch (error) {
        next(error);
    }
}

const getUserProducts = async(req, res, next)=>{
    try {
        const {userId} = req.params;
        const posts = await Post.find({userId});
        res.send(posts);
    } catch (error) {
        next(error);
    }
}

// CREATE PRODUCTS
const createProduct = async(req, res, next)=>{
    try {
        console.log(req.body)
        const {userId, imgUrl, description} = req.body || req.query;
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
}

// UPDATE PRODUCTS
const updateProduct = async(req, res, next)=>{
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
}

// DELETE PRODUCTS
const deleteProduct = async(req, res, next)=>{
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
}

module.exports = { getAllProducts, getUserProducts, createProduct, updateProduct, deleteProduct };
