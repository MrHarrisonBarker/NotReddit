require("./config/datasource");

const express = require("express");
const bodyParser = require("body-parser");
const postController = require("./controllers/postController");

const app = express();
const port = process.env.PORT || 3301;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO : Implement comments model and controller

app
  .route("/posts")
  .get(postController.listAllPosts)
  .post(postController.createPost);

app
  .route("/posts/:postid")
  .get(postController.readPost)
  .put(postController.updatePost)
  .delete(postController.deletePost)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });