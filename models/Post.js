const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    postTitle: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
    },
    Author: {
        type: String,
        required: true
    },
    Rank: {
        type: Number,
        required: true
    },
    Visible: {
        type: Boolean
    },
    Domain: {
        type: String
    },
    Summary: {
        type: String
    },
    Tags: {
        type: [String]
    },
    Comments: {
      type: [{
          Body: String,
          createdOn: {
              type: Date,
              default: Date.now
          },
          Author: String
      }]
    },
    createdOn: {
     type: Date,
     default: Date.now
    },
    url: {
        type: String
    },
    Content: {
        type: String
    }

});

module.exports = mongoose.model("Posts", PostSchema);