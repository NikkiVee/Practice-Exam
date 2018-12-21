const { db } = require('./index.js');

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL COMMENTS!',
      });
    })
  .catch(err => {
    return next(err);
  });
};

const getAllCommentsFromPost = (req, res, next) => {
  let commenterId = parseInt(req.params.id);
  db.any('SELECT * FROM comments WHERE post_id=$1', [commenterId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ALL COMMENTS FROM ONE ASSHOLE!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addComment = (req, res, next) => {
  db.none('INSERT INTO comment (commenter_id, post_id) VALUES (${commenter_id}, ${post_id})', {
    commenter_id: parseInt(req.body.commenter_id),
    post_id: req.body.post_id,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'ADDED COMMENT TO POST',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const editComment = (req, res, next) => {
  db.none('UPDATE comments SET commenter_id=${commenter_id}, post_id=${post_id}, body=${body}', {
    commenter_id: parseInt(req.body.commenter_id),
    post_id: req.body.post_id,
    body: req.body.body,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'succes',
      message: 'Congrats on your edited comment',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deleteComment = (req, res, next) => {
  let commentId = parseInt(req.params.id);
  db.result('DELETE FROM comments WHERE id=$1', commentId)
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

module.exports = { getAllComments, getAllCommentsFromPost, addComment, editComment, deleteComment };
