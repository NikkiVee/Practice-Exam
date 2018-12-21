const express = require('express');
const router = express.Router();
const { getAllAlbums, addAlbum } = require('../db/queries/albums_queries.js');

router.get('/', getAllAlbums);
router.post('/', addAlbum);

module.exports = router;
