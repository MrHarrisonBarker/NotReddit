const mongoose = require("mongoose");
const config = require('./config');

mongoose.connect(config.dbURL, config.options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

// Models go here

require("../models/post.model");
require("../models/domain.model");
require("../models/user.model");