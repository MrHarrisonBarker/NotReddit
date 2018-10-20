require('dotenv').config();

const config = {
    env: process.env.NODE_ENV,
    dbURL: 'mongodb://snek:xAKV2E0ydCDCYkCh@notreddit-shard-00-00-s8zjg.mongodb.net:27017,notreddit-shard-00-01-s8zjg.mongodb.net:27017,notreddit-shard-00-02-s8zjg.mongodb.net:27017/test?ssl=true&replicaSet=NotReddit-shard-0&authSource=admin&retryWrites=true',
    port: 4040,
    options: {
        reconnectTries: Number.MAX_VALUE,
        poolSize: 10,
        useNewUrlParser: true
    }
};

module.exports = config;