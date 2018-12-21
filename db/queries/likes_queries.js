const { db } = require('./index.js');

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL LIKES!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllLikesFromPost = (req, res, next) => {
  let likerId = parseInt(req.params.id);
  db.any('SELECT * FROM likes WHERE post_id=$1', [likerId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ALL LIKES FROM ONE ASSHOLE!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addLike = (req, res, next) => {
  db.none('INSERT INTO likes (liker_id, post_id) VALUES (${liker_id}, ${post_id})', {
    liker_id: parseInt(req.body.liker_id),
    post_id: req.body.post_id,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'ADDED LIKE TO POST',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deleteLike = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result('DELETE FROM likes WHERE id=$1', postId)
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

module.exports = { getAllLikes, getAllLikesFromPost, addLike, deleteLike };
