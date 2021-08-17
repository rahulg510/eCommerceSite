const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const dotenv = require("dotenv").config({path: "./config/config.env"})

const AUTH_ALGORITHMS = JSON.parse(process.env.AUTH_ALGORITHMS);
const jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: process.env.AUTH_CACHE,
		rateLimit: process.env.AUTH_RATE_LIMIT,
		jwksRequestsPerMinute: process.env.AUTH_JWKS_REQUESTS_PER_MIN,
		jwksUri: process.env.AUTH_JWKS_URI
  }),
  audience: process.env.AUTH_AUDIENCE,
  issuer: process.env.AUTH_ISSUER,
  algorithms: AUTH_ALGORITHMS
});

module.exports = jwtCheck;