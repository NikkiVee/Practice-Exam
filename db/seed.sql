DROP DATABASE IF EXISTS facebook;
CREATE DATABASE facebook;

\c facebook;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL,
   age INT NOT NULL
);

CREATE TABLE posts (
   id SERIAL PRIMARY KEY,
   poster_id INT REFERENCES users(id),
   body TEXT NOT NULL
);

CREATE TABLE likes (
   id SERIAL PRIMARY KEY,
   liker_id INT REFERENCES users(id),
   post_id INT REFERENCES posts(id)
);

CREATE TABLE comments (
   id SERIAL PRIMARY KEY,
   commenter_id INT REFERENCES users(id),
   post_id INT REFERENCES posts(id),
   body TEXT NOT NULL
);

CREATE TABLE albums (
   id SERIAL PRIMARY KEY,
   user_id INT REFERENCES users(id)
);

CREATE TABLE pictures (
   id SERIAL PRIMARY KEY,
   album_id INT REFERENCES albums(id),
   url TEXT NOT NULL
);

INSERT INTO users (name, age)
VALUES ('Nicolle', 30), ('Jonelle', 38), ('Christian', 27);

INSERT INTO posts (poster_id, body)
VALUES (1, 'Today was whack'), (2, 'Yall ever wonder the meaning of life'), (3, 'People be buggin');

INSERT INTO likes (liker_id, post_id)
VALUES (1, 1), (2, 2), (3, 3);

INSERT INTO comments (commenter_id, post_id, body)
VALUES (1, 1, 'Dont say that'), (2, 2, 'Too deep for me buddy. FOH!'), (3, 3, 'Are you on the train?');

INSERT INTO albums (user_id)
VALUES (1), (2), (3);

INSERT INTO pictures (album_id, url)
VALUES (1, 'https://us.123rf.com/450wm/satyrenko/satyrenko1710/satyrenko171000075/88300107-sport-activity-sexy-santa-claus-with-boxing-glove-young-muscular-man-wearing-santa-claus-hat-demonst.jpg?ver=6'), (2, 'https://i.pinimg.com/originals/ec/a8/5c/eca85c1663834f2dd5bf56cbd701916f.jpg'), (3, 'https://cdn.shopify.com/s/files/1/1635/2935/products/34972_large.jpg?v=1492618059');
