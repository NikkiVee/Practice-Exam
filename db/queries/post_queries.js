const { db } = require('./index.js');

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL POSTS!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSinglePost = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM posts WHERE id=$1', [userId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ONE POST!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createPost = (req, res, next) => {
  db.none('INSERT INTO posts (poster_id, body) VALUES (${poster_id}, ${body})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Congrats on your new post',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const editPost = (req, res, next) => {
  db.none('UPDATE posts SET poster_id=${poster_id}, body=${body}', {
    poster_id: parseInt(req.body.poster_id),
    body: req.body.body,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'succes',
      message: 'Congrats on your new stupid post',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deletePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE id=$1', postId)
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

module.exports = { getAllPosts, getSinglePost, editPost, deletePost };
