const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DomainSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Topic: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Colour: {
        type: String
    },
    Content: {
        type: String
    },
    Icon: {
        type: String
    },
    Links: {
        type: [String]
    },
    Subscribers: {
        type: Number
    }
});

module.exports = mongoose.model("Domains", DomainSchema);