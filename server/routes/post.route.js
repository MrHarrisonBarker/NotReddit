const express = require('express');
const postController = require('../controllers/post.controller');

const app = express();
const router = express.Router();

router.get('/', function(req, res, next) {
    postController.listAllPosts();
});
//     .get(postController.listAllPosts)
//     .post(postController.createPost);
//
// app.route("/:postid")
//     .get(postController.readPost)
//     .put(postController.updatePost)
//     .delete(postController.deletePost);

module.exports = router;