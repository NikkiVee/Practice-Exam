const express = require('express');
const router = express.Router();
const { getAllLikes, getAllLikesFromPost, addLike, deleteLike } = require('../db/queries/likes_queries.js');

router.get('/', getAllLikes);
router.get('/posts/:id', getAllLikesFromPost);
router.post('/', addLike);
router.delete('/:id', deleteLike);

module.exports = router;
