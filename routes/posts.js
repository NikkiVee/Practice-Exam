const express = require('express');
const router = express.Router();
const { getAllPosts, getSinglePost, editPost, deletePost } = require('../db/queries/post_queries.js');

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);

module.exports = router;
