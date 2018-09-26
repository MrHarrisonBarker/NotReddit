const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postTitle: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    createdOn: {
     type: Date,
     default: Date.now
    }

    // TODO : Create more realistic modelto represent a post 

});

module.exports = mongoose.model("Posts", PostSchema);