const { db } = require('./index.js');

const getAllPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL PICTURES!',
      });
    })
  .catch(err => {
    return next(err);
  });
};

const getAllPicturesFromAlbum = (req, res, next) => {
  let pictureId = parseInt(req.params.id);
  db.any('SELECT * FROM pictures WHERE album_id=$1', [pictureId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ALL PICTURES FROM ONE ASSHOLES ALBUM!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addPictureToAlbum = (req, res, next) => {
  db.none('INSERT INTO PICTURES (album_id, url) VALUES (${album_id}, ${url})', {
    album_id: parseInt(req.body.album_id),
    url: req.body.url,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'ADDED PICTURE TO ALBUM',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deletePicture = (req, res, next) => {
  let pictureId = parseInt(req.params.id);
  db.result('DELETE FROM pictures WHERE id=$1', pictureId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Youre good at murder',
      result: result,
    });
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = { getAllPictures, getAllPicturesFromAlbum, addPictureToAlbum, deletePicture };
