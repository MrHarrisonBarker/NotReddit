const express = require("express");
const bodyParser = require("body-parser");
const postController = require("./controllers/postController");
const domainController = require("./controllers/domainController")

require("./config/datasource");

const app = express();
const port = process.env.PORT || 3301;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
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

app
    .route("/posts/:domainname")
    .get(postController.listAllPostsByDomain());

app
    .route("/domains")
    .get(domainController.listAllDomains)
    .post(domainController.createDomain);

app
    .route("/domains/:domainid")
    .get(domainController.readDomain)
    .put(domainController.updateDomain)
    .delete(domainController.deleteDomain);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });