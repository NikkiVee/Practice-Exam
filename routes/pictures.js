const express = require('express');
const router = express.Router();
const { getAllPictures, getAllPicturesFromAlbum, addPictureToAlbum, deletePicture } = require('../db/queries/pictures_queries.js');

router.get('/', getAllPictures);
router.get('/albums/:id', getAllPicturesFromAlbum);
router.post('/albums/:id', addPictureToAlbum);
router.delete('/:id', deletePicture);

module.exports = router;
