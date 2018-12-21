const express = require('express');
const app = express();
const bp = require('body-parser');
const users = require('./routes/users.js');
const posts = require('./routes/posts.js');
const likes = require('./routes/likes.js');
const comments = require('./routes/comments.js');
const albums = require('./routes/albums.js');
const pictures = require('./routes/pictures.js');

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/users', users);
app.use('/posts', posts);
app.use('/likes', likes);
app.use('/comments', comments);
app.use('/albums', albums);
app.use('/pictures', pictures);

app.get('/', (req, res) => {
  res.send('This is the homepage');
});

app.get('*', (req, res) => {
  res.send('error');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
