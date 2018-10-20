const express = require('express');
const postController = require('../controllers/post.controller');

const app = express();


app.route('/')
    .get(postController.listAllPosts)
    .post(postController.createPost);

app.route("/:postid")
    .get(postController.readPost)
    .put(postController.updatePost)
    .delete(postController.deletePost);

module.exports = app;