const Post = require("../models/Post");

exports.listAllPosts = (req, res) => {
    Post.find({}, (err, post) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(post);
    });
  };

exports.createPost = (req, res) => {
    let newPost = new Post(req.body);
    newPost.save((err, post) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(post);
    })
}

exports.readPost = (req, res) => {
  Post.findById(req.params.postid, (err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(post);
  })
}

exports.updatePost = (req, res) => {
  Post.findOneAndUpdate(
    { _id: req.params.postid },
    req.body,
    {new: post},
    (err, post) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(post);
    }
  )
}

exports.deletePost = (req, res) => {
  Post.remove({ _id: req.params.postid },(err, post) => {
    if (err) {
      res.status(500).send(err);
    }
  //res.status(200).json({ message: "Post {post} deleted" });
  res.status(200).json({ message: "Post deleted" });
  })
}