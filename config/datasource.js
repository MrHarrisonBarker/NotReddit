const mongoose = require("mongoose");

const dbURI =
  "mongodb://snek:xAKV2E0ydCDCYkCh@notreddit-shard-00-00-s8zjg.mongodb.net:27017,notreddit-shard-00-01-s8zjg.mongodb.net:27017,notreddit-shard-00-02-s8zjg.mongodb.net:27017/test?ssl=true&replicaSet=NotReddit-shard-0&authSource=admin&retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// Models go here

require("../models/Post.js");
require("../models/Domain");