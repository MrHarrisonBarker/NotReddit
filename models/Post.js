const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    postTitle: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
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
    }

});

module.exports = mongoose.model("Posts", PostSchema);