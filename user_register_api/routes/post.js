
const express = require('express');
const auth = require('../middleware/auth');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getUserProducts } = require('../controllers/post');

const router = express.Router();

// READ PRODUCTS
router.get("/", getAllProducts);
router.get("/:userId/posts", auth, getUserProducts);

// CREATE PRODUCTS
router.post("/", auth, createProduct)

// UPDATE PRODUCTS
router.put("/:_id", auth, updateProduct);

// DELETE PRODUCTS
router.delete("/:_id", auth, deleteProduct);

module.exports = router;
