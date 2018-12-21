const express = require('express');
const router = express.Router();
const { getAllComments, getAllCommentsFromPost, addComment, editComment, deleteComment } = require('../db/queries/comments_queries.js');

router.get('/', getAllComments);
router.get('/posts/:id', getAllCommentsFromPost);
router.post('/', addComment);
router.patch('/:id', editComment);
router.delete('/:id', deleteComment);

module.exports = router;
