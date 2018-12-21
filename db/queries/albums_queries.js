const { db } = require('./index.js');

const getAllAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL ALBUMS!',
      });
    })
  .catch(err => {
    return next(err);
  });
};

const addAlbum = (req, res, next) => {
  db.none('INSERT INTO albums (user_id) VALUES (${user_id}', { user_id: parseInt(req.body.user_id) })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Congrats on your NEW ALBUM',
    });
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = { getAllAlbums, addAlbum };
