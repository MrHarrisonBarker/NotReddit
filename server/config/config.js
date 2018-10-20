require('dotenv').config();

const config = {
    env: process.ENV,
    dbURL: process.DB_URL,
    options: {
        reconnectTries: Number.MAX_VALUE,
        poolSize: 10
    }
};

module.exports = config;