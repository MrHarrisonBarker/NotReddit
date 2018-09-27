require("./config/datasource");

const express = require("express");
const bodyParser = require("body-parser");
const postController = require("./controllers/postController");

const app = express();
const port = process.env.PORT || 3301;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/posts")
  .get(postController.listAllPosts)
  .post(postController.createPost);

app
  .route("/posts/:postid")
  .get(postController.readPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });