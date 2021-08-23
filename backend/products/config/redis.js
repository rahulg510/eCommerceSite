const redis = require("redis");
require('dotenv').config({path: "./config/config.env"});

const REDIS_PORT = process.env.REDIS_PORT || 6379;

const redisClient = redis.createClient(REDIS_PORT);

module.exports = redisClient;