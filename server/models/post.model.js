const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    postTitle: {
        type: String,
        required: true
    },
    postBody: {
        type: String
    },
    Author: {
        type: {
            DisplayName:String
        },
        required: true
    },
    Rank: {
        type: Number,
        required: true
    },
    Visible: {
        type: Boolean,
        required: true
    },
    Domain: {
        type: String,
        required: true
    },
    Summary: {
        type: String
    },
    url: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    Tags: {
        type: [String]
    },
    Reports: {
        type: Number
    },
    isNSFW: {
        type: Boolean
    },
    viewCount: {
      type: Number
    },
    isRemoved: {
      type: Boolean
    },
    Comments: {
      type: [{
          id: String,
          Body: String,
          createdOn: {
              type: Date,
              default: Date.now
          },
          Author: {
              type: {
                  DisplayName: String
              }
          }
      }]
    },
    ContentType: {
        type: {
            Name: String,
            Source: String
        }
    },
    CrossPost: {
        isCrossPost: Boolean,
        user: String,
        post: String
    }

});

module.exports = mongoose.model("Posts", PostSchema);