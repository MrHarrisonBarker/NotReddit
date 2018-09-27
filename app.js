require("./config/datasource");

const express = require("express");
const bodyParser = require("body-parser");
const postController = require("./controllers/postController");

const app = express();
const cors = require('cors');
const port = process.env.PORT || 3301;

let corsOptions = {
    origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
}

app.use(cors(corsOptions));
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
  .delete(postController.deletePost)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });