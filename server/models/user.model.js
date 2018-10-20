const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    DisplayName: {
        type: String,
        required: true
    },
    Score: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    isDarkMode: {
        type: Boolean
    },
    Email: {
        type: String
    },
    url: {
        type: String
    },
    Currency: {
        type: Number
    },
    isDev: {
        type: Boolean
    },
    Icon: {
        type: String
    },
    numPosts: {
        type: Number,
        required: true
    },
    Subscriptions: {
        type: [{
            Name: String,
            SubscribedForm: String,
            isMod: Boolean
        }]
    }
});

module.exports = mongoose.model("Users", UserSchema);