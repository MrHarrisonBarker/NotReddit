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
        type: String
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
    Subscribers: {
        type: Number,
        required: true
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
    ViewCount: {
        type: Number
    },
    isRemoved: {
        type: Boolean
    },
    DefaultOrder: {
        type: String
    },
    PinnedPost: {
        type: [{
            id: String
        }]
    },
    Mods: {
        type: [{
            id: String,
            DisplayName: String
        }]
    },
    SideBar: {
        type: {
            Title: String,
            Body: String,
            Links: [String],
            PromotedSubs: [String]
        }
    }
});

module.exports = mongoose.model("Domains", DomainSchema);